/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Pastikan ini sesuai nama repository Anda
const baseUrl = '/SkyBearer';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || baseUrl,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || baseUrl,
  reactStrictMode: true,

  // --- BAGIAN PENTING (JANGAN DIHAPUS) ---
  output: 'export', // <--- INI WAJIB ADA AGAR MUNCUL FOLDER 'out'
  // ----------------------------------------

  images: {
    unoptimized: true, // <--- INI WAJIB AGAR GAMBAR TIDAK ERROR
  },
});
