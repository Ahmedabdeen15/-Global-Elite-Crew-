# AGENTS.md

Instructions for AI coding agents (and humans pairing with them) working in this repository.

## Project Overview

Marketing/landing site for **Global Elite Crew for Consultation**, a Total Quality Management (TQM) and ISO/certification-preparation consultancy based in Alexandria, Egypt.

- Refactored from a static HTML/Bootstrap/jQuery site (archived under [`old-code/`](./old-code)) into **Next.js (App Router) + TypeScript + Tailwind CSS v4**, deployed on **Vercel**.
- Core product of this site: **SEO and Answer Engine Optimization (AEO)**. It is a landing page at heart — treat metadata, structured data, bilingual hreflang routing and crawler directives as first-class features, never as afterthoughts.
- Fully bilingual: **English (`en`) and Arabic (`ar`)** with RTL support via the `[locale]` route segment.

## Bundled Next.js Documentation (read before writing framework code)

When Next.js is installed, the complete documentation matching our installed version ships **inside the package**, mirroring the structure of the Next.js documentation site. Always consult the bundled docs instead of guessing APIs from memory:

```
node_modules/next/dist/docs/
```

Agents should locate relevant guides there (Getting Started, Routing/Internationalization, Functions/Metadata generation, Images/Font optimization, Deployment/Vercel, etc.) before implementing changes to:

- Route segments, `layout.tsx` / `page.tsx` conventions
- Metadata API: `generateMetadata`, `metadata` exports, opengraph-image files
- Route handlers, redirects/rewrites, middleware semantics
- Font optimization (`next/font`) and image optimization (`next/image`)

## Repository Map

| Path | Purpose |
|---|---|
| `src/app/` | App Router routes (`[locale]` segment for EN/AR pages) |
| `src/i18n/` | Locale config + typed dictionaries (single source of copy) |
| `src/components/` | UI components (design system shell + section components) |
| `src/lib/` | SEO helpers, site config, JSON-LD builders |
| `public/images/` | Static imagery (kebab-case names copied from legacy site) |
| `public/llms.txt` | Agent-facing machine-readable site summary |
| `old-code/` | Archived legacy static site (reference only — excluded from lint/build) |
| `old-code/assets/images/` | Original unoptimized imagery |

## Conventions

- TypeScript strict mode; path alias `@/*` → `src/*`.
- Tailwind CSS v4 with CSS-first theme tokens defined in `src/app/globals.css` (`--color-brand-*`, `--color-accent-*`, `--color-ink-*`). Use tokens/utility classes only — no ad-hoc hex values, no external CSS frameworks.
- All user-facing strings live in the dictionaries in `src/i18n/`; never hardcode copy in components.
- Icons via `react-icons` (fa6 pack).
- Respect semantic HTML, landmarks, alt text and `prefers-reduced-motion`.
- Do not edit anything under `old-code/`.

## Environment Variables

See `.env.example`. Required for the contact form: EmailJS service/template/public-key ids; optional GA measurement id.
