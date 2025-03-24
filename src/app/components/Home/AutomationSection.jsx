'use client'
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import { component1Img, component2Img, component3Img, component4Img, section2Img } from "@/assets";
// import { FiStar, FiBell } from 'react-icons/fi' // For star and bell icons
// import { FaTools } from 'react-icons/fa' // For build tools icon
// import { BiWorld } from 'react-icons/bi' // For globe/deploy icon

const AutomationSection = () => {
  return (
    <section id="" className="md:py-16 py-8">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Heading */}

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row md:gap-10">
          {/* Left Content - Text and Feature Cards */}
          <motion.div 
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <SectionHeading>AI-Powered Workflow Automation</SectionHeading>
            </div>
            {/* Main Heading */}
            <h2 className="md:text-4xl text-[20px] font-bold mb-12 text-[#1A1A1A]">
              No-Code Agentic AI Platform for
              <br />
              Effortless Enterprise Automation
            </h2>

            {/* Feature Cards Grid with Dividers */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 relative">
              {/* Card 1 */}
              <div className="flex flex-col">
                <div className="h-8 rounded-lg flex items-center justify-start mb-4">
                  <Image
                    src={component1Img}
                    alt="Build Complex AI Agents"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="md:text-lg text-[15px] font-semibold mb-2">
                  Build Complex AI Agents
                </h3>
                <p className="md:text-gray-600 md:text-[18px] text-[12px]">using simple, no-code interface</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col">
              <div className="h-8 rounded-lg flex items-center justify-start mb-4">
              <Image
                    src={component2Img}
                    alt="Automate Enterprise Workflows"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="md:text-lg text-[15px] font-semibold mb-2">
                  Automate Enterprise Workflows
                </h3>
                <p className="md:text-gray-600 md:text-[18px] text-[12px]">with AI Agentic capabilities</p>
              </div>
              
              {/* Vertical divider between columns */}
              <div className="hidden md:block absolute top-0 bottom-0 w-px bg-[#DACFF8] left-1/2 transform -translate-x-1/2"></div>

              {/* Card 3 */}
              <div className="flex flex-col">
              <div className="h-8 rounded-lg flex items-center justify-start mb-4">
              <Image
                    src={component3Img}
                    alt="Deploy Anywhere"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="md:text-lg text-[15px] font-semibold mb-2">Deploy Anywhere</h3>
                <p className="md:text-gray-600 md:text-[18px] text-[12px]">
                  on Cloud, on-premise, or hybrid environments
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col">
              <div className="h-8 rounded-lg flex items-center justify-start mb-4">
              <Image
                    src={component4Img}
                    alt="Monitor & Optimize"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="md:text-lg text-[15px] font-semibold mb-2">
                  Monitor & Optimize
                </h3>
                <p className="md:text-gray-600 md:text-[18px] text-[12px]">
                  AI performance, compliance, and security in real time
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Image in White Box */}
          <motion.div 
            className="lg:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* White box container with shadow and rounded corners */}
            <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8] shadow-lg w-full max-w-[600px] mx-auto">
              <div className="bg-white rounded-lg p-4 h-[300px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={section2Img}
                    alt="Dashboard UI"
                    width={500}
                    height={400}
                    className="rounded-lg max-w-full max-h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
