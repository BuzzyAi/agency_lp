# Buzzy Finance — Brand & Design System

> Finance, organized.

This document is the source of truth for Buzzy's visual identity. If you're shipping UI, marketing material, a README header, or anything user-facing, this is the spec to follow.

---

## 1. Concept

Buzzy is built on the metaphor of the **beehive**: organized, productive, collective, and value-storing. Bees are nature's best argument that small, disciplined actions compound into something abundant — which is exactly what we want personal and company finance to feel like.

The brand is warm where most fintech is cold, but anchored in a serious charcoal so it never reads as toy-like. It's for individuals AND companies, so it has to scale from a side-hustle expense tracker to a CFO dashboard without losing its voice.

**Three words to keep in mind when designing anything:** *organized, productive, honest.*

---

## 2. Logo

### The mark

A flat honey-yellow hexagon (the honeycomb cell) containing an ascending zigzag line that ends in a solid dot.

The line reads three ways at once — a bee's flight path, a chart trending up, and the journey from raw transactions to a clear outcome. The dot is the "you got there" beat.

```svg
<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-label="Buzzy">
  <polygon points="80,12 149.28,52 149.28,132 80,172 10.72,132 10.72,52" fill="#F5B800"/>
  <path d="M 26 130 L 50 110 L 62 120 L 88 90 L 100 100 L 136 60"
        stroke="#1C1917" stroke-width="9" stroke-linecap="round"
        stroke-linejoin="round" fill="none"/>
  <circle cx="136" cy="60" r="9" fill="#1C1917"/>
</svg>
```

*Note: hexagon points above are for a 160px viewBox; scale proportionally for other sizes.*

### Lockup variations

| Variant | When to use |
|---|---|
| **Primary lockup** — icon + `buzzy` wordmark, horizontal | Headers, landing pages, marketing, README banners |
| **Icon mark only** | App icons, favicons, avatars, loading states, anywhere ≤ 48px |
| **Reversed** — same lockup on charcoal | Dark mode, video overlays, photo backgrounds |
| **Monochrome** — all charcoal or all white | Print, single-color contexts, embossing |

### Wordmark

