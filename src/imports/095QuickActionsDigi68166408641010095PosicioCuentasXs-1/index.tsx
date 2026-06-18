import svgPaths from "./svg-2fhj6xvu2c";
import imgUberEats from "./c6128aafcd5c61c40b69f2066cc110dc6b8c45fe.png";
import imgAgbar from "./8d8af54c0f13ebd2e09efa6493290829085e6c76.png";
import imgEci from "./90cdf7b8f287699b3a916fc8d0c2aa898749d476.png";
import imgMercadonaLogoWhite from "./be442b23a55a42b12fb5b2902ce0ec137063a95a.png";
import imgGlobo1 from "./958180df1c5874df667ec19d5bd70d5df4f979fc.png";
import imgRenfeLogoBlanco from "./61814fa7654135f8d3c2e9bb3a2eb19ea12173af.png";
import imgMerchant from "./4201c06c623d7593b5c18c3a1e86e9df048e3d14.png";
import imgCopy from "./03764255ba938dd118ad0b7992631ecbf449ec49.png";
import { imgAgbar1, imgGlobo } from "./svg-x7sld";

function Currency() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[16px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis w-[min-content] whitespace-nowrap">Cuenta Sabadell</p>
        <div className="content-stretch flex h-[32px] items-baseline relative shrink-0" data-name="Amount">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-right whitespace-nowrap">14.590</p>
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
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[14px] text-left whitespace-nowrap">
        <p className="leading-[20px]">ES11 0081 0000 0000 0000 4425</p>
      </div>
      <div className="h-[15.997px] relative shrink-0 w-[16.003px]" data-name="Copy">
        <div className="absolute inset-[9.38%_15.63%_7.99%_15.63%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 13.2197">
            <path d={svgPaths.p12d4d400} fill="var(--fill-0, #006DF2)" id="vector" />
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

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#006df2] text-[14px] text-center whitespace-nowrap">Ver detalle</p>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="Link">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="account">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content1 />
        <Iban />
        <Link />
      </div>
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
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

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[12px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-ellipsis text-white w-[min-content] whitespace-nowrap">Cuenta Online Sabadell</p>
        <div className="content-stretch flex h-[32px] items-baseline relative shrink-0" data-name="Amount">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-right text-white whitespace-nowrap">0</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-white whitespace-nowrap">,00</p>
          <Currency1 />
        </div>
      </div>
    </div>
  );
}

function Iban3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Iban">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap">ES11 0081 0000 0000 0000 4425</p>
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

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Ver detalle</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start pb-[12px] pt-[4px] px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="Link">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Account1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="account">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content3 />
        <Iban2 />
        <Link1 />
      </div>
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Currency2() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[4px] pt-[16px] px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis w-[min-content] whitespace-nowrap">Cuenta Sabadell</p>
        <div className="content-stretch flex h-[32px] items-baseline relative shrink-0" data-name="Amount">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black text-right whitespace-nowrap">14.590</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">,00</p>
          <Currency2 />
        </div>
      </div>
    </div>
  );
}

