"use client";

import React from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";
const Cursor = ({ color, name, className }) => (
  <div className={`absolute pointer-events-none flex flex-col items-start z-20 ${className}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md" style={{ transform: 'rotate(-15deg)' }}>
      <path d="M5.5 3L18.5 12L12 13.5L9.5 20.5L5.5 3Z" fill={color} stroke="white" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
    <div className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white shadow-sm mt-[-2px] ml-4" style={{ backgroundColor: color }}>
      {name}
    </div>
  </div>
);

export default function PreFooterCta() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="contact"
      className="dark-theme w-full py-8 sm:py-12 bg-[var(--background-even)] relative overflow-hidden scroll-mt-14"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >

      <div className="max-w-6xl mx-auto rounded-[20px] px-4 sm:px-8">
        <div className="bg-background rounded-[40px] px-6 py-8 sm:px-10 sm:py-10 lg:py-12 relative overflow-hidden flex flex-col items-center text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/5">
          
          {/* Top-Center Highlighter Glow */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-white/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl flex flex-col items-center">
            
            <div className="relative mb-8 sm:mb-10">
              {/* Floating Cursors */}
              <Cursor color="#F97316" name="Leonardo" className="top-[-35px] sm:top-[-45px] left-[30%] sm:left-[35%]" />
              <Cursor color="#3B82F6" name="Albert" className="bottom-[-40px] sm:bottom-[-45px] right-[10%] sm:right-[15%]" />
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins-m tracking-tight text-foreground leading-[1.15]">
                Have a website or app in<br/> mind? Let&apos;s build 
                <span className="inline-flex items-center justify-center align-middle mx-2 bg-primary text-white rounded-full w-[0.85em] h-[0.85em] shadow-lg">
                  <span className="material-symbols-outlined" style={{ fontSize: "0.5em" }}>rocket_launch</span>
                </span>
                it!
              </h2>
            </div>

            <ScrollRevealText
              as="p"
              text="We help businesses turn ideas into fast, high-converting digital products. Enjoy the most powerful architecture and unmatched performance."
              className="text-base sm:text-lg text-foreground/70 font-normal leading-relaxed max-w-2xl mx-auto mb-6"
              duration={1.2}
              delay={0.1}
            />

            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-poppins-sb text-background bg-foreground hover:bg-foreground/90 transition-colors duration-300 cursor-pointer"
            >
              <span>Get Started Now</span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
