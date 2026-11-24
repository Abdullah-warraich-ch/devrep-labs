import Link from "next/link";
import ArticlePage, { articleMetadata } from "@/components/ArticlePage";

const path = "/services/ecommerce-development";
export const metadata = articleMetadata("Ecommerce Website Development", "Explore ecommerce development for product catalogues, mobile shopping carts and checkout flows that help buyers choose and order with confidence.", path);

export default function ServicePage() {
  return (
    <ArticlePage path={path} title="Ecommerce website development for online stores" parent={{ name: "Services", href: "/services" }} introduction="A shopper choosing a size on a phone needs three answers. Is it in stock? What will delivery cost? How can I pay? We plan the product page, cart and checkout around those decisions.">
      <section><h2>Design the product decision</h2><p>Start with the questions customers ask before ordering. Sizes, variants, photos, delivery information and return terms should be easy to find on the product page.</p></section>
      <section><h2>Scope the checkout</h2><p>We agree how stock, shipping, payments and confirmations fit together, then test the journey on mobile, including quantity changes and failed payments.</p></section>
      <section><h2>Can we start with one product?</h2><p>Yes. A focused product page and cart can support a small catalogue. Fulfilment and payment requirements determine the rest of the scope.</p></section>
      <section><h2>What goes on an ecommerce website checklist?</h2><p>Test one order from product selection to confirmation. Check stock, shipping charges, payment errors and the email a customer receives.</p></section>
      <section><h2>Related work</h2>
        <ul>
          <li><Link href="/projects/ecommerce-product-page">Simple E-Commerce Page case study</Link></li>
        </ul>
      </section>
      <Link href="/contact">Discuss your store</Link>
    </ArticlePage>
  );
}
