import svgPaths from "./svg-0yla7c23rk";
import imgZara from "./ffba026dda1342c0cac019af1f2bd66d8a74aa15.png";

function Back() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Back">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Action">
        <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0" data-name="Size=SM">
          <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
              <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Back1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Back">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Action" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px overflow-hidden relative text-[14px] text-black text-center text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Cuentas</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0" data-name="Actions">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex flex-col items-center py-[1.93px] relative shrink-0 size-[24px]" data-name="Size=SM">
          <div className="h-[17.075px] relative shrink-0 w-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.0752">
              <path d={svgPaths.pbcaae00} fill="var(--fill-0, #006DFF)" id="vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Action 2">
        <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0" data-name="Size=SM">
          <div className="relative shrink-0 size-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p37f41b00} fill="var(--fill-0, #006DFF)" id="vector" />
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

function HeaderSlot() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Header Slot">
      <div className="bg-[#fafafa] content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full" data-name="Status Bar">
        <Content />
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Left side">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[24px] overflow-hidden relative shrink-0 text-[20px] text-black text-ellipsis whitespace-nowrap">Cuentas (5)</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#0163e8] text-[18px] text-center whitespace-nowrap">Ver todas</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="actions">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Link">
        <Content2 />
      </div>
    </div>
  );
}

function Currency() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[16px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold h-[24px] leading-[27px] min-w-full overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis w-[min-content] whitespace-nowrap">Cuenta Online Sabadell</p>
        <div className="content-stretch flex h-[32px] items-baseline relative shrink-0" data-name="Amount">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black whitespace-nowrap">14.590</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">,00</p>
          <Currency />
        </div>
      </div>
    </div>
  );
}

function Iban1() {
  return (
    <button className="bg-white content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center p-[8px] relative rounded-[4px] shrink-0" data-name="Iban">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#646464] text-[14px] text-left whitespace-nowrap">
        <p className="leading-[20px]">ES11 0081 0000 0000 0000 4425</p>
      </div>
      <div className="h-[15.997px] relative shrink-0 w-[16.003px]" data-name="Copy">
        <div className="absolute inset-[9.38%_15.63%_7.99%_15.63%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 13.2197">
            <path d={svgPaths.p12d4d400} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Iban() {
  return (
    <div className="relative shrink-0 w-full" data-name="Iban">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <Iban1 />
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#0163e8] text-[14px] text-center whitespace-nowrap">Ver detalle</p>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="Link">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="account">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content3 />
        <Iban />
        <Link />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Currency1() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-white whitespace-nowrap">€</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[12px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-[min-content] whitespace-nowrap">Cuenta Online Sabadell</p>
        <div className="content-stretch flex h-[32px] items-baseline relative shrink-0" data-name="Amount">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">14.590</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-white whitespace-nowrap">,00</p>
          <Currency1 />
        </div>
      </div>
    </div>
  );
}

function Iban3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center p-[8px] relative rounded-[4px] shrink-0" data-name="Iban">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">ES11 0081 0000 0000 0000 4425</p>
    </div>
  );
}

