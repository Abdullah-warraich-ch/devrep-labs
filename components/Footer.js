"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { IconArrowUp, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { useContactModal } from "@/context/ContactModalContext";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { openContactModal } = useContactModal();

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
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", isContactTrigger: true },
  ];

  return (
    <footer className="dark-theme relative w-full bg-background border-t border-foreground/10 text-foreground overflow-hidden">
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
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.75" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-foreground/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-foreground/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 pt-12 sm:pt-16 pb-8 text-foreground">
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-foreground/20">
          
          {/* Col 1: Brand & Availability */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-3.5">
            <BrandLogo isDark={true} />
            
            <p className="text-xs sm:text-[13px] text-foreground/80 leading-relaxed font-normal max-w-sm">
              DevRep Labs is a premier digital studio engineering bespoke websites, web applications, and digital experiences.
            </p>
          </div>

          {/* Links & Contact Wrapper (2 columns on mobile/tablet, separate on desktop) */}
          <div className="grid grid-cols-2 gap-6 col-span-1 sm:col-span-2 lg:col-span-5">
            
            {/* Col 2: Navigation */}
            <div className="space-y-3">
              <h3 className="text-[11px] uppercase font-semibold tracking-widest text-foreground">
                Navigation
              </h3>
              <ul className="space-y-2 text-xs sm:text-[13px] text-foreground/80 font-normal">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    {item.isContactTrigger ? (
                      <button
                        type="button"
                        onClick={openContactModal}
                        className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition-colors group cursor-pointer bg-transparent border-none p-0 text-xs sm:text-[13px]"
                      >
                        <span>{item.name}</span>
                        <IconArrowRight className="size-3 text-foreground transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition-colors group"
                      >
                        <span>{item.name}</span>
                        <IconArrowRight className="size-3 text-foreground transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Direct Contact */}
            <div className="space-y-3">
              <h3 className="text-[11px] uppercase font-semibold tracking-widest text-foreground">
                Get in Touch
              </h3>
              <div className="space-y-2.5 text-xs sm:text-[13px]">
                <button
                  type="button"
                  onClick={openContactModal}
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-foreground/80 transition-colors group cursor-pointer bg-transparent border-none p-0 text-left w-full"
                >
                  <Mail className="size-4 text-foreground shrink-0" />
                  <span className="truncate text-xs sm:text-[13px]">abdullahnasar333@gmail.com</span>
                </button>
                <a
                  href="https://wa.me/923391719123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors group cursor-pointer"
                >
                  <FaWhatsapp className="size-4 text-foreground shrink-0" />
                  <span>03391719123</span>
                </a>
              </div>
            </div>

          </div>

          {/* Col 4: Newsletter */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 space-y-3">
            <h3 className="text-[11px] uppercase font-semibold tracking-widest text-foreground">
              Newsletter
            </h3>
            <p className="text-xs text-foreground/80 font-normal leading-relaxed">
              Subscribe for insights on modern web development and design.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-foreground font-medium p-2.5 rounded-xl bg-foreground/10 border border-foreground/20">
                <IconCheck className="size-3.5 text-foreground shrink-0" />
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
                    className="w-full h-10 pl-3.5 pr-11 rounded-full bg-foreground/10 border border-foreground/20 text-xs text-foreground placeholder-foreground/50 focus:bg-foreground/15 focus:border-foreground transition-all outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 w-8 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-all cursor-pointer"
                  >
                    <IconArrowRight className="size-3.5 text-background" />
                  </button>
                </div>
                <p className="text-[10px] text-foreground/60">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-foreground/70">
          <p className="text-center sm:text-left text-[11px] sm:text-xs">
            © {new Date().getFullYear()} DevRep Labs. All rights reserved.
          </p>

          <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
            <div className="flex items-center gap-4 sm:gap-5 text-[11px] sm:text-xs">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-foreground/10 hover:bg-foreground/20 border border-foreground/20 flex items-center justify-center text-foreground hover:text-foreground transition-all cursor-pointer hover:scale-105 shrink-0"
            >
              <IconArrowUp className="size-4 text-foreground" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
