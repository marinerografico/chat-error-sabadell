import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Inicio from "../imports/Inicio";
import CentroDeAyuda from "./components/centro-de-ayuda";
import Cuentas from "./components/cuentas";
import Tarjetas from "./components/tarjetas";
import CardPaymentDetail from "./components/card-payment-detail";
import MovementDetail from "./components/movement-detail";
import Contratar from "./components/contratar";
import ContratarProducto from "./components/contratar-producto";
import Operar from "./components/operar";
import BottomNav, { NAV_ACTIVE } from "./components/bottom-nav";
import BootFlow from "./components/boot-flow";
import InicioSkeleton from "./components/inicio-skeleton";
import TransferFlow from "./transfer-scenario/transfer-flow";
import BizumFlow from "./transfer-scenario/bizum-flow";
import VaneAssistant from "./transfer-scenario/vane-assistant";
import { TransferScenarioProvider } from "./transfer-scenario/transfer-scenario-context";
import { NavigationContext, type AccountId, type CardId, type NavOptions, type Page, type ProductId } from "./navigation";
import { BalanceVisibilityProvider } from "./balance-visibility";

// ── Navigation as a real history stack ────────────────────────────────
// Each route snapshots the focused account/card/movement, so going back
// restores the screen you came from (not always Inicio). `navigate` pushes a
// new route; `goBack` pops the top one; navigating to "inicio" resets to root.
type Route = {
  id: number;
  page: Page;
  account: AccountId;
  card: CardId;
  movementId: string;
  product: ProductId;
};

// Custom payload passed to the variants: slide direction + whether this
// transition is a cross-fade (tab switch) instead of a horizontal push/pop.
type TransitionCustom = { dir: number; fade: boolean };

// Two transition styles:
//  • Slide (default): iOS push/pop. New screen slides in from the right (push)
//    / top screen slides off to the right (pop); covered screen parallaxes + dims.
//  • Fade (tab switch Inicio↔Contratar): no horizontal movement. The transition
//    is ALWAYS driven by the **leaving** screen fading out (it sits on top, fully
//    painted), while the **entering** screen is placed UNDERNEATH already opaque
//    (opacity 1 from frame 1). This is symmetric for push and pop and avoids the
//    one-frame flash you get when fading a freshly-mounted top screen in from 0.
//    To keep the entering screen underneath, its z-index is forced to 0 during a
//    fade (the leaving screen keeps its higher resting z-index). `fade` is reset
//    on exit-complete so screens return to their normal stacking at rest.
const pageVariants = {
  enter: ({ dir, fade }: TransitionCustom) =>
    fade ? { x: "0%", opacity: 1 } : { x: dir >= 0 ? "100%" : "-25%", opacity: 1 },
  center: { x: "0%", opacity: 1 },
  exit: ({ dir, fade }: TransitionCustom) =>
    fade ? { x: "0%", opacity: 0 } : { x: dir >= 0 ? "-25%" : "100%", opacity: 1 },
};

const dimVariants = {
  enter: ({ dir, fade }: TransitionCustom) => ({ opacity: fade ? 0 : dir >= 0 ? 0 : 0.28 }),
  center: { opacity: 0 },
  exit: ({ dir, fade }: TransitionCustom) => ({ opacity: fade ? 0 : dir >= 0 ? 0.28 : 0 }),
};

const pageTransition = { duration: 0.32, ease: [0.4, 0, 0.2, 1] as const };

// Pestañas de la barra inferior entre las que la transición es cross-fade.
const TAB_PAGES = new Set<Page>(["inicio", "contratar"]);
const isTabSwitch = (from: Page, to: Page) => TAB_PAGES.has(from) && TAB_PAGES.has(to);

const ROOT: Route = { id: 0, page: "inicio", account: "sabadell", card: "credito", movementId: "", product: "hipotecas" };

