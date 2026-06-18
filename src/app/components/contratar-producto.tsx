import { useNavigation, type ProductId } from "../navigation";
import { HOLDER } from "../data/cards";
import svgPaths from "../../imports/ContratarInicio/svg-r1smi97a2a";

const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";
const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

const firstName = HOLDER.split(" ")[0];

// Iconos reutilizados del listado "Nuestros productos" (mismos glifos del import).
const PRODUCT_ICON: Record<ProductId, string> = {
  prestamos: svgPaths.p2170d7f0,
  tarjetas: svgPaths.p3fe53c00,
  cuentas: svgPaths.p7f61b00,
  hipotecas: svgPaths.p51ee200,
  ahorro: svgPaths.pa945b00,
  seguros: svgPaths.p10343d00,
  autorenting: svgPaths.pcf98700,
};

// ── Modelo de datos del catálogo ──────────────────────────────────────
type PrimaryCard =
  | { kind: "tag"; tag: string; title: string; desc: string; cta: string }
  | { kind: "icon"; iconPath: string; title: string; desc: string; cta: string }
  | { kind: "card"; cardBg: string; title: string; desc: string; cta: string }
  | { kind: "compare"; title: string; link: string };

type SecondaryItem = { title: string; desc: string; cta: string };

type ProductPage = {
  title: string; // cabecera "Contratar …"
  primaryTitle: string;
  primary: PrimaryCard[];
  secondaryTitle?: string;
  secondary?: SecondaryItem[];
};

