'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroImg, mainBg, company1, company2, company3, company4 } from "@/assets";
import AutomationSection from "./components/Home/AutomationSection";
import Divider from "./components/Divider";
import EnterpriseSection from "./components/Home/EnterpriseSection";
import FeaturesSection from "./components/Home/FeaturesSection";
import OverView from "./components/Home/OverView";
import CounterSection from "./components/Home/CounterSection";
import PotentialSection from "./components/Home/PotentialSection";
import ComparisionSection from "./components/Home/ComparisionSection";
import FlexibleSection from "./components/Home/FlexibleSection";
import InsightsSection from "./components/Home/InsightsSection";
import TestimonialSection from "./components/Home/TestimonialSection";
import FaqSection from "./components/Home/FaqSection";
import WaveSection from "./components/Home/WaveSection";


export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section 
        className="relative flex flex-col items-center md:h-screen pt-5 md:pt-10 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={mainBg} 
            alt="Hero Background" 
            fill 
            priority 
            className="object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <h2 className="md:text-[60px] text-[20px] md:p-10">
              The <span className="text-[#1A1A1A] font-bold ">Fastest</span>, <span className="text-[#1A1A1A] font-extrabold">Safest</span>, And <span className="text-[#1A1A1A] font-extrabold">Most Scalable</span> Way To Build Intelligent Agentic <span className="text-[#1A1A1A] font-bold">AI Applications</span>
            </h2>
            
            <p className="md:text-[20px] text-[15px] text-gray-700">
              Low-Code/No-Code Platform For Enterprise Grade AI Agents And Workflows
            </p>
            
            <Link 
              href="http://app.tiby.ai/" 
              className="button-color text-white px-8 py-3 rounded-lg font-medium md:text-[20px] text-[15px] transition-colors inline-block text-center mt-6"
            >
              Book a demo
            </Link>

            <div className="py-10">
              <p className="text-md font-medium pb-4">• Trusted by leading companies •</p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                {/* Company logos in black and white */}
                <div className="h-6 sm:h-10 w-auto relative">
                  <Image 
                    src={company1} 
                    alt="Cabbazar" 
                    width={100}
                    height={40}
                    className="object-contain h-full w-auto  rounded-lg"
                  />
                </div>
                <div className="h-6 sm:h-10 w-auto relative">
                  <Image 
                    src={company2} 
                    alt="Lawyered" 
                    width={100}
                    height={40}
                    className="object-contain h-full w-auto  rounded-lg"
                  />  
                </div>
                <div className="h-8 sm:h-15 w-auto relative">
                  <Image 
                    src={company3} 
                    alt="India Accelerator" 
                    width={100}
                    height={60}
                    className="object-contain h-full w-auto  rounded-lg"
                  />
                </div>
                <div className="h-6 sm:h-10 w-auto relative">
                  <Image 
                    src={company4} 
                    alt="Droom" 
                    width={100}
                    height={40}
                    className="object-contain h-full w-auto  rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Other sections */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <AutomationSection />
      </motion.div>
      <Divider />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <EnterpriseSection />
      </motion.div>
      <Divider />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <FeaturesSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <OverView />
      </motion.div>
      <WaveSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <CounterSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <PotentialSection />
      </motion.div>
      <Divider />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <ComparisionSection />
      </motion.div>
      <Divider />
      <FlexibleSection />
      <Divider />
      <InsightsSection />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
} 