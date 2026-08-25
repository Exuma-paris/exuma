import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "chili",
  name: "Chili",
  placeKind: "country",
  country: "Chili",
  genitive: "du Chili",
  continentSlug: "ameriques",
  blurb: "Atacama, Colchagua, Chiloé, Patagonie",
  keywords: [
    "chili",
    "atacama",
    "patagonie",
    "torres del paine",
    "ile de paques",
    "valparaiso",
    "colchagua",
    "chiloe",
  ],
  metaTitle: "Chili : Voyage sur mesure",
  metaDescription:
    "Voyage au Chili sur mesure : désert d'Atacama, vignobles de Colchagua, fjords de Patagonie, Rapa Nui. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Chili",
      heading: "Le Chili, du désert d'Atacama aux glaciers de Patagonie",
      description:
        "Un pays long de 4 300 kilomètres et large de deux cents, tenu entre la cordillère et le Pacifique. On commence par le désert le plus sec du monde, on descend vers les vignes de Colchagua et les maisons sur pilotis de Chiloé, on finit face au massif du Paine, là où le vent décide de tout. Entre les deux, il y a Rapa Nui, à cinq heures d'avion de la côte. Nous relions ces mondes dans un même voyage.",
      images: [
        {
          src: "/destination/chili/hero-1.png",
          alt: "Massif des Torres del Paine en Patagonie chilienne au lever du jour",
        },
        {
          src: "/destination/chili/hero-2.png",
          alt: "Vallée de la Lune et cordillère de sel dans le désert d'Atacama",
        },
        {
          src: "/destination/chili/hero-3.png",
          alt: "Maisons sur pilotis de Castro sur l'île de Chiloé au Chili",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Chili ?",
      heading: "Carole, spécialiste du Chili, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Le Chili se traverse dans le sens de la longueur, et c'est là que tout se joue. Trois jours de trop dans le désert et l'on arrive fatigué en Patagonie, où le vent ne pardonne rien. Je construis les itinéraires avec des guides que je connais depuis dix ans, à San Pedro comme à Puerto Natales, et ce sont eux qui ouvrent les estancias et les caves qui ne reçoivent personne.",
        role: "Travel Designer · Chili",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Chili",
      heading: "Un pays qui se lit du nord au sud",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Chili commence presque toujours par le nord. À San Pedro de Atacama, il ne pleut certaines années pas une goutte, et le sol garde la mémoire de chaque pas. On part avant l'aube vers les geysers du Tatio, à 4 300 mètres, où l'eau sort de terre dans un froid sec. Le soir, les lagunes de l'altiplano se couvrent de flamants roses.",
        "Plus bas, Santiago tient entre la cordillère et la côte, et Valparaíso empile ses maisons de tôle peinte sur quarante-deux collines reliées par des funiculaires. À une heure de route, la vallée de Colchagua aligne ses carménères, ce cépage bordelais que le phylloxéra avait effacé d'Europe et que le Chili a conservé sans le savoir pendant plus d'un siècle. On y déjeune chez les vignerons, entre les rangs.",
        "Le sud change tout. Les volcans de l'Araucanie, les palafitos de Castro, puis la Patagonie où la route s'arrête et où la navigation prend le relais. Nous relions ces étapes par des vols intérieurs et des transferts privés, pour que les distances ne mangent pas le voyage.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/chili/full-image.png",
        alt: "Guanacos devant le massif du Paine lors d'un voyage au Chili en Patagonie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Chili : les grands espaces et l'accès rare",
      heading: "Ce que le Chili ne montre pas de lui-même",
      theme: "light",
      paragraphs: [
        "Le Chili n'a jamais eu besoin de se rendre spectaculaire : il l'est par sa géographie. Le revers, c'est que l'on peut le traverser sans jamais quitter la file. Les mêmes miradors, les mêmes horaires, les mêmes bus au pied des Torres. La différence tient à qui vous ouvre la barrière.",
        "Nous travaillons avec des estancias qui ne reçoivent pas de public, des équipages de Puerto Natales qui connaissent les mouillages des fjords Kawésqar, des vignerons de Millahue qui sortent les millésimes de leur cave personnelle. À Rapa Nui, un guide de l'île ouvre Ahu Tongariki avant le lever du jour. Ce n'est pas un privilège de brochure : c'est un carnet d'adresses que l'on met dix ans à constituer.",
      ],
      images: [
        {
          src: "/destination/chili/split-1.png",
          alt: "Baqueano patagon et ses chevaux criollos devant une estancia du Paine",
        },
        {
          src: "/destination/chili/split-2.png",
          alt: "Vigneron de la vallée de Colchagua dans sa cave à barriques de carménère",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/chili/xp-tongariki-aube-1.png",
          alt: "Les quinze moai d'Ahu Tongariki en contre-jour au lever du soleil sur l'île de Pâques",
        },
        right: {
          src: "/destination/chili/xp-tongariki-aube-2.png",
          alt: "Guide rapanui devant les moai d'Ahu Tongariki, site encore désert au petit matin",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "L'aube à Ahu Tongariki, avant que l'île se réveille",
        columns: [
          "On quitte Hanga Roa dans le noir, une demi-heure de route sur la côte est. Quinze moai se tiennent là, en ligne, dos à l'océan, remis debout il y a trente ans après qu'un raz-de-marée les avait couchés. Le site est encore fermé et l'on y entre seuls. Le ciel passe du gris au rouge derrière les statues, et pendant vingt minutes leurs silhouettes n'ont plus de visage.",
          "Un guide rapanui reste avec nous tout ce temps. Il explique lesquels de ces quinze ont été relevés, lesquels dorment encore ailleurs sur l'île, et pourquoi ses ancêtres les ont dressés face aux villages plutôt que vers la mer. Le vent vient du Pacifique, il n'y a pas d'autre bruit. Quand les premiers véhicules arrivent sur la piste, on repart déjeuner chez lui.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Chili",
      heading: "Les moments que l'on garde en rentrant",
      description:
        "Une traversée à cheval avec les baqueanos du Paine, le ciel de l'altiplano lu par un astrophysicien, et cinq jours de navigation dans les fjords Kawésqar.",
      slugs: [
        "torres-paine-baqueanos",
        "atacama-astrophysicien",
        "fjords-kawesqar-goelette",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Trois maisons, trois Chili",
      description:
        "Une villa avec son guide et son 4x4 face au massif du Paine, une maison basse à la sortie de San Pedro, et un vignoble de Millahue confié à des artistes.",
      slugs: ["awasi-patagonia", "explora-atacama", "vik-chile"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Chili",
      description:
        "Vol, formalités, saisons et distances : l'essentiel pour préparer votre voyage au Chili en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          // TODO: verify durées de vol
          description:
            "Santiago se rejoint en vol direct depuis Paris, en quatorze heures environ. Les correspondances par Madrid, São Paulo ou Buenos Aires ajoutent quelques heures. Depuis Santiago, comptez deux heures de vol pour Calama et le désert d'Atacama, trois heures trente pour Punta Arenas et la Patagonie, cinq heures trente pour Rapa Nui.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          // TODO: verify
          description:
            "Quatre à six heures de moins qu'en France selon la saison, les deux pays changeant d'heure en sens inverse. Rapa Nui a deux heures de retard sur le continent chilien.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le peso chilien (CLP). Les cartes étrangères sont acceptées partout dans les villes, les hôtels et les domaines viticoles. En Patagonie et sur l'altiplano, quelques espèces restent utiles pour les péages, les entrées de parc et les pêcheurs.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify formalités en vigueur
          description:
            "Aucun visa pour les ressortissants français en séjour touristique de moins de quatre-vingt-dix jours. Le passeport doit être valable pour toute la durée du séjour. Une déclaration est demandée à l'entrée pour les produits alimentaires, végétaux et animaux, contrôlée sérieusement à l'arrivée comme entre les régions.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          // TODO: verify recommandations sanitaires
          description:
            "Aucune vaccination n'est exigée à l'entrée. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille l'hépatite A. Rien de particulier pour l'altitude, qui se gère par le rythme et non par un traitement.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "L'été austral, de novembre à mars, pour la Patagonie et les navigations australes. Le désert d'Atacama se visite toute l'année. Nous aimons particulièrement mars et avril : les vendanges à Colchagua, les couleurs qui tournent en Patagonie et beaucoup moins de monde au pied des Torres.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol, avec un accent chilien réputé difficile même des hispanophones. Le mapudungun se parle encore dans l'Araucanie, le rapanui sur l'île de Pâques. L'anglais est courant dans les hôtels et chez les guides, plus rare ailleurs : nos accompagnants sont francophones.",
        },
        {
          iconName: "sun",
          title: "Climat",
          // TODO: verify températures
          description:
            "Autant de climats que de latitudes. Atacama reste sec toute l'année, avec des journées douces et des nuits proches de zéro. Santiago et Colchagua vivent des étés méditerranéens. En Patagonie, le vent et les quatre saisons peuvent se succéder dans la même journée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Chili. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/chili/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Chili entre Atacama, Colchagua, Chiloé et la Patagonie",
            "Adresses confidentielles au Chili : estancias fermées au public et caves de vignerons",
            "Hébergements au Chili : villas face au massif du Paine et maisons du désert d'Atacama",
            "Conciergerie privée 24/7 pour un voyage au Chili",
            "Expériences immersives au Chili : navigation dans les fjords Kawésqar et ciel de l'altiplano",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Chili",
      heading: "Six étapes, du désert d'Atacama au massif du Paine",
      description:
        "Quatre mille kilomètres du nord au sud, que les vols intérieurs relient sans transformer le voyage en course.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 4,
      places: [
        {
          title: "San Pedro de Atacama",
          description:
            "Un village de terre au pied du volcan Licancabur, entouré du désert le plus sec du monde. Les geysers du Tatio fument à 4 300 mètres avant le lever du jour, et les lagunes de l'altiplano se remplissent de flamants roses.",
          image: {
            src: "/destination/chili/map-atacama.png",
            alt: "Geysers du Tatio fumant à l'aube dans le désert d'Atacama au Chili",
          },
          // TODO: verify coords
          coordinates: { lat: -22.9087, lng: -68.1997 },
        },
        {
          title: "Valparaíso",
          description:
            "Quarante-deux collines de maisons en tôle peinte, reliées par des funiculaires centenaires qui grincent encore. Le port travaille en bas, les ateliers de peintres et les tables de poisson occupent les hauteurs.",
          image: {
            src: "/destination/chili/map-valparaiso.png",
            alt: "Maisons colorées et funiculaire sur les collines de Valparaíso au Chili",
          },
          // TODO: verify coords
          coordinates: { lat: -33.0472, lng: -71.6127 },
        },
        {
          title: "La vallée de Colchagua",
          description:
            "Le pays du carménère, ce cépage bordelais disparu d'Europe et redécouvert ici au milieu des merlots. On déjeune chez les vignerons, et les caves les plus intéressantes ne figurent sur aucune carte touristique.",
          image: {
            src: "/destination/chili/map-colchagua.png",
            alt: "Vignes de carménère de la vallée de Colchagua au pied de la cordillère",
          },
          // TODO: verify coords
          coordinates: { lat: -34.6415, lng: -71.3667 },
        },
        {
          title: "Chiloé",
          description:
            "Une île de brume et de bois, où les églises jésuites sont charpentées comme des barques retournées. À Castro, les palafitos tiennent sur pilotis au-dessus de l'eau, et le curanto se cuit encore sous la terre chauffée aux pierres.",
          image: {
            src: "/destination/chili/map-chiloe.png",
            alt: "Palafitos de Castro sur pilotis au-dessus de l'eau sur l'île de Chiloé",
          },
          // TODO: verify coords
          coordinates: { lat: -42.4827, lng: -73.7628 },
        },
        {
          title: "Torres del Paine",
          description:
            "Trois tours de granit au-dessus des lacs turquoise, et un vent qui ne s'arrête jamais tout à fait. Les guanacos y vivent par centaines, et le puma s'y observe à l'aube depuis les estancias voisines du parc.",
          image: {
            src: "/destination/chili/map-torres-del-paine.png",
            alt: "Tours de granit du Paine au-dessus du lac Pehoé en Patagonie chilienne",
          },
          // TODO: verify coords
          coordinates: { lat: -50.9423, lng: -73.4068 },
        },
        {
          title: "Rapa Nui, l'île de Pâques",
          description:
            "Cinq heures de vol depuis Santiago pour la terre habitée la plus isolée du monde. Les moai y sont dressés face à l'intérieur des terres, et plusieurs centaines dorment encore dans la carrière de Rano Raraku.",
          image: {
            src: "/destination/chili/map-rapa-nui.png",
            alt: "Moai alignés d'Ahu Tongariki face à l'océan sur l'île de Pâques",
          },
          // TODO: verify coords
          coordinates: { lat: -27.1127, lng: -109.3497 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Chili",
      description:
        "Huit conseils de terrain, pour choisir la bonne saison, absorber les distances et comprendre pourquoi nous inscrivons telle étape à votre itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'été austral pour la Patagonie, le désert d'Atacama toute l'année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Patagonie commande le calendrier. Ses navigations et ses
                estancias fonctionnent de novembre à mars, quand les journées
                s&apos;étirent jusqu&apos;au milieu de la soirée et que les cols
                restent ouverts. Le désert d&apos;Atacama, lui, se visite toute
                l&apos;année : le ciel y est dégagé la plupart des nuits.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nos périodes préférées sont mars et avril. Les vendanges battent
                leur plein à Colchagua, les lengas de Patagonie tournent au
                rouge, et les sentiers du Paine se vident des marcheurs de
                janvier. En juillet et août, le sud se met au repos mais le nord
                reste ouvert, et Santiago se skie à une heure de la ville.
              </p>
            </div>
          ),
        },
        {
          title: "Absorber les distances",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "4 300 kilomètres du nord au sud : les vols intérieurs font le voyage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Chili s&apos;étire sur quatre mille trois cents kilomètres
                pour deux cents de large. Aucune route ne relie utilement
                Atacama à la Patagonie : le pays se parcourt en avion, avec
                Santiago comme pivot de presque toutes les liaisons.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous comptons trois nuits minimum par région, et nous plaçons
                les vols intérieurs le matin, quand le vent de Patagonie
                perturbe le moins les atterrissages. Les transferts entre
                aéroport et lodge sont privés, avec un accompagnant francophone :
                depuis Punta Arenas, plusieurs heures de route séparent encore
                la piste du lit.
              </p>
            </div>
          ),
        },
        {
          title: "L'altitude à Atacama",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "San Pedro à 2 400 mètres, les geysers du Tatio à 4 300",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                San Pedro se tient à 2 400 mètres, mais les excursions montent
                bien plus haut : 4 300 mètres aux geysers du Tatio, un peu plus
                de 4 000 aux lagunes Miscanti et Miñiques. L&apos;air est sec,
                le soleil cogne à travers le froid, et l&apos;effort se ressent
                tout de suite.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous gardons les deux premières journées basses, dans la vallée
                de la Lune et les salars, avant de programmer le Tatio. Boire
                davantage que la soif ne le demande, manger léger le premier
                soir, éviter l&apos;alcool à l&apos;arrivée : ces trois règles
                suffisent presque toujours.
              </p>
            </div>
          ),
        },
        {
          title: "Le vent de Patagonie",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des rafales qui décoiffent les lacs, et quatre saisons dans la journée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre novembre et février, le vent d&apos;ouest souffle presque
                sans interruption sur le Paine, avec des rafales qui soulèvent
                l&apos;eau des lacs. Il peut pleuvoir, grêler et faire grand
                soleil dans le même après-midi.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Trois couches, dont une coupe-vent imperméable, et des
                chaussures qui tiennent la cheville. Nous prévoyons toujours une
                journée de marge sur les navigations australes : quand le canal
                est fermé, l&apos;équipage décale, et la journée se passe à
                terre avec les baqueanos.
              </p>
            </div>
          ),
        },
        {
          title: "Aller à Rapa Nui",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Cinq heures et demie de vol depuis Santiago, et un séjour à déclarer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île de Pâques se rejoint uniquement depuis Santiago, en
                cinq heures et demie de vol. Le séjour est encadré : formulaire
                d&apos;entrée, hébergement déclaré à l&apos;avance, durée
                limitée, et parc national accessible avec un guide rapanui pour
                la plupart des sites.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Quatre nuits sont le bon format : deux journées ne suffisent
                pas, et l&apos;île se marche mieux qu&apos;elle ne se roule.
                Nous ajoutons l&apos;étape en fin de voyage, après la Patagonie,
                pour finir sur un rythme plus lent. Les vols se remplissent
                plusieurs mois à l&apos;avance en janvier et février.
              </p>
            </div>
          ),
        },
        {
          title: "À table",
          cardEyebrow: "Gastronomie",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Centolla de Magellan, merluza australe, curanto de Chiloé",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Pacifique fournit l&apos;essentiel : la centolla de Magellan,
                le congre, les ormeaux, la merluza australe. À Chiloé, le
                curanto cuit sous la terre chauffée aux pierres, couvert de
                feuilles de nalca. En Patagonie, l&apos;agneau tourne sur la
                croix devant le feu.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le carménère se boit sur les viandes, mais ce sont les blancs de
                Limarí et les pinots de Casablanca qui surprennent le plus. Nous
                réservons les tables de Santiago plusieurs semaines à
                l&apos;avance, et nous organisons les déjeuners chez les
                vignerons de Millahue et d&apos;Apalta directement avec eux.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un seul voyage, quatre climats : tout se joue sur les couches",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un même itinéraire traverse le désert, la vallée centrale et la
                Patagonie. Prévoir un coupe-vent imperméable, une doudoune
                légère, deux polaires, des chaussures de marche déjà faites, et
                de quoi dîner en ville à Santiago.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le soleil de l&apos;altiplano et celui de la Patagonie sont les
                plus agressifs du voyage : indice 50, lunettes filtrantes,
                chapeau à bord large. Les vols intérieurs limitent le bagage en
                soute, et les navigations australes n&apos;acceptent que le
                petit sac : nous gardons le reste à l&apos;hôtel de Puerto
                Natales.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le peso chilien, les pourboires d'usage et le prix des accès rares",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays est sûr et bien équipé, les cartes passent partout dans
                les villes. Au restaurant, dix pour cent sont proposés sur
                l&apos;addition et se donnent d&apos;usage. Les guides et les
                équipages de navigation se remercient en espèces, en pesos ou en
                dollars.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                L&apos;essentiel du budget part dans trois postes : les vols
                intérieurs, les lodges de Patagonie en pension complète avec
                guides privés, et les accès négociés (estancias fermées,
                navigations privées, caves particulières). Nous détaillons ces
                trois lignes séparément dans le devis, pour que chacun décide où
                mettre le curseur.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage au Chili",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "Cinq jours dans les fjords Kawésqar",
          description:
            "Cinq jours sans croiser un autre bateau. Le matin, le glacier lâche des blocs et personne ne dit rien. Le cuisinier achète le crabe aux pêcheurs avant d'appareiller.",
        },
        {
          title: "À cheval avec les baqueanos",
          description:
            "Deux baqueanos ouvrent la route sur des terres où personne n'entre, les tours de Torres del Paine en face toute la matinée. C'est là que la Patagonie prend son sens.",
        },
        {
          title: "Les Nuages de Magellan, dans l'Atacama",
          description:
            "L'astrophysicien règle son télescope dans le froid et le noir du désert. Trois jours plus tard, le déjeuner se prend dans une cave de Millahue, avec le vigneron.",
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
          question: "Quelle est la meilleure période pour partir au Chili ?",
          answer:
            "L'été austral, de novembre à mars, si le voyage inclut la Patagonie : c'est la saison où les navigations australes et les estancias fonctionnent pleinement. Le désert d'Atacama se visite toute l'année, avec un ciel dégagé la plupart des nuits. Nous recommandons volontiers mars et avril : les vendanges à Colchagua, les couleurs d'automne en Patagonie et beaucoup moins de monde au pied des Torres del Paine.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Environ quatorze heures en vol direct pour Santiago, un peu plus avec une correspondance par Madrid, São Paulo ou Buenos Aires. À cela s'ajoutent les vols intérieurs : deux heures pour Calama et le désert d'Atacama, trois heures trente pour Punta Arenas et la Patagonie, cinq heures trente pour Rapa Nui. Nous prévoyons une nuit à Santiago à l'arrivée, pour ne pas enchaîner deux vols dans la même journée.",
        },
        {
          question: "Faut-il un visa pour aller au Chili ?",
          answer:
            "Non. Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de quatre-vingt-dix jours. Le passeport doit être valable pour toute la durée du séjour. Une déclaration sanitaire est demandée à l'entrée pour les produits alimentaires, végétaux et animaux : le contrôle est sérieux, y compris sur les vols intérieurs vers Rapa Nui. Nous vous transmettons la liste des formalités à jour avec votre carnet de voyage.",
        },
        {
          question: "Que faire au Chili en 15 jours ?",
          answer:
            "Quinze jours permettent trois régions sans courir. Le désert d'Atacama d'abord, quatre nuits, avec les geysers du Tatio, les salars et les lagunes de l'altiplano. Santiago et la vallée de Colchagua ensuite, trois nuits, pour Valparaíso et les domaines de carménère. La Patagonie enfin, cinq à six nuits, entre le massif du Paine et les fjords Kawésqar. Rapa Nui demande quatre nuits de plus et se place plutôt en fin de parcours.",
        },
        {
          question: "Combien coûte un voyage au Chili ?",
          answer:
            "Trois postes font l'essentiel du budget : les vols intérieurs, indispensables pour relier le nord et le sud ; les lodges de Patagonie, généralement en pension complète avec guides et véhicules privés ; et les accès que nous négocions localement, comme les estancias fermées au public, les navigations privées dans les fjords ou les caves particulières de Millahue. Nous détaillons ces lignes séparément avant toute réservation, sans engagement.",
        },
        {
          question: "Le Chili est-il adapté à un voyage en famille ?",
          answer:
            "Oui, à condition de doser l'altitude et les distances. Les excursions d'Atacama montent jusqu'à 4 300 mètres : nous les adaptons ou les remplaçons pour les jeunes enfants. La Patagonie se vit très bien à cheval, en zodiac ou en marche courte depuis les estancias, et Chiloé plaît à tous les âges. Nous construisons alors des journées plus courtes, avec des lodges où les familles disposent de villas séparées et de guides qui leur sont dédiés.",
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
        "D'autres pays d'Amérique du Sud où les grands espaces, la table et les estancias se répondent dans un même voyage, à composer sur mesure avec votre travel designer.",
      slugs: ["argentine", "bresil", "uruguay"],
    },
  ],
};
