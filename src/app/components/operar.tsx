import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useNavigation } from "../navigation";
import { useTransferScenario } from "../transfer-scenario/transfer-scenario-context";
import svgPaths from "../../imports/Operar/svg-ju282q34z3";
import moSvg from "../../imports/Masoperativas/svg-7bs2036z7u";

const EASE = [0.4, 0, 0.2, 1] as const;

const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";
const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

type Op = { label: string; icon: ReactNode; onClick?: () => void };

// ── Iconos (recompuestos del import, mismos paths/viewBox) ────────────
const icBizum = (
  <div className="content-stretch flex items-start px-[4.4px] py-[2px] relative shrink-0">
    <div className="h-[20px] relative shrink-0 w-[15.2px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2 20"><path clipRule="evenodd" d={svgPaths.p31952a00} fill="#006DFF" fillRule="evenodd" /></svg></div>
  </div>
);
const icEnviar = (
  <div className="content-stretch flex flex-col items-start px-[2px] py-[5.2px] relative shrink-0">
    <div className="h-[13.6px] relative shrink-0 w-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.5996"><path d={svgPaths.p1d0a8f80} fill="#006DFF" /></svg></div>
  </div>
);
const icSacar = (
  <div className="content-stretch flex items-start p-[2px] relative shrink-0">
    <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0003"><path d={svgPaths.p364cb5f0} fill="#006DFF" /></svg></div>
  </div>
);
const icLimites = (
  <div className="content-stretch flex items-center justify-center px-[2px] py-[3px] relative shrink-0 size-[24px]">
    <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
      <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
        <div className="relative size-full"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20"><path d={svgPaths.p36b65a40} fill="#006DFF" /></svg></div>
      </div>
    </div>
  </div>
);
const icImpuestos = (
  <div className="content-stretch flex items-start p-[2px] relative shrink-0">
    <div className="h-[20px] relative shrink-0 w-[19.995px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9951 20"><path d={svgPaths.p78e5600} fill="#006DFF" /></svg></div>
  </div>
);
const icDomic = (
  <div className="content-stretch flex items-start px-[3.2px] py-[2px] relative shrink-0">
    <div className="h-[20px] relative shrink-0 w-[17.6px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5996 20"><path d={svgPaths.p28e22700} fill="#006DFF" /></svg></div>
  </div>
);
const icCert = (
  <div className="content-stretch flex items-start px-[4px] py-[2px] relative shrink-0">
    <div className="h-[20px] relative shrink-0 w-[16px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20"><path d={svgPaths.p12dbcf00} fill="#006DFF" /></svg></div>
  </div>
);
const icBloquear = (
  <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0">
    <div className="h-[19.997px] relative shrink-0 w-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9971"><path d={svgPaths.p1165f180} fill="#006DFF" /></svg></div>
  </div>
);
const icAyuda = (
  <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]">
    <div className="h-[19.155px] relative shrink-0 w-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.1552"><g><path clipRule="evenodd" d={svgPaths.p2d310700} fill="#006DFF" fillRule="evenodd" /><path d={svgPaths.p2c25c500} fill="#006DFF" /><path d={svgPaths.p73a3300} fill="#006DFF" /></g></svg></div>
  </div>
);
const icFaq = (
  <div className="relative shrink-0 size-[24px]">
    <div className="absolute h-[19.968px] left-[2.01px] top-[2.02px] w-[20.016px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0156 19.9677"><path d={svgPaths.p3071030} fill="#006DFF" /></svg></div>
  </div>
);
const icCita = (
  <div className="content-stretch flex items-start p-[2px] relative shrink-0">
    <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p22c9a600} fill="#006DFF" /></svg></div>
  </div>
);
const icOficinas = (
  <div className="content-stretch flex items-start px-[4.4px] py-[2px] relative shrink-0">
    <div className="h-[20px] relative shrink-0 w-[15.2px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2002 20"><path d={svgPaths.p14273880} fill="#006DFF" /></svg></div>
  </div>
);

