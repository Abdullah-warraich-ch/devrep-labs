export const siteConfig = {
  // ── BRAND & BUSINESS IDENTIFIERS ──────────────────────────────────────────
  name: "Griffin Heights",
  tagline: "Apartments",
  fullTitle: "Griffin Heights Apartments | Luxury Urban Residences & Suites",
  description: "Experience refined minimalist living at Griffin Heights Apartments in Lahore & Islamabad.",
  keywords: "Griffin Heights Apartments, Lahore apartments, Islamabad suites, luxury penthouse",
  domain: "https://griffin-apartments.vercel.app",

  // ── BRAND ASSETS (IMAGE & ICON PATHS) ─────────────────────────────────────
  assets: {
    logoDark: "/griffin-apartments/logo-brand.png",
    logoWhite: "/griffin-apartments/logo-white.png",
    favicon: "/griffin-apartments/favicon.ico",
    iconPng: "/griffin-apartments/icon.png",
    appleIcon: "/griffin-apartments/apple-icon.png",
    ogImage: "/griffin-apartments/og-image.jpg",
  },

  // ── CITIES & LOCATIONS SERVED ─────────────────────────────────────────────
  cities: ["Lahore", "Islamabad"],

  // ── CONTACT & SUPPORT INFO ────────────────────────────────────────────────
  contact: {
    phoneDisplay: "+92 323 9728962",
    phoneRaw: "+923239728962",
    email: "bookings@griffinheights.pk",
    whatsappMessage: "Hello! I would like to inquire about booking an apartment.",
    locations: [
      { city: "Lahore", address: "Bahria Town, Lahore" },
      { city: "Islamabad", address: "Zeta Mall, Islamabad" }
    ]
  },

  // ── HERO SECTION CONFIG ───────────────────────────────────────────────────
  hero: {
    eyebrow: "Serviced Luxury Apartments",
    bookButtonText: "Book Now",
  },

  // ── WHY US / STATS SECTION CONFIG ─────────────────────────────────────────
  whyUs: {
    titleLine1: "WHY",
    titleLine2: "CHOOSE",
    titleLine3: "US",
    experienceYears: "5+",
    experienceText: "years of hospitality experience",
    totalStays: "1,500+",
    totalStaysText: "Happy Stays & Guests",
    uptime: "100%",
    uptimeText: "Power & Wi-Fi Uptime",
    checkIn: "24/7",
    checkInText: "Seamless Digital Check-In",
  },

  // ── TESTIMONIALS SECTION CONFIG ───────────────────────────────────────────
  testimonials: {
    title: "What Our Guests Say",
    averageRating: "4.98",
    maxRating: "5.0",
    totalStaysLabel: "(1,500+ stays)",
  },

  // ── FOOTER CONFIG ─────────────────────────────────────────────────────────
  footer: {
    bannerTitle: "Ready for your luxury stay?",
    bannerButtonText: "Book Apartment",
    description: "Fully furnished luxury residences in prime areas of Lahore and Islamabad. Built for comfort and privacy.",
    guaranteed: [
      "100% Power & Solar Backup",
      "High-Speed Optical Wi-Fi",
      "24/7 Digital Check-In",
    ],
  },
};
