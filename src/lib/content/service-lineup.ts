import { serviceCategories } from "@/lib/content/registry";
import type { ImageRef } from "@/lib/content/types";

/**
 * Liste des pôles de service, dans l'ordre arrêté par la dirigeante le
 * 2026-10-15. Partagée par la grille /services et le menu Conciergerie, pour
 * qu'ils ne divergent jamais.
 *
 * Les séminaires ne sont pas une catégorie de service (leur page vit sous
 * /professionnels/seminaires) : ils s'insèrent ici comme une entrée à part.
 */
const ORDER = [
  "mobilite",
  "conciergerie",
  "securite",
  "seminaires",
  "ingenierie",
  "reporting",
  "lifestyle",
] as const;

export type ServiceLineupItem = {
  slug: string;
  name: string;
  description: string;
  href: string;
  /** Image de carte : celle du hero de la catégorie, sauf exception. */
  image: ImageRef | null;
};

const seminaires: ServiceLineupItem = {
  slug: "seminaires",
  name: "Events, séminaires & team building",
  description:
    "Séminaires, conventions, team building et événements d'entreprise, conçus, coordonnés et exécutés de A à Z.",
  href: "/professionnels/seminaires",
  image: {
    src: "/professionnels/entreprises/salle-seminaire.jpg",
    alt: "Une salle de séminaire en session, autour d'une table en U",
  },
};

/**
 * Image de carte imposée quand elle doit différer du hero de la catégorie :
 * Reporting & pilotage garde la photo du clavier, comme sur le hub
 * Professionnels (choix de la dirigeante).
 */
const CARD_IMAGE: Record<string, ImageRef> = {
  reporting: {
    src: "/professionnels/clavier.jpg",
    alt: "Les mains d'un conseiller Exuma sur son clavier",
  },
};

function heroImageOf(slug: string): ImageRef | null {
  const first = serviceCategories[slug]?.sections[0];
  if (first?.type === "hero" && first.images.length > 0) return first.images[0];
  return null;
}

export function getServiceLineup(): ServiceLineupItem[] {
  return ORDER.flatMap((slug) => {
    if (slug === "seminaires") return [seminaires];
    const category = serviceCategories[slug];
    if (!category) return [];
    return [
      {
        slug,
        name: category.name,
        description: typeof category.blurb === "string" ? category.blurb : "",
        href: `/services/${slug}`,
        image: CARD_IMAGE[slug] ?? heroImageOf(slug),
      },
    ];
  });
}
