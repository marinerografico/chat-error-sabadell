import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import IOSHomeScreen from "./ios-home-screen";
import SplashScreen from "./splash-screen";
import PreLogin from "./pre-login";
import LoginScreen from "./login-screen";

// Flujo de arranque: home de iOS → splash (2 s) → prelogin → login → Inicio.
// Cada transición tiene su propio estilo: "launch" (zoom al abrir la app),
// "fade" (crossfade suave) y "slide" (push/pop horizontal estilo iOS).

type Phase = "home" | "splash" | "prelogin" | "login";
type Kind = "launch" | "fade" | "slide";
type Custom = { kind: Kind; dir: number };

// z-index fijo por fase: garantiza que la pantalla "de encima" correcta quede
// arriba en cada par de transición (entrante en push, saliente en fade/launch).
const Z: Record<Phase, number> = { home: 1, prelogin: 2, login: 3, splash: 5 };

const variants = {
  initial: ({ kind, dir }: Custom) => {
    if (kind === "launch") return { opacity: 0, scale: 1.25 };
    if (kind === "fade") return { opacity: 0, scale: 1.04 };
    return { x: dir >= 0 ? "100%" : "-25%", opacity: 1, scale: 1 };
  },
  animate: { opacity: 1, scale: 1, x: "0%" },
  exit: ({ kind, dir }: Custom) => {
    if (kind === "launch") return { opacity: 0, scale: 1 };
    if (kind === "fade") return { opacity: 0, scale: 0.98 };
    return { x: dir >= 0 ? "-25%" : "100%", opacity: 1, scale: 1 };
  },
};

const SMOOTH = [0.4, 0, 0.2, 1] as const;
const transitionFor = (kind: Kind) =>
  kind === "launch"
    ? { duration: 0.5, ease: SMOOTH }
    : kind === "fade"
      ? { duration: 0.45, ease: SMOOTH }
      : { duration: 0.32, ease: SMOOTH };

export default function BootFlow({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("home");
  const transitionRef = useRef<Custom>({ kind: "fade", dir: 1 });

  const go = (next: Phase, custom: Custom) => {
    transitionRef.current = custom;
    setPhase(next);
  };

  // La splash se muestra durante 2 s y avanza sola al prelogin.
  useEffect(() => {
    if (phase !== "splash") return;
    const t = setTimeout(() => go("prelogin", { kind: "fade", dir: 1 }), 2000);
    return () => clearTimeout(t);
  }, [phase]);

  const render = (p: Phase) => {
    switch (p) {
      case "home":
        return <IOSHomeScreen onLaunchSabadell={() => go("splash", { kind: "launch", dir: 1 })} />;
      case "splash":
        return <SplashScreen />;
      case "prelogin":
        return <PreLogin onAcceder={() => go("login", { kind: "slide", dir: 1 })} />;
      case "login":
        return (
          <LoginScreen
            onEntrar={onComplete}
            onBack={() => go("prelogin", { kind: "slide", dir: -1 })}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={transitionRef.current} mode="sync">
        <motion.div
          key={phase}
          className="absolute inset-0"
          style={{ zIndex: Z[phase] }}
          custom={transitionRef.current}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transitionFor(transitionRef.current.kind)}
        >
          {render(phase)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
