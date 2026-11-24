import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./HeroV2.module.css";

function ServiceImage({ name }) {
  return (
    <Image
      src={`/images/hero/${name}.webp`}
      alt=""
      width={420}
      height={280}
      sizes="(max-width: 600px) 12vw, 140px"
      className={styles.photo}
    />
  );
}

export default function HeroV2() {
  return (
    <section id="hero-v2" className={styles.hero}>
      <svg className={styles.orbits} aria-hidden="true" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none">
        {[0, 1, 2, 3, 4].map((ring) => (
          <g key={ring} stroke="currentColor" opacity={0.15 - ring * 0.02}>
            <ellipse cx="-150" cy="180" rx={340 + ring * 20} ry={255 + ring * 18} />
            <ellipse cx="1450" cy="850" rx={365 + ring * 20} ry={240 + ring * 18} />
          </g>
        ))}
        <g fill="var(--primary)">
          <circle cx="190" cy="180" r="5" />
          <circle cx="1231" cy="658" r="4" />
        </g>
      </svg>
      <Navbar />
      <div className={styles.stage}>
        <h1 className={styles.title}>
          <span className={styles.row}>Creative websites <ServiceImage name="web-studio" /></span>{" "}
          <span className={styles.row}>that make <ServiceImage name="app" /> brands</span>{" "}
          <span className={styles.row}><ServiceImage name="ai" /> stand out.</span>
        </h1>
        <div className={styles.actions}>
          <Link href="/contact">Start a project</Link>
          <Link href="/projects">Explore our work</Link>
        </div>
      </div>
    </section>
  );
}
