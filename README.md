# weXelerate Design System

weXelerate is an innovation ecosystem in Austria — it runs applied programs in AI and
quantum technology and connects the corporates, startups, researchers and investors who
deliver them, out of a large building in Vienna's second district. The brand reads like an
institution that builds technology: monochrome editorial surfaces, engineered typography,
and colour used sparingly and deliberately.

This repository is the machine-readable version of that brand — tokens, the liquid-glass
material, components, specimen cards, and ready-to-copy templates — so that anything the
team makes, in any medium, comes out looking like weXelerate.

**It is not a website spec.** The system was first captured from the website, and the web
work is still the most detailed part of it, but slides, social sujets and documents are
first-class here. [`media/`](media/) says which rules are fixed everywhere and which ones
move with the medium.

## Start here

| I need to make… | Read | Copy |
|---|---|---|
| **A deck** | [`media/slides.md`](media/slides.md) | [`templates/slide-deck/SlideDeck.html`](templates/slide-deck/SlideDeck.html) |
| **A social post or ad** | [`media/social-sujets.md`](media/social-sujets.md) | [`templates/social-sujet/Sujets.html`](templates/social-sujet/Sujets.html) |
| **A factsheet or one-pager** | [`media/documents.md`](media/documents.md) | [`templates/document/OnePager.html`](templates/document/OnePager.html) |
| **A web page** | [`DESIGN.md`](DESIGN.md) | [`templates/marketing-page/`](templates/marketing-page/) |
| **Anything, and I need the rules** | [`media/README.md`](media/README.md) | — |

Every template is a standalone HTML file. Open it in a browser, delete what you do not need,
replace the copy, and print to PDF or screenshot the canvas:

```bash
open templates/slide-deck/SlideDeck.html
```

The one thing that needs a local server is the interactive web UI kit, because it compiles
JSX in the browser:

```bash
python3 -m http.server 8000
```

then open <http://localhost:8000/ui_kits/website/index.html>.

## Sources

Everything here was derived from material supplied by the brand owner. Nothing was invented
from memory.

- [`weXelerate-brand-colour-system.md`](weXelerate-brand-colour-system.md) — the
  **authoritative** colour spec. It wins over every other file in this repo, including
  `DESIGN.md`.
- [`DESIGN.md`](DESIGN.md) — the captured **website** surface: type scale, layout bands,
  the glass recipe, component specs, iconography, responsive strategy, known gaps. Its
  colour section is superseded; everything else in it still holds, but read it as the web
  chapter rather than as the whole system.
- Uploaded logo files — wordmark and the standalone crossing-X mark, black and white, in
  [`assets/`](assets/). **These are PNG, not vector** — see Known gaps.
- No Figma file, codebase, photography library or slide deck was provided.

