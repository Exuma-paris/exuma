import type { ReactNode } from "react";
import {
  accommodations,
  allTagged,
  collaborateurs,
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
  Collaborateur,
  Destination,
  Experience,
  Section,
  Service,
  Subtheme,
} from "./types";

/**
 * The FAQ section as authored in a destination's `sections[]`.
 * Single source of truth — pages that need an FAQ for a given destination
 * (the destination page itself, the landing page, the contact-merci page, etc.)
 * should ALL pull it from here so they never drift.
 */
export type DestinationFaqSection = Extract<Section, { type: "faq" }>;

export function getDestinationFaq(
  destinationSlug: string,
): DestinationFaqSection | undefined {
  const destination = destinations[destinationSlug];
  if (!destination) return undefined;
  return destination.sections.find(
    (s): s is DestinationFaqSection => s.type === "faq",
  );
}

/**
 * The collaborateur tagged as the destination's specialist via its
 * `specialistSpotlight` section. The relationship lives on the DESTINATION
 * (not on the collaborateur) — a single collaborateur can be the specialist
 * for many destinations because each destination independently picks them.
 *
 * Returns undefined if the destination doesn't have a spotlight section or
 * if the referenced collaborateur slug isn't registered.
 */
export function getDestinationSpecialist(
  destinationSlug: string,
): Collaborateur | undefined {
  const destination = destinations[destinationSlug];
  if (!destination) return undefined;
  const spotlight = destination.sections.find(
    (s) => s.type === "specialistSpotlight",
  );
  if (!spotlight || spotlight.type !== "specialistSpotlight") return undefined;
  return collaborateurs[spotlight.specialist.collaborateurSlug];
}

export function getDestinationsByContinent(
  continentSlug: string,
): Destination[] {
  return Object.values(destinations).filter(
    (d) => d.continentSlug === continentSlug,
  );
}

export type DestinationCountryGroup = {
  country: string;
  /**
   * The destination representing the country itself (`placeKind: "country"`),
   * if one exists. In the menu this is the deployable Pays header and links to
   * its own page; otherwise the header is just a label that expands its
   * children.
   */
  countryDestination?: Destination;
  /**
   * Region/city destinations nested under this country (everything that is not
   * the country-level page). Hidden in the menu until the Pays row is expanded.
   */
  children: Destination[];
};

const UNKNOWN_COUNTRY = "Autres";

/** Every destination in a group, country-level page first — used by flat views
 * (search browse) that should list the whole tree without collapsing it. */
export function flattenCountryGroup(g: DestinationCountryGroup): Destination[] {
  return g.countryDestination ? [g.countryDestination, ...g.children] : g.children;
}

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
    .map(([country, items]) => {
      const countryDestination = items.find((d) => d.placeKind === "country");
      const children = items
        .filter((d) => d !== countryDestination)
        .sort((a, b) => a.name.localeCompare(b.name));
      return { country, countryDestination, children };
    })
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
  return Object.values(accommodations).filter((a) =>
    a.destinationSlugs?.includes(destinationSlug),
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

/**
 * Themes shaped for a `featureCards` grid, with the hero image of each theme
 * page as the card visual. Used by the home page so the thematic grid always
 * mirrors the registry instead of hardcoding a list that drifts.
 */
export function getThemeCards(): {
  title: string;
  description: ReactNode;
  image: { src: string; alt: string };
  link: { label: string; href: string };
}[] {
  return Object.values(themes).flatMap((theme) => {
    const hero = theme.sections.find((s) => s.type === "hero");
    const image = hero?.images?.[0];
    if (!image) return [];
    return [
      {
        title: theme.name,
        description: theme.blurb,
        image,
        link: { label: "Découvrir", href: `/themes/${theme.slug}` },
      },
    ];
  });
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
