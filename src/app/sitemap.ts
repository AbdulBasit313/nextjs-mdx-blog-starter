import { getBlogs } from '@/services/blogs'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!
  const blogsPageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`

  const blogs = await getBlogs()

  return [
    // home page
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.7,
    },
    // main blog page url
    {
      url: blogsPageUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.7,
    },
    // blog page
    ...(blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.7,
    })) as MetadataRoute.Sitemap),
  ]
}
