import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "oman",
  name: "Oman",
  placeKind: "country",
  country: "Oman",
  genitive: "d'Oman",
  continentSlug: "proche-orient",
  blurb: "Jebel Akhdar, Wahiba Sands, Daymaniyat",
  keywords: [
    "oman",
    "mascate",
    "nizwa",
    "jebel akhdar",
    "wahiba sands",
    "daymaniyat",
    "desert",
    "peninsule arabique",
  ],
  metaTitle: "Oman : Voyage sur mesure",
  metaDescription:
    "Voyage à Oman sur mesure : Jebel Akhdar, désert des Wahiba, forts de Nizwa. Itinéraire écrit par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Oman",
      heading: "Le désert commence là où la montagne s'arrête",
      description:
        "Le sable des Wahiba change de couleur avec l'heure. Plus haut, sur les terrasses du Jebel Akhdar, l'air sent la rose et les nuits sont froides. Entre les deux, des forts de terre et des villages accrochés au vide. Oman se traverse lentement.",
      images: [
        {
          src: "/destination/oman/hero-1.webp",
          alt: "Dunes des Wahiba Sands au lever du jour lors d'un voyage à Oman",
        },
        {
          src: "/destination/oman/hero-2.webp",
          alt: "Terrasses de pierre sèche du plateau de Saiq sur le Jebel Akhdar",
        },
        {
          src: "/destination/oman/hero-3.webp",
          alt: "Tours de terre du fort de Nizwa dominant la palmeraie omanaise",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Oman ?",
      heading: "Stéphane, spécialiste d'Oman, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Oman n'a jamais couru après le voyageur. C'est ce qui le rend précieux aujourd'hui. On peut encore y dresser un campement dans les dunes pour une seule famille, dormir au bord d'une gorge sans apercevoir une autre terrasse, traverser un souk sans que personne ne vous appelle. Ce pays se donne à ceux qui prennent le temps.",
        role: "Travel Designer · Oman",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte d'Oman",
      heading: "Un pays qui a choisi de ne pas se vendre",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Oman ne ressemble pas à ce qu'on attend de la péninsule arabique. Pas de tours de verre, pas d'enseignes le long de la mer. Mascate reste basse et blanche, posée entre la montagne et l'eau. Le pays s'est ouvert tard au voyage, et il a gardé de cette lenteur quelque chose que ses voisins ont perdu.",
        "À l'intérieur des terres, la lumière change. Les forts de Nizwa et de Bahla montent au-dessus des palmeraies, couleur de sable eux aussi. Le souk ouvre en fin de journée : l'argent, les dattes, l'encens du Dhofar. On y marche sans être sollicité, ce qui est devenu rare.",
        "Puis la route grimpe vers le Jebel Akhdar et l'air se rafraîchit d'un coup. En haut, des vergers en terrasses, des roses, des villages suspendus au-dessus de la gorge. Redescendre vers les dunes prend une matinée. Le soir même, on dîne au pied d'une crête de sable.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/oman/full-image.webp",
        alt: "Canyon du Jebel Akhdar et villages accrochés à la falaise lors d'un voyage à Oman",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Oman : la montagne et le sable",
      heading: "Le matin où la montagne sent la rose",
      theme: "light",
      paragraphs: [
        "Sur le plateau de Saiq, les terrasses de pierre s'accrochent au flanc de la montagne. On y cultive la rose depuis toujours. La cueillette se fait à l'aube, avant que la chaleur ne fasse tomber le parfum. Les villages tiennent au bord du vide, reliés par un mince canal d'eau qui court le long de la roche.", // TODO: verify la cueillette à l'aube au printemps
        "Plus bas, le désert n'offre ni chemin ni repère. Le campement se monte le matin, s'occupe une nuit, se démonte le lendemain. Au réveil suivant, il ne reste rien sur le sable.",
      ],
      images: [
        {
          src: "/destination/oman/split-1.webp",
          alt: "Cueillette de la rose de Damas sur les terrasses du plateau de Saiq, Oman",
        },
        {
          src: "/destination/oman/split-2.webp",
          alt: "Crête de dune dans le désert des Wahiba Sands en fin de journée",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/oman/xp-culture-bedouine-1.webp",
          alt: "Service du café à la cardamome dans une dallah de cuivre sous une tente bédouine",
        },
        right: {
          src: "/destination/oman/xp-culture-bedouine-2.webp",
          alt: "Famille bédouine devant sa tente au pied des dunes des Wahiba Sands",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le café se verse trois fois, puis on secoue la tasse",
        columns: [
          "La maison se trouve à l'écart de la piste. La famille reçoit sous une tente ouverte sur trois côtés, là où le vent passe. Le café arrive dans une cafetière de cuivre, parfumé à la cardamome, versé dans une petite tasse qu'on tend de la main droite. On l'accepte trois fois. Pour dire que cela suffit, on la secoue entre le pouce et l'index.",
          "Le reste de la journée suit le rythme de la maison. Le pain cuit sur la plaque, la laine se tisse, les chamelles rentrent au crépuscule. Les hommes racontent comment se lit une dune et où trouver l'eau sous le sable. Rien n'est joué pour le visiteur : ces familles vivent là une partie de l'année, puis repartent quand le pâturage se déplace.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Oman",
      heading: "Trois sorties, trois terrains",
      description:
        "Les récifs au large de Mascate, les forts ocre de l'intérieur, l'eau verte d'un wadi à l'ombre des palmiers.",
      slugs: [
        "iles-daymaniyat-snorkeling",
        "nizwa-bahla-jabreen",
        "wadi-bani-khalid",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où dormir à Oman",
      description:
        "Une terrasse au bord de la gorge, un jardin clos au bord de la mer, et un campement dressé dans les dunes pour vous seuls.",
      slugs: [
        "anantara-al-jabal-al-akhdar",
        "the-chedi-muscat",
        "magic-camps-wahiba-sands",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Oman",
      description:
        "Vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer sereinement un séjour sur mesure à Oman.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 7h en vol direct depuis Paris vers Mascate (MCT), avec Oman Air. Les fréquences varient selon les dates. Avec escale, on passe par Doha, Dubaï ou Istanbul.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "+3h en hiver, +2h en été par rapport à Paris. Oman est à UTC+4 toute l'année et ne pratique pas le changement d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Rial omanais (OMR), une monnaie de très forte valeur : 1 OMR vaut environ 2,25 €. Cartes largement acceptées, mais gardez des espèces pour les souks et les zones rurales.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Jusqu'à 14 jours, un visa gratuit est délivré à l'arrivée, tamponné sur le passeport. Au-delà, visa touristique en ligne. Passeport valable plus de 6 mois après la sortie d'Oman.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire. Calendrier français à jour, hépatite A et typhoïde selon la durée du séjour. Des cas sporadiques de paludisme existent : se protéger des moustiques.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "D'octobre à avril pour Mascate, les montagnes et le désert. Au sud, le khareef verdit la région de Salalah de mi-juin à septembre, avec des températures plus douces.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'arabe est la langue officielle, l'anglais très utilisé dans le tourisme. Nous travaillons avec des chauffeurs-guides francophones sur l'ensemble du parcours.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat aride. Environ 26°C de moyenne à Mascate l'hiver, 35 à 45°C dans les plaines l'été. Le Jebel Akhdar et le Jebel Shams sont jusqu'à 15°C plus frais.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Oman. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/oman/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure à Oman entre Mascate, Nizwa et les Wahiba",
            "Adresses confidentielles à Oman : maisons de montagne et campements hors piste",
            "Hébergements à Oman : maison de montagne au Jebel Akhdar et campement privé dans les dunes",
            "Conciergerie privée 24/7 pour un voyage à Oman",
            "Expériences immersives à Oman : culture bédouine et forts du Dakhiliyah",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les grandes étapes à Oman",
      heading: "Six territoires, et ce qu'il y a derrière",
      description:
        "La mer, les forts, la montagne verte, le sable. Six territoires qu'un même itinéraire relie sans jamais refaire deux fois la même route.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Mascate, la capitale basse",
          description:
            "La ville reste basse et blanche, coincée entre la montagne et la mer. La Grande Mosquée se visite au calme, le matin. Le souk de Mutrah s'anime en fin d'après-midi, quand l'encens brûle sur les seuils.",
          image: {
            src: "/destination/oman/map-mascate.webp",
            alt: "Corniche de Mutrah à Mascate avec boutres et maisons blanches au crépuscule",
          },
          // TODO: verify coords
          coordinates: { lat: 23.5859, lng: 58.4059 },
        },
        {
          title: "Nizwa, l'ancienne capitale",
          description:
            "L'ancienne capitale garde son fort de terre au-dessus de la palmeraie. Le souk vend l'argent, la poterie et les dattes. Le vendredi au petit matin, les éleveurs font tourner les bêtes sur la place.",
          image: {
            src: "/destination/oman/map-nizwa.webp",
            alt: "Tour ronde du fort de Nizwa et minaret au-dessus de la palmeraie, Oman",
          },
          // TODO: verify coords
          coordinates: { lat: 22.9333, lng: 57.5333 },
        },
        {
          title: "Jebel Akhdar, la montagne verte",
          description:
            "La montagne verte porte bien son nom : vergers en terrasses, grenadiers, roses. L'air y reste frais toute l'année et les nuits d'hiver piquent. Les villages tiennent accrochés au-dessus de la gorge.",
          image: {
            src: "/destination/oman/map-jebel-akhdar.webp",
            alt: "Villages en terrasses du Jebel Akhdar accrochés au-dessus du canyon, Oman",
          },
          // TODO: verify coords
          coordinates: { lat: 23.0745, lng: 57.6653 },
        },
        {
          title: "Wahiba Sands, le désert de sable",
          description:
            "Des dunes jusqu'à l'horizon, sans piste ni repère. Le sable vire à l'orange en fin de journée, puis s'éteint d'un coup. La nuit, on entend le vent et rien d'autre.",
          image: {
            src: "/destination/oman/map-wahiba.webp",
            alt: "Dunes orangées des Wahiba Sands sous un ciel de fin d'après-midi, Oman",
          },
          // TODO: verify coords
          coordinates: { lat: 22.0, lng: 58.5 },
        },
        {
          title: "Wadi Bani Khalid, l'oasis",
          description:
            "L'eau coule ici toute l'année, ce qui n'arrive presque nulle part ailleurs. Les bassins verts s'enchaînent entre les parois, à l'ombre des palmiers. Un sentier remonte le lit jusqu'à une grotte.",
          image: {
            src: "/destination/oman/map-wadi-bani-khalid.webp",
            alt: "Vasques turquoise et palmiers du Wadi Bani Khalid entre les parois rocheuses, Oman",
          },
          // TODO: verify coords
          coordinates: { lat: 22.4333, lng: 59.0333 },
        },
        {
          title: "Îles Daymaniyat, la réserve",
          description:
            "Quelques îlots de granit au large, classés en réserve naturelle. On se met à l'eau et les tortues passent sous la coque. Le débarquement est réglementé une partie de l'année.", // TODO: verify la réglementation de débarquement
          image: {
            src: "/destination/oman/map-daymaniyat.webp",
            alt: "Eaux turquoise et îlots rocheux de la réserve des îles Daymaniyat, Oman",
          },
          // TODO: verify coords
          coordinates: { lat: 23.86, lng: 58.1 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Oman",
      description:
        "Huit observations de terrain qui ne se trouvent pas dans un guide. Pour calibrer les attentes, choisir la bonne fenêtre ou comprendre pourquoi nous inscrivons telle étape à l'itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le vendredi matin à Nizwa",
          cardEyebrow: "Souk",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le marché aux bêtes de Nizwa se tient le vendredi, tôt. Il est terminé avant neuf heures",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Chaque vendredi, les éleveurs de la région amènent chèvres et
                bovins sur la place du souk de Nizwa. Les bêtes tournent en
                cercle, tenues à la longe, pendant que les acheteurs annoncent
                leurs prix depuis le pourtour. La vente commence vers six
                heures et se termine avant neuf.
              </p>
              <p>
                Le reste du souk, argenterie, poterie de Bahla, dattes et
                halwa, ouvre plus tard dans la matinée. Le fort se visite dans
                la foulée, avant que la chaleur ne monte.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calons systématiquement l'étape de Nizwa sur un jeudi soir
                pour que le vendredi matin tombe au bon endroit. C'est le seul
                jour de la semaine où cela fonctionne.
              </p>
            </div>
          ),
        },
        {
          title: "Entrer à Oman : ce qui a changé",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un visa gratuit est tamponné à l'arrivée pour les séjours courts. Au-delà, il se demande en ligne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pour un séjour touristique de moins de quinze jours, les
                ressortissants français reçoivent un visa gratuit à
                l&apos;arrivée, sous forme de tampon sur le passeport. Il
                n&apos;y a aucune démarche préalable, mais ce n&apos;est pas
                pour autant une entrée sans visa.
              </p>
              <p>
                Au-delà, le visa touristique se demande en ligne sur le portail
                de la police royale d&apos;Oman. Le passeport doit rester
                valable plus de six mois après la date prévue de sortie du
                territoire.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous transmettons le lien officiel et vérifions la durée
                autorisée au moment de la constitution du dossier. Les règles
                d&apos;entrée du Golfe évoluent souvent.
              </p>
            </div>
          ),
        },
        {
          title: "La fenêtre d'octobre à avril",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'été des plaines monte de 35 à 45°C. Le voyage se cale entre octobre et avril",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De mai à septembre, la chaleur rend le désert et les wadis
                difficiles, y compris de nuit. Les plaines montent
                couramment de 35 à 45°C, et l&apos;humidité de la côte
                s&apos;ajoute à cela.
              </p>
              <p>
                La bonne fenêtre va d&apos;octobre à avril. Novembre à mars
                offre les journées les plus stables : autour de 26°C à
                Mascate, nuits fraîches en montagne, lumière longue en fin
                d&apos;après-midi.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Février et mars ajoutent la floraison des amandiers et des
                grenadiers sur le Jebel Akhdar. La rose de Damas se cueille en
                avril.
              </p>
            </div>
          ),
        },
        {
          title: "Le khareef, l'autre Oman",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mi-juin à septembre, la mousson verdit le Dhofar pendant que le nord cuit",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Dhofar, tout au sud, reçoit chaque été la frange de la
                mousson indienne. Le phénomène porte un nom, le khareef. De
                mi-juin à septembre, les montagnes autour de Salalah se
                couvrent d&apos;herbe, les cascades reprennent et la
                température redescend nettement.
              </p>
              <p>
                C&apos;est la seule saison où voyager à Oman l&apos;été a du
                sens, mais elle concerne uniquement le sud. Le nord, Mascate,
                Nizwa et les Wahiba, reste hors de portée à cette période.
              </p>
            </div>
          ),
        },
        {
          title: "Rouler à Oman",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les routes sont excellentes. Le sable et la montée du Jebel Akhdar exigent un 4x4",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le réseau goudronné omanais compte parmi les meilleurs de la
                péninsule. Mascate rejoint Nizwa en moins de deux heures.
                Certaines portions échappent pourtant à cette règle : la montée
                vers le plateau de Saiq est réservée aux véhicules à quatre
                roues motrices, contrôle à l&apos;entrée de la route.
              </p>
              <p>
                Dans les Wahiba, on dégonfle les pneus avant d&apos;entrer dans
                le sable et on ne s&apos;engage pas seul. Les campements
                envoient un véhicule au point de rendez-vous à l&apos;orée des
                dunes.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons avec des chauffeurs-guides francophones sur
                l&apos;ensemble du parcours. La conduite au sable n&apos;est
                jamais laissée au client.
              </p>
            </div>
          ),
        },
        {
          title: "Se tenir dans un sultanat",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Épaules et genoux couverts en public. Photographier quelqu'un se demande d'abord",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Oman est un pays musulman conservateur et discret. En ville et
                dans les villages, épaules et genoux restent couverts, pour les
                hommes comme pour les femmes. Le maillot de bain se limite aux
                piscines et aux plages d&apos;hôtel.
              </p>
              <p>
                La Grande Mosquée Sultan Qaboos se visite le matin, hors
                vendredi, avec un foulard pour les femmes et des vêtements
                longs pour tous. Photographier une personne, en particulier une
                femme, se demande avant.
              </p>
              <h4 className="font-medium">Pendant le ramadan :</h4>
              <p>
                Ne pas manger, boire ni fumer en public pendant la journée. Les
                hôtels servent normalement, les horaires des sites changent.
              </p>
            </div>
          ),
        },
        {
          title: "Le Jebel Akhdar est froid",
          cardEyebrow: "Valise",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "2 000 mètres d'altitude : comptez 10 à 15°C de moins qu'à Mascate, et des nuits près de zéro",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On prépare une valise de désert et on oublie la montagne. Sur
                le plateau de Saiq, le thermomètre perd 10 à 15°C par rapport à
                la côte. En janvier, les nuits approchent zéro et le gel
                blanchit les terrasses au petit matin.
              </p>
              <p>
                Prévoir une polaire ou une doudoune légère, un pantalon long,
                des chaussures fermées pour les sentiers entre les villages. Le
                désert demande l&apos;inverse le lendemain : lin, chèche,
                lunettes, crème solaire.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les nuits sous tente dans les Wahiba sont également fraîches en
                hiver, autour de 12°C.
              </p>
            </div>
          ),
        },
        {
          title: "Argent, cartes et pourboires",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le rial omanais est l'une des monnaies les plus fortes au monde. Prévoir du liquide pour les souks",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La monnaie est le rial omanais (OMR), divisé en 1 000 baisas.
                Un rial vaut environ 2,25 €, ce qui surprend au premier
                retrait : les billets ont une valeur faciale élevée.
              </p>
              <p>
                Les hôtels, restaurants et commerces acceptent largement les
                cartes internationales. Mieux vaut garder des espèces pour les
                souks, les petits commerces et les zones rurales. Les
                pourboires ne sont pas obligatoires mais restent d&apos;usage
                pour les chauffeurs et le personnel de camp.
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
            "La journée chez la famille bédouine est ce qu'on raconte en rentrant. Le café servi trois fois, le pain sur la plaque, et le père qui explique où trouver l'eau sous la dune. Rien d'arrangé, on était les seuls sur place.",
          image: {
            src: "/destination/oman/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Oman, désert et montagne, 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le Jebel Akhdar en février, personne sur les sentiers entre les villages, et le canyon juste derrière la terrasse. On avait prévu deux nuits, on en a passé quatre.",
          image: {
            src: "/destination/oman/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Oman, Jebel Akhdar et Nizwa, 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Les Daymaniyat en bateau privé au départ de Mascate : tortues dès la première mise à l'eau, et aucun autre bateau à l'ancre. Le retour longe la côte au moment où la lumière tombe.",
          image: {
            src: "/destination/oman/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Oman, côte et intérieur, 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à Oman ?",
          answer:
            "D'octobre à avril pour le nord du pays : Mascate, Nizwa, le Jebel Akhdar et le désert des Wahiba. Novembre à mars offre les conditions les plus stables, autour de 26°C à Mascate. L'été, de mai à septembre, les plaines montent de 35 à 45°C. Seule exception : le Dhofar et Salalah, verdis par la mousson du khareef de mi-juin à septembre.",
        },
        {
          question: "Combien de temps dure le vol Paris-Mascate ?",
          answer:
            "Environ 7 heures en vol direct vers l'aéroport international de Mascate, avec Oman Air. Les fréquences varient selon les dates. Avec une escale à Doha, Dubaï ou Istanbul, le temps de trajet total monte à 9 ou 11 heures.",
        },
        {
          question: "Faut-il un visa pour aller à Oman ?",
          answer:
            "Oui, mais il est gratuit et délivré sur place. Pour un séjour touristique jusqu'à 14 jours, les ressortissants français reçoivent un visa à l'arrivée, tamponné sur le passeport, sans démarche préalable. Au-delà, le visa touristique se demande en ligne sur le portail de la police royale d'Oman. Le passeport doit rester valable plus de six mois après la date prévue de sortie du territoire.",
        },
        {
          question: "Que faire à Oman en 10 jours ?",
          answer:
            "Un itinéraire de 10 jours relie sans se répéter les quatre grands terrains du pays : deux nuits à Mascate avec une sortie en bateau vers les îles Daymaniyat, deux nuits sur le Jebel Akhdar avec les forts de Nizwa, Bahla et Jabreen, une nuit sous tente dans les Wahiba après la journée chez une famille bédouine, puis le Wadi Bani Khalid et la côte de Sur au retour. Les distances restent courtes, rarement plus de trois heures de route entre deux étapes.",
        },
        {
          question: "Oman est-il adapté aux familles avec enfants ?",
          answer:
            "Oui. Les distances sont courtes et les activités se partagent facilement : baignade dans les bassins du Wadi Bani Khalid, masque et tuba aux Daymaniyat, nuit sous tente dans le désert. Les campements des Wahiba et les maisons du Jebel Akhdar accueillent les enfants. La chaleur reste le principal paramètre à surveiller, ce qui écarte les mois d'été.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Oman ?",
          answer:
            "TODO: à valider. Un voyage à Oman sur mesure avec Exuma, incluant les maisons du Jebel Akhdar, un campement privé dans les Wahiba et les chauffeurs-guides francophones, se situe généralement entre 4 000 et 9 000 € par personne pour 10 jours, hors vols internationaux, selon les hébergements et la saison.",
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
        "D'autres pays où le désert, l'eau et la pierre organisent le voyage.",
      // TODO: ajouter "emirats-arabes-unis" et "jordanie" ici dès que ces destinations existent
      slugs: ["egypte"],
    },
  ],
};
