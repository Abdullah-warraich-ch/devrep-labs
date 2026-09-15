"use client";

import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

export default function WhatWeDo() {
  const { openContactModal } = useContactModal();

  const capabilities = [
    "Bespoke Web Design & Engaging User Experiences",
    "Custom Web Application & Software Development",
    "Fast Page Speed, SEO & Conversion Optimization",
    "Seamless API Integrations & Reliable Cloud Infrastructure",
  ];

  return (
    <section
      id="services"
      className="relative w-full pt-0 sm:pt-0 pb-16 sm:pb-20 lg:py-24 bg-[#FFFFFF] overflow-hidden scroll-mt-14"
    >
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Left Side: Mockup Image from public folder (First on mobile/tablet & desktop) */}
        <div className="relative w-full flex items-center justify-center order-1">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full">
            <Image
              src="/images/Mockup.webp"
              alt="DevRep Labs bespoke web application and digital product showcase mockup"
              width={1600}
              height={1200}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Heading, Subheading, List with list.png dots, and CTA Button */}
        <div className="flex flex-col justify-center text-left order-2">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-[32px] font-semibold text-[#17131F] leading-snug tracking-tight mb-3">
            <span className="relative inline-block pb-1">
              What We Do
              <HandDrawnUnderline color="#AA076B" />
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-[#6F6878] text-xs sm:text-[13px] md:text-sm leading-relaxed mb-6 font-normal max-w-xl">
            We partner with ambitious founders and growing brands to design, build, and launch exceptional digital experiences that elevate your online presence and turn visitors into loyal customers.
          </p>

          {/* Feature List with list.png as bullet dots */}
          <ul className="space-y-3 sm:space-y-3.5 mb-8">
            {capabilities.map((title, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  src="/images/list.png"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 object-contain"
                />
                <span className="text-xs sm:text-sm font-normal text-[#2E2838] leading-normal">
                  {title}
                </span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div>
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] shadow-sm hover:shadow-[0_0_16px_rgba(0,245,212,0.45)] transition-all duration-200 cursor-pointer group w-fit"
            >
              <span>Get in Touch</span>
              <IconArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
