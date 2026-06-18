import TePuedeInteresarSection from "@/app/components/te-puede-interesar-section";
import AppHeader from "@/app/components/app-header";
import { useNavigation } from "@/app/navigation";
import { useTransferScenario } from "@/app/transfer-scenario/transfer-scenario-context";
import { HideableAmount, useBalanceVisibility } from "@/app/balance-visibility";
import svgPaths from "./svg-1ii20ao3qk";
import cardSvg from "../ContainerUi/svg-0pgssrznve";
import imgImagery from "./a9716b11fde2df1e6fc763dc67e77520d5eb0f45.png";
import imgImagery1 from "./5284f8c4b82d3caf0152bc8d05f876ca771ab867.png";
import imgImagery2 from "./3c910250706bcc314e2e9e03d0a6cf3a3a1d2f7f.png";
import imgImagery3 from "./f581d209b76654825d648ebcf46db03b6cd86e53.png";

// Header eye button — toggles balance visibility for the whole screen.
// Reuses the original Figma eye glyph (svgPaths.pbcaae00) so it stays visually
// identical to the imported design; when balances are hidden a diagonal slash
// is overlaid to read as "ojo tachado".
function BalanceEyeButton() {
  const { hidden, toggle } = useBalanceVisibility();
  return (
    // using <button> instead of a kit Button/Icon: @galatea-gamma/core (the
    // component library) is not installed in this project — only the kit
    // container — and this screen is built entirely from Figma-imported markup.
    <button
      type="button"
      onClick={toggle}
      aria-label={hidden ? "Mostrar saldos" : "Ocultar saldos"}
      aria-pressed={hidden}
      className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer"
      data-name="Button"
    >
      <div className="content-stretch flex flex-col items-center py-[1.93px] relative shrink-0 size-[24px]" data-name="Size=SM">
        <div className="h-[17.075px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.0752">
            <path d={svgPaths.pbcaae00} fill="var(--fill-0, #006DFF)" id="vector" />
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

function Icon() {
  return (
    <div className="bg-[#eee] flex-[1_0_0] h-full min-w-px relative rounded-[50px]" data-name="icon">
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <div className="content-stretch flex items-start px-[2px] py-px relative shrink-0" data-name="User">
            <div className="h-[14px] relative shrink-0 w-[12px]" data-name="vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                <path d={svgPaths.p905a500} fill="var(--fill-0, #646464)" id="vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="absolute bg-[#fc00f4] left-[4px] rounded-[50px] size-[8px] top-[4px]" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[52px]" />
    </div>
  );
}

function Number1() {
  return (
    <div className="absolute bg-[#fc00f4] left-[4px] rounded-[64px] size-[8px] top-[4px]" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function Actions() {
  const { navigate } = useNavigation();
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Actions">
      <BalanceEyeButton />
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Action 2">
        <div className="content-stretch flex flex-col items-start overflow-clip px-[2px] py-[4px] relative shrink-0" data-name="Size=SM">
          <div className="h-[16px] relative shrink-0 w-[20px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p354bb680} fill="var(--fill-0, #006DFF)" id="vector" />
            </svg>
          </div>
        </div>
        <div className="absolute right-0 size-[16px] top-0" data-name="Badge">
          <Number1 />
        </div>
      </div>
      <button
        type="button"
        onClick={() => navigate("ayuda")}
        aria-label="Centro de ayuda"
        className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer"
        data-name="Action 3"
      >
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
      </button>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Content">
      <div className="bg-[#eee] content-stretch flex items-center relative rounded-[50px] shrink-0 size-[40px]" data-name="Avatar">
        <Icon />
        <div className="absolute right-[-2px] size-[16px] top-[-2px]" data-name="Badge">
          <Number />
        </div>
      </div>
      <Actions />
    </div>
  );
}

function Content() {
  return (
    <div className="h-[64px] max-w-[767px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] p-[16px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function HeaderSlot() {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 w-full" data-name="Header Slot">
      <AppHeader />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center min-w-[88px] relative shrink-0 w-[143px]" data-name="Title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-black text-center">Saldo en cuentas</p>
    </div>
  );
}

function Currency() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Balance() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Balance">
      <Title />
      <div className="content-stretch flex items-baseline justify-center relative shrink-0" data-name="main amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[32px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[32px] text-black text-right whitespace-nowrap">11.263</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-black whitespace-nowrap">,22</p>
        </HideableAmount>
        <Currency />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#646464] text-[0px] text-center whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">{`Ahorrado/Invertido: `}</span>
        <HideableAmount dotsClassName="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px]">
          <span className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px]">642,18€</span>
        </HideableAmount>
      </p>
    </div>
  );
}

function IconCircle() {
  return (
    <div className="bg-[#006dff] content-stretch flex items-start pb-[7px] pt-[5px] px-[6px] relative rounded-[14px] shrink-0 size-[28px]" data-name="Icon+Circle">
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Calendar">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p9a26880} fill="var(--fill-0, white)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleAmount() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title + Amount">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#646464] text-[0px] w-[181px]">
        <span className="leading-[20px] text-[14px]">Próximos pagos:</span>
        <HideableAmount dotsClassName="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] text-[14px]">
          <span className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] text-[14px]">{` -285,99 €`}</span>
        </HideableAmount>
      </p>
      <div className="content-stretch flex items-start px-[4px] py-px relative shrink-0" data-name="Arrow-right">
        <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, #006DF2)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
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
      <Icon1 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Enviar Bizum</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[44px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3107de00} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">
        Enviar
        <br aria-hidden />
        dinero
      </p>
    </div>
  );
}

function Icon3() {
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
      <Icon3 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Sacar dinero</p>
    </div>
  );
}

function Icon4() {
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
      <Icon4 />
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">Límites de tarjeta</p>
    </div>
  );
}

function Content2() {
  const { openTransferFlow } = useTransferScenario();
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pt-[24px] relative shrink-0 w-full" data-name="Content">
      <Balance />
      <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[6px] py-[8px] relative rounded-[40px] shrink-0 w-[244px]" data-name="MC - Entry Point - PG">
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[40px]" />
        <IconCircle />
        <TitleAmount />
      </div>
      <div className="max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Quick actions set">
        <div className="flex flex-row justify-center max-w-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 1">
              <Content3 />
            </div>
            <button
              type="button"
              onClick={() => openTransferFlow("Posición global · Enviar dinero")}
              className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative cursor-pointer"
              data-name="Quick Action 2"
            >
              <Content4 />
            </button>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 3">
              <Content5 />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative" data-name="Quick Action 4">
              <Content6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#e1f7ff] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[78px] shrink-0 size-[40px]" data-name="Icon">
      <div className="content-stretch flex items-start px-[3px] py-[2px] relative shrink-0" data-name="Bell">
        <div className="h-[20px] relative shrink-0 w-[18px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <path d="M8.00195 17.4004C8.00216 17.9525 8.44874 18.4004 9 18.4004C9.512 18.4004 9.93352 18.0139 9.99121 17.5166L9.99805 17.4004H11.5957C11.5955 18.8362 10.4335 20 9 20C7.62152 20 6.49388 18.9238 6.40918 17.5645L6.4043 17.4004H8.00195ZM9 0C12.6643 6.50389e-08 15.6357 2.96991 15.6357 6.63379V9.5498C15.6357 9.86614 15.6747 10.2155 15.75 10.5918C15.8838 11.2602 16.126 11.9876 16.4463 12.7344C16.6286 13.1594 16.8241 13.5637 17.0195 13.9326L17.1963 14.2568L18 15.5996H0L0.727539 14.3877L0.803711 14.2568L0.980469 13.9326C1.17587 13.5637 1.37144 13.1594 1.55371 12.7344C1.87396 11.9876 2.11623 11.2602 2.25 10.5918C2.3253 10.2155 2.36426 9.86614 2.36426 9.5498V6.63379C2.36426 2.96991 5.33575 0 9 0ZM9 1.59961C6.21719 1.59961 3.96191 3.85435 3.96191 6.63379V9.5498C3.96191 9.97884 3.91134 10.4319 3.81641 10.9062C3.65836 11.696 3.3821 12.5242 3.02148 13.3652L2.86914 13.7119L2.7334 13.999H15.2656L15.1309 13.7119L14.9785 13.3652C14.6179 12.5242 14.3416 11.696 14.1836 10.9062C14.0887 10.4319 14.0381 9.97884 14.0381 9.5498V6.63379C14.0381 3.85435 11.7828 1.59961 9 1.59961Z" fill="black" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Configurar perfil</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pt-[4px] relative" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[0px] text-black w-[min-content]">
        <span className="leading-[24px] text-[16px]">Laura,</span>
        <span className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] text-[16px]">{` te queda muy poco`}</span>
        <span className="leading-[24px] text-[16px]">{` para completar la configuración `}</span>
      </p>
      <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
        <Content10 />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex gap-[8px] items-start p-[16px] relative size-full">
        <Icon5 />
        <Content9 />
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] pb-[24px] px-[16px] relative size-full">
          <div className="bg-white max-h-[184px] min-h-[84px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Pills">
            <div className="content-stretch flex items-start justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
              <Content8 />
            </div>
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px] shadow-[0px_3px_7px_rgba(0,0,0,0.05),0px_4px_10px_rgba(0,0,0,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTop() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="SectionTop">
      <Content2 />
      <Content7 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-name="Tus productos - filtro">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">Tus productos</p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#eee] content-stretch flex gap-[4px] items-center justify-center relative rounded-[64px]" data-name="Toggle button Set">
              <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[65px]" />
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[64px]" data-name="Toggle button state">
                    <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Bank">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p8086d00} fill="var(--fill-0, #006DFF)" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-[#eee] content-stretch flex items-center justify-center p-[12px] relative rounded-[64px]" data-name="Toggle button state">
                    <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Density">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p70d9d80} fill="var(--fill-0, #006DFF)" id="vector" />
                        </svg>
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

function SectionProducts() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section_Products">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function AcountName() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="acount name">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number2 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Cuenta Sabadell</p>
    </div>
  );
}

function AccountNumber() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="account number">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #646464)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">••••4422</p>
    </div>
  );
}

