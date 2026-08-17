# Working in a medium

This system was captured from the website, but the brand is not a website. A slide, a
LinkedIn sujet, a factsheet and a landing page are all weXelerate, and they should read as
the same institution.

This folder says which parts of the system are fixed everywhere, and which parts move.

## What never changes

These hold on a slide, a poster, an A4 page, a story frame and a web page alike. If a
decision here is being reconsidered for a specific medium, the answer is no.

1. **The palette.** Teal `#319b8e` brand, navy `#102030` accent, lime `#dcff00` spark,
   white canvas, `#0e0e0e` ink, `#d9d9d9` offwhite. No colour outside this set. The full
   rules live in [`weXelerate-brand-colour-system.md`](../weXelerate-brand-colour-system.md)
   and they are authoritative over everything else in this repo.
2. **Text on teal is white.** Always, including button and label text, even though black
   would pass contrast. Never set text *in* teal.
3. **One lime moment per surface.** Per slide, per sujet, per page. Lime is a small spark
   with black text on it — never a background, never a large fill, never type.
4. **Three faces, three jobs.** Sora 700 headlines and UI labels, Barlow 400 body,
   JetBrains Mono 11–20px uppercase for eyebrows and metadata. Sora never sets body copy.
   Barlow never sets a headline. Never more than two weights of one family on a surface.
5. **Negative tracking that tightens as type grows.** Big Sora is engineered, not airy.
6. **Sentence case.** Headlines, buttons, nav, slide titles. The only uppercase is the mono
   eyebrow layer, where it reads as annotation.
7. **Structure comes from hairlines and whitespace**, not from boxes, fills, borders or
   drop shadows. 1px rules only.
8. **No gradients as decoration, no patterns, no textures, no illustration.** The only
   sanctioned gradient is the photo scrim,
   `linear-gradient(to top, rgba(0,0,0,.82), transparent)`.
9. **No emoji.** Not in UI, not in marketing copy, not on slides.
10. **Unicolour logo.** One ink — white or black — on a teal, black or white field. There is
    no coloured X. See [`logo.md`](logo.md).
11. **Numbers carry the claims.** "700+ startups supported", not "world-class ecosystem".

## What moves

| Dimension | How it changes |
|---|---|
| **Type size** | Scales with the canvas and the reading distance. Roles stay identical — a slide title and a page headline are both Sora 700 with tight tracking. Sizes are defined per medium in [`tokens/canvas.css`](../tokens/canvas.css); never invent a new one at the point of use. |
| **Spacing** | The 4/8/12/16/24/32 step ladder holds inside components everywhere. Outer margins scale: 48px page gutter, 80px slide margin, 72px sujet margin, 20mm document margin. |
| **The glass material** | Screen only. See below. |
| **Motion** | Screen only. Print and PDF are still; decks get one transition, `Fade`, and nothing else. |
| **Density** | A web page can afford small metadata. A projected slide cannot — the floor is 13px mono. A social sujet's floor is 22px, because it is read on a phone at a glance. |

## Glass is a screen material

The liquid-glass slab is the signature surface of the web work, and it is the one part of
the system that does not survive being exported. `backdrop-filter` has nothing to blur in a
PDF, a printed sheet, or a PowerPoint shape. Renderers that cannot do it fall back to
something on your behalf, usually a muddy grey box with the glint baked in.

So the rule is:

- **On screen** (web, live-presented HTML decks, anything with a real backdrop) — full glass:
  fill, blur, rim, glint, shared shadow. Skip the rim or glint and you have a frosted
  rectangle, not glass.
- **On paper, in PDF, in PowerPoint or Keynote** — the flat plate the glass already falls
  back to: opaque white (or `#2a2a2a` on dark), 1px `#e8e8e8` hairline, 18px radius, no
  shadow. [`tokens/print.css`](../tokens/print.css) does this automatically for anything
  using `.wx-glass`.
- **Glass needs a backdrop to be worth using.** A glass card on flat white is just a box
  with a rim. Put it over the `#f7f7f7` tint, a photograph, or a dark band — or use a plain
  hairline card instead.
- **Never nest glass inside glass**, and never tint it teal, navy or lime.

## Per-medium guides

| Medium | Guide | Template to copy |
|---|---|---|
| Presentations | [`slides.md`](slides.md) | [`templates/slide-deck/SlideDeck.html`](../templates/slide-deck/SlideDeck.html) |
| Social & advertising | [`social-sujets.md`](social-sujets.md) | [`templates/social-sujet/Sujets.html`](../templates/social-sujet/Sujets.html) |
| Documents & print | [`documents.md`](documents.md) | [`templates/document/OnePager.html`](../templates/document/OnePager.html) |
| Logo, in any medium | [`logo.md`](logo.md) | [`guidelines/logo.card.html`](../guidelines/logo.card.html) |
| Web | [`../DESIGN.md`](../DESIGN.md) | [`templates/marketing-page/`](../templates/marketing-page/) |
