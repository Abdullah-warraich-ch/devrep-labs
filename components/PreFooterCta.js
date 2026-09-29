"use client";

import React from "react";
import Image from "next/image";
import { IconArrowRight, IconCheck } from "@tabler/icons-react";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";
import { ScrollRevealText } from "@/components/ui/ScrollRevealText";

export default function PreFooterCta() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="contact"
      className="dark-theme relative w-full py-16 sm:py-20 bg-[var(--background-even)] overflow-hidden scroll-mt-14"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-8 lg:gap-12">

          {/* Left Content */}
          <div className="space-y-4 max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Main Heading with Signature HandDrawnUnderline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-foreground leading-[1.2] text-center lg:text-left">
              Have a{" "}
              <span className="relative inline-block text-[var(--primary)] pb-1">
                website or app
                <HandDrawnUnderline color="var(--primary)" />
              </span>{" "}
              in mind?
            </h2>

            {/* Subtitle */}
            <ScrollRevealText
              as="p"
              text="We help businesses turn ideas into fast, high-converting digital products."
              className="text-sm sm:text-base text-foreground/70 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
              duration={1.2}
              delay={0.1}
            />

            {/* Qualities with Red custom badge and white checkmark */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 pt-2 text-xs sm:text-[13px] font-medium text-foreground/80">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <IconCheck className="w-2.5 h-2.5 text-white stroke-[3]" />
                </span>
                <span>Fast 2–4 Week Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <IconCheck className="w-2.5 h-2.5 text-white stroke-[3]" />
                </span>
                <span>Modern UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <IconCheck className="w-2.5 h-2.5 text-white stroke-[3]" />
                </span>
                <span>Speed & SEO Optimized</span>
              </div>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-background bg-foreground hover:opacity-95 shadow-lg hover:shadow-[0_10px_35px_color-mix(in_srgb,var(--foreground)_40%,transparent)] transition-all duration-200 cursor-pointer group"
            >
              <span>Start Your Project</span>
              <span className="size-6 rounded-full bg-background/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                <IconArrowRight className="size-3.5 text-background" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
