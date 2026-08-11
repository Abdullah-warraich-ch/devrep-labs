import "./globals.css";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Devrep Labs | High-Performance Software & Engineering",
  description: "Bespoke web applications, AI platforms & scalable cloud solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="antialiased"
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
