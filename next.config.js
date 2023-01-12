/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig
