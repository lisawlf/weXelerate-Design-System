repo: lisawlf/weXelerate-Design-System
branch: main

## Last sync
date: 2026-08-17T12:41:03Z

### Updated in this project
- Imported the brand colour system (teal #319b8e, navy #102030, lime #dcff00) into `tokens/`.
- Built the glass material, type scale and spacing tokens from `DESIGN.md`.
- Authored the component set the source documents (ghost pill, glass panel, card, eyebrow, nav, input).
- Recreated the marketing-site surface as a click-through UI kit.

### Generalised beyond the web (2026-08-17)
- Added `tokens/canvas.css` — fixed formats (16:9 slide, 1:1/4:5/9:16/1.91:1 sujets, A4)
  with their own type scales, derived from the web scale rather than invented alongside it.
- Added `tokens/print.css` — glass flattens to plates, colour prints exact, one canvas per sheet.
- Added `media/` — what is fixed in every medium vs what moves; guides for slides, sujets,
  documents and the logo.
- Added templates: `slide-deck/SlideDeck.html`, `social-sujet/Sujets.html`,
  `document/OnePager.html`. All standalone HTML, no server needed.
- Removed `uploads/` (byte-identical duplicates of `assets/`, 7.9 MB) and
  `brand-colour-rollout.md` (a page-by-page migration plan for the *website* repo —
  it referenced `event-detail-template.html` and `index.html`, neither of which exists here).
- `readme.md` → `README.md`; scoped `DESIGN.md` as the web chapter.

## Screen map
| Screen / artifact | Built from |
|---|---|
| `tokens/colors.css`, `tokens/glass.css` | `weXelerate-brand-colour-system.md` |
| `tokens/typography.css`, `tokens/spacing.css`, `tokens/radius.css`, `tokens/motion.css` | `DESIGN.md` (Typography, Layout, Elevation) |
| `tokens/canvas.css`, `tokens/print.css` | derived from the above for fixed-size media |
| `components/core/*`, `components/navigation/*`, `components/forms/*` | `DESIGN.md` (Components) |
| `ui_kits/website/*`, `templates/marketing-page/*` | `DESIGN.md` (Overview, Layout, Elevation, Iconography) |
| `templates/slide-deck/*`, `templates/social-sujet/*`, `templates/document/*` | `media/*.md` + the tokens |
| `guidelines/*.card.html` | both source files |

## Open questions for the brand owner
- CMYK / Pantone equivalents for teal, navy and lime — needed before commercial print.
- Logo clear space and minimum sizes in `media/logo.md` are proposed defaults, not captured rules.
- No photography or art direction was ever supplied; every image area is a placeholder plate.
- The icon set is substituted (Lucide standing in for the paid Streamline — Ultimate, Light).
