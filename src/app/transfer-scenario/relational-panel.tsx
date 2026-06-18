import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTransferScenario } from "./transfer-scenario-context";
import type { ChatAction, ChatMessage, CrossSellCard } from "./types";
import { VaneIcon, VaneIconBubble } from "./vane-icon";
import { FONT_BOLD, FONT_REG, FONT_SB } from "./ui-primitives";

const EASE = [0.4, 0, 0.2, 1] as const;

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

function TaggedAction({ action, onClick }: { action: ChatAction; onClick: () => void }) {
  const isPrimary = action.variant === "primary" || action.id === "bizum";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-[12px] px-[14px] py-[12px] cursor-pointer border ${
        isPrimary ? "bg-[#006dff] border-[#006dff] text-white" : "bg-white border-[#e0e0e0] text-black"
      }`}
    >
      {action.tag && (
        <span
          className={`inline-block rounded-[4px] px-[8px] py-[2px] mb-[6px] ${FONT_SB} text-[11px] leading-[14px] ${
            isPrimary ? "bg-white/20 text-white" : "bg-[#e8f4ff] text-[#006dff]"
          }`}
        >
          {action.tag}
        </span>
      )}
      <span className={`block ${FONT_REG} text-[15px] leading-[22px]`}>{action.label}</span>
    </button>
  );
}

function SuccessCheck({ content }: { content: string }) {
  return (
    <div className="flex gap-[12px] items-start bg-[#e8f5e9] border border-[#a5d6a7] rounded-[12px] px-[14px] py-[12px] my-[8px]">
      <div className="size-[24px] rounded-full bg-[#2e7d32] flex items-center justify-center shrink-0 mt-[2px]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
      <p className={`${FONT_REG} text-[15px] text-[#1b5e20] leading-[22px]`}>{content}</p>
    </div>
  );
}

function CrossSellBlock({ cards }: { cards: CrossSellCard[] }) {
  return (
    <div className="flex flex-col gap-[10px] mt-[12px]">
      <p className={`${FONT_SB} text-[13px] text-[#646464]`}>También te puede interesar</p>
      {cards.map((card) => (
        <div
          key={card.id}
          className="rounded-[12px] border border-[#e0e0e0] bg-white px-[14px] py-[12px] flex items-center justify-between gap-[12px]"
        >
          <div className="min-w-0">
            <p className={`${FONT_SB} text-[14px] text-black leading-[20px]`}>{card.title}</p>
            <p className={`${FONT_REG} text-[13px] text-[#646464] leading-[18px]`}>{card.subtitle}</p>
          </div>
          <button type="button" className={`shrink-0 ${FONT_REG} text-[14px] text-[#006dff] cursor-pointer`}>
            {card.cta}
          </button>
        </div>
      ))}
    </div>
  );
}

function ChatContent({ onAction }: { onAction: (id: string) => void }) {
  const { messages } = useTransferScenario();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto px-[16px] py-[12px] min-h-0">
      {messages
        .filter((m) => m.role !== "event" || m.content.includes("firma") || m.content.includes("Firmando"))
        .map((m) => (
          <MessageItem key={m.id} message={m} onAction={onAction} />
        ))}
    </div>
  );
}

