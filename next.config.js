/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://portfolio-blog-new.vercel.app/blog/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
