import React from 'react'
import { motion } from 'framer-motion'

const OverviewMarquee = () => {
  const items = [
    'Analytics',
    'No-Code AI Agent',
    'Workflow Builder',
    'Real-Time Monitoring',
    'Document Sharing',
    'Secure & Scalable'
  ]

  return (
    <div className="overflow-hidden whitespace-nowrap py-2 sm:py-4 w-full">
      <motion.div
        className="flex space-x-4 sm:space-x-8"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className="px-2 py-1.5 sm:px-4 sm:py-2 bg-[#1e1e1e] rounded-md text-white text-xs sm:text-sm md:text-base flex items-center flex-shrink-0"
          >
            <span className="mr-1.5 sm:mr-2 text-lg" style={{ color: getColor(index) }}>•</span> {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const getColor = (index) => {
  const colors = ['#FF2E2E', '#EE7B16', '#8A43E1', '#D510FC', '#254da9', '#49cc0d']
  return colors[index % colors.length]
}

export default OverviewMarquee
