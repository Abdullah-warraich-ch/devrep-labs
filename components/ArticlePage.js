import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function articleMetadata(title, description, path) {
  const image = { url: "/share-card.png", width: 1200, height: 630, alt: "DevRep Labs" };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "DevRep Labs", type: "website", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export default function ArticlePage({ title, parent, introduction, children, path }) {
  return (
    <>
      {path && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Home", href: "/" }, parent, { name: title, href: path }].map(({ name, href }, index) => ({
          "@type": "ListItem", position: index + 1, name, item: new URL(href, "https://www.devrep.site").href,
        })),
      }).replace(/</g, "\\u003c") }} />}
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-6 py-10 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link href="/" className="underline">Home</Link>
          {parent && <><span aria-hidden="true">/</span><Link href={parent.href} className="underline">{parent.name}</Link></>}
          <span aria-hidden="true">/</span><span aria-current="page">{title}</span>
        </nav>
        <article className="space-y-7 leading-relaxed [&_h2]:mb-2 [&_h2]:font-poppins-sb [&_h2]:text-2xl [&_a]:underline">
          <h1 className="font-poppins-sb text-4xl tracking-tight sm:text-6xl">{title}</h1>
          <p className="text-lg">{introduction}</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
