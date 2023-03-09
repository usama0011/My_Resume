/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "443",
        pathname: "/photo-**",
      },
      {
        protocol: "https",
        hostname: "logos-download.com",
        port: "443",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        port: "443",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
