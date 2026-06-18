import { motion } from "motion/react";

const DOTS = [
  { cx: 14.612, cy: 11.3131 },
  { cx: 14.612, cy: 18.4179 },
  { cx: 14.612, cy: 29.0748 },
  { cx: 14.612, cy: 36.687 },
  { cx: 21.2092, cy: 8.26839 },
  { cx: 21.2092, cy: 39.7317 },
  { cx: 8.52226, cy: 20.4478 },
  { cx: 39.4781, cy: 20.4478 },
  { cx: 27.2985, cy: 8.26839 },
  { cx: 27.2985, cy: 39.7317 },
  { cx: 8.52226, cy: 26.5375 },
  { cx: 39.4781, cy: 26.5375 },
  { cx: 32.8808, cy: 11.3131 },
  { cx: 32.8808, cy: 18.4179 },
  { cx: 32.8808, cy: 29.0748 },
  { cx: 32.8808, cy: 36.687 },
  { cx: 11.0593, cy: 33.1344 },
  { cx: 29.3288, cy: 33.1344 },
  { cx: 18.6718, cy: 33.1344 },
  { cx: 36.9406, cy: 33.1344 },
  { cx: 11.0593, cy: 14.8656 },
  { cx: 29.3288, cy: 14.8656 },
  { cx: 18.6718, cy: 14.8656 },
  { cx: 36.9406, cy: 14.8656 },
] as const;

const R = 1.52242;
const ENTRY_STAGGER = 0.038;
const WAVE_STAGGER = 0.055;

type VaneIconProps = {
  size?: number;
  alive?: boolean;
  className?: string;
};

export function VaneIcon({ size = 40, alive = true, className }: VaneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="48" height="48" rx="24" fill="#006DFF" />
      {DOTS.map((dot, i) =>
        alive ? (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            fill="white"
            initial={{ opacity: 0, r: 0 }}
            animate={{
              opacity: [0, 1, 1, 0.3, 1, 0.45, 1],
              r: [0, R * 1.4, R, R, R * 1.2, R, R],
            }}
            transition={{
              duration: 2.6,
              delay: i * ENTRY_STAGGER,
              repeat: Infinity,
              repeatDelay: 0.35,
              ease: "easeInOut",
              times: [0, 0.08, 0.16, 0.44, 0.54, 0.74, 1],
            }}
          />
        ) : (
          <circle key={i} cx={dot.cx} cy={dot.cy} r={R} fill="white" />
        ),
      )}
    </svg>
  );
}

/** Variante compacta para la burbuja: onda más rápida y ligera */
export function VaneIconBubble({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="24" fill="#006DFF" />
      {DOTS.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          fill="white"
          initial={{ opacity: 0, r: 0 }}
          animate={{
            opacity: [0.35, 1, 0.35],
            r: [R * 0.85, R * 1.2, R * 0.85],
          }}
          transition={{
            duration: 1.3,
            delay: i * WAVE_STAGGER,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
