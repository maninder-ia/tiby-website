'use client'
import React from 'react'
import SectionHeading from '../SectionHeading'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { user1, user2, user3, user4, user5, user6, user7 } from '@/assets'

const leaders = [
  {
    quote: "With 25+ years in the IT industry, I've seen how AI can transform operations. Tiby.AI brings enterprise-grade innovation that we've applied with global giants to help businesses drive meaningful digital transformation.",
    name: "Deepak Sharma",
    position: "CEO & Co-Founder",
    image: user1 // Replace with actual image path for Deepak
  },
  {
    quote: "Scalability is at the heart of everything we build at Tiby.AI. Our platform is designed to grow with your enterprise needs, leveraging my experience in building robust, production-ready SaaS applications.",
    name: "Maninder Bawa",
    position: "Co-Founder & CTO",
    image: user2 // Replace with actual image path for Maninder
  },
  {
    quote: "Leading data science at McKinsey has shown me the critical importance of AI governance. Tiby.AI incorporates best practices that ensure companies can innovate confidently while maintaining compliance.",
    name: "Petra Kummerova",
    position: "Global Data Science, McKinsey & Company",
    image: user3 // Replace with actual image for Petra
  },
  {
    quote: "Microsoft Azure's enterprise capabilities pair perfectly with Tiby.AI's infrastructure. The platform's ability to scale across diverse technical environments makes it truly standout in the market.",
    name: "Bikramjit D.",
    position: "Country Head, Microsoft Azure",
    image: user4 // Replace with actual image for Bikramjit
  },
  {
    quote: "Data analytics is fundamental to modern business intelligence. Tiby.AI's approach to structuring and analyzing complex data sets aligns with the cutting-edge methodologies we use at Zolando.",
    name: "Mirza Rahim Baig",
    position: "Product Analytics - Zolando",
    image: user5 // Replace with actual image for Mirza
  },
  {
    quote: "Having led technical teams at multiple companies, I appreciate Tiby.AI's integration capabilities and developer-friendly architecture. It's built to support innovation without sacrificing security.",
    name: "Pankaj Kankar",
    position: "Ex-CTO LensKart, FreeCharge",
    image: user6 // Replace with actual image for Pankaj
  },
  {
    quote: "The data engineering principles behind Tiby.AI are impressive. The platform handles complex data workflows with remarkable efficiency, something we value highly at McKinsey.",
    name: "Felipe Vianna",
    position: "Principal Data Engineer, McKinsey & Company",
    image: user7 // Replace with actual image for Felipe
  }
]

const TestimonialSection = () => {
  return (
    <div id="testimonials-section" className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block">
            <SectionHeading>Our Leaders & Advisors</SectionHeading>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Team & Advisory Board
        </motion.h2>

        {/* Leader/Advisor Marquee */}
        <div className="mt-8 sm:mt-12 overflow-hidden py-2">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
          >
            {/* Duplicate leaders to create continuous loop */}
            {[...leaders, ...leaders].map((leader, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-[280px] sm:w-[400px] md:w-[500px] bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Quote - Full width, top section */}
                <p className="text-sm sm:text-base text-gray-700 p-4 sm:p-6 border-b border-gray-100 line-clamp-4 sm:line-clamp-none min-h-[120px] sm:min-h-[150px]">
                  "{leader.quote}"
                </p>
                
                {/* Author - Bottom section with flexbox layout */}
                <div className="flex items-center p-3 sm:p-4">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold">{leader.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">{leader.position}</p>
                  </div>
                    {/* <div className="ml-auto">
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        LinkedIn icon
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
