import { Jost } from "next/font/google";
import "./griffin.css";
import Preloader from "./_components/Preloader";

const jost = Jost({
  variable: "--font-griffin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Griffin Heights Apartments | Luxury Urban Residences & Suites",
  description:
    "Experience refined minimalist living at Griffin Heights Apartments in Lahore & Islamabad.",
};

export default function GriffinLayout({ children }) {
  return (
    <div className={`${jost.variable} griffin-demo min-h-screen`}>
      <Preloader />
      {children}
    </div>
  );
}

