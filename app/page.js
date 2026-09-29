// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
import HeroV2 from "@/components/HeroV2";
import WhatWeDoV3 from "@/components/WhatWeDoV3";
import WhyUsV2 from "@/components/WhyUsV2";
import ProjectsV2 from "@/components/ProjectsV2";
import FaqSectionV2 from "@/components/FaqSectionV2";
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
      <HeroV2 />
      <WhatWeDoV3 />
      <WhyUsV2 />
      <ProjectsV2 />
      <FaqSectionV2 />
      <PreFooterCta />
      <Footer />
      <SideSocialLinks />
    </main>
  );
}
