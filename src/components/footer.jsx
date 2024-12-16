import Link from 'next/link'

export default function Footer() {
  return (
    (<footer className="bg-[#e6e6e6] py-8 border-t border-[#6d44d2]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6">
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
              <span className="text-xl font-semibold text-[#41228e] tracking-wide">Tiby.Ai</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="#features" className="text-sm text-[#41228e] hover:text-[#2e1865]">
              Features
            </Link>
            <Link href="#solutions" className="text-sm text-[#41228e] hover:text-[#2e1865]">
              Solutions
            </Link>
            <Link href="#" className="text-sm text-[#41228e] hover:text-[#2e1865]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-[#41228e] hover:text-[#2e1865]">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm text-[#41228e]">
          &copy; {new Date().getFullYear()} Tiby.ai. All rights reserved.
        </div>
      </div>
    </footer>)
  );
}

