import type {
  DestinationIndexEntry,
  DestinationAnswer,
} from "@/lib/contact/types";

const strip = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Finds registry entries named inside free-form text. Accent- and case-blind,
 * so "polynesie", "Polynésie" and "POLYNESIE FRANCAISE" all land.
 *
 * Whole-word matching only: without it "Oman" fires on "romantique" and
 * "Rome" on "Rome... enfin plutôt l'Italie" would be fine but "Bali" would
 * match "balinais" in a sentence about something else.
 */
export function recognizeDestinations(
  text: string,
  index: DestinationIndexEntry[],
): DestinationAnswer["matches"] {
  const haystack = strip(text);
  if (!haystack) return [];

  const found: DestinationAnswer["matches"] = [];
  for (const entry of index) {
    // The slug is always a place name and always unique, so it catches the
    // short form of a longer title: "polynesie" for "Polynésie française".
    const needles = [
      entry.name,
      entry.slug.replace(/-/g, " "),
      ...(entry.aliases ?? []),
    ]
      .map(strip)
      .filter((n) => n.length >= 3);

    const hit = needles.some((needle) =>
      new RegExp(`(^|\\s)${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|\\s)`).test(
        haystack,
      ),
    );
    if (hit)
      found.push({
        kind: entry.kind,
        slug: entry.slug,
        name: entry.name,
        subject: entry.subject,
      });
  }

  // Longest name first: "Afrique du Sud" should outrank "Afrique".
  return found.sort((a, b) => b.name.length - a.name.length).slice(0, 4);
}
