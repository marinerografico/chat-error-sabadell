# Plan: Página de Cuentas (posición + movimientos)

## Contexto

La pantalla de Inicio muestra dos cuentas — **Cuenta Sabadell** (2.000,00 €, ••••4422) y **Cuenta familiar** (9.000,00 €, ••••4425) — pero al pulsarlas no ocurre nada. El usuario quiere que cada cuenta abra una página de "Cuentas" (posición + movimientos), reutilizando el diseño importado de Figma `095...PosicioCuentasXs`. Deben ser **dos páginas distintas** coherentes con los datos de Inicio (nombre, saldo, IBAN y movimientos propios de cada cuenta). Los movimientos serán inventados pero realistas (banca española media: Bizum del pádel, Mercadona, recibo Repsol, Caprabo, nómina…) con **saldos corridos coherentes** que terminan en el saldo real de cada cuenta.

Decisiones confirmadas con el usuario:
- **Estilo**: seguir el import de Figma (el paquete `@galatea-gamma/core` no está instalado y los CSS no tienen tokens; toda la app se construye con los valores del import). Coherente con Inicio y Centro de ayuda.
- **Tarjeta de cuenta**: carrusel deslizable con la cuenta pulsada primero y la otra a continuación (como Figma).
- **Interactividad**: máxima posible → pestañas Todos/Próximos funcionales, ojo de ocultar saldos funcional, y búsqueda funcional.

La página se recompone en flujo flex y scrollable (el import usa posicionamiento absoluto), igual que `src/app/components/centro-de-ayuda.tsx`. Aplica la regla de navegación del proyecto: pantalla estándar → **push/pop horizontal** (ya implementado en `App.tsx`).

## Cambios

### 1. Visibilidad de saldo global y compartida — `src/app/balance-visibility.tsx` (NUEVO)
El spec original del ojo dice "booleano global accesible desde toda la app". Hoy vive solo dentro de `imports/Inicio/index.tsx`. Lo extraigo a un módulo compartido:
- `BalanceVisibilityContext`, `BalanceVisibilityProvider` (con `useState`, en memoria, no persistido), `useBalanceVisibility()`.
- Mover aquí el componente `HideableAmount` (animación número↔"••••" con `motion/react`, ya existente en Inicio) para reutilizarlo en Inicio y Cuentas.

### 2. `src/imports/Inicio/index.tsx` (MODIFICAR)
- Sustituir el contexto/provider/`HideableAmount` locales por imports del módulo compartido (`@/app/balance-visibility`). Quitar el `<BalanceVisibilityContext.Provider>` del export por defecto (ahora lo provee App).
- Hacer **tappables** las dos filas de cuenta (`Account()` y `Account1()`, contenedor `Content12()`): envolver cada fila en un `<button onClick={() => navigate("cuentas", { account: "sabadell" | "familiar" })}>` siguiendo el patrón del icono de ayuda (ya usa `useNavigation`). Añadir `cursor-pointer` y `aria-label`.
- (Coherencia) Envolver los importes de las filas de cuenta (`AccountNumberAmount`/`AccountNumberAmount1`) en `HideableAmount` para que también respeten el ojo.

### 3. Navegación — `src/app/navigation.ts` (MODIFICAR)
- `Page = "inicio" | "ayuda" | "cuentas"`.
- `AccountId = "sabadell" | "familiar"`.
- `navigate: (page: Page, options?: { account?: AccountId }) => void`.

### 4. `src/app/App.tsx` (MODIFICAR)
- Envolver todo en `<BalanceVisibilityProvider>`.
- Estado `page` + `focusAccount`. `navigate` guarda ambos.
- Generalizar la pila: `isTop = page !== "inicio"` (tanto `ayuda` como `cuentas` se empujan sobre `inicio` con el mismo push horizontal + sombra; `inicio` hace parallax + scrim). z-index top=2 / inicio=1. Render: `inicio` → `<Inicio/>`; `ayuda` → `<CentroDeAyuda/>`; `cuentas` → `<Cuentas firstAccount={focusAccount} />`. (No hay transiciones top↔top: desde cuentas/ayuda solo se vuelve a inicio.)

