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
  link = "#contact",
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
  const duration = 0.5;

  return (
    <a
      ref={cardRef}
      href={link}
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/85 z-[1] transition-opacity duration-500" />

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
          className="w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rotate-45 group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isHovered ? hoverTextColor : "#000000"}
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
