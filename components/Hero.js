"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

export default function Hero() {
  const { openContactModal } = useContactModal();

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[720px] flex items-center justify-center bg-primary-gradient pt-20 sm:pt-24 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-14 overflow-hidden">
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

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Side: Heading, Description, Book a Free Demo Button & Trust Highlights */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] 2xl:text-[48px] font-bold tracking-tight text-white leading-[1.2] mb-4 sm:mb-5 font-['poppins-sb'] text-center lg:text-left">
            <span className="block lg:whitespace-nowrap">We Design Websites That</span>
            <span className="relative inline-block text-[#FFE566] pb-1.5 lg:whitespace-nowrap">
              Help Your Business Grow
              <HandDrawnUnderline color="#FFE566" />
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-[15px] lg:text-base text-white/85 leading-relaxed mb-7 sm:mb-8 font-normal text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <span className="block lg:whitespace-nowrap">From modern web design to custom digital products,</span>
            <span className="block lg:whitespace-nowrap">we help ambitious brands launch faster and win more customers.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 w-full">
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold font-['poppins-sb'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-lg hover:shadow-[0_0_24px_rgba(0,245,212,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
            >
              <span>Book a Free Demo</span>
              <IconArrowRight className="size-4 sm:size-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Quick Quality Tags Under Button (Hidden on Mobile) */}
          <div className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-[13px] text-white/90 font-medium pt-1 w-full">
            <div className="flex items-center gap-2">
              <Image
                src="/images/list2.png"
                alt="check icon"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 object-contain"
              />
              <span>Fast 2–4 Wk Launch</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/list2.png"
                alt="check icon"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 object-contain"
              />
              <span>100% Custom Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/list2.png"
                alt="check icon"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 object-contain"
              />
              <span>SEO & Speed Optimized</span>
            </div>
          </div>
        </div>

        {/* Right Side: Clean SVG Hero Illustration */}
        <div className="flex items-center justify-center relative w-full z-10 py-6 sm:py-8">
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] flex items-center justify-center">
            
            {/* Ambient Background Aura behind SVG */}
            <div className="absolute inset-0 w-4/5 h-4/5 m-auto bg-gradient-to-tr from-[#00F5D4]/20 via-[#8364E8]/25 to-[#FFE566]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Central SVG Hero Illustration */}
            <Image
              src="/svgs/hero.svg"
              alt="DevRep Labs Hero Illustration"
              width={640}
              height={560}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
