import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "marrakech",
  name: "Marrakech",
  country: "Maroc",
  genitive: "de Marrakech",
  continentSlug: "afrique",
  blurb: "Médina, Atlas, riads, palmeraie",
  keywords: [
    "marrakech",
    "maroc",
    "medina",
    "atlas",
    "palmeraie",
    "riad",
    "souk",
    "ourika",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Marrakech",
      heading:
        "Marrakech. Le bruit s'arrête derrière la bonne porte.",
      description:
        "Médina millénaire, contreforts de l'Atlas à quarante minutes, palmeraie silencieuse au nord. Trois registres de voyage dans un rayon de trente kilomètres. Nous organisons le passage de l'un à l'autre depuis plus de huit ans.",
      images: [
        {
          src: "/destination/marrakech/hero-1.png",
          alt: "Cour intérieure d'un riad dans la médina de Marrakech",
        },
        {
          src: "/destination/marrakech/hero-2.png",
          alt: "Vue sur l'Atlas enneigé depuis la palmeraie de Marrakech",
        },
        {
          src: "/destination/marrakech/hero-3.png",
          alt: "Bassin et jardin d'un palais dans la médina",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une ville qui ne se livre pas au premier passage",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "La médina de Marrakech couvre six cents hectares ceints de remparts en pisé rose. On y entre par une porte, on en sort par une autre, et entre les deux la logique de la ville change quatre fois. Les fondouks du quartier Mouassine, les tombeaux Saadiens, le palais Bahia : chaque strate porte le nom de la dynastie qui l'a construite. Le plan n'aide pas. Le bon guide, si.",
        "À quarante minutes vers le sud, la route de l'Ourika grimpe entre les noyers et les terrasses de culture berbère. L'Atlas se découvre par paliers : vallée d'abord, puis plateau, puis crête à trois mille mètres. On passe d'un souk couvert à un sentier muletier dans la même journée. Ce contraste n'est pas un argument de brochure. C'est la géographie de la région.",
        "La palmeraie au nord, douze mille hectares de palmiers-dattiers, garde un autre rythme. Les adresses y sont espacées, les murs hauts, le silence réel. On n'y vient pas pour visiter. On y revient pour que rien ne se passe.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/marrakech/full-image.png",
        alt: "Toits-terrasses de la médina de Marrakech au crépuscule",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Marrakech — L'artisanat et le geste",
      heading: "Ce qui se fabrique encore à la main",
      theme: "light",
      paragraphs: [
        "Dans le souk des teinturiers, le cuir trempe dans des cuves de chaux depuis le XIe siècle. Le procédé n'a pas changé. Les peaux montent sur les terrasses pour sécher au soleil, et l'odeur — âcre, minérale — signale le quartier avant qu'on ne le voie. Plus loin, rue Amesfah, un maître zelligeur découpe les tesselles à l'œil, sans gabarit. Chaque pièce est un losange irrégulier qui trouvera sa place dans un motif géométrique de huit mille fragments.",
        "Le geste artisanal à Marrakech n'est pas une mise en scène pour visiteurs. C'est une économie. Les ateliers de dinanderie, de marqueterie de thuya, de broderie fassi emploient des familles entières. On y entre par une porte sans enseigne, on s'assoit, on regarde. Le bruit du marteau sur le cuivre est le même depuis quatre siècles.",
      ],
      images: [
        {
          src: "/destination/marrakech/split-1.png",
          alt: "Artisan zelligeur découpant des tesselles dans un atelier de la médina",
        },
        {
          src: "/destination/marrakech/split-2.png",
          alt: "Cuves de teinture dans les tanneries de Marrakech",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/marrakech/zellige.png",
          alt: "Mosaïque zellige dans une fontaine de la medersa Ben Youssef",
        },
        right: {
          src: "/destination/marrakech/jardinier.png",
          alt: "Jardinier taillant un oranger dans un riad de la médina",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La medersa Ben Youssef avant l'ouverture",
        columns: [
          "La medersa ouvre au public à neuf heures. À sept heures trente, le gardien fait le tour des cent trente-deux chambres d'étudiants et du bassin central. La lumière entre par le patio à un angle qui n'existe qu'à cette heure-là : rasante, dorée, sans ombre portée sur les stucs. On a trente minutes avant le premier groupe.",
          "Ce type d'accès ne s'achète pas en ligne. Il repose sur une relation construite avec les conservateurs du patrimoine de la médina. Une poignée de main, un thé, une promesse de discrétion. Le résultat : un moment qui n'appartient qu'à ceux qui savent qu'il existe.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Trois expériences",
      heading: "Ce qu'on fait, concrètement",
      description:
        "Des accès négociés, des personnes nommées. Ni circuit organisé, ni improvisation : une logique construite sur place depuis des années.",
      cta: { label: "Voir tous les coups de cœur", href: "/experiences" },
      slugs: ["hammam-dar-el-bacha", "cuisine-palais-bahia", "survol-atlas-biplan"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements à Marrakech",
      heading: "Où séjourner",
      description:
        "Trois registres : le palais discret dans la médina, le domaine d'architecte en palmeraie, la kasbah dans la vallée du Dadès. Le niveau se lit dans le silence, pas dans la décoration.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["royal-mansour", "amanjena", "dar-ahlam"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage à Marrakech",
      description:
        "Monnaie, formalités, vol, décalage : l'essentiel pour partir sereinement.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description: "3h20 depuis Paris en vol direct. Plusieurs liaisons quotidiennes (RAM, Air France, Transavia).", // TODO: verify
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description: "GMT+1 toute l'année. Aucun décalage avec la France en hiver, −1h en été.", // TODO: verify
        },
        {
          iconName: "euro",
          title: "Monnaie",
          description: "Dirham marocain (MAD). 1 € ≈ 11 MAD. Change facile sur place, carte acceptée dans les établissements haut de gamme.", // TODO: verify
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description: "Passeport valide six mois après la date d'entrée. Pas de visa pour les ressortissants français (séjour ≤ 90 jours).",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description: "Aucun vaccin obligatoire. Mise à jour DTP recommandée. Hépatite A conseillée.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description: "Octobre à mai. Éviter juin-août (chaleur intense, 40 °C+). Le printemps offre la floraison des jardins.", // TODO: verify
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description: "Arabe dialectal (darija), amazigh, français courant dans le secteur touristique.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Voyage sur mesure à Marrakech",
      description:
        "Connaissance du terrain, réseau local, un seul interlocuteur du premier échange jusqu'au retour. Ce que nous mettons en place, vous n'avez pas à le vérifier.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: [
        {
          title: "Itinéraires médina–Atlas",
          description:
            "Nous assemblons les deux registres — ville et montagne — dans une logique de rythme, pas de distance.",
          image: {
            src: "/destination/marrakech/bento-map.png",
            alt: "Carte d'itinéraire personnalisé Marrakech et Atlas",
          },
          tone: "dark",
        },
        {
          title: "Adresses hors circuits",
          description:
            "Riads sans enseigne, tables de famille, ateliers fermés au public. Des portes qui ne s'ouvrent pas seules.",
          image: {
            src: "/destination/marrakech/bento-adresses.png",
            alt: "Porte sculptée dans un derb de la médina",
          },
        },
        {
          title: "Hébergements de caractère",
          description:
            "Palais restauré, domaine en palmeraie, kasbah dans la vallée. Chaque adresse a une raison d'être dans l'itinéraire.",
          image: {
            src: "/destination/marrakech/bento-aerien.png",
            alt: "Vue aérienne de la palmeraie de Marrakech",
          },
        },
        {
          title: "Conciergerie sur place",
          description:
            "Transferts privés, réservations de dernière minute, ajustements en temps réel. Réponse sous une heure.",
          image: {
            src: "/destination/marrakech/bento-conciergerie.png",
            alt: "Voiture privée devant un riad de Marrakech",
          },
        },
        {
          title: "Accès négociés",
          description:
            "Guides diplômés, conservateurs, artisans, familles. Des personnes qui connaissent la ville pour y vivre.",
          image: {
            src: "/destination/marrakech/bento-experience.png",
            alt: "Guide et visiteurs dans un fondouk restauré",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Marrakech",
      heading: "Six lieux, et ce qu'il y a derrière",
      description:
        "Médina, palmeraie, vallées de l'Atlas : chaque lieu tient une promesse distincte. Voici ceux autour desquels s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 9,
      places: [
        {
          title: "La medersa Ben Youssef",
          description:
            "Fondée au XIVe siècle, restaurée en 1565 sous les Saadiens. Cent trente-deux chambres d'étudiants organisées autour d'un bassin rectangulaire. Le décor de stuc, zellige et bois de cèdre est intact.",
          image: {
            src: "/destination/marrakech/map-medersa.png",
            alt: "Patio de la medersa Ben Youssef",
          },
          coordinates: { lat: 31.6317, lng: -7.9867 }, // TODO: verify coords
        },
        {
          title: "La vallée de l'Ourika",
          description:
            "Quarante minutes de route vers le sud. Les terrasses de culture berbère grimpent entre les noyers jusqu'aux cascades de Setti Fatma. Le marché du lundi rassemble les villages de la vallée.",
          image: {
            src: "/destination/marrakech/map-ourika.png",
            alt: "Terrasses cultivées dans la vallée de l'Ourika",
          },
          coordinates: { lat: 31.3667, lng: -7.8000 }, // TODO: verify coords
        },
        {
          title: "Le palais Bahia",
          description:
            "Huit hectares de cours, de jardins et de salons construits à la fin du XIXe siècle pour le grand vizir Ba Ahmed. Les plafonds peints en bois de cèdre sont d'origine.",
          image: {
            src: "/destination/marrakech/map-bahia.png",
            alt: "Cour intérieure du palais Bahia",
          },
          coordinates: { lat: 31.6216, lng: -7.9833 }, // TODO: verify coords
        },
        {
          title: "Le plateau du Kik — Atlas",
          description:
            "À une heure de route. Un plateau à 1 800 mètres d'altitude face à la chaîne du Toubkal. Pas de tourisme organisé. Un berger, des troupeaux, un silence de montagne.",
          image: {
            src: "/destination/marrakech/map-kik.png",
            alt: "Plateau du Kik avec vue sur le Toubkal enneigé",
          },
          coordinates: { lat: 31.2500, lng: -8.1000 }, // TODO: verify coords
        },
        {
          title: "Les jardins de l'Agdal",
          description:
            "Créés au XIIe siècle par les Almohades, irrigués par des khettaras souterraines depuis huit cents ans. Douze hectares d'oliviers et d'agrumes ceints de murs en pisé. Ouverts le vendredi et le dimanche uniquement.",
          image: {
            src: "/destination/marrakech/map-agdal.png",
            alt: "Bassin et oliviers des jardins de l'Agdal",
          },
          coordinates: { lat: 31.6100, lng: -7.9850 }, // TODO: verify coords
        },
        {
          title: "Skoura — la palmeraie du Dadès",
          description:
            "Deux heures trente de route vers l'est. Une palmeraie traversée de kasbahs en terre, dont celle d'Amridil. Le rythme change : on passe de la ville rouge au silence ocre du pré-Sahara.",
          image: {
            src: "/destination/marrakech/map-skoura.png",
            alt: "Kasbah en pisé dans la palmeraie de Skoura",
          },
          coordinates: { lat: 31.0631, lng: -6.5553 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Marrakech",
      description:
        "Quatre observations de terrain qui changent la façon d'aborder la ville et ses environs.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Chaussures fermées pour la médina, lin léger pour la chaleur sèche, laine pour les soirées Atlas",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La médina se parcourt à pied sur des sols irréguliers — dalles,
                terre battue, pavés disjoints. Des chaussures fermées et
                confortables sont indispensables. Pour le reste : lin ou coton
                léger en journée, une veste en laine pour les soirées si
                l'itinéraire monte dans l'Atlas (les nuits à 1 800 m descendent
                à 8 °C en avril).
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoir un foulard léger pour les épaules dans les lieux de
                culte et les medersas. Ce n'est pas toujours obligatoire, mais
                toujours apprécié.
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire, eau en bouteille, soleil puissant même en hiver",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pas de vaccin obligatoire pour le Maroc. Hépatite A recommandée
                par prudence, DTP à jour. L'eau du robinet n'est pas potable
                dans l'usage courant — tous les établissements fournissent de
                l'eau en bouteille.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le soleil est intense même en hiver (UV 6–8 en décembre).
                Chapeau et crème solaire indispensables sur les terrasses et
                dans l'Atlas.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Octobre à mai pour la ville, avril-mai pour les jardins en fleur et l'Atlas sans neige basse",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                D'octobre à mai, les températures oscillent entre 18 et 28 °C.
                Juin à septembre dépasse régulièrement 40 °C — la ville se
                vide, les terrasses ferment à midi. Le printemps (mars-mai)
                combine jardins en floraison, Atlas accessible sans neige basse,
                et affluence modérée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous décalons les visites de la médina tôt le matin (7h30–10h)
                et réservons les après-midi aux transferts Atlas ou au repos en
                riad. Le rythme suit la chaleur, pas l'inverse.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dirham marocain, pourboires attendus, marchandage dans les souks uniquement",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le dirham marocain (MAD) ne se change pas hors du Maroc — prévoir
                le retrait sur place ou le change à l'arrivée. Les établissements
                haut de gamme acceptent la carte. Dans les souks, le paiement est
                en espèces et le prix se négocie (diviser le premier prix par
                deux est un point de départ, pas une règle).
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les pourboires (10–20 MAD par service) sont attendus et
                constituent une part réelle du revenu des guides, gardiens et
                personnels de maison. Nous fournissons une enveloppe de petites
                coupures à l'arrivée.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "testimonials",
      eyebrow: "Témoignages",
      heading: "Ils ont vécu l'expérience Exuma",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "On a passé trois jours dans la médina sans croiser un seul groupe organisé. Notre guide connaissait chaque porte, chaque artisan par son prénom. Le dernier soir, un dîner sur un toit-terrasse qu'aucun guide ne mentionne.",
          image: {
            src: "/destination/marrakech/hero-1.png",
            alt: "Portrait",
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Séjour en couple, mars 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le passage de la ville à l'Atlas s'est fait sans transition visible. Un matin on était dans les souks, l'après-midi sur un plateau à 2 000 mètres avec un berger qui nous a montré comment il lit le ciel pour prévoir la météo du lendemain.",
          image: {
            src: "/destination/marrakech/hero-2.png",
            alt: "Portrait",
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage en famille, avril 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marqué : le hammam privé à sept heures du matin, le silence total, la vapeur, la lumière par les moucharabiehs. Trente minutes qui ont changé le rythme de toute la journée.",
          image: {
            src: "/destination/marrakech/hero-3.png",
            alt: "Portrait",
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Escapade solo, novembre 2024", // TODO: replace with real testimonial
        },
      ],
    },

    {
      type: "faq",
      background: "bg-white",
      eyebrow: "FAQ",
      heading: "Questions fréquentes",
      contact: {
        prefix: "Besoin d'un renseignement ? ",
        label: "Contactez votre travel designer",
        href: "/contact",
        suffix: " pour une réponse personnalisée.",
      },
      items: [
        {
          question: "Quelle est la meilleure période pour partir à Marrakech ?",
          answer:
            "D'octobre à mai, les températures sont agréables (18–28 °C) et la lumière idéale. Le printemps offre la floraison des jardins et un Atlas accessible. Évitez juin à septembre : la ville dépasse régulièrement 40 °C.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Trois heures vingt en vol direct. Plusieurs liaisons quotidiennes depuis Paris-Orly et Roissy (Royal Air Maroc, Air France, Transavia).", // TODO: verify
        },
        {
          question: "Faut-il un visa pour le Maroc ?",
          answer:
            "Non pour les ressortissants français et européens (séjour ≤ 90 jours). Un passeport valide six mois après la date d'entrée est requis.",
        },
        {
          question: "Combien de jours prévoir à Marrakech ?",
          answer:
            "Quatre à cinq jours permettent de couvrir la médina, une excursion Atlas (vallée de l'Ourika ou plateau du Kik), et un temps de repos en riad ou palmeraie. Pour intégrer Skoura ou Essaouira, comptez sept à huit jours.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Nous adaptons le rythme : visites courtes le matin, piscine en riad l'après-midi, ateliers (poterie, cuisine) accessibles dès six ans. Les transferts sont privés et les distances courtes.",
        },
        {
          question: "Quel budget prévoir ?",
          answer:
            "Pour un séjour de cinq jours avec hébergement en riad de caractère, guide privé, transferts et expériences, comptez entre 3 500 et 6 000 € par personne selon le niveau d'hébergement et la saison.", // TODO: verify
        },
      ],
    },
  ],
};
