"use client"; // Add this at the top to make it a Client Component

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { featuresImg, randomImg, random2Img, random3Img, random4Img } from '@/assets'
import SectionHeading from '../SectionHeading'

const FeaturesSection = () => {
  // Tab items with associated images
  const tabItems = [
    { name: "Tiby Studio", image: featuresImg },
    { name: "AI Agents", image: randomImg },
    { name: "Agentic Automations", image: random2Img },
    { name: "Knowledge Base", image: random3Img },
    { name: "Observability", image: random4Img }
  ]

  // State to track active tab
  const [activeTab, setActiveTab] = useState(0);
  // State to track if auto rotation is paused (when user manually interacts)
  const [autoRotatePaused, setAutoRotatePaused] = useState(false);

  // Handle scrollbar hiding
  useEffect(() => {
    // Hide scrollbar for Webkit browsers (Chrome, Safari)
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Auto-rotate tabs every 5 seconds
  useEffect(() => {
    let interval;
    
    if (!autoRotatePaused) {
      interval = setInterval(() => {
        setActiveTab(prevTab => (prevTab + 1) % tabItems.length);
      }, 5000); // 5 seconds
    }
    
    // Clear interval on component unmount or when paused
    return () => clearInterval(interval);
  }, [autoRotatePaused, tabItems.length]);

  // Pause auto-rotation when user interacts, resume after 10 seconds of inactivity
  const handleTabClick = (index) => {
    setActiveTab(index);
    setAutoRotatePaused(true);
    
    // Resume auto-rotation after 10 seconds of inactivity
    const timer = setTimeout(() => {
      setAutoRotatePaused(false);
    }, 10000);
    
    // Clear timeout if user interacts again before 10 seconds
    return () => clearTimeout(timer);
  };

  return (
    <section id="features-section" className="py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Heading */}
        <motion.div 
          className="flex flex-col items-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading>Powerful Features</SectionHeading>
          
          <motion.h2 
            className="md:text-[35px] text-[25px] font-bold text-center mt-8 text-[#1A1A1A] max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Agentic AI platform that helps to build, deploy and monitor 
          </motion.h2>
          <motion.h2 
            className="md:text-[35px] text-[25px] font-bold text-center mb-4 text-[#1A1A1A] max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI solutions - without technical complexity
          </motion.h2>
          
          {/* Feature Tabs Container */}
          <motion.div 
            className="relative max-w-4xl w-full mb-4 bg-[#fff]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Fading overlay at left edge */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #F6F5F4, rgba(249, 250, 251, 0))'
              }}
            ></div>
            
            {/* Fading overlay at right edge */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, #F6F5F4, rgba(249, 250, 251, 0))'
              }}
            ></div>
            
            {/* Scrollable tabs */}
            <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-3 justify-start px-8 min-w-max mx-auto relative">
                {/* Gradient border at bottom only */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{
                    background: 'linear-gradient(90deg, #DD00A9 0.01%, #A98AFF 36.3%, #8A43E1 69.8%, #DACFF8 100%)'
                  }}
                ></div>
                
                {tabItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className={`px-6 py-2 whitespace-nowrap cursor-pointer transition-all duration-300
                      ${index === activeTab ? 
                        'font-bold text-[#1A1A1A]' : 
                        'font-normal text-[#1a1a1a52] hover:text-[#1a1a1a99]'}`}
                    onClick={() => handleTabClick(index)}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Feature Image Section */}
        <motion.div 
          className="flex justify-center px-4 sm:px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-full max-w-5xl gradient-border-container">
            <div className="relative h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-2xl overflow-hidden z-10">
              <Image
                src={tabItems[activeTab].image}
                alt={`${tabItems[activeTab].name} Interface`}
                fill
                className="object-contain transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* CSS for animated gradient border and progress bar */}
      <style jsx>{`
        .gradient-border-container {
          position: relative;
          padding: 3px;
          width: 100%;
          border-radius: 1rem;
          background: linear-gradient(90deg, #DD00A9 0.01%, #A98AFF 36.3%, #8A43E1 69.8%, #DACFF8 100%);
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        .animate-progress {
          animation: progress 5s linear;
          animation-iteration-count: 1;
        }
      `}</style>
    </section>
  )
}

export default FeaturesSection
