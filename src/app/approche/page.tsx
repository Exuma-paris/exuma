import type { Metadata } from "next";
import { Fingerprint } from "@/components/blocks/fingerprint";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { meta, sections } from "@/content/pages/pourquoi-exuma";
import { applyBackgroundRhythm } from "@/lib/content/background-rhythm";

const PATH = "/approche";

/** Image de partage : le hero de la page. Sans cette déclaration, la page
 * hériterait des balises Open Graph de l'accueil. */
const shareImage = sections.find((s) => s.type === "heroImageBackground")
  ?.images[0];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    siteName: "Exuma",
    url: PATH,
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

export default function ApprochePage() {
  const [hero, ...rest] = applyBackgroundRhythm(sections, { dark: ["infoGrid"] });
  // Le titre est posé sur l'image plein cadre : l'en-tête passe en sombre.
  const headerTheme = hero?.type === "heroImageBackground" ? "dark" : "light";

  return (
    <main className="flex-1">
      <div className="relative">
        <Header theme={headerTheme} />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) =>
        // L'empreinte de la marque occupe la colonne laissée libre par les
        // deux paragraphes de « Notre métier ».
        section.type === "textColumns" ? (
          <div key={i + 1} className="relative overflow-hidden">
            {renderSection(section, String(i + 1))}
            <Fingerprint />
          </div>
        ) : (
          renderSection(section, String(i + 1))
        ),
      )}
    </main>
  );
}
