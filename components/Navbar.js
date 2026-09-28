"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/ui/BrandLogo";
import { useContactModal } from "@/context/ContactModalContext";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", isContactTrigger: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openContactModal } = useContactModal();

  const handleNavClick = (item) => {
    if (item.isContactTrigger) {
      openContactModal();
      setMobileOpen(false);
      return;
    }
    setMobileOpen(false);
  };

  const isItemActive = (item) => {
    if (item.href === "/" && pathname === "/") return true;
    if (item.href && item.href !== "/" && pathname && pathname.startsWith(item.href)) return true;
    return false;
  };

  return (
    <>
      <header className="dark-theme relative z-30 w-full bg-transparent">
        <div className="w-full px-6 sm:px-10 lg:px-16 pt-6">
          <div className="flex items-center justify-between border-b border-foreground/10 pb-6">
            {/* Logo */}
            <BrandLogo isDark={true} />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item);

                if (item.isContactTrigger) {
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className={`relative cursor-pointer border-none bg-transparent text-[14px] transition-colors duration-300 group ${
                        active ? "text-foreground font-poppins-m" : "text-foreground/65"
                      }`}
                      style={{
                        fontFamily: "'poppins-r', 'Poppins', sans-serif",
                        lineHeight: "1",
                      }}
                    >
                      <span className="group-hover:text-foreground transition-colors duration-300">
                        {item.name}
                      </span>
                      <span
                        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-foreground transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-[60%]"
                        }`}
                      />
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative cursor-pointer border-none bg-transparent text-[14px] transition-colors duration-300 group ${
                      active ? "text-foreground font-poppins-m" : "text-foreground/65"
                    }`}
                    style={{
                      fontFamily: "'poppins-r', 'Poppins', sans-serif",
                      lineHeight: "1",
                    }}
                  >
                    <span className="group-hover:text-foreground transition-colors duration-300">
                      {item.name}
                    </span>
                    <span
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-foreground transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-[60%]"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                type="button"
                onClick={() => openContactModal({ mode: "demo" })}
                className="relative overflow-hidden group cursor-pointer border-none rounded-none bg-foreground text-background text-[14px] px-8 py-3 shadow-[0_4px_14px_color-mix(in_srgb,var(--foreground)_10%,transparent)] hover:shadow-[0_6px_20px_color-mix(in_srgb,var(--foreground)_20%,transparent)] transition-all duration-300"
                style={{ fontFamily: "'poppins-m', 'Poppins', sans-serif" }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Let&apos;s Build Together
                </span>
                <span className="absolute inset-0 h-full w-full bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="flex md:hidden items-center justify-center cursor-pointer border-none transition-opacity duration-200 hover:opacity-70 text-foreground bg-transparent"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <IconMenu2 size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="dark-theme fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-over panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative flex flex-col justify-between p-6 h-full bg-[#080808] border-l border-white/10 z-10"
              style={{
                width: "300px",
                maxWidth: "85vw",
              }}
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <BrandLogo isDark={true} imageSize={32} imageClasses="w-7 h-7" textClasses="text-[17px]" />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 rounded-lg text-white/70 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <IconX size={18} />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col gap-1 py-6">
                  {NAV_ITEMS.map((item) => {
                    const active = isItemActive(item);

                    if (item.isContactTrigger) {
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => handleNavClick(item)}
                          className={`cursor-pointer border-none text-left rounded-xl transition-all duration-150 ease-in-out font-poppins-m text-[15px] p-3 w-full ${
                            active
                              ? "bg-white/10 text-white font-semibold"
                              : "bg-transparent text-white/75 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`cursor-pointer border-none text-left rounded-xl transition-all duration-150 ease-in-out font-poppins-m text-[15px] p-3 w-full block ${
                          active
                            ? "bg-white/10 text-white font-semibold"
                            : "bg-transparent text-white/75 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* CTA */}
              <div className="pt-5 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openContactModal({ mode: "demo" });
                  }}
                  className="w-full flex items-center justify-center gap-2.5 cursor-pointer border-none rounded-full bg-white text-black py-3 px-5 font-poppins-sb text-[14px] hover:bg-white/90 transition-colors"
                >
                  <span>Start Your Project</span>
                  <IconArrowRight size={15} strokeWidth={2.5} />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
