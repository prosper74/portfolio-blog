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
        source: '/api/:path*',
        destination: 'https://portfolio-blog-new.vercel.app/:path*',
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
