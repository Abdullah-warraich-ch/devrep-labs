"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Products", href: "#products" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Brand Logo - White Rounded Square */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-black text-black shadow-md">
            <span className="text-xl tracking-tighter">A</span>
          </div>
        </motion.a>

        {/* Center Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center gap-10 md:flex"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>

        {/* Right CTA Button using InteractiveHoverButton */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden items-center md:flex"
        >
          <a href="#schedule">
            <InteractiveHoverButton className="text-xs px-4 py-2">
              Schedule a Meeting
            </InteractiveHoverButton>
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-zinc-950/95 px-6 py-6 backdrop-blur-lg md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="#schedule" onClick={() => setMobileMenuOpen(false)}>
                  <InteractiveHoverButton className="w-full text-sm py-2.5">
                    Schedule a Meeting
                  </InteractiveHoverButton>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
