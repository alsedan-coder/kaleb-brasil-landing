/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['kalebbrasil.com.br'],
    unoptimized: true,
  },
};

module.exports = nextConfig;