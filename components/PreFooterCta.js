"use client";

import React from "react";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

export default function PreFooterCta() {
  const { openContactModal } = useContactModal();

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 bg-white overflow-hidden scroll-mt-14"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-8 lg:gap-12">

          {/* Left Content */}
          <div className="space-y-4 max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Main Heading with Signature HandDrawnUnderline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#17131F] leading-[1.2] text-center lg:text-left">
              Have a{" "}
              <span className="relative inline-block text-[#AA076B] pb-1">
                website or app
                <HandDrawnUnderline color="#AA076B" />
              </span>{" "}
              in mind?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#6F6878] font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              We help businesses turn ideas into fast, high-converting digital products.
            </p>

            {/* Qualities with list.png icon */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 pt-2 text-xs sm:text-[13px] font-medium text-[#6F6878]">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/list.png"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="w-4 h-4 shrink-0 object-contain"
                />
                <span>Fast 2–4 Week Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/list.png"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="w-4 h-4 shrink-0 object-contain"
                />
                <span>Modern UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/list.png"
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className="w-4 h-4 shrink-0 object-contain"
                />
                <span>Speed & SEO Optimized</span>
              </div>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-primary-gradient hover:opacity-95 shadow-lg hover:shadow-[0_10px_35px_rgba(131,100,232,0.4)] transition-all duration-200 cursor-pointer group"
            >
              <span>Start Your Project</span>
              <span className="size-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                <IconArrowRight className="size-3.5 text-white" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
