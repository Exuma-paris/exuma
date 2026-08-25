import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "mexique",
  name: "Mexique",
  placeKind: "country",
  country: "Mexique",
  genitive: "du Mexique",
  continentSlug: "ameriques",
  blurb: "Mexico, Oaxaca, le Yucatán, le Pacifique",
  keywords: [
    "mexique",
    "yucatan",
    "oaxaca",
    "chichen itza",
    "mexico",
    "riviera maya",
    "nayarit",
    "cenote",
    "maya",
  ],
  metaTitle: "Mexique : Voyage sur mesure",
  metaDescription:
    "Voyage au Mexique sur mesure : Mexico, Oaxaca, les cités mayas du Yucatán et la côte du Pacifique. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Mexique",
      heading: "Le Mexique, de Mexico aux cités mayas du Yucatán",
      description:
        "Il y a plusieurs Mexique, et tout le plaisir est de choisir les vôtres. À Mexico, les musées, les fresques et les tables comptent parmi les plus vivants du continent. Oaxaca se savoure lentement, entre ses marchés et ses ateliers de mezcal. Puis la forêt du Yucatán s'ouvre sur les cités mayas et sur ses cénotes d'eau douce, avant que la côte du Nayarit ne referme le séjour face au Pacifique.",
      images: [
        {
          src: "/destination/mexique/hero-1.png",
          alt: "Pyramide de Kukulcán à Chichén Itzá au lever du jour, Mexique",
        },
        {
          src: "/destination/mexique/hero-2.png",
          alt: "Cour d'une hacienda du Yucatán bordée d'arcades en fin de journée",
        },
        {
          src: "/destination/mexique/hero-3.png",
          alt: "Forêt descendant jusqu'au Pacifique sur la côte du Nayarit",
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
          "Le Mexique gagne à être pris sans hâte. On peut enchaîner une pyramide, une plage et une baignade en quelques jours, et rentrer sans avoir rien goûté de ce qui fait ce pays. Je préfère choisir trois régions et les laisser respirer. C'est là qu'on le rencontre vraiment, dans une cuisine d'Oaxaca ou sous les arcades d'une hacienda du Yucatán.",
        role: "Travel Designer · Mexique",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un pays où le passé se vit au présent",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Mexique commence souvent sur le Zócalo de Mexico, la grande place du centre. La cathédrale espagnole s'y tient tout près des ruines aztèques du Templo Mayor, retrouvées par hasard sous les pavés. Rien n'a été effacé ici, tout s'est posé par-dessus, et c'est ce qui rend la ville si vivante.",
        "La suite se compose selon vos envies. Mexico se visite entre le musée national d'anthropologie, les maisons colorées de Coyoacán et les terrasses de la Roma. Oaxaca prend son temps, avec ses marchés, son mole noir et les distilleries de mezcal des vallées voisines. Le Yucatán se partage entre ses haciendas et ses cénotes, et la côte du Nayarit offre au séjour une fin paisible face au Pacifique. C'est ce Mexique-là que nous vous montrons.",
        "« On croit venir pour les pyramides. On repart en parlant d'un mole partagé dans une cuisine et d'un bain dans une eau douce, au cœur de la forêt. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/mexique/full-image.png",
        alt: "Cité maya de Palenque émergeant de la forêt du Chiapas, Mexique",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les cénotes du Yucatán",
      heading: "Une baignade dans l'eau douce, au cœur de la forêt",
      theme: "light",
      paragraphs: [
        "Sous la forêt du Yucatán court une eau douce et claire, retenue par la roche. Là où la voûte s'est ouverte, elle apparaît au grand jour et forme un cénote. Les Mayas y voyaient un passage vers le monde des dieux et venaient y déposer des offrandes. On y descend aujourd'hui par une échelle de bois pour s'y baigner, dans une eau tiède toute l'année.",
        "Les plus connus reçoivent beaucoup de monde. D'autres se cachent au fond d'une propriété, derrière une barrière que le propriétaire n'ouvre qu'à ceux qu'il connaît. Nous vous y conduisons au calme, avant que la chaleur ne monte.",
        "La lumière tombe par l'ouverture et se pose au milieu de l'eau.",
      ],
      images: [
        {
          src: "/destination/mexique/split-1.png",
          alt: "Cénote du Yucatán éclairé par une ouverture dans la voûte calcaire",
        },
        {
          src: "/destination/mexique/split-2.png",
          alt: "Racines descendant jusqu'à l'eau douce d'un cénote du Yucatán",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/mexique/xp-chichen-itza-1.png",
          alt: "Esplanade déserte de Chichén Itzá dans la lumière du matin",
        },
        right: {
          src: "/destination/mexique/xp-chichen-itza-2.png",
          alt: "Détail sculpté du jeu de balle de Chichén Itzá, Yucatán",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Chichén Itzá, avant que le site n'ouvre au public",
        columns: [
          "Nous vous conduisons à Chichén Itzá au petit matin, quand le site n'appartient encore à personne. La lumière est basse, l'esplanade est vide, et la pyramide de Kukulcán se dresse dans un silence complet. Un archéologue qui a travaillé sur place vous accompagne et vous raconte ce que les pierres gardent : le calendrier inscrit dans les marches, le serpent que l'ombre dessine aux équinoxes.",
          "On rejoint ensuite le grand jeu de balle, où un mot prononcé à un bout s'entend distinctement à l'autre, puis le cénote sacré au bout d'une allée bordée d'arbres. Quand les premiers visiteurs franchissent l'entrée, vous êtes déjà repartis vers Valladolid et ses rues colorées.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Mexique",
      heading: "Nos expériences préférées au Mexique",
      description:
        "Trois moments portés par ceux qui les font vivre : un spéléologue du Yucatán, une cuisinière d'Oaxaca, un marin de la baie de Banderas. Des portes que l'on n'ouvre pas depuis un site de réservation.",
      slugs: [
        "cenote-secret-yucatan",
        "table-oaxaca-cocinera",
        "baleines-banderas",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Mexique",
      heading: "Où séjourner",
      description:
        "Trois adresses, trois Mexique. Une plage de la Riviera Maya, une hacienda posée sur son cénote, et des villas suspendues au-dessus du Pacifique.",
      slugs: ["maroma-belmond", "chable-yucatan", "one-only-mandarina"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage au Mexique",
      description:
        "Temps de vol, décalage, monnaie, formalités et saison : l'essentiel pour préparer le séjour sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 12 heures en vol direct entre Paris et Mexico, et autour de 11 heures vers Cancún, selon les périodes et les compagnies. Oaxaca, Mérida et Puerto Vallarta se rejoignent ensuite par un vol intérieur.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Mexico compte 7 heures de moins que Paris en hiver et 8 heures en été. Le Quintana Roo, qui couvre Cancún et la Riviera Maya, a une heure d'avance sur Mexico. Le pays a supprimé le changement d'heure, sauf dans certaines zones frontalières.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est le peso mexicain. Les cartes bancaires sont très largement acceptées dans l'hôtellerie et les restaurants, mais il reste utile de garder un peu d'espèces pour les marchés et les villages.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont exemptés de visa pour un séjour touristique, dans la limite de 180 jours. Le passeport doit être en cours de validité. À Mexico et à Cancún, l'immigration s'effectue désormais en partie par des portiques automatiques, et un document migratoire électronique peut vous être délivré.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est exigé à l'entrée sur le territoire. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille l'hépatite A, ainsi qu'une protection contre les moustiques dans les régions tropicales.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Nous privilégions les mois de novembre à avril, lorsque le ciel est dégagé et la chaleur agréable. Les mois d'épaule restent très plaisants, et les baleines à bosse s'observent dans la baie de Banderas de décembre à mars.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'espagnol est la langue nationale, aux côtés de nombreuses langues autochtones reconnues, parmi lesquelles le maya yucatèque et le zapotèque. L'anglais est largement pratiqué dans les régions touristiques.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat varie selon les régions : tropical sur les deux côtes, plus tempéré sur les hauts plateaux du centre, où Mexico garde des journées douces toute l'année. La saison des pluies s'étend généralement de juin à octobre, avec des averses de fin d'après-midi.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Différentes expertises se réunissent autour de votre projet mexicain. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/mexique/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure au Mexique",
            "Ruelle pavée aux façades colorées du centre d'Oaxaca",
            "Chambre ouverte sur la cour d'une hacienda du Yucatán",
            "Concierge coordonnant un transfert privé au Mexique",
            "Table dressée sous les arcades d'une hacienda mexicaine au crépuscule",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir au Mexique",
      heading: "Les endroits où le pays se raconte le mieux",
      description:
        "Mexico, Oaxaca, Chichén Itzá, Palenque, Tulum et la côte du Nayarit apportent chacun au séjour une couleur différente. Ce sont les étapes autour desquelles s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Mexico et le musée national d'anthropologie",
          description:
            "Dans le bois de Chapultepec, le musée rassemble les trésors des civilisations du pays, de Teotihuacán aux Mexicas. On y comprend le Mexique avant de le parcourir, et l'on garde ensuite la ville pour ses fresques et ses tables.",
          image: {
            src: "/destination/mexique/map-mexico.png",
            alt: "Salle mexica du musée national d'anthropologie de Mexico",
          },
          coordinates: { lat: 19.426, lng: -99.1863 }, // TODO: verify coords
        },
        {
          title: "Oaxaca, la ville où l'on mange le mieux",
          description:
            "Ses marchés couverts, ses moles préparés en famille et ses distilleries de mezcal dans les vallées voisines donnent envie de prolonger l'étape. La cuisine s'y transmet à la maison, pas à l'école.",
          image: {
            src: "/destination/mexique/map-oaxaca.png",
            alt: "Étal d'épices et de piments sur un marché couvert d'Oaxaca",
          },
          coordinates: { lat: 17.0732, lng: -96.7266 }, // TODO: verify coords
        },
        {
          title: "Chichén Itzá, la grande cité maya",
          description:
            "La pyramide de Kukulcán veille sur l'esplanade, et l'ombre d'un serpent glisse le long de son escalier aux équinoxes. Le site se visite au petit matin, quand la lumière est encore basse et les allées désertes.",
          image: {
            src: "/destination/mexique/map-chichen-itza.png",
            alt: "Pyramide de Kukulcán à Chichén Itzá dans le Yucatán",
          },
          coordinates: { lat: 20.6843, lng: -88.5678 }, // TODO: verify coords
        },
        {
          title: "Palenque, la cité sous les arbres",
          description:
            "Au pied des montagnes du Chiapas, Palenque sort à peine de la forêt : une grande partie de la cité dort encore sous la végétation. Le tombeau de Pakal se cachait sous le temple des Inscriptions, et les singes hurleurs saluent le lever du jour.",
          image: {
            src: "/destination/mexique/map-palenque.png",
            alt: "Temple des Inscriptions de Palenque cerné par la forêt du Chiapas",
          },
          coordinates: { lat: 17.484, lng: -92.046 }, // TODO: verify coords
        },
        {
          title: "Tulum, les ruines face à la mer",
          description:
            "Tulum est la seule cité maya bâtie sur une falaise ouverte sur les Caraïbes. Le matin, la lumière arrive de l'eau et vient éclairer les remparts. On se baigne juste en contrebas.",
          image: {
            src: "/destination/mexique/map-tulum.png",
            alt: "Ruines mayas de Tulum sur la falaise au-dessus de la mer des Caraïbes",
          },
          coordinates: { lat: 20.2114, lng: -87.4654 }, // TODO: verify coords
        },
        {
          title: "La côte du Nayarit, face au Pacifique",
          description:
            "Au nord de Puerto Vallarta, la Sierra Madre descend jusqu'à l'océan et la forêt s'arrête au sable. Les villages de Sayulita et San Pancho gardent leur allure tranquille, et les baleines à bosse viennent mettre bas dans la baie en hiver.",
          image: {
            src: "/destination/mexique/map-nayarit.png",
            alt: "Falaises boisées de la côte du Nayarit plongeant dans le Pacifique",
          },
          coordinates: { lat: 20.7745, lng: -105.509 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Ce que nos experts vous diraient avant de partir",
      description:
        "Huit observations de terrain qui ne se trouvent pas dans un guide, pour choisir une étape ou comprendre pourquoi nous l'inscrivons à votre itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Chichén Itzá, l'heure qui change tout",
          cardEyebrow: "Site",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le site se visite au petit matin, quand il est encore calme et que la lumière est belle",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Chichén Itzá est l&apos;excursion la plus vendue de la région, et
                les autocars arrivent en milieu de matinée. Le même endroit, à
                l&apos;ouverture, est un lieu paisible où l&apos;on entend
                l&apos;écho du jeu de balle.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous logeons à Valladolid ou dans une hacienda voisine, et
                nous vous conduisons sur le site avant l&apos;arrivée du public,
                accompagnés d&apos;un archéologue qui y a travaillé.
              </p>
            </div>
          ),
        },
        {
          title: "Le Yucatán, au-delà de la côte",
          cardEyebrow: "Région",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "À l'intérieur des terres, la péninsule garde ses haciendas et ses villages mayas",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Riviera Maya concentre la plupart des séjours, alors que
                l&apos;intérieur du Yucatán réserve de belles surprises. Les
                anciennes haciendas de sisal ont été restaurées avec goût, Mérida
                a des airs de ville coloniale paisible, Izamal se peint tout
                entière en jaune, et les cénotes se cachent au bout de chemins de
                terre.
              </p>
              <h4 className="font-medium">Conseil de nos experts :</h4>
              <p>
                Passez quelques nuits dans une hacienda avant de rejoindre la
                mer. Le contraste entre les deux donne toute sa saveur au séjour.
              </p>
            </div>
          ),
        },
        {
          title: "Mexico mérite qu'on s'y arrête",
          cardEyebrow: "Ville",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Beaucoup ne font qu'y passer, alors que la ville donne les clés de tout le reste",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mexico traîne une réputation qui n&apos;a plus cours.
                C&apos;est aujourd&apos;hui l&apos;une des grandes capitales
                culturelles du continent, avec le musée national
                d&apos;anthropologie, la maison bleue de Frida Kahlo à Coyoacán,
                les fresques de Diego Rivera au Palais national et les terrasses
                de la Roma et de la Condesa.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Quelques nuits en début de séjour, avec chauffeur et un guide
                historien pour le centre. La ville est vaste et la circulation
                dense : mieux vaut se laisser conduire.
              </p>
            </div>
          ),
        },
        {
          title: "Oaxaca, la table du pays",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le mole noir se prépare en famille et se partage à la maison, jamais au restaurant",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Oaxaca est la capitale gourmande du Mexique. Le mole noir demande
                une longue préparation et réunit une liste d&apos;ingrédients à
                rallonge, dont le chocolat et le piment. Le mezcal, lui, se
                distille dans les villages, l&apos;agave cuit dans une fosse
                creusée en terre, très loin des bouteilles d&apos;exportation.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Un déjeuner chez une cuisinière, dans sa propre cuisine, puis la
                visite d&apos;une distillerie familiale dans les vallées voisines.
              </p>
            </div>
          ),
        },
        {
          title: "La sécurité se regarde région par région",
          cardEyebrow: "Terrain",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le pays est vaste et les situations diffèrent beaucoup d'un État à l'autre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Parler de la sécurité « au Mexique » en général n&apos;a pas
                grand sens. Le Yucatán est l&apos;une des régions les plus
                tranquilles d&apos;Amérique latine, quand certains États du nord
                sont formellement déconseillés. Les régions que nous proposons se
                tiennent à l&apos;écart de ces zones.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous suivons les recommandations officielles région par région, et
                nous travaillons avec des chauffeurs et des guides locaux qui nous
                accompagnent depuis des années.
              </p>
            </div>
          ),
        },
        {
          title: "Mexico se trouve en altitude",
          cardEyebrow: "Santé",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "La capitale est haut perchée, et le corps met un jour ou deux à s'y habituer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mexico se tient en altitude, sur un plateau entouré de volcans. On
                s&apos;essouffle un peu dans les escaliers, on dort plus
                légèrement la première nuit, et l&apos;alcool se fait sentir
                davantage. Tout rentre dans l&apos;ordre au bout d&apos;un jour ou
                deux.
              </p>
              <h4 className="font-medium">Conseil de nos experts :</h4>
              <p>
                Gardez la première journée tranquille, buvez beaucoup d&apos;eau,
                et réservez le mezcal pour le lendemain soir.
              </p>
            </div>
          ),
        },
        {
          title: "Deux côtes, deux saisons",
          cardEyebrow: "Saison",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les Caraïbes et le Pacifique ne se visitent pas au même moment de l'année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Du côté des Caraïbes, la saison des pluies et des ouragans court
                de l&apos;été à l&apos;automne, et la sargasse, cette algue brune,
                peut s&apos;échouer sur les plages au printemps. Du côté du
                Pacifique, l&apos;hiver est sec et lumineux, et c&apos;est la
                saison où les baleines à bosse viennent mettre bas dans la baie de
                Banderas.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                En hiver, nous aimons terminer le séjour sur le Pacifique plutôt
                que sur les Caraïbes. La lumière et la mer y sont plus belles à
                cette période.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer sans y penser",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les vols intérieurs relient les grandes étapes, la voiture avec chauffeur fait le reste",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mexico, Oaxaca et Mérida sont reliées entre elles par des vols
                intérieurs fréquents. La voiture avec chauffeur prend le relais
                pour les plus beaux tronçons, entre Mérida et Chichén Itzá, autour
                d&apos;Oaxaca, ou le long de la côte du Nayarit.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous choisissons pour chaque étape entre l&apos;avion et la route,
                et nous organisons les transferts d&apos;un bout à l&apos;autre.
                Vous n&apos;avez aucune correspondance à surveiller.
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
            "Chichén Itzá au petit matin restera notre plus beau souvenir. Nous étions seuls devant la pyramide, et l'archéologue qui nous accompagnait nous a raconté ce que chaque escalier signifiait.",
          image: {
            src: "/destination/mexique/hero-1.png",
            alt: "Portrait de Bernard et Michèle", // TODO: verify
          },
          name: "Bernard & Michèle", // TODO: verify
          role: "Voyage anniversaire, février 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons passé quelques nuits dans une hacienda du Yucatán avant de rejoindre la mer. Le cénote au fond du domaine, ouvert pour nous seuls, valait à lui seul le séjour.",
          image: {
            src: "/destination/mexique/hero-2.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Séjour en famille, janvier 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Oaxaca a été la belle surprise du voyage. Un déjeuner chez une cuisinière, dans sa cuisine, et un après-midi qui passe sans qu'on le voie. Nous n'aurions jamais trouvé cette adresse seuls.",
          image: {
            src: "/destination/mexique/hero-3.png",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Voyage en couple, novembre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir au Mexique ?",
          answer:
            "Nous privilégions les mois de novembre à avril, quand le ciel est dégagé et la chaleur agréable. La saison des pluies s'étend généralement de juin à octobre, avec des averses de fin d'après-midi, et la saison des ouragans concerne surtout la côte caraïbe de l'été à l'automne.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 12 heures en vol direct vers Mexico et autour de 11 heures vers Cancún, selon les périodes et les compagnies. Oaxaca, Mérida et Puerto Vallarta se rejoignent ensuite par un vol intérieur.",
        },
        {
          question: "Faut-il un visa pour aller au Mexique ?",
          answer:
            "Non. Les ressortissants français sont exemptés de visa pour un séjour touristique, dans la limite de 180 jours. Le passeport doit être en cours de validité. À Mexico et à Cancún, l'immigration s'effectue désormais en partie par des portiques automatiques, et un document migratoire électronique peut vous être délivré.",
        },
        {
          question: "Le Mexique est-il un pays sûr pour voyager ?",
          answer:
            "La réponse dépend beaucoup de la région. Le Yucatán, Mexico et Oaxaca accueillent chaque année des millions de visiteurs sans difficulté, quand certains États du nord et du Pacifique central sont déconseillés. Nous suivons les recommandations officielles région par région et travaillons avec des chauffeurs et des guides locaux que nous connaissons de longue date.",
        },
        {
          question: "Que faire au Mexique en deux semaines ?",
          answer:
            "Un séjour de deux semaines permet de réunir Mexico, Oaxaca et le Yucatán, entre hacienda et bord de mer, sans avoir l'impression de courir. Si vous préférez le Pacifique aux Caraïbes, la côte du Nayarit fait une très belle fin de voyage. Nous plaçons toujours une étape agréable entre deux régions.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Mexique ?",
          answer:
            "Le budget dépend des hébergements choisis, de la saison et du nombre de vols intérieurs. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays où une grande civilisation et de beaux paysages se répondent, à composer avec votre travel designer.",
      slugs: ["etats-unis", "bresil", "grece"],
    },
  ],
};
