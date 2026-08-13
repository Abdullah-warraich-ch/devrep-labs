"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * WavyNavLink
 * Inspired by Framer Wavy Nav Link module.
 * Features staggered wavy character hover animation + animated SVG wavy underline effect.
 */

export default function WavyNavLink({
  label,
  href,
  className = "",
  onClick,
  active = false,
  underlineColor = "#d7ff00",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const letters = Array.from(label || "");

  // Wavy text letter variants
  const letterVariants = {
    initial: { y: 0 },
    hover: (i) => ({
      y: [0, -5, 0],
      transition: {
        duration: 0.35,
        delay: i * 0.03,
        ease: "easeInOut",
      },
    }),
  };

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (!elem) return;

      // GSAP pins elements with position:fixed and wraps them in a pin-spacer.
      // scrollIntoView won't work on fixed elements — scroll to the pin-spacer instead.
      const parent = elem.parentElement;
      const scrollTarget =
        (parent && parent.getAttribute("data-pin-spacer") !== null) ? parent :
        (parent && parent.classList.contains("pin-spacer")) ? parent :
        elem;

      const targetTop = scrollTarget.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative inline-flex flex-col items-center justify-center px-4 py-2 text-sm transition-all duration-300 group cursor-pointer select-none",
        active
          ? "text-white font-semibold tracking-tight"
          : "text-zinc-400 hover:text-white font-medium",
        className
      )}
    >
      {/* Wavy Letter Container */}
      <span className="relative z-10 flex items-center tracking-tight">
        {letters.map((char, idx) => (
          <motion.span
            key={idx}
            custom={idx}
            variants={letterVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </span>

      {/* SVG Wavy Underline */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[85%] h-2 pointer-events-none overflow-hidden flex justify-center items-center">
        <motion.svg
          width="100%"
          height="8"
          viewBox="0 0 100 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: isHovered || active ? 1 : 0,
            scaleX: isHovered || active ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
          className="w-full origin-center"
        >
          <motion.path
            d="M0 4 Q 12.5 0, 25 4 T 50 4 T 75 4 T 100 4"
            stroke={active ? "#d7ff00" : underlineColor}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M0 4 Q 12.5 0, 25 4 T 50 4 T 75 4 T 100 4",
                "M0 4 Q 12.5 8, 25 4 T 50 4 T 75 4 T 100 4",
                "M0 4 Q 12.5 0, 25 4 T 50 4 T 75 4 T 100 4",
              ],
            }}
            transition={{
              duration: isHovered ? 0.8 : 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </div>
    </a>
  );
}
