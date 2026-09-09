import { continents, destinations } from "@/lib/content/registry";
import type { DestinationIndexEntry } from "@/lib/contact/types";

/**
 * Names and slugs only — enough for the free-text field to recognise a place,
 * without shipping any page content to the browser. See DestinationQuestion.
 *
 * Keywords make good aliases when they are place names ("polynesie" on the
 * Polynésie entry) and terrible ones when they are themes: "safari" sits on a
 * dozen destinations, so using it would answer "un safari en Afrique du Sud"
 * with Botswana and Tanzanie — visibly not reading what was just written.
 * Keeping only keywords unique to one entry separates the two cases without
 * anyone having to curate a list.
 */
/**
 * Turns the pre-written French genitive into a nominative with its article:
 * "du Japon" gives "le Japon", "de l'Italie" gives "l'Italie", "de Rome"
 * gives "Rome". French articles cannot be guessed from a name, which is why
 * the genitive is authored by hand on every destination — deriving from it
 * keeps that single source of truth instead of asking for a second field.
 */
function subjectFromGenitive(genitive: string, fallback: string): string {
  const g = genitive.trim();
  if (g.startsWith("de l'")) return `l'${g.slice(5)}`;
  if (g.startsWith("de la ")) return `la ${g.slice(6)}`;
  if (g.startsWith("des ")) return `les ${g.slice(4)}`;
  if (g.startsWith("du ")) return `le ${g.slice(3)}`;
  if (g.startsWith("de ")) return g.slice(3);
  return fallback;
}

/** The six continents, written once: they carry no genitive of their own. */
const CONTINENT_SUBJECTS: Record<string, string> = {
  europe: "l'Europe",
  afrique: "l'Afrique",
  asie: "l'Asie",
  ameriques: "les Amériques",
  "proche-orient": "le Proche et Moyen-Orient",
  "iles-oceanie": "les îles et l'Océanie",
};

export function buildDestinationIndex(): DestinationIndexEntry[] {
  const entries = [
    ...Object.values(destinations).map((d) => ({
      kind: "destination" as const,
      slug: d.slug,
      name: d.name,
      subject: subjectFromGenitive(d.genitive, d.name),
      keywords: d.keywords ?? [],
    })),
    ...Object.values(continents).map((c) => ({
      kind: "continent" as const,
      slug: c.slug,
      name: c.name,
      subject: CONTINENT_SUBJECTS[c.slug] ?? c.name,
      keywords: c.keywords ?? [],
    })),
  ];

  const uses = new Map<string, number>();
  for (const e of entries) {
    for (const k of new Set(e.keywords.map((k) => k.toLowerCase()))) {
      uses.set(k, (uses.get(k) ?? 0) + 1);
    }
  }

  return entries.map(({ kind, slug, name, subject, keywords }) => ({
    kind,
    slug,
    name,
    subject,
    aliases: keywords.filter((k) => uses.get(k.toLowerCase()) === 1),
  }));
}
