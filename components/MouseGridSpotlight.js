"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGridSpotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth springs for fluid cursor tracking
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200 });

  const [cursorPos, setCursorPos] = useState({ x: -500, y: -500 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1: Ambient Low Opacity Base SVG Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
          <defs>
            <pattern id="ambient-base-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-zinc-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ambient-base-grid)" />
        </svg>
      </div>

      {/* Layer 2: Interactive Mouse Spotlight Grid (Higher Opacity Radial Circle) */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          maskImage: `radial-gradient(320px circle at ${cursorPos.x}px ${cursorPos.y}px, black 15%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(320px circle at ${cursorPos.x}px ${cursorPos.y}px, black 15%, transparent 80%)`,
        }}
      >
        {/* Crisp High Opacity Dark Grid */}
        <div className="absolute inset-0 opacity-35">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
            <defs>
              <pattern id="spotlight-high-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#262626" strokeWidth="1.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#spotlight-high-grid)" />
          </svg>
        </div>

        {/* Subtle Cyber Lime Primary Glow Accent within Circle */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
            <defs>
              <pattern id="spotlight-glow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d7ff00" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#spotlight-glow-grid)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
