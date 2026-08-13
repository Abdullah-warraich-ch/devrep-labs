import "./globals.css";
import { Poppins } from "next/font/google";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import SmoothScroll from "@/components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Devrep Labs | High-Performance Software & Engineering",
  description: "Bespoke web applications, AI platforms & scalable cloud solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`antialiased ${poppins.variable}`}
    >
      <body className="flex flex-col font-sans relative">
        <SmoothScroll>{children}</SmoothScroll>
        {/* Whole Website Bottom Progressive Blur */}
        <ProgressiveBlur
          position="bottom"
          height="140px"
          className="fixed bottom-0 inset-x-0 z-50 pointer-events-none"
        />
      </body>
    </html>
  );
}