function Iban2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Iban">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <Iban3 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Ver detalle</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[4px] px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="Link">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Account1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="account">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content5 />
        <Iban2 />
        <Link1 />
      </div>
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function SliderContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative size-full">
          <div className="relative shrink-0 w-full" data-name="Slot content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center pl-[24px] relative size-full">
                <div className="bg-white h-[161px] max-w-[448px] min-w-[280px] relative rounded-[16px] shrink-0 w-[310px]" data-name="Product Summary Block">
                  <div className="content-stretch flex items-start max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
                    <Account />
                  </div>
                  <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
                </div>
                <div className="bg-white h-[141px] max-w-[448px] min-w-[280px] relative rounded-[16px] shrink-0 w-[310px]" data-name="Product Summary Block">
                  <div className="content-stretch flex items-start max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
                    <Account1 />
                  </div>
                  <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Dots">
      <div className="bg-[#006dff] h-[8px] relative rounded-[999px] shrink-0 w-[12px]" data-name="Dot 1" />
      <div className="relative shrink-0 size-[8px]" data-name="Dot 2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #919191)" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="Dot 3">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #919191)" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="Dot 4">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #919191)" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="Dot 5">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #919191)" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-[8px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path clipRule="evenodd" d={svgPaths.p21d44b80} fill="var(--fill-0, #919191)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Arrows() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[12px] items-center pr-[16px] right-0" data-name="Arrows">
      <div className="bg-white max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[4px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0" data-name="Size=SM">
            <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
                <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #9ECCFF)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#9eccff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
      <div className="bg-white max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
        <div className="content-stretch flex flex-col items-center justify-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip p-[4px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex items-start pl-[8px] pr-[6px] py-[2px] relative shrink-0" data-name="Size=SM">
            <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
                <path clipRule="evenodd" d={svgPaths.p10f18d00} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-center max-w-[767px] relative shrink-0 w-full" data-name="Controls">
      <Dots />
      <Arrows />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start px-[4.4px] py-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[20px] relative shrink-0 w-[15.2px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2 20">
            <path clipRule="evenodd" d={svgPaths.p31952a00} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[16px] mb-0">Enviar</p>
        <p className="leading-[16px]">Bizum</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex flex-col items-start px-[2px] py-[5.2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[13.6px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.5996">
            <path d={svgPaths.p1d0a8f80} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[16px] mb-0">Enviar</p>
        <p className="leading-[16px]">dinero</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0003">
            <path d={svgPaths.p364cb5f0} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[16px] mb-0">Sacar</p>
        <p className="leading-[16px]">dinero</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start overflow-clip px-[10px] py-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[20px] relative shrink-0 w-[4px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 20">
            <path d={svgPaths.p33db4e00} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon3 />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[16px] mb-0">Más</p>
        <p className="leading-[16px]">opciones</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[390px]" data-name="Content">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Top_Section_Account">
        <div className="bg-[#fafafa] content-stretch flex flex-col gap-[12px] items-center pb-[24px] pt-[16px] relative shrink-0 w-full" data-name="Block Title + Carousel Cuentas">
          <div className="max-h-[56px] min-h-[32px] min-w-[240px] relative shrink-0 w-full" data-name="Block Title">
            <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] relative size-full">
                <LeftSide />
                <Actions1 />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-[390px]" data-name="Carousel">
            <SliderContent />
            <Controls />
          </div>
        </div>
      </div>
      <div className="content-stretch cursor-pointer flex gap-[8px] h-[116px] items-start justify-center max-w-[480px] min-w-[360px] px-[16px] py-[12px] relative shrink-0 w-[390px]" data-name="Quick actions set">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 1">
          <Content7 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 2">
          <Content8 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 3">
          <Content9 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 4">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[78px] shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-[#fbca8b] content-stretch flex items-center justify-center p-[8px] relative rounded-[78px] shrink-0 size-[40px]" data-name="_Pill Servicing Icon">
        <div className="content-stretch flex items-start px-[3px] py-[2px] relative shrink-0" data-name="Size=SM">
          <div className="h-[20px] relative shrink-0 w-[18px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
              <path d={svgPaths.p1a229b80} fill="var(--fill-0, black)" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[#0163e8] text-[18px] text-center whitespace-nowrap">Revisar avisos</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[0] max-h-[72px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis w-[min-content]">
        <span className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px]">{`Laura, `}</span>
        <span className="leading-[24px]">tienes 3 avisos</span>
        <span className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px]">{` pendientes`}</span>
      </p>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Link">
        <Content14 />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
        <Icon4 />
        <Content13 />
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <div className="bg-white max-h-[184px] min-h-[84px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Pills">
            <div className="content-stretch flex items-start justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
              <Content12 />
            </div>
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.1),0px_2px_6px_-0.5px_rgba(0,0,0,0.1)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTop() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] relative shrink-0 w-full" data-name="Section_Top">
      <Content1 />
      <Content11 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Todos</p>
    </div>
  );
}

