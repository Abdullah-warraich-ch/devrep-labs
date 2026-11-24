import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./HeroV2.module.css";

function RevealText({ children }) {
  return <span className={styles.mask}><span className={styles.words}>{children}</span></span>;
}

function ServicePhoto({ name }) {
  return (
    <Image src={`/images/hero/${name}.webp`} alt="" loading="eager" width={420} height={280}
      sizes="(max-width: 600px) 12vw, 140px" className={styles.photo} />
  );
}

export default function HeroV2() {
  return (
    <section id="hero-v2" className={styles.hero}>
      <svg className={styles.orbits} aria-hidden="true" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none">
        {[0, 1, 2, 3, 4].map((ring) => (
          <g key={ring} stroke="currentColor" opacity={0.15 - ring * 0.02}>
            <ellipse pathLength="1" cx="-150" cy="180" rx={340 + ring * 20} ry={255 + ring * 18} />
            <ellipse pathLength="1" cx="1450" cy="850" rx={365 + ring * 20} ry={240 + ring * 18} />
          </g>
        ))}
        <g fill="var(--primary)">
          <circle cx="190" cy="180" r="5" />
          <circle cx="1231" cy="658" r="4" />
        </g>
      </svg>
      <Navbar />
      <div className={styles.stage}>
        <div className={styles.accents} aria-hidden="true">
          {["ring", "cube", "sphere"].map((shape) => (
            <Image key={shape} src={`/images/hero/shape-${shape}.png`} alt="" loading="eager" width={220} height={220}
              sizes="(max-width: 600px) 32px, 72px" className={styles[shape]} />
          ))}
        </div>
        <h1 className={styles.title}>
          <span className={styles.row}>
            <RevealText>Websites <span className={styles.support}>for businesses</span></RevealText>{" "}
            <ServicePhoto name="web-studio" />
          </span>{" "}
          <span className={styles.row}>
            <RevealText><span className={styles.support}>that take</span></RevealText>{" "}
            <ServicePhoto name="app" />{" "}<RevealText>bookings,</RevealText>
          </span>{" "}
          <span className={styles.row}>
            <ServicePhoto name="ai" />{" "}
            <RevealText><span className={styles.support}>orders and enquiries</span></RevealText>
          </span>
        </h1>
        <p className="max-w-2xl text-center text-base leading-relaxed sm:text-lg">We build business websites, online stores and custom web apps. Tell us what happens after someone visits your site. Do they book a room, ask for a quote or place an order?</p>
        <div className={styles.actions}>
          <Link href="/contact">Discuss your website</Link>
          <Link href="/projects">Browse our projects</Link>
        </div>
      </div>
    </section>
  );
}
