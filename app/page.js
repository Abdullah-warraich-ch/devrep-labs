import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import TechStackBeam from "@/components/TechStackBeam";
import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CurvedLoop from "@/components/ui/CurvedLoop";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-2 sm:p-4 bg-background space-y-6 relative overflow-x-hidden">
      {/* Section 1: Header and Hero Container */}
      <div className="text-white relative m-0 min-h-[600px] lg:h-[calc(100vh-2rem)] w-full rounded-2xl sm:rounded-3xl bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/60 via-black to-black flex flex-col border border-white/10 z-30 overflow-visible">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d7ff00]/5 blur-[140px] rounded-full pointer-events-none z-0" />

        {/* Header Navigation inside Section 1 */}
        <Header />

        {/* Main Hero Component */}
        <Hero />
      </div>

      {/* Section 2: About Us / Process */}
      <AboutUs />

      {/* Section 3: Ecosystem Integrations (Animated Beams) */}
      <TechStackBeam />

      {/* Curved Text Marquee Section (Sitting directly on body background) */}
      <div className="w-full py-4 overflow-hidden">
        <CurvedLoop
          marqueeText="DEVREP LABS ✦ SCALABLE SOFTWARE ✦ AI PLATFORMS ✦ HIGH IMPACT DIGITAL PRODUCTS ✦"
          speed={2}
          curveAmount={80}
          interactive={true}
          className="fill-black font-black tracking-tight"
        />
      </div>

      {/* Section 4: Portfolio Showcase */}
      <Showcase />

      {/* Section 5: FAQ */}
      <Faq />

      {/* Section 6: Footer */}
      <Footer />
    </main>
  );
}
