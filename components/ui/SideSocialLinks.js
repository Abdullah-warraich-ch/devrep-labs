"use client";

import { FiShare2, FiX } from "react-icons/fi";
import { useState } from "react";
// Filled / Solid Social Icons (FontAwesome 6)
import {
  FaLinkedinIn,
  FaInstagram,
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

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/devrep-labs/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/devrep_labs",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923391719123",
      label: "WhatsApp",
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/devrep_labs",
      label: "X / Twitter",
    },
    {
      icon: FaPinterestP,
      href: "https://www.pinterest.com/devreplabs/",
      label: "Pinterest",
    },
  ];

  return (
    <>
      {/* Desktop (Always visible on lg+, vertically centered) */}
      <div className="hidden lg:flex fixed top-1/2 -translate-y-1/2 right-0 py-5 px-3 rounded-l-3xl flex-col justify-center items-center gap-7 bg-[#1C0E30] z-30 shadow-xl border-l border-t border-b border-white/10 transform-gpu">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center group text-2xl text-white hover:text-[#00F5D4] transition-colors duration-200 w-full"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Mobile Tap-outside Backdrop to dismiss */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="lg:hidden fixed"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer + Toggle (Anchored solidly to bottom-24 right-0 to prevent scroll shifting) */}
      <div className="lg:hidden fixed bottom-24 right-0 z-40 flex flex-col items-end pointer-events-none">
        {/* Social Icons Drawer (Opens directly above toggle button) */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-social-drawer"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="pointer-events-auto mb-2 py-4 px-3 rounded-l-2xl flex flex-col justify-center items-center gap-5 bg-[#1C0E30] shadow-2xl border-l border-t border-b border-white/10"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center text-xl text-white hover:text-[#00F5D4] active:scale-95 transition-all duration-150 w-full"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          aria-label={open ? "Close Social Links" : "Open Social Links"}
          className="pointer-events-auto py-3.5 px-3 rounded-l-2xl flex items-center justify-center text-xl text-white bg-[#1C0E30] hover:text-[#00F5D4] active:scale-95 shadow-xl border-l border-t border-b border-white/10 transition-all duration-200 cursor-pointer"
          onClick={toggleSocial}
        >
          {open ? <FiX className="text-xl" /> : <FiShare2 className="text-xl" />}
        </button>
      </div>
    </>
  );
}