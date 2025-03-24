'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { wavegoodbye } from '@/assets' // Ensure the path is correct

const WaveSection = () => {
  const items = [
    'Unnecessary Complexity',
    'Building and scaling',
    'Disorganized Workflows',
    'Slow',
    'Wasted',
    'missed deadlines',
    'Unnecessary Complexity',
    'Building and scaling',
    'Disorganized Workflows',
    'Slow',
    'Wasted',
    'missed deadlines',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayItems, setDisplayItems] = useState([...items])

  const colors = [
    'from-orange-500 via-purple-500 to-pink-500',
    'from-orange-500 via-purple-500 to-pink-500',
    'from-blue-500 via-green-500 to-yellow-500',
    'from-red-500 via-indigo-500 to-teal-500',
    'from-blue-500 via-green-500 to-yellow-500',
  ]

  const itemRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  // Center the first item initially
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Get the first item
    const firstItem = itemRefs.current[0];
    if (firstItem) {
      // Calculate the position to center the first item
      const containerHeight = container.clientHeight;
      const itemHeight = firstItem.clientHeight;
      const scrollPosition = firstItem.offsetTop - (containerHeight / 2) + (itemHeight / 2);
      
      // Set the scroll position after a small delay to ensure rendering is complete
      setTimeout(() => {
        container.scrollTop = scrollPosition;
      }, 100);
    }
  }, []);

  useEffect(() => {
    // Create a reference to the scrollable container
    const scrollContainer = document.querySelector('.scrollable-container');
    
    const observerOptions = {
      root: scrollContainer,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentIndex(Number(entry.target.dataset.index));
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [displayItems]);

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrolling = true;
    let lastTimestamp = 0;
    let animationFrameId = null;
    
    // Use requestAnimationFrame for smoother scrolling
    const smoothScroll = (timestamp) => {
      if (!scrolling) return;
      
      // Control scroll speed (lower = slower, higher = faster)
      if (timestamp - lastTimestamp > 16) { // ~60fps
        container.scrollTop += 0.5; // Smaller increment for smoother scrolling
        lastTimestamp = timestamp;
      }
      
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    // Give time for initial centering before starting auto-scroll
    const initialDelay = setTimeout(() => {
      startAutoScroll();
    }, 2000); // 2-second delay before auto-scrolling

    const startAutoScroll = () => {
      scrolling = true;
      animationFrameId = requestAnimationFrame(smoothScroll);
    };
    
    const stopAutoScroll = () => {
      scrolling = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    // Pause auto-scroll when user manually scrolls
    const handleUserScroll = () => {
      stopAutoScroll();
      
      // Resume auto-scroll after user stops scrolling
      const resumeTimeout = setTimeout(() => {
        startAutoScroll();
      }, 2000); // Wait 2 seconds before resuming
      
      return () => clearTimeout(resumeTimeout);
    };

    container.addEventListener('wheel', handleUserScroll);
    container.addEventListener('touchmove', handleUserScroll);
    container.addEventListener('mousedown', handleUserScroll);

    return () => {
      clearTimeout(initialDelay);
      stopAutoScroll();
      container.removeEventListener('wheel', handleUserScroll);
      container.removeEventListener('touchmove', handleUserScroll);
      container.removeEventListener('mousedown', handleUserScroll);
    };
  }, []);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setDisplayItems((prevItems) => [...prevItems, ...items]);
    }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-between mt-7 py-10 px-6 md:px-20 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Left side: Image */}
      <motion.div 
        className="flex-shrink-0 w-full md:w-auto overflow-hidden"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image src={wavegoodbye} alt="Wave goodbye" width={400} height={70} className="w-full max-w-xs md:max-w-md" />
      </motion.div>
      
      {/* Right side: Text content */}
      <motion.div
        ref={scrollContainerRef}
        className="scrollable-container md:ml-3 text-center md:text-left text-2xl w-full md:w-auto mt-6 md:mt-0 md:h-60 h-48 flex items-center overflow-y-auto hide-scrollbar"
        onScroll={handleScroll}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-gray-400 py-20">
          {displayItems.map((item, index) => (
            <p
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={index === currentIndex 
                ? `bg-gradient-to-r ${colors[index % colors.length]} md:text-[45px] text-[30px] font-bold text-transparent bg-clip-text`
                : 'bg-gradient-to-b from-transparent md:text-[45px] text-[30px] font-bold to-gray-500 text-transparent bg-clip-text'
              }
            >
              {item}
            </p>
          ))}
        </div>
      </motion.div>

      {/* CSS for hiding scrollbar but keeping functionality */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </motion.div>
  )
}

export default WaveSection
