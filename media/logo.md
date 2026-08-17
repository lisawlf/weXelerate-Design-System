# Logo

> **Some of this is a proposal, not a captured rule.** The source material specified the
> lockups and the unicolour rule, and those are firm. Clear space and minimum sizes were
> **not** specified anywhere, so the numbers below are sensible defaults derived from the
> artwork's own proportions. Correct them if the brand has real ones — they are the sort of
> thing a team will follow forever once it is written down.

## The two assets

| Asset | Ratio | Files |
|---|---|---|
| Wordmark | 5.13 : 1 | `assets/logo-black.png` · `logo-white.png` — 10923×2130 |
| X mark | 1 : 1 | `assets/mark-x-black.png` · `mark-x-white.png` (+ WebP) — 2430×2430 |

> **No vector master exists.** The `.svg` files this repo used to carry were empty — an
> `<image>` element with the bitmap stripped out — so they drew nothing and have been
> removed. Everything now points at the PNGs. They are high enough resolution for screen,
> slides and small print, but **a real vector wordmark should be sourced** from whoever
> holds the original artwork before anything goes to large-format print or is placed below
> about 40px on screen.

Use the **wordmark** by default. The **X mark alone** is for places too small or too square
for the wordmark: favicons, avatars, app icons, a stamp in the corner of a dark slide, the
last frame of a video.

## Unicolour, always

One ink — white or black — on a teal, black or white field. That is the whole rule.

- **Default lockup: white wordmark on teal `#319b8e`.**
- Black wordmark on white or on `#d9d9d9` offwhite.
- White wordmark on `#0e0e0e` black or on `#102030` navy.
- **There is no coloured X.** The crossing device must read in a single ink.
- Never on lime. Never a gradient, an outline version, a drop shadow, or a glow.
- Never re-space, re-weight, stretch, rotate, or rebuild the wordmark from live type.

## Clear space *(proposed)*

Clear space equals **the height of the placed wordmark (H)** on every side. For the X mark,
it is **half the mark's height**. Nothing enters that zone — no text, no image edge, no
other logo, no page trim.

```
┌─────────────────────────┐
│         H  clear        │   H = the height of the wordmark as placed
│    ┌───────────────┐    │
│ H  │   weXelerate  │  H │
│    └───────────────┘    │
│         H  clear        │
└─────────────────────────┘
```

## Minimum sizes *(proposed)*

| | Screen | Print |
|---|---|---|
| Wordmark | 120px wide | 25mm wide |
| X mark | 24px wide | 8mm wide |

Below these the crossing device closes up and the wordmark's tracking stops reading.

## On photography

Put the wordmark on the scrimmed part of the image — the bottom third under
`linear-gradient(to top, rgba(0,0,0,.82), transparent)` — in white. If the image has no
quiet area, do not add a shadow, a plate or an outline to force it; move the logo to a solid
band instead.

## Co-branding

Partner logos sit on a single baseline, separated by a 1px `#d9d9d9` vertical hairline with
clear space either side, and are optically balanced to the weXelerate wordmark rather than
matched to its literal width. Partner logos render in their own single ink — black on light,
white on dark — never in their brand colours, and never inside a coloured chip.

The exception is social platform marks (LinkedIn, Instagram, X, YouTube, Facebook), which
keep their own glyph shapes so they stay recognisable, rendered monochrome in `currentColor`.

## Filenames

Keep the existing convention: `logo-{black|white}.png` for the wordmark,
`mark-x-{black|white}.{png|webp}` for the device. When a real vector master arrives, add it
as `logo-{black|white}.svg` alongside the PNGs and make it the default reference.
