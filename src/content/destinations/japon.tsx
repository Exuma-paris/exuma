import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "japon",
  name: "Japon",
  placeKind: "country",
  country: "Japon",
  genitive: "du Japon",
  continentSlug: "asie",
  blurb: "Tokyo, Kyoto, Mont Fuji, Kanazawa, Nara",
  keywords: [
    "japon",
    "tokyo",
    "kyoto",
    "mont fuji",
    "kanazawa",
    "kaiseki",
    "shinkansen",
    "asie",
  ],
  metaTitle: "Japon : Voyage sur mesure",
  metaDescription:
    "Voyage sur mesure au Japon : Tokyo, Kyoto, Mont Fuji, ryokans et artisans. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage sur mesure au Japon",
      heading: "Japon. Là où les traditions façonnent encore le quotidien.",
      description:
        "Des ruelles de Kyoto aux paysages d'Hokkaido, le Japon dévoile ses plus beaux secrets à ceux qui prennent le temps de le découvrir. Un maître sushi, un temple confidentiel, un ryokan d'exception : autant d'expériences exclusives que nous sélectionnons depuis plus de dix ans.",
      images: [
        {
          src: "/destination/japon/hero-1.png",
          alt: "Tokyo illuminé la nuit, vue depuis un gratte-ciel du quartier d'Otemachi, Japon",
        },
        {
          src: "/destination/japon/hero-2.png",
          alt: "Temple en bois du Kyoto historique entouré d'érables à l'automne, Japon",
        },
        {
          src: "/destination/japon/hero-3.png",
          alt: "Mont Fuji enneigé vu depuis les rives du lac Kawaguchiko, Japon",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Japon ?",
      heading: "Carole, spécialiste du Japon, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Le Japon se refuse à qui va vite. On peut visiter Tokyo, Kyoto et le Mont Fuji en dix jours et n'avoir rien vu du pays. Mon travail commence là où s'arrête le guide touristique : la porte du sous-temple qui n'ouvre que sur présentation, l'écurie de sumo qui n'accepte aucune visite sans introduction. C'est cette porte-là qui change le voyage.",
        role: "Travel Designer · Japon",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Adresses fermées au public",
          description:
            "Sous-temples de Kyoto, écuries de sumo, ateliers d'artisans : des portes qui ne s'ouvrent normalement pas aux visiteurs.",
        },
        {
          iconName: "sparkles",
          title: "Logique par régions",
          description:
            "Tokyo, Kyoto, les Alpes japonaises : une progression pensée pour que chaque étape change de registre, jamais de rythme.",
        },
        {
          iconName: "star",
          title: "Accès négociés localement",
          description:
            "Maîtres de thé, chefs étoilés, artisans : des relations construites sur place, pas des réservations en ligne.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Un pays qui se découvre par les gestes",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Japon se découvre dans les gestes, plus que dans les lieux que l'on coche. À Kyoto, certains sous-temples de Nanzen-ji n'ouvrent leurs portes qu'à quelques visiteurs, sur recommandation. Ailleurs, un maître artisan répète le même geste depuis quarante ans, avec une précision qui ne doit rien au hasard. C'est dans ces détails, souvent invisibles au premier regard, que le Japon se révèle.",
        "Le voyage se construit ensuite par contrastes. Tokyo pour son énergie, sa densité et la précision de ses services. Puis le Shinkansen vers Kyoto, où le rythme change, entre jardins, temples et maisons de thé. Plus loin, les Alpes japonaises, Hakone ou les rives du lac Kawaguchi, pour retrouver le silence et laisser le mont Fuji apparaître, parfois simplement depuis une fenêtre.\n\nDepuis plus de dix ans, nous imaginons ces itinéraires comme une succession de nuances plutôt qu'une liste d'étapes. Chaque lieu prépare le suivant. Chaque détour a sa raison. Et c'est souvent entre deux incontournables que commence le véritable voyage.",
        "« Il y a le Japon que l'on traverse à trois cents kilomètres à l'heure, et celui que l'on découvre dans le geste précis d'un artisan. Entre les deux, il y a tout un voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/japon/full-image.png",
        alt: "Tunnel de torii rouges du sanctuaire Fushimi Inari à Kyoto, Japon",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Kyoto, quand la lenteur devient un art",
      heading: "Ce qui se transmet loin des regards",
      theme: "light",
      paragraphs: [
        "Cinq heures et demie. Tokyo dort encore lorsque les portes d'une écurie de sumo s'ouvrent. Sur la terre battue, les lutteurs commencent leur entraînement pieds nus. Les corps se heurtent, les pas résonnent, puis le silence reprend sa place. Quelques bancs de bois, quelques privilégiés admis par l'écurie : rien n'est mis en scène.",
        "Ailleurs, un maître de thé verse l'eau avec une précision presque imperceptible. La température, le choix du bol, la lumière du jour : chaque détail compte. Vingt minutes pour préparer trois bols. Un geste transmis depuis des siècles, répété aujourd'hui avec la même attention.\n\nCe sont ces instants que l'on vient chercher au Japon. Des gestes qui existaient avant nous, qui continueront après nous, et qui ne changent pas parce qu'on les regarde.",
      ],
      images: [
        {
          src: "/destination/japon/split-1.png",
          alt: "Lutteur de sumo s'entraînant tôt le matin dans une écurie de Tokyo, Japon",
        },
        {
          src: "/destination/japon/split-2.png",
          alt: "Maître de thé versant l'eau lors d'une cérémonie traditionnelle à Kyoto, Japon",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/japon/xp-survol-fuji-1.png",
          alt: "Hélicoptère survolant le Mont Fuji au lever du soleil, Japon",
        },
        right: {
          src: "/destination/japon/xp-survol-fuji-2.png",
          alt: "Vue aérienne du sommet enneigé du Mont Fuji depuis un hélicoptère privé",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Quand le mont Fuji apparaît autrement",
        columns: [
          "L'hélicoptère décolle de Tokyo avant six heures, lorsque l'air est encore stable et que les nuages n'ont pas encore gagné les hauteurs. 3 776 mètres, une silhouette photographiée des millions de fois. Pourtant, depuis les airs, dans la lumière rasante du matin, le mont Fuji semble soudain différent. Plus brut, plus silencieux, presque inédit.",
          "Le vol se poursuit autour du sommet avant de redescendre vers les cinq lacs, avec Kawaguchiko en contrebas. Vingt-cinq minutes suspendues au-dessus des paysages, dont aucune ne ressemble tout à fait à la précédente. Le vent, la lumière, la saison décident de ce que l'on verra ce matin-là.\n\nIci, rien n'est figé. Le vol se dessine avec la météo et les conditions du jour, pour offrir un autre regard sur l'une des silhouettes les plus familières du Japon.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Japon",
      heading: "Nos coups de cœur au Japon",
      description:
        "Trois portes d'entrée vers un Japon plus confidentiel. Une écurie de sumo, un sous-temple fermé, une maison de geisha : trois façons d'entrer dans un Japon qui ne se donne pas à qui va vite.",
      slugs: ["keiko-sumo-tokyo", "ceremonie-the-nanzenji", "kaiseki-geisha-gion"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements au Japon",
      heading: "Où séjourner",
      description:
        "Trois adresses qui racontent trois visages du Japon : la densité de Tokyo, la lenteur de Kyoto, le silence du Mont Fuji. Au Japon, l'excellence se révèle dans les attentions les plus discrètes.",
      slugs: ["aman-tokyo", "hoshinoya-kyoto", "hoshinoya-fuji"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Japon",
      description:
        "Décalage horaire, monnaie, visa, saison : l'essentiel pour construire un itinéraire au Japon sans mauvaise surprise.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 13h à 14h de vol direct depuis Paris vers Tokyo (Haneda principalement, parfois Narita selon les programmes), avec Air France ou ANA.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "8 heures d'avance sur la France en hiver, 7 heures en été. Le Japon ne change jamais d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Yen japonais (JPY). 1 € ≈ 160 yens (à titre indicatif, selon le taux de change en vigueur). Si le Japon reste historiquement attaché aux paiements en espèces, les cartes bancaires et paiements sans contact sont désormais largement acceptés dans les grandes villes, les hôtels et les établissements haut de gamme.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Passeport valide requis. Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de 90 jours.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description: "Aucun vaccin obligatoire. Les vaccinations universelles à jour suffisent.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Mars-avril pour admirer les cerisiers en fleurs, octobre-novembre pour les couleurs flamboyantes des érables. Juin correspond à la saison des pluies dans une grande partie du pays ; les randonnées peuvent être moins favorables, même si certaines régions restent agréables.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le japonais est la langue principale. L'anglais reste parfois limité en dehors des grandes villes, mais les hôtels de luxe et nos partenaires locaux permettent un accompagnement fluide tout au long du voyage.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le Japon connaît quatre saisons bien marquées. Les étés sont chauds et humides, les hivers secs et froids dans le centre du pays, tandis que Hokkaido offre des paysages enneigés exceptionnels. Le climat varie fortement selon les régions, de l'archipel subtropical d'Okinawa aux montagnes du nord.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Japon. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        // Japon-specific description overrides — scoped to this destination only,
        // the shared defaultBento.cards text (used by other destinations) is untouched.
        description:
          [
            "Une manière de voyager où chaque étape trouve naturellement sa place. Nous dessinons des journées équilibrées entre découvertes, rencontres et temps suspendus.",
            "Maisons, restaurants, ateliers d'artisans, palais privés. Des adresses qui ne se découvrent pas simplement en quelques clics.",
            "Maisons d'hôtes, palais transformés, hôtels de famille. Ici, le caractère se révèle dans le choix des matériaux, la cuisine, l'attention portée à chaque détail du quotidien.",
          ][i] ?? card.description,
        image: {
          src: `/destination/japon/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé pour un voyage au Japon",
            "Ruelle d'un quartier historique de Kyoto au crépuscule",
            "Chambre de ryokan traditionnelle avec vue sur un jardin japonais",
            "Concierge Exuma organisant un transfert privé à Tokyo",
            "Maître artisan japonais au travail dans son atelier",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Japon",
      heading: "Six lieux, et les histoires qu'ils racontent",
      description:
        "Tokyo, Kyoto, le mont Fuji : les grands repères d'un voyage au Japon, enrichis de lieux plus discrets que l'on découvre autrement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Tokyo, la densité et la précision",
          description:
            "Quatorze millions d'habitants et un métro qui arrive à la seconde près. Le quartier de Ginza le jour, celui de Shibuya la nuit : deux villes dans la même ville.",
          image: {
            src: "/destination/japon/map-tokyo.png",
            alt: "Croisement animé de Shibuya de nuit à Tokyo, Japon",
          },
          coordinates: { lat: 35.6762, lng: 139.6503 },
        },
        {
          title: "Kyoto, mille six cents temples et une seule capitale",
          description:
            "Capitale impériale pendant plus de mille ans. Le quartier de Gion garde encore ses maisons de geisha en activité.",
          image: {
            src: "/destination/japon/map-kyoto.png",
            alt: "Ruelles de pierre du quartier de Gion à Kyoto, Japon",
          },
          coordinates: { lat: 35.0116, lng: 135.7681 },
        },
        {
          title: "Mont Fuji, la montagne qu'on ne voit jamais deux fois pareille",
          description:
            "Visible depuis Tokyo un jour sur trois seulement, selon l'humidité. Les sources chaudes de Hakone permettent de l'observer en onsen extérieur.",
          image: {
            src: "/destination/japon/map-fuji.png",
            alt: "Mont Fuji enneigé reflété dans le lac Kawaguchiko, Japon",
          },
          coordinates: { lat: 35.3606, lng: 138.7274 },
        },
        {
          title: "Kanazawa, la ville que la guerre a épargnée",
          description:
            "Aucun bombardement en 1945 : les quartiers de samouraïs et de geishas ont traversé les siècles intacts. Le jardin Kenroku-en compte parmi les trois plus beaux du pays.",
          image: {
            src: "/destination/japon/map-kanazawa.png",
            alt: "Quartier historique des samouraïs de Kanazawa, Japon",
          },
          // TODO: verify coords
          coordinates: { lat: 36.5613, lng: 136.6562 },
        },
        {
          title: "Nara, la première capitale",
          description:
            "Fondée en 710, avant Kyoto. Mille daims sacrés circulent librement autour du grand Bouddha de bronze du Tôdai-ji.",
          image: {
            src: "/destination/japon/map-nara.png",
            alt: "Daims sacrés devant le temple Todai-ji à Nara, Japon",
          },
          // TODO: verify coords
          coordinates: { lat: 34.6851, lng: 135.8048 },
        },
        {
          title: "Miyajima, le torii qui flotte sur la mer",
          description:
            "Le sanctuaire d'Itsukushima et son portail rouge, immergés à marée haute. L'île interdit toute naissance ou tout décès sur son sol depuis des siècles.",
          image: {
            src: "/destination/japon/map-miyajima.png",
            alt: "Torii rouge du sanctuaire d'Itsukushima à marée haute, Japon",
          },
          // TODO: verify coords
          coordinates: { lat: 34.296, lng: 132.3197 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Japon",
      description:
        "Huit clés de lecture pour comprendre le Japon autrement. Des repères qui guident nos choix d'étapes et la construction de chaque itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Passeport, chaussures faciles à retirer, tenue élégante et discrète pour temples et tables kaiseki.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Passeport valide jusqu&apos;à la fin du séjour. Pas de
                visa nécessaire pour un séjour touristique de moins de 90
                jours pour les ressortissants français.
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                Des chaussures faciles à enlever et à remettre : on les retire
                dans les temples, certains restaurants et tous les ryokans.
                Une tenue sobre pour les tables kaiseki et les cérémonies.
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
            "Aucun vaccin obligatoire. Système de santé parmi les plus fiables au monde.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire. Vaccinations universelles à
                jour. Le système hospitalier japonais figure parmi les plus
                fiables au monde, y compris hors des grandes villes.
              </p>
              <p>
                Étés très humides : vigilance déshydratation en visite comme
                en randonnée. L&apos;eau du robinet est potable partout.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie classique. Les pharmacies japonaises sont
                nombreuses mais le personnel parle rarement anglais : nous
                anticipons les traitements courants avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mars-avril pour les cerisiers, octobre-novembre pour les érables. Juin est la saison des pluies.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: La période recommandée par notre équipe : fin mars à
                début avril pour les cerisiers en fleur (hanami), ou
                octobre-novembre pour les érables rouges (koyo).
              </p>
              <p>
                Juin marque la saison des pluies (tsuyu), moins favorable aux
                déplacements. Juillet-août sont chauds et très humides,
                parfaits en revanche pour les Alpes japonaises et Hokkaido.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                TODO: Les dates de floraison des cerisiers varient chaque
                année de dix à quinze jours. Nous les suivons semaine par
                semaine pour ajuster l&apos;itinéraire au dernier moment.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Yen japonais, économie encore largement cash. Marchés couverts et konbini partout.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Yen japonais (JPY). Le pays reste plus attaché au
                liquide que sa réputation technologique ne le laisse
                supposer, en particulier hors de Tokyo. Pourboire absent et
                mal perçu, y compris au restaurant.
              </p>
              <p>
                Les konbini (supérettes ouvertes 24h/24) et les marchés
                couverts, comme Nishiki à Kyoto, offrent un aperçu direct de
                la vie quotidienne.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons systématiquement les transferts de nos
                clients : chauffeur privé, train réservé, transferts
                bagages entre étapes.
              </p>
            </div>
          ),
        },
        {
          title: "Onsen et traditions",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On se lave avant d'entrer dans le bain. Certains établissements n'acceptent pas les tatouages.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Dans un onsen (source chaude), on se lave entièrement assis
                sur un petit tabouret avant d&apos;entrer dans le bain. Le
                maillot de bain n&apos;est pas autorisé.
              </p>
              <p>
                Certains établissements refusent encore l&apos;accès aux
                personnes tatouées, historiquement associées aux yakuzas.
                D&apos;autres l&apos;acceptent sans réserve.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions systématiquement la politique de chaque
                établissement avant de le proposer, pour éviter toute
                surprise sur place.
              </p>
            </div>
          ),
        },
        {
          title: "Réserver avant de partir",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les meilleures tables kaiseki se réservent parfois plusieurs mois à l'avance.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les comptoirs de sushi et les tables kaiseki les plus
                recherchés n&apos;acceptent souvent qu&apos;un nombre de
                couverts très réduit par service, parfois réservés plusieurs
                mois à l&apos;avance.
              </p>
              <p>
                Certains accès (sous-temples, ateliers d&apos;artisans,
                écuries de sumo) ne se réservent pas en ligne : ils se
                négocient localement, sur introduction.
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
          title: "Se déplacer au Japon",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le Shinkansen relie les grandes villes du Japon avec une précision remarquable.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le réseau de Shinkansen (train à grande vitesse) relie Tokyo à
                Kyoto en un peu plus de deux heures, avec une ponctualité
                proverbiale. Les gares annoncent le quai de départ des mois à
                l&apos;avance.
              </p>
              <p>
                Un JR Pass peut avoir du sens selon le nombre d&apos;étapes,
                mais devient parfois moins avantageux que des billets
                ciblés sur un itinéraire resserré.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calculons systématiquement l&apos;option la plus
                pertinente selon votre itinéraire, et réservons chaque
                trajet à l&apos;avance.
              </p>
            </div>
          ),
        },
        {
          title: "Argent et paiements",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Yen japonais. Paiements en espèces encore fréquents, notamment dans les petits commerces. Konbini et marchés couverts rythment le quotidien.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: 1 € ≈ 160 yens. La carte bancaire est acceptée dans
                les grands hôtels et la plupart des restaurants de Tokyo et
                Kyoto, mais reste moins systématique dans les petites
                adresses et les zones rurales.
              </p>
              <p>
                Les distributeurs des konbini (7-Eleven en tête) acceptent
                fiablement les cartes étrangères, contrairement à certains
                distributeurs bancaires classiques.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoir toujours une réserve de liquide pour les petites
                tables et les temples, qui n&apos;acceptent souvent que le
                yen en espèces.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage au Japon",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "Une cérémonie du thé à Kyoto",
          description:
            "Elle se tient dans un sous-temple qui ne reçoit pas de visiteurs. L'accès se négocie, il ne se réserve pas.",
        },
        {
          title: "Un maître céramiste à Kanazawa",
          description:
            "L'atelier retient les adolescents plus longtemps que prévu, y compris ceux qui ne voulaient entendre parler que de jeux vidéo.",
        },
        {
          title: "La précision, transfert après transfert",
          description:
            "Chaque correspondance, chaque réservation de table, chaque horaire de train. Au Japon, rien ne glisse d'une minute, à condition que tout soit calé en amont.",
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
          question: "Quelle est la meilleure période pour partir au Japon ?",
          answer:
            "Mars-avril pour admirer les cerisiers en fleurs, octobre-novembre pour les couleurs flamboyantes des érables. Juin correspond à la saison des pluies dans une grande partie du pays ; les randonnées peuvent être moins favorables, même si certaines régions restent agréables. Le Japon connaît quatre saisons bien marquées : étés chauds et humides, hivers secs et froids dans le centre, paysages enneigés exceptionnels à Hokkaido.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 13h à 14h de vol direct vers Tokyo (Haneda principalement, parfois Narita selon les programmes), avec Air France ou ANA.",
        },
        {
          question: "Faut-il un visa pour aller au Japon ?",
          answer:
            "Non, pour un séjour touristique de moins de 90 jours, les ressortissants français n'ont pas besoin de visa. Un passeport valide au moins jusqu'à la fin du séjour suffit.",
        },
        {
          question: "Combien d'étapes peut-on faire en deux semaines ?",
          answer:
            "Nous recommandons généralement 3 à 4 étapes pour un séjour de deux semaines. Le Japon se découvre mieux en prenant le temps : quelques nuits à Tokyo, Kyoto, dans les Alpes japonaises ou autour du mont Fuji permettent d'apprécier chaque lieu sans multiplier les déplacements.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. Le Japon reste l'une des destinations les plus sûres et les plus organisées pour voyager en famille. Les trains sont ponctuels, la propreté est constante, et certaines expériences (ateliers d'artisans, parc à daims de Nara) captivent particulièrement les enfants.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Japon ?",
          answer:
            "Nos voyages sur mesure s'adaptent à chaque projet. À titre indicatif, un séjour de deux semaines au Japon se situe généralement autour de 15 000 € par personne, selon les hébergements, les expériences privées et la saison.",
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
      slugs: ["grece", "seychelles", "kenya"],
    },
  ],
};
