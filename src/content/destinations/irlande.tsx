import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "irlande",
  name: "Irlande",
  placeKind: "country",
  country: "Irlande",
  genitive: "de l'Irlande",
  continentSlug: "europe",
  blurb: "Dublin, le Connemara, le Kerry, la côte du Cork",
  keywords: [
    "irlande",
    "dublin",
    "connemara",
    "moher",
    "kerry",
    "dingle",
    "kinsale",
    "whiskey",
  ],
  metaTitle: "Irlande : Voyage sur mesure",
  metaDescription:
    "Voyage en Irlande sur mesure : Dublin, le Connemara, le Kerry et la côte du Cork. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Irlande",
      heading: "La lumière arrive de l'océan et tout s'éclaire",
      description:
        "En Irlande, le vert n'a pas la même couleur qu'ailleurs : la lande, les prés, la mousse sur les murets de pierre. On marche dans les bois d'un château posé au bord d'un lac. Le soir, à Dingle, trois musiciens s'installent au fond du pub et jouent pour la salle.",
      images: [
        {
          src: "/destination/irlande/hero-1.png",
          alt: "Falaises de Moher battues par l'Atlantique au petit matin, voyage en Irlande",
        },
        {
          src: "/destination/irlande/hero-2.png",
          alt: "Tours d'Ashford Castle au bord du Lough Corrib, comté de Mayo",
        },
        {
          src: "/destination/irlande/hero-3.png",
          alt: "Murets de pierre sèche et tourbières du Connemara sous un ciel changeant",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Irlande ?",
      heading: "Stéphane, spécialiste de l'Irlande, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "L'Irlande est le pays qui me surprend encore. On croit y aller pour les paysages, et ce sont les gens dont on parle en rentrant : on entre dans un pub pour un verre, quelqu'un se met à raconter, et la soirée est faite. Ma région préférée reste l'ouest, entre le Connemara et le Kerry, là où la pierre, l'eau et l'herbe se partagent tout. Et j'aime que le pays ne cherche jamais à impressionner : les plus belles maisons y sont des maisons de famille, et l'on y dîne comme chez des amis qui auraient un lac au fond du jardin.",
        role: "Travel Designer · Irlande",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Irlande",
      heading: "Dublin, l'ouest sauvage, puis le sud plus doux",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Irlande commence par Dublin. La ville est petite et se parcourt à pied. On va voir le Book of Kells, un manuscrit peint par des moines il y a douze siècles, conservé dans la bibliothèque de Trinity College. Le reste de la journée se passe dans les rues géorgiennes, devant les portes peintes de couleurs vives. Le soir, la ville dîne tard et bien.",
        "L'ouest est tout autre chose. La route y traverse des landes, des tourbières et des lacs, et le paysage reste vide d'un bout à l'autre. C'est là, au bord d'un grand lac aux portes du Connemara, que se trouve Ashford Castle. Le matin, on part en forêt avec un fauconnier : l'oiseau vole d'arbre en arbre au-dessus de la marche, puis revient se poser sur le gant.",
        "Le sud est plus doux. Les collines sont vertes, les villages fleuris, et l'on roule longtemps sans croiser personne. Adare Manor, un manoir au bord d'une rivière, sert de base pour la région. Puis on descend vers la côte. À Ardmore, l'hôtel est accroché dans la falaise et toutes les chambres regardent la mer. Midleton, où se distille le whiskey, est juste à côté.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/irlande/full-image.png",
        alt: "Route côtière du Wild Atlantic Way au-dessus de l'océan, voyage en Irlande",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Irlande : la côte et la table",
      heading: "Ce que l'Atlantique dépose sur la table",
      theme: "light",
      paragraphs: [
        "Dans la baie de Galway, les huîtres plates poussent encore dans des bancs sauvages : c'est la seule baie d'Irlande où on les ramasse ainsi. Le producteur ouvre la première sur place et la tend, sans citron. Elle a le goût de l'eau froide. La saison va de septembre à avril. Un peu plus au sud, les fermes font des fromages qu'elles affinent elles-mêmes, et le saumon se fume au bois de chêne.",
        "Le whiskey, lui, se boit là où il se fait. À Midleton, la plus grande maison du pays, le maître-distillateur ouvre un chai que les visiteurs ne voient jamais. Il prélève dans un fût, sert, et raconte ce que le bois a fait au whiskey pendant vingt ans. On repart avec une bouteille tirée devant soi.",
      ],
      images: [
        {
          src: "/destination/irlande/split-1.png",
          alt: "Ostréiculteur ouvrant une huître à la fourche dans la baie de Galway",
        },
        {
          src: "/destination/irlande/split-2.png",
          alt: "Fûts alignés dans un chai fermé au public de la distillerie de Midleton",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/irlande/xp-helicoptere-1.png",
          alt: "Hélicoptère longeant les falaises de Moher au-dessus de l'Atlantique",
        },
        right: {
          src: "/destination/irlande/xp-helicoptere-2.png",
          alt: "Hélicoptère posé sur une plage déserte du Connemara à marée basse",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une heure de vol, mille ans de pierre",
        columns: [
          "Le décollage se fait de Shannon en fin de matinée. Très vite, les falaises de Moher défilent par la gauche, plus de deux cents mètres de schiste à la verticale vus depuis la mer, à hauteur des oiseaux. C'est un angle que personne ne voit depuis le sentier.",
          "Viennent ensuite les trois îles d'Aran, découpées en centaines de parcelles par des murets de pierre, et le fort de Dún Aonghasa posé au bord du vide. L'appareil se pose sur une plage du Connemara, à marée basse, moteur coupé. Le déjeuner attend sous une tente montée le matin. Il n'y a pas de route jusqu'ici.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Irlande",
      heading: "Trois journées qui ne se réservent pas en ligne",
      description:
        "Trois moments portent le séjour. À Midleton, le maître-distillateur ouvre un chai fermé au public et tire au fût devant vous. Dans les bois de Cong, un autour de Harris revient sur le gant à l'appel. À Kinsale, dix-huit trous suivent le bord d'un promontoire cerné par l'Atlantique sur trois côtés.",
      slugs: [
        "midleton-maitre-distillateur",
        "fauconnerie-ashford",
        "old-head-kinsale",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Irlande",
      description:
        "Trois maisons, trois terrains. Un château du treizième siècle sur la rive du Lough Corrib, ses bois et ses faucons. Un manoir néo-gothique et son domaine au bord de la Maigue, dans le Limerick. Une maison accrochée dans la falaise d'Ardmore, chaque chambre face à la baie.",
      slugs: ["ashford-castle", "adare-manor", "cliff-house-ardmore"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Irlande",
      description:
        "Trajet, monnaie, formalités et saisons. Voici les repères qui permettent de caler les dates d'un voyage en Irlande.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Une heure cinquante entre Paris et Dublin, avec plusieurs départs par jour. Cork et Shannon sont desservis en direct depuis Paris une partie de l'année, ce qui permet d'entrer par l'ouest et de repartir par l'est sans refaire le trajet en sens inverse.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Une heure de moins qu'en France, toute l'année. Quand il est 16 h à Paris, il est 15 h à Dublin. Le changement d'heure se fait aux mêmes dates qu'en France.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro en république d'Irlande, sans frais de change. La livre sterling s'applique dès que l'on passe en Irlande du Nord. La carte bancaire est acceptée partout, jusque dans les pubs de village.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa pour les ressortissants français. L'Irlande appartient à l'Union européenne mais pas à l'espace Schengen : une pièce d'identité en cours de validité est contrôlée à l'arrivée.",
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
            "De mai à septembre. En juin, il fait encore jour à vingt-deux heures trente dans l'ouest. Mai et septembre laissent les routes calmes ; juillet et août concentrent les vacances scolaires irlandaises et britanniques.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais partout. L'irlandais reste la langue courante dans les Gaeltachtaí de la côte ouest, où les panneaux ne sont pas traduits : Dingle s'y écrit An Daingean.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat océanique, sans excès. Dublin tourne autour de 6 °C en janvier et de 19 °C l'après-midi en juillet, et il ne gèle presque jamais sur la côte. La pluie arrive par l'ouest, passe vite et laisse derrière elle une lumière très basse.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Irlande. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/irlande/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Irlande, de Dublin à la côte du Cork",
            "Adresses confidentielles en Irlande : chais fermés au public et maisons de famille",
            "Hébergements en Irlande : château au bord du Lough Corrib et manoir du Limerick",
            "Conciergerie privée 24/7 pour un voyage en Irlande",
            "Expériences en Irlande : fauconnerie, hélicoptère au-dessus de Moher et links d'Old Head",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Irlande",
      heading: "Six étapes, de Dublin à la côte du Cork",
      description:
        "Six secteurs et six registres : une capitale géorgienne, un lac et ses bois, un plateau calcaire nu, une péninsule de langue irlandaise, un port de pêche devenu place gastronomique et une falaise tournée vers le sud.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Dublin",
          description:
            "Deux jours suffisent. Le Book of Kells à l'ouverture, l'or celte du musée national, les façades géorgiennes de Merrion Square. Le soir, les tables se réservent autour de Grafton Street.",
          image: {
            src: "/destination/irlande/map-dublin.png",
            alt: "Portes peintes et façades géorgiennes de Merrion Square à Dublin",
          },
          // TODO: verify coords
          coordinates: { lat: 53.3498, lng: -6.2603 },
        },
        {
          title: "Le Connemara et le Lough Corrib",
          description:
            "Des murets de pierre sèche, des tourbières et des lacs jusqu'à l'océan. Sur la rive du Lough Corrib, Ashford Castle garde ses bois, ses bateaux et son école de fauconnerie.",
          image: {
            src: "/destination/irlande/map-connemara.png",
            alt: "Lacs et tourbières du Connemara au bord du Lough Corrib",
          },
          // TODO: verify coords
          coordinates: { lat: 53.5395, lng: -9.2847 },
        },
        {
          title: "Les falaises de Moher et le Burren",
          description:
            "Deux cent quatorze mètres de schiste à la verticale, et juste au nord un plateau calcaire nu où poussent des orchidées arctiques. Le dolmen de Poulnabrone y tient debout depuis plus de cinq mille ans.",
          image: {
            src: "/destination/irlande/map-moher.png",
            alt: "Falaises de Moher plongeant dans l'Atlantique, comté de Clare",
          },
          // TODO: verify coords
          coordinates: { lat: 52.9715, lng: -9.4309 },
        },
        {
          title: "La péninsule de Dingle",
          description:
            "Une route de corniche, des forts de pierre et des plages vides. L'irlandais y est la langue courante et les panneaux ne sont pas traduits. Les sessions de musique commencent vers vingt-deux heures.",
          image: {
            src: "/destination/irlande/map-dingle.png",
            alt: "Route de corniche de Slea Head sur la péninsule de Dingle, Kerry",
          },
          // TODO: verify coords
          coordinates: { lat: 52.1409, lng: -10.2668 },
        },
        {
          title: "Kinsale et Old Head",
          description:
            "Un port de pêche aux façades peintes, devenu la place gastronomique du sud. À dix kilomètres, le promontoire d'Old Head avance dans l'Atlantique, cerné par la mer sur trois côtés.",
          image: {
            src: "/destination/irlande/map-kinsale.png",
            alt: "Façades peintes du port de Kinsale et bateaux de pêche, comté de Cork",
          },
          // TODO: verify coords
          coordinates: { lat: 51.7075, lng: -8.5222 },
        },
        {
          title: "Ardmore et la côte de Waterford",
          description:
            "Ce que l'on tient pour le plus ancien site chrétien d'Irlande, sa tour ronde de vingt-neuf mètres, et un sentier de falaise qui en fait le tour en une heure et demie. En contrebas, la plage et la baie.",
          image: {
            src: "/destination/irlande/map-ardmore.png",
            alt: "Tour ronde d'Ardmore au-dessus de la baie, comté de Waterford",
          },
          // TODO: verify coords
          coordinates: { lat: 51.9494, lng: -7.7256 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Irlande",
      description:
        "Huit repères issus du terrain. Ils aident à choisir la période, à découper les journées et à comprendre ce qui se prépare très longtemps à l'avance.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "La lumière change vite",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une averse passe en vingt minutes et laisse derrière elle la lumière que les photographes attendent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur la côte ouest, une averse dure rarement plus de vingt
                minutes. Elle arrive de l&apos;Atlantique, traverse, et laisse
                derrière elle une lumière très basse et très longue, celle qui
                donne au vert des landes sa couleur.
              </p>
              <p>
                C&apos;est ce qui rend les journées vivantes. Un survol en
                hélicoptère, une sortie en mer ou une partie de golf se placent
                la veille au soir, au moment où la belle fenêtre s&apos;annonce.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Deux journées restent ouvertes dans le programme. Elles sont
                placées au dernier moment, et les réservations concernées sont
                posées en option dès le départ.
              </p>
            </div>
          ),
        },
        {
          title: "Conduire, ou se faire conduire",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On roule à gauche, et les routes de l'ouest se resserrent entre deux murets de pierre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La conduite est à gauche et les routes secondaires du Connemara
                ou du Kerry font souvent la largeur d&apos;une voiture, bordées
                de murets. On y roule à soixante à l&apos;heure, et l&apos;on
                s&apos;arrête pour laisser passer.
              </p>
              <p>
                Les distances sont donc trompeuses : cent kilomètres prennent
                deux heures. Trois bases valent mieux que six étapes, avec des
                trajets de deux heures maximum entre elles.
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
          title: "La musique ne se programme pas",
          cardEyebrow: "Soirs",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les sessions de Doolin ou de Dingle commencent vers vingt-deux heures, sans affiche ni horaire",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une session traditionnelle n&apos;est pas un concert. Les
                musiciens arrivent un par un, s&apos;installent à une table du
                fond, et commencent quand ils sont assez nombreux. Personne
                n&apos;annonce le programme.
              </p>
              <p>
                Les meilleures se tiennent à Doolin, dans le comté de Clare, et
                à Dingle. Elles démarrent tard, autour de vingt-deux heures, et
                le pub reste ouvert tant que cela joue.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une session privée peut être organisée chez un musicien ou dans
                une salle fermée pour la soirée, avec un joueur de uilleann
                pipes qui explique les airs avant de les jouer.
              </p>
            </div>
          ),
        },
        {
          title: "Les links se réservent un an avant",
          cardEyebrow: "Golf",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Lahinch, Ballybunion, Old Head : les départs du matin partent douze mois à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grands links irlandais ouvrent leurs réservations aux
                visiteurs un an à l&apos;avance, et les créneaux du matin
                partent les premiers. En juillet et en août, les parcours du
                sud-ouest sont complets dès l&apos;hiver précédent.
              </p>
              <p>
                Le vent fait partie du parcours. Un links change complètement
                de difficulté selon l&apos;heure du départ, et les caddies
                locaux valent la dépense : ils lisent la ligne du vent avant de
                lire le green.
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
          title: "Whiskey, et non whisky",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois distillations, l'orge crue mélangée à l'orge maltée : le pot still irlandais",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le whiskey irlandais se distille trois fois là où l&apos;écossais
                se contente de deux. Le pot still, la spécialité du pays,
                mélange orge maltée et orge crue dans le même alambic, ce qui
                lui donne son grain.
              </p>
              <p>
                Midleton, dans le comté de Cork, en est la maison mère. Les
                chais anciens ne sont pas ouverts au public, et les fûts uniques
                ne se goûtent qu&apos;en présence d&apos;un maître-distillateur.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les dégustations sérieuses se font le matin, avant le déjeuner.
                Le palais est net et les chais sont vides.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à septembre. En juin, il fait encore jour à vingt-deux heures trente dans l'ouest",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mai et juin sont les mois les plus secs de l&apos;année, et les
                journées y sont les plus longues : le soleil se couche après
                vingt-deux heures sur la côte ouest. Les routes du Kerry restent
                praticables sans attente.
              </p>
              <p>
                Juillet et août concentrent les vacances scolaires irlandaises
                et britanniques. Septembre rend les tables et les links plus
                faciles à obtenir, avec une lumière plus basse et des soirées
                déjà fraîches.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                L&apos;hiver a ses arguments : les tempêtes se regardent depuis
                la falaise, et les feux de tourbe sont allumés dans les salons
                dès seize heures.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qu'il faut dans la valise",
          cardEyebrow: "Bagage",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une veste imperméable, des chaussures de marche et une couche chaude, même en juillet",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parapluie ne sert à rien : le vent le retourne. Une veste
                imperméable à capuche, des chaussures qui tiennent sur la roche
                mouillée et un pull, y compris au cœur de l&apos;été, couvrent
                l&apos;essentiel.
              </p>
              <p>
                Les grandes maisons demandent une tenue habillée le soir dans
                leurs salles à manger, veste pour les messieurs. Les journées,
                elles, se passent en vêtements de terrain.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les prises électriques sont de type britannique, à trois broches
                plates. Un adaptateur est nécessaire.
              </p>
            </div>
          ),
        },
        {
          title: "Le gaélique sur les panneaux",
          cardEyebrow: "Langue",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dans les Gaeltachtaí, les panneaux ne sont écrits qu'en irlandais : Dingle s'y lit An Daingean",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;irlandais est la première langue officielle du pays. Dans
                les zones appelées Gaeltachtaí, sur la côte ouest, il reste la
                langue de tous les jours, et la signalisation routière y est
                rédigée uniquement en irlandais.
              </p>
              <p>
                Cela surprend au volant : Dingle devient An Daingean, Galway
                devient Gaillimh. Le GPS, lui, continue d&apos;afficher les noms
                anglais.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Tout le monde parle anglais. Le français est compris dans les
                grandes maisons et par les guides, rarement ailleurs.
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
            "Nous avons longé les falaises de Moher par la mer, à hauteur des oiseaux, avec un ciel parfaitement dégagé. L'hélicoptère s'est ensuite posé sur une plage où l'on n'arrive pas autrement, et le déjeuner nous attendait sous une tente montée le matin.",
          image: {
            src: "/destination/irlande/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Clare et Connemara, juin 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le faucon est parti dans les arbres et il est revenu se poser sur mon gant. Mon fils de onze ans en parle encore. Nous étions sortis du château à huit heures du matin, il n'y avait personne d'autre dans les bois.",
          image: {
            src: "/destination/irlande/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Ashford Castle et le Connemara, août 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons goûté trois fûts uniques dans un chai que personne ne visite, avec le maître-distillateur pour seule compagnie. Il nous a expliqué pourquoi l'orge crue change tout. J'ai rapporté une bouteille tirée devant nous.",
          image: {
            src: "/destination/irlande/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Cork et Ardmore, septembre 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Irlande ?",
          answer:
            "De mai à septembre. Mai et juin sont les mois les plus secs, et les journées s'étirent jusqu'à vingt-deux heures trente sur la côte ouest. Juillet et août concentrent les vacances scolaires irlandaises et britanniques : les links et les grandes maisons se réservent alors très en avance. Septembre garde une lumière très basse, des routes calmes et des tables plus faciles à obtenir.",
        },
        {
          question: "Combien de temps dure le vol Paris-Dublin ?",
          answer:
            "Une heure cinquante, avec plusieurs départs par jour depuis Paris. Cork et Shannon sont également desservis en direct une partie de l'année, ce qui permet d'entrer par l'ouest et de repartir par l'est. Le décalage horaire est d'une heure de moins qu'en France, toute l'année.",
        },
        {
          question: "Faut-il un visa pour aller en Irlande ?",
          answer:
            "Non. L'Irlande appartient à l'Union européenne, et une carte nationale d'identité ou un passeport en cours de validité suffit aux ressortissants français. Le pays ne fait toutefois pas partie de l'espace Schengen : un contrôle d'identité est effectué à l'arrivée. Aucune vaccination n'est demandée et la carte européenne d'assurance maladie couvre les soins sur place.",
        },
        {
          question: "Que faire en Irlande en une semaine ?",
          answer:
            "Deux nuits à Dublin pour le Book of Kells, le musée national et les tables de Grafton Street. Trois nuits ensuite dans l'ouest, au bord du Lough Corrib, pour la fauconnerie, le Connemara et un survol des falaises de Moher. Deux nuits enfin sur la côte sud, entre les chais de Midleton, le promontoire d'Old Head et la baie d'Ardmore. Le Kerry et Dingle s'ajoutent sur dix nuits.",
        },
        {
          question: "Faut-il louer une voiture pour visiter l'Irlande ?",
          answer:
            "Une voiture ou un chauffeur, oui : les plus belles routes ne sont pas desservies par le train. On roule à gauche, et les routes secondaires du Connemara et du Kerry font parfois la largeur d'un véhicule, bordées de murets de pierre. Comptez deux heures pour cent kilomètres. Un chauffeur francophone se justifie surtout dans l'ouest et sur les journées de dégustation.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Irlande ?",
          answer:
            "Un voyage en Irlande sur mesure avec Exuma se situe généralement entre 4 000 et 8 000 € par personne pour sept nuits, hébergements, chauffeur, guides et accès privés compris, hors transport depuis Paris. Le survol en hélicoptère et les départs sur les grands links constituent le principal poste variable.", // TODO: verify la fourchette de budget
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
        "Trois pays d'Europe du Nord où le voyage se joue sur la lumière, l'eau et des distances courtes.",
      slugs: ["islande", "norvege", "pays-bas"],
    },
  ],
};
