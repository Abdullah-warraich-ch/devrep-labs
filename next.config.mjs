/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Allow serving avif images from the griffin-apartments demo
    remotePatterns: [],
  },


  async headers() {
    return [
      {
        // Long-lived immutable cache for Next.js static chunks
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Long-lived cache for fonts, images, and SVGs
        source: "/:path*(\\.woff2|\\.ttf|\\.otf|\\.webp|\\.avif|\\.png|\\.jpg|\\.jpeg|\\.svg|\\.ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
