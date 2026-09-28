"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useContactModal } from "@/context/ContactModalContext";

export default function HeroV2() {
  const { openContactModal } = useContactModal();
  return (
    <section
      id="hero-v2"
      className="dark-theme relative w-full h-screen overflow-hidden flex flex-col"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      {/* ── Premium CSS Background ── */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        {/* Subtle glow mesh */}
        <div className="absolute top-[-20%] left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[130px] opacity-40 pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] opacity-30 pointer-events-none mix-blend-screen"></div>
        
        {/* Geometric strict grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>
      </div>

      {/* ── Tilted blue panel — sits behind content, above bg image ── */}
      {/* <div
        className="absolute left-[-8%] z-10 pointer-events-none transform rotate-[20deg]"
        style={{
          top: "-30%",
          height: "160%",
          width: "50%",
          backgroundColor: "var(--primary, #2563EB)",
          opacity: 1,
        }}
      /> */}

      {/* ── Clean & Minimalist Framing Corner (Top-Right Sky) ── */}
      <div className="hidden lg:block absolute top-28 right-16 sm:right-24 z-10 pointer-events-none select-none opacity-40 hover:opacity-60 transition-opacity duration-300">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle top-right L bracket */}
          <path d="M16 2H38V24" stroke="var(--foreground)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Minimal coordinate dot */}
          <circle cx="38" cy="2" r="1.5" fill="#93C5FD" />
        </svg>
      </div>

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── HERO CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full h-full px-5 sm:px-8 lg:px-12 flex flex-col justify-center items-center flex-1 pt-12 pb-24 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-5xl w-full"
        >


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-foreground font-poppins-m tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: "clamp(42px, 8vw, 100px)" }}
          >
            We build websites <br />
            <span className="text-foreground/40">for modern </span>
            <span className="relative inline-block text-foreground/40">
              brands.
              <span className="absolute left-0 -bottom-1 h-1.5 bg-foreground/10 rounded-full w-full overflow-hidden">
                <motion.span
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
                />
              </span>
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-foreground/60 font-poppins-r leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
          >
            We design and build elite web platforms and intelligent AI solutions that elevate your brand and convert visitors into loyal customers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center"
          >
            <button
              type="button"
              onClick={openContactModal}
              className="flex items-center justify-center px-8 py-4 bg-foreground text-background text-[15px] font-poppins-m rounded-full transition-colors duration-200 hover:bg-foreground/90 border-none cursor-pointer"
            >
              Start a Project
            </button>

            <Link
              href="/projects"
              className="group flex items-center gap-2 bg-transparent text-foreground/80 text-[15px] font-poppins-m transition-colors duration-300 hover:text-foreground border-none cursor-pointer px-4"
            >
              <span>Explore our work</span>
              <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
