import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "royaume-uni",
  name: "Royaume-Uni",
  placeKind: "country",
  country: "Royaume-Uni",
  genitive: "du Royaume-Uni",
  continentSlug: "europe",
  blurb: "Mayfair, Cotswolds, Speyside, Hébrides",
  keywords: [
    "royaume-uni",
    "londres",
    "ecosse",
    "highlands",
    "cotswolds",
    "speyside",
    "islay",
    "hebrides",
  ],
  metaTitle: "Royaume-Uni : Voyage sur mesure",
  metaDescription:
    "Voyage au Royaume-Uni sur mesure : Mayfair, campagne du Hampshire, Highlands du Deeside, distilleries d'Islay. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Royaume-Uni",
      heading: "Le Royaume-Uni, de Mayfair aux rivières d'Écosse",
      description:
        "Le pays tient en quelques heures de train et change pourtant du tout au tout. Londres se parcourt par ses quartiers et ses portes discrètes, la campagne anglaise vit encore de ses fermes et de ses maisons de famille, et l'Écosse commence là où la route se rétrécit. Des Cotswolds au Speyside, du Deeside aux Hébrides, c'est ce Royaume-Uni-là que nous vous montrons.",
      images: [
        {
          src: "/destination/royaume-uni/hero-1.png",
          alt: "Place géorgienne de Mayfair à Londres en fin de journée, au Royaume-Uni",
        },
        {
          src: "/destination/royaume-uni/hero-2.png",
          alt: "Pêcheur au lancer spey dans une rivière à saumon des Highlands écossaises",
        },
        {
          src: "/destination/royaume-uni/hero-3.png",
          alt: "Village de pierre blonde des Cotswolds au petit matin dans la campagne anglaise",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Royaume-Uni ?",
      heading: "Tainà, spécialiste du Royaume-Uni, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "Le Royaume-Uni se donne à qui connaît les bonnes portes. Une maison de famille du Deeside n'a pas d'enseigne, un tailleur de Savile Row ne reçoit pas sans être présenté, et le meilleur beat de la Spey se loue longtemps à l'avance. C'est là que se joue mon travail : obtenir que l'on vous ouvre, et que l'on vous reçoive comme des proches plutôt que comme des visiteurs.",
        role: "Travel Designer · Royaume-Uni",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Royaume-Uni",
      heading: "L'art anglais de recevoir, le silence écossais",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Royaume-Uni se construit par contrastes plutôt que par kilomètres. On passe de Mayfair, de ses places géorgiennes et de ses maisons de couture, à une vallée du Hampshire où la ferme fournit encore la cuisine, puis à une rivière des Highlands où l'on n'entend que l'eau. Le train relie tout cela dans la même journée, et c'est ce qui rend le pays si confortable à parcourir.",
        "L'Angleterre se lit dans ses maisons. Les demeures géorgiennes ont gardé leurs parcs dessinés au dix-huitième siècle, leurs potagers clos et leurs allées de tilleuls. Beaucoup appartiennent toujours aux mêmes familles, et quelques-unes n'ouvrent que pour une tablée par soir. Les Cotswolds ont leur pierre blonde et leurs villages nés de la laine, Bath ses façades en croissant, le Dorset ses falaises blanches.",
        "L'Écosse change la mesure du voyage. Au nord d'Édimbourg, les distances s'allongent, les villages s'espacent et le ciel occupe la moitié du paysage. Le Deeside vit encore de la chasse et de la pêche, le Speyside de ses rivières à saumon et de ses distilleries, et les Hébrides s'atteignent par le ferry de Mallaig ou par un petit avion. Nous composons les itinéraires autour de ces maisons et de ces rivières, parce que ce sont elles qui donnent le ton du voyage.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/royaume-uni/full-image.png",
        alt: "Rivière à saumon serpentant dans une vallée des Highlands, au nord du Royaume-Uni",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Royaume-Uni : les Highlands",
      heading: "Le Deeside en septembre, quand la bruyère vire au pourpre",
      theme: "light",
      paragraphs: [
        "En août, les routes du nord appartiennent aux vacanciers britanniques et les villages du Deeside vivent au rythme des Highland Games. En septembre, tout se retire. La bruyère se couvre de pourpre sur les collines, les cerfs redescendent vers les vallées, et les maisons acceptent volontiers de n'ouvrir que pour vous. C'est la période que nous préférons.",
        "Plus à l'ouest, les Hébrides se rejoignent par le ferry ou par un petit avion depuis Glasgow. Sur Islay, les entrepôts de whisky donnent directement sur la mer et l'air sent la tourbe dès le port. À Harris, les plages de sable blanc n'ont personne dessus au mois de septembre, et l'eau y reste trop froide pour que cela change un jour.",
      ],
      images: [
        {
          src: "/destination/royaume-uni/split-1.png",
          alt: "Cerf sur une colline couverte de bruyère dans le Deeside en Écosse",
        },
        {
          src: "/destination/royaume-uni/split-2.png",
          alt: "Entrepôts de whisky au bord de la mer sur l'île d'Islay, dans les Hébrides",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/royaume-uni/xp-saumon-spey-1.png",
          alt: "Pêcheur et ghillie dans le courant de la Spey au lever du jour en Écosse",
        },
        right: {
          src: "/destination/royaume-uni/xp-saumon-spey-2.png",
          alt: "Mouches à saumon et canne à deux mains posées sur la berge de la Spey",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une journée sur la Spey, avec l'homme qui connaît la rivière",
        columns: [
          "La Spey compte parmi les grandes rivières à saumon d'Écosse, avec la Tay, la Tweed et la Dee. On y pêche par beats, des portions de rivière louées à la journée, et l'on n'y croise personne d'autre. Le ghillie attend au bord de l'eau au lever du jour. C'est lui qui décide où l'on commence, quelle mouche on monte, et à quel moment il faut changer de rive. Il travaille la même portion depuis des dizaines d'années et lit le courant comme une page.",
          "Le lancer spey est né ici, sur ces berges, parce que les arbres derrière soi interdisent le lancer classique. La canne à deux mains dessine un D dans l'air et pose la mouche à trente mètres sans jamais repasser par l'arrière. On l'apprend en une matinée et on l'affine toute une vie. Le poisson repart à l'eau, toujours. Ce qui reste de la journée, c'est le bruit du courant contre les cuissardes et le silence entre deux lancers.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Royaume-Uni",
      heading: "Les chais d'Islay, Savile Row et une maison fermée",
      description:
        "Une dégustation au fût dans un entrepôt qui ne se visite pas, la première toile d'essayage chez un tailleur de Savile Row, et une nuit dans une maison de famille des Highlands ouverte pour une seule tablée.",
      slugs: [
        "islay-chais-master-blender",
        "savile-row-atelier",
        "domaine-prive-highlands",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Royaume-Uni",
      description:
        "Une maison de Mayfair où l'on entre par une porte que rien ne signale, un domaine du Hampshire qui vit de sa propre ferme, et une auberge des Highlands dont les murs tiennent lieu de collection.",
      slugs: ["the-connaught", "heckfield-place", "the-fife-arms"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Royaume-Uni",
      description:
        "Trajet, décalage, monnaie, formalités et saisons : l'essentiel pour préparer le voyage au Royaume-Uni sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 1 h 20 de vol entre Paris et Londres Heathrow, et 2 h 17 par l'Eurostar entre Paris Nord et Saint-Pancras, centre-ville à centre-ville. Édimbourg et Glasgow se rejoignent en un peu moins de deux heures depuis Paris. Pour les Highlands, Inverness et Aberdeen s'atteignent par une correspondance à Londres ou par le train de nuit Caledonian Sleeper.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Une heure de retard sur la France toute l'année. Le Royaume-Uni suit l'heure d'été aux mêmes dates que le continent, l'écart ne change donc jamais.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est la livre sterling (GBP). Le paiement sans contact est accepté partout, y compris dans les taxis et les petits commerces, et l'on peut traverser le pays sans jamais retirer d'espèces. L'Écosse et l'Irlande du Nord émettent leurs propres billets, valables sur place mais parfois refusés à Londres.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify tarif et délai de l'ETA auprès de France Diplomatie
          description:
            "Aucun visa pour un séjour touristique de moins de six mois. Le voyageur français entre avec un passeport en cours de validité et une autorisation électronique de voyage (ETA) demandée en ligne avant le départ. La carte nationale d'identité ne reste acceptée que dans certains cas particuliers, notamment pour les bénéficiaires du statut settled ou pre-settled.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est exigé à l'entrée sur le territoire. Les vaccinations habituelles du calendrier français doivent être à jour. La carte européenne d'assurance maladie reste valable au Royaume-Uni : l'Assurance Maladie recommande de l'emporter. Une assurance voyage complémentaire reste néanmoins recommandée.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à septembre pour l'ensemble du pays. Nous privilégions la fin du mois de mai et le mois de juin pour l'Angleterre, quand les jardins sont à leur plein et que les jours n'en finissent pas. Pour l'Écosse, septembre reste notre préférence : les paysages prennent leurs couleurs d'automne et la fréquentation retombe. Les midges, eux, peuvent rester présents jusqu'en octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est parlé partout. Le gallois reste vivant au pays de Galles, où il est co-officiel et affiché sur toute la signalisation. Le gaélique écossais se pratique encore dans les Hébrides, et le scots s'entend dans les basses terres et le nord-est.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est océanique et changeant, plus doux que la latitude ne le laisse croire. En été, les températures tournent habituellement autour de 18 à 23 degrés dans le sud, quelques degrés de moins en Écosse, sans que rien ne soit jamais acquis. La pluie se répartit sur toute l'année et tombe rarement longtemps. En juin, il fait encore jour à 22 heures dans les Highlands.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Royaume-Uni. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/royaume-uni/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Royaume-Uni entre Londres, les Cotswolds et les Highlands",
            "Adresses confidentielles au Royaume-Uni : clubs londoniens et maisons de famille",
            "Hébergements au Royaume-Uni : The Connaught, Heckfield Place et The Fife Arms",
            "Conciergerie privée 24/7 pour un voyage au Royaume-Uni",
            "Expériences immersives au Royaume-Uni : pêche du saumon et chais d'Islay",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Royaume-Uni",
      heading: "De Mayfair aux entrepôts de whisky des Hébrides",
      description:
        "Les étapes que nous aimons relier, du sud de l'Angleterre jusqu'aux îles de la côte ouest.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Londres, Mayfair et St James's",
          description:
            "Les places géorgiennes, les arcades de Piccadilly et les maisons de couture tiennent dans un même carré de rues. Les clubs et les tailleurs n'ont pas d'enseigne : on y entre par une porte peinte et un nom sur une plaque de cuivre.",
          image: {
            src: "/destination/royaume-uni/map-londres.png",
            alt: "Rue géorgienne de Mayfair et arcades de Piccadilly à Londres",
          },
          // TODO: verify coords
          coordinates: { lat: 51.5074, lng: -0.1278 },
        },
        {
          title: "Les Cotswolds, la pierre blonde",
          description:
            "Cent cinquante villages bâtis dans le même calcaire, enrichis autrefois par le commerce de la laine. Les murs sans mortier découpent les collines, et les jardins anglais y ont trouvé leur forme la plus aboutie.",
          image: {
            src: "/destination/royaume-uni/map-cotswolds.png",
            alt: "Village de pierre blonde et murets des Cotswolds dans la campagne anglaise",
          },
          // TODO: verify coords
          coordinates: { lat: 51.9298, lng: -1.7222 },
        },
        {
          title: "Édimbourg, la ville des deux villes",
          description:
            "La vieille ville s'accroche à la crête volcanique du château, la ville nouvelle déploie ses croissants géorgiens en contrebas. Les deux sont inscrites au patrimoine mondial, et l'on passe de l'une à l'autre en dix minutes de marche.",
          image: {
            src: "/destination/royaume-uni/map-edimbourg.png",
            alt: "Vieille ville d'Édimbourg vue depuis Calton Hill au crépuscule",
          },
          // TODO: verify coords
          coordinates: { lat: 55.9533, lng: -3.1883 },
        },
        {
          title: "Le Speyside, la rivière et les alambics",
          description:
            "La vallée concentre la plus forte densité de distilleries d'Écosse et l'une de ses meilleures rivières à saumon. Les deux tiennent à la même eau, descendue des Cairngorms.",
          image: {
            src: "/destination/royaume-uni/map-speyside.png",
            alt: "Méandre de la Spey et distillerie dans la vallée du Speyside en Écosse",
          },
          // TODO: verify coords
          coordinates: { lat: 57.4736, lng: -3.227 },
        },
        {
          title: "Islay, la tourbe et la mer",
          description:
            "Neuf distilleries se partagent une île de quarante kilomètres de long, la plupart les pieds dans l'eau. La tourbe coupée sur la lande donne au whisky son goût de fumée, et l'air en porte déjà l'odeur sur le quai.",
          image: {
            src: "/destination/royaume-uni/map-islay.png",
            alt: "Distillerie blanche au bord de la mer sur l'île d'Islay en Écosse",
          },
          // TODO: verify coords
          coordinates: { lat: 55.757, lng: -6.287 },
        },
        {
          title: "L'île de Skye, les Cuillin",
          description:
            "La crête noire des Cuillin ferme l'horizon au sud de l'île, la plus haute chaîne des Hébrides. Le reste se parcourt par des routes à une voie, entre les falaises de Trotternish et les crofts encore habités.",
          image: {
            src: "/destination/royaume-uni/map-skye.png",
            alt: "Crête des Cuillin et lochs de l'île de Skye dans les Hébrides intérieures",
          },
          // TODO: verify coords
          coordinates: { lat: 57.4125, lng: -6.1958 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Royaume-Uni",
      description:
        "Quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne saison, comprendre les usages et voyager comme on vit sur place.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "La bonne saison change selon la latitude",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'Angleterre est à son plus beau en juin, l'Écosse en septembre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les jardins anglais atteignent leur plein à la fin du mois de mai
                et en juin, quand les roses et les vivaces sortent ensemble et
                que la lumière dure jusqu'à 21 heures. Au nord, la même période
                se paie de moucherons dans les vallées humides.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous plaçons volontiers l'Angleterre en juin et l'Écosse en
                septembre. À cette date, la bruyère est en couleur, les cerfs
                redescendent, les maisons de famille se libèrent après l'été
                britannique, et la pêche du saumon vit ses dernières semaines.
              </p>
            </div>
          ),
        },
        {
          title: "L'autorisation à demander avant de partir",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Passeport obligatoire, et une autorisation électronique à obtenir en ligne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le voyageur français entre désormais avec un passeport en cours
                de validité et une autorisation électronique de voyage (ETA)
                obtenue avant le départ. La carte nationale d'identité ne reste
                acceptée que dans certains cas particuliers, notamment pour les
                bénéficiaires du statut settled ou pre-settled.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La demande se fait en ligne et la réponse arrive en général très
                vite, mais nous la lançons dès la confirmation du voyage. Notre
                équipe vérifie les conditions en vigueur avant chaque départ, ces
                règles ayant évolué plusieurs fois depuis 2021.
              </p>
            </div>
          ),
        },
        {
          title: "Le train plutôt que la voiture",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Paris rejoint Londres en 2 h 17, et le train de nuit monte jusqu'aux Highlands",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'Eurostar dépose au cœur de Londres sans passer par un aéroport.
                De là, le réseau ferroviaire couvre le pays, et le Caledonian
                Sleeper part d'Euston en soirée pour arriver à Inverness ou Fort
                William au petit matin.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous réservons le train pour les grandes liaisons et une voiture
                avec chauffeur pour la campagne. Les routes à une voie des
                Highlands et des Hébrides se conduisent à gauche, avec des
                passing places tous les cent mètres : le chauffeur local vous
                laisse regarder par la fenêtre.
              </p>
            </div>
          ),
        },
        {
          title: "Se faire ouvrir une maison privée",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les plus belles demeures du pays n'ont ni site, ni enseigne, ni réservation en ligne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une partie des grandes maisons anglaises et écossaises appartient
                encore aux mêmes familles depuis plusieurs siècles. Certaines
                accueillent une tablée par soir, ou louent la maison entière pour
                quelques nuits, sans jamais l'annoncer nulle part.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Cela se demande longtemps à l'avance, par recommandation, et
                jamais au dernier moment. Nous engageons ces conversations six à
                douze mois avant le départ, et c'est souvent ce qui décide de la
                forme du voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Les moucherons des Highlands",
          cardEyebrow: "Nature",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le midge écossais court de mai à octobre, au crépuscule et près de l'eau",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le midge mesure deux millimètres et se déplace en nuage. Sa
                saison s'étend de mai à octobre, avec un pic au cœur de l'été. Il
                aime les soirées sans vent, les berges humides et les tourbières
                de la côte ouest, et se retire dès que la brise se lève ou que la
                température baisse.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Il se raréfie à mesure que la saison avance, sans jamais
                disparaître tout à fait avant les premiers froids. Nous
                privilégions la côte est et le Deeside, plus secs et plus ventés,
                et prévoyons une protection pour les fins de journée au bord de
                l'eau.
              </p>
            </div>
          ),
        },
        {
          title: "Le whisky, et la façon de le goûter",
          cardEyebrow: "Whisky",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La dégustation qui compte se fait au fût, dans l'entrepôt, pas au comptoir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Chaque région a sa signature : la tourbe et l'iode à Islay, la
                douceur fruitée au Speyside, le sel et le vent sur les Orcades.
                Le même distillat change du tout au tout selon le fût qui l'a
                gardé, sherry, bourbon ou vin.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Demandez une dégustation en entrepôt, où le whisky se tire du fût
                à la pipette. Une goutte d'eau ouvre les arômes bien mieux que la
                glace, qui les referme. Certaines maisons acceptent de vous
                laisser composer votre propre assemblage.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des couches, une vraie veste imperméable, et de quoi dîner correctement",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le temps change plusieurs fois dans la journée, et l'on s'habille
                par couches plutôt que par saison. Une veste imperméable et des
                chaussures qui tiennent l'eau servent de mai à octobre, y compris
                à Londres.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoyez une veste habillée : plusieurs clubs londoniens, salles
                à manger d'hôtels et maisons de campagne la demandent encore au
                dîner. Pour l'Écosse, ajoutez un pull de laine et des bottes,
                même au cœur de l'été.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on dépense sur place",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Londres se paie au prix des grandes capitales, la campagne beaucoup moins",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'hôtellerie londonienne se situe parmi les plus chères d'Europe,
                et les tables étoilées de Mayfair suivent le même mouvement. La
                campagne anglaise et l'Écosse restent nettement plus accessibles,
                sauf pendant les semaines de chasse et de pêche.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                L'arbitrage se joue sur la répartition des nuits : trois nuits à
                Londres, le reste à la campagne, plutôt que l'inverse. Nous
                construisons chaque voyage sur mesure et présentons un budget
                détaillé avant toute réservation.
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
            "Une journée entière sur la Spey avec le ghillie, sans croiser âme qui vive. Il nous a repris le lancer toute la matinée sans jamais s'impatienter. Le saumon est reparti à l'eau, et c'est le souvenir le plus net du voyage.",
          image: {
            src: "/destination/royaume-uni/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Royaume-Uni, Speyside et Deeside, septembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "On nous a ouvert une maison de famille dans les Highlands, pour nous seuls, avec le dîner servi dans la bibliothèque. Personne ne jouait un rôle : c'était leur maison, et ils nous y recevaient. Je ne pensais pas que cela se faisait encore.",
          image: {
            src: "/destination/royaume-uni/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Royaume-Uni, Londres et les Highlands, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Les enfants ont adoré la ferme du Hampshire, et nous les jardins. Trois nuits à Londres au début, la campagne ensuite : dans cet ordre, tout le monde y trouvait son compte. Le train nous a évité toute la logistique.",
          image: {
            src: "/destination/royaume-uni/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Royaume-Uni, Londres, Hampshire et Cotswolds, juin 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Royaume-Uni ?",
          answer:
            "De mai à septembre pour l'ensemble du pays, avec deux fenêtres que nous préférons. La fin du mois de mai et le mois de juin conviennent à l'Angleterre : les jardins sont à leur plein, les jours durent jusqu'à 21 heures et la campagne est à son plus vert. Pour l'Écosse, nous recommandons septembre : les paysages prennent leurs couleurs d'automne, la fréquentation retombe et les maisons de famille se libèrent après l'été britannique. Les midges, eux, peuvent rester présents jusqu'en octobre, surtout sur la côte ouest. Londres se visite très agréablement toute l'année, y compris en décembre.",
        },
        {
          question: "Combien de temps dure le trajet depuis Paris ?",
          answer:
            "L'Eurostar relie Paris Nord à Saint-Pancras en 2 h 17, centre-ville à centre-ville, ce qui reste la solution la plus confortable. Par les airs, comptez environ 1 h 20 jusqu'à Londres Heathrow et un peu moins de deux heures jusqu'à Édimbourg ou Glasgow, avec des vols directs quotidiens. Pour les Highlands, Inverness et Aberdeen s'atteignent par une correspondance à Londres, ou par le train de nuit Caledonian Sleeper qui part d'Euston en soirée.",
        },
        {
          question: "Faut-il un visa pour aller au Royaume-Uni ?",
          answer:
            "Non, aucun visa n'est nécessaire pour un séjour touristique de moins de six mois. Le voyageur français entre en revanche avec un passeport en cours de validité et une autorisation électronique de voyage (ETA) demandée en ligne avant le départ. La carte nationale d'identité ne reste acceptée que dans certains cas particuliers, notamment pour les bénéficiaires du statut settled ou pre-settled. Notre équipe vérifie les conditions en vigueur et vous accompagne dans la démarche avant chaque voyage.",
        },
        {
          question: "Que faire au Royaume-Uni en 10 jours ?",
          answer:
            "Dix jours permettent de relier l'Angleterre et l'Écosse sans courir. Nous commençons en général par trois nuits à Londres, le temps des musées, d'un atelier de Savile Row et d'une table de Mayfair. Vient ensuite la campagne anglaise, dans le Hampshire ou les Cotswolds, pour les jardins, les fermes et les maisons de famille. Le train monte ensuite à Édimbourg, puis la route gagne le Deeside et le Speyside pour la pêche, la marche et les distilleries. Les Hébrides s'ajoutent volontiers en fin de parcours pour qui dispose de trois jours de plus.",
        },
        {
          question: "Peut-on combiner l'Angleterre et l'Écosse ?",
          answer:
            "Oui, et c'est la combinaison que nous construisons le plus souvent. Londres et Édimbourg sont reliées en un peu plus de quatre heures de train, avec une arrivée en plein centre des deux villes. L'ordre a son importance : nous plaçons Londres au début et l'Écosse ensuite, parce qu'il est plus agréable de finir par les rivières et les collines que par une capitale. Le pays de Galles et le Lake District s'insèrent naturellement sur la route entre les deux.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Royaume-Uni ?",
          answer:
            "Londres se situe parmi les capitales les plus chères d'Europe pour l'hôtellerie et la restauration, tandis que la campagne anglaise et l'Écosse restent nettement plus mesurées, sauf pendant les semaines de chasse et de pêche. Le budget dépend donc surtout de la répartition des nuits et des accès que nous négocions : un beat privé sur la Spey, une dégustation en entrepôt fermé au public, une maison de famille ouverte pour vous seuls. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays d'Europe où le patrimoine, la table et les grands paysages composent un même voyage, à écrire sur mesure avec votre travel designer.",
      slugs: ["france", "suisse", "autriche"],
    },
  ],
};
