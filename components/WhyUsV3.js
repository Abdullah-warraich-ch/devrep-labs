"use client";

import { useState } from "react";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Zap, Search, Blocks, Target, ArrowRight, Calendar, ExternalLink, Plus, Minus, Laptop } from "lucide-react";

export default function WhyUsV3() {
  const { openContactModal } = useContactModal();
  const [openAccordion, setOpenAccordion] = useState(0);

  const faqs = [
    { 
      title: "Web Development", 
      content: "Next.js, React aur Node.js se fast, scalable websites." 
    },
    { 
      title: "Web Scraping & Automation", 
      content: "Extract valuable data and automate repetitive tasks efficiently." 
    }
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-32 bg-[#F8FAFC] overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

              
              <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-poppins-m text-foreground leading-[1.1] max-w-2xl tracking-tight mb-8">
                Websites <span className="relative inline-flex items-center justify-center w-20 sm:w-28 h-10 sm:h-12 rounded-full bg-red-500 mx-1 sm:mx-2 align-middle shadow-[inset_0_4px_8px_rgba(0,0,0,0.3)]">
                  <Image src="/images/laptop.webp" alt="Laptop" width={80} height={80} className="absolute -top-4 sm:-top-5 w-14 h-14 sm:w-[72px] sm:h-[72px] object-contain drop-shadow-lg" />
                </span><br /> built for growth.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <span className="px-4 py-2 rounded-full bg-white text-[14px] font-medium flex items-center gap-2 text-gray-800">
                <span className="material-symbols-outlined text-black" style={{ fontSize: '20px' }}>speed</span> Fast Delivery
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-[14px] font-medium flex items-center gap-2 text-gray-800">
                <span className="material-symbols-outlined text-black" style={{ fontSize: '20px' }}>manage_search</span> SEO Ready
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-[14px] font-medium flex items-center gap-2 text-gray-800">
                <span className="material-symbols-outlined text-black" style={{ fontSize: '20px' }}>layers</span> Next.js Stack
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-[1.25rem] overflow-hidden transition-all duration-300 ${openAccordion === idx ? 'bg-white' : 'bg-transparent'}`}
                >
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                    className="w-full text-left px-5 py-4 sm:py-5 flex items-center justify-between"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900 font-poppins-m">{faq.title}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 `}>
                       {openAccordion === idx ? <Minus className="w-4 h-4 text-gray-900" /> : <Plus className="w-4 h-4 text-gray-500" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed font-poppins-r">
                            {faq.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-xl border border-gray-100 flex flex-col sm:flex-row gap-8 xl:gap-6 relative h-full min-h-[600px] sm:min-h-[500px]"
          >
            {/* Left Content of Card */}
            <div className="flex-1 flex flex-col justify-between relative z-10">
              <div>
                <h4 className="text-gray-600 text-sm sm:text-md mb-2 font-poppins-sb">
                  Why DevRep
                </h4>
                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-[280px]">
                  Clean code, fast delivery, and design that actually converts.
                </p>
              </div>
              
              <div className="mt-8 sm:mt-0">
                <h3 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-8 leading-[1.05] tracking-tight font-poppins-m">
                  Design.<br/>Build.<br/>Launch.
                </h3>
                <button 
                  onClick={openContactModal} 
                  className="bg-[#0A0A0A] text-white px-7 py-4 rounded-full font-medium flex items-center gap-2 transition-colors group shadow-lg shadow-black/10"
                >
                  <span className="text-[15px] font-poppins-m">Book a Free Call</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image/Phone of Card */}
            <div className="flex-1 relative w-full flex justify-center sm:justify-end items-end sm:items-center mt-6 sm:mt-0 z-0">
               <div className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[2/3] rounded-2xl sm:rounded-3xl bg-gray-100 overflow-hidden">
                  <Image 
                    src="/images/whyUsV3.avif" 
                    alt="DevRep Labs Project Screenshot" 
                    fill 
                    className="object-cover object-top" 
                    sizes="(max-width: 640px) 260px, 280px"
                  />
               </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
