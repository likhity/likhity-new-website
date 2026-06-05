import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDir)
  return fileNames
    .filter(fn => fn.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const { data } = matter(fs.readFileSync(path.join(postsDir, fileName), 'utf8'))
      return { slug, ...data, date: data.date?.toISOString?.() ?? data.date }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostContent(slug) {
  const fullPath = path.join(postsDir, `${slug}.mdx`)
  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
  return { frontmatter: { ...data, date: data.date?.toISOString?.() ?? data.date }, content }
}
