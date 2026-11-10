import type { Experience, ImageRef } from "@/lib/content/types";
import { destinations } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/site-url";

export function getSiteUrl(): string {
  return SITE_URL;
}

export function experiencePath(slug: string): string {
  return `/experiences/${slug}`;
}

export function pickHeroImage(experience: Experience): ImageRef | undefined {
  const heroSection = experience.sections.find(
    (s) => s.type === "heroImageBackground" || s.type === "hero",
  );
  if (heroSection && "images" in heroSection && heroSection.images?.[0]) {
    return heroSection.images[0];
  }
  return experience.heroImage;
}

function destinationName(experience: Experience): string | undefined {
  const slug = experience.destinationSlugs?.[0];
  if (!slug) return undefined;
  return destinations[slug]?.name;
}

// Le layout ajoute « | Exuma » (8 caractères) : au-delà de 60 au total,
// Google tronque le titre.
const MAX_TITLE = 60 - " | Exuma".length;
const MAX_DESCRIPTION = 155;

/** Coupe au dernier mot entier avant la limite. */
function clampDescription(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= MAX_DESCRIPTION) return clean;
  const cut = clean.slice(0, MAX_DESCRIPTION - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.]$/, "") + "…";
}

/**
 * « {Expérience}, {Destination} » : la virgule évite d'avoir à choisir entre
 * « à », « en » et « au » (l'ancien gabarit écrivait « à Corse »). Si le titre
 * dépasse la longueur affichée par Google, la destination est retirée.
 */
export function buildMetaTitle(experience: Experience): string {
  if (experience.metaTitle) return experience.metaTitle;
  const destName = destinationName(experience);
  if (!destName) return experience.name;
  if (experience.name.toLowerCase().includes(destName.toLowerCase())) {
    return experience.name;
  }
  const withDestination = `${experience.name}, ${destName}`;
  return withDestination.length <= MAX_TITLE ? withDestination : experience.name;
}

export function buildMetaDescription(experience: Experience): string {
  if (experience.metaDescription) return clampDescription(experience.metaDescription);
  if (typeof experience.blurb === "string" && experience.blurb.length >= 80) {
    return clampDescription(experience.blurb);
  }
  const destName = destinationName(experience);
  const lead = destName ? `${experience.name}, ${destName}` : experience.name;
  return clampDescription(
    `${lead}. Expérience confidentielle conçue par votre conseiller Exuma : accès privé, guide francophone, suivi pendant le séjour.`,
  );
}

type JsonLd = Record<string, unknown>;

export function experienceJsonLd(
  experience: Experience,
  siteUrl: string,
): JsonLd {
  const hero = pickHeroImage(experience);
  const destName = destinationName(experience);
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: experience.name,
    description: buildMetaDescription(experience),
    url: `${siteUrl}${experiencePath(experience.slug)}`,
    ...(hero ? { image: `${siteUrl}${hero.src}` } : {}),
    ...(destName
      ? {
          containedInPlace: {
            "@type": "TouristDestination",
            name: destName,
          },
        }
      : {}),
  };
}

export function breadcrumbJsonLd(
  experience: Experience,
  siteUrl: string,
): JsonLd {
  const items: { name: string; item: string }[] = [
    { name: "Accueil", item: `${siteUrl}/` },
    { name: "Expériences", item: `${siteUrl}/experiences` },
  ];
  const destSlug = experience.destinationSlugs?.[0];
  if (destSlug) {
    const dest = destinations[destSlug];
    if (dest) {
      items.push({
        name: dest.name,
        item: `${siteUrl}/destinations/${dest.slug}`,
      });
    }
  }
  items.push({
    name: experience.name,
    item: `${siteUrl}${experiencePath(experience.slug)}`,
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function experienceJsonLdScripts(experience: Experience): JsonLd[] {
  const siteUrl = getSiteUrl();
  return [experienceJsonLd(experience, siteUrl), breadcrumbJsonLd(experience, siteUrl)];
}
