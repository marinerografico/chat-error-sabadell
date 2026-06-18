import { useState, type ReactNode } from "react";
import { useNavigation, type AccountId } from "../navigation";
import { HideableAmount, useBalanceVisibility } from "../balance-visibility";
import detSvg from "../../imports/CardpaymentDetail/svg-waowxgxsxd";
import bizSvg from "../../imports/BizumDetail/svg-z925tia6v5";
import adeSvg from "../../imports/Adeudo/svg-szgr42s4ll";
import traSvg from "../../imports/TransferDetail/svg-i49cddij1e";
import setSvg from "../../imports/CardSettlement/svg-l74wt3yy8x";
import imgMapa from "../../imports/CardpaymentDetail/e5ee152311448b40a9a634159a7a41b21914258e.png";
import imgZara from "../../imports/CuentaMain/ffba026dda1342c0cac019af1f2bd66d8a74aa15.png";
import imgUberEats from "../../imports/CreditCard/c6128aafcd5c61c40b69f2066cc110dc6b8c45fe.png";
import imgAgbar from "../../imports/CardpaymentDetail/8d8af54c0f13ebd2e09efa6493290829085e6c76.png";
import { ACCOUNTS, findAccountMovement, moneyParts, type Movement } from "../data/accounts";
import { HOLDER } from "../data/cards";

const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";
const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

const BRAND: Record<string, { src: string; bg: string }> = {
  zara: { src: imgZara, bg: "#000000" },
  uberEats: { src: imgUberEats, bg: "#000000" },
  agbar: { src: imgAgbar, bg: "#0a2e6e" },
};

// ── Money (respeta el ojo global) ─────────────────────────────────────
function Money({ value, signed, intClass, decClass, currencyClass }: { value: number; signed: boolean; intClass: string; decClass: string; currencyClass: string }) {
  const { int, dec } = moneyParts(value);
  const sign = signed ? (value >= 0 ? "+" : "-") : "";
  return (
    <HideableAmount dotsClassName={intClass}>
      <p className={intClass}>{`${sign}${int}`}</p>
      <p className={decClass}>{dec}</p>
      <span className="content-stretch flex items-baseline pl-[4px] relative shrink-0"><p className={currencyClass}>€</p></span>
    </HideableAmount>
  );
}

// ── Avatares por tipo ─────────────────────────────────────────────────
function strokeIcon(d: string, color: string) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="block size-full">
      {d.split("|").map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

function HeroAvatar({ m, size }: { m: Movement; size: number }) {
  const ring = (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72"><circle cx="36" cy="36" r="35.5" stroke="#919191" /></svg>
    </div>
  );
  const iconSize = Math.round(size * 0.42);
  const wrap = (children: ReactNode, bg: string, withRing = true) => (
    <div className="relative rounded-full shrink-0 overflow-hidden flex items-center justify-center" style={{ width: size, height: size, backgroundColor: bg }}>
      {children}
      {withRing && ring}
    </div>
  );
  const letter = (m.counterparty || m.concept).trim().charAt(0).toUpperCase();

  if (m.detailType === "compra") {
    if (m.avatar.kind === "image") {
      const b = BRAND[m.avatar.img];
      return wrap(<img alt="" className="absolute inset-0 size-full object-cover" src={b.src} />, b.bg);
    }
    const l = m.avatar.kind === "letter" ? m.avatar.letter : letter;
    return wrap(<span className={`${FONT_BOLD} text-[#646464]`} style={{ fontSize: size / 2 }}>{l}</span>, "#fafafa");
  }
  if (m.detailType === "recibo") {
    if (m.avatar.kind === "image") {
      const b = BRAND[m.avatar.img];
      return wrap(<img alt="" className="absolute inset-0 size-full object-cover" src={b.src} />, b.bg);
    }
    return wrap(<div style={{ width: iconSize, height: iconSize }}>{strokeIcon("M7 3h7l4 4v14H7z|M9 9h6|M9 13h6|M9 17h4", "white")}</div>, "#0a2e6e", false);
  }
  if (m.detailType === "transferencia") {
    return wrap(<div style={{ width: iconSize, height: iconSize }}>{strokeIcon("M7 8h12l-3-3|M17 16H5l3 3", "#646464")}</div>, "#fafafa");
  }
  if (m.detailType === "liquidacion") {
    return wrap(<div style={{ width: iconSize, height: iconSize }}>{strokeIcon("M3 6h18v12H3z|M3 10h18", "#646464")}</div>, "#fafafa");
  }
  // bizum / ingreso → círculo gris con inicial
  return wrap(<span className={`${FONT_BOLD} text-[#646464]`} style={{ fontSize: size / 2 }}>{letter}</span>, "#fafafa");
}

// ── Quick actions ─────────────────────────────────────────────────────
function ActionIcon({ d, svgPath, viewBox = "0 0 20 20" }: { d?: ReactNode; svgPath?: string; viewBox?: string }) {
  if (d) return <div className="relative shrink-0 size-[20px]">{d}</div>;
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}><path d={svgPath} fill="#006DFF" /></svg>
    </div>
  );
}

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

