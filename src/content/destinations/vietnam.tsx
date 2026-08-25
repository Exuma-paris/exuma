import type { Destination } from "@/lib/content/types";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "vietnam",
  name: "Vietnam",
  placeKind: "country",
  country: "Vietnam",
  genitive: "du Vietnam",
  continentSlug: "asie",
  blurb: "Hanoï, Hué, baie de Lan Ha, Sa Pa, Nha Trang",
  keywords: [
    "vietnam",
    "hanoi",
    "hue",
    "sapa",
    "baie de lan ha",
    "nha trang",
    "delta du mekong",
    "hoi an",
  ],
  metaTitle: "Vietnam : Voyage sur mesure",
  metaDescription:
    "Voyage sur mesure au Vietnam : Hanoï, Hué, baie de Lan Ha, rizières de Sa Pa. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage sur mesure au Vietnam",
      heading:
        "Vietnam. Le karst plonge dans la mer, la rizière grimpe vers le ciel.",
      description:
        "Du nord au sud, le Vietnam change de visage à chaque étape. Les pitons karstiques de la baie de Lan Ha, les ruelles de Hué, les rizières en terrasses de Sa Pa, les eaux du delta du Mékong : autant de paysages, de cuisines et de rythmes qui racontent un même pays autrement.",
      images: [
        {
          src: "/destination/vietnam/hero-1.png",
          alt: "Jonque traditionnelle voguant entre les pitons karstiques de la baie de Lan Ha, Vietnam",
        },
        {
          src: "/destination/vietnam/hero-2.png",
          alt: "Cour intérieure de la Cité impériale de Hué au crépuscule, Vietnam",
        },
        {
          src: "/destination/vietnam/hero-3.png",
          alt: "Rizières en terrasses des hauts plateaux de Sa Pa au lever du jour, Vietnam",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Vietnam ?",
      heading: "Stéphane, spécialiste du Vietnam, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Le Vietnam se referme vite si l'on reste sur la route principale. Entre Hanoï et Hué, il y a toute une autre histoire : celle des jonques qui dorment dans une crique de la baie de Lan Ha, celle d'une cour impériale que peu de voyageurs prennent le temps de comprendre. Mon travail, c'est d'inscrire ces heures-là dans l'itinéraire, avant qu'elles ne disparaissent.",
        role: "Travel Designer · Vietnam",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Adresses hors des grands groupes",
          description:
            "Villas isolées dans un parc national, résidence coloniale à Hué, baie accessible par bateau : des adresses choisies pour leur situation, leur histoire et leur caractère.",
        },
        {
          iconName: "sparkles",
          title: "Logique nord-sud",
          description:
            "Hanoï, Hué, le Centre, le Sud : une progression pensée pour que chaque étape change de climat et de rythme, jamais de logique.",
        },
        {
          iconName: "star",
          title: "Accès négociés localement",
          description:
            "Historiens de la cour impériale, guides Hmong, capitaines de jonque : des rencontres choisies pour leur connaissance intime du pays et construites au fil du temps.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un pays qui change de visage à chaque étape",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Du nord au sud, le Vietnam compose un voyage de contrastes. Sur plus de 1 600 kilomètres, le pays s’étire du delta du fleuve Rouge aux mangroves du Mékong. À Hanoï, en janvier, on porte une veste. Le même jour, à Hô-Chi-Minh-Ville, le thermomètre approche les 30 °C. Cette diversité climatique donne son rythme au voyage.",
        "La baie de Lan Ha, plus discrète que sa voisine d’Halong, dévoile ses criques et ses îlots depuis l’eau. Plus au centre, Hué conserve les palais et les tombeaux des empereurs Nguyễn, le long de la rivière des Parfums. Dans les montagnes du nord-ouest, les rizières en terrasses de Sa Pa changent de teinte au fil des saisons, du vert tendre aux nuances dorées. C’est cette succession de paysages et de rythmes qui guide nos itinéraires : chaque déplacement a sa raison, chaque étape apporte quelque chose à la suivante.",
        "« Il y a le Vietnam que l’on traverse en dix jours entre Hanoï et Hô-Chi-Minh-Ville, et celui que l’on découvre en prenant le temps de s’arrêter. Entre les deux, il y a tout le voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/vietnam/full-image.png",
        alt: "Pitons karstiques émergeant de la baie de Lan Ha au lever du jour, Vietnam",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Hué, la mémoire d'une cour impériale",
      heading: "Ce que la rivière des Parfums a gardé",
      theme: "light",
      paragraphs: [
        "À l'aube, la rivière des Parfums est couverte d'une brume qui ne se lève qu'après huit heures. La Cité impériale, fondée en 1804 par l'empereur Gia Long, s'ouvre par la porte Ngọ Môn, celle que seul l'empereur pouvait franchir en son centre. Treize empereurs de la dynastie Nguyễn se sont succédé ici jusqu'en 1945. Certains pavillons ont été détruits pendant la guerre du Vietnam ; d'autres, restaurés pierre par pierre, gardent encore leurs toits de tuiles vernissées.",
        "Un historien de la cour, descendant d'une famille de mandarins, ouvre certains pavillons fermés au public et raconte les rituels du culte des ancêtres impériaux, la hiérarchie des concubines, la construction du tombeau de Tự Đức, que l'empereur a lui-même conçu comme un jardin avant d'y être enterré loin de l'endroit prévu. La visite se termine sur le fleuve, à bord d'un bateau-dragon, quand la lumière rase les tombeaux.",
      ],
      images: [
        {
          src: "/destination/vietnam/split-1.png",
          alt: "Porte Ngọ Môn de la Cité impériale de Hué dans la brume matinale",
        },
        {
          src: "/destination/vietnam/split-2.png",
          alt: "Bateau-dragon traditionnel sur la rivière des Parfums à Hué",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/vietnam/xp-croisiere-lan-ha-1.png",
          alt: "Jonque en bois voguant entre les pitons karstiques de la baie de Lan Ha, Vietnam",
        },
        right: {
          src: "/destination/vietnam/xp-croisiere-lan-ha-2.png",
          alt: "Crique déserte de la baie de Lan Ha vue depuis le pont d'une jonque privée",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Un paysage que l’on découvre autrement",
        columns: [
          "La baie d’Halong est devenue l’un des paysages les plus connus du Vietnam. À une heure de navigation, la baie de Lan Ha dévoile les mêmes reliefs karstiques et les mêmes eaux couleur jade, dans une atmosphère plus préservée. À bord d’une jonque privée, le départ se fait depuis le port de Got, loin du rythme des croisières classiques. Le capitaine adapte la navigation aux marées et aux conditions du jour, choisissant les mouillages au fil de l’eau.",
          "Le déjeuner se prend à l’ancre, dans une crique entourée de falaises. L’après-midi, un kayak permet de se glisser sous les arches de calcaire et d’explorer des grottes accessibles uniquement lorsque la mer le permet. Puis vient le soir, lorsque le moteur s’arrête et que la baie retrouve son calme : le bruit de l’eau contre la coque devient le seul mouvement perceptible.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Vietnam",
      heading: "Nos coups de cœur au Vietnam",
      description:
        "Trois façons d'entrer dans un Vietnam qui ne se lit pas à la vitesse d'un bus touristique. Une cité impériale, des rizières en altitude, une table de chef à Hanoï.",
      slugs: [
        "cite-imperiale-hue-historien",
        "trekking-rizieres-sapa",
        "diner-chef-hanoi",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Vietnam",
      heading: "Où séjourner",
      description:
        "Trois adresses qui racontent trois visages du Vietnam : le parc national de Nui Chua, la mémoire coloniale de Hué, une baie de Nha Trang coupée du monde. Le niveau se lit dans le texte, pas dans les étoiles.",
      slugs: ["amanoi", "la-residence-hue", "six-senses-ninh-van-bay"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Vietnam",
      description:
        "Décalage horaire, monnaie, visa, saison : l'essentiel pour construire un itinéraire au Vietnam sans mauvaise surprise.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 12 à 14 heures depuis Paris vers Hanoï ou Hô-Chi-Minh-Ville, avec ou sans escale selon la compagnie.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "6 heures d'avance sur la France en hiver, 5 heures en été. Le Vietnam conserve la même heure toute l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Dong vietnamien (VND). 1 € ≈ 27 000 dongs (à titre indicatif). Les cartes bancaires sont acceptées dans les hôtels et restaurants haut de gamme ; prévoir des espèces pour les marchés et petites adresses.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Passeport valide requis. Les ressortissants français peuvent séjourner au Vietnam sans visa jusqu'à 45 jours pour un séjour touristique.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est obligatoire pour un voyage touristique. Les vaccinations universelles doivent être à jour ; un traitement préventif peut être recommandé selon les régions visitées.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Février à avril et octobre à décembre offrent de belles conditions pour découvrir le pays. Le Sud est particulièrement agréable de décembre à avril.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le vietnamien est la langue officielle. L'anglais est présent dans les grandes villes et les hôtels, mais reste plus discret dans les régions rurales.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le Vietnam connaît de forts contrastes climatiques du nord au sud. Hanoï offre des hivers plus frais, le Sud reste chaud toute l'année, tandis que le littoral central connaît une saison des pluies plus marquée à l'automne.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Vietnam. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/vietnam/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé pour un voyage au Vietnam",
            "Ruelle du Vieux Quartier de Hanoï au crépuscule",
            "Villa isolée dans un parc national vietnamien",
            "Concierge Exuma organisant un transfert privé à Hanoï",
            "Capitaine de jonque au travail dans la baie de Lan Ha",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Vietnam",
      heading: "Six lieux, et ce qu'ils gardent",
      description:
        "Hanoï, Hué, la baie de Lan Ha : les grands repères d'un voyage au Vietnam, complétés de lieux que la plupart des voyageurs traversent sans s'arrêter.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Hanoï, mille ans de capitale",
          description:
            "Le Vieux Quartier garde trente-six corporations d'artisans dans ses ruelles. Le lac Hoàn Kiếm loue sa légende de tortue géante à qui veut l'entendre.",
          image: {
            src: "/destination/vietnam/map-hanoi.png",
            alt: "Ruelles animées du Vieux Quartier de Hanoï, Vietnam",
          },
          coordinates: { lat: 21.0278, lng: 105.8342 },
        },
        {
          title: "Baie de Lan Ha, les karsts sans le trafic",
          description:
            "À une heure de navigation d'Halong, les mêmes pitons karstiques, une fraction du trafic. Les jonques y mouillent encore dans des criques désertes.",
          image: {
            src: "/destination/vietnam/map-lan-ha.png",
            alt: "Pitons karstiques de la baie de Lan Ha vus depuis une jonque, Vietnam",
          },
          // TODO: verify coords
          coordinates: { lat: 20.73, lng: 107.09 },
        },
        {
          title: "Hué, la cour des empereurs Nguyễn",
          description:
            "Cité impériale sur la rivière des Parfums. Treize règnes, un seul titre : Kinh đô, la capitale.",
          image: {
            src: "/destination/vietnam/map-hue.png",
            alt: "Cité impériale de Hué au bord de la rivière des Parfums, Vietnam",
          },
          coordinates: { lat: 16.4637, lng: 107.5909 },
        },
        {
          title: "Hoi An, le port que le temps a arrêté",
          description:
            "Ancien port marchand du XVIe siècle, lanternes de soie et maisons de négociants japonais et chinois. Classé au patrimoine mondial de l'UNESCO.",
          image: {
            src: "/destination/vietnam/map-hoi-an.png",
            alt: "Lanternes de soie dans les rues anciennes de Hoi An, Vietnam",
          },
          coordinates: { lat: 15.8801, lng: 108.338 },
        },
        {
          title: "Sa Pa, les rizières en altitude",
          description:
            "Rizières en terrasses des ethnies Hmong et Dao, à quinze cents mètres d'altitude. Le brouillard couvre les sommets avant midi, la plupart des jours.",
          image: {
            src: "/destination/vietnam/map-sapa.png",
            alt: "Rizières en terrasses de Sa Pa dans la brume, Vietnam",
          },
          coordinates: { lat: 22.3364, lng: 103.8438 },
        },
        {
          title: "Delta du Mékong, neuf bras avant l'océan",
          description:
            "Marchés flottants dès cinq heures du matin, le riz s'y récolte trois fois par an. Une géographie d'eau, de barques et de vergers flottants.",
          image: {
            src: "/destination/vietnam/map-mekong.png",
            alt: "Marché flottant du delta du Mékong au lever du jour, Vietnam",
          },
          // TODO: verify coords
          coordinates: { lat: 10.0333, lng: 105.7833 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Vietnam",
      description:
        "Huit clés de lecture pour comprendre le Vietnam autrement. Des repères qui guident nos choix d'étapes et la construction de chaque itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Passeport, tenue légère et lainage pour le nord en hiver, chaussures faciles à retirer.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Passeport valide au moins 6 mois après la date de
                retour. Exemption de visa pour un séjour touristique de 45
                jours pour les ressortissants français.
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                Tenue légère pour le Sud, un lainage pour les soirées à
                Hanoï et Sa Pa entre décembre et février. Des chaussures
                faciles à enlever, utiles dans les pagodes et certaines
                maisons.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nos clients reçoivent une checklist personnalisée selon les
                étapes prévues, environ trois semaines avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire pour un séjour touristique. Vigilance eau et moustiques selon les régions.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire. Vaccinations universelles à
                jour recommandées. Une protection antipaludique peut être
                conseillée pour certaines zones rurales, selon la saison.
              </p>
              <p>
                Eau en bouteille recommandée en dehors des grands hôtels.
                Répulsif anti-moustiques utile dans le delta du Mékong et
                les hauts plateaux.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique : antalgiques,
                pansements, traitement anti-diarrhéique, répulsif.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le Nord et le Sud n'ont jamais la même saison au même moment.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Février à avril offre le meilleur compromis pour le
                Nord et le Centre : lumière douce, peu de pluie. Septembre à
                décembre reste également favorable.
              </p>
              <p>
                Le Sud, moins marqué par les saisons, se visite bien de
                décembre à avril. Juillet-août correspond à la saison des
                pluies dans le Centre et le Sud, avec des averses courtes
                mais fréquentes.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                TODO: Nous ajustons l&apos;ordre des étapes nord-sud selon
                la saison de départ, pour ne jamais faire coïncider une
                étape avec sa période la moins favorable.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dong vietnamien. Carte bancaire dans les hôtels et restaurants, espèces privilégiées dans les marchés et petites adresses locales.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Dong vietnamien (VND). Les grands hôtels et
                restaurants acceptent la carte ; les marchés et petites
                adresses restent en espèces. Pourboire non obligatoire mais
                apprécié dans les services privés.
              </p>
              <p>
                Les marchés du matin, comme Đồng Xuân à Hanoï ou les marchés
                flottants du Mékong, offrent un aperçu direct de la vie
                quotidienne.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons systématiquement les transferts de nos
                clients : chauffeur privé, vols intérieurs, bateaux entre
                étapes.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer au Vietnam",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le pays s'étire en longueur : les vols intérieurs remplacent souvent la route entre étapes éloignées.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre Hanoï et Hué ou Hô-Chi-Minh-Ville, le vol intérieur
                remplace généralement la route ou le train de nuit, plus
                longs. Sur des distances plus courtes, la voiture avec
                chauffeur reste la meilleure option.
              </p>
              <p>
                Le train Hanoï-Lao Cai, pour rejoindre Sa Pa, se fait
                traditionnellement de nuit, en cabine privée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calculons systématiquement l&apos;option la plus
                pertinente selon votre itinéraire et réservons chaque trajet
                à l&apos;avance.
              </p>
            </div>
          ),
        },
        {
          title: "Marchés flottants du Mékong",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les marchés flottants se visitent tôt, avant que la chaleur et les bateaux de tourisme n'arrivent.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le marché de Cái Răng, près de Cần Thơ, débute dès cinq
                heures du matin. Chaque bateau accroche à un mât le produit
                qu&apos;il vend : une perche de bambou pour se repérer sans
                un mot.
              </p>
              <p>
                Après huit heures, les bateaux de tourisme se multiplient et
                l&apos;atmosphère change de nature.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Passer la nuit précédente sur une jonque du delta permet
                d&apos;arriver sur le marché avant les groupes.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver avant de partir",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les jonques privées et certaines visites confidentielles à Hué doivent être réservées plusieurs semaines à l’avance.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les jonques privées de la baie de Lan Ha, tout comme
                l&apos;accompagnement par un historien de la cour Nguyễn à
                Hué, ne se réservent pas en ligne : ils se négocient
                localement, sur introduction.
              </p>
              <p>
                Les meilleurs guides Hmong pour un trekking à Sa Pa sont
                également sollicités bien avant la haute saison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous verrouillons ces réservations dès la confirmation du
                voyage, souvent avant même le reste de l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Formalités et douanes",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'e-visa se demande en ligne, mais l'exemption de 45 jours dispense la plupart des voyageurs français.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Les ressortissants français bénéficient d&apos;une
                exemption de visa pour un séjour touristique de 45 jours.
                Au-delà, une demande d&apos;e-visa est nécessaire avant le
                départ.
              </p>
              <p>
                Le passeport doit rester valide au moins 6 mois après la
                date de retour prévue.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions systématiquement les formalités de chaque
                client avant le départ, selon sa nationalité et la durée du
                séjour.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage au Vietnam",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "Une nuit sur la baie de Lan Ha",
          description:
            "La jonque mouille à l'écart, sans un autre bateau en vue. Lan Ha reste plus calme que sa voisine.",
        },
        {
          title: "Hué en dehors des heures d'ouverture",
          description:
            "L'historien raconte la cour impériale dans une cité vide. La visite ne ressemble en rien à celle de la journée.",
        },
        {
          title: "Du nord jusqu'au delta",
          description:
            "Le pays est long. Un itinéraire tient quand aucun déplacement n'est là par défaut.",
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
          question: "Quelle est la meilleure période pour partir au Vietnam ?",
          answer:
            "Février à avril et septembre à décembre offrent le meilleur compromis pour le Nord et le Centre, hors saison des pluies. Le Sud, moins marqué par les saisons, reste agréable de décembre à avril. Le pays s'étirant sur seize cents kilomètres, il est rare qu'une même période convienne partout à la fois.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 12h à 13h de vol depuis Paris vers Hanoï ou Hô-Chi-Minh-Ville, avec ou sans escale selon la compagnie (Vietnam Airlines, Air France).",
        },
        {
          question: "Faut-il un visa pour aller au Vietnam ?",
          answer:
            "Les ressortissants français bénéficient d'une exemption de visa pour un séjour touristique de 45 jours. Au-delà, une demande d'e-visa est nécessaire avant le départ. Un passeport valide au moins 6 mois après la date de retour reste requis dans tous les cas.",
        },
        {
          question: "Combien d'étapes peut-on faire en deux semaines ?",
          answer:
            "Nous recommandons généralement 3 à 4 étapes pour un séjour de deux semaines, compte tenu de la longueur du pays : Hanoï et la baie de Lan Ha, Hué ou Hoi An dans le Centre, puis le Sud ou les hauts plateaux de Sa Pa selon les envies.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Le Vietnam se prête bien aux séjours en famille : croisière en jonque, rizières de Sa Pa, marchés flottants du Mékong offrent des expériences qui captivent les enfants comme les adultes. Nous adaptons le rythme et les hébergements à l'âge des enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Vietnam ?",
          answer:
            "Nos voyages sur mesure s'adaptent à chaque projet. À titre indicatif, un séjour de deux semaines au Vietnam se situe généralement autour de 8 000 € par personne, selon les hébergements, les expériences privées et la saison.",
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
        "Trois autres pays où la même philosophie guide nos voyages : une progression pensée, des expériences révélées par notre connaissance du terrain.",
      slugs: ["japon", "grece", "kenya"],
    },
  ],
};
