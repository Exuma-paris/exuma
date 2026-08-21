import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // En développement, le cache de compilation est écrit dans `.next-dev`.
  // Le projet vit dans un dossier Dropbox : Dropbox verrouille et resynchronise
  // `.next`, ce qui corrompt le cache et casse la génération du CSS.
  // Les builds de production (Vercel) continuent d'utiliser `.next`.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
