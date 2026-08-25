import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { meta, sections } from "@/content/pages/entreprises";

const PATH = "/professionnels/entreprises";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exuma.example.com";

/** Image de partage : le hero de la page. Sans cette déclaration, la page
 * hériterait des balises Open Graph de l'accueil, et un lien envoyé par mail ou
 * posté sur LinkedIn afficherait la vignette de la page d'accueil. */
const shareImage = sections.find((s) => s.type === "heroImageBackground")
  ?.images[0];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    // Le gabarit `%s | Exuma` du layout ne vaut que pour <title> : sans ceci,
    // la carte de partage sortirait sans le nom de la maison.
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

/** Fil d'Ariane déclaré aux moteurs. La page est à deux niveaux sous l'accueil
 * et n'a pas de fil d'Ariane visible : sans ceci, rien ne dit qu'elle dépend du
 * hub Professionnels. */
function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Professionnels",
        item: `${siteUrl}/professionnels`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: meta.shortTitle,
        item: `${siteUrl}${PATH}`,
      },
    ],
  };
}

/** Les questions pratiques de la page, déclarées en `FAQPage`. C'est le format
 * que les moteurs de réponse citent le plus volontiers. Les questions sont
 * lues dans la section `faq` du contenu, donc rien à maintenir en double :
 * seules les réponses écrites en texte simple sont reprises. */
function faqJsonLd() {
  const faq = sections.find((s) => s.type === "faq");
  if (!faq) return null;

  const items = faq.items
    .filter((item) => typeof item.answer === "string")
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer as string },
    }));

  if (items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items,
  };
}

export default function Page() {
  const [hero, ...rest] = sections;
  // Même convention que les pages Expérience : le titre est posé sur l'image
  // plein cadre, l'en-tête passe donc en thème sombre pour rester lisible.
  const headerTheme = hero?.type === "heroImageBackground" ? "dark" : "light";
  const schemas = [breadcrumbJsonLd(), faqJsonLd()].filter(Boolean);

  return (
    // Même rythme vertical resserré que le hub `/professionnels` : la variable
    // `--section-block` est héritée par toutes les sections, on la réduit ici
    // sans toucher au reste du site.
    <main className="flex-1 [--section-block:2.25rem] md:[--section-block:3.25rem]">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative">
        <Header theme={headerTheme} />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
