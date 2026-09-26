# Apex MEP Contract Solutions Inc. — Website

Official marketing website for **Apex MEP Contract Solutions Inc.**, an Ontario-incorporated
professional-services company (MEP contract management, construction procurement & project support).

Built with **[Astro](https://astro.build)** — fast, static, and SEO-optimised.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start local dev server → http://localhost:4321
npm run build    # build production site into /dist
npm run preview  # preview the production build locally
```

Requires Node.js 18+ (developed on Node 24).

---

## Project structure

```
src/
├─ data/site.ts          ← ALL content & company data (single source of truth)
├─ layouts/BaseLayout.astro ← <head>, SEO meta, JSON-LD, header + footer
├─ components/           ← Header, Footer, Icon, CTA
└─ pages/                ← one .astro file per page (file-based routing)
   ├─ index.astro        → /            (Home)
   ├─ about.astro        → /about/
   ├─ services.astro     → /services/
   ├─ industries.astro   → /industries/
   ├─ why-choose-us.astro→ /why-choose-us/
   ├─ contact.astro      → /contact/
   └─ 404.astro
public/                  ← static files (favicon, og-image, robots.txt)
```

**To edit text, phone numbers, services, etc. — edit `src/data/site.ts`.** Almost all
content flows from that one file.

---

## ✅ Before you go live — replace these placeholders

| What | Where | Current placeholder |
|------|-------|---------------------|
| Production domain | `astro.config.mjs` → `site` + `public/robots.txt` | `https://www.apexmepsolutions.ca` |
| Business email | `src/data/site.ts` → `company.email` | `info@apexmepsolutions.ca` |
| Phone number | `src/data/site.ts` → `company.phone` | *(empty — hidden until set)* |
| LinkedIn URL | `src/data/site.ts` → `company.linkedin` | *(empty — hidden until set)* |
| Contact form backend | `src/pages/contact.astro` → `<form action=...>` | Formspree placeholder |

### Contact form
The form is ready but needs a backend to actually deliver messages. Easiest no-server options:
- **Formspree** — set `action="https://formspree.io/f/XXXXXXXX"`
- **Web3Forms** — add `<input type="hidden" name="access_key" value="...">`
- **Netlify Forms** — add the `netlify` attribute to the `<form>` (only works when hosted on Netlify)

Until then, the "Email us directly" link on the contact page always works.

---

## Accurate company data used

All content is taken from official sources:
- **Legal name:** APEX MEP CONTRACT SOLUTIONS INC.
- **Ontario Corporation No.:** 1001747324
- **Incorporated:** September 18, 2026 (Ontario Business Corporations Act)
- **Registered office:** 21 King Street West, Hamilton, ON L8P 4W7, Canada
- **Founder / CEO:** Muhammad Azeem Ashraf (100% owner)

---

## SEO features included
- Per-page unique `<title>` + meta description
- Canonical URLs, Open Graph & Twitter cards
- `ProfessionalService` JSON-LD structured data (name, address, founder, area served, corp no.)
- Automatic `sitemap-index.xml` (via `@astrojs/sitemap`) + `robots.txt`
- Semantic HTML, accessible nav, `en-CA` locale, fast static output (near-zero JS)
- Mobile-first responsive layout

---

## Logo & brand assets

The logo is the **Apex peak** monogram — a geometric "A" formed as a summit, with an
amber apex tip (navy `#0e2a47` + amber `#f3a534`).

| File | Use |
|------|-----|
| `public/logo.svg` | Horizontal logo (mark + wordmark) — light backgrounds |
| `public/logo-white.svg` | Horizontal logo — dark backgrounds |
| `public/logo-mark.svg` | Square icon only (app icon, social avatar) |
| `public/favicon.svg` | Browser tab icon |
| `public/og-image.svg` / `.png` | Social-share preview image |
| `public/logo-png/` | Ready-made PNGs (LinkedIn, email, print): 512/192 icons, 1200px horizontal (light + white), OG image |

The header/footer render the mark from `src/components/LogoMark.astro` (it uses
`currentColor`, so it adapts to any background). To regenerate the PNGs after editing
an SVG: `npm install --no-save sharp && node scripts/render-logo.mjs`.

## Deploy
The build output in `/dist` is fully static — host it anywhere:
**Netlify, Vercel, Cloudflare Pages, GitHub Pages,** or any static host.
Most just need: build command `npm run build`, publish directory `dist`.
