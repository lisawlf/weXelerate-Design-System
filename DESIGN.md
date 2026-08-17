> **Colour in this file is superseded.** The palette is now defined by
> `weXelerate-brand-colour-system.md` (teal `#319b8e` brand, navy `#213959` accent,
> lime `#dcff00` as a rare spark) and is being rolled out per
> `brand-colour-rollout.md`. Everything else here — type, spacing, hairlines,
> ghost pills, bands — still holds.

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
  link: "#213959"
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
  card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 28px 24px 24px
  card-hover:
    backgroundColor: "{colors.surface-mid}"
  card-dark:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.lg}"
    padding: 40px
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

Color does almost nothing, on purpose. The single voltage in the system is an electric lime {colors.accent} (#dcff00) that appears only as a 28×2px signal bar at the top of program cards — never as a fill, a button, or text. Interaction emphasis comes instead from inversion: ghost pill buttons with 1px black borders that flood to solid black with white text on hover. Depth comes from tonal steps (white → warm grey card → dark footer) and from photography sitting under black gradient overlays.

**Key Characteristics:**

- Monochrome-first: black, white, and greys carry 99% of the UI; {colors.accent} appears only as a thin accent bar and must stay rare to stay powerful.
- Ghost-pill interaction language: no filled buttons at rest — 1px-bordered transparent pills that invert to solid {colors.primary} on hover.
- Hairline-only depth: sections and cards separate via 1px {colors.hairline} borders and tonal surface shifts; the sole shadow in the system belongs to dropdown menus.
- Three typefaces, three jobs: Sora 700 for all headlines and UI labels, Barlow 400 for all body copy, JetBrains Mono 11px uppercase for eyebrows and metadata.
- Editorial band layout: a 1440px container with 48px gutters, 80px section padding, and 12px gaps between cards.

## Colors

### Brand & Accent

- **Ink Black** ({colors.primary} — #000000): The brand color. Headlines, button borders, hover fills, and the stats-bar outline. Black *is* weXelerate; softened to {colors.ink} (#111111) for large display text.
- **Electric Lime** ({colors.accent} — #dcff00): The only chromatic accent. Used exclusively as a 28×2px bar at the top of program cards. Never used for text, buttons, backgrounds, or any large area.
- **Link Navy** ({colors.link} — #213959): Reserved for inline text links in running copy.

### Surface

- **Canvas** ({colors.canvas} — #ffffff): The default page floor. Pure white, high-glare, editorial.
- **Surface Card** ({colors.surface-card} — #f7f7f7): The standard card plate and alternating section tint (testimonials). A warm grey half-step below the canvas.
- **Surface Mid** ({colors.surface-mid} — #e8e8e8): A deeper grey card variant used to differentiate siblings in a card grid, and the card hover tint (via #f0f0f0).
- **Dark** ({colors.dark} — #111111): The footer world and the "dark" feature-card variant. Its bottom bar sits on {colors.dark-deep} (#0a0a0a), with {colors.dark-elevated} (#2a2a2a) for icon tiles and inputs.

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

The system is flat by conviction. Hierarchy is built from three devices, in order of preference:

1. **Hairline borders** — 1px {colors.hairline} between sections, 1px #e8e8e8 around cards and dropdowns.
2. **Tonal surfaces** — {colors.canvas} → {colors.surface-card} → {colors.surface-mid} → {colors.dark} signal rising emphasis or a mood shift; the footer is a full tonal inversion.
3. **Photographic depth** — full-bleed images under black gradient overlays, e.g. `linear-gradient(to top, rgba(0,0,0,0.82), transparent)`, keeping white text legible.

Exactly one shadow exists: dropdown menus cast `0 8px 32px rgba(0,0,0,0.10)`. Cards, buttons, and sections never cast shadows.

## Components

**`button-primary`** — The signature ghost pill CTA. Background transparent, 1px solid `{colors.primary}` border, text `{colors.primary}`, type `{typography.button}`, padding 11px × 26px, rounded `{rounded.pill}`. Hover inverts: background `{colors.primary}`, text `{colors.canvas}`, 0.2s transition. There is no filled button at rest — the inversion is the emphasis.

**`button-on-dark`** — The same ghost pill on dark surfaces. Transparent background, 1px #444 border, text `{colors.on-dark-muted}` (#ccc in the newsletter variant), rounded `{rounded.pill}`. Hover: background `{colors.on-dark}`, text `{colors.primary}`.

**`card`** — The default content card. Background `{colors.surface-card}`, text `{colors.ink}`, rounded `{rounded.lg}`, padding 28px 24px 24px, transparent 1px border. Hover: border #ddd, background #f0f0f0. Program cards open with a 28×2px `{colors.accent}` bar, then title `{typography.heading-sm}`, description `{typography.body-sm}` in #333, and a `{typography.label-sm}` text link.

**`card-dark`** — The inverted feature card. Background `{colors.dark}`, title `{colors.on-dark}`, body `{colors.on-dark-muted}`, icon tile `{colors.dark-elevated}`, rounded `{rounded.lg}`, padding 40px. Photographic variants add a cover image and bottom-anchored black gradient with a white text stack (eyebrow tag → title → description → ghost pill CTA).

**`nav-link`** — Sticky-nav item. Text #333 at rest, `{typography.button}`, padding 7px × 14px, rounded `{rounded.pill}`. Hover darkens text to `{colors.primary}` while a shared #f2f2f2 pill slider animates behind it. Dropdown panels: white, 1px #e8e8e8 border, rounded `{rounded.lg}`, 8px padding, rows with 36px grey icon tiles; row hover #f4f4f4.

**`eyebrow-label`** — Section opener. `{typography.eyebrow}` uppercase in `{colors.muted}`, preceded by a 28×2px #ccc dash. Every section begins with one; on photography it renders rgba(255,255,255,0.65).

**`input-dark`** — Newsletter input in the footer. Background `{colors.dark-elevated}` (#1a1a1a in source), 1px #333 border, text `{colors.on-dark}`, placeholder #777, rounded `{rounded.sm}`, padding 9px × 12px; focus border #555. Light-context inputs mirror this: white plate, 1px #e0e0e0 border, rounded `{rounded.sm}`–`{rounded.md}`.

**`card-hover`** — Documented as its own variant entry: `{colors.surface-mid}`-adjacent tint (#f0f0f0) with a #ddd border, 0.2s transition.

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
