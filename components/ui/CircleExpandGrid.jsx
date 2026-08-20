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
      className: "w-[150px] xs:w-[170px] sm:w-[220px] lg:w-[225px] xl:w-[245px] h-[210px] sm:h-[250px] lg:h-[270px]",
    },
    {
      title: "Mobile & Fast Speed",
      subtitle: "Loads instantly and works perfectly across mobile phones, tablets, and desktops",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: Zap,
      link: "#contact",
      className: "w-[160px] xs:w-[180px] sm:w-[230px] lg:w-[235px] xl:w-[255px] h-[190px] sm:h-[230px] lg:h-[250px]",
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
      className: "w-[135px] xs:w-[155px] sm:w-[195px] lg:w-[200px] xl:w-[215px] h-[180px] sm:h-[210px] lg:h-[230px]",
    },
    {
      title: "Complete Care & Support",
      subtitle: "We handle hosting, security, and updates so your site runs completely hassle-free",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=480&q=75",
      circleColor: "#ffffff", // Pure White
      hoverTextColor: "#000000",
      icon: ShieldCheck,
      link: "#contact",
      className: "w-[155px] xs:w-[175px] sm:w-[225px] lg:w-[230px] xl:w-[250px] h-[220px] sm:h-[260px] lg:h-[280px]",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between gap-4 md:gap-6 px-4 py-4">
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
