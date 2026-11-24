import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/custom-web-development";
export const metadata = articleMetadata("Custom Website Development", "DevRep Labs designs and builds fast, responsive websites for businesses that need a clearer online presence, stronger enquiries and an easier path to conversion.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="Custom website development for small businesses" parent={{ name: "Services", href: "/services" }} introduction="When somebody asks what you charge, where you work or how to book, you should have a page you can send them. We build business websites around those questions.">
      <section><h2>What we build</h2><p>Service websites, landing pages, company websites, product pages, portfolio sites, booking journeys and searchable catalogues. Every build is planned around the information your visitors need before they contact you, book or buy.</p></section>
      <section><h2>What is included</h2><p>Strategy and page structure, responsive interface design, front-end development, CMS or content editing setup where needed, technical SEO foundations, analytics setup, launch support and performance checks.</p></section>
      <section><h2>Can our team edit the site?</h2><p>Yes. We agree which content your team updates regularly and scope the editing tools around those tasks.</p></section>
      <section><h2>What affects website cost?</h2><p>A five-page site with an enquiry form is a different job from a searchable catalogue. Send us your page list, any copy you have and the tools your site needs to connect to. We can price the work from there.</p></section>
      <section><h2>Already have a site?</h2><p>Our website redesign services start with the pages people use most. Show us where customers get stuck or where staff keep answering the same question.</p></section>
      <section><h2>Related work</h2>
        <ul>
          <li><Link href="/projects/autovault">AutoVault Car Dealer case study</Link></li>
          <li><Link href="/projects/griffin-apartments">Griffin Heights Apartments case study</Link></li>
        </ul>
      </section>
      <Link href="/contact">Discuss your website</Link>
    </ArticlePage>
  );
}
