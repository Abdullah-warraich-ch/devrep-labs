"use client";

import React, { useState } from "react";
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
    <footer className="relative w-full bg-background text-foreground overflow-hidden" style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}>
      
      {/* Premium Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-50"></div>

      {/* Ambient Decorative Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-20 sm:pt-28 pb-10 text-foreground">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-foreground/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start space-y-6">
            <BrandLogo isDark={false} />
            <p className="text-sm text-foreground/60 leading-relaxed font-normal max-w-sm">
              DevRep Labs is a premier digital studio engineering bespoke websites, web applications, and immersive digital experiences that convert.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs uppercase font-poppins-sb tracking-[0.15em] text-foreground/90">
              Navigation
            </h3>
            <ul className="space-y-4 text-[14px] text-foreground/60 font-normal">
              {navLinks.map((item) => (
                <li key={item.name}>
                  {item.isContactTrigger ? (
                    <button
                      type="button"
                      onClick={openContactModal}
                      className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 group cursor-pointer bg-transparent border-none p-0 hover:translate-x-1"
                    >
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-all duration-300 group hover:translate-x-1"
                    >
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs uppercase font-poppins-sb tracking-[0.15em] text-foreground/90">
              Get in Touch
            </h3>
            <div className="space-y-5 text-[14px]">
              <button
                type="button"
                onClick={openContactModal}
                className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-all duration-300 group cursor-pointer bg-transparent border-none p-0 text-left w-full hover:translate-x-1"
              >
                <span className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Mail className="size-4" />
                </span>
                <span className="truncate">contact@devrep.site</span>
              </button>
              
              <a
                href="https://wa.me/923391719123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-all duration-300 group cursor-pointer hover:translate-x-1"
              >
                <span className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/10 group-hover:text-[#25D366] transition-colors">
                  <FaWhatsapp className="size-4" />
                </span>
                <span>+92 339 1719123</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs uppercase font-poppins-sb tracking-[0.15em] text-foreground/90">
              Newsletter
            </h3>
            <p className="text-[13px] text-foreground/60 font-normal leading-relaxed">
              Subscribe for insights on modern web development and design.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 text-[13px] text-foreground font-medium p-4 rounded-2xl bg-foreground/5 border border-foreground/10">
                <IconCheck className="size-4 text-green-400 shrink-0" />
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative flex items-center group">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-12 pl-5 pr-14 rounded-full bg-foreground/[0.03] border border-foreground/10 text-[13px] text-foreground placeholder-foreground/40 focus:bg-foreground/[0.05] focus:border-primary/50 transition-all outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-9 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors cursor-pointer group-focus-within:bg-primary group-focus-within:text-white"
                  >
                    <IconArrowRight className="size-4" />
                  </button>
                </div>
                <p className="text-[11px] text-foreground/40 pl-2">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6 text-[13px] text-foreground/50">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DevRep Labs. All rights reserved.
          </p>

          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-8">
            <div className="flex items-center gap-6">
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
              className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 flex items-center justify-center text-foreground transition-all cursor-pointer hover:-translate-y-1 shrink-0"
            >
              <IconArrowUp className="size-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
