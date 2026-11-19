/**
 * Corrige l'attribut `sizes` d'une image recadrée (`object-cover`).
 *
 * `sizes` ne décrit que la largeur du cadre. Or presque toutes les photos du
 * site sont en 16/9 (2258 × 1256). Dans un cadre carré, la photo doit remplir
 * la hauteur : elle s'affiche 1,8 fois plus large que le cadre et le reste est
 * rogné. Avec un `sizes` égal à la largeur du cadre, le navigateur télécharge
 * une image 1,8 fois trop petite puis l'agrandit, et elle paraît pixelisée.
 * C'est pire en portrait : 2,25 fois en 4/5, 2,4 fois en 3/4.
 *
 * `coverSizes` multiplie chaque largeur de `sizes` par ce facteur. Le facteur
 * se lit dans les classes de cadrage du cadre (`aspect-square`, `aspect-4/5`,
 * `lg:aspect-3/4`…), et on garde le plus grand quand plusieurs s'appliquent
 * selon l'écran. Vercel ne sert jamais plus large que le fichier d'origine :
 * demander trop large ne coûte rien au-delà.
 */

/** Format des photos produites pour le site. */
const SOURCE_RATIO = 16 / 9;

const NAMED_RATIOS: Record<string, number> = { square: 1, video: 16 / 9 };

/** Facteur d'agrandissement imposé par le cadre le plus étroit des classes. */
export function cropFactor(ratioClasses: string): number {
  let factor = 1;
  for (const [, value] of ratioClasses.matchAll(/aspect-([\w./]+)/g)) {
    let ratio = NAMED_RATIOS[value];
    if (ratio === undefined) {
      const [w, h] = value.split("/").map(Number);
      if (!w || !h) continue;
      ratio = w / h;
    }
    factor = Math.max(factor, SOURCE_RATIO / ratio);
  }
  return Math.round(factor * 100) / 100;
}

/**
 * Applique le facteur à chaque largeur de `sizes`. `ratio` est soit le facteur
 * lui-même, soit les classes `aspect-*` du cadre.
 */
export function coverSizes(sizes: string, ratio: string | number): string {
  const factor = typeof ratio === "number" ? ratio : cropFactor(ratio);
  if (factor <= 1) return sizes;
  return sizes
    .split(/,(?![^(]*\))/)
    .map((entry) => {
      const match = entry.trim().match(/^(\([^)]*\)\s+)?(.+)$/);
      if (!match) return entry;
      const [, media = "", value] = match;
      const inner = value.startsWith("calc(") ? value.slice(5, -1) : value;
      return `${media}calc((${inner}) * ${factor})`;
    })
    .join(", ");
}