function Badge() {
  return <div className="content-stretch flex h-[16px] items-start justify-center relative shrink-0 w-[24px]" data-name="Badge" />;
}

function ContentBadge() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Content + badge">
      <Content16 />
      <Badge />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pl-[24px] pt-[12px] relative rounded-[4px] shrink-0" data-name="inner container">
      <ContentBadge />
    </div>
  );
}

function OuterContainer() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="outer container">
      <div aria-hidden className="absolute border-[#006dff] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-[2px] px-[2px] relative size-full">
          <InnerContainer />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Próximos</p>
    </div>
  );
}

function Number() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-center relative shrink-0 w-[24px]" data-name="Badge">
      <div className="relative shrink-0 size-[16px]" data-name="Badge">
        <Number />
      </div>
    </div>
  );
}

function ContentBadge1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Content + badge">
      <Content17 />
      <Badge1 />
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="content-stretch flex items-start justify-center pb-[8px] pl-[24px] pt-[12px] relative rounded-[4px] shrink-0" data-name="inner container">
      <ContentBadge1 />
    </div>
  );
}

function OuterContainer1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="outer container">
      <div aria-hidden className="absolute border-[#919191] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-[2px] px-[2px] relative size-full">
          <InnerContainer1 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Esta semana</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center pt-[8px] relative shrink-0 w-full" data-name="content">
      <Title />
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0" data-name="Button Search">
        <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
          <div className="relative shrink-0 size-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p26c6e700} fill="var(--fill-0, #006DFF)" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SwapContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Swap content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[88px] relative shrink-0 w-full" data-name="State=Default">
            <Content18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <div className="bg-[#fafafa] relative rounded-[100px] shrink-0 size-[32px]" data-name="Default">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 text-[#646464] text-[16px] text-center top-1/2 w-[14px]">
          <p className="leading-[24px]">A</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 z-[1]" data-name="Avatar">
          <Default />
        </div>
      </div>
    </div>
  );
}

function Currency2() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">€</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-49</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">,00</p>
        <Currency2 />
      </div>
    </div>
  );
}

function ConceptAmount() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Aramark Selfkit-Sant Cugat Fundacio Privada</p>
      </div>
      <Amount />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">29 Dic, 12:54</p>
    </div>
  );
}

function Currency3() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">14.590</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">,00</p>
        <Currency3 />
      </div>
    </div>
  );
}

function DateBalance() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date />
      <BalanceInfo />
    </div>
  );
}

function ConceptDateAmount() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount />
      <DateBalance />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount />
    </div>
  );
}

function Content19() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar />
        <Content20 />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="Divider">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
              <path clipRule="evenodd" d="M358 0V1H0V0H358Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMovement() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content19 />
        <Divider />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="icon">
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Size=XS">
        <div className="h-[14px] relative shrink-0 w-[13.998px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.998 14">
            <path d={svgPaths.p6302300} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 z-[1]" data-name="Avatar">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Currency4() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008626] text-[14px] text-right whitespace-nowrap">€</p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#008626] text-[16px] text-right whitespace-nowrap">+1.200</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008626] text-[14px] text-right whitespace-nowrap">,00</p>
        <Currency4 />
      </div>
    </div>
  );
}

function ConceptAmount1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Abono nómina Industrias Gráficas Henares</p>
      </div>
      <Amount1 />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">29 Dic, 09:21</p>
    </div>
  );
}

function Currency5() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">14.639</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">,00</p>
        <Currency5 />
      </div>
    </div>
  );
}

