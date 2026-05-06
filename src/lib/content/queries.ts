import {
  accommodations,
  allTagged,
  continents,
  destinations,
  experiences,
  serviceCategories,
  services,
  subthemes,
  themes,
} from "./registry";
import type {
  Accommodation,
  AnyTagged,
  Destination,
  Experience,
  Service,
  Subtheme,
} from "./types";

export function getDestinationsByContinent(
  continentSlug: string,
): Destination[] {
  return Object.values(destinations).filter(
    (d) => d.continentSlug === continentSlug,
  );
}

export type DestinationCountryGroup = {
  country: string;
  destinations: Destination[];
};

const UNKNOWN_COUNTRY = "Autres";

export function getDestinationsByContinentGrouped(
  continentSlug: string,
  options: { excludeOld?: boolean } = {},
): DestinationCountryGroup[] {
  const excludeOld = options.excludeOld ?? true;
  const list = Object.values(destinations).filter(
    (d) =>
      d.continentSlug === continentSlug &&
      (!excludeOld || !d.slug.endsWith("-old")),
  );

  const map = new Map<string, Destination[]>();
  for (const d of list) {
    const key = d.country ?? UNKNOWN_COUNTRY;
    const bucket = map.get(key) ?? [];
    bucket.push(d);
    map.set(key, bucket);
  }

  return [...map.entries()]
    .map(([country, items]) => ({
      country,
      destinations: items.sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.country.localeCompare(b.country));
}

export function getExperiencesByTheme(themeSlug: string): Experience[] {
  return Object.values(experiences).filter((e) =>
    e.themeSlugs?.includes(themeSlug),
  );
}

export function getExperiencesByDestination(
  destinationSlug: string,
): Experience[] {
  return Object.values(experiences).filter((e) =>
    e.destinationSlugs?.includes(destinationSlug),
  );
}

export function getSubthemesByTheme(themeSlug: string): Subtheme[] {
  return Object.values(subthemes).filter((s) => s.themeSlug === themeSlug);
}

export function getAccommodationsByDestination(
  destinationSlug: string,
): Accommodation[] {
  return Object.values(accommodations).filter(
    (a) => a.destinationSlug === destinationSlug,
  );
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return Object.values(services).filter((s) => s.categorySlug === categorySlug);
}

export function getRelatedDestinations(
  destinationSlug: string,
  limit = 3,
): Destination[] {
  const target = destinations[destinationSlug];
  if (!target?.continentSlug) return [];
  return Object.values(destinations)
    .filter(
      (d) =>
        d.slug !== destinationSlug && d.continentSlug === target.continentSlug,
    )
    .slice(0, limit);
}

function matches(haystack: unknown, needle: string): boolean {
  if (typeof haystack !== "string" || !haystack) return false;
  return haystack.toLowerCase().includes(needle);
}

export function searchContent(query: string, limit = 20): AnyTagged[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allTagged
    .filter(({ entity }) => {
      if (matches(entity.name, q)) return true;
      if (matches(entity.blurb, q)) return true;
      if (entity.keywords?.some((k) => k.toLowerCase().includes(q))) return true;
      if (matches(entity.slug, q)) return true;
      return false;
    })
    .slice(0, limit);
}

export {
  accommodations,
  allTagged,
  continents,
  destinations,
  experiences,
  serviceCategories,
  services,
  subthemes,
  themes,
};
