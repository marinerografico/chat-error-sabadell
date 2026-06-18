// SVG path data inlined — cannot import from src/imports/ virtual filesystem
const SVG_CIRCLE = "M4 0C6.20914 0 8 1.79086 8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0Z";
const SVG_INVESTMENT = "M15.2178 7.7002C16.4756 7.70273 17.8163 8.31857 19.0371 9.29102L19.2803 9.49023L20 10.0996L19.2803 10.71C17.9786 11.8141 16.5562 12.5062 15.2119 12.5C14.1384 12.4949 13.0535 12.0535 11.9873 11.2969L11.8545 11.1992L11.7461 11.3496C11.3408 11.9404 11.0298 12.6859 10.8877 13.4004H15.1455L14.0371 20H5.96289L4.85449 13.4004H9.1123C8.97015 12.6859 8.6592 11.9404 8.25391 11.3496L8.14453 11.1992L8.01367 11.2969C7.02936 11.9955 6.02868 12.4252 5.03613 12.4912L4.78809 12.5C3.52775 12.5059 2.19865 11.898 0.964844 10.9121L0.719727 10.71L0 10.0996L0.720703 9.49023C2.0051 8.40325 3.44131 7.70271 4.7832 7.7002C6.14284 7.69787 7.56701 8.4202 8.76758 9.50781C9.24524 9.94057 9.66632 10.5166 10 11.1572C10.3337 10.5166 10.7547 9.94058 11.2324 9.50781C12.4331 8.42005 13.8579 7.69771 15.2178 7.7002ZM7.31641 18.4004H12.6826L13.2539 15H6.74512L7.31641 18.4004ZM4.78613 9.2998C4.1967 9.30091 3.51048 9.53839 2.81836 9.94824L2.57129 10.1016L2.59473 10.1172C3.29458 10.5715 3.98907 10.8491 4.59961 10.8936L4.78027 10.9004C5.40036 10.8975 6.09956 10.6362 6.82715 10.166L6.93359 10.0938L6.86328 10.0469C6.22653 9.62576 5.56813 9.35734 4.97949 9.30859L4.78613 9.2998ZM15.2148 9.2998C14.5792 9.29864 13.8443 9.57891 13.1367 10.0469L13.0664 10.0938L13.1729 10.166C13.8276 10.5891 14.4595 10.8429 15.0312 10.8916L15.2197 10.9004C15.8068 10.9031 16.484 10.6714 17.1748 10.2607L17.4287 10.1016L17.4121 10.0908C16.7128 9.63896 16.0094 9.35626 15.3955 9.30762L15.2148 9.2998ZM10 0C12.0977 0.000191718 13.7979 1.70111 13.7979 3.79883C13.7977 5.89639 12.0976 7.59649 10 7.59668C7.90244 7.59649 6.20136 5.89639 6.20117 3.79883C6.20117 1.70111 7.90232 0.000191758 10 0ZM10 1.59961C8.78598 1.5998 7.80078 2.58476 7.80078 3.79883C7.80097 5.01273 8.7861 5.99688 10 5.99707C11.2139 5.99688 12.1981 5.01273 12.1982 3.79883C12.1982 2.58476 11.214 1.5998 10 1.59961Z";

function Dot({ active }: { active: boolean }) {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <path d={SVG_CIRCLE} fill={active ? "#006DFF" : "#BDBDBD"} />
      </svg>
    </div>
  );
}

function SmallCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[24px] relative rounded-[16px] shrink-0 w-[228px]">
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full">
        <div className="content-stretch flex items-start p-[2px] relative shrink-0">
          <div className="relative shrink-0 size-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={SVG_INVESTMENT} fill="black" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Libre_Franklin:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-black">{title}</p>
          <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#424242] text-[14px] w-full">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ButtonSet() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="bg-[#006dff] flex-[1_0_0] min-w-[120px] relative rounded-[100px]">
        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Contratar</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-w-[120px] relative rounded-[100px]">
        <div className="flex flex-col items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#006dff] text-[16px] text-center whitespace-nowrap">Saber más</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#006dff] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function FullCard({
  image,
  tag,
  title,
  description,
}: {
  image: string;
  tag?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[343px]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        {/* Card image header (lifestyle, correlated with the message) */}
        <div className="h-[173px] relative shrink-0 w-full overflow-clip bg-[#eceff3]">
          <img src={image} alt={title} loading="lazy" className="absolute inset-0 size-full object-cover grayscale" />
          {tag && (
            <div className="absolute bg-[#69e3b2] flex items-center justify-center px-[16px] py-[6px] rounded-[16px] left-[16px] top-[16px]">
              <p className="[word-break:break-word] font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">{tag}</p>
            </div>
          )}
        </div>
        {/* Card body */}
        <div className="relative shrink-0 w-full">
          <div aria-hidden className="absolute border-[#bdbdbd] border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[24px] relative size-full">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
              <p className="font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[18px] text-black">{title}</p>
              <p className="font-['Libre_Franklin:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#424242] text-[16px] w-full">{description}</p>
            </div>
            <ButtonSet />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#bdbdbd] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

export default function TePuedeInteresarSection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[16px] items-start py-[24px] pb-[32px] relative shrink-0 w-full">
      {/* Header */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Libre_Franklin:SemiBold',sans-serif] font-semibold leading-[28px] min-w-px relative text-[18px] text-black">Te puede interesar</p>
        </div>
      </div>

      {/* Small product cards — horizontal scroll */}
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <div className="overflow-x-auto w-full">
            <div className="flex gap-[16px] items-start" style={{ width: "max-content", paddingBottom: 4 }}>
              <SmallCard title="La cuenta que necesitas" description="Tu cuenta secundaria para lo que necesites" />
              <SmallCard title="Seguros de vida" description="Porque todo el mundo tiene imprevistos" />
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
            <Dot active={true} />
            <Dot active={false} />
          </div>
        </div>
      </div>

      {/* Full product cards — horizontal scroll */}
      <div className="relative shrink-0 w-full">
        <div className="overflow-x-auto w-full">
          <div className="flex gap-[16px] items-start px-[16px]" style={{ width: "max-content", paddingBottom: 4 }}>
            <FullCard
              image="https://images.unsplash.com/photo-1758876200947-932123412834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              tag="Novedad"
              title="Seguro Blink Hogar"
              description="Protege tu hogar desde 70 € al año"
            />
            <FullCard
              image="https://images.unsplash.com/photo-1760068670115-6d4e415b0c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Renting de coches"
              description="Tu mejor alternativa a comprarte un coche es el renting de Sabadell."
            />
            <FullCard
              image="https://images.unsplash.com/photo-1486403184395-fc4990866136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              title="Cuenta Sabadell Primera"
              description="Tarjeta de débito gratuita para mayores de 14 años"
            />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center mt-[16px] relative shrink-0 w-full">
          <Dot active={true} />
          <Dot active={false} />
          <Dot active={false} />
        </div>
      </div>
    </div>
  );
}
