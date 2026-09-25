"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Nav items (no hrefs / links — decorative only) ──────────────────────────
const NAV_ITEMS = ["Home", "About", "Services", "Projects", "Contact"];

export default function HeroV2() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <section
      id="hero-v2"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ fontFamily: "'poppins-r', 'Poppins', sans-serif" }}
    >
      {/* ── Background Image — object-contain so the full photo is never clipped ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-v2-bg.png"
          alt="Hero background"
          fill
          priority
          quality={95}
          className="object-cover object-bottom"
          sizes="100vw"
        />
        {/* Left-side dark overlay so text pops over the sky */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(12,18,34,0.52) 0%, rgba(12,18,34,0.22) 50%, transparent 75%)",
          }}
        />
      </div>

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <header className="relative z-30 w-full">
        <div
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14"
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
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col justify-between h-screen pb-14 pt-6">
        {/* Spacer so content sits vertically centred-ish below nav */}
        <div />

        {/* Main Copy — bottom-left */}
        <div className="flex flex-col items-start max-w-[500px]">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6"
            style={{
              padding: "7px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              fontFamily: "'poppins-m', 'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#ffffff",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Web Development &amp; AI Solutions
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            style={{
              fontFamily: "'poppins-sb', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(46px, 7vw, 80px)",
              lineHeight: 1.08,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            Ideas to Digital
            <br />
            Reality
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            style={{
              fontFamily: "'poppins-r', 'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.82)",
              maxWidth: "340px",
              marginBottom: "32px",
            }}
          >
            We build modern websites, web apps and AI-powered solutions that
            help brands grow, engage and stand out in the digital world.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease: "easeOut" }}
            className="flex items-center gap-3 cursor-pointer border-none"
            style={{
              padding: "14px 26px",
              borderRadius: "999px",
              background: "#ffffff",
              color: "#111827",
              fontFamily: "'poppins-sb', 'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              transition: "transform 0.18s ease, box-shadow 0.18s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.18)";
            }}
          >
            Start Your Project
            <span
              className="flex items-center justify-center rounded-full"
              style={{ width: "30px", height: "30px", background: "#111827" }}
            >
              <IconArrowRight size={15} color="#fff" strokeWidth={2.5} />
            </span>
          </motion.button>

          {/* Social proof – Happy Clients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.48 }}
            className="flex items-center gap-3 mt-10"
          >
            {/* Stacked letter avatars */}
            <div className="flex items-center">
              {["A", "S", "R"].map((letter, i) => (
                <div
                  key={i}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.8)",
                    marginLeft: i === 0 ? 0 : "-10px",
                    background: `hsl(${200 + i * 40}, 55%, 50%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 3 - i,
                    position: "relative",
                    fontSize: "13px",
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "'poppins-sb', 'Poppins', sans-serif",
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'poppins-sb', 'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  marginBottom: "2px",
                }}
              >
                50+
              </p>
              <p
                style={{
                  fontFamily: "'poppins-r', 'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1,
                }}
              >
                Happy Clients
              </p>
            </div>
          </motion.div>
        </div>
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
