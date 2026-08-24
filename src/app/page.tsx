import { Header } from "@/components/sections/header";
import { HeroImageBottom } from "@/components/sections/hero/image-bottom";
import { Recommended } from "@/components/blocks/recommended";
import { DestinationFinder } from "@/components/blocks/destination-finder";
import { TextBlock } from "@/components/blocks/text-block";
import { getDestinationFinderIndex } from "@/lib/content/destination-finder";
import { BentoSection } from "@/components/sections/bento";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import {
  getServiceCategoryCards,
  getThemeCards,
  getTravelDesignerTestimonials,
} from "@/lib/content/queries";
import { VideoSection } from "@/components/sections/video";
import { FaqSection } from "@/components/sections/faq";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  // Index construit côté serveur : le composant de recherche est client, lui
  // envoyer le registre entier pour comparer des noms serait absurde.
  const finderEntries = getDestinationFinderIndex();

  return (
    <>
      <main className="flex-1">
        <div className="relative">
          <Header />
          <HeroImageBottom
            eyebrow="Conciergerie de voyage · depuis 1991"
            // Copie volontaire de l'image de Madère plutôt qu'un lien vers
            // /destination/madere/ : ré-illustrer la page destination ne doit
            // pas changer la première image du site.
            image={{
              src: "/home-hero.png",
              alt: "Une famille sur un promontoire de Madère, au-dessus d'une mer de nuages",
            }}
            heading="Vous nous dites où. Nous nous occupons du reste."
            paragraph="Un interlocuteur unique conçoit, affine, réserve et coordonne vos voyages. Il reste joignable avant, pendant et après le voyage."
            ctas={{
              primary: { label: "Créer votre voyage", href: "/votre-projet" },
              secondary: {
                label: "Parler à un travel designer",
                href: "/contact",
              },
            }}
          />
        </div>
        <section className="section-px mx-auto w-full max-w-layout py-10">
          <Recommended />
        </section>
        {/* Cream plus soutenu que le fond de page : sans lui, ce bloc et le
            bandeau d'accréditations se confondaient en une seule zone. */}
        <div className="w-full bg-background-soft">
          <section className="mx-auto flex w-full max-w-layout flex-col gap-10 section-px section-py">
            <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
              <TextBlock
                align="left"
                mdAlign="center"
                eyebrow="Destinations"
                heading="Où souhaitez-vous partir ?"
                headingLevel="h2"
                paragraph="Cherchez un pays, une île, une ville. Nous vous montrons ce que nous y connaissons."
              />
            </div>
            <DestinationFinder entries={finderEntries} />
          </section>
        </div>
        <BentoSection
          background="bg-background"
          eyebrow="Conciergerie"
          heading="Ce dont vous n'avez plus à vous occuper"
          description="Nos pôles de services couvrent le voyage de bout en bout, du visa à obtenir au chauffeur qui attend à l'arrivée."
          cta={{ label: "Découvrir nos services", href: "/services" }}
          // Every tile is a photograph, so none is set to the dark tone: that
          // variant drops the gradient the titles rely on, and white text over
          // a bright image is unreadable.
          cards={getServiceCategoryCards()}
        />
        <FeatureCardsSection
          eyebrow="Thématiques"
          heading="Par envie plutôt que par destination"
          cta={{ label: "Créer votre voyage", href: "/votre-projet" }}
          cards={getThemeCards()}
        />
        <VideoSection
          // Le surtitre légende la vidéo du moment, le titre parle de la
          // pratique : changer de film ne demande de toucher qu'à cette ligne.
          eyebrow="Partenaire · Ponant"
          heading="Nous parlons destinations avec ceux qui les opèrent"
          description="Compagnies, hôteliers, guides locaux : nous passons du temps avec ceux qui travaillent sur le terrain, et nous y retournons régulièrement. Ce que nous vous conseillons vient de ces conversations, pas d'un catalogue."
          // La vidéo est hébergée sur la page Facebook d'Exuma, pas dans le
          // dépôt : le bloc renvoie vers elle plutôt que de proposer une
          // lecture sur place qui n'aboutirait pas.
          video={{
            poster: "/videos/exuma-ponant-poster.jpg",
            alt: "Échange entre Céline Lagraulet et un travel designer Exuma sur la Polynésie",
          }}
          href="https://www.facebook.com/exumafr/videos/26088294140798440/"
          background="bg-background-soft"
        />
        <TestimonialsSection
          eyebrow="Travel designers"
          heading="Celles et ceux qui s'en occupent"
          cta={{ label: "Créer votre voyage", href: "/votre-projet" }}
          // Noms, rôles, portraits et verbatims viennent des fiches
          // collaborateurs : la page ne fait que choisir qui apparaît.
          testimonials={getTravelDesignerTestimonials([
            "carole",
            "stephane",
            "taina",
          ])}
        />
        <FaqSection
          heading="Foire aux questions"
          contact={{
            prefix: "N'hésitez pas à ",
            label: "nous contacter",
            href: "/contact",
            suffix: " si vous avez une question.",
          }}
          items={[
            {
              question: "Quand partir en polynésie ?",
              answer:
                "La meilleure période s'étend de mai à octobre, pendant la saison sèche, avec un climat agréable et peu de précipitations.",
            },
            {
              question: "Quels sont les démarches administrative ?",
              answer:
                "Un passeport valide est nécessaire pour les ressortissants de l'Union européenne. Aucun visa n'est requis pour un séjour touristique inférieur à 90 jours.",
            },
            {
              question: "Question",
              answer:
                "Réponse à la question. Complétez ce contenu selon vos besoins.",
            },
          ]}
        />
      </main>
    </>
  );
}
