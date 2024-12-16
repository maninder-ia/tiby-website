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
    (<section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-[#2e1865] mb-12 tracking-wide">
          Powerful Features Tailored for Your Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-[#e6e6e6]">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-[#542cb7] mb-2" />
                <CardTitle className="text-[#2e1865]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#41228e]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

