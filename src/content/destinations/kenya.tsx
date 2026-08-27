import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "kenya",
  name: "Kenya",
  country: "Kenya",
  genitive: "du Kenya",
  continentSlug: "afrique",
  blurb: "Masaï Mara, Laikipia, Galu Beach",
  keywords: [
    "kenya",
    "masai mara",
    "nairobi",
    "laikipia",
    "samburu",
    "diani beach",
    "safari",
    "afrique de l'est",
  ],
  metaTitle: "Kenya : Voyage sur mesure",
  metaDescription:
    "Voyage au Kenya sur mesure : safari au Masaï Mara, côte de Galu Beach, Laikipia. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Kenya",
      heading: "La savane au lever du jour, la côte le soir. Deux Kenya dans un seul voyage.",
      description:
        "Du Masaï Mara aux plages de Galu Beach, du Laikipia aux rives de Mida Creek : le Kenya réunit en un voyage des territoires que la plupart des pays ne posséderaient qu'un. Nous construisons cette cohérence depuis dix ans.",
      images: [
        {
          src: "/destination/kenya/hero-1.png",
          alt: "Troupeau de gnous traversant la rivière Mara au Kenya au moment de la Grande Migration",
        },
        {
          src: "/destination/kenya/hero-2.png",
          alt: "Femmes Masaï en tenue traditionnelle dans les plaines de la savane kenyane",
        },
        {
          src: "/destination/kenya/hero-3.png",
          alt: "Plage de sable blanc de Galu Beach sur la côte sud du Kenya",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Kenya ?",
      heading: "Stéphane, spécialiste du Kenya, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Le Kenya, c'est l'un des rares pays où un même voyage peut commencer dans une concession privée du Masaï Mara, sans un autre camp visible à l'horizon, et se terminer sur une plage de l'océan Indien en moins d'une heure de vol domestique. Ce que nous construisons ici, c'est cette continuité. Pas une juxtaposition de destinations.",
        role: "Travel Designer · Kenya",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Kenya",
      heading: "Deux pays dans un seul passeport",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Kenya ne se résume pas à la savane. Le Masaï Mara couvre moins de deux pour cent du territoire. Autour de lui, le Laikipia, les contreforts du mont Kenya, les plaines de l'Amboseli et la côte swahilie composent des Kenya distincts que la plupart des itinéraires ne réunissent jamais. Nous les réunissons.",
        "La Grande Migration est réelle, vérifiable au mètre : entre juillet et octobre, un million et demi de gnous traversent la rivière Mara depuis la Tanzanie. Les crocodiles attendent depuis trois mois. Le guide arrête le moteur sur la rive. Ce moment ne s'organise pas. Il se prépare, avec les bonnes personnes, depuis le bon côté de la rivière.",
        "Richard's River Camp est niché dans la réserve privée Oare Orok, fondée par Richard Roberts. Chale Island Resort occupe une petite île au large de la côte sud, face à Diani. Entre les deux, il y a un vol domestique d'une heure et une logique de voyage que nous écrivons pour chaque dossier.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/kenya/full-image.png",
        alt: "Vue aérienne des plaines du Masaï Mara au Kenya avec troupeaux de gnous et montgolfière",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Kenya : Safari en concession privée",
      heading: "Le matin où la savane change de registre",
      theme: "light",
      paragraphs: [
        "Le 4x4 quitte le camp avant l'aube. Il n'y a pas d'autres véhicules dans la concession privée Oare Orok à cette heure. La savane n'est pas encore allumée. Les lions quittent leurs positions nocturnes, les éléphants reviennent vers le point d'eau. Le guide coupe le moteur.",
        "La différence entre une concession privée et le parc national se lit ici. Dans le parc, une piste délimite ce que les véhicules peuvent faire. Dans la concession, le guide sort du 4x4, lit le sol, suit un animal à pied. Ce n'est pas une option supplémentaire. C'est une façon différente de comprendre ce qu'est la savane.",
      ],
      images: [
        {
          src: "/destination/kenya/split-1.png",
          alt: "Guide kenyan en tenue Masaï observant la faune à l'aube dans le Masaï Mara",
        },
        {
          src: "/destination/kenya/split-2.png",
          alt: "Lion au repos dans les herbes dorées du Masaï Mara au lever du soleil",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Kenya",
      heading: "Ce qu'on fait, concrètement",
      description:
        "Des moments ancrés dans des lieux précis. La montgolfière au lever du jour sur le Mara, le boutre au crépuscule à Mida Creek, la manyatta Samburu avec le lodge Ol Malo.",
      slugs: [
        "safari-montgolfiere-mara",
        "croisiere-boutre-mida-creek",
        "visite-samburu-ol-malo",
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/kenya/karen-blixen-voiture.png",
          alt: "Voiture ancienne des années 1930 dans l'atelier privé du quartier de Karen, Nairobi",
        },
        right: {
          src: "/destination/kenya/karen-blixen-musee.webp",
          alt: "Façade en pierre du musée Karen Blixen entourée de verdure dans le quartier de Karen, Nairobi",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La maison de Karen Blixen et ses vingt voitures",
        columns: [
          "Dans un atelier privé du quartier de Karen, à Nairobi, vingt voitures historiques sont rangées sous des bâches depuis des décennies. Parmi elles, la Packard utilisée sur le tournage d'Out of Africa. L'atelier n'ouvre pas au public. Le chef mécanicien reçoit un groupe à la fois, raconte chaque véhicule comme on raconte une vie. La visite dure quatre heures.",
          "Le musée Karen Blixen se trouve à cinq minutes à pied. La maison est celle du roman, celle qu'elle décrit dans les premières pages : la terrasse, la lumière de fin d'après-midi, les collines de Ngong à l'horizon. Pour ceux qui ont lu « La Ferme africaine », c'est le moment du voyage qu'on raconte à table. Un accès qui ne se trouve pas en cherchant.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Kenya",
      description:
        "Un camp de tentes dans la réserve privée Oare Orok, une propriété sur la plage de Galu Beach, une maison à Nairobi où les girafes de Rothschild passent la tête par les fenêtres du petit déjeuner.",
      slugs: ["richards-river-camp", "chale-island-resort", "giraffe-manor"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Kenya",
      description:
        "Vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer le voyage au Kenya sereinement.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: Environ 9h depuis Paris en vol direct. Kenya Airways et Air France desservent Nairobi-Jomo Kenyatta (NBO).",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "TODO: +2h en hiver, +1h en été par rapport à Paris (fuseau EAT, UTC+3). Favorable pour les sorties safari à l'aube.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "TODO: Shilling kenyan (KES). 1 € ≈ 140 KES. Les lodges acceptent les cartes bancaires. Prévoir du cash pour les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "TODO: L'eTA (Electronic Travel Authorisation) est obligatoire pour les ressortissants français depuis 2024. Demande en ligne sur le portail officiel kenyan, délai 72h.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Fièvre jaune recommandée selon le parcours. Prophylaxie antipaludique fortement conseillée pour toutes les régions, y compris Nairobi.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: Juillet à octobre pour la Grande Migration au Masaï Mara. Janvier-février, saison sèche courte, pour la côte et le Laikipia.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: Swahili (langue nationale) et anglais (langue officielle). Dans les lodges et réserves privées, l'anglais suffit. Le swahili de politesse est apprécié.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: Deux saisons des pluies (mars-mai et octobre-novembre). Températures entre 20 et 28°C en savane. Côte plus chaude (25 à 32°C).",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Kenya. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/kenya/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Kenya entre Masaï Mara, Laikipia et côte",
            "Adresses confidentielles au Kenya : lodges privés et camps hors circuit",
            "Hébergements au Kenya : Richard's River Camp et Chale Island Resort",
            "Conciergerie privée 24/7 pour un voyage au Kenya",
            "Expériences immersives au Kenya : montgolfière Mara et culture Samburu",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Kenya",
      heading: "Six territoires, et ce qu'il y a derrière",
      description:
        "Du Masaï Mara au mont Kenya, de Nairobi à la crique de Mida : six territoires que la plupart des itinéraires ne réunissent pas dans un seul voyage.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Masaï Mara, la savane des savanes",
          description:
            "La réserve nationale couvre 1 510 km². Les concessions privées autour d'elle, comme Oare Orok, offrent des safaris à pied impossibles dans le parc.",
          image: {
            src: "/destination/kenya/map-masai-mara.webp",
            alt: "Plaines dorées du Masaï Mara avec troupeaux de gnous et ciel africain",
          },
          // TODO: verify coords
          coordinates: { lat: -1.5, lng: 35.1333 },
        },
        {
          title: "Nairobi, la ville et la nature",
          description:
            "La capitale abrite le musée Karen Blixen, le sanctuaire des girafes de Rothschild et le seul parc national au monde situé en limite d'une capitale.",
          image: {
            src: "/destination/kenya/map-nairobi.webp",
            alt: "Skyline de Nairobi au coucher du soleil depuis les hauteurs de Karen",
          },
          // TODO: verify coords
          coordinates: { lat: -1.2921, lng: 36.8219 },
        },
        {
          title: "Laikipia, les plaines du nord",
          description:
            "Au nord du mont Kenya, le plateau de Laikipia abrite la plus grande population de rhinocéros noirs du pays, le sanctuaire Reteti et le lodge Ol Malo.",
          image: {
            src: "/destination/kenya/map-laikipia.webp",
            alt: "Éléphants dans les plaines arides du Laikipia sous un ciel nuageux au Kenya",
          },
          // TODO: verify coords
          coordinates: { lat: 0.2, lng: 36.7 },
        },
        {
          title: "Diani Beach, la côte sans les foules",
          description:
            "À soixante-dix kilomètres au sud de Mombasa, Diani est la côte kenyane telle qu'elle était. Galu Beach, l'île de Chale à quelques minutes de bateau, l'ombre des filaos.",
          image: {
            src: "/destination/kenya/map-diani-beach.webp",
            alt: "Plage de Diani Beach sur la côte sud du Kenya avec cocotiers et sable blanc",
          },
          // TODO: verify coords
          coordinates: { lat: -4.2833, lng: 39.5833 },
        },
        {
          title: "Watamu, la crique de Mida",
          description:
            "La crique de Mida est un site Ramsar : sept cents hectares de mangroves et d'herbiers marins classés. On y navigue en boutre au coucher du soleil.",
          image: {
            src: "/destination/kenya/map-watamu.webp",
            alt: "Boutre traditionnel voguant sur la crique de Mida à Watamu, côte nord du Kenya",
          },
          // TODO: verify coords
          coordinates: { lat: -3.3667, lng: 40.0167 },
        },
        {
          title: "Mont Kenya, les cascades de Ngare Ndare",
          description:
            "La forêt de Ngare Ndare borde les contreforts nord du mont Kenya. Les bassins naturels sous la cascade sont alimentés par les neiges du sommet à 5 199 mètres.",
          image: {
            src: "/destination/kenya/map-mont-kenya.webp",
            alt: "Cascade et bassins turquoise de la forêt de Ngare Ndare au pied du mont Kenya",
          },
          // TODO: verify coords
          coordinates: { lat: -0.1521, lng: 37.3084 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Kenya",
      description:
        "Huit observations de terrain qui ne se trouvent pas dans un guide. Pour calibrer les attentes, choisir la bonne fenêtre ou comprendre pourquoi nous inscrivons telle étape à l'itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "La Grande Migration : ni spectacle ni garantie",
          cardEyebrow: "Safari",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les gnous traversent la Mara entre juillet et octobre. Le crossing dépend du niveau de la rivière, pas du calendrier.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre juillet et octobre, un million et demi de gnous traversent
                la rivière Mara depuis la Tanzanie. La date du crossing n'est
                pas fixe. Elle dépend du niveau de la rivière, de la pression
                du troupeau en amont, et d'un instinct que les guides observent
                depuis des années.
              </p>
              <p>
                Sur la rive, on attend. Parfois une heure. Parfois deux. Puis
                les premiers gnous entrent dans l'eau, les crocodiles se
                réveillent, et le troupeau suit. Ce moment ne se commande pas.
                Il se prépare, avec le bon guide, depuis le bon côté de la
                rivière.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons nos clients dans des camps dont les guides
                connaissent les mouvements du troupeau plusieurs jours à
                l'avance. La concession privée Oare Orok offre un accès
                exclusif à une section de la rivière Mara.
              </p>
            </div>
          ),
        },
        {
          title: "Concession privée vs parc national",
          cardEyebrow: "Safari",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dans le parc, les pistes sont fixes. Dans une concession privée, le guide sort du 4x4 et lit le sol.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La réserve nationale du Masaï Mara est ouverte à tous les
                opérateurs. Les pistes y sont définies. Plusieurs dizaines de
                véhicules peuvent converger sur le même animal en haute saison.
              </p>
              <p>
                Les concessions privées adjacentes, comme Oare Orok, fonctionnent
                différemment : un seul opérateur par zone, des safaris à pied
                autorisés, aucune piste imposée. Le guide suit les traces là où
                les véhicules du parc ne peuvent pas aller. La rencontre avec
                l'animal change de nature.
              </p>
            </div>
          ),
        },
        {
          title: "Les vols domestiques kenyans",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Masaï Mara à Diani Beach en quarante-cinq minutes. Safarilink et AirKenya desservent la plupart des camps.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Kenya dispose d'un réseau de vols domestiques efficace.
                Safarilink et AirKenya desservent la plupart des camps du
                Masaï Mara, du Laikipia, de la côte et du mont Kenya. Un vol
                Masaï Mara-Diani Beach prend environ quarante-cinq minutes.
              </p>
              <p>
                Ces vols partent souvent de l'aéroport Wilson de Nairobi, pas
                de l'aéroport international Jomo Kenyatta. L'organisation des
                transferts entre les deux aéroports est une étape que nous
                gérons systématiquement dans chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "La côte swahilie en saison",
          cardEyebrow: "Côte",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La côte est idéale de janvier à mars et de juillet à octobre. Les grandes pluies d'avril-mai ferment certains lodges.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte kenyane connaît deux saisons des pluies. La grande
                saison, d'avril à mai, rend l'accès à certains lodges difficile
                et ferme quelques propriétés. La petite saison, en novembre,
                est plus courte et moins contraignante.
              </p>
              <p>
                Les meilleures fenêtres pour Diani Beach et Watamu sont
                janvier-mars (mer calme, soleil, peu de touristes) et
                juillet-octobre (saison sèche, vent idéal pour le kitesurf).
                Ces fenêtres coïncident souvent avec la Grande Migration, ce
                qui permet de combiner les deux territoires dans un même voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Paludisme et prophylaxie",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le Kenya est une zone à risque. La prophylaxie antipaludique est recommandée pour toutes les régions, y compris Nairobi.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La prophylaxie antipaludique est fortement conseillée pour tous
                les voyageurs au Kenya, quelle que soit la région visitée. Les
                médicaments disponibles (atovaquone-proguanil, doxycycline) se
                prescrivent en amont du départ. À anticiper avec un médecin du
                voyage ou un service de vaccination internationale.
              </p>
              <p>
                Les répulsifs et les moustiquaires imprégnées sont fournis par
                la plupart des lodges. Nous transmettons un brief santé complet
                à chaque client lors de la constitution du dossier voyage.
              </p>
            </div>
          ),
        },
        {
          title: "L'eTA : obligatoire avant le départ",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Depuis 2024, le Kenya exige une autorisation électronique (eTA) pour tous les ressortissants français. Délai : 72h.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Depuis janvier 2024, le Kenya a remplacé le visa traditionnel
                par une autorisation électronique de voyage (eTA), obligatoire
                pour tous les ressortissants étrangers, y compris les Français.
                La demande se fait en ligne sur le portail officiel du
                gouvernement kenyan.
              </p>
              <p>
                Le délai de traitement est généralement de 72 heures. Nous
                transmettons le lien officiel et les instructions à chaque
                client lors de la constitution du dossier voyage.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                L'eTA est distincte du visa tanzanien. Si votre itinéraire
                inclut la Tanzanie ou le Serengeti, une demande séparée est
                nécessaire.
              </p>
            </div>
          ),
        },
        {
          title: "La monnaie et les paiements",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Shilling kenyan (KES). Les lodges acceptent les cartes bancaires. Prévoir du cash pour les pourboires.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La monnaie locale est le shilling kenyan (KES). Les grands
                lodges, camps privés et hôtels de côte acceptent les cartes
                bancaires internationales. L'euro et le dollar s'échangent
                facilement dans les banques et bureaux de change de Nairobi.
              </p>
              <p>
                Les pourboires pour les guides et le personnel de camp font
                partie de la culture du safari. Prévoir du cash kenyan ou des
                dollars américains en petites coupures pour cette pratique,
                bien établie et attendue.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qu'il faut emporter",
          cardEyebrow: "Valise",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vêtements neutres pour le safari, maillots pour la côte. Les bagages souples sont obligatoires dans les petits avions.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pour le safari : vêtements dans les tons neutres (beige, kaki,
                olive), pas de blanc ni de couleurs vives. Veste légère pour
                les sorties à l'aube (10 à 15°C selon l'altitude). Jumelles
                recommandées.
              </p>
              <p>
                Pour la côte : maillots, vêtements légers, crème solaire haute
                protection. Les récifs de Diani Beach et de Kisite-Mpunguti se
                visitent en palmes et masque.
              </p>
              <h4 className="font-medium">Bagages :</h4>
              <p>
                Les vols domestiques Safarilink et AirKenya limitent les bagages
                à 15 kg en soute, dans des sacs souples uniquement. Les valises
                rigides ne sont pas acceptées à bord.
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
            "La concession privée Oare Orok, c'est une autre dimension. Pas un autre véhicule en vue, un guide qui suit les traces à pied, et un crossing de gnous qu'on a attendu deux heures sur la rive. Ces deux heures, on en parle encore.",
          image: {
            src: "/destination/kenya/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Safari Kenya, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le passage de la savane à la plage de Galu Beach en quarante-cinq minutes de vol résume ce qui est unique dans cet itinéraire. Le dîner sur l'île de Chale, les pieds dans le sable, c'est le meilleur repas du voyage.",
          image: {
            src: "/destination/kenya/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Kenya Masaï Mara et côte, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "L'atelier Karen Blixen et les voitures, c'est le moment du voyage qu'on n'attendait pas. Quatre heures avec le mécanicien, la Packard d'Out of Africa sous une bâche depuis quarante ans. On ne l'aurait jamais trouvé seuls.",
          image: {
            src: "/destination/kenya/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Kenya Culture et Safari, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Kenya ?",
          answer:
            "La saison sèche de juillet à octobre est idéale pour la Grande Migration au Masaï Mara et pour les safaris en général. Janvier et février offrent une deuxième saison sèche, plus courte, excellente pour la côte et le Laikipia. Les grandes pluies d'avril-mai sont à éviter pour les safaris.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Le vol Paris-Nairobi dure environ 9 heures en vol direct. Kenya Airways et Air France proposent des liaisons régulières depuis Charles-de-Gaulle. Certains vols incluent une escale selon les périodes.",
        },
        {
          question: "Faut-il un visa pour aller au Kenya ?",
          answer:
            "Depuis janvier 2024, le Kenya exige une autorisation électronique de voyage (eTA) pour tous les ressortissants étrangers, y compris les Français. La demande se fait en ligne sur le portail officiel kenyan, avec un délai de traitement d'environ 72 heures. L'eTA est payante et doit être obtenue avant le départ.",
        },
        {
          question: "Que faire au Kenya en 10 jours ?",
          answer:
            "Un itinéraire de 10 jours peut combiner 4 à 5 nuits au Masaï Mara dans une concession privée pour les safaris, puis 4 à 5 nuits sur la côte à Diani Beach ou Watamu. Un vol domestique d'environ 45 minutes relie les deux zones. Nairobi, avec le musée Karen Blixen et le sanctuaire des girafes, s'inscrit en étape d'une nuit à l'arrivée ou au départ.",
        },
        {
          question: "Le Kenya est-il adapté aux familles avec enfants ?",
          answer:
            "Oui, à condition de bien choisir les camps et les activités. Les concessions privées du Masaï Mara acceptent les enfants à partir de 6 ou 8 ans pour les safaris en 4x4. La côte est idéale pour tous les âges. Certaines expériences comme planter un arbre au Masaï Mara via Abercrombie & Kent Philanthropy sont conçues spécifiquement pour les familles.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Kenya ?",
          answer:
            "Un voyage au Kenya sur mesure avec Exuma, incluant les camps privés du Masaï Mara et un lodge de côte, se situe généralement entre 5 000 et 12 000 € par personne pour 10 jours, hors vols internationaux, selon les hébergements et la saison. Les lodges en concession privée ont un tarif plus élevé que les camps en parc national, mais offrent un accès exclusif à la faune.",
        },
      ],
    },
  ],
};
