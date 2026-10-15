/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rpjewelleries.in" }],
        destination: "https://www.rpjewelleries.in/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  webpack: (config) => {
    // Windows reports the drive letter in two cases and webpack logs a cache warning for it.
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default nextConfig;
