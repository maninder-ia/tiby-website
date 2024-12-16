import DemoButton from "./DemoButton";
// import { Button } from "./ui/button"

export default function CTASection() {
  return (
    (<section className="py-20 bg-[#41228e] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 text-[#e6e6e6]">
          Join countless others who have leveraged Tiby.ai to drive growth and innovation.
        </p>
        <DemoButton dark={true}/>
        {/* <Button
          size="lg"
          variant="secondary"
          onClick={() => window.open('https://tally.so/r/31GR1p', '_blank')}
          className="bg-white text-[#41228e] hover:bg-[#e6e6e6]">
          Book a Demo
        </Button> */}
      </div>
    </section>)
  );
}

