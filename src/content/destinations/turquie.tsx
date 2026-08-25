import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "turquie",
  name: "Turquie",
  placeKind: "country",
  country: "Turquie",
  genitive: "de la Turquie",
  continentSlug: "proche-orient",
  blurb: "Istanbul, la Cappadoce, Éphèse, la côte lycienne",
  keywords: [
    "turquie",
    "istanbul",
    "bosphore",
    "cappadoce",
    "ephese",
    "cote lycienne",
    "bodrum",
    "anatolie",
    "mer egee",
  ],
  metaTitle: "Turquie : Voyage sur mesure",
  metaDescription:
    "Voyage en Turquie sur mesure : Istanbul, Cappadoce, Éphèse et côte lycienne. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Turquie",
      heading: "La Turquie, d'Istanbul aux vallées de Cappadoce",
      description:
        "Istanbul se découvre lentement, au fil des traversées du Bosphore et des ruelles qui montent vers les mosquées. La Cappadoce, elle, s'apprivoise au petit matin, quand le jour se lève sur ses reliefs de tuf. Et la côte lycienne garde ses criques pour ceux qui arrivent par la mer. Nous composons cet enchaînement pour vous, étape par étape.",
      images: [
        {
          src: "/destination/turquie/hero-1.png",
          alt: "Coupoles et minarets d'Istanbul au-dessus du Bosphore en Turquie",
        },
        {
          src: "/destination/turquie/hero-2.png",
          alt: "Cheminées de fées de la vallée de Göreme en Cappadoce à l'aube",
        },
        {
          src: "/destination/turquie/hero-3.png",
          alt: "Goélette au mouillage dans une crique de la côte lycienne",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: replace with a real verbatim from Stéphane
        quote:
          "La Turquie demande qu'on lui laisse du temps. Istanbul a besoin de quelques jours pour cesser d'être une image et devenir une ville familière. La Cappadoce se donne au lever du jour, et la côte lycienne se savoure depuis un bateau. Mon travail consiste à mettre ces moments dans le bon ordre, et à vous ouvrir les portes au moment où personne d'autre n'est là.",
        role: "Travel Designer · Turquie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "La Turquie, l'art de vivre entre Orient et Méditerranée",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Turquie commence à Istanbul, dans la lumière qui tombe des coupoles. On descend l'escalier de la citerne basilique et la ville se tait d'un coup : les colonnes se répondent dans la pénombre, l'eau affleure sous les passerelles. En remontant à l'air libre, le Bosphore est là, avec ses bateaux et l'odeur du thé sur les pontons.",
        "La suite se dessine comme une promenade. Istanbul se donne en plusieurs jours, le temps que ses deux rives deviennent familières. La Cappadoce prend le relais avec ses paysages de roche creusée et ses églises souterraines. Puis la mer Égée appelle, avec Éphèse et Pergame, avant que la côte lycienne ne referme le voyage sur l'eau. C'est cette Turquie-là que nous montrons, et nous la connaissons depuis plus de dix ans.",
        "« Il y a la Turquie des grandes mosquées et celle des criques, celle des bazars et celle des maisons que l'on n'ouvre pas au public. Le voyage tient dans le passage de l'une à l'autre. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/turquie/full-image.png",
        alt: "Le Bosphore au crépuscule depuis les hauteurs d'Istanbul, Turquie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Derinkuyu, la ville sous la Cappadoce",
      heading: "Derinkuyu, une ville entière cachée sous la Cappadoce",
      theme: "light",
      paragraphs: [
        "Sous un champ de Cappadoce, un escalier s'enfonce dans la roche tendre et l'on descend dans Derinkuyu. La ville souterraine se déploie niveau après niveau, avec ses écuries, ses réfectoires, ses chapelles et jusqu'à une salle d'école. Les habitants de la région s'y installaient des semaines entières lorsque les cavaliers traversaient le plateau.",
        "L'air y reste frais toute l'année, ce qui explique les jarres de vin retrouvées au fond des galeries. De grandes meules de pierre fermaient les couloirs depuis l'intérieur, et l'on peut encore les faire tourner du doigt. Le silence, lui, ne ressemble à aucun autre.",
        "On remonte vers la lumière, et le plateau paraît soudain plus habité.",
      ],
      images: [
        {
          src: "/destination/turquie/split-1.png",
          alt: "Escalier taillé dans le tuf de la cité souterraine de Derinkuyu",
        },
        {
          src: "/destination/turquie/split-2.png",
          alt: "Paysage de roche creusée et pigeonniers près d'Uçhisar en Cappadoce",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/turquie/xp-montgolfiere-cappadoce-1.png",
          alt: "Montgolfière au-dessus des cheminées de fées de Göreme au lever du jour",
        },
        right: {
          src: "/destination/turquie/xp-montgolfiere-cappadoce-2.png",
          alt: "Enveloppe d'une montgolfière gonflée avant l'aube en Cappadoce",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La montgolfière au-dessus des vallées de Göreme",
        columns: [
          "La montgolfière décolle avant le jour, depuis un champ que le pilote choisit la veille au soir selon le vent. La nacelle est réservée pour vous seuls, et l'on y parle à voix normale. La lumière arrive par le haut : elle touche d'abord les reliefs de tuf, puis descend lentement dans les vallées encore sombres. Le paysage se dévoile dans cet ordre-là, sans bruit.",
          "Le pilote redescend ensuite jusqu'à effleurer les cheminées de fées de la vallée Rouge, tout près des pigeonniers creusés dans la roche par les paysans d'autrefois. Il reprend un peu d'altitude pour retrouver le courant qui ramène vers Uçhisar, et le ballon se pose dans un champ où le petit-déjeuner attend déjà. Nous vous y conduisons avant que les autres ballons ne s'élèvent.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Turquie",
      heading: "Nos expériences préférées en Turquie",
      description:
        "Un archéologue qui ouvre Éphèse quand le site s'est vidé, un équipage qui vous emmène le long de la côte lycienne, un hammam ottoman gardé pour vous seuls. Ce sont des portes que l'on n'ouvre pas depuis un site de réservation.",
      slugs: [
        "ephese-archeologue-hors-heures",
        "goelette-privee-cote-lycienne",
        "hammam-kilic-ali-pasa-prive",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Turquie",
      heading: "Trois adresses où l'on se sent attendu",
      description:
        "Une maison de bois au bord du Bosphore, des chambres taillées dans le tuf en Cappadoce, une villa posée dans le maquis au-dessus de la mer Égée. Trois maisons discrètes, choisies pour l'attention qu'on y porte aux détails.",
      slugs: ["ajia-hotel", "museum-hotel-cappadoce", "six-senses-kaplankaya"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Turquie",
      description:
        "Temps de vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          // TODO: verify auprès de Turkish Airlines et Air France
          description:
            "Comptez environ 3 heures 30 en vol direct de Paris à Istanbul, selon les compagnies et les périodes. La Cappadoce, Izmir et la côte se rejoignent ensuite par un vol intérieur au départ d'Istanbul.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "La Turquie vit à UTC+3 toute l'année et ne change pas d'heure. Le décalage avec la France est d'une heure en été et de deux heures en hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est la livre turque. Les cartes bancaires sont très largement acceptées dans les hôtels et les restaurants, mais il reste utile de conserver un peu d'espèces pour les bazars, les taxis et les villages. Le change se fait généralement sur place.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify sur France Diplomatie avant publication
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique de 90 jours maximum sur une période de 180 jours. Les autorités turques demandent un passeport valable au moins 150 jours après la date d'entrée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est présenté comme obligatoire pour un voyage touristique classique. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille systématiquement la vaccination contre l'hépatite A. Celles contre l'hépatite B, la typhoïde et la rage se discutent ensuite selon la durée et les conditions du séjour.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Nous privilégions avril, mai et juin, puis septembre et octobre : la lumière est belle, les sites se visitent sans hâte et la mer reste agréable sur l'Égée à l'automne. Juillet et août sont chauds sur la côte, avec des soirées très douces.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le turc est la seule langue officielle. Le kurde et l'arabe sont parlés par d'importantes communautés, surtout dans l'est et le sud-est du pays. L'anglais est généralement pratiqué dans les hôtels et par les guides des régions touristiques.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Les côtes égéenne et méditerranéenne connaissent un climat méditerranéen, avec des étés chauds et secs. Le plateau anatolien est plus continental et la Cappadoce peut recevoir de la neige en hiver. Istanbul, plus humide, est souvent ventée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Turquie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/turquie/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure en Turquie",
            "Cour intérieure d'une maison ottomane aux volets de bois",
            "Chambre troglodyte taillée dans le tuf en Cappadoce",
            "Concierge coordonnant un transfert privé sur le Bosphore",
            "Table dressée au bord de l'eau à la tombée du jour en Turquie",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Turquie",
      heading: "D'Istanbul à la côte lycienne, nos étapes préférées",
      description:
        "Istanbul, la Cappadoce, Éphèse, Pamukkale, Kekova et Bodrum : chacune de ces étapes a son caractère, et c'est autour d'elles que s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Istanbul, les deux rives",
          description:
            "Istanbul se vit sur l'eau. On passe d'une rive à l'autre en bateau, de Sainte-Sophie et de la mosquée Bleue aux marchés de Kadıköy, et la ville change de caractère à chaque traversée.",
          image: {
            src: "/destination/turquie/map-istanbul.png",
            alt: "Sainte-Sophie et le Bosphore vus depuis les toits d'Istanbul",
          },
          coordinates: { lat: 41.0082, lng: 28.9784 }, // TODO: verify coords
        },
        {
          title: "La Cappadoce, Göreme et Uçhisar",
          description:
            "Le plateau volcanique s'est laissé sculpter par l'eau et le vent. Les moines byzantins y ont creusé des églises entières, fresques comprises, et les villages se glissent encore dans la roche.",
          image: {
            src: "/destination/turquie/map-cappadoce.png",
            alt: "Cheminées de fées et églises rupestres de Göreme en Cappadoce",
          },
          coordinates: { lat: 38.6431, lng: 34.8286 }, // TODO: verify coords
        },
        {
          title: "Éphèse, la voie de marbre",
          description:
            "La voie de marbre descend entre les colonnes jusqu'à la bibliothèque de Celsus. Un peu plus haut, les maisons en terrasses d'Hadrien gardent leurs mosaïques à l'abri, et l'on y circule à quelques-uns seulement.",
          image: {
            src: "/destination/turquie/map-ephese.png",
            alt: "Façade de la bibliothèque de Celsus sur le site d'Éphèse",
          },
          coordinates: { lat: 37.9395, lng: 27.3417 }, // TODO: verify coords
        },
        {
          title: "Pamukkale et Hiérapolis",
          description:
            "L'eau chaude dépose son calcaire en vasques blanches depuis l'Antiquité, et l'on y marche pieds nus dans une lumière presque irréelle. La cité d'Hiérapolis veille juste au-dessus, avec son bassin antique.",
          image: {
            src: "/destination/turquie/map-pamukkale.png",
            alt: "Vasques de calcaire blanc de Pamukkale et ruines d'Hiérapolis",
          },
          coordinates: { lat: 37.9203, lng: 29.1206 }, // TODO: verify coords
        },
        {
          title: "Kekova, la cité engloutie",
          description:
            "Un village lycien s'est affaissé sous la mer et l'on devine encore ses escaliers à travers l'eau claire. On y accède en bateau, ce qui rend l'endroit d'autant plus paisible.",
          image: {
            src: "/destination/turquie/map-kekova.png",
            alt: "Ruines lyciennes immergées de Kekova sur la côte turque",
          },
          coordinates: { lat: 36.1833, lng: 29.85 }, // TODO: verify coords
        },
        {
          title: "Bodrum et la presqu'île",
          description:
            "Le château des chevaliers garde l'entrée du port et les ruelles blanches descendent vers l'eau. Au nord de la presqu'île, le maquis mène à des criques que l'on rejoint sans croiser personne.",
          image: {
            src: "/destination/turquie/map-bodrum.png",
            alt: "Château des chevaliers de Saint-Jean au-dessus du port de Bodrum",
          },
          coordinates: { lat: 37.0344, lng: 27.4305 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Les conseils de nos experts pour votre voyage en Turquie",
      description:
        "Quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir une étape ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Istanbul, le bon ordre des journées",
          cardEyebrow: "Ville",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Sultanahmet à l'ouverture, la rive asiatique l'après-midi, et le Bosphore pour relier les deux",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le quartier de Sultanahmet réunit Sainte-Sophie, la mosquée Bleue
                et la citerne basilique dans un même périmètre, et il se remplit
                dès la fin de la matinée. On y va donc à l'ouverture, quand la
                lumière est encore basse. L'après-midi appartient à la rive
                asiatique : le marché de Kadıköy, les rues de Moda et les
                libraires de Bahariye, où l'on croise surtout des habitants.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prévoyons plusieurs nuits à Istanbul, un guide qui ouvre les
                sites avant les groupes, et les traversées en bateau privé plutôt
                qu'en voiture. La ville se découvre par l'eau, c'est là qu'elle
                est la plus belle.
              </p>
            </div>
          ),
        },
        {
          title: "Sainte-Sophie, une mosquée en activité",
          cardEyebrow: "Visites",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le culte y a repris : la visite suit les heures de prière et demande une tenue adaptée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sainte-Sophie n'est plus un musée. Les prières interrompent
                l'accès des visiteurs plusieurs fois par jour, et plus longuement
                le vendredi midi. On se déchausse à l'entrée, les épaules restent
                couvertes et les femmes portent un foulard, comme dans toute
                mosquée en activité.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Prévoyez la visite tôt le matin ou en fin de journée, en évitant
                le vendredi. Emportez un foulard léger et des chaussettes : le
                marbre reste frais même en été.
              </p>
            </div>
          ),
        },
        {
          title: "La montgolfière et le vent de Cappadoce",
          cardEyebrow: "Montgolfière",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les vols ne partent que si le vent le permet : mieux vaut se réserver deux matins",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vols en montgolfière sont annulés dès que le vent se lève, ce
                qui arrive régulièrement en hiver et par épisodes au printemps. Un
                voyageur qui ne se garde qu'un seul matin repart parfois sans
                avoir volé, et c'est le grand regret de la Cappadoce.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous prévoyons plusieurs nuits sur place, avec la nacelle privée
                réservée le premier matin et le suivant gardé en réserve. Le vol
                est repositionné sans frais si le vent en décide autrement.
              </p>
            </div>
          ),
        },
        {
          title: "Éphèse, les maisons en terrasses",
          cardEyebrow: "Site",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le plus beau d'Éphèse s'ouvre sur un billet à part, à l'écart du passage des groupes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les maisons en terrasses d'Hadrien demandent un billet distinct
                de celui du site, et la plupart des groupes passent devant sans y
                entrer. À l'intérieur, sous une toiture de protection, les
                mosaïques et les fresques de demeures patriciennes se lisent
                pièce par pièce, avec les passerelles pour soi.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Entrez par la porte haute en fin d'après-midi : on descend la
                voie de marbre dans le sens de la pente, à contre-courant des cars
                qui repartent.
              </p>
            </div>
          ),
        },
        {
          title: "Le hammam, le déroulé d'une matinée",
          cardEyebrow: "Rituel",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Trois salles, un gant de crin, un thé pour finir. Rien à emporter, rien à savoir d'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le rituel suit toujours le même ordre. La salle tiède prépare la
                peau, puis on s'allonge sur le marbre chaud du göbektaşı, le
                temps que la chaleur fasse son travail. Vient le gommage au gant
                de crin, la mousse de savon versée en nappe, et le repos au thé.
                Les hammams historiques d'Istanbul reçoivent hommes et femmes
                séparément, par horaires ou par ailes distinctes.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous privatisons un hammam ottoman de Tophane pour une matinée
                entière. Personne d'autre sous la coupole, et le thé se prend
                sans regarder l'heure.
              </p>
            </div>
          ),
        },
        {
          title: "La table turque, où l'on mange bien",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les mezzés et le rakı dans une meyhane de quartier, et le petit-déjeuner qui tient la matinée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La bonne table turque n'est presque jamais celle qui a la vue.
                C'est la meyhane de quartier, où l'on choisit ses mezzés sur un
                plateau que l'on vous présente, où le rakı se coupe d'eau glacée
                et où le poisson arrive ensuite, grillé sans façon. Le
                petit-déjeuner turc, avec ses coupelles de fromages, de
                confitures et d'olives, se prolonge volontiers jusqu'au milieu de
                la matinée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les tables qui ne prennent pas de réservation en
                ligne, et organisons un déjeuner chez un producteur d'huile
                d'olive de la presqu'île de Bodrum, sur ses terres.
              </p>
            </div>
          ),
        },
        {
          title: "Le tapis, choisir sans se tromper",
          cardEyebrow: "Achat",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le dos de la pièce en dit plus que le motif, et jamais un atelier où l'on vous dépose",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un tapis se juge par l'envers : plus les nœuds sont serrés et
                réguliers, plus la pièce tiendra dans le temps. La laine filée à
                la main garde un lustre irrégulier que le fil industriel n'a pas,
                et les teintures végétales s'adoucissent en vieillissant. Un
                kilim d'Anatolie et une soie de Hereke n'ont ni la même nature ni
                le même prix.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                N'achetez jamais dans un atelier vers lequel on vous a conduit
                sans l'avoir demandé. Nous accompagnons chez deux marchands du
                Grand Bazar qui travaillent sur pièces anciennes et acceptent
                l'expertise.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer sans y penser",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'avion pour les grandes étapes, la voiture avec chauffeur sur l'Égée, le bateau sur la côte lycienne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vols intérieurs relient Istanbul à la Cappadoce, à Izmir et à
                la côte, ce qui évite les longues routes et laisse les journées
                entières sur place. Sur la mer Égée, la voiture avec chauffeur
                permet d'enchaîner Éphèse, Pergame et Pamukkale au rythme que
                l'on veut. Quant à la côte lycienne, elle se savoure depuis un
                bateau : c'est de l'eau qu'on en voit le meilleur.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous choisissons pour chaque étape entre l'avion, le chauffeur et
                la goélette privée, et nous coordonnons tous les transferts. Vous
                n'avez aucune correspondance à surveiller.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage en Turquie",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "Sainte-Sophie avant tout le monde",
          description:
            "L'entrée anticipée change la visite. En Cappadoce, la montgolfière se privatise pour un seul groupe.",
        },
        {
          title: "Éphèse après la fermeture",
          description:
            "Le site se vide, et l'archéologue qui a fouillé les maisons en terrasses raconte chaque mosaïque. Cela se négocie encore.",
        },
        {
          title: "Une goélette sur la côte lycienne",
          description:
            "Une semaine de navigation avec un équipage qui sait où mouiller le soir. On se baigne au-dessus des ruines avant le petit-déjeuner.",
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
          question: "Quelle est la meilleure période pour partir en Turquie ?",
          answer:
            "Nous privilégions avril, mai et juin, puis septembre et octobre : la lumière est belle, les sites se visitent sans hâte et la mer reste agréable sur l'Égée à l'automne. Juillet et août sont chauds sur la côte, avec des soirées très douces. En Cappadoce, l'hiver peut apporter de la neige, ce qui rend le paysage saisissant.",
        },
        {
          question: "Combien de temps dure le vol Paris-Istanbul ?",
          answer:
            "Comptez environ 3 heures 30 en vol direct, selon les compagnies et les périodes. Pour rejoindre la Cappadoce, Izmir ou la côte lycienne, un vol intérieur au départ d'Istanbul prend le relais.",
        },
        {
          question: "Faut-il un visa pour aller en Turquie ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique de 90 jours maximum sur une période de 180 jours. Les autorités turques demandent en revanche un passeport valable au moins 150 jours après la date d'entrée.",
        },
        {
          question:
            "Combien de jours faut-il pour visiter Istanbul et la Cappadoce ?",
          answer:
            "Une semaine permet de profiter des deux sans se presser : plusieurs jours à Istanbul, puis la Cappadoce, un vol intérieur reliant les deux. Avec une dizaine de jours, on ajoute volontiers Éphèse et la mer Égée, ou quelques nuits de bateau sur la côte lycienne.",
        },
        {
          question: "La Turquie est-elle une destination sûre ?",
          answer:
            "Les régions que nous proposons, Istanbul, la Cappadoce, la mer Égée et la côte lycienne, se parcourent sans difficulté particulière. Les recommandations officielles concernent les zones frontalières du sud-est, que nos itinéraires n'empruntent pas. Nous suivons les avis du ministère de l'Europe et des Affaires étrangères avant chaque départ.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Turquie ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la place que prennent les vols intérieurs ou le bateau privé dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays où l'histoire et la mer se répondent, à composer sur mesure avec votre travel designer.",
      slugs: ["grece", "italie", "emirats-arabes-unis"],
    },
  ],
};
