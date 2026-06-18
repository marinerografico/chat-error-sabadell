import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import { useNavigation, type CardId } from "../navigation";
import { HideableAmount, useBalanceVisibility } from "../balance-visibility";
import svgPaths from "../../imports/CreditCard/svg-48ngxzs1wj";
import svgPathsDebit from "../../imports/DebitCard/svg-pa6huz99nf";
import imgNetflix from "../../imports/CreditCard/a85730f79ffc1522d1ba57b2ea7a817cbe5e77d7.png";
import imgUberEats from "../../imports/CreditCard/c6128aafcd5c61c40b69f2066cc110dc6b8c45fe.png";
import imgMercadona from "../../imports/CreditCard/be442b23a55a42b12fb5b2902ce0ec137063a95a.png";
import imgGlovo from "../../imports/CreditCard/958180df1c5874df667ec19d5bd70d5df4f979fc.png";
import imgRenfe from "../../imports/CreditCard/61814fa7654135f8d3c2e9bb3a2eb19ea12173af.png";
import imgZara from "../../imports/CuentaMain/ffba026dda1342c0cac019af1f2bd66d8a74aa15.png";
import {
  CARDS_LIST,
  HOLDER,
  moneyParts,
  type Card,
  type CardAvatar,
  type CardMovement,
  type QuickActionKey,
} from "../data/cards";

const CARD_W = 310;
const CARD_GAP = 8;
const CARD_STRIDE = CARD_W + CARD_GAP;
const EASE = [0.4, 0, 0.2, 1] as const;
const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";
const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

// Importe con número↔"••••" (respeta el ojo global).
function Money({
  value,
  signed,
  intClass,
  decClass,
  currencyClass,
}: {
  value: number;
  signed: boolean;
  intClass: string;
  decClass: string;
  currencyClass: string;
}) {
  const { int, dec } = moneyParts(value);
  const sign = signed ? (value >= 0 ? "+" : "-") : "";
  return (
    <HideableAmount dotsClassName={intClass}>
      <p className={intClass}>{`${sign}${int}`}</p>
      <p className={decClass}>{dec}</p>
      <span className="content-stretch flex items-baseline pl-[4px] relative shrink-0">
        <p className={currencyClass}>€</p>
      </span>
    </HideableAmount>
  );
}

// ── Header ────────────────────────────────────────────────────────────
function EyeButton() {
  const { hidden, toggle } = useBalanceVisibility();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={hidden ? "Mostrar saldos" : "Ocultar saldos"}
      aria-pressed={hidden}
      className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer"
    >
      <div className="content-stretch flex flex-col items-center py-[1.93px] relative shrink-0 size-[24px]">
        <div className="h-[17.075px] relative shrink-0 w-[20px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.0752">
            <path d={svgPaths.pbcaae00} fill="var(--fill-0, #006DFF)" />
            {hidden && (
              <>
                <line x1="2" y1="1.5" x2="18" y2="15.5" stroke="white" strokeWidth="3.4" strokeLinecap="round" />
                <line x1="2" y1="1.5" x2="18" y2="15.5" stroke="#006DFF" strokeWidth="1.7" strokeLinecap="round" />
              </>
            )}
          </svg>
        </div>
      </div>
    </button>
  );
}

