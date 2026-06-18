import type { CardId } from "../navigation";

// Titular consistente en todo el prototipo.
export const HOLDER = "Laura Giménez Soler";

export type CardAvatar =
  | { kind: "image"; img: "zara" | "netflix" | "uberEats" | "mercadona" | "glovo" | "renfe" }
  | { kind: "letter"; letter: string };

export type CardMovement = {
  id: string;
  concept: string;
  date: string;
  group: string;
  amount: number; // negativo = gasto
  avatar: CardAvatar;
  fraccionable?: boolean; // aparece en la pestaña "Fraccionar"
  // ── Detalle del movimiento ──
  category: string; // "Compra en comercio" | "Compra online" | ...
  datetime: string; // "Lunes, 21 octubre 2023, 16:00 h."
  // Ubicación de la compra (solo compras presenciales). Si falta, el detalle
  // NO muestra el mapa. `query` se usa para abrir Google Maps.
  location?: { label: string; query: string };
};

export type QuickActionKey = "formaPago" | "mostrarPin" | "configurar" | "instantMoney" | "masOpciones";

export type Card = {
  id: CardId;
  type: "Crédito" | "Débito";
  bg: string; // color de fondo de la tarjeta
  masked: string; // ••••4521
  pan: string;
  accountIban: string; // cuenta asociada (detalle de movimiento)
  accountMasked: string; // "••••4425"
  available?: number; // solo crédito
  spent?: number; // solo crédito
  progress?: number; // 0..1 (gastado / límite) para la barra
  liquidacionLabel?: string;
  liquidacionAmount?: number;
  liquidacionStatus?: string;
  restricted?: boolean; // muestra el aviso de operaciones restringidas
  quickActions: QuickActionKey[];
  movements: CardMovement[];
};

// Movimientos de la tarjeta de CRÉDITO — compras típicas en comercios
// españoles. Incluye un huevo de pascua 🥚 (DeLorean, Hill Valley, 21-oct-2015).
const CREDIT_MOVEMENTS: CardMovement[] = [
  { id: "cc1", concept: "El Corte Inglés - Castellana", date: "Hoy, 10:12", group: "Hoy", amount: -149.9, avatar: { kind: "letter", letter: "E" }, category: "Compra en comercio", datetime: "Hoy, 10:12 h.", location: { label: "Madrid", query: "El Corte Inglés Castellana Madrid" } },
  { id: "cc2", concept: "Mercadona Spain Slu", date: "Ayer, 19:05", group: "Ayer", amount: -64.3, avatar: { kind: "image", img: "mercadona" }, category: "Compra en comercio", datetime: "Ayer, 19:05 h.", location: { label: "Barcelona", query: "Mercadona Barcelona" } },
  { id: "cc3", concept: "Repsol - Estación de Servicio", date: "Lunes 22 May", group: "Esta semana", amount: -70, avatar: { kind: "letter", letter: "R" }, category: "Compra en comercio", datetime: "Lunes, 22 mayo 2023, 08:00 h.", location: { label: "Madrid", query: "Repsol estación de servicio Madrid" } },
  { id: "cc4", concept: "Decathlon España", date: "Domingo 21 May", group: "Esta semana", amount: -85.99, avatar: { kind: "letter", letter: "D" }, category: "Compra en comercio", datetime: "Domingo, 21 mayo 2023, 12:30 h.", location: { label: "Madrid", query: "Decathlon Madrid" } },
  { id: "cc5", concept: "Glovoapp Spain Platform sl", date: "Sábado 20 May", group: "Esta semana", amount: -18.5, avatar: { kind: "image", img: "glovo" }, category: "Compra online", datetime: "Sábado, 20 mayo 2023, 14:20 h." },
  { id: "cc6", concept: "Netflix", date: "Viernes 19 May", group: "Esta semana", amount: -13.99, avatar: { kind: "image", img: "netflix" }, category: "Compra online", datetime: "Viernes, 19 mayo 2023, 09:00 h." },
  // 🥚 Huevo de pascua: Regreso al Futuro — 1,21 gigovatios, Hill Valley, BTTF day.
  { id: "cc-egg", concept: "DeLorean Time Circuits Co.", date: "21 Oct", group: "Esta semana", amount: -121.21, avatar: { kind: "letter", letter: "⚡" }, category: "Compra en comercio", datetime: "Sábado, 21 octubre 2015, 16:29 h.", location: { label: "Hill Valley", query: "Hill Valley California Back to the Future" } },
];

