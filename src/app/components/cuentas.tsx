import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { animate, motion, useMotionValue } from "motion/react";
import { useNavigation, type AccountId } from "../navigation";
import { HideableAmount, useBalanceVisibility } from "../balance-visibility";
import svgPaths from "../../imports/CuentaMain/svg-0yla7c23rk";
import imgZara from "../../imports/CuentaMain/ffba026dda1342c0cac019af1f2bd66d8a74aa15.png";
import imgUberEats from "../../imports/095QuickActionsDigi68166408641010095PosicioCuentasXs-1/c6128aafcd5c61c40b69f2066cc110dc6b8c45fe.png";
import imgAgbar from "../../imports/095QuickActionsDigi68166408641010095PosicioCuentasXs-1/8d8af54c0f13ebd2e09efa6493290829085e6c76.png";
import {
  ACCOUNTS_LIST,
  moneyParts,
  type Account,
  type Avatar as AvatarData,
  type Movement,
} from "../data/accounts";

// Copia segura: el preview puede bloquear la Clipboard API por permissions
// policy. Capturamos el rechazo y caemos a un fallback que nunca lanza.
function copyToClipboard(text: string) {
  try {
    const p = navigator.clipboard?.writeText(text);
    if (p && typeof p.catch === "function") p.catch(() => fallbackCopy(text));
  } catch {
    fallbackCopy(text);
  }
}
function fallbackCopy(text: string) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  } catch {
    /* sin portapapeles disponible: no-op */
  }
}

const CARD_W = 310; // ancho de tarjeta
const CARD_GAP = 8; // separación entre tarjetas
const CARD_STRIDE = CARD_W + CARD_GAP;
// Curva de easing estándar (coherente con las transiciones de navegación).
const EASE = [0.4, 0, 0.2, 1] as const;
const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";
const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

// Importe con número↔"••••" (respeta el ojo global). El símbolo € hereda color.
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
            <path d={svgPaths.pbcaae00} fill="var(--fill-0, #006DFF)" id="vector" />
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
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#fafafa] content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full">
        <div className="h-[64px] relative shrink-0 w-full">
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
                <p className={`[word-break:break-word] ${FONT_BOLD} leading-[20px] relative text-[14px] text-black text-center`}>Cuentas</p>
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
    </div>
  );
}

