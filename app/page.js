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

        {/* Full Container Background Art */}
        <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
          {/* Layer 1: Grid rects with mask */}
          <div className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_70%,transparent_100%)] opacity-20">
            <svg width="100%" height="100%">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
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
                      fill={isHighlight ? "url(#goldGradient)" : "transparent"}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                    />
                  );
                })
              )}
            </svg>
          </div>

          {/* Layer 2: Subtle Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
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
