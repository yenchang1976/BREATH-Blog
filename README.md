# BREATH Blog

**BREATH — Breath · Rest · Energy · Awareness · Tranquillity · Health**

A free, static health blog built with Astro and Markdown for GitHub + Cloudflare Pages.

## Included

- Responsive home page
- Articles index with search
- Individual article pages
- Categories: Breathing, Sleep, Mindfulness, Research
- About page and medical disclaimer
- RSS feed
- Favicon and basic SEO metadata
- Markdown-based article management

## Deploy to Cloudflare Pages (free)

1. Create a GitHub repository named `breath-blog`.
2. Upload the contents of this ZIP to the repository root. `package.json` must be at the root.
3. In Cloudflare, open **Workers & Pages** and create a Pages project connected to that GitHub repository.
4. Set the build command to `npm run build`.
5. Set the build output directory to `dist`.
6. Deploy. Cloudflare will give you a `*.pages.dev` URL.

Framework preset may be set to `Astro` if available. No custom domain, database, or VPS is needed.

## Add an article

Create a `.md` file inside `src/content/blog/`, e.g. `sleep-apnoea-basics.md`:

```md
---
title: "Understanding Sleep Apnoea"
description: "A short introduction to obstructive sleep apnoea."
pubDate: 2026-10-17
category: "Sleep"
tags: ["sleep", "OSA"]
draft: false
---

Write the article in Markdown. Add headings, lists, links, and references as needed.
```

Allowed categories: `Breathing`, `Sleep`, `Mindfulness`, `Research`.
Set `draft: true` to hide an article from the public site.

## Cost

This starter uses free software and is designed for free GitHub and Cloudflare plans. You do not need to buy a domain or rent a server to get started.
