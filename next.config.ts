import type { NextConfig } from "next";

// No GitHub Pages o site fica em /<nome-do-repositório>; em dev local segue na raiz.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "thermopair";
const basePath = process.env.GITHUB_ACTIONS ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
