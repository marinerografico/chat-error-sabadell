import svgPaths from "../../imports/11CentroDeAyudaXs/svg-gi11ufbkue";
import { useNavigation } from "../navigation";

// Faithful recompose of the Figma import "1.1 Centro de Ayuda - XS".
// The import is absolute-positioned (fixed-frame export); here it is laid out
// in normal flex flow so it fits and scrolls inside the mobile frame, matching
// the structure of the Inicio screen. Classes, text and SVG paths are carried
// through verbatim from the import.

function HeaderBar() {
  const { goBack } = useNavigation();
  return (
    <div className="bg-[#fafafa] shrink-0 w-full" data-name="Status Bar">
      <div className="h-[64px] relative w-full" data-name="Content">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
            <button
              type="button"
              onClick={goBack}
              aria-label="Volver"
              className="content-stretch flex items-start justify-end relative shrink-0 cursor-pointer"
              data-name="Back"
            >
              <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0" data-name="Action">
                <div className="content-stretch flex items-start px-[7px] py-[2px] relative shrink-0" data-name="Size=SM">
                  <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
                      <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #006DF2)" fillRule="evenodd" id="vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Name">
              <div className="content-stretch flex flex-col h-[44px] items-start justify-center relative shrink-0 w-full" data-name="Text">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px overflow-hidden relative text-[16px] text-black text-center text-ellipsis w-full whitespace-nowrap">
                  <p className="leading-[24px] overflow-hidden text-ellipsis">Centro de ayuda</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0" data-name="Actions">
              <div className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[8px] relative rounded-[100px] shrink-0 size-[32px]" data-name="Action 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Greeting() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[32px] relative shrink-0 text-[24px] text-black w-full" data-name="Title">
      <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal relative shrink-0 w-full">Hola [Laura],</p>
      <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold relative shrink-0 w-full">¿En qué podemos ayudarte?</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="content-stretch flex items-start px-[4px] py-px relative shrink-0" data-name="Arrow-right">
      <div className="h-[14px] relative shrink-0 w-[8px]" data-name="vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
          <path clipRule="evenodd" d={svgPaths.p2a667b80} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
        </svg>
      </div>
    </div>
  );
}

