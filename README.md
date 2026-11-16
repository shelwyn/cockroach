# cockroach

A field guide to **Blattodea** — 4,600 species, 320 million years of evolutionary practice, and one very misunderstood insect.

This is a single-page Next.js landing page with an editorial, museum-specimen aesthetic: an animated SVG cockroach, a facts ticker, a species explorer, myth-busting, and a deep-time timeline.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- Tailwind CSS 4 (design tokens in `app/globals.css`)
- `next/font` — Geist, Geist Mono, Instrument Serif
- Zero runtime dependencies beyond the above

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx        fonts, metadata, grain overlay
  page.tsx          the landing page
  globals.css       theme tokens, keyframes, utilities
  icon.svg          favicon
components/
  Roach.tsx         the specimen illustration + logo mark
  SpeciesExplorer.tsx  client-side species browser
```

## Notes

- Colours are defined as Tailwind v4 theme variables (`--color-void`, `--color-lichen`, `--color-amber`, …) in `app/globals.css`.
- All motion respects `prefers-reduced-motion`.
- Facts are drawn from general entomology literature; the "ten times more radiation tolerant than humans" figure is an order-of-magnitude comparison, not a survival guarantee.

## License

MIT — do what you like with it.
