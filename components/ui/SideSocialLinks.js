"use client";

import Link from "next/link";
import { FiShare2, FiX } from "react-icons/fi";
import { useState } from "react";
// Filled / Solid Social Icons (FontAwesome 6)
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function SideSocialLinks() {
  const [open, setOpen] = useState(false);

  function toggleSocial(e) {
    if (e) e.preventDefault();
    setOpen((prev) => !prev);
  }

  return (
    <>
      {/* Desktop (Always visible on lg+) */}
      <div className="hidden lg:flex fixed top-1/2 -translate-y-1/2 right-0 py-5 px-3 rounded-l-3xl flex-col justify-center items-center gap-7 bg-[#1C0E30] z-10 shadow-xl border-l border-t border-b border-white/10">
        <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaLinkedinIn/></Link>
        <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaFacebookF/></Link>
        <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaWhatsapp/></Link>
        <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaXTwitter/></Link>
        <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaPinterestP/></Link>
      </div>

      {/* Mobile Drawer (Slides in on open, slides out on close) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-social-drawer"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-1/2 -translate-y-1/2 right-0 py-5 px-3 rounded-l-3xl flex flex-col justify-center items-center gap-7 bg-[#1C0E30] z-10 shadow-2xl border-l border-t border-b border-white/10"
          >
            <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaLinkedinIn/></Link>
            <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaFacebookF/></Link>
            <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaWhatsapp/></Link>
            <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaXTwitter/></Link>
            <Link href="#" className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full"><FaPinterestP/></Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-[75%] -translate-y-[75%] right-0 py-5 px-3 rounded-l-3xl flex flex-col justify-center items-center gap-7 bg-[#1C0E30] z-10 shadow-xl border-l border-t border-b border-white/10">
        <button
          type="button"
          aria-label="Toggle Social Links"
          className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] hover:scale-110 transition-all duration-200 w-full cursor-pointer"
          onClick={toggleSocial}
        >
          {open ? <FiX /> : <FiShare2 />}
        </button>
      </div>
    </>
  );
}