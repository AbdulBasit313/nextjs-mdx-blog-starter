import { categories, description, faqs, title } from '@/appData'
import Banner from '@/components/banner/SimpleBanner'
import BlogList from '@/components/blog/BlogList'
import BlogCard from '@/components/blog/MinimalCard'
import CategoryList from '@/components/category/CategoryList'
import Faq from '@/components/faq/Faq'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/BlogNavbar'
import Newsletter from '@/components/newsletter/Newsletter'
import SectionHeading from '@/components/sectionHeading/ColoredSectionHeading'
import { getBlogs } from '@/services/blogs'

export default async function Home() {
  const posts = await getBlogs()

  return (
    <>
      <Navbar />
      <Banner title={title} description={description} />

      <div className="mx-auto max-w-6xl px-3">
        <CategoryList categories={categories} />

        <section className="mt-12">
          <SectionHeading
            title={['Latest', 'Articles']}
            subtitle="Diverse Range of articles related to Artificial Intelligence"
          />

          <div className="grid gap-x-14 gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((blog) => (
              <BlogCard key={blog.slug} post={blog} />
            ))}
          </div>
        </section>

        <section className="my-16">
          <SectionHeading
            title={['Popular', 'Articles']}
            subtitle="Diverse Range of articles related to Artificial Intelligence"
          />

          <BlogList posts={posts} type="horizontal" />
        </section>

        <Faq items={faqs} />
        <Newsletter />
      </div>

      <Footer />
    </>
  )
}
