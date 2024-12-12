import { FC } from 'react'
import VerticalBlogCard from './VerticalBlogCard'
import HorizontalBlogCard from './HorizontalBlogCard'

interface BlogPost {
  title: string
  shortDescription: string
  cover: string
  slug: string
  publishedDate: string
  estimatedTimeToRead?: string
}

interface BlogListProps {
  posts: BlogPost[]
  type?: 'vertical' | 'horizontal'
}

const BlogList: FC<BlogListProps> = ({ posts, type = 'vertical' }) => {
  const isVertical = type === 'vertical'

  if (isVertical) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <VerticalBlogCard key={post.slug} post={post} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <HorizontalBlogCard key={post.slug} post={post} />
        ))}
      </div>
    )
  }
}

export default BlogList
