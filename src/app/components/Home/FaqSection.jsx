'use client'
import React, { useState } from 'react'
import SectionHeading from '../SectionHeading'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What is Tiby.AI?",
    answer: "Tiby.AI is a no-code, fully managed Agentic AI platform that enables enterprises to build, deploy, and monitor secure and scalable Generative AI (GenAI) agents and workflows."
  },
  {
    question: "Who are the founders of Tiby.AI?",
    answer: "Tiby.AI is co-founded by Deepak Sharma and Maninder Bawa. The team also includes advisors from McKinsey, Microsoft Azure, and other leading organizations."
  },
  {
    question: "What problem does Tiby.AI solve?",
    answer: "Enterprises struggle with specialized AI talent, system integrations, and AI compliance/security. Tiby.AI addresses these challenges by providing a no-code AI agent builder with real-time monitoring and enterprise-grade security."
  },
  {
    question: "How does Tiby.AI work?",
    answer: "Tiby.AI provides a no-code interface to create AI-driven workflows, allowing enterprises to automate tasks, integrate with existing systems, and monitor AI performance in real-time."
  },
  {
    question: "What are the key features of Tiby.AI?",
    answer: "Enterprise-grade AI Agents, Secure & Private AI, No-code AI Agent and Workflow Builder, Real-time Monitoring & Analytics, Advanced AI & LLM Integrations, Seamless Enterprise System Integrations, Deployment on Cloud, On-Prem, or Hybrid Environments."
  },
  {
    question: "What are some use cases of Tiby.AI?",
    answer: "Tiby.AI can be used in HR, Sales, Customer Service, Legal, and Banking sectors to automate tasks such as lead generation, contract management, customer support, and workflow automation."
  },
  {
    question: "How is Tiby.AI different from competitors like LangChain and AutoGen?",
    answer: "Tiby.AI provides enterprise-grade security, a no-code AI agent builder, on-premise/hybrid deployment options, and real-time AI monitoring, which many competitors lack."
  },
  {
    question: "Can Tiby.AI be deployed on-premise?",
    answer: "Yes, Tiby.AI can be deployed on-premise, in the cloud, or in hybrid environments based on enterprise needs."
  },
  {
    question: "What security measures does Tiby.AI offer?",
    answer: "Tiby.AI ensures enterprise-grade security with compliance monitoring, role-based access control, and real-time AI performance analytics."
  },
  {
    question: "How can I book a demo?",
    answer: "You can schedule a personalized demo via [this link](https://calendly.com/manindersinghbawa95/30min) or contact Tiby.AI at maninder@tiby.ai."
  },
  {
    question: "Does Tiby.AI offer customer support?",
    answer: "Yes, Tiby.AI provides dedicated support for onboarding, integration, and troubleshooting."
  }
];

const FAQ = ({ faq, isOpen, toggleOpen, index }) => {
  return (
    <>
      <motion.div 
        className="py-6 border-t border-gray-200 cursor-pointer"
        id="faq-section"
        initial={false}
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl font-medium text-gray-900">{faq.question}</h3>
          <button className="text-gray-500 focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>
            )}
          </button>
        </div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-5 text-sm md:text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {index === faqs.length - 1 && <div className="border-t border-gray-200"></div>}
    </>
  );
};

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-center mb-4">
          <div className="inline-block">
            <SectionHeading>FAQs</SectionHeading>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:mb-20 mb-10">
          Frequently Asked Questions
        </h2>
        
        {/* FAQ Accordion */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQ 
                key={index} 
                faq={faq} 
                isOpen={openFaq === index} 
                toggleOpen={() => toggleFaq(index)}
                index={index}
              />
            ))}
          </div>
          <div>
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQ 
                key={index + Math.ceil(faqs.length / 2)} 
                faq={faq} 
                isOpen={openFaq === index + Math.ceil(faqs.length / 2)} 
                toggleOpen={() => toggleFaq(index + Math.ceil(faqs.length / 2))}
                index={index + Math.ceil(faqs.length / 2)}
              />
            ))}
          </div>
        </div>

        {/* Support Banner */}
        <motion.div 
          className="mt-20 bg-white rounded-xl shadow-sm md:p-8 p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Have Questions? We're Here to Help!
              </h3>
              <p className="text-gray-600">
                Reach out to our support team for any queries or assistance.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <a 
                href="mailto:maninder@tiby.ai" 
                className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FaqSection
