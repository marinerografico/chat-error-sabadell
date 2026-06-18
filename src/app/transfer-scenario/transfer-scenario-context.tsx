import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_TRANSFER,
  type AssistantMode,
  type BizumStep,
  type ChatMessage,
  type CrossSellCard,
  type IncidentStatus,
  type ResolutionPath,
  type TransferDraft,
  type TransferStep,
} from "./types";

let msgId = 0;
const nextId = () => `msg-${++msgId}`;

const CROSS_SELL: CrossSellCard[] = [
  {
    id: "beneficiary",
    title: "Añadir a María del Carmen como beneficiaria",
    subtitle: "Para enviarle dinero más rápido la próxima vez",
    cta: "Añadir",
  },
  {
    id: "travel-insurance",
    title: "Seguro de viaje",
    subtitle: "Cubre tus vacaciones por 2,50 €/mes — ideal para este pago",
    cta: "Ver seguro",
  },
  {
    id: "habit",
    title: "Programar envío mensual",
    subtitle: "Sueles enviar dinero a fin de mes — ¿lo automatizamos?",
    cta: "Configurar",
  },
];

const INITIAL_ACTIONS = [
  {
    id: "bizum",
    label: "Enviar Bizum ahora con los mismos datos",
    tag: "Solución inmediata",
    variant: "primary" as const,
  },
  {
    id: "deferred",
    label: "Te hacemos la transferencia cuando esté disponible",
    tag: "Firmas ahora · Te avisamos",
    variant: "secondary" as const,
  },
  {
    id: "manager",
    label: "Un gestor te contacta para finalizar la transferencia",
    tag: "Acompañamiento personal",
    variant: "secondary" as const,
  },
];

type TransferScenarioValue = {
  transferStep: TransferStep;
  bizumStep: BizumStep;
  incidentStatus: IncidentStatus;
  assistantMode: AssistantMode;
  resolutionPath: ResolutionPath;
  messages: ChatMessage[];
  transfer: TransferDraft;
  openTransferFlow: (origin?: string) => void;
  closeTransferFlow: () => void;
  setTransferStep: (step: TransferStep) => void;
  updateTransfer: (patch: Partial<TransferDraft>) => void;
  completeSigning: () => void;
  completeDeferredSigning: () => void;
  openBizumFromAssistant: () => void;
  closeBizumFlow: () => void;
  setBizumStep: (step: BizumStep) => void;
  completeBizum: () => void;
  handleAssistantAction: (actionId: string) => void;
  expandAssistant: () => void;
  collapseAssistant: () => void;
  minimizeAssistant: () => void;
};

const TransferScenarioContext = createContext<TransferScenarioValue | null>(null);

