'use client'
import React from 'react'
import Image from 'next/image'
import { clickMe, shade1, shade2 } from '@/assets'
import SectionHeading from '../SectionHeading'
import StackedImage from '../StackedImage'

const PotentialSection = () => {
  return (
    <div className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Unique Features pill/chip */}
        <div className="inline-block mb-6">
          <SectionHeading>Unique Features</SectionHeading>
        </div>
        
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Unleash Tiby.Ai's
        </h2>
        
        {/* Subheading */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Unique Potential for you
        </h3>
        
        {/* Description text */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover Tiby Ai's powerful and unique tools that set it apart, offering 
          unmatched efficiency, customization, and collaboration.
        </p>
        
        {/* Arrow image only */}
        <div className="absolute md:flex hidden right-0 md:right-8 top-24 md:top-20 transform translate-x-6 md:translate-x-12">
          <Image 
            src={clickMe} 
            alt="Click arrow" 
            height={100}
            className="object-contain"
          />
        </div>
      </div>

      {/* Container for StackedImage and shades */}
      <div className="relative">
        {/* Shade 1 - Left */}
        <div className="absolute left-20 top-10 bottom-0 -z-10">
          <Image
            src={shade1}
            alt="Decorative shade left"
            width={300}
            height={300}
            className="object-contain opacity-50"
          />
        </div>

        {/* Shade 2 - Right */}
        <div className="absolute right-0 bottom-0 -z-10">
          <Image
            src={shade2}
            alt="Decorative shade right"
            width={300}
            height={300}
            className="object-contain opacity-50"
          />
        </div>

        {/* StackedImage component with wrapper */}
        <div>
          <StackedImage />
        </div>
      </div>
    </div>
  )
}

export default PotentialSection