function InfoLabel({ head, body }: { head: string; body: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[100px] relative shrink-0 w-full">
      <p className={`${FONT_REG} leading-[21px] text-[#646464] text-[14px]`}>{head}</p>
      <p className={`[word-break:break-word] ${FONT_REG} leading-[27px] min-w-full relative text-[18px] text-black`}>{body}</p>
    </div>
  );
}

function HistoryRow({ m, amount, date, last }: { m: Movement; amount: number; date: string; last: boolean }) {
  const income = amount >= 0;
  return (
    <div className="w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] w-full">
        <div className="pt-[2px] shrink-0"><HeroAvatar m={m} size={32} /></div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
          <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
            <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col ${FONT_REG} justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis`}>
              <p className="leading-[24px] line-clamp-2">{m.concept}</p>
            </div>
            <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0">
              <Money value={amount} signed intClass={`${FONT_REG} leading-[24px] text-[16px] ${income ? "text-[#008626]" : "text-black"} text-right whitespace-nowrap`} decClass={`${FONT_REG} leading-[20px] text-[14px] ${income ? "text-[#008626]" : "text-black"} text-right whitespace-nowrap`} currencyClass={`${FONT_REG} leading-[20px] text-[14px] ${income ? "text-[#008626]" : "text-black"} text-right whitespace-nowrap`} />
            </div>
          </div>
          <p className={`${FONT_REG} leading-[20px] text-[#646464] text-[14px]`}>{date}</p>
        </div>
      </div>
      {!last && <div className="px-[12px] w-full"><div className="h-px w-full" style={{ backgroundColor: "#E0E0E0" }} /></div>}
    </div>
  );
}

function buildHistory(m: Movement): { id: string; date: string; amount: number }[] {
  const base = Math.abs(m.amount);
  const sign = m.amount >= 0 ? 1 : -1;
  const rows = [
    { id: "h1", date: "29 Dic", amount: sign * Math.round(base * 0.9 * 100) / 100 },
    { id: "h2", date: "27 Nov", amount: sign * Math.round(base * 1.25 * 100) / 100 },
    { id: "h3", date: "14 Oct", amount: sign * Math.round(base * 1.6 * 100) / 100 },
  ];
  // El ingreso muestra solo un movimiento previo en el diseño.
  return m.detailType === "ingreso" ? rows.slice(0, 1) : rows;
}

// ── Page ──────────────────────────────────────────────────────────────
export default function MovementDetail({ account, movementId }: { account: AccountId; movementId: string }) {
  const { navigate, goBack } = useNavigation();
  const { hidden, toggle } = useBalanceVisibility();
  const acc = ACCOUNTS[account];
  const m = findAccountMovement(account, movementId) ?? acc.movements[0];
  const [showMore, setShowMore] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState("");

  const income = m.amount >= 0;
  const openMap = () => {
    if (m.location) window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(m.location.query)}`, "_blank");
  };
  const share = () => {
    if (navigator.share) navigator.share({ title: m.concept, text: `${m.concept} ${m.datetime}` }).catch(() => {});
  };

  // Acciones rápidas según tipo.
  const actions: { label: string; node: ReactNode; onClick?: () => void }[] = [];
  const A = {
    fraccionar: <ActionIcon svgPath={detSvg.p2894e280} />,
    dividir: (
      <div className="content-stretch flex items-start overflow-clip relative shrink-0 size-[24px]"><div className="absolute inset-[8.33%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={detSvg.p1c86db00} fill="#006DFF" /></svg></div></div>
    ),
    compartir: <ActionIcon svgPath={detSvg.p32590e80} />,
    verDoc: <ActionIcon svgPath={bizSvg.p212b6300} />,
    devolver: <ActionIcon svgPath={adeSvg.p138f1e80} />,
    justificante: <ActionIcon svgPath={traSvg.p2fb86b70} />,
    aplazar: <ActionIcon svgPath={setSvg.p3cbae300} />,
  };
  if (m.detailType === "compra") actions.push({ label: "Fraccionar pago", node: A.fraccionar }, { label: "Dividir con Bizum", node: A.dividir }, { label: "Compartir detalle", node: A.compartir, onClick: share });
  else if (m.detailType === "bizum") actions.push({ label: "Fraccionar pago", node: A.fraccionar }, { label: "Dividir con Bizum", node: A.dividir }, { label: "Ver documento", node: A.verDoc }, { label: "Compartir detalle", node: A.compartir, onClick: share });
  else if (m.detailType === "recibo") actions.push({ label: "Devolver recibo", node: A.devolver }, { label: "Dividir con Bizum", node: A.dividir }, { label: "Compartir detalle", node: A.compartir, onClick: share });
  else if (m.detailType === "ingreso") actions.push({ label: "Compartir detalle", node: A.compartir, onClick: share });
  else if (m.detailType === "transferencia") actions.push({ label: "Ver justificante", node: A.justificante }, { label: "Dividir con Bizum", node: A.dividir }, { label: "Compartir detalle", node: A.compartir, onClick: share });
  else if (m.detailType === "liquidacion") actions.push({ label: "Aplazar pago", node: A.aplazar }, { label: "Ver documento", node: A.verDoc }, { label: "Dividir con Bizum", node: A.dividir }, { label: "Compartir detalle", node: A.compartir, onClick: share });

  const history = buildHistory(m);
  const amountColor = income ? "text-[#008626]" : "text-black";

  return (
    <div className="flex flex-col bg-[#fafafa] w-full h-full overflow-hidden" data-name="Detalle de movimiento">
      {/* Header */}
      <div className="bg-white content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full">
        <div className="h-[64px] relative w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
              <button type="button" onClick={goBack} aria-label="Volver" className="content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
                <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0"><div className="h-[20.002px] relative shrink-0 w-[10px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017"><path clipRule="evenodd" d={detSvg.p11976000} fill="#006DFF" fillRule="evenodd" /></svg></div></div>
              </button>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative"><p className={`${FONT_BOLD} leading-[20px] text-[14px] text-black text-center`}>Detalle de movimiento</p></div>
              <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
                <button type="button" onClick={toggle} aria-label={hidden ? "Mostrar saldos" : "Ocultar saldos"} aria-pressed={hidden} className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
                  <div className="content-stretch flex flex-col items-center py-[1.93px] relative shrink-0 size-[24px]"><div className="h-[17.075px] relative shrink-0 w-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.0752"><path d={detSvg.pbcaae00} fill="#006DFF" />{hidden && (<><line x1="2" y1="1.5" x2="18" y2="15.5" stroke="white" strokeWidth="3.4" strokeLinecap="round" /><line x1="2" y1="1.5" x2="18" y2="15.5" stroke="#006DFF" strokeWidth="1.7" strokeLinecap="round" /></>)}</svg></div></div>
                </button>
                <button type="button" onClick={() => navigate("ayuda")} aria-label="Centro de ayuda" className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
                  <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0"><div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={detSvg.p37f41b00} fill="#006DFF" /></svg></div></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        {/* Hero */}
        <div className="bg-white content-stretch flex flex-col items-center pb-[24px] relative shrink-0 w-full">
          {m.detailType === "compra" && m.location ? (
            <>
              <button type="button" onClick={openMap} aria-label={`Ver ${m.location.label} en Google Maps`} className="h-[156px] mb-[-32px] relative shrink-0 w-full cursor-pointer">
                <img alt="Mapa de la compra" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMapa} />
              </button>
              <button type="button" onClick={openMap} className="absolute bg-white min-w-[96px] right-[16px] rounded-[50px] top-[16px] cursor-pointer" aria-label="Abrir ubicación en Google Maps">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip px-[16px] py-[4px] relative rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="content-stretch flex items-start px-[4.4px] py-[2px] relative shrink-0"><div className="h-[20px] relative shrink-0 w-[15.2px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2002 20"><path d={detSvg.p14273880} fill="#006DFF" /></svg></div></div>
                    <p className={`${FONT_REG} leading-[24px] text-[#006dff] text-[16px] text-center whitespace-nowrap`}>{m.location.label}</p>
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
              <HeroAvatar m={m} size={72} />
              <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full">
                <p className={`[word-break:break-word] ${FONT_REG} leading-[24px] max-h-[48px] min-w-full overflow-hidden relative shrink-0 text-[#646464] text-[16px] text-center text-ellipsis w-[min-content]`}>{m.concept}</p>
                <div className="content-stretch flex items-baseline relative shrink-0">
                  <Money value={m.amount} signed intClass={`${FONT_SB} leading-[32px] text-[24px] ${amountColor} whitespace-nowrap`} decClass={`${FONT_SB} leading-[28px] text-[18px] ${amountColor} whitespace-nowrap`} currencyClass={`${FONT_SB} leading-[28px] text-[18px] ${amountColor} whitespace-nowrap`} />
                </div>
                <p className={`${FONT_BOLD} leading-[24px] text-[16px] text-black text-center whitespace-nowrap`}>{m.category}</p>
                <p className={`${FONT_REG} leading-[24px] text-[#646464] text-[16px] text-center`}>{m.datetime}</p>
                <p className={`${FONT_REG} leading-[24px] text-[16px] text-black text-center whitespace-nowrap`}>{`Cuenta ${acc.ibanMasked}`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[12px] w-full">
          {actions.map((a) => (
            <QuickAction key={a.label} label={a.label} onClick={a.onClick}>{a.node}</QuickAction>
          ))}
        </div>

        {/* Banner liquidación */}
        {m.detailType === "liquidacion" && (
          <div className="px-[16px] pt-[8px] w-full">
            <div className="bg-[#d6efe0] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] w-full">
              <p className={`${FONT_REG} leading-[20px] text-[#424242] text-[14px]`}>Pago revolving</p>
              <p className={`${FONT_REG} leading-[24px] text-[16px] text-black`}>Puedes aplazar este pago y elegir la cuota más conveniente para ti</p>
              <p className={`${FONT_SB} leading-[28px] text-[18px] text-black`}>{`desde ${moneyParts(m.revolving ?? 30).int}${moneyParts(m.revolving ?? 30).dec} €/mes`}</p>
              <button type="button" className="bg-black content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[100px] w-full cursor-pointer">
                <p className={`${FONT_REG} leading-[24px] text-[16px] text-center text-white`}>Ver opciones de aplazamiento</p>
              </button>
            </div>
          </div>
        )}

        {/* Detalle del movimiento */}
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] pt-[16px] w-full">
          <p className={`${FONT_SB} leading-[27px] text-[18px] text-black`}>Detalle del movimiento</p>
          <div className="bg-white relative rounded-[16px] w-full">
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
              <InfoLabel head="Concepto" body={m.concept} />
              <InfoLabel head="Cuenta" body={acc.ibanFull} />
              <InfoLabel head="Titular de la cuenta" body={HOLDER} />
              {showMore && (
                <>
                  <InfoLabel head="Categoría" body={m.category} />
                  <InfoLabel head="Fecha y hora" body={m.datetime} />
                </>
              )}
              <button type="button" onClick={() => setShowMore((v) => !v)} className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer">
                <p className={`${FONT_REG} leading-[24px] text-[#0163e8] text-[16px] text-center whitespace-nowrap`}>{showMore ? "Mostrar menos" : "Mostrar más"}</p>
                <div className="content-stretch flex flex-col items-start px-px py-[4px] relative shrink-0" style={{ transform: showMore ? "rotate(180deg)" : undefined }}><div className="h-[8px] relative shrink-0 w-[14px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8"><path clipRule="evenodd" d={detSvg.p2261ad00} fill="#0163E8" fillRule="evenodd" /></svg></div></div>
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
                <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0"><div className="h-[19.996px] relative shrink-0 w-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9961"><path d={detSvg.p18e46300} fill="black" /></svg></div></div>
                <p className={`flex-[1_0_0] ${FONT_REG} leading-[24px] min-w-px overflow-hidden text-[16px] text-black text-ellipsis`}>{note ? "Nota" : "Notas"}</p>
                <button type="button" onClick={() => setNoteOpen((v) => !v)} className={`${FONT_REG} leading-[24px] text-[#0163e8] text-[16px] cursor-pointer`}>{noteOpen ? "Guardar" : note ? "Editar nota" : "Añadir nota"}</button>
              </div>
              {noteOpen ? (
                <textarea autoFocus value={note} onChange={(e) => setNote(e.target.value)} placeholder="Escribe una nota…" rows={3} className="w-full rounded-[8px] border border-[#e0e0e0] px-[12px] py-[8px] text-[16px] text-black outline-none resize-none" />
              ) : (
                note && <p className={`${FONT_REG} leading-[24px] text-[#646464] text-[16px] w-full`}>{note}</p>
              )}
            </div>
          </div>
        </div>

        {/* Histórico de movimientos (opcional) */}
        {m.hasHistory && (
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] w-full">
            <p className={`${FONT_SB} leading-[27px] text-[18px] text-black`}>Histórico de movimientos</p>
            <div className="bg-white relative rounded-[16px] w-full">
              <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
              <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                {history.map((h, i) => (
                  <HistoryRow key={h.id} m={m} amount={h.amount} date={h.date} last={i === history.length - 1} />
                ))}
                <button type="button" onClick={goBack} className="content-stretch flex items-center p-[16px] relative shrink-0 w-full cursor-pointer">
                  <p className={`flex-[1_0_0] ${FONT_REG} leading-[24px] text-[#0163e8] text-[16px]`}>Ir a todos los movimientos</p>
                  <div className="h-[14px] relative shrink-0 w-[8px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14"><path clipRule="evenodd" d={detSvg.p11976000} fill="#0163E8" fillRule="evenodd" transform="scale(-1,1) translate(-8,0)" /></svg></div>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="h-[8px] w-full" />
      </div>
    </div>
  );
}
