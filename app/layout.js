import "./globals.css";
import { Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

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
    <html
      lang="en"
      className={`antialiased ${poppins.variable}`}
    >
      <body className="flex flex-col font-sans relative">
        <SmoothScroll>{children}</SmoothScroll>
        {/* Whole Website Bottom Fade & Blur Overlay */}
        <div className="fixed bottom-0 inset-x-0 h-[120px] pointer-events-none z-50 bg-gradient-to-t from-background/90 via-background/40 to-transparent backdrop-blur-[3px] [mask-image:linear-gradient(to_top,black_40%,transparent_100%)]" />
      </body>
    </html>
  );
}
