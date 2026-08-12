"use client";

import React from "react";
import FollowEyes from "./FollowEyes";

export default function EyeFollowButton({
  text = "Get in touch",
  href = "#contact",
  buttonColor = "#ffffff",
  textColor = "#000000",
  eyeColor = "#000000",
  pupilColor = "#ffffff",
  eyeSize = 22,
  pupilSize = 7,
  eyeGap = 4,
  className = "",
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-3 rounded-full px-5 py-2 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg border border-black/10 cursor-pointer ${className}`}
      style={{
        backgroundColor: buttonColor,
        color: textColor,
      }}
    >
      <span className="font-extrabold">{text}</span>
      <FollowEyes
        eyeCount="two"
        eyeSize={eyeSize}
        pupilSize={pupilSize}
        eyeSpacing={eyeGap}
        eyeColor={eyeColor}
        pupilColor={pupilColor}
        enableBlinking
        blinkInterval={2500}
      />
    </a>
  );
}
