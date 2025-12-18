// /* eslint-disable import/no-extraneous-dependencies */
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   eslint: {
//     dirs: ['.'],
//   },
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: '',
//   // The starter code load resources from `public` folder with `router.basePath` in React components.
//   // So, the source code is "basePath-ready".
//   // You can remove `basePath` if you don't need it.
//   reactStrictMode: true,
// });

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// GANTI 'nama-repository-anda' dengan nama repository GitHub Anda
// Contoh: jika repo anda 'landingpage-sate', maka isi '/landingpage-sate'
// Jika Anda deploy ke domain utama (username.github.io), biarkan kosong ''
const baseUrl = '/landingpageaja';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || baseUrl,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || baseUrl,
  reactStrictMode: true,
  output: 'export', // <--- PENTING: Wajib ada untuk GitHub Pages
  images: {
    unoptimized: true, // <--- PENTING: Agar gambar muncul di GitHub Pages
  },
});
