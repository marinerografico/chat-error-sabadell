import type { AccountId } from "../navigation";

// Avatar descriptor for a movement row. Image keys map to imported logos in
// the Cuentas component.
export type Avatar =
  | { kind: "letter"; letter: string }
  | { kind: "doc" } // recibos / nóminas / domiciliaciones
  | { kind: "transfer" } // bizum / transferencias
  | { kind: "card" } // pagos con tarjeta
  | { kind: "image"; img: "zara" | "uberEats" | "agbar" };

// Tipo de detalle → decide qué plantilla de detalle de movimiento se muestra.
export type DetailType = "compra" | "bizum" | "recibo" | "ingreso" | "transferencia" | "liquidacion";

export type Movement = {
  id: string;
  concept: string;
  date: string;
  group: string; // agrupación temporal (solo movimientos pasados)
  amount: number; // positivo = ingreso, negativo = gasto
  avatar: Avatar;
  tag?: string; // p.ej. "Ahorrar"
  // ── Detalle del movimiento ──
  detailType: DetailType;
  category: string;
  datetime: string;
  location?: { label: string; query: string }; // solo compras presenciales → mapa
  counterparty?: string; // bizum / transferencia (persona o entidad)
  hasHistory?: boolean; // si false, el detalle no muestra "Histórico de movimientos"
  revolving?: number; // liquidación: cuota mínima de aplazamiento (€/mes)
};

export type Account = {
  id: AccountId;
  name: string;
  balance: number;
  ibanFull: string;
  ibanMasked: string;
  avisos?: number; // nº de avisos pendientes; si no hay, no se muestra el pill
  movements: Movement[]; // más reciente primero
  upcoming: Movement[]; // próximos pagos previstos (sin saldo corrido)
};

