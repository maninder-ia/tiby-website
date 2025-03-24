'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// export const metadata = {
//   title: "Terms and Conditions | Tiby.AI",
//   description: "Review the terms and conditions for using Tiby.AI services",
// };

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("");
  
  // Table of contents with IDs matching section headings
  const tableOfContents = [
    { id: "introduction", title: "1. Introduction" },
    { id: "definitions", title: "2. Definitions" },
    { id: "account", title: "3. Account Registration and Use" },
    { id: "services", title: "4. Use of Services" },
    { id: "ip", title: "5. Intellectual Property Rights" },
    { id: "privacy", title: "6. Privacy and Data Protection" },
    { id: "availability", title: "7. Service Availability and Maintenance" },
    { id: "integrations", title: "8. Third-Party Integrations" },
    { id: "liability", title: "9. Limitation of Liability" },
    { id: "termination", title: "10. Termination of Services" },
    { id: "updates", title: "11. Updates and Modifications to Terms" },
    { id: "law", title: "12. Governing Law and Dispute Resolution" },
    { id: "contact", title: "13. Contact Information" }
  ];
  
  // Handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = "";
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
          currentActive = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentActive);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section when clicking on TOC item
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F6F5F4]">
      {/* Hero section with background decoration */}
      <div className="relative pt-20 pb-10 ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 opacity-40"></div>
          <div className="absolute left-1/4 bottom-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Terms and Conditions
          </motion.h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar navigation for larger screens */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 overflow-y-auto">
              <nav className="bg-white shadow-sm rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Contents</h3>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full px-2 py-1 rounded text-sm transition-colors ${
                          activeSection === item.id 
                            ? "bg-purple-100 text-[#4C358F] font-medium"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
{/*               
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-5 shadow-sm border border-purple-100">
                <h4 className="font-medium text-gray-800 mb-2">Need help?</h4>
                <p className="text-sm text-gray-600 mb-4">If you have questions about our terms, please contact our support team.</p>
                <Link href="/contact" className="inline-block text-sm bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                  Contact Support
                </Link>
              </div> */}
            </div>
          </aside>
          
          {/* Main content */}
          <main className="lg:col-span-9">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              {/* Mobile table of contents dropdown */}
              <div className="lg:hidden mb-8">
                <label htmlFor="toc-select" className="block text-sm font-medium text-gray-700 mb-1">
                  Jump to section
                </label>
                <select
                  id="toc-select"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                  value={activeSection}
                  onChange={(e) => scrollToSection(e.target.value)}
                >
                  {tableOfContents.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Terms and Conditions Content */}
              <div className="prose max-w-none">
                <section id="introduction">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">1. Introduction</h2>
                  <p>Welcome to Tiby.AI. These Terms and Conditions govern your use of our AI-powered platform and services. By accessing or using our platform, you agree to comply with these terms. If you do not agree with any part of these Terms and Conditions, you must discontinue the use of our services immediately.</p>
                </section>

                <section id="definitions" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">2. Definitions</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-gray-800">"Tiby.AI"</strong> refers to the AI-driven platform, its software, and related services.</li>
                    <li><strong className="text-gray-800">"User"</strong> refers to any individual or entity accessing or using the platform.</li>
                    <li><strong className="text-gray-800">"Services"</strong> refer to the AI agent-building tools, integrations, workflow automation, AI model monitoring, and any other features offered by Tiby.AI.</li>
                    <li><strong className="text-gray-800">"Content"</strong> refers to all information, data, text, graphics, software, and other materials available through Tiby.AI.</li>
                    <li><strong className="text-gray-800">"Third-Party Services"</strong> refer to any external software, platforms, or services integrated with Tiby.AI.</li>
                  </ul>
                </section>

                <section id="account" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">3. Account Registration and Use</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Users must be at least 18 years old or have legal consent to use the services.</li>
                    <li>Users must provide accurate and up-to-date information during the registration process.</li>
                    <li>Users are responsible for maintaining the confidentiality of their account credentials and are liable for all activities conducted under their account.</li>
                    <li>Any unauthorized use or suspected security breaches must be reported to Tiby.AI immediately.</li>
                  </ul>
                </section>

                <section id="services" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">4. Use of Services</h2>
                  <p>Users agree not to use the platform for any unlawful, abusive, or harmful purposes, including but not limited to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Violating any applicable laws or regulations.</li>
                    <li>Uploading or distributing malicious software, viruses, or harmful code.</li>
                    <li>Engaging in fraudulent, misleading, or deceptive activities.</li>
                    <li>Interfering with the security or performance of the platform.</li>
                  </ul>
                  <p className="mt-4">Tiby.AI reserves the right to suspend or terminate access for violations of these terms.</p>
                </section>

                <section id="ip" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">5. Intellectual Property Rights</h2>
                  <p>All content, software, and trademarks related to Tiby.AI remain the exclusive property of Tiby.AI or its licensors. Users may not reproduce, modify, distribute, or create derivative works from any part of the platform without explicit permission. Any feedback or suggestions provided by users may be used by Tiby.AI without obligation to compensate the user.</p>
                </section>

                <section id="privacy" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">6. Privacy and Data Protection</h2>
                  <p>Tiby.AI collects and processes user data in accordance with applicable privacy laws and regulations. Users are responsible for ensuring that any data they input into the platform does not infringe on any third-party rights. Tiby.AI implements security measures to protect user data but does not guarantee absolute security.</p>
                </section>

                <section id="availability" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">7. Service Availability and Maintenance</h2>
                  <p>While Tiby.AI strives to maintain continuous service availability, there may be downtime due to maintenance, updates, or unforeseen circumstances. Users will be notified in advance of any scheduled maintenance that may impact service accessibility. Tiby.AI is not liable for any disruptions or loss of data resulting from service outages.</p>
                </section>

                <section id="integrations" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">8. Third-Party Integrations</h2>
                  <p>Tiby.AI may integrate with third-party services such as cloud platforms, APIs, or enterprise software. Users acknowledge that Tiby.AI is not responsible for the availability, performance, or security of third-party services. Users agree to comply with the terms of any third-party services they use in conjunction with Tiby.AI.</p>
                </section>

                <section id="liability" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">9. Limitation of Liability</h2>
                  <p>Tiby.AI is provided "as is" and "as available" without warranties of any kind, whether express or implied. Tiby.AI is not liable for indirect, incidental, or consequential damages arising from platform use, including but not limited to loss of data, business interruption, or financial losses. Users acknowledge that AI-generated outputs may not be error-free and should be independently verified before reliance.</p>
                </section>

                <section id="termination" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">10. Termination of Services</h2>
                  <p>Tiby.AI reserves the right to suspend or terminate user accounts for violations of these terms or at its discretion. Users may terminate their account at any time by contacting Tiby.AI support. Upon termination, users may lose access to any stored data, and Tiby.AI is not obligated to provide data retrieval services.</p>
                </section>

                <section id="updates" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">11. Updates and Modifications to Terms</h2>
                  <p>Tiby.AI may update these Terms and Conditions periodically. Users will be notified of significant changes, and continued use of the services constitutes acceptance of the modified terms. Users are encouraged to review these terms regularly.</p>
                </section>

                <section id="law" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">12. Governing Law and Dispute Resolution</h2>
                  <p>These terms are governed by the laws of the jurisdiction in which Tiby.AI operates. Any disputes arising from these terms shall be resolved through arbitration or in the appropriate courts of jurisdiction.</p>
                </section>

                <section id="contact" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">13. Contact Information</h2>
                  <p>For any inquiries, questions, or support requests, please contact us at <a href="mailto:maninder@tiby.ai" className="text-[#4C358F] hover:text-purple-800 transition-colors">maninder@tiby.ai</a>.</p>
                </section>
              </div>
              
              {/* Last updated information */}
              {/* <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
                <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div> */}
            </div>
            
            {/* Navigation buttons at the bottom */}
            <div className="mt-8 flex justify-between">
              <Link 
                href="/" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <svg className="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <Link 
                href="/privacy-policy" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4C358F]"
              >
                Privacy Policy
                <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 