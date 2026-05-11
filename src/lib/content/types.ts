import type { ReactNode } from "react";
import type { ImageRef, Section } from "@/lib/destination/types";

export type { ImageRef, Section } from "@/lib/destination/types";

export type EntityKind =
  | "continent"
  | "destination"
  | "theme"
  | "subtheme"
  | "experience"
  | "serviceCategory"
  | "service"
  | "accommodation";

type EntityBase = {
  slug: string;
  name: string;
  blurb?: ReactNode;
  keywords?: string[];
  sections: Section[];
};

export type Continent = EntityBase & {
  heroImage?: ImageRef;
  destinationSlugs?: string[];
};

export type Destination = EntityBase & {
  country?: string;
  continentSlug?: string;
  themeSlugs?: string[];
  accommodationSlugs?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

export type Theme = EntityBase & {
  intent?: string;
  subthemeSlugs?: string[];
};

export type Subtheme = EntityBase & {
  themeSlug: string;
  experienceSlugs?: string[];
};

export type Experience = EntityBase & {
  heroImage?: ImageRef;
  destinationSlugs?: string[];
  themeSlugs?: string[];
  subthemeSlugs?: string[];
  collaborateurSlug?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export type ServiceCategory = EntityBase & {
  serviceSlugs?: string[];
};

export type Service = EntityBase & {
  categorySlug: string;
};

export type Accommodation = EntityBase & {
  heroImage?: ImageRef;
  destinationSlug: string;
};

export type Collaborateur = EntityBase & {
  role?: string;
  image: ImageRef;
  destinationSlugs?: string[];
  themeSlugs?: string[];
};

export type EntityByKind = {
  continent: Continent;
  destination: Destination;
  theme: Theme;
  subtheme: Subtheme;
  experience: Experience;
  serviceCategory: ServiceCategory;
  service: Service;
  accommodation: Accommodation;
};

export type Tagged<K extends EntityKind = EntityKind> = {
  kind: K;
  entity: EntityByKind[K];
};

export type AnyTagged = {
  [K in EntityKind]: Tagged<K>;
}[EntityKind];

export const entityRoute: Record<EntityKind, (slug: string) => string> = {
  continent: (s) => `/continents/${s}`,
  destination: (s) => `/destinations/${s}`,
  theme: (s) => `/themes/${s}`,
  subtheme: (s) => `/themes/${s}`,
  experience: (s) => `/experiences/${s}`,
  serviceCategory: (s) => `/services/${s}`,
  service: (s) => `/services/${s}`,
  accommodation: (s) => `/hebergements/${s}`,
};

export function taggedHref(t: AnyTagged): string {
  return entityRoute[t.kind](t.entity.slug);
}
