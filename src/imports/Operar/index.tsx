import svgPaths from "./svg-ju282q34z3";

function LogoTitle() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[16px] h-[20px] items-center min-w-px relative" data-name="Logo & Title" />;
}

function Close() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Close">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0" data-name="Size=SM">
          <div className="h-[19.996px] relative shrink-0 w-[19.998px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9977 19.996">
              <path clipRule="evenodd" d={svgPaths.p182c7200} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
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
          <LogoTitle />
          <Close />
        </div>
      </div>
    </div>
  );
}

function LabelBox() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative self-stretch" data-name="Label_box">
      <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Search">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p26c6e700} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] max-h-[24px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">Buscar</p>
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-white h-[56px] max-h-[56px] relative rounded-[4px] shrink-0 w-full" data-name="Input_box">
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex items-start max-h-[inherit] p-[16px] relative size-full">
        <LabelBox />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[82px] min-w-[114px] relative shrink-0 w-full" data-name="Search">
      <InputBox />
    </div>
  );
}

function SwapContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Swap content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

function StickyPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center max-w-[767px] min-h-[57px] min-w-[360px] overflow-clip relative shrink-0 w-full" data-name="Sticky panel">
      <SwapContent />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Search Bar">
      <StickyPanel />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Left side">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[27px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis whitespace-nowrap">Principales operativas</p>
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

function BlockTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Block title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-between max-h-[56px] min-h-[32px] min-w-[240px] relative" data-name="Block Title">
            <LeftSide />
            <Actions1 />
          </div>
        </div>
      </div>
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

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Enviar Bizum</p>
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

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Enviar dinero</p>
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

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Sacar dinero</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-center justify-center px-[2px] py-[3px] relative shrink-0 size-[24px]" data-name="Size=SM">
        <div className="flex flex-[1_0_0] h-full items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
          <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                <path d={svgPaths.p36b65a40} fill="var(--fill-0, #006DFF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon3 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Límites de tarjeta</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[20px] relative shrink-0 w-[19.995px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9951 20">
            <path d={svgPaths.p78e5600} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon4 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Pagar impuestos</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start px-[3.2px] py-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[20px] relative shrink-0 w-[17.6px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5996 20">
            <path d={svgPaths.p28e22700} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon5 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Consultar domiciliaciones</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start px-[4px] py-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[20px] relative shrink-0 w-[16px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p12dbcf00} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon6 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Solicitar certificado</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[19.997px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9971">
            <path d={svgPaths.p1165f180} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon7 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Bloquear tarjeta</p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section 1">
      <BlockTitle />
      <div className="max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Quick actions set">
        <div className="flex flex-row justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch cursor-pointer flex gap-[8px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 1">
              <Content3 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 2">
              <Content4 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 3">
              <Content5 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 4">
              <Content6 />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Quick actions set">
        <div className="flex flex-row justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch cursor-pointer flex gap-[8px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
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
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[27px] max-h-[40px] overflow-hidden relative shrink-0 text-[18px] text-black text-ellipsis whitespace-nowrap">¿Te podemos ayudar?</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="Size=SM, Style=Outstroke">
        <div className="h-[19.155px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.1552">
            <g id="vector">
              <path clipRule="evenodd" d={svgPaths.p2d310700} fill="var(--fill-0, #006DFF)" fillRule="evenodd" />
              <path d={svgPaths.p2c25c500} fill="var(--fill-0, #006DFF)" />
              <path d={svgPaths.p73a3300} fill="var(--fill-0, #006DFF)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon8 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Centro de ayuda</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Size=SM">
        <div className="absolute h-[19.968px] left-[2.01px] top-[2.02px] w-[20.016px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0156 19.9677">
            <path d={svgPaths.p3071030} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon9 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Preguntas frecuentes</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p22c9a600} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon10 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Pedir cita</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start px-[4.4px] py-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[20px] relative shrink-0 w-[15.2px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2002 20">
            <path d={svgPaths.p14273880} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon11 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Oficinas y cajeros</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section 2">
      <Title />
      <div className="max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Quick actions set">
        <div className="flex flex-row justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch cursor-pointer flex gap-[8px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 1">
              <Content11 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 2">
              <Content12 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 3">
              <Content13 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 4">
              <Content14 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Actions">
      <SearchBar />
      <Section />
      <Section1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start max-w-[480px] min-h-px min-w-[360px] relative w-full" data-name="Content">
      <Actions />
    </div>
  );
}

