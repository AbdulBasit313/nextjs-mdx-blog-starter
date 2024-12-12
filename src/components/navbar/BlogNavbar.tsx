'use client'
import { MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'Blogs', link: '/blogs' },
  { title: 'Categories', link: '/categories' },
]

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const pathname = usePathname()

  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  // Function to determine if the link is active
  const isActive = (link: string) => {
    return pathname === link
      ? 'rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-[#767E94]'
      : 'text-slate-500'
  }

  return (
    <nav className="relative z-20 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-white px-2 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-10">
          {/* hamburger menu or cross icon */}
          <button onClick={handleShowNav} aria-label="Toggle Menu" className="md:hidden">
            {showNav ? (
              <XIcon color="#202020" strokeWidth={3} size={25} />
            ) : (
              <MenuIcon color="#202020" strokeWidth={3} size={25} />
            )}
          </button>
          {/* logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#3e2647] hover:text-gray-950">
            <Image
              src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
              alt="LearnNow"
              width={25}
              height={25}
            />
            <span className="text-lg font-bold">LearnNow</span>
          </Link>
          {/* nav links */}
          <div
            className={`absolute left-0 right-0 -z-10 flex w-full flex-col gap-3 bg-white p-3 shadow transition-all duration-300 ease-in-out md:relative md:left-0 md:right-auto md:top-auto md:z-auto md:flex-row md:shadow-none ${showNav ? 'top-[54px]' : 'top-[-165px]'}`}>
            {navLinks.map(({ title, link }, index) => (
              <Link
                key={index}
                href={link}
                className={`rounded-md px-3 py-2 transition-colors duration-100 ease-linear hover:bg-gray-700 hover:text-white ${isActive(link)}`}
                aria-label={`Go to ${title} page`}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        {/* CTA button */}
        <div>
          <a
            href=""
            type="button"
            className="rounded-lg border bg-theme px-4 py-2 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-orange-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:px-5 sm:py-2.5"
            target="_blank">
            Write for us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
