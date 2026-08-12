"use client";

import { motion } from "framer-motion";
import RotatingText from "@/components/RotatingText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero() {
  return (
    <div className="relative flex-1 w-full flex flex-col justify-between overflow-hidden">
      {/* MINIMALIST & SPACIOUS SVG VECTOR BACKGROUND ART */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* 1. Subtle Elegant Single Bezier Curve Arc */}
        <svg
          className="absolute top-0 right-0 w-full h-full opacity-35"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 300 0 C 600 200, 800 100, 1200 450"
            stroke="url(#minimal-arc-grad)"
            strokeWidth="2"
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, -80] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />
          <path
            d="M 150 0 C 450 300, 950 150, 1200 600"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
          />

          <defs>
            <linearGradient id="minimal-arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d7ff00" stopOpacity="0" />
              <stop offset="40%" stopColor="#d7ff00" stopOpacity="0.8" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d7ff00" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* 2. Minimal Subtle Orbital Ring Accent (Top Right) */}
        <svg
          className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-25"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="230" stroke="#d7ff00" strokeWidth="1.5" strokeDasharray="12 12" />
          <circle cx="250" cy="250" r="170" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        </svg>

        {/* 3. Soft Ambient Glow Spotlight */}
        <div className="absolute top-0 right-1/3 w-[450px] h-[300px] bg-[#d7ff00]/10 blur-[130px] rounded-full" />
      </div>

      {/* Vertically Centered Main Content Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center my-auto relative z-10 py-6">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center justify-between w-full">
          <div className="flex-1 lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-white -tracking-xl text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              We build high-impact<br className="hidden sm:block" />
              {" "}software for{" "}
              <RotatingText
                texts={["Start-ups", "Scale-ups", "Enterprises", "Visionaries"]}
                mainClassName="text-primary font-bold inline-flex overflow-hidden align-baseline"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2400}
              />
            </h1>
          </div>

          <div className="lg:max-w-sm xl:max-w-md flex flex-col justify-center shrink-0">
            <h2 className="text-sm font-medium text-neutral-300 sm:text-base lg:text-lg leading-relaxed">
              Full-stack web applications, AI platforms & scalable cloud solutions tailored for ambitious tech brands.
            </h2>

            <div className="mt-6 md:mt-8">
              <InteractiveHoverButton className="text-sm px-6 py-3">
                Chat with Us
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Watermark Text - Devrep Labs Anchored Directly at the Bottom Edge */}
      <div className="w-full flex justify-center items-end select-none pointer-events-none z-0 relative pb-1 sm:pb-2">
        <p className="bg-gradient-to-r from-white/20 to-white/0 bg-clip-text text-transparent text-center text-[54px] font-bold sm:text-[4.5rem] md:text-[110px] lg:text-[160px] tracking-tight whitespace-nowrap leading-none">
          Devrep Labs
        </p>
      </div>
    </div>
  );
}