function Currency1() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AccountNumberAmount() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="account number + amount">
      <AccountNumber />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-black text-right">2.000</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency1 />
      </div>
    </div>
  );
}

function Account() {
  const { navigate } = useNavigation();
  return (
    <button
      type="button"
      onClick={() => navigate("cuentas", { account: "sabadell" })}
      aria-label="Ver Cuenta Sabadell"
      className="cursor-pointer relative rounded-[8px] shrink-0 w-full block text-left" data-name="account"
    >
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <AcountName />
        <AccountNumberAmount />
      </div>
    </button>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <Account />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function AcountName1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="acount name">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number3 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Cuenta familiar</p>
    </div>
  );
}

function AccountNumber1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="account number">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #646464)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">••••4425</p>
    </div>
  );
}

function Currency2() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AccountNumberAmount1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="account number + amount">
      <AccountNumber1 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-black text-right">9.000</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency2 />
      </div>
    </div>
  );
}

function Account1() {
  const { navigate } = useNavigation();
  return (
    <button
      type="button"
      onClick={() => navigate("cuentas", { account: "familiar" })}
      aria-label="Ver Cuenta familiar"
      className="cursor-pointer relative rounded-[8px] shrink-0 w-full block text-left" data-name="account"
    >
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <AcountName1 />
        <AccountNumberAmount1 />
      </div>
    </button>
  );
}

function Content14() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <Account1 />
      </div>
    </div>
  );
}

function TitleText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] w-full">¿Quieres hasta 21.000 € al instante?</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">En 3 minutos y sin papeleo</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TitleText />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative">
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start pl-[5px] pr-[3px] py-px relative shrink-0" data-name="Size=XS">
          <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
              <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, black)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSimple() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content simple">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <Frame1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Cuentas section">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black w-full">Cuentas</p>
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Cuentas container">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Cuentas container content">
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_account">
                <Content13 />
                <Divider />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_account">
                <Content14 />
              </div>
              <div className="bg-[#ccecda] content-stretch flex flex-col items-start min-h-[80px] min-w-[328px] overflow-clip relative shrink-0 w-full" data-name="Booster cuentas">
                <ContentSimple />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}

function SectionProducts1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section_Products">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Content12 />
        </div>
      </div>
    </div>
  );
}

function BizumTitle() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0 w-[326px]" data-name="Bizum title">
      <div className="content-stretch flex items-start px-[2.7px] py-px relative shrink-0" data-name="Bizum">
        <div className="h-[14.004px] relative shrink-0 w-[10.6px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 14.0039">
            <path clipRule="evenodd" d={svgPaths.pcf85580} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Bizum</p>
    </div>
  );
}

function BizumSection() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_bizum_section">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <BizumTitle />
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <BizumSection />
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bizum_section">
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SLOT_Content_Container_UI_Bizum">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[358px]" data-name="Content_container_UI_Bizum">
                <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_Bizum_active">
                  <Content16 />
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </div>
  );
}

function SectionProducts2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section_Products">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function AcountName2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="acount name">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number4 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Cuenta Sabadell</p>
    </div>
  );
}

function AccountNumber2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="account number">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #646464)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">••••4422</p>
    </div>
  );
}

function Currency3() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AccountNumberAmount2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="account number + amount">
      <AccountNumber2 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-black text-right">2.000</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,00</p>
        <Currency3 />
      </div>
    </div>
  );
}

function Account2() {
  return (
    <div className="cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="account">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <AcountName2 />
        <AccountNumberAmount2 />
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <Account2 />
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Number5() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function AcountName3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="acount name">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number5 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Cuenta familiar</p>
    </div>
  );
}

function AccountNumber3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="account number">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #646464)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">••••4425</p>
    </div>
  );
}

function Currency4() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AccountNumberAmount3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="account number + amount">
      <AccountNumber3 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-black text-right">9.000</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,00</p>
        <Currency4 />
      </div>
    </div>
  );
}

function Account3() {
  return (
    <div className="cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="account">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <AcountName3 />
        <AccountNumberAmount3 />
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <Account3 />
      </div>
    </div>
  );
}

function TitleText1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] w-full">¿Quieres hasta 21.000 € al instante?</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">En 3 minutos y sin papeleo</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TitleText1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative">
      <Frame3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start pl-[5px] pr-[3px] py-px relative shrink-0" data-name="Size=XS">
          <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
              <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, black)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSimple1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content simple">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <Frame2 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function BizumTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0 w-[326px]" data-name="Bizum title">
      <div className="content-stretch flex items-start px-[2.7px] py-px relative shrink-0" data-name="Bizum">
        <div className="h-[14.004px] relative shrink-0 w-[10.6px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 14.0039">
            <path clipRule="evenodd" d={svgPaths.pcf85580} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Bizum</p>
    </div>
  );
}

function BizumSection1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_bizum_section">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <BizumTitle1 />
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <BizumSection1 />
      </div>
    </div>
  );
}

function Number6() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number6 />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Tarjeta Classic</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-end justify-center px-[16px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function TypeNumber() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal gap-[8px] items-center leading-[24px] min-w-px relative text-[16px] whitespace-nowrap" data-name="Type & Number">
      <p className="relative shrink-0 text-black">Crédito</p>
      <p className="relative shrink-0 text-[#424242]">••••7442</p>
    </div>
  );
}

function CardNumberExpense() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="card number & expense">
      <TypeNumber />
    </div>
  );
}

function CardNumberTitular() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Card number + Titular">
      <CardNumberExpense />
    </div>
  );
}

function TypeCardNumber() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-name="Type & Card number">
      <div className="h-[48px] overflow-clip relative shrink-0 w-[107px]" data-name="Payment Card">
        <div className="absolute inset-[78.65%_7.01%_0.52%_7.01%]">
          <div className="absolute inset-[-60%_-6.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 22">
              <g filter="url(#filter0_f_2_44684)" id="Ellipse 1">
                <path d={svgPaths.p1a0e7200} fill="var(--fill-0, #BDBDBD)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_f_2_44684" width="104" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2_44684" stdDeviation="3" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#0032a0] inset-[0_14.95%_-150%_14.95%] overflow-clip rounded-[4px]" data-name="Payment Card">
          <div className="absolute inset-[21.67%_0_0_16.99%]" data-name="Shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.2555 94.0009">
              <path clipRule="evenodd" d={svgPaths.p3d26c480} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
          <div className="absolute inset-[83.33%_78.94%_6.67%_5.33%]" data-name="Resources / Contactless sm">
            <div className="absolute inset-[0_7.27%_0_0]" data-name="contactless">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9366 12.0006">
                <path d={svgPaths.p13244b00} fill="var(--fill-0, white)" id="contactless" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[83.33%_5.33%_3.33%_60%]" data-name="Payment Card / Resources">
            <div className="absolute inset-[50.31%_0_0_0]" data-name="VISA">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.75 15.9">
                <g id="VISA">
                  <path d={svgPaths.p1cea5080} fill="var(--fill-0, white)" />
                  <path clipRule="evenodd" d={svgPaths.p19bf6880} fill="var(--fill-0, white)" fillRule="evenodd" />
                  <path d={svgPaths.p2087fe00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p13168800} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-13.5px)] overflow-clip p-[1.274px] top-[calc(50%-11.02px)] w-[39px]" data-name="Logo">
          <div className="h-[7.416px] relative shrink-0 w-[37.253px]" data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117 23.2925">
              <g id="Group">
                <path d={svgPaths.pc574e00} fill="var(--fill-0, white)" id="Exclude" />
                <path d={svgPaths.p2c65500} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[59.52%_21.5%_11.31%_56.07%]" data-name="Payment Card / Resources">
          <div className="absolute inset-[11.92%_38.46%]" data-name="Oval">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8663 24.3701">
              <path clipRule="evenodd" d={svgPaths.p3c60eb80} fill="var(--fill-0, #EB601C)" fillRule="evenodd" id="Oval" />
            </svg>
          </div>
          <div className="absolute bottom-[1.56%] left-[1.92%] right-1/2 top-[1.56%]" data-name="Fill 871">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8048 31">
              <path clipRule="evenodd" d={svgPaths.p160b1500} fill="var(--fill-0, #E41122)" fillRule="evenodd" id="Fill 871" />
            </svg>
          </div>
          <div className="absolute bottom-[1.56%] left-1/2 right-[1.92%] top-[1.56%]" data-name="Fill 873">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8048 31">
              <path clipRule="evenodd" d={svgPaths.p355a4700} fill="var(--fill-0, #F59E1F)" fillRule="evenodd" id="Fill 873" />
            </svg>
          </div>
        </div>
      </div>
      <CardNumberTitular />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Top">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Disponible</p>
    </div>
  );
}

