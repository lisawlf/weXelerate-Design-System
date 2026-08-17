The default content card: a glass slab whose fill *thins* on hover so more backdrop reads through.

```jsx
<Card accentBar eyebrow="Program" title="AI Adoption Lab" description="Twelve weeks with corporates and applied AI startups." linkLabel="Learn more" />
<Card variant="dark" title="Corporate Innovation" description="Programs run inside your organisation." icon={<Icon name="building-2" />} />
<Card variant="photo" image="…" eyebrow="Event" title="Quantum Summit Vienna" />
```

- Program cards open with the 28×2px lime bar (`accentBar`) — one per grid, never per card in bulk.
- Never animate `backdrop-filter`; only `background` and `box-shadow` transition.
- `photo` skips the blur: the black bottom gradient carries legibility instead.
