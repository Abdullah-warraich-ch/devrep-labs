import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ContactModalProvider } from "@/context/ContactModalContext";

export const metadata = {
  title: "DevRep Labs | High-Performance Web Development & AI Solutions",
  description: "Bespoke web applications, modern responsive websites & scalable cloud solutions.",
  verification: {
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
        <SmoothScroll>
          <ContactModalProvider>{children}</ContactModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
