/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.dicebar.com']
  }
}

module.exports = nextConfig
