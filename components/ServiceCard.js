"use client";

import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  onClick,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onClick={onClick}
      className="group relative bg-white rounded-3xl p-7 pt-12 border border-transparent shadow-xl hover:border-[#8364E8]/40 transition-all duration-300 flex flex-col items-center text-center justify-between cursor-pointer mt-6 h-full"
    >
      {/* Top Floating Icon Container — Centered Horizontally, Half outside, half inside */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl bg-white border border-transparent shadow-[0_8px_20px_rgba(23,19,31,0.08)] flex items-center justify-center group-hover:border-[#AA076B]/40 group-hover:shadow-[0_10px_25px_rgba(170,7,107,0.18)] transition-all duration-300">
        <div className="text-[#AA076B] group-hover:scale-110 transition-transform duration-300">
          <Icon className="size-6 stroke-[1.8]" />
        </div>
      </div>

      {/* Centered Content Area with strict fixed-height blocks for ruler-straight alignment */}
      <div className="w-full flex flex-col items-center text-center">
        {/* Title Block: Fixed height with items-start so all titles start at top and finish before identical description baseline */}
        <div className="h-14 sm:h-16 flex items-start justify-center w-full mb-1">
          <h3 className="text-lg sm:text-xl font-bold text-[#17131F] leading-snug group-hover:text-[#AA076B] transition-colors duration-200 max-w-[260px]">
            {title}
          </h3>
        </div>

        {/* Description Block: Fixed height with items-start so the first word of every description aligns on the exact same ruler line */}
        <div className="h-20 sm:h-24 flex items-start justify-center w-full">
          <p className="text-xs sm:text-[13px] text-[#6F6878] leading-relaxed font-normal max-w-xs">
            {description}
          </p>
        </div>
      </div>

      {/* Centered Circular Arrow with Shadow pinned to identical bottom level */}
      <div className="pt-1 mt-auto w-full flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white border border-transparent shadow-[0_4px_14px_rgba(23,19,31,0.10)] flex items-center justify-center text-[#17131F] group-hover:bg-[#00F5D4] group-hover:text-[#090814] group-hover:border-[#00F5D4] group-hover:shadow-[0_0_18px_rgba(0,245,212,0.5)] group-hover:scale-105 transition-all duration-200 shrink-0">
          <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