function HeaderBar() {
  const { navigate, goBack } = useNavigation();
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full">
      <div className="h-[64px] relative w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
            <button
              type="button"
              onClick={goBack}
              aria-label="Volver"
              className="content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer"
            >
              <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0">
                <div className="h-[20.002px] relative shrink-0 w-[10px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
                    <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #006DFF)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative">
              <p className={`[word-break:break-word] ${FONT_BOLD} leading-[20px] relative text-[14px] text-black text-center`}>Tarjetas</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
              <EyeButton />
              <button
                type="button"
                onClick={() => navigate("ayuda")}
                aria-label="Centro de ayuda"
                className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer"
              >
                <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0">
                  <div className="relative shrink-0 size-[20px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p37f41b00} fill="var(--fill-0, #006DFF)" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Card visual ───────────────────────────────────────────────────────
function CardVisual({ card }: { card: Card }) {
  return (
    <div
      className="relative rounded-[16px] shrink-0 w-[310px] h-[196px]"
      style={{ backgroundColor: card.bg, boxShadow: "0px 2px 8px -1px rgba(0,0,0,0.18)" }}
    >
      <div className="absolute content-stretch flex flex-col inset-0 items-start justify-between pl-[12px] pr-[16px] py-[16px]">
        {/* Top: logo + lock */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start overflow-clip pl-[4px] relative shrink-0">
            <div className="h-[16px] relative shrink-0 w-[80.369px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.3694 16">
                <path clipRule="evenodd" d={svgPaths.pc3ec900} fill="var(--fill-0, white)" fillRule="evenodd" />
                <path d={svgPaths.p1b013f80} fill="var(--fill-0, white)" />
              </svg>
            </div>
          </div>
          <div className="h-[31px] relative shrink-0 w-[51px]" aria-label="Tarjeta bloqueada" role="img">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 31">
              <rect fill="#006DFF" height="31" rx="15.5" width="51" />
              <path d={svgPaths.p7916f00} fill="white" />
              <path d={svgPaths.p2f99f640} fill="#006DF2" />
            </svg>
          </div>
        </div>
        {/* Center: type + visa, holder, number */}
        <div className="content-stretch flex flex-col gap-[12px] items-start pl-[4px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className={`${FONT_REG} leading-[20px] text-[14px] text-right text-white whitespace-nowrap`}>{card.type}</p>
            <div className="h-[20px] relative shrink-0 w-[35px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 20">
                <path d={svgPaths.p775c700} fill="white" />
                <path clipRule="evenodd" d={svgPaths.p3a3a1200} fill="white" fillRule="evenodd" />
                <path d={svgPaths.p39379350} fill="white" />
                <path d={svgPaths.p140ce800} fill="white" />
              </svg>
            </div>
          </div>
          <p className={`[word-break:break-word] ${FONT_BOLD} leading-[20px] max-w-[280px] overflow-hidden text-[14px] text-ellipsis text-left text-white whitespace-nowrap`}>{HOLDER}</p>
          <div className={`content-stretch flex ${FONT_BOLD} gap-[4px] items-center leading-[20px] text-[14px] text-left text-white`}>
            <p className="shrink-0 w-[19px]">••••</p>
            <p className="shrink-0 whitespace-nowrap">{card.masked.replace(/[•]/g, "").trim() || "4521"}</p>
          </div>
        </div>
        {/* Bottom: ver datos */}
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] relative shrink-0">
          <p className={`${FONT_REG} leading-[20px] text-[14px] text-center text-white whitespace-nowrap`}>Ver datos</p>
        </div>
      </div>
    </div>
  );
}

function Dots({ count, active, onSelect }: { count: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Ir a la tarjeta ${i + 1}`}
          aria-current={i === active}
          className={`shrink-0 cursor-pointer rounded-[999px] transition-[width,background-color] duration-300 ease-out ${
            i === active ? "bg-[#006dff] h-[8px] w-[12px]" : "bg-[#919191] h-[8px] w-[8px]"
          }`}
        />
      ))}
      {/* indicador "+" (hay más tarjetas para añadir) */}
      <div className="relative shrink-0 size-[8px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 8 8">
          <path d="M4 1.5v5M1.5 4h5" stroke="#919191" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function Arrows({ onPrev, onNext, atStart, atEnd }: { onPrev: () => void; onNext: () => void; atStart: boolean; atEnd: boolean }) {
  const btn = (dir: "prev" | "next", disabled: boolean) => (
    <button
      type="button"
      onClick={dir === "prev" ? onPrev : onNext}
      disabled={disabled}
      aria-label={dir === "prev" ? "Tarjeta anterior" : "Tarjeta siguiente"}
      className="bg-white max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[50px] shrink-0 size-[32px] cursor-pointer disabled:cursor-default"
    >
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
        <div className={`content-stretch flex items-start ${dir === "prev" ? "pl-[6px] pr-[8px]" : "pl-[8px] pr-[6px]"} py-[2px] relative shrink-0`}>
          <div className="h-[20.002px] relative shrink-0 w-[10px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
              <path clipRule="evenodd" d={dir === "prev" ? svgPaths.p11976000 : svgPaths.p10f18d00} fill={disabled ? "#9ECCFF" : "#006DFF"} fillRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid inset-0 pointer-events-none rounded-[50px]" style={{ borderColor: disabled ? "#9eccff" : "#006dff" }} />
    </button>
  );
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[12px] items-center pr-[16px] right-0">
      {btn("prev", atStart)}
      {btn("next", atEnd)}
    </div>
  );
}

// ── Warning pill (solo crédito restringido) ───────────────────────────
function WarningPill() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[16px] py-[10px] relative w-full">
        <div className="bg-white flex-[1_0_0] relative rounded-[16px]">
          <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
            <div className="flex-[1_0_0] min-w-px relative">
              <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
                <div className="content-stretch flex items-center justify-center relative rounded-[78px] shrink-0 size-[40px]">
                  <div className="bg-[#fbca8b] content-stretch flex items-center justify-center p-[8px] relative rounded-[78px] shrink-0 size-[40px]">
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p26e2e200} fill="var(--fill-0, black)" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
                  <p className={`[word-break:break-word] ${FONT_REG} leading-[24px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis w-[min-content]`}>Cerca de alcanzar el límite mensual</p>
                  <p className={`[word-break:break-word] ${FONT_REG} leading-[27px] relative shrink-0 text-[#0163e8] text-[18px]`}>Modificar límites de compra</p>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.1),0px_2px_6px_-0.5px_rgba(0,0,0,0.1)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Quick actions ─────────────────────────────────────────────────────
const QUICK_ICONS: Record<QuickActionKey, { label: string; render: () => ReactNode }> = {
  formaPago: {
    label: "Forma de pago",
    render: () => (
      <div className="relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9951 20">
          <path d={svgPaths.p78e5600} fill="var(--fill-0, #006DFF)" />
        </svg>
      </div>
    ),
  },
  mostrarPin: {
    label: "Mostrar PIN",
    render: () => (
      <div className="h-[20px] relative shrink-0 w-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p22e62600} fill="var(--fill-0, #006DFF)" />
        </svg>
      </div>
    ),
  },
  configurar: {
    label: "Configurar límites",
    render: () => (
      <div className="relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p16ccceb2} fill="var(--fill-0, #006DFF)" />
        </svg>
      </div>
    ),
  },
  instantMoney: {
    label: "Instant money",
    render: () => (
      <div className="relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0003">
          <path d={svgPathsDebit.p364cb5f0} fill="var(--fill-0, #006DFF)" />
        </svg>
      </div>
    ),
  },
  masOpciones: {
    label: "Más opciones",
    render: () => (
      <div className="h-[20px] relative shrink-0 w-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 20">
          <path d={svgPaths.p33db4e00} fill="var(--fill-0, #006DFF)" />
        </svg>
      </div>
    ),
  },
};

function QuickActions({ actions }: { actions: QuickActionKey[] }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[12px] relative shrink-0 w-full">
      {actions.map((key) => {
        const a = QUICK_ICONS[key];
        return (
          <div key={key} className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative">
            <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]">
                <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
                {a.render()}
              </div>
              <p className={`[word-break:break-word] ${FONT_REG} leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]`}>{a.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Apple wallet button ───────────────────────────────────────────────
function AppleWallet() {
  return (
    <div className="px-[16px] w-full">
      <div className="bg-black h-[48px] relative rounded-[8px] w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[8px] relative size-full">
            <svg width="20" height="22" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.75.83-1.96 1.47-3.13 1.38-.14-1.1.43-2.27 1.1-3 .76-.82 2.05-1.43 3.15-1.36zM20.5 17.36c-.57 1.3-.85 1.88-1.58 3.03-1.02 1.6-2.46 3.6-4.24 3.6-1.58.02-1.99-1.03-4.14-1.02-2.15.01-2.6 1.04-4.18 1.02-1.78-.02-3.14-1.8-4.16-3.4-2.86-4.5-3.16-9.77-1.4-12.57 1.26-2 3.24-3.17 5.1-3.17 1.9 0 3.1 1.04 4.67 1.04 1.53 0 2.46-1.04 4.66-1.04 1.66 0 3.42.9 4.68 2.46-4.11 2.25-3.44 8.11.33 9.99z" />
            </svg>
            <p className={`${FONT_REG} leading-[24px] text-[18px] text-center text-white whitespace-nowrap`}>Añadir a Cartera de Apple</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Disponible / Gastado + Liquidación (solo crédito) ─────────────────
function DisponibleGastado({ card }: { card: Card }) {
  if (card.available === undefined || card.spent === undefined) return null;
  const segments = 5;
  const filled = Math.round((card.progress ?? 0) * segments);
  return (
    <div className="px-[16px] w-full">
      <div className="bg-white relative rounded-[16px] w-full">
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          {/* Disponible / Gastado */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className={`${FONT_REG} leading-[24px] text-[16px] text-black`}>Disponible</p>
                <div className="content-stretch flex items-baseline relative shrink-0">
                  <Money
                    value={card.available}
                    signed={false}
                    intClass={`${FONT_BOLD} leading-[24px] text-[16px] text-black text-right whitespace-nowrap`}
                    decClass={`${FONT_BOLD} leading-[20px] text-[14px] text-black whitespace-nowrap`}
                    currencyClass={`${FONT_BOLD} leading-[20px] text-[14px] text-black whitespace-nowrap`}
                  />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-end relative shrink-0">
                <p className={`${FONT_REG} leading-[24px] text-[16px] text-black`}>Gastado</p>
                <div className="content-stretch flex items-baseline relative shrink-0">
                  <Money
                    value={card.spent}
                    signed={false}
                    intClass={`${FONT_REG} leading-[24px] text-[16px] text-black text-right whitespace-nowrap`}
                    decClass={`${FONT_REG} leading-[20px] text-[14px] text-black whitespace-nowrap`}
                    currencyClass={`${FONT_REG} leading-[20px] text-[14px] text-black whitespace-nowrap`}
                  />
                </div>
              </div>
            </div>
            {/* progress bar de 5 segmentos */}
            <div className="content-stretch flex gap-0 items-start relative shrink-0 w-full">
              {Array.from({ length: segments }).map((_, i) => (
                <div key={i} className="flex-[1_0_0] h-[3px] min-w-px relative" style={{ backgroundColor: i < filled ? "#000000" : "#bdbdbd" }} />
              ))}
            </div>
          </div>
          {/* Liquidación */}
          {card.liquidacionLabel && (
            <>
              <div className="h-px w-full" style={{ backgroundColor: "#E0E0E0" }} />
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start min-w-px relative">
                  <p className={`[word-break:break-word] ${FONT_REG} leading-[24px] text-[16px] text-[#0163e8]`}>{card.liquidacionLabel}</p>
                  <p className={`[word-break:break-word] ${FONT_REG} leading-[20px] text-[#757575] text-[14px]`}>{card.liquidacionStatus}</p>
                </div>
                <div className="content-stretch flex items-baseline justify-end relative shrink-0">
                  <Money
                    value={card.liquidacionAmount ?? 0}
                    signed={false}
                    intClass={`${FONT_REG} leading-[24px] text-[16px] text-black text-right whitespace-nowrap`}
                    decClass={`${FONT_REG} leading-[20px] text-[14px] text-black whitespace-nowrap`}
                    currencyClass={`${FONT_REG} leading-[20px] text-[14px] text-black whitespace-nowrap`}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Tabs ──────────────────────────────────────────────────────────────
function Tabs({ tab, onChange }: { tab: "todos" | "fraccionar"; onChange: (t: "todos" | "fraccionar") => void }) {
  const tabBtn = (id: "todos" | "fraccionar", label: string) => (
    <button
      type="button"
      onClick={() => onChange(id)}
      className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative cursor-pointer"
    >
      <div className="flex-[1_0_0] min-w-px relative">
        <div aria-hidden className="absolute border-b-2 border-solid inset-0 pointer-events-none" style={{ borderColor: tab === id ? "#006dff" : "#919191" }} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pb-[12px] pt-[12px] px-[2px] relative size-full">
            <p className={`[word-break:break-word] ${tab === id ? FONT_BOLD : FONT_REG} leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap`}>{label}</p>
          </div>
        </div>
      </div>
    </button>
  );
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#919191] border-b-2 border-solid inset-0 pointer-events-none" />
      {tabBtn("todos", "Todos")}
      {tabBtn("fraccionar", "Fraccionar")}
    </div>
  );
}

// ── Movement avatar + row ─────────────────────────────────────────────
const BRAND: Record<string, { src: string; bg: string; contain?: boolean }> = {
  zara: { src: imgZara, bg: "#000000" },
  netflix: { src: imgNetflix, bg: "#000000", contain: true },
  uberEats: { src: imgUberEats, bg: "#000000" },
  mercadona: { src: imgMercadona, bg: "#0a8f3c" },
  glovo: { src: imgGlovo, bg: "#ffc244" },
  renfe: { src: imgRenfe, bg: "#5b2a86" },
};

function MovementAvatar({ avatar }: { avatar: CardAvatar }) {
  let inner: ReactNode;
  if (avatar.kind === "letter") {
    inner = (
      <div className="bg-[#fafafa] relative rounded-[100px] shrink-0 size-[32px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col ${FONT_BOLD} justify-center leading-[0] left-1/2 text-[#646464] text-[16px] text-center top-1/2 w-[14px]`}>
            <p className="leading-[24px]">{avatar.letter}</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    );
  } else {
    const b = BRAND[avatar.img];
    inner = (
      <div className="relative rounded-[50px] shrink-0 size-[32px] overflow-clip" style={{ backgroundColor: b.bg }}>
        <img alt="" className={`absolute inset-0 size-full ${b.contain ? "object-contain p-[7px]" : "object-cover"}`} src={b.src} />
        <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    );
  }
  return (
    <div className="relative self-stretch shrink-0">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 z-[1]">{inner}</div>
      </div>
    </div>
  );
}

function MovementRow({ m, onOpen }: { m: CardMovement; onOpen?: () => void }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen?.(); }}
      className="bg-white content-stretch flex items-start relative shrink-0 w-full cursor-pointer text-left"
    >
      <div className="bg-white flex-[1_0_0] min-w-px relative">
        <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
          <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
            <MovementAvatar avatar={m.avatar} />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
              <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
                <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col ${FONT_REG} justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis`}>
                  <p className="leading-[24px] line-clamp-2">{m.concept}</p>
                </div>
                <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0">
                  <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0">
                    <Money
                      value={m.amount}
                      signed
                      intClass={`${FONT_REG} leading-[24px] text-[16px] text-black text-right whitespace-nowrap`}
                      decClass={`${FONT_REG} leading-[20px] text-[14px] text-black text-right whitespace-nowrap`}
                      currencyClass={`${FONT_REG} leading-[20px] text-[14px] text-black text-right whitespace-nowrap`}
                    />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <p className={`[word-break:break-word] flex-[1_0_0] ${FONT_REG} leading-[20px] min-w-px relative text-[#646464] text-[14px]`}>{m.date}</p>
              </div>
              {Math.abs(m.amount) > 50 && (
                <div className="content-stretch flex items-end justify-end pt-[12px] relative shrink-0 w-full">
                  <div className="bg-[#ccecda] relative rounded-[8px] shrink-0">
                    <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit] size-full">
                      <p className={`${FONT_REG} leading-[20px] text-[14px] text-black text-right whitespace-nowrap`}>Fraccionar</p>
                    </div>
                    <div aria-hidden className="absolute border border-[#9cc3ad] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="px-[12px] w-full">
            <div className="h-px w-full" style={{ backgroundColor: "#E0E0E0" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupHeader({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-center px-[16px] pt-[8px] relative shrink-0 w-full">
      <p className={`${FONT_BOLD} leading-[24px] text-[16px] text-black whitespace-nowrap`}>{title}</p>
    </div>
  );
}

// ── Skeleton (shimmer global .skeleton-shimmer) ───────────────────────
function SkeletonBar({ className }: { className: string }) {
  return <div className={`skeleton-shimmer ${className}`} />;
}

function MovementsSkeleton() {
  const rows: [string, string][] = [
    ["w-[60%]", "w-[34%]"],
    ["w-[72%]", "w-[28%]"],
    ["w-[48%]", "w-[40%]"],
    ["w-[66%]", "w-[30%]"],
    ["w-[54%]", "w-[36%]"],
  ];
  return (
    <div className="content-stretch flex flex-col items-start w-full" aria-hidden aria-busy="true">
      {rows.map(([wTop, wBottom], i) => (
        <div key={i} className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] shrink-0 w-full">
          <div className="content-stretch flex gap-[16px] items-start p-[12px] w-full">
            <SkeletonBar className="size-[32px] rounded-full shrink-0 mt-[6px]" />
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px">
              <div className="content-stretch flex gap-[16px] items-center justify-between w-full">
                <SkeletonBar className={`h-[16px] rounded-[6px] ${wTop}`} />
                <SkeletonBar className="h-[16px] rounded-[6px] w-[56px] shrink-0" />
              </div>
              <SkeletonBar className={`h-[12px] rounded-[6px] ${wBottom}`} />
            </div>
          </div>
          <div className="px-[12px] w-full">
            <div className="h-px w-full" style={{ backgroundColor: "#E0E0E0" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Bottom nav ────────────────────────────────────────────────────────
// ── Page ──────────────────────────────────────────────────────────────
export default function Tarjetas({ firstCard }: { firstCard: CardId }) {
  const { navigate } = useNavigation();
  const cards = CARDS_LIST;
  const initialIndex = Math.max(0, cards.findIndex((c) => c.id === firstCard));
  const lastIndex = cards.length - 1;

  const [activeCard, setActiveCard] = useState(initialIndex);
  const [tab, setTab] = useState<"todos" | "fraccionar">("todos");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [vw, setVw] = useState(393);

  const card = cards[activeCard] ?? cards[0];

  const xForIndex = (i: number, w: number) => (w - CARD_W) / 2 - i * CARD_STRIDE;

  const triggerLoading = () => {
    setLoading(true);
    if (loadingTimer.current) clearTimeout(loadingTimer.current);
    loadingTimer.current = setTimeout(() => setLoading(false), 800);
  };

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(lastIndex, idx));
    if (clamped !== activeCard) {
      setActiveCard(clamped);
      triggerLoading();
    }
    animate(x, xForIndex(clamped, vw), { duration: 0.4, ease: EASE });
  };

  useLayoutEffect(() => {
    const w = viewportRef.current?.clientWidth || 393;
    setVw(w);
    x.set(xForIndex(initialIndex, w));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onResize = () => {
      const w = viewportRef.current?.clientWidth || 393;
      setVw(w);
      x.set(xForIndex(activeCard, w));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  useEffect(() => {
    setActiveCard(initialIndex);
    triggerLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstCard]);

  const headerTitle = "Hoy";
  // Fraccionables: compras de más de 50 €. Llevan la etiqueta "Fraccionar".
  const isFraccionable = (m: CardMovement) => Math.abs(m.amount) > 50;
  const base = tab === "todos" ? card.movements : card.movements.filter(isFraccionable);
  const q = query.trim().toLowerCase();
  const list = q ? base.filter((m) => m.concept.toLowerCase().includes(q)) : base;

  const rows: ReactNode[] = [];
  let prevGroup: string | null = null;
  list.forEach((m) => {
    if (!q && m.group !== headerTitle && m.group !== prevGroup) {
      rows.push(<GroupHeader key={`g-${m.id}`} title={m.group} />);
    } else if (!q && m.group === headerTitle && prevGroup === null && tab === "fraccionar") {
      // en fraccionar no repetimos "Hoy" como cabecera de búsqueda
    }
    prevGroup = m.group;
    rows.push(<MovementRow key={m.id} m={m} onOpen={() => navigate("detalle-movimiento", { card: card.id, movementId: m.id })} />);
  });

  return (
    <div className="flex flex-col bg-[#fafafa] w-full h-full overflow-hidden" data-name="Tarjetas">
      <HeaderBar />
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full" data-name="Body">
        {/* Section top (fondo gris) */}
        <div className="bg-[#fafafa] content-stretch flex flex-col gap-[12px] items-center pb-[16px] pt-[16px] w-full">
          {/* Block title */}
          <div className="content-stretch flex items-center px-[16px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
              <p className={`${FONT_SB} leading-[27px] text-[18px] text-black whitespace-nowrap`}>{`Tarjetas (${cards.length})`}</p>
            </div>
            <p className={`${FONT_REG} leading-[20px] text-[#0163e8] text-[14px] whitespace-nowrap`}>Ver todas</p>
          </div>
          {/* Carousel */}
          <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-full">
            <div ref={viewportRef} className="overflow-hidden pb-[16px] w-full">
              <motion.div
                className="flex gap-[8px] items-center cursor-grab active:cursor-grabbing touch-pan-y"
                style={{ x }}
                drag="x"
                dragDirectionLock
                dragConstraints={{ left: xForIndex(lastIndex, vw), right: xForIndex(0, vw) }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  let target = activeCard;
                  if (info.offset.x < -40 || info.velocity.x < -400) target = activeCard + 1;
                  else if (info.offset.x > 40 || info.velocity.x > 400) target = activeCard - 1;
                  goTo(target);
                }}
              >
                {cards.map((c) => (
                  <CardVisual key={c.id} card={c} />
                ))}
              </motion.div>
            </div>
            <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-center relative shrink-0 w-full">
              <Dots count={cards.length} active={activeCard} onSelect={goTo} />
              <Arrows
                onPrev={() => goTo(activeCard - 1)}
                onNext={() => goTo(activeCard + 1)}
                atStart={activeCard === 0}
                atEnd={activeCard === lastIndex}
              />
            </div>
          </div>
          {/* Aviso (solo crédito restringido) */}
          {card.restricted && <WarningPill />}
          {/* Quick actions */}
          <QuickActions actions={card.quickActions} />
          {/* Apple wallet */}
          <AppleWallet />
          {/* Disponible / gastado (solo crédito) */}
          {card.available !== undefined && <DisponibleGastado card={card} />}
        </div>

        {/* Section movimientos (fondo blanco) */}
        <div className="bg-white content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative w-full">
            <Tabs tab={tab} onChange={setTab} />
            {/* Search row */}
            <div className="content-stretch flex gap-[8px] h-[40px] items-center px-[16px] pt-[16px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                <p className={`${FONT_BOLD} leading-[24px] text-[16px] text-black whitespace-nowrap`}>{tab === "todos" ? "Hoy" : "Fraccionables"}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen((o) => !o);
                  if (searchOpen) setQuery("");
                }}
                aria-label="Buscar movimientos"
                aria-pressed={searchOpen}
                className="content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0 cursor-pointer"
              >
                <div className="relative shrink-0 size-[20px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p26c6e700} fill="var(--fill-0, #006DFF)" />
                  </svg>
                </div>
              </button>
            </div>
            {searchOpen && (
              <div className="px-[16px] w-full">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por concepto"
                  className="w-full rounded-[8px] border border-[#e0e0e0] mb-[8px] px-[12px] py-[8px] text-[16px] text-black outline-none"
                />
              </div>
            )}
            {/* List */}
            {loading ? (
              <MovementsSkeleton />
            ) : rows.length > 0 ? (
              rows
            ) : (
              <p className={`${FONT_REG} leading-[24px] px-[16px] py-[24px] text-[#646464] text-[16px]`}>No hay movimientos que coincidan.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