function Currency5() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Disponible() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Disponible">
      <Top />
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">4.050</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency5 />
      </div>
    </div>
  );
}

function Currency6() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AmountInstallment() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Amount + Installment">
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">3.000</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency6 />
      </div>
    </div>
  );
}

function Gastado() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Gastado">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Gastado</p>
      <AmountInstallment />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Body">
      <Disponible />
      <Gastado />
    </div>
  );
}

function DisponibleGastado() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Disponible + Gastado">
      <div className="content-stretch flex items-start min-w-[290px] relative shrink-0 w-full" data-name="Progress Bar">
        <div className="bg-black flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-black flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-black flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-black flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-[#bdbdbd] flex-[1_0_0] h-[3px] min-w-px relative" />
      </div>
      <Body1 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col items-center py-[12px] relative shrink-0 w-full" data-name="Card">
      <Name />
      <TypeCardNumber />
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[296px] relative shrink-0 w-[328px]" data-name="Expense Summary">
        <DisponibleGastado />
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-center py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <Card />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex items-start overflow-clip p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9999 14">
            <g id="vector">
              <path d={svgPaths.p736e580} fill="#F0A21D" />
              <path d="M6.5 4.25V8.75H7.5V4.25H6.5Z" fill="var(--fill-0, black)" />
              <path d={svgPaths.p2ed23500} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-black">Cerca de alcanzar el límite mensual</p>
    </div>
  );
}

function ContentNotification() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content notification">
      <Icon6 />
      <Text />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] text-center whitespace-nowrap">Modificar límites de compra</p>
    </div>
  );
}

function Action() {
  return (
    <div className="relative shrink-0 w-full" data-name="action">
      <div className="content-stretch flex flex-col items-start pl-[24px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
          <Content22 />
        </div>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="notification">
      <ContentNotification />
      <Action />
    </div>
  );
}

function Notifications() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] relative shrink-0 w-full" data-name="Notifications">
      <div className="relative shrink-0 w-full" data-name="_Notification">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start pl-[16px] relative size-full">
            <Notification />
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Divider">
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
          <path clipRule="evenodd" d="M358 0V1H0V0H358Z" fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="01-thin" />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Tarjeta BS Debit</p>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-end justify-center px-[16px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[7.416px] relative shrink-0 w-[37.253px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2528 7.41632">
        <g id="Group">
          <path d={svgPaths.p38509f00} fill="var(--fill-0, white)" id="Exclude" />
          <path d={svgPaths.pe58d480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TypeNumber1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal gap-[8px] items-center leading-[24px] min-w-px relative text-[16px] whitespace-nowrap" data-name="Type & Number">
      <p className="relative shrink-0 text-black">Débito</p>
      <p className="relative shrink-0 text-[#424242]">••••7443</p>
    </div>
  );
}

function CardNumberExpense1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="card number & expense">
      <TypeNumber1 />
    </div>
  );
}

function CardNumberTitular1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Card number + Titular">
      <CardNumberExpense1 />
    </div>
  );
}

function TypeCardNumber1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-name="Type & Card number">
      <div className="h-[48px] overflow-clip relative shrink-0 w-[107px]" data-name="Payment Card">
        <div className="absolute inset-[78.65%_7.01%_0.52%_7.01%]">
          <div className="absolute inset-[-60%_-6.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 22">
              <g filter="url(#filter0_f_2_44684)" id="Ellipse 1">
                <path d={svgPaths.p1a0e7200} fill="var(--fill-0, #BDBDBD)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_f_2_44684" width="104" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2_44684" stdDeviation="3" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#0032a0] inset-[0_14.95%_-150%_14.95%] overflow-clip rounded-[4px]" data-name="Payment Card">
          <div className="absolute inset-[21.67%_0_0_16.99%]" data-name="Shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.2555 94.0009">
              <path clipRule="evenodd" d={svgPaths.p3d26c480} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
          <div className="absolute inset-[83.33%_78.94%_6.67%_5.33%]" data-name="Resources / Contactless sm">
            <div className="absolute inset-[0_7.27%_0_0]" data-name="contactless">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9366 11.9996">
                <path d={svgPaths.p842e300} fill="var(--fill-0, white)" id="contactless" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[83.33%_5.33%_3.33%_60%]" data-name="Payment Card / Resources">
            <div className="absolute inset-[50.31%_0_0_0]" data-name="VISA">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 7.95">
                <g id="VISA">
                  <path d={svgPaths.p1c968740} fill="var(--fill-0, white)" />
                  <path clipRule="evenodd" d={svgPaths.p1e2f8d00} fill="var(--fill-0, white)" fillRule="evenodd" />
                  <path d={svgPaths.pc8e0900} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p19071c0} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-13.5px)] overflow-clip p-[1.274px] top-[calc(50%-11.02px)] w-[39px]" data-name="Logo">
          <Group />
        </div>
        <div className="absolute inset-[59.52%_21.5%_11.31%_56.07%]" data-name="Payment Card / Resources">
          <div className="absolute inset-[11.92%_38.46%]" data-name="Oval">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.53846 10.6619">
              <path clipRule="evenodd" d={svgPaths.p18aee100} fill="var(--fill-0, #EB601C)" fillRule="evenodd" id="Oval" />
            </svg>
          </div>
          <div className="absolute bottom-[1.56%] left-[1.92%] right-1/2 top-[1.56%]" data-name="Fill 871">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5385 13.5625">
              <path clipRule="evenodd" d={svgPaths.p2475edc0} fill="var(--fill-0, #E41122)" fillRule="evenodd" id="Fill 871" />
            </svg>
          </div>
          <div className="absolute bottom-[1.56%] left-1/2 right-[1.92%] top-[1.56%]" data-name="Fill 873">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5385 13.5625">
              <path clipRule="evenodd" d={svgPaths.p1b64bf00} fill="var(--fill-0, #F59E1F)" fillRule="evenodd" id="Fill 873" />
            </svg>
          </div>
        </div>
      </div>
      <CardNumberTitular1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col items-center py-[12px] relative shrink-0 w-full" data-name="Card">
      <Name1 />
      <TypeCardNumber1 />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-center py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <Card1 />
    </div>
  );
}

function TitleText2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start min-h-[52px] relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Tarjeta de Crédito Classic</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Compra ahora y no pagues hasta final de mes</p>
    </div>
  );
}

function Texts() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[238px]" data-name="texts">
      <TitleText2 />
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Solicitar online</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Texts />
        <div className="content-stretch flex gap-[16px] items-start max-w-[736px] relative shrink-0 w-full" data-name="Button Set">
          <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[96px] relative rounded-[50px]" data-name="Button">
            <div className="flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative size-full">
                <Content25 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiProductName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Multi-Product Name">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #424242)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Hipoteca Fija Bonificada</p>
    </div>
  );
}

function Currency7() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function StatusAmount() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status +  Amount">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Pendiente</p>
      </div>
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">102.000</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency7 />
      </div>
    </div>
  );
}

function Currency8() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AmountInstallment1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Amount + Installment">
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">600</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency8 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">/mes</p>
    </div>
  );
}

function FeeAmount() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-w-px relative" data-name="Fee + Amount">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#424242] text-[16px] text-right whitespace-nowrap">Cuota</p>
      <AmountInstallment1 />
    </div>
  );
}

function StatusFee() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Status + Fee">
      <StatusAmount />
      <FeeAmount />
    </div>
  );
}

function Mortage() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mortage">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <MultiProductName />
        <StatusFee />
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <Mortage />
      </div>
    </div>
  );
}

function PgMortages() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="PG - Mortages">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black w-full">Hipotecas</p>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SLOT_Content_container_UI_Mortages">
            <div className="content-stretch flex flex-col items-center relative rounded-[16px] shrink-0 w-full" data-name="_Mortage">
              <Content26 />
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function TitleText3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[18px] w-full">{`Simula tu hipoteca `}</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Accede el simulador para ver tu nueva cuota</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <TitleText3 />
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Simulador de hipotecas</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-start flex flex-wrap gap-y-[16px] items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-white min-h-[32px] min-w-[96px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip px-[16px] py-[4px] relative rounded-[inherit] size-full">
          <Content28 />
        </div>
        <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Body">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Content27 />
        <Buttons />
      </div>
    </div>
  );
}

