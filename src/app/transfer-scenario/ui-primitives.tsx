import type { ReactNode } from "react";

export const FONT_REG = "font-['Libre_Franklin:Regular',sans-serif] font-normal";
export const FONT_SB = "font-['Libre_Franklin:SemiBold',sans-serif] font-semibold";
export const FONT_BOLD = "font-['Libre_Franklin:Bold',sans-serif] font-bold";

function ChevronRight() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className="shrink-0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
        fill="#006DF2"
      />
    </svg>
  );
}

export function MenuHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="bg-white shrink-0 w-full">
      <div className="h-[64px] flex items-center px-[16px] gap-[16px]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="size-[32px] flex items-center justify-center rounded-full cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fill="#006DFF"
            />
          </svg>
        </button>
        <p className={`flex-1 ${FONT_BOLD} text-[24px] text-black leading-[32px]`}>{title}</p>
      </div>
    </div>
  );
}

export function TransferHeader({
  title,
  onBack,
}: {
  title: string;
  onBack?: () => void;
}) {
  return (
    <div className="bg-white shrink-0 w-full border-b border-[#e0e0e0]">
      <div className="h-[64px] flex items-center px-[16px] gap-[12px]">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            aria-label="Volver"
            className="size-[32px] flex items-center justify-center cursor-pointer shrink-0"
          >
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.70711 0.292893C10.0976 0.683417 10.0976 1.31658 9.70711 1.70711L2.41421 9L9.70711 16.2929C10.0976 16.6834 10.0976 17.3166 9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289L8.29289 0.292893C8.68342 -0.0976315 9.31658 -0.0976315 9.70711 0.292893Z"
                fill="#006DF2"
              />
            </svg>
          </button>
        ) : (
          <div className="size-[32px] shrink-0" />
        )}
        <p className={`flex-1 text-center ${FONT_REG} text-[16px] text-black leading-[24px]`}>{title}</p>
        <div className="flex items-center gap-[8px] shrink-0">
          <div className="size-[32px] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="3" stroke="#006DFF" strokeWidth="1.5" />
              <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#006DFF" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="size-[32px] flex items-center justify-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M0 1h18M0 6h18M0 11h18" stroke="#006DFF" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-[100px] bg-[#006dff] px-[16px] py-[14px] ${FONT_REG} text-[16px] text-white leading-[24px] cursor-pointer disabled:opacity-40`}
    >
      {children}
    </button>
  );
}

export function MenuRow({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between py-[16px] border-b border-[#e0e0e0] cursor-pointer"
    >
      <span className={`${FONT_REG} text-[16px] text-[#0163e8] leading-[24px] text-left`}>{label}</span>
      <ChevronRight />
    </button>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <p className={`${FONT_SB} text-[16px] text-black leading-[24px] mb-[12px]`}>{children}</p>;
}

export function FormField({
  label,
  value,
  onChange,
  readOnly,
  suffix,
}: {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  readOnly?: boolean;
  suffix?: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-[6px] w-full">
      <span className={`${FONT_REG} text-[14px] text-[#646464] leading-[20px]`}>{label}</span>
      <div className="relative">
        <input
          readOnly={readOnly}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={`w-full rounded-[4px] border border-[#bdbdbd] px-[12px] py-[12px] ${FONT_REG} text-[16px] text-black bg-white ${suffix ? "pr-[40px]" : ""}`}
        />
        {suffix}
      </div>
    </label>
  );
}

export function DetailRow({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between gap-[16px] py-[8px] border-b border-[#f0f0f0] last:border-0">
      <span className={`${FONT_REG} text-[14px] text-[#646464] leading-[20px]`}>{label}</span>
      <span className={`${bold ? FONT_BOLD : FONT_REG} text-[14px] text-black text-right leading-[20px]`}>
        {value}
      </span>
    </div>
  );
}

export function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-[24px]">
      <div className="flex items-center gap-[8px] mb-[8px]">
        <p className={`${FONT_SB} text-[16px] text-black`}>{title}</p>
        <div className="size-[18px] rounded-full border border-[#646464] flex items-center justify-center">
          <span className={`${FONT_REG} text-[11px] text-[#646464]`}>i</span>
        </div>
      </div>
      <p className={`${FONT_REG} text-[14px] text-[#646464] leading-[20px]`}>{body}</p>
    </div>
  );
}
