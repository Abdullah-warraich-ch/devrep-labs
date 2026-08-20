"use client";

import React, { useId, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function LiquidMorphButton({
  label = "Chat With Us",
  link = "#contact",
  openInNewTab = false,
  padding = "18px 52px",
  radius = "999px",
  border = null,
  blobSize = 28,
  blobRise = 220,
  blobScale = 3.8,
  blobSpacing = 52,
  blobBottomOffset = 36,
  hoverDelayStep = 65,
  transitionDuration = 500,
  blobTransitionDuration = 700,
  backgroundColor = "#d7ff00",
  textColor = "#000000",
  blobColor = "#ffffff",
  hoverTextColor = "#000000",
  shadow = "0px 10px 30px rgba(215, 255, 0, 0.25)",
  onTap,
  className = "",
}) {
  const rawId = useId();
  const instanceId = useMemo(() => rawId.replace(/:/g, ""), [rawId]);
  const rootClass = useMemo(() => `lmb_${instanceId}`, [instanceId]);
  const filterId = useMemo(() => `goo_${instanceId}`, [instanceId]);

  const paddingCss = useMemo(() => {
    if (padding === null || padding === undefined || padding === "none") return undefined;
    if (typeof padding === "string") return padding;
    const { top, right, bottom, left } = padding;
    if ([top, right, bottom, left].every(Boolean)) return `${top} ${right} ${bottom} ${left}`;
    return undefined;
  }, [padding]);

  const cssText = useMemo(() => {
    const duration = Math.max(0, transitionDuration);
    const blobDuration = Math.max(0, blobTransitionDuration);
    const risePct = blobRise;
    const scale = blobScale;
    const b1Left = `calc(50% - ${blobSpacing}px)`;
    const b2Left = "50%";
    const b3Left = `calc(50% + ${blobSpacing}px)`;
    const delay0 = 0;
    const delay1 = Math.max(0, hoverDelayStep);
    const delay2 = Math.max(0, hoverDelayStep * 2);

    return `
.${rootClass} {
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${paddingCss ? `padding: ${paddingCss};` : ""}
  border-radius: ${radius};
  overflow: hidden;
  isolation: isolate;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: ${backgroundColor};
  color: ${textColor};
  box-shadow: ${shadow || "none"};
  transition: color ${duration}ms cubic-bezier(0.23, 1, 0.32, 1);
  outline: none;
  border: 0;
}
.${rootClass}:focus-visible {
  box-shadow: 0 0 0 3px rgba(215,255,0,0.4), ${shadow || "none"};
}
.${rootClass} .lmb_label {
  position: relative;
  z-index: 2;
  letter-spacing: -0.01em;
  transition: color ${duration}ms cubic-bezier(0.23, 1, 0.32, 1);
}
.${rootClass} .lmb_bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  filter: url(#${filterId});
  pointer-events: none;
}
.${rootClass} .lmb_blob {
  position: absolute;
  width: ${blobSize}px;
  height: ${blobSize}px;
  border-radius: 999px;
  background: ${blobColor};
  bottom: ${-Math.abs(blobBottomOffset)}px;
  transform: translateY(0) scale(0);
  transition: transform ${blobDuration}ms cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
}
.${rootClass} .lmb_blob:nth-child(1) { left: ${b1Left}; transition-delay: ${delay0}ms; transform: translateX(-50%) translateY(0) scale(0); }
.${rootClass} .lmb_blob:nth-child(2) { left: ${b2Left}; transition-delay: ${delay1}ms; transform: translateX(-50%) translateY(0) scale(0); }
.${rootClass} .lmb_blob:nth-child(3) { left: ${b3Left}; transition-delay: ${delay2}ms; transform: translateX(-50%) translateY(0) scale(0); }

.${rootClass}:hover { color: ${hoverTextColor}; }
.${rootClass}:hover .lmb_blob {
  transform: translateX(-50%) translateY(-${risePct}%) scale(${scale});
}

@media (prefers-reduced-motion: reduce) {
  .${rootClass}, .${rootClass} .lmb_label, .${rootClass} .lmb_blob {
    transition: none !important;
  }
}
`;
  }, [
    rootClass,
    filterId,
    paddingCss,
    radius,
    backgroundColor,
    textColor,
    shadow,
    hoverTextColor,
    transitionDuration,
    blobTransitionDuration,
    blobSize,
    blobBottomOffset,
    blobSpacing,
    hoverDelayStep,
    blobRise,
    blobScale,
    blobColor,
  ]);

  const content = (
    <>
      <style>{cssText}</style>
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <span className="lmb_bg" aria-hidden="true">
        <span className="lmb_blob" />
        <span className="lmb_blob" />
        <span className="lmb_blob" />
      </span>
      <span className="lmb_label text-xs sm:text-sm md:text-base font-extrabold leading-none">{label}</span>
    </>
  );

  const commonProps = {
    className: cn(rootClass, className),
    role: "button",
    onClick: onTap,
    style: {
      position: "relative",
      ...(paddingCss ? { padding: paddingCss } : {}),
      borderRadius: radius,
      ...(border ?? {}),
      width: "max-content",
      minWidth: "max-content",
    },
  };

  const href = link?.trim();
  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer noopener" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      type="button"
      style={{
        ...commonProps.style,
        appearance: "none",
        WebkitAppearance: "none",
        background: undefined,
      }}
    >
      {content}
    </button>
  );
}
