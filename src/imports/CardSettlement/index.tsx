import svgPaths from "./svg-l74wt3yy8x";

function Icon() {
  return (
    <div className="bg-[#eee] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[72px]" data-name="Icon">
      <div aria-hidden className="absolute border-8 border-solid border-white inset-[-8px] pointer-events-none rounded-[108px]" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[2px] py-[5.7px] relative rounded-[40px] shrink-0" data-name="Size=MD">
        <div className="h-[20.6px] relative shrink-0 w-[28px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 20.5996">
            <path d={svgPaths.p35c0000} fill="var(--fill-0, #424242)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Currency() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[40px] relative size-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] max-h-[48px] min-w-full overflow-hidden relative shrink-0 text-[#424242] text-[16px] text-center text-ellipsis w-[min-content]">Tarjeta Crédito Lucía Navarro</p>
          <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
            <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[36px] relative shrink-0 text-[32px] text-black text-right whitespace-nowrap">-580</p>
            <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black whitespace-nowrap">,15</p>
            <Currency />
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#424242] text-[16px] text-center w-[min-content]">
            <p className="leading-[24px]">Lunes, 3 enero 2024, 16:00 h.</p>
          </div>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Cuenta ••••1234</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-start max-h-[72px] max-w-[72px] min-h-[72px] min-w-[72px] relative shrink-0" data-name="Avatar">
        <Icon />
        <div className="absolute left-0 size-[72px] top-0" data-name="Stroke Grey-400">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
            <circle cx="36" cy="36" id="Stroke Grey-400" r="35.5" stroke="var(--stroke-0, #BDBDBD)" />
          </svg>
        </div>
      </div>
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[24px] pt-[32px] relative shrink-0 w-full" data-name="Header">
      <Content1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0005">
            <path d={svgPaths.p3cbae300} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[18px] mb-0">Aplazar</p>
        <p className="leading-[18px]">pago</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
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

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Ver documento</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
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

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon3 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Dividir con Bizum</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
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

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon4 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Compartir detalle</p>
    </div>
  );
}

function TransactionDetailQuickActions() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Transaction detail + quick actions">
      <div className="content-stretch flex flex-col items-start max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Transaction Detail">
        <Header />
      </div>
      <div className="content-stretch flex gap-[8px] items-start justify-center max-w-[480px] min-w-[360px] px-[16px] py-[12px] relative shrink-0 w-[390px]" data-name="Quick actions set">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 1">
          <Content2 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 2">
          <Content3 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 3">
          <Content4 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 4">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <p className="leading-[20px] relative shrink-0 text-[#424242] text-[14px] w-full">Pago revolving</p>
      <p className="leading-[24px] relative shrink-0 text-[18px] text-black w-full whitespace-pre-wrap">{`Puedes aplazar este pago y elegir la  cuota más conveniente para ti `}</p>
    </div>
  );
}

function Currency1() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Periodo() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="Periodo">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">/mes</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline justify-center relative shrink-0" data-name="amount">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[18px] text-black whitespace-nowrap">desde</p>
      <div className="content-stretch flex items-baseline justify-center relative shrink-0" data-name="Amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black text-right whitespace-nowrap">30</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">,00</p>
        <Currency1 />
        <Periodo />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="CONTENT">
      <Content7 />
      <Amount />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Ver opciones de aplazamiento</p>
    </div>
  );
}

function ComercialAplazarPago() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="COMERCIAL aplazar pago">
      <div className="bg-[#ccecda] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[358px]" data-name="Booster comercial">
        <Content6 />
        <div className="bg-black content-stretch flex flex-col h-[32px] items-center justify-center min-w-[96px] overflow-clip px-[16px] py-[4px] relative rounded-[100px] shrink-0 w-[318px]" data-name="Button">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black">Detalle del movimiento</p>
    </div>
  );
}

function Head() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Head">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#424242] text-[14px] whitespace-nowrap">Concepto</p>
    </div>
  );
}

function Head1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Head">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#424242] text-[14px] whitespace-nowrap">Cuenta</p>
    </div>
  );
}

