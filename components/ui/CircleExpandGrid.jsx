"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Layers, Bot, TrendingUp } from "lucide-react";
import CircleExpandCard from "./CircleExpandCard";

export default function CircleExpandGrid() {
  const cards = [
    {
      title: "Lightning Fast Speed",
      subtitle: "Instant page load times that keep visitors happy and engaged",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=480&q=75",
      circleColor: "#d7ff00", // Primary Lime
      hoverTextColor: "#000000",
      icon: Rocket,
      className: "w-48 sm:w-56 md:w-60 h-64 sm:h-74 md:h-78",
    },
    {
      title: "Stunning Design",
      subtitle: "Beautiful modern experiences crafted to turn visitors into customers",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: Layers,
      className: "w-56 sm:w-64 md:w-70 h-54 sm:h-62 md:h-66",
    },
    {
      title: "Smart AI Automation",
      subtitle: "Save time and effort by letting intelligent AI handle daily tasks",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ff00d7", // Secondary Pink/Magenta
      hoverTextColor: "#ffffff",
      iconColor: "#ffffff",
      arrowColor: "#ffffff",
      icon: Bot,
      className: "w-38 sm:w-44 md:w-48 h-48 sm:h-56 md:h-60",
    },
    {
      title: "Built To Grow",
      subtitle: "Reliable and secure digital products designed to scale with your business",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: TrendingUp,
      className: "w-50 sm:w-58 md:w-62 h-68 sm:h-78 md:h-84",
    },
  ];

  return (
    <div className="w-full overflow-hidden max-w-7xl mx-auto flex flex-row items-center justify-around gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 py-4 overflow-x-auto no-scrollbar">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.65,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="shrink-0"
        >
          <CircleExpandCard {...card} />
        </motion.div>
      ))}
    </div>
  );
}
