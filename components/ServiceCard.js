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
      className="dark-theme group relative bg-[#080808] rounded-3xl p-7 pt-12 border border-white/10 shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center justify-between cursor-pointer mt-6 h-full text-white"
    >
      {/* Top Floating Icon Container */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl bg-[#111111] border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_10px_25px_var(--primary)] transition-all duration-300">
        <div className="text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon className="size-6 stroke-[1.8]" />
        </div>
      </div>

      {/* Centered Content Area */}
      <div className="w-full flex flex-col items-center text-center">
        <div className="h-14 sm:h-16 flex items-start justify-center w-full mb-1">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors duration-200 max-w-[260px] font-poppins-sb">
            {title}
          </h3>
        </div>

        <div className="h-20 sm:h-24 flex items-start justify-center w-full">
          <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-normal max-w-xs">
            {description}
          </p>
        </div>
      </div>

      {/* Centered Circular Arrow */}
      <div className="pt-1 mt-auto w-full flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 shadow-[0_4px_14px_rgba(0,0,0,0.4)] flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-[0_0_18px_var(--primary)] group-hover:scale-105 transition-all duration-200 shrink-0">
          <IconArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
