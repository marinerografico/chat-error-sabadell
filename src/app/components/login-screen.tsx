import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import svgPaths from "../../imports/LoginScreen/svg-5t5ih4cqlz";
import FaceIDOverlay from "./faceid-overlay";

// Login (LOGIN/01_Credentials). Renderizado fiel al diseño de Figma importado.
// "Entrar" y "Entrar con biometría" entran a Inicio; la flecha atrás vuelve al
// prelogin; el ojo muestra/oculta la contraseña.

function Back({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Back">
      <button type="button" onClick={onBack} aria-label="Volver" className="content-stretch flex flex-col items-center justify-center max-h-[32px] max-w-[32px] min-h-[32px] min-w-[32px] p-[4px] relative rounded-[50px] shrink-0 cursor-pointer" data-name="Action">
        <div className="content-stretch flex items-start pl-[6px] pr-[8px] py-[2px] relative shrink-0" data-name="Size=SM">
          <div className="h-[20.002px] relative shrink-0 w-[10px]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 20.0017">
              <path clipRule="evenodd" d={svgPaths.p11976000} fill="var(--fill-0, #006DFF)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </button>
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
  return <div className="content-stretch flex flex-col h-[44px] items-center justify-center relative shrink-0 w-full" data-name="Text" />;
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

function Content({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-[64px] max-w-[767px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center max-w-[inherit] p-[16px] relative size-full">
          <Back onBack={onBack} />
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

function HeaderSlot({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Header Slot">
      <div className="bg-[#fafafa] content-stretch flex flex-col items-center max-h-[64px] min-h-[64px] relative shrink-0 w-full" data-name="Status Bar">
        <Content onBack={onBack} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[28.668px] relative shrink-0 w-[144px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 28.6676">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3eb1480} fill="var(--fill-0, black)" fillRule="evenodd" id="Exclude" />
          <path d={svgPaths.pd30c700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0163e8] text-[14px] text-center whitespace-nowrap">entorno seguro</p>
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Text+link">
      <div className="[word-break:break-word] flex flex-col font-['Libre_Franklin:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-black text-right w-[75px]">
        <p className="leading-[21px]">Estás en un</p>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Link">
        <Content2 />
      </div>
    </div>
  );
}

function IconTextLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Icon-text-link">
      <div className="content-stretch flex items-start px-[2.5px] py-px relative shrink-0" data-name="Lock">
        <div className="h-[14px] relative shrink-0 w-[11px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
            <path d={svgPaths.p3042b100} fill="var(--fill-0, black)" id="vector" />
          </svg>
        </div>
      </div>
      <TextLink />
    </div>
  );
}

function Content1() {
  return (
    <div className="max-w-[767px] relative rounded-[16px] shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] pt-[48px] px-[16px] relative size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Logo-link">
            <div className="content-stretch flex flex-col items-start overflow-clip p-[6px] relative shrink-0" data-name="Logo">
              <Group />
            </div>
            <IconTextLink />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTop() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section_top">
      <Content1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0163e8] text-[14px] text-center whitespace-nowrap">Entrar con otra cuenta</p>
    </div>
  );
}

function UserType() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-full" data-name="User type">
      <button type="button" className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 cursor-pointer" data-name="Link">
        <Content4 />
      </button>
    </div>
  );
}

function UserData() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="User data">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[24px] text-black whitespace-nowrap">Hola, Laura</p>
      <UserType />
    </div>
  );
}

