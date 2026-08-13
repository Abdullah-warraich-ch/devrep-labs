"use client";

import React from "react";
import CircleExpandCard from "./CircleExpandCard";

export default function CircleExpandGrid() {
  const cards = [
    {
      category: "01 • PERFORMANCE",
      title: "10x Speed Edge",
      subtitle: "Sub-second load times on Next.js 16 Edge runtime",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=480&q=75",
      circleColor: "#d7ff00", // Primary Lime
      hoverTextColor: "#000000",
      className: "w-52 sm:w-60 md:w-64 h-72 sm:h-80 md:h-84",
    },
    {
      category: "02 • CONVERSION",
      title: "High-Impact UI/UX",
      subtitle: "Bespoke digital platforms engineered to convert",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      className: "w-64 sm:w-72 md:w-80 h-80 sm:h-92 md:h-96",
    },
    {
      category: "03 • AI ENGINE",
      title: "Smart LLM Agents",
      subtitle: "Autonomous AI workflows & custom enterprise automation",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=480&q=75",
      circleColor: "#d7ff00", // Primary Lime
      hoverTextColor: "#000000",
      className: "w-48 sm:w-56 md:w-60 h-64 sm:h-72 md:h-76",
    },
    {
      category: "04 • SCALABILITY",
      title: "Zero Tech Debt",
      subtitle: "Clean, bulletproof codebases built to scale effortlessly",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
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
