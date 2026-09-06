/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  reactStrictMode: true,
  // Use static export when deploying via GitHub Actions for GitHub Pages;
  // Use native Next.js mode when deploying to Vercel.
  ...(isGithubActions ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
  },
};

module.exports = nextConfig;
