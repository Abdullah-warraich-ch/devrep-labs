import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Services & What We Build",
  description:
    "Explore DevRep Labs' services in custom web software, modern business websites, smart AI automation tools, online stores, and product design.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Web Software, Websites & Smart AI Services | DevRep Labs",
    description:
      "Explore DevRep Labs' services in custom web software, modern business websites, smart AI automation tools, online stores, and product design.",
    url: "https://www.devrep.site/services",
    siteName: "DevRep Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevRep Labs Digital Services & Web Solutions",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Software, Websites & Smart AI Services | DevRep Labs",
    description:
      "Explore DevRep Labs' services in custom web software, modern business websites, smart AI automation tools, online stores, and product design.",
    images: ["/og-image.png"],
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
      name: "Services",
      item: "https://www.devrep.site/services",
    },
  ],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Custom Web Software",
      description: "Custom online portals, client dashboards, and tools built specifically around how your company operates.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Modern Business Websites",
      description: "Fast, beautiful, and easy-to-use websites designed to build instant trust and turn visitors into paying clients.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Smart AI & Time-Saving Tools",
      description: "Helpful AI assistants, automated chat support, and smart tools that handle repetitive daily tasks for you.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 4,
      name: "Online Stores & Payments",
      description: "Smooth online shops with easy checkout and card payments so your customers can buy without hassle.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 5,
      name: "Website & App Design",
      description: "Clean, easy-to-navigate designs and visual previews so you can see and test everything before we build it.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
    {
      "@type": "Service",
      position: 6,
      name: "Speed, Security & Care",
      description: "We keep your website super fast, protected from cyber threats, and running smoothly 24/7 without crashes.",
      provider: {
        "@type": "Organization",
        name: "DevRep Labs",
        url: "https://www.devrep.site",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesClient />
    </>
  );
}
