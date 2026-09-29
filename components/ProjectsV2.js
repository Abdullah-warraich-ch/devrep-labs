"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconChevronLeft, IconChevronRight, IconArrowRight } from "@tabler/icons-react";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { projects } from "@/data/projects";

// Mock metrics to match the reference UI
const MOCK_METRICS = [
  { value: "+40%", label: "Demo Booking" },
  { value: "+25%", label: "Closing Rate" },
  { value: "3x", label: "Engagement" },
];

export default function ProjectsV2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const landingProjects = projects.slice(0, 4);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % landingProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + landingProjects.length) % landingProjects.length);
  };

  const project = landingProjects[currentIndex];

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section
      id="projects"
      className="dark-theme relative w-full py-16 sm:py-24 bg-[var(--background-even)] overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins-m text-foreground tracking-tight leading-tight">
            <span className="relative inline-block pb-2">
              Our Projects
              <HandDrawnUnderline />
            </span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full flex justify-center items-center group/carousel">
          
          {/* Static Dark Card Container */}
          <div className="bg-[#111112] border border-white/5 w-full rounded-[32px] sm:rounded-[40px] p-0 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            
            {/* Highlighter Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-primary/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />
            
            {/* Top Right Navigation Buttons (Absolute Overlay) */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-30 flex gap-2 sm:gap-3">
              <button onClick={handlePrev} className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors shadow-sm active:scale-95">
                <IconChevronLeft size={24} />
              </button>
              <button onClick={handleNext} className="w-10 h-10 sm:w-12 sm:h-12 bg-white hover:bg-gray-200 rounded-full flex items-center justify-center text-black transition-colors shadow-md active:scale-95">
                <IconChevronRight size={24} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "linear" }}
                style={{ willChange: "opacity" }}
                className="flex flex-col lg:flex-row w-full items-stretch"
              >
                {/* Left Side: Dark Image Container with Padding */}
                <div className="w-full lg:w-[45%] aspect-[4/3] lg:aspect-auto p-3 sm:p-5 lg:p-6 bg-transparent flex flex-col">
                  <div className="relative w-full h-full flex-1 rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-inner">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={90}
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Right Side: Text & Metrics */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center p-6 sm:p-8 lg:p-12 relative z-10 min-h-[420px] lg:min-h-[460px]">
                  
                  {/* Title */}
                  <h3 className="text-[32px] sm:text-[38px] lg:text-[42px] font-poppins-sb leading-[1.05] tracking-tight mb-5 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 font-poppins-r text-sm sm:text-base leading-[1.7] mb-8 pr-4">
                    {project.description}
                  </p>

                  {/* Action Button */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-3 bg-white text-black font-poppins-sb text-sm tracking-wide px-6 py-3 rounded-full hover:bg-gray-200 transition-colors w-fit mb-12 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    Live Preview
                    <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-colors">
                      <IconArrowRight size={14} className="text-black" />
                    </span>
                  </a>

                  {/* Tech Stack Row */}
                  <div className="mt-auto pt-6 border-t border-white/5 w-full">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[12px] sm:text-[13px] text-white/80 font-poppins-r transition-colors hover:bg-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>

        </div>
      </div>
    </section>
  );
}
