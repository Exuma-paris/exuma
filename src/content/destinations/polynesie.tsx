import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "polynesie",
  name: "Polynésie française",
  country: "Polynésie française",
  continentSlug: "iles-oceanie",
  blurb: "Bora Bora, Tahiti, Taha'a, Moorea, les Marquises",
  keywords: [
    "polynesie",
    "tahiti",
    "bora bora",
    "moorea",
    "tahaa",
    "marquises",
    "pacifique",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Polynésie française",
      heading:
        "Il y a en Polynésie une lumière qui change quatre fois avant midi. On ne sait pas pourquoi on le remarque. On ne l'oublie pas.",
      description:
        "Cinq archipels, cent dix-huit îles. Ce que nous construisons ici, c'est la logique qui relie les îles entre elles. Pas un programme à suivre. Un itinéraire qui a du sens.",
      images: [
        {
          src: "/destination/polynesie/hero-1.png",
          alt: "Plage de sable blanc bordée de cocotiers en Polynésie",
        },
        {
          src: "/destination/polynesie/hero-2.png",
          alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
        },
        {
          src: "/destination/polynesie/hero-3.png",
          alt: "Piscine à débordement d'une villa de luxe en Polynésie",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Polynésie française ?",
      heading:
        "Stéphane, spécialiste de la Polynésie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        quote:
          "Voyager en Polynésie, c'est découvrir des paysages époustouflants, des plages de sable fin et une culture riche. Une aventure unique qui éveille les sens et nourrit l'âme.",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Conciergerie 24/7",
          description:
            "Assistance discrète, fast-track, chauffeurs privés et réservations exclusives.",
        },
        {
          iconName: "sparkles",
          title: "Sur mesure",
          description:
            "Un travel designer dédié, expert de la Polynésie, façonne votre voyage selon vos envies.",
        },
        {
          iconName: "star",
          title: "Exclusif",
          description:
            "Accédez à des expériences rares, villas isolées et cérémonies polynésiennes authentiques.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un archipel, pas une destination",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "À Fakarava, le fond du lagon est visible à quarante mètres de profondeur. On voit son ombre sur le sable avant même d'avoir sauté du bateau. Cette clarté n'est pas un détail de brochure. C'est la mesure de ce que la Polynésie a encore préservé, et de ce que le reste du monde a, depuis longtemps, perdu de vue.",
        "Ce que nous construisons pour chaque voyage, c'est la logique qui relie les îles entre elles. Pas un programme à suivre, mais un itinéraire qui a du sens. La semaine à Moorea avant les Tuamotu. Le passage par Raiatea pour le marae de Taputapuatea, classé au patrimoine mondial de l'UNESCO. Les deux nuits sur Tetiaroa en ouverture ou en clôture, quand on a besoin que rien ne presse. Chaque déplacement a une raison. Cette raison change la qualité de ce qu'on ressent en arrivant.",
        "« Il n'y a pas une Polynésie. Il y a celle qu'on voit depuis un bungalow sur pilotis, et celle qu'on découvre avec les bonnes personnes. Entre les deux, il y a tout le voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/polynesie/full-image.png",
        alt: "Lagon de Fakarava vu du ciel, archipel des Tuamotu",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les étoiles du Pacifique, Bora Bora",
      heading: "Le soir où le ciel change de sens",
      theme: "light",
      paragraphs: [
        "Le bateau quitte Bora Bora au moment précis où le ciel commence à changer de couleur. Pas au coucher du soleil officiel. Avant. Quand le bleu se teinte d'orange sur le bord et que le lagon prend la couleur qu'il ne montrera jamais en plein jour. Le guide parle peu pendant la traversée. Il montre. La main tendue vers les étoiles qui apparaissent une à une, il explique comment les navigateurs polynésiens lisaient le ciel avant que les cartes n'existent.",
        "Tupaia, le navigateur qui accompagna Cook en 1769, connaissait de mémoire la position de soixante-quatorze îles dans l'ensemble du Pacifique. Il les cartographiait par les étoiles. On accoste sur le motu à la nuit tombée. Il n'y a aucune lumière artificielle visible depuis la plage. Le ciel en Polynésie, loin des côtes, n'est pas le même ciel qu'ailleurs. Les enfants s'allongent dans le sable. Les adultes aussi.",
      ],
      images: [
        {
          src: "/destination/polynesie/split-1.png",
          alt: "Pirogue traditionnelle sur un lagon au coucher du soleil",
        },
        {
          src: "/destination/polynesie/split-2.png",
          alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Trois expériences",
      heading: "Sur place, concrètement",
      description:
        "Des moments vécus, ancrés dans des personnes. Ni démonstrations, ni programme : des accès qui ne se trouvent pas en cherchant.",
      cta: { label: "Voir tous les coups de coeurs", href: "/experiences" },
      slugs: ["peche-moorea", "nick-tetautiare", "lagon-moorea"],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/polynesie/ceremony.png",
          alt: "Cérémonie traditionnelle polynésienne sous un fare",
        },
        right: {
          src: "/destination/polynesie/image-homme.png",
          alt: "Homme polynésien tatoué jouant du pu (conque)",
        },
      },
      text: {
        eyebrow: "Notre approche",
        heading: "Une façon particulière d'y aller",
        columns: [
          "La Polynésie ne se visite pas dans l'ordre. On n'y avance pas d'est en ouest ni du nord au sud. On y gravite, d'un archipel à l'autre, selon ce que l'on cherche à ce moment-là du voyage. Ce que nous construisons, c'est cette logique de déplacement. Pas un programme. Une cohérence.",
          "Sur chaque dossier Polynésie, plusieurs expertises se mobilisent : la connaissance des archipels, les hébergements hors réseaux de distribution, la logistique de connexion entre les îles, les accès négociés localement avec des personnes qui connaissent les îles pour y vivre. Un seul interlocuteur coordonne l'ensemble et reste le vôtre du premier échange jusqu'au retour.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner",
      description:
        "Quatre adresses choisies pour ce qu'elles sont, pas pour ce qu'elles disent. Le niveau se lit dans le texte, pas dans les étoiles.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["the-brando", "le-tahaa", "st-regis-bora-bora"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Ce qu'il faut savoir avant de partir",
      description:
        "Monnaie, formalités, escale, temps de vol, décalage et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "euro",
          title: "Monnaie",
          description:
            "La Polynésie a sa propre monnaie, le franc CFP, fixé à l'euro depuis 1945. 1 € ≈ 119 francs CFP, sans risque de variation.",
        },
        {
          iconName: "fileText",
          title: "Formalités",
          description:
            "Un passeport valide est recommandé pour tous. La carte d'identité française ne suffit pas pour transiter aux États-Unis lors de l'escale.",
        },
        {
          iconName: "plane",
          title: "Escale",
          description:
            "La plupart des vols depuis Paris font escale à Los Angeles. Une autorisation ESTA est obligatoire (≈ 21 $, en ligne, quelques heures). Nous l'anticipons pour chaque client.",
        },
        {
          iconName: "clock",
          title: "Temps de vol",
          description:
            "Comptez entre 21 et 23 heures depuis Paris, escale comprise. Air Tahiti Nui propose un vol direct saisonnier depuis Charles-de-Gaulle.",
        },
        {
          iconName: "clock",
          title: "Décalage",
          description:
            "12 heures d'avance sur la France en hiver, 11 en été. Le premier jour sur place se récupère naturellement.",
        },
        {
          iconName: "calendarDays",
          title: "Quand partir",
          description:
            "De mai à octobre, climat le plus agréable. Novembre et avril restent très bien, avec moins de visiteurs. Baleines à bosse d'août à octobre.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Notre rôle dans ce voyage",
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Polynésie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: [
        {
          title: "Connaissance des archipels",
          description:
            "Cinq archipels, cent dix-huit îles. Nous savons lesquels assembler, dans quel ordre, et pourquoi.",
          image: {
            src: "/destination/polynesie/bento-map.png",
            alt: "Carte d'itinéraire personnalisé en Polynésie",
          },
          tone: "dark",
        },
        {
          title: "Hébergements hors réseaux",
          description:
            "Des adresses qui ne se trouvent pas dans les moteurs de réservation. Maisons, motu privés, lodges familiaux.",
          image: {
            src: "/destination/polynesie/bento-huahine.png",
            alt: "Végétation luxuriante de Huahine",
          },
        },
        {
          title: "Logistique inter-îles",
          description:
            "Vols domestiques, transferts privés, taxi-boat, hydravion. Ce que nous mettons en place, vous n'avez pas à le vérifier.",
          image: {
            src: "/destination/polynesie/bento-aerien.png",
            alt: "Vue aérienne d'un atoll polynésien",
          },
        },
        {
          title: "Accès négociés localement",
          description:
            "Avec des personnes qui connaissent les îles pour y vivre. Pêcheurs, navigateurs, guides, familles.",
          image: {
            src: "/destination/polynesie/bento-homme.png",
            alt: "Habitant polynésien dans son environnement",
          },
        },
        {
          title: "Un seul interlocuteur",
          description:
            "Du premier échange jusqu'au retour. Les transferts sont privés. Les ajustements de dernière minute, gérés.",
          image: {
            src: "/destination/polynesie/bento-plongee.png",
            alt: "Plongeur nageant avec des raies mantas",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les îles",
      heading: "Les îles à connaître",
      description:
        "Une fois la carte des archipels posée, chaque île tient une promesse distincte. Voici celles autour desquelles s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Bora Bora",
          description:
            "Le lagon est réel, exactement la couleur des photographies. La densité des resorts l'est aussi. À aborder par les hauteurs.",
          image: {
            src: "/destination/polynesie/map-huahine.png",
            alt: "Vue aérienne de Bora Bora",
          },
          coordinates: { lat: -16.5004, lng: -151.7415 },
        },
        {
          title: "Huahine",
          description:
            "Une île restée à l'écart. Vie locale intacte, marae enfouis dans la végétation, baies profondes.",
          image: {
            src: "/destination/polynesie/map-huahine.png",
            alt: "Plage tropicale de Huahine",
          },
          coordinates: { lat: -16.7333, lng: -150.9833 },
        },
        {
          title: "Raiatea",
          description:
            "L'île sacrée, berceau de la civilisation polynésienne. Le marae de Taputapuatea est classé au patrimoine mondial UNESCO.",
          image: {
            src: "/destination/polynesie/map-raiatea.png",
            alt: "Côte verdoyante de Raiatea",
          },
          coordinates: { lat: -16.8333, lng: -151.4333 },
        },
        {
          title: "Taha'a",
          description:
            "L'île vanille. 80 % de la vanille polynésienne pousse ici. L'air en porte le parfum dès qu'on pose les bagages.",
          image: {
            src: "/destination/polynesie/map-tahaa.png",
            alt: "Lagon de Taha'a",
          },
          coordinates: { lat: -16.6167, lng: -151.497 },
        },
        {
          title: "Tetiaroa",
          description:
            "L'atoll n'a pas de route. L'avion dépose les passagers sur une bande de sable entre deux lagons. The Brando occupe le lieu.",
          image: {
            src: "/destination/polynesie/map-tetiaroa.png",
            alt: "Atoll de Tetiaroa vu du ciel",
          },
          coordinates: { lat: -17.0133, lng: -149.5597 },
        },
        {
          title: "Tuamotu",
          description:
            "Plus grand archipel de Polynésie, paradis des plongeurs. À Fakarava, la passe de Garuae se plonge tôt le matin.",
          image: {
            src: "/destination/polynesie/map-tuamotu.png",
            alt: "Eaux cristallines des Tuamotu",
          },
          coordinates: { lat: -15.9167, lng: -145.5167 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage en Polynésie française",
      description:
        "Quelques repères concrets pour préparer le séjour : ce qu'on emporte, ce qu'on anticipe côté santé, la fenêtre idéale, et comment fonctionne la vie sur place.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vêtements légers, crème solaire reef-safe, anti-moustiques : l'essentiel pour voyager serein.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Passeport valide recommandé pour tous les voyageurs, quelle que
                soit la nationalité. La carte d'identité française est en
                théorie acceptée pour entrer en Polynésie, mais elle ne suffit
                pas pour transiter aux États-Unis lors de l'escale.
              </p>
              <p>
                « Nous vérifions systématiquement les formalités de chacun de
                nos clients avant le départ. »
              </p>
              <h4 className="font-medium">Sur place :</h4>
              <p>
                Tenue légère, maillot, chaussures de bateau, masque et tuba si
                vous y tenez. Crème solaire reef-safe obligatoire dans
                plusieurs lagons protégés. Anti-moustiques utile en intérieur
                d'île.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                « Nos clients reçoivent une checklist personnalisée selon les
                activités prévues, environ 3 semaines avant le départ. »
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire, mais quelques précautions à connaître avant de partir.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pas de vaccin obligatoire. Mise à jour des vaccins universels
                recommandée. Pas de paludisme. Présence ponctuelle de dengue,
                chikungunya et zika : l'anti-moustique reste la meilleure
                protection.
              </p>
              <p>
                Numéros d'urgence locaux remis à l'arrivée. Infrastructures
                médicales correctes à Papeete, plus limitées sur les îles
                isolées.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage adaptée fournie par notre
                équipe avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à octobre pour un climat sec et doux, idéal pour explorer les îles.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison la plus agréable s'étend de mai à octobre, avec
                moins d'humidité et des vents réguliers. Novembre et avril
                restent très bien, avec sensiblement moins de visiteurs.
              </p>
              <p>
                Les baleines à bosse sont présentes d'août à octobre,
                principalement autour de Tahiti, Moorea et Rurutu.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                « La fenêtre que nous recommandons en priorité va de mi-mai à
                fin septembre. Climat stable, lumière exceptionnelle, peu de
                pluie. »
              </p>
            </div>
          ),
        },
        {
          title: "Budget & vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Franc CFP fixé à l'euro, transferts privés, et les bons réflexes pour la vie sur place.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Monnaie locale : franc CFP, fixé à l'euro depuis 1945
                (1 € ≈ 119 CFP). Pas de fluctuation de change. Carte bancaire
                acceptée presque partout, espèces utiles sur les petites îles.
              </p>
              <p>
                Le pourboire n'est pas une obligation culturelle. Il est
                apprécié quand le service a été personnel.
              </p>
              <h4 className="font-medium">Transports sur place :</h4>
              <p>
                Vols domestiques (Air Tahiti), transferts privés, taxi-boat,
                hydravion selon les îles. Les inter-îles se planifient en
                amont.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                « Nous organisons systématiquement tous les transferts de nos
                clients : chauffeur privé, taxi-boat, hydravion. »
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
          quote:
            "Notre voyage en Polynésie avec Exuma a été un rêve éveillé. Chaque détail était pensé, chaque île une découverte. Le bungalow sur pilotis à Bora Bora restera gravé dans nos mémoires.",
          image: {
            src: "/destination/polynesie/hero-1.png",
            alt: "Portrait de Sophie et Marc",
          },
          name: "Sophie & Marc",
          role: "Voyage de noces, octobre 2025",
        },
        {
          quote:
            "Grâce à notre travel designer, nous avons découvert des endroits que nous n'aurions jamais trouvés seuls. La plongée à Fakarava, le dîner sur le motu… des moments magiques.",
          image: {
            src: "/destination/polynesie/hero-2.png",
            alt: "Portrait de Laurent",
          },
          name: "Laurent",
          role: "Séjour en famille, août 2025",
        },
        {
          quote:
            "Ce qui m'a le plus marquée, c'est la qualité de l'accompagnement. Tout était fluide, du premier appel jusqu'au retour. On se sent véritablement pris en charge.",
          image: {
            src: "/destination/polynesie/hero-3.png",
            alt: "Portrait de Claire",
          },
          name: "Claire",
          role: "Escapade solo, mai 2025",
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
          question: "Quelle est la meilleure période pour partir ?",
          answer:
            "La saison la plus agréable s'étend de mai à octobre, avec moins d'humidité et des vents réguliers. Novembre et avril restent très bien, avec sensiblement moins de visiteurs. Les baleines à bosse sont présentes d'août à octobre.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez entre 21 et 23 heures de voyage depuis Paris, escale comprise. Air Tahiti Nui propose un vol direct saisonnier depuis Charles-de-Gaulle. Air France dessert Papeete via Los Angeles ou Tokyo.",
        },
        {
          question: "Faut-il un visa pour la Polynésie française ?",
          answer:
            "Pas de visa pour les ressortissants de l'Union européenne. Un passeport valide est recommandé pour tous : la carte d'identité française ne suffit pas pour transiter aux États-Unis lors de l'escale. Une autorisation ESTA (≈ 21 $) est obligatoire pour cette escale, et nous l'anticipons pour chaque client.",
        },
        {
          question: "Combien d'îles peut-on visiter en deux semaines ?",
          answer:
            "Nous recommandons 3 à 4 îles pour un séjour de 14 jours, afin de profiter pleinement de chaque escale sans passer trop de temps en transit. Chaque déplacement a une raison ; cette raison change la qualité de ce qu'on ressent en arrivant.",
        },
        {
          question: "Quelle monnaie utilise-t-on sur place ?",
          answer:
            "Le franc CFP, monnaie propre à la Polynésie française, fixé à l'euro depuis 1945 (1 € ≈ 119 CFP). Pas de risque de variation de cours. Retrait de francs CFP sur place, carte bancaire acceptée presque partout.",
        },
        {
          question: "Quel est le décalage horaire avec la France ?",
          answer:
            "12 heures d'avance sur la France en hiver, 11 heures en été. Le premier jour sur place se récupère naturellement. Le décalage joue en faveur des lève-tôt.",
        },
      ],
    },
  ],
};
