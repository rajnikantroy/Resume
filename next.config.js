/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let basePath = '';
if (process.env.NEXT_PUBLIC_BASE_PATH) {
  basePath = process.env.NEXT_PUBLIC_BASE_PATH;
} else if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.split('/')[1]
    : 'Resume';
  if (repoName && !repoName.endsWith('.github.io')) {
    basePath = `/${repoName}`;
  }
}

const nextConfig = {
  reactStrictMode: true,
  // Use static export when deploying via GitHub Actions for GitHub Pages;
  // Use native Next.js mode when deploying to Vercel.
  ...(isGithubActions ? { output: 'export' } : {}),
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_YEAR: String(new Date().getFullYear()),
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
