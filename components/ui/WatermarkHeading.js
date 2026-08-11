"use client";

export default function WatermarkHeading({
  text = "QUESTIONS",
  className = "",
  opacity = "opacity-[0.06]",
  color = "text-copy",
  position = "top-0 left-0",
  size = "text-4xl sm:text-7xl md:text-8xl lg:text-[9rem]",
}) {
  return (
    <div
      className={`absolute ${position} max-w-full overflow-hidden pointer-events-none select-none z-0 whitespace-nowrap font-black uppercase tracking-tighter leading-none ${size} ${color} ${opacity} ${className}`}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}
