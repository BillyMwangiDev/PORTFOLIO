// src/app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug, type PostCategory } from '@/lib/blog'
import { Navigation } from '@/components/Navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const SCHEMA_TYPES: Record<PostCategory, string> = {
  'technical': 'TechArticle',
  'thought-leadership': 'Article',
  'case-study': 'BlogPosting',
}

const CATEGORY_LABEL: Record<PostCategory, string> = {
  'technical': 'Technical',
  'thought-leadership': 'Thought Leadership',
  'case-study': 'Case Study',
}

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} — Billy Mwangi`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://billymwangi.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ['Billy Mwangi'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@billymwangidev',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const schemaType = SCHEMA_TYPES[post.category] ?? 'Article'
  const schema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Billy Mwangi',
      url: 'https://billymwangi.com',
    },
    url: `https://billymwangi.com/blog/${post.slug}`,
    keywords: post.tags.join(', '),
    about: post.tags.map(tag => ({ '@type': 'Thing', name: tag })),
  }

  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="relative z-10 min-h-screen pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-stone hover:text-cream-hi transition-colors mb-8 inline-flex items-center gap-2"
        >
          ← All posts
        </Link>

        <header className="mt-6 mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-ember font-medium uppercase tracking-wider">
              {CATEGORY_LABEL[post.category] ?? post.category}
            </span>
            <span className="text-xs text-slate">·</span>
            <span className="text-xs text-slate">{post.readTime} min read</span>
            <span className="text-xs text-slate">·</span>
            <time dateTime={post.date} className="text-xs text-slate">
              {new Date(post.date).toLocaleDateString('en-KE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="text-4xl font-almarai font-bold text-cream-hi leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-stone text-lg leading-relaxed">{post.description}</p>
        </header>

        <article
          className="
            prose prose-invert prose-stone max-w-none
            prose-headings:font-almarai prose-headings:text-cream-hi
            prose-p:text-stone prose-p:leading-relaxed
            prose-a:text-ember prose-a:no-underline hover:prose-a:text-dusk
            prose-code:text-dusk prose-code:bg-smoke/40 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-coal prose-pre:border prose-pre:border-smoke/40 prose-pre:rounded-xl
            prose-blockquote:border-l-ember prose-blockquote:text-stone
            prose-strong:text-cream-hi
            prose-li:text-stone
          "
        >
          <MDXRemote source={post.content} />
        </article>

        <footer className="mt-16 pt-8 border-t border-smoke/40 flex flex-col gap-4">
          <p className="text-sm text-slate">
            Written by{' '}
            <Link href="/" className="text-ember hover:text-dusk transition-colors">
              Billy Mwangi
            </Link>
          </p>
          <Link
            href="/blog"
            className="text-sm text-stone hover:text-cream-hi transition-colors inline-flex items-center gap-2"
          >
            ← Back to all posts
          </Link>
        </footer>
      </main>
    </>
  )
}
