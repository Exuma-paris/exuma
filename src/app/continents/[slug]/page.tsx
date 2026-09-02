import { notFound } from "next/navigation";
import { Header } from "@/components/sections/header";
import { TextBlock } from "@/components/blocks/text-block";
import { DestinationFinder } from "@/components/blocks/destination-finder";
import { renderSection } from "@/components/destination/render-section";
import { continents } from "@/lib/content/registry";
import { getDestinationFinderIndex } from "@/lib/content/destination-finder";
import type { Section } from "@/lib/content/types";

export function generateStaticParams() {
  return Object.keys(continents).map((slug) => ({ slug }));
}

/**
 * Destinations déjà présentées en cartes plus haut dans la page, qu'elles
 * viennent d'un `entityList` ou de `featureCards` écrites à la main. Le moteur
 * de recherche les écarte de ses suggestions pour ne pas répéter la même
 * sélection à deux endroits.
 */
function featuredDestinationSlugs(sections: Section[]): string[] {
  const slugs: string[] = [];
  for (const section of sections) {
    if (section.type === "entityList" && section.kind === "destination") {
      slugs.push(...section.slugs);
    }
    if (section.type === "featureCards") {
      for (const card of section.cards) {
        const match = card.link?.href.match(/^\/destinations\/([^/?#]+)/);
        if (match) slugs.push(match[1]);
      }
    }
  }
  return slugs;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const continent = continents[slug];
  if (!continent) notFound();

  const [hero, ...rest] = continent.sections;

  // Le moteur de recherche se glisse juste avant le CTA de clôture, quel que
  // soit le nombre de sections écrites dans le fichier de contenu.
  const ctaIndex = rest.findIndex((s) => s.type === "finalCta");
  const beforeFinder = ctaIndex === -1 ? rest : rest.slice(0, ctaIndex);
  const afterFinder = ctaIndex === -1 ? [] : rest.slice(ctaIndex);

  // L'index est construit depuis le registre : une destination nouvellement
  // rattachée au continent y entre sans qu'il y ait à toucher au contenu.
  // Le nom du continent est retiré des entrées, il serait le même sur toutes.
  const entries = getDestinationFinderIndex({ continentSlug: slug }).map(
    ({ continent: _continent, ...entry }) => entry,
  );
  const featured = featuredDestinationSlugs(continent.sections);
  const genitive = continent.genitive ?? continent.name;

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {beforeFinder.map((section, i) => renderSection(section, String(i + 1)))}

      {entries.length > 0 ? (
        <div className="w-full bg-background-soft">
          <section className="mx-auto flex w-full max-w-layout flex-col gap-10 section-px section-py">
            <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
              <TextBlock
                align="left"
                mdAlign="center"
                eyebrow="Destinations"
                heading={`Toutes les destinations ${genitive}`}
                headingLevel="h2"
                paragraph="Cherchez un pays, une île, une ville. Nous vous montrons ce que nous y connaissons."
              />
            </div>
            <DestinationFinder
              entries={entries}
              excludeFromSuggestions={featured}
              idleCaption={`${entries.length} destination${entries.length > 1 ? "s" : ""}, un seul interlocuteur.`}
              notFoundCaption={`Aucune destination ${genitive} ne porte ce nom.`}
              emptyMessage="Nous voyageons aussi ailleurs, y compris là où nous n'avons pas encore de page. Dites-nous où."
            />
          </section>
        </div>
      ) : null}

      {afterFinder.map((section, i) =>
        renderSection(section, `cta-${i}`),
      )}
    </main>
  );
}
