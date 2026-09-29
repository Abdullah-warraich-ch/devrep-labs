"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function WhatWeDoV3() {
  const { openContactModal } = useContactModal();

  const capabilities = [
    { title: "Custom Websites", desc: "Beautiful, fast, and responsive websites designed to engage your visitors.", icon: "browser_updated", iconStyle: "bg-black text-white shadow-md" },
    { title: "Web Applications", desc: "Powerful custom software tailored specifically to solve your business needs.", icon: "deployed_code", iconStyle: "bg-purple-400 text-black" },
    { title: "SEO & Growth", desc: "Optimized designs that rank higher on Google and turn clicks into customers.", icon: "stacked_bar_chart", iconStyle: "bg-teal-300 text-black" },
  ];

  return (
    <section
      id="services"
      className="dark-theme relative w-full py-20 sm:py-32 bg-[var(--background-even)] overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-poppins-m text-white leading-[1.1] max-w-3xl tracking-tight"
          >
            We Build <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white mx-1 sm:mx-2 align-middle shadow-lg"><span className="material-symbols-outlined" style={{ fontSize: '32px' }}>animated_images</span></span> Unmatched <br className="hidden lg:block" /> Digital Experiences
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-sm sm:text-base max-w-sm lg:text-left leading-relaxed"
          >
            Discover what makes us the most reliable and effective partner for your brand&apos;s digital transformation.
          </motion.p>
        </div>

        {/* Sub Header Section */}
        <div className="flex justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-white font-poppins-m text-sm sm:text-base">Our Core Services ✨</span>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={openContactModal} 
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-white text-black font-poppins-m text-xs sm:text-sm hover:bg-white/90 transition-colors shadow-sm"
          >
            <span>Discuss Your Project</span>
            <IconArrowRight size={16} />
          </motion.button>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const isFirst = index === 0;
            
            // Define static gradients matching the design aesthetic
            let bgClass = "";
            if (index === 0) bgClass = "bg-gradient-to-br from-white via-[#f8f9fa] to-[#e9ecef] text-black";
            else if (index === 1) bgClass = "bg-gradient-to-br from-[#1e1f26] via-[#1e1f26] to-[rgba(147,51,234,0.15)] border border-white/5 text-white";
            else if (index === 2) bgClass = "bg-gradient-to-br from-[#1e1f26] via-[#1e1f26] to-[rgba(20,184,166,0.15)] border border-white/5 text-white";
            else if (index === 3) bgClass = "bg-gradient-to-br from-[#1e1f26] via-[#1e1f26] to-[rgba(59,130,246,0.15)] border border-white/5 text-white";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col p-8 sm:p-10 rounded-[32px] min-h-[380px] lg:min-h-[440px] overflow-hidden ${bgClass}`}
              >
                <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center mb-auto ${cap.iconStyle}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>{cap.icon}</span>
                </div>
                
                <h3 className={`text-2xl sm:text-[28px] font-poppins-m mb-6 mt-16 leading-[1.2] relative z-10 ${
                  isFirst ? "text-black" : "text-white"
                }`}>
                  {cap.title}
                </h3>
                
                <p className={`text-sm sm:text-[15px] leading-relaxed relative z-10 ${
                  isFirst ? "text-black/70" : "text-white/60"
                }`}>
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
