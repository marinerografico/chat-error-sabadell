import { createContext, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

// ── Balance visibility (ojo / eye toggle) ──────────────────────────────
// Global in-memory state that hides every monetary amount across the whole app
// (the "ojo" toggle is shared between Inicio, Cuentas, etc.).
// Not persisted: reloading the app shows the balances again.
const BalanceVisibilityContext = createContext<{
  hidden: boolean;
  toggle: () => void;
}>({ hidden: false, toggle: () => {} });

export function useBalanceVisibility() {
  return useContext(BalanceVisibilityContext);
}

export function BalanceVisibilityProvider({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  return (
    <BalanceVisibilityContext.Provider
      value={{ hidden, toggle: () => setHidden((h) => !h) }}
    >
      {children}
    </BalanceVisibilityContext.Provider>
  );
}

// Spring-ish bounce used when an element appears.
const BOUNCE = [0.34, 1.56, 0.64, 1] as const;

// Wraps a monetary value. When balances are hidden it swaps the value for
// "••••". The number scales/fades out (200ms) and the dots scale/fade in
// with a little bounce (300ms); reversing plays the inverse.
export function HideableAmount({
  children,
  dotsClassName,
}: {
  children: ReactNode;
  dotsClassName: string;
}) {
  const { hidden } = useBalanceVisibility();
  return (
    <span className="relative inline-flex items-baseline">
      <AnimatePresence mode="wait" initial={false}>
        {hidden ? (
          <motion.span
            key="dots"
            className={dotsClassName}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: [0, 1.2, 1],
              transition: { duration: 0.3, ease: BOUNCE },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            ••••
          </motion.span>
        ) : (
          <motion.span
            key="value"
            className="inline-flex items-baseline"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: [0.6, 1.12, 1],
              transition: { duration: 0.35, ease: BOUNCE },
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
