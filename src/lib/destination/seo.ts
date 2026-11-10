import type { Destination, ImageRef } from "@/lib/content/types";
import { continents } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/site-url";

export function getSiteUrl(): string {
  return SITE_URL;
}

export function destinationPath(slug: string): string {
  return `/destinations/${slug}`;
}

export function pickHeroImage(destination: Destination): ImageRef | undefined {
  const hero = destination.sections.find((s) => s.type === "hero");
  return hero?.images?.[0];
}

export function buildMetaDescription(destination: Destination): string {
  if (destination.metaDescription) return destination.metaDescription;
  const where = destination.country
    ? `${destination.name}, ${destination.country}`
    : destination.name;
  return `${where} sur mesure avec Exuma : adresses confidentielles, conciergerie privée, itinéraire conçu par un travel designer dédié.`;
}

// Le layout ajoute « | Exuma » : au-delà de 60 caractères au total, Google
// tronque le titre.
const MAX_TITLE = 60 - " | Exuma".length;

/**
 * Titre Google d'une destination : « {Nom} : voyage de luxe sur mesure ».
 * Le nom vient en tête parce que la demande porte d'abord sur « voyage
 * {pays} » ; « luxe » et « sur mesure » portent le positionnement (audit SEO
 * de novembre 2026 : aucun titre du site ne contenait « luxe »). Les deux-points
 * évitent d'accorder une préposition (« au », « en », « à »). Seul le <title>
 * change : le H1 et les intitulés visibles restent ceux de la rédaction.
 * `metaTitle` reste disponible pour une formulation propre à une page.
 */
export function buildMetaTitle(destination: Destination): string {
  if (destination.metaTitle) return destination.metaTitle;
  const full = `${destination.name} : voyage de luxe sur mesure`;
  return full.length <= MAX_TITLE ? full : `${destination.name} : voyage de luxe`;
}

type JsonLd = Record<string, unknown>;

export function destinationJsonLd(
  destination: Destination,
  siteUrl: string,
): JsonLd {
  const hero = pickHeroImage(destination);
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: buildMetaDescription(destination),
    url: `${siteUrl}${destinationPath(destination.slug)}`,
    ...(hero ? { image: `${siteUrl}${hero.src}` } : {}),
    ...(destination.country
      ? {
          address: {
            "@type": "PostalAddress",
            addressCountry: destination.country,
          },
        }
      : {}),
  };
}

export function breadcrumbJsonLd(
  destination: Destination,
  siteUrl: string,
): JsonLd {
  const items: { name: string; item: string }[] = [
    { name: "Accueil", item: `${siteUrl}/` },
  ];
  if (destination.continentSlug) {
    const continent = continents[destination.continentSlug];
    if (continent) {
      items.push({
        name: continent.name,
        item: `${siteUrl}/continents/${continent.slug}`,
      });
    }
  }
  items.push({
    name: destination.name,
    item: `${siteUrl}${destinationPath(destination.slug)}`,
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

export function faqJsonLd(destination: Destination): JsonLd | null {
  const faq = destination.sections.find((s) => s.type === "faq");
  if (!faq) return null;
  const stringItems = faq.items.filter(
    (item): item is { question: string; answer: string } =>
      typeof item.answer === "string",
  );
  if (stringItems.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stringItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function destinationJsonLdScripts(destination: Destination): JsonLd[] {
  const siteUrl = getSiteUrl();
  const scripts: JsonLd[] = [
    destinationJsonLd(destination, siteUrl),
    breadcrumbJsonLd(destination, siteUrl),
  ];
  const faq = faqJsonLd(destination);
  if (faq) scripts.push(faq);
  return scripts;
}
