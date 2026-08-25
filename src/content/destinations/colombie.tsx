import type { Destination } from "@/lib/content/types";
import { defaultBento } from "@/components/sections/bento";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";

export const destination: Destination = {
  slug: "colombie",
  name: "Colombie",
  placeKind: "country",
  country: "Colombie",
  genitive: "de la Colombie",
  continentSlug: "ameriques",
  blurb: "Carthagène, Zone Café, Sierra Nevada, Amazonie, Pacifique",
  keywords: [
    "colombie",
    "carthagene",
    "cite perdue",
    "zone cafeiere",
    "sierra nevada",
    "amazonie",
    "tayrona",
    "pacifique choco",
  ],
  metaTitle: "Colombie : Voyage sur mesure",
  metaDescription:
    "Voyage sur mesure en Colombie : Carthagène, Sierra Nevada, Zone Café, Amazonie. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage sur mesure en Colombie",
      heading: "Colombie. Deux océans, trois cordillères, une cité perdue au sommet.",
      description:
        "De Carthagène à l'Amazonie, la Colombie change de mer, de climat et d'altitude en quelques heures de vol intérieur. Les trois cordillères des Andes séparent des mondes qui semblent appartenir à des pays différents : la Zone Café à mille cinq cents mètres, le Pacifique humide du Chocó, l'Amazonie qui commence à Leticia. Chaque étape est pensée pour respecter cette diversité, sans jamais la simplifier.",
      images: [
        {
          src: "/destination/colombie/hero-1.png",
          alt: "Terrasses de pierre de la Ciudad Perdida au sommet de la Sierra Nevada de Santa Marta, Colombie",
        },
        {
          src: "/destination/colombie/hero-2.png",
          alt: "Balcons fleuris et façades colorées de la vieille ville de Carthagène des Indes, Colombie",
        },
        {
          src: "/destination/colombie/hero-3.png",
          alt: "Rangs de caféiers en terrasse dans la Zone Café colombienne au lever du jour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Colombie ?",
      heading: "Tainà, spécialiste de la Colombie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "La Colombie ne se raconte pas avec une seule image de Carthagène. Il y a la cordillère, le Pacifique, l'Amazonie qui commence à Leticia : trois mondes que l'on ne relie qu'en connaissant les bons vols intérieurs et les bons contacts sur place. Mon travail, c'est de construire cette logique avant qu'elle ne devienne un inventaire de villes.",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Colombie",
      heading: "Un pays façonné par trois cordillères",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Colombie traverse trois cordillères andines, deux océans et un bassin amazonien, souvent en l'espace d'une même semaine. À Carthagène des Indes, la chaleur des Caraïbes colle aux remparts du XVIe siècle. À Bogotá, huit heures plus tard en altitude, il fait quinze degrés à midi. Cette amplitude géographique n'est pas un obstacle : elle est la matière du voyage.",
        "Dans la Zone Café, entre Quindío et Risaralda, les caféiers poussent sur des pentes que l'on croirait dessinées pour le paysage plutôt que pour la récolte. Plus au nord, la Sierra Nevada de Santa Marta grimpe de la mer des Caraïbes à cinq mille huit cents mètres en moins de quarante kilomètres à vol d'oiseau, une des plus fortes déclivités du monde. Au sud, l'Amazonie colombienne commence à Leticia, sur les rives du fleuve, à la frontière du Brésil et du Pérou.",
        "Peu de voyageurs relient ces trois mondes en un seul séjour. C'est précisément ce que nous construisons : un itinéraire où chaque étape change de climat, d'altitude et de rythme, sans jamais perdre le fil du pays.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/colombie/full-image.png",
        alt: "Vue aérienne de la Ciudad Perdida entourée de jungle dans la Sierra Nevada de Santa Marta, Colombie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Carthagène, la mémoire des Caraïbes",
      heading: "Ce que les remparts ont gardé",
      theme: "light",
      paragraphs: [
        "Fondée en 1533, Carthagène des Indes a résisté à cinq sièges avant que les Espagnols n'achèvent, en 1656, onze kilomètres de remparts pour protéger l'or qui partait vers Séville. La vieille ville, classée à l'UNESCO depuis 1984, garde ses balcons de bois ouvragé et ses façades ocre dans le quartier de Getsemaní, ancien faubourg des artisans et des esclaves affranchis. À la nuit tombée, les arepas de huevo se vendent à même la rue, sur la Plaza de la Trinidad.",
        "Un guide historien, formé à l'université de Carthagène, ouvre certaines cours privées du quartier San Diego et raconte l'histoire de Benkos Biohó, chef marron qui a fondé San Basilio de Palenque, premier village libre d'Amérique à l'époque coloniale, à une heure de route. La visite se termine sur les remparts, au bastion de Santo Domingo, quand la lumière rase la baie et que les vendeurs de fruits rentrent pour la nuit.",
      ],
      images: [
        {
          src: "/destination/colombie/split-1.png",
          alt: "Balcons de bois fleuris dans les ruelles de la vieille ville de Carthagène des Indes",
        },
        {
          src: "/destination/colombie/split-2.png",
          alt: "Remparts historiques de Carthagène au coucher du soleil sur la mer des Caraïbes",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/colombie/xp-cite-perdue-1.png",
          alt: "Marches de pierre grimpant vers les terrasses de la Ciudad Perdue dans la jungle",
        },
        right: {
          src: "/destination/colombie/xp-cite-perdue-2.png",
          alt: "Guide indigène Wiwa sur le sentier menant à la Ciudad Perdida, Sierra Nevada",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La cité que la jungle a failli garder pour elle",
        columns: [
          "La Ciudad Perdida a été construite par les ancêtres des peuples Tayrona vers l'an 800, six cents ans avant Machu Picchu. Des chasseurs de trésors l'ont redécouverte en 1972 ; elle reste, aujourd'hui encore, accessible seulement à pied, au terme de quatre jours de marche dans la Sierra Nevada de Santa Marta. Mille deux cents marches de pierre mènent aux terrasses où vivait autrefois une population estimée à plus de deux mille personnes.",
          "Les guides qui accompagnent la montée appartiennent aux peuples Wiwa ou Kogi, descendants directs des Tayrona, qui considèrent toujours le site comme sacré. On traverse des rivières à gué, on dort en hamac dans des campements construits pour l'occasion, et l'on arrive aux terrasses circulaires au lever du jour, avant que la brume qui monte de la vallée ne se dissipe.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Colombie",
      heading: "Nos coups de cœur en Colombie",
      description:
        "Trois façons d'entrer dans une Colombie qui ne tient pas dans une carte postale : les baleines du Pacifique, une finca familiale du Quindío, les criques du parc Tayrona accessibles par bateau.",
      slugs: [
        "baleines-pacifique-choco",
        "finca-cafe-quindio",
        "tayrona-bateau-prive",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Colombie",
      heading: "Où séjourner",
      description:
        "Trois adresses qui racontent trois Colombie différentes : un couvent du XVIIe siècle dans la vieille ville de Carthagène, une hacienda caféière toujours en activité dans le Quindío, un lodge amazonien accessible uniquement par bateau, à la frontière du Brésil.",
      slugs: ["casa-san-agustin", "hacienda-san-jose", "reserva-natural-palmari"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Colombie",
      description:
        "Décalage horaire, monnaie, visa, saison : l'essentiel pour construire un itinéraire en Colombie sans mauvaise surprise.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 11 heures de vol direct depuis Paris vers Bogotá. Des itinéraires avec escale sont également possibles, notamment via Madrid ou Amsterdam.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "6 heures de moins en hiver et 7 heures de moins en été par rapport à la France. La Colombie ne change pas d'heure au cours de l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le peso colombien (COP) est la monnaie officielle. À titre indicatif, 1 € ≈ 4 400 COP, selon le taux de change. Les cartes bancaires sont largement acceptées dans les grandes villes et les établissements touristiques ; prévoir des espèces pour les zones rurales et certains déplacements en Amazonie.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique jusqu'à 90 jours. Un passeport en cours de validité est requis.",
        },
        {
          iconName: "syringe",
          title: "Vaccins",
          description:
            "Aucun vaccin n'est systématiquement exigé pour un voyage en Colombie depuis la France. Les vaccinations habituelles doivent être à jour. La vaccination contre la fièvre jaune est recommandée pour certains séjours en Amazonie et dans les zones de forêt tropicale, et peut être exigée pour accéder à certains parcs nationaux. Elle doit être réalisée au moins 10 jours avant le départ.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La Colombie se voyage toute l'année, mais décembre à mars et juillet-août correspondent généralement aux périodes les plus sèches dans de nombreuses régions. Le climat varie toutefois fortement selon les territoires : la côte Caraïbe, les Andes et l'Amazonie ont chacune leur propre rythme.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol est la langue officielle. De nombreuses langues autochtones sont également parlées dans les communautés indigènes, notamment en Amazonie et dans la Sierra Nevada de Santa Marta.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "La Colombie ne connaît pas les quatre saisons classiques : l'altitude et la géographie déterminent largement le climat. Chaud et tropical sur les côtes et en Amazonie, plus tempéré dans les Andes, avec un climat plus frais à Bogotá. Le Pacifique, lui, compte parmi les régions les plus pluvieuses du pays.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Colombie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/colombie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé pour un voyage en Colombie",
            "Ruelle colorée du quartier Getsemaní à Carthagène des Indes",
            "Hacienda caféière traditionnelle dans le Quindío, Colombie",
            "Concierge Exuma organisant un transfert privé à Bogotá",
            "Guide indigène Wiwa sur le chemin de la Ciudad Perdida",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Colombie",
      heading: "Six lieux, et ce qu'ils gardent",
      description:
        "Carthagène, la Sierra Nevada, la Zone Café : les grands repères d'un voyage en Colombie, complétés de lieux que la plupart des voyageurs traversent sans s'arrêter.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Carthagène des Indes",
          description:
            "Cité fortifiée du XVIe siècle sur la mer des Caraïbes, onze kilomètres de remparts et le quartier coloré de Getsemaní.",
          image: {
            src: "/destination/colombie/map-carthagene.png",
            alt: "Remparts et façades colorées de Carthagène des Indes, Colombie",
          },
          coordinates: { lat: 10.391, lng: -75.4794 },
        },
        {
          title: "Sierra Nevada de Santa Marta",
          description:
            "Massif côtier qui grimpe de la mer à cinq mille huit cents mètres en quarante kilomètres. La Ciudad Perdida des Tayrona s'y cache depuis plus de mille deux cents ans.",
          image: {
            src: "/destination/colombie/map-sierra-nevada.png",
            alt: "Terrasses de pierre de la Ciudad Perdida dans la Sierra Nevada de Santa Marta",
          },
          // TODO: verify coords
          coordinates: { lat: 11.04, lng: -73.927 },
        },
        {
          title: "Salento et la Zone Café",
          description:
            "Village coloré au cœur du Quindío, porte d'entrée des fincas caféières et de la vallée de Cocora, où poussent les plus hauts palmiers à cire du monde.",
          image: {
            src: "/destination/colombie/map-salento.png",
            alt: "Rue colorée de Salento au cœur de la Zone Café colombienne",
          },
          coordinates: { lat: 4.6438, lng: -75.573 },
        },
        {
          title: "Caño Cristales",
          description:
            "Rivière qui se teinte de rouge, de jaune et de vert entre juillet et novembre, sous l'effet d'une algue endémique. Accessible uniquement par vol privé depuis La Macarena.",
          image: {
            src: "/destination/colombie/map-cano-cristales.png",
            alt: "Rivière multicolore de Caño Cristales dans la région de la Macarena, Colombie",
          },
          // TODO: verify coords
          coordinates: { lat: 2.1652, lng: -73.7876 },
        },
        {
          title: "Leticia, porte de l'Amazonie",
          description:
            "Porte d'entrée de l'Amazonie colombienne, au confluent des frontières avec le Brésil et le Pérou. Le fleuve y fait la loi, pas la route.",
          image: {
            src: "/destination/colombie/map-leticia.png",
            alt: "Fleuve Amazone vu depuis Leticia, à la frontière du Brésil et du Pérou",
          },
          coordinates: { lat: -4.2153, lng: -69.9406 },
        },
        {
          title: "Bahía Solano, Pacifique du Chocó",
          description:
            "Village de pêcheurs du Chocó, un des rares points au monde où les baleines à bosse viennent mettre bas, entre juillet et octobre.",
          image: {
            src: "/destination/colombie/map-bahia-solano.png",
            alt: "Côte Pacifique et jungle du Chocó près de Bahía Solano, Colombie",
          },
          // TODO: verify coords
          coordinates: { lat: 6.2229, lng: -77.4022 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Colombie",
      description:
        "Huit clés de lecture pour comprendre la Colombie autrement. Des repères qui guident nos choix d'étapes et la construction de chaque itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue légère pour la côte, lainage pour Bogotá et la Zone Café, chaussures de marche pour la Sierra Nevada.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Passeport valide au moins 6 mois après la date de
                retour. Aucun visa requis pour un séjour touristique de
                moins de 90 jours pour les ressortissants français.
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                Vêtements légers pour Carthagène et l&apos;Amazonie, un
                lainage pour les soirées à Bogotá ou dans la Zone Café,
                chaussures de marche pour la Sierra Nevada. Imperméable
                léger sur le Pacifique, où il pleut presque chaque jour.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nos clients reçoivent une checklist personnalisée selon les
                étapes prévues, environ trois semaines avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire pour la côte et les Andes. Fièvre jaune recommandée pour l'Amazonie.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire pour Carthagène, Bogotá ou la
                Zone Café. Le vaccin contre la fièvre jaune est recommandé
                pour l&apos;Amazonie et certaines zones rurales, à prévoir
                au moins dix jours avant le départ.
              </p>
              <p>
                Le mal d&apos;altitude peut se faire sentir à Bogotá (2 640
                mètres). Éviter l&apos;alcool le premier jour et s&apos;hydrater
                largement.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique : antalgiques,
                pansements, répulsif anti-moustiques pour l&apos;Amazonie et
                le Pacifique.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La côte Caraïbe, les Andes et l'Amazonie n'ont jamais la même saison au même moment.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Décembre à mars offre le meilleur compromis pour
                Carthagène et la Zone Café : lumière franche, peu de pluie.
                Juillet-août reste également favorable, et correspond à la
                saison des baleines sur le Pacifique.
              </p>
              <p>
                L&apos;Amazonie, proche de l&apos;équateur, se visite en
                toute saison, avec des niveaux d&apos;eau différents selon
                les mois qui changent l&apos;expérience du fleuve.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                TODO: Nous ajustons l&apos;ordre des étapes selon la saison
                de départ, pour ne jamais faire coïncider une étape avec sa
                période la moins favorable.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Peso colombien. Carte bancaire dans les grandes villes, espèces privilégiées en zone rurale et en Amazonie.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Peso colombien (COP). Les grands hôtels et
                restaurants acceptent la carte ; les marchés et petites
                adresses restent en espèces. Pourboire non obligatoire mais
                apprécié dans les services privés.
              </p>
              <p>
                Les marchés locaux, comme celui de Bazurto à Carthagène ou
                les fincas du Quindío, offrent un aperçu direct de la vie
                quotidienne.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons systématiquement les transferts de nos
                clients : chauffeur privé, vols intérieurs, bateaux entre
                étapes.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer en Colombie",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le relief impose le vol intérieur entre la côte, les Andes et l'Amazonie.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre Carthagène, Bogotá et Leticia, le vol intérieur
                remplace systématiquement la route, trop longue et parfois
                impraticable selon les régions. Sur des distances plus
                courtes, la voiture avec chauffeur reste la meilleure
                option.
              </p>
              <p>
                L&apos;accès à l&apos;Amazonie et à certaines criques du
                Pacifique se fait uniquement par bateau ou par petit
                avion.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calculons systématiquement l&apos;option la plus
                pertinente selon votre itinéraire et réservons chaque
                trajet à l&apos;avance.
              </p>
            </div>
          ),
        },
        {
          title: "Sécurité et itinéraires",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La Colombie a profondément changé depuis quinze ans. Nos itinéraires restent construits avec des contacts locaux vérifiés.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Carthagène, Bogotá, Medellín, la Zone Café et la Sierra
                Nevada figurent parmi les régions les plus fréquentées par
                les voyageurs internationaux. Nous n&apos;intégrons à un
                itinéraire que les zones que nos contacts locaux
                fréquentent et surveillent activement.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Chauffeurs et guides dédiés du premier au dernier jour,
                point de contact joignable en continu pendant le séjour.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver avant de partir",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le trek de la Ciudad Perdida et les permis de la Sierra Nevada se réservent plusieurs semaines à l'avance.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;accès à la Ciudad Perdida est encadré par les
                communautés indigènes Wiwa et Kogi, avec un nombre de
                places limité chaque jour. Les meilleurs guides et les
                fincas caféières familiales du Quindío se réservent
                également bien avant la haute saison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous verrouillons ces réservations dès la confirmation du
                voyage, souvent avant même le reste de l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Formalités et douanes",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun visa pour un séjour touristique de moins de 90 jours, mais le passeport doit rester valide.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Les ressortissants français bénéficient d&apos;une
                exemption de visa pour un séjour touristique de moins de
                90 jours. Le passeport doit rester valide au moins 6 mois
                après la date de retour prévue.
              </p>
              <p>
                Une taxe de sortie est parfois incluse dans le billet
                d&apos;avion ; le cas échéant, aucune démarche
                supplémentaire n&apos;est nécessaire à l&apos;aéroport.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions systématiquement les formalités de chaque
                client avant le départ, selon sa nationalité et la durée
                du séjour.
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
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Quatre jours de marche jusqu'à la Ciudad Perdida, sans un autre groupe croisé sur le sentier : c'est exactement ce que nous cherchions, et Exuma a tout verrouillé des mois avant notre départ.",
          image: {
            src: "/destination/colombie/hero-1.png",
            alt: "Portrait de Marion et Thomas", // TODO: verify
          },
          name: "Marion & Thomas", // TODO: verify
          role: "Voyage en couple, août 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Notre travel designer nous a fait dormir dans une hacienda caféière du Quindío où la famille récolte encore le café à la main. Nos enfants s'en souviennent encore plus que de Carthagène.",
          image: {
            src: "/destination/colombie/hero-2.png",
            alt: "Portrait de Frédéric", // TODO: verify
          },
          name: "Frédéric", // TODO: verify
          role: "Voyage en famille, décembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marquée, c'est la cohérence de l'itinéraire malgré la diversité du pays. De Carthagène à l'Amazonie, chaque étape avait sa raison d'être.",
          image: {
            src: "/destination/colombie/hero-3.png",
            alt: "Portrait de Camille", // TODO: verify
          },
          name: "Camille", // TODO: verify
          role: "Voyage solo, juillet 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir en Colombie ?",
          answer:
            "Décembre à mars offre le meilleur compromis pour Carthagène et la Zone Café, hors saison des pluies. Juillet-août reste également favorable et correspond à la saison des baleines à bosse sur le Pacifique. L'Amazonie, proche de l'équateur, se visite en toute saison.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Environ 11 heures de vol direct depuis Paris vers Bogotá. Des itinéraires avec escale sont également possibles, notamment via Madrid ou Amsterdam.",
        },
        {
          question: "Faut-il un visa pour aller en Colombie ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de 90 jours. Un passeport valide au moins 6 mois après la date de retour reste requis dans tous les cas.",
        },
        {
          question: "La Colombie est-elle une destination sûre ?",
          answer:
            "Les régions fréquentées par les voyageurs (Carthagène, Bogotá, Medellín, la Zone Café, la Sierra Nevada) accueillent aujourd'hui plusieurs millions de visiteurs internationaux chaque année. Nous construisons chaque itinéraire avec des chauffeurs et des guides locaux, et n'intégrons que les zones activement fréquentées et surveillées.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Les fincas caféières du Quindío, les plages du parc Tayrona et les rencontres avec la faune amazonienne offrent des expériences qui captivent les enfants comme les adultes. Nous adaptons le rythme et les hébergements à l'âge des enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Colombie ?",
          answer:
            "Nos voyages sur mesure s'adaptent à chaque projet. À titre indicatif, un séjour de deux semaines en Colombie se situe généralement autour de 7 500 € par personne, selon les hébergements, les expériences privées et la saison.",
        },
      ],
    },

    {
      type: "entityList",
      kind: "destination",
      background: "bg-background-soft",
      eyebrow: "Inspirations",
      heading: "Destinations similaires",
      description:
        "Trois autres destinations où la même philosophie guide nos voyages : une progression pensée, des expériences révélées par notre connaissance du terrain.",
      slugs: ["republique-dominicaine", "kenya", "vietnam"],
    },
  ],
};
