/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"]
  },
  experimental: {
    appDir: true
  },
};

// experimental: {
//   appDir: true,
// },
// pakcage json next version //     "next": "13.4.5",

module.exports = nextConfig;