function TitleSubtitle() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title+Subtitle">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">Ahorro e inversión</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#424242] text-[14px] whitespace-nowrap">Saldos a cierre de mercado</p>
    </div>
  );
}

function Total() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Total">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#646464] text-[16px]">Total ahorrado/invertido</p>
    </div>
  );
}

function Currency9() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function NumberOfProducts() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Number of products">
      <div className="content-stretch flex items-baseline relative shrink-0 w-[180px]" data-name="amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">258.817</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,01</p>
        <Currency9 />
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Total />
        <NumberOfProducts />
      </div>
    </div>
  );
}

function ProductName() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black">Ahorro</p>
    </div>
  );
}

function NumberOfProducts1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Number of products">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#646464] text-[16px] whitespace-nowrap">1 producto</p>
    </div>
  );
}

function Currency10() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function ProductsAmount() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full" data-name="products + amount">
      <NumberOfProducts1 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black text-right">999.888.800</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency10 />
      </div>
    </div>
  );
}

function ProductsAmountContravalor() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="products + amount + contravalor">
      <ProductsAmount />
    </div>
  );
}

function SavingsInvestment() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Savings & Investment">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <ProductName />
        <ProductsAmountContravalor />
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <SavingsInvestment />
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductName1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black">Inversión</p>
    </div>
  );
}

function NumberOfProducts2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Number of products">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#646464] text-[16px] whitespace-nowrap">10 productos</p>
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

function ProductsAmount1() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full" data-name="products + amount">
      <NumberOfProducts2 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black text-right">999.888.800</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency11 />
      </div>
    </div>
  );
}

function ProductsAmountContravalor1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="products + amount + contravalor">
      <ProductsAmount1 />
    </div>
  );
}

function SavingsInvestment1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Savings & Investment">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <ProductName1 />
        <ProductsAmountContravalor1 />
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <SavingsInvestment1 />
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductName2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black">Jubilación</p>
    </div>
  );
}

function NumberOfProducts3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Number of products">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#646464] text-[16px] whitespace-nowrap">1 producto</p>
    </div>
  );
}

function Currency12() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function ProductsAmount2() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full" data-name="products + amount">
      <NumberOfProducts3 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black text-right">999.888.800</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        <Currency12 />
      </div>
    </div>
  );
}

function ProductsAmountContravalor2() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="products + amount + contravalor">
      <ProductsAmount2 />
    </div>
  );
}

function SavingsInvestment2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Savings & Investment">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <ProductName2 />
        <ProductsAmountContravalor2 />
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <SavingsInvestment2 />
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SavingInvestment() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="saving & investment">
      <div className="bg-[#fafafa] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Total - Saved&Invested">
        <Content29 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-[358px]" data-name="Element - Savings & Investment">
        <Content30 />
        <Divider3 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-[358px]" data-name="Element - Savings & Investment">
        <Content31 />
        <Divider4 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-[358px]" data-name="Element - Savings & Investment">
        <Content32 />
        <Divider5 />
      </div>
    </div>
  );
}

function TitleText4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-black" data-name="Title Text">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] w-full">Ahorra con más seguridad</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Seguro de ahorro con rentabilidad garantizada sin permanencia.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start pl-[5px] pr-[3px] py-px relative shrink-0" data-name="Size=XS">
          <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
              <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, black)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSimple2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content simple">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <TitleText4 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function TitleText5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start min-h-[52px] relative shrink-0 text-black w-[238px]" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Ahorra con más seguridad</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Seguro de ahorro con rentabilidad garantizada sin permanencia.</p>
    </div>
  );
}

function Texts1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="texts">
      <TitleText5 />
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Saber más</p>
    </div>
  );
}

function Content33() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Texts1 />
        <div className="content-stretch flex gap-[16px] items-start max-w-[736px] relative shrink-0 w-full" data-name="Button Set">
          <div className="bg-white min-h-[32px] min-w-[96px] relative rounded-[50px] shrink-0" data-name="Button">
            <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip px-[16px] py-[4px] relative rounded-[inherit] size-full">
              <Content34 />
            </div>
            <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 text-black w-full" data-name="Title">
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Financiación</p>
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] whitespace-nowrap">Préstamos</p>
    </div>
  );
}

function Currency13() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">€</p>
    </div>
  );
}

function StatusAmount1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status +  Amount">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[16px] text-left whitespace-nowrap">
        <p className="leading-[24px]">Pendiente</p>
      </div>
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">20.000</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">,00</p>
        <Currency13 />
      </div>
    </div>
  );
}

function Currency14() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">€</p>
    </div>
  );
}

function AmountInstallment2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Amount + Installment">
      <div className="content-stretch flex items-baseline justify-end relative shrink-0" data-name="amount">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">250</p>
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">,00</p>
        <Currency14 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">/mes</p>
    </div>
  );
}

function FeeAmount1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-w-px relative" data-name="Fee + Amount">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#424242] text-[16px] text-right whitespace-nowrap">Cuota</p>
      <AmountInstallment2 />
    </div>
  );
}

function StatusFee1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Status + Fee">
      <StatusAmount1 />
      <FeeAmount1 />
    </div>
  );
}

function Loan() {
  return (
    <div className="relative shrink-0 w-full" data-name="Loan">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-left whitespace-nowrap">Préstamo Sabadell Digital</p>
        <StatusFee1 />
      </div>
    </div>
  );
}

function Content35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <Loan />
      </div>
    </div>
  );
}

function Divider6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="Divider">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[32px] shrink-0" data-name="Icon">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[2px] py-[5.25px] relative shrink-0" data-name="Size=SM">
        <div className="h-[13.505px] relative shrink-0 w-[20.004px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0039 13.5049">
            <path d={svgPaths.pcf98700} fill="var(--fill-0, #212121)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Seat León 8679FFL</p>
    </div>
  );
}

function InfoLabel() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Info label">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#424242] text-[14px] w-full">Vehículo asegurado</p>
      <Frame10 />
    </div>
  );
}

function Insurance() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[260px]" data-name="Insurance">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[24px] justify-end leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Sabadell Blink Seguro Hogar</p>
      </div>
      <InfoLabel />
    </div>
  );
}

function IconProductNameTypeInsuredAmount() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Icon - Product name - Type/Insured/Amount">
      <Icon7 />
      <Insurance />
    </div>
  );
}

function Card2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <IconProductNameTypeInsuredAmount />
      </div>
    </div>
  );
}

function Content36() {
  return (
    <div className="cursor-pointer relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <Card2 />
      </div>
    </div>
  );
}

function Content17() {
  const { navigate } = useNavigation();
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-name="Tus productos - filtro">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">Tus productos</p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#eee] content-stretch flex gap-[4px] items-center justify-center relative rounded-[64px]" data-name="Toggle button Set">
              <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[65px]" />
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[64px]" data-name="Toggle button state">
                    <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Bank">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p8086d00} fill="var(--fill-0, #006DFF)" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-[#eee] content-stretch flex items-center justify-center p-[12px] relative rounded-[64px]" data-name="Toggle button state">
                    <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Density">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p70d9d80} fill="var(--fill-0, #006DFF)" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Cuentas section">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black w-full">Cuentas</p>
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Cuentas container">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Cuentas container content">
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_account">
                <Content18 />
                <Divider1 />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_account">
                <Content19 />
              </div>
              <div className="bg-[#ccecda] content-stretch flex flex-col items-start min-h-[80px] min-w-[328px] overflow-clip relative shrink-0 w-full" data-name="Booster cuentas">
                <ContentSimple1 />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bizum_section">
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SLOT_Content_Container_UI_Bizum">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[358px]" data-name="Content_container_UI_Bizum">
                <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_Bizum_active">
                  <Content20 />
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Tarjetas_section">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">Tarjetas</p>
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-[358px]" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Slot-targetes">
              <div
                role="button"
                tabIndex={0}
                onClick={() => navigate("tarjetas", { card: "credito" })}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("tarjetas", { card: "credito" }); }}
                aria-label="Ver Tarjeta de Crédito Classic"
                className="content-stretch cursor-pointer flex flex-col items-center relative shrink-0 w-[358px]"
                data-name="_Card"
              >
                <Content21 />
                <Notifications />
                <Divider2 />
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={() => navigate("tarjetas", { card: "debito" })}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("tarjetas", { card: "debito" }); }}
                aria-label="Ver Tarjeta BS Debit"
                className="content-stretch cursor-pointer flex flex-col items-center relative shrink-0 w-full"
                data-name="_Card"
              >
                <Content23 />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
        <div className="bg-white max-h-[184px] min-h-[84px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Tarjetas Banner AD">
          <div className="content-stretch flex items-start justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="relative self-stretch shrink-0 w-[88px]" data-name="Imagery">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagery} />
            </div>
            <Content24 />
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.1),0px_2px_6px_-0.5px_rgba(0,0,0,0.1)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Hipotecas">
        <PgMortages />
        <div className="bg-white max-w-[448px] min-w-[328px] relative rounded-[16px] shrink-0 w-[358px]" data-name="Product card">
          <div className="content-stretch flex items-start max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="relative rounded-[8px] self-stretch shrink-0 w-[104px]" data-name="Imagery">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImagery1} />
            </div>
            <Body2 />
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="AhorroInversion Section">
        <TitleSubtitle />
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-white content-stretch flex flex-col items-end justify-center overflow-clip relative shrink-0 w-full" data-name="_SLOT-saving & investment">
              <SavingInvestment />
              <div className="bg-[#ccecda] content-stretch flex flex-col items-start min-h-[80px] min-w-[328px] overflow-clip relative shrink-0 w-full" data-name="Booster">
                <ContentSimple2 />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
        <div className="bg-white max-w-[480px] min-h-[136px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Banner AD">
          <div className="content-stretch flex items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="h-full relative shrink-0 w-[88px]" data-name="Imagery">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagery2} />
              </div>
            </div>
            <Content33 />
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.1),0px_2px_6px_-0.5px_rgba(0,0,0,0.1)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[358px]" data-name="Prestamos_section">
        <Title1 />
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SLOT_Content_container_UI_Loans">
              <button className="content-stretch cursor-pointer flex flex-col items-center relative rounded-[16px] shrink-0 w-full" data-name="_Loan">
                <Content35 />
                <Divider6 />
              </button>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Seguros_section">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black w-full">Seguros</p>
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="State=Default">
              <Content36 />
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
    </div>
  );
}