function Iban5() {
  return (
    <button className="bg-white content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center p-[8px] relative rounded-[4px] shrink-0" data-name="Iban">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[14px] text-left whitespace-nowrap">
        <p className="leading-[20px]">ES11 0081 0000 0000 0000 4425</p>
      </div>
      <div className="h-[15.997px] relative shrink-0 w-[16.003px]" data-name="Copy">
        <div className="absolute inset-[9.38%_15.63%_7.99%_15.63%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.001 13.2197">
            <path d={svgPaths.p12d4d400} fill="var(--fill-0, #006DF2)" id="vector" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Iban4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Iban">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <Iban5 />
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#006df2] text-[14px] text-center whitespace-nowrap">Ver detalle</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[8px] px-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end justify-center relative shrink-0" data-name="Link">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Account2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="account">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Content5 />
        <Iban4 />
        <Link2 />
      </div>
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[40px] relative shrink-0" data-name="Cards">
      <div className="bg-white content-stretch flex items-start max-w-[400px] min-w-[280px] overflow-clip relative rounded-[16px] shrink-0 w-[310px]" data-name="Product Summary Block">
        <Account />
      </div>
      <div className="bg-white content-stretch flex items-start max-w-[400px] min-w-[280px] overflow-clip relative rounded-[16px] shrink-0 w-[310px]" data-name="Product Summary Block">
        <Account1 />
      </div>
      <div className="bg-white content-stretch flex items-start max-w-[400px] min-w-[280px] overflow-clip relative rounded-[16px] shrink-0 w-[310px]" data-name="Product Summary Block">
        <Account2 />
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-w-px relative" data-name="Content">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0" data-name="Plus">
        <div className="relative shrink-0 size-[18px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path clipRule="evenodd" d={svgPaths.p3ce4d00} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Dots() {
  return (
    <div className="h-[8px] relative shrink-0 w-[72px]" data-name="Dots">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 8">
        <g id="Dots">
          <circle cx="4" cy="4" fill="var(--fill-0, #006DFF)" id="Dot 1" r="4" />
          <circle cx="20" cy="4" fill="var(--fill-0, #BDBDBD)" id="Dot 2" r="4" />
          <path clipRule="evenodd" d={svgPaths.p3ee0de00} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="vector" />
        </g>
      </svg>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="Controls">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] opacity-0 overflow-clip p-[8px] relative rounded-[100px] shrink-0" data-name="left">
        <div className="content-stretch flex items-start px-[7px] py-[2px] relative shrink-0" data-name="Size=SM">
          <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
              <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #757575)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
      <Dots />
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] opacity-0 p-[8px] relative rounded-[100px] shrink-0" data-name="right">
        <div className="content-stretch flex items-start px-[7px] py-[2px] relative shrink-0" data-name="Size=SM">
          <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
              <path clipRule="evenodd" d={svgPaths.p10f18d00} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentCarousel() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-[390px]" data-name="content carousel">
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-end overflow-clip relative shrink-0 w-[390px]" data-name="Carousel">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Typology=Account, Breakpoint=390px, Card position=Last">
          <Cards />
          <div className="content-stretch flex h-[160px] items-center justify-center max-w-[40px] min-w-[40px] overflow-clip relative shrink-0 w-[40px]" data-name="Product Summary Block +">
            <Content7 />
          </div>
        </div>
        <Controls />
      </div>
    </div>
  );
}

function AccountDetaill() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="account detaill">
      <ContentCarousel />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
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

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[18px] mb-0">Enviar</p>
        <p className="leading-[18px]">Bizum</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
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

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[18px] mb-0">Enviar</p>
        <p className="leading-[18px]">dinero</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
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

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[18px] mb-0">Sacar</p>
        <p className="leading-[18px]">dinero</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[24px]" />
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

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon3 />
      <div className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        <p className="leading-[18px] mb-0">Más</p>
        <p className="leading-[18px]">opciones</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[78px] shrink-0 size-[40px]" data-name="Icon">
      <div className="bg-[#f8cf8c] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[78px] shrink-0 size-[40px]" data-name="Pill Servicing Icon">
        <div className="content-stretch flex items-start px-[3px] py-[2px] relative shrink-0" data-name="No tocar">
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
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[18px] text-center whitespace-nowrap">Revisar avisos</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] max-h-[72px] min-w-full overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis w-[min-content]">
        <span className="leading-[24px]">{`Laura, `}</span>
        <span className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px]">tienes 3 avisos</span>
        <span className="leading-[24px]">{` pendientes`}</span>
      </p>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Link">
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

function Content15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Todos</p>
    </div>
  );
}

function Badge() {
  return <div className="content-stretch flex h-[16px] items-start justify-center relative shrink-0 w-[24px]" data-name="Badge" />;
}

function ContentBadge() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Content + badge">
      <Content15 />
      <Badge />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="inner container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-[8px] pl-[22px] pt-[10px] relative size-full">
          <ContentBadge />
        </div>
      </div>
    </div>
  );
}

function OuterContainer() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="outer container">
      <div aria-hidden className="absolute border-[#006dff] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-[2px] px-[2px] relative size-full">
          <InnerContainer />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Próximos</p>
    </div>
  );
}

function Badge1() {
  return <div className="content-stretch flex h-[16px] items-start justify-center relative shrink-0 w-[24px]" data-name="Badge" />;
}

