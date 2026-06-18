import svgPaths from "./svg-z925tia6v5";
import imgNetflix from "./a85730f79ffc1522d1ba57b2ea7a817cbe5e77d7.png";
import imgAvatar1 from "./8d8af54c0f13ebd2e09efa6493290829085e6c76.png";
import { imgAvatar } from "./svg-1eslv";

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
        <p className="leading-[20px] overflow-hidden text-ellipsis">Detalle de movimiento</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0" data-name="Actions">
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
      <div className="bg-white content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full" data-name="Status Bar">
        <Content />
      </div>
    </div>
  );
}

function Brand() {
  return (
    <div className="absolute bg-black inset-0" data-name="Brand">
      <div className="absolute inset-[19.44%_33.33%_19.44%_31.94%]" data-name="Netflix">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNetflix} />
      </div>
    </div>
  );
}

function Currency() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Body">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] max-h-[48px] min-w-full overflow-hidden relative shrink-0 text-[#646464] text-[16px] text-center text-ellipsis w-[min-content]">Pago Bizum a suscripción Netflix</p>
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black whitespace-nowrap">-12</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">,00</p>
        <Currency />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#646464] text-[16px] text-center w-[min-content]">
        <p className="leading-[24px]">Lunes, 21 octubre 2023, 16:00 h.</p>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">Cuenta ••••4425</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[24px] relative size-full">
          <div className="content-stretch flex items-center relative rounded-[50px] shrink-0" data-name="Avatar">
            <div className="overflow-clip relative rounded-[50px] shrink-0 size-[72px]" data-name="__Image&Brands">
              <Brand />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[72px] top-1/2" data-name="Stroke Grey-400">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
                <circle cx="36" cy="36" id="Stroke Grey-400" r="35.5" stroke="var(--stroke-0, #919191)" />
              </svg>
            </div>
          </div>
          <Body1 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center py-[24px] relative shrink-0 w-full" data-name="Header">
      <Content2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[390px]" data-name="Content">
      <div className="content-stretch flex flex-col items-start max-w-[767px] min-w-[360px] relative shrink-0 w-[390px]" data-name="Transaction Detail">
        <Header />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2894e280} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Fraccionar pago</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start overflow-clip relative shrink-0 size-[24px]" data-name="Size=SM">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1c86db00} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Dividir con Bizum</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start overflow-clip px-[4px] py-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[20px] relative shrink-0 w-[16px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p212b6300} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Ver documento</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p32590e80} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon3 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Compartir detalle</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Content">
      <div className="max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Quick actions set">
        <div className="flex flex-row justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch cursor-pointer flex gap-[8px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 1">
              <Content4 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 2">
              <Content5 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 3">
              <Content6 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 4">
              <Content7 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTransactionDetailQa() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section_TransactionDetail-QA">
      <Content1 />
      <Content3 />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Left side">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[27px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis whitespace-nowrap">Detalle del movimiento</p>
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Head">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#646464] text-[14px] whitespace-nowrap">Text XXS</p>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Head">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#646464] text-[14px] whitespace-nowrap">Text XXS</p>
    </div>
  );
}

function Head2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Head">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#646464] text-[14px] whitespace-nowrap">Text XXS</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Mostrar más</p>
      <div className="content-stretch flex flex-col items-start px-px py-[4px] relative shrink-0" data-name="Size=XS">
        <div className="h-[8px] relative shrink-0 w-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path clipRule="evenodd" d={svgPaths.p2261ad00} fill="var(--fill-0, #0163E8)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-center justify-center max-h-[56px] min-h-[32px] min-w-[240px] relative shrink-0 w-full" data-name="Block Title">
        <LeftSide />
      </div>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full" data-name="Slot Container UI movement detail">
            <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[100px] relative shrink-0 w-full z-[5]" data-name="Info label">
              <Head />
              <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[27px] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">Body text</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[100px] relative shrink-0 w-full z-[4]" data-name="Info label">
              <Head1 />
              <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[27px] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">Body text</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[100px] relative shrink-0 w-full z-[3]" data-name="Info label">
              <Head2 />
              <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[27px] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">Body text</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 z-[2]" data-name="Link">
              <Content9 />
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Left side">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[27px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis whitespace-nowrap">Información adicional</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Añadir nota</p>
    </div>
  );
}

function SlotContainerUiInfoAdicional() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-[326px] z-[2]" data-name="Slot Container UI info adicional">
      <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0" data-name="Icon">
        <div className="h-[19.996px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9961">
            <path d={svgPaths.p18e46300} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">Notas</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Link">
        <Content11 />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Añadir nota</p>
    </div>
  );
}