function SectionProducts3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section_Products">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Content17 />
        </div>
      </div>
    </div>
  );
}

function Number7() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function AcountName4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="acount name">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number7 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Cuenta Sabadell</p>
    </div>
  );
}

function AccountNumber4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="account number">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #646464)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">••••4422</p>
    </div>
  );
}

function Currency15() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AccountNumberAmount4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="account number + amount">
      <AccountNumber4 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-black text-right">2.347</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,82</p>
        </HideableAmount>
        <Currency15 />
      </div>
    </div>
  );
}

function Account4() {
  const { navigate } = useNavigation();
  return (
    <button
      type="button"
      onClick={() => navigate("cuentas", { account: "sabadell" })}
      aria-label="Ver Cuenta Sabadell"
      className="cursor-pointer relative rounded-[8px] shrink-0 w-full block text-left" data-name="account"
    >
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <AcountName4 />
        <AccountNumberAmount4 />
      </div>
    </button>
  );
}

function Content38() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <Account4 />
      </div>
    </div>
  );
}

function Divider7() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Number8() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function AcountName5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="acount name">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number8 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Cuenta familiar</p>
    </div>
  );
}

function AccountNumber5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="account number">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #646464)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">••••4425</p>
    </div>
  );
}

function Currency16() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AccountNumberAmount5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="account number + amount">
      <AccountNumber5 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[18px] text-black text-right">8.915</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,40</p>
        </HideableAmount>
        <Currency16 />
      </div>
    </div>
  );
}

function Account5() {
  const { navigate } = useNavigation();
  return (
    <button
      type="button"
      onClick={() => navigate("cuentas", { account: "familiar" })}
      aria-label="Ver Cuenta familiar"
      className="cursor-pointer relative rounded-[8px] shrink-0 w-full block text-left" data-name="account"
    >
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <AcountName5 />
        <AccountNumberAmount5 />
      </div>
    </button>
  );
}

function Content39() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <Account5 />
      </div>
    </div>
  );
}

function TitleText6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] w-full">¿Quieres hasta 21.000 € al instante?</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">En 3 minutos y sin papeleo</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TitleText6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-w-px relative">
      <Frame5 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start pl-[5px] pr-[3px] py-px relative shrink-0" data-name="Size=XS">
          <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
              <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, black)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSimple3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content simple">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <Frame4 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function BizumTitle2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0 w-[326px]" data-name="Bizum title">
      <div className="content-stretch flex items-start px-[2.7px] py-px relative shrink-0" data-name="Bizum">
        <div className="h-[14.004px] relative shrink-0 w-[10.6px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6 14.0039">
            <path clipRule="evenodd" d={svgPaths.pcf85580} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Bizum</p>
    </div>
  );
}

function BizumSection2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="_bizum_section">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <BizumTitle2 />
      </div>
    </div>
  );
}

function Content40() {
  return (
    <div className="relative shrink-0 w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <BizumSection2 />
      </div>
    </div>
  );
}

function Number9() {
  return (
    <div className="absolute bg-[#fc00f4] left-0 rounded-[64px] size-[8px] top-0" data-name="number">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[66px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[8px]" data-name="Badge">
        <Number9 />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Tarjeta Classic</p>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-end justify-center px-[16px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function TypeNumber2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal gap-[8px] items-center leading-[24px] min-w-px relative text-[16px] whitespace-nowrap" data-name="Type & Number">
      <p className="relative shrink-0 text-black">Crédito</p>
      <p className="relative shrink-0 text-[#424242]">••••7442</p>
    </div>
  );
}

function CardNumberExpense2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="card number & expense">
      <TypeNumber2 />
    </div>
  );
}

function CardNumberTitular2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Card number + Titular">
      <CardNumberExpense2 />
    </div>
  );
}

function TypeCardNumber2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-name="Type & Card number">
      <div className="h-[48px] overflow-clip relative shrink-0 w-[107px]" data-name="Payment Card">
        <div className="absolute inset-[78.65%_7.01%_0.52%_7.01%]">
          <div className="absolute inset-[-60%_-6.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 22">
              <g filter="url(#filter0_f_2_44684)" id="Ellipse 1">
                <path d={cardSvg.p1a0e7200} fill="var(--fill-0, #BDBDBD)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_f_2_44684" width="104" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2_44684" stdDeviation="3" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#212121] inset-[0_14.95%_-150%_14.95%] overflow-clip rounded-[4px]" data-name="Payment Card">
          <div className="absolute inset-[21.67%_0_0_16.99%]" data-name="Shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.2555 94.0009">
              <path clipRule="evenodd" d={cardSvg.p3d26c480} fill="var(--fill-0, black)" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
          <div className="absolute inset-[83.33%_78.94%_6.67%_5.33%]" data-name="Resources / Contactless sm">
            <div className="absolute inset-[0_7.27%_0_0]" data-name="contactless">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9358 12.0003">
                <path d={cardSvg.p1ead3900} fill="var(--fill-0, white)" id="contactless" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[83.33%_5.33%_3.33%_60%]" data-name="Payment Card / Resources">
            <div className="absolute inset-[50.31%_0_0_0]" data-name="VISA">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 7.95">
                <g id="VISA">
                  <path d={cardSvg.p1c968740} fill="var(--fill-0, white)" />
                  <path clipRule="evenodd" d={cardSvg.p1e2f8d00} fill="var(--fill-0, white)" fillRule="evenodd" />
                  <path d={cardSvg.pc8e0900} fill="var(--fill-0, white)" />
                  <path d={cardSvg.p19071c0} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[19.16%] overflow-clip p-[1.274px] right-[44.39%] top-[calc(50%-14.41px)]" data-name="Logo">
          <div className="h-[7.416px] relative shrink-0 w-[37.253px]" data-name="Group">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2528 7.41632">
              <g id="Group">
                <path d={cardSvg.p38509f00} fill="var(--fill-0, white)" id="Exclude" />
                <path d={cardSvg.pe58d480} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[59.52%_21.5%_11.31%_56.07%]" data-name="Payment Card / Resources">
          <div className="absolute inset-[50.31%_0_0_0]" data-name="VISA">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 6.95625">
              <g id="VISA">
                <path d={cardSvg.p154c880} fill="var(--fill-0, white)" />
                <path clipRule="evenodd" d={cardSvg.p370f7740} fill="var(--fill-0, white)" fillRule="evenodd" />
                <path d={cardSvg.p22aa3400} fill="var(--fill-0, white)" />
                <path d={cardSvg.pf10a780} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <CardNumberTitular2 />
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Top">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Disponible</p>
    </div>
  );
}

function Currency17() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function Disponible1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Disponible">
      <Top1 />
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">2.300</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency17 />
      </div>
    </div>
  );
}

function Currency18() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AmountInstallment3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Amount + Installment">
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="Amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">700</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency18 />
      </div>
    </div>
  );
}

function Gastado1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Gastado">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Gastado</p>
      <AmountInstallment3 />
    </div>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Body">
      <Disponible1 />
      <Gastado1 />
    </div>
  );
}

