'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { section2Img, featuresImg, overViewImg, b2boutreach, enterpriseImg, SeeInsights, section2Img2 } from '@/assets';

const StackedImage = () => {
  const [cards, setCards] = useState([
    { 
      id: 1, 
      image: section2Img, 
      top: 0,
      opacity: 1, 
      scale: 1, 
      zIndex: 5,
      bgColor: 'bg-white'
    },
    { 
      id: 2, 
      image: featuresImg, 
      top: -30,
      opacity: 0.95, 
      scale: 0.98, 
      zIndex: 4,
      bgColor: 'bg-white'
    },
    { 
      id: 3, 
      image: b2boutreach, 
      top: -60,
      opacity: 0.9, 
      scale: 0.96, 
      zIndex: 3,
      bgColor: 'bg-white'
    },
    { 
      id: 4, 
      image: enterpriseImg, 
      top: -90,
      opacity: 0.85, 
      scale: 0.94, 
      zIndex: 2,
      bgColor: 'bg-white'
    },
    { 
      id: 5, 
      image: section2Img2, 
      top: -120,
      opacity: 0.8, 
      scale: 0.92, 
      zIndex: 1,
      bgColor: 'bg-white'
    }
  ]);
  
  // Track if auto rotation should be paused (when user interacts)
  const [autoRotatePaused, setAutoRotatePaused] = useState(false);
  // Reference to the timeout for resuming auto-rotation
  const resumeTimeoutRef = useRef(null);

  // Function to rotate cards automatically or manually
  const rotateCards = () => {
    setCards(prevCards => {
      const newCards = [...prevCards];
      const firstCard = newCards.shift();
      newCards.push({
        ...firstCard,
        top: -120,
        opacity: 0.8,
        scale: 0.92,
        zIndex: 1
      });
      
      return newCards.map((card, index) => ({
        ...card,
        top: index === 0 ? 0 : 
             index === 1 ? -30 : 
             index === 2 ? -60 : 
             index === 3 ? -90 : -120,
        opacity: index === 0 ? 1 : 
                 index === 1 ? 0.95 : 
                 index === 2 ? 0.9 : 
                 index === 3 ? 0.85 : 0.8,
        scale: index === 0 ? 1 : 
               index === 1 ? 0.98 : 
               index === 2 ? 0.96 : 
               index === 3 ? 0.94 : 0.92,
        zIndex: 5 - index
      }));
    });
  };

  // Function to handle user clicking on a card
  const handleCardClick = (clickedIndex) => {
    // If clicking on the top card, just rotate normally
    if (clickedIndex === 0) {
      rotateCards();
      return;
    }
    
    // Pause auto-rotation when user interacts
    setAutoRotatePaused(true);
    
    // Clear any existing timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    
    // Move the clicked card to the top
    setCards(prevCards => {
      // Create a new array where the clicked card is first
      const reorderedCards = [...prevCards];
      const clickedCard = reorderedCards.splice(clickedIndex, 1)[0];
      reorderedCards.unshift(clickedCard);
      
      // Update positions, opacity, scale, zIndex
      return reorderedCards.map((card, index) => ({
        ...card,
        top: index === 0 ? 0 : 
             index === 1 ? -30 : 
             index === 2 ? -60 : 
             index === 3 ? -90 : -120,
        opacity: index === 0 ? 1 : 
                 index === 1 ? 0.95 : 
                 index === 2 ? 0.9 : 
                 index === 3 ? 0.85 : 0.8,
        scale: index === 0 ? 1 : 
               index === 1 ? 0.98 : 
               index === 2 ? 0.96 : 
               index === 3 ? 0.94 : 0.92,
        zIndex: 5 - index
      }));
    });
    
    // Resume auto-rotation after 8 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(() => {
      setAutoRotatePaused(false);
    }, 8000);
  };

  // Auto-rotate every 4 seconds if not paused
  useEffect(() => {
    let interval;
    
    if (!autoRotatePaused) {
      interval = setInterval(rotateCards, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [autoRotatePaused]);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto h-[250px] sm:h-[500px] md:h-[600px] lg:h-[800px] py-6 sm:py-10 md:py-16 lg:py-20">
      <div className="relative w-full h-full flex justify-center">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute w-[90%] sm:w-[85%] md:w-[80%] lg:w-[900px] h-auto aspect-[3/2] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-md sm:shadow-lg lg:shadow-xl transition-all duration-700 ease-in-out ${card.bgColor} ${index !== 0 ? 'cursor-pointer hover:shadow-2xl' : ''}`}
            style={{
              transform: `translateY(${typeof window !== 'undefined' && window.innerWidth < 640 ? card.top/2 : card.top}px) scale(${card.scale})`,
              opacity: card.opacity,
              zIndex: card.zIndex,
            }}
            onClick={() => handleCardClick(index)}
          >
            {/* Card Header with Icon */}
            <div className="p-2 sm:p-3">
              <div className="flex items-center gap-2 sm:gap-4 bg-[#f7f7f7] p-2 sm:p-3 rounded-lg sm:rounded-xl">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${
                  card.id === 1 ? 'bg-red-100' : 
                  card.id === 2 ? 'bg-green-100' : 
                  card.id === 3 ? 'bg-purple-100' :
                  card.id === 4 ? 'bg-blue-100' :
                  'bg-yellow-100'
                } flex items-center justify-center`}>
                  <span className={`text-lg sm:text-xl md:text-2xl ${
                    card.id === 1 ? 'text-red-500' : 
                    card.id === 2 ? 'text-green-500' : 
                    card.id === 3 ? 'text-purple-500' :
                    card.id === 4 ? 'text-blue-500' :
                    'text-yellow-500'
                  }`}>
                    {card.id === 1 ? '🔄' : 
                     card.id === 2 ? '📅' : 
                     card.id === 3 ? '📁' :
                     card.id === 4 ? '🔌' :
                     '📊'}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 truncate">
                  {card.id === 1 ? 'Meetings and Collaboration' :
                   card.id === 2 ? 'End To End AI Flow Automation' :
                   card.id === 3 ? 'B2B Outreach Agent' :
                   card.id === 4 ? 'Seamless Enterprise Integration' :
                   'Real-Time Monitoring'}
                </h3>
              </div>
            </div>

            {/* Card Content with fixed aspect ratio container */}
            <div className="px-2 sm:px-4 md:px-6 lg:px-8 relative">
              <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={`Feature ${card.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 80vw, 900px"
                  priority={card.id === 1}
                />
              </div>
              
              {/* Click indicator for non-top cards */}
              {/* {index !== 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300">
                  <div className="bg-white bg-opacity-80 px-3 py-1.5 rounded-full text-sm font-medium shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Click to view
                  </div>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedImage;
