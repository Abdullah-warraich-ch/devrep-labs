import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import FaqSection from "@/components/FaqSection";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import SideSocialLinks from "@/components/ui/SideSocialLinks";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background relative overflow-x-hidden">
      <Header />
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <Projects />
      <FaqSection />
      <PreFooterCta />
      <Footer />
      <SideSocialLinks />
    </main>
  );
}
