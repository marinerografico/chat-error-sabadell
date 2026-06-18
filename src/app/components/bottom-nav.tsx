import { useNavigation, type Page } from "../navigation";
import svgPaths from "../../imports/ContratarInicio/svg-r1smi97a2a";

const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

// ── Barra de navegación inferior (única fuente de verdad) ──────────────
// Se renderiza UNA sola vez desde App.tsx. App decide en qué pantallas se
// muestra (whitelist) y cuál es el ítem activo. Las páginas NO incluyen su
// propia barra. Ver NAV_PAGES / navActive en App.tsx y la regla de proyecto
// en guidelines/Guidelines.md.
export type BottomNavActive = "inicio" | "contratar" | "none";

function Item({ active, label, onClick, children }: { active: boolean; label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="flex-[1_0_0] h-[68px] min-w-px relative cursor-pointer">
      <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] size-full">
        <div className="h-[4px] w-[24px]">
          {active && <div className="bg-[#006dff] h-[4px] rounded-bl-[4px] rounded-br-[4px] w-[24px]" />}
        </div>
        {children}
        <p className={`${active ? FONT_BOLD : FONT_REG} leading-[20px] text-[14px] text-center`} style={{ color: active ? "#000000" : "#646464" }}>
          {label}
        </p>
      </div>
    </button>
  );
}

export default function BottomNav({ active }: { active: BottomNavActive }) {
  const { navigate, openOperar } = useNavigation();
  const inicioActive = active === "inicio";
  const contratarActive = active === "contratar";
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_-1px_2px_rgba(0,0,0,0.08),0px_-1px_2px_rgba(0,0,0,0.04)] flex h-[68px] items-end justify-center relative shrink-0 w-full">
      <Item active={inicioActive} label="Inicio" onClick={() => navigate("inicio")}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={inicioActive ? "#000000" : "#646464"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
        </svg>
      </Item>

      <div className="relative shrink-0 size-[80px]">
        <button type="button" onClick={openOperar} aria-label="Operar" className="-translate-x-1/2 absolute left-1/2 rounded-[50px] size-[56px] top-0 cursor-pointer">
          <div className="absolute left-0 size-[56px] top-0">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
              <circle cx="28" cy="28" fill="#006DFF" r="28" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.pf8fbb80} fill="white" />
            </svg>
          </div>
        </button>
      </div>

      <Item active={contratarActive} label="Contratar" onClick={() => navigate("contratar")}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill={contratarActive ? "#000000" : "none"} stroke={contratarActive ? "none" : "#646464"} strokeWidth="1.8">
          {contratarActive ? (
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 9h4v2h-4v4h-2v-4H7v-2h4V7h2Z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8M8 12h8" strokeLinecap="round" />
            </>
          )}
        </svg>
      </Item>
    </div>
  );
}

// Pantallas que muestran barra inferior y su ítem activo.
export const NAV_ACTIVE: Partial<Record<Page, BottomNavActive>> = {
  inicio: "inicio",
  contratar: "contratar",
  cuentas: "none",
  tarjetas: "none",
};