function Head2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Head">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#424242] text-[14px] whitespace-nowrap">Titular de la cuenta</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] text-center whitespace-nowrap">Mostrar más</p>
      <div className="content-stretch flex flex-col items-start px-px py-[4px] relative shrink-0" data-name="Size=XS">
        <div className="h-[8px] relative shrink-0 w-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path clipRule="evenodd" d={svgPaths.p2261ad00} fill="var(--fill-0, #006DF2)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SectionMovements() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-[390px]" data-name="Section_movements">
      <Title />
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[16px] relative size-full">
            <div className="content-stretch flex flex-col gap-[16px] isolate items-start relative shrink-0 w-full" data-name="State=Default">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[326px] z-[11]" data-name="Info label">
                <Head />
                <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">Liquidación tarjeta de crédito</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[8]" data-name="Info label">
                <Head1 />
                <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">ES11 0081 0101 0000 0000 1234</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full z-[7]" data-name="Info label">
                <Head2 />
                <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-full relative shrink-0 text-[18px] text-black w-[min-content]">LUCÍA NAVARRO ORTIZ</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[119px] z-[2]" data-name="Link">
                <Content9 />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black">Información adicional</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] text-center whitespace-nowrap">Añadir nota</p>
    </div>
  );
}

function SeccionInformacionAdicional() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-[390px]" data-name="sección - Información adicional">
      <Title1 />
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[16px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="State=Default">
            <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0" data-name="Icon">
              <div className="h-[19.996px] relative shrink-0 w-[20px]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9961">
                  <path d={svgPaths.p18e46300} fill="var(--fill-0, black)" id="vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">Notas</p>
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
              <Content10 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Histórico de movimientos</p>
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Info">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="vector">
              <path d={svgPaths.p3296bc80} fill="#006DFF" />
              <path clipRule="evenodd" d={svgPaths.p1c5d6a00} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d={svgPaths.p171d0680} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#eee] content-stretch flex items-center justify-center p-[8px] relative rounded-[64px] shrink-0" data-name="icon">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
      <div className="content-stretch flex flex-col items-start overflow-clip px-px py-[2.8px] relative shrink-0" data-name="Size=XS">
        <div className="h-[10.4px] relative shrink-0 w-[14.003px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0029 10.4004">
            <path d={svgPaths.p1457d170} fill="var(--fill-0, #424242)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
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

function Currency2() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-189</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency2 />
      </div>
    </div>
  );
}

function ConceptAmount() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Tarjeta Crédito Lucía Navarro</p>
      </div>
      <Amount1 />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">3 Dic</p>
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

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount />
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar />
        <Content13 />
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
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content12 />
        <Divider />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#eee] content-stretch flex items-center justify-center p-[8px] relative rounded-[64px] shrink-0" data-name="icon">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
      <div className="content-stretch flex flex-col items-start overflow-clip px-px py-[2.8px] relative shrink-0" data-name="Size=XS">
        <div className="h-[10.4px] relative shrink-0 w-[14.003px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0029 10.4004">
            <path d={svgPaths.p1457d170} fill="var(--fill-0, #424242)" id="vector" />
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
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Currency3() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">456</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency3 />
      </div>
    </div>
  );
}

function ConceptAmount1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Tarjeta Crédito Lucía Navarro</p>
      </div>
      <Amount2 />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">4 Nov</p>
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

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount1 />
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar1 />
        <Content15 />
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
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content14 />
        <Divider1 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#eee] content-stretch flex items-center justify-center p-[8px] relative rounded-[64px] shrink-0" data-name="icon">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
      <div className="content-stretch flex flex-col items-start overflow-clip px-px py-[2.8px] relative shrink-0" data-name="Size=XS">
        <div className="h-[10.4px] relative shrink-0 w-[14.003px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0029 10.4004">
            <path d={svgPaths.p1457d170} fill="var(--fill-0, #424242)" id="vector" />
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
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Currency4() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-290</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,10</p>
        <Currency4 />
      </div>
    </div>
  );
}

