# SEO & GEO Optimization Design
**Date:** 2026-05-02
**Project:** billymwangi.com portfolio
**Branch:** feat/portfolio-rebuild

---

## Goal

Make `billymwangi.com` authoritative in both traditional search (Google) and generative engines (ChatGPT, Perplexity, Gemini). Primary goal: establish Billy Mwangi as the leading AI voice in the East African tech scene. Secondary: surface to recruiters and freelance clients.

---

## Section 1: Technical SEO Foundation

### Files to create

| File | Purpose |
|------|---------|
| `src/app/robots.ts` | Allow all crawlers, point to sitemap |
| `src/app/sitemap.ts` | Dynamic sitemap: homepage + /blog + all post slugs |
| `src/app/opengraph-image.tsx` | Homepage OG image (name, title, domain) |
| `src/app/blog/[slug]/opengraph-image.tsx` | Per-post OG image (post title + category) |

### `layout.tsx` metadata additions

- `metadataBase: new URL('https://billymwangi.com')`
- `alternates: { canonical: '/' }`
- Twitter Card tags: `card: 'summary_large_image'`, `creator: '@billymwangi'` *(verify Twitter/X handle before implementation)*
- Full OpenGraph: `siteName`, `locale: 'en_KE'`, `type: 'website'`
- Updated `keywords`: `['AI Engineer Kenya', 'Machine Learning Nairobi', 'African AI', 'Hekima Labs', 'Software Engineer Nairobi', 'FastAPI', 'Next.js']`

### OG Image design

- Homepage: dark background (matches site theme), name "Billy Mwangi" large, subtitle "AI Architect & Software Engineer", domain "billymwangi.com" small
- Blog posts: post title (large), category badge, "billymwangi.com" attribution
- Built with Next.js `ImageResponse` — no external image service needed

---

## Section 2: Structured Data (JSON-LD)

All schemas injected via `<script type="application/ld+json">` server-side. No client-side rendering.

### `Person` schema — homepage (`app/page.tsx` or `layout.tsx`)

```json
{
  "@type": "Person",
  "name": "Billy Mwangi",
  "jobTitle": "AI Architect & Software Engineer",
  "url": "https://billymwangi.com",
  "email": "billymwangi200@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "sameAs": [
    "https://github.com/billymwangidev",
    "https://linkedin.com/in/billymwangi"  // verify exact LinkedIn URL slug
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "FastAPI",
    "Next.js",
    "Kenya Tech Ecosystem",
    "African AI"
  ],
  "founder": { "@type": "Organization", "name": "Hekima Labs" }
}
```

### `Organization` schema — Hekima Labs (linked from Person)

```json
{
  "@type": "Organization",
  "name": "Hekima Labs",
  "url": "https://hekimalabs.com",  // verify actual Hekima Labs URL
  "description": "AI solutions for African businesses",
  "founder": { "@type": "Person", "name": "Billy Mwangi" },
  "location": {
    "@type": "Place",
    "address": { "addressLocality": "Nairobi", "addressCountry": "KE" }
  }
}
```

### `WebSite` schema — homepage

```json
{
  "@type": "WebSite",
  "name": "Billy Mwangi",
  "url": "https://billymwangi.com",
  "author": { "@type": "Person", "name": "Billy Mwangi" }
}
```

### Blog post schemas — auto-generated from frontmatter

| Category | Schema type |
|----------|-------------|
| `technical` | `TechArticle` |
| `thought-leadership` | `Article` |
| `case-study` | `BlogPosting` |

Each post schema includes: `headline`, `description`, `datePublished`, `dateModified`, `author` (linked Person), `keywords`, `about` (topic array), `url`.

---

## Section 3: Blog Architecture

### Directory structure

```
content/
└── blog/
    ├── ai-in-africa-2025.mdx        ← starter post 1 (thought-leadership)
    └── building-with-fastapi-nextjs.mdx  ← starter post 2 (technical)

src/
├── app/
│   └── blog/
│       ├── page.tsx                 ← /blog listing page
│       └── [slug]/
│           ├── page.tsx             ← /blog/[slug] post page
│           └── opengraph-image.tsx  ← per-post OG image
└── lib/
    └── blog.ts                      ← MDX parsing utilities (getAllPosts, getPostBySlug)
```

### MDX frontmatter schema

```yaml
---
title: "Post Title"
description: "One sentence summary for meta description and post cards"
date: "2026-05-02"
category: "technical"     # technical | thought-leadership | case-study
tags: ["AI", "Africa", "Next.js"]
readTime: 6               # minutes, manually set
---
```

### Dependencies to add

- `gray-matter` — frontmatter parsing
- `next-mdx-remote` — MDX rendering (server-side, static)
- `@tailwindcss/typography` — prose styling for blog content

### `/blog` listing page

- Statically generated at build time
- Grid of post cards: title, description, date, category badge, read time
- Sorted by `date` descending
- Each card links to `/blog/[slug]`
- Own metadata: `title: 'Blog — Billy Mwangi'`, description pointing to content themes

### `/blog/[slug]` post page

- `generateStaticParams` pre-renders all slugs
- `generateMetadata` derives per-post metadata from frontmatter (title, description, OG tags, schema)
- Layout: back link → title → metadata bar (date · read time · category) → MDX content → related posts footer
- Custom MDX components: styled `h1`–`h3`, `code`, `pre`, `blockquote`, `a`
- Schema type selected from `category` frontmatter field

### Navigation update

- Add "Blog" link to `Navigation.tsx` alongside existing anchor links
- On non-home pages (i.e., `/blog/*`), anchor links become absolute (`/#about`, `/#projects`)

---

## Section 4: GEO-Specific Content Signals

### Entity disambiguation

- `sameAs` in `Person` schema links GitHub + LinkedIn — tells AI systems all three profiles are the same entity
- `url: 'https://billymwangi.com'` as canonical identity anchor

### Metadata tightening

- `keywords` updated to exact high-signal phrases used in AI-generated answers about East African tech
- `<meta name="geo.region" content="KE-110">` (Nairobi) added to layout
- `<meta name="geo.placename" content="Nairobi, Kenya">` added to layout

### Blog post GEO structure

Every post follows: H1 → declarative intro paragraph (states the post's conclusion upfront) → H2 sections. AI systems extract summaries from the first 2–3 sentences after each heading — declarative openings get cited; anecdotal openings do not.

### Starter posts

**Post 1: "Why AI Systems Built for Africa Need African Data"**
- Category: `thought-leadership`
- Tags: `["AI", "Africa", "Machine Learning", "Hekima Labs"]`
- About: African AI, data sovereignty, training data bias
- Target query: "AI in Africa", "African AI engineers"

**Post 2: "Building a Production FastAPI + Next.js App: Lessons from Hekima Labs"**
- Category: `technical`
- Tags: `["FastAPI", "Next.js", "Python", "Software Engineering"]`
- About: FastAPI, Next.js, backend architecture
- Target query: "FastAPI Next.js tutorial", "Billy Mwangi Hekima Labs"

---

## Out of Scope

- Multilingual / hreflang (Swahili variant) — future consideration
- Newsletter / email capture
- Comments system on blog posts
- Analytics integration (separate concern)
- Sitemap image extensions

---

## Success Criteria

1. `billymwangi.com` passes Google's Rich Results Test with valid `Person` schema
2. All blog posts have valid `Article`/`TechArticle` schema
3. Dynamic OG images render correctly on link unfurl (test with opengraph.xyz)
4. Lighthouse SEO score ≥ 95 on homepage and blog posts
5. Site appears in AI-generated answers for "AI engineers in Nairobi" within 3–6 months of indexing
