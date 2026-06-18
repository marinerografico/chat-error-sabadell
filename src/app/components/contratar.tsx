import { useState } from "react";
import { useNavigation } from "../navigation";
import svgPaths from "../../imports/ContratarInicio/svg-r1smi97a2a";
import imgImagery from "../../imports/ContratarInicio/1684f8b55a3f4a5ad189ee7a994fc6091a3fab8a.png";
import imgImagery1 from "../../imports/ContratarInicio/435b14df4966f7b8fca5d84d34ad0bc2b1157a29.png";
import { HOLDER } from "../data/cards";
import AppHeader from "./app-header";

const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";

const firstName = HOLDER.split(" ")[0];

// ── Card recomendación ────────────────────────────────────────────────
function RecoCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="bg-white max-h-[184px] min-h-[84px] relative rounded-[16px] shrink-0 w-[343px] snap-center">
      <div className="content-stretch flex items-stretch overflow-clip relative rounded-[inherit] size-full">
        <div className="relative self-stretch shrink-0 w-[100px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full grayscale" src={img} />
        </div>
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="content-stretch flex flex-col gap-[16px] items-start pr-[16px] pl-[16px] py-[16px] relative size-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start min-h-[52px] relative shrink-0 text-black w-full">
              <p className={`${FONT_SB} leading-[28px] text-[18px] w-full`}>{title}</p>
              <p className={`${FONT_REG} leading-[24px] text-[16px] w-full`}>{desc}</p>
            </div>
            <div className="content-stretch flex gap-[16px] items-start w-full">
              <div className="bg-[#006dff] flex-[1_0_0] min-w-[96px] relative rounded-[100px]">
                <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[4px]">
                  <p className={`${FONT_REG} leading-[24px] text-[16px] text-center text-white whitespace-nowrap`}>Contratar</p>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] min-w-[96px] relative rounded-[100px]">
                <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[4px]">
                  <p className={`${FONT_REG} leading-[24px] text-[#006dff] text-[16px] text-center whitespace-nowrap`}>Saber más</p>
                </div>
                <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Dot({ active }: { active: boolean }) {
  return <div className="rounded-full size-[8px]" style={{ backgroundColor: active ? "#006DFF" : "#BDBDBD" }} />;
}

// ── Producto (fila lista) ─────────────────────────────────────────────
function ProductRow({ icon, label, tag, onClick, last }: { icon: string; label: string; tag?: string; onClick?: () => void; last: boolean }) {
  return (
    <button type="button" onClick={onClick} className="relative w-full cursor-pointer">
      <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[12px] relative w-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
          <div className="relative shrink-0 size-[20px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={icon} fill="black" /></svg></div>
        </div>
        <div className="flex-[1_0_0] min-w-px"><p className={`${FONT_REG} leading-[24px] text-[16px] text-black text-left`}>{label}</p></div>
        {tag && (
          <div className="bg-[#ccecda] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[20px] shrink-0">
            <p className={`${FONT_REG} leading-[20px] text-[14px] text-black whitespace-nowrap`}>{tag}</p>
          </div>
        )}
        <div className="h-[14px] relative shrink-0 w-[8px]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14"><path clipRule="evenodd" d={svgPaths.p2a667b80} fill="#006DF2" fillRule="evenodd" /></svg></div>
      </div>
      {!last && <div className="px-[16px]"><div className="h-px w-full" style={{ backgroundColor: "#BDBDBD" }} /></div>}
    </button>
  );
}

// ── Bottom nav (Contratar activo) ─────────────────────────────────────
const PRODUCTS_ICONS = {
  prestamos: svgPaths.p2170d7f0,
  tarjetas: svgPaths.p3fe53c00,
  cuentas: svgPaths.p7f61b00,
  hipotecas: svgPaths.p51ee200,
  ahorro: svgPaths.pa945b00,
  seguros: svgPaths.p10343d00,
  autorenting: svgPaths.pcf98700,
};