function ContentBadge1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Content + badge">
      <Content16 />
      <Badge1 />
    </div>
  );
}

function InnerContainer1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="inner container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-[8px] pl-[22px] pt-[10px] relative size-full">
          <ContentBadge1 />
        </div>
      </div>
    </div>
  );
}

function OuterContainer1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="outer container">
      <div aria-hidden className="absolute border-[#bdbdbd] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[4px] pt-[2px] px-[2px] relative size-full">
          <InnerContainer1 />
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex isolate items-center relative shrink-0 w-full" data-name="Tabs">
        <div className="bg-white content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative z-[7]" data-name="Tab 1">
          <OuterContainer />
        </div>
        <div className="bg-white content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative z-[6]" data-name="Tab 2">
          <OuterContainer1 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Title">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Esta semana</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center pt-[8px] relative shrink-0 w-full" data-name="content">
      <Title />
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0" data-name="Button Search">
        <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
          <div className="relative shrink-0 size-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p26c6e700} fill="var(--fill-0, #006DF2)" id="vector" />
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
            <Content17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Merchants() {
  return (
    <div className="bg-[#eee] relative rounded-[16px] shrink-0 size-[32px]" data-name="Merchants">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] left-[16px] text-[#424242] text-[16px] text-center top-[4px] w-[14px]">C</p>
      </div>
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 z-[1]" data-name="Avatar">
          <Merchants />
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

function Amount() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-49</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency3 />
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">Martes 12 Dic</p>
    </div>
  );
}

function Currency4() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">14.590</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency4 />
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

function Content19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount />
    </div>
  );
}

function Content18() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar />
        <Content19 />
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
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content18 />
        <Divider />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#eee] content-stretch flex items-center justify-center p-[8px] relative rounded-[64px] shrink-0" data-name="icon">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Size=XS">
        <div className="h-[14px] relative shrink-0 w-[13.998px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.998 14">
            <path d={svgPaths.p6302300} fill="var(--fill-0, #424242)" id="vector" />
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

function Currency5() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008626] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#008626] text-[16px] text-right whitespace-nowrap">+1.200</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008626] text-[14px] whitespace-nowrap">,00</p>
        <Currency5 />
      </div>
    </div>
  );
}

function ConceptAmount1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Nómina [Industrias Gráficas Henares]</p>
      </div>
      <Amount1 />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">Martes 12 Dic</p>
    </div>
  );
}

function Currency6() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">14.639</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency6 />
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
    <div className="bg-[#ccecda] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[20px] shrink-0" data-name="Tag">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">Ahorrar</p>
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

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount1 />
    </div>
  );
}

function Content20() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar1 />
        <Content21 />
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
        <Content20 />
        <Divider1 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#eee] content-stretch flex items-center justify-center p-[8px] relative rounded-[64px] shrink-0" data-name="icon">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Size=XS">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.pa599600} fill="var(--fill-0, #424242)" id="vector" />
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

function Currency7() {
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
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-200</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency7 />
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">Lunes 11 Dic</p>
    </div>
  );
}

function Currency8() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">13.439</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency8 />
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

function Content23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount2 />
    </div>
  );
}

function Content22() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar2 />
        <Content23 />
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
        <Content22 />
        <Divider2 />
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <div className="absolute inset-0 pointer-events-none rounded-[200px]" data-name="Uber Eats">
            <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[200px] size-full" src={imgUberEats} />
            <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 rounded-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Currency9() {
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
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-48</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,50</p>
        <Currency9 />
      </div>
    </div>
  );
}

function ConceptAmount3() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Uber Eats Spain</p>
      </div>
      <Amount3 />
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">Lunes 11 Dic</p>
    </div>
  );
}

function Currency10() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">13.687</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,50</p>
        <Currency10 />
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

function Content25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount3 />
    </div>
  );
}

function Content24() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar3 />
        <Content25 />
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
        <Content24 />
        <Divider3 />
      </div>
    </div>
  );
}

function Merchant() {
  return (
    <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Merchant">
      <div className="absolute inset-[-15%_-17.5%_-17.5%_-15%]" data-name="agbar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAgbar} />
        </div>
      </div>
    </div>
  );
}

