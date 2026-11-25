import { LogoExPaths } from "@/components/ui/logo";

/** Remplace « Ex » en tête d'un mot par le « ex » du logo, posé sur la ligne
 * de base du texte. Le dessin est coupé juste après le x (38,5 unités) et la
 * boucle déborde sous les lettres suivantes, comme sous le « u » du logo.
 * Les lecteurs d'écran et les moteurs lisent « Ex » en texte. */
export function BrandEx() {
  return (
    <>
      <span className="sr-only">Ex</span>
      <svg
        aria-hidden
        viewBox="0 0 38.5 24"
        overflow="visible"
        // Hauteur d'x du logo calée sur la hauteur des capitales du texte.
        style={{
          height: "0.72em",
          width: "1.155em",
          verticalAlign: "baseline",
          display: "inline",
          marginRight: "0.03em",
        }}
      >
        <LogoExPaths />
      </svg>
    </>
  );
}
