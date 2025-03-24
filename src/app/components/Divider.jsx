import React from 'react'
import Image from 'next/image'
import { dividerImg } from '@/assets'

const Divider = () => {
  return (
    <div className="w-full py-2 sm:py-3 md:py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-[20px] sm:h-[25px] md:h-[30px] lg:h-[40px]">
          <Image 
            src={dividerImg} 
            alt="Section Divider"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1400px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Divider
