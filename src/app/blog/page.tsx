import { getAllPosts, type PostCategory } from '@/lib/blog'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Billy Mwangi',
  description: 'Thoughts on AI, software engineering, and building technology for Africa.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Billy Mwangi',
    description: 'Thoughts on AI, software engineering, and building technology for Africa.',
    url: 'https://billymwangi.com/blog',
    type: 'website',
  },
}

const CATEGORY_LABEL: Record<PostCategory, string> = {
  'technical': 'Technical',
  'thought-leadership': 'Thought Leadership',
  'case-study': 'Case Study',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-28 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-almarai font-bold text-cream-hi mb-4">Blog</h1>
        <p className="text-stone mb-12 text-lg">
          Thoughts on AI, software engineering, and building technology for Africa.
        </p>

        <div className="flex flex-col gap-6">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 bg-coal/50 border border-smoke/40 rounded-2xl hover:border-ember/40 transition-all duration-200"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs text-ember font-medium uppercase tracking-wider">
                  {CATEGORY_LABEL[post.category] ?? post.category}
                </span>
                <span className="text-xs text-slate">·</span>
                <span className="text-xs text-slate">{post.readTime} min read</span>
                <span className="text-xs text-slate">·</span>
                <time
                  dateTime={post.date}
                  className="text-xs text-slate"
                >
                  {new Date(post.date).toLocaleDateString('en-KE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h2 className="text-xl font-almarai font-bold text-cream-hi group-hover:text-dusk transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-stone text-sm leading-relaxed">{post.description}</p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs text-slate bg-smoke/40 px-2 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
