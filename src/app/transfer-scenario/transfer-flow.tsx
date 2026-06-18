import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTransferScenario } from "./transfer-scenario-context";
import { MinimizedTransferBubble, RelationalDrawer } from "./relational-panel";
import { SIGNATURE_CODE } from "./types";
import {
  DetailRow,
  FormField,
  MenuHeader,
  MenuRow,
  PrimaryButton,
  SectionTitle,
  TransferHeader,
  FONT_BOLD,
  FONT_REG,
  FONT_SB,
} from "./ui-primitives";

const EASE = [0.4, 0, 0.2, 1] as const;

const MENU_ITEMS = [
  { label: "Transferencia nacional", action: "form" as const },
  { label: "Transferencia internacional" },
  { label: "Órdenes permanentes" },
  { label: "Enviar dinero con Bizum" },
  { label: "Traspaso" },
  { label: "Traspaso de cuenta a tarjeta" },
  { label: "Anulación y solicitud de devolución" },
  { label: "Cash Transfer" },
];

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-[10px] border-b border-[#f0f0f0]">
      <div className="flex items-center gap-[6px]">
        <span className={`${FONT_REG} text-[14px] text-[#646464]`}>{label}</span>
      </div>
      <span className={`${FONT_BOLD} text-[14px] text-black`}>{value}</span>
    </div>
  );
}

function TransferSummaryBody() {
  const { transfer } = useTransferScenario();
  return (
    <div className="px-[16px] py-[12px]">
      <InfoRow label="Comisiones" value="0,00 €" />
      <p className={`${FONT_SB} text-[12px] text-[#006dff] tracking-wide mt-[16px] mb-[8px]`}>
        DETALLES DE LA OPERACIÓN
      </p>
      <DetailRow label="Tipo de transferencia" value="Común" />
      <DetailRow label="Cuenta de cargo" value={transfer.accountName} />
      <DetailRow label="Saldo" value={`${transfer.balance} €`} />
      <DetailRow label="Importe" value={`${transfer.amount} €`} bold />
      <DetailRow label="Cuenta destino" value={transfer.iban} />
      <DetailRow label="Beneficiario" value={transfer.beneficiary} />
      <DetailRow label="Concepto" value={transfer.concept} />
    </div>
  );
}

