"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconArrowRight } from "@tabler/icons-react";
import { useLenis } from "lenis/react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Header() {
  const lenis = useLenis();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { openContactModal } = useContactModal();
  const pathname = usePathname();

  const navItems = [
    { name: "Services", link: "/services", sectionId: "services" },
    { name: "About", link: "/#about", sectionId: "about" },
    { name: "Work", link: "/projects", sectionId: "projects" },
    { name: "FAQ", link: "/#faq", sectionId: "faq" },
    { name: "Contact", isContactTrigger: true, sectionId: "contact" },
  ];

  const isProjectsPage = Boolean(pathname && pathname.startsWith("/projects"));
  const isServicesPage = Boolean(pathname && pathname.startsWith("/services"));
  const effectiveActiveSection = isServicesPage
    ? "services"
    : isProjectsPage
    ? "projects"
    : activeSection;

  // Scroll spy & active section detection
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["services", "about", "projects", "faq", "contact"];
    let rafId = null;

    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Top of page (Hero) -> no nav link active
      if (scrollY < 180) {
        setActiveSection("");
        return;
      }

      // Reached near bottom of page -> contact is active
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Check which section is in view from bottom to top
      const offsetThreshold = 160;
      let matchedSection = "";

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offsetThreshold) {
            matchedSection = id;
            break;
          }
        }
      }

      setActiveSection(matchedSection);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScrollSpy);
    };

    // Run on initial mount
    handleScrollSpy();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Complete Scroll Lock (Lenis, Body, HTML) + Escape key listener
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (lenis) {
      lenis.stop();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      if (lenis) {
        lenis.start();
      }
    };
  }, [isMobileMenuOpen, lenis]);

  // Handle smooth scroll when navigating on the home page
  const handleNavClick = useCallback(
    (e, item) => {
      if (item.isContactTrigger) {
        e.preventDefault();
        openContactModal();
        setActiveSection("contact");
        setIsMobileMenuOpen(false);
        return;
      }

      if (pathname === "/" && item.link.startsWith("/#")) {
        e.preventDefault();
        const targetId = item.link.replace("/#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const yOffset = -58; // Header offset
          const y =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
          setActiveSection(item.sectionId);
        }
      }

      setIsMobileMenuOpen(false);
    },
    [pathname, openContactModal]
  );

  return (
    <header className="fixed top-0 inset-x-0 w-full h-12 sm:h-14 z-50 bg-primary-gradient">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }
          }}
          className="flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="DevRep Labs Logo"
            width={170}
            height={53}
            priority
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Center Nav Links with Scroll Spy Highlight */}
        <nav className="hidden md:flex items-stretch gap-7 h-full">
          {navItems.map((item) => {
            const isActive = effectiveActiveSection === item.sectionId;

            return item.isContactTrigger ? (
              <button
                key={item.name}
                type="button"
                onClick={(e) => handleNavClick(e, item)}
                data-active={isActive ? "true" : undefined}
                className={`pago-nav-link relative h-full flex items-center py-0 cursor-pointer bg-transparent border-none ${
                  isActive ? "active" : ""
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-px left-0 right-0 h-[2.5px] bg-[#00F5D4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
                data-active={isActive ? "true" : undefined}
                className={`pago-nav-link relative h-full flex items-center py-0 ${
                  isActive ? "active" : ""
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-px left-0 right-0 h-[2.5px] bg-[#00F5D4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA (Small Button) */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={() => openContactModal({ mode: "demo" })}
            className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-medium font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <IconX className="size-5" />
            ) : (
              <IconMenu2 className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex justify-end">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Slide-over Sidebar Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-[300px] max-w-[85vw] h-full bg-[#151226] border-l border-white/10 flex flex-col justify-between p-6 z-10 font-poppins"
            >
              {/* Top Header of Sidebar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Link
                  href="/"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (pathname === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setActiveSection("");
                    }
                  }}
                  className="flex items-center"
                >
                  <Image
                    src="/logo.png"
                    alt="DevRep Labs Logo"
                    width={160}
                    height={50}
                    priority
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close sidebar"
                >
                  <IconX className="size-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 py-6 flex-1 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = effectiveActiveSection === item.sectionId;

                  return item.isContactTrigger ? (
                    <button
                      key={item.name}
                      type="button"
                      onClick={(e) => handleNavClick(e, item)}
                      data-active={isActive ? "true" : undefined}
                      className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between text-sm font-medium font-['poppins-m'] transition-all cursor-pointer bg-transparent border-none ${
                        isActive
                          ? "bg-white/10 text-[#00F5D4] font-semibold"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                      )}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.link}
                      onClick={(e) => handleNavClick(e, item)}
                      data-active={isActive ? "true" : undefined}
                      className={`w-full px-4 py-3 rounded-xl flex items-center justify-between text-sm font-medium font-['poppins-m'] transition-all ${
                        isActive
                          ? "bg-white/10 text-[#00F5D4] font-semibold"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom CTA Section */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openContactModal({ mode: "demo" });
                  }}
                  className="w-full py-3 px-4 rounded-full text-sm font-semibold font-['poppins-sb'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book a Free Demo</span>
                  <IconArrowRight className="size-4" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
