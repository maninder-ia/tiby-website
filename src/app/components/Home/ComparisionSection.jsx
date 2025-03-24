import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { bulletIcon, logo, vsImg, checkmark, checkmark2 } from '@/assets'
import './comparisionSection.css'
import Link from 'next/link'

const ComparisionSection = () => {
  const comparisonData = {
    otherPlatforms: [
      'Limited Task Customization',
      'Slow Progress Tracking',
      'Complex User Interface',
      'Manual Data Entry Required',
      'Lack of Seamless Integration',
      'No Bulk Actions Support',
      'Inconsistent Document Management',
      'Limited Reporting Features',
    ],
    tibyAi: [
      'Everything in Basic +',
      'Real-Time Progress Updates',
      'Intuitive User Experience',
      'Automated Data Entry',
      'Seamless Integrations Across Tools',
      'Powerful Bulk Action Support',
      'Efficient Document Organization',
      'Comprehensive Reporting Insights',
    ]
  }

  return (
    <div id="comparison-section" className="md:py-20 px-6 comparision-section">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Section Label */}
        <div className="mb-6">
          <SectionHeading>Comparison</SectionHeading>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          What Sets Tiby.Ai Apart
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Discover how Tiby Ai outperforms other platforms with superior features, better 
          performance, and unmatched ease of use.
        </p>

        {/* Comparison Table */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Other Platforms */}
          <div className="flex-1 border border-[#9B51E0] rounded-2xl">
            <div className="relative border-b border-[#DFB7FA]">
              <h3 className="text-xl font-bold text-gray-800 py-6 text-center">OTHER PLATFORMS</h3>
            </div>
            <ul className="space-y-4 p-6">
              {comparisonData.otherPlatforms.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-left text-gray-600"
                >
                  <Image 
                    src={bulletIcon} 
                    alt="bullet" 
                    width={20} 
                    height={20} 
                    className="mr-3 opacity-50"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* VS Badge - Updated positioning */}
          <div className="flex items-center justify-center -mb-4 md:mb-0 z-10">
            {/* Mobile VS */}
            <div className="md:hidden bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
              V/S
            </div>
            {/* Desktop VS */}
            <div className="hidden md:block w-20">
              <Image 
                src={vsImg} 
                alt="versus" 
                width={80} 
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          {/* Tiby.AI */}
          <div className="flex-1 relative p-[2px] rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(169,138,255,0.2)]">
            {/* Gradient Border Container */}
            <div className="absolute inset-0 animate-gradient" />
            {/* Content Container */}
            <div className="relative bg-white rounded-2xl h-full">
              <div className="relative border-b border-purple-200">
                <div className="flex justify-center py-4">
                  <Image 
                    src={logo} 
                    alt="Tiby.AI" 
                    width={120} 
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
              <ul className="space-y-4 p-6">
                {comparisonData.tibyAi.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-left text-gray-600"
                  >
                    <Image 
                      src={checkmark2}
                      alt="checkmark"
                      width={20}
                      height={20}
                      className="mr-3"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link href="http://app.tiby.ai/">
            <button 
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Book a demo
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ComparisionSection
