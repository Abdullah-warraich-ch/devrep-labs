"use client";

const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "SaaS",
  "E-Commerce",
  "Branding",
  "Web Apps",
  "Automation",
  "AI Solutions",
];

// 4× duplicated for seamless loop (animate at –50%)
const ROW_A = [...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES];
const ROW_B = [...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES];

// Dark band separator — yellow four-pointed star
const SEP_A = (
  <span aria-hidden="true" className="inline-block text-primary leading-none select-none mx-4" style={{ fontSize: "1.1rem" }}>
    ✦
  </span>
);

// Primary band separator — black four-pointed star
const SEP_B = (
  <span aria-hidden="true" className="inline-block text-black leading-none select-none mx-4" style={{ fontSize: "1.1rem" }}>
    ✦
  </span>
);

export default function ServicesMarquee() {
  return (
    <section
      aria-label="Services ticker"
      className="relative w-full "
      style={{ height: "340px", isolation: "isolate" }}
    >
      {/*
        Both bands are absolutely positioned and extend 200% of viewport width
        so their diagonal sweep is always edge-to-edge with no visible ends.
        Band A rotates +16°, Band B rotates -16° → they form a crossing X.
      */}

      {/* ── Band A: zinc-900, tilted upper-left → lower-right ── */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          left: "-50%",
          width: "200%",
          transform: "rotate(-7deg)",
          transformOrigin: "center center",
          backgroundColor: "#18181b",
          zIndex: 1,
        }}
        className="py-4 sm:py-5"
      >
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap marquee-track-ltr">
            {ROW_A.map((label, i) => (
              <span
                key={i}
                className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase"
                style={{ padding: "0 1.25rem" }}
              >
                {label}
                {SEP_A}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Band B: primary #d7ff00, tilted upper-right → lower-left ── */}
      <div
        style={{
          position: "absolute",
          top: "52%",
          left: "-50%",
          width: "200%",
          transform: "rotate(7deg)",
          transformOrigin: "center center",
          backgroundColor: "#d7ff00",
          zIndex: 2,
        }}
        className="py-4 sm:py-5"
      >
        <div className="overflow-hidden">
          <div className="flex whitespace-nowrap marquee-track-rtl">
            {ROW_B.map((label, i) => (
              <span
                key={i}
                className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black uppercase"
                style={{ padding: "0 1.25rem" }}
              >
                {label}
                {SEP_B}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
