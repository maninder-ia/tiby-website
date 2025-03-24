'use client'
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import { section2Img2, checkmark } from "@/assets";

const EnterpriseSection = () => {
  return (
    <section className="md:pt-8 pt-4">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Content - Timeline Image in White Box */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* White box container with shadow and rounded corners */}
            <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-[#DD00A9] via-[#A98AFF] via-[#8A43E1] to-[#DACFF8] shadow-lg w-full max-w-[600px] mx-auto">
              <div className="bg-white rounded-lg p-2 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[400px] flex items-center justify-center">
                <div className="relative w-[90%] h-[90%]">
                  <Image
                    src={section2Img2}
                    alt="Project Timeline"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 90vw, 45vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Challenges List */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <SectionHeading>Enterprise Challenges</SectionHeading>
            </div>
            
            {/* Main Heading */}
            <h2 className="md:text-4xl text-[28px] font-bold md:mb-12 mb-6 text-[#1A1A1A]">
            End to End AI Workflow
            <br/> Automation
            </h2>

            {/* Challenges List */}
            <div className="md:space-y-3 space-y-2">
              {/* Challenge Items */}
              <motion.div 
                className="flex items-start gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-8 sm:w-12 flex-shrink-0">
                  <Image
                    src={checkmark}
                    alt="Checkmark"
                    width={48}
                    height={48}
                    className="object-contain w-full md:mt-0 mt-1"
                  />
                </div>
                <p className="text-base sm:text-lg text-gray-700 mt-1">Flexibility to orchestrate AI processes</p>
              </motion.div>

              <motion.div 
                className="flex items-start gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-8 sm:w-12 flex-shrink-0">
                  <Image
                    src={checkmark}
                    alt="Checkmark"
                    width={48}
                    height={48}
                    className="object-contain w-full"
                  />
                </div>
                <p className="text-base sm:text-lg text-gray-700 mt-1">Integrations with existing enterprise systems</p>
              </motion.div>

              <motion.div 
                className="flex items-start gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-8 sm:w-12 flex-shrink-0">
                  <Image
                    src={checkmark}
                    alt="Checkmark"
                    width={48}
                    height={48}
                    className="object-contain w-full"
                  />
                </div>
                <p className="text-base sm:text-lg text-gray-700 mt-1"> Run and monitor in realtime any enterprise workflows</p>
              </motion.div>

                {/* <motion.div 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="w-8 sm:w-12 flex-shrink-0">
                    <Image
                      src={checkmark}
                      alt="Checkmark"
                      width={48}
                      height={48}
                      className="object-contain w-full"
                    />
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mt-1">Compliance, Security & Governance over AI Models</p>
                </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection; 