import Link from "next/link";

export const metadata = {
  title: "Book a Demo | Tiby.AI",
  description: "Book a demo to see Tiby.AI in action",
};

export default function DemoPage() {
  return (
    <div className="w-full min-h-screen bg-[#fbf8ff]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Book a Demo</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            See Tiby.AI in action and discover how it can transform your business
          </p>
        </div>
        
        {/* Placeholder form - this would be replaced with a real form */}
        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <p className="mb-6">Please fill out the form below to schedule a demo:</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6741d9]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6741d9]"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6741d9]"
                placeholder="Your company"
              />
            </div>
            <button
              className="w-full bg-[#6741d9] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5835b0] transition-colors"
            >
              Request Demo
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="text-[#6741d9] font-medium hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 