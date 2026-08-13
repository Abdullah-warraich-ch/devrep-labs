"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import EyeFollowButton from "@/components/ui/EyeFollowButton";
import WavyNavLink from "@/components/ui/WavyNavLink";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "FAQ", link: "#faq" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = ["about", "work", "faq", "contact"];

    // Helper: get the measurable element (pin-spacer if GSAP pinned, otherwise the section itself)
    const getMeasurableElement = (id) => {
      const elem = document.getElementById(id);
      if (!elem) return null;
      const parent = elem.parentElement;
      // GSAP wraps pinned elements in a div.pin-spacer
      if (parent && parent.getAttribute("data-pin-spacer") !== null) return parent;
      if (parent && parent.classList.contains("pin-spacer")) return parent;
      return elem;
    };

    // Delay setup so GSAP has time to pin #work and insert its pin-spacer
    const timer = setTimeout(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Clear highlight at top (hero section)
        if (scrollY < 100) {
          setActiveSection(null);
          return;
        }

        let active = null;
        for (const id of sectionIds) {
          const el = getMeasurableElement(id);
          if (!el) continue;

          const top = el.getBoundingClientRect().top + scrollY;
          const height = el.offsetHeight || el.getBoundingClientRect().height;

          // Section is active when scroll midpoint is within its range
          if (scrollY + viewportHeight * 0.4 >= top && scrollY + viewportHeight * 0.4 < top + height) {
            active = id;
            break;
          }
        }
        setActiveSection(active);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Run once on mount

      // Store cleanup
      window._navCleanup = () => window.removeEventListener("scroll", handleScroll);
    }, 600); // Wait for GSAP to initialize pin

    return () => {
      clearTimeout(timer);
      if (window._navCleanup) {
        window._navCleanup();
        delete window._navCleanup;
      }
    };
  }, []);

  return (
    <header className="relative z-[99999] w-full px-2 sm:px-4 pt-2">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} activeSection={activeSection} />
          <div className="flex items-center gap-4 shrink-0">
            <EyeFollowButton
              text="Get in touch"
              href="#contact"
              buttonColor="#ffffff"
              textColor="#000000"
              eyeColor="#000000"
              pupilColor="#ffffff"
            />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => {
              const itemSectionId = item.link?.replace("#", "");
              const isActive = activeSection === itemSectionId;

              return (
                <WavyNavLink
                  key={`mobile-link-${idx}`}
                  label={item.name}
                  href={item.link}
                  active={isActive}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-1 text-base font-medium"
                />
              );
            })}
            <div className="flex w-full flex-col gap-4 pt-4 border-t border-zinc-800">
              <EyeFollowButton
                text="Get in touch"
                href="#contact"
                buttonColor="#ffffff"
                textColor="#000000"
                eyeColor="#000000"
                pupilColor="#ffffff"
                className="w-full justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}
