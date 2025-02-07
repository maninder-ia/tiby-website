import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function UseCasesSection() {
  const useCases = [
    {
      icon: "🏦",
      title: "Banking",
      description: "Streamline KYC, fraud detection, loans, and customer support with AI agents that ensure speed, accuracy and compliance."
    },
    {
      icon: "🚀",
      title: "Sales",
      description: "Boost lead generation, pipeline tracking and CRM updates. Close deals faster with AI-driven precision."
    },
    {
      icon: "📈",
      title: "Marketing",
      description: "AI-powered campaigns, SEO, and analytics. Elevate your marketing with smarter content and insights."
    },
    {
      icon: "⚖️",
      title: "HR",
      description: "Automate hiring, onboarding, and performance tracking with AI agents tailored for HR efficiency."
    },
    {
      icon: "👥",
      title: "Customer Service",
      description: "24/7 support with AI for tickets, sentiment analysis, and instant issue resolution. Keep customers happy."
    },
    {
      icon: "💰",
      title: "Financial Apps",
      description: "Simplify expenses, reporting, and risk analysis. Make smarter financial decisions with AI efficiency."
    }
  ]

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2e1865] mb-12 tracking-wide">
          Key Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-[#e6e6e6]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{useCase.icon}</span>
                  <CardTitle className="text-[#2e1865]">{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#41228e]">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}