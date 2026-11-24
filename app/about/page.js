import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCta from "@/components/PreFooterCta";

import { articleMetadata } from "@/components/ArticlePage";

export const metadata = articleMetadata(
  "About the Studio",
  "Meet the web design and development studio behind DevRep Labs’ websites, booking tools, and custom web apps.",
  "/about",
);

export default function AboutPage() {
  return (
    <div className="bg-white font-poppins-r text-foreground">
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Image src="/images/hero/shape-ring.png" alt="" width={220} height={220} className="mx-auto mb-6 size-12 object-contain sm:size-16" />
            <h1 className="font-poppins-sb text-[clamp(3rem,8.2vw,7rem)] leading-[1.04] tracking-[-0.065em]">
              <span className="font-poppins-r text-copy-light">We’re </span>DevRep Labs<span className="text-primary">.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              A web design and development studio. We build websites and apps around everyday tasks, from booking an apartment to finding a tutor.
            </p>
          </div>
        </section>
        <section className="bg-[#191a20] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20">
            <h2 className="font-poppins-m text-[clamp(2.4rem,5vw,4.5rem)] leading-tight tracking-[-0.05em]">How we work<span className="text-primary">.</span></h2>
            <div className="max-w-xl space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
              <p>Before drawing a screen, we ask what someone needs to accomplish. For an apartment booking site, that means thinking through how a guest picks a city, checks dates, and finds a room.</p>
              <p>That journey guides what we design and build, from the first page a visitor sees to the form they fill out at the end.</p>
              <Link href="/projects" className="inline-flex min-h-11 items-center text-white underline underline-offset-4 hover:opacity-75">Explore our projects</Link>
            </div>
          </div>
        </section>
        <PreFooterCta />
      </main>
      <Footer />
    </div>
  );
}