// Movimientos de la tarjeta de DÉBITO — set distinto, también comercios típicos.
const DEBIT_MOVEMENTS: CardMovement[] = [
  { id: "dc1", concept: "Mercadona Spain Slu", date: "Hoy, 13:40", group: "Hoy", amount: -38.75, avatar: { kind: "image", img: "mercadona" }, category: "Compra en comercio", datetime: "Hoy, 13:40 h.", location: { label: "Madrid", query: "Mercadona Madrid" } },
  { id: "dc2", concept: "Cervecería 100 Montaditos", date: "Hoy, 21:15", group: "Hoy", amount: -14.2, avatar: { kind: "letter", letter: "C" }, category: "Compra en comercio", datetime: "Hoy, 21:15 h.", location: { label: "Madrid", query: "100 Montaditos Madrid" } },
  { id: "dc3", concept: "Uber Eats Spain", date: "Ayer, 20:48", group: "Ayer", amount: -22.9, avatar: { kind: "image", img: "uberEats" }, category: "Compra online", datetime: "Ayer, 20:48 h." },
  { id: "dc4", concept: "Renfe-Operadora, E. P.", date: "Miércoles 24 May", group: "Esta semana", amount: -39.5, avatar: { kind: "image", img: "renfe" }, category: "Compra en comercio", datetime: "Miércoles, 24 mayo 2023, 08:05 h.", location: { label: "Madrid", query: "Renfe Estación Atocha Madrid" } },
  { id: "dc5", concept: "Zara España", date: "Martes 23 May", group: "Esta semana", amount: -59.99, avatar: { kind: "image", img: "zara" }, category: "Compra en comercio", datetime: "Martes, 23 mayo 2023, 18:10 h.", location: { label: "Madrid", query: "Zara Madrid Gran Vía" } },
  { id: "dc6", concept: "Supermercado Día", date: "Lunes 22 May", group: "Esta semana", amount: -27.3, avatar: { kind: "letter", letter: "D" }, category: "Compra en comercio", datetime: "Lunes, 22 mayo 2023, 11:25 h.", location: { label: "Sevilla", query: "Supermercado Dia Sevilla" } },
  { id: "dc7", concept: "Spotify", date: "Domingo 21 May", group: "Esta semana", amount: -10.99, avatar: { kind: "letter", letter: "S" }, category: "Compra online", datetime: "Domingo, 21 mayo 2023, 07:30 h." },
];

export const CARDS: Record<CardId, Card> = {
  credito: {
    id: "credito",
    type: "Crédito",
    bg: "#212121",
    masked: "••••4521",
    pan: "5555 •••• •••• 4521",
    accountIban: "ES11 0081 0000 0000 0000 4425",
    accountMasked: "••••4425",
    available: 2300,
    spent: 700,
    progress: 700 / 3000, // gastado / límite (2.300 + 700) → barra coherente
    liquidacionLabel: "Liquidación junio",
    liquidacionAmount: 700,
    liquidacionStatus: "En curso",
    restricted: true,
    quickActions: ["formaPago", "mostrarPin", "configurar", "masOpciones"],
    movements: CREDIT_MOVEMENTS,
  },
  debito: {
    id: "debito",
    type: "Débito",
    bg: "#0032a0",
    masked: "••••4521",
    pan: "5555 •••• •••• 4521",
    accountIban: "ES11 0081 0000 0000 0000 4425",
    accountMasked: "••••4425",
    restricted: false,
    quickActions: ["configurar", "mostrarPin", "instantMoney", "masOpciones"],
    movements: DEBIT_MOVEMENTS,
  },
};

// Orden fijo del carrusel: crédito primero, débito después.
export const CARDS_ORDER: CardId[] = ["credito", "debito"];
export const CARDS_LIST: Card[] = CARDS_ORDER.map((id) => CARDS[id]);

// Busca un movimiento por id dentro de una tarjeta.
export function findMovement(cardId: CardId, movementId: string): CardMovement | undefined {
  return CARDS[cardId].movements.find((m) => m.id === movementId);
}

export function moneyParts(value: number): { int: string; dec: string } {
  const fixed = Math.abs(value).toFixed(2);
  const [intPart, decPart] = fixed.split(".");
  return { int: Number(intPart).toLocaleString("es-ES"), dec: `,${decPart}` };
}
