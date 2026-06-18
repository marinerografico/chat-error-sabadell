import { useEffect, useState } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

// Widget de Bolsa estilo iOS para la acción de Banc Sabadell (SAB.MC).
// Los datos en directo se obtienen de la función edge de Supabase (proxy de la
// API de cotización) — ver useSabQuote. Mientras no haya backend conectado, el
// widget muestra un estado de carga en lugar de inventar cifras.

const FONT = "'Libre Franklin', sans-serif";

export type Quote = {
  price: number;
  change: number;
  changePct: number;
  currency: string;
  points: number[]; // serie intradía para el sparkline
  time?: string;
};

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; quote: Quote };

// Hook de datos para la cotización en directo de SAB.MC. Lee de la función edge
// de Supabase (proxy de Yahoo Finance, sin CORS) y refresca periódicamente.
export function useSabQuote(refreshMs = 30000): State {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const res = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-6a43fc84/quote?symbol=SAB.MC`,
          { headers: { Authorization: `Bearer ${publicAnonKey}` } },
        );
        if (!res.ok) throw new Error(`Servidor respondió ${res.status}`);
        const q: Quote = await res.json();
        if (alive) setState({ status: "ready", quote: q });
      } catch (err) {
        console.error("Error al obtener la cotización de SAB.MC:", err);
        // Mantener el último valor mostrado si ya lo había; si no, marcar error.
        if (alive) setState((s) => (s.status === "ready" ? s : { status: "error" }));
      }
    }

    load();
    const t = setInterval(load, refreshMs);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, [refreshMs]);

  return state;
}

function Sparkline({ points, color }: { points: number[]; color: string }) {
  if (points.length < 2) return <div className="h-[40px]" />;
  const w = 150, h = 40;
  const min = Math.min(...points), max = Math.max(...points);
  const span = max - min || 1;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - ((p - min) / span) * h).toFixed(1)}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[40px]" preserveAspectRatio="none">
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StockWidget() {
  const state = useSabQuote();
  const ready = state.status === "ready";
  const q = ready ? state.quote : undefined;
  const up = (q?.change ?? 0) >= 0;
  const color = up ? "#30D158" : "#FF453A";

  const fmt = (n: number) => n.toLocaleString("es-ES", { minimumFractionDigits: 4, maximumFractionDigits: 4 });

  return (
    <div
      className="rounded-[22px] p-[16px] shadow-[0_6px_16px_rgba(0,0,0,0.45)] flex flex-col gap-[10px]"
      style={{ background: "#1c1c1e", fontFamily: FONT }}
    >
      {/* Cabecera */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <span className="text-white text-[17px] leading-[20px]">SAB</span>
          <span className="text-[#8e8e93] text-[12px] leading-[15px]">Banc Sabadell · BME</span>
        </div>
        <div
          className="px-[8px] py-[3px] rounded-[7px] min-w-[58px] text-center"
          style={{ background: ready ? color : "#3a3a3c" }}
        >
          <span className="text-white text-[13px]">
            {ready ? `${up ? "+" : ""}${q!.changePct.toFixed(2)}%` : "—"}
          </span>
        </div>
      </div>

      {/* Sparkline */}
      {ready ? (
        <Sparkline points={q!.points} color={color} />
      ) : (
        <div className="h-[40px] flex items-center">
          <div className="skeleton-shimmer h-[3px] w-full rounded-full" />
        </div>
      )}

      {/* Precio */}
      <div className="flex items-end justify-between">
        {ready ? (
          <span className="text-white text-[22px] leading-[24px]">{fmt(q!.price)} €</span>
        ) : (
          <div className="skeleton-shimmer h-[22px] w-[120px] rounded-[6px]" />
        )}
        <span className="text-[13px]" style={{ color: ready ? color : "#8e8e93" }}>
          {ready ? `${up ? "+" : ""}${fmt(q!.change)}` : state.status === "error" ? "Sin datos" : "Cargando…"}
        </span>
      </div>
    </div>
  );
}
