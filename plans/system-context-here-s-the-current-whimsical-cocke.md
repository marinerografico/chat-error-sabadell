# Plan: Prototipo base — Posición Global del Banco

## Context

El usuario quiere un prototipo base de la pantalla de inicio del banco ("Posición Global") para que varias personas puedan trabajar en diferentes flujos a la vez. El diseño ya está importado de Figma en `src/imports/Inicio/index.tsx` y expone el componente `Inicio` como default export. El objetivo es renderizarlo fielmente en la app, con tipografía correcta, centrado en desktop como un simulador de móvil.

---

## Estado actual

- `src/app/App.tsx` — vacío (solo `<div className="size-full flex items-center justify-center" />`)
- `src/styles/fonts.css` — vacío (1 línea)
- `src/styles/globals.css` — vacío (1 línea)
- `src/styles/theme.css` — tiene los tokens CSS del design system (colores, radios, tipografía base)
- `src/imports/Inicio/index.tsx` — 4596 líneas, export `default function Inicio()` con la pantalla completa del banco

### La pantalla Inicio incluye:
- **Header** — avatar, acciones rápidas (chat, notificaciones, savings hub)
- **Balance** — "Saldo en cuentas: 11.000,00 €" + ahorrado/invertido
- **Quick actions** — Enviar Bizum, Transferencia nacional, Sacar dinero, Límites de tarjeta
- **Pill de alerta** — tarjeta con operaciones restringidas
- **Sección "Tus productos"** con toggle y sub-secciones:
  - Cuentas (2 cuentas, booster promo)
  - Bizum
  - Tarjetas (Classic crédito + BS Debit, con notificación de límite)
  - Hipotecas (con simulador)
  - Ahorro e Inversión (Ahorro, Inversión, Jubilación)
  - Préstamos
  - Seguros
- **Bottom Nav** — Inicio (activo) | Operar (FAB azul) | Contratar

### Fuente usada en el diseño:
`font-['Libre_Franklin:Regular',sans-serif]`, `font-['Libre_Franklin:SemiBold',sans-serif]`, `font-['Libre_Franklin:Bold',sans-serif]`
→ Requiere cargar **Libre Franklin** desde Google Fonts.

---

## Implementación

### Paso 1 — `src/styles/fonts.css`
Añadir import de Libre Franklin (Regular 400, SemiBold 600, Bold 700) desde Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700&display=swap');
```

### Paso 2 — `src/app/App.tsx`
Importar `Inicio` desde `../imports/Inicio` y renderizarlo dentro de un contenedor que lo centre en desktop simulando la pantalla de móvil:

```tsx
import Inicio from "../imports/Inicio";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "24px 0" }}>
      <div style={{ width: 390, position: "relative" }}>
        <Inicio />
      </div>
    </div>
  );
}
```

El componente `Inicio` ya tiene su propio wrapper con `position: absolute`, `width: 390px`, `rounded-[16px]` y borde, así que el contenedor solo necesita establecer el ancho y centrar.

---

## Archivos a modificar

| Archivo | Cambio |
|---|---|
| `src/styles/fonts.css` | Añadir @import Google Fonts Libre Franklin |
| `src/app/App.tsx` | Importar y renderizar el componente Inicio centrado |

No se modifica ningún archivo de `src/imports/` — se usa el código importado tal cual.

---

## Verificación

1. La app debe mostrar la pantalla móvil del banco centrada sobre fondo gris
2. La tipografía Libre Franklin debe cargar correctamente (texto legible, no fallback sans-serif)
3. Scroll vertical debe funcionar para ver todas las secciones de productos
4. Los SVGs de tarjetas, iconos y logos deben renderizarse correctamente
5. Las imágenes (imagery de tarjetas y banners) deben mostrarse con `object-cover`
