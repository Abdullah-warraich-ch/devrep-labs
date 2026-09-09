"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconArrowUp, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { Mail } from "lucide-react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative w-full bg-primary-gradient text-white overflow-hidden">
      {/* Ambient Decorative Flowing SVG Lines matching Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1200px] h-[450px] pointer-events-none opacity-25"
          viewBox="0 0 1200 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -100 220 C 240 60, 540 360, 890 170 C 1040 90, 1180 190, 1350 140"
            stroke="url(#footer-ambient-gradient)"
            strokeWidth="1.6"
            strokeDasharray="6 8"
          />
          <path
            d="M -50 280 C 300 120, 640 400, 970 220 C 1110 150, 1240 220, 1400 170"
            stroke="url(#footer-ambient-gradient)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient id="footer-ambient-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#00F5D4" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFE566" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 pt-14 sm:pt-16 pb-8">
        
        {/* 4-Column Balanced Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/20">
          
          {/* Col 1: Brand & Availability (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white select-none flex items-center font-['poppins-sb'] group-hover:opacity-95 transition-opacity">
                DevRep
                <span className="text-[#FFE566] ml-1 font-semibold">Labs</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] ml-1 inline-block"></span>
              </span>
            </Link>
            
            <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal max-w-xs">
              DevRep Labs is a premier digital studio engineering bespoke websites, web applications, and digital experiences.
            </p>


          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[11px] uppercase font-semibold tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/85 font-normal">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-white/85 hover:text-[#FFE566] transition-colors group"
                  >
                    <span>{item.name}</span>
                    <IconArrowRight className="size-3 text-[#FFE566] transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] uppercase font-semibold tracking-widest text-white">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs sm:text-[13px]">
              <a
                href="mailto:abdullahnasar333@gmail.com"
                className="inline-flex items-center gap-2 text-white hover:text-[#FFE566] transition-colors group"
              >
                <Mail className="size-4 text-white group-hover:scale-105 transition-transform shrink-0" />
                <span className="truncate">abdullahnasar333@gmail.com</span>
              </a>
              <p className="text-white/70 text-[11px]">
                ⚡ Quick reply within 24 hours
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] uppercase font-semibold tracking-widest text-white">
              Newsletter
            </h4>
            <p className="text-xs text-white/80 font-normal leading-relaxed">
              Subscribe for insights on modern web development and design.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-white font-medium p-2.5 rounded-lg bg-white/15 border border-white/20">
                <IconCheck className="size-3.5 text-[#00F5D4] shrink-0" />
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-9 pl-3 pr-10 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:bg-white/15 focus:border-[#00F5D4] transition-all outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-0 top-0 bottom-0 w-9 rounded-full bg-[#00F5D4] text-[#090814] flex items-center justify-center hover:bg-[#00E5FF] transition-all cursor-pointer"
                  >
                    <IconArrowRight className="size-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-white/60">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} DevRep Labs. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/90 hover:text-white transition-all cursor-pointer hover:scale-105"
            >
              <IconArrowUp className="size-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
