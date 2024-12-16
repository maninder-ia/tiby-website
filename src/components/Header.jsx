'use client';

import Link from 'next/link'
import DemoButton from './DemoButton';

export default function Header() {
  // useEffect(() => {
    // const handleScroll = (e: Event) => {
      // e.preventDefault()
      // const target = e.target as HTMLAnchorElement
      // const id = target.getAttribute('href')?.slice(1)
      // if (id) {
        // const element = document.getElementById(id)
        // element?.scrollIntoView({ behavior: 'smooth' })
      // }
    // }

    // const links = document.querySelectorAll('a[href^="#"]')
    // links.forEach(link => {
      // link.addEventListener('click', handleScroll)
    // })

    // return () => {
      // links.forEach(link => {
        // link.removeEventListener('click', handleScroll)
      // })
    // }
  // }, [])

  return (
    (<header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full text-[#41228e]">
                <circle cx="20" cy="20" r="8" fill="currentColor" />
                <path
                  d="M20 4a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3" />
                <path
                  d="M20 8a12 12 0 1 1 0 24 12 12 0 0 1 0-24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-[#41228e] tracking-wide">Tiby.Ai</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="text-[#542cb7] hover:text-[#2e1865]">
              Features
            </Link>
            <Link href="#solutions" className="text-[#542cb7] hover:text-[#2e1865]">
              Solutions
            </Link>
            <Link href="#testimonials" className="text-[#542cb7] hover:text-[#2e1865]">
              Testimonials
            </Link>
          </nav>
          <DemoButton />
        </div>
      </div>
    </header>)
  );
}

