import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { meta, sections } from "@/content/pages/professionnels";

/** Image de partage : la première image du hero. Sans cette déclaration, la
 * page hériterait des balises Open Graph de l'accueil, alors qu'elle est faite
 * pour être transmise telle quelle par mail ou sur LinkedIn. */
const shareImage = sections.find((s) => s.type === "hero")?.images[0];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/professionnels" },
  openGraph: {
    type: "article",
    // Le gabarit `%s | Exuma` du layout ne vaut que pour <title> : sans ceci,
    // la carte de partage sortirait sans le nom de la maison.
    siteName: "Exuma",
    url: "/professionnels",
    title: `${meta.title} | Exuma`,
    description: meta.description,
    ...(shareImage
      ? { images: [{ url: shareImage.src, alt: shareImage.alt }] }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${meta.title} | Exuma`,
    description: meta.description,
    ...(shareImage ? { images: [shareImage.src] } : {}),
  },
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
