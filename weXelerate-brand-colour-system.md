# weXelerate — Brand Colour Rules

Operational colour spec for building weXelerate assets. Apply exactly. Do not use any colour outside this set.

## Model

White = light canvas. Black = ink and dark canvas. Teal = brand colour. Navy = accent. Lime = rare spark. Colour does a job; whitespace dominates. Boxes are not painted plates — they are **glass**: translucent slabs that let the canvas through (see *Glass surfaces*).

## Palette

| Token | Function | HEX |
|---|---|---|
| `primary` | Brand colour (teal) | `#319b8e` |
| `accent` | Accent (deep navy) | `#102030` |
| `whisper` | Rare spark (lime) + selection highlight | `#dcff00` |
| `whitespace` | Light canvas | `#ffffff` |
| `dark-whitespace` | Dark canvas + primary ink | `#0e0e0e` |
| `offwhite` | Subtle background / dividers | `#d9d9d9` |

The accent is `#102030`. The old navy `#213959` is **retired** — it must not appear in any
file. If you see it, it is a bug; replace it.

## Tokens

```css
:root {
  --wx-primary:         #319b8e;
  --wx-accent:          #102030;
  --wx-whisper:         #dcff00;
  --wx-whitespace:      #ffffff;
  --wx-dark-whitespace: #0e0e0e;
  --wx-offwhite:        #d9d9d9;
  --wx-ink:             #0e0e0e; /* body text on light */
  --wx-ink-invert:      #ffffff; /* text on dark / teal / navy */

  /* selection — lime plate, black ink */
  --wx-select:          #dcff00;
  --wx-select-ink:      #0e0e0e;
}
```

```json
{
  "primary": "#319b8e",
  "accent": "#102030",
  "whisper": "#dcff00",
  "whitespace": "#ffffff",
  "dark-whitespace": "#0e0e0e",
  "offwhite": "#d9d9d9"
}
```

## Application rules

- Body text is always `#0e0e0e` on light surfaces and `#ffffff` on dark / teal / navy surfaces. Never set text in teal.
- `primary` (teal) is the brand colour: logo field, hero and brand surfaces, primary buttons, links, hover/active states, brand icons. It is a surface / fill / UI colour, not a background for small body text.
- **Text on a teal (`#319b8e`) surface is always white (`#ffffff`), never black.** This includes button labels: a teal button has white text.
- Button label colour follows the button background: white on teal, navy, or black; black on lime, white, or offwhite.
- `whisper` (lime) appears at most once per view, as a small spark (top CTA, highlight). Always black text on it. Never use lime as a background, a large fill, or as text. **The one exception is the text-selection highlight** — see below.
- `accent` (navy `#102030`) is for dark surfaces, section panels, inline body links, chart depth, and accents on white. Never place navy as a small element on black — it is invisible there (1.2:1).
- `offwhite` is for subtle backgrounds, dividers, borders, and disabled states. Black text only.
- Do not colour-code the four pillars. Colour roles are global; differentiate pillars by type, imagery, and labels.
- Do not introduce any colour outside this palette.

## Selection

Text the user drags over with the mouse is highlighted in **lime `#dcff00` with black
`#0e0e0e` ink** — never teal, never the browser's default blue.

```css
::selection      { background: var(--wx-select); color: var(--wx-select-ink); }
::-moz-selection { background: var(--wx-select); color: var(--wx-select-ink); }
```

This is the single sanctioned lime background. It is exempt from the one-spark-per-view
rule because it is transient and user-invoked: it exists only while a drag is held, it
never renders on page load, and it disappears on click-away. It does **not** spend the
page's lime spark — a page may carry both a selection highlight and its one lime element.
Black on lime is 16.9:1, so selected text stays the most legible thing on the page.

Keep `:focus-visible` on teal (`2px solid var(--wx-primary)`) so the keyboard ring and the
mouse highlight stay visually distinct.

## Glass surfaces

Boxes — cards, panels, dropdowns, modals, stat plates, form wells — are **liquid glass**,
the same material as the nav bar: a translucent slab that blurs and saturates whatever
scrolls under it, with a bright refracted rim and a faint diagonal glint. They are not
flat `#f4f4f4` plates.

