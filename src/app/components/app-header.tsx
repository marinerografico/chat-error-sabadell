import { useNavigation } from "../navigation";
import { useBalanceVisibility } from "../balance-visibility";
import svgPaths from "../../imports/Inicio/svg-1ii20ao3qk";

// ── Barra superior compartida ─────────────────────────────────────────
// Es la MISMA barra que en Inicio (avatar + ojo + buzón + chat). Se usa tanto
// en Inicio como en Contratar para que sean idénticas y se mantengan en sync.
// Glifos tomados directamente del import de Figma de Inicio.

// Ojo: oculta/muestra saldos (estado global). Al ocultar se superpone una
// barra diagonal sobre el glifo original.
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

export default function AppHeader() {
  const { navigate } = useNavigation();
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full" data-name="App Header">
      <div className="h-[64px] max-w-[767px] relative shrink-0 w-full">
        <div className="flex flex-row items-center max-w-[inherit] size-full">
          <div className="content-stretch flex items-center max-w-[inherit] p-[16px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
              {/* Avatar usuario + badge */}
              <div className="bg-[#eee] content-stretch flex items-center relative rounded-[50px] shrink-0 size-[40px]" data-name="Avatar">
                <div className="bg-[#eee] flex-[1_0_0] h-full min-w-px relative rounded-[50px]">
                  <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[50px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
                      <div className="content-stretch flex items-start px-[2px] py-px relative shrink-0">
                        <div className="h-[14px] relative shrink-0 w-[12px]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                            <path d={svgPaths.p905a500} fill="var(--fill-0, #646464)" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute right-[-2px] size-[16px] top-[-2px]" data-name="Badge">
                  <div className="absolute bg-[#fc00f4] left-[4px] rounded-[50px] size-[8px] top-[4px]">
                    <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[52px]" />
                  </div>
                </div>
              </div>

              {/* Acciones: ojo + buzón + chat */}
              <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Actions">
                <EyeButton />
                {/* Buzón (mensajes) con badge */}
                <button
                  type="button"
                  aria-label="Buzón"
                  className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer"
                >
                  <div className="content-stretch flex flex-col items-start overflow-clip px-[2px] py-[4px] relative shrink-0">
                    <div className="h-[16px] relative shrink-0 w-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                        <path d={svgPaths.p354bb680} fill="var(--fill-0, #006DFF)" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute right-0 size-[16px] top-0" data-name="Badge">
                    <div className="absolute bg-[#fc00f4] left-[4px] rounded-[64px] size-[8px] top-[4px]">
                      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
                    </div>
                  </div>
                </button>
                {/* Chat / centro de ayuda */}
                <button
                  type="button"
                  onClick={() => navigate("ayuda")}
                  aria-label="Centro de ayuda"
                  className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer"
                >
                  <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]">
                    <div className="h-[19.155px] relative shrink-0 w-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.1552">
                        <g>
                          <path d={svgPaths.p114f6400} fill="#006DFF" />
                          <path d={svgPaths.p3bc94c80} fill="white" />
                          <path d={svgPaths.p73a3300} fill="white" />
                        </g>
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
