import { Header } from "@/components/sections/header";
import type { Destination } from "@/lib/content/types";
import { withDestinationContext } from "@/lib/contact/project-link";
import { applyBackgroundRhythm } from "@/lib/content/background-rhythm";
import { destinationJsonLdScripts } from "@/lib/destination/seo";
import { renderSection } from "./render-section";

export function DestinationPage({ destination }: { destination: Destination }) {
  // Tous les « Créer votre voyage » de la page emmènent la destination avec
  // eux, pour que le formulaire s'ouvre déjà rempli.
  // Les infos pratiques passent en gris foncé : c'est la respiration du
  // milieu de page, au même endroit sur toutes les destinations.
  const sections = applyBackgroundRhythm(
    withDestinationContext(destination.sections, destination.slug),
    { dark: ["infoGrid"] },
  );
  const [hero, ...rest] = sections;
  const scripts = destinationJsonLdScripts(destination);

  return (
    <main className="flex-1">
      {scripts.map((schema, i) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
