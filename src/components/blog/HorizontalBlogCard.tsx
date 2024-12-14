import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { formatDate } from '../../utils'

interface BlogPost {
  title: string
  shortDescription: string
  cover: string
  slug: string
  publishedDate: string
  estimatedTimeToRead?: string
}

interface BlogCardProps {
  post: BlogPost
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  const {
    title,
    shortDescription,
    cover,
    slug,
    publishedDate,
    estimatedTimeToRead = '3 min',
  } = post

  return (
    <div key={slug} className="flex flex-col gap-3 rounded-lg border p-3 lg:flex-row">
      <figure className="relative mt-1 h-24 min-w-40 overflow-hidden bg-gray-200">
        <Image
          className="rounded-md object-cover transition-transform duration-300 hover:scale-125"
          src={cover}
          alt={title}
          fill={true}
          sizes="100%"
          // Optional: Replace with a suitable placeholder
          // placeholder="blur"
          // blurDataURL="/placeholder.png"
        />
      </figure>

      <div>
        <Link href={`/blogs/${slug}`}>
          <h3 className="mb-2 text-xl font-bold text-primary transition-colors duration-200 hover:text-theme">
            {title}
          </h3>
        </Link>
        <p className="text-gray-700">{shortDescription}</p>
        <p className="mt-4 text-sm font-semibold text-gray-500">
          {formatDate(publishedDate)} | {estimatedTimeToRead}
        </p>
      </div>
    </div>
  )
}

export default BlogCard
