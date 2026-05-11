import type { Experience, ImageRef } from "@/lib/content/types";
import { destinations } from "@/lib/content/registry";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://exuma.example.com";
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

export function buildMetaTitle(experience: Experience): string {
  if (experience.metaTitle) return experience.metaTitle;
  const destName = destinationName(experience);
  return destName
    ? `${experience.name} à ${destName}`
    : experience.name;
}

export function buildMetaDescription(experience: Experience): string {
  if (experience.metaDescription) return experience.metaDescription;
  if (typeof experience.blurb === "string" && experience.blurb.length >= 80) {
    return experience.blurb;
  }
  const destName = destinationName(experience);
  const where = destName ? ` à ${destName}` : "";
  return `${experience.name}${where}. Expérience confidentielle conçue par votre travel designer Exuma : accès privé, guide francophone, conciergerie 24/7.`;
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
