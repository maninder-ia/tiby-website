'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { overViewImg, overViewImg2, overViewImg3 } from '@/assets'
import OverviewIconBoxes from '../OverviewIconBoxes'
import OverviewMarquee from '../OverviewMarquee'

const OverView = () => {
  return (
    <section id="overview-section" className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col items-center">
        {/* Product Overview Label with Gradient Border */}
        <motion.div 
          className="mb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="product-overview-gradient-container">
            <span className="block text-sm font-medium px-4 py-3 bg-[#1E1E1E] rounded-full relative z-10">
              Product Overview
            </span>
          </div>
        </motion.div>
        
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-semibold text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Enterprise Private Knowledge Base
        </motion.h2>
        <motion.h3 
          className="text-2xl md:text-3xl font-semibold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Integration for AI Agents
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-gray-300 text-center max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          High-Quality RAG with hybrid retrieval mechanisms for building Enterprise Grade 
          <br />
          AI Agents in a secure and scalable way
        </motion.p>
        
        {/* CTA Button */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="http://app.tiby.ai/" className="bg-white text-black font-medium px-6 py-4 rounded-md hover:bg-gray-200 transition-colors">
            Book a Demo
          </Link>
        </motion.div>
        
        {/* Product Image with Browser Frame and Floating Elements */}
        <div className="relative max-w-4xl w-full px-4 sm:px-8 md:px-16">
          {/* Main Browser Frame with Animated Gradient Border */}
          <motion.div 
            className="browser-frame-gradient-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative z-10 bg-white rounded-lg overflow-visible shadow-2xl">
              <div className="w-full aspect-[16/9]">
                <Image
                  src={overViewImg}
                  alt="Enterprise Knowledge Base Interface"
                  width={1200}
                  height={675}
                  className="object-contain w-[120%] sm:w-full scale-110 sm:scale-100 transform origin-center"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Floating Left Sidebar */}
          <motion.div 
            className="absolute left-[-10px] top-1/3 w-60 bg-white rounded-lg shadow-xl overflow-hidden z-20 md:flex hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src={overViewImg3}
              alt="Details Panel"
              width={160}
              height={160}
              className="w-full"
            />
          </motion.div>
          
          {/* Floating Right Panel */}
          <motion.div 
            className="absolute right-0 top-1/3 w-60 bg-white rounded-lg shadow-xl overflow-hidden z-20 md:flex hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src={overViewImg2}
              alt="Navigation Sidebar"
              width={160}
              height={180}
              className="w-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <OverviewIconBoxes />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        > */}
          <OverviewMarquee />
        {/* </motion.div> */}
      </div>

      {/* CSS for gradient borders and animations */}
      <style jsx>{`
        .product-overview-gradient-container {
          position: relative;
          padding: 2px;
          border-radius: 9999px;
          background: linear-gradient(180deg, #FF2E2E 0%, #EE7B16 35.88%, #8A43E1 69.92%, #D510FC 100%);
          background-size: 200% 200%;
          animation: gradientAnimation 6s ease infinite;
        }
        
        .browser-frame-gradient-container {
          position: relative;
          padding: 3px;
          border-radius: 0.5rem;
          background: linear-gradient(180deg, #FF2E2E 0%, #EE7B16 35.88%, #8A43E1 69.92%, #D510FC 100%);
          background-size: 200% 200%;
          animation: gradientAnimation 8s ease infinite;
        }
        
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </section>
  )
}

export default OverView
