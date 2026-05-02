import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const CATEGORY_LABEL: Record<string, string> = {
  'technical': 'Technical',
  'thought-leadership': 'Thought Leadership',
  'case-study': 'Case Study',
}

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.title ?? 'Blog Post'
  const category = post?.category ? (CATEGORY_LABEL[post.category] ?? post.category) : 'Article'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            color: '#D4824A',
            fontSize: 20,
            marginBottom: 32,
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
            letterSpacing: 3,
          }}
        >
          {category}
        </div>
        <div
          style={{
            color: '#E1E0CC',
            fontSize: 58,
            fontWeight: 800,
            fontFamily: 'sans-serif',
            lineHeight: 1.15,
            marginBottom: 48,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: '#6B7280',
            fontSize: 24,
            fontFamily: 'sans-serif',
          }}
        >
          Billy Mwangi · billymwangi.com
        </div>
      </div>
    ),
    { ...size }
  )
}
