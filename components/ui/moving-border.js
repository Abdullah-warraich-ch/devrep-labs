"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 3000,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={`bg-transparent relative p-[1px] overflow-hidden flex items-center justify-center ${containerClassName || ""}`}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={`h-20 w-20 opacity-90 bg-[radial-gradient(var(--secondary)_40%,transparent_60%)] ${borderClassName || ""}`}
          />
        </MovingBorder>
      </div>

      <div
        className={`relative z-10 flex items-center justify-center w-full h-full text-sm font-bold text-black antialiased backdrop-blur-xl ${className || ""}`}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.x || 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val)?.y || 0
  );

  const transform = useMotionTemplate`translate(-50%, -50%) translate(${x}px, ${y}px)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
