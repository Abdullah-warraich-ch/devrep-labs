"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function FollowEyes({
  eyeColor = "#FFFFFF",
  pupilColor = "#000000",
  eyeSize = 24,
  pupilSize: rawPupilSize = 8,
  eyeSpacing = 4,
  trackingSpeed = 150,
  trackingRange = 80,
  eyeCount = "two",
  enableBlinking = true,
  blinkInterval = 3000,
  className = "",
  style = {},
}) {
  const pupilSize = useMemo(() => Math.min(rawPupilSize, eyeSize * 0.8), [rawPupilSize, eyeSize]);
  const containerRef = useRef(null);

  const [isBlinking, setIsBlinking] = useState(false);

  const springConfig = useMemo(() => ({ stiffness: trackingSpeed, damping: 20 }), [trackingSpeed]);

  const centerRawX = useMotionValue(0);
  const centerRawY = useMotionValue(0);
  const leftRawX = useMotionValue(0);
  const leftRawY = useMotionValue(0);
  const rightRawX = useMotionValue(0);
  const rightRawY = useMotionValue(0);

  const centerPupilX = useSpring(centerRawX, springConfig);
  const centerPupilY = useSpring(centerRawY, springConfig);
  const leftPupilX = useSpring(leftRawX, springConfig);
  const leftPupilY = useSpring(leftRawY, springConfig);
  const rightPupilX = useSpring(rightRawX, springConfig);
  const rightPupilY = useSpring(rightRawY, springConfig);

  const maxDistance = useMemo(
    () => ((eyeSize - pupilSize) / 2) * (trackingRange / 100),
    [eyeSize, pupilSize, trackingRange]
  );

  useEffect(() => {
    if (!enableBlinking) return;
    const blinkDuration = 200;
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, blinkDuration);
    }, blinkInterval);
    return () => clearInterval(interval);
  }, [enableBlinking, blinkInterval]);

  useEffect(() => {
    let animFrame = null;
    const handleMouseMove = (e) => {
      if (animFrame) cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        if (eyeCount === "one") {
          const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
          if (distance === 0) {
            centerRawX.set(0);
            centerRawY.set(0);
            return;
          }
          const clampedDistance = Math.min(distance, maxDistance);
          const angle = Math.atan2(mouseY, mouseX);
          centerRawX.set(Math.cos(angle) * clampedDistance);
          centerRawY.set(Math.sin(angle) * clampedDistance);
        } else {
          const leftEyeOffsetX = -eyeSpacing / 2;
          const rightEyeOffsetX = eyeSpacing / 2;

          const calculatePupilPosition = (eyeOffsetX) => {
            const relativeX = mouseX - eyeOffsetX;
            const relativeY = mouseY;
            const distance = Math.sqrt(relativeX * relativeX + relativeY * relativeY);
            if (distance === 0) return { x: 0, y: 0 };
            const clampedDistance = Math.min(distance, maxDistance);
            const angle = Math.atan2(relativeY, relativeX);
            return {
              x: Math.cos(angle) * clampedDistance,
              y: Math.sin(angle) * clampedDistance,
            };
          };

          const leftPos = calculatePupilPosition(leftEyeOffsetX);
          const rightPos = calculatePupilPosition(rightEyeOffsetX);
          leftRawX.set(leftPos.x);
          leftRawY.set(leftPos.y);
          rightRawX.set(rightPos.x);
          rightRawY.set(rightPos.y);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, [eyeSpacing, maxDistance, eyeCount, centerRawX, centerRawY, leftRawX, leftRawY, rightRawX, rightRawY]);

  const containerWidth = useMemo(
    () => (eyeCount === "one" ? eyeSize : eyeSize * 2 + eyeSpacing),
    [eyeCount, eyeSize, eyeSpacing]
  );

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center overflow-visible bg-transparent ${className}`}
      style={{
        ...style,
        width: containerWidth,
        height: eyeSize,
        gap: eyeCount === "two" ? eyeSpacing : 0,
      }}
    >
      {eyeCount === "one" ? (
        <div style={{ width: eyeSize, height: eyeSize, borderRadius: "50%", overflow: "hidden" }}>
          <motion.div
            style={{
              width: eyeSize,
              height: eyeSize,
              borderRadius: "50%",
              backgroundColor: eyeColor,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformOrigin: "center",
            }}
            animate={{ scaleY: isBlinking ? 0.2 : 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <motion.div
              style={{
                width: pupilSize,
                height: pupilSize,
                borderRadius: "50%",
                backgroundColor: pupilColor,
                opacity: isBlinking ? 0 : 1,
                x: centerPupilX,
                y: centerPupilY,
              }}
            />
          </motion.div>
        </div>
      ) : (
        <>
          <div style={{ width: eyeSize, height: eyeSize, borderRadius: "50%", overflow: "hidden" }}>
            <motion.div
              style={{
                width: eyeSize,
                height: eyeSize,
                borderRadius: "50%",
                backgroundColor: eyeColor,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transformOrigin: "center",
              }}
              animate={{ scaleY: isBlinking ? 0.2 : 1 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <motion.div
                style={{
                  width: pupilSize,
                  height: pupilSize,
                  borderRadius: "50%",
                  backgroundColor: pupilColor,
                  opacity: isBlinking ? 0 : 1,
                  x: leftPupilX,
                  y: leftPupilY,
                }}
              />
            </motion.div>
          </div>
          <div style={{ width: eyeSize, height: eyeSize, borderRadius: "50%", overflow: "hidden" }}>
            <motion.div
              style={{
                width: eyeSize,
                height: eyeSize,
                borderRadius: "50%",
                backgroundColor: eyeColor,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transformOrigin: "center",
              }}
              animate={{ scaleY: isBlinking ? 0.2 : 1 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <motion.div
                style={{
                  width: pupilSize,
                  height: pupilSize,
                  borderRadius: "50%",
                  backgroundColor: pupilColor,
                  opacity: isBlinking ? 0 : 1,
                  x: rightPupilX,
                  y: rightPupilY,
                }}
              />
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
