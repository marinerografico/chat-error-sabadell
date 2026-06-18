<!-- make-kit-guidelines -->
## Design System Setup — MANDATORY

This project depends on `@galatea-gamma/kit` packages. Before writing
any code:

1. Read guidelines/setup.md and guidelines/Guidelines.md by their exact
   path (e.g. node_modules/<scope>/<package>/guidelines/setup.md).
   This project uses pnpm, which symlinks packages — do NOT use
   `find`, `glob`, or `file_search` to discover files as they silently
   fail on symlinks. Instead use: reading files by exact path,
   `ls` (follows symlinks), `find -L` (`-L` follows symlinks), or `cat`.
2. Execute all setup instructions (install dependencies, config changes) against THIS project — not the package itself.
3. Do not skip, modify, or improvise any setup steps.
4. Read ALL other required .md files specified in guidelines/Guidelines.md.
5. Verify that all packages specified in setup.md appear in this project's package.json and that all required .md files have been read before proceeding.
<!-- /make-kit-guidelines -->

**Add your own guidelines here**

# Navigation transitions (MANDATORY)

Every screen-to-screen navigation MUST be animated. There are two patterns,
chosen by the type of destination:

## 1. Standard screens → horizontal push/pop (iOS stack)

This is the **default** for any normal full screen (e.g. Inicio → Centro de
ayuda). It is already implemented in `src/app/App.tsx`; new screens must plug
into the same `AnimatePresence` stack and reuse these rules — do not invent a
new transition per screen.

- The destination screen is **pushed on top of the stack** and slides in
  full-width from the **right**; on **back** it slides out to the right.
- The previous screen stays **underneath**, does a **parallax** (moves only
  ~25%, not the full width) and is covered by a **dim scrim** (black, ~0.28
  opacity) while it is behind. Reverses on back.
- The top screen carries a **left-edge drop shadow**
  (`-8px 0 24px rgba(0,0,0,0.18)`) for depth.
- Use `motion/react` with a fixed stack order (lower screens sit below higher
  ones via `z-index`), so the motion is identical whether pushing or popping.
- Timing: `duration: 0.32`, `ease: cubic-bezier(0.4, 0, 0.2, 1)`.

## 2. Full modal screens & bottom sheets (drawers) → vertical

Screens that are **full-screen modal specification flows** OR **bottom sheets /
drawers** do NOT use the horizontal push. They animate **vertically**:

- **Enter**: slide up from the **bottom** to their resting position.
- **Exit**: slide back **down** (reverse), off the bottom edge.
- Bottom sheets rest partway up the screen with a scrim behind the underlying
  content; full modal flows cover the whole screen. Same timing/easing as above.

When adding a new screen, decide which bucket it belongs to (standard vs.
modal/drawer) and wire the matching transition — this requirement is permanent
and does not need to be restated per screen.

## 3. Tab switches (bottom-nav tabs) → cross-fade

Switching between **bottom-nav tabs** (currently Inicio ↔ Contratar) is NOT a
push/pop. There is **no horizontal movement**: the top-most screen cross-fades
its opacity while the **bottom nav bar stays in place** (only its active item
crossfades). Implemented in `App.tsx` via `isTabSwitch(from, to)` over
`TAB_PAGES`; only the upper-z screen animates opacity so the frame background
never bleeds through. No dim scrim, no left-edge shadow during a tab fade.

If more bottom-nav tabs are added later, add their pages to `TAB_PAGES` so
tab-to-tab navigation fades instead of sliding.

# Bottom navigation bar (MANDATORY)

The bottom navigation bar (Inicio · Operar · Contratar) is rendered from a
**single shared component** `src/app/components/bottom-nav.tsx`, mounted **once**
from `src/app/App.tsx` — never inside individual page components. Pages must NOT
render their own copy.

- **App decides visibility** via the `NAV_ACTIVE` map exported from
  `bottom-nav.tsx`. A page shows the bar **only if it has an entry** in that map.
- **Whitelist (pages that show the bar):** `inicio`, `contratar`, `cuentas`,
  `tarjetas`. Every other screen (detalle de movimiento, detalle de cuenta,
  interiores de Contratar `contratar-producto`, Centro de ayuda, el modal
  `Operar`, etc.) shows **no bar**.
- **Active item per page:** `inicio → "inicio"`, `contratar → "contratar"`,
  `cuentas → "none"`, `tarjetas → "none"` (no item highlighted on the account /
  card positions, since they are not tabs in the bar).
- The bar lives **inside each page's animated `motion.div`** in App, so it
  travels with the page during push/pop transitions and disappears under the
  screen pushed on top.

When adding a new screen: if it should show the bar, add it to `NAV_ACTIVE` with
the correct active value; otherwise add nothing. Do not re-implement the bar.

<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->
