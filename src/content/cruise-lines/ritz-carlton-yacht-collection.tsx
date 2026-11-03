import type { CruiseLine } from "@/lib/content/types";

export const cruiseLine: CruiseLine = {
  slug: "ritz-carlton-yacht-collection",
  name: "The Ritz-Carlton Yacht Collection",
  blurb:
    "Trois yachts, de cent quarante-neuf à deux cent vingt-six suites, toutes avec terrasse. Une marina à l'arrière pour se baigner depuis le bord.",
  keywords: ["ritz-carlton", "ritz carlton", "evrima", "ilma", "luminara", "yacht", "mediterranee", "caraibes"],
  heroImage: {
    src: "/cruise-line/ritz-carlton-yacht-collection/hero.png",
    alt: "Yacht de la Ritz-Carlton Yacht Collection vu de l'arrière, sa marina ouverte sur la mer",
  },
  destinationSlugs: ["france", "italie", "grece", "saint-barthelemy"],
  metaTitle: "Croisière The Ritz-Carlton Yacht Collection",
  metaDescription:
    "Croisière The Ritz-Carlton Yacht Collection avec Exuma : Evrima, Ilma et Luminara, trois yachts tout en suites. Organisée par votre travel designer.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Croisière d'exception",
      heading: "The Ritz-Carlton Yacht Collection, la vie de yacht",
      description:
        "Une tenue décontractée, un mouillage différent chaque jour et une marina pour se baigner depuis le bord, avec le service du Ritz-Carlton.",
      images: [
        {
          src: "/cruise-line/ritz-carlton-yacht-collection/hero.png",
          alt: "Yacht de la Ritz-Carlton Yacht Collection vu de l'arrière, sa marina ouverte sur la mer",
        },
      ],
    },
    {
      type: "textImagesSplit",
      logo: { src: "/cruise-line/ritz-carlton-yacht-collection/logo.png", alt: "Logo The Ritz-Carlton Yacht Collection" },
      eyebrow: "La maison",
      heading: "Un yacht plutôt qu'un paquebot",
      paragraphs: [
        "La marque hôtelière a pris la mer pour proposer autre chose que la croisière classique. Ses navires ne comptent que des suites, toutes tournées vers la mer et prolongées d'une terrasse privée.",
        "À l'arrière, la marina se déplie au niveau de l'eau : on se baigne depuis le yacht, ou on s'installe sur la plateforme flottante. Les itinéraires passent par la Méditerranée et les Caraïbes, selon la saison.",
      ],
      images: [
        {
          src: "/cruise-line/ritz-carlton-yacht-collection/split-1.png",
          alt: "Pont extérieur en teck d'un yacht Ritz-Carlton, tables et fauteuils face à la mer",
        },
        {
          src: "/cruise-line/ritz-carlton-yacht-collection/split-2.png",
          alt: "Grande terrasse privée d'une suite, canapés et méridiennes face à l'horizon",
        },
      ],
    },
    {
      type: "featureCards",
      eyebrow: "La flotte",
      heading: "Trois yachts, trois tailles",
      cards: [
        {
          title: "Evrima",
          description:
            "Le premier et le plus petit de la flotte : cent quarante-neuf suites pour deux cent quatre-vingt-dix-huit passagers au plus. Le choix le plus intime des trois.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/card-evrima.png",
            alt: "L'Evrima à la tombée du jour devant une côte aux falaises illuminées",
          },
        },
        {
          title: "Ilma",
          description:
            "Mis en service en 2024, il compte deux cent vingt-quatre suites pour quatre cent quarante-huit passagers au plus.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/card-ilma.png",
            alt: "L'Ilma vu du ciel, en pleine mer, son sillage derrière lui",
          },
        },
        {
          title: "Luminara",
          description:
            "Le plus récent, parti de Monte-Carlo en juillet 2025 : deux cent vingt-six suites, et une plateforme flottante à la marina, avec sa piscine centrale.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/card-luminara.png",
            alt: "Le Luminara en mer, le soleil bas à l'horizon",
          },
        },
      ],
    },
    {
      type: "featureCards",
      eyebrow: "Le service à bord",
      heading: "Tout est compris, jusqu'aux pourboires",
      description:
        "Le voyage est tout inclus : restaurants, boissons, Wi-Fi, spectacles, sports nautiques et pourboires. Le spa reste en supplément.",
      cards: [
        {
          title: "Un concierge personnel",
          description:
            "Il réserve les tables et les soins, et s'occupe de vos demandes particulières pendant toute la croisière. Le service en suite fonctionne jour et nuit.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/service-concierge.png",
            alt: "Passagère servie à une table dressée, près d'une baie lumineuse",
          },
        },
        {
          title: "Une cuisine de saison",
          description:
            "Plusieurs restaurants, tous compris dans le voyage, proposent une cuisine inspirée des escales et des produits frais du jour.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/service-table.png",
            alt: "Assiette de viande et de légumes, dressée avec soin",
          },
        },
        {
          title: "Boissons et Wi-Fi compris",
          description:
            "Les boissons, le Wi-Fi, les spectacles et les pourboires font partie du voyage.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/service-inclus.png",
            alt: "Passagers servis sur le pont, un verre à la main",
          },
        },
        {
          title: "Musique le soir",
          description:
            "Des musiciens classiques et de jazz se produisent à bord, dans une ambiance intime.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/service-spectacle.png",
            alt: "Groupe de musiciens et pianiste sur une petite scène",
          },
        },
        {
          title: "Le Ritz-Carlton Spa",
          description:
            "Massages, soins du visage et du corps avec les produits ESPA et 111SKIN, proposés en supplément.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/service-spa.png",
            alt: "Passagère au repos sur un banc de bois clair, au spa",
          },
        },
        {
          title: "La vie au bord de l'eau",
          description:
            "Quand le yacht est au mouillage, la marina s'ouvre sur les sports nautiques sans moteur, compris dans le voyage.",
          image: {
            src: "/cruise-line/ritz-carlton-yacht-collection/service-marina.png",
            alt: "Pont en teck et salons extérieurs, au-dessus de la mer",
          },
        },
      ],
    },
    {
      type: "entityList",
      kind: "destination",
      eyebrow: "Où ils naviguent",
      heading: "Les destinations à combiner avec votre croisière",
      description:
        "Nous prolongeons le voyage à terre, avant d'embarquer ou après le retour, dans les régions que les yachts parcourent.",
      slugs: ["france", "italie", "grece", "saint-barthelemy"],
    },
    {
      type: "finalCta",
      eyebrow: "Votre croisière Ritz-Carlton",
      heading: "Dites-nous qui embarque, nous vous dirons quel yacht vous convient",
      primaryCta: { label: "Parler de votre projet de croisière", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
