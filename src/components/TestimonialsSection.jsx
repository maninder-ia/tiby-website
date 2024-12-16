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
    (<section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-[#2e1865] mb-12 tracking-wide">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-[#e6e6e6]">
              <CardHeader>
                <CardTitle className="text-[#2e1865]">{testimonial.name}</CardTitle>
                <p className="text-sm text-[#542cb7]">{testimonial.title}</p>
              </CardHeader>
              <CardContent>
                <p className="italic text-[#41228e]">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

