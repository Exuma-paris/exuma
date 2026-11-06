/**
 * Événements `click_*` déduits de la cible d'un lien, quand l'élément ne porte
 * pas d'attribut `data-event-button`. C'est ce qui permet de couvrir les
 * centaines de « Créer votre voyage » écrits dans le contenu sans toucher aux
 * fiches : le lien dit déjà où il mène.
 *
 * Même vocabulaire que l'ancien tunnel Webflow : un événement de rang
 * (primary / secondary / tertiary) doublé d'un événement métier.
 */
export function ctaEventsFromHref(href: string | null | undefined): string | null {
  if (!href) return null;
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return "click_tertiary, click_contact";
  }
  const path = href.replace(/^https?:\/\/[^/]+/, "");
  if (/^\/votre-projet(\?|#|$)/.test(path)) return "click_primary, click_create";
  if (/^\/landing\/[^/]+\/contact(\?|#|$)/.test(path)) {
    return "click_primary, click_create";
  }
  if (/^\/professionnels\/(contact|engagement|groupes)(\?|#|$)/.test(path)) {
    return "click_primary, click_create";
  }
  if (/^\/(contact|nous-ecrire)(\?|#|$)/.test(path)) {
    return "click_tertiary, click_contact";
  }
  return null;
}

const ORDINALS = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
];

/**
 * Nom de l'écran `step` (à partir de 1) d'un formulaire de `total` écrans,
 * dans la convention du Webflow : le premier écran de questions est `second`
 * et l'écran des coordonnées est toujours `last`. `first` est réservé à la
 * page qui précède le formulaire (la landing), voir `FormViewFirst`.
 */
export function formStepOrdinal(step: number, total: number): string {
  if (step >= total) return "last";
  return ORDINALS[step] ?? `step${step + 1}`;
}
