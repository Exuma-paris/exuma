import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "la-grenade",
  name: "La Grenade",
  placeKind: "region",
  country: "Caraïbes",
  genitive: "de la Grenade",
  continentSlug: "caraibes",
  blurb: "Saint-Georges, la muscade, Carriacou",
  keywords: [
    "la-grenade",
    "grenade",
    "saint-georges",
    "grand anse",
    "carriacou",
    "muscade",
    "molinere",
    "caraibes",
  ],
  metaTitle: "La Grenade : Voyage sur mesure",
  metaDescription:
    "Voyage à la Grenade sur mesure : Saint-Georges, la Grand Anse, les plantations de muscade et Carriacou. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à la Grenade",
      heading: "La Grenade, de Saint-Georges aux plages de Carriacou",
      description:
        "On appelle la Grenade l'île aux épices, et cela se sent avant de le savoir : l'odeur de la muscade monte des séchoirs dès que la route quitte la côte. Saint-Georges tient son port en fer à cheval sous des toits de tuile rouge, la Grand Anse déroule trois kilomètres de sable clair, et la forêt du Grand Étang commence vingt minutes plus haut. Peu d'îles gardent encore cette proportion entre ce qui se visite et ce qui se vit. C'est cette île-là que nous vous ouvrons.",
      images: [
        {
          src: "/destination/la-grenade/hero-1.png",
          alt: "Voyage à la Grenade : le port en fer à cheval de Saint-Georges et ses toits rouges",
        },
        {
          src: "/destination/la-grenade/hero-2.png",
          alt: "La plage de la Grand Anse et sa courbe de sable clair bordée de cocotiers",
        },
        {
          src: "/destination/la-grenade/hero-3.png",
          alt: "Noix de muscade ouvertes sur un séchoir de bois dans une plantation grenadienne",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à la Grenade ?",
      heading: "Carole, spécialiste de la Grenade, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "La Grenade est l'île que je propose à ceux qui connaissent déjà les Antilles et qui cherchent autre chose. Il n'y a pas de front de mer construit, pas de file devant les sites, et les maisons se comptent sur les doigts d'une main. Mes voyageurs partent pour la plage et me rappellent au retour en me parlant de la muscade, du charpentier de Carriacou et des statues posées au fond de la baie de Molinière. Je garde toujours deux jours pour les îles du nord, parce que c'est là que le voyage bascule.",
        role: "Travel Designer · La Grenade",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Grenade",
      heading: "Le sud-ouest, de Saint-Georges à L'Anse aux Épines",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage à la Grenade commence par le sud-ouest, la pointe de l'île où tout se tient à vingt minutes de route. Saint-Georges y ferme son port sur le Carénage, entre les entrepôts d'épices et les goélettes qui chargent encore à quai. Un peu plus bas s'ouvre la Grand Anse, et derrière elle les baies de Morne Rouge et de L'Anse aux Épines, où l'eau reste calme du matin jusqu'au soir.",
        "Ce qui surprend, c'est la vitesse à laquelle l'île change dès que l'on monte. La forêt du Grand Étang prend le relais des jardins, avec son lac de cratère, ses cascades des Seven Sisters et ses singes qui traversent la route. Plus au nord, les plantations travaillent encore à l'ancienne : la muscade sèche à Gouyave sur de longs plateaux que l'on pousse à la main, le cacao fermente sous des couvercles de bois à Belmont Estate, et la roue à aubes de River Antoine tourne à l'eau de la rivière depuis 1785.",
        "Les maisons dans lesquelles nous vous installons tiennent toutes en très peu de clefs. L'une regarde la Grand Anse depuis un mur de verre et de pierre, une autre s'organise autour d'un jardin à L'Anse aux Épines, la troisième s'est posée sur une baie de la côte au vent qui n'avait jamais rien accueilli. Nous les choisissons pour la vue du réveil, et pour la façon dont on quitte sa chambre le matin.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/la-grenade/full-image.png",
        alt: "Voyage à la Grenade : la baie de Saint-Georges vue depuis les hauteurs du fort",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les épices et la forêt",
      heading: "Les matins où l'odeur de muscade suit la route",
      theme: "light",
      paragraphs: [
        "La muscade se ramasse à la main, une par une, et le reste du travail se fait à l'ombre. Dans la station de Gouyave, les femmes trient les noix par calibre sur des tables de bois, du bout des doigts, à la vitesse de la conversation. Le bâtiment est ouvert sur la rue, le sol est en planches, et l'odeur porte jusqu'au marché. Personne ne s'arrête de travailler quand on entre.",
        "Au-dessus, la forêt du Grand Étang garde l'eau de l'île. Les fougères arborescentes referment le sentier, les cascades des Seven Sisters tombent dans des bassins où l'on se baigne, et l'on entend les singes bien avant de les voir. On redescend vers la mer en fin de matinée, la peau encore fraîche, et l'on comprend pourquoi les Grenadiens parlent de leur île comme d'un jardin.",
      ],
      images: [
        {
          src: "/destination/la-grenade/split-1.png",
          alt: "Tri des noix de muscade sur les tables de bois de la station de Gouyave",
        },
        {
          src: "/destination/la-grenade/split-2.png",
          alt: "Cascade des Seven Sisters dans la forêt du parc national du Grand Étang",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/la-grenade/xp-voilier-bois-1.png",
          alt: "Voilier en bois sous voiles le long de la côte ouest de la Grenade",
        },
        right: {
          src: "/destination/la-grenade/xp-voilier-bois-2.png",
          alt: "Statue immergée du parc de sculptures sous-marines de Molinière à la Grenade",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La journée à la voile sur un bateau taillé à la main",
        columns: [
          "Le bateau est en bois, et il a été taillé à la main. Les charpentiers de Carriacou construisent encore ces coques à Windward, sur la plage, à l'œil et sans plan, avec des gestes que l'on se transmet dans les mêmes familles depuis des générations. On embarque le matin à la voile, on longe la côte ouest, et le moteur ne sert qu'à sortir du mouillage.",
          "La première escale se fait au-dessus du parc de sculptures de Molinière, le premier musée sous-marin au monde : les figures de Jason deCaires Taylor sont posées à quelques mètres de fond, et le corail a fini par prendre les visages. On repart ensuite vers les anses que la route n'atteint pas, celles où le bateau reste le seul devant la plage. C'est la journée que nos voyageurs redemandent le plus souvent.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à la Grenade",
      heading: "Descendre au musée sous-marin, ou suivre la cabosse jusqu'à la tablette",
      description:
        "Nous vous emmenons longer la côte ouest en Zodiac avant la mise à l'eau dans le parc sous-marin, traverser l'île jusqu'à une cascade privée, parcourir les petites tables de l'île aux épices avec un chef, et suivre le cacao de l'arbre à la tablette à Belmont Estate.",
      slugs: [
        "snorkeling-zodiac-grenade",
        "atv-cascade-privee-grenade",
        "tour-culinaire-grenade",
        "cacao-belmont-grenade",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Dormir au bord de la Grand Anse, ou sur une baie de la côte au vent",
      description:
        "Une maison de verre et de pierre posée sur la plus longue plage de l'île, trente suites autour d'un jardin à L'Anse aux Épines, et une baie de la côte au vent qui n'accueillait rien il y a encore trois ans. Chacune donne un rythme différent à la journée, et nous les proposons selon la manière dont vous aimez passer vos matinées.",
      slugs: ["silversands-grand-anse", "calabash-hotel", "six-senses-la-sagesse"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à la Grenade",
      description:
        "Voici les repères pratiques à réunir avant de choisir vos dates : le vol, les formalités, la monnaie et les saisons.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          // TODO: verify les compagnies et les durées, la desserte évoluant selon les saisons
          description:
            "La Grenade se rejoint toujours avec une correspondance : il n'existe pas de vol direct depuis Paris vers l'aéroport international Maurice Bishop. La route la plus simple passe par Londres, d'où British Airways et Virgin Atlantic desservent l'île, pour environ neuf heures de vol depuis la capitale britannique. Les autres itinéraires passent par la Barbade, par Miami ou par New York, avec un dernier tronçon régional. Comptez au total treize à seize heures de trajet depuis Paris, escale comprise.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "La Grenade ne change pas d'heure. Comptez six heures de retard sur la France en été et cinq heures en hiver : quand il est quatorze heures à Paris en juillet, il est huit heures à Saint-Georges.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est le dollar des Caraïbes orientales, arrimé au dollar américain à un taux fixe. Ce dernier est accepté presque partout, à un taux que fixe le commerçant. Les cartes bancaires passent dans les hôtels, les restaurants et les boutiques, et il reste utile de garder des espèces pour le marché de Saint-Georges, les taxis, les stands du bord de route et les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify la durée du séjour sans visa et les conditions de la déclaration en ligne
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique à la Grenade, dans la limite de trois mois. Le passeport doit être valide pendant toute la durée du séjour, et il est conseillé de le garder valable six mois au-delà de la date de retour. Une déclaration d'immigration et de douane se remplit en ligne avant l'arrivée : c'est la formalité que l'on oublie le plus souvent. Attention aux escales. Si l'itinéraire passe par le Royaume-Uni, l'autorisation électronique ETA peut être requise et s'obtient en ligne avant le départ, les passagers restant en transit sans passer l'immigration pouvant en être dispensés. S'il transite par les États-Unis, l'autorisation ESTA est obligatoire, s'obtient également en ligne et reste généralement valable deux ans ou jusqu'à l'expiration du passeport.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Depuis la France, aucune vaccination spécifique n'est exigée pour un séjour touristique à la Grenade. Il est recommandé d'être à jour des vaccinations prévues au calendrier vaccinal français, l'Institut Pasteur recommandant par ailleurs l'hépatite A. Un certificat de vaccination contre la fièvre jaune peut être demandé aux voyageurs arrivant d'un pays où la maladie circule. La dengue et le chikungunya circulent dans les Antilles selon les années : une protection contre les moustiques reste la précaution la plus utile, en journée comme en fin d'après-midi.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche s'étend de janvier à mai, avec un alizé régulier et peu de pluie. Nous privilégions février à avril, quand la mer est belle sur la côte ouest et que la forêt du Grand Étang garde encore sa fraîcheur. La saison humide court de juin à décembre, et s'accompagne de la saison cyclonique, de juin à novembre. La Grenade se situe à la limite sud de la ceinture cyclonique, ce qui l'expose nettement moins que les îles du nord, sans pour autant la mettre à l'abri.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle et celle de l'administration. Un créole à base anglaise se parle au quotidien dans les villages, avec une intonation qui lui est propre. Le créole français a disparu de la conversation mais il est resté dans les noms de lieux, à Gouyave, à La Sagesse ou au Grand Étang, comme la trace des deux histoires de l'île.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et chaud toute l'année, avec des températures qui varient peu, généralement entre vingt-quatre et trente et un degrés. L'alizé souffle presque en continu et rend la chaleur supportable, surtout sur la côte au vent. La période la plus humide s'étend de juin à décembre, sans qu'il s'agisse d'une pluie continue : les averses sont tropicales et brèves, le plus souvent en fin de journée. L'intérieur montagneux reçoit beaucoup plus d'eau que les côtes, et c'est ce qui explique la densité de la forêt et le nombre de cascades.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Grenade. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/la-grenade/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à la Grenade entre Saint-Georges, le Grand Étang et Carriacou",
            "Adresses confidentielles à la Grenade : plantations de muscade et tables de village",
            "Hébergements à la Grenade : Silversands Grand Anse, Calabash et Six Senses La Sagesse",
            "Conciergerie privée 24/7 pour un séjour à la Grenade",
            "Expériences à la Grenade : voilier en bois et parc de sculptures sous-marines",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à la Grenade",
      heading: "De Saint-Georges à Carriacou",
      description:
        "L'île se découvre par petites boucles, entre la mer et la forêt, et chaque endroit a son heure. Nous plaçons les journées pour que chacune arrive au bon moment du séjour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 9,
      places: [
        {
          title: "Saint-Georges et le Carénage",
          description:
            "La capitale ferme son port sur un ancien cratère, et les maisons à toits de tuile rouge montent en gradins jusqu'au fort. Sur le Carénage, les entrepôts d'épices ouvrent encore sur le quai, et le marché du samedi remplit toute la place de muscade, de cannelle et de cacao.",
          image: {
            src: "/destination/la-grenade/map-saint-georges.png",
            alt: "Le port du Carénage à Saint-Georges et ses maisons à toits rouges, à la Grenade",
          },
          // TODO: verify coords
          coordinates: { lat: 12.0561, lng: -61.7486 },
        },
        {
          title: "La Grand Anse",
          description:
            "Trois kilomètres de sable clair en courbe, avec Saint-Georges au bout et la mer des Caraïbes en face. L'eau y reste calme et peu profonde près du bord, et la plage est restée publique sur toute sa longueur : les pêcheurs y tirent leurs barques entre les parasols.",
          image: {
            src: "/destination/la-grenade/map-grand-anse.png",
            alt: "La courbe de sable de la Grand Anse avec Saint-Georges au fond, à la Grenade",
          },
          // TODO: verify coords
          coordinates: { lat: 12.0219, lng: -61.7614 },
        },
        {
          title: "Le parc de sculptures de Molinière",
          description:
            "Le premier musée sous-marin au monde a été immergé dans cette baie en 2006, dans une aire marine protégée. Les figures de Jason deCaires Taylor reposent à quelques mètres de fond, et le corail les a colonisées année après année : elles se découvrent au masque, sans bouteille.",
          image: {
            src: "/destination/la-grenade/map-molinere.png",
            alt: "Sculptures immergées et corail dans la baie de Molinière à la Grenade",
          },
          // TODO: verify coords
          coordinates: { lat: 12.0906, lng: -61.7628 },
        },
        {
          title: "Le parc national du Grand Étang",
          description:
            "La route grimpe au centre de l'île jusqu'à un lac de cratère posé dans la forêt, à plus de cinq cents mètres. Les sentiers partent de là vers le mont Qua Qua et les cascades des Seven Sisters, et les singes traversent la route au petit matin.",
          image: {
            src: "/destination/la-grenade/map-grand-etang.png",
            alt: "Le lac de cratère du Grand Étang entouré de forêt tropicale à la Grenade",
          },
          // TODO: verify coords
          coordinates: { lat: 12.0972, lng: -61.6972 },
        },
        {
          title: "Gouyave et la route des épices",
          description:
            "Le village de pêcheurs abrite la plus grande station de muscade de l'île, un bâtiment de bois ouvert sur la rue où les noix sont triées à la main. Plus au nord, le cacao de Belmont Estate fermente sous des couvercles de bois et la distillerie River Antoine broie la canne à la roue à aubes depuis 1785.",
          image: {
            src: "/destination/la-grenade/map-gouyave.png",
            alt: "Séchage des noix de muscade à la station de Gouyave, sur la côte ouest de la Grenade",
          },
          // TODO: verify coords
          coordinates: { lat: 12.1656, lng: -61.7325 },
        },
        {
          title: "Carriacou et Sandy Island",
          description:
            "L'île sœur se rejoint en avion en quinze minutes ou par la mer, et l'on y construit encore les voiliers en bois sur la plage de Windward. En face de Hillsborough, Sandy Island n'est qu'un banc de sable planté de quelques cocotiers, cerné d'eau claire, avec un récif à quelques mètres du bord.",
          image: {
            src: "/destination/la-grenade/map-carriacou.png",
            alt: "Le banc de sable de Sandy Island au large de Carriacou, à la Grenade",
          },
          // TODO: verify coords
          coordinates: { lat: 12.4894, lng: -61.4744 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à la Grenade",
      description:
        "Voici quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne semaine et comprendre comment l'île se vit une fois sur place.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "L'arrivée et le choix de l'escale",
          cardEyebrow: "Arrivée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Il n'y a pas de vol direct, et toutes les escales ne se valent pas",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Tous les itinéraires depuis Paris passent par une correspondance
                avant l&apos;aéroport Maurice Bishop, à la pointe sud de
                l&apos;île. Londres reste l&apos;escale la plus confortable, avec
                un vol direct vers la Grenade. La Barbade, Miami et New York
                fonctionnent aussi, mais le dernier tronçon se fait alors en
                avion régional, avec des horaires qui bougent selon les saisons.
              </p>
              <p>
                La bonne nouvelle est ensuite la distance : l&apos;aéroport se
                trouve à vingt minutes de la Grand Anse et de L&apos;Anse aux
                Épines. On peut se baigner dans l&apos;heure qui suit
                l&apos;atterrissage.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous construisons l&apos;itinéraire aérien, gardons de la marge
                sur la correspondance et suivons les vols le jour même, transfert
                et accueil compris.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir, et la question des cyclones",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île est à la limite sud de la ceinture cyclonique, et cela change tout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche va de janvier à mai. Nous privilégions février à
                avril, quand la mer est belle sur la côte ouest et que la forêt
                garde encore sa fraîcheur. La saison humide court de juin à
                décembre, avec des averses tropicales et brèves plutôt
                qu&apos;une pluie continue.
              </p>
              <p>
                La Grenade se situe à la limite sud de la ceinture cyclonique,
                nettement moins exposée que les îles du nord des Antilles.
                C&apos;est une des raisons pour lesquelles les voiliers y
                descendent hiverner. Cela ne la met pas à l&apos;abri, et nous
                restons prudents sur les dates d&apos;août à octobre.
              </p>
            </div>
          ),
        },
        {
          title: "La côte des Caraïbes et la côte au vent",
          cardEyebrow: "Plages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'ouest se nage toute l'année, l'est se choisit selon la baie",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte ouest, celle des Caraïbes, est la côte de la baignade :
                l&apos;eau y reste calme, les anses sont abritées et le récif de
                Molinière commence à quelques mètres du bord. C&apos;est là que
                se trouvent la Grand Anse, Morne Rouge et la plupart des maisons
                dans lesquelles nous vous installons.
              </p>
              <p>
                La côte est, exposée à l&apos;Atlantique, a un tout autre
                caractère : la houle arrive de loin, le vent ne tombe presque
                jamais, et les paysages s&apos;étendent sans construction.
                Certaines baies y restent parfaitement nageables, La Sagesse la
                première, mais elles se choisissent une par une.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer d'un bout de l'île à l'autre",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un chauffeur pour la forêt et le nord, un bateau pour la côte ouest",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île mesure trente-cinq kilomètres du sud au nord, mais les
                routes de l&apos;intérieur sont étroites, pentues et lentes. Le
                chauffeur privé est la solution la plus confortable pour la
                journée des plantations comme pour la forêt du Grand Étang,
                d&apos;autant qu&apos;il connaît les arrêts qui valent le détour
                et les stands de fruits du bord de route.
              </p>
              <p>
                Pour longer la côte ouest, le bateau reste le plus beau moyen de
                passer d&apos;une baie à l&apos;autre. On s&apos;arrête nager
                au-dessus des sculptures de Molinière, on déjeune au mouillage,
                et l&apos;on rentre à la voile en fin d&apos;après-midi.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons le chauffeur et le bateau avant votre arrivée, les
                deux se prenant longtemps à l&apos;avance en haute saison.
              </p>
            </div>
          ),
        },
        {
          title: "Pousser jusqu'à Carriacou",
          cardEyebrow: "Îles sœurs",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux nuits au nord changent la nature du séjour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Carriacou se rejoint en quinze minutes d&apos;avion ou en une
                heure et demie de mer, et l&apos;on y trouve une autre île :
                trente kilomètres carrés, quelques villages, des plages où
                l&apos;on ne croise personne. C&apos;est à Windward que les
                charpentiers taillent encore les coques de voiliers à la main,
                sur le sable, sans plan.
              </p>
              <p>
                Sandy Island et Anse La Roche se rejoignent en bateau depuis
                Hillsborough et se gardent pour une journée entière, masque
                compris. Petite Martinique, plus loin encore, se visite pour
                comprendre à quoi ressemble une île de quelques centaines
                d&apos;habitants qui vit de la mer.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons le vol ou la traversée, l&apos;hébergement sur
                place et le bateau à la journée, et nous vous disons quand la
                météo rend la liaison inconfortable.
              </p>
            </div>
          ),
        },
        {
          title: "Le marché de Saint-Georges et l'oil down",
          cardEyebrow: "Tables",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le samedi matin au marché, le vendredi soir à Gouyave",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le marché de Saint-Georges tourne toute la semaine mais il faut y
                aller le samedi matin, quand les producteurs descendent des
                hauteurs : muscade et macis, cannelle en écorce, cacao, fruits à
                pain, poisson du matin. Les épices s&apos;achètent là et non dans
                les boutiques du port.
              </p>
              <p>
                Le plat national s&apos;appelle l&apos;oil down : fruit à pain,
                racines, viande fumée et lait de coco, cuits ensemble dans une
                seule marmite jusqu&apos;à absorption complète. On le mange en
                famille et dans la rue, notamment le vendredi soir à Gouyave,
                quand le village entier sort ses tables et grille le poisson du
                jour.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des chaussures fermées pour la forêt, une tenue légère pour les dîners",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les journées se passent en maillot et en tenue légère, et les
                soirées restent simples, un peu plus habillées dans les maisons
                de la Grand Anse. Une veste fine suffit pour les dîners en
                hauteur, où l&apos;air devient plus frais dès que le soleil est
                couché.
              </p>
              <p>
                Prévoyez des chaussures fermées pour les sentiers du Grand Étang,
                qui restent glissants même en saison sèche, une protection
                solaire élevée, une protection contre les moustiques pour la fin
                de journée, un masque de snorkeling si vous avez le vôtre, et un
                vêtement de pluie léger : les averses sont brèves mais elles
                arrivent vite.
              </p>
            </div>
          ),
        },
        {
          title: "Spicemas et la régate de Carriacou",
          cardEyebrow: "Agenda",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'été amène le carnaval, la fin de l'hiver amène les voiles",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Spicemas, le carnaval grenadien, se tient en août, avec ses
                déguisements de Jab Jab couverts d&apos;huile et ses défilés dans
                Saint-Georges. C&apos;est un très beau moment pour venir, à
                condition d&apos;accepter la saison humide et de réserver la
                maison très tôt.
              </p>
              <p>
                La régate de Carriacou se court en août elle aussi, avec les
                voiliers en bois construits sur l&apos;île. Ceux qui préfèrent le
                calme et la mer belle choisiront février ou mars, autour de la
                semaine de voile, quand la lumière est la plus nette de
                l&apos;année.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous donnons les dates exactes de l&apos;année en cours et
                nous organisons, si vous le souhaitez, les places et les
                transferts pour les soirées.
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
            "Nous cherchions une île des Antilles que nous ne connaissions pas, et nous avons trouvé une île où il ne se passe rien de ce que l'on attend. La journée sur le voilier en bois a été le sommet du séjour.",
          image: {
            src: "/destination/la-grenade/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: La Grenade, mars 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Les enfants ont passé la semaine entre la Grand Anse et les statues de Molinière, qu'ils ont voulu revoir trois fois. Nous n'avons eu à nous occuper de rien.",
          image: {
            src: "/destination/la-grenade/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: La Grenade en famille, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Les deux nuits à Carriacou n'étaient pas prévues au départ et ce sont celles dont nous parlons encore. Le charpentier nous a montré la coque qu'il finissait, sur la plage.",
          image: {
            src: "/destination/la-grenade/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: La Grenade et Carriacou, avril 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à la Grenade ?",
          answer:
            "La saison sèche s'étend de janvier à mai, avec un alizé régulier et peu de pluie. Nous privilégions février à avril, quand la mer est belle sur la côte ouest et que la forêt du Grand Étang garde encore sa fraîcheur. La saison humide court de juin à décembre et s'accompagne de la saison cyclonique, de juin à novembre : la Grenade se situe à la limite sud de la ceinture cyclonique, nettement moins exposée que les îles du nord des Antilles, sans être pour autant à l'abri. Sachez aussi que l'île est très animée en août, pendant le carnaval Spicemas et la régate de Carriacou, et que les maisons se réservent très en avance entre Noël et les premiers jours de janvier.",
        },
        {
          question: "Comment se rendre à la Grenade depuis Paris ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris : la Grenade se rejoint toujours avec une correspondance, jusqu'à l'aéroport international Maurice Bishop, au sud de l'île. La route la plus simple passe par Londres, d'où British Airways et Virgin Atlantic desservent l'île, pour environ neuf heures de vol depuis la capitale britannique. Les autres itinéraires passent par la Barbade, par Miami ou par New York, avec un dernier tronçon en avion régional dont les horaires évoluent selon les saisons. Comptez au total treize à seize heures de trajet depuis Paris, escale comprise. Nous laissons de la marge entre le long-courrier et ce dernier tronçon, et l'aéroport ne se trouve ensuite qu'à vingt minutes de la Grand Anse.",
        },
        {
          question: "Faut-il un visa pour aller à la Grenade ?",
          answer:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique à la Grenade, dans la limite de trois mois. Le passeport doit être valide pendant toute la durée du séjour, et il est conseillé de le garder valable six mois au-delà de la date de retour. Une déclaration d'immigration et de douane se remplit en ligne avant l'arrivée : c'est la formalité que l'on oublie le plus souvent. Attention aux escales : si votre itinéraire passe par le Royaume-Uni, l'autorisation électronique ETA peut être requise et s'obtient en ligne avant le départ, les passagers restant en transit sans passer l'immigration pouvant en être dispensés ; s'il transite par les États-Unis, c'est l'autorisation ESTA qui s'applique, valable généralement deux ans ou jusqu'à l'expiration du passeport.",
        },
        {
          question: "Que faire à la Grenade en une semaine ?",
          answer:
            "Une semaine laisse le temps d'alterner la mer, la forêt et les plantations sans se presser. On garde deux journées en bateau, dont la sortie à la voile sur un voilier en bois et la mise à l'eau au-dessus des sculptures de Molinière. Deux autres se passent à l'intérieur : le lac de cratère et les cascades du Grand Étang, puis la route du nord avec la muscade de Gouyave, le cacao de Belmont Estate et la roue à aubes de River Antoine. Le reste du temps se partage entre la Grand Anse, le marché du samedi à Saint-Georges et une table de village. Ceux qui disposent de dix jours ajoutent deux nuits à Carriacou, et c'est souvent ce qu'ils retiennent du voyage.",
        },
        {
          question: "La Grenade est-elle adaptée aux familles ?",
          answer:
            "Oui, et c'est l'une des îles les plus faciles à vivre avec des enfants d'âges différents. La Grand Anse est calme et peu profonde près du bord, sur trois kilomètres de sable, et les sculptures de Molinière se découvrent avec un simple masque, sans bouteille. Les cascades du Grand Étang et la fabrication de la tablette de chocolat à Belmont Estate plaisent à tous les âges. Les maisons que nous proposons disposent de suites et de villas familiales avec service, et nous gardons la forêt pour le matin, quand il fait encore frais.",
        },
        {
          question: "Quel budget prévoir pour un voyage à la Grenade ?",
          answer:
            "Le budget dépend surtout de la maison choisie, de la saison et de la place donnée aux journées en mer. La période des fêtes et le mois de février se situent en haut de la gamme, tandis que mai et juin restent plus mesurés à confort égal. Une chambre au bord de la Grand Anse, une suite autour du jardin de L'Anse aux Épines ou un voilier à la journée ne se chiffrent pas de la même façon, et l'ajout de deux nuits à Carriacou change aussi la donne. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "On remonte vers la région entière quand on veut relier plusieurs îles par la mer, on continue vers Saint-Vincent et les Grenadines pour naviguer d'un mouillage à l'autre, et l'on choisit Sainte-Lucie quand on a aimé la forêt et la montagne autant que les plages.",
      slugs: ["caraibes", "saint-vincent-et-les-grenadines", "sainte-lucie"],
    },
  ],
};
