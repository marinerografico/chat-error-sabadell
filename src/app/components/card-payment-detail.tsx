import { useState, type ReactNode } from "react";
import { useNavigation, type CardId } from "../navigation";
import { HideableAmount, useBalanceVisibility } from "../balance-visibility";
import svgPaths from "../../imports/CardpaymentDetail/svg-waowxgxsxd";
import imgMapa from "../../imports/CardpaymentDetail/e5ee152311448b40a9a634159a7a41b21914258e.png";
import imgZara from "../../imports/CardpaymentDetail/ffba026dda1342c0cac019af1f2bd66d8a74aa15.png";
import imgNetflix from "../../imports/CreditCard/a85730f79ffc1522d1ba57b2ea7a817cbe5e77d7.png";
import imgUberEats from "../../imports/CreditCard/c6128aafcd5c61c40b69f2066cc110dc6b8c45fe.png";
import imgMercadona from "../../imports/CreditCard/be442b23a55a42b12fb5b2902ce0ec137063a95a.png";
import imgGlovo from "../../imports/CreditCard/958180df1c5874df667ec19d5bd70d5df4f979fc.png";
import imgRenfe from "../../imports/CreditCard/61814fa7654135f8d3c2e9bb3a2eb19ea12173af.png";
import { CARDS, findMovement, moneyParts, type CardAvatar, type CardMovement } from "../data/cards";

const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";
const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

const BRAND: Record<string, { src: string; bg: string; contain?: boolean }> = {
  zara: { src: imgZara, bg: "#000000" },
  netflix: { src: imgNetflix, bg: "#000000", contain: true },
  uberEats: { src: imgUberEats, bg: "#000000" },
  mercadona: { src: imgMercadona, bg: "#0a8f3c" },
  glovo: { src: imgGlovo, bg: "#ffc244" },
  renfe: { src: imgRenfe, bg: "#5b2a86" },
};

