"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Clock, Wrench } from "lucide-react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const chevronVariants = {
  initial: {
    x: 0,
    scale: 1,
  },
  hover: {
    x: -2,
    scale: 1.1,
    transition: {
      duration: 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const viewTextVariants = {
  initial: {
    opacity: 0,
    x: 6,
    scale: 0.8,
    width: 0,
  },
  hover: {
    opacity: 1,
    x: 0,
    scale: 1,
    width: "auto",
    transition: {
      delay: 0.15,
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function getToolIcon(toolName, iconClass = "size-7 sm:size-8 shrink-0") {
  const name = toolName.toLowerCase();
  if (name.includes("next")) {
    return (
      <svg className={iconClass} viewBox="0 0 128 128" fill="none">
        <circle cx="64" cy="64" r="64" fill="#000" />
        <path d="M106.3 112L47.7 37.3H36v53.3h10.9V49.8L96.2 114a63.6 63.6 0 0010.1-2z" fill="#fff" />
        <path d="M91.7 37.3h10.9v53.3H91.7z" fill="#fff" />
      </svg>
    );
  }
  if (name.includes("react")) {
    return (
      <svg className={`${iconClass} text-[#61DAFB]`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
        <ellipse cx="50" cy="50" rx="42" ry="16" />
        <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="42" ry="16" transform="rotate(120 50 50)" />
        <circle cx="50" cy="50" r="7" fill="currentColor" />
      </svg>
    );
  }
  if (name.includes("typescript") || name.includes("ts")) {
    return (
      <svg className={`${iconClass} text-[#3178C6]`} viewBox="0 0 128 128" fill="currentColor">
        <rect width="128" height="128" rx="20" fill="#3178C6"/>
        <path d="M70 100v-8.2c2.4 1.3 5.4 2.2 9 2.2 4.6 0 7.3-2.1 7.3-5.3 0-3.3-2.5-4.8-7.7-6.9-7-2.9-11.4-6.3-11.4-13.4 0-7.8 6.3-13.6 16.5-13.6 4.6 0 8.3.9 11.2 2.3l-2.2 8.4c-2.4-1.1-5.4-1.9-8.7-1.9-4.8 0-6.8 2.2-6.8 4.7 0 3.2 2.7 4.5 8.1 6.8 7.4 3.1 11.1 6.8 11.1 13.8 0 8.5-6.5 14.1-17.6 14.1-5.1 0-9.8-1.2-12.8-2.9zm-38.6-32.9h12.5v41.6h11V67.1h12.4v-8.7H31.4v8.7z" fill="#fff"/>
      </svg>
    );
  }
  if (name.includes("pytorch") || name.includes("python")) {
    return (
      <svg className={`${iconClass} text-[#EE4C2C]`} viewBox="0 0 128 128" fill="currentColor">
        <path d="M78.6 14.8a3.2 3.2 0 00-4.5 0L64.8 24a3.2 3.2 0 000 4.5l1.6 1.6a3.2 3.2 0 004.5 0l9.3-9.2a3.2 3.2 0 000-4.5l-1.6-1.6zm-29.2 0a3.2 3.2 0 00-4.5 0l-1.6 1.6a3.2 3.2 0 000 4.5l9.3 9.2a3.2 3.2 0 004.5 0l1.6-1.6a3.2 3.2 0 000-4.5L49.4 14.8zM64 36c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 68c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z"/>
      </svg>
    );
  }
  if (name.includes("framer")) {
    return (
      <svg className={`${iconClass} text-black`} viewBox="0 0 128 128" fill="currentColor">
        <path d="M32 16h64v32H64zM32 48h32v32H32zM32 80h32v32l32-32H32z"/>
      </svg>
    );
  }
  if (name.includes("three")) {
    return (
      <svg className={`${iconClass} text-black`} viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 12L16 40v48l48 28 48-28V40L64 12zm0 18.5l30.8 17.9L64 66.3 33.2 48.4 64 30.5zM28 48.7l30 17.5v35L28 83.7V48.7zm40 52.5v-35l30-17.5v35l-30 17.5z"/>
      </svg>
    );
  }
  if (name.includes("shopify")) {
    return (
      <svg className={`${iconClass} text-[#96BF48]`} viewBox="0 0 128 128" fill="currentColor">
        <path d="M96.7 34.6s-1.8-6.1-8.5-6.1c-6.8 0-11 5.9-11 5.9S73.1 27 66.8 27c-6.2 0-9.8 4.7-9.8 4.7l-4.2-2.1-4.7 1.3L46 44.5l3.2 37.6 37.7 5.8 22.9-4.8 1.4-44.5-14.5-4zm-27.1 0c2.4-3.1 6.5-4.1 6.5-4.1s1.3 4.1-1.1 7.2c-2.4 3.1-6.5 3.3-6.5 3.3s-1.3-3.3 1.1-6.4z"/>
      </svg>
    );
  }
  if (name.includes("graphql")) {
    return (
      <svg className={`${iconClass} text-[#E10098]`} viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 12L18.6 38.2v52.4L64 116l45.4-25.4V38.2L64 12zm0 14.8l32.5 18.7v37.4L64 101.6 31.5 82.9V45.5L64 26.8z"/>
      </svg>
    );
  }
  if (name.includes("node")) {
    return (
      <svg className={`${iconClass} text-[#5FA04E]`} viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 12L18.6 38.2v51.6L64 116l45.4-26.2V38.2L64 12zm34.2 70.3L64 102.2 29.8 82.3V44.7L64 24.8l34.2 19.9v37.6z"/>
      </svg>
    );
  }
  return <Wrench className={`${iconClass} text-zinc-700`} />;
}

export default function ShowcaseCard({
  id,
  projectName = "Adella AI",
  projectCategory = "Product Design",
  projectOverview = "",
  projectDescription = "Adella is a modern productivity platform designed to help teams align goals, automate tasks, and visualize growth in real time. I built a cohesive design system focused on clarity, motion, and emotional connection.",
  projectThumbnail = "/projects/nexai.png",
  clientName = "",
  projectDuration = "4 Weeks",
  toolsUsed = "Framer, Next.js, PyTorch",
  link = "#",
  tags = [],
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.stopPropagation();
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div
      layout
      initial="initial"
      whileHover="hover"
      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
      className="group relative rounded-[40px] bg-white p-3 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col justify-between"
    >
      {/* INNER CONTENT WRAPPER */}
      <div className="relative w-full flex flex-col gap-3">
        {/* IMAGE & OVERLAY SECTION */}
        <div className={`relative w-full transition-all duration-500 rounded-[34px] overflow-hidden bg-zinc-950 shadow-sm ${
          isExpanded 
            ? "h-[220px] sm:h-[250px]" 
            : "h-[340px] sm:h-[400px] lg:h-[430px]"
        }`}>
          <Image
            src={projectThumbnail}
            alt={projectName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top rounded-[34px] transition-transform duration-700 ease-out"
          />

          {/* PROGRESSIVE BLUR BOTTOM OVERLAY */}
          <ProgressiveBlur
            position="bottom"
            height="65%"
            borderRadius="34px"
            blurLevels={[1, 2, 4, 8, 12, 16]}
            className="z-10 rounded-[34px] overflow-hidden"
          />

          {/* Dark Gradient Overlay for Crisp Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 rounded-[34px] overflow-hidden pointer-events-none" />

          {/* OVERLAY TEXT (Project Name & Category) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
              {projectName}
            </h3>
            <p className="text-sm font-medium text-white/80 tracking-wide mt-0.5">
              {projectCategory}
            </p>
          </div>
        </div>

        {/* EXPANDED CONTENT DRAWER */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
              className="overflow-hidden bg-white text-zinc-900 rounded-[28px] border-none"
            >
              <div className="pt-3 px-2 pb-2 space-y-5">
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="text-zinc-600 text-sm sm:text-base leading-relaxed font-medium"
                >
                  {projectDescription}
                </motion.p>

                {/* Metadata Section (Pure White, No Border, Icons without BG) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1"
                >
                  {projectDuration && (
                    <div className="py-2 px-1 bg-white flex items-center gap-3.5">
                      <Clock className="size-7 sm:size-8 text-zinc-900 shrink-0" />
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-zinc-400 block leading-none mb-1 tracking-wider">
                          Duration
                        </span>
                        <span className="text-sm font-bold text-zinc-900 truncate block">
                          {projectDuration}
                        </span>
                      </div>
                    </div>
                  )}

                  {toolsUsed && (
                    <div className="py-2 px-1 bg-white flex flex-col justify-center gap-2 min-w-0">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block leading-none tracking-wider">
                        Tools Used
                      </span>
                      <div className="flex items-center gap-3.5 flex-wrap">
                        {(typeof toolsUsed === "string" ? toolsUsed.split(",") : toolsUsed).map((tool, idx) => {
                          const toolTrimmed = typeof tool === "string" ? tool.trim() : tool;
                          return (
                            <div
                              key={idx}
                              className="flex items-center justify-center hover:scale-110 transition-transform"
                              title={toolTrimmed}
                            >
                              {getToolIcon(toolTrimmed, "size-7 sm:size-8 shrink-0")}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Tech Tags */}
                {tags && tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    className="flex flex-wrap gap-2 pt-1"
                  >
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-800 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                )}

                {/* Explore Action Button */}
                {link && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="pt-2"
                  >
                    <a
                      href={link}
                      target={link?.startsWith("http") ? "_blank" : undefined}
                      rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="w-full py-3.5 px-5 rounded-2xl bg-black text-white font-bold text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                    >
                      <span>Preview Project</span>
                      <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform font-bold" />
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* STAGGERED MOTION CHEVRON & VIEW TEXT TOGGLE BUTTON */}
      <button
        type="button"
        onClick={toggleExpand}
        aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
        className="w-full pt-3 pb-1 flex items-center justify-center text-zinc-800 hover:text-black focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 transition-colors cursor-pointer select-none"
      >
        <div className="flex items-center justify-center">
          {/* STEP 1: CHEVRON MOVES FIRST */}
          <motion.div
            variants={chevronVariants}
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
            className="flex items-center justify-center"
          >
            <ChevronDown className="size-5 stroke-[2.5]" />
          </motion.div>

          {/* STEP 2: SMALL VIEW TEXT APPEARS AFTER CHEVRON MOVES */}
          <motion.span
            variants={viewTextVariants}
            className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-zinc-800 ml-1.5 overflow-hidden whitespace-nowrap inline-block"
          >
            {isExpanded ? "Close" : "View"}
          </motion.span>
        </div>
      </button>
    </motion.div>
  );
}
