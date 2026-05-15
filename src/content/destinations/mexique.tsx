import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "mexique",
  name: "Mexique",
  country: "Mexique",
  continentSlug: "ameriques",
  heroImage: {
    src: "/destination/mexique/hero-1.png",
    alt: "Baleine grise à la surface à Laguna San Ignacio, Baja California Sur, Mexique",
  },
  blurb: "Oaxaca, la Baja California, le Yucatán",
  keywords: [
    "mexique",
    "oaxaca",
    "yucatan",
    "baja-california",
    "cenotes",
    "baleine-grise",
    "mezcal",
    "maya",
  ],
  metaTitle: "Mexique — Voyage sur mesure",
  metaDescription:
    "Voyage au Mexique sur mesure : Oaxaca, Yucatán, Baja California, Mexico City. Baleines grises, cénotes, gastronomie maya. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    // 1. hero
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Mexique",
      heading:
        "Mexique. Oaxaca, la Baja California, le Yucatán : trois pays dans un seul passeport.",
      description:
        "Mexico City, les lagunes à baleines de Baja, les cénotes du Yucatán, les villages mezcaleros d'Oaxaca : chaque région tient une logique propre. Un voyage au Mexique se construit autour de ce qu'on veut vraiment traverser.",
      images: [
        {
          src: "/destination/mexique/hero-1.png",
          alt: "Baleine grise approchant un bateau à Laguna San Ignacio, Baja California Sur, Mexique",
        },
        {
          src: "/destination/mexique/hero-2.png",
          alt: "Ruines de Monte Albán au coucher du soleil, vallée d'Oaxaca, Mexique",
        },
        {
          src: "/destination/mexique/hero-3.png",
          alt: "Cénote Ik Kil aux eaux translucides entouré de végétation, Yucatán, Mexique",
        },
      ],
    },

    // 2. specialistSpotlight
    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Mexique ?",
      heading: "Stéphane, spécialiste Amériques, vous partage son approche",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane", // TODO: verify collaborateurSlug
        // TODO: verify quote attribution
        quote:
          "La première fois qu'une baleine grise a tendu la tête vers notre bateau à Laguna San Ignacio, j'ai compris pourquoi certains clients reviennent au Mexique tous les ans pour ça, et rien d'autre.",
        role: "Travel Designer · Amériques", // TODO: verify
      },
      features: defaultSpotlightFeatures,
    },

    // 3. textColumns
    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Mexique",
      heading: "Un pays qui exige de choisir",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage au Mexique ne se fait pas dans l'ordre géographique. La Baja California est à cinq heures de vol de la péninsule du Yucatán. Oaxaca est à deux heures de Mexico City mais dans un autre siècle. Mexico City elle-même tient dix jours de programme sans se répéter. Le premier travail est de décider ce qu'on cherche.",
        "Le Yucatán pour la civilisation maya, les cénotes et une cuisine qui vient de cinq millénaires de pratique. Oaxaca pour les marchés, le mezcal artisanal et les ruines zapotèques de Monte Albán. La Baja California pour le désert, la mer de Cortez et les baleines grises de janvier à avril. Chaque région peut tenir un voyage entier.",
        "Un itinéraire bien construit au Mexique combine deux ou trois terrains qui se répondent, sans chercher à tout couvrir. La tentation d'additionner est réelle. Ce que nous construisons, c'est la cohérence entre les étapes.\n\n« Ce n'est pas un pays où l'on arrive avec un programme. C'est un pays où l'on revient avec les bonnes questions. »",
      ],
    },

    // 4. fullImage
    {
      type: "fullImage",
      image: {
        src: "/destination/mexique/full-image.png",
        alt: "Pyramide de Kukulkán à Chichen Itzá dans la lumière de l'aube, Yucatán, Mexique",
      },
      height: 600,
    },

    // 5. textImagesSplit
    {
      type: "textImagesSplit",
      eyebrow: "Oaxaca, Mexique",
      heading: "La vallée qui produit le mezcal le plus copié du monde",
      theme: "light",
      paragraphs: [
        "Les routes qui descendent vers Santiago Matatlán traversent des champs d'agave bleu-vert à perte de vue. C'est la capitale mondiale du mezcal, une ville de 10 000 habitants qui concentre plus de 400 producteurs artisanaux. La plante pousse dix à trente ans avant d'être récoltée une seule fois. Ce délai explique le prix, et aussi pourquoi les maestros vinateros transmettent leur métier comme un secret de famille.",
        "À 40 kilomètres de là, les ruines zapotèques de Monte Albán dominent la vallée depuis 2 500 mètres d'altitude. Le site a été fondé vers 500 avant J.-C. et abandonné vers 700 après J.-C. pour des raisons que les archéologues discutent encore. Le marché de Oaxaca City, lui, n'a jamais été abandonné : le mole negro, les tlayudas et le tasajo y sont les mêmes depuis des générations.",
        "Ce que les guides ne précisent pas : les meilleurs ateliers de producteurs n'ont pas de site web et ne reçoivent pas à l'improviste. L'accès se prépare en amont, via des contacts locaux. Nous les avons.",
      ],
      images: [
        {
          src: "/destination/mexique/split-1.png",
          alt: "Champs d'agave bleu-vert dans la vallée de Oaxaca, Mexique",
        },
        {
          src: "/destination/mexique/split-2.png",
          alt: "Ruines zapotèques de Monte Albán sur les hauteurs de la vallée d'Oaxaca, Mexique",
        },
      ],
    },

    // 6. entityList — régions du Mexique
    {
      type: "entityList",
      kind: "destination",
      background: "bg-background-soft",
      eyebrow: "Inspirations",
      heading: "Oaxaca ne ressemble pas au Yucatán. Le Yucatán ne ressemble pas à la Baja.",
      description:
        "Chaque région est un voyage en soi. Voici pourquoi nous en choisissons deux, jamais les trois.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["oaxaca", "yucatan", "baja-california"],
    },

    // 7. imageDuoWithText — Notre coup de cœur : rencontre baleine grise Baja
    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/mexique/xp-baleine-grise-baja.png",
          alt: "Baleine grise tendant la tête hors de l'eau face à un bateau, Laguna San Ignacio, Baja California",
        },
        right: {
          src: "/destination/mexique/xp-baleine-grise-main.png",
          alt: "Main tendue vers une baleine grise à la surface, Laguna San Ignacio, Baja California Sur",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La baleine qui vient à vous",
        columns: [
          "Laguna San Ignacio, Baja California Sur. Chaque année de janvier à avril, les baleines grises remontent des eaux froides de l'Alaska pour donner naissance dans cette lagune classée au patrimoine mondial de l'UNESCO. Ce qui se passe ici n'existe nulle part ailleurs : les baleines approchent les bateaux volontairement. Elles tendent la tête hors de l'eau. Le contact est réel, à bout de bras, avec un cétacé de 15 mètres. Aucune cage, aucune protection. Juste l'eau entre vous et elle.",
          "L'expérience se fait en petit bateau, six personnes maximum, avec un guide local qui connaît les familles de baleines par leurs marques individuelles. La durée en mer est de deux à trois heures selon les comportements du jour. La saison est courte et les places limitées : nous réservons les sorties dès l'ouverture du dossier, plusieurs mois à l'avance. C'est le genre de moment pour lequel certains clients reviennent au Mexique tous les ans.",
        ],
      },
    },

    // 8. entityList (experiences)
    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences au Mexique",
      heading: "Nos coups de cœur au Mexique",
      description:
        "Trois accès construits autour de ce que le Mexique a de plus singulier. Pas des excursions : des moments où quelqu'un qui connaît ouvre une porte.",
      cta: { label: "Voir l'ensemble de nos expériences", href: "/experiences" },
      slugs: [
        "lever-soleil-xochimilco",
        "soiree-bioluminescente-punta-coco",
        "mezcal-plante-verre-merida",
      ],
    },

    // 9. entityList (accommodations)
    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Mexique",
      heading: "Où séjourner au Mexique",
      description:
        "Trois adresses choisies pour ce qu'elles sont, pas pour ce qu'elles affichent. Le niveau se lit dans ce qu'on voit depuis la chambre.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["chable-yucatan", "esencia", "habitas-bacalar"],
    },

    // 10. infoGrid
    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage au Mexique",
      description:
        "Ce qu'il faut savoir avant de partir. Et ce que nous réglons pour vous, avant que vous posiez le pied sur le tarmac.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Vols",
          description:
            "11 à 12 heures depuis Paris vers Mexico City (Air France direct CDG-MEX). Nous sélectionnons les vols domestiques intérieurs selon l'itinéraire retenu : Mexico, Oaxaca, Mérida, Los Cabos. Les billets sont inclus dans la préparation du dossier.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "-7h en hiver, -6h en été (Mexico City, UTC-6). La Baja California Norte suit l'heure du Pacifique (-9h/-8h). Le décalage joue en faveur des lève-tôt.",
        },
        {
          iconName: "euro",
          title: "Monnaie et pourboires",
          description:
            "Peso mexicain (MXN). Les adresses haut de gamme acceptent les dollars et euros. Nous vous remettons avant le départ un guide des pourboires recommandés (guides, chauffeurs, personnel d'hôtel) pour que rien ne soit à improviser sur place.",
        },
        {
          iconName: "fileText",
          title: "Formalités",
          description:
            "Aucun visa requis pour les ressortissants français (séjour jusqu'à 180 jours). Une Forma Migratoria Multiple (FMM) est délivrée à l'arrivée. Nous vous informons de toutes les démarches en amont et préparons les documents nécessaires avant le départ.",
        },
        {
          iconName: "syringe",
          title: "Vaccins et santé",
          description:
            "Aucun vaccin obligatoire. Hépatite A et typhoïde recommandés. Antipaludéens utiles dans certaines zones rurales du Chiapas et d'Oaxaca. Nous vous rappelons les recommandations dès l'ouverture du dossier et vous orientons vers un centre de vaccinations si nécessaire.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Novembre à avril : saison sèche sur l'ensemble du territoire. Baleines grises en Baja : janvier-avril. Requins-baleines en Caraïbes : mai-septembre. Nous calons l'itinéraire sur la bonne fenêtre selon vos dates et les phénomènes naturels à ne pas manquer.",
        },
        {
          iconName: "languages",
          title: "Langues",
          description:
            "Espagnol. L'anglais est courant dans les hôtels et zones touristiques. Hors circuit, peu parlé. Nous briefons nos clients sur les formules essentielles et nos guides locaux assurent la médiation en dehors des sentiers balisés.",
        },
      ],
    },

    // 11. bento
    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Un seul interlocuteur sur chaque dossier Mexique, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/mexique/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: (
            [
              "Carte d'itinéraire personnalisé au Mexique, de la Baja au Yucatán",
              "Adresses confidentielles au Mexique, producteurs de mezcal et guides locaux",
              "Hébergements hors réseaux au Mexique, sélection Exuma",
              "Conciergerie Exuma, transferts privés et assistance 24h au Mexique",
              "Expériences sur mesure au Mexique, baleines et cénotes",
            ] as string[]
          )[i],
        },
      })),
    },

    // 12. placesMap
    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir au Mexique",
      heading: "Six terrains, six registres",
      description:
        "De Mexico City à Laguna San Ignacio, de Oaxaca à Bacalar : les étapes autour desquelles s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 5,
      places: [
        {
          title: "Mexico City, la métropole à 2 240 mètres",
          description:
            "23 millions d'habitants, le musée d'Anthropologie, Teotihuacán à 50 kilomètres, les chinampas de Xochimilco à l'aube. Une semaine n'est pas de trop.",
          image: {
            src: "/destination/mexique/map-mexico-city.png",
            alt: "Paseo de la Reforma au coucher du soleil, Mexico City",
          },
          coordinates: { lat: 19.4326, lng: -99.1332 }, // TODO: verify coords
        },
        {
          title: "Oaxaca, les vallées zapotèques",
          description:
            "Monte Albán, les marchés de Oaxaca City, le mezcal artisanal de Santiago Matatlán. La cuisine la plus complexe du Mexique, à deux heures de vol de la capitale.",
          image: {
            src: "/destination/mexique/map-oaxaca.png",
            alt: "Ruines de Monte Albán, vallée d'Oaxaca, Mexique",
          },
          coordinates: { lat: 17.0667, lng: -96.7167 }, // TODO: verify coords
        },
        {
          title: "Yucatán, la péninsule maya",
          description:
            "Chichen Itzá, les cénotes de Valladolid, Mérida et son architecture coloniale, Bacalar et sa lagune aux Sept Couleurs. Cinq siècles de civilisation dans un rayon de 300 kilomètres.",
          image: {
            src: "/destination/mexique/map-yucatan.png",
            alt: "Cénote aux eaux translucides entouré de végétation, Yucatán, Mexique",
          },
          coordinates: { lat: 20.9674, lng: -89.6237 }, // TODO: verify coords
        },
        {
          title: "Baja California, le désert et les baleines",
          description:
            "Laguna San Ignacio pour les baleines grises (janvier-avril), la mer de Cortez, le Valle de Guadalupe et ses vignobles. L'autre Mexique, à l'opposé de la Caraïbe.",
          image: {
            src: "/destination/mexique/map-baja-california.png",
            alt: "Désert de Baja California et mer de Cortez, Mexique",
          },
          coordinates: { lat: 26.0, lng: -111.5 }, // TODO: verify coords
        },
        {
          title: "Riviera Maya, de Tulum à Xpu-Ha",
          description:
            "La côte caribéenne entre Playa del Carmen et Tulum. Esencia à Xpu-Ha, les cénotes côtiers, la barrière de corail de Puerto Morelos. À aborder par les extrémités.",
          image: {
            src: "/destination/mexique/map-riviera-maya.png",
            alt: "Côte caribéenne de la Riviera Maya depuis les airs, Quintana Roo, Mexique",
          },
          coordinates: { lat: 20.5, lng: -87.2 }, // TODO: verify coords
        },
        {
          title: "Chiapas, les forêts et les ruines",
          description:
            "Palenque dans la jungle, San Cristóbal de las Casas à 2 200 mètres d'altitude, les cascades de Agua Azul. Le Mexique le moins fréquenté et le plus préservé.",
          image: {
            src: "/destination/mexique/map-chiapas.png",
            alt: "Ruines mayas de Palenque dans la jungle du Chiapas, Mexique",
          },
          coordinates: { lat: 16.75, lng: -92.6333 }, // TODO: verify coords
        },
      ],
    },

    // 13. tips
    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage au Mexique",
      description:
        "Cinq observations de terrain, pour décider d'une étape, éviter une erreur logistique ou comprendre ce que la préparation change à l'expérience.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "La FMM : le formulaire qu'on oublie toujours",
          cardEyebrow: "Formalités",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La Forma Migratoria Multiple est délivrée à l'arrivée. La conserver est obligatoire. La perdre coûte cher.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La FMM est un document papier remis à l'immigration à l'arrivée.
                Elle doit être conservée pendant tout le séjour et rendue au
                départ. La perte du document entraîne une amende et peut
                compliquer l'embarquement retour. C'est une des premières causes
                de stress en fin de voyage pour les voyageurs non préparés.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous briefons sur la FMM avant le départ avec les
                instructions précises. Un récapitulatif papier est inclus dans
                le carnet de voyage remis avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "La Baja California : deux péninsules en une",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Baja Norte (Ensenada, Tijuana) et Baja Sur (Los Cabos, La Paz) sont à 1 300 kilomètres de distance. Ce ne sont pas les mêmes terrains.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Baja California Norte abrite le Valle de Guadalupe, la région
                viticole mexicaine qui produit 90 % des vins du pays. Baja
                California Sur concentre Los Cabos, La Paz, et les lagunes
                à baleines grises. Confondre les deux dans un même séjour
                court n'a pas de sens logistique : Los Cabos-Ensenada est
                l'équivalent de Paris-Madrid en voiture.
              </p>
              <p>
                Pour un séjour baleines, la base est La Paz ou Loreto (Baja
                Sur). Pour le Valle de Guadalupe, la base est Ensenada (Baja
                Norte). Nous construisons l'itinéraire autour d'une seule
                zone, pas des deux.
              </p>
            </div>
          ),
        },
        {
          title: "Les cénotes : ne pas improviser",
          cardEyebrow: "Yucatán",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Il y a 6 000 cénotes recensés au Yucatán. Quelques-uns accueillent 500 touristes par jour. D'autres sont connus de trois familles locales.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Ik Kil, Dos Ojos, Gran Cenote : les cénotes les plus célèbres
                du Yucatán sont fréquentés en haute saison par des centaines
                de personnes par jour. L'eau est la même, mais l'expérience
                ne l'est pas. Les cénotes privés, accessibles via des propriétés
                agricoles locales ou des accords avec des familles mayas, offrent
                un accès sans groupe et souvent un contexte culturel bien plus
                riche.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous identifions les cénotes selon le profil du séjour :
                plongée, baignade, cénote souterrain ou à ciel ouvert. Les
                accès privés font partie de notre réseau local.
              </p>
            </div>
          ),
        },
        {
          title: "Día de los Muertos à Oaxaca : anticiper 6 mois",
          cardEyebrow: "Calendrier",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les cérémonies des 1er et 2 novembre à Oaxaca sont authentiques et profondes. Et les hébergements affichent complet dès avril.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Día de los Muertos n'est pas une fête touristique à Oaxaca :
                c'est une pratique zapotèque vivante, avec des veillées au
                cimetière, des ofrendas dressées depuis des semaines et des
                processions nocturnes dans les villages de la vallée. Le
                contraste avec Mexico City, où la fête est devenue un événement
                de masse, est total.
              </p>
              <p>
                Les hôtels de Oaxaca City affichent complet pour le 1er novembre
                dès le mois d'avril de la même année. Les villages comme
                Teotitlán del Valle ou Mitla offrent une version encore plus
                intime.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous ouvrons les dossiers Oaxaca-novembre dès janvier pour
                garantir les adresses et les accès aux cérémonies dans les
                villages.
              </p>
            </div>
          ),
        },
        {
          title: "Mexico City : prévoir au moins 3 jours",
          cardEyebrow: "Mexico City",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Teotihuacán, Xochimilco, Coyoacán, la Roma, Polanco : une journée de transit n'est pas un séjour.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La plupart des itinéraires commerciaux traitent Mexico City
                comme un point de transit de 24 heures. C'est l'erreur la
                plus fréquente sur ce pays. Le musée d'Anthropologie seul
                demande une journée complète. Teotihuacán avant l'ouverture au
                public, avec l'archéologue du site, est une demi-journée.
                Xochimilco au lever du jour avec un chef est deux heures.
                La gastronomie de Polanco et de la Roma tient trois dîners.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous intégrons Mexico City comme une étape à part entière,
                pas comme un hub d'aéroport. Trois nuits minimum, avec un
                programme construit autour des accès que nous avons négociés.
              </p>
            </div>
          ),
        },
      ],
    },

    // 14. testimonials
    {
      type: "testimonials",
      eyebrow: "Témoignages",
      heading: "Ils ont vécu l'expérience Exuma",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "La baleine a mis sa tête contre le bateau. Mon fils de neuf ans l'a touchée. Je ne saurais pas décrire ça autrement : c'était un contact avec quelque chose d'infiniment plus grand que nous.",
          image: {
            src: "/destination/mexique/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage en famille, février 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le dîner à Chablé, dans le jardin, après la visite du cénote au coucher du soleil. Je n'avais pas idée qu'on pouvait vivre le Yucatán comme ça.",
          image: {
            src: "/destination/mexique/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Séjour en couple, novembre 2024", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Xochimilco à cinq heures du matin, avec le chef et ses paniers du marché. Le Mexique que personne ne montre, celui qu'on ne trouve pas dans un guide.",
          image: {
            src: "/destination/mexique/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Voyage solo, mars 2025", // TODO: replace with real testimonial
        },
      ],
    },

    // 15. faq
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
          question: "Quelle est la meilleure période pour aller au Mexique ?",
          answer:
            "Novembre à avril correspond à la saison sèche sur l'ensemble du territoire et reste la période la plus agréable. Pour les baleines grises en Baja California, la fenêtre est janvier-avril. Pour les requins-baleines sur la côte caraïbe, mai-septembre. Nous construisons l'itinéraire autour de la bonne fenêtre selon vos dates et les phénomènes que vous souhaitez vivre.",
        },
        {
          question: "Faut-il un visa pour aller au Mexique ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique jusqu'à 180 jours. Une Forma Migratoria Multiple (FMM) est délivrée gratuitement à l'arrivée et doit être conservée pendant tout le séjour. Passeport valide obligatoire. Nous vous briefons sur l'ensemble des formalités avant le départ.",
        },
        {
          question: "Combien de temps dure le vol Paris-Mexique ?",
          answer:
            "Air France assure un vol direct Paris CDG vers Mexico City en 11 à 12 heures. Pour Cancún, Oaxaca ou Los Cabos, une correspondance à Mexico est généralement nécessaire. Nous optimisons les connexions domestiques selon l'itinéraire retenu et les incluons dans la préparation du dossier.",
        },
        {
          question: "Combien de régions peut-on voir en deux semaines ?",
          answer:
            "Deux semaines permettent de construire un itinéraire cohérent autour de deux ou trois régions : Mexico City + Oaxaca, ou Yucatán + Riviera Maya, ou Baja California + Mexico City. Tenter de couvrir tout le pays en une seule fois est la principale erreur que nous aidons nos clients à éviter.",
        },
        {
          question: "Quel budget prévoir pour un voyage haut de gamme au Mexique ?",
          answer:
            "Un voyage en adresses exclusives avec expériences sur mesure et vols domestiques représente entre 6 000 et 12 000 € par personne pour deux semaines, transport international inclus. Chablé Yucatán ou l'Hotel Esencia représentent à eux seuls 500 à 1 200 € la nuit selon la saison.", // TODO: verify price ranges
        },
        {
          question: "Le Mexique est-il sûr pour les touristes ?",
          answer:
            "Les zones touristiques principales (Yucatán, Oaxaca, Mexico City, Baja California, Riviera Maya) sont fréquentées sans incident par des millions de visiteurs chaque année. Certaines régions du nord et du Guerrero sont à éviter. Nous briefons systématiquement nos clients sur les zones à privilégier selon l'itinéraire, et nos transferts sont assurés par des prestataires de confiance.",
        },
      ],
    },
  ],
};
