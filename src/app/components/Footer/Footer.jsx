'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { logo, newLogo } from '@/assets'

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Handle the quick link click with scrolling behavior
  const handleQuickLinkClick = (e, targetId) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      router.push('/');
      
      // Set a short timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else {
      // If we're already on home page, just scroll to section
      scrollToSection(targetId);
    }
  };
  
  // Helper function to scroll to specific sections
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] text-white">
      {/* CTA Section */}
      {/* <div className="py-12 sm:py-20 px-4 sm:px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
            Start your free trial now to experience seamless project management without any commitment!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2.5 sm:py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-80 text-sm sm:text-base"
            />
            <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base">
              Get Started
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M10 17l5-5-5-5v10z"/>
                </svg>
              </span>
              <span className="flex">
                {[1, 2, 3, 4, 4.5].map((value, index) => (
                  <svg 
                    key={index} 
                    className={`w-5 h-5 ${value === 4.5 ? 'text-gray-400' : 'text-[#fff]'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    {value === 4.5 ? (
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    ) : (
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    )}
                  </svg>
                ))}
              </span>
            </div>
            <span className="hidden sm:inline font-medium">|</span>
            <span>4.9 rating</span>
            <span className="text-gray-400">Based on 300k Users</span>
          </div>
      </div>
      </div> */}
      
      {/* Footer Navigation - Updated with fewer links */}
      <div className="py-10 sm:py-16 px-4 sm:px-6 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
            {/* Logo Column */}
            <div className="flex flex-col w-full sm:w-auto max-w-xs">
              <div>
                <Image 
                  src={newLogo} 
                  alt="Tiby.AI Logo" 
                  width={100}
                  height={35} 
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4 mb-6">
                Enterprise AI platform for automating business processes and enhancing productivity.
              </p>
              <div className="border rounded-lg border-gray-800 p-3 sm:p-4 mt-auto">
                <a 
                  href="maninder@tiby.ai" 
                  className="flex items-center justify-between text-gray-400 hover:text-white transition-colors group text-sm sm:text-base"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    maninder@tiby.ai
                  </div>
                  <svg 
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation Links - Updated with scroll functionality */}
            <div className="w-full sm:w-auto">
              <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">Quick Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                <a 
                  href="#features-section" 
                  onClick={(e) => handleQuickLinkClick(e, 'features-section')}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Features
                </a>
                <a 
                  href="#overview-section" 
                  onClick={(e) => handleQuickLinkClick(e, 'overview-section')} 
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Overview
                </a>
                <a 
                  href="#comparison-section" 
                  onClick={(e) => handleQuickLinkClick(e, 'comparison-section')} 
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Comparison
                </a>
                <a 
                  href="#testimonials-section" 
                  onClick={(e) => handleQuickLinkClick(e, 'testimonials-section')} 
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base cursor-pointer"
                >
                  Team & Advisors
                </a>
                <a 
                  href="#faq-section"
                  onClick={(e) => handleQuickLinkClick(e, 'faq-section')}
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  FAQ's
                </a>
                <a 
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom - Removed duplicate Privacy Policy link */}
      <div className="py-4 sm:py-6 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-gray-400 text-xs sm:text-sm order-2 md:order-1">
            © 2023 Tibyai.com. All rights reserved.
          </div>
          
          {/* Systems Status - Centered better */}
          <div className="bg-[#2e2e2e] rounded-full border border-[#ffffff33] px-3 sm:px-4 py-1.5 sm:py-2 flex items-center order-1 md:order-2 w-full md:w-auto justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <span className="flex w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-xs sm:text-sm text-[#fff]">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
