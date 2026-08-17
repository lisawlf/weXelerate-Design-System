# Social sujets and advertising

Copy [`templates/social-sujet/Sujets.html`](../templates/social-sujet/Sujets.html). It
carries the four formats at native resolution.

## Formats

| Format | Size | Where |
|---|---|---|
| Square 1:1 | 1080×1080 | LinkedIn, Instagram feed, X |
| Portrait 4:5 | 1080×1350 | Instagram feed — the tallest the feed allows, so the most screen |
| Story 9:16 | 1080×1920 | Stories, Reels covers, vertical video end cards |
| Wide 1.91:1 | 1200×630 | Link previews, OG images, event headers |

Always author at native resolution. Scaling a 540px design up to 1080 softens the hairlines,
which are the one thing this brand cannot afford to lose.

## Margins and keep-out

- **72px safe margin** on all 1080-wide canvases. Type and logo stay inside it; photography
  runs to the edge.
- **Stories need 220px clear at top and bottom.** Platform UI — profile chip, reply bar,
  progress dots — sits there and will cover anything you put under it.
- Every sujet carries the wordmark, bottom-aligned, ~190–220px wide on a 1080 canvas.
  On a story, keep it above the bottom keep-out zone.

## Type

The floor is **22px** on a 1080-wide canvas. Below that, mono metadata stops being readable
on a phone. Sizes are in [`tokens/canvas.css`](../tokens/canvas.css):

| Role | Size |
|---|---|
| Display (a single figure, a one-word statement) | 96px+, `-3px` tracking |
| Title | 64px, `-2px` |
| Body | 30px |
| Eyebrow | 20px mono uppercase |
| Caption, date, location | 22px mono |

A stat sujet can go much larger — the 700+ example in the template is 220px. When one figure
is the whole message, let it fill the canvas.

## Composition

Four layouts cover almost everything:

1. **Field + statement.** Teal or dark canvas, eyebrow, headline, wordmark. No image.
2. **Single figure.** One number at display size on a brand field, one line of context.
3. **Photo + scrim.** Full-bleed photograph, the standard
   `linear-gradient(to top, rgba(0,0,0,.82), transparent)` scrim, white type stacked at the
   bottom. The scrim is not optional — white type on an unscrimmed photo fails the moment
   the image changes.
4. **Portrait + quote.** Image plate top, quote in Sora below, attribution in mono.

## Rules

- **One message per sujet.** If it needs two headlines it is a carousel, not a sujet.
- **The lime spark is per sujet, and most sujets do not get one.** A campaign where every
  frame has a lime bar has no accent, just a pattern.
- **Never put type in teal.** Teal is the field the type sits on, and then the type is white.
- **No coloured X, ever** — the mark reads in one ink. On a busy photo, put the wordmark on a
  dark scrim rather than switching it to an outline or adding a shadow.
- **Dates in mono**: `Sep 24, 2026 · 09:00`. Uppercase, middot separators.
- **No emoji**, including in the caption you write to go with the post.
- **Carousels**: the cover carries the wordmark and the hook; interior frames carry a small
  page count in mono (`02 / 06`) and drop the wordmark; the last frame carries the CTA and
  the wordmark again.

## Export

Screenshot at 100% zoom or print the individual canvas to PNG. Never export the preview
page in `Sujets.html` as a whole — it is shown at 50% so several fit on one screen. Each
`<section class="wx-canvas ...">` is the artefact.
