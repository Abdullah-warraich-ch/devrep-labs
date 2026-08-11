import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import CursorGrid from "@/components/ui/CursorGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-2 sm:p-4 bg-background space-y-6 relative">
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
      <div className="text-white relative m-0 h-[calc(100vh-2rem)] min-h-[600px] w-full overflow-hidden rounded-3xl bg-black flex flex-col border border-white/10 z-10">

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
                    />
                  );
                })
              )}
            </svg>
          </div>

          {/* Layer 2: Moving gradient spot */}
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
        </div>

        {/* Navigation Bar */}
        <Header />

        {/* Main Hero Content */}
        <Hero />
      </div>

      {/* Section 2: About Us */}
      <AboutUs />

      {/* Section 3: FAQ */}
      <Faq />
    </main>
  );
}
