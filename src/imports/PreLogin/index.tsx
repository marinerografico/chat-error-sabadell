import svgPaths from "./svg-o2iyc19jon";
import imgImage406 from "./d22b22b88e834e80c9ea53c0009c6983f4a2af65.png";

function Back() {
  return <div className="content-stretch flex items-start justify-end relative shrink-0 size-[32px]" data-name="Back" />;
}

function Back1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Back">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Action" />
    </div>
  );
}

function Text() {
  return <div className="content-stretch flex flex-col h-[44px] items-center justify-center relative shrink-0 w-full" data-name="Text" />;
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Action 2">
        <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Size=SM, Style=Filled">
          <div className="h-[19.155px] relative shrink-0 w-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.1552">
              <g id="vector">
                <path d={svgPaths.p114f6400} fill="#006DFF" />
                <path d={svgPaths.p3bc94c80} fill="white" />
                <path d={svgPaths.p73a3300} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[64px] max-w-[767px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center max-w-[inherit] p-[16px] relative size-full">
          <Back />
          <Back1 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative" data-name="_Name">
            <Text />
          </div>
          <Actions />
        </div>
      </div>
    </div>
  );
}

function NavigationSlot() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="navigation slot">
      <div className="bg-white content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full" data-name="Status Bar">
        <Content />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Consultar</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] min-h-px relative w-[390px]" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center p-[32px] relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[0px] text-black w-[min-content]">
            <span className="leading-[40px] text-[32px]">{`Consulta tu correspondencia y `}</span>
            <span className="leading-[40px] text-[#006dff] text-[32px]">descarga los extractos que desees</span>
          </p>
          <div className="bg-white h-[48px] max-w-[500px] min-w-[240px] relative rounded-[50px] shrink-0" data-name="Button Primary">
            <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] min-w-[inherit] overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
              <Content2 />
            </div>
            <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundImg() {
  return (
    <div className="content-stretch flex h-[406px] items-start overflow-clip relative shrink-0 w-full" data-name="Background Img">
      <div className="h-[729.805px] relative shrink-0 w-[390px]" data-name="image 406">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage406} />
      </div>
    </div>
  );
}

function PreLoginImage() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-[1_0_0] flex-col h-[733px] items-start min-w-px overflow-clip relative" data-name="__PreLogin_Image">
      <Body1 />
      <BackgroundImg />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <PreLoginImage />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section">
      <Content1 />
    </div>
  );
}

function BodySlot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-w-px relative rounded-[16px]" data-name="Body Slot">
      <Section />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Body">
      <BodySlot />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Acceder</p>
    </div>
  );
}

function SwapContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Swap content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] py-[24px] relative size-full">
          <div className="bg-[#006dff] min-w-[96px] relative rounded-[50px] shrink-0 w-full" data-name="Category=Primary, Status=Default, Size=MD, No text=False">
            <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
                <Content3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomActions() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Bottom - Actions">
      <div className="bg-white content-stretch flex flex-col items-center max-w-[767px] min-h-[73px] min-w-[328px] overflow-clip relative shrink-0 w-full" data-name="Sticky panel">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <path clipRule="evenodd" d="M390 0V1H0V0H390Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
        <SwapContent />
      </div>
    </div>
  );
}

export default function PreLogin() {
  return (
    <div className="relative size-full" data-name="pre login">
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 max-w-[767px] min-w-[360px] overflow-clip top-0 w-[390px]" data-name="PRE-LOGIN/02_Welcome">
        <NavigationSlot />
        <Body />
        <BottomActions />
      </div>
    </div>
  );
}