// ── Catálogo de productos ─────────────────────────────────────────────
// Hipotecas y Tarjetas son fieles a los diseños de Figma aportados; el resto
// sigue el mismo lenguaje visual con productos reales de Banco Sabadell.
const CATALOG: Record<ProductId, ProductPage> = {
  hipotecas: {
    title: "Contratar hipoteca",
    primaryTitle: "Contrátalo online",
    primary: [
      { kind: "tag", tag: "Promoción", title: `${firstName}, tienes una hipoteca preaprobada a tu disposición`, desc: "Estás a un paso de acceder a tu nuevo hogar", cta: "Me interesa" },
      { kind: "icon", iconPath: PRODUCT_ICON.hipotecas, title: "Simula tu hipoteca desde cero", desc: "Descubre tu cuota mensual y encuentra la opción que mejor se adapte a ti", cta: "Simula tu Hipoteca aquí" },
    ],
    secondaryTitle: "Nuestras hipotecas",
    secondary: [
      { title: "Hipoteca Mixta", desc: "Cuota fija al principio y variable al final", cta: "Simula tu Hipoteca aquí" },
      { title: "Hipoteca Fija", desc: "Sin sorpresas, cada mes la misma cuota", cta: "Simula tu Hipoteca aquí" },
      { title: "Hipoteca Variable", desc: "Tu cuota mensual ajustada al mercado", cta: "Simula tu Hipoteca aquí" },
    ],
  },
  tarjetas: {
    title: "Contratar tarjetas",
    primaryTitle: "Contrátalo online",
    primary: [
      { kind: "card", cardBg: "#212121", title: "Tarjeta de crédito Classic", desc: "Elige tu forma de pago: a final de mes o la flexibilidad que elijas", cta: "Contratar online" },
      { kind: "card", cardBg: "#857552", title: "Tarjeta de crédito Oro", desc: "Paga a final de mes y disfruta de una amplia gama de ventajas", cta: "Contratar online" },
      { kind: "card", cardBg: "#8e8e8e", title: "Tarjeta de crédito Platinum", desc: "La tarjeta más exclusiva y con mayores coberturas", cta: "Contratar online" },
      { kind: "card", cardBg: "#0032a0", title: "Tarjeta de débito BS Card", desc: "Paga al momento con tu saldo disponible", cta: "Contratar online" },
      { kind: "compare", title: "¿Qué tarjeta te interesa?", link: "Ir al comparador de tarjetas" },
    ],
  },
  prestamos: {
    title: "Contratar préstamo",
    primaryTitle: "Contrátalo online",
    primary: [
      { kind: "tag", tag: "Preconcedido", title: `${firstName}, tienes un Préstamo Expansión preconcedido`, desc: "Hasta 60.000 € al instante y sin papeleos", cta: "Lo quiero" },
      { kind: "icon", iconPath: PRODUCT_ICON.prestamos, title: "Simula tu préstamo", desc: "Calcula tu cuota mensual en menos de un minuto", cta: "Simular préstamo" },
    ],
    secondaryTitle: "Nuestros préstamos",
    secondary: [
      { title: "Préstamo Expansión", desc: "Financiación para tus proyectos personales", cta: "Simular préstamo" },
      { title: "Préstamo Coche", desc: "Estrena coche nuevo o de ocasión", cta: "Simular préstamo" },
      { title: "Préstamo Estudios", desc: "Invierte en tu formación y la de los tuyos", cta: "Simular préstamo" },
    ],
  },
  cuentas: {
    title: "Contratar cuenta",
    primaryTitle: "Contrátalo online",
    primary: [
      { kind: "tag", tag: "Sin comisiones", title: "Cuenta Online Sabadell", desc: "0 comisiones de administración y mantenimiento", cta: "Abrir cuenta" },
      { kind: "icon", iconPath: PRODUCT_ICON.cuentas, title: "Cuenta para menores", desc: "La primera cuenta para los más jóvenes, desde los 14 años", cta: "Más información" },
    ],
    secondaryTitle: "Nuestras cuentas",
    secondary: [
      { title: "Cuenta Online", desc: "Sin comisiones y 100% digital", cta: "Abrir cuenta" },
      { title: "Cuenta Expansión", desc: "Devolución de recibos y ventajas exclusivas", cta: "Abrir cuenta" },
      { title: "Cuenta Negocios", desc: "Pensada para autónomos y empresas", cta: "Abrir cuenta" },
    ],
  },
  ahorro: {
    title: "Contratar ahorro e inversión",
    primaryTitle: "Contrátalo online",
    primary: [
      { kind: "tag", tag: "Novedad", title: "Cuenta Remunerada", desc: "Hasta un 2% TAE durante el primer año", cta: "Lo quiero" },
      { kind: "icon", iconPath: PRODUCT_ICON.ahorro, title: "Empieza a invertir", desc: "Descubre los fondos que mejor se adaptan a tu perfil", cta: "Ver fondos" },
    ],
    secondaryTitle: "Nuestros productos de ahorro",
    secondary: [
      { title: "Cuenta Remunerada", desc: "Rentabiliza tu dinero sin ataduras", cta: "Más información" },
      { title: "Plan de Pensiones", desc: "Prepara tu jubilación con ventajas fiscales", cta: "Más información" },
      { title: "Fondos de inversión", desc: "Diversifica con la ayuda de expertos", cta: "Ver fondos" },
    ],
  },
  seguros: {
    title: "Contratar seguro",
    primaryTitle: "Contrátalo online",
    primary: [
      { kind: "tag", tag: "Promoción", title: "2 meses gratis en tu Seguro de Hogar", desc: "Solo si lo contratas online antes de fin de mes", cta: "Me interesa" },
      { kind: "icon", iconPath: PRODUCT_ICON.seguros, title: "Calcula tu seguro", desc: "Obtén tu precio personalizado al instante", cta: "Calcular precio" },
    ],
    secondaryTitle: "Nuestros seguros",
    secondary: [
      { title: "Seguro de Hogar", desc: "Protege tu vivienda y todo lo que hay en ella", cta: "Calcular precio" },
      { title: "Seguro de Coche", desc: "La cobertura que tu vehículo necesita", cta: "Calcular precio" },
      { title: "Seguro de Vida", desc: "Tranquilidad para ti y para los tuyos", cta: "Calcular precio" },
      { title: "Seguro de Salud", desc: "Cuídate con la mejor atención médica", cta: "Calcular precio" },
    ],
  },
  autorenting: {
    title: "Contratar AutoRenting",
    primaryTitle: "Contrátalo online",
    primary: [
      { kind: "tag", tag: "Promoción", title: "Conduce desde 299 €/mes", desc: "Coche nuevo con todo incluido y sin entrada", cta: "Lo quiero" },
      { kind: "icon", iconPath: PRODUCT_ICON.autorenting, title: "Configura tu coche", desc: "Elige modelo, plazo y kilometraje a tu medida", cta: "Empezar" },
    ],
    secondaryTitle: "Modalidades",
    secondary: [
      { title: "Renting flexible", desc: "Cambia de coche cuando quieras", cta: "Más información" },
      { title: "Renting a largo plazo", desc: "Las mejores condiciones hasta 60 meses", cta: "Más información" },
      { title: "Vehículo eléctrico", desc: "Súmate a la movilidad sostenible", cta: "Más información" },
    ],
  },
};

