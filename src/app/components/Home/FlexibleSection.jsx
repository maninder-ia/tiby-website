'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { flexibleImg, shade1, shade2, flexibleImg2 } from '@/assets'
import SectionHeading from '../SectionHeading'

const FlexibleSection = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('on-premise');

  return (
    <div className="md:py-20 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Label */}
            <div className="inline-block">
              <SectionHeading>Flexible Deployment</SectionHeading>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Deploy Your Way with Flexible Cloud or On-Premise Solutions
            </h2>

            {/* Description */}
            <p className="text-gray-600">
              Easily deploy your applications the way you prefer—on the cloud for 
              scalability or on-premise for full control. Choose the best fit for your business 
              needs.
            </p>

            {/* Deployment Options */}
            <div className="space-y-4 pt-4">
              {/* On-Premise Option */}
              <div 
                className="relative w-full md:w-[320px] cursor-pointer"
                onClick={() => setActiveTab('on-premise')}
              >
                {/* Gradient Border - visible only when active */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8] ${activeTab !== 'on-premise' ? 'opacity-0 hover:opacity-100 transition-opacity duration-300' : ''}`}></div>
                {/* Content Container */}
                <div className="relative m-[2px] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4 flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${activeTab === 'on-premise' ? 'bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8]' : 'border-2 border-gray-200'}`}>
                    <svg className={`w-4 h-4 ${activeTab === 'on-premise' ? 'text-white' : 'text-transparent'}`} viewBox="0 0 24 24" fill="none">
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Deploy on Tiby.AI On-Premise</span>
                </div>
              </div>

              {/* Cloud Option */}
              <div 
                className="relative w-full md:w-[320px] cursor-pointer"
                onClick={() => setActiveTab('cloud')}
              >
                {/* Gradient Border - visible only when active */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8] ${activeTab !== 'cloud' ? 'opacity-0 hover:opacity-100 transition-opacity duration-300' : ''}`}></div>
                {/* Content Container */}
                <div className="relative m-[2px] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-4 flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${activeTab === 'cloud' ? 'bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8]' : 'border-2 border-gray-200'}`}>
                    <svg className={`w-4 h-4 ${activeTab === 'cloud' ? 'text-white' : 'text-transparent'}`} viewBox="0 0 24 24" fill="none">
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-900 font-medium">Deploy on Tiby.AI Cloud</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative flex items-center justify-center">
            {/* Box Container with Gradient Border */}
            <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8] shadow-lg w-full max-w-[550px] md:max-w-[600px]">
              {/* Inner Box with White Background */}
              <div className="bg-white rounded-lg p-2 h-[350px] sm:h-[420px] md:h-[450px] w-full flex items-center justify-center overflow-hidden relative">
                {/* On-Premise Image */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeTab === 'on-premise' ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={flexibleImg}
                    alt="On-Premise Deployment Illustration"
                    width={550}
                    height={450}
                    className="object-contain scale-110 w-[95%] h-[95%]"
                    quality={100}
                  />
                </div>

                {/* Cloud Image */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeTab === 'cloud' ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={flexibleImg2}
                    alt="Cloud Deployment Illustration"
                    width={550}
                    height={450}
                    className="object-contain scale-110 w-[95%] h-[95%]"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Shade 1 - Top Right */}
            {/* <div className="absolute -top-16 sm:-top-20 md:-top-24 -right-10 sm:-right-16 md:-right-20 z-30 md:block hidden">
              <Image
                src={shade1}
                alt=""
                width={320}
                height={320}
                className="object-contain opacity-60"
              />
            </div> */}

            {/* Shade 2 - Bottom Left */}
            <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 -left-10 sm:-left-16 md:-left-20 z-30 md:block hidden">
              <Image
                src={shade2}
                alt=""
                width={320}
                height={320}
                className="object-contain opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlexibleSection
