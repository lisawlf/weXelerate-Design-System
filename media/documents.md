# Documents and print

Copy [`templates/document/OnePager.html`](../templates/document/OnePager.html) for a
factsheet, one-pager, agenda, or short report.

## The page

- **A4 portrait**, 794×1123px at 96dpi in HTML, 210×297mm in print.
- **20mm margin** on all four sides (`--wx-doc-pad-x` / `-y`, 76px in HTML).
- Letterhead: wordmark top-left at ~170px (25mm), mono locator top-right. No coloured band
  across the head of the page, no rule directly under the logo.
- Footer: hairline, then contact details in mono. Multi-page documents put the page number
  bottom-right in the same mono style.

## Type

| Role | Size | Face |
|---|---|---|
| Document title | 34px / ~19pt, `-1px` | Sora 700 |
| Section heading | 19px / ~11pt | Sora 700 |
| Body | 15px / ~10.5pt, 1.55 line height | Barlow 400 |
| Caption, metadata, footer | 12px / ~8pt uppercase | JetBrains Mono |

Measure matters more here than anywhere else: keep body copy to **60–75 characters a line**.
On A4 that is roughly a 600px column, which is why the template's paragraphs are capped
rather than running the full page width.

## Print rules

- **Glass flattens.** On paper a `.wx-glass` panel becomes an opaque plate with an `#e8e8e8`
  hairline and no shadow. [`tokens/print.css`](../tokens/print.css) does this for you. Do not
  fake a blur with a grey fill.
- **Print with margins set to None.** The page carries its own margin; a printer margin on
  top of it shifts everything and crops the footer.
- **Colour on paper.** The palette is defined in RGB/hex. For anything going to a commercial
  printer, the teal, navy and lime need proper CMYK or spot conversions signed off against a
  physical proof — lime in particular is outside CMYK gamut and will print noticeably duller
  than it looks on screen. Do not let a printer's automatic conversion decide this. **No
  approved CMYK or Pantone values exist in this repo yet**; get them made once and add them
  to [`weXelerate-brand-colour-system.md`](../weXelerate-brand-colour-system.md).
- **Hairlines are 1px on screen and 0.25pt in print.** Below that some presses drop them.
- **Never rely on the `#aaa` metadata grey in print** — it is already below WCAG AA on
  screen and it disappears on uncoated stock. Step to `#777` for anything printed.

## Word and PDF

If a document has to live in Word rather than HTML:

- Install Sora, Barlow and JetBrains Mono on the machine first. All three are free from
  Google Fonts. Without them Word substitutes, and the document stops looking like
  weXelerate.
- Build styles — Title, Heading 1, Heading 2, Body, Caption — mapped to the table above.
  Do not let people apply formatting by hand.
- Set the theme colours to `#0e0e0e`, `#ffffff`, `#319b8e`, `#102030`, `#dcff00`, `#d9d9d9`.
- Tables: hairlines only, `#0e0e0e` under the header row, `#ebebeb` between rows, no fills.

Export to PDF rather than sending the source file, so the fonts travel with it.
