# BREATH Blog

A free, static blog starter for **BREATH — Breath · Rest · Energy · Awareness · Tranquillity · Health**.

Built with Astro and Markdown. Designed for GitHub + Cloudflare Pages, with no paid hosting, database, or domain required.

## Pages included

- Home page
- Articles index with client-side search
- Individual article pages
- Category pages: Breathing, Sleep, Mindfulness, Research
- About page
- RSS feed
- Responsive layout and basic SEO metadata

## Add a new article

Create a Markdown file inside `src/content/blog/`, for example `sleep-apnoea-basics.md`:

```md
---
title: "Understanding Sleep Apnoea"
description: "A short introduction to obstructive sleep apnoea."
pubDate: 2026-10-17
category: "Sleep"
tags: ["sleep", "OSA"]
draft: false
---

Write your article here. Use Markdown headings, lists, links, and images.
```

Allowed categories are `Breathing`, `Sleep`, `Mindfulness`, and `Research`.
Set `draft: true` to keep an article out of the published site.

## Publish for free with GitHub + Cloudflare Pages

1. Create a new **public** GitHub repository named `breath-blog` (public repositories are free; choose private if you prefer and confirm your Cloudflare integration can access it).
2. Upload the contents of this project to the repository. Upload the files inside this folder, not the enclosing folder itself.
3. In Cloudflare Dashboard, open **Workers & Pages** → **Create** → **Pages** → **Connect to Git** (wording may vary).
4. Connect GitHub and select `breath-blog`.
5. Set:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy. Cloudflare will provide a `*.pages.dev` URL.

No custom domain is needed. A future GitHub commit will trigger a new deployment.

## Local preview (optional)

Requires Node.js installed on your computer:

```bash
npm install
npm run dev
```

## Before launch

- Replace the sample welcome article with your first real article.
- Add your preferred author biography to `src/pages/about.astro`.
- When the actual Pages URL is known, update `site` in `astro.config.mjs` and the sitemap URL in `src/pages/robots.txt.ts`.
- Add citations and carefully review all medical content before publication.

## Cost

The starter code is free. GitHub Free and Cloudflare Pages have free plans. You do not need to buy a domain or rent a VPS for the initial version.
