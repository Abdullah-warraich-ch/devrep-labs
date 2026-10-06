"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function WhatWeDoV3() {
  const { openContactModal } = useContactModal();

  const capabilities = [
    { 
      title: "Custom Websites", 
      desc: "Beautiful, fast, and responsive websites designed to engage your visitors.", 
      icon: "browser_updated", 
      iconStyle: "bg-white text-black shadow-md",
      illustration: "/images/first_card.webp",
      imgClassName: "top-2 -right-10 w-[220px] h-[220px] sm:top-[-20px] sm:-right-16 sm:w-[280px] sm:h-[280px]"
    },
    { 
      title: "Web Applications", 
      desc: "Powerful custom software tailored specifically to solve your business needs.", 
      icon: "deployed_code", 
      iconStyle: "bg-purple-400 text-black",
      illustration: "/images/loop.png",
      imgClassName: "top-4 -right-16 w-[240px] h-[240px] sm:-top-20 sm:-right-30 sm:w-[300px] sm:h-[300px]"
    },
    { 
      title: "SEO & Growth", 
      desc: "Optimized designs that rank higher on Google and turn clicks into customers.", 
      icon: "stacked_bar_chart", 
      iconStyle: "bg-teal-300 text-black",
      illustration: "/images/SEO.webp",
      imgClassName: "top-4 -right-16 w-[240px] h-[240px] sm:top-0 sm:-right-20 sm:w-[300px] sm:h-[300px]"
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-32 bg-white overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-poppins-m text-foreground leading-[1.1] max-w-3xl tracking-tight"
          >
            We Build <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white mx-1 sm:mx-2 align-middle shadow-lg"><span className="material-symbols-outlined" style={{ fontSize: '32px' }}>animated_images</span></span> Unmatched <br className="hidden lg:block" /> Digital Experiences
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-foreground/60 text-sm sm:text-base max-w-sm lg:text-left leading-relaxed"
          >
            Discover what makes us the most reliable and effective partner for your brand's digital transformation.
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
            <span className="text-foreground font-poppins-m text-sm sm:text-base">Our Core Services ✨</span>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={openContactModal} 
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-foreground text-background font-poppins-m text-xs sm:text-sm hover:bg-foreground/90 transition-colors shadow-sm"
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
            if (index === 0) bgClass = "bg-gradient-to-br from-[#1e1f26] via-[#111112] to-[#0a0a0a] text-white shadow-xl";
            else if (index === 1) bgClass = "bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[rgba(147,51,234,0.05)] border border-foreground/5 text-foreground";
            else if (index === 2) bgClass = "bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[rgba(20,184,166,0.05)] border border-foreground/5 text-foreground";
            else if (index === 3) bgClass = "bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[rgba(59,130,246,0.05)] border border-foreground/5 text-foreground";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`relative flex flex-col p-8 sm:p-10 rounded-[32px] min-h-[380px] lg:min-h-[440px] overflow-hidden ${bgClass}`}
              >
                <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center mb-auto relative z-10 ${cap.iconStyle}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>{cap.icon}</span>
                </div>
                
                {cap.illustration && (
                  <div className={`absolute z-0 pointer-events-none ${cap.imgClassName}`}>
                    <Image src={cap.illustration} alt={`${cap.title} illustration`} fill className="object-contain" />
                  </div>
                )}
                
                <h3 className={`text-2xl sm:text-[28px] font-poppins-m mb-6 mt-16 leading-[1.2] relative z-10 ${
                  isFirst ? "text-white" : "text-foreground"
                }`}>
                  {cap.title}
                </h3>
                
                <p className={`text-sm sm:text-[15px] leading-relaxed relative z-10 ${
                  isFirst ? "text-white/70" : "text-foreground/70"
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