- Always lowercase: `buzzy`, never `Buzzy` or `BUZZY` in the wordmark itself
- The double-z is a feature — never substitute or kern it apart
- In running prose, "Buzzy" with a capital B is correct (it's a proper noun)
- Letter-spacing: `-0.045em` at display sizes

### Clear space

Reserve clear space equal to **half the hexagon's height** around the entire logo. Nothing — text, image edges, UI chrome — enters that zone.

### Don'ts

- Don't recolor the hexagon to anything other than honey, charcoal, or cream
- Don't rotate the hexagon (it has a flat top — keep it that way)
- Don't add drop shadows, glows, or gradients to the mark
- Don't reflow the lockup vertically except where the icon stands alone
- Don't replace the zigzag line with stock chart imagery or literal bees

---

## 3. Color

The palette is deliberately compact. Five colors, each with a job. If you find yourself wanting a sixth, push the design instead.

| Token | Hex | Role |
|---|---|---|
| `--color-honey` | `#F5B800` | Primary brand, primary actions, hero surfaces, the mark |
| `--color-amber` | `#E8951F` | Hover/active states for honey, secondary accents, deeper warm surfaces |
| `--color-charcoal` | `#1C1917` | Body text, primary UI text, dark mode background, the mark's line |
| `--color-mint` | `#10B981` | Growth signals **only** — positive deltas, income, "under budget", portfolio gains |
| `--color-cream` | `#FAF6EC` | Default page background (warmer than white, less clinical) |

### Supporting neutrals

| Token | Hex | Role |
|---|---|---|
| `--color-text-secondary` | `#5C5346` | Secondary text on cream |
| `--color-text-tertiary` | `#8B7B5E` | Labels, eyebrows, metadata, monospace specs |
| `--color-border` | `#E5DCC6` | Dividers, card borders on cream |
| `--color-surface-elevated` | `#FFFFFF` | Cards and modals that need to rise above the cream page |

### Semantic — add when you need them

These aren't in the brand palette but you'll need them for status states:

| Token | Hex | Role |
|---|---|---|
| `--color-danger` | `#E5484D` | Overspend, errors, destructive actions |
| `--color-warning` | `#F2A60C` | Approaching budget limits (distinct from honey — slightly more orange) |
| `--color-info` | `#3B82F6` | Informational notices, links |

### CSS variable block

Drop this into your `:root`:

```css
:root {
  /* Brand */
  --color-honey: #F5B800;
  --color-amber: #E8951F;
  --color-charcoal: #1C1917;
  --color-mint: #10B981;
  --color-cream: #FAF6EC;

  /* Neutrals */
  --color-text-primary: #1C1917;
  --color-text-secondary: #5C5346;
  --color-text-tertiary: #8B7B5E;
  --color-border: #E5DCC6;
  --color-surface: #FAF6EC;
  --color-surface-elevated: #FFFFFF;

  /* Semantic */
  --color-success: #10B981;
  --color-danger: #E5484D;
  --color-warning: #F2A60C;
  --color-info: #3B82F6;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #FAF6EC;
    --color-text-secondary: #C8BFA8;
    --color-text-tertiary: #8B7B5E;
    --color-border: #2A2622;
    --color-surface: #1C1917;
    --color-surface-elevated: #26221E;
  }
}
```

### Usage rules

- **Honey is the brand, not the body.** It's for the mark, primary CTAs, key highlights — not large fills behind text.
- **Mint is reserved.** Use it for positive financial signals only. Never as a primary color, never as a "looks nice here" pick. This protects its meaning across the product.
- **Charcoal on cream is the default body treatment.** When in doubt, that's the answer.
- **Never put body text on honey.** Honey + charcoal works for short labels and CTAs only. For paragraphs, use cream surfaces.

---

## 4. Typography

### Fonts

- **Display:** [Geist](https://vercel.com/font) or [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — geometric, modern, slightly warm
- **Body:** [Inter](https://rsms.me/inter/) — neutral, highly legible at small sizes
- **Numbers in tables:** Use `font-variant-numeric: tabular-nums;` everywhere money is displayed. Aligned columns of numbers matter more in a finance app than in almost any other category.

### Scale

| Token | Size | Weight | Use |
|---|---|---|---|
| Display XL | 56px | 700 | Hero headings only |
| Display L | 36px | 700 | Page titles |
| Display M | 24px | 600 | Section headings |
| Heading | 18px | 500 | Card titles, subheadings |
| Body L | 16px | 400 | Default body |
| Body | 15px | 400 | Dense UI |
| Caption | 13px | 400 | Metadata, labels |
| Eyebrow | 11px | 500 | Uppercased, letterspaced category labels |

### Rules

- **Sentence case everywhere.** Never Title Case, never ALL CAPS — except eyebrows, which are uppercased with `letter-spacing: 0.18em`.
- **Two weights in body copy.** Regular (400) and medium (500). Avoid 600/700 in running text; reserve them for the display scale.
- **Tight tracking on display.** Display sizes use `letter-spacing: -0.025em`. Body stays at 0.
- **Line height: 1.5 for body, 1.1 for display.**

### Voice

Buzzy speaks like a sharp friend who happens to know accounting. Direct, warm, never finance-bro, never patronizing.

| ✅ Say | ❌ Don't say |
|---|---|
| "You spent R$ 847 on groceries this month." | "Your grocery expenditure totaled R$ 847.00 for the current period." |
| "Under budget — 9 days left." | "Successfully tracking within allocated parameters." |
| "Something broke. We're on it." | "An unexpected error has occurred. Please try again later." |
| "Add your first transaction." | "Initiate transaction entry." |

Money is shown with a non-breaking space between the symbol and the amount: `R$ 1.200,00`. Numbers use the locale-appropriate separators (BR: `.` thousands, `,` decimals).

---

## 5. Brand attributes

Four words to design and write against:

- **Organized** — every screen has one clear hierarchy. No dashboards that explode.
- **Productive** — the next action is always obvious. No dead ends.
- **Smart** — show insight, not just data. A number with no context is failure.
- **Welcoming** — the empty state and the first-run experience matter as much as the dashboard.

---

## 6. Application

### App icon

The icon adapts the brand mark to a rounded square (iOS/Android container):

- **Container:** Honey `#F5B800`, full bleed, corner radius = 22% of side length
- **Inside:** The same charcoal zigzag + dot, scaled to fit with ~16% padding on all sides
- **No wordmark inside the icon.** The mark stands alone.

### Surfaces

| Surface | Background | Border |
|---|---|---|
| Page | `--color-cream` | none |
| Card | `--color-surface-elevated` | `0.5px solid var(--color-border)` |
| Card radius | `12px` | — |
| Button radius | `8px` | — |

### Component patterns

**Primary button:** Honey background, charcoal text, `8px` radius, `12px 20px` padding, weight 500.

**Budget progress:** Light cream track (`#F1ECDC`), mint fill when under, warning when ≥85%, danger when over. Always show the number alongside — never the bar alone.

**Money cell (tables):** Right-aligned, tabular numerals, charcoal for neutral, mint for positive, danger for negative. Currency symbol left, amount right, single non-breaking space between.

**Empty states:** Use the honey hexagon mark at 40% opacity as a centered illustration. One sentence of copy, one action button. Never empty states with more than 30 words of copy.

### Iconography

Use **outline** icons throughout — [Lucide](https://lucide.dev) or [Tabler](https://tabler-icons.io) are both good fits with the geometric display font. Stroke width `1.5`, size `20px` default, `16px` for dense UI. Never mix outline and filled in the same surface.

### Motion

- **Easing:** `cubic-bezier(0.32, 0.72, 0, 1)` — a single curve for everything. It's slightly bouncy at the end, which matches the brand's warmth.
- **Duration:** `150ms` for hover/press, `250ms` for entrance, `400ms` for page transitions.
- **No bouncing the logo.** The hexagon is a stable, anchoring element. Don't animate it casually.

---

## 7. Localization

The product is built for Brazilian users first.

- **Default locale:** `pt-BR`
- **Currency:** `BRL`, formatted as `R$ 1.234,56`
- **Date format:** `DD/MM/AAAA`
- **English tagline:** "Finance, organized."
- **Portuguese tagline:** "Suas finanças, em ordem."

When designing screens, leave 30% headroom on labels — Portuguese is on average longer than English, and German users will eventually arrive.

---

## 8. Don'ts (one place to look)

- Don't add a sixth brand color
- Don't use mint for anything other than positive financial signals
- Don't put body text on honey backgrounds
- Don't recolor or rotate the mark
- Don't use gradients, drop shadows, or glows on brand assets
- Don't use Title Case or ALL CAPS in UI copy (eyebrows excepted)
- Don't mix outline and filled icons on the same surface
- Don't use pure white as a page background — cream is the brand

---

## 9. Files & assets

Suggested repo structure for design assets:

```
/design
  /logo
    buzzy-logo.svg              # primary lockup
    buzzy-mark.svg              # icon only
    
    buzzy-mark-reversed.svg     # for dark surfaces
    buzzy-mark-mono.svg         # single color
  /icon
    app-icon-1024.png
    favicon.ico
    favicon.svg
  /tokens
    colors.css                  # the variable block from §3
    typography.css
  DESIGN.md                     # this file
```

---

*v1.0 — initial brand system. Update this doc when something changes. The repo is the source of truth, not anyone's Figma file.*
