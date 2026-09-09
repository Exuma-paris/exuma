import type { ReactNode } from "react";
import type { ImageRef, Section } from "@/lib/destination/types";
import type { Question } from "@/lib/contact/types";

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
  /**
   * Forme génitive du nom, utilisée dans les titres construits par le gabarit :
   * « Toutes les destinations {genitive} ». Écrite à la main parce qu'aucune
   * règle ne couvre « d'Afrique », « des Amériques » et « du Proche-Orient ».
   */
  genitive?: string;
};

export type Destination = EntityBase & {
  /**
   * Image de vignette, utilisée partout où la destination apparaît en carte ou
   * en tuile. Sans elle, c'est la première image du hero qui sert : à ne
   * renseigner que lorsque cette première image tombe mal en liste, par exemple
   * quand deux destinations voisines se ressemblent trop.
   */
  heroImage?: ImageRef;
  country?: string;
  /**
   * Where this destination sits in the Continent > Pays > Villes/Régions tree.
   * Drives the navigation menu nesting (see `getDestinationsByContinentGrouped`
   * and `menu-panel.tsx`):
   *   - "country": the page IS the country node. Shown as the deployable Pays
   *     header inside its continent, and the header links to this page.
   *   - "region" | "city": nested UNDER its `country`, hidden until the Pays
   *     row is expanded.
   * Omitted defaults to a nested leaf (treated like "city") so the destination
   * never appears at the same level as a country. Site search stays flat — every
   * destination is findable regardless of this field.
   */
  placeKind?: "country" | "region" | "city";
  continentSlug?: string;
  themeSlugs?: string[];
  /**
   * Rattachement aux sous-familles d'expérience (voir `src/content/subthemes/`).
   * C'est le SEUL endroit où le rattachement se décide, au moment de la création
   * de la destination. La famille (le thème) s'en déduit : inutile de remplir
   * `themeSlugs` en plus.
   *
   * Règles, arrêtées avec l'équipe éditoriale :
   *   - trois sous-familles au maximum, ce qui garantit trois familles au plus ;
   *   - la PREMIÈRE est la sous-famille DOMINANTE : ce que la destination évoque
   *     en premier, la porte d'entrée qu'on garderait s'il n'en restait qu'une.
   *     Elle donne droit à la carte dans son bloc ; les rattachements
   *     secondaires passent derrière, et en liens texte s'il n'y a plus de
   *     place. C'est ce qui empêche une destination d'être en vitrine sur un
   *     thème qui n'est pas le sien ;
   *   - on ne rattache pas une sous-famille que la page ne porte pas. S'il
   *     manque la matière, on ajoute d'abord l'expérience qui la justifie, et
   *     le rattachement vient ensuite ;
   *   - la liste est ORDONNÉE. Quand deux sous-familles appartiennent à la même
   *     famille (Maldives : plongée et snorkeling), la première l'emporte pour
   *     l'affichage et la destination n'apparaît qu'une fois sur la page. La
   *     seconde reste vraie et continue de servir la recherche.
   */
  subthemeSlugs?: string[];
  accommodationSlugs?: string[];
  metaTitle?: string;
  metaDescription?: string;
  /**
   * Pre-formatted French genitive of the destination name, used wherever the
   * site needs to write "<something> <genitive>" — most commonly:
   *   - "Spécialiste de la Polynésie" (post-form thank-you)
   *   - "Voyage en/au/à <destination>" (page titles)
   * Examples per article:
   *   - feminine + consonant: "de la Polynésie", "de la Corse"
   *   - feminine + vowel:    "de l'Italie"
   *   - masculine:           "du Maroc", "du Brésil"
   *   - city / no article:   "de Paris", "de Marrakech", "de Rome"
   * The destination author writes this once because French grammar can't be
   * derived from the name alone.
   */
  genitive: string;
  /**
   * Question list for the destination's contact / quotation funnel. Optional —
   * destinations without a landing flow simply omit it (the route at
   * `/landing/<slug>/contact` won't render). Each entry is a typed `Question`
   * (`boolean`, `single`, `multi`, `calendar`, or `contact`); see
   * `src/lib/contact/types.ts` for the shape per type.
   */
  contactQuestions?: Question[];
  /**
   * Marketing landing-page content for `/landing/<slug>`. Optional — only set
   * for destinations with a paid-traffic / brand-led acquisition funnel.
   * When present, the dynamic route at `/landing/[slug]` pre-renders this
   * destination at build time via `generateStaticParams`. When omitted, the
   * route returns 404. Pairs with `contactQuestions` for the full funnel.
   */
  landing?: DestinationLanding;
};