function LabelBox({ password, setPassword, showPassword, toggleShow }: { password: string; setPassword: (v: string) => void; showPassword: boolean; toggleShow: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Label_box">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        aria-label="Contraseña"
        className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] min-w-px relative text-[16px] text-black bg-transparent border-0 outline-none placeholder:text-black"
      />
      <button type="button" onClick={toggleShow} aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} className="content-stretch flex flex-col items-center py-[1.93px] relative shrink-0 size-[24px] cursor-pointer" data-name="Eye">
        <div className="h-[17.075px] relative shrink-0 w-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.0752">
            <path d={svgPaths.pbcaae00} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function InputBox({ password, setPassword, showPassword, toggleShow }: { password: string; setPassword: (v: string) => void; showPassword: boolean; toggleShow: () => void }) {
  return (
    <div className="bg-white min-h-[56px] relative rounded-[4px] shrink-0 w-full" data-name="Input_box">
      <div aria-hidden className="absolute border border-[#919191] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <div className="content-stretch flex items-start min-h-[inherit] p-[16px] relative size-full">
        <LabelBox password={password} setPassword={setPassword} showPassword={showPassword} toggleShow={toggleShow} />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Entrar</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <div className="content-stretch flex items-start p-[2px] relative shrink-0" data-name="Size=SM">
        <div className="relative shrink-0 size-[20px]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2db5c800} fill="var(--fill-0, #006DFF)" id="vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Entrar con biometría</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">¿Necesitas ayuda para acceder?</p>
    </div>
  );
}

function Content3({ password, setPassword, showPassword, toggleShow, onEntrar, onBiometria }: { password: string; setPassword: (v: string) => void; showPassword: boolean; toggleShow: () => void; onEntrar: () => void; onBiometria: () => void }) {
  // El botón "Entrar" se activa (azul intenso) cuando hay contraseña; en estado
  // vacío conserva el azul claro del diseño original.
  const entrarActive = password.length > 0;
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[380px] items-center relative shrink-0 w-[342px]" data-name="Content">
      <UserData />
      <div className="content-stretch flex flex-col gap-[4px] items-start min-w-[114px] relative shrink-0 w-full" data-name="Input">
        <InputBox password={password} setPassword={setPassword} showPassword={showPassword} toggleShow={toggleShow} />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Button Set">
        <button type="button" onClick={onEntrar} style={{ backgroundColor: entrarActive ? "#006dff" : "#9eccff" }} className="min-w-[96px] relative rounded-[50px] shrink-0 w-full cursor-pointer transition-colors" data-name="Button">
          <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
              <Content5 />
            </div>
          </div>
        </button>
        <button type="button" onClick={onBiometria} className="bg-white min-w-[96px] relative rounded-[50px] shrink-0 w-full cursor-pointer" data-name="Button">
          <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
              <Content6 />
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[50px]" />
        </button>
        <button type="button" className="min-w-[96px] relative rounded-[50px] shrink-0 w-full cursor-pointer" data-name="Button">
          <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
              <Content7 />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

type FormProps = { password: string; setPassword: (v: string) => void; showPassword: boolean; toggleShow: () => void; onEntrar: () => void; onBiometria: () => void };

function SectionUserData(props: FormProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Section_UserData">
      <Content3 {...props} />
    </div>
  );
}

function BodySlot(props: FormProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-center min-w-px relative rounded-[16px]" data-name="Body Slot">
      <SectionTop />
      <SectionUserData {...props} />
    </div>
  );
}

function Body(props: FormProps) {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-[1_0_0] items-center relative shrink-0 w-full" data-name="Body">
      <BodySlot {...props} />
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
            <path clipRule="evenodd" d={svgPaths.p258fb900} fill="var(--fill-0, black)" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button type="button" className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center max-w-[120px] min-w-[76px] py-[4px] relative cursor-pointer" data-name="Quick Action">
      <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Content">
        <Icon />
        <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[16px] min-w-full overflow-hidden relative shrink-0 text-[12px] text-black text-center text-ellipsis w-[min-content]">{label}</p>
      </div>
    </button>
  );
}

function SwapContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Swap content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <div className="max-w-[480px] min-w-[360px] relative shrink-0 w-full" data-name="Acciones=2, State=Default, Size=Mobile-Tablet">
            <div className="flex flex-row justify-center max-w-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
                <QuickAction label="Cajeros y oficinas" />
                <QuickAction label="Emergencia" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomSlot() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Bottom Slot">
      <div className="bg-[#fafafa] content-stretch flex flex-col items-center max-w-[767px] min-h-[73px] min-w-[328px] overflow-clip relative shrink-0 w-full" data-name="Sticky panel">
        <SwapContent />
      </div>
    </div>
  );
}

export default function LoginScreen({ onEntrar, onBack }: { onEntrar: () => void; onBack: () => void }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [faceIdOpen, setFaceIdOpen] = useState(false);
  const toggleShow = () => setShowPassword((s) => !s);

  // Al entrar en el login se lanza automáticamente Face ID (patrón de iOS):
  // la pantalla se muestra un instante y aparece el prompt biométrico.
  useEffect(() => {
    const t = setTimeout(() => setFaceIdOpen(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white flex flex-col h-full items-center overflow-hidden w-full relative" data-name="login screen">
      <HeaderSlot onBack={onBack} />
      <Body
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        toggleShow={toggleShow}
        onEntrar={onEntrar}
        onBiometria={() => setFaceIdOpen(true)}
      />
      <BottomSlot />

      <AnimatePresence>
        {faceIdOpen && <FaceIDOverlay onSuccess={onEntrar} />}
      </AnimatePresence>
    </div>
  );
}
