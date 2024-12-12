import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/BlogNavbar'
import Newsletter from '@/components/newsletter/Newsletter'
import { getBlog } from '@/services/blogs'
import { Metadata } from 'next'

interface PageParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: PageParams): Promise<Metadata | null> {
  const params = await props.params;
  const post = await getBlog(params.slug)

  if (!post) return null

  const { title, shortDescription: description, cover, slug } = post

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug}`

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    openGraph: {
      title,
      description,
      url,
      images: cover
        ? [
            {
              url: cover,
              width: 800,
              height: 600,
            },
          ]
        : undefined,
      siteName: 'Taleemify',
      type: 'website',
    },
    twitter: {
      title,
      description,
      images: cover
        ? [
            {
              url: cover,
              width: 800,
              height: 600,
            },
          ]
        : undefined,
      card: 'summary_large_image',
      creator: '@Basit_Miyanji',
    },
  }

  return metadata
}

const MdxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
}

export default MdxLayout