function OutcomeHero({
  tone,
  title,
  subtitle,
}: {
  tone: "scheduled" | "bizum" | "manager";
  title: string;
  subtitle: string;
}) {
  const colors = {
    scheduled: { bg: "#e8f2ff", border: "#90caf9", icon: "#006dff" },
    bizum: { bg: "#e8f5e9", border: "#a5d6a7", icon: "#2e7d32" },
    manager: { bg: "#f3e5f5", border: "#ce93d8", icon: "#7b1fa2" },
  }[tone];

  return (
    <div
      className="mx-[16px] mt-[8px] mb-[16px] rounded-[12px] px-[16px] py-[16px] flex gap-[14px] items-start"
      style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
    >
      <div
        className="size-[44px] rounded-full flex items-center justify-center shrink-0 bg-white"
        style={{ color: colors.icon }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className={`${FONT_BOLD} text-[17px] text-black leading-[24px]`}>{title}</p>
        <p className={`${FONT_REG} text-[14px] text-[#646464] leading-[20px] mt-[4px]`}>{subtitle}</p>
      </div>
    </div>
  );
}

function ScheduledOutcomeBody() {
  const { transfer } = useTransferScenario();
  return (
    <>
      <OutcomeHero
        tone="scheduled"
        title="Transferencia programada"
        subtitle="Se ejecutará automáticamente cuando el servicio esté disponible. Te avisaremos."
      />
      <div className="px-[16px] pb-[12px]">
        <p className={`${FONT_SB} text-[12px] text-[#006dff] tracking-wide mb-[8px]`}>RESUMEN</p>
        <DetailRow label="Estado" value="Pendiente de ejecución" bold />
        <DetailRow label="Importe" value={`${transfer.amount} €`} bold />
        <DetailRow label="Beneficiario" value={transfer.beneficiary} />
        <DetailRow label="Cuenta destino" value={transfer.iban} />
        <DetailRow label="Concepto" value={transfer.concept} />
        <DetailRow label="Cuenta de cargo" value={transfer.accountName} />
        <DetailRow label="Aviso" value="Push + notificación en app" />
      </div>
    </>
  );
}

function BizumOutcomeBody() {
  const { transfer } = useTransferScenario();
  return (
    <>
      <OutcomeHero
        tone="bizum"
        title="Bizum enviado"
        subtitle="El dinero debería llegar en unos segundos. Operación completada."
      />
      <div className="px-[16px] pb-[12px]">
        <p className={`${FONT_SB} text-[12px] text-[#006dff] tracking-wide mb-[8px]`}>RESUMEN</p>
        <DetailRow label="Estado" value="Completado" bold />
        <DetailRow label="Importe" value={`${transfer.amount} €`} bold />
        <DetailRow label="Destinatario" value={transfer.beneficiary} />
        <DetailRow label="Concepto" value={transfer.concept} />
        <DetailRow label="Referencia" value="BZ-2026-04821" />
      </div>
    </>
  );
}

function ManagerOutcomeBody() {
  const { transfer } = useTransferScenario();
  return (
    <>
      <OutcomeHero
        tone="manager"
        title="Gestor asignado"
        subtitle="Te contactará en las próximas 2 horas para cerrar la transferencia."
      />
      <div className="px-[16px] pb-[12px]">
        <p className={`${FONT_SB} text-[12px] text-[#006dff] tracking-wide mb-[8px]`}>RESUMEN</p>
        <DetailRow label="Estado" value="En gestión" bold />
        <DetailRow label="Importe pendiente" value={`${transfer.amount} €`} bold />
        <DetailRow label="Beneficiario" value={transfer.beneficiary} />
        <DetailRow label="Gestor" value="Carlos Méndez" />
        <DetailRow label="Contacto" value="En las próximas 2 h" />
      </div>
    </>
  );
}

function FlowShell({
  children,
  title,
  showDrawer,
  footer,
}: {
  children: React.ReactNode;
  title: string;
  showDrawer?: boolean;
  footer?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white relative">
      <TransferHeader title={title} />
      <div className="flex-1 min-h-0 overflow-y-auto">{children}</div>
      {footer}
      {showDrawer && <RelationalDrawer />}
      <MinimizedTransferBubble />
    </div>
  );
}

function SummaryDetailStep() {
  const { setTransferStep } = useTransferScenario();
  return (
    <FlowShell
      title="Transferencia nacional"
      footer={
        <div className="shrink-0 p-[16px] bg-white border-t border-[#e0e0e0]">
          <PrimaryButton onClick={() => setTransferStep("signing")}>Continuar</PrimaryButton>
        </div>
      }
    >
      <TransferSummaryBody />
    </FlowShell>
  );
}

function SummaryRelationalStep() {
  return (
    <FlowShell title="Transferencia nacional" showDrawer>
      <TransferSummaryBody />
    </FlowShell>
  );
}

function OutcomeStep({ variant }: { variant: "scheduled" | "bizum" | "manager" }) {
  const { closeTransferFlow, expandAssistant, assistantMode } = useTransferScenario();
  const titles = {
    scheduled: "Transferencia programada",
    bizum: "Bizum enviado",
    manager: "Gestión con tu gestor",
  };

  return (
    <FlowShell
      title={titles[variant]}
      showDrawer
      footer={
        <div className="shrink-0 p-[16px] bg-white border-t border-[#e0e0e0] flex flex-col gap-[10px]">
          {assistantMode === "minimized" && (
            <button
              type="button"
              onClick={expandAssistant}
              className={`${FONT_REG} text-[14px] text-[#006dff] text-center cursor-pointer py-[8px]`}
            >
              Ver sugerencias del asistente
            </button>
          )}
          <PrimaryButton onClick={closeTransferFlow}>Finalizar</PrimaryButton>
        </div>
      }
    >
      {variant === "scheduled" && <ScheduledOutcomeBody />}
      {variant === "bizum" && <BizumOutcomeBody />}
      {variant === "manager" && <ManagerOutcomeBody />}
    </FlowShell>
  );
}

function SigningStep({ onSuccess }: { onSuccess: () => void }) {
  const { transfer } = useTransferScenario();
  const [filled, setFilled] = useState(false);
  const digits = SIGNATURE_CODE.split("");

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <TransferHeader title="Transferencia nacional" />
      <div className="flex-1 overflow-y-auto px-[16px] py-[16px]">
        <p className={`${FONT_SB} text-[18px] text-black text-center mb-[8px]`}>Clave de Firma Digital</p>
        <p className={`${FONT_REG} text-[14px] text-[#646464] text-center leading-[20px] mb-[24px]`}>
          Presiona unos segundos sobre ella y arrástrala al recuadro inferior para firmar
        </p>
        <button
          type="button"
          onClick={() => setFilled(true)}
          className="flex justify-center gap-[10px] mb-[12px] w-full cursor-pointer"
        >
          {digits.map((d, i) => (
            <span
              key={i}
              className={`size-[40px] rounded-full border-2 flex items-center justify-center ${FONT_BOLD} text-[18px] text-[#006dff] border-[#006dff] bg-[#f0f7ff]`}
            >
              {d}
            </span>
          ))}
        </button>
        <div className="border-t border-[#e0e0e0] pt-[12px] mb-[20px]">
          <DetailRow label="Importe" value={`${transfer.amount} €`} bold />
          <DetailRow label="Beneficiario" value={transfer.beneficiary} />
        </div>
        <div className="flex justify-center gap-[8px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`size-[14px] rounded-full border-2 ${
                filled ? "bg-[#006dff] border-[#006dff]" : "border-[#bdbdbd]"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="shrink-0 p-[16px] border-t border-[#e0e0e0]">
        <PrimaryButton disabled={!filled} onClick={onSuccess}>
          Firmar
        </PrimaryButton>
      </div>
    </div>
  );
}