// ── Account card ──────────────────────────────────────────────────────
function AccountCard({ account }: { account: Account }) {
  return (
    <div className="bg-white h-[161px] relative rounded-[16px] shrink-0 w-[310px]" data-name="Product Summary Block">
      <div className="content-stretch flex items-start max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[16px] px-[16px] relative size-full">
                <p className={`[word-break:break-word] ${FONT_SB} h-[24px] leading-[27px] min-w-full overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis whitespace-nowrap`}>{account.name}</p>
                <div className="content-stretch flex h-[32px] items-baseline relative shrink-0">
                  <Money
                    value={account.balance}
                    signed={false}
                    intClass={`[word-break:break-word] ${FONT_REG} leading-[32px] relative shrink-0 text-[24px] text-black whitespace-nowrap`}
                    decClass={`[word-break:break-word] ${FONT_REG} leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap`}
                    currencyClass={`[word-break:break-word] ${FONT_REG} leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap`}
                  />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[8px] relative size-full">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(account.ibanFull.replace(/\s/g, ""))}
                    aria-label="Copiar IBAN"
                    className="bg-white content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center p-[8px] relative rounded-[4px] shrink-0"
                  >
                    <div className={`[word-break:break-word] flex flex-col ${FONT_REG} justify-center leading-[0] relative shrink-0 text-[#646464] text-[14px] text-left whitespace-nowrap`}>
                      <p className="leading-[20px]">{account.ibanFull}</p>
                    </div>
                    <div className="h-[15.997px] relative shrink-0 w-[16.003px]">
                      <div className="absolute inset-[9.38%_15.63%_7.99%_15.63%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 13.2197">
                          <path d={svgPaths.p12d4d400} fill="var(--fill-0, #000000)" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative size-full">
                <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0">
                  <p className={`[word-break:break-word] ${FONT_REG} leading-[21px] relative shrink-0 text-[#0163e8] text-[14px] text-center whitespace-nowrap`}>Ver detalle</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
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
          aria-label={`Ir a la cuenta ${i + 1}`}
          aria-current={i === active}
          className={`shrink-0 cursor-pointer rounded-[999px] transition-[width,background-color] duration-300 ease-out ${
            i === active ? "bg-[#006dff] h-[8px] w-[12px]" : "bg-[#919191] h-[8px] w-[8px]"
          }`}
        />
      ))}
      <div className="flex flex-row items-center self-stretch">
        <div className="h-[8px] relative shrink-0 w-[8px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path clipRule="evenodd" d={svgPaths.p21d44b80} fill="var(--fill-0, #919191)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Arrows({ onPrev, onNext, atStart, atEnd }: { onPrev: () => void; onNext: () => void; atStart: boolean; atEnd: boolean }) {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[12px] items-center pr-[16px] right-0">
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        aria-label="Cuenta anterior"
        className="bg-white max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[50px] shrink-0 size-[32px] cursor-pointer disabled:cursor-default"
      >
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0">
            <div className="h-[20.002px] relative shrink-0 w-[10px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
                <path clipRule="evenodd" d={svgPaths.p11976000} fill={atStart ? "#9ECCFF" : "#006DFF"} fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid inset-0 pointer-events-none rounded-[50px]" style={{ borderColor: atStart ? "#9eccff" : "#006dff" }} />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        aria-label="Cuenta siguiente"
        className="bg-white max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[50px] shrink-0 size-[32px] cursor-pointer disabled:cursor-default"
      >
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[4px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex items-start pl-[8px] pr-[6px] py-[2px] relative shrink-0">
            <div className="h-[20.002px] relative shrink-0 w-[10px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
                <path clipRule="evenodd" d={svgPaths.p10f18d00} fill={atEnd ? "#9ECCFF" : "#006DFF"} fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid inset-0 pointer-events-none rounded-[50px]" style={{ borderColor: atEnd ? "#9eccff" : "#006dff" }} />
      </button>
    </div>
  );
}

// ── Quick actions ─────────────────────────────────────────────────────
function QuickAction({ icon, line1, line2 }: { icon: ReactNode; line1: string; line2: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative">
      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]">
          <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
          {icon}
        </div>
        <div className={`[word-break:break-word] ${FONT_REG} leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]`}>
          <p className="leading-[16px] mb-0">{line1}</p>
          <p className="leading-[16px]">{line2}</p>
        </div>
      </div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[8px] h-[116px] items-start justify-center max-w-[480px] min-w-[360px] px-[16px] py-[12px] relative shrink-0 w-full">
      <QuickAction
        line1="Enviar"
        line2="Bizum"
        icon={
          <div className="content-stretch flex items-start px-[4.4px] py-[2px] relative shrink-0">
            <div className="h-[20px] relative shrink-0 w-[15.2px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2 20">
                <path clipRule="evenodd" d={svgPaths.p31952a00} fill="var(--fill-0, #006DFF)" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        }
      />
      <QuickAction
        line1="Enviar"
        line2="dinero"
        icon={
          <div className="content-stretch flex flex-col items-start px-[2px] py-[5.2px] relative shrink-0">
            <div className="h-[13.6px] relative shrink-0 w-[20px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.5996">
                <path d={svgPaths.p1d0a8f80} fill="var(--fill-0, #006DFF)" />
              </svg>
            </div>
          </div>
        }
      />
      <QuickAction
        line1="Sacar"
        line2="dinero"
        icon={
          <div className="content-stretch flex items-start p-[2px] relative shrink-0">
            <div className="relative shrink-0 size-[20px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0003">
                <path d={svgPaths.p364cb5f0} fill="var(--fill-0, #006DFF)" />
              </svg>
            </div>
          </div>
        }
      />
      <QuickAction
        line1="Más"
        line2="opciones"
        icon={
          <div className="content-stretch flex items-start overflow-clip px-[10px] py-[2px] relative shrink-0">
            <div className="h-[20px] relative shrink-0 w-[4px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 20">
                <path d={svgPaths.p33db4e00} fill="var(--fill-0, #006DFF)" />
              </svg>
            </div>
          </div>
        }
      />
    </div>
  );
}