function DisponibleGastado1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Disponible + Gastado">
      <div className="content-stretch flex items-start min-w-[290px] relative shrink-0 w-full" data-name="Progress Bar">
        <div className="bg-black flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-[#bdbdbd] flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-[#bdbdbd] flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-[#bdbdbd] flex-[1_0_0] h-[3px] min-w-px relative" />
        <div className="bg-[#bdbdbd] flex-[1_0_0] h-[3px] min-w-px relative" />
      </div>
      <Body3 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex flex-col items-center py-[12px] relative shrink-0 w-full" data-name="Card">
      <Name2 />
      <TypeCardNumber2 />
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[296px] relative shrink-0 w-[328px]" data-name="Expense Summary">
        <DisponibleGastado1 />
      </div>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-center py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <Card3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="icon">
      <div className="content-stretch flex items-start overflow-clip p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9999 14">
            <g id="vector">
              <path d={svgPaths.p736e580} fill="#F0A21D" />
              <path d="M6.5 4.25V8.75H7.5V4.25H6.5Z" fill="var(--fill-0, black)" />
              <path d={svgPaths.p2ed23500} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pt-[4px] relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-black">Cerca de alcanzar el límite mensual</p>
    </div>
  );
}

function ContentNotification1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="content notification">
      <Icon8 />
      <Text1 />
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] text-center whitespace-nowrap">Modificar límites de compra</p>
    </div>
  );
}

function Action1() {
  return (
    <div className="relative shrink-0 w-full" data-name="action">
      <div className="content-stretch flex flex-col items-start pl-[24px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
          <Content42 />
        </div>
      </div>
    </div>
  );
}

function Notification1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="notification">
      <ContentNotification1 />
      <Action1 />
    </div>
  );
}

function Notifications1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[16px] relative shrink-0 w-full" data-name="Notifications">
      <div className="relative shrink-0 w-full" data-name="_Notification">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start pl-[16px] relative size-full">
            <Notification1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Divider">
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 1">
          <path clipRule="evenodd" d="M358 0V1H0V0H358Z" fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="01-thin" />
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">Tarjeta BS Debit</p>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Name">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-end justify-center px-[16px] relative size-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[7.416px] relative shrink-0 w-[37.253px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.2528 7.41632">
        <g id="Group">
          <path d={svgPaths.p38509f00} fill="var(--fill-0, white)" id="Exclude" />
          <path d={svgPaths.pe58d480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TypeNumber3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal gap-[8px] items-center leading-[24px] min-w-px relative text-[16px] whitespace-nowrap" data-name="Type & Number">
      <p className="relative shrink-0 text-black">Débito</p>
      <p className="relative shrink-0 text-[#424242]">••••7443</p>
    </div>
  );
}

function CardNumberExpense3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="card number & expense">
      <TypeNumber3 />
    </div>
  );
}

function CardNumberTitular3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Card number + Titular">
      <CardNumberExpense3 />
    </div>
  );
}

function TypeCardNumber3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-name="Type & Card number">
      <div className="h-[48px] overflow-clip relative shrink-0 w-[107px]" data-name="Payment Card">
        <div className="absolute inset-[78.65%_7.01%_0.52%_7.01%]">
          <div className="absolute inset-[-60%_-6.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 22">
              <g filter="url(#filter0_f_2_44684)" id="Ellipse 1">
                <path d={svgPaths.p1a0e7200} fill="var(--fill-0, #BDBDBD)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_f_2_44684" width="104" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_2_44684" stdDeviation="3" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#0032a0] inset-[0_14.95%_-150%_14.95%] overflow-clip rounded-[4px]" data-name="Payment Card">
          <div className="absolute inset-[21.67%_0_0_16.99%]" data-name="Shape">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.2555 94.0009">
              <path clipRule="evenodd" d={svgPaths.p3d26c480} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
          <div className="absolute inset-[83.33%_78.94%_6.67%_5.33%]" data-name="Resources / Contactless sm">
            <div className="absolute inset-[0_7.27%_0_0]" data-name="contactless">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9366 11.9996">
                <path d={svgPaths.p842e300} fill="var(--fill-0, white)" id="contactless" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[83.33%_5.33%_3.33%_60%]" data-name="Payment Card / Resources">
            <div className="absolute inset-[50.31%_0_0_0]" data-name="VISA">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 7.95">
                <g id="VISA">
                  <path d={svgPaths.p1c968740} fill="var(--fill-0, white)" />
                  <path clipRule="evenodd" d={svgPaths.p1e2f8d00} fill="var(--fill-0, white)" fillRule="evenodd" />
                  <path d={svgPaths.pc8e0900} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p19071c0} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-13.5px)] overflow-clip p-[1.274px] top-[calc(50%-11.02px)] w-[39px]" data-name="Logo">
          <Group1 />
        </div>
        <div className="absolute inset-[59.52%_21.5%_11.31%_56.07%]" data-name="Payment Card / Resources">
          <div className="absolute inset-[11.92%_38.46%]" data-name="Oval">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.53846 10.6619">
              <path clipRule="evenodd" d={svgPaths.p18aee100} fill="var(--fill-0, #EB601C)" fillRule="evenodd" id="Oval" />
            </svg>
          </div>
          <div className="absolute bottom-[1.56%] left-[1.92%] right-1/2 top-[1.56%]" data-name="Fill 871">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5385 13.5625">
              <path clipRule="evenodd" d={svgPaths.p2475edc0} fill="var(--fill-0, #E41122)" fillRule="evenodd" id="Fill 871" />
            </svg>
          </div>
          <div className="absolute bottom-[1.56%] left-1/2 right-[1.92%] top-[1.56%]" data-name="Fill 873">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5385 13.5625">
              <path clipRule="evenodd" d={svgPaths.p1b64bf00} fill="var(--fill-0, #F59E1F)" fillRule="evenodd" id="Fill 873" />
            </svg>
          </div>
        </div>
      </div>
      <CardNumberTitular3 />
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex flex-col items-center py-[12px] relative shrink-0 w-full" data-name="Card">
      <Name3 />
      <TypeCardNumber3 />
    </div>
  );
}

function Content43() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-center py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <Card4 />
    </div>
  );
}

function TitleText7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start min-h-[52px] relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Tarjeta de Crédito Classic</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Compra ahora y no pagues hasta final de mes</p>
    </div>
  );
}

function Texts2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[238px]" data-name="texts">
      <TitleText7 />
    </div>
  );
}

function Content45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Solicitar online</p>
    </div>
  );
}

function Content44() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Texts2 />
        <div className="content-stretch flex gap-[16px] items-start max-w-[736px] relative shrink-0 w-full" data-name="Button Set">
          <div className="bg-white flex-[1_0_0] min-h-[32px] min-w-[96px] relative rounded-[50px]" data-name="Button">
            <div className="flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[4px] relative size-full">
                <Content45 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiProductName1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Multi-Product Name">
      <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Icon">
        <div className="relative shrink-0 size-[14px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p380a7600} fill="var(--fill-0, #424242)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">Hipoteca Fija Bonificada</p>
    </div>
  );
}

function Currency19() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function StatusAmount2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status +  Amount">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Pendiente</p>
      </div>
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">102.000</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency19 />
      </div>
    </div>
  );
}

function Currency20() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function AmountInstallment4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Amount + Installment">
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">600</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency20 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">/mes</p>
    </div>
  );
}

function FeeAmount2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-w-px relative" data-name="Fee + Amount">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#424242] text-[16px] text-right whitespace-nowrap">Cuota</p>
      <AmountInstallment4 />
    </div>
  );
}

function StatusFee2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Status + Fee">
      <StatusAmount2 />
      <FeeAmount2 />
    </div>
  );
}

function Mortage1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mortage">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <MultiProductName1 />
        <StatusFee2 />
      </div>
    </div>
  );
}

function Content46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <Mortage1 />
      </div>
    </div>
  );
}

function PgMortages1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="PG - Mortages">
      <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black w-full">Hipotecas</p>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SLOT_Content_container_UI_Mortages">
            <div className="content-stretch flex flex-col items-center relative rounded-[16px] shrink-0 w-full" data-name="_Mortage">
              <Content46 />
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
      </div>
    </div>
  );
}

function TitleText8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[27px] relative shrink-0 text-[18px] w-full">{`Simula tu hipoteca `}</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Accede el simulador para ver tu nueva cuota</p>
    </div>
  );
}

function Content47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <TitleText8 />
    </div>
  );
}

function Content48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Simulador de hipotecas</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-start flex flex-wrap gap-y-[16px] items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-white min-h-[32px] min-w-[96px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip px-[16px] py-[4px] relative rounded-[inherit] size-full">
          <Content48 />
        </div>
        <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Body4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Body">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Content47 />
        <Buttons1 />
      </div>
    </div>
  );
}

function TitleSubtitle1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title+Subtitle">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">Ahorro e inversión</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#424242] text-[14px] whitespace-nowrap">Saldos a cierre de mercado</p>
    </div>
  );
}

function Total1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Total">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[#646464] text-[16px]">Total ahorrado/invertido</p>
    </div>
  );
}

function Currency21() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function NumberOfProducts4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Number of products">
      <div className="content-stretch flex items-baseline relative shrink-0 w-[180px]" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black text-right whitespace-nowrap">642</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">,18</p>
        </HideableAmount>
        <Currency21 />
      </div>
    </div>
  );
}

function Content49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative size-full">
        <Total1 />
        <NumberOfProducts4 />
      </div>
    </div>
  );
}

