/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // If deploying to a subdirectory, uncomment and set your repository name
  // basePath: '/repository-name',
  // trailingSlash: true,
};

module.exports = nextConfig;

