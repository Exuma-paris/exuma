import type { Section } from "@/lib/destination/types";

/**
 * Rythme des fonds de section.
 *
 * Les fonds ne se choisissent plus bloc par bloc dans les fichiers de contenu :
 * chaque gabarit fait passer ses sections par `applyBackgroundRhythm`, qui
 * attribue les tons dans un ordre fixe. Deux pages bâties sur le même gabarit
 * ont donc toujours la même alternance, et deux blocs voisins ne partagent
 * jamais le même fond.
 *
 * Trois tons clairs tournent dans cet ordre (crème, blanc, sable), plutôt
 * qu'un aller-retour à deux couleurs. Le gris foncé est réservé aux types
 * que le gabarit désigne via `dark`, et seulement s'ils savent s'afficher en
 * sombre. Les sections d'image pleine (hero, image pleine largeur) gardent
 * leur rendu et ne comptent pas dans le cycle.
 */

export const TONE_CLASS = {
  cream: "bg-background-subtle",
  white: "bg-white",
  sand: "bg-background-soft",
} as const;

export type LightTone = keyof typeof TONE_CLASS;

const CYCLE: LightTone[] = ["cream", "white", "sand"];

const IMAGE_TYPES = new Set<Section["type"]>([
  "hero",
  "heroLanding",
  "heroImageBackground",
  "fullImage",
]);

/** Types dont le composant sait passer en sombre via `theme: "dark"`. */
const DARK_CAPABLE = new Set<Section["type"]>(["infoGrid", "textImagesSplit"]);

export type BackgroundRhythmOptions = {
  /** Types rendus en gris foncé sur ce gabarit (s'ils le supportent). */
  dark?: Section["type"][];
  /** Ton du premier bloc clair. Par défaut, crème. */
  start?: LightTone;
};

export function createBackgroundRhythm(options: BackgroundRhythmOptions = {}) {
  const dark = new Set(options.dark ?? []);
  let index = CYCLE.indexOf(options.start ?? "cream");

  /** Classe du prochain fond clair, pour un bloc qui n'est pas une section. */
  function next(): string {
    const tone = CYCLE[index % CYCLE.length];
    index += 1;
    return TONE_CLASS[tone];
  }

  function apply<T extends Section>(section: T): T {
    if (IMAGE_TYPES.has(section.type)) return section;

    if (dark.has(section.type) && DARK_CAPABLE.has(section.type)) {
      return { ...section, theme: "dark", background: undefined } as T;
    }

    const themed = DARK_CAPABLE.has(section.type)
      ? { ...section, theme: "light" }
      : section;
    return { ...themed, background: next() } as T;
  }

  return { next, apply };
}

export function applyBackgroundRhythm<T extends Section>(
  sections: T[],
  options: BackgroundRhythmOptions = {},
): T[] {
  const rhythm = createBackgroundRhythm(options);
  return sections.map((section) => rhythm.apply(section));
}
