import { Header } from "@/components/sections/header";
import { HeroImageBottom } from "@/components/sections/hero/image-bottom";
import { Recommended } from "@/components/blocks/recommended";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import { BentoSection } from "@/components/sections/bento";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { FullImageSection } from "@/components/sections/full-image";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { FaqSection } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        {/* 1 — Hero : la promesse de service (positionnement) */}
        <div className="relative">
          <Header />
          <HeroImageBottom
            eyebrow="Conciergerie de voyage"
            heading="Nous concevons et orchestrons vos voyages. Partout dans le monde."
            paragraph="Une équipe dédiée s'occupe de tout, du premier échange jusqu'à votre retour. Vous choisissez où aller. Nous nous occupons du reste."
            image={{
              src: "/destination/polynesie/full-image.png",
              alt: "Lagon de Polynésie française au lever du jour",
            }}
          />
        </div>

        {/* Réassurance — recommandée par */}
        <section className="section-px mx-auto w-full max-w-layout py-12">
          <Recommended />
        </section>

        {/* 3 — Destinations : les 4 coins du monde (desti/agence) */}
        <FeatureCardsSection
          eyebrow="Destinations"
          heading="Là où vous voulez aller, et là où vous n'auriez pas pensé"
          description="De la Méditerranée au Pacifique Sud, nous composons chaque voyage sur mesure — puis nous l'orchestrons de bout en bout."
          cta={{ label: "Toutes les destinations", href: "/continents/europe" }}
          cards={[
            {
              title: "Corse",
              description:
                "Bonifacio au lever du jour, les Lavezzi le temps d'une voile, un domaine du Sartenais à la nuit tombée. Une île que l'on traverse lentement, portes ouvertes.",
              image: {
                src: "/destination/corse/hero-1.png",
                alt: "Falaises de Bonifacio en Corse au-dessus de la mer",
              },
              link: { label: "Découvrir", href: "/destinations/corse" },
            },
            {
              title: "Polynésie française",
              description:
                "Le lagon de Moorea, une nuit sur un motu de Taha'a, les Marquises pour finir. Des îles reliées par nos soins, sans une attente ni une correspondance à gérer.",
              image: {
                src: "/destination/polynesie/hero-1.png",
                alt: "Lagon turquoise et motu en Polynésie française",
              },
              link: { label: "Découvrir", href: "/destinations/polynesie" },
            },
            {
              title: "Rio de Janeiro",
              description:
                "Ipanema au petit matin, le Corcovado avant la foule, une école de samba à Mangueira le soir venu. La ville confiée à quelqu'un qui la connaît vraiment.",
              image: {
                src: "/destination/rio-de-janeiro/hero-1.png",
                alt: "Vue sur Rio de Janeiro et le Pain de Sucre",
              },
              link: { label: "Découvrir", href: "/destinations/rio-de-janeiro" },
            },
          ]}
        />

        {/* 5 — La méthode : comment on s'occupe de tout (positionnement, cœur) */}
        <BentoSection
          background="bg-background"
          eyebrow="Notre métier"
          heading="Une seule préoccupation : vous servir"
          description="Avant la destination, il y a la façon de voyager. Un interlocuteur unique, joignable, qui prend tout en charge — et reste le même du premier appel au retour."
          cta={{ label: "Parler à un conseiller", href: "/contact" }}
          cards={[
            {
              title: "Un interlocuteur unique",
              description:
                "La même personne du premier échange jusqu'au retour. Elle connaît votre dossier et vos habitudes, et ne vous demande jamais de vous répéter.",
              image: {
                src: "/destination/rio-de-janeiro/bento-conciergerie.png",
                alt: "Conseiller voyage Exuma au téléphone",
              },
              tone: "dark",
            },
            {
              title: "Tout est pris en charge",
              description:
                "Itinéraire, réservations, transferts, imprévus. Vous validez, nous orchestrons — vous n'avez aucune logistique à gérer.",
              image: {
                src: "/destination/rio-de-janeiro/bento-hebergements.png",
                alt: "Suite d'hôtel haut de gamme",
              },
            },
            {
              title: "Joignables, où que vous soyez",
              description:
                "Une assistance disponible avant, pendant et après le voyage. Un message suffit, à toute heure et quel que soit le fuseau horaire.",
              image: {
                src: "/destination/rio-de-janeiro/bento-experiences.png",
                alt: "Expérience confidentielle organisée par Exuma",
              },
            },
            {
              title: "Adresses et accès confidentiels",
              description:
                "Villas privées, tables et lieux rarement ouverts — un réseau bâti voyage après voyage, jamais un catalogue.",
              image: {
                src: "/destination/rio-de-janeiro/bento-adresses.png",
                alt: "Adresse confidentielle à Rio de Janeiro",
              },
            },
            {
              title: "Discrétion absolue",
              description:
                "Vos déplacements, vos préférences et votre identité restent strictement confidentiels. C'est la base de notre métier.",
              image: {
                src: "/destination/polynesie/bento-aerien.png",
                alt: "Vue aérienne d'un atoll préservé",
              },
            },
          ]}
        />

        {/* 4 — Fil famille premium (desti/agence) */}
        <FeatureShowcase
          eyebrow="En famille"
          heading="Un voyage qui tient ensemble"
          description="Conjoint, adolescents, enfants, parfois trois générations. Nous composons des journées où chacun trouve son rythme, sans jamais sacrifier l'ensemble."
          items={[
            {
              title: "Pour tous les âges",
              detail:
                "Une plongée pour les uns, une sieste à l'ombre pour les autres, une sortie en bateau qui réunit tout le monde au coucher du soleil. Chacun sa journée, un dîner commun.",
              image: {
                src: "/destination/polynesie/xp-randonnee.png",
                alt: "Famille en randonnée en Polynésie",
              },
            },
            {
              title: "Une maison à vous",
              detail:
                "Villa ou résidence privée avec personnel sur place — cuisine, ménage, garde d'enfants. L'intimité d'un chez-soi, le service d'un hôtel en plus.",
              image: {
                src: "/destination/polynesie/split-1.png",
                alt: "Villa privée en bord de lagon",
              },
            },
            {
              title: "Le sens avant le décor",
              detail:
                "Rencontres avec des artisans, des cuisiniers, des familles locales. Ce dont vos enfants se souviendront, longtemps après le retour.",
              image: {
                src: "/destination/polynesie/ceremony.png",
                alt: "Rencontre culturelle locale en Polynésie",
              },
            },
          ]}
        />

        {/* Respiration visuelle */}
        <FullImageSection
          image={{
            src: "/destination/rio-de-janeiro/full-image.png",
            alt: "Panorama de Rio de Janeiro au crépuscule",
          }}
        />

        {/* 7 — Vos interlocuteurs : preuve humaine (desti/agence + réassurance) */}
        <TestimonialsSection
          eyebrow="Vos interlocuteurs"
          heading="Une personne, pas un standard"
          cta={{ label: "Échanger avec un conseiller", href: "/contact" }}
          testimonials={[
            {
              quote:
                "Je reste votre interlocuteur du début à la fin. Vous n'avez jamais à réexpliquer votre dossier, ni à courir après une réponse — je connais votre voyage aussi bien que vous.",
              image: {
                src: "/collaborateurs/stephane-chair-hd.jpg",
                alt: "Portrait de Stéphane Lasnier, Travel Designer chez Exuma",
              },
              name: "Stéphane Lasnier",
              role: "Luxury Travel Designer",
            },
            {
              quote:
                "Mon métier, c'est que tout soit réglé avant que vous ayez à y penser. Un transfert qui change, une table à déplacer : vous l'apprenez une fois que c'est fait.",
              image: {
                src: "/collaborateurs/cecile-chair-hd.jpg",
                alt: "Portrait de Cécile Borruto, Travel Advisor VIP & Conciergerie chez Exuma",
              },
              name: "Cécile Borruto",
              role: "Travel Advisor — VIP & Conciergerie",
            },
            {
              quote:
                "Je construis chaque voyage autour d'une famille, pas d'un catalogue. Les âges, les rythmes, ce qui compte pour chacun : c'est de là que je pars, jamais d'un itinéraire tout fait.",
              image: {
                src: "/collaborateurs/aurore-chair-hd.jpg",
                alt: "Portrait d'Aurore Lagarrigue, Travel Designer chez Exuma",
              },
              name: "Aurore Lagarrigue",
              role: "Luxury Travel Designer",
            },
            {
              quote:
                "Je connais mes destinations pour y retourner sans cesse. Les bonnes portes, je les pousse en personne avant de vous y envoyer.",
              image: {
                src: "/collaborateurs/taina-chair-hd.jpg",
                alt: "Portrait de Tainà Dos Santos Papaleo, Travel Designer chez Exuma",
              },
              name: "Tainà Dos Santos Papaleo",
              role: "Luxury Travel Designer",
            },
          ]}
        />

        {/* 8 — Entrée B2B discrète : family offices & conseils (positionnement) */}
        <FinalCtaSection
          eyebrow="Family offices & conseils"
          heading="Vous organisez les voyages d'une ou plusieurs familles ? Parlons cadre, confidentialité et interlocuteur dédié."
          primaryCta={{ label: "Nous contacter", href: "/contact" }}
          secondaryCta={{ label: "Nos services", href: "/services" }}
        />

        {/* 9 — FAQ + contact */}
        <FaqSection
          heading="Questions fréquentes"
          contact={{
            prefix: "Une autre question ? ",
            label: "Écrivez-nous",
            href: "/contact",
            suffix: ", nous répondons vite.",
          }}
          items={[
            {
              question: "Comment se passe la création d'un voyage avec Exuma ?",
              answer:
                "Tout commence par un échange pour cerner vos envies, vos rythmes et vos contraintes. Votre travel designer compose ensuite une proposition sur mesure, l'ajuste avec vous, puis orchestre l'intégralité du voyage — réservations, transferts et imprévus compris.",
            },
            {
              question: "Vers quelles destinations organisez-vous des voyages ?",
              answer:
                "Partout dans le monde. De la Corse à la Polynésie, de Marrakech à Rio, nous concevons des voyages sur mesure sur tous les continents, en nous appuyant sur un réseau d'adresses et de partenaires construit destination par destination.",
            },
            {
              question: "Ai-je le même interlocuteur du début à la fin ?",
              answer:
                "Oui. Un travel designer dédié suit votre dossier de la première conversation jusqu'à votre retour. Il connaît vos préférences et reste joignable pendant le voyage, sans que vous ayez jamais à tout réexpliquer.",
            },
            {
              question: "Que comprend la conciergerie pendant le séjour ?",
              answer:
                "Une assistance disponible avant, pendant et après le voyage : modification de réservation, transferts, recommandations de dernière minute, gestion des imprévus. Un message suffit, à toute heure et quel que soit le fuseau horaire.",
            },
            {
              question: "Travaillez-vous avec les family offices et les assistants de direction ?",
              answer:
                "Oui. Nous accompagnons régulièrement family offices, assistants de direction et conseils dans l'organisation des voyages de leurs familles ou dirigeants, avec un interlocuteur dédié, des process formalisés et une stricte confidentialité contractuelle.",
            },
            {
              question: "Comment la confidentialité est-elle préservée ?",
              answer:
                "Vos déplacements, préférences et informations personnelles restent strictement confidentiels. Nous travaillons sous accord de confidentialité lorsque c'est requis et ne publions jamais de témoignage nominatif sans votre accord.",
            },
          ]}
        />
      </main>
    </>
  );
}
