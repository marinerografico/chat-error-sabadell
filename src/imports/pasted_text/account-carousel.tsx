Déjame mirar el Figma y el skeleton del proyecto a la vez.

Ya tengo todos los datos. Aquí están las instrucciones completas:

---

```
## INSTRUCCIONES: Carrusel de cuentas — Pantalla "Cuentas"

Tienes que construir el bloque superior de la pantalla de cuentas (antes de la lista de movimientos). Céntrate EXCLUSIVAMENTE en el visual y la interacción del carrusel. Ignora los valores de los importes.

---

### DATOS DE LAS CUENTAS (solo 2 elementos)

```ts
const ACCOUNTS = [
  {
    id: "familiar",
    name: "Cuenta familiar",
    iban: "ES11 0081 0000 0000 0000 4425",
    balance: { integers: "9.000", decimals: ",00" },
  },
  {
    id: "sabadell",
    name: "Cuenta Online Sabadell",
    iban: "ES11 0081 0000 0000 0000 4422",
    balance: { integers: "2.000", decimals: ",00" },
  },
];
```

---

### BLOCK TITLE (encima del carrusel)

```
Cuentas (2)                              [Ver todas →]
```
- "Cuentas (2)": font Libre Franklin, SemiBold 600, 18px, lineHeight 27px, color #000000
- "Ver todas": font Libre Franklin, Regular 400, 14px, lineHeight 20px, color #0163E8
- Layout: row, justify space-between, padding horizontal 16px, padding top 16px

---

### CARD — Product Summary Block

Cada tarjeta tiene estas propiedades exactas (extraídas del Figma):

**Contenedor:**
- width: 310px, height: 161px
- background: #FFFFFF
- border: 1px solid #E0E0E0
- border-radius: 16px
- box-shadow: 0px 1px 4px -1px rgba(0,0,0,0.08), 0px 2px 8px -1px rgba(0,0,0,0.08)

**Layout interno:** columna, fill width, hug height, dividido en 3 zonas verticales:

**Zona 1 — Content** (padding: 16px 16px 4px, gap 8px vertical):
- `account name`: Libre Franklin SemiBold 600, 18px, lineHeight 27px, #000000
- `Amount`: row, align baseline
  - integers: Libre Franklin Regular 400, 24px, lineHeight 32px, #000000
  - decimals: Libre Franklin Regular 400, 18px, lineHeight 28px, #000000
  - currency "€": Libre Franklin Regular 400, 18px, lineHeight 28px, #000000, padding-left 4px

**Zona 2 — IBAN** (padding: 0px 8px, row, align center):
- Contenedor del IBAN: row, gap 4px, padding 8px, height 32px, border-radius 4px
- texto IBAN: Libre Franklin Regular 400, 14px, lineHeight 20px, color #646464
- icono Copy: 16×16px a la derecha del IBAN, color #000000

**Zona 3 — Link** (padding align-left):
- "Ver detalle": Libre Franklin Regular 400, 14px, lineHeight 20px, color #0163E8

---

### CARRUSEL — Contenedor y comportamiento scroll

**Slider content:**
- Contenedor horizontal con overflow-x scroll, scroll snapping
- padding: 0px 16px 16px (bottom 16px, lateral 16px)
- gap entre cards: 8px
- El primer card tiene un offset izquierdo de 24px (padding-left del slot: 0px 0px 0px 24px) para mostrar el peek del segundo card saliendo por la derecha

**Snap:**
- scroll-snap-type: x mandatory
- cada card: scroll-snap-align: start
- sin scrollbar visible (scrollbar-width: none)

**Peek visual:** la segunda tarjeta asoma parcialmente por la derecha (~40-50px), sugiriendo que hay más contenido deslizable.

---

### CONTROLES (debajo del carrusel)

**Layout:** row, justify space-between, align center, padding 0px 0px 16px 16px

**Dots (lado izquierdo):**
- row, gap 8px, align center
- Dot activo: 12×8px, border-radius 999px (píldora), color #006DFF
- Dot inactivo: 8×8px círculo, color #919191
- Al cambiar de slide, el dot activo se mueve con transición CSS (width de 12→8 y 8→12, color #919191 → #006DFF)
- Con 2 cuentas: solo 2 dots + el "+" (el "+" es un pequeño icono gris #919191 de 8px que indica que hay más cuentas disponibles para añadir)

**Arrows (lado derecho, posición absoluta a x: 298):**
- row, gap 12px, padding 0px 16px 0px 0px
- Botón izquierda: 32×32px círculo, background #FFFFFF, border 1px solid #9ECCFF, flecha color #9ECCFF (estado disabled cuando estás en el primer slide)
- Botón derecha: 32×32px círculo, background #FFFFFF, border 1px solid #006DFF, flecha color #006DFF (estado active)
- Cuando cambias de slide, los estados se invierten: izquierda activa (#006DFF), derecha disabled (#9ECCFF)

---

### INTERACCIÓN COMPLETA

**Disparadores de cambio de slide:**
1. Swipe horizontal sobre las cards (touch/mouse drag)
2. Click en flecha derecha → avanza al siguiente slide
3. Click en flecha izquierda → retrocede al slide anterior
4. Click en dot → salta al slide correspondiente

**Estado activo:**
```ts
const [activeIndex, setActiveIndex] = useState(0); // 0 = primera cuenta, 1 = segunda
```

**Al cambiar de slide:**
1. El carrusel hace scroll suave (smooth) a la card correspondiente
2. Los dots actualizan: el dot del nuevo índice se convierte en píldora azul, el anterior en círculo gris
3. Las flechas actualizan su estado enabled/disabled
4. La lista de movimientos de abajo muestra un skeleton de carga (ver sección Skeleton)

---

### SKELETON DE CARGA — al cambiar de cuenta

Cuando `activeIndex` cambia, durante 800ms se muestran skeletons en lugar de los movimientos reales.

**Componente Skeleton del proyecto** (ya existe en `src/components/ui/skeleton.tsx`):
```tsx
function Skeleton({ className, ...props }) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}
```
- `animate-pulse`: opacidad oscila entre 100% y 40% (Tailwind built-in)
- `bg-muted`: color de fondo gris claro (~#F0F0F0 o la variable CSS --muted del proyecto)
- `rounded-md`: border-radius 6px

**Layout del skeleton de movimientos (3 filas):**
```
┌──────────────────────────────────────┐
│ [○ 40px] [████████ 120px]  [█████ 60px] │  ← fila 1
│          [████ 80px]                    │  ← subtítulo
├──────────────────────────────────────┤
│ [○ 40px] [████████ 100px]  [█████ 60px] │  ← fila 2
│          [████ 90px]                    │
├──────────────────────────────────────┤
│ [○ 40px] [████████ 140px]  [█████ 60px] │  ← fila 3
│          [████ 60px]                    │
└──────────────────────────────────────┘
```

Cada fila de skeleton: padding 12px 16px, gap 12px
- Círculo: w-10 h-10 rounded-full (icono del comercio)
- Texto izquierda: dos líneas, w-[120px] h-4 y w-[80px] h-3
- Importe derecha: w-[60px] h-4

**Código de lógica:**
```tsx
const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

const handleSlideChange = (newIndex: number) => {
  setActiveIndex(newIndex);
  setIsLoadingTransactions(true);
  setTimeout(() => setIsLoadingTransactions(false), 800);
};
```

---

### FONDO DE LA PANTALLA
- Background general: #FAFAFA
- El header (Status Bar + title "Cuentas") tiene fondo #FFFFFF o transparente con borde inferior #E0E0E0
- La zona del carrusel: fondo #FAFAFA
- La zona de movimientos: fondo #FFFFFF

---

### LO QUE NO DEBES CAMBIAR
- Los valores de los importes (son datos del estado global de la app)
- El header con flecha atrás + ojo + chat
- La sección de quick actions (Enviar Bizum, Enviar dinero, Sacar dinero, Más opciones)
- El bloque de avisos ("Laura, tienes 3 avisos pendientes")
- Las tabs "Todos" / "Próximos"
```