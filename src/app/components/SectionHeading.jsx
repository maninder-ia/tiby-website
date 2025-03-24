import React from 'react'

const SectionHeading = ({ children, className = "" }) => {
  return (
    <div className={`inline-block rounded-full bg-white px-6 py-2 shadow-md text-[#1A1A1A] font-medium ${className}`}>
      {children}
    </div>
  )
}

export default SectionHeading