function EmergencyAndFaq() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[16px] relative size-full">
            <div className="content-stretch flex gap-[16px] items-center min-w-[328px] relative shrink-0 w-full" data-name="__Slot_HelpHeader">
              <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Icon">
                <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 size-[32px]" data-name="SOS">
                  <div className="h-[29.899px] relative shrink-0 w-[32px]" data-name="Union">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 29.8994">
                      <g id="Union">
                        <path d={svgPaths.p35deb000} fill="var(--fill-0, #006DF2)" />
                        <path d={svgPaths.p317bdb70} fill="var(--fill-0, #006DF2)" />
                        <path clipRule="evenodd" d={svgPaths.p15973500} fill="var(--fill-0, #006DF2)" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p32b23f00} fill="var(--fill-0, #006DF2)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[52px] items-start min-w-px relative" data-name="Content">
                <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[16px] text-black w-[min-content]">¿Tienes un problema urgente?</p>
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
                    <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] text-center whitespace-nowrap">Centro de emergencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[16px] relative size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[16px] shrink-0 w-full" data-name="__Slot_NeedMoreHelp">
              <div className="content-stretch flex h-[24px] items-center relative rounded-[8px] shrink-0 w-full" data-name="__Slot_Link&Arrow">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Content">
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
                      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] text-center whitespace-nowrap">Preguntas frecuentes</p>
                    </div>
                  </div>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function AtencionPersonalizada() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Atencion personalizada">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black">Atención personalizada</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start max-w-[920px] min-w-[328px] p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Header">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[280px]" data-name="Avatar & Title SM">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Avatar">
              <div className="bg-[#eee] content-stretch flex items-center justify-center relative rounded-[64px] shrink-0 size-[56px]" data-name="icon">
                <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
                <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0 w-[24px]" data-name="Size=SM">
                  <div className="relative shrink-0 size-[20px]" data-name="vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p6b8cb00} fill="var(--fill-0, #424242)" id="vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Body">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-black w-full" data-name="Title Text">
            <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] w-full">Contacta al momento</p>
            <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Consúltanos cualquier duda que tengas por chat o llamada.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Footer">
          <div className="content-stretch flex gap-[16px] items-start max-w-[736px] relative shrink-0 w-full" data-name="Button Set">
            <div className="bg-[#006dff] flex-[1_0_0] min-w-[60px] relative rounded-[100px]" data-name="Button Primary">
              <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Content">
                    <div className="content-stretch flex items-start overflow-clip p-[2px] relative shrink-0" data-name="Size=SM">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p37f41b00} fill="var(--fill-0, white)" id="vector" />
                        </svg>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Ir al chat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex-[1_0_0] min-w-[60px] relative rounded-[100px]" data-name="Button Secondary">
              <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Content">
                    <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0" data-name="Size=SM">
                      <div className="h-[19.995px] relative shrink-0 w-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0003 19.9951">
                          <path d={svgPaths.p1567a00} fill="var(--fill-0, #006DFF)" id="vector" />
                        </svg>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Llamar</p>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CitaPrevia() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black">Cita previa</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start max-w-[920px] min-w-[328px] p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Body">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Title Text">
            <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black w-full">Si necesitas visitar o hablar con tu gestor, recuerda planificar una cita previa. Siempre podrás gestionar las citas desde tu perfil.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Footer">
          <div className="content-stretch flex gap-[16px] items-start max-w-[736px] relative shrink-0 w-full" data-name="Button Set">
            <div className="bg-[#006dff] flex-[1_0_0] min-w-[60px] relative rounded-[100px]" data-name="Button Primary">
              <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Content">
                    <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
                      <div className="relative shrink-0 size-[20px]" data-name="vector">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p22c9a600} fill="var(--fill-0, white)" id="vector" />
                        </svg>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Pedir cita</p>
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

function NeedMoreHelp() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Need more help">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Title">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] min-w-px relative text-[16px] text-black">¿Necesitas más ayuda?</p>
        </div>
      </div>
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full" data-name="Container UI">
        <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[16px] relative size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center relative rounded-[16px] shrink-0 w-full" data-name="__Slot_NeedMoreHelp">
              <div className="content-stretch flex h-[24px] items-center relative rounded-[8px] shrink-0 w-full" data-name="__Slot_Link&Arrow">
                <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Content">
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
                      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006df2] text-[16px] text-center whitespace-nowrap">Buscar oficinas y cajeros</p>
                    </div>
                  </div>
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

function ExtraInfo() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Extra Info">
      <div className="content-stretch flex items-start pt-[4px] relative shrink-0" data-name="Icon">
        <div className="content-stretch flex items-start p-px relative shrink-0" data-name="Info">
          <div className="relative shrink-0 size-[14px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.pe57d680} fill="var(--fill-0, black)" id="vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal justify-end leading-[0] min-w-px relative text-[14px] text-black">
        <p className="leading-[20px]">{`Recuerda que desde Banco Sabadell nunca te pediremos tus datos de acceso ni los números de tus tarjetas `}</p>
      </div>
    </div>
  );
}

export default function CentroDeAyuda() {
  return (
    <div className="flex flex-col bg-[#fafafa] w-full h-full overflow-hidden" data-name="1.1 Centro de Ayuda - XS">
      <HeaderBar />
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full" data-name="Body">
        <div className="bg-[#fafafa] content-stretch flex flex-col gap-[24px] items-center p-[16px] w-full" data-name="Header">
          <Greeting />
          <EmergencyAndFaq />
        </div>
        <div className="bg-white content-stretch flex flex-col gap-[32px] items-center pb-[24px] pt-[16px] px-[16px] w-full" data-name="Content">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Main">
            <AtencionPersonalizada />
            <CitaPrevia />
          </div>
          <NeedMoreHelp />
          <ExtraInfo />
        </div>
      </div>
    </div>
  );
}
