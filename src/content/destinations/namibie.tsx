import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "namibie",
  name: "Namibie",
  placeKind: "country",
  country: "Namibie",
  genitive: "de la Namibie",
  continentSlug: "afrique",
  blurb: "Sossusvlei, Skeleton Coast, Kalahari",
  keywords: [
    "namibie",
    "sossusvlei",
    "deadvlei",
    "namib",
    "skeleton coast",
    "kalahari",
    "damaraland",
    "etosha",
  ],
  metaTitle: "Namibie : Voyage sur mesure",
  metaDescription:
    "Voyage en Namibie sur mesure : Sossusvlei, Deadvlei, Skeleton Coast et Kalahari. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Namibie",
      heading: "Namibie, le désert qui descend jusqu'à l'Atlantique",
      description:
        "Le Namib tient debout depuis cinquante-cinq millions d'années. C'est le plus ancien désert de la planète, et le seul qui vienne finir dans l'océan. Entre les dunes de Sossusvlei, les épaves de la Skeleton Coast et le sable rouge du Kalahari, le pays s'étend sur 824 000 km² et compte moins de trois habitants au kilomètre carré.", // TODO: verify âge du Namib, superficie et densité
      images: [
        {
          src: "/destination/namibie/hero-1.webp",
          alt: "Marcheurs entre les acacias morts de Deadvlei au pied d'une grande dune ocre, voyage en Namibie",
        },
        {
          src: "/destination/namibie/hero-2.webp",
          alt: "Deux montgolfières au-dessus des plaines du Namib au lever du jour",
        },
        {
          src: "/destination/namibie/hero-3.webp",
          alt: "Lion traversant un point d'eau d'Etosha entre girafes, gnous et springboks",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Namibie ?",
      heading: "Carole, spécialiste de la Namibie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "La Namibie ne se raconte pas par sa faune. Elle se raconte par ses sols. En douze jours, on passe de l'argile blanche de Deadvlei aux galets noirs du Kaokoland, puis au sable rouge du Kalahari. Chaque étape change la lumière, et donc les heures où l'on sort. Les camps comptent huit à dix tentes, jamais davantage, et les concessions se comptent en centaines de milliers d'hectares. C'est le seul pays où je construis un itinéraire dans lequel on ne croise personne pendant trois jours sans que ce soit un exploit logistique.",
        role: "Travel Designer · Namibie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Namibie",
      heading: "Ce que le vide donne à voir",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Namibie commence presque toujours à Sesriem, à la porte du parc du Namib-Naukluft. La route file ensuite vers l'ouest sur une soixantaine de kilomètres, entre les contreforts du Naukluft et les premières crêtes de sable.", // TODO: verify distance Sesriem-Sossusvlei (source client : 50 km)
        "Dune 45 se gravit avant la chaleur. Deadvlei se rejoint à pied, dans le dernier kilomètre de sable. La cuvette d'argile y est restée blanche, les acacias y sont morts debout depuis plusieurs siècles, et l'ombre qu'ils portent au sol est la seule chose qui bouge de la matinée.", // TODO: verify ancienneté des acacias de Deadvlei
        "Le nord change complètement de grammaire. Dans la vallée de la Hoanib, l'eau ne coule qu'en surface quelques jours par an. Les éléphants du désert y creusent le lit de la rivière pour l'atteindre. Plus loin, la Skeleton Coast aligne des coques rouillées, des colonies d'otaries et un brouillard qui monte de l'Atlantique presque tous les matins.",
        "Trois maisons structurent l'itinéraire. Sossusvlei Desert Lodge ouvre le voyage dans la réserve du NamibRand, avec dix suites et une verrière au-dessus du lit. Sonop s'installe ensuite sur des blocs de granit du Karas, dans le décor d'une expédition des années vingt. Hoanib Skeleton Coast Camp ferme la boucle au nord, à une heure de vol de la première route goudronnée.", // TODO: verify nombre de suites et distances
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/namibie/full-image.webp",
        alt: "Grande dune ocre de Sossusvlei et acacias à son pied, voyage en Namibie",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Namibie : le sable et le brouillard",
      heading: "Ce que le courant de Benguela fabrique",
      theme: "light",
      paragraphs: [
        "Le long de la côte, un courant froid remonte de l'Atlantique sud. Il refroidit l'air, bloque la pluie et fabrique du brouillard. Depuis des millions d'années, c'est la seule eau douce que reçoive le Namib.",
        "Toute la vie du désert s'est organisée autour de cette humidité-là. Le ténébrion se dresse sur la crête, tête en bas. La brume se condense sur son dos, puis descend le long de ses élytres jusqu'à ce qu'il la boive.",
        "La welwitschia, elle, ne produit que deux feuilles dans sa vie et les laisse s'effilocher pendant mille ans. Les plus vieux pieds du Damaraland sont contemporains des premières cathédrales.", // TODO: verify longévité des welwitschias
        "Les mêmes gouttes expliquent les épaves. Un navire qui longe la côte dans la brume ne voit ni la terre ni les bancs de sable jusqu'au moment où il les touche.",
        "Le brouillard nourrit et il perd. C'est la même mécanique.",
      ],
      images: [
        {
          src: "/destination/namibie/split-1.webp",
          alt: "Éléphant remontant seul une piste de gravier dans le parc d'Etosha",
        },
        {
          src: "/destination/namibie/split-2.webp",
          alt: "Piste de sable rouge traversant les plaines herbeuses du NamibRand",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/namibie/xp-kalahari-1.webp",
          alt: "Dunes rouges du Kalahari striées d'herbes sèches en fin de journée, Namibie",
        },
        right: {
          src: "/destination/namibie/xp-kalahari-2.webp",
          alt: "Girafe traversant la brousse du Kalahari dans la lumière du soir",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le Kalahari, là où le sable a cessé de bouger",
        columns: [
          "Le Kalahari couvre 500 000 km² et se partage entre la Namibie, le Botswana et l'Afrique du Sud. Il tombe cent millimètres d'eau par an. C'est peu, et c'est pourtant assez : les herbes tiennent le sable, les dunes ne se déplacent plus et le rouge du fer reste en surface.", // TODO: verify superficie (le chiffre couramment cité est de 900 000 km²)
          "Ce n'est donc pas un désert nu. Les acacias erioloba y vivent plusieurs siècles et portent des nids de républicains sociaux qui pèsent jusqu'à une tonne. L'oryx, l'otocyon et la hyène brune s'y croisent sans point d'eau permanent. Chacun tire son eau de ce qu'il mange.", // TODO: verify poids des nids de républicains sociaux
          "On y marche en fin de journée, quand les crêtes passent de l'ocre au rouge sombre. Le silence n'est pas une image : il n'y a ni route, ni vol commercial, ni village dans le champ visuel. C'est la sensation d'isolement la plus nette du voyage, et elle se ressent à moins d'une heure de vol de Windhoek.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Namibie",
      heading: "Trois terrains inscrits à l'itinéraire",
      description:
        "Trois sorties portent le voyage. On part d'abord vers la Skeleton Coast, en avion léger puis en 4x4 par la vallée de la Hoanib. On traverse ensuite le Namib-Naukluft, des sommets du Naukluft aux plaines de galets. On monte enfin sur les dunes de Sossusvlei, avant la marche jusqu'à Deadvlei.",
      slugs: [
        "echappee-skeleton-coast",
        "parc-namib-naukluft",
        "sossusvlei-deadvlei",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Namibie",
      description:
        "Trois maisons jalonnent l'itinéraire. La première ouvre sa toiture sur le ciel du NamibRand. La deuxième s'accroche à des blocs de granit du sud. La dernière se tient seule dans une vallée du Kaokoland, à une heure de vol de la route la plus proche.",
      slugs: [
        "sossusvlei-desert-lodge",
        "zannier-sonop",
        "hoanib-skeleton-coast-camp",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Namibie",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons. Voici les repères qui permettent de caler les dates d'un voyage en Namibie.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: Il n'existe pas de vol direct depuis Paris. Le trajet dure 14 à 16 heures, le plus souvent via Francfort, Johannesburg ou Addis-Abeba. L'arrivée se fait à Windhoek (WDH), d'où les avions légers rejoignent les pistes des camps.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "TODO: La Namibie vit toute l'année en UTC+2, sans changement d'heure depuis 2017. Il n'y a donc aucun décalage avec Paris en été, et une heure d'avance en hiver. Les départs d'avant l'aube s'en trouvent facilités.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "TODO: La monnaie est le dollar namibien (NAD), indexé à parité sur le rand sud-africain, autour de 20 NAD pour un euro. Le rand circule partout. Les camps facturent souvent en dollars américains et les pourboires se règlent en espèces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "TODO: Depuis avril 2025, les ressortissants français doivent obtenir un visa, en ligne avant le départ ou à l'arrivée, pour un séjour touristique de moins de quatre-vingt-dix jours. Le passeport doit rester valide six mois après le retour et comporter deux pages vierges.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Aucune vaccination n'est obligatoire, sauf la fièvre jaune en cas d'arrivée depuis un pays endémique. Un traitement antipaludique est recommandé pour le nord du pays, de novembre à juin. Le Namib et le Kalahari ne présentent pas de risque.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: De mai à octobre, le ciel reste sec et les matinées fraîches. D'août à octobre, la faune se concentre sur les points d'eau d'Etosha. De décembre à mars, les orages verdissent les plaines et la lumière se charge, mais la chaleur dépasse souvent 38 °C.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: L'anglais est la seule langue officielle. L'afrikaans, l'allemand, l'oshiwambo et l'otjiherero se parlent au quotidien selon les régions. L'anglais suffit partout, dans les camps comme sur les concessions.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: L'amplitude est la règle. À Sossusvlei, les matins d'hiver approchent 0 °C quand les après-midi dépassent 25 °C. L'été monte au-delà de 38 °C. Sur la côte, le courant froid maintient 15 à 20 °C toute l'année, sous un brouillard fréquent le matin.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Namibie. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/namibie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Namibie entre le Namib, la Skeleton Coast et le Kalahari",
            "Terrasse privée et télescope au crépuscule dans le désert namibien",
            "Piscine et transats face aux montagnes du désert namibien",
            "Conciergerie privée 24/7 pour un voyage en Namibie",
            "4x4 sur une crête de dune au-dessus de l'Atlantique, Sandwich Harbour",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Namibie",
      heading: "Six terrains, du sel de Deadvlei aux galets du Kaokoland",
      description:
        "Six secteurs composent la carte du pays, des dunes du Namib aux gravures de Twyfelfontein, des maisons ensablées de Kolmanskop aux points d'eau d'Etosha. Peu d'itinéraires les réunissent dans un même voyage.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Sossusvlei et Deadvlei",
          description:
            "Les dunes y comptent parmi les plus hautes du monde, Big Daddy dépassant les 320 mètres. À son pied, la cuvette d'argile de Deadvlei garde des acacias morts debout, jamais tombés faute d'humidité pour les décomposer.", // TODO: verify hauteur de Big Daddy
          image: {
            src: "/destination/namibie/map-sossusvlei.webp",
            alt: "Acacia mort sur l'argile blanche de Deadvlei au pied d'une dune orange, Namibie",
          },
          // TODO: verify coords
          coordinates: { lat: -24.7275, lng: 15.3444 },
        },
        {
          title: "Le Namib-Naukluft et Sesriem",
          description:
            "Le parc couvre 49 800 km², soit davantage que la Suisse. Il réunit les crêtes du Naukluft, au-dessus de 2 000 mètres, les plaines de galets du Namib et le canyon de Sesriem, creusé par la Tsauchab.",
          image: {
            src: "/destination/namibie/map-namib-naukluft.webp",
            alt: "Zèbre de montagne sur une dune rouge herbeuse du Namib-Naukluft",
          },
          // TODO: verify coords
          coordinates: { lat: -24.4869, lng: 15.7996 },
        },
        {
          title: "La Skeleton Coast et la Hoanib",
          description:
            "Les Portugais l'appelaient la côte de l'enfer. Les épaves y restent des décennies, poussées vers l'intérieur par l'avancée du sable. La vallée de la Hoanib, en retrait, abrite des éléphants et des lions adaptés au désert.",
          image: {
            src: "/destination/namibie/map-skeleton-coast.webp",
            alt: "Épave d'un chalutier échoué dans les rouleaux de la Skeleton Coast, Namibie",
          },
          // TODO: verify coords
          coordinates: { lat: -19.6, lng: 12.9 },
        },
        {
          title: "Le Damaraland et Twyfelfontein",
          description:
            "Plus de deux mille gravures rupestres couvrent les dalles de grès de Twyfelfontein, premier site namibien inscrit à l'UNESCO en 2007. Les rhinocéros noirs du désert parcourent les vallées alentour en liberté.", // TODO: verify nombre de gravures et date d'inscription
          image: {
            src: "/destination/namibie/map-damaraland.webp",
            alt: "Gravures rupestres sur les dalles de grès de Twyfelfontein, Damaraland",
          },
          // TODO: verify coords
          coordinates: { lat: -20.5936, lng: 14.3722 },
        },
        {
          title: "Kolmanskop et Lüderitz",
          description:
            "La ville a poussé en 1908 sur un gisement de diamants, avec salle de bal et hôpital. Elle a été abandonnée en 1956. Le sable est entré par les fenêtres et occupe aujourd'hui les salons jusqu'à mi-hauteur.", // TODO: verify dates
          image: {
            src: "/destination/namibie/map-kolmanskop.webp",
            alt: "Salon ensablé d'une maison abandonnée de Kolmanskop près de Lüderitz, Namibie",
          },
          // TODO: verify coords
          coordinates: { lat: -26.7042, lng: 15.2311 },
        },
        {
          title: "Le parc d'Etosha",
          description:
            "Une cuvette de sel de 4 800 km² occupe le centre du parc, visible depuis l'espace. En fin de saison sèche, toute la faune se rassemble sur une poignée de points d'eau permanents, où l'on reste garé sans bouger.", // TODO: verify surface du pan
          image: {
            src: "/destination/namibie/map-etosha.webp",
            alt: "Éléphants réunis à un point d'eau du parc d'Etosha en saison sèche, Namibie",
          },
          // TODO: verify coords
          coordinates: { lat: -18.855, lng: 16.329 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Namibie",
      description:
        "Huit repères issus du terrain. Ils aident à choisir la période, à comprendre le découpage de l'itinéraire et à ajuster les attentes.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "L'heure d'ouverture de Sesriem",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La porte du parc ouvre au lever du soleil. Tout se joue dans les trois heures qui suivent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La porte extérieure de Sesriem ouvre au lever du soleil et ferme
                à son coucher. Depuis là, il reste une soixantaine de kilomètres
                jusqu&apos;à Sossusvlei, dont les cinq derniers en sable meuble,
                réservés au 4x4.
              </p>
              <p>
                La conséquence est simple. Dune 45 se gravit dans la première
                heure, Deadvlei se rejoint dans la deuxième. Passé dix heures,
                la lumière écrase les reliefs et le sable devient brûlant sous
                les pieds nus.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les lodges situés à l&apos;intérieur de la porte extérieure
                permettent de partir une heure avant les véhicules venus de
                l&apos;extérieur. Ce choix conditionne toute la matinée.
              </p>
            </div>
          ),
        },
        {
          title: "Les vols intérieurs et la limite de bagages",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Cessna au départ de Windhoek, sac souple obligatoire, environ 20 kg par personne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les distances namibiennes se comptent en centaines de
                kilomètres de piste. L&apos;avion léger raccourcit les étapes et
                fait office de survol : le dessin des dunes et le tracé des
                rivières sèches ne se comprennent que d&apos;en haut.
              </p>
              <p>
                La franchise est d&apos;environ 20 kg par personne, en sac souple
                uniquement. Les valises rigides ne passent pas dans les soutes.
                Les camps assurent le blanchissage quotidien, ce qui rend la
                contrainte plus tenable qu&apos;elle n&apos;y paraît.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le surplus se dépose en consigne à Windhoek et se récupère au
                retour. Ce dépôt est organisé dans chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Le brouillard de la côte",
          cardEyebrow: "Climat",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Il fait 15 °C sur la côte quand il en fait 35 dans les dunes, à deux heures de là",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le courant de Benguela remonte de l&apos;Atlantique sud et
                refroidit tout l&apos;air côtier. Le brouillard s&apos;installe
                la nuit, remonte jusqu&apos;à cent kilomètres dans les terres et
                se lève en milieu de matinée.
              </p>
              <p>
                Swakopmund et la Skeleton Coast restent donc entre 15 et 20 °C
                toute l&apos;année, alors que Sossusvlei dépasse 35 °C
                l&apos;après-midi. Les deux étapes se suivent parfois dans la
                même journée.
              </p>
              <h4 className="font-medium">Dans la valise :</h4>
              <p>
                Une polaire et un coupe-vent, même en plein été austral. Les
                sorties du matin dans le Namib se font autour de 5 °C en juin.
              </p>
            </div>
          ),
        },
        {
          title: "Le visa depuis avril 2025",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les Français ne sont plus dispensés de visa. Demande en ligne avant le départ",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Namibie a mis fin à l&apos;exemption de visa pour les
                ressortissants français en avril 2025. Un visa touristique est
                désormais demandé pour un séjour de moins de quatre-vingt-dix
                jours. Il s&apos;obtient en ligne avant le départ, ou à
                l&apos;arrivée à Windhoek.
              </p>
              <p>
                Le passeport doit rester valide six mois après la date de retour
                et comporter deux pages vierges, face à face.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                La demande en ligne évite la file d&apos;attente à
                l&apos;arrivée, souvent longue lorsque deux vols long-courriers
                se posent à la suite. Nous la préparons avec vous.
              </p>
            </div>
          ),
        },
        {
          title: "Paludisme et santé",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le désert est indemne. Le risque se limite au nord du pays, de novembre à juin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Namib, le Kalahari et tout le sud du pays sont considérés
                comme non impaludés. Le risque concerne le nord : Kunene,
                Kavango, bande de Zambezi et bordure d&apos;Etosha, de novembre
                à juin.
              </p>
              <p>
                Le traitement préventif se prescrit avant le départ, auprès
                d&apos;un médecin du voyage ou d&apos;un centre de vaccinations
                internationales. Aucune vaccination n&apos;est obligatoire, sauf
                la fièvre jaune en cas d&apos;arrivée depuis un pays endémique.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les camps du Kaokoland se situent à plus d&apos;une heure de vol
                du premier hôpital. Une couverture d&apos;évacuation sanitaire
                est intégrée à chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Le ciel de nuit du NamibRand",
          cardEyebrow: "Ciel",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Première réserve internationale de ciel étoilé d'Afrique. La Voie lactée y porte une ombre au sol",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La réserve du NamibRand a été classée réserve internationale de
                ciel étoilé en 2012, la première du continent africain. Aucune
                lumière artificielle n&apos;est visible sur des dizaines de
                kilomètres.
              </p>
              <p>
                Par nuit sans lune, la Voie lactée éclaire assez pour porter une
                ombre au sol. Les Nuages de Magellan se distinguent à
                l&apos;œil nu, ce qui n&apos;est pas possible depuis
                l&apos;hémisphère nord.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Deux camps de la réserve disposent d&apos;un télescope et
                d&apos;une verrière au-dessus du lit. Les nuits sans lune se
                réservent plusieurs mois à l&apos;avance.
              </p>
            </div>
          ),
        },
        {
          title: "Les pistes et le rythme des étapes",
          cardEyebrow: "Route",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le gravier impose 80 km/h et une crevaison par semaine. Le vol change l'équation",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le réseau namibien est goudronné sur les axes principaux et en
                gravier partout ailleurs. Sur les pistes C et D, la vitesse
                raisonnable tourne autour de 80 km/h, et la crevaison fait
                partie du voyage plus que de l&apos;incident.
              </p>
              <p>
                Compter trois cents kilomètres entre deux étapes revient donc à
                une demi-journée de route. C&apos;est vivable une fois, pesant
                sur douze jours.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;itinéraire alterne route et avion léger. La route se
                garde là où le paysage la justifie, le vol prend le relais
                partout où il ne fait que du transfert.
              </p>
            </div>
          ),
        },
        {
          title: "Rencontrer les Himba sans la mise en scène",
          cardEyebrow: "Rencontres",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les villages du Kaokoland se visitent avec un guide de la communauté, jamais en arrêt minute",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les villages himba installés le long des axes vers Opuwo vivent
                du passage. La visite y dure vingt minutes et se conclut par un
                étal. Ce n&apos;est pas une rencontre, c&apos;est une halte.
              </p>
              <p>
                Les communautés du Kaokoland intérieur fonctionnent autrement.
                On y accède avec un guide issu de la communauté, sur invitation,
                et la visite suit le rythme du campement : la traite, le feu, la
                fumigation à l&apos;encens qui remplace l&apos;eau pour la
                toilette.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les photographies se demandent, une par une. Une contribution
                versée au chef de campement, et non aux individus, reste
                l&apos;usage.
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
            "Nous sommes montés sur Dune 45 avant le soleil, seuls. À dix heures, en redescendant, il y avait quarante véhicules au pied. Partir de l'intérieur du parc change tout le voyage.",
          image: {
            src: "/destination/namibie/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Namib et Kalahari, juin 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le vol vers la Skeleton Coast dure quarante minutes et on ne voit pas une route en dessous. Le pilote s'est posé sur du gravier. Il n'y avait que le 4x4 qui nous attendait.",
          image: {
            src: "/destination/namibie/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Hoanib et Skeleton Coast, septembre 2024", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avions demandé un voyage avec nos petits-enfants. Ce sont eux qui parlent encore du ciel du NamibRand, pas des animaux. Ils n'avaient jamais vu la Voie lactée.",
          image: {
            src: "/destination/namibie/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: NamibRand et Damaraland, mai 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Namibie ?",
          answer:
            "De mai à octobre. Le ciel reste sec, les matinées sont fraîches et la lumière du Namib est à son meilleur. D'août à octobre, la faune se concentre sur les points d'eau d'Etosha, mais les après-midi dépassent souvent 35 °C. De décembre à mars, les orages verdissent les plaines et vident les sites de leurs visiteurs, au prix de la chaleur et de pistes parfois coupées.",
        },
        {
          question: "Combien de temps dure le vol Paris-Namibie ?",
          answer:
            "Il n'existe pas de vol direct. Le trajet dure 14 à 16 heures au total, généralement via Francfort, Johannesburg ou Addis-Abeba. L'arrivée se fait à Windhoek. Un dernier saut en avion léger, de quarante minutes à deux heures, mène ensuite à la piste du camp.",
        },
        {
          question: "Faut-il un visa pour aller en Namibie ?",
          answer:
            "Oui, depuis avril 2025. Les ressortissants français ne sont plus dispensés de visa et doivent obtenir une autorisation touristique, en ligne avant le départ ou à l'arrivée à Windhoek, pour un séjour de moins de quatre-vingt-dix jours. Le passeport doit rester valide six mois après le retour et comporter deux pages vierges.",
        },
        {
          question: "Que faire en Namibie en 12 jours ?",
          answer:
            "Trois nuits dans la réserve du NamibRand pour Sossusvlei, Deadvlei et le ciel nocturne. Deux nuits ensuite dans le Damaraland, pour Twyfelfontein et les rhinocéros du désert. Trois nuits dans la vallée de la Hoanib et sur la Skeleton Coast, pour les éléphants du désert et les épaves. Trois nuits enfin dans le Kalahari, sur le sable rouge. Etosha s'ajoute en deux nuits pour qui veut la grande faune.",
        },
        {
          question: "Namibie ou Botswana : quelle différence ?",
          answer:
            "Le Botswana est un pays d'eau et de faune : le delta de l'Okavango, les mokoros, des camps isolés sur des îles. La Namibie est un pays de paysages et de sols : dunes, canyons, plaines de galets, côte de brume. On y croise moins d'animaux, mais on y voit des terrains qui n'existent nulle part ailleurs. Les deux se combinent bien en un voyage de trois semaines.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Namibie ?",
          answer:
            "Un voyage en Namibie sur mesure avec Exuma se situe généralement entre 8 000 et 16 000 € par personne pour douze jours, hors vols internationaux, camps privés et vols intérieurs compris. Le pays reste plus accessible que le Botswana à niveau de prestation équivalent, la logistique routière y étant possible là où le Botswana impose l'avion.",
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
        "Trois prolongements naturels après un premier voyage en Afrique australe. Le Kalahari continue au Botswana, la grande faune se joue en Tanzanie et au Kenya. Aucun des trois ne raconte la même histoire que le Namib.",
      slugs: ["botswana", "tanzanie", "kenya"],
    },
  ],
};
