import type { Accommodation } from "@/lib/content/types";

export const accommodation: Accommodation = {
  slug: "the-brando",
  name: "The Brando, Tetiaroa",
  blurb:
    "L'atoll privé de Tetiaroa. Trente-cinq villas sur un motu sans route. D'aucune terrasse on ne voit d'autre terrasse.",
  keywords: ["brando", "tetiaroa", "atoll", "polynesie", "motu prive"],
  heroImage: {
    src: "/destination/polynesie/hotel-brando.png",
    alt: "Vue aérienne du resort The Brando sur l'atoll de Tetiaroa",
  },
  destinationSlugs: ["polynesie"],
  metaTitle: "The Brando à Tetiaroa, Polynésie",
  metaDescription:
    "The Brando à Tetiaroa : atoll privé, trente-cinq villas, motu sans route. Séjour en Polynésie organisé par votre travel designer Exuma.",
  sections: [
    {
      type: "heroImageBackground",
      eyebrow: "Hébergement en Polynésie",
      heading: "Tetiaroa, l'atoll privé que Marlon Brando a choisi pour disparaître",
      description:
        "Un motu cerclé d'un lagon turquoise, douze îlots, aucune route. The Brando occupe l'un d'eux. Le reste est laissé à la barrière de corail et aux frégates.",
      images: [
        {
          src: "/accommodation/the-brando/hero.png",
          alt: "Vue aérienne de l'atoll de Tetiaroa et des villas de The Brando",
        },
      ],
    },

    {
      type: "textImagesSplit",
      eyebrow: "Onetahi, motu de The Brando",
      heading: "Trente-cinq villas et le bruit des oiseaux",
      theme: "light",
      paragraphs: [
        "The Brando à Tetiaroa occupe le motu d'Onetahi, l'un des douze îlots de l'atoll. Marlon Brando a découvert le lieu en 1960, sur le tournage des Révoltés du Bounty. Il a acheté l'atoll en 1967 et y a construit une cabane. Le resort a ouvert en 2014, vingt-cinq ans après sa demande initiale : un séjour à très faible empreinte, alimenté par climatisation à eau de mer profonde et panneaux solaires. Les trente-cinq villas ont chacune leur plage privée et leur piscine. On n'en voit pas une depuis l'autre. Le moteur des voiturettes électriques est plus discret que les frégates qui crient au-dessus de la cocoteraie.",
        "Le lagon de Tetiaroa abrite la Tetiaroa Society, station de recherche scientifique qui suit les tortues vertes, les raies léopards, les requins citron. Le naturaliste de l'hôtel propose une sortie chaque matin : on traverse à pied vers le motu Reiono, on observe une ponte si la saison s'y prête, on remonte au moment où la chaleur tombe. Le soir, on dîne chez Les Mutinés (le chef étoilé, formé chez Guy Savoy) ou sous la cocoteraie à Bob's Bar, la cabane que Brando avait construite pour son équipe. Aucune des deux options n'est démonstrative.",
      ],
      images: [
        {
          src: "/accommodation/the-brando/split-1.png",
          alt: "Villa de The Brando avec sa piscine privée donnant sur le lagon de Tetiaroa",
        },
        {
          src: "/accommodation/the-brando/split-2.png",
          alt: "Plage privée et cocoteraie d'Onetahi sur l'atoll de Tetiaroa",
        },
      ],
    },

    {
      type: "gallery",
      heading: "Le motu, du lever au coucher",
      description:
        "Onetahi, vu du sol et du ciel. La lumière du Pacifique change quatre fois entre l'aube et midi. Tetiaroa la rend particulièrement lisible.",
      images: [
        {
          src: "/accommodation/the-brando/gallery-1.png",
          alt: "Lagon de Tetiaroa au lever du jour vu depuis une villa de The Brando",
        },
        {
          src: "/accommodation/the-brando/gallery-2.png",
          alt: "Intérieur d'une villa de The Brando en bois et matériaux locaux",
        },
        {
          src: "/accommodation/the-brando/gallery-3.png",
          alt: "Bob's Bar sous la cocoteraie de The Brando à Tetiaroa",
        },
        {
          src: "/accommodation/the-brando/gallery-4.png",
          alt: "Tortue verte dans le lagon de Tetiaroa, station Tetiaroa Society",
        },
      ],
    },

    {
      type: "featureCards",
      eyebrow: "Trois catégories de villa",
      heading: "Où dormir sur Onetahi",
      description:
        "Trente-cinq villas en tout, réparties en trois catégories. Toutes ont une piscine et une plage privées ; ce qui change, c'est la profondeur du jardin et le nombre de chambres.",
      cards: [
        {
          title: "Villa une chambre",
          description:
            "Cent dix mètres carrés, une chambre, une piscine à débordement face au lagon. La plus discrète des trois catégories : on y dort, on lit, on sort directement à l'eau. Quatorze unités sur le motu.", // TODO: verify count
          image: {
            src: "/accommodation/the-brando/villa-1.png",
            alt: "Villa une chambre de The Brando avec piscine privée",
          },
        },
        {
          title: "Villa deux chambres",
          description:
            "Pour un couple avec deux enfants, ou deux couples qui voyagent ensemble. Deux suites séparées par un séjour ouvert sur le jardin. La piscine accueille quatre adultes sans gêne.",
          image: {
            src: "/accommodation/the-brando/villa-2.png",
            alt: "Villa deux chambres de The Brando avec piscine et jardin tropical",
          },
        },
        {
          title: "The Brando Residence",
          description:
            "Trois ou quatre chambres, plage privée, piscine de quinze mètres et personnel dédié (chef, majordome, hôtesse). Adresse retenue par les familles élargies et les voyages de plusieurs générations.", // TODO: verify staff list
          image: {
            src: "/accommodation/the-brando/villa-3.png",
            alt: "The Brando Residence, villa privée à Tetiaroa avec piscine de quinze mètres",
          },
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-background-soft",
      eyebrow: "Expériences et activités en Polynésie",
      heading: "À combiner avec le séjour à Tetiaroa",
      description:
        "Trois expériences ancrées dans le reste de la Polynésie, à programmer en ouverture ou en clôture du séjour sur Onetahi.",
      slugs: ["peche-moorea", "nick-tetautiare", "lagon-moorea"],
    },
    {
      type: "finalCta",
      eyebrow: "Aller plus loin",
      heading: "Envie d'en faire une étape de votre voyage ?",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
    },
  ],
};
