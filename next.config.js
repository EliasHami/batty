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
    'next': {
      transform: 'next/{{member}}',
    },
    'aws-amplify': {
      transform: 'aws-amplify/{{member}}',
    },
    '@aws-amplify/core': {
      transform: '@aws-amplify/core/lib-esm/{{member}}',
    },
    '@aws-amplify/auth': {
      transform: '@aws-amplify/auth/lib-esm/{{member}}',
    },
    '@aws-amplify/api': {
      transform: '@aws-amplify/api/lib-esm/{{member}}',
    },
    // 'yup': {
    //   transform: 'yup/{{member}}',
    // },
    // 'react': {
    //   transform: 'react/{{member}}',
    // },
    // 'rxjs': {
    //   transform: 'rxjs/{{member}}',
    // },
    // 'next/navigation': {
    //   transform: 'next/navigation/{{member}}',
    // },
    // '@hookform/resolvers/yup': {
    //   transform: '@hookform/resolvers/yup/{{member}}',
    // },
    // 'react-hook-form': {
    //   transform: 'react-hook-form/{{member}}',
    // },
  }
}

module.exports = withBundleAnalyzer(nextConfig);
