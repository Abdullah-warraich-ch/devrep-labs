"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArrowRight, IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Nav items (no hrefs / links — decorative only) ──────────────────────────
const NAV_ITEMS = ["Home", "About", "Services", "Projects", "Contact"];

export default function HeroV2() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <section
      id="hero-v2"
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      {/* ── Background Image — responsive: mobile background (<md) & desktop panoramic background (md+) ── */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/hero-2-bg-mobile.png"
            alt="Hero background mobile"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Desktop / Tablet Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/hero-v2-bg.png"
            alt="Hero background"
            fill
            priority
            quality={95}
            className="object-cover object-[78%_center] sm:object-[82%_center] lg:object-right-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <header className="relative z-30 w-full">
        <div
          className="w-full px-5 sm:px-8 lg:px-12 xl:px-16"
          style={{ paddingTop: "22px" }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5 shrink-0 cursor-pointer select-none">
              <Image
                src="/logo.png"
                alt="DevRep Labs Logo"
                width={160}
                height={50}
                priority
                className="object-contain"
                style={{ height: "36px", width: "auto" }}
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNav === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveNav(item)}
                    className="relative cursor-pointer border-none bg-transparent"
                    style={{
                      padding: "8px 18px",
                      borderRadius: "999px",
                      background: isActive
                        ? "rgba(255,255,255,0.18)"
                        : "transparent",
                      backdropFilter: isActive ? "blur(8px)" : "none",
                      color: "#ffffff",
                      fontFamily: "'poppins-m', 'Poppins', sans-serif",
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "14px",
                      lineHeight: "1",
                      transition: "all 0.2s ease",
                      border: isActive
                        ? "1px solid rgba(255,255,255,0.25)"
                        : "1px solid transparent",
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                type="button"
                className="flex items-center gap-2.5 cursor-pointer border-none"
                style={{
                  padding: "10px 22px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  color: "#ffffff",
                  fontFamily: "'poppins-sb', 'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.22)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                }}
              >
                <span>Let&apos;s Build Together</span>
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "26px",
                    height: "26px",
                    background: "rgba(255,255,255,0.2)",
                  }}
                >
                  <IconArrowRight size={14} strokeWidth={2.5} />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="flex md:hidden items-center justify-center rounded-xl cursor-pointer border-none"
              style={{
                padding: "8px",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
              }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <IconMenu2 size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO CONTENT ──────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full h-full px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-start md:justify-center flex-1 pb-14 pt-20 sm:pt-24 md:pt-4">

        {/* Hero content container without card background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            maxWidth: "560px",
          }}
        >

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            style={{
              fontFamily: "'poppins-m', 'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(24px, 4.2vw, 48px)",
              lineHeight: 1.15,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              marginBottom: "12px",
            }}
          >
            Custom Websites, <br /> AI-Powered Apps
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="text-[13.5px] sm:text-[15px]"
            style={{
              fontFamily: "'poppins-r', 'Poppins', sans-serif",
              fontWeight: 400,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.78)",
              maxWidth: "460px",
              marginBottom: "24px",
            }}
          >
            High-performance websites, intelligent web apps, and AI-driven solutions — engineered to convert visitors into customers.
          </motion.p>

          {/* Dual CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
            className="flex items-center gap-3 flex-wrap"
          >
            {/* Primary CTA */}
            <button
              type="button"
              className="group flex items-center gap-2.5 cursor-pointer border-none"
              style={{
                padding: "14px 30px",
                borderRadius: "999px",
                background: "var(--primary)",
                color: "#ffffff",
                fontFamily: "'poppins-m', 'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                letterSpacing: "-0.01em",
                transition: "box-shadow 0.25s ease, background 0.25s ease",
                boxShadow: "0 8px 28px rgba(37, 99, 235, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-deep, #1D4ED8)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(37, 99, 235, 0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(37, 99, 235, 0.4)";
              }}
            >
              <span>Start Your Project</span>
              <IconArrowUpRight size={19} strokeWidth={2.2} />
            </button>

            {/* Ghost / Outline CTA — Hidden on mobile screens */}
            <button
              type="button"
              className="hidden md:inline-flex items-center justify-center cursor-pointer"
              style={{
                padding: "14px 30px",
                borderRadius: "999px",
                background: "transparent",
                color: "rgba(255,255,255,0.9)",
                fontFamily: "'poppins-m', 'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                border: "1.5px solid rgba(255,255,255,0.25)",
                transition: "all 0.25s ease",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.6)";
                e.currentTarget.style.background = "rgba(37, 99, 235, 0.15)";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,0.9)";
              }}
            >
              View Our Work
            </button>
          </motion.div>

          {/* ── Divider ── */}
          <div
            className="hidden md:block"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent)",
              margin: "28px 0 22px",
            }}
          />

          {/* Social proof stats row — Hidden on mobile screens */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="hidden md:flex items-center gap-0"
          >
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "120+", label: "Projects Done" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center flex-1"
                style={{
                  borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  padding: "0 8px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'poppins-sb', 'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#ffffff",
                    lineHeight: 1.1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "'poppins-r', 'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: "11.5px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── MOBILE MENU ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-over panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative flex flex-col justify-between p-6 h-full"
              style={{
                width: "300px",
                maxWidth: "85vw",
                background: "rgba(15,18,30,0.92)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
                zIndex: 10,
              }}
            >
              {/* Header */}
              <div>
                <div
                  className="flex items-center justify-between pb-5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Image
                    src="/logo.png"
                    alt="DevRep Labs Logo"
                    width={140}
                    height={44}
                    className="object-contain"
                    style={{ height: "32px", width: "auto" }}
                  />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="cursor-pointer border-none rounded-lg"
                    style={{
                      padding: "6px",
                      background: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    aria-label="Close menu"
                  >
                    <IconX size={18} />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-1 py-6">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeNav === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setActiveNav(item);
                          setMobileOpen(false);
                        }}
                        className="cursor-pointer border-none text-left rounded-xl"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          background: isActive
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                          color: isActive
                            ? "#ffffff"
                            : "rgba(255,255,255,0.75)",
                          fontFamily: "'poppins-m', 'Poppins', sans-serif",
                          fontWeight: isActive ? 600 : 500,
                          fontSize: "15px",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* CTA */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2.5 cursor-pointer border-none rounded-full"
                  style={{
                    padding: "13px 20px",
                    background: "#ffffff",
                    color: "#111827",
                    fontFamily: "'poppins-sb', 'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  <span>Start Your Project</span>
                  <IconArrowRight size={15} strokeWidth={2.5} />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
