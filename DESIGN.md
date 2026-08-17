> **Scope: this is the web chapter.** `DESIGN.md` is the captured *website* surface —
> page bands, the 1440px container, nav and dropdown behaviour, responsive strategy. It is
> not the whole brand. For slides, social sujets and documents, read [`media/`](media/)
> and use the formats in [`tokens/canvas.css`](tokens/canvas.css). The parts of this file
> that are medium-independent — the three faces, the type roles, the hairline language,
> ghost-pill inversion, the glass recipe — apply everywhere; the layout numbers do not.
>
> **Colour in this file is superseded.** The palette is now defined by
> `weXelerate-brand-colour-system.md` (teal `#319b8e` brand, deep navy `#102030` accent,
> lime `#dcff00` as a rare spark and as the text-selection highlight), which is
> authoritative over everything here. Everything else — type, spacing, hairlines, ghost
> pills, bands — still holds.
>
> **Two things below have changed since the original capture:**
> 1. The accent navy is `#102030`. The old `#213959` is retired and must not reappear.
> 2. **Boxes are liquid glass, not flat plates** — same material as the nav bar. The
>    "flat by conviction" elevation model is superseded by *Elevation* and the
>    `glass-panel` component below.

---
version: alpha
name: weXelerate
description: A monochrome editorial canvas for weXelerate, an ecosystem
  for innovation in Austria.
  Pure white pages hold near-black Sora headlines with tight negative
  tracking, separated into calm horizontal bands by 1px hairline borders
  rather than shadows. Color is used with extreme restraint — one electric
  lime signal bar (#dcff00) on program cards is the only chromatic moment.
  Everything interactive is a ghost pill that inverts to solid black on
  hover; depth comes from tonal grey surfaces and photography under black
  gradient overlays, never from elevation.
colors:
  primary: "#000000"
  ink: "#111111"
  body: "#222222"
  muted: "#777777"
  faint: "#aaaaaa"
  accent: "#dcff00"
  link: "#102030"
  canvas: "#ffffff"
  surface-card: "#f7f7f7"
  surface-mid: "#e8e8e8"
  hairline: "#ebebeb"
  dark: "#111111"
  dark-deep: "#0a0a0a"
  dark-elevated: "#2a2a2a"
  on-dark: "#ffffff"
  on-dark-muted: "#aaaaaa"
  rating-gold: "#FBBC04"
  selection: "#dcff00"
  selection-ink: "#0e0e0e"
glass:
  fill: "linear-gradient(180deg, rgba(255,255,255,.52), rgba(255,255,255,.34))"
  fill-dense: "linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.78))"
  fill-dark: "linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.05))"
  blur: "blur(30px) saturate(200%) brightness(1.14) contrast(.96)"
  blur-dense: "blur(34px) saturate(200%) brightness(1.12) contrast(.96)"
  blur-dark: "blur(30px) saturate(180%) brightness(1.06)"
  rim: "linear-gradient(140deg, rgba(255,255,255,.95), rgba(255,255,255,.35) 30%, rgba(255,255,255,.08) 52%, rgba(255,255,255,.7))"
  rim-dark: "linear-gradient(140deg, rgba(255,255,255,.34), rgba(255,255,255,.10) 40%, rgba(255,255,255,.04) 60%, rgba(255,255,255,.22))"
  glint: "linear-gradient(115deg, rgba(255,255,255,.42) 0%, rgba(255,255,255,0) 34%, rgba(255,255,255,0) 64%, rgba(255,255,255,.22) 100%)"
  shadow: "0 1px 1px rgba(255,255,255,.55) inset, 0 -1px 1px rgba(14,14,14,.06) inset, 0 0 0 1px rgba(14,14,14,.045), 0 16px 38px -20px rgba(14,14,14,.26), 0 4px 12px -6px rgba(14,14,14,.07)"
typography:
  display-lg:
    fontFamily: "'Sora', sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -1.5px
  display-md:
    fontFamily: "'Sora', sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1px
  heading-md:
    fontFamily: "'Sora', sans-serif"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
  heading-sm:
    fontFamily: "'Sora', sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: "'Barlow', sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-md:
    fontFamily: "'Barlow', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "'Barlow', sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  button:
    fontFamily: "'Sora', sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  label-sm:
    fontFamily: "'Sora', sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.03em
  eyebrow:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.1em
rounded:
  none: 0px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 14px
  glass: 18px
  pill: 999px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  card-gap: 12px
  base: 16px
  lg: 24px
  xl: 32px
  page-x: 48px
  section: 80px
  container: 1440px
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 11px 26px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas}"
  button-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 20px
  button-on-dark-hover:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.primary}"
  glass-panel:
    background: "{glass.fill-dense}"
    backdropFilter: "{glass.blur-dense}"
    textColor: "{colors.ink}"
    rounded: "{rounded.glass}"
    boxShadow: "{glass.shadow}"
    rim: "{glass.rim}"
    glint: "{glass.glint}"
    fallbackBackground: "{colors.canvas}"
    fallbackBorder: "1px solid {colors.surface-mid}"
  glass-panel-dark:
    background: "{glass.fill-dark}"
    backdropFilter: "{glass.blur-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.glass}"
    rim: "{glass.rim-dark}"
    fallbackBackground: "{colors.dark-elevated}"
  card:
    background: "{glass.fill-dense}"
    backdropFilter: "{glass.blur-dense}"
    textColor: "{colors.ink}"
    rounded: "{rounded.glass}"
    padding: 28px 24px 24px
    boxShadow: "{glass.shadow}"
    fallbackBackground: "{colors.surface-card}"
  card-hover:
    background: "{glass.fill}"
    boxShadow: "{glass.shadow}"
    fallbackBackground: "{colors.surface-mid}"
  card-dark:
    background: "{glass.fill-dark}"
    backdropFilter: "{glass.blur-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.glass}"
    padding: 40px
    fallbackBackground: "{colors.dark}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 7px 14px
  eyebrow-label:
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
  input-dark:
    backgroundColor: "{colors.dark-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 9px 12px
