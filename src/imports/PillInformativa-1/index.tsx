import svgPaths from "./svg-di95knggw4";

function Icon() {
  return (
    <div className="bg-[#e1f7ff] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[78px] shrink-0 size-[40px]" data-name="Icon">
      <div className="content-stretch flex items-start px-[3px] py-[2px] relative shrink-0" data-name="Bell">
        <div className="h-[20px] relative shrink-0 w-[18px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d={svgPaths.p1a229b80} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Configurar perfil</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pt-[4px] relative" data-name="Text">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-black w-[min-content]">
        <span className="leading-[24px] text-[16px]">Laura,</span>
        <span className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] text-[16px]">{` te queda muy poco`}</span>
        <span className="leading-[24px] text-[16px]">{` para completar la configuración `}</span>
      </p>
      <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
        <Content1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

export default function PillInformativa() {
  return (
    <div className="relative size-full" data-name="pill informativa">
      <div className="absolute bg-[#fafafa] content-stretch flex flex-col items-center left-0 overflow-clip pb-[24px] px-[16px] top-0 w-[390px]" data-name="Content carousel">
        <div className="bg-white content-stretch drop-shadow-[0px_3px_7px_rgba(0,0,0,0.05),0px_4px_10px_rgba(0,0,0,0.05)] flex items-start justify-center max-h-[136px] min-h-[84px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Servicing notices">
          <Content />
        </div>
      </div>
      <div className="absolute flex h-[24.391px] items-center justify-center left-[136.55px] top-[72px] w-[4.453px]">
        <div className="flex-none rotate-[-79.65deg]">
          <div className="h-0 relative w-[24.794px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.7937 1">
                <line id="Line 1" stroke="var(--stroke-0, black)" x2="24.7937" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}