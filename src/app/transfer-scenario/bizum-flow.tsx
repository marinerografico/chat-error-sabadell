import { AnimatePresence, motion } from "motion/react";
import FaceIDOverlay from "../components/faceid-overlay";
import { useTransferScenario } from "./transfer-scenario-context";
import {
  FormField,
  MenuHeader,
  MenuRow,
  PrimaryButton,
  TransferHeader,
  FONT_BOLD,
  FONT_REG,
} from "./ui-primitives";

const EASE = [0.4, 0, 0.2, 1] as const;

function BizumDistributive() {
  const { setBizumStep, closeBizumFlow } = useTransferScenario();
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <MenuHeader title="Bizum" onClose={closeBizumFlow} />
      <div className="flex-1 overflow-y-auto px-[16px]">
        <MenuRow label="Enviar dinero" onClick={() => setBizumStep("form")} />
        <MenuRow label="Solicitar dinero" />
        <MenuRow label="Dividir un gasto" />
        <MenuRow label="Donar" />
      </div>
    </div>
  );
}

function BizumForm() {
  const { transfer, setBizumStep, closeBizumFlow } = useTransferScenario();
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <TransferHeader title="Enviar Bizum" onBack={() => setBizumStep("distributive")} />
      <div className="flex-1 overflow-y-auto px-[16px] py-[16px] flex flex-col gap-[16px]">
        <FormField label="Teléfono o contacto" value={transfer.beneficiary} readOnly />
        <FormField label="Importe" value={transfer.amount} readOnly />
        <FormField label="Concepto" value={transfer.concept} readOnly />
        <p className={`${FONT_REG} text-[14px] text-[#646464]`}>
          Datos recuperados de tu transferencia pendiente.
        </p>
      </div>
      <div className="shrink-0 p-[16px] bg-white border-t border-[#e0e0e0]">
        <PrimaryButton onClick={() => setBizumStep("signing")}>Continuar</PrimaryButton>
      </div>
    </div>
  );
}

function BizumSigning() {
  const { completeBizum } = useTransferScenario();
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white relative">
      <TransferHeader title="Firmar Bizum" />
      <div className="flex-1 flex items-center justify-center px-[16px]">
        <p className={`${FONT_REG} text-[16px] text-[#646464] text-center`}>Confirma con Face ID</p>
      </div>
      <AnimatePresence>
        <FaceIDOverlay onSuccess={completeBizum} />
      </AnimatePresence>
    </div>
  );
}

function BizumSuccess() {
  const { transfer } = useTransferScenario();
  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white items-center justify-center px-[16px] gap-[12px]">
      <div className="size-[64px] rounded-full bg-[#e8f5e9] flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className={`${FONT_BOLD} text-[20px] text-black`}>Bizum enviado</p>
      <p className={`${FONT_REG} text-[16px] text-[#646464] text-center`}>
        {transfer.amount} € a {transfer.beneficiary}
      </p>
    </div>
  );
}

export default function BizumFlow() {
  const { bizumStep } = useTransferScenario();
  const open = bizumStep !== "closed";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="bizum-flow"
          className="absolute inset-0 z-[60] bg-white flex flex-col"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.32, ease: EASE }}
        >
          {bizumStep === "distributive" && <BizumDistributive />}
          {bizumStep === "form" && <BizumForm />}
          {bizumStep === "signing" && <BizumSigning />}
          {bizumStep === "success" && <BizumSuccess />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
