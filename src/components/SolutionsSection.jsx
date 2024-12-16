import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { DollarSignIcon, HeartPulseIcon, ShoppingBagIcon } from 'lucide-react'

export default function SolutionsSection() {
  const solutions = [
    {
      title: "Finance",
      description: "Enhance financial forecasting and risk management with AI-driven insights.",
      icon: DollarSignIcon,
    },
    {
      title: "Healthcare",
      description: "Improve patient outcomes through predictive analytics and personalized care.",
      icon: HeartPulseIcon,
    },
    {
      title: "Retail",
      description: "Optimize inventory management and customer experiences with intelligent solutions.",
      icon: ShoppingBagIcon,
    },
  ]

  return (
    (<section id="solutions" className="py-20 bg-[#e6e6e6]">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-[#2e1865] mb-12 tracking-wide">
          AI Solutions for Every Industry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-[#6d44d2]">
              <CardHeader>
                <solution.icon className="w-10 h-10 text-[#542cb7] mb-2" />
                <CardTitle className="text-[#2e1865]">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#41228e]">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

