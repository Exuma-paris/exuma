import { buildDestinationIndex } from "@/lib/contact/destination-index";
import type { AnswersMap } from "@/lib/contact/types";

/** Le tunnel « Créer votre voyage », partout sur le site. */
export const PROJECT_PATH = "/votre-projet";

/**
 * Le même lien, mais qui dit d'où l'on vient. Le formulaire pré-remplit alors
 * sa première question : quelqu'un qui clique depuis la page Japon n'a pas à
 * réécrire « Japon ». Rien n'est verrouillé, le champ reste modifiable.
 */
export function projectHref(slug?: string | null): string {
  return slug
    ? `${PROJECT_PATH}?destination=${encodeURIComponent(slug)}`
    : PROJECT_PATH;
}

/** Un élément React, qu'il ne faut surtout pas parcourir comme une donnée. */
function isReactNode(value: object): boolean {
  return "$$typeof" in value;
}

/**
 * Réécrit tous les liens `/votre-projet` d'un arbre de sections pour qu'ils
 * portent la destination lue. Fait ici plutôt que dans les 84 fiches : le lien
 * y est écrit une demi-douzaine de fois par page, et le contenu n'a pas à
 * connaître le fonctionnement du formulaire.
 */
export function withDestinationContext<T>(value: T, slug: string): T {
  if (Array.isArray(value)) {
    return value.map((item) => withDestinationContext(item, slug)) as T;
  }
  if (typeof value === "object" && value !== null && !isReactNode(value)) {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      out[key] =
        key === "href" && item === PROJECT_PATH
          ? projectHref(slug)
          : withDestinationContext(item, slug);
    }
    return out as T;
  }
  return value;
}

/**
 * La réponse « destination » telle qu'elle serait saisie à la main, pour une
 * fiche connue du registre. Renvoie `undefined` si le slug ne correspond à
 * rien : mieux vaut un formulaire vide qu'un formulaire qui invente.
 */
export function prefilledDestinationAnswers(
  slug: string | undefined,
): AnswersMap | undefined {
  if (!slug) return undefined;
  const entry = buildDestinationIndex().find((e) => e.slug === slug);
  if (!entry) return undefined;

  return {
    destination: {
      type: "destination",
      value: {
        text: entry.name,
        matches: [
          {
            kind: entry.kind,
            slug: entry.slug,
            name: entry.name,
            subject: entry.subject,
            highlights: entry.highlights,
          },
        ],
      },
    },
  };
}