function ConceptAmount2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Tarjeta Crédito Lucía Navarro</p>
      </div>
      <Amount3 />
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">2 Oct</p>
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

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount2 />
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar2 />
        <Content17 />
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
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content16 />
        <Divider2 />
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement />
      </div>
      <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement1 />
      </div>
      <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement2 />
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[32px]" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] whitespace-nowrap">Mostrar más</p>
      <div className="content-stretch flex flex-col items-start px-px py-[4px] relative shrink-0" data-name="Size=XS">
        <div className="h-[8px] relative shrink-0 w-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path clipRule="evenodd" d={svgPaths.p2261ad00} fill="var(--fill-0, #006DF2)" fillRule="evenodd" id="vector" />
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
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Link">
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function SectionHistorico() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-[390px]" data-name="Section_histórico">
      <Title2 />
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Slot Container UI Historico">
            <Content11 />
            <Link />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-0 pb-[24px] top-[111px]" data-name="Content">
      <TransactionDetailQuickActions />
      <ComercialAplazarPago />
      <SectionMovements />
      <SeccionInformacionAdicional />
      <SectionHistorico />
    </div>
  );
}

function Notch() {
  return (
    <div className="-translate-x-1/2 absolute h-[32px] left-1/2 top-0 w-[172px]" data-name="Notch">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 32">
        <g id="Notch">
          <path d={svgPaths.p29d69840} fill="var(--fill-0, black)" id="notch" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[27px] top-[14px]" data-name="Left Side">
      <div className="absolute h-[21px] left-[27px] rounded-[24px] top-[14px] w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[21px] left-[27px] not-italic text-[16px] text-black text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents right-[26.6px] top-[19px]" data-name="Right Side">
      <div className="absolute h-[13px] right-[26.6px] top-[19px] w-[27.401px]" data-name="_StatusBar-battery">
        <div className="-translate-y-1/2 absolute h-[13px] left-0 right-[2.4px] top-1/2" data-name="Outline">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p3f827980} id="Outline" opacity="0.35" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[4.22px] right-0 top-[calc(50%+0.61px)] w-[1.401px]" data-name="Battery End">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="var(--fill-0, black)" id="Battery End" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[9px] left-[2px] right-[4.4px] top-1/2" data-name="Fill">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="var(--fill-0, black)" id="Fill" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[11.834px] right-[61px] top-[20px] w-[17px]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.8338">
          <path d={svgPaths.p17a4bf30} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[12px] right-[86px] top-[20px] w-[18px]" data-name="Icon / Mobile Signal">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Back() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Back">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0" data-name="Action">
        <div className="content-stretch flex items-start px-[7px] py-[2px] relative shrink-0" data-name="Size=SM">
          <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
              <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #006DF2)" fillRule="evenodd" id="vector" />
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
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Action" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px overflow-hidden relative text-[16px] text-black text-center text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Detalle movimiento</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0" data-name="Actions">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0" data-name="Action 1">
        <div className="content-stretch flex flex-col items-center py-[1.93px] relative shrink-0 size-[24px]" data-name="Size=SM">
          <div className="h-[17.075px] relative shrink-0 w-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.0752">
              <path d={svgPaths.pbcaae00} fill="var(--fill-0, #006DF2)" id="vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0" data-name="Action 2">
        <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0" data-name="Size=SM">
          <div className="relative shrink-0 size-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p37f41b00} fill="var(--fill-0, #006DF2)" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <Back />
          <Back1 />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Name">
            <Text />
          </div>
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[111px] items-center left-0 top-0 w-[390px]" data-name="Header">
      <div className="bg-white h-[47px] overflow-clip relative shrink-0 w-full" data-name="StatusBar">
        <Notch />
        <LeftSide />
        <RightSide />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[65px] items-start max-w-[767px] min-w-[360px] relative shrink-0 w-[390px]" data-name="Status Bar">
        <Content19 />
      </div>
    </div>
  );
}

export default function CardSettlement() {
  return (
    <div className="bg-white relative size-full" data-name="Card settlement">
      <Content />
      <Header1 />
    </div>
  );
}