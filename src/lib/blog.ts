import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { z } from 'zod'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  category: z.enum(['technical', 'thought-leadership', 'case-study']),
  tags: z.array(z.string()).default([]),
  readTime: z.number().default(5),
  updatedAt: z.string().optional(),
})

export type PostCategory = z.infer<typeof postSchema>['category']

export type Post = z.infer<typeof postSchema> & { slug: string; content: string }

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      return { slug, content, ...postSchema.parse(data) }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, content, ...postSchema.parse(data) }
}
