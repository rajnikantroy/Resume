/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export for GitHub Pages.
  output: 'export',
  images: {
    // `next/image` optimization has no server to run on in an export.
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    // Inlined at build time so the prerendered HTML and the hydrated client
    // agree on the copyright year.
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
  },
};

module.exports = nextConfig;
