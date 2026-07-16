# Haul-Calc

Free, client-side trucking calculators for owner-operators. Built with [Astro](https://astro.build), deployed as a fully static site — no backend, no database, no accounts.

**Live site:** https://haul-calc.com (pending DNS setup)

## Stack

- Astro 5 (static output) + `@astrojs/sitemap`
- Vanilla JS per tool, runs 100% in the browser
- No analytics-heavy scripts, no external APIs, no paid dependencies

## Commands

```sh
npm install
npm run dev      # local dev at localhost:4321
npm run build    # static build to dist/
```

## Adding a tool

1. Create `src/pages/<tool-slug>.astro` using `ToolLayout` (see `cost-per-mile-calculator.astro` as reference).
2. Provide unique `metaTitle` + `description`, FAQs (rendered + FAQPage schema), and related links.
3. Keep the tool above the fold; content and FAQ below.
4. Link it from `src/pages/index.astro` and from related tools.

Project context and decision log: see `CLAUDE.md` and `DECISOES.md` (in Portuguese).
