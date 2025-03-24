'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-[#F6F5F4]">
      {/* Hero section */}
      <div className="relative pt-20 pb-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your privacy is important to us. Please review our policy carefully.
          </motion.p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          <div className="prose max-w-none">
            <section id="introduction">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">1. Introduction</h2>
              <p>Welcome to Tiby Ai solutions Private Limited. Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our AI-powered platform and services.</p>
            </section>

            <section id="information-we-collect" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-gray-800">Personal Information:</strong> Name, email address, phone number, and other details provided during account registration.</li>
                <li><strong className="text-gray-800">Usage Data:</strong> Information about how you interact with our platform, including IP address, browser type, and device information.</li>
                <li><strong className="text-gray-800">AI-Generated Data:</strong> Any content or inputs provided by users to train or operate AI models.</li>
                <li><strong className="text-gray-800">Third-Party Data:</strong> Data collected from integrated third-party services.</li>
              </ul>
            </section>

            <section id="how-we-use-your-information" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide, maintain, and improve our AI services.</li>
                <li>To communicate with users regarding updates, features, or support requests.</li>
                <li>To enhance security, prevent fraud, and ensure compliance with legal requirements.</li>
                <li>To analyze usage trends and improve platform performance.</li>
              </ul>
            </section>

            <section id="data-sharing" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">4. Data Sharing and Disclosure</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>We do not sell or rent your personal data to third parties.</li>
                <li>We may share data with trusted third-party vendors and service providers who assist in delivering our services.</li>
                <li>We may disclose information if required by law, legal process, or to protect our rights and security.</li>
              </ul>
            </section>

            <section id="data-storage" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">5. Data Storage and Security</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>User data is stored securely using industry-standard encryption and security measures.</li>
                <li>We implement safeguards to protect against unauthorized access, alteration, or disclosure of personal information.</li>
                <li>Users are responsible for maintaining the security of their account credentials.</li>
              </ul>
            </section>

            <section id="third-party-services" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">6. Third-Party Services</h2>
              <p>Tiby Ai solutions Private Limited integrates with third-party platforms for cloud hosting, analytics, and payment processing. Users acknowledge that third-party services have their own privacy policies, and Tiby Ai solutions Private Limited is not responsible for their data practices.</p>
            </section>

            <section id="cookies" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">7. Cookies and Tracking Technologies</h2>
              <p>Our platform uses cookies and tracking technologies to enhance user experience and analyze platform performance. Users can manage cookie preferences through their browser settings.</p>
            </section>

            <section id="user-rights" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">8. User Rights and Choices</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Users have the right to access, update, or delete their personal data upon request.</li>
                <li>Users may opt-out of marketing communications at any time.</li>
                <li>Requests regarding data rights can be sent to <a href="mailto:maninder@tiby.ai" className="text-[#4C358F] hover:text-purple-800 transition-colors">maninder@tiby.ai</a>.</li>
              </ul>
            </section>

            <section id="data-retention" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">9. Data Retention</h2>
              <p>Personal data is retained for as long as necessary to provide our services and comply with legal obligations. Users may request the deletion of their data, subject to any regulatory or legal requirements.</p>
            </section>

            <section id="childrens-privacy" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">10. Children's Privacy</h2>
              <p>Tiby Ai solutions Private Limited does not knowingly collect personal information from individuals under the age of 18. If we discover that a minor has provided personal information, we will take steps to delete it.</p>
            </section>

            <section id="changes" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">11. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically and will notify users of significant changes. Continued use of our services after updates constitutes acceptance of the revised policy.</p>
            </section>

            <section id="contact-us" className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">12. Contact Us</h2>
              <p>For any privacy-related inquiries, please contact us at <a href="mailto:maninder@tiby.ai" className="text-[#4C358F] hover:text-purple-800 transition-colors">maninder@tiby.ai</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
