import svgPaths from "../../imports/SplashScreen/svg-34bt8roljk";

// Splash (renderizado fiel al diseño de Figma importado): fondo negro con el
// logotipo Banc Sabadell centrado. Sin interacción; el control de los 2 s y de
// las transiciones de entrada/salida vive en boot-flow.tsx.
export default function SplashScreen() {
  return (
    <div className="bg-black relative size-full" data-name="splash screen">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[56px] left-[calc(50%-1px)] overflow-clip top-[calc(50%-1px)] w-[218px]" data-name="Logotype">
        <div className="absolute inset-[25.15%_3.85%_14.51%_16.97%]" data-name="Sabadell">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172.609 33.788">
            <path clipRule="evenodd" d={svgPaths.p3055ae80} fill="var(--fill-0, white)" fillRule="evenodd" id="Sabadell" />
          </svg>
        </div>
        <div className="absolute inset-[14.39%_84.04%_39.1%_3.95%]" data-name="B">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.1786 26.047">
            <path clipRule="evenodd" d={svgPaths.p3064b600} fill="var(--fill-0, white)" fillRule="evenodd" id="B" />
          </svg>
        </div>
      </div>
    </div>
  );
}
