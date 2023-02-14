/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
