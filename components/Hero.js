"use client";

import { motion } from "framer-motion";
import RotatingText from "@/components/RotatingText";
import LiquidMorphButton from "@/components/ui/LiquidMorphButton";
import ModernButton from "@/components/ui/ModernButton";
import CircleExpandGrid from "@/components/ui/CircleExpandGrid";

export default function Hero() {
  return (
    <div className="relative flex-1 w-full flex flex-col justify-center items-center overflow-hidden bg-black rounded-b-2xl sm:rounded-b-3xl">
      {/* Dense Primary Color Glow from Bottom Left Corner */}
      <div className="absolute -bottom-16 -left-16 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-[#d7ff00]/55 blur-[75px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-28 -left-28 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] bg-[#d7ff00]/30 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[550px] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(215,255,0,0.45)_0%,_rgba(215,255,0,0.15)_40%,_transparent_75%)] pointer-events-none z-0" />

      {/* Subtle Dimmed Glow from Bottom Right Corner */}
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[#d7ff00]/15 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[380px] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(215,255,0,0.12)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* Soft Dim White Light at Bottom Center */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[550px] h-[350px] sm:w-[700px] sm:h-[400px] bg-white/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.12)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* Vertically & Horizontally Centered Content Container */}
      <div className="w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8 mx-auto flex-1 flex flex-col justify-center items-center text-center relative z-10 pt-8 sm:pt-12 pb-2 space-y-6 sm:space-y-8">
        {/* 1. Main Headline */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-white tracking-tight text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.18]">
            We design & build{" "}
            <span className="relative inline-block text-secondary font-extrabold pb-2">
              websites
              <svg
                className="absolute left-0 -bottom-1 w-full h-3 sm:h-4 overflow-visible pointer-events-none"
                viewBox="0 0 200 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 5 12 Q 50 2, 100 10 T 195 8"
                  stroke="var(--primary, #d7ff00)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3 text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            <span className="text-white font-bold">for</span>
            <span className="inline-flex justify-center items-center min-w-[200px] sm:min-w-[300px] text-[#d7ff00]">
              <RotatingText
                texts={["Brands", "Startups", "Scale-ups", "Visionaries"]}
                mainClassName="text-primary font-extrabold inline-flex overflow-hidden justify-center"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2400}
                layout={false}
              />
            </span>
          </div>
        </div>

        {/* 2. Subheading */}
        <h2 className="text-sm sm:text-base md:text-lg font-normal text-neutral-300 max-w-2xl leading-relaxed">
          Custom web development, interactive digital platforms & high-performance UI/UX tailored for ambitious brands.
        </h2>

        {/* 3. CTA Buttons Row */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <LiquidMorphButton label="Chat With Us" link="#contact" />
          <ModernButton title="Request a Free Demo" href="#contact" />
        </div>
      </div>

      {/* 4. Framer CircleExpandCards Grid */}
      <div className="pb-8 pt-4 w-full z-10 flex items-center justify-center">
        <CircleExpandGrid />
      </div>
    </div>
  );
}
