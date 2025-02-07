import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { RocketIcon, BarChartIcon, PuzzleIcon } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Automation",
      description: "Automate routine tasks to boost efficiency and reduce operational costs.",
      icon: RocketIcon,
    },
    {
      title: "Advanced Data Analytics",
      description: "Gain actionable insights with real-time data analysis and visualization.",
      icon: BarChartIcon,
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate with your existing tools and workflows for a smooth transition.",
      icon: PuzzleIcon,
    },
  ]

  return (
    (<section id="features" className="py-24 bg-gradient-to-b from-white to-[#f8f5ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e1865] mb-6 leading-tight">
            Powerful Features Tailored for Your Needs
          </h2>
          <p className="text-xl text-[#41228e]/80">
            Experience the future of business automation with our cutting-edge AI features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} 
              className="border-[#e6e6e6] bg-white/50 backdrop-blur-sm hover:shadow-lg hover:shadow-[#6d44d2]/5 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#41228e] to-[#6d44d2] w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-[#2e1865] text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#41228e]/80 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