---

# weXelerate — DESIGN.md

## Overview

weXelerate reads like an institution that builds technology: an ecosystem for innovation in Austria, connecting corporates, startups, and applied programs in AI and quantum. The visual voice is monochrome editorial minimalism — nearly everything is black ink on a pure white canvas {colors.canvas}, and the page is composed as a sequence of calm horizontal bands divided by 1px hairlines {colors.hairline} instead of shadows or color blocks.

Sora carries the brand's voice: every headline is bold (700) with tight negative tracking, sized fluidly with clamp() so it always feels large but never breaks. Barlow does the quiet work of body copy, and JetBrains Mono supplies a technical detail layer — tiny uppercase eyebrow labels that open every section like annotations in an engineering drawing.

Color does almost nothing, on purpose. The single voltage in the system is an electric lime {colors.accent} (#dcff00) that appears as a 28×2px signal bar at the top of program cards and as the text-selection highlight — never as a fill, a button, or text. Interaction emphasis comes instead from inversion: ghost pill buttons with 1px black borders that flood to solid black with white text on hover.

Depth is material, not elevation. Boxes are liquid glass — translucent slabs that blur and saturate whatever scrolls beneath them, edged with a refracted rim and a faint diagonal glint. The nav bar established the material and every box now shares it, so the page reads as one lens system floating over the editorial bands rather than a set of separately-styled plates. The bands themselves stay flat, divided by hairlines; tonal steps (white → dark footer) and photography under black gradient overlays supply the rest.

**Key Characteristics:**

- Monochrome-first: black, white, and greys carry 99% of the UI; {colors.accent} appears only as a thin accent bar and as the selection highlight, and must stay rare to stay powerful.
- Ghost-pill interaction language: no filled buttons at rest — 1px-bordered transparent pills that invert to solid {colors.primary} on hover.
- Glass boxes, flat bands: sections still separate via 1px {colors.hairline} borders, but every box — nav bar, panel, dropdown, card — is one liquid-glass material with a refracted rim and a single shared shadow token.
- Lime selection: dragging over text highlights it {colors.selection} with black ink, never the browser's default blue.
- Three typefaces, three jobs: Sora 700 for all headlines and UI labels, Barlow 400 for all body copy, JetBrains Mono 11px uppercase for eyebrows and metadata.
- Editorial band layout: a 1440px container with 48px gutters, 80px section padding, and 12px gaps between cards.

## Colors

### Brand & Accent

- **Ink Black** ({colors.primary} — #000000): The brand color. Headlines, button borders, hover fills, and the stats-bar outline. Black *is* weXelerate; softened to {colors.ink} (#111111) for large display text.
- **Electric Lime** ({colors.accent} — #dcff00): The only chromatic accent. Used as a 28×2px bar at the top of program cards, and as the text-selection highlight. Never used for text, buttons, or any large area.
- **Deep Navy** ({colors.link} — #102030): Reserved for inline text links in running copy, dark section panels, and accents on white. 16.5:1 on the canvas. Replaces the retired `#213959` — that value is dead and must not appear in any file.

### Selection

- **Selection** ({colors.selection} — #dcff00 plate, {colors.selection-ink} — #0e0e0e ink): Text dragged over with the mouse highlights in lime with black ink, never the browser's default blue and never teal. `::selection` and `::-moz-selection` both. This is the one sanctioned lime background — it is transient and user-invoked, so it does not spend the page's one lime spark. Keep `:focus-visible` on teal so the keyboard ring stays distinguishable from the mouse highlight.

### Surface

- **Canvas** ({colors.canvas} — #ffffff): The default page floor. Pure white, high-glare, editorial.
- **Glass** ({glass.fill} / {glass.fill-dense}): The material every box is made of — a translucent white slab over the canvas, blurred and saturated. This is the primary surface now; the flat plates below are its fallback, not its default. See *Elevation*.
- **Surface Card** ({colors.surface-card} — #f7f7f7): The opaque fallback plate where `backdrop-filter` is unsupported, and the alternating section tint (testimonials). A warm grey half-step below the canvas.
- **Surface Mid** ({colors.surface-mid} — #e8e8e8): The fallback border and the deeper grey card variant used to differentiate siblings in a card grid.
- **Dark** ({colors.dark} — #111111): The footer world and the "dark" feature-card variant. Its bottom bar sits on {colors.dark-deep} (#0a0a0a), with {colors.dark-elevated} (#2a2a2a) for icon tiles, inputs, and dark-glass fallbacks.

### Hairlines

- **Hairline** ({colors.hairline} — #ebebeb): 1px borders that divide sections and frame the sticky nav. Card and dropdown borders use the near-identical #e8e8e8; on dark surfaces hairlines are #2a2a2a–#333.

### Text

- **Ink** ({colors.ink} — #111111): Headlines and card titles.
- **Body** ({colors.body} — #222222): Section subtitles and supporting copy; steps to #333 for secondary passages.
- **Muted** ({colors.muted} — #777777): Eyebrow labels, captions, placeholders.
- **Faint** ({colors.faint} — #aaaaaa): Metadata and footer link resting state — never body copy.
- **On Dark** ({colors.on-dark} — #ffffff / {colors.on-dark-muted} — #aaaaaa): Text on the footer and photographic cards; overlay body text may drop to rgba(255,255,255,0.78).

### Semantic

- **Rating Gold** ({colors.rating-gold} — #FBBC04): Google review stars only. A third-party color, not a brand color; introduce no other hues.

## Typography

Primary families: **Sora** (headlines, UI), **Barlow** (body), **JetBrains Mono** (technical labels) — all loaded from Google Fonts.

| Token | Family | Size | Weight | Line Height | Tracking | Role |
|---|---|---|---|---|---|---|
| `display-lg` | Sora | 48px (clamp 28–48) | 700 | 1.08 | -1.5px | Hero headline |
| `display-md` | Sora | 40px (clamp 26–40) | 700 | 1.1 | -1px | Section headlines |
| `heading-md` | Sora | 22px | 700 | 1.2 | -0.5px | Sub-section titles |
| `heading-sm` | Sora | 17px | 700 | 1.2 | 0 | Card titles (17–18px) |
| `body-lg` | Barlow | 18px | 400 | 1.6 | 0 | Section subtitles (18–19px) |
| `body-md` | Barlow | 16px | 400 | 1.5 | 0 | Default body |
| `body-sm` | Barlow | 14px | 400 | 1.55 | 0 | Card descriptions, footer links |
| `button` | Sora | 13px | 600 | 1 | 0 | Buttons, nav links |
| `label-sm` | Sora | 12px | 600 | 1.3 | 0.03em | Card text-links, small UI labels |
| `eyebrow` | JetBrains Mono | 11px | 400 | 1.4 | 0.1em | Uppercase section eyebrows, tags, legal links |

### Principles

Display sizes are fluid — `clamp(28px, 3.5vw, 48px)` for the hero, `clamp(26px, 3vw, 40px)` for sections — so headlines always feel confident without media queries. Negative tracking tightens as size grows because large Sora needs compression to read as engineered rather than airy. Sora never sets body copy and Barlow never sets a headline; the mono face is always uppercase, always small, always muted grey. Never combine more than two weights of one family on a screen.

### Note on Font Substitutes

Sora, Barlow, and JetBrains Mono are all open-source (Google Fonts). If unavailable: Sora → Manrope or Poppins (600/700); Barlow → Inter or IBM Plex Sans; JetBrains Mono → IBM Plex Mono or Roboto Mono.

## Layout

Content lives in a **{spacing.container} (1440px) max-width container** with {spacing.page-x} (48px) horizontal gutters. Sections stack as full-width bands with {spacing.section} (80px) vertical padding (64px for quieter interstitials), each closed by a 1px {colors.hairline} rule — the page reads as a stack of clearly bounded editorial plates.

- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 px inside components; 40–56px between a section's intro and its content; 24–40px internal card padding.
- **Grids:** CSS grid with tight {spacing.card-gap} (12px) gaps. Programs run 5 equal columns; feature and news cards run 2 columns; the footer uses a 2.2fr / 1fr / 1fr / 1fr / 1.6fr split.
- **Navigation:** 60px sticky white bar with a bottom hairline; a grey pill slider glides behind the hovered item.
- **Hero:** Split layout — a fixed 380px text column left, an expanding image accordion (520px tall) right, 72px gap.
- **Whitespace philosophy:** density lives inside cards; the space between bands stays generous so the monochrome palette never feels heavy.

## Elevation

**Sections stay flat; boxes are glass.** The page is still a stack of hairline-divided
editorial bands with no shadows between them — but anything that reads as a *box* sitting
on top of that stack (nav bar, mega panel, dropdown, card, modal, stat plate, form well) is
a liquid-glass slab, the same material throughout. There is one material and it is used
consistently; glass is not an emphasis level you turn up per component.

Hierarchy comes from four devices, in order of preference:

1. **Hairline borders** — 1px {colors.hairline} between sections. Still the primary divider,
   and glass does not replace it: hairlines separate *bands*, glass builds *boxes*.
2. **Glass slabs** — a translucent, blurred, saturated plate for every box. The recipe is
   fixed (see below); what varies is only fill density.
3. **Tonal surfaces** — {colors.canvas} → {colors.dark} still signal a mood shift; the
   footer remains a full tonal inversion, and glass on it switches to the dark variant.
4. **Photographic depth** — full-bleed images under black gradient overlays, e.g.
   `linear-gradient(to top, rgba(0,0,0,0.82), transparent)`, keeping white text legible.
   Glass over photography is the case the brightness boost exists for.

### The slab recipe

Four layers, always in this order. Skipping the rim or the glint gives a frosted rectangle,
not glass — the refracted edge is what makes it read as a lens.

1. **Fill** — `{glass.fill}` for chrome slabs (nav bar, chips, badges);
   `{glass.fill-dense}` for reading surfaces (mega panels, dropdowns, content cards).
   Thin milk, not paint: most of the read comes from the backdrop.
2. **Backdrop** — `backdrop-filter: {glass.blur}` (or `{glass.blur-dense}`), with the
   `-webkit-` prefix alongside it. The `brightness`/`contrast` boost is what keeps
   {colors.ink} labels legible over a dark photo; do not drop it.
3. **Rim** — a `::before` at `inset:0`, `padding:1px`, `border-radius:inherit`, painted
   `{glass.rim}` and masked with `mask-composite: exclude` so only the 1px edge shows.
   Brightest top-left, fading around the slab. The element's own `border` stays
   `1px solid transparent`; the rim is the border.
4. **Glint** — a `::after` at `z-index:-1` painted `{glass.glint}`, a faint diagonal sheen.

Shadow: glass slabs carry `{glass.shadow}` — two inset edges (top specular, bottom shade),
a 1px hairline definition ring, and two soft ambient drops. This is one token; do not
author per-component shadow values.

Radius: `{rounded.glass}` (18px) for slabs and cards, `{rounded.xl}` (14px) for small
dropdowns and chips.

### Fallbacks (required)

Glass is progressive enhancement. Every glass surface ships an opaque fallback, and layout
never depends on the blur:

```css
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass { background: var(--canvas); border-color: var(--mid); }
  .glass::before, .glass::after { display: none; }
  .glass { box-shadow: 0 12px 28px -14px rgba(0,0,0,.20), 0 4px 10px -4px rgba(0,0,0,.07); }
}
@media (prefers-reduced-transparency: reduce) { /* same opaque treatment */ }
```

Dark bands use `{glass.fill-dark}` + `{glass.blur-dark}` + `{glass.rim-dark}`, falling back
to {colors.dark-elevated}. Never tint glass with teal, navy, or lime — a glass box over a
teal band already reads teal.

## Components

**`button-primary`** — The signature ghost pill CTA. Background transparent, 1px solid `{colors.primary}` border, text `{colors.primary}`, type `{typography.button}`, padding 11px × 26px, rounded `{rounded.pill}`. Hover inverts: background `{colors.primary}`, text `{colors.canvas}`, 0.2s transition. There is no filled button at rest — the inversion is the emphasis.

**`button-on-dark`** — The same ghost pill on dark surfaces. Transparent background, 1px #444 border, text `{colors.on-dark-muted}` (#ccc in the newsletter variant), rounded `{rounded.pill}`. Hover: background `{colors.on-dark}`, text `{colors.primary}`.

**`glass-panel`** — The base box. Not a component you place directly; it is the material every box below inherits. Background `{glass.fill-dense}`, `backdrop-filter: {glass.blur-dense}`, rounded `{rounded.glass}`, `border: 1px solid transparent` with the real rim drawn by `::before` (`{glass.rim}`), glint on `::after` (`{glass.glint}`), shadow `{glass.shadow}`. Text `{colors.ink}`. Fallback: opaque `{colors.canvas}` plate, `{colors.surface-mid}` border, pseudo-elements off. The nav bar is the reference implementation — copy the slab from it, then change only the fill density and radius.

**`glass-panel-dark`** — The same slab on a dark band or over the navy panel. Background `{glass.fill-dark}`, `backdrop-filter: {glass.blur-dark}`, rim `{glass.rim-dark}`, text `{colors.on-dark}`. Fallback `{colors.dark-elevated}`. Ink on glass never changes: black on light glass, white on dark glass.

**`card`** — The default content card, a `glass-panel` at content scale. Background `{glass.fill-dense}`, `backdrop-filter: {glass.blur-dense}`, text `{colors.ink}`, rounded `{rounded.glass}`, padding 28px 24px 24px, rim + glint + `{glass.shadow}`. Hover thins the fill toward `{glass.fill}` so more backdrop reads through — the card gets *more* transparent on hover, it does not gain a grey tint. Fallback: `{colors.surface-card}` plate, `#f0f0f0` on hover, #ddd border. Program cards still open with a 28×2px `{colors.accent}` bar, then title `{typography.heading-sm}`, description `{typography.body-sm}` in #333, and a `{typography.label-sm}` text link.

**`card-dark`** — The inverted feature card, a `glass-panel-dark`. Background `{glass.fill-dark}` over the dark band, title `{colors.on-dark}`, body `{colors.on-dark-muted}`, icon tile `{colors.dark-elevated}`, rounded `{rounded.glass}`, padding 40px. Fallback `{colors.dark}`. Photographic variants keep the cover image and bottom-anchored black gradient with a white text stack (eyebrow tag → title → description → ghost pill CTA) — over a photo the gradient carries legibility, so skip the blur there rather than stacking both.

**`nav-link`** — Sticky-nav item. Text #333 at rest, `{typography.button}`, padding 7px × 14px, rounded `{rounded.pill}`. Hover darkens text to `{colors.primary}` and fills `rgba(14,14,14,.06)` — an ink wash, so it reads on glass regardless of what is scrolling underneath. Dropdown and mega panels are `glass-panel` at `{rounded.xl}` (14px) / `{rounded.glass}` (18px), 8px padding, rows with 36px icon tiles; row hover `#f4f4f4`.

**`eyebrow-label`** — Section opener. `{typography.eyebrow}` uppercase in `{colors.muted}`, preceded by a 28×2px #ccc dash. Every section begins with one; on photography it renders rgba(255,255,255,0.65).

**`input-dark`** — Newsletter input in the footer. Background `{colors.dark-elevated}` (#1a1a1a in source), 1px #333 border, text `{colors.on-dark}`, placeholder #777, rounded `{rounded.sm}`, padding 9px × 12px; focus border #555. Light-context inputs mirror this: white plate, 1px #e0e0e0 border, rounded `{rounded.sm}`–`{rounded.md}`.

**`card-hover`** — Documented as its own variant entry: the fill thins from `{glass.fill-dense}` to `{glass.fill}` over 0.2s, letting more backdrop through. Fallback tint `#f0f0f0` with a #ddd border. Transition `background` and `box-shadow` only — never animate `backdrop-filter`, which repaints the whole blur region every frame.

**`button-primary-hover`** / **`button-on-dark-hover`** — Inversion states described above, kept as separate token entries.

## Iconography

Icons come from **Streamline — Ultimate, Light** style. This is the canonical
icon set for weXelerate; do not mix in icons from other libraries or other
Streamline styles (Bold, Regular, Duo, etc.). The Light weight's thin, even
stroke matches the system's hairline language and 1.1px inline-SVG detail layer.

- **Set:** Streamline Ultimate, **Light** variant only — one library, one weight,
  for visual consistency across every page.
- **Color:** Monochrome, inheriting the surrounding text color (`currentColor`).
  Icons are ink on light surfaces (`{colors.ink}`) and `{colors.on-dark}` on the
  footer and photographic cards. Never tint an icon with `{colors.accent}`.
- **Usage:** Small, functional, and quiet — nav dropdown rows (36px grey icon
  tiles), feature-card `{colors.dark-elevated}` icon tiles, inline UI affordances.
  Icons annotate; they never become decorative focal points.
- **Brand/social marks are the one exception.** LinkedIn, Instagram, X, YouTube,
  and Facebook use their official brand glyphs (not Streamline line icons), so
  they stay recognizable. They render as monochrome inline SVG with `currentColor`
  — ink/muted at rest, inverting on hover like every other pill — inside the
  36px footer tiles (`.foot-social`) and the 34px hero circles (`.soc`). Keep
  them monochrome; never reproduce the platforms' native brand colors.

## Responsive Behavior

The captured surface is desktop-first and relies on intrinsic flexibility (clamp() type, flex/grid tracks, flex-wrap on logo grids) rather than media queries — no breakpoint rules exist in the source. The table below is the recommended collapsing strategy consistent with the system's logic.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 720px | Hamburger nav; hero stacks text-over-accordion; display-lg resolves ~28px via clamp; card grids drop to 1-up. |
| Tablet | 720–1024px | Programs grid 2–3-up; feature cards stay 2-up or stack; footer collapses to 2 columns. |
| Desktop | 1024–1440px | Full layout as specified; 5-up programs grid; sticky nav with dropdowns. |
| Wide | > 1440px | Content caps at {spacing.container}; gutters absorb the rest. |

### Touch Targets

- Pill CTAs are ~40px tall (11px padding + 13px type) — acceptable, but pad to ≥44px on touch layouts (WCAG AAA).
- Carousel nav buttons are 40×40px circles; pagination dots (6px) are below target size and need enlarged hit areas on touch.
- Newsletter input should rise to 48px height on mobile.

### Collapsing Strategy

- Nav switches to a hamburger below ~720px; the pill hover-slider and hover dropdowns are pointer-only and must convert to tap-to-expand.
- Card grids drop column count cleanly (5 → 3 → 2 → 1) — never reflow rows.
- Section padding compresses from {spacing.section} to ~48px, gutters from {spacing.page-x} to 20–24px.
- The hero accordion becomes a swipeable strip or stacked panels; the stats pill wraps to two rows.

## Known Gaps

- No media queries exist in the source; all Responsive Behavior above is a recommended strategy, not extracted fact.
- Motion is partially documented in CSS (0.15–0.2s ease hovers; 0.22–0.65s `cubic-bezier(0.4, 0, 0.2, 1)` for nav slider, carousel, and accordion; a ±6px 4–5.5s logo float loop) but no formal motion token scale exists.
- Form error, success, and validation states are not designed on the captured surface.
- No dark mode variant exists — the dark footer is a fixed inversion, not a theme.
- Icons use the **Streamline Ultimate, Light** set (see Iconography); the captured surface renders them as inline SVG (1.1px stroke, round caps), but a formal sizing scale is not yet defined.
- Accessibility contrast: {colors.faint} (#aaa) metadata text and the #777 placeholder fall below WCAG AA on white — flagged, not yet resolved.
- **Glass is documented ahead of the code.** The nav bar, mega panels, dropdowns and mobile drawer are built as glass in the source; cards and the remaining boxes still render as flat `{colors.surface-card}` plates and need migrating to `glass-panel`. Until then, treat the nav bar as the reference implementation.
- Contrast on glass is not a fixed number — a slab can sit over anything. The table in `weXelerate-brand-colour-system.md` is measured against the opaque fallback; check the worst case (light glass over a dark photograph) before shipping a new glass surface, and raise fill opacity rather than darkening the ink.
- `prefers-reduced-transparency` is specified but not yet implemented anywhere in the source; only the `@supports` fallback exists.
- Nesting glass inside glass is undefined. Do not stack slabs — a box on a glass panel takes a solid or hairline treatment until this is specified.
- The `::selection` rule currently resolves to teal in the page source (`background: var(--brand)`); it needs to move to `{colors.selection}` with `{colors.selection-ink}` ink site-wide.