function DateBalance1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date1 />
      <BalanceInfo1 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#ccecda] relative rounded-[8px] shrink-0" data-name="Tag">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">Ahorrar</p>
      </div>
      <div aria-hidden className="absolute border border-[#9cc3ad] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-end justify-end pt-[12px] relative shrink-0 w-full" data-name="Tag">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag1 />
      </div>
    </div>
  );
}

function ConceptDateAmount1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount1 />
      <DateBalance1 />
      <Tag />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount1 />
    </div>
  );
}

function Content21() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar1 />
        <Content22 />
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="Divider">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
              <path clipRule="evenodd" d="M358 0V1H0V0H358Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMovement1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content21 />
        <Divider1 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="icon">
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Size=XS">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.pa599600} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 z-[1]" data-name="Avatar">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Currency6() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">€</p>
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-200</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">,00</p>
        <Currency6 />
      </div>
    </div>
  );
}

function ConceptAmount2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Transferencia María del Carmen</p>
      </div>
      <Amount2 />
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">28 Dic, 10:00</p>
    </div>
  );
}

function Currency7() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">13.439</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">,00</p>
        <Currency7 />
      </div>
    </div>
  );
}

function DateBalance2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date2 />
      <BalanceInfo2 />
    </div>
  );
}

function ConceptDateAmount2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount2 />
      <DateBalance2 />
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount2 />
    </div>
  );
}

function Content23() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar2 />
        <Content24 />
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="Divider">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
              <path clipRule="evenodd" d="M358 0V1H0V0H358Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMovement2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content23 />
        <Divider2 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center relative rounded-[50px] shrink-0 size-[32px]" data-name="icon">
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex flex-col items-start overflow-clip px-px py-[2.8px] relative shrink-0" data-name="Size=XS">
        <div className="h-[10.4px] relative shrink-0 w-[14.003px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0029 10.4004">
            <path d={svgPaths.p1457d170} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 z-[1]" data-name="Avatar">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Currency8() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">€</p>
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-780</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">,00</p>
        <Currency8 />
      </div>
    </div>
  );
}

function ConceptAmount3() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Tarjeta Crédito Sandra Antanares Gutierrez</p>
      </div>
      <Amount3 />
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">27 Dic, 08:00</p>
    </div>
  );
}

function Currency9() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">13.639</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">,00</p>
        <Currency9 />
      </div>
    </div>
  );
}

function DateBalance3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date3 />
      <BalanceInfo3 />
    </div>
  );
}

function ConceptDateAmount3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount3 />
      <DateBalance3 />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount3 />
    </div>
  );
}

function Content25() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar3 />
        <Content26 />
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="Divider">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
              <path clipRule="evenodd" d="M358 0V1H0V0H358Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMovement3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content25 />
        <Divider3 />
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="absolute bg-black inset-0" data-name="Brand">
      <div className="absolute inset-[30.56%_8.33%_31.94%_8.33%]" data-name="Zara">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgZara} />
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center relative rounded-[50px] shrink-0 z-[1]" data-name="Avatar">
          <div className="overflow-clip relative rounded-[50px] shrink-0 size-[32px]" data-name="__Image&Brands">
            <Brand />
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[32px] top-1/2" data-name="Stroke Grey-400">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" id="Stroke Grey-400" r="15.5" stroke="var(--stroke-0, #919191)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Currency10() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">€</p>
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-85</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">,00</p>
        <Currency10 />
      </div>
    </div>
  );
}

function ConceptAmount4() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Zara Spain Slu</p>
      </div>
      <Amount4 />
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">26 Dic, 19:45</p>
    </div>
  );
}

function Currency11() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">14.419</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#646464] text-[14px] text-right whitespace-nowrap">,00</p>
        <Currency11 />
      </div>
    </div>
  );
}

function DateBalance4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date4 />
      <BalanceInfo4 />
    </div>
  );
}

function ConceptDateAmount4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount4 />
      <DateBalance4 />
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount4 />
    </div>
  );
}

