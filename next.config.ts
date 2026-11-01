import type { NextConfig } from "next";

// No GitHub Pages o site fica em /thermopair; em dev local segue na raiz.
const basePath = process.env.GITHUB_ACTIONS ? "/thermopair" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