function Symbol1() {
  return (
    <div className="absolute contents inset-[-15%_-17.5%_-17.5%_-15%]" data-name="Symbol">
      <Merchant />
    </div>
  );
}

function Agbar1() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[32px_32px] overflow-clip" style={{ maskImage: `url("${imgAgbar1}")` }} data-name="agbar 1">
      <Symbol1 />
    </div>
  );
}

function Symbol() {
  return (
    <div className="absolute contents inset-[calc(0%-1px)]" data-name="Symbol">
      <Agbar1 />
    </div>
  );
}

function Agbar() {
  return (
    <div className="absolute border border-[#bdbdbd] border-solid left-0 overflow-clip rounded-[16px] size-[32px] top-0" data-name="AGBAR">
      <Symbol />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <Agbar />
        </div>
      </div>
    </div>
  );
}

function Currency11() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-28</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,80</p>
        <Currency11 />
      </div>
    </div>
  );
}

function ConceptAmount4() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Adeudo Recibo Sociedad Gral.Aguas Bcn</p>
      </div>
      <Amount4 />
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">Domingo 10 Dic</p>
    </div>
  );
}

function Currency12() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">13.736</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency12 />
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

function Content27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount4 />
    </div>
  );
}

function Content26() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar4 />
        <Content27 />
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
        <Content26 />
        <Divider4 />
      </div>
    </div>
  );
}

function Merchants1() {
  return (
    <div className="absolute contents inset-[4.29%_1.22%_4.29%_3.65%]" data-name="Merchants">
      <div className="absolute inset-[4.29%_1.22%_4.29%_3.65%]" data-name="ECI">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgEci} />
        </div>
      </div>
    </div>
  );
}

function Symbol2() {
  return (
    <div className="absolute contents inset-[4.29%_1.22%_4.29%_3.65%]" data-name="Symbol">
      <Merchants1 />
    </div>
  );
}

function CorteIngles() {
  return (
    <div className="absolute inset-[28.13%_6.25%_28.13%_18.75%] overflow-clip" data-name="corte ingles">
      <Symbol2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-0 size-[32px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #007950)" id="Ellipse 92" r="15.5" stroke="var(--stroke-0, #BDBDBD)" />
        </svg>
      </div>
      <CorteIngles />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Currency13() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-2.000</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,80</p>
        <Currency13 />
      </div>
    </div>
  );
}

function ConceptAmount5() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Viajes El Corte Inglés</p>
      </div>
      <Amount5 />
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">Martes 5 Dic</p>
    </div>
  );
}

function Currency14() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">13.764</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,80</p>
        <Currency14 />
      </div>
    </div>
  );
}

function DateBalance5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date5 />
      <BalanceInfo5 />
    </div>
  );
}

function ConceptDateAmount5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount5 />
      <DateBalance5 />
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount5 />
    </div>
  );
}

function Content28() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar5 />
        <Content29 />
      </div>
    </div>
  );
}

function Divider5() {
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

function ConceptMovement5() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content28 />
        <Divider5 />
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

function Avatar6() {
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

function Currency15() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount6() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-780</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency15 />
      </div>
    </div>
  );
}

function ConceptAmount6() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Tarjeta Crédito Sandra Antanares Gutierrez</p>
      </div>
      <Amount6 />
    </div>
  );
}

function Date6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">Viernes 1 Dic</p>
    </div>
  );
}

function Currency16() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">15.764</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency16 />
      </div>
    </div>
  );
}

function DateBalance6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date6 />
      <BalanceInfo6 />
    </div>
  );
}

function ConceptDateAmount6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount6 />
      <DateBalance6 />
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount6 />
    </div>
  );
}

function Content30() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar6 />
        <Content31 />
      </div>
    </div>
  );
}

function Divider6() {
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

function ConceptMovement6() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content30 />
        <Divider6 />
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black">Noviembre</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="bg-[#eee] content-stretch flex items-center justify-center p-[8px] relative rounded-[64px] shrink-0" data-name="icon">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
      <div className="content-stretch flex items-start px-[2.7px] py-px relative shrink-0" data-name="Size=XS">
        <div className="h-[14.004px] relative shrink-0 w-[10.6px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 14.0039">
            <path clipRule="evenodd" d={svgPaths.pcf85580} fill="var(--fill-0, #424242)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 z-[1]" data-name="Avatar">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Currency17() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008626] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function Amount7() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#008626] text-[16px] text-right whitespace-nowrap">+30</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#008626] text-[14px] whitespace-nowrap">,00</p>
        <Currency17 />
      </div>
    </div>
  );
}

