import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'

export type Blog = {
  title: string
  shortDescription: string
  publishedDate: string
  slug: string
  category: string
  cover: string
  body: string
}

export async function getBlogs() {
  const posts = await fs.readdir('./data/blogs/')

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./data/blogs/${file}`
        const fileContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(fileContent)

        return { ...data, body: content } as Blog
      }),
  )
}

export async function getBlog(slug: string) {
  const posts = await getBlogs()
  return posts.find((post) => post.slug === slug)
}
