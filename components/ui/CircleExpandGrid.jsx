"use client";

import React from "react";
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
      className: "w-52 sm:w-60 md:w-64 h-72 sm:h-80 md:h-84",
    },
    {
      title: "Stunning Design",
      subtitle: "Beautiful modern experiences crafted to turn visitors into customers",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: Layers,
      className: "w-64 sm:w-72 md:w-80 h-80 sm:h-92 md:h-96",
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
      className: "w-48 sm:w-56 md:w-60 h-64 sm:h-72 md:h-76",
    },
    {
      title: "Built To Grow",
      subtitle: "Reliable and secure digital products designed to scale with your business",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: TrendingUp,
      className: "w-60 sm:w-68 md:w-76 h-76 sm:h-84 md:h-88",
    },
  ];

  return (
    <div className="w-full flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 py-4 overflow-x-auto no-scrollbar">
      {cards.map((card, idx) => (
        <CircleExpandCard key={idx} {...card} />
      ))}
    </div>
  );
}
