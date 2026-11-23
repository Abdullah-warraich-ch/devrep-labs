"use client";

import styles from "./HeroV2.module.css";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function HeroV2() {
  return (
    <section
      id="hero-v2"
      className="relative w-full min-h-[60vh] lg:min-h-[70vh] bg-white overflow-hidden flex flex-col"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
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
        
        <div
          className="flex flex-col items-center max-w-5xl w-full"
        >


          {/* Heading */}
          <h1
            className="text-foreground font-poppins-m tracking-tight whitespace-nowrap leading-[1.05] mb-6"
            style={{ fontSize: "min(8vw, 100px)" }}
          >
            <span className="inline-flex items-center justify-center align-middle mx-[0.09em] overflow-hidden"> <span className={styles.word}>We build </span></span>
            <span className={`${styles.icon} inline-flex items-center justify-center align-middle mx-[0.09em] bg-primary text-white rounded-full w-[0.85em] h-[0.85em] shadow-lg`}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[0.5em]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8.5" />
                <ellipse cx="11" cy="11" rx="3.8" ry="8.5" />
                <path d="M3 8h16M3 14h11" />
                <path d="m13 12 3.5 10 1.6-4 4-1.6z" fill="currentColor" stroke="var(--primary)" strokeWidth="1" />
              </svg>
            </span>
            <span className="inline-flex items-center justify-center align-middle mx-[0.09em] overflow-hidden"> <span className={styles.word}>websites </span></span> <br />
            <span className="text-foreground/40 inline-flex items-center justify-center align-middle mx-[0.09em] overflow-hidden"> <span className={styles.word}>for modern </span></span>
            <span className="relative inline-block text-foreground/40">
              <span className="inline-flex items-center justify-center align-middle mx-[0.09em] overflow-hidden"> <span className={styles.word}>brands.</span></span>
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
          </h1>

          {/* Sub-copy */}
          <p
            className={`${styles.detail} text-foreground/60 font-poppins-r leading-relaxed max-w-2xl mx-auto mb-12`}
            style={{ "--delay": "440ms", fontSize: "clamp(15px, 1.4vw, 18px)" }}
          >
            We design and build elite web platforms and intelligent AI solutions that elevate your brand and convert visitors into loyal customers.
          </p>

          {/* CTAs */}
          <div
            className={`${styles.detail} flex items-center gap-3 sm:gap-6 whitespace-nowrap justify-center`}
            style={{ "--delay": "600ms" }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center px-3.5 py-3 sm:px-8 sm:py-4 bg-foreground text-background text-[13px] sm:text-[15px] font-poppins-m rounded-full transition-colors duration-200 hover:bg-foreground/90 border-none cursor-pointer">
              Start a Project
            </Link>

            <Link
              href="/projects"
              className="group flex items-center gap-2 bg-transparent text-foreground/80 text-[13px] sm:text-[15px] font-poppins-m transition-colors duration-300 hover:text-foreground border-none cursor-pointer sm:px-4"
            >
              <span>Explore our work</span>
              <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
