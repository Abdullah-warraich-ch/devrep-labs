"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function CircleExpandCard({
  category = "01 / CATEGORY",
  title = "Card Title",
  subtitle = "Card subtitle description goes here",
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  circleColor = "#d7ff00",
  hoverTextColor = "#000000",
  iconColor,
  arrowColor,
  link = "#contact",
  icon: Icon,
  className = "w-64 h-80",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [expandedSize, setExpandedSize] = useState(1200);

  const initialCircleSize = 48; // 48px circle badge
  const paddingInsetNum = 20; // 20px padding inset matching Framer

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      const diagonal = Math.sqrt(width * width + height * height);
      setExpandedSize(diagonal * 2.2);
    }
  }, []);

  // Framer's signature butter-smooth cubic-bezier transition
  const framerEase = [0.25, 1, 0.5, 1];
  const duration = 1.0; // Doubled duration for smooth open/close

  const handleClick = (e) => {
    if (link && link.startsWith("#")) {
      e.preventDefault();
      const targetId = link.replace("#", "");
      const elem = document.getElementById(targetId);
      if (!elem) return;

      const parent = elem.parentElement;
      const scrollTarget =
        parent && parent.getAttribute("data-pin-spacer") !== null
          ? parent
          : parent && parent.classList.contains("pin-spacer")
          ? parent
          : elem;

      const targetTop = scrollTarget.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

  return (
    <a
      ref={cardRef}
      href={link}
      onClick={handleClick}
      className={`relative block overflow-hidden rounded-3xl shrink-0 group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Background Image with Subtle Blur */}
      <div
        className="absolute -inset-1 bg-cover bg-center blur-[2.5px]"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* 2. Gradient Overlay for Perfect Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/85 z-[1] transition-opacity duration-700" />

      {/* 3. Framer Exact Expanding Circle Animation */}
      <motion.div
        className="absolute rounded-full pointer-events-none z-10"
        style={{
          backgroundColor: circleColor,
          willChange: "width, height, top, right",
        }}
        initial={{
          width: initialCircleSize,
          height: initialCircleSize,
          top: paddingInsetNum,
          right: paddingInsetNum,
        }}
        animate={{
          width: isHovered ? expandedSize : initialCircleSize,
          height: isHovered ? expandedSize : initialCircleSize,
          top: isHovered ? paddingInsetNum - (expandedSize - initialCircleSize) / 2 : paddingInsetNum,
          right: isHovered ? paddingInsetNum - (expandedSize - initialCircleSize) / 2 : paddingInsetNum,
        }}
        transition={{
          duration: duration,
          ease: framerEase,
        }}
      />

      {/* 4. Top Right Arrow Icon Badge */}
      <div
        className="absolute flex items-center justify-center pointer-events-none z-30"
        style={{
          top: paddingInsetNum,
          right: paddingInsetNum,
          width: initialCircleSize,
          height: initialCircleSize,
        }}
      >
        <svg
          className="w-5 h-5 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-45 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke={arrowColor || (isHovered ? hoverTextColor : "#000000")}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: `stroke ${duration}s linear`,
          }}
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>

      {/* 5. Centered Theme Icon (Framed sequence: Appears after circle opens, disappears before circle closes) */}
      {Icon && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.6,
            }}
            transition={{
              duration: isHovered ? 0.45 : 0.25,
              delay: isHovered ? 0.45 : 0,
              ease: framerEase,
            }}
          >
            <Icon
              className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-sm transition-colors duration-500"
              style={{ color: iconColor || hoverTextColor }}
              strokeWidth={2}
            />
          </motion.div>
        </div>
      )}

      {/* 5. Bottom Title & Subtitle Content */}
      <div
        className="absolute z-20 max-w-[88%]"
        style={{
          bottom: paddingInsetNum,
          left: paddingInsetNum,
        }}
      >
        <h3
          className="text-lg sm:text-xl font-bold tracking-tight leading-snug"
          style={{
            color: isHovered ? hoverTextColor : "#ffffff",
            transition: `color ${duration}s linear`,
          }}
        >
          {title}
        </h3>
        <p
          className="text-xs font-normal mt-1 leading-relaxed line-clamp-2 opacity-90"
          style={{
            color: isHovered ? `${hoverTextColor}D9` : "rgba(255, 255, 255, 0.85)",
            transition: `color ${duration}s linear`,
          }}
        >
          {subtitle}
        </p>
      </div>
    </a>
  );
}
