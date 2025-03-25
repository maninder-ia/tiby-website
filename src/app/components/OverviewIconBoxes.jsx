import React from 'react'
import Image from 'next/image'
import { leftLine, Overview1, Overview2, Overview3, Overview4 } from '@/assets'

const OverviewIconBoxes = () => {
  // Data for icon boxes
  const boxes = [
    {
      icon: Overview1, // Image import
      title: 'Sales',
      description: 'Boost lead generation, pipeline tracking and CRM updates. Close deals faster with AI-driven precision.'
    },
    {
      icon: Overview2, // Image import
      title: 'HR',
      description: 'Automate hiring, onboarding, and performance tracking with AI agents tailored for HR efficiency.'
    },
    {
      icon: Overview3, // Image import
      title: 'Customer Service',
      description: 'Log 24/7 support with AI for tickets, sentiment analysis, and instant issue resolution. Keep customers happy, hours directly within the platform.'
    },
    {
      icon: Overview4, // Image import
      title: 'Legal',
      description: 'Automate contract management, compliance monitoring, and legal research with AI agents tailored for legal efficiency.'
    }
  ]

  return (
    <div className="w-full mt-[5rem] md:mt-20">
      {/* Grid layout for icon boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#3D3D3D]">
        {boxes.map((box, index) => (
          <div 
            key={index} 
            className={`p-8  relative group
              ${index !== 0 ? 'border-l' : ''}
              ${index !== boxes.length - 1 ? 'border-r' : ''}`}
            style={{
              borderLeft: index !== 0 ? '1px solid transparent' : 'none',
              borderRight: index !== boxes.length - 1 ? '1px solid transparent' : 'none',
              borderImage: 'linear-gradient(180deg, #3D3D3D 0%, #111111 100%) 1'
            }}
          >
            {/* Center vertical gradient dividers - only between columns */}
            {/* After first column in 4-col layout */}
            {index === 0 && (
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] z-10">
              </div>
            )}
            
            {/* After second column in 4-col layout */}
            {index === 1 && (
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] z-10"
                   style={{
                     background: 'linear-gradient(180deg, #3D3D3D 0%, #D510FC 64%, #8A43E1 76%, #EE7B16 88%, #FF2E2E 100%)'
                   }}>
              </div>
            )}
            
            {/* After third column in 4-col layout */}
            {index === 2 && (
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] z-10">
              </div>
            )}
            
            {/* Center divider for 2-col layout (medium screens) */}
            {index === 0 && (
              <div className="hidden md:block lg:hidden absolute right-0 top-0 bottom-0 w-[1px] z-10"
                   style={{
                     background: 'linear-gradient(180deg, #3D3D3D 0%, #D510FC 64%, #8A43E1 76%, #EE7B16 88%, #FF2E2E 100%)'
                   }}>
              </div>
            )}
            
            {/* Icon */}
            <div className="text-3xl mb-4 text-white">
              <Image src={box.icon} alt={box.title} width={30} height={30} />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-white">
              {box.title}
            </h3>
            
            {/* Description */}
            <p className="text-[#808080] text-[16px] leading-relaxed">
              {box.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* "Other Interesting Features" button */}
      <div className="flex justify-center items-center mt-[-26px] relative">
        {/* Left line image */}
        <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#3D3D3D]"></div>        
        {/* Button with gradient border on top */}
        <button className="relative px-6 py-3 bg-[#1e1e1e] rounded-full transition-colors z-10 mx-4"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: '2px solid #3D3D3D'
                }}>
          <span className="text-white text-sm">Other Interesting Features</span>
          <div className="absolute top-0 left-0 right-0 h-[0.5px] rounded-full"
               style={{
                 background: 'linear-gradient(270deg, #3D3D3D 0%, #D510FC 19.9%, #8A43E1 39.94%, #EE7B16 60.44%, #FF2E2E 81.65%, #3D3D3D 100%)'
               }}></div>
        </button>
        
        {/* Right line image */}
        {/* <img src={rightLine} alt="Right Line" className="h-[1px] flex-grow" /> */}
      </div>
    </div>
  )
}

export default OverviewIconBoxes