function Content27() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar4 />
        <Content28 />
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[12px] relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="Divider">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
              <path clipRule="evenodd" d="M358 0V1H0V0H358Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMovement4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content27 />
        <Divider4 />
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Tabs">
        <div aria-hidden className="absolute border-[#919191] border-b-2 border-solid inset-0 pointer-events-none" />
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative z-[7]" data-name="Tab 1">
          <OuterContainer />
        </div>
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative z-[6]" data-name="Tab 2">
          <OuterContainer1 />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col items-center justify-end max-w-[767px] min-h-[57px] min-w-[360px] overflow-clip relative shrink-0 w-full" data-name="Sticky panel">
        <SwapContent />
      </div>
      <div className="content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement />
      </div>
      <div className="content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement1 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start justify-center relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement2 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement3 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement4 />
      </div>
    </div>
  );
}

function SectionMovements() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[16px] relative shrink-0 w-full" data-name="Section_Movements">
      <Content15 />
    </div>
  );
}

function BodySlot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-w-px relative rounded-[16px]" data-name="Body Slot">
      <SectionTop />
      <SectionMovements />
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

function Indicator() {
  return (
    <div className="h-[4px] relative shrink-0 w-[24px]" data-name="Indicator">
      <div className="absolute bg-[#006dff] h-[4px] left-0 rounded-bl-[4px] rounded-br-[4px] top-0 w-[24px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[26px]" data-name="Icon">
      <div className="absolute content-stretch flex items-start left-0 p-[2px] top-0" data-name="Home">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2826f300} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationBarButtons() {
  return <div className="absolute h-[68px] left-0 top-[12px] w-[80px]" data-name="Navigation Bar / Buttons" />;
}

function IconOperar() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Icon - Operar">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon - Operar">
          <path d={svgPaths.pf8fbb80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Operar() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Operar">
      <NavigationBarButtons />
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[50px] size-[56px] top-0" data-name="_Boton Operar">
        <div className="absolute left-0 size-[56px] top-0" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <circle cx="28" cy="28" fill="var(--fill-0, #006DFF)" id="Ellipse" r="28" />
          </svg>
        </div>
        <IconOperar />
      </div>
    </div>
  );
}

function Indicator1() {
  return <div className="h-[4px] relative shrink-0 w-[24px]" data-name="Indicator" />;
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute content-stretch flex items-start left-0 overflow-clip p-[2px] top-0" data-name="Add-circle">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p16c2c640} fill="var(--fill-0, #646464)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BottomSlot() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Bottom Slot">
      <div className="bg-white content-stretch drop-shadow-[0px_-1px_2px_rgba(0,0,0,0.08),0px_-1px_2px_rgba(0,0,0,0.04)] flex h-[68px] items-end justify-center max-w-[480px] min-w-[360px] relative shrink-0 w-[390px]" data-name="Nav Bar">
        <div className="flex-[1_0_0] h-[68px] min-w-px relative" data-name="Navigation Buttons 1">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
              <Indicator />
              <Icon8 />
              <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[14px] text-black text-center text-ellipsis w-[min-content] whitespace-nowrap">
                <p className="leading-[20px] overflow-hidden text-ellipsis">Inicio</p>
              </div>
            </div>
          </div>
        </div>
        <Operar />
        <div className="flex-[1_0_0] h-[68px] min-w-px relative" data-name="Navigation Buttons 2">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
              <Indicator1 />
              <Icon9 />
              <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#646464] text-[14px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
                <p className="leading-[20px] overflow-hidden text-ellipsis">Contratar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CuentaMain() {
  return (
    <div className="relative size-full" data-name="cuenta main">
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 max-w-[767px] min-w-[360px] overflow-clip rounded-[16px] top-0 w-[390px]" data-name="01_Account Position">
        <HeaderSlot />
        <Body />
        <BottomSlot />
      </div>
    </div>
  );
}