/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
  }
}

module.exports = withBundleAnalyzer(nextConfig);
