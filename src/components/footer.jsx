import Link from 'next/link'

export default function Footer() {
  return (
    (<footer className="bg-[#41228e] py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2e1865]/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8">
                <svg viewBox="0 0 40 40" className="w-full h-full text-white">
                  <path
                    d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2zm0 4c7.732 0 14 6.268 14 14s-6.268 14-14 14S6 27.732 6 20 12.268 6 20 6zm0 6c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white tracking-wider">Tiby.Ai</span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Empowering businesses with intelligent AI solutions for a smarter future.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#features" className="text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#use-cases" className="text-white/70 hover:text-white transition-colors">
                Use Cases
              </Link>
              <Link href="#solutions" className="text-white/70 hover:text-white transition-colors">
                Solutions
              </Link>
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-white/60">
          &copy; {new Date().getFullYear()} Tiby.ai. All rights reserved.
        </div>
      </div>
    </footer>)
  );
}

