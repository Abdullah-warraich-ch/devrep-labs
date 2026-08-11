import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import CursorGrid from "@/components/ui/CursorGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-2 sm:p-4 bg-background space-y-6 relative overflow-x-hidden">
      {/* Interactive Cursor Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <CursorGrid
          cellSize={70}
          color="#d7ff00"
          radius={160}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={0.8}
          fillOpacity={0.03}
          gridOpacity={0.03}
          clickPulse
          pulseSpeed={600}
        />
      </div>

      {/* Section 1: Header and Hero */}
      <div className="text-white relative m-0 min-h-[600px] lg:h-[calc(100vh-2rem)] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black flex flex-col border border-white/10 z-10">

        {/* Full Container Background Art - Ultra Minimalist Horizon Arc */}
        <div className="absolute inset-0 h-full w-full pointer-events-none z-0 overflow-hidden">

          {/* Layer 1: Subtle Top Spotlight */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[55%] pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(215, 255, 0, 0.12) 0%, transparent 75%)",
            }}
          />

          {/* Layer 2: Clean Masked Grid */}
          <div className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] opacity-15">
            <svg width="100%" height="100%">
              <defs>
                <linearGradient id="minGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d7ff00" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {Array.from({ length: 18 }).map((_, row) =>
                Array.from({ length: 27 }).map((_, col) => {
                  const isHighlight =
                    (row === 1 && col === 0) ||
                    (row === 3 && col === 4) ||
                    (row === 6 && col === 25) ||
                    (row === 7 && col === 10) ||
                    (row === 12 && col === 18) ||
                    (row === 14 && col === 2);

                  return (
                    <rect
                      key={`${row}-${col}`}
                      x={col * 70}
                      y={row * 70}
                      width="70"
                      height="70"
                      fill={isHighlight ? "url(#minGridGrad)" : "transparent"}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                  );
                })
              )}
            </svg>
          </div>

          {/* Layer 3: Ultra Minimalist Glowing Horizon Arc */}
          <div className="absolute -bottom-[220px] sm:-bottom-[260px] md:-bottom-[300px] lg:-bottom-[340px] left-1/2 -translate-x-1/2 w-[1200px] sm:w-[1600px] md:w-[2000px] lg:w-[2400px] pointer-events-none z-0 flex justify-center opacity-85">
            <svg
              width="1920"
              height="700"
              viewBox="0 0 1920 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <defs>
                <linearGradient id="minArcGlow" x1="0" y1="0" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#d7ff00" stopOpacity="0" />
                  <stop offset="25%" stopColor="#d7ff00" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#d7ff00" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#d7ff00" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#d7ff00" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="minArcCore" x1="0" y1="0" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                <radialGradient id="minAmbientGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d7ff00" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                <filter id="minBlur" x="-100" y="-100" width="2120" height="900" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="24" />
                </filter>
                <filter id="minBlurDeep" x="-200" y="-200" width="2320" height="1100" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="60" />
                </filter>
              </defs>

              {/* Subtle Ambient Radial Glow */}
              <ellipse cx="960" cy="350" rx="800" ry="240" fill="url(#minAmbientGlow)" filter="url(#minBlurDeep)" />

              {/* Smooth Soft Outer Glow Arc */}
              <ellipse cx="960" cy="350" rx="900" ry="320" stroke="url(#minArcGlow)" strokeWidth="10" fill="none" filter="url(#minBlur)" />

              {/* Crisp Single Core Horizon Arc Line */}
              <ellipse cx="960" cy="350" rx="900" ry="320" stroke="url(#minArcCore)" strokeWidth="2" fill="none" opacity="0.85" />
            </svg>
          </div>
        </div>

        {/* Header Navigation */}
        <Header />

        {/* Main Hero Component */}
        <Hero />
      </div>

      {/* Section 2: About Us / Process */}
      <AboutUs />

      {/* Section 3: FAQ */}
      <Faq />
    </main>
  );
}
