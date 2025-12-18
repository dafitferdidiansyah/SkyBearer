/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// PENTING: Ganti jadi '/SkyBearer' sesuai nama repo di screenshot
const baseUrl = '/SkyBearer';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || baseUrl,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || baseUrl,
  reactStrictMode: true,

  // WAJIB ADA:
  output: 'export',

  images: {
    unoptimized: true,
  },
});
