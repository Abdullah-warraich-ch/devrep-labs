"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Zap, Search, ShieldCheck } from "lucide-react";
import CircleExpandCard from "./CircleExpandCard";

export default function CircleExpandGrid() {
  const cards = [
    {
      title: "Custom Website Design",
      subtitle: "Beautiful, modern websites tailored to match your brand and impress your clients",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=480&q=75",
      circleColor: "#d7ff00", // Primary Lime
      hoverTextColor: "#000000",
      icon: Layout,
      link: "#contact",
      className: "w-48 sm:w-56 md:w-60 h-64 sm:h-74 md:h-78",
    },
    {
      title: "Mobile & Fast Speed",
      subtitle: "Loads instantly and works perfectly across mobile phones, tablets, and desktops",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: Zap,
      link: "#contact",
      className: "w-56 sm:w-64 md:w-70 h-54 sm:h-62 md:h-66",
    },
    {
      title: "Search & SEO Ready",
      subtitle: "Designed to help potential customers find your business easily on Google",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ff00d7", // Secondary Pink/Magenta
      hoverTextColor: "#ffffff",
      iconColor: "#ffffff",
      arrowColor: "#ffffff",
      icon: Search,
      link: "#contact",
      className: "w-38 sm:w-44 md:w-48 h-48 sm:h-56 md:h-60",
    },
    {
      title: "Complete Care & Support",
      subtitle: "We handle hosting, security, and updates so your site runs completely hassle-free",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: ShieldCheck,
      link: "#contact",
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
