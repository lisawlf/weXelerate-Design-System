# weXelerate Design System

weXelerate is an innovation ecosystem in Austria — it runs applied programs in AI and
quantum technology and connects the corporates, startups, researchers and investors who
deliver them, out of a large building in Vienna's second district. The brand reads like an
institution that builds technology: monochrome editorial pages, engineered typography, and
colour used sparingly and deliberately.

This project is the machine-readable version of that brand: tokens, the liquid-glass
material, the reusable components the source documents, foundation specimen cards, and a
click-through recreation of the marketing site.

## Sources

Everything here was derived from material the user supplied. Nothing was invented from memory.

- **GitHub — <https://github.com/lisawlf/weXelerate-Design-System>** (branch `main`)
  - `DESIGN.md` — the captured surface: type scale, layout bands, elevation/glass recipe, component specs, iconography, responsive strategy, known gaps.
  - `weXelerate-brand-colour-system.md` — the **authoritative** colour spec; it explicitly supersedes the colours in `DESIGN.md`.
  - Worth exploring further: those two files carry more prose than fits here, including the exact contrast table and the "known gaps" list. Read them before extending this system.
- **Uploaded logo files** — full wordmark (SVG + PNG, black and white) and the standalone crossing-X mark (PNG + WebP, black and white). Copied into `assets/`.
- No Figma file, codebase, imagery library, or slide deck was provided.

### Where the two sources disagree

