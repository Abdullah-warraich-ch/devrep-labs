"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";

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

  const [leftPupilPos, setLeftPupilPos] = useState({ x: 0, y: 0 });
  const [rightPupilPos, setRightPupilPos] = useState({ x: 0, y: 0 });
  const [centerPupilPos, setCenterPupilPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

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
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      if (eyeCount === "one") {
        const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        if (distance === 0) {
          setCenterPupilPos({ x: 0, y: 0 });
          return;
        }
        const clampedDistance = Math.min(distance, maxDistance);
        const angle = Math.atan2(mouseY, mouseX);
        setCenterPupilPos({
          x: Math.cos(angle) * clampedDistance,
          y: Math.sin(angle) * clampedDistance,
        });
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

        setLeftPupilPos(calculatePupilPosition(leftEyeOffsetX));
        setRightPupilPos(calculatePupilPosition(rightEyeOffsetX));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [eyeSpacing, maxDistance, eyeCount]);

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
              }}
              animate={{ x: centerPupilPos.x, y: centerPupilPos.y }}
              transition={{ type: "spring", stiffness: trackingSpeed, damping: 20 }}
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
                }}
                animate={{ x: leftPupilPos.x, y: leftPupilPos.y }}
                transition={{ type: "spring", stiffness: trackingSpeed, damping: 20 }}
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
                }}
                animate={{ x: rightPupilPos.x, y: rightPupilPos.y }}
                transition={{ type: "spring", stiffness: trackingSpeed, damping: 20 }}
              />
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
