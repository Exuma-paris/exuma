import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "fidji",
  name: "Fidji",
  placeKind: "country",
  country: "Fidji",
  genitive: "des Fidji",
  continentSlug: "iles-oceanie",
  blurb: "Les Yasawa, Kadavu, les îles Lau",
  keywords: [
    "fidji",
    "viti levu",
    "yasawa",
    "mamanuca",
    "kadavu",
    "great astrolabe reef",
    "taveuni",
    "lau",
  ],
  metaTitle: "Fidji : Voyage sur mesure",
  metaDescription:
    "Voyage aux Fidji sur mesure : les Yasawa, le Great Astrolabe Reef et les îles privées de Laucala et Kokomo. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Fidji",
      heading: "Les Fidji, du récif de Kadavu aux cascades de Taveuni",
      description:
        "Il faut quelques jours pour comprendre que les Fidji ne se visitent pas comme une île mais comme un pays dont les routes sont des couloirs de mer, et qu'il existe ici des archipels où l'on ne se rend qu'en hydravion, à la voile, ou parce que quelqu'un y attend la visite. C'est ce pays-là que nous vous ouvrons, celui des lagons tout proches comme celui des îles que l'on met deux jours à rejoindre.",
      images: [
        {
          src: "/destination/fidji/hero-1.png",
          alt: "Voyage aux Fidji : le lagon des Yasawa et ses îlots vus depuis la hauteur",
        },
        {
          src: "/destination/fidji/hero-2.png",
          alt: "Bure couverte de chaume au bord de l'eau dans les Mamanuca aux Fidji",
        },
        {
          src: "/destination/fidji/hero-3.png",
          alt: "Pêcheurs poussant leur barque sur le sable au lever du jour à Kadavu",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir aux Fidji ?",
      heading: "Stéphane, spécialiste des Fidji, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Il y a toujours, dans un voyage aux Fidji, un moment où l'on cesse de compter les jours, et c'est presque toujours le soir où l'on se retrouve assis sur une natte, dans un village dont on ignorait le nom le matin même. Je construis chaque séjour autour de ce basculement : d'abord le lagon et son silence, puis la terre et ceux qui attendent qu'on vienne s'asseoir.",
        role: "Travel Designer · Fidji",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Fidji",
      heading: "De Nadi aux Yasawa, puis vers les archipels de l'est",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage aux Fidji commence à Nadi, sur la côte sèche de Viti Levu, mais il se décide vraiment le jour où l'on monte dans le bateau qui s'éloigne de la côte. Les Mamanuca apparaissent presque aussitôt, les Yasawa un peu plus loin, avec leurs falaises de calcaire et le passage de Drawaqa où les raies manta remontent le courant de mai à octobre. Plus au sud, Kadavu vit à l'abri du Great Astrolabe Reef, l'une des plus grandes barrières de corail du monde.",
        "Ce qui frappe en arrivant, c'est l'accueil. On dit bula à chaque croisement, et il faut peu de temps pour comprendre que ce n'est pas une formule. Dans les hautes terres de Ba, le village de Navala a gardé ses bures couvertes de chaume, les seules qui subsistent en nombre dans le pays. On y entre en offrant une racine de yaqona au chef, et la cérémonie se prend au sérieux.",
        "Les maisons où nous vous installons occupent chacune leur île. L'une couvre douze kilomètres carrés au large de Taveuni et se réserve en entier. Une autre s'atteint en hydravion, à quarante-cinq minutes de Nadi, avec le récif qui commence devant la plage. La troisième fonctionne au solaire dans les Mamanuca, à portée de bateau du continent. Nous les choisissons pour leur distance autant que pour leur table.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/fidji/full-image.png",
        alt: "Voyage aux Fidji : le lagon de Fulaga et ses îlots de calcaire dans les Lau",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Le récif et les villages",
      heading: "Ce que l'on trouve sous la surface, et à terre",
      theme: "light",
      paragraphs: [
        "Le corail des Fidji se porte mieux que la moyenne du Pacifique, et cela se voit dès la première plongée. Dans le détroit de Somosomo, le Great White Wall se couvre de coraux mous pâles sur des dizaines de mètres de tombant. Au large de Kadavu, les mantas passent dans les canaux du Great Astrolabe Reef. À Beqa, huit espèces de requins viennent sur le même site, dans une réserve née d'un accord avec les villages qui en détenaient les droits de pêche.",
        "À terre, le rythme est autre. Le kokoda, poisson cru mariné au citron vert et au lait de coco, se prépare le matin. Le four enterré du lovo se ferme à midi et s'ouvre en fin d'après-midi. La coupe de kava circule le soir, dans l'ordre des rangs, et l'on frappe trois fois dans ses mains après avoir bu. On repart de ces journées avec le sentiment d'avoir été reçu plutôt que servi.",
      ],
      images: [
        {
          src: "/destination/fidji/split-1.png",
          alt: "Coraux mous du détroit de Somosomo au large de Taveuni aux Fidji",
        },
        {
          src: "/destination/fidji/split-2.png",
          alt: "Coupe de kava partagée dans un village des hautes terres de Viti Levu",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/fidji/xp-sawa-i-lau-1.png",
          alt: "Ouverture de la grotte de Sawa-i-Lau au pied de la paroi de calcaire dans les Yasawa",
        },
        right: {
          src: "/destination/fidji/xp-sawa-i-lau-2.png",
          alt: "Nageur dans la chambre de calcaire de Sawa-i-Lau éclairée par la fente du plafond, aux Fidji",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Sawa-i-Lau, la chambre que l'on rejoint sous l'eau",
        // TODO: verify la légende du chef de Sawa-i-Lau et l'accès en apnée à la seconde salle
        columns: [
          "Le bateau s'arrête au pied d'une paroi de calcaire blanc, dans le nord des Yasawa, à un endroit où rien n'indique qu'il y ait autre chose qu'une falaise. On entre par une ouverture au niveau de l'eau, on nage quelques mètres dans la pénombre, et l'on débouche dans une chambre haute où le jour tombe d'une fente du plafond, à la verticale, sur une eau qui prend une couleur d'encre claire.",
          "Les anciens des villages voisins racontent qu'un chef y avait caché une jeune fille pour la soustraire à un mariage, et les guides qui accompagnent la nage descendent de ceux qui gardaient l'entrée. Une seconde salle s'atteint en passant sous la roche, en apnée, sur quelques mètres seulement, et ceux qui la franchissent se retrouvent dans le noir complet, à écouter leur propre respiration résonner. On ressort par la mer, et le lagon paraît soudain très clair.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Fidji",
      heading: "Plonger le Great Astrolabe, ou offrir la racine au chef",
      description:
        "Nous vous emmenons plonger le long du Great Astrolabe Reef au départ de Kadavu, descendre dans le lagon de Beqa au milieu des requins-bouledogues, et entrer à Navala avec la racine de yaqona qu'attend le chef du village.",
      slugs: [
        "plongee-great-astrolabe-kadavu",
        "requins-beqa-lagoon",
        "sevusevu-village-navala",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Une île entière, ou un récif au bout de la plage",
      description:
        "Douze kilomètres carrés que l'on peut réserver en entier au large de Taveuni, vingt et une villas posées devant le Great Astrolabe Reef, et une maison solaire dans les Mamanuca. Nous les proposons selon la distance que vous voulez mettre entre vous et le reste.",
      slugs: ["laucala-island", "kokomo-private-island", "six-senses-fiji"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Fidji",
      description:
        "Voici les repères pratiques à réunir avant de choisir vos dates : le vol, les formalités, la monnaie et les saisons.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Il n'existe pas de vol direct depuis Paris. Nadi, la porte d'entrée du pays, se rejoint avec une ou deux escales : Hong Kong et Singapour sont reliées directement à Nadi, comme le sont Los Angeles, San Francisco, Sydney et Auckland. Comptez environ 28 à 34 heures de trajet au total, et davantage sur certaines combinaisons d'escales. Reste ensuite le dernier tronçon vers l'île réservée, en avion régional, en hydravion, en hélicoptère ou en bateau selon l'archipel. Nous laissons une nuit d'escale quand le programme le permet.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Les Fidji vivent à douze heures d'avance sur le méridien de Greenwich et n'appliquent pas l'heure d'été. Comptez dix heures d'avance sur la France en été et onze heures en hiver : quand il est vingt heures à Paris en juillet, il est six heures du matin le lendemain à Nadi. Le décalage se fait sentir à l'arrivée, et il demande une première journée calme.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est le dollar fidjien. Comptez environ deux dollars et demi pour un euro. Les cartes bancaires sont largement utilisées dans les zones touristiques, les hôtels et les centres de plongée. Les espèces restent recommandées dans les villages et les zones isolées, où les petits commerces les privilégient souvent : gardez de quoi régler le marché, les taxis, les guides et les dons remis aux villages que l'on visite.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont dispensés de visa préalable : un permis visiteur est délivré à l'arrivée, pour un séjour touristique de quatre mois au maximum. Un billet de retour ou de continuation est demandé, et le passeport doit rester valable au moins six mois après la date prévue de retour. La vigilance porte surtout sur les escales. Un transit par les États-Unis impose l'autorisation ESTA, obtenue en ligne avant le départ. Pour l'Australie, un Français peut transiter sans visa jusqu'à huit heures, à condition de disposer d'un billet confirmé, de rester dans la zone de transit aérien et de ne pas franchir l'immigration : dès qu'il faut récupérer et réenregistrer les bagages, un visa peut devenir nécessaire. Pour la Nouvelle-Zélande, l'autorisation NZeTA est exigée même en simple transit à Auckland.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est exigée pour entrer aux Fidji depuis la France. Un certificat de vaccination contre la fièvre jaune peut en revanche être demandé selon le pays de provenance, ce qui dépend de l'escale retenue. Il est recommandé d'être à jour du calendrier vaccinal français, l'Institut Pasteur conseillant par ailleurs l'hépatite A ; la typhoïde concerne davantage les séjours prolongés ou dans des conditions d'hygiène précaires. Il n'y a pas de paludisme dans l'archipel. La dengue, elle, circule bien aux Fidji et mérite une vraie vigilance : la protection contre les moustiques reste la précaution la plus utile, en journée comme en fin d'après-midi.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche s'étend de mai à octobre, avec un alizé régulier, un ciel dégagé et une mer lisible pour la plongée. Nous privilégions mai, juin, septembre et octobre : la lumière est belle, les raies manta sont particulièrement présentes au large des Yasawa, et les îles sont moins fréquentées que pendant les vacances australiennes de juillet et d'août. La saison cyclonique court principalement de novembre à avril, avec un pic entre janvier et mars.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le pays compte trois langues officielles principales : l'anglais, l'iTaukei et le Fiji Hindi. L'anglais est largement utilisé dans le tourisme et l'administration, et se parle partout, y compris dans les villages. L'iTaukei reste la langue du quotidien pour une grande partie de la population, le Fiji Hindi celle des descendants des travailleurs venus d'Inde. Deux mots suffisent à ouvrir une conversation : bula pour saluer, vinaka pour remercier.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et chaud toute l'année, avec des températures qui varient peu, généralement entre vingt-deux et trente et un degrés, et une eau autour de vingt-sept. L'archipel se divise en deux versants : la côte ouest de Viti Levu, celle de Nadi, des Mamanuca et des Yasawa, est généralement plus sèche et ensoleillée, tandis que la côte est et Taveuni reçoivent bien davantage de pluie, ce qui explique la densité de leur forêt. Les pluies de la saison humide ne sont pas toujours brèves : certaines journées restent couvertes du matin au soir.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Fidji. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/fidji/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure aux Fidji entre les Mamanuca, les Yasawa et Kadavu",
            "Adresses confidentielles aux Fidji : villages des hautes terres et tables de chefs",
            "Hébergements aux Fidji : Laucala Island, Kokomo Private Island et Six Senses Fiji",
            "Conciergerie privée 24/7 pour un séjour aux Fidji",
            "Expériences aux Fidji : plongée sur le Great Astrolabe Reef et grottes de Sawa-i-Lau",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Fidji",
      heading: "Des Mamanuca aux îles Lau",
      description:
        "Le pays se parcourt par archipels, et chacun demande son temps de trajet. Nous plaçons les étapes pour que les transferts servent le voyage au lieu de le découper.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Les Mamanuca",
          description:
            "L'archipel le plus proche de Nadi, atteint en vingt minutes de bateau rapide. Malolo, Monuriki et leurs voisines alignent des plages abritées et un récif franchissable à la nage. C'est là que se posent les séjours courts et les arrivées de nuit.",
          image: {
            src: "/destination/fidji/map-mamanuca.png",
            alt: "L'île de Malolo et son lagon dans l'archipel des Mamanuca aux Fidji",
          },
          // TODO: verify coords
          coordinates: { lat: -17.7667, lng: 177.1667 },
        },
        {
          title: "Les Yasawa",
          description:
            "Une chaîne d'îles volcaniques qui remonte vers le nord-ouest, sèche et découpée. On nage dans les grottes de Sawa-i-Lau, et le passage de Drawaqa voit remonter les raies manta de mai à octobre, à quelques mètres du rivage.",
          image: {
            src: "/destination/fidji/map-yasawa.png",
            alt: "Les crêtes et les plages de l'archipel des Yasawa aux Fidji",
          },
          // TODO: verify coords
          coordinates: { lat: -16.85, lng: 177.45 },
        },
        {
          title: "Taveuni et le Rainbow Reef",
          description:
            "L'île-jardin du pays, couverte de forêt et traversée de cascades, dont celles de Bouma. Le détroit de Somosomo qui la sépare de Vanua Levu abrite le Rainbow Reef et le Great White Wall, un tombant tapissé de coraux mous pâles.",
          image: {
            src: "/destination/fidji/map-taveuni.png",
            alt: "La cascade de Bouma dans la forêt de Taveuni aux Fidji",
          },
          // TODO: verify coords
          coordinates: { lat: -16.85, lng: 179.97 },
        },
        {
          title: "Kadavu et le Great Astrolabe Reef",
          description:
            "L'île se rejoint en avion ou en hydravion, et la route s'arrête vite : on circule ensuite en bateau. Le Great Astrolabe Reef la ceinture sur des dizaines de kilomètres, avec ses canaux où passent les mantas et ses pentes de corail dur.",
          image: {
            src: "/destination/fidji/map-kadavu.png",
            alt: "Le Great Astrolabe Reef au large de Kadavu aux Fidji",
          },
          // TODO: verify coords
          coordinates: { lat: -19.05, lng: 178.2 },
        },
        {
          title: "Le lagon de Beqa",
          description:
            "Une île volcanique au sud de Viti Levu, connue pour deux choses : la marche sur le feu des Sawau, et la réserve marine où huit espèces de requins se croisent sur un seul site. Les villages ont cédé leurs droits de pêche pour la créer.",
          image: {
            src: "/destination/fidji/map-beqa.png",
            alt: "Le lagon de Beqa et son récif au sud de Viti Levu aux Fidji",
          },
          // TODO: verify coords
          coordinates: { lat: -18.4, lng: 178.13 },
        },
        {
          title: "Les îles Lau",
          description:
            "L'archipel le plus oriental et le moins fréquenté du pays, à deux jours de mer de Savusavu. Vanua Balavu et sa baie de Bavatu, les îlots de calcaire de Fulaga, les sculpteurs de Kabara : on n'y accède qu'en bateau, sur autorisation.",
          image: {
            src: "/destination/fidji/map-lau.png",
            alt: "Le lagon et les îlots de calcaire de Fulaga dans les îles Lau aux Fidji",
          },
          // TODO: verify coords
          coordinates: { lat: -17.2, lng: -178.95 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage aux Fidji",
      description:
        "Voici quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir le bon archipel et comprendre comment le pays se vit une fois sur place.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Choisir son archipel",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La distance depuis Nadi change tout, du temps de transfert au nombre de bateaux croisés",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les Mamanuca sont à vingt minutes de bateau de Nadi, les Yasawa
                à une heure d&apos;hydravion, Taveuni et Kadavu à un vol
                régional, les Lau à deux jours de mer. Plus on s&apos;éloigne,
                moins on croise de monde, et plus il faut consacrer de journées
                au trajet lui-même.
              </p>
              <p>
                Deux semaines permettent de tenir deux archipels sans courir,
                trois si l&apos;un des sauts se fait en hydravion privé. En
                dessous de dix nuits, nous conseillons de rester sur un seul
                archipel et de le connaître vraiment.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous construisons l&apos;ordre des étapes en fonction de
                l&apos;heure d&apos;arrivée du long-courrier, pour que la
                première nuit ne se passe pas dans un transfert.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer d'une île à l'autre",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Hydravion, avion régional ou bateau : chaque saut a sa contrainte",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;hydravion est la plus belle façon de rejoindre une île
                privée, et la plus rapide : il se pose devant la plage.
                L&apos;hélicoptère joue le même rôle là où il n&apos;y a pas
                d&apos;eau abritée. Les deux volent de jour uniquement, ce qui
                commande l&apos;heure des correspondances. Les avions régionaux
                desservent Taveuni, Savusavu, Kadavu et Labasa depuis Nadi et
                Suva, avec une franchise de bagages réduite.
              </p>
              <p>
                Le bateau reste le moyen le plus juste pour les Yasawa et pour
                les Lau, parce que le paysage se comprend depuis la mer. Les
                traversées de fin de journée se négocient parfois avec la houle
                d&apos;alizé.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les hydravions et les vols régionaux avant votre
                arrivée, et nous prévoyons la marge de bagages que ces appareils
                imposent.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir, et la saison des cyclones",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison sèche va de mai à octobre, et nous préférons ses deux extrémités",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De mai à octobre, l&apos;alizé souffle régulièrement, le ciel
                reste dégagé et la visibilité sous l&apos;eau est à son
                meilleur. Nous privilégions mai, juin, septembre et octobre :
                les raies manta passent au large des Yasawa et les îles sont
                plus calmes que pendant les vacances australiennes de juillet et
                d&apos;août.
              </p>
              <p>
                La saison humide court de novembre à avril, et la saison
                cyclonique avec elle, son pic se situant entre janvier et mars.
                Ce sont aussi les mois les plus verts, et certains les
                choisissent en connaissance de cause, avec une assurance
                adaptée.
              </p>
            </div>
          ),
        },
        {
          title: "Le sevusevu et les usages du village",
          cardEyebrow: "Coutumes",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On n'entre pas dans un village fidjien sans avoir été présenté au chef",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La visite d&apos;un village commence par le sevusevu : on offre
                au chef une racine de yaqona, le kava, et l&apos;on attend
                d&apos;être accepté avant de circuler. La coupe passe ensuite
                dans l&apos;ordre des rangs. On frappe une fois dans ses mains
                avant de boire, trois fois après.
              </p>
              <p>
                Quelques règles simples valent partout : épaules et genoux
                couverts dans le village, chapeau et lunettes de soleil retirés,
                chaussures laissées à l&apos;entrée de la maison, et la tête de
                son hôte que l&apos;on ne touche jamais. Le dimanche est
                consacré à l&apos;office et au repos : les villages se taisent,
                et les visites ne s&apos;y font pas.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous préparons la racine, prévenons le chef à l&apos;avance et
                venons avec un guide du village, pour que la visite soit
                attendue plutôt que subie.
              </p>
            </div>
          ),
        },
        {
          title: "Le récif, les mantas et les requins",
          cardEyebrow: "Plongée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Chaque site a sa saison, et le niveau demandé n'est pas le même partout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Great White Wall du détroit de Somosomo se plonge dans le
                courant et demande de l&apos;expérience. Le Great Astrolabe
                Reef, au large de Kadavu, offre des pentes accessibles aux
                plongeurs débutants comme des canaux où passent les mantas. À
                Beqa, la plongée avec les requins se fait sans cage, encadrée
                par les équipes qui ont créé la réserve.
              </p>
              <p>
                Les raies manta du passage de Drawaqa, dans les Yasawa, se
                nagent avec un simple masque et un tuba, de mai à octobre, quand
                le courant les amène. Le rendez-vous se donne le matin, selon la
                marée du jour.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un paréo pour les villages, des chaussures fermées pour le récif",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les journées se passent en maillot, les soirées restent simples,
                un peu plus habillées sur les îles privées. Prévoyez un sulu, ce
                paréo que tout le monde porte, pour couvrir les jambes dans les
                villages et à l&apos;église, ainsi qu&apos;un haut à manches.
              </p>
              <p>
                Ajoutez des chaussures d&apos;eau fermées pour marcher sur le
                platier, un lycra à manches longues contre le soleil, une
                protection solaire sans oxybenzone pour le récif, une protection
                contre les moustiques pour la fin de journée, et un vêtement de
                pluie léger. Les appareils régionaux limitent souvent le bagage
                à quinze ou vingt kilos.
              </p>
            </div>
          ),
        },
        {
          title: "Venir avec des enfants",
          cardEyebrow: "Famille",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les lagons peu profonds des Mamanuca et l'accueil fidjien font le reste",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les Fidji se vivent très bien en famille. Les lagons des
                Mamanuca et des Yasawa sont peu profonds et abrités, le récif se
                découvre avec un masque depuis la plage, et les équipes des
                maisons prennent soin des enfants d&apos;une manière qui étonne
                souvent les parents.
              </p>
              <p>
                Le vol reste long : nous coupons le trajet par une nuit
                d&apos;escale, et nous gardons les deux premières journées
                calmes, le temps que le décalage se dissipe. Les sauts en
                hydravion, courts et bas, passent mieux que les traversées en
                bateau rapide.
              </p>
            </div>
          ),
        },
        {
          title: "La santé et l'eau sur place",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les soins complets sont à Suva et Nadi, et les îles éloignées dépendent d'une évacuation",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les structures médicales complètes se trouvent à Suva et à Nadi.
                Sur les petites îles, la maison dispose au mieux d&apos;une
                infirmerie, et tout le reste passe par une évacuation aérienne,
                de jour. C&apos;est la raison pour laquelle nous vérifions le
                contrat d&apos;assistance avant le départ.
              </p>
              <p>
                L&apos;eau du robinet est traitée à Nadi et à Suva. Ailleurs, on
                boit de l&apos;eau en bouteille ou filtrée par la maison. La
                dengue circule pendant la saison humide, et la leptospirose
                après les fortes pluies : on évite alors les baignades en
                rivière.
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
            "Nous étions partis pour le lagon et nous sommes rentrés en parlant du village. La racine de kava, le chef qui nous fait asseoir, les enfants qui chantent : c'est ce dont nous parlons encore.",
          image: {
            src: "/destination/fidji/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Fidji, septembre 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "L'hydravion s'est posé devant la plage et l'équipe nous attendait dans l'eau. Nous n'avons pas eu à nous occuper d'un seul transfert en douze jours.",
          image: {
            src: "/destination/fidji/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Fidji, îles privées, juin 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Personne ne nous avait dit ce qu'il y avait derrière la falaise de Sawa-i-Lau. On nage dans le noir quelques secondes, et l'on ressort dans une salle où le jour descend du plafond : nous en parlons encore.",
          image: {
            src: "/destination/fidji/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Fidji, Yasawa, octobre 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir aux Fidji ?",
          answer:
            "La saison sèche s'étend de mai à octobre, avec un alizé régulier, un ciel dégagé et la meilleure visibilité sous l'eau. Nous privilégions mai, juin, septembre et octobre : les raies manta sont particulièrement présentes au large des Yasawa et les îles sont plus calmes que pendant les vacances australiennes de juillet et d'août. La saison humide court de novembre à avril, et la saison cyclonique avec elle, son pic se situant entre janvier et mars. Ce sont les mois les plus verts, et ils se choisissent en connaissance de cause, avec une assurance adaptée.",
        },
        {
          question: "Comment se rendre aux Fidji depuis Paris ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris. Nadi, la porte d'entrée du pays, se rejoint avec une ou deux escales : Hong Kong et Singapour sont reliées directement à Nadi, comme le sont Los Angeles, San Francisco, Sydney et Auckland. Comptez environ 28 à 34 heures de trajet au total, et davantage sur certaines combinaisons d'escales. Reste ensuite le dernier tronçon vers l'île réservée, en avion régional, en hydravion, en hélicoptère ou en bateau selon l'archipel. Nous laissons une nuit d'escale quand le programme le permet, et nous tenons compte du fait que les hydravions et les hélicoptères ne volent que de jour.",
        },
        {
          question: "Faut-il un visa pour aller aux Fidji ?",
          answer:
            "Les ressortissants français sont dispensés de visa préalable : un permis visiteur est délivré à l'arrivée, pour un séjour touristique de quatre mois au maximum. Un billet de retour ou de continuation est demandé, et le passeport doit rester valable au moins six mois après la date prévue de retour. La vigilance porte surtout sur les escales. Un transit par les États-Unis impose l'autorisation ESTA, obtenue en ligne avant le départ. Pour l'Australie, un Français peut transiter sans visa jusqu'à huit heures, à condition de disposer d'un billet confirmé, de rester dans la zone de transit aérien et de ne pas franchir l'immigration : dès qu'il faut récupérer et réenregistrer les bagages, un visa peut devenir nécessaire. Pour la Nouvelle-Zélande, l'autorisation NZeTA est exigée même en simple transit à Auckland. Nous vérifions ces formalités avec vous une fois l'itinéraire aérien arrêté.",
        },
        {
          question: "Que faire aux Fidji en deux semaines ?",
          answer:
            "Deux semaines permettent de tenir deux archipels sans courir. Une première partie sur la côte ouest et dans les Yasawa, avec les grottes de Sawa-i-Lau, le passage des raies manta de Drawaqa et une journée dans les hautes terres de Ba pour le sevusevu à Navala. Une seconde partie plus au large : Kadavu et le Great Astrolabe Reef pour la plongée, ou Taveuni et le Rainbow Reef pour la forêt et les cascades de Bouma. Ceux qui veulent aller au bout ajoutent une navigation vers les Lau, qui demande à elle seule huit à dix jours.",
        },
        {
          question: "Les Fidji sont-elles adaptées aux familles ?",
          answer:
            "Oui, et c'est l'une des destinations du Pacifique les plus faciles à vivre avec des enfants. Les lagons des Mamanuca et des Yasawa sont peu profonds et abrités, le récif se découvre avec un simple masque depuis la plage, et les équipes des maisons s'occupent des enfants avec une attention qui surprend souvent les parents. La seule vraie contrainte est le trajet : nous le coupons par une nuit d'escale et nous gardons les deux premières journées calmes, le temps que le décalage de dix heures se dissipe.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux Fidji ?",
          answer:
            "Le budget dépend de trois choses : la maison choisie, la saison, et le nombre de sauts en hydravion ou en avion privé. Une île réservée en exclusivité et une villa dans les Mamanuca ne se chiffrent pas de la même façon, et le mois d'août se situe nettement au-dessus de mai ou d'octobre à confort égal. Les transferts pèsent plus lourd ici que dans la plupart des destinations, parce que chaque étape se rejoint par l'air ou par la mer. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "On part en Polynésie française quand on a aimé les lagons et que l'on veut y ajouter les atolls, aux Maldives quand on cherche la même eau avec un vol plus court, et aux Seychelles quand on préfère le granit et la forêt à la barrière de corail.",
      slugs: ["polynesie", "maldives", "seychelles"],
    },
  ],
};
