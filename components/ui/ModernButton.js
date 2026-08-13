"use client";

import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ModernButton({
  title = "Request a Free Demo",
  href,
  textColor = "#ffffff",
  hoverTextColor = "#000000",
  backgroundFill = "#000000",
  hoverColor = "#ffffff",
  iconBackground = "#d7ff00",
  iconColor = "#000000",
  hoverIconBackground = "#000000",
  hoverIconColor = "#ffffff",
  className = "",
  onClick,
  type,
  disabled = false,
  as,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const transition = {
    type: "spring",
    stiffness: 150,
    damping: 24,
    mass: 1.2,
  };

  const Component = as || (type || disabled ? motion.button : motion.a);

  return (
    <LayoutGroup>
      <Component
        href={Component === motion.a ? href || "#contact" : undefined}
        type={Component === motion.button ? type || "button" : undefined}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative inline-flex items-center justify-center gap-3.5 cursor-pointer text-decoration-none select-none overflow-hidden rounded-full border border-primary/20 hover:border-white/20 shadow-xl h-[58px] sm:h-[60px] box-border disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        style={{
          padding: isHovered ? "6px 28px 6px 6px" : "6px 6px 6px 28px",
          backgroundColor: isHovered ? hoverColor : backgroundFill,
        }}
        transition={transition}
      >
        <motion.span
          layout
          style={{
            order: isHovered ? 1 : 0,
            color: isHovered ? hoverTextColor : textColor,
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "1.05rem",
            fontWeight: 700,
            lineHeight: "1em",
            whiteSpace: "nowrap",
          }}
          transition={transition}
        >
          {title}
        </motion.span>

        <motion.span
          layout
          className="flex items-center justify-center rounded-full shrink-0"
          style={{
            order: isHovered ? 0 : 1,
            backgroundColor: isHovered ? hoverIconBackground : iconBackground,
            color: isHovered ? hoverIconColor : iconColor,
            width: "42px",
            height: "42px",
          }}
          transition={transition}
        >
          <ChevronRight className="size-5 stroke-[2.5]" />
        </motion.span>
      </Component>
    </LayoutGroup>
  );
}