export default function App() {
  const [stack, setStack] = useState<Route[]>([ROOT]);
  const [direction, setDirection] = useState(1);
  const [fade, setFade] = useState(false);
  const [operarOpen, setOperarOpen] = useState(false);
  // Flujo de arranque (home iOS → splash → prelogin → login) por delante de
  // Inicio. Cuando el login termina, se desmonta con un fundido y aparece Inicio.
  const [booted, setBooted] = useState(false);
  // Tras el login, Inicio aparece con un skeleton durante 2 s para acercarlo a
  // la carga real de datos. Solo afecta a la primera vez que se muestra Inicio.
  const [inicioReady, setInicioReady] = useState(false);
  const nextId = useRef(1);

  useEffect(() => {
    if (!booted) return;
    const t = setTimeout(() => setInicioReady(true), 2000);
    return () => clearTimeout(t);
  }, [booted]);

  const current = stack[stack.length - 1];

  const openOperar = () => setOperarOpen(true);
  const closeOperar = () => setOperarOpen(false);

  const navigate = (target: Page, options?: NavOptions) => {
    setOperarOpen(false); // cualquier navegación cierra el modal de Operar
    const fromPage = stack[stack.length - 1].page;
    setFade(isTabSwitch(fromPage, target));
    if (target === "inicio") {
      // Volver a la raíz (Inicio) reinicia la pila.
      setDirection(-1);
      setStack((prev) => (prev.length === 1 ? prev : [prev[0]]));
      return;
    }
    setDirection(1);
    setStack((prev) => {
      const top = prev[prev.length - 1];
      const route: Route = {
        id: nextId.current++,
        page: target,
        account: options?.account ?? top.account,
        card: options?.card ?? top.card,
        movementId: options?.movementId ?? top.movementId,
        product: options?.product ?? top.product,
      };
      return [...prev, route];
    });
  };

  const goBack = () => {
    const fromPage = stack[stack.length - 1].page;
    const toPage = stack.length > 1 ? stack[stack.length - 2].page : fromPage;
    setFade(isTabSwitch(fromPage, toPage));
    setDirection(-1);
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const renderPage = (route: Route) => {
    switch (route.page) {
      case "ayuda":
        return <CentroDeAyuda />;
      case "cuentas":
        return <Cuentas firstAccount={route.account} />;
      case "tarjetas":
        return <Tarjetas firstCard={route.card} />;
      case "detalle-movimiento":
        return <CardPaymentDetail cardId={route.card} movementId={route.movementId} />;
      case "detalle-cuenta":
        return <MovementDetail account={route.account} movementId={route.movementId} />;
      case "contratar":
        return <Contratar />;
      case "contratar-producto":
        return <ContratarProducto product={route.product} />;
      default:
        // Inicio: skeleton durante la carga inicial tras el login.
        return inicioReady ? <Inicio /> : <InicioSkeleton />;
    }
  };

  const depth = stack.length - 1;

  return (
    // On real mobile: fills the full screen (100svh)
    // On desktop: shows centered at iPhone 16 width (393px)
    <div
      className="bg-[#1a1a1a] min-h-svh flex items-start justify-center"
    >
      <div
        style={{ width: "min(393px, 100vw)", height: "100svh" }}
        className="relative overflow-hidden"
      >
        <BalanceVisibilityProvider>
          <TransferScenarioProvider>
          <NavigationContext.Provider value={{ navigate, goBack, openOperar, closeOperar }}>
            <AnimatePresence initial={false} custom={{ dir: direction, fade }} mode="sync" onExitComplete={() => setFade(false)}>
              <motion.div
                key={current.id}
                className="absolute inset-0 flex flex-col"
                style={{
                  // During a fade the entering screen must sit UNDERNEATH the
                  // leaving one (which fades out on top), so force it to z 0.
                  zIndex: fade ? 0 : depth + 1,
                  boxShadow: depth > 0 && !fade ? "-8px 0 24px rgba(0, 0, 0, 0.18)" : undefined,
                }}
                custom={{ dir: direction, fade }}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={pageTransition}
              >
                <div className="flex-1 min-h-0">{renderPage(current)}</div>
                {/* Barra inferior compartida: única fuente de verdad. Se muestra
                    solo en las páginas de NAV_ACTIVE; viaja con la página en las
                    transiciones (queda bajo la pantalla que se empuja encima). */}
                {NAV_ACTIVE[current.page] && <BottomNav active={NAV_ACTIVE[current.page]!} />}
                <motion.div
                  className="absolute inset-0 bg-black pointer-events-none"
                  custom={{ dir: direction, fade }}
                  variants={dimVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={pageTransition}
                />
              </motion.div>
            </AnimatePresence>

            {/* Operar: modal completo (entra de abajo arriba, sale hacia abajo) */}
            <AnimatePresence>
              {operarOpen && (
                <motion.div
                  key="operar"
                  className="absolute inset-0 z-[50]"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "100%" }}
                  transition={pageTransition}
                >
                  <Operar />
                </motion.div>
              )}
            </AnimatePresence>

            <TransferFlow />
            <BizumFlow />
            <VaneAssistant />
          </NavigationContext.Provider>
          </TransferScenarioProvider>
        </BalanceVisibilityProvider>

        {/* Flujo de arranque montado por encima de todo. Al completar el login
            se desvanece (fundido) dejando ver Inicio ya renderizado debajo. */}
        <AnimatePresence>
          {!booted && (
            <motion.div
              key="boot"
              className="absolute inset-0 z-[100]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            >
              <BootFlow onComplete={() => setBooted(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
