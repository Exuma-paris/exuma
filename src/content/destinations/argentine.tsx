import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "argentine",
  name: "Argentine",
  placeKind: "country",
  country: "Argentine",
  genitive: "de l'Argentine",
  continentSlug: "ameriques",
  blurb: "Buenos Aires, Mendoza, la Patagonie, Iberá",
  keywords: [
    "argentine",
    "buenos aires",
    "mendoza",
    "patagonie",
    "ibera",
    "el calafate",
    "malbec",
    "tango",
    "humahuaca",
  ],
  metaTitle: "Argentine : Voyage sur mesure",
  metaDescription:
    "Voyage en Argentine sur mesure : Buenos Aires, Mendoza, Patagonie et Esteros del Iberá. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Argentine",
      heading: "L'Argentine, de Buenos Aires aux glaciers de Patagonie",
      description:
        "L'Argentine se découvre lentement. Buenos Aires donne le ton avec ses librairies ouvertes tard et ses patios où l'on danse encore le tango, puis les vignes de Mendoza s'étendent au pied des Andes, et la Patagonie finit par tout emporter. Nous composons cet enchaînement depuis plus de dix ans.",
      images: [
        {
          src: "/destination/argentine/hero-1.png",
          alt: "Front d'un glacier et sommets de Patagonie argentine au lever du jour",
        },
        {
          src: "/destination/argentine/hero-2.png",
          alt: "Façade Belle Époque du quartier de Recoleta à Buenos Aires",
        },
        {
          src: "/destination/argentine/hero-3.png",
          alt: "Vignes de malbec au pied de la cordillère des Andes à Mendoza",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime en Argentine, c'est que rien ne s'y laisse survoler. Il faut consentir aux distances, accepter que le vent de Patagonie décide parfois à votre place, et ce sont précisément ces heures-là que l'on garde en rentrant. Je construis les voyages de façon à ce qu'elles arrivent.",
        role: "Travel Designer · Argentine",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "L'Argentine, un pays qui se savoure étape par étape",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Argentine commence presque toujours à Buenos Aires, dans une ville qui se réveille tard et se couche plus tard encore. On flâne entre les hôtels particuliers de Recoleta et les patios de San Telmo, on pousse la porte d'une librairie de l'avenue Corrientes à une heure où tout est fermé ailleurs, et l'on dîne quand la nuit est déjà installée. Le pays vit à son propre rythme, et le voyage suit ce tempo.",
        "Les vignes de Mendoza prennent ensuite le relais, avec ces tables que l'on dresse entre les rangs au moment où la cordillère passe au rose. Plus au sud, la Patagonie s'ouvre sur le lac Argentino et ses glaciers, et le silence y remplace tout le reste. Au nord, les marais d'Iberá abritent des jaguars nés en liberté là où l'espèce avait disparu, et c'est aujourd'hui l'un des plus beaux retours du continent. Nous vous conduisons dans chacun de ces mondes, l'un après l'autre, et c'est cette Argentine-là que nous montrons.",
        "« L'Argentine se comprend à table, entre le premier verre de torrontés et le dernier morceau d'agneau, quand la conversation passe des chevaux au tango puis à la politique et que personne ne songe à regarder l'heure. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/argentine/full-image.png",
        alt: "Front du glacier Perito Moreno sur le lac Argentino, Patagonie argentine",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Le Nord-Ouest andin",
      heading: "Les vallées colorées de Purmamarca et de Cafayate",
      theme: "light",
      paragraphs: [
        "À Purmamarca, la montagne se couvre de bandes ocre, roses et vertes que l'on distingue à l'œil nu. La Quebrada de Humahuaca s'ouvre là, entre les villages de Tilcara et de Humahuaca, sur une terre où seuls les cactus poussent. La route monte encore jusqu'au sommet de l'Hornocal, où les couleurs se déplacent au fil de la matinée.",
        "Plus au sud, la vallée Calchaquí déroule ses vignobles jusqu'aux portes du désert. À Cafayate, le torrontés donne un blanc sec et floral qui ne ressemble à aucun autre, et les bodegas y sont restées familiales : on entre en frappant à la porte, et c'est le vigneron qui vous sert.",
        "Le soir, la lumière s'adoucit d'un coup et l'on dîne dehors, un manteau sur les épaules, dans une odeur de terre encore chaude.",
      ],
      images: [
        {
          src: "/destination/argentine/split-1.png",
          alt: "Cerro de los Siete Colores dominant le village de Purmamarca",
        },
        {
          src: "/destination/argentine/split-2.png",
          alt: "Vignobles d'altitude de Cafayate dans la vallée Calchaquí",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/argentine/xp-ibera-jaguar-1.png",
          alt: "Pirogue moteur coupé dans un couloir d'eau des Esteros del Iberá",
        },
        right: {
          src: "/destination/argentine/xp-ibera-jaguar-2.png",
          alt: "Jaguar au bord de l'eau dans les marais d'Iberá au crépuscule",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La pirogue au crépuscule dans les marais d'Iberá",
        columns: [
          "La pirogue s'enfonce dans un couloir d'eau où les herbes flottantes touchent la coque. Les capybaras ne bougent pas, les caïmans se contentent d'ouvrir un œil, et le biologiste s'arrête sur une empreinte fraîche laissée dans la vase. Le jaguar avait disparu de Corrientes pendant des générations. Il y est revenu, et les jeunes y naissent désormais en liberté.",
          "Nous vous conduisons sur l'eau à l'heure où la lumière baisse, avec l'équipe qui suit ces animaux depuis des années et les connaît un par un. Personne ne promet un jaguar. On croise en revanche les cerfs des marais, les loups à crinière et les fourmiliers géants, et l'on assiste au retour des oiseaux vers leurs dortoirs. La nuit, à Rincón del Socorro, on entend l'eau bouger tout près de la véranda.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Argentine",
      heading: "Nos coups de cœur en Argentine",
      description:
        "Un patio de San Telmo où le tango se danse entre habitués, un feu allumé au milieu des vignes de la vallée de Uco, un bras de lac que l'on remonte seuls jusqu'à la glace. Voici les moments que nous inscrivons volontiers à un voyage en Argentine.",
      slugs: [
        "milonga-privee-san-telmo",
        "univers-francis-mallmann",
        "glacier-upsala-navigation",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Argentine",
      heading: "Où séjourner",
      description:
        "Une maison patricienne à Recoleta, des villas posées dans les vignes de Mendoza, une estancia ouverte sur la steppe de Patagonie. Trois façons de dormir en Argentine, et aucune ne ressemble aux autres.",
      slugs: ["alvear-palace", "awasi-mendoza", "eolo-patagonia"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Argentine",
      description:
        "Temps de vol, décalage, monnaie, formalités et saisons inversées : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Buenos Aires se rejoint en vol direct depuis Paris, en environ 14 heures selon les compagnies et les périodes. Les étapes de Mendoza, d'El Calafate ou d'Iguazú se rejoignent ensuite par un vol intérieur.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'Argentine ne change pas d'heure. Comptez quatre heures de retard sur la France en hiver, et cinq heures en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le peso argentin. L'inflation et les taux de change évoluent rapidement : les paiements par carte étrangère sont très largement acceptés, mais il reste utile de conserver un peu d'espèces pour les petites adresses.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de 90 jours. Le passeport doit être valide pendant toute la durée du séjour.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est obligatoire pour un séjour touristique classique. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille l'hépatite A. La vaccination contre la fièvre jaune est recommandée dans certaines régions, notamment Misiones et Corrientes.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Nous privilégions octobre à avril pour découvrir la Patagonie. À Mendoza, les vendanges animent les vignobles entre février et avril. Les Esteros del Iberá se découvrent idéalement de mars à novembre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol, avec plusieurs variantes régionales. Le rioplatense, chantant et plein d'italianismes, s'entend surtout à Buenos Aires et dans le centre-est du pays. Plusieurs langues indigènes, dont le guaraní et le quechua, restent parlées selon les provinces. L'anglais est largement pratiqué dans l'hôtellerie.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Les saisons sont inversées. Le nord d'Iguazú et de Corrientes est subtropical, Mendoza sèche et ensoleillée, Buenos Aires tempérée, et la Patagonie australe fraîche et ventée, y compris en été.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Argentine. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/argentine/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure en Argentine",
            "Porte cochère d'une maison ancienne du quartier de San Telmo",
            "Chambre ouverte sur la steppe de Patagonie au lever du jour",
            "Concierge coordonnant un transfert privé vers El Calafate",
            "Table dressée près d'un feu dans les vignes de la vallée de Uco",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Argentine",
      heading: "De Buenos Aires aux marais d'Iberá",
      description:
        "Buenos Aires, Mendoza, El Calafate, les marais d'Iberá, Iguazú et la Quebrada de Humahuaca ont chacun leur charme. Voici les lieux autour desquels s'organisent le plus souvent nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 4,
      places: [
        {
          title: "Buenos Aires, Recoleta et San Telmo",
          description:
            "La ville se découvre par quartiers, des hôtels particuliers de Recoleta aux patios de San Telmo, en passant par les librairies de l'avenue Corrientes qui restent ouvertes quand tout est fermé ailleurs. On y dîne tard, et les soirées s'étirent.",
          image: {
            src: "/destination/argentine/map-buenos-aires.png",
            alt: "Hôtels particuliers du quartier de Recoleta à Buenos Aires",
          },
          coordinates: { lat: -34.6037, lng: -58.3816 }, // TODO: verify coords
        },
        {
          title: "Mendoza et la vallée de Uco",
          description:
            "Les vignes s'étagent au pied de la cordillère, dans une lumière sèche qui a fait la réputation du malbec argentin. Au moment des vendanges, la vallée de Uco est à son plus beau.",
          image: {
            src: "/destination/argentine/map-mendoza.png",
            alt: "Vignobles de la vallée de Uco face à la cordillère des Andes",
          },
          coordinates: { lat: -33.6, lng: -69.15 }, // TODO: verify coords
        },
        {
          title: "El Calafate et le Perito Moreno",
          description:
            "Le glacier avance encore et se rompt dans un fracas que l'on entend bien après avoir vu le bloc tomber. On l'approche par les passerelles, ou depuis l'eau pour en longer le front.",
          image: {
            src: "/destination/argentine/map-perito-moreno.png",
            alt: "Front du glacier Perito Moreno vu depuis les passerelles",
          },
          coordinates: { lat: -50.4785, lng: -73.0397 }, // TODO: verify coords
        },
        {
          title: "Les Esteros del Iberá",
          description:
            "Ces marais de la province de Corrientes abritent le retour du jaguar en Argentine. On s'y déplace en pirogue et à cheval, au rythme que l'eau impose.",
          image: {
            src: "/destination/argentine/map-ibera.png",
            alt: "Couloir d'eau et végétation flottante des Esteros del Iberá",
          },
          coordinates: { lat: -28.5333, lng: -57.1667 }, // TODO: verify coords
        },
        {
          title: "Iguazú, côté argentin",
          description:
            "Les passerelles s'avancent au-dessus des chutes jusqu'à la Garganta del Diablo, où l'on ne s'entend plus parler. La forêt reprend juste derrière, avec ses toucans et ses coatis qui traversent le chemin.",
          image: {
            src: "/destination/argentine/map-iguazu.png",
            alt: "Passerelle face à la Garganta del Diablo aux chutes d'Iguazú",
          },
          coordinates: { lat: -25.6953, lng: -54.4367 }, // TODO: verify coords
        },
        {
          title: "La Quebrada de Humahuaca",
          description:
            "Les caravanes andines ont remonté cette vallée pendant des siècles, entre Purmamarca, Tilcara et Humahuaca. La route s'achève au sommet de l'Hornocal, là où la montagne ne montre plus que ses couleurs.",
          image: {
            src: "/destination/argentine/map-humahuaca.png",
            alt: "Strates colorées de la Quebrada de Humahuaca dans la province de Jujuy",
          },
          coordinates: { lat: -23.7447, lng: -65.4989 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage en Argentine",
      description:
        "Huit observations de terrain que l'on ne trouve pas dans un guide, pour choisir une étape ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Les saisons sont inversées",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Notre hiver est leur été, et la Patagonie s'ouvre pleinement entre le printemps et l'automne austral",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                En janvier, la Patagonie connaît ses journées les plus longues
                pendant que Buenos Aires se vide de ses habitants partis vers la
                côte. En juillet, à l'inverse, une partie des lodges du sud ferme
                et la lumière ne dure que quelques heures. Le calendrier français
                joue donc à contretemps : les vacances de février tombent au bon
                moment, celles d'août beaucoup moins pour la Patagonie.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons le sud entre octobre et avril, et gardons le
                Nord-Ouest andin pour les mois où la Patagonie se referme. Le
                pays offre ainsi deux belles fenêtres, à des moments opposés de
                l'année.
              </p>
            </div>
          ),
        },
        {
          title: "Buenos Aires ne se lève pas tôt",
          cardEyebrow: "Ville",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "On y dîne tard et la milonga ne commence qu'au milieu de la nuit, alors autant dormir le matin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les restaurants remplissent leurs premières tables quand la nuit
                est déjà installée, et les milongas ne prennent vie qu'une fois
                passé minuit. Prévoir un musée à la première heure revient à
                traverser une ville encore endormie. Le rythme se prend en deux
                jours, à condition d'accepter de déplacer ses repères.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Compter deux ou trois nuits, avec les visites en fin de matinée et
                la sieste assumée l'après-midi. C'est la meilleure façon de
                profiter d'une soirée portègne jusqu'au bout.
              </p>
            </div>
          ),
        },
        {
          title: "Le peso, et comment payer",
          cardEyebrow: "Argent",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Une monnaie qui bouge vite, et une carte étrangère qui reste souvent la meilleure option",
          content: (
            <div className="flex flex-col gap-4">
              {/* TODO: verify la situation monétaire au moment de la publication */}
              <p>
                Les règles de change ont évolué plusieurs fois ces dernières
                années, et il vaut la peine de vérifier la situation avant de
                partir. Les paiements par carte étrangère sont très largement
                acceptés et bénéficient en général d'un taux plus favorable que
                le change en espèces, tandis que les grandes adresses affichent
                volontiers leurs tarifs en dollars.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les hébergements, les transferts et les expériences sont réglés
                en amont depuis la France. Sur place, l'argent liquide ne sert
                plus qu'aux pourboires et aux petites tables de quartier.
              </p>
            </div>
          ),
        },
        {
          title: "La Patagonie a deux visages",
          cardEyebrow: "Patagonie",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "El Calafate pour les glaciers, El Chaltén pour la marche au pied du Fitz Roy",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                El Calafate ouvre l'accès au Perito Moreno et aux bras nord du
                lac Argentino, que l'on remonte en bateau jusqu'aux fronts de
                glace. El Chaltén, plus au nord, est un village de marcheurs
                installé au pied du Fitz Roy, où les sentiers partent des
                dernières maisons. Les deux méritent leur place, et se
                complètent bien.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Prévoir quelques nuits dans le sud plutôt qu'un passage éclair.
                Le vent y décide du programme plus souvent qu'on ne l'imagine, et
                il faut lui laisser sa place.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer par les airs",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les étapes se relient par le ciel, et les correspondances repassent le plus souvent par Buenos Aires",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La plupart des liaisons intérieures repassent par Buenos Aires,
                où l'aéroport du départ n'est pas toujours celui de l'arrivée
                internationale. Une correspondance mal calée se paie en attente,
                parfois en nuit d'hôtel supplémentaire.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les vols intérieurs en même temps que
                l'international, avec les marges nécessaires entre Ezeiza et
                Aeroparque, et un chauffeur sur chaque transfert. Vous n'avez rien
                à vérifier.
              </p>
            </div>
          ),
        },
        {
          title: "Le malbec ne fait pas tout",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le torrontés de Cafayate, la criolla, le bonarda : le pays a d'autres cépages à raconter",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le malbec de Mendoza a rendu un immense service à l'Argentine, au
                point de faire un peu d'ombre au reste. Dans la vallée Calchaquí,
                le torrontés donne un blanc floral et tendu que l'on ne trouve
                nulle part ailleurs. Le bonarda, longtemps réservé aux vins de
                volume, sort aujourd'hui des cuvées que l'on prend au sérieux.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Demandez à goûter les vieilles vignes de criolla, celles que les
                familles gardent souvent pour elles. Elles racontent la
                viticulture d'avant l'exportation, et personne ne les met en
                avant.
              </p>
            </div>
          ),
        },
        {
          title: "Iberá, ce que l'on voit vraiment",
          cardEyebrow: "Faune",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le jaguar ne se commande pas, mais le reste de la faune se montre chaque jour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les jaguars réintroduits dans les Esteros del Iberá vivent en
                liberté sur un territoire dont l'étendue interdit toute
                certitude, et les apercevoir relève de la chance. En revanche,
                les cerfs des marais, les loups à crinière, les fourmiliers
                géants et les caïmans se laissent approcher chaque jour, en
                pirogue comme à cheval.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous conduisons sur l'eau avec les équipes du programme de
                réintroduction, qui connaissent les animaux un par un. Quelques
                nuits sur place donnent une vraie chance, et de toute façon une
                histoire à rapporter.
              </p>
            </div>
          ),
        },
        {
          title: "Dans la valise",
          cardEyebrow: "Bagage",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Un même voyage réclame une doudoune et une chemise de lin, souvent la même semaine",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le vent de Patagonie appelle un vrai coupe-vent et des chaussures
                fermées, y compris au cœur de l'été austral. Iguazú et Iberá
                demandent du lin, un anti-moustique et un chapeau. Buenos Aires,
                enfin, mérite une tenue de ville pour les tables du soir, où la
                mise compte encore beaucoup.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Prévoyez un bagage souple pour les vols intérieurs, dont les
                franchises sont plus strictes que sur les vols internationaux.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage en Argentine",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "Buenos Aires, l'Uco, puis le sud",
          description:
            "Trois régions dans un même voyage, avec chaque arrivée calée avant que la lumière ne tombe. C'est le genre de détail qui ne s'organise pas soi-même.",
        },
        {
          title: "Les biologistes d'Iberá",
          description:
            "Les journées se passent auprès des biologistes du programme de réintroduction. Voir un jaguar n'est jamais garanti, et ce n'est pas ce qui reste du séjour.",
        },
        {
          title: "Une milonga à San Telmo",
          description:
            "Un patio, des danseurs, et personne d'autre. La soirée en apprend davantage sur le pays qu'une semaine de visites, et l'on finit par se lever aussi.",
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
          question: "Quelle est la meilleure période pour partir en Argentine ?",
          answer:
            "Les saisons sont inversées. Nous privilégions octobre à avril pour découvrir la Patagonie. À Mendoza, les vendanges animent les vignobles entre février et avril. Les Esteros del Iberá se découvrent idéalement de mars à novembre, et Buenos Aires comme le Nord-Ouest andin se visitent toute l'année.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Buenos Aires se rejoint en vol direct depuis Paris, en environ 14 heures selon les compagnies et les périodes. Les étapes de Mendoza, d'El Calafate ou d'Iguazú se rejoignent ensuite par un vol intérieur. Le retour se fait de nuit.",
        },
        {
          question: "Faut-il un visa pour aller en Argentine ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de 90 jours. Le passeport doit être valide pendant toute la durée du séjour.",
        },
        {
          question: "Combien de temps faut-il pour visiter l'Argentine ?",
          answer:
            "Quinze jours permettent de réunir Buenos Aires, Mendoza et la Patagonie australe sans se presser. Trois semaines ouvrent une région supplémentaire, les marais d'Iberá ou le Nord-Ouest andin. Sur un séjour plus court, nous préférons approfondir deux régions et garder la Patagonie pour un prochain voyage.",
        },
        {
          question: "Peut-on voir des jaguars en Argentine ?",
          answer:
            "Oui, dans les Esteros del Iberá, en Corrientes, où l'espèce a été réintroduite après une longue absence. Les animaux vivent en liberté sur un immense territoire, si bien que les apercevoir relève de la chance. Les sorties se font en pirogue et à cheval avec les équipes du programme, et la faune environnante se montre chaque jour.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Argentine ?",
          answer:
            "Le budget dépend des régions retenues, de la part de vols intérieurs et du niveau des hébergements. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays du continent américain où la nature et la table tiennent la première place, à composer sur mesure avec votre travel designer.",
      slugs: ["bresil", "mexique", "canada"],
    },
  ],
};
