/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only use basePath in production (for GitHub Pages)
  // In development, basePath should be empty so we can access localhost:3000/
  basePath: process.env.NODE_ENV === 'production' ? '/ElectroWaves' : '',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