function DistributiveStep() {
  const { setTransferStep, closeTransferFlow } = useTransferScenario();
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <MenuHeader title="Transferencias" onClose={closeTransferFlow} />
      <div className="flex-1 overflow-y-auto px-[16px]">
        {MENU_ITEMS.map((item) => (
          <MenuRow
            key={item.label}
            label={item.label}
            onClick={item.action ? () => setTransferStep(item.action!) : undefined}
          />
        ))}
      </div>
    </div>
  );
}

function FormStep() {
  const { transfer, updateTransfer, setTransferStep } = useTransferScenario();
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <TransferHeader title="Transferencia nacional" onBack={() => setTransferStep("distributive")} />
      <div className="flex-1 overflow-y-auto px-[16px] py-[16px]">
        <SectionTitle>Ordenante</SectionTitle>
        <FormField label="" value={transfer.ordenante} readOnly />
        <div className="mt-[20px]">
          <SectionTitle>Destino</SectionTitle>
          <div className="flex flex-col gap-[14px] mt-[12px]">
            <FormField
              label="Beneficiario"
              value={transfer.beneficiary}
              onChange={(v) => updateTransfer({ beneficiary: v })}
            />
            <FormField label="IBAN" value={transfer.iban} onChange={(v) => updateTransfer({ iban: v })} />
          </div>
        </div>
        <div className="mt-[20px]">
          <SectionTitle>Detalles del pago</SectionTitle>
          <div className="flex flex-col gap-[14px] mt-[12px]">
            <FormField
              label="Importe"
              value={transfer.amount}
              onChange={(v) => updateTransfer({ amount: v })}
              suffix={
                <span className={`absolute right-[12px] top-1/2 -translate-y-1/2 ${FONT_REG} text-[16px] text-[#646464]`}>
                  €
                </span>
              }
            />
            <FormField
              label="Concepto (opcional)"
              value={transfer.concept}
              onChange={(v) => updateTransfer({ concept: v })}
            />
          </div>
        </div>
      </div>
      <div className="shrink-0 p-[16px] border-t border-[#e0e0e0]">
        <PrimaryButton onClick={() => setTransferStep("summary-detail")}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

export default function TransferFlow() {
  const { transferStep, completeSigning, completeDeferredSigning } = useTransferScenario();
  const open = transferStep !== "closed";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="transfer-flow"
          className="absolute inset-0 z-[55] bg-white flex flex-col"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.32, ease: EASE }}
        >
          {transferStep === "distributive" && <DistributiveStep />}
          {transferStep === "form" && <FormStep />}
          {transferStep === "summary-detail" && <SummaryDetailStep />}
          {transferStep === "summary-relational" && <SummaryRelationalStep />}
          {transferStep === "outcome-scheduled" && <OutcomeStep variant="scheduled" />}
          {transferStep === "outcome-bizum" && <OutcomeStep variant="bizum" />}
          {transferStep === "outcome-manager" && <OutcomeStep variant="manager" />}
          {transferStep === "signing" && <SigningStep onSuccess={completeSigning} />}
          {transferStep === "signing-deferred" && <SigningStep onSuccess={completeDeferredSigning} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
