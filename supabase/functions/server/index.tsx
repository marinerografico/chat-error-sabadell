import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-6a43fc84/health", (c) => {
  return c.json({ status: "ok" });
});

type Quote = {
  price: number;
  change: number;
  changePct: number;
  currency: string;
  points: number[];
  time: string;
  stale?: boolean;
};

// Obtiene la cotización desde Yahoo Finance (servidor → servidor, sin CORS).
// Prueba varios hosts de Yahoo por si alguno limita las peticiones (429).
async function fetchYahoo(symbol: string): Promise<Quote> {
  const hosts = ["query1.finance.yahoo.com", "query2.finance.yahoo.com"];
  let data: any = null;
  let lastErr = "";
  for (const host of hosts) {
    try {
      const url = `https://${host}/v8/finance/chart/${encodeURIComponent(symbol)}?interval=5m&range=1d`;
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        lastErr = `${host} respondió ${res.status}`;
        continue;
      }
      data = await res.json();
      break;
    } catch (e) {
      lastErr = `${host}: ${e instanceof Error ? e.message : String(e)}`;
    }
  }
  if (!data) throw new Error(`Yahoo no disponible para ${symbol} (${lastErr})`);
  const result = data?.chart?.result?.[0];
  if (!result) throw new Error(`Respuesta de Yahoo sin datos para ${symbol}: ${JSON.stringify(data?.chart?.error)}`);

  const meta = result.meta ?? {};
  const price = Number(meta.regularMarketPrice);
  const prevClose = Number(meta.chartPreviousClose ?? meta.previousClose ?? price);
  const currency = String(meta.currency ?? "EUR");

  const closes: number[] = (result.indicators?.quote?.[0]?.close ?? []).filter(
    (v: unknown): v is number => typeof v === "number" && isFinite(v),
  );
  const points = closes.length >= 2 ? closes : [prevClose, price].filter((v) => isFinite(v));

  if (!isFinite(price)) throw new Error(`Precio no válido para ${symbol}`);

  const change = price - prevClose;
  const changePct = prevClose ? (change / prevClose) * 100 : 0;

  return {
    price,
    change,
    changePct,
    currency,
    points,
    time: new Date().toISOString(),
  };
}

// Cotización en directo. Cachea el último valor bueno en KV; si el upstream
// falla, devuelve el último conocido marcado como "stale".
app.get("/make-server-6a43fc84/quote", async (c) => {
  const symbol = c.req.query("symbol") || "SAB.MC";
  const cacheKey = `quote:${symbol}`;
  try {
    const quote = await fetchYahoo(symbol);
    await kv.set(cacheKey, quote);
    return c.json(quote);
  } catch (err) {
    console.log(`Error obteniendo cotización en directo de ${symbol}: ${err}`);
    const cached = (await kv.get(cacheKey)) as Quote | null;
    if (cached) {
      return c.json({ ...cached, stale: true });
    }
    return c.json(
      { error: `No se pudo obtener la cotización de ${symbol}: ${err instanceof Error ? err.message : String(err)}` },
      502,
    );
  }
});

Deno.serve(app.fetch);
