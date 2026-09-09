import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "italie",
  name: "Italie",
  placeKind: "country",
  country: "Italie",
  genitive: "de l'Italie",
  continentSlug: "europe",
  blurb: "Florence, Venise, la Toscane, les Dolomites",
  keywords: [
    "italie",
    "florence",
    "venise",
    "toscane",
    "dolomites",
    "pompei",
    "piemont",
    "montalcino",
  ],
  metaTitle: "Italie : Voyage sur mesure",
  metaDescription:
    "Voyage en Italie sur mesure : Florence, Venise, la Toscane, les Dolomites et Pompéi. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Italie",
      heading: "L'Italie, de Venise aux vignes de Toscane",
      description:
        "Commencez par Venise, ses palais et ses ateliers de verre. Puis Florence, ses musées et ses ponts sur l'Arno, avant les domaines du Chianti et leurs caves. Plus au nord, les Dolomites apportent la montagne et l'air frais. Et au sud, Pompéi rend le silence aux rues d'une ville que le temps a laissée en place.",
      images: [
        {
          src: "/destination/italie/hero-1.png",
          alt: "Collines de Toscane plantées de cyprès au lever du jour, en Italie",
        },
        {
          src: "/destination/italie/hero-2.png",
          alt: "Palais du Grand Canal et gondole amarrée au petit matin à Venise",
        },
        {
          src: "/destination/italie/hero-3.png",
          alt: "Sommets des Dolomites au-dessus des prés du Trentin en fin de journée",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "J'aime l'Italie pour ses habitants autant que pour ses monuments. Un vigneron qui ouvre une bouteille de votre année de naissance, un conservateur qui vous laisse seuls dans une salle : ce sont eux qui font le voyage. Mon travail consiste à vous asseoir à leur table.",
        role: "Travel Designer · Italie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Ce que l'Italie garde encore pour elle",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Italie commence souvent par Florence, parce que tout y tient dans une marche : la coupole de Brunelleschi, les Offices, l'Arno et ses ponts. Puis la ville se quitte pour la campagne. Les cyprès montent en ligne le long des routes du Chianti, les fermes se transforment en tables, et le paysage finit par ressembler aux tableaux vus le matin.",
        "Plus au nord, Venise se parcourt à pied et en bateau, des palais du Grand Canal aux ateliers de Murano. La Vénétie mène ensuite aux Dolomites, où l'air se rafraîchit et où la montagne se dresse d'un seul coup au-dessus des prés. Au sud, la Campanie ajoute le volcan, la mer et les rues de Pompéi.",
        "« On croit venir pour les musées. On repart en parlant d'un déjeuner sous une treille et d'une salle que l'on a eue pour soi. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/italie/full-image.png",
        alt: "Route bordée de cyprès dans le Val d'Orcia, au cœur de la Toscane, en Italie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "À table",
      heading: "La table italienne change à chaque vallée",
      theme: "light",
      paragraphs: [
        "À Venise, le repas commence par les cicchetti, ces petites bouchées que l'on prend debout au comptoir avec un verre de vin blanc. En Toscane, tout s'organise autour de la bistecca fiorentina, saisie sur les braises et servie épaisse. Dans le Piémont, la pâte fine des tajarin reçoit la truffe blanche dès les premiers jours d'automne.",
        "Ces recettes ne voyagent pas. Elles restent dans leur vallée, transmises dans les familles, et c'est pour cela qu'elles sont si bonnes sur place. Nous réservons les tables de village qui ne prennent pas de réservation en ligne, et nous organisons des déjeuners chez des vignerons du Chianti ou des Langhe, à leur propre table.",
        "Le café se boit debout, et il se boit vite.",
      ],
      images: [
        {
          src: "/destination/italie/split-1.png",
          alt: "Table dressée sous une treille dans un domaine viticole du Chianti",
        },
        {
          src: "/destination/italie/split-2.png",
          alt: "Tajarin à la truffe blanche servis dans une trattoria du Piémont",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/italie/xp-corridor-vasari-1.png",
          alt: "Enfilade du Corridor de Vasari éclairée en fin de journée à Florence",
        },
        right: {
          src: "/destination/italie/xp-corridor-vasari-2.png",
          alt: "Fenêtre du Corridor de Vasari ouverte sur l'Arno et le Ponte Vecchio",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le Corridor de Vasari, traversé seuls",
        columns: [
          "Le Corridor de Vasari relie le palais des Offices au palais Pitti en passant au-dessus des maisons et le long de l'Arno. Il a été construit pour que les Médicis rejoignent leur résidence sans descendre dans la rue. Resté fermé pendant des années, il a rouvert récemment, et il ne se traverse jamais en foule.",
          "Nous le réservons pour vous seuls, en fin de journée. Un historien de l'art vous accompagne, ouvre les fenêtres qui donnent sur le Ponte Vecchio et raconte la famille qui passait là. La marche dure environ une heure, et elle se termine dans les jardins de Boboli, de l'autre côté du fleuve.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Italie",
      heading: "Quatre moments qui n'appartiennent qu'à vous",
      description:
        "Une ville antique que l'on parcourt après la fermeture. Le four d'un verrier de Murano. Un chien qui cherche la truffe blanche dans les bois du Piémont. Un pont suspendu au-dessus des Dolomites.",
      slugs: [
        "pompei-hors-heures",
        "murano-maitre-verrier",
        "truffe-blanche-alba",
        "via-ferrata-ivano-dibona",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Italie",
      heading: "Où séjourner",
      description:
        "Un palais sur le Grand Canal, un hameau de villas au milieu d'un domaine toscan, et une maison de bois face au massif du Brenta.",
      slugs: [
        "aman-venice",
        "rosewood-castiglion-del-bosco",
        "lefay-dolomiti",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage en Italie",
      description:
        "Vol, décalage, monnaie, formalités et saison : l'essentiel avant de partir.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ deux heures depuis Paris pour Rome, Venise ou Florence, en vol direct. Naples et Turin se rejoignent aussi sans escale.", // TODO: verify
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun. L'Italie vit à la même heure que la France, toute l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro, aucune conversion à prévoir. Les cartes passent partout, y compris dans les villages.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Espace Schengen : une carte nationale d'identité ou un passeport en cours de validité suffit.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire, aucune précaution sanitaire particulière.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De la fin avril à juin, puis de septembre à la fin octobre. Le printemps donne les collines vertes, l'automne les vendanges et la truffe blanche du Piémont.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'italien, avec de vrais dialectes d'une région à l'autre. L'anglais se parle dans les hôtels et les musées, moins dans les campagnes.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Doux et sec en Toscane, humide à Venise en hiver, chaud dans le Sud en été. Les Dolomites restent fraîches, même au mois d'août.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Un voyage en Italie se prépare dans le détail : une salle ouverte avant l'arrivée du public, une table de village obtenue par téléphone, un chauffeur qui connaît les routes de Toscane. Une seule personne coordonne l'ensemble, et elle reste la vôtre jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/italie/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure en Italie",
            "Ruelle de Florence aux volets clos en début de matinée",
            "Terrasse d'une villa toscane ouverte sur les collines",
            "Concierge organisant un transfert privé en Italie",
            "Déjeuner dressé dans un vignoble du Chianti",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir en Italie",
      heading: "Six lieux qui font le voyage",
      description:
        "Florence, Venise, le Val d'Orcia, les Dolomites, Pompéi, les Langhe. Nos itinéraires s'écrivent presque toujours autour de ces six-là.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Florence, d'une rive à l'autre",
          description:
            "Les ateliers de l'Oltrarno ouvrent sur la rue dès le matin, et les grandes places se traversent en quelques minutes. En fin de journée, on monte à San Miniato al Monte pour voir les toits passer au rose.",
          image: {
            src: "/destination/italie/map-florence.png",
            alt: "Toits de Florence et clochers vus depuis San Miniato al Monte",
          },
          coordinates: { lat: 43.7696, lng: 11.2558 }, // TODO: verify coords
        },
        {
          title: "Venise et la lagune",
          description:
            "Derrière les quais, les ruelles débouchent sur de petites places où il n'y a personne. Murano et Burano se rejoignent en bateau privé, et la ville redevient calme dès que les excursions repartent.",
          image: {
            src: "/destination/italie/map-venise.png",
            alt: "Grand Canal de Venise et ses palais vus depuis l'eau",
          },
          coordinates: { lat: 45.4408, lng: 12.3155 }, // TODO: verify coords
        },
        {
          title: "Le Val d'Orcia et Montalcino",
          description:
            "Les collines s'enchaînent en courbes régulières, coupées de routes blanches bordées de cyprès. Montalcino domine le domaine du Brunello, et les villages voisins se visitent en fin de journée, quand la lumière descend.",
          image: {
            src: "/destination/italie/map-val-orcia.png",
            alt: "Collines du Val d'Orcia et village de Montalcino en Toscane",
          },
          coordinates: { lat: 43.0464, lng: 11.4899 }, // TODO: verify coords
        },
        {
          title: "Les Dolomites, autour de Cortina",
          description:
            "La montagne se dresse d'un seul mouvement au-dessus des prés, en parois claires qui rosissent le soir. Les sentiers partent des villages, et les refuges servent à déjeuner en pleine altitude.",
          image: {
            src: "/destination/italie/map-dolomites.png",
            alt: "Parois des Dolomites au-dessus de la vallée de Cortina d'Ampezzo",
          },
          coordinates: { lat: 46.5405, lng: 12.1357 }, // TODO: verify coords
        },
        {
          title: "Pompéi et le Vésuve",
          description:
            "Les rues pavées, les maisons et les fresques sont restées en place, sous le regard du volcan qui les a couvertes. Le site est immense, et il se vide complètement en fin d'après-midi.",
          image: {
            src: "/destination/italie/map-pompei.png",
            alt: "Rue pavée de Pompéi avec le Vésuve à l'arrière-plan",
          },
          coordinates: { lat: 40.7497, lng: 14.4869 }, // TODO: verify coords
        },
        {
          title: "Les Langhe et Alba",
          description:
            "Le Piémont aligne ses coteaux en pentes douces, ceux du Barolo et du Barbaresco. Alba s'anime à l'automne, et le village se remplit dès que la saison commence.",
          image: {
            src: "/destination/italie/map-langhe.png",
            alt: "Vignobles en collines des Langhe autour d'Alba dans le Piémont",
          },
          coordinates: { lat: 44.7009, lng: 8.0357 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Ce que l'on aimerait vous dire avant le départ",
      description:
        "Des observations de terrain, glanées à force d'y retourner. De quoi comprendre pourquoi nous plaçons telle étape à telle heure.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le train d'une ville à l'autre",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Rome, Florence et Venise se relient en train, de centre-ville à centre-ville",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grandes lignes italiennes relient les centres historiques
                entre eux, sans passer par les aéroports. On monte à Florence
                après le déjeuner et on dîne à Venise le même soir. La voiture
                ne devient utile qu'à partir du moment où l'on gagne la
                campagne.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons les trajets en train entre les villes, et la
                voiture avec chauffeur pour la Toscane, le Piémont et les
                Dolomites. Un chauffeur vous attend à chaque gare, avec les
                bagages déjà partis vers l'hôtel suivant.
              </p>
            </div>
          ),
        },
        {
          title: "Les musées, et l'heure à laquelle on entre",
          cardEyebrow: "Timing",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Aux Offices comme à l'Accademia, tout se joue avant dix heures ou après la fermeture",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grands musées italiens se remplissent en milieu de matinée
                et ne se vident plus avant le soir. Devant le David comme dans
                les salles des Offices, la même œuvre ne se regarde pas de la
                même façon selon l'heure.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous obtenons les ouvertures avant le public et les visites
                après la fermeture, avec un historien de l'art qui reste avec
                vous. La Galerie Borghèse et le Corridor de Vasari se prennent
                de cette façon.
              </p>
            </div>
          ),
        },
        {
          title: "Le déjeuner, une affaire d'horaires",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les cuisines ferment tôt, et rouvrent seulement pour le soir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Dans les villages, on déjeune entre midi et demi et deux heures.
                Après, la cuisine s'arrête vraiment, même dans les bonnes
                maisons. Le soir, le service commence plus tard qu'en France, et
                l'apéritif tient une vraie place avant de passer à table.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Prévoir le déjeuner comme un moment du programme, pas comme une
                pause improvisée. Les meilleures tables de campagne se
                réservent la veille, par téléphone, et souvent en italien.
              </p>
            </div>
          ),
        },
        {
          title: "La truffe blanche et sa saison",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "D'octobre à la fin décembre dans le Piémont, et nulle part ailleurs à cette qualité",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La truffe blanche ne se cultive pas. Elle se cherche avec un
                chien, dans les bois des Langhe, et sa saison commence à
                l'automne. Le reste de l'année, ce que l'on sert sous ce nom
                vient d'ailleurs ou d'une autre variété.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une sortie avant le jour avec un trifolao et son chien, puis le
                déjeuner chez lui, la récolte du matin râpée sur des tajarin.
                Nous ajoutons une dégustation de Barolo chez un vigneron voisin.
              </p>
            </div>
          ),
        },
        {
          title: "Venise selon les heures",
          cardEyebrow: "Timing",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La ville appartient à ceux qui y dorment, tôt le matin et après dix-huit heures",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les visiteurs à la journée arrivent en milieu de matinée et
                repartent en fin d'après-midi. Entre les deux, San Marco est
                dense. Avant et après, les mêmes ruelles sont calmes, et l'on
                entend l'eau contre les marches.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous programmons les visites tôt et gardons les fins de journée
                pour la lagune, en bateau privé. Un atelier de Murano nous
                ouvre son four en dehors des heures de groupe.
              </p>
            </div>
          ),
        },
        {
          title: "Les Dolomites en été",
          cardEyebrow: "Montagne",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Une montagne qui se marche du matin au déjeuner, et des refuges où l'on mange bien",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les orages arrivent souvent en début d'après-midi, alors on part
                tôt et on redescend pour le déjeuner. Les refuges servent une
                vraie cuisine, entre plats tyroliens et pâtes italiennes. Les
                via ferrata suivent les chemins de la Grande Guerre, et
                demandent un guide.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Un guide de montagne pour la journée, le matériel fourni, et une
                table réservée au refuge à l'arrivée. La via ferrata Ivano
                Dibona et son pont suspendu se font en une matinée.
              </p>
            </div>
          ),
        },
        {
          title: "Conduire en Toscane",
          cardEyebrow: "Route",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Des routes de terre superbes, et des centres-villes interdits à la voiture",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les strade bianche, ces routes blanches sans goudron, mènent aux
                plus beaux domaines et se conduisent lentement. Dans les villes,
                les centres historiques sont fermés à la circulation, et les
                caméras verbalisent sans avertissement.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Une voiture avec chauffeur pour les journées de campagne, et
                l'hôtel qui déclare la plaque quand l'accès au centre est
                nécessaire. Le reste se fait à pied.
              </p>
            </div>
          ),
        },
        {
          title: "Dans la valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "De bonnes semelles pour les pavés, les épaules couvertes pour les églises",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les pavés de Florence et de Rome fatiguent plus que les
                sentiers. Les églises demandent les épaules et les genoux
                couverts, y compris en plein été. Et il fait frais le soir dans
                les Dolomites, même quand la Toscane est encore chaude.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Des chaussures plates que l'on peut porter toute la journée, un
                foulard léger dans le sac, et une tenue habillée pour les
                dîners. À l'Aman Venice comme dans les grandes tables, on met
                une veste.
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
            "Nous avons traversé le Corridor de Vasari tous les deux, avec un historien, à l'heure où Florence commençait à s'éclairer. Nos petits-enfants ont eu droit au récit complet au retour. Ils réclament l'Italie pour l'an prochain.",
          image: {
            src: "/destination/italie/hero-1.png",
            alt: "Portrait de Bernard", // TODO: verify
          },
          name: "Bernard", // TODO: verify
          role: "Voyage en couple, mai 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois enfants, trois régions, et pas une journée de trop. Le four du verrier à Murano les a occupés une matinée entière, ce que je n'aurais jamais obtenu dans un musée.",
          image: {
            src: "/destination/italie/hero-2.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, avril 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Pompéi après la fermeture, avec l'archéologue qui fouille sur place. Nous étions six dans les rues, et personne d'autre. C'est exactement ce que je ne savais pas comment organiser moi-même.",
          image: {
            src: "/destination/italie/hero-3.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Voyage anniversaire, octobre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir en Italie ?",
          answer:
            "De la fin avril à juin, puis de septembre à la fin octobre : la lumière est belle, les villes restent respirables et les tables de campagne sont ouvertes. Le printemps donne les collines vertes, l'automne les vendanges et la truffe blanche du Piémont. Juillet et août sont chauds dans le Sud, mais c'est la bonne saison pour les Dolomites.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Environ deux heures en vol direct depuis Paris pour Rome, Venise ou Florence. Naples, Turin et Milan se rejoignent également sans escale.",
        },
        {
          question: "Faut-il un visa pour aller en Italie ?",
          answer:
            "Non. L'Italie fait partie de l'Union européenne et de l'espace Schengen. Une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français et européens.",
        },
        {
          question: "Que faire en Italie en dix jours ?",
          answer:
            "Trois nuits à Florence pour la ville et les musées, trois nuits en Toscane pour les domaines et les tables de campagne, puis trois nuits à Venise et dans la lagune. Ceux qui préfèrent la montagne remplacent Venise par les Dolomites, et ceux qui veulent l'Antiquité descendent vers Naples et Pompéi.",
        },
        {
          question: "Peut-on visiter le Corridor de Vasari à Florence ?",
          answer:
            "Oui. Le passage qui relie les Offices au palais Pitti a rouvert récemment, et il se visite en très petits groupes. Nous le réservons en privé, en fin de journée, avec un historien de l'art qui vous accompagne d'un palais à l'autre.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Italie ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part de voiture avec chauffeur dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays où l'on voyage pour les tables, les paysages et ce qui se visite en dehors des heures.",
      slugs: ["france", "grece", "madere"],
    },
  ],
};