function SlotContainerUiInfoAdicional1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-[326px] z-[2]" data-name="Slot Container UI info adicional">
      <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0" data-name="Icon">
        <div className="h-[19.996px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9961">
            <path d={svgPaths.p18e46300} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">Notas</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Link">
        <Content12 />
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-center justify-center max-h-[56px] min-h-[32px] min-w-[240px] relative shrink-0 w-full" data-name="Block Title">
        <LeftSide1 />
      </div>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full" data-name="Slot Container UI aditional info">
            <SlotContainerUiInfoAdicional />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
      </div>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full" data-name="Slot Container UI aditional info">
            <SlotContainerUiInfoAdicional1 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="actions">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Info">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="vector">
              <path d={svgPaths.p3296bc80} fill="#006DFF" />
              <path clipRule="evenodd" d={svgPaths.p1c5d6a00} fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" />
              <path d={svgPaths.p171d0680} fill="var(--fill-0, #E0E0E0)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeftSide2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Left side">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[27px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis whitespace-nowrap">Histórico de movimientos</p>
      <Actions1 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <div className="absolute border border-[#bdbdbd] border-solid left-0 overflow-clip rounded-[16px] size-[32px] top-0" data-name="AGBAR">
            <div className="absolute contents inset-[calc(0%-1px)]" data-name="Symbol">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[32px_32px] overflow-clip" style={{ maskImage: `url("${imgAvatar}")` }} data-name="agbar 1">
                <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Symbol">
                  <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Merchant">
                    <div className="absolute inset-[-15%_-17.5%_-17.5%_-15%]" data-name="agbar">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Currency1() {
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
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-755</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">,00</p>
        <Currency1 />
      </div>
    </div>
  );
}

function ConceptAmount() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Seguros Centro De Seguros Y Servicios Eci, S.A</p>
      </div>
      <Amount />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">29 Dic</p>
    </div>
  );
}

function BalanceInfo() {
  return <div className="content-stretch flex flex-col gap-[4px] h-[20px] items-end relative shrink-0 w-[127px]" data-name="Balance + Info" />;
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

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount />
    </div>
  );
}

function Content15() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar />
        <Content16 />
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
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
        <Content15 />
        <Divider />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <div className="absolute border border-[#bdbdbd] border-solid left-0 overflow-clip rounded-[16px] size-[32px] top-0" data-name="AGBAR">
            <div className="absolute contents inset-[calc(0%-1px)]" data-name="Symbol">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[32px_32px] overflow-clip" style={{ maskImage: `url("${imgAvatar}")` }} data-name="agbar 1">
                <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Symbol">
                  <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Merchant">
                    <div className="absolute inset-[-15%_-17.5%_-17.5%_-15%]" data-name="agbar">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

function Amount1() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-685</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">,00</p>
        <Currency2 />
      </div>
    </div>
  );
}

function ConceptAmount1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Seguros Centro De Seguros Y Servicios Eci, S.A</p>
      </div>
      <Amount1 />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">27 Nov</p>
    </div>
  );
}

function BalanceInfo1() {
  return <div className="content-stretch flex flex-col gap-[4px] h-[20px] items-end relative shrink-0 w-[127px]" data-name="Balance + Info" />;
}

function DateBalance1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date1 />
      <BalanceInfo1 />
    </div>
  );
}

function ConceptDateAmount1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount1 />
      <DateBalance1 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount1 />
    </div>
  );
}

function Content17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar1 />
        <Content18 />
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMovement1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content17 />
        <Divider1 />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <div className="absolute border border-[#bdbdbd] border-solid left-0 overflow-clip rounded-[16px] size-[32px] top-0" data-name="AGBAR">
            <div className="absolute contents inset-[calc(0%-1px)]" data-name="Symbol">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[32px_32px] overflow-clip" style={{ maskImage: `url("${imgAvatar}")` }} data-name="agbar 1">
                <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Symbol">
                  <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Merchant">
                    <div className="absolute inset-[-15%_-17.5%_-17.5%_-15%]" data-name="agbar">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatar1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Currency3() {
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
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-right whitespace-nowrap">,10</p>
        <Currency3 />
      </div>
    </div>
  );
}

function ConceptAmount2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Seguros Centro De Seguros Y Servicios Eci, S.A</p>
      </div>
      <Amount2 />
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#646464] text-[14px]">14 Oct</p>
    </div>
  );
}

function BalanceInfo2() {
  return <div className="content-stretch flex flex-col gap-[4px] h-[20px] items-end relative shrink-0 w-[127px]" data-name="Balance + Info" />;
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

function Content20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount2 />
    </div>
  );
}

function Content19() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar2 />
        <Content20 />
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptMovement2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content19 />
        <Divider2 />
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement1 />
      </div>
      <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement2 />
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ir a todos los movimientos</p>
      <div className="content-stretch flex items-start px-[4px] py-px relative shrink-0" data-name="Size=XS">
        <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, #0163E8)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
          <Content21 />
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-center justify-center max-h-[56px] min-h-[32px] min-w-[240px] relative shrink-0 w-full" data-name="Block Title">
        <LeftSide2 />
      </div>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Slot Container UI Historico">
            <Content14 />
            <Link />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function SectionAditionalInfo() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section_AditionalInfo">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[16px] px-[16px] relative size-full">
          <Content8 />
          <Content10 />
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function BodySlot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-w-px relative rounded-[16px]" data-name="Body Slot">
      <SectionTransactionDetailQa />
      <SectionAditionalInfo />
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

export default function BizumDetail() {
  return (
    <div className="relative size-full" data-name="bizum detail">
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 max-w-[767px] min-w-[360px] overflow-clip top-0 w-[390px]" data-name="01_Account Position">
        <HeaderSlot />
        <Body />
      </div>
    </div>
  );
}