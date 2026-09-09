"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] lg:h-[70vh] lg:min-h-[480px] lg:max-h-[680px] flex items-center justify-center bg-primary-gradient pt-14 sm:pt-16 pb-8 lg:py-0 px-6 sm:px-10 lg:px-14 overflow-hidden">
      {/* Ambient Decorative Flowing SVG Wave Lines in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1200px] h-[520px] pointer-events-none"
          viewBox="0 0 1200 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M -100 290 C 240 90, 540 430, 890 210 C 1040 110, 1180 230, 1350 170"
            stroke="url(#hero-ambient-gradient)"
            strokeWidth="1.8"
            strokeDasharray="6 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.35 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M -50 350 C 300 170, 640 470, 970 270 C 1110 190, 1240 270, 1400 220"
            stroke="url(#hero-ambient-gradient)"
            strokeWidth="1.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.25 }}
            transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="hero-ambient-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00F5D4" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFE566" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center relative z-10">
        
        {/* Left Side: Heading, Description, Book a Free demo Button */}
        <div className="flex flex-col justify-center text-left z-10">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] xl:text-[28px] font-semibold tracking-tight text-white leading-snug mb-2.5">
            We Design Websites That<br />
            <span className="relative inline-block text-[#FFE566] pb-1">
              Help Your Business Grow
              <HandDrawnUnderline color="#FFE566" />
            </span>
          </h1>

          <p className="text-white/80 text-xs sm:text-[13px] md:text-xs leading-relaxed max-w-md mb-4 font-normal">
            From modern web design to custom digital products, we help ambitious brands launch faster, stand out online, and win more customers.
          </p>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-medium font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-sm hover:shadow-[0_0_16px_rgba(0,245,212,0.45)] transition-all duration-200 cursor-pointer group"
            >
              <span>Book a Free Demo</span>
              <IconArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Right Side: SVG Illustration scaled to fit 70vh */}
        <div className="flex items-center justify-center relative w-full z-10">
          <Image
            src="/svgs/hero.svg"
            alt="DevRep Labs Hero Illustration"
            width={640}
            height={560}
            priority
            className="w-full max-w-[260px] sm:max-w-xs md:max-w-sm lg:max-w-[360px] max-h-[26vh] sm:max-h-[30vh] lg:max-h-[36vh] w-auto h-auto object-contain drop-shadow-sm"
          />
        </div>

      </div>
    </section>
  );
}
