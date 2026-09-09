import { existsSync } from "node:fs";
import { join } from "node:path";
import { continents, destinations } from "@/lib/content/registry";

export type FinderEntry = {
  slug: string;
  name: string;
  continent?: string;
  /** Only set when the file actually exists: 43 des 51 fiches pointent
   * aujourd'hui vers une image qui n'a pas encore été produite. */
  image?: { src: string; alt: string };
  /** Noms alternatifs à faire correspondre (slug, mots-clés propres au lieu). */
  aliases: string[];
};

/**
 * Index léger des destinations pour le champ de recherche.
 *
 * Sans option, il couvre tout le catalogue (page d'accueil). Avec
 * `continentSlug`, il se restreint aux destinations du continent : c'est ce que
 * consomment les pages `/continents/[slug]`.
 *
 * Vit à part de `queries.ts` parce qu'il lit le disque : ce module ne doit être
 * importé que depuis un composant serveur. Le composant client reçoit le
 * résultat en props, ce qui évite d'envoyer le registre entier au navigateur.
 */
export function getDestinationFinderIndex(
  options: { continentSlug?: string } = {},
): FinderEntry[] {
  const publicDir = join(process.cwd(), "public");

  const uses = new Map<string, number>();
  for (const d of Object.values(destinations)) {
    for (const k of new Set((d.keywords ?? []).map((k) => k.toLowerCase()))) {
      uses.set(k, (uses.get(k) ?? 0) + 1);
    }
  }

  return Object.values(destinations)
    .filter(
      (d) =>
        !options.continentSlug || d.continentSlug === options.continentSlug,
    )
    .map((d) => {
      const hero = d.sections.find((s) => s.type === "hero");
      // Même règle que les cartes (`render-section`) : la vignette explicite
      // l'emporte, sinon la première image du hero.
      const declared = d.heroImage ?? hero?.images?.[0];
      const image =
        declared && existsSync(join(publicDir, declared.src))
          ? declared
          : undefined;

      return {
        slug: d.slug,
        name: d.name,
        continent: d.continentSlug ? continents[d.continentSlug]?.name : undefined,
        image,
        // Mêmes règles que la reconnaissance du tunnel : un mot-clé partagé par
        // plusieurs fiches est thématique, pas un nom de lieu.
        aliases: [
          d.slug.replace(/-/g, " "),
          ...(d.keywords ?? []).filter((k) => uses.get(k.toLowerCase()) === 1),
        ],
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));
}
