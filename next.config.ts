import type { NextConfig } from "next";

// Project site: https://marinepimenta.github.io/thermopairv2/
// O basePath só vale no build do GitHub Actions (GITHUB_ACTIONS=true);
// em desenvolvimento local o site continua na raiz (http://localhost:3000).
const REPO_NAME = "thermopairv2";
const basePath = process.env.GITHUB_ACTIONS === "true" ? `/${REPO_NAME}` : "";

const nextConfig: NextConfig = {
  // Static export: gera a pasta `out/` com HTML/CSS/JS prontos para o Pages.
  output: "export",
  basePath,
  // Usado pelos componentes para montar o caminho de imagens em /public.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // O otimizador de imagens do Next precisa de servidor; no export fica desligado.
  images: { unoptimized: true },
  // /services/ -> out/services/index.html (funciona em qualquer host estático).
  trailingSlash: true,
};

export default nextConfig;
