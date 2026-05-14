import type { DiscoverItem } from "@/components/sections/hero/discover-modal";
import {
  accommodations,
  destinations,
  experiences,
} from "@/lib/content/registry";

/**
 * Builds a list of DiscoverItem cards for the given destination by reading from
 * the content registry. Pulls places (placesMap), hotels (entityList kind=accommodation)
 * and experiences (entityList kind=experience), then round-robin interleaves them so
 * consecutive items have different ratios. Used by the landing-page hero modal AND
 * the post-submission "merci" inspirations grid.
 */
export function deriveDiscoverItems(destinationSlug: string): DiscoverItem[] {
  const destination = destinations[destinationSlug];
  if (!destination) return [];

  const funnelHref = `/landing/${destinationSlug}/contact`;
  const funnelCta = { label: "Créez votre voyage", href: funnelHref };

  const places: DiscoverItem[] = [];
  const hotels: DiscoverItem[] = [];
  const exps: DiscoverItem[] = [];

  const placesSection = destination.sections.find(
    (s) => s.type === "placesMap",
  );
  if (placesSection && placesSection.type === "placesMap") {
    for (const place of placesSection.places) {
      places.push({
        id: `place-${place.title}`,
        category: "ile",
        eyebrow: "DESTINATION",
        title: place.title,
        description: place.description,
        image: place.image,
        imageRatio: "3x4",
      });
    }
  }

  const hotelSection = destination.sections.find(
    (s) => s.type === "entityList" && s.kind === "accommodation",
  );
  if (hotelSection && hotelSection.type === "entityList") {
    for (const slug of hotelSection.slugs) {
      const acc = accommodations[slug];
      if (!acc?.heroImage) continue;
      hotels.push({
        id: `hotel-${slug}`,
        category: "hotel",
        eyebrow: "HOTELS",
        title: acc.name,
        description: typeof acc.blurb === "string" ? acc.blurb : "",
        image: acc.heroImage,
        imageRatio: "1x1",
        cta: funnelCta,
      });
    }
  }

  const expSection = destination.sections.find(
    (s) => s.type === "entityList" && s.kind === "experience",
  );
  if (expSection && expSection.type === "entityList") {
    for (const slug of expSection.slugs) {
      const exp = experiences[slug];
      if (!exp?.heroImage) continue;
      exps.push({
        id: `exp-${slug}`,
        category: "experience",
        eyebrow: "ACTIVITÉS",
        title: exp.name,
        description: typeof exp.blurb === "string" ? exp.blurb : "",
        image: exp.heroImage,
        imageRatio: "16x9",
        cta: funnelCta,
      });
    }
  }

  // Round-robin interleave so consecutive items have different ratios.
  // First 3 positions become [3x4, 1x1, 16x9] — one per column on desktop.
  const buckets = [places, hotels, exps];
  const interleaved: DiscoverItem[] = [];
  let cursor = 0;
  while (buckets.some((b) => cursor < b.length)) {
    for (const b of buckets) {
      if (cursor < b.length) interleaved.push(b[cursor]);
    }
    cursor++;
  }
  return interleaved;
}
