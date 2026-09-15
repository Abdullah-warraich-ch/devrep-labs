"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconHome,
  IconCompass,
  IconArrowRight,
  IconCode,
  IconBriefcase,
  IconMessageCircle,
} from "@tabler/icons-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HandDrawnUnderline from "@/components/ui/HandDrawnUnderline";
import { useContactModal } from "@/context/ContactModalContext";

export default function NotFoundClient() {
  const { openContactModal } = useContactModal();

  const quickLinks = [
    {
      title: "Services",
      description: "Custom web development & AI solutions",
      href: "/#services",
      icon: IconCode,
    },
    {
      title: "Portfolio",
      description: "Explore our live projects & client work",
      href: "/projects",
      icon: IconBriefcase,
    },
    {
      title: "Get in Touch",
      description: "Discuss your project with our team",
      isAction: true,
      onClick: openContactModal,
      icon: IconMessageCircle,
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#FAF9FF] relative overflow-x-hidden flex flex-col justify-between">
      <Header />

      {/* Main 404 Hero Section */}
      <section className="relative w-full flex-1 flex items-center justify-center pt-32 sm:pt-36 pb-20 px-6 sm:px-10 lg:px-14">
        {/* Ambient Decorative Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[500px] h-[500px] bg-[#AA076B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto w-full text-center relative z-10">
          {/* Large Stylized 404 Text (Decorative Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative my-2 select-none"
          >
            <div
              aria-hidden="true"
              className="text-8xl sm:text-9xl md:text-[11rem] font-extrabold tracking-tighter leading-none bg-gradient-to-r from-[#AA076B] via-[#850567] to-[#61045F] bg-clip-text text-transparent"
            >
              404
            </div>
          </motion.div>

          {/* Main H1 Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#17131F] mt-1 mb-3"
          >
            Lost in the{" "}
            <span className="relative inline-block text-[#AA076B] pb-1">
              Digital Space?
              <HandDrawnUnderline color="#AA076B" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="text-sm sm:text-base text-[#6F6878] max-w-md mx-auto mb-8 leading-relaxed"
          >
            The page you are looking for might have been removed, renamed, or never existed. Don’t worry, we’ll help you find your way back.
          </motion.p>

          {/* Primary & Secondary Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#AA076B] to-[#61045F] hover:opacity-95 shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
            >
              <IconHome className="size-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#17131F] bg-white border border-[#EAE5F0] hover:bg-[#FAF7FC] hover:border-[#AA076B]/40 shadow-sm transition-all duration-200 group cursor-pointer"
            >
              <IconCompass className="size-4 text-[#AA076B] transition-transform group-hover:rotate-45 duration-300" />
              <span>Explore Projects</span>
            </Link>
          </motion.div>

          {/* Quick Helpful Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="w-full max-w-2xl mx-auto pt-8 border-t border-[#EAE5F0]"
          >
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#6F6878] mb-4">
              Or check out these popular sections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
              {quickLinks.map((item, idx) => {
                const IconComponent = item.icon;
                if (item.isAction) {
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={item.onClick}
                      className="p-4 rounded-xl bg-white border border-[#EAE5F0] hover:border-[#AA076B]/50 hover:bg-[#FAF8FF] shadow-xs hover:shadow-sm transition-all duration-200 text-left group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="size-8 rounded-lg bg-[#FAF7FC] text-[#AA076B] flex items-center justify-center">
                          <IconComponent className="size-4" />
                        </div>
                        <IconArrowRight className="size-3.5 text-[#6F6878] group-hover:text-[#AA076B] group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <div className="font-semibold text-xs sm:text-sm text-[#17131F] mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#6F6878] leading-snug line-clamp-1">
                        {item.description}
                      </div>
                    </button>
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-4 rounded-xl bg-white border border-[#EAE5F0] hover:border-[#AA076B]/50 hover:bg-[#FAF8FF] shadow-xs hover:shadow-sm transition-all duration-200 text-left group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="size-8 rounded-lg bg-[#FAF7FC] text-[#AA076B] flex items-center justify-center">
                        <IconComponent className="size-4" />
                      </div>
                      <IconArrowRight className="size-3.5 text-[#6F6878] group-hover:text-[#AA076B] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <div className="font-semibold text-xs sm:text-sm text-[#17131F] mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#6F6878] leading-snug line-clamp-1">
                      {item.description}
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
