# Ladang Senja — concept villa site

A concept website for a fictional boutique villa in Ubud, Bali. Built with [Astro](https://astro.build) as a fully static site.

**Ladang Senja is not a real business.** This is a portfolio project by I Gede Eka Surajati.

## What's inside

- **Astro static site generation**: one page per villa is generated at build time from `src/data/site.js` (`getStaticPaths` in `src/pages/villas/[slug].astro`).
- **Content separated from layout**: all names, prices and copy live in `src/data/site.js`.
- **Illustrated scenes in SVG** (`src/components/Scene.astro`) instead of stock photos, with three palettes (dawn, noon, dusk).
- **Vanilla JS enquiry form** on the home page: live price estimate (nights × rate), guest limits per villa, date checks, and pre-selecting a villa via `?villa=slug`. It does not send data anywhere.
- **English and Indonesian**: English lives at `/`, Indonesian at `/id/`, with an EN/ID switch in the header that keeps you on the same page. Interface strings are in `src/i18n/ui.js`; villa and experience copy is stored per language in `src/data/site.js`.
- Warm, earthy palette with Cormorant Garamond + DM Sans, responsive down to 360px, `prefers-reduced-motion` respected.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # outputs static files to dist/
```

## Deploy on Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, "Add New → Project", import the repo. Vercel detects Astro automatically.
3. Deploy.

## Ideas to extend

- Replace SVG scenes with real photography and Astro's `<Image />` for optimisation.
- Connect the form to a real endpoint (Formspree, or a small Node/serverless function).
