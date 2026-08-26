import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "galapagos",
  name: "Galápagos",
  placeKind: "region",
  country: "Équateur",
  genitive: "des Galápagos",
  continentSlug: "ameriques",
  blurb: "Darwin, iguanes marins, tortues géantes, requins-marteaux",
  keywords: [
    "galapagos",
    "darwin",
    "iguane marin",
    "tortue geante",
    "otarie",
    "santa cruz",
    "isabela",
    "espanola",
  ],
  metaTitle: "Galápagos : Voyage sur mesure",
  metaDescription:
    "Voyage aux Galápagos sur mesure : yacht d'expédition, faune endémique, accès régulé par le parc national. Itinéraire et conciergerie privée Exuma, 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Galápagos",
      heading:
        "Treize îles qui n'ont jamais rien emprunté au reste du monde",
      description:
        "À mille kilomètres des côtes de l'Équateur, treize îles principales et plus de cent vingt îlots concentrent des espèces qui n'existent nulle part ailleurs : iguane marin, tortue géante, albatros des Galápagos. Charles Darwin y a passé cinq semaines en 1835. Chaque itinéraire se construit autour d'un yacht et d'un nombre de visiteurs strictement limité par le parc national.",
      images: [
        {
          src: "/destination/galapagos/hero-1.png",
          alt: "Iguanes marins sur les rochers volcaniques des Galápagos",
        },
        {
          src: "/destination/galapagos/hero-2.png",
          alt: "Yacht d'expédition mouillé au large d'une île des Galápagos",
        },
        {
          src: "/destination/galapagos/hero-3.png",
          alt: "Tortue géante des Galápagos dans les hauts plateaux de Santa Cruz",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir aux Galápagos ?",
      heading:
        "Tainà, spécialiste des Galápagos, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "Aux Galápagos, le bateau n'est pas un hébergement, c'est l'itinéraire. Je choisis l'embarcation et l'ordre des îles avant tout le reste, parce que le nombre de sites autorisés par jour est fixe et ne se négocie pas. Une fois ce squelette posé, tout le confort vient se greffer autour.",
        role: "Travel Designer · Galápagos",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Galápagos",
      heading: "Un archipel où la restriction a produit la préservation",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage aux Galápagos commence par une contrainte que peu de destinations s'imposent : le parc national fixe un nombre de visiteurs par site et par jour, et impose un guide naturaliste certifié à chaque débarquement. Cette règle, en vigueur depuis les années 1970, explique pourquoi l'archipel a gardé ce que la plupart des îles tropicales ont perdu.",
        "L'UNESCO a inscrit les Galápagos au patrimoine mondial en 1978, premier site retenu au tout premier classement. L'archipel est né d'un point chaud volcanique actif depuis plus de quatre millions d'années, et l'équateur traverse l'île Isabela en son milieu exact, à hauteur du volcan Wolf.",
        "Chaque île a développé sa propre sous-espèce de tortue géante, à la carapace bombée ou en selle selon la végétation disponible. C'est cette variation, observée île par île, qui a nourri la réflexion de Darwin sur la sélection naturelle, bien avant la publication de L'Origine des espèces en 1859.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/galapagos/full-image.png",
        alt: "Vue aérienne de la caldeira du volcan Sierra Negra sur l'île Isabela, Galápagos",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Galápagos, hors des sentiers de croisière",
      heading: "Le matin où Puerto Ayora appartient encore aux pêcheurs",
      theme: "light",
      paragraphs: [
        "À Puerto Ayora, sur Santa Cruz, les pêcheurs déchargent leur prise sur le quai municipal chaque matin avant huit heures. Des pélicans bruns et des otaries attendent à quelques mètres, immobiles, habitués au rituel. Aucune barrière ne les sépare des acheteurs qui négocient le thon et le mérou du jour.",
        "Plus loin, la station de recherche Charles Darwin élève depuis 1965 des tortues géantes destinées à repeupler les îles où l'espèce avait disparu. Le programme a déjà relâché plus de dix mille individus. On y croise autant de scientifiques que de tortues centenaires.",
      ],
      images: [
        {
          src: "/destination/galapagos/split-1.png",
          alt: "Pêcheurs déchargeant leur prise au quai de Puerto Ayora, Galápagos",
        },
        {
          src: "/destination/galapagos/split-2.png",
          alt: "Tortues géantes juvéniles à la station de recherche Charles Darwin, Galápagos",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/galapagos/xp-darwin-wolf-1.png",
          alt: "Banc de requins-marteaux le long du mur volcanique de Wolf, Galápagos",
        },
        right: {
          src: "/destination/galapagos/xp-darwin-wolf-2.png",
          alt: "Plongeur au mouillage isolé de l'île Darwin, Galápagos",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le mur où les requins-marteaux se comptent par centaines",
        columns: [
          "Darwin et Wolf sont les deux îles les plus septentrionales de l'archipel, à plus de seize heures de navigation de Santa Cruz. On ne les rejoint qu'en croisière de plongée, jamais à la journée. Entre juin et novembre, des bancs de plusieurs centaines de requins-marteaux tournent le long du mur volcanique, parfois accompagnés de requins-baleines.",
          "Le parc national limite l'accès à un quota de licences par an, réservées aux seuls opérateurs de plongée certifiés. Il n'y a ni plage ni village sur ces deux îles : seulement une paroi de basalte qui plonge droit dans le courant de Humboldt, et le silence d'un mouillage sans autre bateau visible.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Galápagos",
      heading: "Otaries d'Española, tortues de Santa Cruz, albatros de Punta Suárez",
      description:
        "Une otarie qui escorte les nageurs sans un geste de recul, une tortue centenaire qui traverse la piste sans se presser, un albatros qui couve à quelques mètres du sentier. Trois rencontres que nous organisons avant votre arrivée, avec le guide naturaliste imposé par le parc.",
      slugs: [
        "snorkeling-otaries-galapagos",
        "observation-tortues-geantes-santa-cruz",
        "observation-albatros-espanola",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner aux Galápagos",
      description:
        "Un yacht de seize passagers avec suites design, un lodge posé au sommet d'un cratère éteint, une croisière naturaliste de vingt passagers. Trois façons de traverser l'archipel, que nous réservons selon le nombre de jours disponibles.",
      slugs: ["aqua-mare", "pikaia-lodge", "ecoventura-theory"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Galápagos",
      description:
        "Vol, décalage, formalités et saisons : de quoi caler les dates d'un voyage aux Galápagos en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 18 à 20 heures de trajet depuis Paris, avec une correspondance, notamment via Madrid ou Amsterdam, jusqu'à Quito ou Guayaquil. Il faut ensuite prévoir environ 2 heures de vol intérieur jusqu'à Baltra ou San Cristóbal.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Les Galápagos ont 7 heures de moins que Paris en hiver et 8 heures en été. L'archipel possède son propre fuseau horaire, une heure derrière l'Équateur continental, et ne change pas d'heure au cours de l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar américain (USD) est la monnaie officielle de l'Équateur, y compris aux Galápagos. Les cartes bancaires sont largement acceptées dans les hôtels, restaurants et à bord des bateaux, mais quelques espèces restent utiles pour les petites dépenses à terre.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pour les ressortissants français, aucun visa n'est nécessaire pour un séjour touristique de 90 jours maximum sur une période de douze mois glissants. Le passeport doit être valide plus de six mois après la date prévue de sortie du territoire.\n\nPour accéder aux Galápagos, une Carte de contrôle de transit (TCT) est obligatoire. Elle coûte 20 USD et doit être obtenue avant le départ vers l'archipel. À l'arrivée, les voyageurs étrangers de plus de 12 ans doivent également s'acquitter d'un droit d'entrée de 200 USD pour les espaces protégés des Galápagos.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est obligatoire pour les voyageurs arrivant directement de France. La vaccination contre la fièvre jaune est toutefois recommandée selon l'itinéraire, notamment pour certaines zones de l'Équateur continental situées à l'est des Andes. Un certificat de vaccination est exigé pour les voyageurs arrivant de certains pays à risque, notamment le Brésil, la République démocratique du Congo et l'Ouganda.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Les Galápagos se visitent toute l'année, avec deux saisons aux caractéristiques bien distinctes. De juin à novembre, les eaux plus froides et riches en nutriments favorisent une importante activité marine et l'observation de nombreuses espèces. De décembre à mai, les températures sont plus chaudes, la mer généralement plus calme et les conditions particulièrement agréables pour le snorkeling.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol est la langue officielle. Dans les hôtels, à bord des yachts et lors des excursions, les guides naturalistes parlent généralement anglais ; certains proposent également des visites en français.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat des Galápagos est marqué par le courant froid de Humboldt, qui influence fortement les températures et la vie marine. De juin à novembre, la saison fraîche et sèche, dite garúa, apporte des températures plus douces, des vents et des bruines fréquentes dans les hauteurs. De décembre à mai, la saison chaude est plus ensoleillée, plus humide et ponctuée d'averses, avec des températures autour de 25 à 30 °C selon les zones.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Galápagos. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/galapagos/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure aux Galápagos, île par île",
            "Adresses confidentielles aux Galápagos, loin des croisières de masse",
            "Suite avec vue sur l'océan aux Galápagos",
            "Concierge Exuma coordonnant un transfert privé aux Galápagos",
            "Guide naturaliste commentant la faune endémique des Galápagos",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Galápagos",
      heading: "De Puerto Ayora à Punta Suárez, un archipel qui change d'île en île",
      description:
        "Chaque île a son relief, sa faune dominante, son histoire. Six repères qui donnent la mesure de cette diversité, du cratère de Sierra Negra à la colonie d'albatros d'Española.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 8,
      places: [
        {
          title: "Puerto Ayora et la station Charles Darwin",
          description:
            "Le port principal de l'archipel, sur Santa Cruz. La station de recherche élève des tortues géantes depuis 1965 pour repeupler les îles où l'espèce avait disparu.",
          image: {
            src: "/destination/galapagos/map-puerto-ayora.png",
            alt: "Quai de Puerto Ayora et pélicans bruns, Santa Cruz, Galápagos",
          },
          // TODO: verify coords
          coordinates: { lat: -0.7393, lng: -90.3518 },
        },
        {
          title: "Bartolomé et Pinnacle Rock",
          description:
            "Un paysage volcanique quasi lunaire, dominé par un piton de tuf érodé. Les manchots des Galápagos, seuls manchots à vivre sous l'équateur, nagent au pied du rocher.",
          image: {
            src: "/destination/galapagos/map-bartolome.png",
            alt: "Pinnacle Rock et paysage volcanique de l'île Bartolomé, Galápagos",
          },
          // TODO: verify coords
          coordinates: { lat: -0.2833, lng: -90.5486 },
        },
        {
          title: "Sierra Negra, Isabela",
          description:
            "L'une des plus vastes caldeiras actives au monde, environ dix kilomètres de diamètre. La dernière éruption remonte à 2018, encore visible dans les coulées de lave noire.",
          image: {
            src: "/destination/galapagos/map-sierra-negra.png",
            alt: "Caldeira du volcan Sierra Negra sur l'île Isabela, Galápagos",
          },
          // TODO: verify coords
          coordinates: { lat: -0.83, lng: -91.15 },
        },
        {
          title: "Punta Suárez, Española",
          description:
            "L'unique site de nidification au monde de l'albatros des Galápagos. Le parc national limite le nombre de visiteurs par jour sur ce sentier de moins de trois kilomètres.",
          image: {
            src: "/destination/galapagos/map-punta-suarez.png",
            alt: "Albatros des Galápagos à Punta Suárez, île d'Española",
          },
          // TODO: verify coords
          coordinates: { lat: -1.3833, lng: -89.6667 },
        },
        {
          title: "Post Office Bay, Floreana",
          description:
            "Un tonneau en bois sert de boîte aux lettres officieuse depuis 1793 : on y dépose des cartes postales à charge pour un futur visiteur de les livrer en main propre.",
          image: {
            src: "/destination/galapagos/map-post-office-bay.png",
            alt: "Tonneau postal historique de Post Office Bay, île de Floreana, Galápagos",
          },
          // TODO: verify coords
          coordinates: { lat: -1.22, lng: -90.43 },
        },
        {
          title: "León Dormido, San Cristóbal",
          description:
            "Deux pitons rocheux fendus en deux par l'érosion, qui émergent de l'océan comme un lion couché. Une faille étroite entre les deux blocs se plonge en pleine mer.",
          image: {
            src: "/destination/galapagos/map-leon-dormido.png",
            alt: "Formation rocheuse de León Dormido (Kicker Rock), San Cristóbal, Galápagos",
          },
          // TODO: verify coords
          coordinates: { lat: -0.7167, lng: -89.5167 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage aux Galápagos",
      description:
        "Huit repères de terrain pour composer un séjour dans un archipel où le parc national encadre chaque déplacement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le guide naturaliste, une obligation, pas une option",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Chaque débarquement se fait sous la conduite d'un guide certifié par le parc national",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parc national des Galápagos n&apos;autorise aucun
                débarquement sur un site naturel sans guide naturaliste
                certifié. Le nombre de visiteurs par site et par créneau
                horaire est également plafonné.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous réservons les créneaux de débarquement dès la
                confirmation du voyage, certains sites affichant complet
                plusieurs semaines à l&apos;avance en haute saison.
              </p>
            </div>
          ),
        },
        {
          title: "Croisière ou lodge : deux façons de voir l'archipel",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le yacht multiplie les îles visitées, le lodge terrestre offre plus de confort fixe",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une croisière change de mouillage chaque nuit et couvre
                davantage d&apos;îles éloignées, dont Darwin et Wolf. Un
                lodge terrestre, à Santa Cruz ou Isabela, revient chaque
                soir au même lit et convient mieux au mal de mer.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous combinons souvent les deux : quelques nuits de
                croisière pour les îles reculées, puis un lodge pour se
                poser.
              </p>
            </div>
          ),
        },
        {
          title: "Le mal de mer, et comment l'anticiper",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La navigation de nuit entre les îles peut être formatrice pour un estomac non préparé",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les transferts entre îles se font souvent de nuit, sur une
                mer parfois formée, notamment en saison de garúa (juin à
                novembre).
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Un traitement préventif pris la veille du départ reste plus
                efficace qu&apos;un comprimé avalé en pleine houle. Les
                cabines centrales et basses tanguent moins que celles de
                l&apos;avant.
              </p>
            </div>
          ),
        },
        {
          title: "La garúa, une saison fraîche mal comprise",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De juin à novembre, un ciel voilé et une mer plus riche en vie marine",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La garúa apporte un ciel souvent couvert le matin et une
                eau plus froide, portée par le courant de Humboldt. C&apos;est
                aussi la période où la faune marine, requins-marteaux
                compris, se concentre le plus.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une combinaison intégrale de 5 mm change le confort du
                snorkeling pendant cette saison, même pour un nageur
                habitué à des eaux plus chaudes.
              </p>
            </div>
          ),
        },
        {
          title: "Ne jamais toucher, ne jamais nourrir",
          cardEyebrow: "Faune",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une distance de deux mètres avec la faune est exigée par le parc national",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parc national impose une distance minimale de deux
                mètres avec tous les animaux, même ceux qui s&apos;approchent
                spontanément, comme les otaries ou les iguanes marins.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Laissez l&apos;animal décider de la distance. C&apos;est presque
                toujours lui qui s&apos;approche en premier, jamais l&apos;inverse.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue légère, combinaison si besoin, crème solaire minérale reef-safe",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Tenue légère et respirante le jour, lainage pour les soirées
                en mer. Chaussures d&apos;eau pour les débarquements humides,
                fréquents sur les plages sans quai.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une crème solaire minérale, sans octinoxate ni oxybenzone,
                est obligatoire dans certains parcs marins de l&apos;archipel.
              </p>
            </div>
          ),
        },
        {
          title: "Le budget d'un voyage aux Galápagos",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le yacht et les droits d'entrée du parc pèsent plus que le vol international",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le coût d&apos;une croisière ou d&apos;un lodge haut de
                gamme dépasse largement celui du vol international, en
                raison du nombre limité de licences délivrées par le parc
                national.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous présentons un budget détaillé avant toute réservation,
                sans engagement.
              </p>
            </div>
          ),
        },
        {
          title: "Prolonger par le continent équatorien",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Quito et sa vieille ville coloniale se visitent avant ou après l'archipel",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Quito, classée à l&apos;UNESCO dès 1978, et sa vieille ville
                coloniale se prêtent à deux ou trois jours avant
                l&apos;envol pour l&apos;archipel, le temps de récupérer du
                vol long-courrier.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous plaçons systématiquement une nuit à Quito ou Guayaquil
                avant le vol intérieur, jamais une correspondance serrée le
                jour même.
              </p>
            </div>
          ),
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
          question: "Quelle est la meilleure période pour partir aux Galápagos ?",
          answer:
            "L'archipel se visite toute l'année, avec deux saisons bien distinctes. De juin à novembre, les eaux plus froides et riches en nutriments favorisent une importante activité marine, requins-marteaux compris. De décembre à mai, les températures sont plus chaudes et la mer plus calme, des conditions particulièrement agréables pour le snorkeling en famille.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 18 à 20 heures de trajet, avec une correspondance, notamment via Madrid ou Amsterdam, jusqu'à Quito ou Guayaquil. Il faut ensuite prévoir environ 2 heures de vol intérieur jusqu'à Baltra ou San Cristóbal.",
        },
        {
          question: "Faut-il un visa pour aller aux Galápagos ?",
          answer:
            "Non. Pour les ressortissants français, aucun visa n'est nécessaire pour un séjour touristique de 90 jours maximum sur une période de douze mois glissants, avec un passeport valide plus de six mois après la date de sortie prévue. Une Carte de contrôle de transit (TCT, 20 USD) et un droit d'entrée aux espaces protégés des Galápagos (200 USD, pour les plus de 12 ans) sont en revanche obligatoires.",
        },
        {
          question: "Comment se déroule un voyage aux Galápagos, en croisière ou à terre ?",
          answer:
            "Les deux formules existent et se combinent souvent : une croisière change de mouillage chaque nuit et couvre les îles les plus reculées, un lodge terrestre à Santa Cruz ou Isabela offre un point fixe plus confortable entre les excursions.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Les otaries et les iguanes marins se laissent approcher sans crainte, et le snorkeling encadré convient à des enfants dès sept ou huit ans. Nous adaptons la durée des excursions et le choix du bateau selon l'âge des enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux Galápagos ?",
          answer:
            "Le budget dépend surtout du bateau ou du lodge choisi, le nombre de licences de navigation étant limité par le parc national. Les droits d'entrée et la carte de transit s'ajoutent à ce montant. Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation.",
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
        "D'autres terrains d'expédition en Amérique du Sud et centrale, à composer sur mesure avec votre travel designer.",
      slugs: ["perou", "colombie", "costa-rica"],
    },
  ],
};