function BrandAvatar({ avatar, size }: { avatar: CardAvatar; size: number }) {
  const ring = (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r="35.5" stroke="var(--stroke-0, #919191)" />
      </svg>
    </div>
  );
  if (avatar.kind === "letter") {
    return (
      <div className="relative rounded-full shrink-0" style={{ width: size, height: size, backgroundColor: "#fafafa" }}>
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${FONT_BOLD} left-1/2 text-[#646464] text-center top-1/2`} style={{ fontSize: size / 2 }}>
          {avatar.letter}
        </div>
        {ring}
      </div>
    );
  }
  const b = BRAND[avatar.img];
  return (
    <div className="relative rounded-full shrink-0 overflow-clip" style={{ width: size, height: size, backgroundColor: b.bg }}>
      <img alt="" className={`absolute inset-0 size-full ${b.contain ? "object-contain p-[18%]" : "object-cover"}`} src={b.src} />
      {ring}
    </div>
  );
}

// Money con ojo global.
function Money({ value, signed, intClass, decClass, currencyClass }: { value: number; signed: boolean; intClass: string; decClass: string; currencyClass: string }) {
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
function HeaderBar({ onBack }: { onBack: () => void }) {
  const { hidden, toggle } = useBalanceVisibility();
  const { navigate } = useNavigation();
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full">
      <div className="h-[64px] relative w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
            <button type="button" onClick={onBack} aria-label="Volver" className="content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
              <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0">
                <div className="h-[20.002px] relative shrink-0 w-[10px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
                    <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #006DFF)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative">
              <p className={`[word-break:break-word] ${FONT_BOLD} leading-[20px] relative text-[14px] text-black text-center`}>Detalle de movimiento</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
              <button type="button" onClick={toggle} aria-label={hidden ? "Mostrar saldos" : "Ocultar saldos"} aria-pressed={hidden} className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
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
              <button type="button" onClick={() => navigate("ayuda")} aria-label="Centro de ayuda" className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
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

// ── Quick action ──────────────────────────────────────────────────────
function QuickAction({ label, onClick, children }: { label: string; onClick?: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative cursor-pointer">
      <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]">
        <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
        {children}
      </div>
      <p className={`[word-break:break-word] ${FONT_REG} leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]`}>{label}</p>
    </button>
  );
}

// ── Detalle card info label ───────────────────────────────────────────
function InfoLabel({ head, body }: { head: string; body: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[100px] relative shrink-0 w-full">
      <p className={`${FONT_REG} leading-[21px] text-[#646464] text-[14px]`}>{head}</p>
      <p className={`[word-break:break-word] ${FONT_REG} leading-[27px] min-w-full relative text-[18px] text-black`}>{body}</p>
    </div>
  );
}

// ── Histórico row ─────────────────────────────────────────────────────
function HistoryRow({ avatar, concept, date, amount, last }: { avatar: CardAvatar; concept: string; date: string; amount: number; last: boolean }) {
  return (
    <div className="flex-[1_0_0] min-w-px relative w-full">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative w-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <div className="pt-[6px] shrink-0">
            <BrandAvatar avatar={avatar} size={32} />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
            <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
              <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col ${FONT_REG} justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis`}>
                <p className="leading-[24px] line-clamp-2">{concept}</p>
              </div>
              <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0">
                <Money value={amount} signed intClass={`${FONT_REG} leading-[24px] text-[16px] text-black text-right whitespace-nowrap`} decClass={`${FONT_REG} leading-[20px] text-[14px] text-black text-right whitespace-nowrap`} currencyClass={`${FONT_REG} leading-[20px] text-[14px] text-black text-right whitespace-nowrap`} />
              </div>
            </div>
            <p className={`${FONT_REG} leading-[20px] text-[#646464] text-[14px]`}>{date}</p>
          </div>
        </div>
        {!last && (
          <div className="px-[12px] w-full">
            <div className="h-px w-full" style={{ backgroundColor: "#E0E0E0" }} />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Bottom nav ────────────────────────────────────────────────────────
// Histórico sintético: mismas compras del comercio en fechas anteriores.
function buildHistory(m: CardMovement): { id: string; date: string; amount: number }[] {
  const base = Math.abs(m.amount);
  return [
    { id: "h1", date: "29 Dic", amount: -Math.round(base * 0.9 * 100) / 100 },
    { id: "h2", date: "27 Nov", amount: -Math.round(base * 1.3 * 100) / 100 },
    { id: "h3", date: "14 Nov", amount: -Math.round(base * 1.7 * 100) / 100 },
  ];
}

// ── Page ──────────────────────────────────────────────────────────────
export default function CardPaymentDetail({ cardId, movementId }: { cardId: CardId; movementId: string }) {
  const { navigate, goBack } = useNavigation();
  const card = CARDS[cardId];
  const movement = findMovement(cardId, movementId) ?? card.movements[0];

  const [showMore, setShowMore] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState("");

  const openMap = () => {
    if (!movement.location) return;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(movement.location.query)}`, "_blank");
  };

  const history = buildHistory(movement);

  return (
    <div className="flex flex-col bg-[#fafafa] w-full h-full overflow-hidden" data-name="Detalle de movimiento">
      <HeaderBar onBack={goBack} />
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full" data-name="Body">
        {/* Transaction detail header */}
        <div className="bg-white content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full">
          {movement.location ? (
            <>
              <button type="button" onClick={openMap} aria-label={`Ver ${movement.location.label} en Google Maps`} className="h-[156px] mb-[-32px] relative shrink-0 w-full cursor-pointer">
                <img alt="Mapa de la compra" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapa} />
              </button>
              <button type="button" onClick={openMap} className="absolute bg-white min-w-[96px] right-[16px] rounded-[50px] top-[16px] cursor-pointer" aria-label="Abrir ubicación en Google Maps">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[4px] relative rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="content-stretch flex items-start px-[4.4px] py-[2px] relative shrink-0">
                      <div className="h-[20px] relative shrink-0 w-[15.2px]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2002 20"><path d={svgPaths.p14273880} fill="var(--fill-0, #006DFF)" /></svg>
                      </div>
                    </div>
                    <p className={`${FONT_REG} leading-[24px] text-[#006dff] text-[16px] text-center whitespace-nowrap`}>{movement.location.label}</p>
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
              </button>
            </>
          ) : (
            <div className="h-[16px] shrink-0 w-full" />
          )}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[24px] relative w-full">
              <BrandAvatar avatar={movement.avatar} size={72} />
              <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
                <p className={`[word-break:break-word] ${FONT_REG} leading-[24px] max-h-[48px] min-w-full overflow-hidden relative shrink-0 text-[#646464] text-[16px] text-center text-ellipsis w-[min-content]`}>{movement.concept}</p>
                <div className="content-stretch flex items-baseline relative shrink-0">
                  <Money value={movement.amount} signed intClass={`${FONT_SB} leading-[32px] text-[24px] text-black whitespace-nowrap`} decClass={`${FONT_SB} leading-[28px] text-[18px] text-black whitespace-nowrap`} currencyClass={`${FONT_SB} leading-[28px] text-[18px] text-black whitespace-nowrap`} />
                </div>
                <p className={`${FONT_BOLD} leading-[24px] text-[16px] text-black text-center whitespace-nowrap`}>{movement.category}</p>
                <p className={`${FONT_REG} leading-[24px] text-[#646464] text-[16px] text-center`}>{movement.datetime}</p>
                <p className={`${FONT_REG} leading-[24px] text-[16px] text-black text-center whitespace-nowrap`}>{`Cuenta ${card.accountMasked}`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[12px] w-full">
          <QuickAction label="Fraccionar pago">
            <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p2894e280} fill="var(--fill-0, #006DFF)" /></svg></div>
          </QuickAction>
          <QuickAction label="Dividir con Bizum">
            <div className="content-stretch flex items-start overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[8.33%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p1c86db00} fill="var(--fill-0, #006DFF)" /></svg></div></div>
          </QuickAction>
          <QuickAction label="Compartir detalle" onClick={() => { if (navigator.share) navigator.share({ title: movement.concept, text: `${movement.concept} ${movement.datetime}` }).catch(() => {}); }}>
            <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p32590e80} fill="var(--fill-0, #006DFF)" /></svg></div>
          </QuickAction>
        </div>

        {/* Detalle del movimiento */}
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] pt-[16px] w-full">
          <p className={`${FONT_SB} leading-[27px] text-[18px] text-black`}>Detalle del movimiento</p>
          <div className="bg-white relative rounded-[16px] w-full">
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
              <InfoLabel head="Concepto" body={movement.concept} />
              <InfoLabel head="Tarjeta" body={card.pan} />
              <InfoLabel head="Cuenta" body={card.accountIban} />
              {showMore && (
                <>
                  <InfoLabel head="Categoría" body={movement.category} />
                  <InfoLabel head="Fecha y hora" body={movement.datetime} />
                </>
              )}
              <button type="button" onClick={() => setShowMore((v) => !v)} className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
                <p className={`${FONT_REG} leading-[24px] text-[#0163e8] text-[16px] text-center whitespace-nowrap`}>{showMore ? "Mostrar menos" : "Mostrar más"}</p>
                <div className="content-stretch flex flex-col items-start px-px py-[4px] relative shrink-0" style={{ transform: showMore ? "rotate(180deg)" : undefined }}>
                  <div className="h-[8px] relative shrink-0 w-[14px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8"><path clipRule="evenodd" d={svgPaths.p2261ad00} fill="var(--fill-0, #0163E8)" fillRule="evenodd" /></svg></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] pt-[24px] w-full">
          <p className={`${FONT_SB} leading-[27px] text-[18px] text-black`}>Información adicional</p>
          <div className="bg-white relative rounded-[16px] w-full">
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
            <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
              <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0">
                  <div className="h-[19.996px] relative shrink-0 w-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9961"><path d={svgPaths.p18e46300} fill="var(--fill-0, black)" /></svg></div>
                </div>
                <p className={`flex-[1_0_0] ${FONT_REG} leading-[24px] min-w-px overflow-hidden text-[16px] text-black text-ellipsis`}>{note ? "Nota" : "Notas"}</p>
                <button type="button" onClick={() => setNoteOpen((v) => !v)} className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer">
                  <p className={`${FONT_REG} leading-[24px] text-[#0163e8] text-[16px] text-center whitespace-nowrap`}>{noteOpen ? "Guardar" : note ? "Editar nota" : "Añadir nota"}</p>
                </button>
              </div>
              {noteOpen ? (
                <textarea autoFocus value={note} onChange={(e) => setNote(e.target.value)} placeholder="Escribe una nota…" className="w-full rounded-[8px] border border-[#e0e0e0] px-[12px] py-[8px] text-[16px] text-black outline-none resize-none" rows={3} />
              ) : (
                note && <p className={`${FONT_REG} leading-[24px] text-[#646464] text-[16px] w-full`}>{note}</p>
              )}
            </div>
          </div>
        </div>

        {/* Histórico de movimientos */}
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] w-full">
          <p className={`${FONT_SB} leading-[27px] text-[18px] text-black`}>Histórico de movimientos</p>
          <div className="bg-white relative rounded-[16px] w-full">
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
              {history.map((h, i) => (
                <HistoryRow key={h.id} avatar={movement.avatar} concept={movement.concept} date={h.date} amount={h.amount} last={i === history.length - 1} />
              ))}
              <button type="button" onClick={goBack} className="content-stretch flex items-center p-[16px] relative shrink-0 w-full cursor-pointer">
                <p className={`flex-[1_0_0] ${FONT_REG} leading-[24px] text-[#0163e8] text-[16px]`}>Ir a todos los movimientos</p>
                <div className="h-[14px] relative shrink-0 w-[8px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14"><path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #0163E8)" fillRule="evenodd" transform="scale(-1,1) translate(-8,0)" /></svg></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
