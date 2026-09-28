"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function BrandLogo({ className = "", imageSize = 32, imageClasses = "w-7 h-7 sm:w-8 sm:h-8", textClasses = "text-[18px] sm:text-[20px]", isDark = false }) {

  return (
    <Link href="/" className={`inline-flex items-center gap-3 shrink-0 cursor-pointer select-none group ${className}`}>
      <Image
        src={isDark ? "/white-logo-symble.png" : "/dark-logo-symbol.png"}
        alt="DevRep Labs"
        width={imageSize}
        height={imageSize}
        priority
        className={`${imageClasses} object-contain transition-all duration-300 group-hover:scale-105`}
      />
      <span className={`text-foreground font-poppins-b tracking-tight leading-none group-hover:text-foreground/90 transition-colors flex items-center ${textClasses}`}>
        devrep&nbsp;
        <span className="relative inline-flex items-center justify-center font-poppins-l text-foreground/80 px-1 py-0.5">
          labs
          {/* Orbiting particle (hardware accelerated GPU transform) */}
          <motion.span
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{ willChange: "transform" }}
          >
            <span
              className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"
              style={{ top: "-3px", left: "50%", transform: "translateX(-50%)" }}
            />
          </motion.span>
        </span>
      </span>
    </Link>
  );
}
