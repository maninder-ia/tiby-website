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
    (<header className="bg-white sticky top-0 z-50 py-4 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10">
              <img
                src="/logo-site.png"
                alt="Tiby.Ai Logo"
                className="h-full w-auto object-contain border-r"
                style={{ borderRadius: "50px" }}
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-[#41228e]/80 hover:text-[#41228e] transition-colors font-medium">
              Features
            </Link>
            <Link href="#use-cases" className="text-[#41228e]/80 hover:text-[#41228e] transition-colors font-medium">
              Use Cases
            </Link>
            <Link href="#solutions" className="text-[#41228e]/80 hover:text-[#41228e] transition-colors font-medium">
              Solutions
            </Link>
            <Link href="#testimonials" className="text-[#41228e]/80 hover:text-[#41228e] transition-colors font-medium">
              Testimonials
            </Link>
          </nav>
          <DemoButton />
        </div>
      </div>
    </header>)
  );
}

