import { Post } from '@/components/markdown/post'
import { getBlog, getBlogs } from '@/services/blogs'
import { formatDate } from '@/utils'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface StaticParams {
  slug: string
}

export const dynamicParams = false

export async function generateStaticParams(): Promise<StaticParams[]> {
  const posts = await getBlogs()

  return posts.map((post) => {
    return {
      slug: `${post.slug}`,
    }
  })
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page(props: PageProps) {
  const params = await props.params;

  const {
    slug
  } = params;

  const post = await getBlog(slug)

  if (!post) return notFound()

  return (
    <main>
      <article className="mx-auto mb-10 max-w-4xl px-4">
        <header className="pt-10">
          <h1 className="text-4xl font-extrabold leading-[1.2] text-slate-900 md:text-5xl md:leading-[1.2]">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Published on: {formatDate(post.publishedDate)}
          </p>
        </header>

        <section className="my-5">
          <figure className="relative h-[250px] w-full md:h-[320px] lg:h-[400px] xl:h-[450px]">
            <Image
              src={post.cover}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            {/* <figcaption className="mt-2 text-center text-sm text-gray-500">
              {post.title || 'Cover image for the article'}
            </figcaption> */}
          </figure>
        </section>

        <section className="prose lg:prose-xl">
          <Post>{post.body}</Post>
        </section>
      </article>
    </main>
  )
}
