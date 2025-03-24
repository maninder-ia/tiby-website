'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { checkmark, SeeInsights, tabIcon1, tabIcon2, tabIcon3 } from '@/assets'
import SectionHeading from '../SectionHeading'
import Link from 'next/link'

const InsightsSection = () => {
  const [activeTab, setActiveTab] = useState('organizations');
  const [isPaused, setIsPaused] = useState(false);

  // Array of tab IDs for easy rotation
  const tabIds = ['organizations', 'business', 'developers'];

  // Auto rotate tabs every 3 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTab(current => {
          const currentIndex = tabIds.indexOf(current);
          const nextIndex = (currentIndex + 1) % tabIds.length;
          return tabIds[nextIndex];
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Pause rotation on user interaction
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsPaused(true);
    
    // Resume auto-rotation after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setIsPaused(false);
    }, 10000);

    return () => clearTimeout(timer);
  };

  // Content for different tabs
  const tabContent = {
    organizations: {
      title: "AI-Powered Workflow Management",
      features: [
        "Automate complex workflows and business processes.",
        "One platform for both your developers and business users.",
        "Unlock Organizational General Intelligence."
      ]
    },
    business: {
      title: "Business Intelligence Dashboard",
      features: [
        "Comprehensive analytics and reporting tools.",
        "Real-time business insights and KPI tracking.",
        "User-friendly visualization of complex data."
      ]
    },
    developers: {
      title: "Developer-Friendly Environment",
      features: [
        "Flexible API integration capabilities.",
        "Customizable development tools and resources.",
        "Streamlined deployment and testing workflows."
      ]
    }
  };

  // Features shown at the bottom
  const features = [
    "Agile Workflow",
    "Smooth Communication",
    "Document Sharing",
    "Security Measures"
  ];

  // Get content for the active tab
  const currentContent = tabContent[activeTab];

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Individual item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      id="insights-section"
      className="py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <motion.div 
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-block">
            <SectionHeading>Industry Insights</SectionHeading>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tibyai is for everyone in the Enterprise
        </motion.h2>

        {/* Insights Note */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <motion.div 
            className="absolute -left-32 top-0 hidden md:block"
            initial={{ opacity: 0, x: -20, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            <Image 
              src={SeeInsights} 
              alt="See the insights!" 
              width={150} 
              height={100}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Main Content Card */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Tabs */}
          <motion.div 
            className="flex flex-col sm:flex-row p-2 sm:p-3 gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* For Organizations */}
            <motion.div
              className={`flex-1 relative cursor-pointer rounded-md overflow-hidden`}
              onClick={() => handleTabClick('organizations')}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Gradient border for active tab */}
              {activeTab === 'organizations' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8]"></div>
              )}
              <div className={`relative m-[2px] ${activeTab === 'organizations' ? 'bg-white' : 'bg-[#F6F5F4]'} rounded-md px-3 sm:px-4 py-2 sm:py-3`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image 
                    src={tabIcon1}
                    alt="Organizations Icon" 
                    width={20} 
                    height={20}
                    className="object-contain sm:w-6 sm:h-6"
                  />
                  <span className={`font-medium text-sm sm:text-base ${activeTab === 'organizations' ? 'text-[#000]' : 'text-gray-600'}`}>For Organizations</span>
                </div>
              </div>
            </motion.div>

            {/* For Business Users */}
            <motion.div
              className={`flex-1 relative cursor-pointer rounded-md overflow-hidden`}
              onClick={() => handleTabClick('business')}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {/* Gradient border for active tab */}
              {activeTab === 'business' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8]"></div>
              )}
              <div className={`relative m-[2px] ${activeTab === 'business' ? 'bg-white' : 'bg-[#F6F5F4]'} rounded-md px-3 sm:px-4 py-2 sm:py-3`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image 
                    src={tabIcon2}
                    alt="Business Users Icon" 
                    width={20} 
                    height={20}
                    className="object-contain sm:w-6 sm:h-6"
                  />
                  <span className={`font-medium text-sm sm:text-base ${activeTab === 'business' ? 'text-[#000]' : 'text-gray-600'}`}>For Business Users</span>
                </div>
              </div>
            </motion.div>

            {/* For Developers */}
            <motion.div
              className={`flex-1 relative cursor-pointer rounded-md overflow-hidden`}
              onClick={() => handleTabClick('developers')}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {/* Gradient border for active tab */}
              {activeTab === 'developers' && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8]"></div>
              )}
              <div className={`relative m-[2px] ${activeTab === 'developers' ? 'bg-white' : 'bg-[#F6F5F4]'} rounded-md px-3 sm:px-4 py-2 sm:py-3`}>
                <div className="flex items-center justify-center space-x-2">
                  <Image 
                    src={tabIcon3}
                    alt="Developers Icon" 
                    width={20} 
                    height={20}
                    className="object-contain sm:w-6 sm:h-6"
                  />
                  <span className={`font-medium text-sm sm:text-base ${activeTab === 'developers' ? 'text-[#000]' : 'text-gray-600'}`}>For Developers</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Area */}
          <motion.div 
            className="p-4 sm:p-8 grid md:grid-cols-2 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Side - Title and CTA */}
            <div className="space-y-4 sm:space-y-6">
              {/* Title and Button Container */}
              <div className="space-y-4">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-gray-900"
                  variants={itemVariants}
                >
                  {currentContent.title}
                </motion.h3>
                <motion.div variants={itemVariants}>
                  <Link href="http://app.tiby.ai/">
                    <motion.button 
                      className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book a demo
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
              
              {/* Features List - Shows on mobile only */}
              <div className="space-y-3 sm:space-y-4 md:hidden">
                {currentContent.features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3"
                    variants={itemVariants}
                  >
                    <p className="text-sm sm:text-base text-gray-600">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Features List (hidden on mobile) */}
            <div className="hidden md:block space-y-3 sm:space-y-4">
              {currentContent.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  variants={itemVariants}
                >
                  <p className="text-sm sm:text-base text-gray-600">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Icons */}
        <motion.div 
          className="md:flex grid grid-cols-2 flex-wrap justify-center md:gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7, 
            delay: 0.9,
            staggerChildren: 0.1
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-2 px-4 py-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
            >
              <Image 
                src={checkmark} 
                alt="checkmark" 
                width={40} 
                height={40}
                className='md:mt-2'
              />
              <span className="text-gray-800 font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
    </div>

      {/* Add animation keyframe for progress bar */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </motion.div>
  )
}

export default InsightsSection
