import DemoButton from "./DemoButton";
// import { Button } from "./ui/button"

export default function CTASection() {
  return (
    (<section className="py-32 bg-gradient-to-br from-[#41228e] to-[#2e1865] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6d44d2] rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#542cb7] rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 text-white/80 leading-relaxed">
            Join countless others who have leveraged Tiby.ai to drive growth and innovation.
          </p>
          <div className="flex gap-4 justify-center">
            <DemoButton dark={true} />
            <button
              className="px-6 py-2.5 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-200 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section >)
  );
}