function QuickActionCell({ op }: { op: Op }) {
  return (
    <button type="button" onClick={op.onClick} className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-start max-w-[120px] min-w-[76px] py-[4px] relative cursor-pointer">
      <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]">
        <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
        {op.icon}
      </div>
      <p className={`[word-break:break-word] ${FONT_REG} leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]`}>{op.label}</p>
    </button>
  );
}

function Grid({ ops }: { ops: Op[] }) {
  return (
    <div className="content-stretch flex flex-wrap gap-y-[8px] items-start px-[16px] py-[12px] w-full">
      {ops.map((op) => (
        <div key={op.label} className="basis-1/4 flex justify-center">
          <QuickActionCell op={op} />
        </div>
      ))}
    </div>
  );
}

function MainView({ onVerTodas }: { onVerTodas: () => void }) {
  const { navigate, closeOperar } = useNavigation();
  const { openTransferFlow } = useTransferScenario();
  const [query, setQuery] = useState("");

  const goAyuda = () => {
    closeOperar();
    navigate("ayuda");
  };

  const goTransfer = () => {
    closeOperar();
    openTransferFlow("Operar · Enviar dinero");
  };

  const principales: Op[] = [
    { label: "Enviar Bizum", icon: icBizum },
    { label: "Enviar dinero", icon: icEnviar, onClick: goTransfer },
    { label: "Sacar dinero", icon: icSacar },
    { label: "Límites de tarjeta", icon: icLimites },
    { label: "Pagar impuestos", icon: icImpuestos },
    { label: "Consultar domiciliaciones", icon: icDomic },
    { label: "Solicitar certificado", icon: icCert },
    { label: "Bloquear tarjeta", icon: icBloquear },
  ];
  const ayuda: Op[] = [
    { label: "Centro de ayuda", icon: icAyuda, onClick: goAyuda },
    { label: "Preguntas frecuentes", icon: icFaq, onClick: goAyuda },
    { label: "Pedir cita", icon: icCita, onClick: goAyuda },
    { label: "Oficinas y cajeros", icon: icOficinas },
  ];

  const q = query.trim().toLowerCase();
  const filt = (ops: Op[]) => (q ? ops.filter((o) => o.label.toLowerCase().includes(q)) : ops);
  const principalesF = filt(principales);
  const ayudaF = filt(ayuda);

  return (
    <div className="flex flex-col bg-white w-full h-full overflow-hidden" data-name="Operar">
      {/* Header con cerrar */}
      <div className="bg-white content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full">
        <div className="h-[64px] relative w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
              <div className="flex-[1_0_0] min-w-px" />
              <button type="button" onClick={closeOperar} aria-label="Cerrar" className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
                <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0">
                  <div className="h-[19.996px] relative shrink-0 w-[19.998px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9977 19.996"><path clipRule="evenodd" d={svgPaths.p182c7200} fill="#006DFF" fillRule="evenodd" /></svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        {/* Buscador */}
        <div className="content-stretch flex flex-col items-center p-[16px] w-full">
          <div className="bg-white h-[56px] relative rounded-[4px] shrink-0 w-full">
            <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
              <div className="relative shrink-0 size-[20px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p26c6e700} fill="black" /></svg>
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar"
                className={`flex-[1_0_0] ${FONT_REG} leading-[24px] min-w-px text-[16px] text-black outline-none bg-transparent`}
              />
            </div>
          </div>
        </div>

        {/* Principales operativas */}
        {principalesF.length > 0 && (
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
            <div className="content-stretch flex items-center justify-between px-[16px] w-full">
              <p className={`${FONT_SB} leading-[27px] text-[18px] text-black`}>Principales operativas</p>
              {!q && (
                <button type="button" onClick={onVerTodas} className={`${FONT_REG} leading-[27px] text-[#0163e8] text-[18px] cursor-pointer`}>Ver todas</button>
              )}
            </div>
            <Grid ops={principalesF} />
          </div>
        )}

        {/* ¿Te podemos ayudar? */}
        {ayudaF.length > 0 && (
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full pt-[8px]">
            <div className="content-stretch flex items-center px-[16px] w-full">
              <p className={`${FONT_SB} leading-[27px] text-[18px] text-black`}>¿Te podemos ayudar?</p>
            </div>
            <Grid ops={ayudaF} />
          </div>
        )}

        {principalesF.length === 0 && ayudaF.length === 0 && (
          <p className={`${FONT_REG} leading-[24px] px-[16px] py-[24px] text-[#646464] text-[16px]`}>No hay operativas que coincidan.</p>
        )}
      </div>

      {/* Bottom nav con X central (cerrar) */}
      <div className="bg-white content-stretch flex h-[68px] items-end justify-center relative shrink-0 w-full">
        <div aria-hidden className="absolute border-t border-[#e0e0e0] inset-x-0 top-0 pointer-events-none" />
        <button type="button" onClick={() => navigate("inicio")} className="flex-[1_0_0] h-[68px] min-w-px relative cursor-pointer">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] pt-[8px] size-full">
            <div className="h-[24px] relative shrink-0 w-[26px]">
              <div className="absolute content-stretch flex items-start left-0 p-[2px] top-0">
                <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p1c059700} fill="#646464" /></svg></div>
              </div>
            </div>
            <p className={`${FONT_REG} leading-[20px] text-[#646464] text-[14px] text-center`}>Inicio</p>
          </div>
        </button>
        <div className="relative shrink-0 size-[80px]">
          <button type="button" onClick={closeOperar} aria-label="Cerrar" className="-translate-x-1/2 absolute left-1/2 rounded-[50px] size-[56px] top-0 cursor-pointer">
            <div className="absolute left-0 size-[56px] top-0"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56"><circle cx="28" cy="28" fill="#006DFF" r="28" /></svg></div>
            <div className="absolute content-stretch flex flex-col inset-[28.57%] items-start overflow-clip p-[2px]">
              <div className="h-[19.996px] relative shrink-0 w-[19.998px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9977 19.996"><path clipRule="evenodd" d={svgPaths.p182c7200} fill="white" fillRule="evenodd" /></svg></div>
            </div>
          </button>
        </div>
        <button type="button" onClick={() => navigate("contratar")} className="flex-[1_0_0] h-[68px] min-w-px relative cursor-pointer">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] pt-[8px] size-full">
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute content-stretch flex items-start left-0 overflow-clip p-[2px] top-0">
                <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p16c2c640} fill="#646464" /></svg></div>
              </div>
            </div>
            <p className={`${FONT_REG} leading-[20px] text-[#646464] text-[14px] text-center`}>Contratar</p>
          </div>
        </button>
      </div>
    </div>
  );
}

