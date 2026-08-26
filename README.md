# Global Elite Crew — Marketing & Landing Site

Production site for **Global Elite Crew For Consultation**, a Total Quality Management (TQM) and ISO/certification-preparation consultancy based in Alexandria, Egypt → [globalelitecrew.com](https://globalelitecrew.com)

Refactored from a static HTML/Bootstrap/jQuery site into **Next.js 16 (App Router) + TypeScript strict + Tailwind CSS v4**, deployed on **Vercel**. The original codebase is archived untouched under [`old-code/`](./old-code) for reference.

## Core product: SEO & Answer Engine Optimization

This is a landing page at heart — search visibility is a first-class feature:

| Surface | Implementation |
|---|---|
| Metadata | Per-page unique EN/AR titles & descriptions via `buildMetadata()` (`src/lib/seo.ts`) |
| Canonical | Every page pins `https://globalelitecrew.com/<locale>/<path>` |
| Hreflang | `en`, `ar` and `x-default` alternates on every page **and** inside `sitemap.xml` |
| Robots | `src/app/robots.ts` — allows all, explicitly welcomes GPTBot / OAI-SearchBot / ClaudeBot / PerplexityBot / Google-Extended |
| Sitemap | Auto-generated at `src/app/sitemap.ts` with per-URL hreflang alternates |
| Structured data | `ProfessionalService` graph (NAP, geo, founder, socials), per-service `Service` nodes, `BreadcrumbList` (`src/lib/schema.tsx`) |
| OG images | Dynamic branded 1200×630 cards per locale via `next/og` |
| AEO | [`public/llms.txt`](./public/llms.txt) — machine-readable company summary for LLM grounding |

## Bilingual architecture

- Routes live under `src/app/[locale]/` — `/en/*` (LTR, Montserrat/Outfit) and `/ar/*` (RTL, Cairo).
- **All user-facing copy** lives in typed dictionaries under `src/i18n/`; `src/i18n/types.ts` validates both locales against one contract at compile time.
- `src/proxy.ts` negotiates `Accept-Language` at `/` and bridges legacy flat URLs.
- Permanent redirects in `next.config.ts`: `/about → /en/about`, `/about-arabic → /ar/about`, etc.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000 -> redirects to /en or /ar
npm run build   # type-checks dictionaries + generates all metadata routes
npm run lint    # eslint flat config (next/core-web-vitals + next/typescript)
```

Design tokens are defined CSS-first in `src/app/globals.css` (`@theme`): `--color-brand-*` (#3AB2FE family), `--color-accent-*` (#FFAE00 family), `--color-ink-*` (#232B32 family). Use token utilities only — no ad-hoc hex values.

## Environment variables

Copy `.env.example` → `.env.local` (and configure the same keys in Vercel):

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | for the contact form | EmailJS service id |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | for the contact form | EmailJS template id |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | for the contact form | EmailJS public key |
| `NEXT_PUBLIC_GA_ID` | optional | GA4 measurement id; omit to disable analytics |

The form ships with the legacy spam heuristics plus a honeypot field; it degrades gracefully when ids are missing.

## Repository map

See [`AGENTS.md`](./AGENTS.md) for the full map and conventions — including pointers to the Next.js documentation bundled at `node_modules/next/dist/docs/` which always matches the installed version.

## Deploying

1. Remove GitHub Pages from this repo (Settings → Pages) — the CNAME flow is retired; the CNAME file only survives inside `old-code/`.
2. Import the repository in Vercel; framework preset auto-detects Next.js.
3. Add the environment variables above in Project Settings.
4. Point `globalelitecrew.com` DNS at Vercel (apex A record + `www` CNAME) and add both domains to the project; apex is canonical.

## Contact facts used across the site

Address: 49 Street 5 Somuha, Alexandria, Egypt · Tel: +2 03 4253255 / +2 01143711439 · ghada_esmat@globalelitecrew.com

