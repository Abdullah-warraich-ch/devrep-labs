"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "../_data/siteConfig";

export default function WhyUs({ onBookClick }) {
  const { whyUs } = siteConfig;

  return (
    <section className="w-full bg-[#F5F5F3] py-10 lg:py-12 px-4 sm:px-8 md:px-12 border-b border-stone-200/80 font-sans select-none overflow-hidden lg:min-h-[70vh] lg:max-h-[70vh] lg:h-[70vh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full space-y-6 sm:space-y-8">
        
        {/* TITLE HEADER - EDITORIAL TYPOGRAPHY (CENTERED ON SMALL SCREENS) */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-stone-950 uppercase tracking-tighter leading-[0.9] flex flex-col items-center sm:items-start select-none">
            <span>{whyUs.titleLine1}</span>
            <span>{whyUs.titleLine2}</span>
            <span className="flex items-center gap-3 sm:gap-4 mt-0.5">
              <span className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-brand text-white flex items-center justify-center shadow-md shrink-0 hover:scale-105 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[3]" />
              </span>
              <span 
                className="text-transparent"
                style={{ WebkitTextStroke: "2px #0c0a09" }}
              >
                {whyUs.titleLine3}
              </span>
            </span>
          </h2>
        </div>

        {/* METRICS & FEATURES BENTO GRID (SMALL SCREEN FRIENDLY) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-5 items-stretch">
          
          {/* LEFT SECTION (BENTO ROW ON MOBILE, 2 COLS ON DESKTOP) */}
          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-5">
            
            {/* TOP WIDE CARD */}
            <div 
              className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-7 flex flex-col justify-center items-center text-center shadow-sm"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-stone-950 tracking-tighter mb-1">
                {whyUs.experienceYears}
              </div>
              <p className="text-stone-600 text-xs sm:text-sm font-medium tracking-tight">
                {whyUs.experienceText}
              </p>
            </div>

            {/* BOTTOM 2 CARDS (SIDE BY SIDE 2-COLUMN BENTO ON SMALL SCREENS) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              
              {/* CARD 1 */}
              <div 
                className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center text-center shadow-sm"
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-stone-950 tracking-tighter mb-1">
                  {whyUs.totalStays}
                </div>
                <p className="text-stone-600 text-[11px] sm:text-sm font-medium tracking-tight leading-tight">
                  {whyUs.totalStaysText}
                </p>
              </div>

              {/* CARD 2 */}
              <div 
                className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center text-center shadow-sm"
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-stone-950 tracking-tighter mb-1">
                  {whyUs.uptime}
                </div>
                <p className="text-stone-600 text-[11px] sm:text-sm font-medium tracking-tight leading-tight">
                  {whyUs.uptimeText}
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT TALL ACCENT CARD (FULL WIDTH BENTO BLOCK ON SMALL SCREENS) */}
          <div 
            className="lg:col-span-1 bg-brand border border-brand-hover rounded-2xl p-5 sm:p-8 flex flex-col justify-center items-center text-center shadow-sm min-h-[130px] sm:min-h-[180px] lg:min-h-full"
          >
            <div className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tighter mb-1 sm:mb-2">
              {whyUs.checkIn}
            </div>
            <p className="text-white/90 text-xs sm:text-base font-bold tracking-tight max-w-[200px]">
              {whyUs.checkInText}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
