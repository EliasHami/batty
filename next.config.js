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
    'src/components': {
      transform: 'src/components/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    // aws-amplify --> marche pas
  }
}

module.exports = withBundleAnalyzer(nextConfig);
