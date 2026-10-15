import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "@untitledui/icons";
import { Header } from "@/components/sections/header";
import { renderSection } from "@/components/destination/render-section";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import { getServiceLineup } from "@/lib/content/service-lineup";
import { EXUMA_TEL_HREF } from "@/lib/exuma";
import type { Section } from "@/lib/content/types";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Reporting et pilotage, mobilité, conciergerie, sécurité, ingénierie du voyage et expériences : les métiers qu'Exuma prend en charge pour vous.",
  alternates: { canonical: "/services" },
};

// Ordre et contenu des cartes : `getServiceLineup()`, partagé avec le menu.
const cards = getServiceLineup().flatMap((item) =>
  item.image
    ? [
        {
          title: item.name,
          description: item.description,
          image: item.image,
          link: { label: `Découvrir ${item.name}`, href: item.href },
        },
      ]
    : [],
);

const hero: Section = {
  type: "hero",
  eyebrow: "Services",
  heading: "Le service est ce qui nous distingue, pas la destination",
  description:
    "Nous emmenons nos clients aux quatre coins du monde, avec une seule préoccupation : que le voyage se passe bien. Nos métiers s'en chargent, et vous n'avez qu'un interlocuteur.",
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
 * L'appel à contact prend la dernière cellule de la grille (seul sur sa
 * ligne depuis l'ajout de la carte Reporting & pilotage). Il remplace le
 * `finalCta` des versions précédentes de cette page : une seule invitation,
 * à l'endroit où le lecteur finit sa lecture.
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
        eyebrow="Nos métiers"
        heading="Ce que nous prenons en charge"
        description="Aucun ne se choisit à l'avance. Nous composons le dispositif après vous avoir écouté, et vous n'avez qu'un dossier et qu'une facture."
        cards={cards}
        endSlot={<ContactSlot />}
      />
    </main>
  );
}