function ConceptAmount7() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Abono Bizum De Alberto Pérez Huerto</p>
      </div>
      <Amount7 />
    </div>
  );
}

function Date7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">22 Nov</p>
    </div>
  );
}

function Currency18() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">16.544</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency18 />
      </div>
    </div>
  );
}

function DateBalance7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date7 />
      <BalanceInfo7 />
    </div>
  );
}

function ConceptDateAmount7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount7 />
      <DateBalance7 />
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount7 />
    </div>
  );
}

function Content33() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar7 />
        <Content34 />
      </div>
    </div>
  );
}

function Divider7() {
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

function ConceptMovement7() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content33 />
        <Divider7 />
      </div>
    </div>
  );
}

function Merchants2() {
  return (
    <div className="absolute contents inset-[-40.91%_-16.67%_-39.09%_-20.83%]" data-name="Merchants">
      <div className="absolute inset-[-40.91%_-16.67%_-39.09%_-20.83%]" data-name="mercadona-logo-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[496.97%]" src={imgMercadonaLogoWhite} />
        </div>
      </div>
    </div>
  );
}

function Symbol3() {
  return (
    <div className="absolute contents inset-[-40.91%_-16.67%_-39.09%_-20.83%]" data-name="Symbol">
      <Merchants2 />
    </div>
  );
}

function MercadonaLogoWhite() {
  return (
    <div className="absolute h-[25px] left-[4px] overflow-clip top-[3px] w-[24px]" data-name="mercadona-logo-white">
      <Symbol3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-0 size-[32px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #008626)" id="Ellipse 94" r="16" />
        </svg>
      </div>
      <MercadonaLogoWhite />
    </div>
  );
}

function Avatar8() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Currency19() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount8() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-224</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency19 />
      </div>
    </div>
  );
}

function ConceptAmount8() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Mercadona Spain Slu</p>
      </div>
      <Amount8 />
    </div>
  );
}

function Date8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">21 Nov</p>
    </div>
  );
}

function Currency20() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">16.574</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency20 />
      </div>
    </div>
  );
}

function DateBalance8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date8 />
      <BalanceInfo8 />
    </div>
  );
}

function ConceptDateAmount8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount8 />
      <DateBalance8 />
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount8 />
    </div>
  );
}

function Content35() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar8 />
        <Content36 />
      </div>
    </div>
  );
}

function Divider8() {
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

function ConceptMovement8() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content35 />
        <Divider8 />
      </div>
    </div>
  );
}

function Merchants3() {
  return (
    <div className="absolute contents inset-[-18.68%_-25%_-24.93%_-21.88%]" data-name="Merchants">
      <div className="absolute inset-[-18.68%_-25%_-24.93%_-21.88%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7px_5.978px] mask-size-[32px_32px]" style={{ maskImage: `url("${imgGlobo}")` }} data-name="Globo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGlobo1} />
        </div>
      </div>
    </div>
  );
}

function Symbol5() {
  return (
    <div className="absolute contents inset-[-18.68%_-25%_-24.93%_-21.88%]" data-name="Symbol">
      <Merchants3 />
    </div>
  );
}

function Symbol4() {
  return (
    <div className="absolute contents inset-[calc(-18.68%-1.37px)_calc(-25%-1.5px)_calc(-24.93%-1.5px)_calc(-21.88%-1.44px)]" data-name="Symbol">
      <Symbol5 />
    </div>
  );
}

function Glovo() {
  return (
    <div className="absolute border border-[#bdbdbd] border-solid left-0 overflow-clip rounded-[16px] size-[32px] top-0" data-name="GLOVO">
      <Symbol4 />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <Glovo />
        </div>
      </div>
    </div>
  );
}

function Currency21() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount9() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-15</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency21 />
      </div>
    </div>
  );
}

