"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
  mass: 1.25,
};

export default function ShiftButton({
  text = "Chat With Us",
  href,
  onClick,
  className = "",
  bgColor = "bg-primary",
  textColor = "text-black",
  circleBgColor = "bg-black",
  circleIconColor = "text-primary",
}) {
  const Component = href ? motion.a : motion.button;

  return (
    <motion.div
      initial="default"
      whileHover="hover"
      animate="default"
      className={cn("inline-block relative select-none", className)}
    >
      <Component
        href={href}
        onClick={onClick}
        className="relative inline-flex items-center justify-center cursor-pointer text-decoration-none group"
      >
        {/* LEFT CIRCLE ICON */}
        <motion.div
          variants={{
            default: { scale: 1, opacity: 1, marginRight: 8 },
            hover: { scale: 0, opacity: 0, marginRight: 0 },
          }}
          transition={springTransition}
          className={cn(
            "h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center shrink-0 shadow-md",
            circleBgColor,
            circleIconColor
          )}
        >
          <ArrowUpRight className="size-5 stroke-[2.5]" />
        </motion.div>

        {/* MAIN TEXT PILL */}
        <motion.div
          variants={{
            default: { rotate: 0 },
            hover: { rotate: -6 },
          }}
          transition={springTransition}
          className={cn(
            "px-6 py-3 rounded-full flex items-center justify-center font-bold tracking-tight shadow-md transition-shadow group-hover:shadow-lg",
            bgColor,
            textColor
          )}
        >
          <span className="text-base sm:text-lg font-bold whitespace-nowrap">
            {text}
          </span>
        </motion.div>

        {/* RIGHT CIRCLE ICON */}
        <motion.div
          variants={{
            default: { scale: 0, opacity: 0, marginLeft: 0 },
            hover: { scale: 1, opacity: 1, marginLeft: 8 },
          }}
          transition={springTransition}
          className={cn(
            "h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center shrink-0 shadow-md origin-left",
            circleBgColor,
            circleIconColor
          )}
        >
          <motion.div
            variants={{
              default: { opacity: 0, x: -6, y: 6 },
              hover: { opacity: 1, x: 0, y: 0 },
            }}
            transition={{ ...springTransition, delay: 0.05 }}
          >
            <ArrowUpRight className="size-5 stroke-[2.5]" />
          </motion.div>
        </motion.div>
      </Component>
    </motion.div>
  );
}
