import Link from "next/link";

export const metadata = {
  title: "How it Works | Tiby.AI",
  description: "Learn how Tiby.AI works and how it can help your business",
};

export default function HowItWorksPage() {
  return (
    <div className="w-full min-h-screen bg-[#fbf8ff]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">How Tiby.AI Works</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Our platform uses advanced AI to transform your business processes
          </p>
        </div>
        
        {/* Placeholder content */}
        <div className="prose max-w-3xl mx-auto">
          <p>This is the How it Works page. Content will be added here.</p>
          <Link href="/" className="text-[#6741d9] font-medium hover:underline">
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
} 