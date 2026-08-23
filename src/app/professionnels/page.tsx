import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { meta, sections } from "@/content/pages/professionnels";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/professionnels" },
};

export default function Page() {
  const [hero, spotlight, ...rest] = sections;

  return (
    // `--section-block` est l'espacement vertical standard des encarts du site
    // (60px sur mobile, 120px au-dessus). Deux encarts qui se suivent cumulent
    // donc 240px de vide. On le resserre ici, sur cette page seulement : la
    // variable est héritée par toutes les sections, le reste du site garde son
    // rythme.
    <main className="flex-1 [--section-block:2.25rem] md:[--section-block:3.25rem]">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {/* Le hero garde son propre padding bas, indépendant de la variable :
          on rattrape ici pour que Ludivine arrive vite après le trio. */}
      {spotlight && (
        <div className="-mt-6 md:-mt-8">{renderSection(spotlight, "1")}</div>
      )}
      {rest.map((section, i) => renderSection(section, String(i + 2)))}
    </main>
  );
}
