import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { BentoSection } from "@/components/sections/bento";
import { renderSection } from "@/components/destination/render-section";
import {
  intro,
  meta,
  rest,
  servicesBlock,
} from "@/content/pages/private-office";
import { createBackgroundRhythm } from "@/lib/content/background-rhythm";
import { getServiceCategoryCards } from "@/lib/content/queries";

const PATH = "/private-office";

/** Image de partage : le hero de la page. Sans cette déclaration, la page
 * hériterait des balises Open Graph de l'accueil. */
const shareHero = intro[0];
const shareImage =
  shareHero?.type === "hero" || shareHero?.type === "heroImageBackground"
    ? shareHero.images[0]
    : undefined;

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

export default function PrivateOfficePage() {
  // Un seul rythme pour toute la page : la mosaïque des services, qui n'est
  // pas une section de contenu, prend son fond avec `next()` entre les deux.
  const rhythm = createBackgroundRhythm();
  const [hero, ...introRest] = intro.map(rhythm.apply);
  const servicesBackground = rhythm.next();
  const after = rest.map(rhythm.apply);
  const headerTheme = hero?.type === "heroImageBackground" ? "dark" : "light";

  return (
    <main className="flex-1">
      <div className="relative">
        <Header theme={headerTheme} />
        {hero && renderSection(hero, "hero")}
      </div>
      {introRest.map((section, i) => renderSection(section, `intro-${i}`))}
      <BentoSection
        background={servicesBackground}
        eyebrow={servicesBlock.eyebrow}
        heading={servicesBlock.heading}
        description={servicesBlock.description}
        cta={{ label: "Tous nos services", href: "/services" }}
        cards={getServiceCategoryCards()}
      />
      {after.map((section, i) => renderSection(section, `rest-${i}`))}
    </main>
  );
}
