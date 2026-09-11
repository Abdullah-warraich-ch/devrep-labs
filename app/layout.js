import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ContactModalProvider } from "@/context/ContactModalContext";

export const metadata = {
  metadataBase: new URL("https://www.devrep.site"),

  title: {
    default: "Web Development Agency & AI Solutions | DevRep",
    template: "%s | DevRep Labs",
  },

  description:
    "DevRep Labs is a web development agency building high-performance websites, custom web applications, e-commerce platforms, and AI-powered digital solutions for ambitious businesses.",

  openGraph: {
    title: "DevRep Labs | Web Development & AI Solutions",
    description:
      "High-performance websites, web applications, and AI-powered digital solutions for ambitious businesses.",
    url: "https://www.devrep.site",
    siteName: "DevRep Labs",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevRep Labs | Web Development & AI Solutions",
    description:
      "High-performance websites, web applications, and AI-powered digital solutions for ambitious businesses.",
  },

  verification: {
    google: "-SDjT-zGjk71fNfV2ccZVM8ig-GH0ZMjoVNXw0cLvkM",
    other: {
      "p:domain_verify": "b73439efb290651502d067b8f3dd5819",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className="flex flex-col font-sans relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DevRep Labs",
              url: "https://www.devrep.site",
              logo: "https://www.devrep.site/icon.png",
              description:
                "DevRep Labs is a web development agency building high-performance websites, custom web applications, e-commerce platforms, and AI-powered digital solutions.",
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
