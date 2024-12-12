import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const title = 'Resources Library'

export const description =
  'Discover a curated collection of the latest resources, templates, and strategies designed to help you excel in technical interviews and build your expertise with confidence'

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  applicationName: 'Learn Now',
  title,
  description,
  category: 'education',
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  openGraph: {
    title,
    description,
    url,
    siteName: 'Learn Now',
    type: 'website',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@Basit_Miyanji',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
