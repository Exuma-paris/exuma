import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "antigua",
  name: "Antigua",
  placeKind: "country",
  country: "Antigua-et-Barbuda",
  genitive: "d'Antigua",
  continentSlug: "ameriques",
  blurb: "English Harbour, Barbuda, villas privées",
  keywords: [
    "antigua",
    "barbuda",
    "english harbour",
    "nelsons dockyard",
    "shirley heights",
    "cades reef",
    "voile",
    "antigua sailing week",
  ],
  metaTitle: "Antigua : Voyage sur mesure",
  metaDescription:
    "Voyage à Antigua sur mesure : English Harbour, plages de Barbuda, villas privées entre Jumby Bay et Hermitage Bay. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Antigua",
      heading: "Trois cent soixante-cinq plages, une par jour, jamais la même",
      description:
        "L'île compte deux cent quatre-vingts kilomètres carrés et une plage pour chaque jour de l'année, un chiffre que les habitants citent avant même le nom d'English Harbour. Au large, Barbuda garde ses dix-sept kilomètres de sable rose pour trois fois moins de monde qu'Antigua. Entre les deux, une heure de bateau et un changement de rythme complet.",
      images: [
        {
          src: "/destination/antigua/hero-1.png",
          alt: "Plage de sable blanc et eaux turquoise lors d'un voyage à Antigua",
        },
        {
          src: "/destination/antigua/hero-2.png",
          alt: "Voiliers mouillés dans la baie d'English Harbour à Antigua",
        },
        {
          src: "/destination/antigua/hero-3.png",
          alt: "Sable rose et frégates au-dessus de la lagune de Barbuda",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Antigua ?",
      heading: "Carole, spécialiste d'Antigua, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Antigua se prête à un jeu simple : on choisit une baie et on ne la quitte plus, ou on prend le bateau pour Barbuda et on change complètement de décor. Je construis toujours les deux temps dans le même voyage, parce qu'ils ne racontent pas la même île. Et je réserve la traversée avant l'hôtel, jamais l'inverse.",
        role: "Travel Designer · Antigua",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte d'Antigua",
      heading: "Une île à contours, pas une plage à liste",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage à Antigua se lit à la carte marine autant qu'à la carte routière. L'île mesure vingt-deux kilomètres sur seize, ce qui permet de dormir dans une seule baie et de rayonner en une heure de voiture vers n'importe quel point de la côte, de Jolly Harbour à Half Moon Bay.",
        "English Harbour et Nelson's Dockyard occupent le sud-est depuis 1725. Le chantier naval, classé à l'UNESCO en 2016, garde ses ateliers de pierre et de bois, et sert toujours de mouillage aux voiliers de compétition pendant l'Antigua Sailing Week, fin avril.",
        "Barbuda relève d'un autre ordre. Moins de deux mille habitants, aucune route vers Antigua, une réserve de frégates qui abrite la plus grande colonie de l'hémisphère occidental. On y va pour une journée, on en revient en ayant vu une île différente de celle qu'on a quittée.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/antigua/full-image.png",
        alt: "Baie d'English Harbour vue du fort Shirley Heights lors d'un voyage à Antigua",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Antigua, hors des mouillages de croisière",
      heading: "Une baie pour soi, à une heure de la marina la plus animée",
      theme: "light",
      paragraphs: [
        "Les paquebots s'arrêtent à St. John's, déposent leurs passagers pour la journée et repartent au coucher du soleil. Le reste de l'île continue son rythme sans eux : une villa sur Galley Bay, une crique sans nom sur la côte nord, un ponton privé sur Nonsuch Bay où le bateau attend, moteur coupé.",
        "Jumby Bay occupe sa propre île, à cinq minutes de navette du continent et sans une seule voiture. Hermitage Bay, sur la côte ouest, s'étend sur des cottages disséminés dans la colline, sans réception visible depuis la plage. Ce n'est pas un supplément d'options. C'est une autre manière d'occuper l'espace.",
      ],
      images: [
        {
          src: "/destination/antigua/split-1.png",
          alt: "Cottage privé sur une colline dominant une plage d'Antigua",
        },
        {
          src: "/destination/antigua/split-2.png",
          alt: "Ponton en bois sur une crique isolée de la côte nord d'Antigua",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/antigua/xp-barbuda-1.png",
          alt: "Plage de sable rose déserte sur l'île de Barbuda",
        },
        right: {
          src: "/destination/antigua/xp-barbuda-2.png",
          alt: "Colonie de frégates dans la réserve ornithologique de Barbuda",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le jour où l'on change d'île sans changer de pays",
        columns: [
          "Le bateau rapide quitte Antigua tôt et met un peu moins d'une heure trente pour rejoindre Barbuda, selon la mer. Codrington Lagoon s'ouvre alors sur dix-sept kilomètres de sable qui vire du blanc au rose selon l'heure, une teinte due aux fragments de corail broyés par la houle. On y marche parfois seul sur plusieurs centaines de mètres.",
          "À l'autre bout du lagon, la réserve de frégates abrite près de cinq mille couples, la plus grande colonie de l'hémisphère occidental. Un petit bateau à fond plat s'approche des mangroves sans les déranger : les mâles gonflent leur poche rouge à quelques mètres, sans un regard pour l'embarcation. Le retour se fait au moment où la lumière rase la lagune.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Antigua",
      heading: "Cades Reef, un cheval sur la plage, un chantier naval du XVIIIe",
      description:
        "Un catamaran privé jusqu'à la barrière de corail de Cades Reef, une sortie à cheval au lever du jour, une visite de Nelson's Dockyard avant l'arrivée des groupes. Trois façons d'entrer dans l'île, que nous réservons avant votre arrivée.",
      slugs: [
        "catamaran-prive-cades-reef",
        "randonnee-equestre-plage",
        "visite-nelsons-dockyard",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner à Antigua",
      description:
        "Une île privée sans voiture, des cottages disséminés sur une colline sans réception visible, un arc de suites sur une plage de sable noir. Trois échelles, trois façons de disparaître.",
      slugs: ["jumby-bay-island", "hermitage-bay", "carlisle-bay"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Antigua",
      description:
        "Vol, décalage, formalités et saisons : de quoi caler les dates d'un voyage à Antigua en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez généralement 10 à 13 heures de voyage depuis Paris avec une correspondance, notamment via Londres, selon l'itinéraire et la compagnie choisis.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "5 heures de moins qu'en France en hiver et 6 heures en été. Antigua-et-Barbuda reste à l'heure standard de l'Atlantique (UTC−4) toute l'année, sans changement d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar des Caraïbes orientales (XCD) est la monnaie officielle, à parité fixe avec le dollar américain. Le dollar américain est également accepté dans la plupart des établissements.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa n'est requis pour les ressortissants français pour un séjour de moins de six mois. Le passeport doit être valable au moins six mois à compter de la date d'entrée et un billet retour est demandé.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est exigé pour les voyageurs arrivant de France. Il est néanmoins recommandé d'être à jour des vaccinations habituelles.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à avril, la période est généralement la plus agréable, avec un temps plus sec et ensoleillé. Nous privilégions particulièrement janvier à avril, plus secs, tout en gardant à l'esprit que la saison cyclonique s'étend officiellement de juin à novembre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle et celle que vous entendrez partout sur l'île. Un créole antiguais est également parlé localement.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et chaud toute l'année, avec des températures généralement comprises entre 24 et 30 °C. La saison humide s'étend principalement de l'été à la fin de l'automne, tandis que la période la plus sèche se situe de janvier à avril. La saison cyclonique s'étend de juin à novembre, avec une activité généralement plus marquée à la fin de l'été et au début de l'automne.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Antigua. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/antigua/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à Antigua entre English Harbour et Barbuda",
            "Adresses confidentielles à Antigua : criques et pontons privés",
            "Hébergements à Antigua : Jumby Bay Island et Hermitage Bay",
            "Conciergerie privée 24/7 pour un voyage à Antigua",
            "Expériences immersives à Antigua : Cades Reef et Barbuda",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Antigua",
      heading: "Six étapes que l'on relie par la route et par le bateau",
      description:
        "De St. John's à Barbuda, six repères que la voiture et le bateau rapide enchaînent dans l'ordre qui vous convient.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 10,
      places: [
        {
          title: "St. John's et Redcliffe Quay",
          description:
            "La capitale garde ses entrepôts de brique convertis en boutiques et son marché du samedi matin. On y passe la matinée d'arrivée avant de rejoindre la côte sud.",
          image: {
            src: "/destination/antigua/map-st-johns.png",
            alt: "Entrepôts de brique de Redcliffe Quay à St. John's, Antigua",
          },
          // TODO: verify coords
          coordinates: { lat: 17.1274, lng: -61.8468 },
        },
        {
          title: "English Harbour et Nelson's Dockyard",
          description:
            "Le seul chantier naval georgien encore en activité au monde, classé à l'UNESCO en 2016. Les voiliers de compétition y mouillent toujours pendant l'Antigua Sailing Week.",
          image: {
            src: "/destination/antigua/map-english-harbour.png",
            alt: "Voiliers amarrés à Nelson's Dockyard dans English Harbour, Antigua",
          },
          // TODO: verify coords
          coordinates: { lat: 17.0, lng: -61.7667 },
        },
        {
          title: "Shirley Heights",
          description:
            "Un fort du XVIIIe siècle perché au-dessus d'English Harbour, avec la meilleure vue de l'île sur le coucher de soleil. Un groupe de steel drum y joue le dimanche.",
          image: {
            src: "/destination/antigua/map-shirley-heights.png",
            alt: "Vue depuis le fort de Shirley Heights sur English Harbour, Antigua",
          },
          // TODO: verify coords
          coordinates: { lat: 17.0022, lng: -61.7508 },
        },
        {
          title: "Barbuda et la réserve de frégates",
          description:
            "Dix-sept kilomètres de sable rose et une lagune qui abrite près de cinq mille couples de frégates, la plus grande colonie de l'hémisphère occidental.",
          image: {
            src: "/destination/antigua/map-barbuda.png",
            alt: "Lagune de Codrington et réserve de frégates à Barbuda",
          },
          // TODO: verify coords
          coordinates: { lat: 17.6167, lng: -61.8167 },
        },
        {
          title: "Devil's Bridge et Half Moon Bay",
          description:
            "Une arche de calcaire sculptée par l'Atlantique sur la côte est, et une baie en croissant qu'aucune route directe ne dessert vraiment facilement.",
          image: {
            src: "/destination/antigua/map-devils-bridge.png",
            alt: "Arche naturelle de Devil's Bridge sur la côte est d'Antigua",
          },
          // TODO: verify coords
          coordinates: { lat: 17.0864, lng: -61.6772 },
        },
        {
          title: "Betty's Hope et Fig Tree Drive",
          description:
            "Les vestiges d'une plantation de canne à sucre du XVIIe siècle d'un côté, la route forestière la plus verte de l'île de l'autre.",
          image: {
            src: "/destination/antigua/map-bettys-hope.png",
            alt: "Moulins à vent de la plantation historique de Betty's Hope, Antigua",
          },
          // TODO: verify coords
          coordinates: { lat: 17.0817, lng: -61.7394 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Antigua",
      description:
        "Huit observations de terrain qui ne figurent pas dans un guide : la bonne saison, la façon de rejoindre Barbuda, et ce qui se règle avant de partir.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "La saison où Antigua se dévoile le mieux",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De décembre à avril, le climat est plus sec et ensoleillé, idéal pour profiter pleinement de l'île",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche court de décembre à avril, avec un pic
                de fréquentation fin avril pour l&apos;Antigua Sailing Week.
                Mai et juin restent agréables et plus calmes, avant l&apos;arrivée
                de la saison humide.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La saison des ouragans va de juin à novembre, avec un pic en
                septembre. Nous ne construisons pas d&apos;excursion vers
                Barbuda sur cette période sans solution de repli, et nous
                privilégions une assurance annulation adaptée.
              </p>
            </div>
          ),
        },
        {
          title: "Rejoindre Barbuda",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucune route ne relie les deux îles : tout se joue en bateau ou en petit avion",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Barbuda se rejoint en bateau rapide depuis St. John's, en un
                peu moins d&apos;une heure et demie selon la mer, ou en petit
                avion depuis l&apos;aéroport d&apos;Antigua en une quinzaine de
                minutes.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous réservons toujours la traversée avant l&apos;hôtel : la
                mer peut se montrer formée certains jours, et l&apos;avion
                privé garde alors l&apos;option la plus confortable pour une
                excursion à la journée.
              </p>
            </div>
          ),
        },
        {
          title: "Une nuit à St. John's ne s'impose pas",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription: "La capitale se visite en une matinée, pas en séjour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                St. John's concentre le port de croisière, le marché du
                samedi et les entrepôts de Redcliffe Quay. La ville se visite
                bien en une matinée, avant de rejoindre la côte sud ou ouest.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous plaçons cette visite tôt, avant l&apos;arrivée des
                paquebots en milieu de matinée, et gardons le reste du séjour
                sur une baie plus tranquille.
              </p>
            </div>
          ),
        },
        {
          title: "Le fungee, et comment il se mange",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription: "Le plat national se sert avec le poisson ou le pepperpot",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le fungee, une polenta de farine de maïs, accompagne
                traditionnellement le pepperpot, un ragoût de légumes locaux
                et de viande mijoté longuement. On le trouve dans les
                cabanes de plage autant que dans les tables plus soignées.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous réservons systématiquement un déjeuner de poisson grillé
                sur une plage sans nom de la côte ouest, préparé le matin même
                par un pêcheur local.
              </p>
            </div>
          ),
        },
        {
          title: "La mer se lit à la couleur",
          cardEyebrow: "Nature",
          modalEyebrow: "Guide pratique",
          shortDescription: "Cades Reef protège l'essentiel du récif côté ouest",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Cades Reef s'étend sur plus de deux kilomètres au large de la
                côte sud-ouest et constitue le parc marin le plus protégé de
                l'île. L'eau y reste calme presque toute l'année, contrairement
                à la côte est, exposée à l'Atlantique.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous plaçons les sorties snorkeling le matin, avant que le
                vent ne se lève, et demandons toujours une crème solaire
                minérale sans oxybenzone pour préserver le corail.
              </p>
            </div>
          ),
        },
        {
          title: "L'argent, les taxes et les pourboires",
          cardEyebrow: "Argent",
          modalEyebrow: "Guide pratique",
          shortDescription: "Le dollar américain passe partout, les espèces restent utiles",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le dollar des Caraïbes orientales vaut environ 2,70 pour un
                dollar américain, et les deux circulent dans la même poche.
                Les cartes passent dans les hôtels et la plupart des
                restaurants ; sur les plages et les petits marchés, les
                espèces restent utiles.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Vérifiez la ligne « service » avant d&apos;ajouter un
                pourboire, le service étant souvent déjà inclus. Nous
                prévoyons toujours des petites coupures pour les équipages et
                les guides.
              </p>
            </div>
          ),
        },
        {
          title: "Antigua Sailing Week, et quand elle a lieu",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription: "Une semaine de régates fin avril qui remplit English Harbour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La régate rassemble chaque année des voiliers de course venus
                de toute la Caraïbe et d'Europe, avec English Harbour et
                Falmouth Harbour comme quartiers généraux. L'ambiance change
                complètement de registre pendant cette semaine.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les hébergements autour d'English Harbour se réservent
                plusieurs mois à l'avance pour cette période. Nous conseillons
                soit de s'y intégrer pleinement, soit de choisir une autre
                fenêtre plus calme.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription: "Léger, une tenue pour le dîner, une crème reef-safe",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La tenue reste simple le jour, avec chapeau et lunettes de
                soleil indispensables. Quelques adresses d'English Harbour et
                de Jumby Bay demandent une tenue un peu plus habillée au
                dîner.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une crème solaire minérale sans oxybenzone pour Cades Reef,
                des chaussures d'eau pour les plages de galets de la côte est,
                et un coupe-vent léger pour les sorties en bateau. Les prises
                électriques sont au standard américain, en 230 volts.
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
          // TODO: replace with real testimonial
          quote:
            "Nous sommes partis un matin pour Barbuda et nous avons eu la plage rose quasiment pour nous. Le bateau nous attendait pour le retour au moment exact où la lumière a changé.",
          image: {
            src: "/destination/antigua/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Une île entière pour nous six, sans une voiture, avec une navette qui passait toutes les vingt minutes. Les enfants ont fini par reconnaître chaque plage. Le dîner sous les étoiles restera le souvenir de ce voyage.",
          image: {
            src: "/destination/antigua/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "", // TODO: replace with real testimonial
          role: "Antigua en famille, Jumby Bay, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois jours à Hermitage Bay sans croiser plus de dix personnes en dehors du personnel. La visite de Nelson's Dockyard tôt le matin, avant les groupes de croisiéristes, a changé notre regard sur l'île entière.",
          image: {
            src: "/destination/antigua/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "", // TODO: replace with real testimonial
          role: "Antigua, English Harbour, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à Antigua ?",
          answer:
            "La saison sèche court de décembre à avril, avec une eau plus calme et un ensoleillement quasi constant. Fin avril attire les passionnés de voile pour l'Antigua Sailing Week, mais les hébergements se réservent alors très en avance. La saison des ouragans va de juin à novembre, avec un pic en septembre : nous évitons cette fenêtre pour les excursions vers Barbuda.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris. On rejoint généralement Antigua via Londres, pour un trajet total qui va de 10 à 13 heures selon la correspondance. Nous plaçons toujours une nuit de récupération à l'arrivée plutôt que d'enchaîner directement sur une excursion.",
        },
        {
          question: "Faut-il un visa pour aller à Antigua ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de six mois. Le passeport doit rester valable durant tout le séjour, et un billet de retour ou de continuation est généralement demandé à l'entrée. Nous vérifions les formalités à jour avec vous avant le départ.",
        },
        {
          question: "Comment se rendre à Barbuda depuis Antigua ?",
          answer:
            "Deux options : le bateau rapide depuis St. John's, en un peu moins d'une heure et demie selon la mer, ou le petit avion depuis l'aéroport d'Antigua, en une quinzaine de minutes. Nous réservons la traversée en priorité, la mer pouvant se montrer formée certains jours.",
        },
        {
          question: "Antigua est-elle adaptée aux familles avec enfants ?",
          answer:
            "Oui. L'anglais est la langue officielle, les distances restent courtes et plusieurs propriétés, dont Jumby Bay et Carlisle Bay, proposent un vrai programme enfants sans tomber dans le club standardisé. Une île privée ou une villa avec équipage simplifie encore la logistique quotidienne.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Antigua ?",
          answer:
            "Le budget se joue sur trois postes : l'acheminement international, souvent avec une correspondance à Londres, les quelques propriétés de l'île qui tiennent un vrai niveau de service, et la privatisation des bateaux pour Barbuda ou Cades Reef. Nous construisons chaque voyage sur mesure et présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres eaux des Caraïbes et des Amériques, à composer sur mesure avec votre travel designer.",
      slugs: ["bahamas", "republique-dominicaine", "los-cabos"],
    },
  ],
};