function ConceptAmount9() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Glovoapp Spain Platform sl</p>
      </div>
      <Amount9 />
    </div>
  );
}

function Date9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">15 Nov</p>
    </div>
  );
}

function Currency22() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">16.813</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency22 />
      </div>
    </div>
  );
}

function DateBalance9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date9 />
      <BalanceInfo9 />
    </div>
  );
}

function ConceptDateAmount9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount9 />
      <DateBalance9 />
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount9 />
    </div>
  );
}

function Content37() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar9 />
        <Content38 />
      </div>
    </div>
  );
}

function Divider9() {
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

function ConceptMovement9() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content37 />
        <Divider9 />
      </div>
    </div>
  );
}

function Merchants4() {
  return (
    <div className="absolute contents inset-[-25%_-11.11%_-27.38%_-7.41%]" data-name="Merchants">
      <div className="absolute inset-[-25%_-11.11%_-27.38%_-7.41%]" data-name="renfe-logo-blanco">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRenfeLogoBlanco} />
        </div>
      </div>
    </div>
  );
}

function Symbol6() {
  return (
    <div className="absolute contents inset-[-25%_-11.11%_-27.38%_-7.41%]" data-name="Symbol">
      <Merchants4 />
    </div>
  );
}

function RenfeLogoBlanco() {
  return (
    <div className="absolute h-[12px] left-[2px] overflow-clip top-[10px] w-[27px]" data-name="renfe-logo-blanco">
      <Symbol6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-0 size-[32px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #8E2671)" id="Ellipse 95" r="15.5" stroke="var(--stroke-0, #BDBDBD)" />
        </svg>
      </div>
      <RenfeLogoBlanco />
    </div>
  );
}

function Avatar10() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <Group2 />
        </div>
      </div>
    </div>
  );
}

function Currency23() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount10() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-214</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency23 />
      </div>
    </div>
  );
}

function ConceptAmount10() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Renfe Slu</p>
      </div>
      <Amount10 />
    </div>
  );
}

function Date10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">13 Nov</p>
    </div>
  );
}

function Currency24() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">16.828</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency24 />
      </div>
    </div>
  );
}

function DateBalance10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date10 />
      <BalanceInfo10 />
    </div>
  );
}

function ConceptDateAmount10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount10 />
      <DateBalance10 />
    </div>
  );
}

function Content40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount10 />
    </div>
  );
}

function Content39() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar10 />
        <Content40 />
      </div>
    </div>
  );
}

function Divider10() {
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

function ConceptMovement10() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content39 />
        <Divider10 />
      </div>
    </div>
  );
}

function Merchants5() {
  return (
    <div className="absolute contents inset-[-40.91%_-16.67%_-39.09%_-20.83%]" data-name="Merchants">
      <div className="absolute inset-[-40.91%_-16.67%_-39.09%_-20.83%]" data-name="mercadona-logo-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[496.97%]" src={imgMercadonaLogoWhite} />
        </div>
      </div>
    </div>
  );
}

function Symbol7() {
  return (
    <div className="absolute contents inset-[-40.91%_-16.67%_-39.09%_-20.83%]" data-name="Symbol">
      <Merchants5 />
    </div>
  );
}

function MercadonaLogoWhite1() {
  return (
    <div className="absolute h-[25px] left-[4px] overflow-clip top-[3px] w-[24px]" data-name="mercadona-logo-white">
      <Symbol7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute left-0 size-[32px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #02994C)" id="Ellipse 94" r="16" />
        </svg>
      </div>
      <MercadonaLogoWhite1 />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Currency25() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount11() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-118</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency25 />
      </div>
    </div>
  );
}

function ConceptAmount11() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Mercadona Spain Slu</p>
      </div>
      <Amount11 />
    </div>
  );
}

function Date11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">10 Nov</p>
    </div>
  );
}

function Currency26() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">17.042</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency26 />
      </div>
    </div>
  );
}

function DateBalance11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date11 />
      <BalanceInfo11 />
    </div>
  );
}

function ConceptDateAmount11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount11 />
      <DateBalance11 />
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount11 />
    </div>
  );
}

function Content41() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar11 />
        <Content42 />
      </div>
    </div>
  );
}

