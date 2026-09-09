import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "croatie",
  name: "Croatie",
  placeKind: "country",
  country: "Croatie",
  genitive: "de la Croatie",
  continentSlug: "europe",
  blurb: "Dubrovnik, Split, îles Kornati, Hvar",
  keywords: [
    "croatie",
    "dubrovnik",
    "split",
    "hvar",
    "kornati",
    "istrie",
    "dalmatie",
    "adriatique",
  ],
  metaTitle: "Croatie : Voyage sur mesure",
  metaDescription:
    "Voyage en Croatie sur mesure : Dubrovnik, Split, îles Kornati, Hvar. Itinéraire conçu par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Croatie",
      heading: "Un archipel de mille îles, une poignée qui se laissent approcher",
      // TODO: verify island count
      description:
        "Mille deux cent quarante-quatre îles bordent la côte dalmate ; une cinquantaine sont habitées. Entre elles, Dubrovnik referme ses remparts sur l'Adriatique, Split vit encore à l'intérieur du palais que l'empereur Dioclétien s'était fait construire pour sa retraite, et les Kornati n'existent que pour les voiliers qui savent où mouiller. La Croatie ne se traverse pas. Elle se navigue.",
      images: [
        {
          src: "/destination/croatie/hero-1.png",
          alt: "Remparts de Dubrovnik surplombant l'Adriatique au coucher du soleil",
        },
        {
          src: "/destination/croatie/hero-2.png",
          alt: "Îlots calcaires du parc national des Kornati vus depuis un voilier",
        },
        {
          src: "/destination/croatie/hero-3.png",
          alt: "Ruelle du palais de Dioclétien à Split au lever du jour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Croatie ?",
      heading: "Stéphane, spécialiste de la Croatie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "La Croatie se lit par la mer, pas par la route. Un voilier avec skipper change complètement la façon dont on découvre la côte dalmate : les Kornati, invisibles depuis la terre, deviennent le cœur du voyage plutôt qu'une excursion d'une journée. Je construis toujours l'itinéraire autour d'une base fixe, Dubrovnik ou Split, et je laisse la météo du jour décider du mouillage.",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Croatie",
      heading: "Un pays qui se raconte autant par la mer que par la terre",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Croatie commence rarement de la même façon deux fois. On arrive par la mer, et la première image est un rempart qui tombe dans l'Adriatique ou une île sans nom sur la carte. La côte dalmate compte plus de mille îles : c'est peut-être la seule destination européenne où l'on navigue une semaine entière sans repasser deux fois au même mouillage.",
        "À Split, seize siècles de vie n'ont jamais quitté le palais que Dioclétien s'était fait construire pour sa retraite : on y dort, on y dîne, on y fait ses courses, entre les colonnes romaines et le linge qui sèche aux fenêtres. Plus au sud, Hvar aligne ses champs de lavande et ses vignerons qui cultivent encore le plavac mali sur des coteaux escarpés face à la mer. Korčula revendique la naissance de Marco Polo, débat jamais tranché mais que personne sur l'île ne songe à trancher.",
        "Entre les îles, la lumière change d'heure en heure et la mer ne garde jamais tout à fait la même couleur. Les Kornati, cent quarante îlots calcaires posés sur une eau turquoise, n'existent que pour ceux qui viennent en bateau : aucune route n'y mène. C'est cette Croatie-là, celle qui se découvre moteur coupé, que nous construisons pour chaque voyage.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/croatie/full-image.png",
        alt: "Vue aérienne des îles Kornati et de leurs eaux turquoise en Croatie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Croatie, le luxe et l'exclusif",
      heading: "Une côte qui se lit autrement, une poignée d'adresses qui la comprennent",
      theme: "light",
      paragraphs: [
        "Notre sélection s'ouvre sur une Croatie que la plupart des visiteurs de Dubrovnik ne voient jamais. Un voilier avec skipper qui remonte la côte dalmate mouillage après mouillage, loin des ferries. Une villa nichée dans les collines de Konavle, à dix minutes des remparts mais hors de portée des foules du Stradun. Des propriétés qui se comptent sur les doigts d'une main, et qui suffisent à couvrir toute la Dalmatie.",
        "À terre, le pays se raconte par ses artisans. Un vigneron du Pelješac descend dans sa cave creusée à même la roche du Dingač pour faire goûter trois millésimes de plavac mali côte à côte. Un trabucante d'Istrie remonte la piste de sa truffière sous les chênes de Motovun, chien en tête. Ces rencontres, plus que les plages, sont ce qui reste d'un voyage en Croatie.",
      ],
      images: [
        {
          src: "/destination/croatie/split-1.png",
          alt: "Cave à vin creusée dans la roche du Dingač sur la péninsule de Pelješac",
        },
        {
          src: "/destination/croatie/split-2.png",
          alt: "Voilier mouillé dans une crique discrète des îles Kornati",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/croatie/xp-voile-kornati-1.png",
          alt: "Voilier privé naviguant entre les îlots calcaires des Kornati",
        },
        right: {
          src: "/destination/croatie/xp-voile-kornati-2.png",
          alt: "Mouillage secret dans une crique du parc national des Kornati",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le jour où les Kornati n'appartiennent qu'à un seul voilier",
        columns: [
          "Le bateau quitte Murter avant que les excursions à la journée ne prennent la mer. Un skipper qui connaît chaque passage mène le voilier entre les cent quarante îlots calcaires du parc national, coupe le moteur dans une crique sans nom, sert le déjeuner à bord pendant que la roche blanche renvoie la lumière de midi.",
          "Il n'y a pas de programme fixe : le vent du jour décide du mouillage suivant. Ce n'est pas une croisière organisée. C'est l'inverse, une journée qui se construit heure par heure, entre une baignade, un déjeuner et le silence qui suit l'extinction du moteur.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Croatie",
      heading: "Nos coups de cœur en Croatie",
      description:
        "Des remparts de Dubrovnik encore vides à la truffière de Motovun, chaque expérience s'ancre dans un lieu précis et un artisan nommé, jamais dans un concept générique.",
      slugs: [
        "remparts-dubrovnik-aube",
        "truffe-blanche-motovun",
        "vin-peljesac-dingac",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Nos hébergements",
      description:
        "Trois adresses qui couvrent la Dalmatie du sud à l'île de Hvar, d'un hôtel de falaise centenaire à une villa réservée aux séjours en famille.",
      slugs: ["hotel-excelsior-dubrovnik", "maslina-resort", "villa-sheherezade"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Croatie",
      description:
        "L'essentiel avant de partir pour un pays entré dans l'espace Schengen et la zone euro en 2023.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 2 heures de vol direct depuis Paris vers Dubrovnik ou Split. Zagreb est desservie toute l'année, tandis que les liaisons directes vers les principaux aéroports de la côte sont généralement renforcées d'avril à octobre.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun décalage horaire avec la France. La Croatie est sur le même fuseau horaire : UTC+1 en hiver et UTC+2 en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro (€) est la monnaie officielle depuis le 1er janvier 2023, date à laquelle la Croatie a remplacé la kuna.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa n'est nécessaire pour les ressortissants français pour un séjour touristique de moins de 3 mois. La Croatie fait partie de l'espace Schengen depuis le 1er janvier 2023. Une carte nationale d'identité ou un passeport en cours de validité est suffisant pour entrer dans le pays.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est obligatoire pour entrer en Croatie depuis la France. Il est toutefois recommandé d'être à jour des vaccinations du calendrier vaccinal français, notamment contre la diphtérie, le tétanos, la poliomyélite, la coqueluche et la rougeole.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à juin et de septembre à début octobre, pour profiter d'un climat agréable, d'une mer encore douce et d'une fréquentation plus modérée sur la côte adriatique. Juillet et août sont les mois les plus chauds et les plus fréquentés.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le croate est la langue officielle. L'anglais est largement parlé dans les zones touristiques, notamment sur la côte. L'italien est également bien compris dans certaines régions, en particulier en Istrie.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le littoral adriatique bénéficie d'un climat méditerranéen, avec des étés chauds et secs et des hivers doux. Dans l'intérieur du pays, notamment autour de Zagreb, le climat est davantage continental, avec des hivers plus froids et des écarts de température plus marqués.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Croatie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/croatie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé en Croatie",
            "Adresse confidentielle dans la vieille ville de Split",
            "Villa privée face à la mer Adriatique",
            "Concierge Exuma sur le port de Dubrovnik",
            "Dégustation de plavac mali chez un vigneron du Pelješac",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Croatie",
      heading: "La Croatie, entre remparts, îles et lacs de montagne",
      description:
        "De la Dalmatie du sud à l'Istrie, en passant par les lacs de Plitvice : un pays qui tient dans une seule côte mais ne se ressemble jamais d'une étape à l'autre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Dubrovnik",
          description:
            "Cité fortifiée du XIVe siècle, remparts praticables sur près de deux kilomètres et vue directe sur les îles Elaphites.",
          image: {
            src: "/destination/croatie/map-dubrovnik.png",
            alt: "Remparts et toits de tuiles de la vieille ville de Dubrovnik",
          },
          // TODO: verify coords
          coordinates: { lat: 42.6507, lng: 18.0944 },
        },
        {
          title: "Split",
          description:
            "Ville construite à l'intérieur même du palais que l'empereur Dioclétien s'était fait bâtir pour sa retraite, au IVe siècle.",
          image: {
            src: "/destination/croatie/map-split.png",
            alt: "Colonnades du palais de Dioclétien à Split",
          },
          // TODO: verify coords
          coordinates: { lat: 43.5081, lng: 16.4402 },
        },
        {
          title: "Hvar",
          description:
            "Île aux champs de lavande et aux vignobles de plavac mali, la plus ensoleillée de l'Adriatique croate.",
          image: {
            src: "/destination/croatie/map-hvar.png",
            alt: "Port et forteresse de la ville de Hvar",
          },
          // TODO: verify coords
          coordinates: { lat: 43.1729, lng: 16.4411 },
        },
        {
          title: "Îles Kornati",
          description:
            "Cent quarante îlots calcaires classés parc national, accessibles uniquement par la mer.",
          image: {
            src: "/destination/croatie/map-kornati.png",
            alt: "Îlots calcaires du parc national des Kornati",
          },
          // TODO: verify coords
          coordinates: { lat: 43.7833, lng: 15.3167 },
        },
        {
          title: "Lacs de Plitvice",
          description:
            "Seize lacs en terrasses reliés par des cascades, au cœur d'une forêt classée à l'Unesco.",
          image: {
            src: "/destination/croatie/map-plitvice.png",
            alt: "Cascades et lacs turquoise du parc national de Plitvice",
          },
          // TODO: verify coords
          coordinates: { lat: 44.8654, lng: 15.582 },
        },
        {
          title: "Rovinj",
          description:
            "Port istrien aux façades vénitiennes, point de départ vers les truffières de Motovun et les vignobles de l'arrière-pays.",
          image: {
            src: "/destination/croatie/map-rovinj.png",
            alt: "Vieille ville vénitienne de Rovinj en Istrie",
          },
          // TODO: verify coords
          coordinates: { lat: 45.0811, lng: 13.6387 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Croatie",
      description:
        "Un pays qui se lit autant par la mer que par la route. Quelques repères pour préparer un séjour à la hauteur de ce que la Croatie a à offrir.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue légère pour la côte, chaussures d'eau pour les mouillages, lainage pour les soirées en mer : la Croatie se joue sur l'eau autant qu'à terre.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: carte d&apos;identité ou passeport en cours de validité.
                Permis de conduire si vous louez un véhicule.
              </p>
              <p>
                &laquo; Nous vérifions systématiquement les formalités de
                chacun de nos clients avant le départ. &raquo;
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                TODO: tenue légère pour le littoral, chaussures d&apos;eau pour
                les mouillages, lainage pour les soirées en mer. Crème solaire
                haute protection.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                &laquo; Nos clients reçoivent une checklist personnalisée
                selon les activités prévues lors de leur séjour, environ 3
                semaines avant. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire. Quelques précautions pour le soleil de l'Adriatique et les longues journées en mer.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: aucun vaccin obligatoire. Vaccinations universelles à
                jour. Numéro d&apos;urgence européen (112) actif partout dans
                le pays.
              </p>
              <p>
                Soleil intense en été sur l&apos;eau, vigilance déshydratation
                en navigation. Eau du robinet potable dans les grandes villes.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique : antalgiques,
                pansements, crème apaisante après-soleil.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à juin et de septembre à mi-octobre, pour la mer chaude, la lumière douce et une côte moins fréquentée.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: la période recommandée par notre équipe : mai-juin et
                septembre-mi-octobre. Mer entre 22 °C et 25 °C, lumière douce,
                fréquentation modérée sur la côte.
              </p>
              <p>
                Juillet-août : haute saison, chaleur forte, Dubrovnik et
                Hvar très fréquentées, à anticiper côté hébergements et
                réservations de bateau.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                TODO: les Kornati se naviguent idéalement tôt le matin, avant
                l&apos;arrivée des excursions à la journée depuis Murter et
                Zadar.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Euro, paiement par carte généralisé sur la côte. Marchés de producteurs et konobas familiales dans l'arrière-pays.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: euro. Paiement par carte largement accepté. Pourboire
                non obligatoire mais apprécié (5–10 % en restaurant).
              </p>
              <p>
                Marchés le matin à Split et Dubrovnik : huile d&apos;olive,
                fromage de brebis, jambon fumé de Dalmatie, vin local.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Nous organisons systématiquement tous les transferts
                de nos clients : chauffeur privé, bateau ou hélicoptère selon
                les envies. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer entre les îles",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le bateau reste le moyen le plus direct de relier les îles dalmates : ferries publics ou affrètement privé selon le rythme voulu.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: les ferries publics relient les grandes îles plusieurs
                fois par jour en saison, mais imposent des horaires fixes.
                Un bateau privé avec skipper permet d&apos;ajuster
                l&apos;itinéraire au jour le jour.
              </p>
              <p>
                Entre Split et Hvar, comptez environ une heure en catamaran
                rapide.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Bateau privé et skipper sont réservés en amont pour
                chaque étape du séjour. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Naviguer dans les Kornati",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le parc national se visite en excursion à la journée ou en itinérance de plusieurs jours, mouillage après mouillage.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: départ conseillé tôt le matin depuis Murter ou Zadar,
                avant les excursions à la journée. Comptez trois à quatre
                jours pour une itinérance complète du parc.
              </p>
              <p>
                Les droits d&apos;entrée au parc national sont réglés
                directement par l&apos;équipage du bateau.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>Réservez le bateau plusieurs semaines à l&apos;avance en haute saison.</p>
            </div>
          ),
        },
        {
          title: "Plitvice et l'arrière-pays",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le parc national de Plitvice se visite en une journée depuis Zagreb ou en étape entre la côte et la capitale.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: comptez une demi-journée pour parcourir les passerelles
                en bois entre les seize lacs. Arrivée en début de matinée
                recommandée, avant les groupes.
              </p>
              <p>
                Le site se trouve à mi-chemin entre Zagreb et la côte
                dalmate, à intégrer en étape de transition plutôt qu&apos;en
                aller-retour depuis la mer.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Prévoir une nuit sur place plutôt qu&apos;une visite éclair :
                les lacs changent de couleur entre la fin d&apos;après-midi et
                le lendemain matin.
              </p>
            </div>
          ),
        },
        {
          title: "Langue et monnaie",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Croate sur les papiers officiels, anglais et italien largement compris sur la côte et en Istrie.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: le croate est la langue officielle. L&apos;anglais est
                courant dans l&apos;hôtellerie, l&apos;italien reste compris
                en Istrie, héritage de la présence vénitienne.
              </p>
              <p>
                L&apos;euro est utilisé partout depuis 2023, y compris dans
                l&apos;arrière-pays.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>Quelques mots de croate suffisent à ouvrir les portes des konobas familiales.</p>
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
          question: "Quelle est la meilleure période pour partir en Croatie ?",
          answer:
            "De mai à juin et de septembre à mi-octobre, pour profiter d'une mer chaude, d'une lumière douce et d'une fréquentation modérée sur la côte dalmate. Juillet et août restent superbes mais demandent d'anticiper les hébergements et les réservations de bateau.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 2h de vol direct vers Dubrovnik, Split ou Zagreb. Les liaisons vers les aéroports côtiers sont plus fréquentes d'avril à octobre.",
        },
        {
          question: "Faut-il un visa pour la Croatie ?",
          answer:
            "Non. La Croatie est membre de l'Union européenne et de l'espace Schengen depuis janvier 2023 : carte nationale d'identité ou passeport en cours de validité suffisent pour les ressortissants français.",
        },
        {
          question: "Que faire en Croatie en dix jours ?",
          answer:
            "Nous recommandons de combiner une base à Dubrovnik ou Split avec une itinérance en voilier privé entre Hvar, Korčula et les Kornati, complétée par une étape à Split pour le palais de Dioclétien et, selon le temps disponible, une incursion vers l'Istrie ou les lacs de Plitvice.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Les criques abritées de la côte dalmate se prêtent bien à la baignade en famille, et les sorties en bateau privé permettent d'adapter le rythme de la journée à des enfants de tous âges.",
        },
        {
          question: "Quel budget prévoir ?",
          answer:
            "Nos voyages sur mesure démarrent à partir de 4 000 € par personne pour une semaine. Le budget varie selon le choix des hébergements, la location d'un bateau privé et la saison.",
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
        "Trois autres rivages méditerranéens où la même logique s'applique : des adresses confidentielles et un itinéraire qui suit la mer plutôt qu'un guide.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["grece", "montenegro", "italie"],
    },
  ],
};
