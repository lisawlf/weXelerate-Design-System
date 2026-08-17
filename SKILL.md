---
name: wexelerate-design
description: Use this skill to design or generate anything branded for weXelerate — slide decks and presentations, social sujets and ads, factsheets and documents, web pages and UI, or throwaway prototypes and mocks. Contains the authoritative colour system, type scale, logo rules, per-medium format specs, and copy-and-edit templates.
user-invocable: true
---

# weXelerate design

Read `README.md` first — it is the hub, and it says which rules are fixed in every medium.
Then read the guide for the medium you are working in.

## Pick the medium before you start

| Asked for | Read | Start from |
|---|---|---|
| Slides, deck, presentation, pitch | `media/slides.md` | `templates/slide-deck/SlideDeck.html` |
| Social post, sujet, ad, story, OG image | `media/social-sujets.md` | `templates/social-sujet/Sujets.html` |
| Factsheet, one-pager, report, letterhead | `media/documents.md` | `templates/document/OnePager.html` |
| Website, landing page, app UI | `DESIGN.md` | `templates/marketing-page/` or `ui_kits/website/` |
| Logo placement, co-branding | `media/logo.md` | `guidelines/logo.card.html` |

`media/README.md` covers what holds everywhere and what changes per medium. Read it whenever
the request spans more than one format, or the format is not in the table.

## How to build

- **Link `styles.css`.** It pulls in every token including `tokens/canvas.css` (fixed
  formats: slide, sujet, A4) and `tokens/print.css` (PDF and print behaviour).
- **Use the canvas classes** for anything that is not a web page:
  `.wx-canvas .wx-canvas--slide`, `--sujet-square`, `--sujet-portrait`, `--sujet-story`,
  `--sujet-wide`, `--doc`, combined with a field: `--dark`, `--tint`, `--brand`, `--accent`.
  They fix the artboard size and the safe margins.
- **Never invent a type size.** Every size is a token in `tokens/typography.css` (web) or
  `tokens/canvas.css` (fixed formats).
- **Copy assets out** when producing a standalone artefact, so it works on its own.
- For production code, read the components in `components/` and reuse them rather than
  re-implementing primitives.

## Rules that are never negotiable

1. Teal `#319b8e` brand, navy `#102030` accent, lime `#dcff00` spark, white canvas,
   `#0e0e0e` ink, `#d9d9d9` offwhite. **No colour outside this set.**
2. **Text on teal is always white** — including button labels. Never set text in teal.
3. **One lime element per surface**, small, with black text on it. Never a background,
   never type. The `::selection` plate is the one exemption.
4. Sora 700 headlines and UI, Barlow 400 body, JetBrains Mono uppercase eyebrows and
   metadata. Sora never sets body copy; Barlow never sets a headline.
5. **Sentence case** everywhere except the mono eyebrow layer.
6. Structure from **hairlines and whitespace**, not boxes, fills or shadows. 1px only.
7. **No emoji, no gradients as decoration, no patterns, no textures, no illustration.** The
   only sanctioned gradient is the photo scrim.
8. **Unicolour logo** — one ink on a teal, black or white field. There is no coloured X.
9. **Glass is screen-only.** In PDF, print, PowerPoint or Keynote it becomes a flat opaque
   plate with an `#e8e8e8` hairline and no shadow. Do not fake a blur.
10. **Numbers carry the claims.** Prefer a figure to an adjective; never "world-class".

## If invoked with no brief

Ask what they are making and for whom, in one short round of questions — medium, audience,
and how it will be delivered (screen, projected, printed, posted). Then act as an expert
designer for this brand and produce the artefact: static HTML canvases for slides, sujets and
documents; production code when the target is a real site or app.
