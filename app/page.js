import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CurvedLoop from "@/components/ui/CurvedLoop";

export default function Home() {
  return (
    <main className="min-h-screen w-full p-2 sm:p-4 bg-background space-y-6 relative overflow-x-hidden">
      {/* Section 1: Header and Hero Container */}
      <div className="text-white relative m-0 min-h-[600px] lg:h-[calc(100vh-2rem)] w-full rounded-2xl sm:rounded-3xl bg-black flex flex-col z-30 overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]  rounded-full pointer-events-none z-0" />

        {/* Header Navigation inside Section 1 */}
        <Header />

        {/* Main Hero Component */}
        <Hero />
      </div>

      {/* Section 2: About Us / Process */}
      <AboutUs />

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

      {/* Section 6: Contact Us (Web3Forms) */}
      <Contact />

      {/* Section 7: Footer */}
      <Footer />
    </main>
  );
}
