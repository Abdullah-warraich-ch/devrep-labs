"use client";

import React, { useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";

const TECH_LIST = [
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white", domain: "nextjs.org", shadowColor: "rgba(255, 255, 255, 0.35)" },
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB", domain: "react.dev", shadowColor: "rgba(97, 218, 251, 0.55)" },
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6", domain: "typescriptlang.org", shadowColor: "rgba(49, 120, 198, 0.55)" },
  { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4", domain: "tailwindcss.com", shadowColor: "rgba(6, 182, 212, 0.55)" },
  { name: "Framer", url: "https://cdn.simpleicons.org/framer/0055FF", domain: "framer.com", shadowColor: "rgba(0, 85, 255, 0.55)" },
  { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/white", domain: "vercel.com", shadowColor: "rgba(255, 255, 255, 0.35)" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/5FA04E", domain: "nodejs.org", shadowColor: "rgba(95, 160, 78, 0.55)" },
  { name: "Vite", url: "https://cdn.simpleicons.org/vite/646CFF", domain: "vite.dev", shadowColor: "rgba(100, 108, 255, 0.55)" },
  { name: "GraphQL", url: "https://cdn.simpleicons.org/graphql/E535AB", domain: "graphql.org", shadowColor: "rgba(229, 53, 171, 0.55)" },
  { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E", domain: "figma.com", shadowColor: "rgba(242, 78, 30, 0.55)" },
];

const LOGO_DEV_TOKEN = "pk_HuAYwmArRDWTjShh3nRICw";

export default function TechLogoTicker({ speed = 35 }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth marquee animation loop
  useAnimationFrame((time, delta) => {
    const currentSpeed = isHovered ? speed * 0.2 : speed;
    setOffset((prev) => prev + (currentSpeed * delta) / 1000);
  });

  // Calculate loop length based on items
  const itemWidth = 72; // optimal logo width
  const gap = 56; // spacious gap
  const singleLoopWidth = TECH_LIST.length * (itemWidth + gap);
  const wrappedOffset = (offset % singleLoopWidth + singleLoopWidth) % singleLoopWidth;

  // Duplicate list 4 times for seamless infinite loop
  const infiniteTechs = [...TECH_LIST, ...TECH_LIST, ...TECH_LIST, ...TECH_LIST];

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden py-3 flex items-center"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex flex-row items-center whitespace-nowrap"
        style={{
          gap: `${gap}px`,
          transform: `translateX(-${wrappedOffset}px)`,
          willChange: "transform",
        }}
      >
        {infiniteTechs.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-120 cursor-pointer"
            title={tech.name}
          >
            <img
              src={tech.url}
              alt={`${tech.name} logo`}
              className="w-full h-full object-contain transition-all duration-300"
              style={{
                filter: `drop-shadow(0px 8px 18px ${tech.shadowColor})`,
              }}
              onError={(e) => {
                // Fallback to Logo.dev API token
                e.currentTarget.src = `https://img.logo.dev/${tech.domain}?token=${LOGO_DEV_TOKEN}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
