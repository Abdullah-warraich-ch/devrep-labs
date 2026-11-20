import BookDemoClient from "./BookDemoClient";

export const metadata = {
  title: "Book a Free Demo",
  description:
    "Schedule a free 30-minute interactive demo with DevRep Labs. Walk through custom website prototypes, AI automation solutions, and get architectural recommendations.",

  alternates: {
    canonical: "/book-a-demo",
  },

  openGraph: {
    title: "Book a Free Demo | DevRep Labs",
    description:
      "Schedule a free 30-minute interactive demo with DevRep Labs. Walk through custom website prototypes and AI automation solutions.",
    url: "https://www.devrep.site/book-a-demo",
    siteName: "DevRep Labs",
    images: [
      {
        url: "/share-card.png",
        width: 1200,
        height: 630,
        alt: "Book a Free Demo with DevRep Labs",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Book a Free Demo | DevRep Labs",
    description:
      "Schedule a free 30-minute interactive demo with DevRep Labs. Walk through custom website prototypes and AI automation solutions.",
    images: ["/share-card.png"],
  },
};

const breadcrumbsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.devrep.site",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Book a Free Demo",
      item: "https://www.devrep.site/book-a-demo",
    },
  ],
};

const bookDemoSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Book a Free Demo with DevRep Labs",
  url: "https://www.devrep.site/book-a-demo",
  description:
    "Schedule a free 30-minute interactive demo with DevRep Labs for web development, UI/UX, and AI digital solutions.",
  provider: {
    "@type": "Organization",
    name: "DevRep Labs",
    url: "https://www.devrep.site",
  },
};

export default function BookDemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookDemoSchema),
        }}
      />
      <BookDemoClient />
    </>
  );
}