function Divider11() {
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

function ConceptMovement11() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content41 />
        <Divider11 />
      </div>
    </div>
  );
}

function Content43() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[16px] pt-[24px] px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black">Septiembre 2022</p>
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="absolute contents inset-0" data-name="-Copy">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgCopy} />
      </div>
    </div>
  );
}

function Symbol8() {
  return (
    <div className="absolute contents inset-0" data-name="Symbol">
      <Copy />
    </div>
  );
}

function ZaraEmblema() {
  return (
    <div className="absolute h-[14px] left-[4px] overflow-clip top-[9px] w-[24px]" data-name="Zara-Emblema">
      <Symbol8 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-[-0.39px]">
      <div className="absolute left-0 pointer-events-none rounded-[100px] size-[32px] top-[-0.39px]" data-name="Merchant">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[100px] size-full" src={imgMerchant} />
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 rounded-[100px]" />
      </div>
      <ZaraEmblema />
    </div>
  );
}

function Avatar12() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar">
      <div className="content-stretch flex flex-col isolate items-start pt-[6px] relative size-full">
        <div className="relative shrink-0 size-[32px] z-[1]" data-name="Avatar">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Currency27() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Amount12() {
  return (
    <div className="content-stretch flex items-start justify-end min-w-[104px] relative shrink-0" data-name="amount">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Movement amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">-74</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency27 />
      </div>
    </div>
  );
}

function ConceptAmount12() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Concept + amount">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px overflow-hidden relative text-[16px] text-black text-ellipsis">
        <p className="leading-[24px]">Compra - Zara Spain Slu</p>
      </div>
      <Amount12 />
    </div>
  );
}

function Date12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-[48px] relative" data-name="Date">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#757575] text-[14px]">2 Sep</p>
    </div>
  );
}

function Currency28() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">€</p>
    </div>
  );
}

function BalanceInfo12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0" data-name="Balance + Info">
      <div className="content-stretch flex items-baseline justify-end min-w-[64px] relative shrink-0" data-name="Balance">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] text-right whitespace-nowrap">17.116</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">,00</p>
        <Currency28 />
      </div>
    </div>
  );
}

function DateBalance12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Date + balance">
      <Date12 />
      <BalanceInfo12 />
    </div>
  );
}

function ConceptDateAmount12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Concept + date + amount">
      <ConceptAmount12 />
      <DateBalance12 />
    </div>
  );
}

function Content45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Content">
      <ConceptDateAmount12 />
    </div>
  );
}

function Content44() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="content">
      <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
        <Avatar12 />
        <Content45 />
      </div>
    </div>
  );
}

function Divider12() {
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

function ConceptMovement12() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative" data-name="concept_movement">
      <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] px-[4px] relative size-full">
        <Content44 />
        <Divider12 />
      </div>
    </div>
  );
}

function Movements() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="movements">
      <div className="bg-white content-stretch flex flex-col items-center justify-end max-w-[767px] min-h-[57px] min-w-[360px] overflow-clip relative shrink-0 w-full" data-name="Sticky panel">
        <SwapContent />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement1 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start justify-center relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement2 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement3 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement4 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement5 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement6 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center min-w-[88px] relative shrink-0 w-[390px]" data-name="Group title">
        <Content32 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement7 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement8 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement9 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement10 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement11 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start justify-center min-w-[88px] relative shrink-0 w-[390px]" data-name="Group title">
        <Content43 />
      </div>
      <div className="bg-white content-stretch cursor-pointer flex items-start overflow-clip relative shrink-0 w-full" data-name="Transaction Item">
        <ConceptMovement12 />
      </div>
    </div>
  );
}

function MainContentSearch() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main content - search">
      <div className="max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Quick actions set">
        <div className="flex flex-row justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 1">
              <Content8 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 2">
              <Content9 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 3">
              <Content10 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[119px] min-w-[76px] py-[4px] relative" data-name="Quick Action 4">
              <Content11 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="SLOT_Content_Servicing Notices">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[4px] relative size-full">
          <div className="bg-white content-stretch flex items-start justify-center max-h-[184px] min-h-[84px] min-w-[328px] overflow-clip relative rounded-[16px] shadow-[0px_8px_20px_1px_rgba(0,0,0,0.05),0px_3px_14px_5px_rgba(0,0,0,0.05),0px_5px_10px_-5px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="Pill servicing">
            <Content12 />
          </div>
        </div>
      </div>
      <Tabs />
      <Movements />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[5.34%_0_0_0] items-center" data-name="Content">
      <AccountDetaill />
      <MainContentSearch />
    </div>
  );
}