// ── Page ──────────────────────────────────────────────────────────────
export default function Contratar() {
  const { navigate } = useNavigation();
  const [active, setActive] = useState(0);

  const cards = [
    { img: imgImagery, title: "Cuenta para menores", desc: "Su primera cuenta en Sabadell a partir de 14 años" },
    { img: imgImagery1, title: "50 euros de cashback", desc: "Si solicitas tu tarjeta antes del día 31 de julio." },
  ];

  const products: { icon: string; label: string; tag?: string; onClick?: () => void }[] = [
    { icon: PRODUCTS_ICONS.prestamos, label: "Préstamos y créditos", onClick: () => navigate("contratar-producto", { product: "prestamos" }) },
    { icon: PRODUCTS_ICONS.tarjetas, label: "Tarjetas", onClick: () => navigate("contratar-producto", { product: "tarjetas" }) },
    { icon: PRODUCTS_ICONS.cuentas, label: "Cuentas", onClick: () => navigate("contratar-producto", { product: "cuentas" }) },
    { icon: PRODUCTS_ICONS.hipotecas, label: "Hipotecas", onClick: () => navigate("contratar-producto", { product: "hipotecas" }) },
    { icon: PRODUCTS_ICONS.ahorro, label: "Ahorro e inversión", tag: "Novedad", onClick: () => navigate("contratar-producto", { product: "ahorro" }) },
    { icon: PRODUCTS_ICONS.seguros, label: "Seguros", onClick: () => navigate("contratar-producto", { product: "seguros" }) },
    { icon: PRODUCTS_ICONS.autorenting, label: "AutoRenting", onClick: () => navigate("contratar-producto", { product: "autorenting" }) },
  ];

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    setActive(Math.round(el.scrollLeft / (343 + 16)));
  };

  return (
    <div className="flex flex-col bg-white w-full h-full overflow-hidden" data-name="Contratar">
      <AppHeader />
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        {/* Te puede interesar */}
        <div className="bg-[#fafafa] content-stretch flex flex-col gap-[16px] items-start pt-[8px] pb-[16px] w-full">
          <p className={`${FONT_SB} leading-[28px] px-[16px] text-[18px] text-black`}>{`${firstName}, esto te puede interesar`}</p>
          <div className="overflow-x-auto w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{ scrollSnapType: "x mandatory" }} onScroll={onScroll}>
            <div className="content-stretch flex gap-[16px] items-stretch px-[16px]">
              {cards.map((c) => (
                <RecoCard key={c.title} img={c.img} title={c.title} desc={c.desc} />
              ))}
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center w-full">
            {cards.map((_, i) => (
              <Dot key={i} active={i === active} />
            ))}
          </div>
        </div>

        {/* Nuestros productos */}
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] pt-[24px] w-full">
          <p className={`${FONT_SB} leading-[28px] text-[18px] text-black`}>Nuestros productos</p>
          <div className="w-full">
            {products.map((p, i) => (
              <ProductRow key={p.label} icon={p.icon} label={p.label} tag={p.tag} onClick={p.onClick} last={i === products.length - 1} />
            ))}
          </div>
        </div>

        {/* ¿No encuentras lo que buscas? */}
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] w-full">
          <p className={`${FONT_SB} leading-[28px] text-[18px] text-black`}>¿No encuentras lo que buscas?</p>
          <div className="bg-white relative rounded-[16px] w-full">
            <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
              <div className="bg-[#eee] content-stretch flex items-center justify-center relative rounded-[64px] shrink-0 size-[56px]">
                <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="2" y="13" width="4" height="6" rx="1" /><rect x="18" y="13" width="4" height="6" rx="1" /><path d="M20 19a4 4 0 0 1-4 3h-2" /></svg>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
                <p className={`${FONT_SB} leading-[28px] text-[18px] text-black`}>Contacta al momento</p>
                <p className={`${FONT_REG} leading-[24px] text-[16px] text-black w-full`}>Consúltanos cualquier duda que tengas por chat o llamada.</p>
              </div>
              <div className="content-stretch flex gap-[16px] items-start w-full">
                <button type="button" onClick={() => navigate("ayuda")} className="bg-[#006dff] flex-[1_0_0] min-w-[60px] relative rounded-[100px] cursor-pointer">
                  <div className="content-stretch flex items-center justify-center gap-[8px] px-[16px] py-[12px]">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M4 4h16v12H7l-3 3z" /></svg>
                    <p className={`${FONT_REG} leading-[24px] text-[16px] text-center text-white whitespace-nowrap`}>Ir al chat</p>
                  </div>
                </button>
                <button type="button" className="bg-white flex-[1_0_0] min-w-[60px] relative rounded-[100px] cursor-pointer">
                  <div className="content-stretch flex items-center justify-center gap-[8px] px-[16px] py-[12px]">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#006dff" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
                    <p className={`${FONT_REG} leading-[24px] text-[#006dff] text-[16px] text-center whitespace-nowrap`}>Llamar</p>
                  </div>
                  <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
