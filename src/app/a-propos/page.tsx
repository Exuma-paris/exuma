import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { meta, sections } from "@/content/pages/a-propos";
import { applyBackgroundRhythm } from "@/lib/content/background-rhythm";

const PATH = "/a-propos";

/** Image de partage : la première image du hero. Sans cette déclaration, la
 * page hériterait des balises Open Graph de l'accueil. */
const shareImage = sections.find((s) => s.type === "hero")?.images[0];

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

export default function AProposPage() {
  // Le hero en galerie se pose sur le fond crème de la page : on démarre le
  // cycle sur le blanc pour que l'histoire ne prolonge pas le même fond.
  const [hero, ...rest] = applyBackgroundRhythm(sections, {
    dark: ["infoGrid"],
    start: "white",
  });

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
