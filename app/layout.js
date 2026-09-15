import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ContactModalProvider } from "@/context/ContactModalContext";

export const viewport = {
  themeColor: "#AA076B",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://www.devrep.site"),

  title: {
    default: "Web Development Agency & AI Solutions | DevRep Labs",
    template: "%s | DevRep Labs",
  },

  description:
    "DevRep Labs is a web development agency building high-performance websites, custom web applications, e-commerce platforms, and AI-powered digital solutions for ambitious businesses.",

  keywords: [
    "Web Development Agency",
    "Custom Web Applications",
    "AI Solutions",
    "E-Commerce Development",
    "Next.js Development",
    "UI/UX Design",
    "Full-Stack Web Development",
    "DevRep Labs",
  ],

  authors: [{ name: "DevRep Labs", url: "https://www.devrep.site" }],
  creator: "DevRep Labs",
  publisher: "DevRep Labs",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "DevRep Labs | Web Development & AI Solutions",
    description:
      "High-performance websites, web applications, and AI-powered digital solutions for ambitious businesses.",
    url: "https://www.devrep.site",
    siteName: "DevRep Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevRep Labs — Web Development Agency & AI Solutions",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevRep Labs | Web Development & AI Solutions",
    description:
      "High-performance websites, web applications, and AI-powered digital solutions for ambitious businesses.",
    images: ["/og-image.png"],
    creator: "@devrep_labs",
    site: "@devrep_labs",
  },

  verification: {
    google: "-SDjT-zGjk71fNfV2ccZVM8ig-GH0ZMjoVNXw0cLvkM",
    other: {
      "p:domain_verify": "b73439efb290651502d067b8f3dd5819",
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        {/* Preload critical WOFF2 fonts — eliminates HTML→CSS→font waterfall on mobile */}
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload hero SVG — reduces LCP resource load delay */}
        <link
          rel="preload"
          href="/svgs/hero.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body className="flex flex-col font-sans relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.devrep.site/#organization",
                  name: "DevRep Labs",
                  url: "https://www.devrep.site",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.devrep.site/icon.png",
                    width: 96,
                    height: 96,
                  },
                  image: "https://www.devrep.site/og-image.png",
                  description:
                    "DevRep Labs is a web development agency building high-performance websites, custom web applications, e-commerce platforms, and AI-powered digital solutions for ambitious businesses.",
                  email: "abdullahnasar333@gmail.com",
                  telephone: "+923391719123",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+923391719123",
                      contactType: "customer service",
                      email: "abdullahnasar333@gmail.com",
                      availableLanguage: ["English", "Urdu"],
                    },
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/devrep-labs/",
                    "https://x.com/devrep_labs",
                    "https://www.instagram.com/devrep_labs",
                    "https://www.pinterest.com/devreplabs/",
                    "https://wa.me/923391719123",
                  ],
                  knowsAbout: [
                    "Web Development",
                    "Custom Web Applications",
                    "Next.js Development",
                    "AI Solutions",
                    "UI/UX Design",
                    "E-Commerce Development",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.devrep.site/#website",
                  url: "https://www.devrep.site",
                  name: "DevRep Labs",
                  publisher: {
                    "@id": "https://www.devrep.site/#organization",
                  },
                  inLanguage: "en-US",
                },
              ],
            }),
          }}
        />
        <SmoothScroll>
          <ContactModalProvider>{children}</ContactModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
