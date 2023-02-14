/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["images.unsplash.com"],
    // domains: ["pythonanywhere.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "realestatebackendcollab.pythonanywhere.com",
      },
    ],

    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