function Indicator() {
  return <div className="h-[4px] relative shrink-0 w-[24px]" data-name="Indicator" />;
}

function Icon12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[26px]" data-name="Icon">
      <div className="absolute content-stretch flex items-start left-0 p-[2px] top-0" data-name="Home">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1c059700} fill="var(--fill-0, #646464)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start justify-end min-w-px relative" data-name="Navigation Buttons 1">
      <div className="flex-[1_0_0] mb-[-1px] min-h-px relative w-full z-[2]" data-name="Divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 1">
          <path clipRule="evenodd" d="M155 0V1H0V0H155Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
        </svg>
      </div>
      <div className="bg-white h-[68px] relative shrink-0 w-full z-[1]" data-name="Navigation Buttons 1">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
            <Indicator />
            <Icon12 />
            <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#646464] text-[14px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden text-ellipsis">Inicio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigationBarButtons() {
  return <div className="absolute h-[67px] left-0 top-[13px] w-[80px]" data-name="Navigation Bar / Buttons" />;
}

function Operar1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Operar">
      <NavigationBarButtons />
      <div className="absolute h-px left-0 top-[12px] w-[80px]" data-name="Divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1">
          <path clipRule="evenodd" d="M80 0V1H0V0H80Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute left-1/2 rounded-[50px] size-[56px] top-0" data-name="_Boton Operar">
        <div className="absolute left-0 size-[56px] top-0">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <circle cx="28" cy="28" fill="var(--fill-0, #006DFF)" id="Ellipse" r="28" />
          </svg>
        </div>
        <div className="absolute content-stretch flex flex-col inset-[28.57%_28.57%_28.58%_28.57%] items-start overflow-clip p-[2px]" data-name="Close">
          <div className="h-[19.996px] relative shrink-0 w-[19.998px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9977 19.996">
              <path clipRule="evenodd" d={svgPaths.p182c7200} fill="var(--fill-0, white)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Indicator1() {
  return <div className="h-[4px] relative shrink-0 w-[24px]" data-name="Indicator" />;
}

function Icon13() {
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

function NavigationButtons1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full isolate items-start justify-end min-w-px relative" data-name="Navigation Buttons 2">
      <div className="flex-[1_0_0] mb-[-1px] min-h-px relative w-full z-[2]" data-name="Divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 1">
          <path clipRule="evenodd" d="M155 0V1H0V0H155Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
        </svg>
      </div>
      <div className="bg-white h-[68px] relative shrink-0 w-full z-[1]" data-name="Navigation Buttons 2">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
            <Indicator1 />
            <Icon13 />
            <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#646464] text-[14px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
              <p className="leading-[20px] overflow-hidden text-ellipsis">Contratar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="bg-white content-stretch flex h-[68px] items-end justify-center max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Nav Bar">
      <NavigationButtons />
      <Operar1 />
      <NavigationButtons1 />
    </div>
  );
}

function BottomActions() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Bottom - Actions">
      <div className="bg-white content-stretch flex flex-col h-[844px] items-start justify-end max-w-[480px] min-w-[360px] overflow-clip relative shrink-0 w-full" data-name="Nav Bar">
        <div className="bg-white content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full" data-name="Status Bar">
          <Content />
        </div>
        <Content1 />
        <NavBar />
      </div>
    </div>
  );
}

export default function Operar() {
  return (
    <div className="relative size-full" data-name="operar">
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 max-w-[767px] min-w-[360px] overflow-clip top-0 w-[390px]" data-name="Menu-fullscreen">
        <BottomActions />
      </div>
    </div>
  );
}