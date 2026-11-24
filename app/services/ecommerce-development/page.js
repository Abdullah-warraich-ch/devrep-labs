import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/ecommerce-development";
export const metadata = articleMetadata("Ecommerce Website Development", "Explore ecommerce development for product catalogues, mobile shopping carts and checkout flows that help buyers choose and order with confidence.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="Online stores built to make buying simple" parent={{ name: "Services", href: "/services" }} introduction="A buyer needs to know what they are ordering and what it will cost. We plan the journey from the first product view through the cart and order confirmation.">
      <section><h2>Design the product decision</h2><p>Start with the questions customers ask before ordering. Sizes, variants, photos, delivery information and return terms should be easy to find on the product page.</p></section>
      <section><h2>Scope the checkout</h2><p>We agree how stock, shipping, payments and confirmations fit together, then test the journey on mobile, including quantity changes and failed payments.</p></section>
      <section><h2>Can we start with one product?</h2><p>Yes. A focused product page and cart can support a small catalogue. Fulfilment and payment requirements determine the rest of the scope.</p></section>
      <section><h2>Related work</h2>
        <ul>
          <li><Link href="/projects/ecommerce-product-page">Simple E-Commerce Page case study</Link></li>
        </ul>
      </section>
      <Link href="/contact">Discuss your store</Link>
    </ArticlePage>
  );
}