function ProductName3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black">Ahorro</p>
    </div>
  );
}

function NumberOfProducts5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Number of products">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#646464] text-[16px] whitespace-nowrap">1 producto</p>
    </div>
  );
}

function Currency22() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function ProductsAmount3() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full" data-name="products + amount">
      <NumberOfProducts5 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black text-right">230</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,18</p>
        </HideableAmount>
        <Currency22 />
      </div>
    </div>
  );
}

function ProductsAmountContravalor3() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="products + amount + contravalor">
      <ProductsAmount3 />
    </div>
  );
}

function SavingsInvestment3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Savings & Investment">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <ProductName3 />
        <ProductsAmountContravalor3 />
      </div>
    </div>
  );
}

function Content50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <SavingsInvestment3 />
      </div>
    </div>
  );
}

function Divider9() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductName4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black">Inversión</p>
    </div>
  );
}

function NumberOfProducts6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Number of products">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#646464] text-[16px] whitespace-nowrap">10 productos</p>
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

function ProductsAmount4() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full" data-name="products + amount">
      <NumberOfProducts6 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black text-right">320</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,40</p>
        </HideableAmount>
        <Currency23 />
      </div>
    </div>
  );
}

function ProductsAmountContravalor4() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="products + amount + contravalor">
      <ProductsAmount4 />
    </div>
  );
}

function SavingsInvestment4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Savings & Investment">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <ProductName4 />
        <ProductsAmountContravalor4 />
      </div>
    </div>
  );
}

function Content51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <SavingsInvestment4 />
      </div>
    </div>
  );
}

function Divider10() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProductName5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product name">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black">Jubilación</p>
    </div>
  );
}

function NumberOfProducts7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Number of products">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#646464] text-[16px] whitespace-nowrap">1 producto</p>
    </div>
  );
}

function Currency24() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">€</p>
    </div>
  );
}

function ProductsAmount5() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full" data-name="products + amount">
      <NumberOfProducts7 />
      <div className="content-stretch flex items-baseline justify-end min-w-[120px] relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black text-right">91</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">,60</p>
        </HideableAmount>
        <Currency24 />
      </div>
    </div>
  );
}

function ProductsAmountContravalor5() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="products + amount + contravalor">
      <ProductsAmount5 />
    </div>
  );
}

function SavingsInvestment5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Savings & Investment">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[12px] relative size-full">
        <ProductName5 />
        <ProductsAmountContravalor5 />
      </div>
    </div>
  );
}

function Content52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[4px] relative size-full">
        <SavingsInvestment5 />
      </div>
    </div>
  );
}

function Divider11() {
  return (
    <div className="relative shrink-0 w-full" data-name="divider">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <div className="h-px relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
            <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #E0E0E0)" fillRule="evenodd" id="01-thin" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SavingInvestment1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="saving & investment">
      <div className="bg-[#fafafa] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Total - Saved&Invested">
        <Content49 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-[358px]" data-name="Element - Savings & Investment">
        <Content50 />
        <Divider9 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-[358px]" data-name="Element - Savings & Investment">
        <Content51 />
        <Divider10 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-[358px]" data-name="Element - Savings & Investment">
        <Content52 />
        <Divider11 />
      </div>
    </div>
  );
}

function TitleText9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative text-black" data-name="Title Text">
      <p className="font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] w-full">Ahorra con más seguridad</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Seguro de ahorro con rentabilidad garantizada sin permanencia.</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-start pl-[5px] pr-[3px] py-px relative shrink-0" data-name="Size=XS">
          <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
              <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, black)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentSimple4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content simple">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <TitleText9 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function TitleText10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start min-h-[52px] relative shrink-0 text-black w-[238px]" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Ahorra con más seguridad</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Seguro de ahorro con rentabilidad garantizada sin permanencia.</p>
    </div>
  );
}

function Texts3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="texts">
      <TitleText10 />
    </div>
  );
}

function Content54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Saber más</p>
    </div>
  );
}

function Content53() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Texts3 />
        <div className="content-stretch flex gap-[16px] items-start max-w-[736px] relative shrink-0 w-full" data-name="Button Set">
          <div className="bg-white min-h-[32px] min-w-[96px] relative rounded-[50px] shrink-0" data-name="Button">
            <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] min-w-[inherit] overflow-clip px-[16px] py-[4px] relative rounded-[inherit] size-full">
              <Content54 />
            </div>
            <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start relative shrink-0 text-black w-full" data-name="Title">
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Financiación</p>
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] whitespace-nowrap">Préstamos</p>
    </div>
  );
}

function Currency25() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">€</p>
    </div>
  );
}

function StatusAmount3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Status +  Amount">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#424242] text-[16px] text-left whitespace-nowrap">
        <p className="leading-[24px]">Pendiente</p>
      </div>
      <div className="content-stretch flex items-baseline relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">20.000</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency25 />
      </div>
    </div>
  );
}

function Currency26() {
  return (
    <div className="content-stretch flex items-baseline pl-[4px] relative shrink-0" data-name="Currency">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">€</p>
    </div>
  );
}

function AmountInstallment5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0" data-name="Amount + Installment">
      <div className="content-stretch flex items-baseline justify-end relative shrink-0" data-name="amount">
        <HideableAmount dotsClassName="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap">
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">250</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black text-left whitespace-nowrap">,00</p>
        </HideableAmount>
        <Currency26 />
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-right whitespace-nowrap">/mes</p>
    </div>
  );
}

function FeeAmount3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-center min-w-px relative" data-name="Fee + Amount">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#424242] text-[16px] text-right whitespace-nowrap">Cuota</p>
      <AmountInstallment5 />
    </div>
  );
}

function StatusFee3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Status + Fee">
      <StatusAmount3 />
      <FeeAmount3 />
    </div>
  );
}

function Loan1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Loan">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black text-left whitespace-nowrap">Préstamo Sabadell Digital</p>
        <StatusFee3 />
      </div>
    </div>
  );
}

function Content55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <Loan1 />
      </div>
    </div>
  );
}

function Divider12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <div className="h-px relative shrink-0 w-full" data-name="Divider">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 326 1">
              <path clipRule="evenodd" d="M326 0V1H0V0H326Z" fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="01-thin" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[32px] shrink-0" data-name="Icon">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[2px] py-[5.25px] relative shrink-0" data-name="Size=SM">
        <div className="h-[13.505px] relative shrink-0 w-[20.004px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0039 13.5049">
            <path d={svgPaths.pcf98700} fill="var(--fill-0, #212121)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-black text-ellipsis whitespace-nowrap">Seat León 8679FFL</p>
    </div>
  );
}

function InfoLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Info label">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#424242] text-[14px] w-full">Vehículo asegurado</p>
      <Frame11 />
    </div>
  );
}

function Insurance1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[260px]" data-name="Insurance">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[24px] justify-end leading-[0] relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">Sabadell Blink Seguro Hogar</p>
      </div>
      <InfoLabel1 />
    </div>
  );
}

function IconProductNameTypeInsuredAmount1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Icon - Product name - Type/Insured/Amount">
      <Icon9 />
      <Insurance1 />
    </div>
  );
}

function Card5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <IconProductNameTypeInsuredAmount1 />
      </div>
    </div>
  );
}

function Content56() {
  return (
    <div className="cursor-pointer relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <Card5 />
      </div>
    </div>
  );
}

