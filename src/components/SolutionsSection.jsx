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
    (<section id="solutions" className="py-24 bg-[#41228e]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            AI Solutions for Every Industry
          </h2>
          <p className="text-xl text-white/80">
            Transform your industry with our specialized AI solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} 
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="p-3 rounded-2xl bg-white/10 w-fit mb-4 backdrop-blur-sm">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl mb-2">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

