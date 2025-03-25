import Link from "next/link";

export const metadata = {
  title: "Use Cases | Tiby.AI",
  description: "Explore how Tiby.AI can be used in various business scenarios",
};

export default function UseCasesPage() {
  return (
    <div className="w-full min-h-screen bg-[#fbf8ff]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Use Cases</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how Tiby.AI can help solve your business challenges
          </p>
        </div>
        
        {/* Placeholder content */}
        <div className="prose max-w-3xl mx-auto">
          <p>This is the Use Cases page. Content will be added here.</p>
          <Link href="/" className="text-[#6741d9] font-medium hover:underline">
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
} 