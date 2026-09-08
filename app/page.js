"use client";

import { useEffect, useState } from "react";

/* ── Animated Analog Clock ─────────────────────────────────────── */
function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const s = time.getSeconds();
  const m = time.getMinutes();
  const h = time.getHours() % 12;

  const secDeg  = s * 6;
  const minDeg  = m * 6 + s * 0.1;
  const hourDeg = h * 30 + m * 0.5;

  const cx = 80, cy = 80, r = 72;

  // Hour tick marks
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const isMajor = i % 3 === 0;
    const inner = isMajor ? r - 12 : r - 7;
    return {
      x1: cx + inner * Math.cos(angle),
      y1: cy + inner * Math.sin(angle),
      x2: cx + r * Math.cos(angle),
      y2: cy + r * Math.sin(angle),
      isMajor,
    };
  });

  const hand = (deg, length, width, color, glow) => {
    const angle = (deg - 90) * (Math.PI / 180);
    return (
      <line
        x1={cx} y1={cy}
        x2={cx + length * Math.cos(angle)}
        y2={cy + length * Math.sin(angle)}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        style={{ filter: glow ? `drop-shadow(0 0 4px ${color})` : "none", transition: "all 0.4s cubic-bezier(.4,2.08,.55,.44)" }}
      />
    );
  };

  return (
    <div style={{ marginBottom: 36, display: "flex", justifyContent: "center" }}>
      <svg width={160} height={160} viewBox="0 0 160 160">
        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(215,255,0,0.15)" strokeWidth={1.5} />
        {/* Inner face */}
        <circle cx={cx} cy={cy} r={r - 2} fill="rgba(255,255,255,0.02)" />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke={t.isMajor ? "rgba(215,255,0,0.7)" : "rgba(255,255,255,0.2)"}
            strokeWidth={t.isMajor ? 2 : 1}
            strokeLinecap="round"
          />
        ))}

        {/* Hour hand */}
        {hand(hourDeg, 36, 3, "rgba(255,255,255,0.9)", false)}
        {/* Minute hand */}
        {hand(minDeg, 50, 2, "rgba(255,255,255,0.75)", false)}
        {/* Second hand */}
        {hand(secDeg, 56, 1.2, "#d7ff00", true)}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r={4} fill="#d7ff00" style={{ filter: "drop-shadow(0 0 6px #d7ff00)" }} />
        <circle cx={cx} cy={cy} r={2} fill="#080808" />
      </svg>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function Home() {
  return (
    // <main className="min-h-screen w-full p-2 sm:p-4 bg-background space-y-6 relative overflow-x-hidden">
    //   {/* Section 1: Header and Hero Container */}
    //   <div className="text-white relative m-0 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-2rem)] w-full rounded-2xl sm:rounded-3xl bg-black flex flex-col justify-between z-30 overflow-hidden">
    //     {/* Subtle Ambient Radial Glow */}
    //     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]  rounded-full pointer-events-none z-0" />

    //     {/* Header Navigation inside Section 1 */}
    //     <Header />

    //     {/* Main Hero Component */}
    //     <Hero />
    //   </div>

    //   {/* Section 2: About Us / Process */}
    //   <AboutUs />

    //   {/* Curved Text Marquee Section (Sitting directly on body background) */}
    //   <div className="w-full py-4 overflow-hidden">
    //     <CurvedLoop
    //       marqueeText="DEVREP LABS ✦ SCALABLE SOFTWARE ✦ AI PLATFORMS ✦ HIGH IMPACT DIGITAL PRODUCTS ✦"
    //       speed={2}
    //       curveAmount={80}
    //       interactive={true}
    //       className="fill-black font-black tracking-tight"
    //     />
    //   </div>

    //   {/* Section 4: Portfolio Showcase */}
    //   <Showcase />

    //   {/* Section 5: FAQ */}
    //   <Faq />

    //   {/* Section 5.5: Services Marquee Ticker */}
    //   <ServicesMarquee />

    //   {/* Section 6: Contact Us (Web3Forms) */}
    //   <Contact />

    //   {/* Section 7: Footer */}
    //   <Footer />
    // </main>
    <section style={{
      minHeight: "100vh",
      width: "100%",
      background: "#080808",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    }}>

      {/* Neon glow blobs */}
      <div style={{ position: "absolute", top: "-15%", left: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #d7ff00 0%, transparent 70%)", filter: "blur(120px)", opacity: 0.12, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #d7ff00 0%, transparent 70%)", filter: "blur(100px)", opacity: 0.09, pointerEvents: "none" }} />

      {/* Subtle grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(215,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(215,255,0,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 680 }}>

        {/* Animated Clock */}
        <AnalogClock />

        {/* Headline */}
        <h1 style={{ margin: "0 0 20px", lineHeight: 1.1, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.03em" }}>
          <span style={{ color: "#ffffff" }}>Coming </span>
          <span style={{
            color: "transparent",
            WebkitTextStroke: "1px #d7ff00",
            textShadow: "0 0 20px rgba(215,255,0,0.3)",
          }}>Soon</span>
        </h1>

        {/* Sub text */}
        <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 52px" }}>
          We&apos;re crafting something extraordinary — high-performance web apps &amp; AI-powered digital products. Stay tuned.
        </p>

        {/* Divider line */}
        <div style={{ width: 48, height: 2, background: "linear-gradient(90deg, transparent, #d7ff00, transparent)", margin: "0 auto", borderRadius: 2 }} />
      </div>

      {/* Bottom copyright */}
      <p style={{ position: "absolute", bottom: 24, fontSize: "0.7rem", color: "rgba(255,255,255,0.15)", letterSpacing: "0.08em" }}>
        © {new Date().getFullYear()} DevRep Labs
      </p>

    </section>
  );
}
