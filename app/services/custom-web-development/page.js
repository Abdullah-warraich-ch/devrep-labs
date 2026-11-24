import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/custom-web-development";
export const metadata = articleMetadata("Custom Website Development", "DevRep Labs designs and builds fast, responsive websites for businesses that need a clearer online presence, stronger enquiries and an easier path to conversion.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="Custom websites built around your business" parent={{ name: "Services", href: "/services" }} introduction="Your website should make it easy for a customer to understand what you offer, trust your business and take the next step. We build custom websites for service businesses, growing brands and teams that need more than a template.">
      <section><h2>What we build</h2><p>Service websites, landing pages, company websites, product pages, portfolio sites, booking journeys and searchable catalogues. Every build is planned around the information your visitors need before they contact you, book or buy.</p></section>
      <section><h2>What is included</h2><p>Strategy and page structure, responsive interface design, front-end development, CMS or content editing setup where needed, technical SEO foundations, analytics setup, launch support and performance checks.</p></section>
      <section><h2>Can our team edit the site?</h2><p>Yes. We agree which content your team updates regularly and scope the editing tools around those tasks.</p></section>
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
