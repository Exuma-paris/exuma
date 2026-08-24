import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // En développement, le cache de compilation est écrit dans `.next-dev`.
  // Le projet vit dans un dossier Dropbox : Dropbox verrouille et resynchronise
  // `.next`, ce qui corrompt le cache et casse la génération du CSS.
  // Les builds de production (Vercel) continuent d'utiliser `.next`.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",

  // En développement, une image régénérée sous le même nom continuait d'être
  // servie depuis le cache d'optimisation, largeur par largeur et format par
  // format : le fichier changeait sur le disque, le navigateur recevait encore
  // l'ancienne. Un TTL nul force la revalidation à chaque appel.
  // En production, on garde le comportement par défaut : chaque déploiement
  // reconstruit le cache, et servir les images depuis celui-ci est justement
  // ce qui rend les pages rapides.
  ...(process.env.NODE_ENV === "development"
    ? { images: { minimumCacheTTL: 0 } }
    : {}),
};

export default nextConfig;
