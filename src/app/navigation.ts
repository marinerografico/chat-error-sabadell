import { createContext, useContext } from "react";

// Simple in-memory screen navigation shared across the imported screens.
export type Page = "inicio" | "ayuda" | "cuentas" | "tarjetas" | "detalle-movimiento" | "detalle-cuenta" | "contratar" | "contratar-producto";

// Which account is focused when opening the "cuentas" screen.
export type AccountId = "sabadell" | "familiar";

// Which card is focused when opening the "tarjetas" screen.
export type CardId = "credito" | "debito";

// Catálogo de productos contratables (página interior de "Contratar").
export type ProductId = "prestamos" | "tarjetas" | "cuentas" | "hipotecas" | "ahorro" | "seguros" | "autorenting";

export type NavOptions = { account?: AccountId; card?: CardId; movementId?: string; product?: ProductId };

export const NavigationContext = createContext<{
  navigate: (page: Page, options?: NavOptions) => void;
  goBack: () => void;
  openOperar: () => void;
  closeOperar: () => void;
}>({
  navigate: () => {},
  goBack: () => {},
  openOperar: () => {},
  closeOperar: () => {},
});

export function useNavigation() {
  return useContext(NavigationContext);
}
