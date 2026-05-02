# Billy Mwangi — Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Blog**: MDX via `next-mdx-remote`
- **Deployment**: Vercel

## Local Development

**Prerequisites**: Node.js 20+

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages + layouts
│   ├── blog/             # Blog list and [slug] pages
│   └── opengraph-image   # Dynamic OG image generation
├── components/           # Page sections (Hero, About, Skills, Projects, Contact, Footer)
│   └── ui/               # Shared UI primitives
└── lib/                  # Blog parsing, config, shared data

content/blog/             # MDX blog posts
public/
├── resume/               # Downloadable resume PDF
└── ...                   # Static assets
```

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type-check, and build on every push to `main`.

Deployments are handled automatically by Vercel on push to `main`.

## Docker

```bash
docker build -t portfolio .
docker-compose up -d
```
