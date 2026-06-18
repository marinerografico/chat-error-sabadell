import svgPaths from "./svg-7bs2036z7u";

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

function Text() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-center justify-center relative shrink-0 w-full" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px overflow-hidden relative text-[14px] text-black text-center text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden text-ellipsis">Operativas</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0" data-name="Actions">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] max-h-[24px] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">Busca palabras como: “Cambiar Pin”</p>
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-white h-[56px] max-h-[56px] relative rounded-[4px] shrink-0 w-full" data-name="Input_box">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex items-start max-h-[inherit] p-[16px] relative size-full">
        <LabelBox />
      </div>
    </div>
  );
}

function FilaDeChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-start py-[6px] relative shrink-0" data-name="Fila de chips">
      <div className="bg-black content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Choice & Input chip">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Todas</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Choice & Input chip">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Emergencias</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Choice & Input chip">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Banca online</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Choice & Input chip">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Tus cuentas</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Choice & Input chip">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Medios de pago</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[16px] shrink-0" data-name="Choice & Input chip">
        <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[16px]" />
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">Financiación</p>
      </div>
    </div>
  );
}

function ChipSet() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Chip set">
      <FilaDeChips />
    </div>
  );
}

function SwapContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Swap content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Status=Collapsed">
            <div className="content-stretch flex flex-col items-start max-h-[82px] min-w-[114px] relative shrink-0 w-full" data-name="Search">
              <InputBox />
            </div>
            <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Chips set">
              <ChipSet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end max-w-[767px] min-h-[57px] min-w-[328px] overflow-clip relative" data-name="Sticky panel">
        <SwapContent />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Section">
      <Content1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Enviar bizum</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Enviar dinero</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Traspaso entre mis cuentas</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Pagar impuestos</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Consultar impuestos</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0163e8] text-[16px] text-center whitespace-nowrap">Consultar domiciliaciones</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Consultar recibos no domiciliados</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Pagar recibos no domiciliados</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Solicitar certificado</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Consultar certificados</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Tus finanzas</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Trasladar cuentas de otro banco</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Link">
        <Content3 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Link">
        <Content4 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Link">
        <Content5 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Link">
        <Content6 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Link">
        <Content7 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Link">
        <Content8 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content9 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content10 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content11 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content12 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content13 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content14 />
      </div>
    </div>
  );
}

function AccountsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Accounts Section">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold h-[24px] leading-[28px] relative shrink-0 text-[20px] text-black w-full">Cuentas</p>
      <List />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Bloquear tarjeta</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ver CVV y fecha caducidad</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Límites de tarjeta</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ver detalle de tarjeta</p>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ver PIN tarjeta</p>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Sabadell Cashback</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Sacar dinero</p>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Añadir la tarjeta al móvil</p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Fraccionar pagos</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ver liquidaciones</p>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Forma de pago</p>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Traspaso de tarjeta a cuenta</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Traspaso de cuenta a tarjeta</p>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ampliar límite de crédito</p>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Recarga de móviles</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content15 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content16 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content17 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content18 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content19 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content20 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content21 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content22 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content23 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content24 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content25 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content26 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content27 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content28 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content29 />
      </div>
    </div>
  );
}

function CardsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Cards Section">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold h-[24px] leading-[28px] relative shrink-0 text-[20px] text-black w-full">Tarjetas</p>
      <List1 />
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Gestionar perfil</p>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Consultar documentación</p>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Revisar firmas pendientes</p>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Actualizar datos personales</p>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ver contratos</p>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ver buzón de mensajes</p>
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#0163e8] text-[16px]">Ver configuración</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content30 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content31 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content32 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content33 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content34 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content35 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content36 />
      </div>
    </div>
  );
}

function SectionGestionesPersonales() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section: Gestiones personales">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold h-[24px] leading-[28px] relative shrink-0 text-[20px] text-black w-full">Gestiones personales</p>
      <List2 />
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#006df2] text-[16px]">Centro de ayuda</p>
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#006df2] text-[16px]">Preguntas frecuentes</p>
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#006df2] text-[16px]">Pedir cita</p>
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#006df2] text-[16px]">Ver agenda</p>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#006df2] text-[16px]">Oficinas y cajeros</p>
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#006df2] text-[16px]">Asistente Virtual</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content37 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content38 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content39 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content40 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content41 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Link">
        <Content42 />
      </div>
    </div>
  );
}

function SectionAyuda() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section: Ayuda">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold h-[24px] leading-[28px] relative shrink-0 text-[20px] text-black w-[358px]">Ayuda</p>
      <List3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <AccountsSection />
      <CardsSection />
      <SectionGestionesPersonales />
      <SectionAyuda />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function BodySlot() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center justify-center min-w-px pb-[16px] relative rounded-[16px]" data-name="Body Slot">
      <Section />
      <Section1 />
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

export default function Masoperativas() {
  return (
    <div className="relative size-full" data-name="masoperativas">
      <div className="absolute bg-white content-stretch flex flex-col items-center justify-center left-0 max-w-[767px] min-w-[360px] overflow-clip top-0 w-[390px]" data-name="Layout 1. - Bp">
        <NavigationSlot />
        <Body />
      </div>
    </div>
  );
}