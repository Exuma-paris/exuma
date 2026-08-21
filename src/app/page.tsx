import { Header } from "@/components/sections/header";
import { HeroImageBottom } from "@/components/sections/hero/image-bottom";
import { Recommended } from "@/components/blocks/recommended";
import { BentoSection } from "@/components/sections/bento";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import {
  getServiceCategoryCards,
  getThemeCards,
} from "@/lib/content/queries";
import { VideoSection } from "@/components/sections/video";
import { FaqSection } from "@/components/sections/faq";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="relative">
          <Header />
          <HeroImageBottom
            eyebrow="Conciergerie de voyage · depuis 1991"
            heading="Vous nous dites où. Nous nous occupons du reste."
            paragraph="Un interlocuteur unique conçoit votre voyage, réserve et coordonne. Il reste joignable jusqu'à votre retour."
            ctas={{
              primary: { label: "Créer votre voyage", href: "/votre-projet" },
              secondary: {
                label: "Parler à un travel designer",
                href: "/contact",
              },
            }}
          />
        </div>
        <section className="section-px mx-auto w-full max-w-layout py-16">
          <Recommended />
        </section>
        <BentoSection
          background="bg-background"
          eyebrow="Conciergerie"
          heading="Ce dont vous n'avez plus à vous occuper"
          description="Nos pôles de services couvrent le voyage de bout en bout, du visa à obtenir au chauffeur qui attend à l'arrivée."
          cta={{ label: "Découvrir nos services", href: "/services" }}
          cards={getServiceCategoryCards().map((card, i) => ({
            ...card,
            // The bento leads on a dark tile; the rest carry their image.
            tone: i === 0 ? ("dark" as const) : undefined,
          }))}
        />
        <FeatureCardsSection
          eyebrow="Thématiques"
          heading="Par envie plutôt que par destination"
          cta={{ label: "Créer votre voyage", href: "/votre-projet" }}
          cards={getThemeCards()}
        />
        <VideoSection
          eyebrow="Partenaires"
          heading="Exuma et Ponant"
          video={{
            src: "/videos/exuma-ponant.mp4",
            poster: "/videos/exuma-ponant-poster.jpg",
            alt: "Présentation du partenariat Exuma et Ponant",
          }}
        />
        <TestimonialsSection
          eyebrow="Travel Designer"
          heading="Rencontrez nos travels designers"
          cta={{ label: "Créer mon voyage", href: "/votre-projet" }}
          testimonials={[
            {
              quote:
                "Voyager en Polynésie, c'est découvrir des paysages époustouflants, des plages de sable fin et une culture riche. Une aventure unique qui éveille les sens et nourrit l'âme.",
              image: {
                src: "/testimonials/stephane.jpg",
                alt: "Portrait de Stéphane, travel designer",
              },
              name: "Stéphane",
              role: "Travel Designer Exuma spécialiste de la Polynésie",
            },
            {
              quote:
                "Chaque voyage est une histoire à construire ensemble, au rythme des rencontres et des envies.",
              image: {
                src: "/testimonials/marie.jpg",
                alt: "Portrait de Marie, travel designer",
              },
              name: "Marie",
              role: "Travel Designer Exuma spécialiste des Caraïbes",
            },
            {
              quote:
                "Je conçois des itinéraires qui révèlent l'âme des lieux, loin des sentiers battus et au plus près des habitants.",
              image: {
                src: "/testimonials/julien.jpg",
                alt: "Portrait de Julien, travel designer",
              },
              name: "Julien",
              role: "Travel Designer Exuma spécialiste du Japon",
            },
            {
              quote:
                "Un bon voyage se ressent dans les détails : une table, un lever de soleil, une conversation inattendue.",
              image: {
                src: "/testimonials/camille.jpg",
                alt: "Portrait de Camille, travel designer",
              },
              name: "Camille",
              role: "Travel Designer Exuma spécialiste de l'Afrique",
            },
          ]}
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
