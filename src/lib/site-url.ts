/**
 * Adresse absolue du site, utilisée par les canonicals, Open Graph, le
 * sitemap, robots.txt et les données structurées. Lue au build : les pages
 * statiques l'embarquent telle quelle.
 *
 * Ordre de résolution :
 * 1. `NEXT_PUBLIC_SITE_URL` si elle est posée (à fixer à https://exuma.paris
 *    lors de la bascule si le domaine n'est pas le domaine de production Vercel) ;
 * 2. sur Vercel, le domaine de production du projet
 *    (`VERCEL_PROJECT_PRODUCTION_URL`), qui suit automatiquement le domaine
 *    rattaché : l'adresse vercel.app aujourd'hui, exuma.paris après la bascule ;
 * 3. en local, http://localhost:3000.
 *
 * Un build Vercel sans aucune adresse échoue plutôt que de publier un domaine
 * fictif dans des centaines de pages, comme c'était le cas avec l'ancien
 * repli sur exuma.example.com.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  if (process.env.VERCEL) {
    throw new Error(
      "Adresse du site introuvable : posez NEXT_PUBLIC_SITE_URL dans les variables d'environnement Vercel.",
    );
  }

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/**
 * Image de partage (Open Graph, X) des pages qui n'ont pas de photo propre :
 * l'accueil, les pages institutionnelles, les fiches encore vides. Version
 * 1200 × 630 et 175 Ko de la photo d'ouverture de l'accueil ; l'original
 * (8 Mo) dépasse ce qu'acceptent les réseaux sociaux.
 */
export const DEFAULT_SHARE_IMAGE = {
  src: "/og-default.jpg",
  alt: "Une famille sur un promontoire de Madère, au-dessus d'une mer de nuages",
} as const;
