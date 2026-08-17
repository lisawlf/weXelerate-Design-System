# Slides

Copy [`templates/slide-deck/SlideDeck.html`](../templates/slide-deck/SlideDeck.html) and
delete what you do not need. It carries eleven layouts, all built from the tokens.

## The canvas

- **16:9, authored at 1280×720px.** That is exactly 13.333×7.5in, so it maps 1:1 onto a
  PowerPoint or Keynote widescreen slide with no re-flowing.
- **80px left/right, 64px top/bottom safe margin.** Type never crosses it. Photography does
  — a full-bleed image runs to the edge, and only the text inside it respects the margin.
- Exporting at 2x (2560×1440) is done by scaling the whole artboard, never by re-typing
  sizes.

## Type on a slide

Sizes live in [`tokens/canvas.css`](../tokens/canvas.css). The short version:

| Role | Size | Face |
|---|---|---|
| Section divider / one-word slide | 80px, `-2.5px` tracking | Sora 700 |
| Slide title | 52px, `-1.6px` | Sora 700 |
| Statement slide | 64px, `-2px` | Sora 700 |
| Sub / standfirst | 24px | Barlow 400 |
| Body and bullets | 20px | Barlow 400 |
| Stat figure | 72px, `-2px` | Sora 700 |
| Eyebrow | 13px, `.1em`, uppercase | JetBrains Mono |
| Footnote, source, page number | 13px | JetBrains Mono |

**13px is the floor.** Anything smaller is unreadable from the fourth row. If a slide needs
type below the floor to fit, the slide has too much on it — split it.

## Rules that are specific to decks

- **One idea per slide.** If the title needs an "and", it is two slides.
- **Titles are sentence case, 3–8 words, no full stop.** Same rule as web headlines.
- **Bullets: six maximum, one line each.** A bullet that wraps to three lines is a
  paragraph wearing a disguise — use the statement layout instead.
- **The dark world is punctuation.** Section dividers and the closing slide are dark or
  navy; body slides are white or the `#f7f7f7` tint. Never more than two dark slides in a
  row, mirroring the two-dark-bands-per-page rule on web.
- **The cover is teal with the white wordmark.** That is the default lockup, and it is the
  only slide that gets a full brand field unless the deck is very short.
- **One lime spark in the whole deck**, not one per slide. Usually on the first section
  divider or a single key figure. A deck with lime on every slide has no spark at all.
- **Every slide except the cover carries the footer rail**: wordmark left, page number
  right, 13px mono, `#aaa` on light and `rgba(255,255,255,.6)` on dark.
- **Tables use hairlines only.** No zebra striping, no filled header row, no vertical rules.
  A heavier `#0e0e0e` rule under the header, `#ebebeb` between rows.
- **Charts** take teal as the primary series and navy as the second. A third series is grey
  `#777`. Lime is never a series colour — it marks the one value you want read first, and
  only if the deck has not spent its spark elsewhere.
- **No transitions except Fade**, and no builds that animate in one bullet at a time. The
  motion system on screen is 0.15–0.65s on one easing curve; a deck does not need more.
- **No slide numbers on the cover or on section dividers.**

## Presenting and exporting

Open the HTML deck in a browser and present full screen, or print to PDF:

```bash
open templates/slide-deck/SlideDeck.html
```

When printing to PDF, set **Layout: Landscape**, **Paper size: a custom 13.33×7.5in** (or
A4 landscape if that is all you have), and **Margins: None**. The canvas carries its own
safe margin, so a printer margin on top of it crops the artboard.
[`tokens/print.css`](../tokens/print.css) handles the rest: it flattens glass to plates,
kills transitions, forces exact colour, and puts one slide on each sheet.

## Taking this into PowerPoint or Keynote

The deck is HTML because that is what this system is written in, and because it stays in
sync with the tokens. If the deck has to live in PowerPoint, build the master once:

- Slide size 13.333×7.5in.
- Theme fonts: Sora (headings), Barlow (body). Both are free from Google Fonts and must be
  installed on every machine that opens the file, or PowerPoint will substitute Calibri and
  the deck will stop looking like weXelerate.
- Theme colours in this order: `#0e0e0e`, `#ffffff`, `#319b8e`, `#102030`, `#dcff00`,
  `#d9d9d9`, `#f7f7f7`, `#777777`.
- Build the layouts above as slide masters, not as one master everyone reshapes.
- **Do not attempt glass in PowerPoint.** Use the flat plate: white fill, `#e8e8e8` 1px
  outline, 18px (0.19in) corner radius, no shadow.
