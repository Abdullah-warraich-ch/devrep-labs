"use client";

import { motion } from "framer-motion";

const arrowVariantsLeft = {
  default: {
    opacity: 0,
    rotate: -90,
    scale: 0,
    width: 0,
    marginRight: 0,
  },
  hover: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    width: 20,
    marginRight: 12,
  },
};

const arrowVariantsRight = {
  default: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    width: 20,
    marginLeft: 12,
  },
  hover: {
    opacity: 0,
    rotate: -90,
    scale: 0,
    width: 0,
    marginLeft: 0,
  },
};

const lineLeftVariants = {
  default: {
    left: "-3px",
    width: "1%",
    transition: { duration: 0.6, delay: 0.2, type: "spring", bounce: 0.2 },
  },
  hover: {
    left: "0px",
    width: "100%",
    transition: { duration: 0.6, delay: 0, type: "spring", bounce: 0.2 },
  },
};

const lineRightVariants = {
  default: {
    right: "0px",
    width: "100%",
    transition: { duration: 0.6, delay: 0, type: "spring", bounce: 0.2 },
  },
  hover: {
    right: "-3px",
    width: "1%",
    transition: { duration: 0.6, delay: 0.2, type: "spring", bounce: 0.2 },
  },
};

export default function TextArrowCTA({
  text = "View More Work",
  href,
  onClick,
  className = "",
  textColor = "text-zinc-900",
  lineColor = "bg-zinc-900",
  fontSize = "text-base sm:text-lg",
}) {
  const Component = href ? "a" : "button";

  return (
    <motion.div
      initial="default"
      whileHover="hover"
      animate="default"
      className={`inline-block relative ${className}`}
    >
      <Component
        href={href}
        onClick={onClick}
        className={`relative inline-flex flex-col items-center justify-center cursor-pointer select-none group py-1 ${textColor}`}
      >
        {/* Top Text & Arrows Container */}
        <div className="flex items-center justify-center relative">
          {/* Arrow Left */}
          <motion.div
            variants={arrowVariantsLeft}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="overflow-hidden flex items-center justify-center shrink-0 origin-center"
          >
            <svg
              viewBox="0 0 20 15"
              className="w-[20px] h-[15px] shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 6.5 L 18 6.5 M 11.7 0 L 18 6.5 L 11.7 13"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(1 1)"
              />
            </svg>
          </motion.div>

          {/* Label Text */}
          <span className={`font-medium tracking-tight whitespace-nowrap ${fontSize}`}>
            {text}
          </span>

          {/* Arrow Right */}
          <motion.div
            variants={arrowVariantsRight}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="overflow-hidden flex items-center justify-center shrink-0 origin-center"
          >
            <svg
              viewBox="0 0 20 15"
              className="w-[20px] h-[15px] shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 0 6.5 L 18 6.5 M 11.7 0 L 18 6.5 L 11.7 13"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(1 1)"
              />
            </svg>
          </motion.div>
        </div>

        {/* Animated Underline */}
        <div className="relative w-full h-[1px] mt-1.5 overflow-hidden">
          <motion.div
            variants={lineLeftVariants}
            className={`absolute bottom-0 h-[1px] ${lineColor}`}
          />
          <motion.div
            variants={lineRightVariants}
            className={`absolute bottom-0 h-[1px] ${lineColor}`}
          />
        </div>
      </Component>
    </motion.div>
  );
}