// ── Más operativas (pantalla "Ver todas") ─────────────────────────────
const SECTIONS: { title: string; items: string[] }[] = [
  {
    title: "Cuentas",
    items: [
      "Enviar bizum",
      "Enviar dinero",
      "Traspaso entre mis cuentas",
      "Pagar impuestos",
      "Consultar impuestos",
      "Consultar domiciliaciones",
      "Consultar recibos no domiciliados",
      "Pagar recibos no domiciliados",
      "Solicitar certificado",
      "Consultar certificados",
      "Tus finanzas",
      "Trasladar cuentas de otro banco",
    ],
  },
  {
    title: "Tarjetas",
    items: [
      "Bloquear tarjeta",
      "Ver CVV y fecha caducidad",
      "Límites de tarjeta",
      "Ver detalle de tarjeta",
      "Ver PIN tarjeta",
      "Sabadell Cashback",
      "Sacar dinero",
      "Añadir la tarjeta al móvil",
      "Fraccionar pagos",
      "Ver liquidaciones",
      "Forma de pago",
      "Traspaso de tarjeta a cuenta",
      "Traspaso de cuenta a tarjeta",
      "Ampliar límite de crédito",
      "Recarga de móviles",
    ],
  },
  {
    title: "Gestiones personales",
    items: ["Gestionar perfil", "Consultar documentación", "Revisar firmas pendientes", "Actualizar datos personales", "Ver contratos", "Ver buzón de mensajes", "Ver configuración"],
  },
  {
    title: "Ayuda",
    items: ["Centro de ayuda", "Preguntas frecuentes", "Pedir cita", "Ver agenda", "Oficinas y cajeros", "Asistente Virtual"],
  },
];

