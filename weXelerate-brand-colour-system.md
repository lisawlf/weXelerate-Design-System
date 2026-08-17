# weXelerate — Brand Colour Rules

Operational colour spec for building weXelerate assets. Apply exactly. Do not use any colour outside this set.

## Model

White = light canvas. Black = ink and dark canvas. Teal = brand colour. Navy = accent. Lime = rare spark. Colour does a job; whitespace dominates.

## Palette

| Token | Function | HEX |
|---|---|---|
| `primary` | Brand colour (teal) | `#319b8e` |
| `accent` | Accent (navy) | `#213959` |
| `whisper` | Rare spark (lime) | `#dcff00` |
| `whitespace` | Light canvas | `#ffffff` |
| `dark-whitespace` | Dark canvas + primary ink | `#0e0e0e` |
| `offwhite` | Subtle background / dividers | `#d9d9d9` |

## Tokens

```css
:root {
  --wx-primary:         #319b8e;
  --wx-accent:          #213959;
  --wx-whisper:         #dcff00;
  --wx-whitespace:      #ffffff;
  --wx-dark-whitespace: #0e0e0e;
  --wx-offwhite:        #d9d9d9;
  --wx-ink:             #0e0e0e; /* body text on light */
  --wx-ink-invert:      #ffffff; /* text on dark / teal / navy */
}
```

```json
{
  "primary": "#319b8e",
  "accent": "#213959",
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
- `whisper` (lime) appears at most once per view, as a small spark (top CTA, highlight). Always black text on it. Never use lime as a background, a large fill, or as text.
- `accent` (navy) is for dark surfaces, section panels, chart depth, and accents on white. Never place navy as a small element on black — it is invisible there.
- `offwhite` is for subtle backgrounds, dividers, borders, and disabled states. Black text only.
- Do not colour-code the four pillars. Colour roles are global; differentiate pillars by type, imagery, and labels.
- Do not introduce any colour outside this palette.

## Allowed text / background pairs (WCAG 2.1)

| Text | Background | Ratio | Use |
|---|---|---|---|
| `#0e0e0e` | `#ffffff` | 19.3 | any text |
| `#0e0e0e` | `#d9d9d9` | 13.7 | any text |
| `#0e0e0e` | `#dcff00` | 16.9 | any text |
| `#ffffff` | `#0e0e0e` | 19.3 | any text |
| `#ffffff` | `#213959` | 11.7 | any text |
| `#ffffff` | `#319b8e` | 3.4 | canonical text on teal — buttons, labels, headlines |
| `#213959` | `#ffffff` | 11.7 | any text |
| `#319b8e` | `#ffffff` | 3.4 | large text / UI only |

Do not use: black text on a teal surface (brand rule — text on teal is always white, even though black would pass contrast), teal text on offwhite (2.4), navy on black (1.7), white on lime (1.1), teal on lime (3.0), or lime as text on any surface.

## Logo

- Unicolour only: a single ink — white or black — on a teal, black, or white field. Default lockup: white logo on teal.
- No coloured X. The crossing-X device must read in one ink.