### 5. Datos — `src/app/data/accounts.ts` (NUEVO)
Estructura por cuenta: `{ id, name, balance, ibanFull, ibanMasked, movements[] }`.
`Movement = { id, concept, date ("Martes 12 Dic"), group ("Esta semana" | "La semana pasada" | …), amount (negativo gasto / positivo ingreso), balanceAfter, icon (letra | logo png | svg círculo), tag?: "Ahorrar", upcoming?: boolean }`.
- **Saldo corrido**: el movimiento más reciente tiene `balanceAfter` = saldo de la cuenta (2.000,00 / 9.000,00); cada anterior se calcula encadenado para que cuadre.
- **Sabadell** (~10 mov.): Bizum a Carlos (pádel) −12,00; Compra Mercadona −63,45; Adeudo Recibo Repsol −58,90; Compra Caprabo −27,30; Bizum recibido de María +20,00; Nómina +1.450,00 (tag "Ahorrar"); Compra Amazon −34,99; Recibo Iberdrola −72,10; Netflix −13,99; Uber Eats −22,50. **Próximos**: Recibo Movistar −49,99 (previsto), Recibo Comunidad −85,00 (previsto).
- **Familiar** (~10 mov., gastos de familia): Compra Mercadona −112,40; Bizum a colegio/AMPA −45,00; Farmacia −18,75; Repostaje Repsol −70,00; Recibo Agbar (Aguas) −28,80; Decathlon −59,90; El Corte Inglés −134,20; Transferencia recibida +300,00; Recibo Endesa −96,30; Compra Caprabo −41,15. **Próximos**: Recibo seguro hogar −38,40 (previsto), Cuota gimnasio −44,00 (previsto).
- Logos disponibles para usar como avatar donde encaje (`imports/095.../*.png`: Uber Eats, Mercadona, Renfe, Agbar, ECI, merchant genérico) y círculos svg (`svg-dohei.tsx`); resto, avatar de inicial.

### 6. `src/app/components/cuentas.tsx` (NUEVO)
Recompone el diseño en flujo flex, scrollable, fiel al import (clases, `svgPaths` de `svg-04wofc3wsg.ts`, assets png). Props: `firstAccount: AccountId`. Secciones:
- **Cabecera fija**: flecha atrás (`navigate("inicio")`) + título "Cuentas" + icono **ojo** (toggle de `useBalanceVisibility`, con barra diagonal al ocultar, igual que `BalanceEyeButton` de Inicio) + icono chat (→ `navigate("ayuda")`).
- **Carrusel de tarjetas** (scroll-snap horizontal nativo, touch): ambas cuentas, la pulsada primero; cada tarjeta con nombre, saldo grande (`HideableAmount`), IBAN + icono copiar, "Ver detalle". **Dots** que se actualizan según `scrollLeft` (onScroll).
- **Acciones rápidas** (Enviar Bizum / Enviar dinero / Sacar dinero / Más opciones): placeholders visuales (botones con icono circular).
- **Pill de avisos** "Laura, tienes 3 avisos pendientes / Revisar avisos" (visual).
- **Pestañas Todos/Próximos** (estado `useState`): "Todos" lista movimientos normales agrupados por `group`; "Próximos" lista los `upcoming`.
- **"Esta semana" + búsqueda**: icono lupa que abre un input (`useState` abierto + query) y **filtra** la lista por `concept` (case-insensitive).
- **Lista de movimientos**: filas con avatar, concepto, fecha, importe (verde `#008626` ingresos / negro gastos), saldo corrido (`HideableAmount`), tag "Ahorrar" opcional; divisores.

Importes monetarios de la tarjeta y de los saldos corridos usan `HideableAmount` para respetar el ojo.

## Archivos
- NUEVO `src/app/balance-visibility.tsx`
- NUEVO `src/app/data/accounts.ts`
- NUEVO `src/app/components/cuentas.tsx`
- MODIFICAR `src/app/navigation.ts`, `src/app/App.tsx`, `src/imports/Inicio/index.tsx`

## Verificación
1. Parse-check con esbuild (vía `require.resolve('esbuild', { paths: [vite] })`) de los archivos nuevos/modificados.
2. Servidor de dev ya corriendo (no arrancar). En el preview:
   - Pulsar "Cuenta Sabadell" en Inicio → la página Cuentas entra con push horizontal, tarjeta Sabadell primero, saldo 2.000,00 €, IBAN ••••4422.
   - Pulsar "Cuenta familiar" → entra con tarjeta familiar primero, 9.000,00 €, IBAN ••••4425.
   - Deslizar el carrusel; los dots cambian.
   - Ojo: oculta/mostrar saldos (tarjeta + saldos corridos) con animación; el estado se mantiene al volver a Inicio (contexto global compartido).
   - Pestañas Todos/Próximos cambian la lista; búsqueda filtra por concepto.
   - Comprobar que los saldos corridos cuadran y terminan en el saldo de la cuenta.
   - Atrás vuelve a Inicio (pop horizontal con parallax/scrim).
