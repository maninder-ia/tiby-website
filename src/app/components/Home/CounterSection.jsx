'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { counterIcon1,
    counterIcon2,
    counterIcon3,
    counterIcon4, dividerImg } from '@/assets'

const CounterSection = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const counterItems = [
    {
      icon: counterIcon1,
      count: 300,
      suffix: 'K+',
      label: 'Users',
      description: 'Team Collaborations'
    },
    {
      icon: counterIcon2,
      count: 98,
      suffix: 'K+',
      label: 'Success Rate',
      description: 'Tasks completed'
    },
    {
      icon: counterIcon3,
      count: 24,
      suffix: 'M+',
      label: 'Support',
      description: 'Projects Managed'
    },
    {
      icon: counterIcon4,
      count: 150,
      suffix: 'K+',
      label: 'Solutions',
      description: 'Successful Integrations'
    }
  ]

  // Simplify the counter component to ensure it works properly
  const CounterComponent = ({ item, index }) => {
    const { icon, count, suffix, label, description } = item
    const [displayCount, setDisplayCount] = useState(0)
    
    // Use a simpler animation approach to ensure functionality
    useEffect(() => {
      const timer = setTimeout(() => {
        let start = 0;
        const duration = 1500; // ms
        const step = 20; // ms
        
        const updateCounter = () => {
          const elapsed = Math.min(step + start, duration);
          const progress = elapsed / duration;
          setDisplayCount(Math.floor(count * progress));
          
          if (elapsed < duration) {
            start += step;
            setTimeout(updateCounter, step);
          }
        };
        
        updateCounter();
      }, index * 300); // Staggered start
      
      return () => clearTimeout(timer);
    }, [count, index]);

    return (
      <div className="flex flex-col items-center">
        {/* Icon container with responsive sizing */}
        <div className="mb-2 sm:mb-4">
          <Image 
            src={icon} 
            alt={label} 
            width={index === 0 ? 180 : 100}
            height={index === 0 ? 180 : 100}
            className={`object-contain ${index === 0 ? 'scale-90 sm:scale-100 mt-2' : 'scale-75 sm:scale-90 md:scale-100'}`}
          />
        </div>
        
        {/* Content with responsive text and spacing */}
        <div className={`text-center pt-2 sm:pt-4 ${index === 0 ? 'mt-[20px] sm:mt-[30px] md:mt-[50px]' : 'mt-2 sm:mt-4'}`}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            {displayCount}{suffix}
          </h3>
          
          {/* <h4 className="text-lg sm:text-xl font-semibold mt-2 sm:mt-3 text-gray-800">
            {label}
          </h4> */}
          
          <p className="text-sm sm:text-base text-gray-600 text-center mt-1 sm:mt-2 px-2">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative px-4 sm:px-6 pb-10 sm:pb-16 md:pb-20" ref={ref}>
      {/* Top divider with responsive spacing */}
      <div className="absolute top-6 sm:top-8 md:top-10 left-0 right-0 flex justify-center w-full z-0 md:flex hidden">
        <div className="w-full max-w-6xl">
          <Image
            src={dividerImg}
            alt="Section Divider"
            width={1200}
            height={80}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Counter grid with responsive columns */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {counterItems.map((item, index) => (
            <CounterComponent key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom divider with responsive spacing */}
      <div className="absolute mt-12 sm:mt-16 md:mt-20 left-0 right-0 flex justify-center w-full z-0">
        <div className="w-full max-w-6xl">
          <Image
            src={dividerImg}
            alt="Section Divider"
            width={1200}
            height={80}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
