import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "islande",
  name: "Islande",
  country: "Islande",
  genitive: "de l'Islande",
  continentSlug: "europe",
  placeKind: "country",
  blurb: "Côte sud, Vatnajökull, Jökulsárlón, Heimaey",
  keywords: [
    "islande",
    "reykjavik",
    "cote sud",
    "jokulsarlon",
    "vatnajokull",
    "thorsmork",
    "heimaey",
    "aurores boreales",
  ],
  metaTitle: "Islande, voyage sur mesure",
  metaDescription:
    "Voyage en Islande sur mesure : côte sud, glaciers du Vatnajökull, grottes de glace et plages noires. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Islande",
      heading: "Le sable est noir et l'eau sort chaude du sol",
      description:
        "En Islande, la terre est encore en activité. Dans une grande partie du pays, l'eau qui sort du sol est naturellement chaude et sert à chauffer les maisons. Sur la côte sud, le sable des plages est noir. Il vient de la lave, broyée par la mer. En juin, il ne fait jamais complètement nuit.",
      images: [
        {
          src: "/destination/islande/hero-1.webp",
          alt: "Plage de sable noir et blocs de glace échoués sur la côte sud de l'Islande",
        },
        {
          src: "/destination/islande/hero-2.webp",
          alt: "Langue glaciaire descendant du Vatnajökull vers la plaine",
        },
        {
          src: "/destination/islande/hero-3.webp",
          alt: "Maison isolée au pied d'un volcan couvert de neige",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Taïna, spécialiste de l'Islande, reste votre interlocutrice",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina", // TODO: verify collaborateurSlug (Taïna suit déjà la Norvège)
        // TODO: verify quote attribution
        quote:
          "L'Islande tient sur une seule route, et c'est ce qui la rend si agréable à parcourir. On marche sur un glacier le matin, on se baigne dans une source chaude l'après-midi, et le soir on dîne à vingt minutes de là. En hiver, les grottes de glace s'ouvrent sous le glacier et le ciel devient assez sombre pour les aurores. En été, les pistes de l'intérieur se libèrent et les nuits restent claires. C'est le seul pays que je connaisse où l'on peut revenir une deuxième fois et avoir l'impression de découvrir un autre endroit.",
        role: "Travel Designer · Islande",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Trois maisons sur la même route",
          description:
            "Deux adresses autour de Hvolsvöllur, une troisième au pied du Vatnajökull. Nous les retenons pour leur emplacement sur la route 1 et pour la taille de leurs équipes, pas pour leur classement.",
        },
        {
          iconName: "sparkles",
          title: "Un décor différent chaque jour",
          description:
            "Les cascades, la vallée de Thorsmörk, les plages noires et le lagon se rejoignent depuis deux bases seulement. On change de décor chaque jour sans refaire ses valises.",
        },
        {
          iconName: "star",
          title: "Des guides de glacier",
          description:
            "Motoneige, marche sur glacier et grottes de glace se réservent auprès d'équipes locales, en privé. On part à quelques-uns, à l'heure qui vous arrange, avec deux guides sur la glace.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une seule route fait le tour de l'île",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Islande commence par le choix d'un rythme. Une seule grande route fait le tour complet de l'île, la route 1. On peut la suivre entièrement, ou n'en parcourir qu'une portion et rester plusieurs nuits au même endroit. Nos itinéraires se concentrent presque toujours sur la côte sud. C'est la partie du pays où les glaciers, les cascades et les plages noires se succèdent le long de la même route.",
        "Sur cette côte, on roule avec la mer d'un côté et les glaciers de l'autre. Le plus grand d'entre eux s'appelle le Vatnajökull. C'est le glacier le plus volumineux d'Europe. Plusieurs langues de glace en descendent jusqu'à la plaine. Au bout de l'une d'elles s'est formé un lac, le Jökulsárlón. Des blocs de glace s'en détachent et flottent parfois plusieurs saisons avant de rejoindre la mer. La marée en ramène une partie sur la plage voisine, où ils restent posés sur le sable noir jusqu'à fondre.",
        "Au centre de l'île s'étendent les hautes terres. C'est une zone sans village ni route goudronnée, que l'on rejoint en été par des pistes et quelques rivières à gué, avec un chauffeur qui connaît le terrain. On y trouve des vallées aux roches colorées et des sources chaudes en pleine nature. L'hiver, la côte prend le relais. La lumière y reste basse toute la journée, celle que les photographes appellent l'heure dorée, et le ciel devient assez sombre pour voir les aurores.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/islande/full-image.webp",
        alt: "Grande cascade tombant d'une falaise couverte de mousse, côte sud de l'Islande",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La côte sud",
      heading: "Des volcans encore en activité, sous la glace",
      theme: "light",
      paragraphs: [
        "En islandais, le mot jökull veut dire glacier. Il revient dans presque tous les noms de la région, parce que plusieurs volcans du sud sont recouverts d'une calotte de glace. C'est le cas de l'Eyjafjallajökull. Son éruption de 2010 a projeté une grande quantité de cendres dans l'atmosphère et interrompu le trafic aérien européen pendant plusieurs jours. Les fermes situées au pied du volcan ont été recouvertes de cendre. Elles sont toujours exploitées aujourd'hui, et certaines racontent cet épisode aux visiteurs.",
        "Au large de cette côte se trouve un petit archipel, les îles Vestmann. La principale s'appelle Heimaey. Dans la nuit du 23 janvier 1973, une fissure s'est ouverte à la sortie du village. Les habitants ont été évacués en quelques heures par la flotte de pêche, qui se trouvait au port ce soir-là à cause d'une tempête. La lave a enseveli plusieurs centaines de maisons et menacé d'obstruer l'entrée du port. Les Islandais l'ont arrosée d'eau de mer pendant des semaines pour la refroidir et la ralentir. Le port fonctionne encore.",
      ],
      images: [
        {
          src: "/destination/islande/split-1.webp",
          alt: "Ferme islandaise au pied du volcan Eyjafjallajökull couvert de neige",
        },
        {
          src: "/destination/islande/split-2.webp",
          alt: "Maisons de Heimaey devant le cône volcanique de l'Eldfell",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/islande/xp-motoneige-glacier-1.webp",
          alt: "Motoneiges sur la calotte glaciaire du Mýrdalsjökull en Islande",
        },
        right: {
          src: "/destination/islande/xp-motoneige-glacier-2.webp",
          alt: "Intérieur d'une grotte de glace bleue striée de cendre volcanique",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une matinée sur le glacier, une heure sous la glace",
        columns: [
          "Le départ se fait en fin de matinée, depuis le bord du Mýrdalsjökull. Un véhicule tout-terrain monte jusqu'au plateau, puis chacun prend une motoneige. En haut, il n'y a plus de repère : ni arbre, ni rocher, ni bâtiment. On roule une heure sur une étendue blanche, avec un guide devant et un guide derrière. Par temps clair, on aperçoit la côte et la mer en contrebas. Le groupe reste privé et l'heure de départ se choisit avec le guide, la veille au soir.", // TODO: verify glacier et opérateur retenus
          "L'après-midi se passe sous la glace. On descend dans une grotte creusée par l'eau de fonte, équipé de crampons et d'un casque. La lumière y est bleue, parce que la glace comprimée ne laisse plus passer que cette couleur. Des bandes noires traversent les parois. Ce sont des couches de cendre, déposées par les éruptions passées, puis recouvertes par la neige des hivers suivants. Chaque bande correspond à une éruption. Le guide sait les dater.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Islande",
      heading: "Trois sorties qui dépendent de la mer",
      description:
        "Une traversée vers les îles Vestmann, un kayak entre les blocs de glace dans la vallée de Thorsmörk, une sortie d'observation des baleines. Les trois se font à quelques-uns, avec des équipages du coin.",
      slugs: [
        "iles-westman-eldfell",
        "kayak-paddle-thorsmork",
        "observation-baleines-islande",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Islande",
      heading: "Où séjourner",
      description:
        "Deux maisons autour de Hvolsvöllur, à portée des cascades et de la vallée de Thorsmörk. Une troisième face au Vatnajökull, à vingt minutes du lagon.",
      slugs: ["umi-hotel", "skalakot", "hotel-jokulsarlon"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Islande",
      description:
        "Temps de vol, formalités, monnaie, saisons et météo : l'essentiel pour choisir vos dates avant de choisir votre itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 3 heures 30 de vol direct entre Paris et Keflavík. L'aéroport se trouve à 50 kilomètres de Reykjavík, soit trois quarts d'heure de route. Nos premières étapes de la côte sud sont ensuite à deux heures de voiture.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'Islande vit à l'heure GMT toute l'année et ne change jamais d'heure. Le décalage avec la France est donc de deux heures en été et d'une heure en hiver. La fatigue de voyage reste nulle.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est la couronne islandaise. La question du change ne se pose presque jamais : la carte bancaire est acceptée partout, jusque dans les piscines de village et les stations-service automatiques. Il est inutile d'emporter des espèces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "L'Islande appartient à l'espace Schengen sans être membre de l'Union européenne. Aucun visa n'est nécessaire pour les ressortissants français. Une carte nationale d'identité en cours de validité suffit.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est exigée et les vaccins universels à jour suffisent. L'eau du robinet est excellente et se boit partout. L'eau chaude sent légèrement le soufre : elle arrive directement des nappes géothermiques, sans avoir besoin d'être chauffée.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De juin à août pour la lumière continue, les hautes terres et les sorties en mer. De novembre à mars pour les grottes de glace et les aurores boréales. Mai et septembre réunissent de longues journées et des sites très calmes, les hautes terres s'ouvrant à partir de la mi-juin.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'islandais est la langue officielle. L'anglais se parle couramment dans tout le pays, y compris chez les guides de glacier et les patrons de bateau. Le français reste rare en dehors de Reykjavík.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le Gulf Stream adoucit l'île malgré la latitude. À Reykjavík, janvier tourne autour de zéro degré et juillet autour de 13 degrés. Le ciel change vite : une averse, une éclaircie par-dessous, puis un arc-en-ciel au-dessus de la plaine. C'est ce qui rend la lumière islandaise si particulière.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Voyage sur mesure en Islande",
      description:
        "Plusieurs expertises interviennent sur chaque dossier islandais. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'à votre retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: [
        {
          title: "Création d'itinéraires",
          description:
            "Faire le tour de l'île ou rester sur la côte sud. Nous décidons de ce que l'on garde, de ce que l'on abandonne, et du nombre de nuits par étape.",
          image: {
            src: "/destination/islande/bento-map.webp",
            alt: "Carte d'itinéraire le long de la côte sud de l'Islande",
          },
          tone: "dark",
        },
        {
          title: "Adresses confidentielles",
          description:
            "Tables de ferme sous l'Eyjafjallajökull, bains géothermiques sans panneau au bord de la route, dîners servis dans une grotte. Ces adresses ne se réservent pas en ligne.",
          image: {
            src: "/destination/islande/bento-adresses.webp",
            alt: "Table dressée dans une ferme islandaise face à la plaine",
          },
        },
        {
          title: "Hébergements hors réseaux",
          description:
            "Fermes équestres et maisons de campagne, choisies pour leur emplacement sur la route et pour la distance qui les sépare du premier lampadaire.",
          image: {
            src: "/destination/islande/bento-hebergements.webp",
            alt: "Chambre vitrée ouverte sur un champ de lave et un glacier",
          },
        },
        {
          title: "Conciergerie 24/7",
          description:
            "Un seul interlocuteur du premier échange jusqu'au retour. Si le ciel se dégage à minuit, on vous prévient pour les aurores. Si la mer est belle plus tôt que prévu, on avance la sortie en bateau.",
          image: {
            src: "/destination/islande/bento-conciergerie.webp",
            alt: "Conseillère Exuma en conversation téléphonique avec un voyageur",
          },
        },
        {
          title: "Expériences immersives",
          description:
            "Motoneige sur la calotte glaciaire, grotte de glace avec un guide, kayak entre les blocs de glace de Thorsmörk. Chaque sortie se réserve en direct et en petit groupe.",
          image: {
            src: "/destination/islande/bento-experiences.webp",
            alt: "Kayak passant entre des blocs de glace dans la vallée de Thorsmörk",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les grandes étapes en Islande",
      heading: "Six lieux autour desquels s'organisent nos itinéraires",
      description:
        "Tous se trouvent sur la côte sud ou juste au large. La plupart de nos voyages se construisent en deux bases, l'une autour de Hvolsvöllur, l'autre au pied du Vatnajökull.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Seljalandsfoss",
          description:
            "Cette cascade tombe d'une ancienne falaise marine, aujourd'hui située à plusieurs kilomètres de la mer. Un sentier passe derrière le rideau d'eau, ce qui est rare en Islande. On la voit alors de l'intérieur, en contre-jour. On en ressort trempé et ravi.",
          image: {
            src: "/destination/islande/map-seljalandsfoss.webp",
            alt: "Cascade de Seljalandsfoss et sentier passant derrière le rideau d'eau",
          },
          coordinates: { lat: 63.6156, lng: -19.9886 },
        },
        {
          title: "La vallée de Thorsmörk",
          description:
            "Cette vallée est encerclée par trois glaciers. On y entre en véhicule surélevé, en traversant la rivière Krossá à gué, ce qui fait déjà partie du plaisir. Peu de monde y accède, et l'on y marche entre bouleaux nains et gorges de roche noire.",
          image: {
            src: "/destination/islande/map-thorsmork.webp",
            alt: "Vallée de Thorsmörk entourée de glaciers en Islande",
          },
          coordinates: { lat: 63.6864, lng: -19.5069 }, // Langidalur, coeur de la vallée
        },
        {
          title: "Vík et la plage de Reynisfjara",
          description:
            "Le village de Vík est le plus au sud du pays. Sa plage est faite de sable noir et bordée de colonnes de basalte à section hexagonale, comme un orgue posé au bord de l'eau. Depuis le promontoire, on voit arriver les vagues de l'Atlantique de très loin.",
          image: {
            src: "/destination/islande/map-vik.webp",
            alt: "Colonnes de basalte et sable noir de la plage de Reynisfjara à Vík",
          },
          coordinates: { lat: 63.4054, lng: -19.0448 },
        },
        {
          title: "Skaftafell et le Vatnajökull",
          description:
            "Cette ancienne réserve est aujourd'hui rattachée au parc national du Vatnajökull. C'est le point de départ des marches sur glacier. Vingt minutes de marche facile depuis le parking mènent au pied du Skaftafellsjökull.",
          image: {
            src: "/destination/islande/map-skaftafell.webp",
            alt: "Langue glaciaire du Vatnajökull vue depuis Skaftafell",
          },
          coordinates: { lat: 64.0166, lng: -16.9666 },
        },
        {
          title: "Le lagon de Jökulsárlón",
          description:
            "Ce lac n'existait pas il y a un siècle. Il s'est formé à mesure que le glacier reculait, et il grandit encore. Les blocs qui s'en détachent passent sous le pont de la route 1 avant de rejoindre la mer.",
          image: {
            src: "/destination/islande/map-jokulsarlon.webp",
            alt: "Blocs de glace flottant sur le lagon de Jökulsárlón en Islande",
          },
          coordinates: { lat: 64.0784, lng: -16.2306 },
        },
        {
          title: "Heimaey et les îles Vestmann",
          description:
            "L'île se rejoint par un ferry depuis Landeyjahöfn. Le volcan Eldfell y est sorti de terre en 1973, à la sortie du village. Ses pentes accueillent aujourd'hui l'une des plus grandes colonies de macareux du monde.",
          image: {
            src: "/destination/islande/map-heimaey.webp",
            alt: "Falaises et sommet vert de Heimaey vus depuis la mer, îles Vestmann",
          },
          coordinates: { lat: 63.4427, lng: -20.2734 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Islande",
      description:
        "Huit observations de terrain qui expliquent pourquoi nous plaçons une étape à une date plutôt qu'à une autre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois couches, un vrai coupe-vent, et un maillot de bain en toute saison",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La règle tient en trois couches : laine mérinos contre la peau,
                polaire ou duvet léger au milieu, veste imperméable et
                coupe-vent par-dessus. Le coton est à éviter, car il garde
                l&apos;humidité. Prévoyez des chaussures montantes à semelle
                crantée, même en été. Les sentiers de bord de cascade sont
                toujours mouillés et les rochers volcaniques sont coupants.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Emportez un maillot de bain, quelle que soit la saison. Chaque
                village possède sa piscine chauffée par géothermie, ouverte
                toute l&apos;année, et c&apos;est le principal lieu de vie
                sociale du pays.
              </p>
            </div>
          ),
        },
        {
          title: "La lumière change vite",
          cardEyebrow: "Météo",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Plusieurs ambiances dans la même journée, et des arcs-en-ciel au-dessus de la plaine",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                En Islande, la lumière ne reste jamais la même très longtemps.
                Une averse passe, le soleil revient par-dessous, et un
                arc-en-ciel se pose au-dessus des champs de lave. C&apos;est ce
                qui donne aux paysages islandais cette allure si particulière,
                à toute heure et en toute saison.
              </p>
              <p>
                Une veste coupe-vent suffit à profiter de tout. Le seul vrai
                conseil est de ne pas trop remplir la journée : on garde du
                temps pour s&apos;arrêter quand la lumière devient belle.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons deux ou trois moments forts par jour, jamais plus,
                et vous êtes conduit d&apos;un point à l&apos;autre. Le temps
                qui reste vous appartient.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir sa saison",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'été pour la lumière et les hautes terres, l'hiver pour la glace",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De juin à août, il fait clair presque toute la nuit. Les pistes
                de l&apos;intérieur sont ouvertes, les bateaux sortent tous les
                jours et l&apos;on peut marcher tard le soir. C&apos;est la
                saison la plus généreuse en lumière.
              </p>
              <p>
                De novembre à mars, les journées sont plus courtes et la glace
                est stable. C&apos;est la saison des grottes de glace, et celle
                où le ciel devient assez sombre pour les aurores.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Mai et septembre réunissent de longues journées et des sites
                très calmes. Les hautes terres, elles, s&apos;ouvrent à partir
                de la mi-juin.
              </p>
            </div>
          ),
        },
        {
          title: "Les grottes de glace",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Chaque hiver dessine de nouvelles grottes sous le glacier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une grotte de glace naturelle est creusée par l&apos;eau de
                fonte qui circule sous le glacier. De novembre à mars, le froid
                arrête cet écoulement et les guides ouvrent les plus belles. À
                l&apos;intérieur, la lumière est bleue et les parois sont
                striées de cendre volcanique.
              </p>
              <p>
                Le glacier bouge en permanence, si bien que les grottes ne sont
                jamais les mêmes d&apos;un hiver à l&apos;autre. Celle que vous
                visiterez n&apos;aura jamais été vue sous cette forme.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                En dehors de cette période, la grotte du Katla, dans le
                Mýrdalsjökull, se visite toute l&apos;année. On y monte en
                véhicule tout-terrain depuis la côte.
              </p>
            </div>
          ),
        },
        {
          title: "Les hautes terres",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vallées colorées et sources chaudes, de la mi-juin aux premières neiges",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le centre de l&apos;île est inhabité. On y accède par des pistes
                appelées pistes F, qui traversent quelques rivières à gué. Elles
                s&apos;ouvrent selon la fonte, en général entre la mi-juin et le
                début juillet.
              </p>
              <p>
                C&apos;est là que se trouve Landmannalaugar et ses montagnes de
                rhyolite, une roche jaune, rose et verte selon la lumière. Une
                source chaude coule au pied du campement, et l&apos;on peut
                marcher des heures sans croiser personne.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous confions ces journées à un chauffeur-guide local avec son
                propre véhicule surélevé. La vallée de Thorsmörk se rejoint
                ainsi depuis Hvolsvöllur, sans changer d&apos;hébergement.
              </p>
            </div>
          ),
        },
        {
          title: "Les piscines de village",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un bassin à trente-huit degrés dans chaque village, ouvert toute l'année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Chaque village islandais possède sa piscine chauffée par
                géothermie, ouverte toute l&apos;année. C&apos;est le principal
                lieu de vie du pays. On y discute une heure dans un bassin à
                trente-huit degrés, parfois sous la neige, avec les habitants du
                coin.
              </p>
              <p>
                Ces bassins contiennent très peu de chlore, et leur propreté
                repose donc sur les baigneurs. Chacun se douche entièrement,
                sans maillot, dans les vestiaires avant d&apos;entrer dans
                l&apos;eau. Des panneaux indiquent la marche à suivre.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Demandez à votre hébergement quelle est la piscine la plus
                proche. Celles des villages sont souvent plus agréables, et bien
                plus calmes, que les grands bains connus.
              </p>
            </div>
          ),
        },
        {
          title: "Conduire en Islande",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des ponts à voie unique, du gravier, et une mousse à ne pas écraser",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur la route 1, plusieurs ponts ne comportent qu&apos;une seule
                voie. Le premier arrivé passe, l&apos;autre attend, et cela se
                règle d&apos;un geste de la main. Les routes secondaires sont
                souvent en gravier : on y roule doucement, ce qui laisse le
                temps de regarder.
              </p>
              <p>
                Rouler hors des pistes est interdit partout dans le pays. La
                mousse qui recouvre les champs de lave met plusieurs décennies à
                repousser, et les Islandais y tiennent beaucoup.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Ne calculez jamais un trajet islandais en kilomètres. Comptez en
                heures, arrêts photo compris, et vous ne serez jamais en retard.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucune espèce à changer, et pas de pourboire à calculer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La carte bancaire fonctionne partout, jusque dans les piscines de
                village et les stations-service automatiques. Il est inutile de
                changer des espèces avant de partir.
              </p>
              <p>
                Le pourboire ne fait pas partie des usages, le service étant
                déjà compris. La vie islandaise reste chère, en particulier au
                restaurant : votre travel designer intègre ce point au budget
                dès le premier échange.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Vins et spiritueux se vendent au Vínbúðin, le réseau
                d&apos;État. Repérez celui de votre étape en arrivant, les
                boutiques sont peu nombreuses en dehors des villes.
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
            "Nous avons marché sur un glacier le matin et nous étions dans une source chaude à seize heures, en plein champ de lave. Je n'avais jamais fait deux choses aussi différentes dans la même journée.",
          image: {
            src: "/destination/islande/hero-1.webp",
            alt: "Portrait de Vincent", // TODO: verify
          },
          name: "Vincent", // TODO: verify
          role: "Voyage en couple, mars 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous voulions changer d'hôtel tous les soirs pour tout voir. On nous a conseillé l'inverse, trois nuits au même endroit. C'est la seule raison pour laquelle nous avons fini par voir les aurores.",
          image: {
            src: "/destination/islande/hero-2.webp",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Séjour sur la côte sud, février 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Dans la grotte, la glace est bleue et traversée de bandes noires. Le guide nous a expliqué que chaque bande correspondait à une éruption, et il savait les dater. Je ne m'attendais pas à apprendre quoi que ce soit ce jour-là.",
          image: {
            src: "/destination/islande/hero-3.webp",
            alt: "Portrait de Marc", // TODO: verify
          },
          name: "Marc", // TODO: verify
          role: "Voyage en famille, janvier 2026", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir en Islande ?",
          answer:
            "Tout dépend de ce que vous venez chercher. De juin à août, il fait clair presque toute la nuit, les pistes de l'intérieur sont ouvertes et les bateaux sortent tous les jours. De novembre à mars, la glace est stable : c'est la saison des grottes de glace et des aurores boréales. Mai et septembre réunissent de longues journées et des sites très calmes, les hautes terres s'ouvrant à partir de la mi-juin.",
        },
        {
          question: "Combien de temps dure le vol Paris - Reykjavik ?",
          answer:
            "Comptez environ 3 heures 30 en vol direct entre Paris et l'aéroport de Keflavík. Plusieurs compagnies assurent la liaison toute l'année, avec une offre renforcée en été. Keflavík se situe à 50 kilomètres de Reykjavík, soit trois quarts d'heure de route. Nos premières étapes de la côte sud sont à environ deux heures supplémentaires.",
        },
        {
          question: "Faut-il un visa pour aller en Islande ?",
          answer:
            "Non. L'Islande appartient à l'espace Schengen, même si elle n'est pas membre de l'Union européenne. Une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français. Aucune vaccination n'est exigée.",
        },
        {
          question: "Quand peut-on visiter une grotte de glace en Islande ?",
          answer:
            "De novembre à mars environ, quand le froid arrête l'eau de fonte et stabilise la glace. C'est la saison où les guides ouvrent les plus belles grottes, aux parois bleues striées de cendre volcanique. Le glacier bougeant en permanence, les grottes changent chaque hiver : celle que vous visiterez n'aura jamais été vue sous cette forme. En dehors de cette période, la grotte du Katla, dans le Mýrdalsjökull, se visite toute l'année.",
        },
        {
          question: "Peut-on voir les aurores boréales en Islande ?",
          answer:
            "Oui, entre septembre et mars, quand les nuits sont longues et sombres. Il faut un ciel dégagé, ce qui arrive régulièrement au cœur de l'hiver sur la côte sud. Nous prévoyons plusieurs nuits consécutives au même endroit, dans une maison éloignée des lumières de ville, d'où l'on sort directement pour regarder le ciel. C'est la meilleure façon de multiplier les occasions.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Islande ?",
          answer:
            "Le budget dépend surtout de la saison, du nombre de nuits et des sorties privatisées inscrites à l'itinéraire. Les maisons que nous retenons comptent peu de chambres, il vaut donc mieux s'y prendre tôt pour un séjour d'hiver. Votre travel designer établit une proposition chiffrée et complète après le premier échange, vols, hébergements, guides et transferts compris.",
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
        "D'autres façons de remonter vers le nord, entre glace, forêt et lumière basse.",
      // Les pages Pays-Bas et Finlande n'existent pas encore : la section
      // n'affiche que les destinations déjà enregistrées et les ajoutera
      // automatiquement à leur création.
      slugs: ["norvege", "pays-bas", "finlande"],
    },
  ],
};