function Indicator() {
  return <div className="h-[4px] relative shrink-0 w-[24px]" data-name="Indicator" />;
}

function Icon9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[26px]" data-name="Icon">
      <div className="absolute content-stretch flex items-start left-0 px-[3px] py-[2px] top-0" data-name="Home">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1c059700} fill="var(--fill-0, #757575)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationBarButtons() {
  return (
    <div className="absolute bg-white h-[68px] left-0 top-[8px] w-[82px]" data-name="Navigation Bar / Buttons">
      <div aria-hidden className="absolute border-[#eee] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
    </div>
  );
}

function Operar() {
  return (
    <div className="h-[76px] relative shrink-0 w-[82px]" data-name="Operar">
      <NavigationBarButtons />
      <div className="absolute left-[13px] size-[56px] top-0" data-name="Boton Operar">
        <div className="absolute left-0 size-[56px] top-0">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <circle cx="28" cy="28" fill="var(--fill-0, #006DFF)" id="Ellipse 1" r="28" />
          </svg>
        </div>
        <div className="absolute inset-[32.14%_31.59%_31.59%_32.14%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3076 20.3076">
            <path d={svgPaths.pa35100} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Indicator1() {
  return <div className="h-[4px] relative shrink-0 w-[24px]" data-name="Indicator" />;
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="absolute content-stretch flex items-start left-0 overflow-clip p-[2px] top-0" data-name="Add-circle">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p16c2c640} fill="var(--fill-0, #757575)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[60.38%_0_35.19%_0] items-center" data-name="Bottom bar">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="NavBar + HomeIndicator">
        <div className="content-stretch drop-shadow-[0px_-8px_10px_rgba(0,0,0,0.05),0px_-3px_7px_rgba(0,0,0,0.05)] flex h-[68px] items-end justify-center max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Nav Bar">
          <div className="bg-white flex-[1_0_0] h-[68px] min-w-px relative" data-name="Navigation Buttons">
            <div aria-hidden className="absolute border-[#eee] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
                <Indicator />
                <Icon9 />
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#424242] text-[14px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">Inicio</p>
                </div>
              </div>
            </div>
          </div>
          <Operar />
          <div className="bg-white flex-[1_0_0] h-[68px] min-w-px relative" data-name="Navigation Buttons 2">
            <div aria-hidden className="absolute border-[#eee] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
                <Indicator1 />
                <Icon10 />
                <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#424242] text-[14px] text-center text-ellipsis w-[min-content] whitespace-nowrap">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">Contratar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[24px] relative shrink-0 w-full" data-name="HomeIndicator">
          <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
        </div>
      </div>
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
        <p className="leading-[24px] overflow-hidden text-ellipsis">Cuentas</p>
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

function Content46() {
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

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_94.66%_0] items-center" data-name="Header">
      <div className="bg-[#fafafa] h-[47px] overflow-clip relative shrink-0 w-full" data-name="StatusBar">
        <Notch />
        <LeftSide />
        <RightSide />
      </div>
      <div className="bg-[#fafafa] content-stretch flex flex-col h-[64px] items-start max-w-[767px] min-w-[360px] relative shrink-0 w-full" data-name="Status Bar">
        <Content46 />
      </div>
    </div>
  );
}

function Component095QuickActionsPosicionCuentasXs({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[2080px] left-0 top-0 w-[390px]"} data-name="0.9.5 Quick actions - Posicion_cuentas - XS">
      <Content />
      <BottomBar />
      <Header />
    </div>
  );
}

export default function Component095QuickActionsDigi68166408641010095PosicioCuentasXs() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="0.9.5 Quick actions - DIGI 6816-6408-6410-10095 Posicio_cuentas - XS">
      <Component095QuickActionsPosicionCuentasXs />
    </div>
  );
}