Glass is built from the palette's whites and inks only — it introduces **no new hue**. The
tints below are the sanctioned ones; do not invent others.

```css
:root {
  /* light glass — over the white canvas or photography */
  --wx-glass-fill:       linear-gradient(180deg, rgba(255,255,255,.52), rgba(255,255,255,.34));
  --wx-glass-fill-dense: linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.78)); /* reading surfaces */
  --wx-glass-blur:       blur(30px) saturate(200%) brightness(1.14) contrast(.96);
  --wx-glass-blur-dense: blur(34px) saturate(200%) brightness(1.12) contrast(.96);
  --wx-glass-rim:        linear-gradient(140deg, rgba(255,255,255,.95), rgba(255,255,255,.35) 30%, rgba(255,255,255,.08) 52%, rgba(255,255,255,.7));
  --wx-glass-glint:      linear-gradient(115deg, rgba(255,255,255,.42) 0%, rgba(255,255,255,0) 34%, rgba(255,255,255,0) 64%, rgba(255,255,255,.22) 100%);

  /* dark glass — over the #0e0e0e band or the navy panel */
  --wx-glass-fill-dark:  linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.05));
  --wx-glass-blur-dark:  blur(30px) saturate(180%) brightness(1.06);
  --wx-glass-rim-dark:   linear-gradient(140deg, rgba(255,255,255,.34), rgba(255,255,255,.10) 40%, rgba(255,255,255,.04) 60%, rgba(255,255,255,.22));
}
```

Rules:

- **Thin milk, not paint.** Most of the read comes from the backdrop. The
  `brightness`/`contrast` boost is what keeps `#0e0e0e` labels legible when the slab sits
  over a dark photo — do not drop it.
- **Dense fill for reading surfaces.** A big text surface (mega panel, dropdown, content
  card) uses `--wx-glass-fill-dense`; a chrome slab (nav bar, badge, chip) uses
  `--wx-glass-fill`.
- **Ink on glass never changes.** Black `#0e0e0e` on light glass, white `#ffffff` on dark
  glass. Never tint glass with teal, navy or lime — a glass box over a teal band already
  reads as teal.
- **One material, one radius.** Glass boxes are 18px (14px for small dropdowns and chips).
- **Always ship the fallback.** Wrap in
  `@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))`
  and fall back to an opaque `#ffffff` plate with a `#d9d9d9` hairline — the layout must
  never depend on the blur.
- **Respect `prefers-reduced-transparency`** the same way: opaque plate, no glint.
- Glass replaces the old flat card surface. Hairlines still divide *sections*; glass is for
  *boxes*.

The full slab recipe — rim, glint and shadow stack — lives in `DESIGN.md` under
*Elevation* and the `glass-panel` component.

## Allowed text / background pairs (WCAG 2.1)

| Text | Background | Ratio | Use |
|---|---|---|---|
| `#0e0e0e` | `#ffffff` | 19.3 | any text |
| `#0e0e0e` | `#d9d9d9` | 13.7 | any text |
| `#0e0e0e` | `#dcff00` | 16.9 | any text — incl. the selection highlight |
| `#ffffff` | `#0e0e0e` | 19.3 | any text |
| `#ffffff` | `#102030` | 16.5 | any text |
| `#ffffff` | `#319b8e` | 3.4 | canonical text on teal — buttons, labels, headlines |
| `#102030` | `#ffffff` | 16.5 | any text — inline body links |
| `#102030` | `#d9d9d9` | 11.7 | any text |
| `#319b8e` | `#ffffff` | 3.4 | large text / UI only |

Do not use: black text on a teal surface (brand rule — text on teal is always white, even though black would pass contrast), teal text on offwhite (2.4), navy on black (1.2), white on lime (1.1), teal on lime (3.0), or lime as text on any surface.

**Contrast on glass is measured against the fallback plate, not the blur.** A glass box can
sit over anything, so the numbers above are only guaranteed once the slab's own fill and
brightness boost are in place. Check the worst case — light glass over a dark photograph —
before shipping a new glass surface, and raise the fill opacity rather than darkening the
ink.

## Logo

- Unicolour only: a single ink — white or black — on a teal, black, or white field. Default lockup: white logo on teal.
- No coloured X. The crossing-X device must read in one ink.
