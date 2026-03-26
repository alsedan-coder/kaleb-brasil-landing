/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    domains: ['kalebbrasil.com.br'],
    unoptimized: true,
  },
};

module.exports = nextConfig;