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

/** Au-delà, la carte devient un pavé de texte. */
const CARD_DESCRIPTION_MAX = 240;
/** En dessous, la carte paraît vide à côté de son image. */
const CARD_DESCRIPTION_MIN = 90;

/**
 * Le texte affiché sur une carte destination. Le `blurb` d'une destination est
 * une énumération de lieux (« Abu Dhabi, Sharjah, le Rub al-Khali, Dubaï »),
 * juste ce qu'il faut sous une entrée de menu, mais sec sur une grande carte.
 * La description du hero, elle, est déjà écrite pour donner envie : on en garde
 * les premières phrases entières, sans jamais couper au milieu de l'une d'elles.
 */
export function getDestinationCardDescription(
  destination: Destination,
): ReactNode {
  const hero = destination.sections.find((s) => s.type === "hero");
  const description = hero?.description;
  if (!description) return destination.blurb ?? "";

  const firstPhrases = takeSentences(description);
  if (firstPhrases.length >= CARD_DESCRIPTION_MIN) return firstPhrases;

  // Quelques heros tiennent en une phrase courte, qui laisse la carte à moitié
  // vide. On enchaîne alors sur le premier paragraphe de la page, écrit dans
  // la même voix, plutôt que de retomber sur l'énumération du `blurb`.
  const intro = destination.sections.find((s) => s.type === "textColumns");
  const continuation = intro?.columns?.[0];
  if (!continuation) return firstPhrases || destination.blurb || "";
  return takeSentences(`${description} ${continuation}`);
}

/**
 * Les premières phrases entières d'un texte, sans jamais couper au milieu.
 * Le plafond cède devant le plancher : tant que la carte serait trop courte,
 * on prend la phrase suivante même si elle fait dépasser la longueur visée.
 */
function takeSentences(text: string): string {
  const sentences = text.match(/[^.]+\.(?:\s|$)/g) ?? [text];
  let kept = "";
  for (const sentence of sentences) {
    const next = (kept + sentence).trim();
    if (
      kept &&
      next.length > CARD_DESCRIPTION_MAX &&
      kept.length >= CARD_DESCRIPTION_MIN
    ) {
      break;
    }
    kept += sentence;
  }
  return kept.trim();
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

/** Un bloc ne sort que s'il porte au moins ce nombre de destinations. */
const MIN_DESTINATIONS_PER_BLOCK = 3;
/**
 * Les sous-familles d'une destination qui comptent pour l'affichage : une seule
 * par famille, la première de la liste ordonnée. Les Maldives portent
 * « plongée » et « snorkeling », les deux sont vraies, mais la destination
 * n'apparaît qu'une fois sur la page Plongée & snorkeling.
 */
function displayedSubthemeSlugs(destination: Destination): string[] {
  const seenThemes = new Set<string>();
  const kept: string[] = [];
  for (const slug of destination.subthemeSlugs ?? []) {
    const subtheme = subthemes[slug];
    if (!subtheme || seenThemes.has(subtheme.themeSlug)) continue;
    seenThemes.add(subtheme.themeSlug);
    kept.push(slug);
  }
  return kept;
}

export function getDestinationsBySubtheme(subthemeSlug: string): Destination[] {
  return Object.values(destinations).filter((d) =>
    displayedSubthemeSlugs(d).includes(subthemeSlug),
  );
}

/**
 * La sous-famille dominante d'une destination : la première de sa liste. C'est
 * ce que la destination évoque en premier, la porte d'entrée qu'on garderait
 * si on ne devait en garder qu'une. Elle donne droit à la carte : dans un bloc,
 * les destinations dont c'est la sous-famille dominante passent devant celles
 * qui n'y sont rattachées qu'en second ou en troisième. Sans cette règle, une
 * destination se retrouve en vitrine sur un thème qui n'est pas le sien.
 */
export function isDominantSubtheme(
  destination: Destination,
  subthemeSlug: string,
): boolean {
  return destination.subthemeSlugs?.[0] === subthemeSlug;
}

/**
 * Les sections d'une page famille, composées depuis les rattachements portés
 * par les fiches destination. Une sous-famille donne une bande image en
 * séparateur, un bloc de cartes, et une ligne de liens pour le reste. Rien
 * n'est listé en dur : une destination nouvellement rattachée apparaît sans
 * qu'on touche à la page.
 */
export function getThemeBlocks(themeSlug: string): Section[] {
  const sections: Section[] = [];
  let blockIndex = 0;

  for (const subtheme of getSubthemesByTheme(themeSlug)) {
    const members = getDestinationsBySubtheme(subtheme.slug);
    if (members.length < MIN_DESTINATIONS_PER_BLOCK) continue;

    const featured = (subtheme.featuredDestinationSlugs ?? []).filter((slug) =>
      members.some((d) => d.slug === slug),
    );
    // Le reste passe après la sélection éditoriale, dominantes d'abord.
    const rest = members
      .filter((d) => !featured.includes(d.slug))
      .sort((a, b) => {
        const byDominance =
          Number(isDominantSubtheme(b, subtheme.slug)) -
          Number(isDominantSubtheme(a, subtheme.slug));
        return byDominance !== 0 ? byDominance : a.name.localeCompare(b.name);
      })
      .map((d) => d.slug);
    const ordered = [...featured, ...rest];
    const background = blockIndex % 2 === 0 ? "bg-white" : "bg-background-soft";

    // Le chapô de la page sépare le hero du premier bloc, donc le bandeau vaut
    // pour tous les blocs sans faire doublon avec le hero.
    if (subtheme.heroImage) {
      sections.push({ type: "fullImage", image: subtheme.heroImage });
    }
    sections.push({
      type: "entityList",
      kind: "destination",
      eyebrow: subtheme.name,
      heading: subtheme.blockHeading ?? subtheme.name,
      description: typeof subtheme.blurb === "string" ? subtheme.blurb : undefined,
      layout: "spotlight",
      thumbnailsIntro: subtheme.thumbnailsIntro,
      slugs: ordered,
      background,
    });
    blockIndex += 1;
  }

  return sections;
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
    // The card is square; prefer the 1:1 derivative when the theme has one.
    const image = theme.cardImage ?? hero?.images?.[0];
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

/**
 * The five service poles shaped for a `bento` grid, with each service page's
 * hero image as the card visual. Registry-driven so the home always states the
 * offer exactly as the service pages do.
 */
export function getServiceCategoryCards(): {
  title: string;
  description: string;
  image: { src: string; alt: string };
  href: string;
}[] {
  return Object.values(serviceCategories).flatMap((category) => {
    const hero = category.sections.find((s) => s.type === "hero");
    const image = hero?.images?.[0];
    // Blurbs are authored as plain strings; anything richer has no place on a
    // bento card, so skip rather than render an empty tile.
    if (!image || typeof category.blurb !== "string") return [];
    return [
      {
        title: category.name,
        description: category.blurb,
        image,
        href: `/services/${category.slug}`,
      },
    ];
  });
}

/**
 * Travel designers mis en avant, dans l'ordre donné, prêts pour la section
 * `testimonials`. Seuls ceux qui portent un verbatim sont retenus : afficher
 * une carte de citation vide n'aurait pas de sens.
 */
export function getTravelDesignerTestimonials(slugs: string[]): {
  quote: string;
  image: { src: string; alt: string };
  name: string;
  role?: string;
}[] {
  return slugs.flatMap((slug) => {
    const c = collaborateurs[slug];
    if (!c?.quote) return [];
    return [{ quote: c.quote, image: c.image, name: c.name, role: c.role }];
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
