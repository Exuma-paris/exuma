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
  // En développement, l'optimiseur d'images est désactivé : les fichiers sont
  // servis tels quels. Une image régénérée sous le même nom restait sinon
  // servie depuis le cache d'optimisation, largeur par largeur et format par
  // format, et ni un TTL nul ni un redémarrage n'invalidaient les entrées déjà
  // écrites sur disque. Le prix est des images lourdes en local ; le gain est
  // que ce qui s'affiche est toujours le fichier réel.
  // La production n'est pas concernée : chaque déploiement repart d'un cache
  // vide, et c'est l'optimisation qui y rend les pages rapides.
  ...(process.env.NODE_ENV === "development"
    ? { images: { unoptimized: true } }
    : {}),

  // En-têtes de sécurité de base, sur toutes les réponses. Vercel ne pose que
  // HSTS. La politique de contenu (CSP) n'est pas encore posée : elle doit
  // d'abord lister tout ce que charge GTM, sans quoi elle bloquerait la mesure.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // SAMEORIGIN plutôt que DENY : l'atelier des sections du
          // design-system affiche les pages du site dans une iframe.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
