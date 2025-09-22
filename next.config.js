/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
}

module.exports = nextConfig
