import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "afrique-du-sud",
  name: "Afrique du Sud",
  placeKind: "country",
  country: "Afrique du Sud",
  genitive: "de l'Afrique du Sud",
  continentSlug: "afrique",
  blurb: "Le Cap, Cederberg, réserves privées du Kruger",
  keywords: [
    "afrique du sud",
    "le cap",
    "cederberg",
    "kruger",
    "thornybush",
    "winelands",
    "art rupestre",
    "safari",
  ],
  metaTitle: "Afrique du Sud : Voyage sur mesure",
  metaDescription:
    "Voyage en Afrique du Sud sur mesure : Le Cap, le Cederberg et les réserves privées du Kruger. Itinéraire sur mesure écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Afrique du Sud",
      heading: "Trois heures de route, et le pays a changé de climat",
      description:
        "L'Afrique du Sud tient dans un seul voyage ce que d'autres pays répartissent sur trois. Une ville posée entre une montagne et deux océans. Des massifs de grès couverts de peintures vieilles de plusieurs milliers d'années. Des réserves privées sans clôture avec le parc Kruger. On passe de l'une à l'autre en quelques heures.",
      images: [
        {
          src: "/destination/afrique-du-sud/hero-1.webp",
          alt: "Table Mountain au-dessus de la baie du Cap au lever du jour, voyage en Afrique du Sud",
        },
        {
          src: "/destination/afrique-du-sud/hero-2.webp",
          alt: "Léopard sur une branche dans la réserve privée de Thornybush, Afrique du Sud",
        },
        {
          src: "/destination/afrique-du-sud/hero-3.webp",
          alt: "Falaises de grès du Cederberg couvertes de fynbos en fin de journée",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Afrique du Sud ?",
      heading:
        "Carole, spécialiste de l'Afrique du Sud, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "La plupart des voyageurs m'appellent pour un safari. L'Afrique du Sud en propose d'excellents, mais ce n'est pas ce qui la rend intéressante. Ce qui la rend intéressante, c'est de pouvoir enchaîner en treize à quinze jours une ville de bord de mer, une montagne couverte de peintures rupestres et une réserve sans clôture. Je construis presque toujours dans le même ordre. Le Cap au début, parce qu'on y récupère du vol de nuit sans rien manquer. Le Cederberg ensuite, à quelques heures de route vers le nord, pour l'art rupestre et le silence. Le bush à la fin, parce qu'on quitte plus facilement un lodge qu'une ville. La seule étape que je refuse de raccourcir, c'est le Cederberg. Il faut y rester trois nuits pour voir plus d'un site peint.",
        role: "Travel Designer · Afrique du Sud",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Afrique du Sud",
      heading: "Trois régions, et l'ordre dans lequel on les prend",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Afrique du Sud commence presque toujours au Cap. La ville est posée entre Table Mountain et l'Atlantique, sur une presqu'île étroite. On y arrive après un vol de nuit et on y reste trois ou quatre jours, le temps de descendre la péninsule jusqu'au cap de Bonne-Espérance et de passer une journée dans les vignobles de Constantia, de Stellenbosch et de Franschhoek.",
        "Au nord du Cap, la route monte vers le Cederberg. Ce massif de grès rouge marque la limite de la région du fynbos. Les Bushmen, aussi appelés San, y ont peint les parois pendant des milliers d'années. La réserve de Bushmans Kloof en protège à elle seule plus de 130 sites. On y marche le matin, et on ne croise personne d'autre que son guide.",
        "Le bush se trouve à l'autre bout du pays, dans le Lowveld, à environ deux heures de vol vers le nord-est. Les réserves privées de Thornybush et du Sabi Sand n'ont plus de clôture avec le parc Kruger depuis les années 1990. Les animaux circulent librement entre les deux, mais le nombre de véhicules y reste limité et les guides sortent des pistes, ce qui est interdit dans le parc national.", // TODO: verify date de la suppression des clôtures côté Thornybush
        "Trois maisons portent cet itinéraire. Ellerman House domine la baie de Bantry Bay, au Cap, avec une collection d'art sud-africain accrochée dans les salons. Bushmans Kloof occupe une réserve privée du Cederberg, à quatre heures de route au nord. Saseka Tented Camp ferme le voyage à Thornybush, sous tente, en lisière du Kruger.", // TODO: verify durée de route Le Cap - Bushmans Kloof
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/afrique-du-sud/full-image.webp",
        alt: "Vignobles de Franschhoek au pied des montagnes du Cap, voyage en Afrique du Sud",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Afrique du Sud : la montagne et la vigne",
      heading: "Ce que le fynbos a laissé pousser à côté de lui",
      theme: "light",
      paragraphs: [
        "Autour du Cap pousse une végétation qu'on ne trouve nulle part ailleurs. Elle porte un nom afrikaans, le fynbos, qui signifie « fin buisson ». C'est un maquis de plantes basses, dures, adaptées au vent et aux incendies réguliers.",
        "La région du Cap forme à elle seule l'un des six royaumes floraux de la planète, et de très loin le plus petit. On y recense environ 9 000 espèces de plantes, dont les deux tiers ne poussent nulle part ailleurs dans le monde. L'ensemble est classé au patrimoine mondial de l'UNESCO depuis 2004.", // TODO: verify nombre d'espèces, part d'endémiques et date de classement
        "La vigne, elle, est arrivée par bateau. Les premiers plants sont plantés au Cap en 1655 par les Hollandais. Trente ans plus tard, le domaine de Constantia produit un vin liquoreux que l'Europe s'arrache pendant deux siècles.", // TODO: verify dates de 1655 et de la fondation de Constantia
        "Franschhoek doit son nom et ses vignes à un autre groupe. Des huguenots français, chassés de France après 1685, s'y installent et y apportent leur savoir-faire. Le nom de la vallée signifie littéralement « le coin des Français ».",
        "Aujourd'hui, les vignobles de Stellenbosch et de Franschhoek se visitent en une journée depuis Le Cap. Les domaines se trouvent à moins de quarante minutes les uns des autres.",
      ],
      images: [
        {
          src: "/destination/afrique-du-sud/split-1.webp",
          alt: "Protéas et fynbos en fleur sur les pentes de la péninsule du Cap",
        },
        {
          src: "/destination/afrique-du-sud/split-2.webp",
          alt: "Chai d'un domaine viticole de Stellenbosch au pied des montagnes",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/afrique-du-sud/xp-art-rupestre-1.webp",
          alt: "Peintures rupestres bushmen à l'ocre rouge sur une paroi de grès du Cederberg",
        },
        right: {
          src: "/destination/afrique-du-sud/xp-art-rupestre-2.webp",
          alt: "Marche matinale vers un abri sous roche peint dans la réserve de Bushmans Kloof",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Les parois peintes du Cederberg",
        columns: [
          "Les Bushmen, aussi appelés San, ont vécu dans les montagnes du Cederberg pendant des dizaines de milliers d'années. Ils y ont peint les abris sous roche avec des pigments naturels : de l'ocre, du sang animal et des jus de plantes. La réserve de Bushmans Kloof protège aujourd'hui plus de 130 sites peints. Certains ont environ 10 000 ans. Le domaine est classé site du patrimoine naturel sud-africain pour cette raison.", // TODO: verify le nombre de 130 sites et l'âge de 10 000 ans
          "L'excursion se fait le matin. On roule d'abord une vingtaine de minutes dans la réserve, puis on marche jusqu'aux parois. Un guide explique ce que les figures représentent : des danses, des chasses à l'arc, des transes de guérisseurs. Le site de Bleeding Nose Shelter en donne l'exemple le plus net. Un homme y est peint le sang coulant du nez, relié à ses compagnons par des lignes. C'est la représentation d'une transe.",
          "Le lodge a ouvert en 2004 un centre du patrimoine qui prolonge la visite. Il abrite la collection réunie par l'anthropologue Jalmar Rudner : des bijoux, des kits de chasse, des bâtons de danse et des instruments de musique. Un jardin de plantes médicinales, planté juste à côté, montre les remèdes utilisés par les San et les Khoi de la région.", // TODO: verify la date de 2004 et l'attribution de la collection Rudner
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Afrique du Sud",
      heading: "Trois sorties inscrites à l'itinéraire",
      description:
        "Trois moments rythment le voyage. Une colonie de manchots qui niche entre les rochers de Simon's Town, à quelques mètres des passerelles. Une marche dans le bush de Thornybush, où l'on suit les traces de la nuit. Un vol au-dessus du canyon de la Blyde River et de l'escarpement du Drakensberg.",
      slugs: [
        "colonie-manchots-boulders",
        "marche-pistage-thornybush",
        "vol-helicoptere-mpumalanga",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Afrique du Sud",
      description:
        "Trois maisons, une par région. La première domine la baie du Cap et abrite une collection d'art sud-africain. La deuxième occupe une réserve privée du Cederberg. La troisième est un camp sous tente, en lisière du parc Kruger.",
      slugs: ["ellerman-house", "bushmans-kloof", "saseka-tented-camp"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Afrique du Sud",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons. Voici les repères qui permettent de caler les dates d'un voyage en Afrique du Sud.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: Il existe des vols directs depuis Paris vers Le Cap et vers Johannesburg, en onze à douze heures. Les vols partent le soir et arrivent le lendemain matin. Un vol intérieur de deux heures relie ensuite Le Cap à Hoedspruit, la porte d'entrée des réserves du Lowveld.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "TODO: L'Afrique du Sud vit toute l'année en UTC+2 et ne change pas d'heure. De fin mars à fin octobre, il est la même heure qu'à Paris. Le reste de l'année, quand il est 16 h à Paris, il est 17 h au Cap.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "TODO: La monnaie est le rand sud-africain (ZAR). La carte bancaire est acceptée partout, y compris dans les lodges. Les pourboires aux guides et aux pisteurs se règlent en espèces, en rands, et se remettent en fin de séjour.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "TODO: Aucun visa n'est demandé aux ressortissants français pour un séjour touristique de moins de quatre-vingt-dix jours. Le passeport doit rester valide au moins trente jours après la date de retour et comporter deux pages vierges face à face. En revanche, la Customs Online Traveller Declaration est obligatoire, à l'entrée comme à la sortie du territoire.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Aucune vaccination n'est obligatoire, sauf la fièvre jaune en cas d'arrivée depuis un pays où la maladie circule. Le Cap et le Cederberg ne présentent aucun risque de paludisme. Dans le Lowveld, le risque est faible et saisonnier, de novembre à avril.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: Les deux régions n'ont pas la même bonne saison. Le Cap est au mieux de novembre à mars, pendant l'été austral. Le bush est au mieux de mai à septembre, quand la végétation est basse et la faune concentrée sur les points d'eau. Mars, avril et octobre conviennent aux deux.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: Le pays compte douze langues officielles, dont l'anglais, l'afrikaans, l'isiZulu et l'isiXhosa. L'anglais est parlé partout et suffit dans les hôtels, les restaurants et les réserves. Le français n'est pratiquement pas pratiqué.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: Deux climats se partagent le pays. Au Cap, l'été est sec et venté, entre 25 et 30 °C, et la pluie tombe en hiver, de juin à août. Dans le Lowveld, c'est l'inverse : les orages arrivent l'été, de novembre à mars, et l'hiver est sec, avec des matinées autour de 8 °C.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Afrique du Sud. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/afrique-du-sud/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Afrique du Sud entre Le Cap, le Cederberg et le Kruger",
            "Adresses confidentielles en Afrique du Sud : domaines viticoles et réserves privées",
            "Hébergements en Afrique du Sud : Ellerman House et Bushmans Kloof",
            "Conciergerie privée 24/7 pour un voyage en Afrique du Sud",
            "Expériences en Afrique du Sud : art rupestre, marche de pistage et survol du Lowveld",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les lieux qui structurent le voyage",
      heading: "Six régions, du fynbos du Cap au bush du Lowveld",
      description:
        "Six secteurs composent la carte du pays. Ils sont éloignés les uns des autres et se relient par la route ou par un vol intérieur. Peu d'itinéraires les réunissent dans un même voyage.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Le Cap et Table Mountain",
          description:
            "La ville est coincée entre une montagne plate de plus de mille mètres et l'Atlantique. Un téléphérique monte au sommet en cinq minutes. Le quartier de Bo-Kaap, aux maisons peintes, et le musée Zeitz d'art contemporain africain se visitent à pied depuis le port.", // TODO: verify altitude de Table Mountain
          image: {
            src: "/destination/afrique-du-sud/map-le-cap.webp",
            alt: "Le Cap et Table Mountain vus depuis la baie, Afrique du Sud",
          },
          // TODO: verify coords
          coordinates: { lat: -33.9249, lng: 18.4241 },
        },
        {
          title: "La péninsule du Cap et Simon's Town",
          description:
            "La route longe l'océan sur une soixantaine de kilomètres jusqu'au cap de Bonne-Espérance. À mi-chemin, à Simon's Town, une colonie de manchots du Cap occupe la plage de Boulders. Les eaux de False Bay y sont plus chaudes que du côté atlantique.",
          image: {
            src: "/destination/afrique-du-sud/map-simons-town.webp",
            alt: "Manchots du Cap sur les rochers de Boulders Beach à Simon's Town",
          },
          // TODO: verify coords
          coordinates: { lat: -34.1975, lng: 18.4519 },
        },
        {
          title: "Stellenbosch et Franschhoek",
          description:
            "Les deux vallées viticoles se trouvent à moins d'une heure du Cap. Stellenbosch a été fondée en 1679 et abrite une université. Franschhoek a été peuplée par des huguenots français à partir de 1688 et concentre aujourd'hui les meilleures tables du pays.", // TODO: verify dates de fondation
          image: {
            src: "/destination/afrique-du-sud/map-winelands.webp",
            alt: "Domaine viticole de Franschhoek entre les rangs de vigne et la montagne",
          },
          // TODO: verify coords
          coordinates: { lat: -33.9111, lng: 19.1226 },
        },
        {
          title: "Le Cederberg et Clanwilliam",
          description:
            "Le massif de grès rouge se trouve à environ 250 kilomètres au nord du Cap. Il concentre le plus grand ensemble d'art rupestre bushman de la région. La réserve de Bushmans Kloof en protège plus de 130 sites et se visite à pied avec un guide.", // TODO: verify distance depuis Le Cap
          image: {
            src: "/destination/afrique-du-sud/map-cederberg.webp",
            alt: "Formations de grès rouge du Cederberg au-dessus du fynbos, Afrique du Sud",
          },
          // TODO: verify coords
          coordinates: { lat: -32.1833, lng: 19.0167 },
        },
        {
          title: "Thornybush et le parc Kruger",
          description:
            "La réserve privée de Thornybush borde le parc Kruger, sans clôture entre les deux. Les animaux passent librement d'un côté à l'autre. À la différence du parc national, les véhicules y sont peu nombreux, les guides sortent des pistes et les sorties de nuit sont autorisées.",
          image: {
            src: "/destination/afrique-du-sud/map-thornybush.webp",
            alt: "Véhicule de safari devant un troupeau d'éléphants dans la réserve de Thornybush",
          },
          // TODO: verify coords
          coordinates: { lat: -24.45, lng: 31.1667 },
        },
        {
          title: "La route des Jardins et Plettenberg Bay",
          description:
            "La route longe la côte sud sur environ 300 kilomètres, entre Mossel Bay et Storms River. Elle traverse des forêts, des lagunes et des plages. C'est le prolongement le plus simple d'un séjour au Cap, en voiture, sur trois à quatre jours.", // TODO: verify longueur de la route des Jardins
          image: {
            src: "/destination/afrique-du-sud/map-route-des-jardins.webp",
            alt: "Baie de Plettenberg et forêt côtière sur la route des Jardins, Afrique du Sud",
          },
          // TODO: verify coords
          coordinates: { lat: -34.0527, lng: 23.3716 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage en Afrique du Sud",
      description:
        "Neuf repères issus du terrain. Ils aident à choisir la période, à comprendre le découpage de l'itinéraire et à ajuster les attentes.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Les deux saisons du pays ne se recouvrent pas",
          cardEyebrow: "Climat",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La bonne saison du Cap est l'été austral, celle du bush est l'hiver. Trois mois les concilient",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Cap connaît un climat méditerranéen. L&apos;été austral, de
                novembre à mars, y est sec et lumineux. C&apos;est la seule
                période où l&apos;on peut compter sur la plage et sur les
                terrasses des domaines viticoles.
              </p>
              <p>
                Le Lowveld fonctionne à l&apos;inverse. De mai à septembre, la
                végétation est basse et les animaux se rassemblent autour des
                rares points d&apos;eau. C&apos;est la meilleure saison pour les
                observer.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Mars, avril et octobre sont les trois mois qui conviennent aux
                deux régions. Ce sont ceux que nous recommandons pour un voyage
                qui combine Le Cap et le bush.
              </p>
            </div>
          ),
        },
        {
          title: "Pourquoi une réserve privée plutôt que le parc Kruger",
          cardEyebrow: "Safari",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mêmes animaux, mêmes territoires, mais trois règles qui changent complètement les sorties",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les réserves privées de Thornybush et du Sabi Sand ne sont plus
                séparées du parc Kruger par une clôture. Les animaux circulent
                librement entre les deux. La faune est donc la même.
              </p>
              <p>
                Trois règles diffèrent. Dans une réserve privée, le nombre de
                véhicules autorisés sur une observation est limité, en général à
                deux ou trois. Les guides ont le droit de quitter la piste pour
                suivre un animal. Les sorties de nuit, au projecteur, sont
                autorisées. Rien de tout cela n&apos;est possible dans le parc
                national.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                C&apos;est la raison pour laquelle on voit plus de léopards dans
                les réserves privées. L&apos;animal se déplace hors piste et à la
                nuit tombée.
              </p>
            </div>
          ),
        },
        {
          title: "Le paludisme se limite au nord-est du pays",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le Cap et le Cederberg sont indemnes. Le Lowveld présente un risque faible et saisonnier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Cap, la péninsule, les Winelands, la route des Jardins et le
                Cederberg ne présentent aucun risque de paludisme. Ces régions
                couvrent souvent les deux tiers du voyage.
              </p>
              <p>
                Le risque existe uniquement dans le Lowveld, autour du parc
                Kruger, et il y est classé faible. Il augmente pendant la saison
                des pluies, de novembre à avril, et devient très bas en hiver
                austral.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Un traitement préventif se discute avec un médecin du voyage
                selon la saison et la durée de l&apos;étape. Les répulsifs et les
                vêtements longs au coucher du soleil restent la première
                protection.
              </p>
            </div>
          ),
        },
        {
          title: "Conduire soi-même, ou pas",
          cardEyebrow: "Route",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Conduite à gauche, très bonnes routes au Cap, et un vol intérieur pour rejoindre le bush",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On roule à gauche. Le réseau du Cap, des Winelands et de la route
                des Jardins est en très bon état et bien signalé. La voiture y
                est le moyen le plus simple de circuler, et elle donne accès aux
                domaines viticoles sans contrainte d&apos;horaire.
              </p>
              <p>
                Rejoindre le Lowveld par la route demande en revanche deux jours
                de trajet depuis Le Cap. Personne ne le fait. Un vol intérieur de
                deux heures relie Le Cap à Hoedspruit ou à Skukuza, puis le lodge
                envoie un véhicule à l&apos;aéroport.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Pour la journée dans les Winelands, nous prévoyons un chauffeur.
                Les dégustations s&apos;enchaînent et la conduite après
                dégustation est sanctionnée sévèrement.
              </p>
            </div>
          ),
        },
        {
          title: "La question de la sécurité, sans détour",
          cardEyebrow: "Sécurité",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les règles sont simples et se résument à quelques habitudes, quartier par quartier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La réputation du pays inquiète, et la question mérite une réponse
                claire. Les quartiers touristiques du Cap, les Winelands, le
                Cederberg et les réserves privées ne posent pas de difficulté
                particulière.
              </p>
              <p>
                Les usages locaux sont constants. On ne marche pas la nuit en
                ville, on se déplace en voiture ou en VTC. On ne laisse rien de
                visible dans un véhicule à l&apos;arrêt. Les townships se
                visitent uniquement avec un guide qui y vit, jamais seul.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les transferts sont assurés par des chauffeurs que nous
                connaissons, et un contact local reste joignable en permanence
                pendant le séjour.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver les tables du Cap très en amont",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les meilleures adresses du Cap et de Franschhoek se réservent plusieurs mois à l'avance",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La scène gastronomique du Cap est l&apos;une des plus solides du
                continent. Elle repose sur des produits locaux, une clientèle
                exigeante et des vins de la région.
              </p>
              <p>
                Quelques maisons concentrent la demande. La Colombe, sur les
                hauteurs de Constantia, et Wolfgat, à Paternoster, sur la côte
                ouest, affichent complet plusieurs mois à l&apos;avance. Les
                domaines de Franschhoek fonctionnent de la même façon en haute
                saison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Ces réservations se posent dès que les dates du voyage sont
                arrêtées, avant même les hôtels dans certains cas.
              </p>
            </div>
          ),
        },
        {
          title: "La déclaration en ligne, obligatoire dans les deux sens",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La Customs Online Traveller Declaration se remplit avant l'entrée et avant la sortie du territoire",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;Afrique du Sud impose à tous les voyageurs une
                déclaration en ligne auprès de ses douanes, la Customs Online
                Traveller Declaration. Elle est obligatoire à l&apos;entrée sur
                le territoire comme à la sortie.
              </p>
              <p>
                Elle ne remplace pas un visa, dont les Français sont dispensés.
                C&apos;est une formalité douanière distincte, et elle se remplit
                pour chaque trajet, pas une fois pour le séjour entier.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous envoyons le lien et la marche à suivre avant le
                départ, puis un rappel avant le vol retour. C&apos;est
                l&apos;oubli le plus fréquent sur cette destination.
              </p>
            </div>
          ),
        },
        {
          title: "Voyager avec des enfants mineurs",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'Afrique du Sud contrôle les documents des mineurs plus strictement que d'autres pays",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays applique des règles particulières aux voyageurs de moins
                de dix-huit ans. Elles visent à lutter contre les enlèvements et
                la traite d&apos;enfants.
              </p>
              <p>
                Un acte de naissance faisant apparaître les deux parents est
                demandé, en anglais ou traduit. Lorsqu&apos;un seul parent
                accompagne l&apos;enfant, une autorisation écrite de l&apos;autre
                parent est exigée en plus.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                TODO: les modalités exactes ont évolué à plusieurs reprises. Nous
                vérifions la règle en vigueur au moment du départ et préparons
                les documents avec vous.
              </p>
            </div>
          ),
        },
        {
          title: "Les vols intérieurs et les bagages",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vols réguliers vers Hoedspruit et Skukuza, sac souple si un avion léger prend le relais",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vols entre Le Cap, Johannesburg, Hoedspruit et Skukuza sont
                des vols de ligne, avec une franchise bagages classique. Rien de
                particulier n&apos;est à prévoir.
              </p>
              <p>
                La contrainte n&apos;apparaît que si un avion léger prend le
                relais vers une piste de réserve. La franchise tombe alors autour
                de 20 kg par personne, en sac souple uniquement. Les valises
                rigides ne rentrent pas dans les soutes.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le surplus se dépose en consigne à l&apos;aéroport de départ et
                se récupère au retour. Les lodges assurent le blanchissage
                quotidien.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage en Afrique du Sud",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "L'art rupestre du Cederberg",
          description:
            "Deux heures de marche le matin pour arriver devant une paroi peinte il y a dix mille ans, sans personne d'autre autour. Beaucoup viennent pour le safari et repartent en parlant du Cederberg.",
        },
        {
          title: "Du Cap au Kruger, en deux heures",
          description:
            "Rejoindre le Kruger depuis Le Cap demande deux jours de route, ou deux heures d'avion. Sur un séjour de deux semaines, le vol libère trois journées entières.",
        },
        {
          title: "La collection d'Ellerman House",
          description:
            "Les tableaux accrochés dans les salons ne sont pas de la décoration d'hôtel. C'est une collection d'art sud-africain, et quelqu'un prend le temps de la commenter.",
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
          question:
            "Quelle est la meilleure période pour partir en Afrique du Sud ?",
          answer:
            "Cela dépend des régions retenues. Le Cap, les Winelands et la route des Jardins sont au mieux de novembre à mars, pendant l'été austral. Le bush est au mieux de mai à septembre, quand la végétation est basse et la faune concentrée sur les points d'eau. Si le voyage combine les deux, mars, avril et octobre offrent le meilleur compromis.",
        },
        {
          question: "Combien de temps dure le vol Paris - Afrique du Sud ?",
          answer:
            "Il existe des vols directs depuis Paris vers Le Cap et vers Johannesburg, en onze à douze heures. Ils partent le soir et arrivent le lendemain matin, ce qui permet de commencer le voyage dès l'arrivée. Un vol intérieur de deux heures relie ensuite Le Cap à Hoedspruit ou à Skukuza pour rejoindre les réserves.",
        },
        {
          question: "Faut-il un visa pour aller en Afrique du Sud ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de quatre-vingt-dix jours. Le passeport doit rester valide au moins trente jours après la date de retour et comporter deux pages vierges face à face. Une formalité reste obligatoire pour tout le monde : la Customs Online Traveller Declaration, à remplir en ligne avant l'entrée sur le territoire et avant la sortie. Des documents complémentaires sont demandés pour les voyageurs mineurs.",
        },
        {
          question: "Que faire en Afrique du Sud en 15 jours ?",
          answer:
            "Quatre nuits au Cap, avec la péninsule jusqu'au cap de Bonne-Espérance et une journée dans les vignobles de Stellenbosch et de Franschhoek. Trois nuits ensuite dans le Cederberg, pour l'art rupestre bushman et la marche. Trois nuits sur la route des Jardins, entre Mossel Bay et Plettenberg Bay. Quatre nuits enfin dans une réserve privée du Lowveld, en lisière du parc Kruger. C'est le format que nous recommandons. En dix jours, il faut renoncer à l'une des quatre étapes.",
        },
        {
          question: "L'Afrique du Sud est-elle dangereuse pour les touristes ?",
          answer:
            "Les quartiers touristiques du Cap, les Winelands, le Cederberg et les réserves privées ne posent pas de difficulté particulière. Les règles à respecter sont simples : ne pas marcher la nuit en ville, se déplacer en voiture ou en VTC, ne rien laisser de visible dans un véhicule à l'arrêt, et ne visiter les townships qu'accompagné d'un guide qui y vit. Les transferts sont assurés par des chauffeurs que nous connaissons.",
        },
        {
          question: "Peut-on faire un safari en Afrique du Sud sans paludisme ?",
          answer:
            "Oui. Le Cederberg et le Cap sont totalement indemnes, et plusieurs réserves du Cap-Oriental, comme Shamwari ou Kwandwe, sont également hors zone de paludisme. Dans le Lowveld, autour du parc Kruger, le risque existe mais reste classé faible, et il devient très bas pendant l'hiver austral, de mai à septembre.", // TODO: verify le statut hors paludisme des réserves du Cap-Oriental
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
        "Trois prolongements naturels après un premier voyage en Afrique australe. Le Botswana pousse l'isolement plus loin, la Namibie remplace la faune par les paysages, la Tanzanie offre la grande migration. Aucun des trois ne combine autant de climats dans un même pays.",
      slugs: ["botswana", "namibie", "tanzanie"],
    },
  ],
};
