/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    'src/components': {
      transform: 'src/components/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
  }
}

module.exports = nextConfig
