import Link from "next/link";
import Image from "next/image";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";
import preview from "@/public/projects/griifin-mockup.webp";

const title = "Griffin Heights Apartments";
const description = "A DevRep Labs concept case study in apartment discovery, mobile listing design and reservation interfaces for Lahore and Islamabad.";
export const metadata = articleMetadata("Griffin Heights Apartments case study", description, "/projects/griffin-apartments");

export default function GriffinCaseStudy() {
  return (
    <ArticlePage title={title} parent={{ name: "Projects", href: "/projects" }} introduction="This portfolio concept explores how a traveler can compare serviced apartments in Lahore and Islamabad before starting a reservation.">
      <Image src={preview} alt="Griffin Heights Apartments website preview" sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full rounded-2xl" />
      <section><h2>Choosing a property</h2><p>A city filter narrows the collection. Each detail page brings the neighborhood, nightly rate, capacity, photography and amenities together so visitors can judge whether an apartment fits their trip.</p></section>
      <section><h2>Designing the mobile flow</h2><p>On a small screen, visitors can explore the photos and then open the reservation interface with the apartment already selected. The prototype separates browsing from entering stay details and stops before a real reservation.</p></section>
      <section><h2>Explore the implementation</h2><p>The React and Next.js demo gives each sample apartment its own URL. <Link href="/demo/griffin-apartments">Try the apartment discovery demo</Link> or explore our <Link href="/services/custom-web-development">custom web development service</Link>.</p></section>
    </ArticlePage>
  );
}
