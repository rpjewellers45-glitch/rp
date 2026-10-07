/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  webpack: (config) => {
    // Windows reports the drive letter in two cases and webpack logs a cache warning for it.
    config.infrastructureLogging = { level: "error" };
    return config;
  },
};

export default nextConfig;
