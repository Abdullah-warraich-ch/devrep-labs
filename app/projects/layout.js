import { Jost } from "next/font/google";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function ProjectsLayout({ children }) {
  return (
    <div className={`${jost.variable}`} style={{ fontFamily: "var(--font-jost), sans-serif" }}>
      {children}
    </div>
  );
}