// ── Cabecera (back + título centrado + compartir) ─────────────────────
function Header({ title }: { title: string }) {
  const { goBack } = useNavigation();
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="h-[64px] relative w-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative size-full">
          <button type="button" onClick={goBack} aria-label="Volver" className="content-stretch flex items-center justify-center p-[8px] relative rounded-[100px] shrink-0 cursor-pointer">
            <div className="h-[20px] w-[10px] relative">
              <svg viewBox="0 0 10 20" fill="none" className="block size-full"><path d="M9 1 1 10l8 9" stroke="#006DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </button>
          <div className="flex-[1_0_0] min-w-px">
            <p className={`${FONT_REG} leading-[24px] overflow-hidden text-[16px] text-black text-center text-ellipsis whitespace-nowrap`}>{title}</p>
          </div>
          <button type="button" aria-label="Compartir" className="content-stretch flex items-center justify-center p-[8px] relative rounded-[100px] shrink-0 cursor-pointer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#006DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" /><path d="M12 3v13" /><path d="m7 8 5-5 5 5" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Botón outline (CTA secundario) ────────────────────────────────────
function OutlineButton({ label }: { label: string }) {
  return (
    <div className="bg-white min-w-[96px] relative rounded-[100px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[4px]">
        <p className={`${FONT_REG} leading-[24px] text-[#006dff] text-[16px] text-center whitespace-nowrap`}>{label}</p>
      </div>
      <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

// Tarjeta visual de pago (catálogo tarjetas), 40×64, color + chip + banda.
function PaymentCardVisual({ bg }: { bg: string }) {
  return (
    <div className="h-[64px] overflow-clip relative rounded-[3px] shrink-0 w-[40px]" style={{ backgroundColor: bg }}>
      <div className="absolute bg-[rgba(255,255,255,0.85)] h-[7px] left-[5px] rounded-[1px] top-[13px] w-[9px]" />
      <div className="absolute bg-[rgba(255,255,255,0.5)] bottom-[8px] h-[4px] left-[5px] rounded-[1px] w-[20px]" />
    </div>
  );
}

// ── Tarjetas del bloque "Contrátalo online" ───────────────────────────
function PrimaryCardView({ card }: { card: PrimaryCard }) {
  if (card.kind === "compare") {
    return (
      <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full">
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className={`${FONT_SB} leading-[28px] text-[18px] text-black w-full`}>{card.title}</p>
          <p className={`${FONT_REG} leading-[24px] text-[#006dff] text-[16px]`}>{card.link}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-w-[328px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        {card.kind === "tag" && (
          <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
            <div className="bg-[#ccecda] content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[4px] relative rounded-[20px] shrink-0">
              <svg viewBox="0 0 20 20" width="18" height="18" fill="black"><path d="M10 1.5 12.6 7l6 .5-4.6 3.9 1.5 5.9L10 14.1 4.5 17.3 6 11.4 1.4 7.5l6-.5z" /></svg>
              <p className={`${FONT_REG} leading-[20px] text-[14px] text-black whitespace-nowrap`}>{card.tag}</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start text-black w-full">
              <p className={`${FONT_BOLD} leading-[24px] text-[16px] w-full`}>{card.title}</p>
              <p className={`${FONT_REG} leading-[20px] text-[14px] w-full`}>{card.desc}</p>
            </div>
            <OutlineButton label={card.cta} />
          </div>
        )}

        {card.kind === "icon" && (
          <div className="content-stretch flex gap-[16px] items-start w-full">
            <div className="bg-[#ccecda] content-stretch flex items-center justify-center relative rounded-[78px] shrink-0 size-[40px]">
              <div className="relative size-[20px]"><svg className="block size-full" fill="none" viewBox="0 0 20 20"><path d={card.iconPath} fill="black" /></svg></div>
            </div>
            <div className="flex-[1_0_0] min-w-px content-stretch flex flex-col gap-[16px] items-start">
              <div className="content-stretch flex flex-col gap-[4px] items-start text-black w-full">
                <p className={`${FONT_BOLD} leading-[24px] text-[16px] w-full`}>{card.title}</p>
                <p className={`${FONT_REG} leading-[20px] text-[14px] w-full`}>{card.desc}</p>
              </div>
              <OutlineButton label={card.cta} />
            </div>
          </div>
        )}

        {card.kind === "card" && (
          <div className="content-stretch flex gap-[16px] items-start w-full">
            <PaymentCardVisual bg={card.cardBg} />
            <div className="flex-[1_0_0] min-w-px content-stretch flex flex-col gap-[16px] items-start">
              <div className="content-stretch flex flex-col gap-[4px] items-start text-black w-full">
                <p className={`${FONT_BOLD} leading-[24px] text-[16px] w-full`}>{card.title}</p>
                <p className={`${FONT_REG} leading-[20px] text-[14px] w-full`}>{card.desc}</p>
              </div>
              <OutlineButton label={card.cta} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Lista de productos secundarios ────────────────────────────────────
function SecondaryList({ items }: { items: SecondaryItem[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center w-full">
      {items.map((it, i) => (
        <div key={it.title} className="content-stretch flex flex-col gap-[24px] items-center w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start text-black w-full">
              <p className={`${FONT_BOLD} leading-[24px] text-[16px] w-full`}>{it.title}</p>
              <p className={`${FONT_REG} leading-[20px] text-[14px] w-full`}>{it.desc}</p>
            </div>
            <OutlineButton label={it.cta} />
          </div>
          {i < items.length - 1 && <div className="h-px w-full" style={{ backgroundColor: "#BDBDBD" }} />}
        </div>
      ))}
    </div>
  );
}

// ── Tarjeta de ayuda (¿No encuentras lo que buscas?) ──────────────────
function HelpCard() {
  const { navigate } = useNavigation();
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[16px] py-[24px] w-full">
      <p className={`${FONT_SB} leading-[28px] text-[18px] text-black w-full`}>¿No encuentras lo que buscas?</p>
      <div className="bg-white relative rounded-[16px] w-full">
        <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <div className="bg-[#eee] content-stretch flex items-center justify-center relative rounded-[64px] shrink-0 size-[56px]">
            <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[64px]" />
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="2" y="13" width="4" height="6" rx="1" /><rect x="18" y="13" width="4" height="6" rx="1" /><path d="M20 19a4 4 0 0 1-4 3h-2" /></svg>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start w-full">
            <p className={`${FONT_SB} leading-[28px] text-[18px] text-black`}>Contacta al momento</p>
            <p className={`${FONT_REG} leading-[24px] text-[16px] text-black w-full`}>Consúltanos cualquier duda que tengas por chat o llamada</p>
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
  );
}

// ── Page ──────────────────────────────────────────────────────────────
export default function ContratarProducto({ product }: { product: ProductId }) {
  const page = CATALOG[product];

  return (
    <div className="flex flex-col bg-white w-full h-full overflow-hidden" data-name="Contratar producto">
      <Header title={page.title} />
      <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
        {/* Contrátalo online */}
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[8px] w-full">
          <p className={`${FONT_SB} leading-[28px] text-[18px] text-black w-full`}>{page.primaryTitle}</p>
          <div className="content-stretch flex flex-col gap-[16px] items-center w-full">
            {page.primary.map((c, i) => (
              <PrimaryCardView key={i} card={c} />
            ))}
          </div>
        </div>

        {/* Nuestros … */}
        {page.secondary && page.secondaryTitle && (
          <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[16px] w-full">
            <p className={`${FONT_SB} leading-[28px] text-[18px] text-black w-full`}>{page.secondaryTitle}</p>
            <SecondaryList items={page.secondary} />
          </div>
        )}

        <HelpCard />
        <div className="h-[24px] w-full" />
      </div>
    </div>
  );
}
