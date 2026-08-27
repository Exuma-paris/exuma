import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "ecosse",
  name: "Écosse",
  placeKind: "region",
  country: "Royaume-Uni",
  genitive: "de l'Écosse",
  continentSlug: "europe",
  blurb: "Édimbourg, les Borders, les Highlands, Skye",
  keywords: [
    "ecosse",
    "edimbourg",
    "borders",
    "highlands",
    "skye",
    "speyside",
    "whisky",
    "golf",
  ],
  metaTitle: "Écosse : Voyage sur mesure",
  metaDescription:
    "Voyage en Écosse sur mesure : Édimbourg, les Borders, les Highlands et l'île de Skye. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Écosse",
      heading: "En été, la nuit ne tombe jamais vraiment",
      description:
        "En juin, à Édimbourg, il fait encore jour à vingt-deux heures trente, et plus longtemps encore en montant vers le nord. Le matin, on se promène dans le parc d'un château que la même famille habite depuis trois siècles. Le soir, un whisky se sert avec le nom de la rivière qui l'a fait.",
      images: [
        {
          src: "/destination/ecosse/hero-1.png",
          alt: "Le château d'Édimbourg au-dessus de la vieille ville au petit matin, voyage en Écosse",
        },
        {
          src: "/destination/ecosse/hero-2.png",
          alt: "Le château de Floors et son parc au bord de la Tweed, à Kelso dans les Borders",
        },
        {
          src: "/destination/ecosse/hero-3.png",
          alt: "Les montagnes Cuillin de l'île de Skye au-dessus du loch, à la fin du jour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Écosse ?",
      heading: "Carole, spécialiste de l'Écosse, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime en Écosse, c'est la distance entre deux étapes. On roule une heure et demie et l'on change complètement de pays : la vallée de la Tweed n'a rien à voir avec le Speyside, qui n'a rien à voir avec Skye. Je conseille toujours de rester trois nuits au même endroit plutôt que de tout enchaîner. C'est là que les portes s'ouvrent, qu'un propriétaire propose de montrer sa bibliothèque ou son jardin, et que le voyage devient le vôtre.",
        role: "Travel Designer · Écosse",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Écosse",
      heading: "Édimbourg, les Borders, puis la route du nord",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Écosse commence par Édimbourg. La ville tient sur deux niveaux. En haut, la vieille ville accrochée à sa crête de basalte, avec le château à un bout et le palais de Holyrood à l'autre. En bas, la New Town géorgienne, dessinée d'un seul trait au dix-huitième siècle. On passe d'un monde à l'autre en dix minutes de marche.",
        "Une heure au sud, les Borders. C'est la vallée de la Tweed : des collines rondes, des abbayes ouvertes au ciel et des maisons de famille encore occupées. Le château de Floors, à Kelso, appartient toujours aux ducs de Roxburghe. On visite les salons, puis le jardin clos où poussent les légumes servis à table. L'ancien domaine de la famille est de l'autre côté de la rivière.",
        "Le nord change tout. La route monte vers les Highlands, traverse Glencoe et ses grandes parois, longe des lochs qui n'en finissent pas. Le Speyside rassemble la plus forte concentration de distilleries du pays. Plus loin encore, l'île de Skye ferme le voyage : les Cuillin d'un côté, des rivières à truite de mer de l'autre, et Portree comme seul vrai village.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/ecosse/full-image.png",
        alt: "Route des Highlands traversant la vallée de Glencoe, voyage en Écosse",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Écosse : les maisons et leur histoire",
      heading: "Des châteaux que l'on habite encore",
      theme: "light",
      paragraphs: [
        "En Écosse, un château n'est pas toujours un monument. Beaucoup sont restés des maisons de famille, transmises depuis dix ou douze générations, et cela s'entend dès l'entrée : il y a des chiens, du courrier sur la console, des photographies récentes à côté des portraits anciens. Floors, bâti en 1721 pour le premier duc de Roxburghe puis agrandi un siècle plus tard, se visite ainsi. Les tapisseries et les tableaux sont accrochés là où la famille les a mis.",
        "La vallée de la Tweed en compte plusieurs autres, à moins d'une heure les unes des autres. Abbotsford, la maison que Walter Scott s'est fait construire au bord de la rivière, garde sa bibliothèque et son cabinet d'armes dans l'état où il les a laissés. Melrose et Dryburgh dressent encore leurs arches au-dessus des prés. On finit par mesurer les distances en maisons plutôt qu'en kilomètres.",
      ],
      images: [
        {
          src: "/destination/ecosse/split-1.png",
          alt: "Salon du château de Floors, ses tapisseries et ses portraits de famille, Kelso",
        },
        {
          src: "/destination/ecosse/split-2.png",
          alt: "Bibliothèque d'Abbotsford, la maison de Walter Scott au bord de la Tweed",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/ecosse/xp-whisky-1.png",
          alt: "Six verres de dégustation alignés lors d'un atelier whisky privé à Édimbourg",
        },
        right: {
          src: "/destination/ecosse/xp-whisky-2.png",
          alt: "Expert en kilt versant un whisky lors d'une dégustation privée à Édimbourg",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Ce que la carte de l'Écosse fait au whisky",
        columns: [
          "La dégustation se tient dans une pièce fermée d'Édimbourg, en fin d'après-midi. L'expert porte le kilt de son clan et commence par expliquer pourquoi : le tartan dit d'où l'on vient, et c'est exactement la question que pose un whisky. Six verres attendent sur la table, dans un ordre qui n'est pas négociable.",
          "On commence par les Lowlands, souples et céréaliers. Viennent les Highlands, plus ronds, où l'eau descend sur la tourbe sans s'y attarder. On finit par Islay, dont l'orge est séchée sur des feux de tourbe : le verre sent la fumée et l'iode avant même d'être porté à la bouche. Entre deux, il raconte ce que le fût a fait pendant vingt ans. À la fin, on sait dire ce que l'on aime.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Écosse",
      heading: "Trois journées qui donnent le ton",
      description:
        "Trois moments portent le séjour. À Kelso, le château de Floors ouvre ses salons, sa collection et son jardin clos. Sur l'île de Skye, un guide mène à la rivière pour la truite de mer et le saumon. À l'est d'Édimbourg, les links d'East Lothian se jouent au bord de la mer, face à l'île de Bass Rock.",
      slugs: ["chateau-floors", "peche-mouche-skye", "links-east-lothian"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Écosse",
      description:
        "Trois adresses, trois manières d'être en Écosse. Un train qui dort à quai et repart chaque matin ailleurs dans les Highlands. Un ancien domaine ducal dans les Borders, avec son parcours de golf et la Tweed en contrebas. Une maison de trente chambres sur Princes Street, à Édimbourg.",
      slugs: ["royal-scotsman", "schloss-roxburghe", "100-princes-street"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Écosse",
      description:
        "Vol, monnaie, formalités et saisons : les repères qui permettent de poser les dates d'un voyage en Écosse.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Une heure cinquante entre Paris et Édimbourg, avec plusieurs départs par jour. Glasgow est également desservi en direct, ce qui permet d'entrer par l'est et de repartir par l'ouest sans refaire la route en sens inverse.", // TODO: verify la durée de vol et les liaisons directes depuis Paris
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Une heure de moins qu'en France, toute l'année. Quand il est 16 h à Paris, il est 15 h à Édimbourg. Le changement d'heure se fait aux mêmes dates qu'en France.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La livre sterling. Trois banques écossaises impriment leurs propres billets, illustrés de ponts, de poètes et d'animaux du pays : ils circulent partout en Écosse et se gardent volontiers en souvenir. La carte bancaire passe jusque dans les pubs de village.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa pour les ressortissants français. Le passeport suffit, accompagné d'une autorisation électronique de voyage, l'ETA, qui se demande en ligne en quelques minutes et couvre plusieurs séjours.", // TODO: verify le tarif et la durée de validité de l'ETA britannique
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est demandée. Le calendrier vaccinal français suffit et l'eau du robinet se boit partout dans le pays.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à septembre. Mai et juin offrent les journées les plus longues : il fait encore jour à vingt-deux heures trente à Édimbourg autour du solstice. En août, la bruyère met les collines au violet. Septembre garde une lumière très basse et des routes calmes.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais partout. Le scots s'entend encore dans les Borders et le nord-est. Le gaélique reste vivant dans les Hébrides : sur Skye et Harris, les panneaux sont bilingues et les noms de lieux décrivent le paysage.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat océanique, sans excès de chaleur ni de froid : autour de 19 °C l'après-midi en juillet à Édimbourg, et il ne gèle presque jamais au bord de la mer. La côte est, celle d'Édimbourg et d'East Lothian, est la plus ensoleillée du pays.", // TODO: verify les moyennes de température
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Écosse. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/ecosse/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Écosse, d'Édimbourg aux Borders et à l'île de Skye",
            "Adresses confidentielles en Écosse : maisons de famille et chais fermés au public",
            "Hébergements en Écosse : train des Highlands, domaine ducal des Borders et maison d'Édimbourg",
            "Conciergerie privée 24/7 pour un voyage en Écosse",
            "Expériences en Écosse : château de Floors, pêche à la mouche sur Skye et links d'East Lothian",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Écosse",
      heading: "Six étapes, d'Édimbourg à l'île de Skye",
      description:
        "Six étapes qui ne se ressemblent pas : une capitale sur deux niveaux, une vallée de grandes demeures, un cordon de links au bord de la mer, une vallée de distilleries, un défilé de montagnes et une île de rivières.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Édimbourg",
          description:
            "Deux jours suffisent. Le château au bout de la crête, le Royal Mile qui descend jusqu'à Holyrood, et la New Town géorgienne en contrebas. En août, le Festival occupe toute la ville : théâtre, musique et spectacles de rue du matin au soir.",
          image: {
            src: "/destination/ecosse/map-edimbourg.png",
            alt: "Le Royal Mile et les toits de la vieille ville d'Édimbourg vus depuis la crête",
          },
          // TODO: verify coords
          coordinates: { lat: 55.9533, lng: -3.1883 },
        },
        {
          title: "Kelso et les Borders",
          description:
            "La Tweed, des collines rondes et quatre abbayes médiévales. Le château de Floors domine la rivière et appartient toujours aux ducs de Roxburghe. Abbotsford, la maison de Walter Scott, est à trente minutes de route.",
          image: {
            src: "/destination/ecosse/map-kelso.png",
            alt: "La Tweed et les collines des Borders au pied du château de Floors, Kelso",
          },
          // TODO: verify coords
          coordinates: { lat: 55.5967, lng: -2.4344 },
        },
        {
          title: "East Lothian",
          description:
            "Une trentaine de kilomètres de côte à l'est d'Édimbourg, et une douzaine de links posés sur la dune. Muirfield et North Berwick se suivent presque sans interruption, face à l'île de Bass Rock et à sa colonie de fous de Bassan.",
          image: {
            src: "/destination/ecosse/map-east-lothian.png",
            alt: "Green d'un links d'East Lothian au bord de la mer du Nord, près de North Berwick",
          },
          // TODO: verify coords
          coordinates: { lat: 56.0578, lng: -2.7166 },
        },
        {
          title: "Le Speyside",
          description:
            "La vallée de la Spey rassemble la plus forte concentration de distilleries du pays. Aberlour, Craigellachie et Glenfarclas se suivent sur quelques kilomètres. La rivière est aussi l'une des meilleures d'Europe pour le saumon.",
          image: {
            src: "/destination/ecosse/map-speyside.png",
            alt: "Alambics en cuivre d'une distillerie du Speyside, dans la vallée de la Spey",
          },
          // TODO: verify coords
          coordinates: { lat: 57.4711, lng: -3.2265 },
        },
        {
          title: "Glencoe et les Highlands de l'Ouest",
          description:
            "Un défilé encaissé entre de grandes parois, ouvert sur la mer à son extrémité. La route le traverse en vingt minutes, et le vallon caché se gagne en une demi-journée de marche. Le Ben Nevis, plus haut sommet du pays, est juste au nord.",
          image: {
            src: "/destination/ecosse/map-glencoe.png",
            alt: "Les parois de la vallée de Glencoe et la route qui la traverse, Highlands de l'Ouest",
          },
          // TODO: verify coords
          coordinates: { lat: 56.6816, lng: -5.1029 },
        },
        {
          title: "L'île de Skye",
          description:
            "Les Cuillin d'un côté, une côte découpée de l'autre, et Portree comme seul vrai village. Les rivières y sont courtes et rapides : la truite de mer y monte en été. Un pont relie l'île au continent, à deux heures de Glencoe.",
          image: {
            src: "/destination/ecosse/map-skye.png",
            alt: "Le port coloré de Portree et les Cuillin en arrière-plan, île de Skye",
          },
          // TODO: verify coords
          coordinates: { lat: 57.4125, lng: -6.1946 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Écosse",
      description:
        "Huit repères venus du terrain : la lumière, les routes, le whisky, la table, et ce qui se réserve très longtemps à l'avance.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "La lumière du nord",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Autour du solstice, l'heure dorée dure trois heures et le ciel ne s'éteint jamais complètement",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;Écosse est plus au nord que Copenhague. En juin, le
                soleil se couche après vingt-deux heures à Édimbourg, plus tard
                encore dans les Hébrides, et il laisse derrière lui une clarté
                bleue qui tient jusqu&apos;à l&apos;aube.
              </p>
              <p>
                Cette lumière très basse dure des heures au lieu de quelques
                minutes. C&apos;est le moment des marches en fin de journée, des
                sorties en mer et des photographies : les collines passent du
                vert au roux, puis au doré.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les journées sont construites à l&apos;envers de l&apos;habitude,
                avec les temps forts placés en soirée et les dîners servis
                tard, quand il fait encore grand jour.
              </p>
            </div>
          ),
        },
        {
          title: "Les routes prennent leur temps",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dans les Highlands, on roule sur une voie unique et l'on se salue de la main à chaque croisement",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur les îles et dans le nord, beaucoup de routes n&apos;ont
                qu&apos;une seule voie, avec des élargissements réguliers
                appelés « passing place ». On s&apos;y arrête à tour de rôle et
                l&apos;on lève la main pour remercier. C&apos;est une
                conversation silencieuse qui dure toute la journée.
              </p>
              <p>
                Comptez deux heures pour cent kilomètres, et profitez-en : les
                cerfs traversent, les lochs se découvrent au virage. Trois ou
                quatre bases valent mieux que sept étapes. On s&apos;installe,
                et le pays vient à vous.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Chauffeur francophone sur l&apos;ensemble du séjour, ou voiture
                de location livrée à l&apos;hôtel selon les étapes. Les deux se
                combinent sur un même itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Un whisky se demande par sa région",
          cardEyebrow: "Whisky",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Lowlands, Highlands, Speyside, Islay, Campbeltown : cinq régions, cinq caractères",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays compte cinq régions de production, et chacune a son
                caractère. Les Lowlands sont souples, le Speyside fruité, les
                Highlands plus ronds, Islay franchement fumé, Campbeltown salin.
                Demander un Speyside de douze ans plutôt qu&apos;« un whisky »
                change immédiatement la conversation avec le barman.
              </p>
              <p>
                Deux mots suffisent ensuite. Un « dram » est une mesure, la dose
                que l&apos;on sert. Un « cask strength » sort du fût sans être
                ramené à degré, et s&apos;ouvre avec quelques gouttes
                d&apos;eau.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les plus belles dégustations se font le matin ou en fin
                d&apos;après-midi. Le palais est net et les chais sont pour
                vous seuls.
              </p>
            </div>
          ),
        },
        {
          title: "Les départs se réservent un an avant",
          cardEyebrow: "Golf",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Muirfield, North Berwick, St Andrews : les créneaux du matin s'ouvrent douze mois à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grands links écossais ouvrent leurs réservations aux
                visiteurs un an à l&apos;avance, et les créneaux du matin
                partent les premiers. C&apos;est aussi ce qui fait la valeur de
                la partie : on joue sur des parcours que peu de monde a foulés
                dans l&apos;année.
              </p>
              <p>
                Le vent fait partie du jeu. Un links change complètement de
                visage selon l&apos;heure du départ, et les caddies locaux
                valent la dépense : ils donnent la ligne avant même de regarder
                le green.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Départs et caddies réservés en amont, clubs livrés à
                l&apos;hôtel, et transferts calés sur l&apos;heure du tee.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à septembre, avec une lumière qui s'étire jusqu'à vingt-deux heures trente",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mai et juin ouvrent la saison avec les journées les plus longues
                de l&apos;année et les jardins des grandes maisons en pleine
                floraison. Les rhododendrons de la côte ouest atteignent la
                taille d&apos;un arbre.
              </p>
              <p>
                Août met la bruyère au violet et remplit Édimbourg pour le
                Festival. Septembre donne une lumière plus basse, des routes
                calmes et des tables faciles à obtenir. Octobre est le mois du
                brame du cerf, que l&apos;on entend depuis la terrasse des
                lodges.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                L&apos;hiver a ses arguments : les feux de tourbe sont allumés
                dans les salons dès seize heures, et les grandes maisons
                réservent leurs plus belles chambres à ceux qui viennent hors
                saison.
              </p>
            </div>
          ),
        },
        {
          title: "Les noms de lieux racontent le paysage",
          cardEyebrow: "Langue",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Quatre mots de gaélique suffisent à lire une carte d'Écosse comme un texte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Presque tous les noms de lieux viennent du gaélique et décrivent
                un relief. « Ben » est une montagne, « glen » une vallée, «
                loch » un lac ou un bras de mer, « inver » une embouchure. Ben
                Nevis, Glencoe, Loch Ness, Inverness se lisent alors tout seuls.
              </p>
              <p>
                Dans les Hébrides, la langue est encore parlée au quotidien et
                les panneaux sont bilingues. Sur Skye, on entend le gaélique au
                magasin comme au pub.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le « ch » de loch se prononce comme la jota espagnole, jamais
                comme un k. C&apos;est le seul détail qui fait sourire les
                Écossais.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qu'il faut dans la valise",
          cardEyebrow: "Bagage",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des chaussures de marche, une couche chaude, et une veste habillée pour les dîners",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On s&apos;habille par couches : un pull fin, une veste
                imperméable à capuche et des chaussures qui tiennent sur la
                roche. Cela suffit du matin au soir, en juillet comme en
                septembre.
              </p>
              <p>
                Les grandes maisons demandent une tenue habillée le soir dans
                leurs salles à manger, veste pour les messieurs. Les journées,
                elles, se passent en vêtements de terrain, et personne ne
                regarde vos bottes.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les prises électriques sont de type britannique, à trois broches
                plates. Un adaptateur suffit.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on mange",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Langoustines de la côte ouest, bœuf Highland, saumon fumé au chêne et gibier dès l'automne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte ouest sort des langoustines et des coquilles
                Saint-Jacques qui partent en grande partie vers l&apos;Espagne
                et la France. Les meilleures se mangent au bord du quai, cuites
                à l&apos;eau de mer, sans autre apprêt.
              </p>
              <p>
                À l&apos;intérieur, le bœuf Highland et l&apos;agneau
                d&apos;estive tiennent la table, et le saumon se fume au bois de
                chêne. Le gibier arrive à l&apos;automne : grouse, chevreuil,
                cerf.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le haggis se sert en petite portion au début du repas, avec de
                la purée de navet. Il vaut la peine d&apos;être demandé : c&apos;est
                le plat que les Écossais font chanter une fois par an.
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
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons dormi trois nuits dans le train et nous nous sommes réveillés chaque matin devant un paysage différent. Le soir, on dînait à quai, quelque part dans les Highlands, avec les fenêtres ouvertes sur la vallée.",
          image: {
            src: "/destination/ecosse/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Highlands, juin 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La visite de Floors s'est faite hors des horaires d'ouverture, il n'y avait personne d'autre dans les salons. On nous a montré le jardin clos, puis les légumes du soir sont arrivés de là.",
          image: {
            src: "/destination/ecosse/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Kelso et les Borders, mai 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Six verres, et à la fin j'étais capable de dire ce que j'aimais et pourquoi. L'expert a passé une heure à nous expliquer ce que la tourbe et le fût changent. Je ne bois plus de whisky de la même façon.",
          image: {
            src: "/destination/ecosse/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Édimbourg, septembre 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Écosse ?",
          answer:
            "De mai à septembre. Mai et juin offrent les journées les plus longues de l'année, avec une lumière qui s'étire jusqu'à vingt-deux heures trente, et les jardins des grandes maisons en pleine floraison. Août met la bruyère au violet et donne à Édimbourg son Festival. Septembre garde une lumière très basse, des routes calmes et des tables faciles à obtenir.",
        },
        {
          question: "Combien de temps dure le vol Paris-Édimbourg ?",
          answer:
            "Une heure cinquante, avec plusieurs départs par jour depuis Paris. Glasgow est également desservi en direct, ce qui permet d'entrer par l'est et de repartir par l'ouest. Le décalage horaire est d'une heure de moins qu'en France, toute l'année.",
        },
        {
          question: "Faut-il un visa pour aller en Écosse ?",
          answer:
            "Non. Pour les ressortissants français, le passeport suffit, accompagné d'une autorisation électronique de voyage appelée ETA, qui se demande en ligne en quelques minutes et couvre plusieurs séjours. Aucune vaccination n'est requise et la couverture santé s'obtient avant le départ.",
        },
        {
          question: "Que faire en Écosse en une semaine ?",
          answer:
            "Deux nuits à Édimbourg pour le château, le Royal Mile, la New Town et une dégustation de whisky. Deux nuits ensuite dans les Borders, entre le château de Floors, Abbotsford et les links d'East Lothian. Trois nuits enfin dans les Highlands, par Glencoe et le Speyside. L'île de Skye s'ajoute sur dix nuits.",
        },
        {
          question: "Faut-il louer une voiture pour visiter l'Écosse ?",
          answer:
            "Une voiture ou un chauffeur, oui : les plus belles routes ne sont pas desservies par le train, et la conduite fait partie du voyage. Dans les Highlands et sur les îles, on roule sur une voie unique avec des élargissements pour se croiser, à un rythme d'environ deux heures pour cent kilomètres. Un chauffeur francophone laisse le regard libre, en particulier sur les journées de dégustation.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Écosse ?",
          answer:
            "Un voyage en Écosse sur mesure avec Exuma se situe généralement entre 4 000 et 9 000 € par personne pour sept nuits, hébergements, chauffeur, guides et accès privés compris, hors transport depuis Paris. Le train des Highlands et les départs sur les grands links constituent le principal poste variable.", // TODO: verify la fourchette de budget
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
        "Trois autres pays du nord de l'Europe, où les journées s'étirent en été et où l'on roule peu pour voir beaucoup.",
      slugs: ["irlande", "islande", "norvege"],
    },
  ],
};
