import type { Metadata } from "next";
import type { ImageRef, Section } from "@/lib/content/types";

/**
 * Métadonnées d'une page entité (continent, catégorie de service,
 * hébergement) qui n'a pas d'aide SEO dédiée. Sans elles, ces pages héritaient
 * du titre, de la description et surtout de l'URL canonique de l'accueil :
 * pour un moteur, chacune se déclarait doublon de la page d'accueil.
 */
type SeoEntity = {
  name: string;
  blurb?: unknown;
  metaTitle?: string;
  metaDescription?: string;
  heroImage?: ImageRef;
  sections: Section[];
};

const MAX_DESCRIPTION = 160;

/** Coupe au dernier mot entier avant la limite, sans couper une phrase courte. */
function clamp(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= MAX_DESCRIPTION) return clean;
  const cut = clean.slice(0, MAX_DESCRIPTION - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.]$/, "") + "…";
}

function heroOf(entity: SeoEntity) {
  const hero = entity.sections.find(
    (s) => s.type === "hero" || s.type === "heroImageBackground",
  );
  return hero && "images" in hero ? hero : undefined;
}

export function entityMetadata(
  entity: SeoEntity,
  path: string,
  fallbackDescription: string,
): Metadata {
  const hero = heroOf(entity);
  const title = entity.metaTitle ?? entity.name;
  const description = clamp(
    entity.metaDescription ??
      // Un blurb de carte trop court ne suffit pas à décrire la page.
      (typeof entity.blurb === "string" && entity.blurb.length >= 80
        ? entity.blurb
        : undefined) ??
      (hero && typeof hero.description === "string"
        ? hero.description
        : undefined) ??
      fallbackDescription,
  );
  const image = entity.heroImage ?? hero?.images?.[0];

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      // Le gabarit `%s | Exuma` du layout ne vaut que pour <title>.
      siteName: "Exuma",
      url: path,
      title: `${title} | Exuma`,
      description,
      ...(image ? { images: [{ url: image.src, alt: image.alt }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Exuma`,
      description,
      ...(image ? { images: [image.src] } : {}),
    },
  };
}