function Content37() {
  const { navigate } = useNavigation();
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[358px]" data-name="Tus productos - filtro">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-black whitespace-nowrap">Tus productos</p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#eee] content-stretch flex gap-[4px] items-center justify-center relative rounded-[64px]" data-name="Toggle button Set">
              <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[65px]" />
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-white content-stretch flex items-center justify-center p-[12px] relative rounded-[64px]" data-name="Toggle button state">
                    <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Bank">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p8086d00} fill="var(--fill-0, #006DFF)" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-[#eee] content-stretch flex items-center justify-center p-[12px] relative rounded-[64px]" data-name="Toggle button state">
                    <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Density">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p70d9d80} fill="var(--fill-0, #006DFF)" id="vector" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Cuentas section">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black w-full">Cuentas</p>
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Cuentas container">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Cuentas container content">
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_account">
                <Content38 />
                <Divider7 />
              </div>
              <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_account">
                <Content39 />
              </div>
              <div className="bg-[#ccecda] content-stretch flex flex-col items-start min-h-[80px] min-w-[328px] overflow-clip relative shrink-0 w-full" data-name="Booster cuentas">
                <ContentSimple3 />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Bizum_section">
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SLOT_Content_Container_UI_Bizum">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-[358px]" data-name="Content_container_UI_Bizum">
                <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[358px]" data-name="_Bizum_active">
                  <Content40 />
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Tarjetas_section">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">Tarjetas</p>
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-[358px]" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Slot-targetes">
              <div
                role="button"
                tabIndex={0}
                onClick={() => navigate("tarjetas", { card: "credito" })}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("tarjetas", { card: "credito" }); }}
                aria-label="Ver Tarjeta de Crédito Classic"
                className="content-stretch cursor-pointer flex flex-col items-center relative shrink-0 w-[358px]"
                data-name="_Card"
              >
                <Content41 />
                <Notifications1 />
                <Divider8 />
              </div>
              <div
                role="button"
                tabIndex={0}
                onClick={() => navigate("tarjetas", { card: "debito" })}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("tarjetas", { card: "debito" }); }}
                aria-label="Ver Tarjeta BS Debit"
                className="content-stretch cursor-pointer flex flex-col items-center relative shrink-0 w-full"
                data-name="_Card"
              >
                <Content43 />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
        <div className="bg-white max-h-[184px] min-h-[84px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Tarjetas Banner AD">
          <div className="content-stretch flex items-start justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="relative self-stretch shrink-0 w-[88px]" data-name="Imagery">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagery} />
            </div>
            <Content44 />
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.1),0px_2px_6px_-0.5px_rgba(0,0,0,0.1)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="AhorroInversion Section">
        <TitleSubtitle1 />
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="bg-white content-stretch flex flex-col items-end justify-center overflow-clip relative shrink-0 w-full" data-name="_SLOT-saving & investment">
              <SavingInvestment1 />
              <div className="bg-[#ccecda] content-stretch flex flex-col items-start min-h-[80px] min-w-[328px] overflow-clip relative shrink-0 w-full" data-name="Booster">
                <ContentSimple4 />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
        <div className="bg-white max-w-[480px] min-h-[136px] min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Banner AD">
          <div className="content-stretch flex items-center justify-center max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="flex flex-row items-center self-stretch">
              <div className="h-full relative shrink-0 w-[88px]" data-name="Imagery">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImagery2} />
              </div>
            </div>
            <Content53 />
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_10px_-1px_rgba(0,0,0,0.1),0px_2px_6px_-0.5px_rgba(0,0,0,0.1)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[358px]" data-name="Prestamos_section">
        <Title2 />
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="SLOT_Content_container_UI_Loans">
              <button className="content-stretch cursor-pointer flex flex-col items-center relative rounded-[16px] shrink-0 w-full" data-name="_Loan">
                <Content55 />
                <Divider12 />
              </button>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Seguros_section">
        <p className="[word-break:break-word] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black w-full">Seguros</p>
        <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="State=Default">
              <Content56 />
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]" data-name="Hipotecas">
        <PgMortages1 />
        <div className="bg-white max-w-[448px] min-w-[328px] relative rounded-[16px] shrink-0 w-[358px]" data-name="Product card">
          <div className="content-stretch flex items-start max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
            <div className="relative rounded-[8px] self-stretch shrink-0 w-[104px]" data-name="Imagery">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImagery1} />
            </div>
            <Body4 />
          </div>
          <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
    </div>
  );
}

function SectionProducts4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section_Products">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Content37 />
        </div>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] min-w-px relative text-[20px] text-black">Te puede interesar</p>
        </div>
      </div>
    </div>
  );
}

function TitleText11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] h-[52px] items-start leading-[30px] relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold relative shrink-0 text-[24px] w-full">Title</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal relative shrink-0 text-[20px] w-full">Text</p>
    </div>
  );
}

function SliderContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative size-full">
          <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Slot content">
            <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Property 1=Default">
                <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Icon">
                  <div className="relative shrink-0 size-[20px]" data-name="vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.p258fb900} fill="var(--fill-0, black)" fillRule="evenodd" id="vector" />
                    </svg>
                  </div>
                </div>
                <TitleText11 />
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
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
          <circle cx="4" cy="4" fill="var(--fill-0, #949494)" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="Dot 3">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #949494)" id="Dot 2" r="4" />
        </svg>
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

function Tag() {
  return (
    <div className="bg-[#ccecda] relative rounded-[8px] shrink-0" data-name="Tag">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[6px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[14px] text-black whitespace-nowrap">Novedad</p>
      </div>
      <div aria-hidden className="absolute border border-[#9cc3ad] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TagAvatarEco() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[12px] top-[12px]" data-name="Tag + Avatar ECO">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Tag">
        <Tag />
      </div>
    </div>
  );
}

function TitleText12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] relative shrink-0 text-black w-full" data-name="Title Text">
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20px] w-full">Ahorra con más seguridad</p>
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal relative shrink-0 text-[16px] w-full">Seguro de ahorro con rentabilidad garantizada sin permanencia.</p>
    </div>
  );
}

function Content57() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TitleText12 />
    </div>
  );
}

function Content58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Simular mi seguro de ahorro</p>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-name="Buttons">
      <div className="bg-white flex-[1_0_0] min-w-[96px] relative rounded-[50px]" data-name="Button">
        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <Content58 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </div>
    </div>
  );
}

function Body5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Content57 />
        <Buttons2 />
      </div>
    </div>
  );
}

function SliderContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Slider content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative size-full">
          <div className="bg-white max-w-[448px] min-w-[291px] relative rounded-[16px] shrink-0 w-full" data-name="Slot content">
            <div className="content-stretch flex flex-col items-start max-w-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
              <div className="h-[180px] max-h-[180px] relative rounded-[8px] shrink-0 w-full" data-name="Imagery">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImagery3} />
              </div>
              <TagAvatarEco />
              <Body5 />
            </div>
            <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_8px_-1px_rgba(0,0,0,0.08),0px_1px_4px_-1px_rgba(0,0,0,0.08)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dots1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-w-px relative" data-name="Dots">
      <div className="bg-[#006dff] h-[8px] relative rounded-[999px] shrink-0 w-[12px]" data-name="Dot 1" />
      <div className="relative shrink-0 size-[8px]" data-name="Dot 2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #949494)" id="Dot 2" r="4" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[8px]" data-name="Dot 3">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #949494)" id="Dot 2" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Arrows1() {
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

function Controls1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-center max-w-[767px] relative shrink-0 w-full" data-name="Controls">
      <Dots1 />
      <Arrows1 />
    </div>
  );
}

function Content59() {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[16px] relative shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="h-[19.996px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9961">
            <path d={svgPaths.p18e46300} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Editar vista</p>
    </div>
  );
}

function InteresarEditarSections() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="InteresarEditar_Sections">
      <div className="bg-[#fafafa] content-stretch flex flex-col gap-[16px] items-start py-[24px] relative shrink-0 w-full" data-name="Interesar_section">
        <Title3 />
        <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-full" data-name="Cards_carousel">
          <SliderContent />
          <Controls />
        </div>
        <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-full" data-name="Products_carousel">
          <SliderContent1 />
          <Controls1 />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Editarvista_section">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center px-[16px] py-[24px] relative size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[120px] px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Button">
              <Content59 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BodySlot() {
  return (
    <div className="flex flex-col w-full pb-[16px]" data-name="Body Slot">
      <SectionTop />
      <SectionProducts4 />
      <TePuedeInteresarSection />
    </div>
  );
}

function Body() {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden w-full" data-name="Body">
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

function Icon10() {
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
  const { openOperar } = useNavigation();
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Operar">
      <NavigationBarButtons />
      <button
        type="button"
        onClick={openOperar}
        aria-label="Operar"
        className="-translate-x-1/2 absolute left-1/2 rounded-[50px] size-[56px] top-0 cursor-pointer"
        data-name="_Boton Operar"
      >
        <div className="absolute left-0 size-[56px] top-0" data-name="Ellipse">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
            <circle cx="28" cy="28" fill="var(--fill-0, #006DFF)" id="Ellipse" r="28" />
          </svg>
        </div>
        <IconOperar />
      </button>
    </div>
  );
}

function Indicator1() {
  return <div className="h-[4px] relative shrink-0 w-[24px]" data-name="Indicator" />;
}

function Icon11() {
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
  const { navigate } = useNavigation();
  return (
    <div className="shrink-0 flex flex-col items-center justify-center w-full" data-name="Bottom Slot">
      <div className="bg-white drop-shadow-[0px_-1px_2px_rgba(0,0,0,0.08),0px_-1px_2px_rgba(0,0,0,0.04)] flex h-[68px] items-end justify-center w-full" data-name="Nav Bar">
        <div className="flex-[1_0_0] h-[68px] min-w-px relative" data-name="Navigation Buttons 1">
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
              <Indicator />
              <Icon10 />
              <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[14px] text-black text-center text-ellipsis w-[min-content] whitespace-nowrap">
                <p className="leading-[20px] overflow-hidden text-ellipsis">Inicio</p>
              </div>
            </div>
          </div>
        </div>
        <Operar />
        <div
          role="button"
          tabIndex={0}
          onClick={() => navigate("contratar")}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("contratar"); }}
          aria-label="Contratar"
          className="flex-[1_0_0] h-[68px] min-w-px relative cursor-pointer"
          data-name="Navigation Buttons 2"
        >
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-center px-[4px] relative size-full">
              <Indicator1 />
              <Icon11 />
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

export default function Inicio() {
  return (
    <div className="flex flex-col bg-white w-full h-full overflow-hidden" data-name="inicio">
      <HeaderSlot />
      <Body />
    </div>
  );
}