**Where the two sources disagree.** `DESIGN.md` describes an all-black monochrome palette;
the colour system replaces it with **teal `#319b8e` as the brand colour, deep navy `#102030`
as the accent, lime `#dcff00` as a rare spark**. The colour system wins. The retired navy
`#213959` appears nowhere in this project, by design. The editorial ink/grey ramp from
`DESIGN.md` — hairlines, surfaces, the dark world — is kept, because the colour system does
not replace it.

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/colors.css` | Palette + semantic aliases + `::selection`. |
| `tokens/typography.css` | Sora / Barlow / JetBrains Mono scale for screen. |
| `tokens/canvas.css` | **Fixed-size formats** — slide, sujet, A4 — plus their type scales and logo sizing. |
| `tokens/print.css` | Print and PDF export: glass flattens, colour prints exact, one canvas per sheet. |
| `tokens/fonts.css` | Google Fonts loading + family tokens. |
| `tokens/spacing.css`, `tokens/radius.css` | Spacing scale, container, radii. |
| `tokens/glass.css` | Glass fills, blurs, rims, glint, shadow. |
| `tokens/material.css` | The shipped `.wx-glass` slab (rim + glint + fallbacks). |
| `tokens/motion.css`, `tokens/base.css` | Durations/easing; element defaults. |
| `media/` | **How the system applies per medium** — slides, sujets, documents, logo. |
| `components/core/` | `Button`, `GlassPanel`, `Card`, `EyebrowLabel`, `Icon`. |
| `components/navigation/` | `NavLink`, `NavBar`. |
| `components/forms/` | `Input`. |
| `components/layout/` | `SectionBand`. |
| `guidelines/*.card.html` | Foundation specimen cards (Colors, Type, Spacing, Brand). |
| `templates/` | Copy-and-edit starting points: slide deck, sujets, one-pager, marketing page. |
| `ui_kits/website/` | Click-through marketing-site kit — see its own `README.md`. |
| `assets/` | Wordmark and X mark, black and white. |
| `github.md` | Source association + screen map for upstream sync. |
| `SKILL.md` | Agent-skill wrapper for use outside this project. |

### Components

The React components are **web components for web work**. Slides, sujets and documents use
the plain CSS classes in `tokens/canvas.css` and `tokens/material.css` instead — same tokens,
no build step.

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
need them): `Icon`, `NavBar`, `SectionBand`.

**Not built, deliberately:** toasts, avatars, tabs, tooltips, selects, checkboxes, radios and
switches. The source defines none of them, and form error/success states are explicitly
listed as undesigned. Ask before inventing them.

## Content fundamentals

The voice is that of an operator, not a marketer: plain declaratives, concrete nouns, and
numbers instead of adjectives. This holds in every medium — a slide headline and a landing
page headline are written the same way.

- **Person.** "We" for weXelerate, "you" for the reader. Never "our team is passionate about".
- **Casing.** Sentence case everywhere — headlines, buttons, nav, slide titles. The only
  uppercase is the mono eyebrow layer (`PROGRAMS · 2026`), where it reads as an annotation.
- **Length.** Headlines 3–8 words with no full stop ("Where Austria builds what comes next").
  Body sentences short; card descriptions one sentence, ~12–20 words.
- **CTAs** are verb-first and specific: "See the programs", "Book a tour", "Start application".
  Not "Learn more" as a button — that survives only as a small card text link.
- **Numbers carry the claims.** "700+ startups supported", "12,000m²", "150+ corporate
  partners". Prefer a figure to an intensifier; never write "world-class" or "cutting-edge".
- **Austrian specificity is an asset.** Vienna, DACH, TU Wien, € amounts, German legal
  labels (Imprint) all belong.
- **No emoji.** Not in UI, not in marketing copy, not on slides.
- **Metadata style.** Dates as `Sep 24, 2026 · 09:00`, mono, uppercase, middot separators.
- **Vibe:** engineered calm. Confident, unhurried, faintly technical.

## Visual foundations

**Colour.** White canvas, `#0e0e0e` ink. Teal `#319b8e` is the brand colour — a surface,
fill and UI colour, never small body text, and always with **white** labels on it (even
though black would pass contrast). Navy `#102030` is the accent: dark panels, inline body
links, chart depth. Lime `#dcff00` appears at most **once per surface** as a small spark,
with black text, never as a background or as text — plus one exemption: it is the
text-selection plate (`::selection`, black ink), which is transient and does not spend the
surface's spark. Offwhite `#d9d9d9` for dividers and disabled states. The pillars are **not**
colour-coded. Keyboard focus stays teal so it reads differently from the lime mouse
highlight.

*One documented exception to "no colour outside this set":* `--wx-rating-gold` `#FBBC04`
renders Google review stars, where the star colour is a third party's convention rather than
ours. It is not a brand colour, it appears nowhere else, and nothing new should use it.

**Type.** Three faces, three jobs. Sora 700 for every headline and UI label, with negative
tracking that tightens as size grows so large type reads engineered rather than airy. Barlow
400 for all body copy at 1.5–1.6 line height. JetBrains Mono uppercase with `.1em` tracking,
muted grey, for eyebrows and metadata. Sora never sets body copy, Barlow never sets a
headline, and never more than two weights of one family on a surface. Sizes are fluid via
`clamp()` on the web and fixed per format in `tokens/canvas.css` everywhere else.

**Layout & spacing.** On the web: 1440px container, 48px gutters, 80px section bands (64px
for quieter interstitials), 12px grid gaps, 4/8/12/16/24/32 inside components; the page is a
vertical stack of bands, each closed by a 1px `#ebebeb` hairline. Off the web the step ladder
is identical and only the outer margin changes — 80px on a slide, 72px on a sujet, 20mm on a
document. Density lives inside components; the space between sections stays generous.

**Backgrounds.** No gradients as decoration, no patterns, no textures, no illustration style.
Only three floors exist: white canvas, `#f7f7f7` tint, and the dark `#0e0e0e`/`#111` world —
at most two dark surfaces per page or per run of slides. Photography is full-bleed under
`linear-gradient(to top, rgba(0,0,0,.82), transparent)` so white text stays legible. **No
brand imagery was provided**, so every image area in this project is a labelled offwhite
plate; drop real photos in unchanged.

**Elevation & the glass material.** Sections are flat; boxes are glass. Any box — nav bar,
dropdown, card, modal, stat plate, form well — is one liquid-glass material: a translucent
fill (dense for reading surfaces, thinner for chrome), a `blur(30–34px) saturate(200%)
brightness(1.1x)` backdrop, a 1px refracted rim on `::before` with `mask-composite: exclude`,
and a faint diagonal glint on `::after`. Skip the rim or glint and you get a frosted
rectangle, not glass. One shared shadow token — never per-component shadows. Glass never gets
tinted teal, navy or lime, and glass is never nested inside glass. An opaque fallback ships
with every slab via `@supports` and `prefers-reduced-transparency`.

**Glass is a screen material.** It does not survive PDF export, print, or PowerPoint, so on
those surfaces it becomes the flat plate it already falls back to. `tokens/print.css` does
this automatically. See [`media/README.md`](media/README.md).

**Corners.** 0 / 6 (inputs) / 8 / 12 / 14 (small dropdowns, chips) / 18 (every glass slab and
card) / pill (all buttons and nav items). Cards are 18px glass with rim + glint + the shared
shadow — never a rounded box with a coloured left border.

**Hover & press.** Interaction is **inversion**, not tinting: a ghost pill with a 1px ink
border floods to solid ink with white text. On dark, the same pill floods to white with ink
text. Cards do the opposite of the usual move — the fill *thins* on hover so more backdrop
reads through; they never gain a grey tint. Nav items take an `rgba(14,14,14,.06)` ink wash.

**Motion.** Screen only. One easing curve, `cubic-bezier(0.4, 0, 0.2, 1)`. 0.15–0.2s for
hover colour changes, 0.22s for the nav pill slider, ~0.36s for panels and dropdowns, up to
0.65s for the hero accordion, and a ±6px 4–5.5s float loop on partner logo grids. No bounce,
no spring, no parallax. Never animate `backdrop-filter`. Decks get `Fade` and nothing else.

**Borders.** Hairlines everywhere structure is needed: `#ebebeb` between sections, `#e8e8e8`
on cards and dropdowns, `#2a2a2a`–`#333` on dark. 1px only (0.25pt in print).

## Iconography

- **Canonical set: Streamline — Ultimate, Light.** One library, one weight; the thin even
  stroke matches the hairline language.
- **Substitution flagged:** Streamline is a paid set and no icon files were provided, so
  `Icon` renders **Lucide** (`lucide-static@0.441.0`, CDN, thin stroke, round caps) as the
  closest free match. Swap the CDN base in `components/core/Icon.jsx` for the real
  Streamline SVGs when you have them — nothing else needs to change.
- **Colour:** always monochrome `currentColor` — ink on light, white on dark. Never tint an
  icon lime.
- **Usage:** small, functional, quiet. Icons annotate; they are never focal.
- **No emoji, ever.** No unicode characters used as icons, except the `→` in text links.
- **Brand/social marks are the exception:** LinkedIn, Instagram, X, YouTube and Facebook use
  their own glyphs, rendered monochrome in `currentColor`. Never their native brand colours.

## Logo

Full rules — lockups, clear space, minimum sizes, co-branding — in [`media/logo.md`](media/logo.md).

- `assets/logo-black.png` / `logo-white.png` — full wordmark, 5.13:1, 10923px wide.
- `assets/mark-x-black.png` / `mark-x-white.png` (+ WebP) — the crossing-X device, 1:1.
- **Unicolour only:** one ink — white or black — on a teal, black or white field. Default
  lockup is the white wordmark on teal. There is no coloured X.

## Fonts

Sora, Barlow and JetBrains Mono are all open-source and load from Google Fonts in
`tokens/fonts.css` — no font binaries were needed, and no substitution was made. **Install
all three locally** on any machine making slides or documents in PowerPoint, Keynote or
Word, or those applications will substitute. If you must fall back: Sora → Manrope or
Poppins (600/700); Barlow → IBM Plex Sans; JetBrains Mono → IBM Plex Mono.

## Known gaps

Carried over from the source, and worth closing:

- **There is no vector logo.** The repo previously shipped `logo-black.svg` and
  `logo-white.svg`, but both were 1.2 KB empty shells — an `<image>` tag whose embedded
  bitmap had been stripped, so they rendered as nothing anywhere they were used. They have
  been removed and every reference now points at the PNGs, which are the only real artwork
  (10923×2130, black and white). **Get the true vector wordmark and X mark from whoever owns
  the original artwork** and drop them into `assets/` — a PNG logo cannot be scaled for
  large-format print, and it cannot sit cleanly on a coloured field at small sizes.
- No approved **CMYK or Pantone** values for teal, navy and lime. Needed before anything
  goes to a commercial printer; lime is out of CMYK gamut and will shift.
- No **photography** was supplied, so every image area is a placeholder plate, and there is
  no art-direction guidance for what a weXelerate photograph looks like.
- **Clear space and minimum logo sizes** in `media/logo.md` are proposed, not captured.
- No **media queries** exist upstream (the responsive strategy in `DESIGN.md` is a
  recommendation), no dark-mode theme, and no form validation states.
- `#aaa` metadata and `#777` placeholders fall below WCAG AA on white.
- The **icon set is substituted** (Lucide standing in for Streamline).
