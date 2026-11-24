"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowRight, IconBrowser, IconBox, IconChartBar } from "@tabler/icons-react";

export default function WhatWeDoV3() {

  const capabilities = [
    { 
      title: "Custom Website Development",
      href: "/services/custom-web-development",
      desc: "Beautiful, fast, and responsive websites designed to engage your visitors.", 
      icon: IconBrowser,
      iconStyle: "bg-white text-black shadow-md",
      illustration: "/images/first_card.webp",
      imgClassName: "top-2 -right-10 w-[220px] h-[220px] sm:top-[-20px] sm:-right-16 sm:w-[280px] sm:h-[280px]"
    },
    { 
      title: "Web Application Development",
      href: "/services/web-application-development",
      desc: "Powerful custom software tailored specifically to solve your business needs.", 
      icon: IconBox,
      iconStyle: "bg-purple-400 text-black",
      illustration: "/images/loop.png",
      imgClassName: "top-4 -right-16 w-[240px] h-[240px] sm:-top-20 sm:-right-30 sm:w-[300px] sm:h-[300px]"
    },
    { 
      title: "SEO & Growth", 
      desc: "Optimized designs that rank higher on Google and turn clicks into customers.", 
      icon: IconChartBar,
      iconStyle: "bg-teal-300 text-black",
      illustration: "/images/SEO.webp",
      imgClassName: "top-4 -right-16 w-[240px] h-[240px] sm:top-0 sm:-right-20 sm:w-[300px] sm:h-[300px]"
    },
  ];

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#191a20] pb-14 pt-16 text-white scroll-mt-14 sm:pb-20 sm:pt-24"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <svg aria-hidden="true" focusable="false" viewBox="0 0 360 32" preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 h-5 w-full sm:h-9">
        <path d="M0 0H360V2H146C137 2 132 4 126 10L111 24C105 30 100 32 91 32H0Z" fill="white" />
      </svg>
      <svg aria-hidden="true" focusable="false" viewBox="0 0 440 190" fill="none"
        className="pointer-events-none absolute -right-12 top-2 -z-10 w-52 text-white/10 sm:-right-6 sm:w-96">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d={`M-20 ${22 + i * 7} C120 ${-72 + i * 5} 185 ${226 + i * 3} 460 ${40 + i * 7}`} stroke="currentColor" />
        ))}
      </svg>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-12">
          <h2 className="font-poppins-m text-[clamp(2.75rem,6vw,5.5rem)] leading-none tracking-[-0.055em]">
            What we do<span className="text-primary">.</span>
          </h2>
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 font-poppins-m text-sm text-white transition-colors hover:bg-white/10">
            Discuss your project <IconArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            const isFirst = index === 0;
            
            const bgClass = isFirst
              ? "bg-gradient-to-br from-[#1e1f26] via-[#111112] to-[#0a0a0a] text-white border border-white/15"
              : "bg-white border border-foreground/5 text-foreground";

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
                  <cap.icon aria-hidden="true" size={36} />
                </div>
                
                {cap.illustration && (
                  <div className={`absolute z-0 pointer-events-none ${cap.imgClassName}`}>
                    <Image src={cap.illustration} alt={`${cap.title} illustration`} fill className="object-contain" />
                  </div>
                )}
                
                <h3 className={`text-2xl sm:text-[28px] font-poppins-m mb-6 mt-16 leading-[1.2] relative z-10 ${
                  isFirst ? "text-white" : "text-foreground"
                }`}>
                  {cap.href ? <Link href={cap.href} className="hover:underline">{cap.title}</Link> : cap.title}
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

        <nav aria-label="More development services" className="mt-8 flex flex-wrap gap-5">
          <Link className="underline underline-offset-4" href="/services/ecommerce-development">Ecommerce Website Development</Link>
          <Link className="underline underline-offset-4" href="/services/ai-automation">AI Automation for Businesses</Link>
          <Link className="underline underline-offset-4" href="/services/ui-ux-design">UI UX Design for Websites and Apps</Link>
        </nav>
      </div>
    </section>
  );
}