// Datos inventados pero coherentes con una cuenta de un banco español de tipo
// medio. Los movimientos van del más reciente al más antiguo; el saldo corrido
// se calcula en el componente partiendo de `balance`.
export const ACCOUNTS: Record<AccountId, Account> = {
  sabadell: {
    id: "sabadell",
    name: "Cuenta Online Sabadell",
    balance: 2347.82,
    ibanFull: "ES11 0081 0000 0000 0000 4422",
    ibanMasked: "••••4422",
    avisos: 3,
    movements: [
      { id: "s1", concept: "Bizum a Carlos (pádel)", date: "29 Dic, 20:10", group: "Esta semana", amount: -12, avatar: { kind: "transfer" }, detailType: "bizum", category: "Bizum enviado", datetime: "Viernes, 29 diciembre 2023, 20:10 h.", counterparty: "Carlos Pérez", hasHistory: false },
      { id: "s2", concept: "Compra - Mercadona", date: "29 Dic, 13:20", group: "Esta semana", amount: -63.45, avatar: { kind: "letter", letter: "M" }, detailType: "compra", category: "Compra en comercio", datetime: "Viernes, 29 diciembre 2023, 13:20 h.", location: { label: "Madrid", query: "Mercadona Madrid" }, hasHistory: true },
      { id: "s3", concept: "Compra - Zara Spain Slu", date: "28 Dic, 19:45", group: "Esta semana", amount: -34.9, avatar: { kind: "image", img: "zara" }, detailType: "compra", category: "Compra en comercio", datetime: "Jueves, 28 diciembre 2023, 19:45 h.", location: { label: "Madrid", query: "Zara Madrid Gran Vía" }, hasHistory: true },
      { id: "s4", concept: "Adeudo Recibo Repsol", date: "28 Dic, 08:00", group: "Esta semana", amount: -58.9, avatar: { kind: "doc" }, detailType: "recibo", category: "Adeudo de recibo", datetime: "Jueves, 28 diciembre 2023, 08:00 h.", hasHistory: true },
      { id: "s5", concept: "Compra - Uber Eats Spain", date: "27 Dic, 21:30", group: "Esta semana", amount: -22.5, avatar: { kind: "image", img: "uberEats" }, detailType: "compra", category: "Compra online", datetime: "Miércoles, 27 diciembre 2023, 21:30 h.", hasHistory: true },
      { id: "s6", concept: "Bizum recibido de María", date: "27 Dic, 10:15", group: "Semana pasada", amount: 20, avatar: { kind: "transfer" }, detailType: "bizum", category: "Bizum recibido", datetime: "Miércoles, 27 diciembre 2023, 10:15 h.", counterparty: "María López", hasHistory: false },
      { id: "s7", concept: "Abono nómina Industrias Gráficas Henares", date: "25 Dic, 09:00", group: "Semana pasada", amount: 1450, avatar: { kind: "doc" }, tag: "Ahorrar", detailType: "ingreso", category: "Ingreso por nómina", datetime: "Lunes, 25 diciembre 2023, 09:00 h.", hasHistory: true },
      { id: "s8", concept: "Tarjeta Crédito Sandra Antanares Gutierrez", date: "24 Dic, 18:00", group: "Semana pasada", amount: -45, avatar: { kind: "card" }, detailType: "liquidacion", category: "Liquidación tarjeta de crédito", datetime: "Domingo, 24 diciembre 2023, 18:00 h.", revolving: 30, hasHistory: true },
      { id: "s9", concept: "Adeudo Recibo Iberdrola", date: "23 Dic, 08:00", group: "Semana pasada", amount: -72.1, avatar: { kind: "doc" }, detailType: "recibo", category: "Adeudo de recibo", datetime: "Sábado, 23 diciembre 2023, 08:00 h.", hasHistory: true },
      { id: "s10", concept: "Compra - Caprabo", date: "22 Dic, 12:40", group: "Semana pasada", amount: -27.3, avatar: { kind: "letter", letter: "C" }, detailType: "compra", category: "Compra en comercio", datetime: "Viernes, 22 diciembre 2023, 12:40 h.", location: { label: "Barcelona", query: "Caprabo Barcelona" }, hasHistory: true },
      { id: "s11", concept: "Transferencia a María del Carmen", date: "22 Dic, 10:00", group: "Semana pasada", amount: -500, avatar: { kind: "transfer" }, detailType: "transferencia", category: "Transferencia enviada", datetime: "Viernes, 22 diciembre 2023, 10:00 h.", counterparty: "María del Carmen", hasHistory: false },
    ],
    upcoming: [
      { id: "su1", concept: "Recibo Movistar", date: "Previsto 18 Dic", group: "Próximos pagos", amount: -49.99, avatar: { kind: "doc" }, detailType: "recibo", category: "Recibo previsto", datetime: "Previsto: lunes, 18 diciembre 2023", hasHistory: true },
      { id: "su2", concept: "Recibo Comunidad de propietarios", date: "Previsto 20 Dic", group: "Próximos pagos", amount: -85, avatar: { kind: "doc" }, detailType: "recibo", category: "Recibo previsto", datetime: "Previsto: miércoles, 20 diciembre 2023", hasHistory: false },
    ],
  },
  familiar: {
    id: "familiar",
    name: "Cuenta familiar",
    balance: 8915.4,
    ibanFull: "ES11 0081 0000 0000 0000 4425",
    ibanMasked: "••••4425",
    movements: [
      { id: "f1", concept: "Compra - Mercadona", date: "29 Dic, 12:54", group: "Esta semana", amount: -112.4, avatar: { kind: "letter", letter: "M" }, detailType: "compra", category: "Compra en comercio", datetime: "Viernes, 29 diciembre 2023, 12:54 h.", location: { label: "Madrid", query: "Mercadona Madrid" }, hasHistory: true },
      { id: "f2", concept: "Bizum a AMPA Colegio", date: "29 Dic, 09:21", group: "Esta semana", amount: -45, avatar: { kind: "transfer" }, detailType: "bizum", category: "Bizum enviado", datetime: "Viernes, 29 diciembre 2023, 09:21 h.", counterparty: "AMPA Colegio San José", hasHistory: true },
      { id: "f3", concept: "Adeudo Recibo Aguas (Agbar)", date: "28 Dic, 10:00", group: "Esta semana", amount: -28.8, avatar: { kind: "image", img: "agbar" }, detailType: "recibo", category: "Adeudo de recibo", datetime: "Jueves, 28 diciembre 2023, 10:00 h.", hasHistory: true },
      { id: "f4", concept: "Tarjeta Crédito El Corte Inglés", date: "27 Dic, 17:30", group: "Esta semana", amount: -134.2, avatar: { kind: "card" }, detailType: "liquidacion", category: "Liquidación tarjeta de crédito", datetime: "Miércoles, 27 diciembre 2023, 17:30 h.", revolving: 30, hasHistory: true },
      { id: "f5", concept: "Compra - Decathlon", date: "26 Dic, 11:05", group: "Esta semana", amount: -59.9, avatar: { kind: "letter", letter: "D" }, detailType: "compra", category: "Compra en comercio", datetime: "Martes, 26 diciembre 2023, 11:05 h.", location: { label: "Madrid", query: "Decathlon Madrid" }, hasHistory: true },
      { id: "f6", concept: "Transferencia recibida - Abuelos", date: "24 Dic, 13:00", group: "Semana pasada", amount: 300, avatar: { kind: "transfer" }, tag: "Ahorrar", detailType: "ingreso", category: "Transferencia recibida", datetime: "Domingo, 24 diciembre 2023, 13:00 h.", counterparty: "Abuelos", hasHistory: false },
      { id: "f7", concept: "Compra - Farmacia Sant Cugat", date: "23 Dic, 19:20", group: "Semana pasada", amount: -18.75, avatar: { kind: "letter", letter: "F" }, detailType: "compra", category: "Compra en comercio", datetime: "Sábado, 23 diciembre 2023, 19:20 h.", location: { label: "Sant Cugat", query: "Farmacia Sant Cugat" }, hasHistory: false },
      { id: "f8", concept: "Repostaje - Repsol", date: "22 Dic, 08:30", group: "Semana pasada", amount: -70, avatar: { kind: "letter", letter: "R" }, detailType: "compra", category: "Compra en comercio", datetime: "Viernes, 22 diciembre 2023, 08:30 h.", location: { label: "Madrid", query: "Repsol estación de servicio Madrid" }, hasHistory: true },
      { id: "f9", concept: "Adeudo Recibo Endesa", date: "21 Dic, 08:00", group: "Semana pasada", amount: -96.3, avatar: { kind: "doc" }, detailType: "recibo", category: "Adeudo de recibo", datetime: "Jueves, 21 diciembre 2023, 08:00 h.", hasHistory: true },
      { id: "f10", concept: "Compra - Zara Spain Slu", date: "20 Dic, 18:45", group: "Semana pasada", amount: -41.15, avatar: { kind: "image", img: "zara" }, detailType: "compra", category: "Compra en comercio", datetime: "Miércoles, 20 diciembre 2023, 18:45 h.", location: { label: "Madrid", query: "Zara Madrid Gran Vía" }, hasHistory: true },
    ],
    upcoming: [
      { id: "fu1", concept: "Recibo Seguro hogar", date: "Previsto 17 Dic", group: "Próximos pagos", amount: -38.4, avatar: { kind: "doc" }, detailType: "recibo", category: "Recibo previsto", datetime: "Previsto: domingo, 17 diciembre 2023", hasHistory: false },
      { id: "fu2", concept: "Cuota gimnasio", date: "Previsto 21 Dic", group: "Próximos pagos", amount: -44, avatar: { kind: "doc" }, detailType: "recibo", category: "Recibo previsto", datetime: "Previsto: jueves, 21 diciembre 2023", hasHistory: true },
    ],
  },
};

// Orden FIJO del carrusel: posición 1 = Cuenta Sabadell, posición 2 = Cuenta familiar.
export const ACCOUNTS_ORDER: AccountId[] = ["sabadell", "familiar"];
export const ACCOUNTS_LIST: Account[] = ACCOUNTS_ORDER.map((id) => ACCOUNTS[id]);

// Busca un movimiento (incluye próximos) por id dentro de una cuenta.
export function findAccountMovement(accountId: AccountId, movementId: string): Movement | undefined {
  const a = ACCOUNTS[accountId];
  return [...a.movements, ...a.upcoming].find((m) => m.id === movementId);
}

// Importe formateado a la española: parte entera con separador de miles y
// parte decimal con coma. Trabaja sobre el valor absoluto.
export function moneyParts(value: number): { int: string; dec: string } {
  const fixed = Math.abs(value).toFixed(2);
  const [intPart, decPart] = fixed.split(".");
  return { int: Number(intPart).toLocaleString("es-ES"), dec: `,${decPart}` };
}
