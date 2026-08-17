# UI kit — weXelerate marketing site

A click-through recreation of the surface described in the source repo's `DESIGN.md`
(sticky glass nav → split hero with image accordion → stats pill → programs grid →
dark feature band → tint testimonials band → dark footer).

| File | What it holds |
|---|---|
| `index.html` | Mounts the kit; nav switches between Home / Programs / Events / Contact. |
| `Chrome.jsx` | `SiteHeader` (NavBar), `SiteFooter` (5-column dark footer + newsletter), `Placeholder`. |
| `Home.jsx` | Hero + accordion, stats pill, 5-up programs grid, dark feature cards, testimonials. |
| `Programs.jsx` | Filter pills, program rows on glass, application modal. |
| `Events.jsx` | Photographic feature card, event list, tour form, confirmation toast on glass. |
| `Contact.jsx` | Two-column form on a glass panel + location block. |

**Imagery:** the provided sources contained no photography, so every image area renders as a
labelled `#d9d9d9` plate. Drop real photos in and the black bottom gradient carries the
white text stack as specified.

Everything else composes the system's own components (`Button`, `Card`, `GlassPanel`,
`NavBar`, `NavLink`, `Input`, `EyebrowLabel`, `SectionBand`, `Icon`) — no primitive is
re-implemented here.