function MessageItem({ message, onAction }: { message: ChatMessage; onAction: (id: string) => void }) {
  if (message.role === "event") {
    return (
      <p className={`${FONT_REG} text-[12px] text-[#919191] text-center py-[4px] leading-[16px]`}>
        {message.content} · {formatTime(message.timestamp)}
      </p>
    );
  }
  if (message.role === "success") return <SuccessCheck content={message.content} />;
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} py-[4px]`}>
      <div
        className={`max-w-[92%] rounded-[14px] px-[14px] py-[10px] ${
          isUser ? "bg-[#006dff] text-white" : "bg-[#f5f5f5] text-black"
        }`}
      >
        {!isUser && <p className={`${FONT_SB} text-[11px] text-[#006dff] mb-[4px]`}>VANE</p>}
        <p className={`${FONT_REG} text-[15px] leading-[22px] whitespace-pre-wrap`}>{message.content}</p>
        {message.actions && message.actions.length > 0 && (
          <div className="flex flex-col gap-[8px] mt-[12px]">
            {message.actions.map((a) => (
              <TaggedAction key={a.id} action={a} onClick={() => onAction(a.id)} />
            ))}
          </div>
        )}
        {message.crossSell && <CrossSellBlock cards={message.crossSell} />}
        <p className={`${FONT_REG} text-[11px] mt-[6px] ${isUser ? "text-white/70" : "text-[#919191]"}`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
}

function DrawerHeader({
  expanded,
  resolved,
  onExpand,
  onCollapse,
  onMinimize,
}: {
  expanded: boolean;
  resolved: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  onMinimize: () => void;
}) {
  return (
    <div className="shrink-0 px-[16px] pt-[8px] pb-[12px] border-b border-[#f0f0f0] bg-white rounded-t-[20px]">
      <div className="w-[40px] h-[4px] bg-[#bdbdbd] rounded-full mx-auto mb-[14px]" />
      <div className="flex items-center gap-[10px]">
        <div className="shrink-0 shadow-[0_4px_12px_rgba(0,109,255,0.25)] rounded-full">
          <VaneIcon size={40} alive />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`${FONT_BOLD} text-[17px] text-black leading-[22px]`}>
            {resolved ? "Envío resuelto" : "Hola Laura"}
          </p>
          <p className={`${FONT_REG} text-[13px] text-[#646464]`}>
            {resolved ? "Puedes ampliar para ver sugerencias" : "Te ayudo dentro de tu transferencia"}
          </p>
        </div>
        <div className="flex items-center gap-[4px] shrink-0">
          {expanded ? (
            <button
              type="button"
              onClick={onCollapse}
              aria-label="Reducir"
              className="size-[36px] flex items-center justify-center rounded-full bg-[#f5f5f5] cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M7 14l5-5 5 5" stroke="#646464" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={onExpand}
              aria-label="Ampliar"
              className="size-[36px] flex items-center justify-center rounded-full bg-[#e8f2ff] cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"
                  stroke="#006dff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
          <button
            type="button"
            onClick={onMinimize}
            aria-label="Minimizar"
            className="size-[36px] flex items-center justify-center rounded-full bg-[#f5f5f5] cursor-pointer"
          >
            <svg width="18" height="4" viewBox="0 0 18 4" fill="none">
              <rect width="18" height="4" rx="2" fill="#646464" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function RelationalDrawer() {
  const {
    assistantMode,
    incidentStatus,
    handleAssistantAction,
    expandAssistant,
    collapseAssistant,
    minimizeAssistant,
  } = useTransferScenario();

  const visible = assistantMode === "drawer" || assistantMode === "expanded";
  const expanded = assistantMode === "expanded";
  const resolved = incidentStatus === "resolved";

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="relational-layer"
        className={`absolute inset-0 z-[10] flex flex-col ${expanded ? "" : "justify-end"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        {!expanded && (
          <button
            type="button"
            aria-label="Cerrar drawer"
            className="absolute inset-0 bg-black/35 cursor-default"
            onClick={minimizeAssistant}
          />
        )}

        <motion.div
          className={`flex flex-col bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)] ${
            expanded ? "absolute inset-0 rounded-none" : "relative rounded-t-[20px] max-h-[58%]"
          }`}
          initial={{ y: expanded ? 0 : "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.34, ease: EASE }}
        >
          <DrawerHeader
            expanded={expanded}
            resolved={resolved}
            onExpand={expandAssistant}
            onCollapse={collapseAssistant}
            onMinimize={minimizeAssistant}
          />
          {!resolved && (
            <div className="mx-[16px] mt-[10px] rounded-[8px] bg-[#fff4e5] border border-[#ffcc80] px-[12px] py-[10px] flex gap-[10px] items-start shrink-0">
              <div className="size-[20px] rounded-full bg-[#ef6c00] flex items-center justify-center shrink-0">
                <span className="text-white text-[12px] font-bold">!</span>
              </div>
              <p className={`${FONT_REG} text-[13px] text-[#bf360c] leading-[18px]`}>
                No hemos podido completar la transferencia. Tu cuenta no se ha cargado.
              </p>
            </div>
          )}
          <ChatContent onAction={handleAssistantAction} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function MinimizedTransferBubble() {
  const { expandAssistant, assistantMode, incidentStatus, transferStep, messages } =
    useTransferScenario();
  const last = [...messages].reverse().find((m) => m.role === "assistant" || m.role === "success");
  const inFlow = transferStep !== "closed";

  if (assistantMode !== "minimized" || !inFlow) return null;
  if (incidentStatus === "none") return null;

  return (
    <motion.button
      type="button"
      onClick={expandAssistant}
      className="absolute bottom-[16px] right-[16px] z-[20] flex items-center gap-[8px] bg-[#006dff] text-white rounded-[100px] pl-[5px] pr-[14px] py-[5px] shadow-[0_4px_20px_rgba(0,109,255,0.4)] cursor-pointer max-w-[calc(100%-32px)]"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="shrink-0">
        <VaneIconBubble size={36} />
      </div>
      <span className={`${FONT_SB} text-[12px] truncate`}>{last?.content.slice(0, 34) ?? "VANE"}…</span>
    </motion.button>
  );
}
