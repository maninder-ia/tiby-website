// import { Button } from "./ui/button"

import DemoButton from "./DemoButton";

export default function HeroSection() {
  return (
    (<section className="bg-gradient-to-r from-[#e6e6e6] to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#2e1865] mb-4 tracking-wide">
              Empower Your Business with Intelligent AI Solutions
            </h1>
            <p className="text-xl text-[#41228e] mb-6">
              Streamline operations, enhance decision-making, and drive growth with Tiby.ai's cutting-edge AI technology.
            </p>
            <DemoButton />
            {/* <Button
              size="lg"
              onClick={() => window.open('https://tally.so/r/31GR1p', '_blank')}
              className="bg-[#41228e] hover:bg-[#2e1865] text-white">
              Book a Demo
            </Button> */}
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-80 h-80 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#41228e]">
                <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.2" />
                <path
                  d="M50 10a40 40 0 1 1 0 80 40 40 0 0 1 0-80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  opacity="0.4" />
                <path
                  d="M50 20a30 30 0 1 1 0 60 30 30 0 0 1 0-60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