const AYUDA_LINKS = new Set(["Centro de ayuda", "Preguntas frecuentes", "Pedir cita", "Oficinas y cajeros", "Ver agenda", "Asistente Virtual"]);

function MasOperativas({ onBack }: { onBack: () => void }) {
  const { navigate, closeOperar } = useNavigation();
  const [chip, setChip] = useState("Todas");
  const [query, setQuery] = useState("");

  const goAyuda = () => {
    closeOperar();
    navigate("ayuda");
  };

  const chips = ["Todas", ...SECTIONS.map((s) => s.title)];
  const q = query.trim().toLowerCase();
  const sections = SECTIONS
    .filter((s) => chip === "Todas" || s.title === chip)
    .map((s) => ({ title: s.title, items: q ? s.items.filter((i) => i.toLowerCase().includes(q)) : s.items }))
    .filter((s) => s.items.length > 0);

  return (
    <div className="flex flex-col bg-white w-full h-full overflow-hidden" data-name="Operativas">
      {/* Header */}
      <div className="bg-white content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full">
        <div className="h-[64px] relative w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative size-full">
              <button type="button" onClick={onBack} aria-label="Volver" className="content-stretch flex items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
                <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0">
                  <div className="h-[20.002px] relative shrink-0 w-[10px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017"><path clipRule="evenodd" d={moSvg.p11976000} fill="#006DFF" fillRule="evenodd" /></svg></div>
                </div>
              </button>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative">
                <p className={`[word-break:break-word] ${FONT_BOLD} leading-[20px] text-[14px] text-black text-center`}>Operativas</p>
              </div>
              <button type="button" onClick={goAyuda} aria-label="Centro de ayuda" className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer">
                <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0">
                  <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={moSvg.p37f41b00} fill="#006DFF" /></svg></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        {/* Buscador + chips */}
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] w-full">
          <div className="bg-white h-[56px] relative rounded-[4px] shrink-0 w-full">
            <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
              <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={moSvg.p26c6e700} fill="black" /></svg></div>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={'Busca palabras como: "Cambiar Pin"'} className={`flex-[1_0_0] ${FONT_REG} leading-[24px] min-w-px text-[16px] text-black outline-none bg-transparent`} />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center overflow-x-auto w-full pb-[2px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {chips.map((c) => {
              const active = c === chip;
              return (
                <button key={c} type="button" onClick={() => setChip(c)} className={`content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0 cursor-pointer ${active ? "bg-black" : ""}`}>
                  {!active && <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />}
                  <p className={`${FONT_REG} leading-[24px] text-[16px] text-center whitespace-nowrap ${active ? "text-white" : "text-black"}`}>{c}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secciones */}
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] pb-[24px] w-full">
          {sections.map((s) => (
            <div key={s.title} className="content-stretch flex flex-col gap-[12px] items-start w-full">
              <p className={`${FONT_BOLD} leading-[24px] text-[16px] text-black`}>{s.title}</p>
              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                {s.items.map((item) => (
                  <button key={item} type="button" onClick={AYUDA_LINKS.has(item) ? goAyuda : undefined} className={`${FONT_REG} leading-[24px] text-[#0163e8] text-[16px] text-left cursor-pointer`}>{item}</button>
                ))}
              </div>
            </div>
          ))}
          {sections.length === 0 && <p className={`${FONT_REG} leading-[24px] py-[16px] text-[#646464] text-[16px]`}>No hay operativas que coincidan.</p>}
        </div>
      </div>
    </div>
  );
}

// ── Manager: vista principal + push horizontal a "Más operativas" ─────
export default function Operar() {
  const [view, setView] = useState<"main" | "todas">("main");
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <MainView onVerTodas={() => setView("todas")} />
      <AnimatePresence>
        {view === "todas" && (
          <motion.div
            key="todas"
            className="absolute inset-0 z-[10]"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <MasOperativas onBack={() => setView("main")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
