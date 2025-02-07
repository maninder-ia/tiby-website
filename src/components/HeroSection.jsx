// import { Button } from "./ui/button"

import DemoButton from "./DemoButton";

export default function HeroSection() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-[#41228e] mb-8 leading-tight">
             The 
              <span className="bg-gradient-to-r from-[#41228e] to-[#6d44d2] text-transparent bg-clip-text"> Simplest & Easiest Way</span> to build Agentic AI 
            </h1>
            <p className="text-xl md:text-2xl text-[#41228e]/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              No-Code Platform to build Enterprise Grade, scalable, secure, and reliable AI agents and Workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* <DemoButton /> */}
              <button
                className="group px-8 py-3 rounded-full border-2 border-[#41228e]/20 text-[#41228e] font-medium hover:bg-[#41228e]/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-24">
            <p className="text-lg text-[#41228e]/70 font-medium mb-12">Trusted by innovative companies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center max-w-4xl mx-auto">
              <img src="/partner-logos/aquila.png" alt="Aquila" className="h-10 w-auto object-contain" />
              <img src="/partner-logos/inc42.png" alt="Inc42" className="h-10 w-auto object-contain" />
              <img src="/partner-logos/datagenie.png" alt="DataGenie" className="h-10 w-auto object-contain" />
              <img src="/partner-logos/droom.png" alt="Droom" className="h-10 w-auto object-contain" />
              <img src="/partner-logos/ia.png" alt="IA" className="h-10 w-auto object-contain" />
              <img src="/partner-logos/lawyered.png" alt="Lawyered" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