`DESIGN.md` describes an all-black monochrome palette; the colour system replaces it with
**teal `#319b8e` as the brand colour, deep navy `#102030` as the accent, lime `#dcff00` as a
rare spark**. The colour system wins. The retired navy `#213959` appears nowhere in this
project, by design. The editorial ink/grey ramp from `DESIGN.md` (hairlines, surfaces, the
dark world) is kept because the colour system does not replace it.

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/colors.css` | Palette + semantic aliases + `::selection`. |
| `tokens/typography.css` | Sora / Barlow / JetBrains Mono scale. |
| `tokens/fonts.css` | Google Fonts loading + family tokens. |
| `tokens/spacing.css`, `tokens/radius.css` | Spacing scale, container, radii. |
| `tokens/glass.css` | Glass fills, blurs, rims, glint, shadow. |
| `tokens/material.css` | The shipped `.wx-glass` slab (rim + glint + fallbacks). |
| `tokens/motion.css`, `tokens/base.css` | Durations/easing; element defaults. |
| `components/core/` | `Button`, `GlassPanel`, `Card`, `EyebrowLabel`, `Icon`. |
| `components/navigation/` | `NavLink`, `NavBar`. |
| `components/forms/` | `Input`. |
| `components/layout/` | `SectionBand`. |
| `guidelines/*.card.html` | 19 foundation specimen cards (Colors, Type, Spacing, Brand). |
| `ui_kits/website/` | Marketing-site kit — see its own `README.md`. |
| `assets/` | Wordmark and X mark, black and white. |
| `templates/marketing-page/` | Editorial landing-page template for consuming projects. |
| `github.md` | Source association + screen map for upstream sync. |
| `SKILL.md` | Agent-skill wrapper for use outside this project. |

### Components

| Component | Group | Notes |
|---|---|---|
| `Button` | core | Ghost pill; variants `primary`, `onDark`, `brand` (filled teal), `spark` (lime). |
| `GlassPanel` | core | The material every box is made of; `light`/`dark`, `dense`/`chrome`. |
| `Card` | core | Glass content card; `default`, `dark`, `photo`; optional lime signal bar. |
| `EyebrowLabel` | core | 28×2px dash + mono uppercase section opener. |
| `Icon` | core | Monochrome line icon wrapper (**substituted set — see Iconography**). |
| `NavLink` | navigation | Pill nav item with ink-wash hover. |
| `NavBar` | navigation | 60px sticky chrome-glass bar. |
| `Input` | forms | Light plate / dark well; the one field the source designs. |
| `SectionBand` | layout | Editorial band with eyebrow, headline, hairline close. |

**Intentional additions** (not named as components in the source, added because consumers
need them): `Icon` (a wrapper for the glyph set), `NavBar` (the source calls the bar the
reference glass implementation but only specs `nav-link`), `SectionBand` (the band + hairline
rhythm is specified in Layout but had no component).

**Not built, deliberately:** toasts, avatars, tabs, tooltips, selects, checkboxes, radios and
switches. The source defines none of them, and form error/success states are explicitly
listed as undesigned. Ask before inventing them.

## Content fundamentals

The voice is that of an operator, not a marketer: plain declaratives, concrete nouns, and
numbers instead of adjectives.

- **Person.** "We" for weXelerate, "you" for the reader. Never "our team is passionate about".
- **Casing.** Sentence case everywhere — headlines, buttons, nav. The only uppercase is the
  mono eyebrow layer (`PROGRAMS · 2026`), where it reads as an annotation, not shouting.
- **Length.** Headlines 3–8 words with no full stop ("Where Austria builds what comes next").
  Body sentences short; card descriptions one sentence, ~12–20 words.
- **CTAs** are verb-first and specific: "See the programs", "Book a tour", "Start application",
  "Subscribe". Not "Learn more" as a button — that phrasing survives only as a small card text link.
- **Numbers carry the claims.** "700+ startups supported", "12,000m²", "150+ corporate partners".
  Prefer a figure to an intensifier; never write "world-class" or "cutting-edge".
- **Austrian specificity is an asset.** Vienna, DACH, TU Wien, € amounts, German legal
  labels (Imprint) all belong.
- **No emoji.** Not in UI, not in marketing copy. The mono eyebrow and the lime bar do the
  work emoji would do elsewhere.
- **Metadata style.** Dates as `Sep 24, 2026 · 09:00`, mono, uppercase, middot separators.
- **Vibe:** engineered calm. Confident, unhurried, faintly technical. An engineering drawing
  that happens to be a website.

## Visual foundations

**Colour.** White canvas, `#0e0e0e` ink. Teal `#319b8e` is the brand colour — a surface,
fill and UI colour, never small body text, and always with **white** labels on it (even
though black would pass contrast). Navy `#102030` is the accent: dark panels, inline body
links, chart depth. Lime `#dcff00` appears at most **once per view** as a small spark, with
black text, never as a background or as text — plus one exemption: it is the text-selection
plate (`::selection`, black ink), which is transient and does not spend the view's spark.
Offwhite `#d9d9d9` for dividers and disabled states. No colour outside this set; the pillars
are **not** colour-coded. Keyboard focus stays teal so it reads differently from the lime
mouse highlight.

**Type.** Three faces, three jobs. Sora 700 for every headline and UI label, with negative
tracking that tightens as size grows (−1.5px at 48px) so large type reads engineered rather
than airy; sizes are fluid via `clamp()` instead of breakpoints. Barlow 400 for all body copy
at 1.5–1.6 line height. JetBrains Mono 11px uppercase, `.1em` tracking, muted grey, for
eyebrows and metadata. Sora never sets body copy, Barlow never sets a headline, and never
more than two weights of one family on a screen.

**Layout & spacing.** 1440px container, 48px gutters, 80px section bands (64px for quieter
interstitials), 12px grid gaps, 4/8/12/16/24/32 inside components. The page is a vertical
stack of bands, each closed by a 1px `#ebebeb` hairline. Density lives inside cards; the
space between bands stays generous. Programs run 5 columns, feature and news cards 2, the
footer a 2.2/1/1/1/1.6 split. The hero is a fixed 380px text column beside a 520px-tall
image accordion, 72px apart.

**Backgrounds.** No gradients as decoration, no patterns, no textures, no illustration
style. Only three floors exist: white canvas, `#f7f7f7` tint for an alternating band, and the
dark `#0e0e0e`/`#111` world for the footer and feature bands — at most two per page.
Photography is full-bleed under `linear-gradient(to top, rgba(0,0,0,.82), transparent)` so
white text stays legible. **No brand imagery was provided**, so every image area in this
project is a labelled offwhite plate; drop real photos in unchanged.

**Elevation & the glass material.** Sections are flat; boxes are glass. Any box — nav bar,
dropdown, mega panel, card, modal, stat plate, form well — is one liquid-glass material:
a translucent fill (dense for reading surfaces, thinner for chrome), a
`blur(30–34px) saturate(200%) brightness(1.1x)` backdrop, a 1px refracted rim painted on
`::before` with `mask-composite: exclude`, and a faint diagonal glint on `::after`. Skip the
rim or glint and you get a frosted rectangle, not glass. One shared shadow token (two inset
edges, a hairline ring, two ambient drops) — never per-component shadows. Glass never gets
tinted teal, navy or lime, and glass is never nested inside glass. An opaque fallback ships
with every slab via `@supports` and `prefers-reduced-transparency`.

**Corners.** 0 / 6 (inputs) / 8 / 12 / 14 (small dropdowns, chips) / 18 (every glass slab and
card) / pill (all buttons and nav items). Cards are 18px glass with rim + glint + the shared
shadow — never a rounded box with a coloured left border.

**Hover & press.** Interaction is **inversion**, not tinting: a ghost pill with a 1px ink
border floods to solid ink with white text. On dark, the same pill floods to white with ink
text. Cards do the opposite of the usual move — the fill *thins* on hover so more backdrop
reads through; they never gain a grey tint. Nav items take an `rgba(14,14,14,.06)` ink wash
so they read on glass whatever scrolls beneath. No scale-down press state is specified; keep
presses to a colour step.

**Motion.** One easing curve, `cubic-bezier(0.4, 0, 0.2, 1)`. 0.15–0.2s for hover colour
changes, 0.22s for the nav pill slider, ~0.36s for panels and dropdowns, up to 0.65s for the
hero accordion and carousel, and a ±6px 4–5.5s float loop on partner logo grids. No bounce,
no spring, no parallax. Never animate `backdrop-filter` — transition `background` and
`box-shadow` only.

**Transparency & blur** appear only as the glass material, and only on boxes. Never as a
mood wash over a section, never behind body text without the brightness boost.

**Borders.** Hairlines everywhere structure is needed: `#ebebeb` between sections, `#e8e8e8`
on cards and dropdowns, `#2a2a2a`–`#333` on dark. 1px only.

**Known gaps carried over from the source:** no media queries exist upstream (the responsive
strategy in `DESIGN.md` is a recommendation), no dark-mode theme (the dark footer is a fixed
inversion), no form validation states, and `#aaa` metadata plus `#777` placeholders fall below
WCAG AA on white.

## Iconography

- **Canonical set: Streamline — Ultimate, Light.** One library, one weight; the thin even
  stroke matches the hairline language.
- **Substitution flagged:** Streamline is a paid set and no icon files were provided, so
  `Icon` renders **Lucide** (`lucide-static@0.441.0`, CDN, thin stroke, round caps) as the
  closest free match. Swap the CDN base in `components/core/Icon.jsx` for the real
  Streamline SVGs when you have them — nothing else needs to change.
- **Colour:** always monochrome `currentColor` — ink on light, white on dark. Never tint an
  icon lime.
- **Usage:** small, functional, quiet. 36px grey tiles in nav dropdown rows, `#2a2a2a` tiles
  on dark feature cards, 14–20px inline affordances. Icons annotate; they are never focal.
- **No emoji, ever.** No unicode characters used as icons, except the `→` in text links.
- **Brand/social marks are the exception:** LinkedIn, Instagram, X, YouTube and Facebook use
  their own glyphs so they stay recognisable, rendered monochrome in `currentColor` inside
  36px tiles (footer) or 34px circles (hero). Never their native brand colours.

## Logo

- `assets/logo-black.svg` / `logo-white.svg` — full wordmark (PNG fallbacks alongside).
- `assets/mark-x-black.png` / `mark-x-white.png` (+ WebP) — the crossing-X device alone.
- **Unicolour only:** one ink — white or black — on a teal, black or white field. Default
  lockup is the white wordmark on teal. There is no coloured X; the crossing device must read
  in a single ink.

## Fonts

Sora, Barlow and JetBrains Mono are all open-source and load from Google Fonts in
`tokens/fonts.css` — no font binaries were needed, and no substitution was made. If you must
fall back: Sora → Manrope or Poppins (600/700); Barlow → IBM Plex Sans; JetBrains Mono →
IBM Plex Mono.
