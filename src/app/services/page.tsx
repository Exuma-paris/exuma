import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "@untitledui/icons";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import { serviceCategories } from "@/lib/content/registry";
import { EXUMA_TEL_HREF } from "@/lib/exuma";
import type { ImageRef, Section } from "@/lib/content/types";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Mobilité, conciergerie, expériences, sécurité et ingénierie du voyage : les cinq métiers qu'Exuma prend en charge pour vous.",
  alternates: { canonical: "/services" },
};

/**
 * Ordre d'affichage des cartes, sur deux colonnes. Conciergerie et mobilité
 * ouvrent la grille : ce sont les deux métiers les plus emblématiques de la
 * maison.
 */
const ORDER = [
  "conciergerie",
  "mobilite",
  "lifestyle",
  "securite",
  "ingenierie",
] as const;

/**
 * L'image de chaque carte est celle du hero de la catégorie, lue dans son
 * propre fichier de contenu. Aucune donnée n'est recopiée ici : changer le hero
 * d'une catégorie met la grille à jour toute seule.
 */
function heroImageOf(slug: string): ImageRef | null {
  const first = serviceCategories[slug]?.sections[0];
  if (first?.type === "hero" && first.images.length > 0) return first.images[0];
  return null;
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

const cards = ORDER.map((slug) => {
  const category = serviceCategories[slug];
  const image = heroImageOf(slug);
  if (!category || !image) return null;
  return {
    title: category.name,
    description: asText(category.blurb),
    image,
    link: { label: `Découvrir ${category.name}`, href: `/services/${slug}` },
  };
}).filter((card): card is NonNullable<typeof card> => card !== null);

const hero: Section = {
  type: "hero",
  eyebrow: "Services",
  heading: "Le service est ce qui nous distingue, pas la destination",
  description:
    "Nous emmenons nos clients aux quatre coins du monde, avec une seule préoccupation : que le voyage se passe bien. Cinq métiers s'en chargent, et vous n'avez qu'un interlocuteur.",
  images: [
    {
      // Shooting Jules Despretz n°12, bande 21:9 prise sous le filigrane, puis
      // éditée : les collaborateurs ont été retirés et la lumière basculée au
      // petit matin. Le titre parle du service en général, pas d'un métier :
      // le bureau vide avant l'arrivée des équipes le dit sans montrer aucune
      // des cinq catégories affichées juste en dessous.
      // n°197, la vue large des trois postes, reste réservée à la page cabinet.
      src: "/service/hub/hero-aube.png",
      alt: "Les bureaux d'Exuma au petit matin, avant l'arrivée des équipes",
    },
  ],
};

/**
 * Cinq cartes sur deux colonnes laissent une cellule vide. L'appel à contact
 * vient l'occuper, ce qui remplace le `finalCta` que portaient les versions
 * précédentes de cette page : une seule invitation, à l'endroit où le lecteur
 * finit sa lecture.
 */
function ContactSlot() {
  return (
    <div className="flex flex-col justify-center gap-4 py-4">
      <p className="text-eyebrow text-primary">Prendre contact</p>
      <p className="font-heading text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.3] font-light text-foreground italic">
        Nos services vous intéressent ? Prenons contact.
      </p>
      <div className="flex flex-col items-start gap-3">
        <Link
          href={EXUMA_TEL_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] tracking-wide text-background transition-opacity hover:opacity-75"
        >
          <Phone aria-hidden className="size-4" />
          Contacter Exuma
        </Link>
        {/* Porte B2B, au même endroit que sur les cinq pages catégorie. */}
        <Link
          href="/professionnels"
          className="text-[13px] tracking-wide text-secondary-foreground transition-colors hover:text-foreground"
        >
          Vous organisez pour d&apos;autres
        </Link>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {renderSection(hero, "hero")}
      </div>

      {/* Rendu direct plutôt que par `renderSection` : la cellule de contact
          est du JSX, donc elle ne peut pas transiter par des données de
          section, qui doivent rester sérialisables. */}
      <FeatureCardsSection
        layout="grid"
        background="bg-background-soft"
        eyebrow="Nos cinq métiers"
        heading="Ce que nous prenons en charge"
        description="Aucun ne se choisit à l'avance. Nous composons le dispositif après vous avoir écouté, et vous n'avez qu'un dossier et qu'une facture."
        cards={cards}
        endSlot={<ContactSlot />}
      />
    </main>
  );
}