export function TransferScenarioProvider({ children }: { children: ReactNode }) {
  const [transferStep, setTransferStep] = useState<TransferStep>("closed");
  const [bizumStep, setBizumStep] = useState<BizumStep>("closed");
  const [incidentStatus, setIncidentStatus] = useState<IncidentStatus>("none");
  const [assistantMode, setAssistantMode] = useState<AssistantMode>("hidden");
  const [resolutionPath, setResolutionPath] = useState<ResolutionPath>("none");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [transfer, setTransfer] = useState<TransferDraft>(DEFAULT_TRANSFER);
  const originRef = useRef("Posición global");

  const pushMessage = useCallback((msg: Omit<ChatMessage, "id" | "timestamp">) => {
    setMessages((prev) => [...prev, { ...msg, id: nextId(), timestamp: Date.now() }]);
  }, []);

  const finishResolution = useCallback(
    (path: ResolutionPath, step: TransferStep, successText: string, extraAssistant?: string) => {
      setResolutionPath(path);
      setIncidentStatus("resolved");
      setTransferStep(step);
      setAssistantMode("drawer");
      pushMessage({ role: "success", content: successText });
      if (extraAssistant) {
        pushMessage({ role: "assistant", content: extraAssistant });
      }
      pushMessage({
        role: "assistant",
        content:
          "Tu necesidad de enviar dinero queda cubierta. Amplía el asistente si quieres ver sugerencias para tu viaje:",
        crossSell: CROSS_SELL,
      });
    },
    [pushMessage],
  );

  const openTransferFlow = useCallback(
    (origin = "Posición global") => {
      originRef.current = origin;
      setTransfer(DEFAULT_TRANSFER);
      setIncidentStatus("none");
      setResolutionPath("none");
      setAssistantMode("hidden");
      setMessages([]);
      setTransferStep("distributive");
      pushMessage({
        role: "event",
        content: `Has accedido al envío de dinero desde ${origin}.`,
      });
    },
    [pushMessage],
  );

  const closeTransferFlow = useCallback(() => {
    setTransferStep("closed");
    setAssistantMode("hidden");
    setIncidentStatus("none");
    setResolutionPath("none");
  }, []);

  const setTransferStepLogged = useCallback(
    (step: TransferStep) => {
      setTransferStep(step);
      if (step === "form") {
        pushMessage({ role: "event", content: "Has iniciado una transferencia nacional." });
      } else if (step === "summary-detail") {
        pushMessage({
          role: "event",
          content: `Revisando transferencia de ${transfer.amount} € a ${transfer.beneficiary}.`,
        });
      } else if (step === "signing") {
        pushMessage({ role: "event", content: "Has llegado a la firma de la operación." });
      }
    },
    [pushMessage, transfer.amount, transfer.beneficiary],
  );

  const updateTransfer = useCallback((patch: Partial<TransferDraft>) => {
    setTransfer((prev) => ({ ...prev, ...patch }));
  }, []);

  const openRelationalInTransfer = useCallback(() => {
    setTransferStep("summary-relational");
    setIncidentStatus("open");
    setAssistantMode("drawer");
    pushMessage({
      role: "event",
      content: `La firma de tu transferencia de ${transfer.amount} € no se ha completado.`,
    });
    pushMessage({
      role: "assistant",
      content: `Laura, querías enviar ${transfer.amount} € a ${transfer.beneficiary} (${transfer.concept}). El servicio de transferencias no está disponible ahora mismo, pero sigues dentro del flujo y tu cuenta no se ha cargado.\n\nElige cómo quieres resolver el envío:`,
      actions: INITIAL_ACTIONS,
    });
  }, [pushMessage, transfer.amount, transfer.beneficiary, transfer.concept]);

  const completeSigning = useCallback(() => {
    pushMessage({
      role: "event",
      content: `Firmando transferencia de ${transfer.amount} € a ${transfer.beneficiary}…`,
    });
    setTimeout(openRelationalInTransfer, 600);
  }, [pushMessage, transfer.amount, transfer.beneficiary, openRelationalInTransfer]);

  const completeDeferredSigning = useCallback(() => {
    finishResolution(
      "deferred",
      "outcome-scheduled",
      `Transferencia de ${transfer.amount} € programada. Se ejecutará cuando el servicio esté disponible.`,
      "Hemos guardado tu orden firmada. Te avisaremos en la app en cuanto se realice el cargo.",
    );
  }, [finishResolution, transfer.amount]);

  const openBizumFromAssistant = useCallback(() => {
    setResolutionPath("bizum");
    pushMessage({ role: "user", content: "Quiero la solución inmediata con Bizum." });
    pushMessage({
      role: "assistant",
      content: "Te llevo a Bizum con los mismos datos. El asistente queda disponible en la transferencia.",
    });
    setAssistantMode("minimized");
    setBizumStep("distributive");
  }, [pushMessage]);

  const completeBizum = useCallback(() => {
    setBizumStep("success");
    finishResolution(
      "bizum",
      "outcome-bizum",
      `Bizum de ${transfer.amount} € enviado a ${transfer.beneficiary}.`,
      "El dinero debería llegar en unos segundos. Hemos cerrado la incidencia de la transferencia.",
    );
    setTimeout(() => setBizumStep("closed"), 2400);
  }, [finishResolution, transfer.amount, transfer.beneficiary]);

  const closeBizumFlow = useCallback(() => {
    if (bizumStep === "success") return;
    setBizumStep("closed");
    if (incidentStatus === "open") setAssistantMode("drawer");
  }, [bizumStep, incidentStatus]);

  const chooseDeferred = useCallback(() => {
    pushMessage({
      role: "user",
      content: "Prefiero que hagáis la transferencia cuando esté disponible.",
    });
    pushMessage({
      role: "assistant",
      content:
        "Perfecto. Firma la orden ahora para dejarla preparada. Cuando el servicio vuelva, la ejecutamos automáticamente.",
    });
    setAssistantMode("minimized");
    setTransferStep("signing-deferred");
  }, [pushMessage]);

  const chooseManager = useCallback(() => {
    pushMessage({ role: "user", content: "Prefiero que me contacte un gestor." });
    finishResolution(
      "manager",
      "outcome-manager",
      "Un gestor se pondrá en contacto contigo para finalizar la transferencia.",
      "Te llamará en las próximas 2 horas laborables. Mientras tanto, el Bizum sigue disponible si lo necesitas.",
    );
  }, [pushMessage, finishResolution]);

  const handleAssistantAction = useCallback(
    (actionId: string) => {
      if (incidentStatus === "resolved" && actionId !== "bizum") return;
      switch (actionId) {
        case "bizum":
          openBizumFromAssistant();
          break;
        case "deferred":
          chooseDeferred();
          break;
        case "manager":
          chooseManager();
          break;
        default:
          break;
      }
    },
    [chooseDeferred, chooseManager, incidentStatus, openBizumFromAssistant],
  );

  const expandAssistant = useCallback(() => {
    if (incidentStatus === "open" || incidentStatus === "resolved") {
      setAssistantMode("expanded");
    }
  }, [incidentStatus]);

  const collapseAssistant = useCallback(() => {
    if (incidentStatus === "open" || incidentStatus === "resolved") {
      setAssistantMode("drawer");
    }
  }, [incidentStatus]);

  const minimizeAssistant = useCallback(() => {
    if (incidentStatus === "open" || incidentStatus === "resolved") {
      setAssistantMode("minimized");
    }
  }, [incidentStatus]);

  const value = useMemo(
    () => ({
      transferStep,
      bizumStep,
      incidentStatus,
      assistantMode,
      resolutionPath,
      messages,
      transfer,
      openTransferFlow,
      closeTransferFlow,
      setTransferStep: setTransferStepLogged,
      updateTransfer,
      completeSigning,
      completeDeferredSigning,
      openBizumFromAssistant,
      closeBizumFlow,
      setBizumStep,
      completeBizum,
      handleAssistantAction,
      expandAssistant,
      collapseAssistant,
      minimizeAssistant,
    }),
    [
      transferStep,
      bizumStep,
      incidentStatus,
      assistantMode,
      resolutionPath,
      messages,
      transfer,
      openTransferFlow,
      closeTransferFlow,
      setTransferStepLogged,
      updateTransfer,
      completeSigning,
      completeDeferredSigning,
      openBizumFromAssistant,
      closeBizumFlow,
      completeBizum,
      handleAssistantAction,
      expandAssistant,
      collapseAssistant,
      minimizeAssistant,
    ],
  );

  return (
    <TransferScenarioContext.Provider value={value}>{children}</TransferScenarioContext.Provider>
  );
}

export function useTransferScenario() {
  const ctx = useContext(TransferScenarioContext);
  if (!ctx) throw new Error("useTransferScenario must be used within TransferScenarioProvider");
  return ctx;
}