// ── Avisos pill ───────────────────────────────────────────────────────
function AvisosPill({ count }: { count: number }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <div className="bg-white max-h-[184px] min-h-[84px] min-w-[328px] relative rounded-[16px] shrink-0 w-full">
            <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
              <div className="flex-[1_0_0] min-w-px relative">
                <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
                  <div className="content-stretch flex items-center justify-center relative rounded-[78px] shrink-0 size-[40px]">
                    <div className="bg-[#fbca8b] content-stretch flex items-center justify-center p-[8px] relative rounded-[78px] shrink-0 size-[40px]">
                      <div className="content-stretch flex items-start px-[3px] py-[2px] relative shrink-0">
                        <div className="h-[20px] relative shrink-0 w-[18px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                            <path d={svgPaths.p1a229b80} fill="var(--fill-0, black)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
                    <p className={`[word-break:break-word] ${FONT_BOLD} leading-[0] max-h-[72px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis w-[min-content]`}>
                      <span className={`${FONT_REG} leading-[24px]`}>{`Laura, `}</span>
                      <span className="leading-[24px]">{`tienes ${count} ${count === 1 ? "aviso" : "avisos"}`}</span>
                      <span className={`${FONT_REG} leading-[24px]`}>{` ${count === 1 ? "pendiente" : "pendientes"}`}</span>
                    </p>
                    <p className={`[word-break:break-word] ${FONT_REG} leading-[27px] relative shrink-0 text-[#0163e8] text-[18px]`}>Revisar avisos</p>
                  </div>
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

// ── Tabs ──────────────────────────────────────────────────────────────
function Tabs({ tab, onChange }: { tab: "todos" | "proximos"; onChange: (t: "todos" | "proximos") => void }) {
  const tabBtn = (id: "todos" | "proximos", label: string, badge: boolean) => (
    <button
      type="button"
      onClick={() => onChange(id)}
      className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative cursor-pointer"
    >
      <div className="flex-[1_0_0] min-w-px relative">
        <div aria-hidden className="absolute border-b-2 border-solid inset-0 pointer-events-none" style={{ borderColor: tab === id ? "#006dff" : "#919191" }} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-[2px] px-[2px] relative size-full">
            <div className="content-stretch flex items-start justify-center pb-[8px] pl-[24px] pt-[12px] relative rounded-[4px] shrink-0">
              <div className="content-stretch flex items-start justify-center relative shrink-0">
                <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                  <p className={`[word-break:break-word] ${tab === id ? FONT_BOLD : FONT_REG} leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap`}>{label}</p>
                </div>
                <div className="content-stretch flex h-[16px] items-start justify-center relative shrink-0 w-[24px]">
                  {badge && (
                    <div className="relative shrink-0 size-[16px]">
                      <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0">
                        <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#919191] border-b-2 border-solid inset-0 pointer-events-none" />
      {tabBtn("todos", "Todos", false)}
      {tabBtn("proximos", "Próximos", true)}
    </div>
  );
}

// ── Movement avatar + row ─────────────────────────────────────────────
function MovementAvatar({ avatar }: { avatar: AvatarData }) {
  let inner: ReactNode;
  if (avatar.kind === "letter") {
    inner = (
      <div className="bg-[#fafafa] relative rounded-[100px] shrink-0 size-[32px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className={`-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col ${FONT_BOLD} justify-center leading-[0] left-1/2 text-[#646464] text-[16px] text-center top-1/2 w-[14px]`}>
            <p className="leading-[24px]">{avatar.letter}</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    );
  } else if (avatar.kind === "image") {
    const src = avatar.img === "zara" ? imgZara : avatar.img === "uberEats" ? imgUberEats : imgAgbar;
    inner = (
      <div className="content-stretch flex items-center relative rounded-[50px] shrink-0">
        <div className="overflow-clip relative rounded-[50px] shrink-0 size-[32px]">
          {avatar.img === "zara" ? (
            <div className="absolute bg-black inset-0">
              <div className="absolute inset-[30.56%_8.33%_31.94%_8.33%]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
              </div>
            </div>
          ) : (
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={src} />
          )}
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15.5" stroke="var(--stroke-0, #919191)" />
          </svg>
        </div>
      </div>
    );
  } else {
    // doc / transfer / card: icono dentro de círculo gris
    let path = svgPaths.p6302300;
    let vb = "0 0 13.998 14";
    let iconWrap = "content-stretch flex items-start p-px relative shrink-0";
    let iconDim = "h-[14px] relative shrink-0 w-[13.998px]";
    if (avatar.kind === "transfer") {
      path = svgPaths.pa599600;
      vb = "0 0 14 14";
      iconDim = "relative shrink-0 size-[14px]";
    } else if (avatar.kind === "card") {
      path = svgPaths.p1457d170;
      vb = "0 0 14.0029 10.4004";
      iconWrap = "content-stretch flex flex-col items-start overflow-clip px-px py-[2.8px] relative shrink-0";
      iconDim = "h-[10.4px] relative shrink-0 w-[14.003px]";
    }
    inner = (
      <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]">
        <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className={iconWrap}>
          <div className={iconDim}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={vb}>
              <path d={path} fill="var(--fill-0, black)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 z-[1]">{inner}</div>
      </div>
    </div>
  );
}

function MovementRow({ m, balance, onOpen }: { m: Movement; balance?: number; onOpen?: () => void }) {
  const income = m.amount >= 0;
  const amtColor = income ? "text-[#008626]" : "text-black";
  const balColor = "text-[#646464]";
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
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
              <MovementAvatar avatar={m.avatar} />
              <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                  {/* Concepto + importe */}
                  <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
                    <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col ${FONT_REG} justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis`}>
                      <p className="leading-[24px]">{m.concept}</p>
                    </div>
                    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0">
                      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0">
                        <Money
                          value={m.amount}
                          signed
                          intClass={`[word-break:break-word] ${FONT_REG} leading-[24px] relative shrink-0 text-[16px] ${amtColor} text-right whitespace-nowrap`}
                          decClass={`[word-break:break-word] ${FONT_REG} leading-[20px] relative shrink-0 text-[14px] ${amtColor} text-right whitespace-nowrap`}
                          currencyClass={`[word-break:break-word] ${FONT_REG} leading-[20px] relative shrink-0 text-[14px] ${amtColor} text-right whitespace-nowrap`}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Fecha + saldo */}
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative">
                      <p className={`[word-break:break-word] flex-[1_0_0] ${FONT_REG} leading-[20px] min-w-px relative text-[#646464] text-[14px]`}>{m.date}</p>
                    </div>
                    {balance !== undefined && (
                      <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
                        <div className="content-stretch flex items-baseline justify-end relative shrink-0">
                          <Money
                            value={balance}
                            signed={false}
                            intClass={`[word-break:break-word] ${FONT_REG} leading-[20px] relative shrink-0 text-[14px] ${balColor} text-right whitespace-nowrap`}
                            decClass={`[word-break:break-word] ${FONT_REG} leading-[20px] relative shrink-0 text-[14px] ${balColor} text-right whitespace-nowrap`}
                            currencyClass={`[word-break:break-word] ${FONT_REG} leading-[20px] relative shrink-0 text-[14px] ${balColor} text-right whitespace-nowrap`}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  {m.tag && (
                    <div className="content-stretch flex items-end justify-end pt-[12px] relative shrink-0 w-full">
                      <div className="bg-[#ccecda] relative rounded-[8px] shrink-0">
                        <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit] size-full">
                          <p className={`[word-break:break-word] ${FONT_REG} leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap`}>{m.tag}</p>
                        </div>
                        <div aria-hidden className="absolute border border-[#9cc3ad] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
                <div className="h-px relative shrink-0 w-full" style={{ backgroundColor: "#E0E0E0" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupHeader({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-center px-[16px] pt-[8px] relative shrink-0 w-full">
      <p className={`[word-break:break-word] ${FONT_BOLD} leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap`}>{title}</p>
    </div>
  );
}

// ── Bottom nav ────────────────────────────────────────────────────────
// ── Loading skeleton (estado de carga de los movimientos) ─────────────
// Cada barra usa la clase global `.skeleton-shimmer` (definida en
// src/styles/tailwind.css) que pinta una base gris visible + un barrido de luz.
// Las filas replican la geometría real de un movimiento (avatar 32px + dos
// líneas) para que no haya saltos de layout al cargar el contenido real.
function SkeletonBar({ className }: { className: string }) {
  return <div className={`skeleton-shimmer ${className}`} />;
}

function SkeletonRow({ wTop, wBottom }: { wTop: string; wBottom: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
        <SkeletonBar className="size-[32px] rounded-full shrink-0 mt-[6px]" />
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px">
          <div className="content-stretch flex gap-[16px] items-center justify-between w-full">
            <SkeletonBar className={`h-[16px] rounded-[6px] ${wTop}`} />
            <SkeletonBar className="h-[16px] rounded-[6px] w-[56px] shrink-0" />
          </div>
          <div className="content-stretch flex gap-[16px] items-center justify-between w-full">
            <SkeletonBar className={`h-[12px] rounded-[6px] ${wBottom}`} />
            <SkeletonBar className="h-[12px] rounded-[6px] w-[68px] shrink-0" />
          </div>
        </div>
      </div>
      <div className="px-[12px] w-full">
        <div className="h-px w-full" style={{ backgroundColor: "#E0E0E0" }} />
      </div>
    </div>
  );
}

function MovementsSkeleton() {
  // Anchos variados por fila → ritmo natural, no un patrón idéntico repetido.
  const rows: [string, string][] = [
    ["w-[60%]", "w-[34%]"],
    ["w-[72%]", "w-[28%]"],
    ["w-[48%]", "w-[40%]"],
    ["w-[66%]", "w-[30%]"],
    ["w-[54%]", "w-[36%]"],
    ["w-[70%]", "w-[26%]"],
  ];
  return (
    <div className="content-stretch flex flex-col items-start w-full" aria-hidden aria-busy="true">
      {rows.map(([wTop, wBottom], i) => (
        <SkeletonRow key={i} wTop={wTop} wBottom={wBottom} />
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────
export default function Cuentas({ firstAccount }: { firstAccount: AccountId }) {
  const { navigate } = useNavigation();
  // Orden fijo (pos 1 = Sabadell, pos 2 = familiar). `firstAccount` solo decide
  // a qué posición se hace scroll inicialmente, no reordena el carrusel.
  const accounts = ACCOUNTS_LIST;
  const initialIndex = Math.max(0, accounts.findIndex((a) => a.id === firstAccount));
  const lastIndex = accounts.length - 1;

  const [activeCard, setActiveCard] = useState(initialIndex);
  const [tab, setTab] = useState<"todos" | "proximos">("todos");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(true);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Carrusel por transform: centrado determinista + drag (ratón y touch).
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [vw, setVw] = useState(393);

  const account = accounts[activeCard] ?? accounts[0];

  // Desplazamiento X que deja la card `i` centrada en un viewport de ancho `w`
  // → margen lateral idéntico ((w - 310) / 2) en ambos lados, en todas las cards.
  const xForIndex = (i: number, w: number) => (w - CARD_W) / 2 - i * CARD_STRIDE;

  // Skeleton de movimientos 800ms al cargar / cambiar de cuenta.
  const triggerLoading = () => {
    setLoading(true);
    if (loadingTimer.current) clearTimeout(loadingTimer.current);
    loadingTimer.current = setTimeout(() => setLoading(false), 800);
  };

  // Único punto de verdad para cambiar de tarjeta (drag, flechas y dots).
  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(lastIndex, idx));
    if (clamped !== activeCard) {
      setActiveCard(clamped);
      triggerLoading();
    }
    animate(x, xForIndex(clamped, vw), { duration: 0.4, ease: EASE });
  };

  // Mide el viewport y coloca el carrusel en la card inicial (sin animar).
  useLayoutEffect(() => {
    const w = viewportRef.current?.clientWidth || 393;
    setVw(w);
    x.set(xForIndex(initialIndex, w));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reposiciona si cambia el tamaño de la ventana.
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

  // Al entrar (o cambiar la cuenta pulsada en Inicio): índice correcto + skeleton.
  useEffect(() => {
    setActiveCard(initialIndex);
    triggerLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstAccount]);

  // Saldo corrido por movimiento (a partir del saldo actual de la cuenta).
  const balanceById = useMemo(() => {
    const map: Record<string, number> = {};
    let bal = account.balance;
    for (const m of account.movements) {
      map[m.id] = bal;
      bal = bal - m.amount;
    }
    return map;
  }, [account]);

  const headerTitle = tab === "todos" ? "Esta semana" : "Próximos pagos";
  const base = tab === "todos" ? account.movements : account.upcoming;
  const q = query.trim().toLowerCase();
  const list = q ? base.filter((m) => m.concept.toLowerCase().includes(q)) : base;

  const rows: ReactNode[] = [];
  let prevGroup: string | null = null;
  list.forEach((m) => {
    if (!q && m.group !== headerTitle && m.group !== prevGroup) {
      rows.push(<GroupHeader key={`g-${m.id}`} title={m.group} />);
    }
    prevGroup = m.group;
    rows.push(<MovementRow key={m.id} m={m} balance={tab === "todos" ? balanceById[m.id] : undefined} onOpen={() => navigate("detalle-cuenta", { account: account.id, movementId: m.id })} />);
  });

  return (
    <div className="flex flex-col bg-[#fafafa] w-full h-full overflow-hidden" data-name="Cuentas">
      <HeaderBar />
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full" data-name="Body">
        <div className="content-stretch flex flex-col gap-[32px] items-center w-full">
          {/* Section Top */}
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
              <div className="bg-[#fafafa] content-stretch flex flex-col gap-[12px] items-center pb-[24px] pt-[16px] relative shrink-0 w-full">
                {/* Block title */}
                <div className="max-h-[56px] min-h-[32px] min-w-[240px] relative shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[16px] relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
                        <p className={`[word-break:break-word] ${FONT_SB} leading-[27px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis whitespace-nowrap`}>{`Cuentas (${accounts.length})`}</p>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                        <p className={`[word-break:break-word] ${FONT_REG} leading-[20px] relative shrink-0 text-[#0163e8] text-[14px] text-center whitespace-nowrap`}>Ver todas</p>
                      </div>
                    </div>
                  </div>
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
                      {accounts.map((a) => (
                        <AccountCard key={a.id} account={a} />
                      ))}
                    </motion.div>
                  </div>
                  <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-center relative shrink-0 w-full">
                    <Dots count={accounts.length} active={activeCard} onSelect={goTo} />
                    <Arrows
                      onPrev={() => goTo(activeCard - 1)}
                      onNext={() => goTo(activeCard + 1)}
                      atStart={activeCard === 0}
                      atEnd={activeCard === accounts.length - 1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <QuickActions />
            {account.avisos ? <AvisosPill count={account.avisos} /> : null}
          </div>

          {/* Section Movements */}
          <div className="bg-white content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start justify-center relative rounded-[16px] shrink-0 w-full">
              <Tabs tab={tab} onChange={setTab} />
              {/* Search row */}
              <div className="bg-white content-stretch flex flex-col items-center justify-end min-h-[57px] overflow-clip relative shrink-0 w-full">
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
                      <div className="content-stretch flex flex-col items-start justify-center min-w-[88px] relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[8px] h-[40px] items-center pt-[8px] relative shrink-0 w-full">
                          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
                            <p className={`[word-break:break-word] ${FONT_BOLD} leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap`}>{headerTitle}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setSearchOpen((o) => !o);
                              if (searchOpen) setQuery("");
                            }}
                            aria-label="Buscar movimientos"
                            aria-pressed={searchOpen}
                            className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0 cursor-pointer"
                          >
                            <div className="content-stretch flex items-start p-[2px] relative shrink-0">
                              <div className="relative shrink-0 size-[20px]">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                  <path d={svgPaths.p26c6e700} fill="var(--fill-0, #006DFF)" />
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                        {searchOpen && (
                          <input
                            autoFocus
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar por concepto"
                            className="w-full rounded-[8px] border border-[#e0e0e0] mt-[4px] px-[12px] py-[8px] text-[16px] text-black outline-none"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
}
