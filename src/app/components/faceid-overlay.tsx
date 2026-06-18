import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Simulación del patrón de Face ID de iOS: aparece el glifo de Face ID con un
// barrido de escaneo, después se transforma en un check (OK) y se cierra
// llamando a onSuccess. Pensado para mostrarse sobre la pantalla de login.

const FONT = "'Libre Franklin', sans-serif";

type Phase = "scanning" | "success";

function FaceGlyph() {
  return (
    <svg viewBox="0 0 100 100" className="size-full" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      {/* Corchetes de las esquinas */}
      <path d="M22 8H12a4 4 0 0 0-4 4v10" />
      <path d="M78 8h10a4 4 0 0 1 4 4v10" />
      <path d="M22 92H12a4 4 0 0 1-4-4V78" />
      <path d="M78 92h10a4 4 0 0 0 4-4V78" />
      {/* Ojos */}
      <line x1="34" y1="36" x2="34" y2="46" />
      <line x1="66" y1="36" x2="66" y2="46" />
      {/* Nariz */}
      <path d="M50 38v12l-5 4" />
      {/* Sonrisa */}
      <path d="M36 64c4 5 24 5 28 0" />
    </svg>
  );
}

function CheckGlyph() {
  return (
    <svg viewBox="0 0 100 100" className="size-full" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
      <motion.path
        d="M26 52l16 16 32-36"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function FaceIDOverlay({ onSuccess }: { onSuccess: () => void }) {
  const [phase, setPhase] = useState<Phase>("scanning");

  useEffect(() => {
    const toSuccess = setTimeout(() => setPhase("success"), 1500);
    const done = setTimeout(onSuccess, 2400);
    return () => {
      clearTimeout(toSuccess);
      clearTimeout(done);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-[60] flex flex-col items-center justify-center gap-[24px]"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)", fontFamily: FONT }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="relative size-[92px]"
        animate={phase === "success" ? { scale: [1, 1.12, 1] } : { scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence mode="wait">
          {phase === "scanning" ? (
            <motion.div
              key="face"
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ opacity: [1, 0.45, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaceGlyph />
              </motion.div>
              {/* Línea de escaneo que recorre el glifo */}
              <motion.div
                className="absolute left-0 right-0 h-[2px]"
                style={{ background: "rgba(255,255,255,0.9)", boxShadow: "0 0 8px 2px rgba(255,255,255,0.6)" }}
                initial={{ top: "10%" }}
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="check"
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <CheckGlyph />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.span
        key={phase}
        className="text-white text-[17px]"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {phase === "scanning" ? "Face ID" : "Hecho"}
      </motion.span>
    </motion.div>
  );
}
