"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import WavyNavLink from "@/components/ui/WavyNavLink";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 60) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed top-3 sm:top-4 inset-x-0 px-4 sm:px-6 z-[99999] w-full transition-all duration-500 ease-out will-change-transform",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      initial={{
        borderColor: "rgba(255, 255, 255, 0)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
      animate={{
        backgroundColor: visible ? "#000000" : "rgba(0, 0, 0, 0)",
        borderColor: visible ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0)",
        boxShadow: visible
          ? "0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.15) inset"
          : "none",
        width: visible ? "50%" : "100%",
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 24,
        mass: 0.7,
      }}
      className={cn(
        "relative z-[99999] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 py-3.5 lg:flex border border-transparent text-white shadow-2xl transition-all duration-300 will-change-[width,transform]",
        visible && "min-w-[560px] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, activeSection }) => {
  return (
    <div
      className={cn(
        "relative flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex",
        className
      )}
    >
      {items.map((item, idx) => {
        const itemSectionId = item.link?.replace("#", "");
        const isActive = activeSection === itemSectionId;

        return (
          <WavyNavLink
            key={`link-${idx}`}
            label={item.name}
            href={item.link}
            onClick={onItemClick}
            active={isActive}
          />
        );
      })}
    </div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      initial={{
        borderColor: "rgba(255, 255, 255, 0)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
      animate={{
        backgroundColor: visible ? "#000000" : "rgba(0, 0, 0, 0)",
        borderColor: visible ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0)",
        boxShadow: visible
          ? "0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.15) inset"
          : "none",
        width: visible ? "92%" : "100%",
        paddingRight: visible ? "16px" : "0px",
        paddingLeft: visible ? "16px" : "0px",
        borderRadius: visible ? "1.5rem" : "2rem",
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 24,
        mass: 0.7,
      }}
      className={cn(
        "relative z-[99999] mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-4 py-3 lg:hidden border border-transparent text-white shadow-2xl transition-all duration-300 will-change-[width,transform]",
        visible && "backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "absolute inset-x-0 top-16 z-[99999] flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-black text-white p-6 border border-white/20 shadow-2xl",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-white cursor-pointer size-6" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white cursor-pointer size-6" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1 shrink-0"
    >
      <Image
        src="/logo-white.webp"
        alt="DevRep Labs"
        width={160}
        height={40}
        priority
        className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-sm font-semibold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center text-center shrink-0";

  const variantStyles = {
    primary:
      "bg-[#d7ff00] text-black hover:bg-[#c2e600] font-bold shadow-md",
    secondary: "bg-transparent text-white hover:text-[#d7ff00] shadow-none",
    dark: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800",
    gradient:
      "bg-gradient-to-r from-yellow-400 to-lime-500 text-black font-bold shadow-md",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
