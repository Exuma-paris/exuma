import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "jamaique",
  name: "Jamaïque",
  placeKind: "country",
  country: "Jamaïque",
  genitive: "de la Jamaïque",
  continentSlug: "ameriques",
  blurb: "Blue Mountains, Port Antonio, Hanover, côte sud",
  keywords: [
    "jamaique",
    "blue mountains",
    "port antonio",
    "rio grande",
    "montego bay",
    "appleton estate",
    "treasure beach",
    "kingston",
  ],
  metaTitle: "Jamaïque : Voyage sur mesure",
  metaDescription:
    "Voyage en Jamaïque sur mesure : Blue Mountains, Rio Grande, Port Antonio, villas de Hanover, rhum d'Appleton. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Jamaïque",
      heading: "Le sable est en bas, la brume commence à mille mètres",
      description:
        "Le matin, la brume passe dans les caféiers au-dessus de Kingston. L'après-midi, on nage dans une crique où une rivière rejoint la mer. C'est la même île, et c'est le même jour.",
      images: [
        {
          src: "/destination/jamaique/hero-1.png",
          alt: "Voyage en Jamaïque : crêtes des Blue Mountains sous la brume au lever du jour",
        },
        {
          src: "/destination/jamaique/hero-2.png",
          alt: "Radeau de bambou descendant la rivière Rio Grande près de Port Antonio",
        },
        {
          src: "/destination/jamaique/hero-3.png",
          alt: "Crique de sable et falaises boisées de la côte est jamaïcaine",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Jamaïque ?",
      heading: "Tainà, spécialiste de la Jamaïque, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina", // TODO: verify collaborateurSlug (Tainà porte déjà le Panama, le Costa Rica et la Colombie)
        // TODO: verify quote attribution — à faire valider par Tainà avant mise en ligne
        quote:
          "Ce que je conseille toujours, c'est de commencer par les hauteurs. Deux nuits dans les Blue Mountains avant de descendre à la mer : on dort sous une couverture, on se réveille dans la brume, et la plage qui suit n'a plus le même goût. Presque personne ne fait le voyage dans cet ordre.",
        role: "Travel Designer · Jamaïque",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Jamaïque",
      heading: "Une île de montagne posée dans la Caraïbe",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Jamaïque surprend d'abord par le relief. L'île est une montagne : les Blue Mountains occupent tout l'est du pays et se remontent depuis Kingston en une matinée. En chemin, la température perd une dizaine de degrés et la brume s'installe pour de bon.",
        "L'est de l'île vit à part. À Port Antonio, les rivières descendent de la montagne et rejoignent la mer au milieu des plages. On nage en eau douce le matin, en eau salée l'après-midi. C'est la Jamaïque la plus verte, et la moins construite.",
        "À l'ouest, on ne loge plus à l'hôtel. La côte de Hanover aligne des maisons privées, chacune avec son équipe et son cuisinier, héritées des anciennes plantations. On y prend ses repas à l'heure qu'on veut, dans son propre jardin. C'est le format qui fait revenir les familles.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/jamaique/full-image.png",
        alt: "Voyage en Jamaïque : la rivière Rio Grande descendant des Blue Mountains vers la côte",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Jamaïque : les hauteurs et la côte est",
      heading: "Le café le matin à Irish Town, la rivière l'après-midi",
      theme: "light",
      paragraphs: [
        "À Irish Town, la brume passe deux fois par jour et le café pousse plus haut encore. La cueillette se fait cerise par cerise, à la main, sur des pentes trop raides pour une machine. On goûte le café là, à la table de tri, avec ceux qui trient.",
        "Deux heures de route plus bas, la côte n'a plus rien du même pays. Le Blue Lagoon mélange l'eau de source et l'eau de mer, et la température change d'un mètre à l'autre. On y entre en fin de journée, quand la couleur tourne au vert sombre.",
      ],
      images: [
        {
          src: "/destination/jamaique/split-1.png",
          alt: "Cueilleuse triant des cerises de café sur un domaine des Blue Mountains",
        },
        {
          src: "/destination/jamaique/split-2.png",
          alt: "Eaux du Blue Lagoon entourées de végétation près de Port Antonio",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/jamaique/xp-raft-rio-grande-1.png",
          alt: "Raftsman poussant à la perche un radeau de bambou sur le Rio Grande",
        },
        right: {
          src: "/destination/jamaique/xp-raft-rio-grande-2.png",
          alt: "Banc de bambou et seau à champagne à bord d'un radeau sur le Rio Grande",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Un radeau de bambou pour deux, sur le Rio Grande",
        columns: [
          "Le radeau est fait de bambou lié à la main, avec un banc surélevé pour deux. Le raftsman pousse à la perche, debout à l'avant, et la rivière fait le reste. Deux heures et demie sans un bruit de moteur.",
          "Ce qui se privatise, c'est le radeau, pas la rivière. On embarque à deux avec son raftsman, le champagne au frais à bord, et l'arrêt de mi-parcours se choisit avec lui. Il a grandi là et il en connaît chaque coude : c'est lui qui décide où l'on s'arrête.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Jamaïque",
      heading: "Trois sorties qui se réservent à l'avance",
      description:
        "Les créneaux privés partent tôt, et le domaine de café dépend de la saison de récolte. Ces trois sorties se calent avant le départ, pas sur place.",
      slugs: [
        "cafe-blue-mountains",
        "yacht-prive-chef-montego-bay",
        "appleton-estate-rhums",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Jamaïque",
      description:
        "Deux domaines de villas avec personnel sur la côte ouest, et une maison de bois dans les Blue Mountains. Trois registres, une même exigence de service.",
      slugs: ["round-hill", "tryall-club", "strawberry-hill"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Jamaïque",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage en Jamaïque.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Pas de vol direct depuis Paris. Une escale à Londres, Miami ou Toronto, et une quinzaine d'heures de trajet total jusqu'à Montego Bay (MBJ) ou Kingston (KIN). Les deux aéroports sont séparés par trois à quatre heures de route : le choix de l'arrivée dépend de l'itinéraire."
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Sept heures de retard sur Paris en été, six en hiver. L'île ne pratique pas le changement d'heure. Le décalage se digère bien à l'aller, moins au retour.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar jamaïcain. Le dollar américain est accepté dans les hôtels et sur les excursions, souvent à un taux moins favorable qu'un retrait sur place. Prévoir des espèces en petites coupures pour les marchés, les bars de plage et les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour les ressortissants français en séjour touristique de moins de 30 jours. Passeport valide pour toute la durée du séjour. Le formulaire d'immigration et de douane C5 est à remplir en ligne sur enterjamaica.com avant l'arrivée : le service est gratuit."
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination obligatoire depuis l'Europe. Les hépatites A et B et la typhoïde sont recommandées. Le certificat de fièvre jaune n'est exigé qu'en provenance d'un pays où la maladie circule.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mi-décembre à mi-avril pour la saison sèche, la plus stable sur les deux côtes. La saison cyclonique court de juin à novembre, avec un pic en septembre et octobre. Mai et début juin restent une belle fenêtre, avec des averses courtes en fin de journée.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle. Le patwa, le patois jamaïcain, est ce que l'on entend dans la rue, sur les marchés et dans la musique. Un guide francophone accompagne l'ensemble de l'itinéraire.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Tropical, de 25 à 32 °C sur les côtes toute l'année. Dans les Blue Mountains, comptez dix à quinze degrés de moins et de la brume presque tous les jours au-dessus de mille mètres. La paroisse de Portland, à l'est, est la plus arrosée de l'île.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Jamaïque mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/jamaique/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Jamaïque entre les Blue Mountains, Portland et Hanover",
            "Adresses confidentielles en Jamaïque : domaines de café et villas privées",
            "Hébergements en Jamaïque : villa de Hanover et maison de bois des Blue Mountains",
            "Conciergerie privée 24/7 pour un voyage en Jamaïque",
            "Expériences immersives en Jamaïque : Rio Grande, café Blue Mountain et rhum d'Appleton",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître en Jamaïque",
      heading: "Six territoires, de la crête à la côte sud",
      description:
        "De Port Antonio à Treasure Beach, six territoires que douze jours permettent d'enchaîner sans passer ses journées sur la route.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 8,
      places: [
        {
          title: "Port Antonio et le Blue Lagoon",
          description:
            "La côte la plus verte de l'île, une succession de criques et de rivières qui rejoignent la mer. Le Blue Lagoon mélange eau douce et eau de mer, et la couleur change avec l'heure.",
          image: {
            src: "/destination/jamaique/map-port-antonio.png",
            alt: "Baie et végétation dense de Port Antonio, sur la côte est de la Jamaïque",
          },
          // TODO: verify coords
          coordinates: { lat: 18.1796, lng: -76.4494 },
        },
        {
          title: "Les Blue Mountains",
          description:
            "La chaîne culmine à 2 256 mètres au Blue Mountain Peak. L'ascension se fait de nuit, pour arriver en haut au lever du jour.",
          image: {
            src: "/destination/jamaique/map-blue-mountains.png",
            alt: "Versants plantés de caféiers dans les Blue Mountains jamaïcaines",
          },
          // TODO: verify coords
          coordinates: { lat: 18.0528, lng: -76.5789 },
        },
        {
          title: "Kingston",
          description:
            "La capitale et le berceau du reggae. Le studio Tuff Gong tourne toujours, et la maison de Bob Marley se visite sur Hope Road.",
          image: {
            src: "/destination/jamaique/map-kingston.png",
            alt: "Toits de Kingston devant les contreforts des Blue Mountains",
          },
          // TODO: verify coords
          coordinates: { lat: 17.9714, lng: -76.7931 },
        },
        {
          title: "Montego Bay et la côte de Hanover",
          description:
            "L'ouest de l'île et son alignement de domaines de villas, sur d'anciennes terres sucrières. C'est là que se concentrent les maisons avec personnel et les parcours de golf.",
          image: {
            src: "/destination/jamaique/map-montego-bay.png",
            alt: "Littoral et baies boisées de la côte de Hanover près de Montego Bay",
          },
          // TODO: verify coords
          coordinates: { lat: 18.4762, lng: -77.8939 },
        },
        {
          title: "La vallée de Nassau et Appleton",
          description:
            "Une vallée de cannes à sucre encadrée par les collines de calcaire du Cockpit Country. Appleton y distille depuis 1749, dans les mêmes chais.",
          image: {
            src: "/destination/jamaique/map-appleton.png",
            alt: "Champs de cannes à sucre de la vallée de Nassau, autour du domaine d'Appleton",
          },
          // TODO: verify coords
          coordinates: { lat: 18.1875, lng: -77.7361 },
        },
        {
          title: "Treasure Beach et la côte sud",
          description:
            "Des villages de pêcheurs, une côte sèche et peu construite, et un bar sur pilotis planté sur un banc de sable à vingt minutes de bateau du rivage.",
          image: {
            src: "/destination/jamaique/map-treasure-beach.png",
            alt: "Barques de pêcheurs sur une plage de la côte sud jamaïcaine à Treasure Beach",
          },
          // TODO: verify coords
          coordinates: { lat: 17.8833, lng: -77.7667 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Jamaïque",
      description:
        "Huit repères rapportés du terrain : ce qu'il faut viser, quand partir, et ce qui change d'un bout de l'île à l'autre.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Douze jours pour traverser l'île d'est en ouest",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois bases suffisent : la côte est, les hauteurs, l'ouest. Deux nuits minimum par étape",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île fait deux cent trente kilomètres de long, mais la
                route de montagne est lente et les paroisses n&apos;ont rien en
                commun. Le découpage qui fonctionne tient en trois bases :
                Portland et la côte est pour la rivière et les criques, les Blue
                Mountains pour le café et l&apos;altitude, Hanover ou la côte sud
                pour finir au bord de l&apos;eau.
              </p>
              <p>
                Nous comptons trois nuits par base, quatre à l&apos;ouest. Les
                transferts se font en voiture avec chauffeur, et l&apos;hélicoptère
                remplace utilement la route entre Kingston et Montego Bay quand
                le calendrier est serré.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;itinéraire réserve au moins deux journées entières sans
                transfert, généralement sur la côte est et dans les hauteurs.
              </p>
            </div>
          ),
        },
        {
          title: "L'est et l'ouest ne se ressemblent pas",
          cardEyebrow: "Géographie",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Portland est verte et pluvieuse, la côte sud est sèche. Deux climats, deux ambiances",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Portland, à l&apos;est, reçoit la pluie que les Blue Mountains
                arrêtent : végétation dense, rivières partout, criques cachées
                dans la verdure. C&apos;est la Jamaïque des années Errol Flynn,
                avec peu d&apos;hôtels et beaucoup de maisons privées.
              </p>
              <p>
                La côte sud, autour de Treasure Beach et de Black River, est
                l&apos;inverse : sèche, presque désertique par endroits, avec des
                villages de pêcheurs et des routes vides. L&apos;ouest, entre
                Montego Bay et Negril, concentre les grands domaines et le golf.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons systématiquement deux façades différentes dans le
                même voyage. Une seule côte donne une idée fausse de l&apos;île.
              </p>
            </div>
          ),
        },
        {
          title: "Le Blue Mountain se vérifie à l'étiquette",
          cardEyebrow: "Café",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'appellation est protégée et l'altitude est écrite sur le sac. Le reste est du café jamaïcain",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;appellation Jamaica Blue Mountain est une origine
                protégée : elle ne couvre que les caféiers cultivés au-dessus de
                910 mètres, dans les paroisses de l&apos;est de l&apos;île. En
                dessous de cette altitude, le café est jamaïcain mais n&apos;a pas
                droit au nom. Les volumes sont faibles et une large part du
                millésime part au Japon chaque année.
              </p>
              <p>
                Sur place, la visite se fait au domaine et non en boutique :
                cueillette, dépulpage, séchage sur les aires de béton, puis
                dégustation à la table de tri. La récolte court d&apos;août à
                mars, avec un pic entre novembre et janvier.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le domaine est retenu à l&apos;avance et la visite se fait avec le
                planteur, hors des créneaux ouverts au public.
              </p>
            </div>
          ),
        },
        {
          title: "Le jerk vient de Boston Bay",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La cuisson au bois de piment, sur la côte est. Le reste de l'île en fait une déclinaison",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Boston Bay, dans la paroisse de Portland, la viande cuit
                lentement sur des braises de bois de piment, sous une tôle. La
                marinade tient au piment scotch bonnet, au piment de la Jamaïque
                et au thym. C&apos;est de là que la technique s&apos;est diffusée
                dans toute l&apos;île, puis bien au-delà.
              </p>
              <p>
                Le reste de la table mérite le même détour : l&apos;ackee et la
                morue au petit déjeuner, le poisson escovitch sur la côte sud, le
                pain aux fruits à pain grillé au feu, et le patty à emporter. Les
                meilleures adresses sont des cabanes en bord de route.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Un déjeuner de jerk à Boston Bay se cale sur la route de Port
                Antonio, et une table est retenue chez un cuisinier de la côte
                sud pour le poisson.
              </p>
            </div>
          ),
        },
        {
          title: "La saison sèche se réserve tôt",
          cardEyebrow: "Quand partir",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mi-décembre à mi-avril pour la fenêtre la plus stable. Les villas partent un an à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche court de mi-décembre à mi-avril : c&apos;est la
                période la plus stable sur les deux côtes, et celle où les
                domaines de villas de Hanover affichent complet longtemps à
                l&apos;avance. Noël et les vacances de février se réservent
                souvent un an avant.
              </p>
              <p>
                Mai et début juin forment une belle fenêtre alternative : les
                averses tombent en fin de journée et repartent vite, la
                fréquentation baisse nettement. La saison cyclonique court de
                juin à novembre, avec un pic en septembre et octobre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les villas de Hanover et les maisons de Portland sont
                pré-réservées dès que les dates sont posées, avant même que
                l&apos;itinéraire soit finalisé.
              </p>
            </div>
          ),
        },
        {
          title: "On se déplace avec un chauffeur",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Conduite à gauche, routes de montagne étroites. Le chauffeur fait gagner du temps et des adresses",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On roule à gauche, et les routes de montagne entre Kingston et
                Irish Town ou Buff Bay sont étroites, en lacets, souvent sans
                marquage. Les distances sur la carte n&apos;ont aucun rapport avec
                le temps de trajet : quarante kilomètres de crête peuvent prendre
                deux heures.
              </p>
              <p>
                Le chauffeur privé change la nature du voyage. Il connaît les
                bonnes cabanes de bord de route, il sait quel accès de plage est
                ouvert, et il gère les arrêts sans que personne ait à consulter
                une carte. Sur les grands axes est-ouest, un vol intérieur ou un
                hélicoptère fait gagner une demi-journée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le même chauffeur accompagne l&apos;ensemble du séjour, et
                l&apos;hélicoptère est proposé sur le transfert Kingston-Montego
                Bay quand le calendrier le justifie.
              </p>
            </div>
          ),
        },
        {
          title: "Kingston se visite pour la musique",
          cardEyebrow: "Musique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trench Town, Tuff Gong, Hope Road. La ville est le berceau du reggae, pas une escale",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Beaucoup d&apos;itinéraires sautent la capitale. C&apos;est
                dommage : le reggae y est né, et il s&apos;y écoute encore. Le
                studio Tuff Gong, fondé par Bob Marley, tourne toujours. La
                maison de Hope Road est devenue un musée, et Trench Town se
                visite avec un guide du quartier.
              </p>
              <p>
                La ville a aussi la National Gallery of Jamaica, le marché de
                l&apos;aube et les tables les plus intéressantes de l&apos;île.
                Deux nuits suffisent, et elles se combinent bien avec la montée
                dans les Blue Mountains, à une heure de route.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une session au studio Tuff Gong se demande à l&apos;avance, avec
                un ingénieur du son, et la visite de Trench Town se fait avec un
                accompagnateur du quartier.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une polaire pour les hauteurs, des chaussures qui tiennent à l'eau, et de l'anti-moustique",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur la côte, le linge léger suffit toute l&apos;année. Dans les
                Blue Mountains, il fait dix à quinze degrés de moins et
                l&apos;humidité est constante : une polaire et une veste de pluie
                sont indispensables, et un vrai pull si l&apos;ascension du sommet
                est au programme.
              </p>
              <p>
                Prévoir des chaussures qui supportent l&apos;eau pour les
                rivières et les cascades, un anti-moustique efficace pour les fins
                de journée à Portland, et une tenue un peu habillée pour les
                dîners des domaines de Hanover, où le soir se respecte.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                La liste de bagages est envoyée avec le carnet de voyage, ajustée
                aux étapes retenues et à la saison.
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
            "Le radeau sur le Rio Grande, c'est ce dont on parle encore. Deux heures et demie sans un bruit de moteur, et un raftsman qui raconte la rivière comme on raconte sa rue. On a fini les pieds dans l'eau à St Margaret's Bay.",
          image: {
            src: "/destination/jamaique/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Portland et Blue Mountains, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La villa de Hanover avec son équipe, c'était le bon choix avec les enfants. Le chef s'adaptait à leurs horaires, et on a pu partir en bateau une journée sans avoir rien à organiser.",
          image: {
            src: "/destination/jamaique/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Jamaïque en famille, janvier 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Deux nuits dans les Blue Mountains avant de redescendre sur la côte. La récolte au domaine avec le planteur valait à elle seule le détour. On n'imaginait pas qu'il puisse faire douze degrés en Jamaïque.",
          image: {
            src: "/destination/jamaique/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Blue Mountains et côte sud, mars 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Jamaïque ?",
          answer:
            "De mi-décembre à mi-avril pour la saison sèche : c'est la fenêtre la plus stable sur les deux côtes, et celle où les domaines de villas affichent complet le plus tôt. Mai et début juin forment une excellente alternative, avec des averses courtes en fin de journée et beaucoup moins de monde. La saison cyclonique court de juin à novembre, avec un pic en septembre et octobre.",
        },
        {
          question: "Combien de temps dure le vol Paris-Jamaïque ?",
          answer:
            "Il n'existe pas de vol direct entre Paris et la Jamaïque. Avec une escale à Londres, Miami ou Toronto, comptez une quinzaine d'heures de trajet total jusqu'à Montego Bay (MBJ) ou Kingston (KIN). Les deux aéroports sont séparés par trois à quatre heures de route, ou une heure de vol intérieur : le choix de l'arrivée dépend de l'itinéraire retenu.",
        },
        {
          question: "Faut-il un visa pour aller en Jamaïque ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de 30 jours ; au-delà, le visa se demande auprès de l'ambassade de Jamaïque à Bruxelles. Le passeport doit rester valide toute la durée du séjour, et le formulaire d'immigration et de douane C5 est à remplir gratuitement sur enterjamaica.com avant l'arrivée. Aucune vaccination n'est obligatoire depuis l'Europe ; les hépatites A et B et la typhoïde sont recommandées.",
        },
        {
          question: "Que faire en Jamaïque en 12 jours ?",
          answer:
            "Trois nuits sur la côte est, à Port Antonio, pour le radeau de bambou sur le Rio Grande, le Blue Lagoon et le jerk de Boston Bay. Puis trois nuits dans les Blue Mountains pour la récolte du café et, si le rythme le permet, l'ascension du Blue Mountain Peak au lever du jour, avec deux nuits à Kingston pour la musique. Enfin quatre nuits à l'ouest, dans une villa de Hanover, avec une journée de yacht privé au départ de Montego Bay.",
        },
        {
          question: "La Jamaïque est-elle adaptée aux familles ?",
          answer:
            "Oui, et les domaines de villas y sont taillés pour cela : chaque maison a son équipe, son chef et souvent sa piscine, ce qui permet de faire cohabiter plusieurs générations sans contrainte d'horaires. Le radeau de bambou, les cascades de Reach Falls, le yacht privé et les rivières de Portland fonctionnent de huit à quatre-vingts ans. La côte sud et Treasure Beach conviennent mieux aux adolescents et aux adultes.",
        },
        {
          question: "Où dormir en Jamaïque ?",
          answer:
            "Sur la côte ouest, dans la paroisse de Hanover, les domaines de villas avec personnel offrent le format le plus abouti de l'île, avec golf et plages privées. Dans les Blue Mountains, une maison de bois à mille mètres d'altitude donne l'autre visage du pays, avec vue sur Kingston et la baie. Sur la côte est, à Portland, l'hébergement se choisit pour l'emplacement, souvent une maison privée au-dessus d'une crique.",
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
        "D'autres façons de parcourir la Caraïbe et l'isthme, entre archipels, montagnes et forêt tropicale. Trois prolongements possibles après un premier voyage en Jamaïque.",
      slugs: ["bahamas", "republique-dominicaine", "costa-rica"],
    },
  ],
};
