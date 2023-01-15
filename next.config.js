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
        source: 'https://atuprosper.com/:path*',
        destination: 'https://portfolio-blog-new.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
