'use client'

import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="absolute -top-7 right-8 flex size-14 items-center justify-center rounded-full border-[6px] border-[#191F33] bg-[#00AAFF] md:right-16">
      <ArrowUp color="#fff" size={22} />
    </button>
  )
}

export default ScrollToTop
