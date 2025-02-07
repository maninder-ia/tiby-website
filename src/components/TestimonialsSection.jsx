import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO of InnoTech Solutions",
      quote: "Tiby.ai's AI agent building platform has revolutionized our workflow. We've seen a 35% increase in productivity and a significant reduction in errors since implementation.",
    },
    {
      name: "Michael Rodriguez",
      title: "Head of Operations at GlobalCorp",
      quote: "The custom AI agents we've built with Tiby.ai have streamlined our supply chain processes beyond our expectations. We've cut operational costs by 22% in just six months.",
    },
    {
      name: "Emily Nakamura",
      title: "Lead Data Scientist at HealthTech Innovations",
      quote: "Tiby.ai's platform allowed us to create AI agents that analyze patient data with unprecedented accuracy. Our diagnostic predictions have improved by 40%, directly impacting patient care.",
    },
  ]

  return (
    (<section id="testimonials" className="py-24 bg-gradient-to-b from-[#f8f5ff] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6d44d2] rounded-full filter blur-3xl opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e1865] mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#41228e]/80">
            Discover how Tiby.ai is transforming businesses worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} 
              className="bg-white border-[#e6e6e6] hover:shadow-xl hover:shadow-[#6d44d2]/5 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#41228e] to-[#6d44d2] flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <CardTitle className="text-[#2e1865] text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-[#542cb7]/80">{testimonial.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-[#41228e]/90 leading-relaxed">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

