"use client";

import React from "react";
import Image from "next/image";
import EyeFollowButton from "@/components/ui/EyeFollowButton";
import { ArrowUpRight, Globe, Share2, Compass } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-zinc-800 shadow-2xl z-10 my-6 space-y-8">
      {/* Top Section: Brand, Links & CTA */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-6 border-b border-zinc-800/80">
        {/* Left Column: Brand & Bio */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-white.png"
              alt="DevRep Labs"
              width={150}
              height={38}
              className="h-7 w-auto object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-normal">
            Building intelligent software systems, modern web experiences, and high-performance digital products.
          </p>
        </div>

        {/* Middle Column: Links */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">Navigation</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
              <li><a href="#work" className="hover:text-[#d7ff00] transition-colors">Work</a></li>
              <li><a href="#tech-stack" className="hover:text-[#d7ff00] transition-colors">Tech Stack</a></li>
              <li><a href="#pricing" className="hover:text-[#d7ff00] transition-colors">Pricing</a></li>
              <li><a href="#blog" className="hover:text-[#d7ff00] transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-[11px] uppercase tracking-widest text-zinc-500 font-semibold">Connect</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#d7ff00] transition-colors inline-flex items-center gap-1.5"><Globe className="size-3" /> Twitter</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#d7ff00] transition-colors inline-flex items-center gap-1.5"><Compass className="size-3" /> GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#d7ff00] transition-colors inline-flex items-center gap-1.5"><Share2 className="size-3" /> LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Right Column: CTA */}
        <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-4">
          <EyeFollowButton
            text="Get in touch"
            href="#contact"
            buttonColor="#ffffff"
            textColor="#000000"
            eyeColor="#000000"
            pupilColor="#ffffff"
          />
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-normal">
        <div>
          © {new Date().getFullYear()} DevRep Labs, Inc. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          <button
            onClick={scrollToTop}
            className="hover:text-[#d7ff00] transition-colors inline-flex items-center gap-1 cursor-pointer font-medium text-zinc-400"
          >
            Back to top <ArrowUpRight className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
