"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useContactModal } from "@/context/ContactModalContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { openContactModal } = useContactModal();
  const pathname = usePathname();

  const navItems = [
    { name: "Services", link: "/#services", sectionId: "services" },
    { name: "About", link: "/#about", sectionId: "about" },
    { name: "Work", link: "/projects", sectionId: "projects" },
    { name: "FAQ", link: "/#faq", sectionId: "faq" },
    { name: "Contact", isContactTrigger: true, sectionId: "contact" },
  ];

  const isProjectsPage = Boolean(pathname && pathname.startsWith("/projects"));
  const effectiveActiveSection = isProjectsPage ? "projects" : activeSection;

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
    <header className="fixed top-0 inset-x-0 w-full h-11 sm:h-13 z-50 bg-primary-gradient">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 flex items-center justify-between">
        {/* Text Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("");
            }
          }}
          className="flex items-center gap-1.5 shrink-0 group"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-white select-none flex items-center font-['poppins-sb'] group-hover:opacity-95 transition-opacity">
            DevRep
            <span className="text-[#FFE566] ml-1 font-semibold">Labs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] ml-1 inline-block"></span>
          </span>
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-primary-gradient border-b border-white/20 p-4 flex flex-col gap-1.5 font-poppins animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = effectiveActiveSection === item.sectionId;

            return item.isContactTrigger ? (
              <button
                key={item.name}
                type="button"
                onClick={(e) => handleNavClick(e, item)}
                data-active={isActive ? "true" : undefined}
                className={`pago-nav-link w-full text-left px-3.5 py-2.5 rounded-lg flex items-center justify-between cursor-pointer bg-transparent border-none transition-colors ${
                  isActive
                    ? "active bg-white/15 text-[#00F5D4] font-semibold"
                    : "hover:bg-white/5"
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                )}
              </button>
            ) : (
              <Link
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
                data-active={isActive ? "true" : undefined}
                className={`pago-nav-link w-full px-3.5 py-2.5 rounded-lg flex items-center justify-between transition-colors ${
                  isActive
                    ? "active bg-white/15 text-[#00F5D4] font-semibold"
                    : "hover:bg-white/5"
                }`}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                )}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              openContactModal({ mode: "demo" });
            }}
            className="mt-2 w-full text-center py-2 rounded-full text-xs font-medium font-['poppins-m'] text-[#090814] bg-[#00F5D4] hover:bg-[#00E5FF] transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
