import type { ReactNode } from "react";
import { allTagged, continents } from "@/lib/content/registry";
import {
  getDestinationsByContinentGrouped,
  type DestinationCountryGroup,
} from "@/lib/content/queries";
import { getMenuGroups } from "@/lib/content/menu-groups";
import type { MenuGroup } from "@/lib/content/menu-links";
import { entityRoute, type EntityKind } from "@/lib/content/types";

/**
 * Ce dont le menu et la recherche ont besoin, et rien de plus : noms, liens,
 * accroches. Calculé côté serveur et passé en props à l'en-tête.
 *
 * Avant, le menu et la recherche importaient directement le registre : le
 * navigateur recevait le contenu complet de toutes les pages (environ 700 Ko
 * compressés) sur chaque page du site. Ne jamais réimporter le registre ou
 * `queries` dans un composant client : passer par cet index.
 */

export type NavDestination = { slug: string; name: string };

export type NavCountryGroup = {
  country: string;
  countryDestination?: NavDestination;
  children: NavDestination[];
};

export type NavContinent = {
  slug: string;
  name: string;
  countryGroups: NavCountryGroup[];
};

export type SearchEntry = {
  kind: EntityKind;
  slug: string;
  name: string;
  blurb?: ReactNode;
  keywords?: string[];
  href: string;
};

export type NavIndex = {
  groups: MenuGroup[];
  continents: NavContinent[];
  search: SearchEntry[];
};

/** Familles proposées dans les résultats de recherche (voir `site-search`). */
export const SEARCH_KINDS: EntityKind[] = [
  "destination",
  "continent",
  "experience",
  "accommodation",
  "cruiseLine",
  "serviceCategory",
  "service",
];

const slim = (d: { slug: string; name: string }): NavDestination => ({
  slug: d.slug,
  name: d.name,
});

function slimGroup(g: DestinationCountryGroup): NavCountryGroup {
  return {
    country: g.country,
    countryDestination: g.countryDestination
      ? slim(g.countryDestination)
      : undefined,
    children: g.children.map(slim),
  };
}

let cached: NavIndex | null = null;

export function getNavIndex(): NavIndex {
  if (cached) return cached;
  cached = {
    groups: getMenuGroups(),
    continents: Object.values(continents).map((c) => ({
      slug: c.slug,
      name: c.name,
      countryGroups: getDestinationsByContinentGrouped(c.slug).map(slimGroup),
    })),
    search: allTagged
      .filter((t) => SEARCH_KINDS.includes(t.kind))
      .map(({ kind, entity }) => ({
        kind,
        slug: entity.slug,
        name: entity.name,
        blurb: entity.blurb,
        keywords: entity.keywords,
        href: entityRoute[kind](entity.slug),
      })),
  };
  return cached;
}