export type DestinationLanding = {
  /** Hero eyebrow above the H1 (e.g. "Voyage de luxe en Polynésie"). */
  heroEyebrow: string;
  /** Hero H1 — the brand pitch line (e.g. "Vivez l'inaccessible"). */
  heroHeading: string;
  /** Hero paragraph below the H1. */
  heroDescription: string;
  /** Hero carousel slides (2-8 atmospheric images of the destination). */
  slides: { image: ImageRef }[];
  /** Optional rating block under the brand card. */
  rating?: { score: number; label: string };
  /** Floating "discover" pill label (default "Découvrir <destination>"). */
  floatingCtaLabel?: string;
  /** SEO `<title>` + `<meta description>` for the landing page. */
  metaTitle: string;
  metaDescription: string;
};

export type Theme = EntityBase & {
  intent?: string;
  subthemeSlugs?: string[];
  /**
   * Titre et description de la page famille. Sans eux la page hérite du titre
   * générique du site, et les huit familles se présentent à Google sous le
   * même intitulé. Le titre porte le terme de recherche de la famille, pas son
   * nom de marque : on cherche « voyage safari », pas « Safaris, trek &
   * aventure ».
   */
  metaTitle?: string;
  metaDescription?: string;
  /**
   * Square derivative of the hero image, for the thematic cards on the home
   * page. The theme page itself uses the 16:9 master from `sections`; the card
   * crops to 1:1, so it needs the variant `crop-images.py` anchors on the
   * subject rather than a blind centre crop. Falls back to the master when
   * absent.
   */
  cardImage?: ImageRef;
};

/**
 * Sous-famille d'expérience. Paramétrage INTERNE : elle n'a pas de page à elle
 * et n'est jamais présentée au visiteur comme un filtre cliquable. Elle sert à
 * découper la page de sa famille en blocs, chacun avec son titre, son
 * paragraphe et ses destinations.
 *
 * La liste est fermée : on n'en crée pas une nouvelle sans arbitrage éditorial.
 */
export type Subtheme = EntityBase & {
  themeSlug: string;
  experienceSlugs?: string[];
  /**
   * Titre rédigé du bloc (le H2 de la page famille). Le `name` sert de
   * sur-titre. Sans lui, le bloc reprend le `name` en titre, ce qui donne un
   * H2 plat et sans intérêt pour la recherche.
   */
  blockHeading?: string;
  /**
   * Le brief du bandeau : ce que l'image doit montrer. Écrit une fois ici pour
   * que la production ne reparte pas de zéro à chaque fois et que deux
   * bandeaux faits à six mois d'écart se ressemblent. Pendant du champ
   * `intent` des thèmes.
   */
  bandIntent?: string;
  /**
   * Bande pleine largeur posée avant le bloc, qui sert de séparateur de
   * chapitre. Sans elle, le bloc se distingue seulement par son fond alterné.
   *
   * Elle se produit POUR la sous-famille et vit à `/subtheme/<slug>/band.png`.
   * On n'emprunte pas le `full-image` d'une fiche destination : ce sont des
   * images de destination, elles montrent un pays et pas une pratique. Un
   * safari marin ne s'illustre pas avec un 4x4 dans la savane, un bloc musées
   * ne s'illustre pas avec un canal d'Amsterdam. En cas de doute, pas d'image :
   * un bandeau hors sujet coûte plus cher qu'un bloc sans bandeau.
   */
  heroImage?: ImageRef;
  /**
   * Ligne courte posée entre les grands encarts et la rangée de vignettes,
   * pour annoncer la suite. Elle parle de la sous-famille, jamais des
   * destinations qui s'y trouvent : la liste bouge à chaque rattachement, la
   * phrase doit rester vraie sans être relue.
   */
  thumbnailsIntro?: string;
  /**
   * Les destinations mises en avant en cartes, dans l'ordre voulu, six au plus.
   * Doivent toutes porter cette sous-famille dans leur `subthemeSlugs` : c'est
   * la fiche destination qui fait foi pour l'appartenance, cette liste ne règle
   * que l'ordre et la mise en avant. Les destinations rattachées mais absentes
   * d'ici sortent en liens texte sous les cartes.
   */
  featuredDestinationSlugs?: string[];
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
  /** A hotel typically sits in one destination but may serve more than one
   * (border properties, hotel chains, multi-island lodges). Mirrors
   * `Experience.destinationSlugs` so both entities share one mental model. */
  destinationSlugs?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

export type Collaborateur = EntityBase & {
  role?: string;
  /**
   * Verbatim attribué à la personne. Il vit sur sa fiche et non dans la page
   * qui l'affiche, pour qu'un changement de citation n'ait qu'un seul point
   * d'entrée. À faire valider par l'intéressé avant publication : on ne prête
   * pas de propos à quelqu'un sans son accord.
   */
  quote?: string;
  /** Full-shot portrait (250×300, person sitting in chair). */
  image: ImageRef;
  /** Square zoom on the face (300×300). Used for header avatars, chips, etc. */
  profileImage?: ImageRef;
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
