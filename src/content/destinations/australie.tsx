import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "australie",
  name: "Australie",
  placeKind: "country",
  country: "Australie",
  genitive: "de l'Australie",
  continentSlug: "iles-oceanie",
  blurb: "Uluru, la Grande Barrière, le Top End",
  keywords: [
    "australie",
    "uluru",
    "kata tjuta",
    "kangaroo island",
    "grande barriere de corail",
    "daintree",
    "kakadu",
    "sydney",
  ],
  metaTitle: "Australie : Voyage sur mesure",
  metaDescription:
    "Voyage en Australie sur mesure : Uluru, Kangaroo Island, la Grande Barrière et le Kakadu. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Australie",
      heading: "Le silence du désert avant le lever du jour",
      description:
        "À Uluru, on se lève à cinq heures pour cela. Puis le pays s'ouvre : trois mille kilomètres jusqu'à Darwin, une forêt tropicale plus ancienne que l'Amazonie, des plaines qui s'inondent chaque année et un récif au bout.",
      images: [
        {
          src: "/destination/australie/hero-1.png",
          alt: "Voyage en Australie : le monolithe d'Uluru au lever du jour, dans le Territoire du Nord",
        },
        {
          src: "/destination/australie/hero-2.png",
          alt: "Falaises et eucalyptus de la côte sauvage de Kangaroo Island",
        },
        {
          src: "/destination/australie/hero-3.png",
          alt: "Récif corallien et eau claire de la Grande Barrière, au large de Port Douglas",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Australie ?",
      heading: "Tainà, spécialiste de l'Australie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: replace with a real verbatim from Tainà
        quote:
          "L'Australie surprend ceux qui croient la connaître par ses images. Ce qui reste, ce n'est pas l'opéra de Sydney, c'est le froid du désert à cinq heures du matin et la voix d'un guide anangu qui raconte sa terre. Le pays demande du temps, et il le rend à ceux qui acceptent de ralentir.",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Australie",
      heading: "L'hiver de Sydney est la bonne saison du désert",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Sydney passe l'hiver en juillet, au moment précis où le Kakadu sèche et où Uluru devient praticable en journée. Un voyage en Australie se cale d'abord sur ce décalage : le pays couvre quatre climats, et deux étapes voisines sur la carte peuvent appartenir à deux saisons différentes.",
        "Les distances se franchissent en avion. Sydney rejoint Uluru en trois heures de vol, Uluru rejoint Cairns en trois heures encore, et certaines stations du bush se gagnent en Cessna, cinq places, depuis Darwin. Un itinéraire réussi compte peu d'étapes et beaucoup de nuits par étape.",
        "Ce que l'on vient chercher tient en quatre paysages. Le désert rouge d'Uluru et de Kata Tjuta. La forêt de Daintree, cent quatre-vingts millions d'années, qui descend jusqu'à la Grande Barrière. Les plaines inondables de la Mary River, aux portes du Kakadu. Et Kangaroo Island, où la faune se voit sans jumelles.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/australie/full-image.png",
        alt: "Voyage en Australie : les dômes de Kata Tjuta dans la lumière de fin de journée",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Australie : les lodges du bout du monde",
      heading: "Quinze tentes face au monolithe, et rien d'autre autour",
      theme: "light",
      paragraphs: [
        "Les meilleures adresses australiennes ne sont pas des hôtels de ville. Longitude 131° tient en quinze tentes posées sur une dune, chacune ouverte sur Uluru par une baie vitrée toute hauteur. Le dîner se prend dehors, sous les étoiles, et le parc national commence au pied du camp.",
        "Sur les falaises de Kangaroo Island, le Southern Ocean Lodge regarde l'océan Austral. Aux portes du Kakadu, Bamurru Plains ne capte pas le réseau : les bungalows sont montés sur pilotis au-dessus des plaines inondables, et les journées se comptent en sorties en airboat plutôt qu'en services.",
      ],
      images: [
        {
          src: "/destination/australie/split-1.png",
          alt: "Tente de lodge ouverte sur les dunes rouges du désert australien face à Uluru",
        },
        {
          src: "/destination/australie/split-2.png",
          alt: "Bungalow sur pilotis au-dessus des plaines inondables du Top End australien",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/australie/xp-uluru-anangu-1.png",
          alt: "Marche à l'aube dans les gorges de Kata Tjuta, dans le Centre rouge australien",
        },
        right: {
          src: "/destination/australie/xp-uluru-anangu-2.png",
          alt: "Guide anangu racontant la Tjukurpa au pied du monolithe d'Uluru",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Kata Tjuta à l'aube, avec ceux qui en gardent le récit",
        columns: [
          "On part avant le jour. La marche entre dans la vallée des Vents, trente-six dômes de grès que la lumière fait passer de l'ocre au rouge en une heure. Le guide est anangu : la terre appartient à son peuple depuis plusieurs dizaines de milliers d'années, et il en raconte la Tjukurpa, le récit fondateur, à sa mesure.",
          "Ce n'est pas une visite guidée. Certaines choses se disent, d'autres ne se disent pas, et cette limite fait partie de la journée. Au retour, la table est dressée face au monolithe pour le coucher du soleil, puis les lampes s'éteignent une à une et le ciel du désert prend toute la place.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Australie",
      heading: "Trois journées qui se réservent avant le départ",
      description:
        "L'airboat, le bateau du large et le ranger de Seal Bay travaillent sur créneaux, avec peu de places. Ces trois journées se calent depuis Paris, pas depuis le lodge.",
      slugs: [
        "airboat-mary-river",
        "grande-barriere-croisiere",
        "seal-bay-lions-de-mer",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Australie",
      description:
        "Trois adresses pour trois paysages : quinze tentes sur les dunes rouges face à Uluru, un lodge sur les falaises de Kangaroo Island, un camp sans réseau au-dessus des plaines du Kakadu.",
      slugs: ["longitude-131", "southern-ocean-lodge", "bamurru-plains"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Australie",
      description:
        "Vol, décalage, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage en Australie.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Aucun vol direct depuis la France. Paris rejoint Sydney en une escale, pour vingt-deux à vingt-cinq heures de trajet total selon la correspondance : Singapour avec Singapore Airlines, Doha avec Qatar Airways, Dubaï avec Emirates. Une nuit d'escale à l'aller ou au retour coupe utilement le voyage.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Sydney vit avec huit heures d'avance sur Paris en été, dix en hiver. Le Territoire du Nord, Uluru et Darwin compris, garde trente minutes de retard sur Sydney et ne change jamais d'heure. Le décalage se digère mieux au retour qu'à l'aller.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar australien, autour de 1,65 dollar pour un euro. La carte passe partout, jusque dans les cafés de village et les stations-service du désert. Les espèces ne servent qu'aux marchés et aux petits transferts, et le pourboire n'est pas d'usage.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "L'eVisitor, sous-classe 651, est gratuit pour les ressortissants français. Il se demande en ligne, autorise des séjours de trois mois et reste valable douze mois. Le passeport doit couvrir toute la durée du séjour, et l'autorisation s'obtient avant l'embarquement.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin exigé pour un voyageur venant de France. Le certificat de fièvre jaune n'est demandé qu'en provenance d'un pays où la maladie circule. Le Quai d'Orsay recommande d'être à jour du calendrier vaccinal français, diphtérie-tétanos-poliomyélite, coqueluche et rougeole. Pas de paludisme sur le continent, et pas d'accord de sécurité sociale entre la France et l'Australie : l'assurance santé et rapatriement compte autant que le vaccin.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à octobre pour le désert et le nord : c'est la saison sèche, celle des journées claires à Uluru et des pistes ouvertes dans le Kakadu. La Grande Barrière suit le même calendrier. Le sud, Sydney et Kangaroo Island, donne son meilleur d'octobre à avril. Mai, septembre et octobre sont les mois qui permettent de tout enchaîner.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais, avec un accent qui se prend en deux jours. Cent vingt-trois langues aborigènes et du détroit de Torres sont encore parlées, douze seulement transmises aux enfants, surtout dans le Territoire du Nord et le désert de l'Ouest. Les guides francophones existent à Sydney, Cairns et Darwin, et se réservent longtemps à l'avance.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Quatre climats dans un seul pays. Sydney oscille entre 9 °C la nuit en juillet et 26 °C en journée en janvier. Uluru descend à 4 °C avant l'aube en juillet et dépasse 38 °C en janvier. Darwin tient entre 32 et 35 °C de maximum toute l'année et coupe le calendrier en deux : saison sèche de mai à octobre, saison humide de novembre à avril.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Australie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/australie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Australie entre Sydney, Uluru et le Top End",
            "Adresses confidentielles en Australie : tables de chefs et stations isolées du bush",
            "Hébergements en Australie : tentes face à Uluru et lodges de Kangaroo Island",
            "Conciergerie privée 24/7 pour un voyage en Australie",
            "Expériences en Australie : marche à Kata Tjuta, airboat et Grande Barrière",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître en Australie",
      heading: "Six étapes, et les vols qui les relient",
      description:
        "Le pays fait quatorze fois la France. Voici les six étapes qui structurent un premier voyage, et ce que chacune apporte que les autres n'ont pas.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 4,
      places: [
        {
          title: "Sydney et les Blue Mountains",
          description:
            "La ville tient sur une baie découpée en criques. On y marche dans The Rocks, le premier quartier colonial, et l'on gagne les Blue Mountains en deux heures : des falaises de grès et une forêt d'eucalyptus à perte de vue.",
          image: {
            src: "/destination/australie/map-sydney.png",
            alt: "Baie de Sydney vue depuis les hauteurs, avec ses criques et ses plages",
          },
          // TODO: verify coords
          coordinates: { lat: -33.8688, lng: 151.2093 },
        },
        {
          title: "Kangaroo Island",
          description:
            "Une île de la taille de la Corse, au large d'Adélaïde, où un tiers du territoire est protégé. Lions de mer sur les plages, koalas dans les eucalyptus, kangourous au crépuscule : la faune se voit sans jumelles et sans attendre.",
          image: {
            src: "/destination/australie/map-kangaroo-island.png",
            alt: "Colonie de lions de mer sur une plage de Kangaroo Island, en Australie-Méridionale",
          },
          // TODO: verify coords
          coordinates: { lat: -35.8, lng: 137.2167 },
        },
        {
          title: "Uluru et Kata Tjuta",
          description:
            "Le Centre rouge, à trois heures de vol de Sydney. Le monolithe fait trois kilomètres et demi de long et change de couleur plusieurs fois par jour. À quarante kilomètres, les trente-six dômes de Kata Tjuta se marchent à l'aube, quand l'air est encore froid.",
          image: {
            src: "/destination/australie/map-uluru.png",
            alt: "Le monolithe d'Uluru au coucher du soleil, au cœur du Centre rouge australien",
          },
          // TODO: verify coords
          coordinates: { lat: -25.3444, lng: 131.0369 },
        },
        {
          title: "Daintree et la Grande Barrière",
          description:
            "La plus ancienne forêt tropicale du monde, cent quatre-vingts millions d'années, descend jusqu'à la mer au nord de Port Douglas. C'est le seul endroit où la forêt et le récif se touchent, et le départ des bateaux vers les récifs d'Agincourt.",
          image: {
            src: "/destination/australie/map-daintree.png",
            alt: "Forêt tropicale de Daintree descendant jusqu'au récif, dans le Queensland",
          },
          // TODO: verify coords
          coordinates: { lat: -16.17, lng: 145.42 },
        },
        {
          title: "Kakadu et la Mary River",
          description:
            "Vingt mille kilomètres carrés de parc national, et des plaines qui s'inondent chaque saison humide avant de sécher. Les oiseaux s'y comptent par milliers, les crocodiles marins se croisent en airboat, et l'art rupestre couvre les abris de grès.",
          image: {
            src: "/destination/australie/map-kakadu.png",
            alt: "Plaines inondables de la Mary River aux portes du parc national de Kakadu",
          },
          // TODO: verify coords
          coordinates: { lat: -12.6, lng: 131.9 },
        },
        {
          title: "Darwin et le Top End",
          description:
            "La capitale du Territoire du Nord, plus proche de Jakarta que de Sydney. Un marché de nuit sur la plage de Mindil, une atmosphère tropicale sans façon, et l'aérodrome d'où partent les Cessna vers les stations du bush.",
          image: {
            src: "/destination/australie/map-darwin.png",
            alt: "Front de mer tropical de Darwin, capitale du Territoire du Nord australien",
          },
          // TODO: verify coords
          coordinates: { lat: -12.4637, lng: 130.8444 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Australie",
      description:
        "Huit repères rapportés du terrain : comment on arrive, comment on se déplace, et ce qui se réserve des mois avant le départ.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "L'escale se choisit, elle ne se subit pas",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vingt-deux heures de trajet et une escale obligatoire : autant en faire une étape",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Aucun avion ne relie la France à l&apos;Australie sans escale. Le
                trajet passe par Singapour, Doha ou Dubaï, pour vingt-deux à
                vingt-quatre heures au total. Le choix de l&apos;escale change
                tout : horaires de correspondance, confort du salon, durée de
                l&apos;attente.
              </p>
              <p>
                Une nuit d&apos;hôtel à Singapour, à l&apos;aller ou au retour,
                transforme le vol le plus long du voyage en deux étapes
                supportables. Beaucoup la placent au retour, quand la fatigue est
                réelle.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;escale est réservée comme une étape du séjour, hôtel et
                transferts compris, et non comme une simple correspondance.
              </p>
            </div>
          ),
        },
        {
          title: "L'hiver austral est la bonne saison",
          cardEyebrow: "Saisons",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à septembre : le nord est sec, le désert est clair, le récif est calme",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Juin, juillet et août sont l&apos;hiver australien. Dans le sud, à
                Sydney ou sur Kangaroo Island, les journées sont fraîches et
                lumineuses. Dans le nord et le désert, c&apos;est la meilleure
                fenêtre de l&apos;année : ciel dégagé, pistes ouvertes, chaleur
                tenable en journée.
              </p>
              <p>
                Mai et septembre restent les deux mois les plus souples pour
                enchaîner le sud et le nord dans un même voyage. De décembre à
                mars, le Top End entre en saison humide et le désert dépasse
                régulièrement 38 °C.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;ordre des étapes suit la saison, pas la carte. C&apos;est
                ce qui décide du sens de l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Les vols intérieurs font l'itinéraire",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Sydney-Uluru en trois heures de vol, et parfois un Cessna de cinq places pour finir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays fait quatorze fois la France. Les étapes se relient en
                avion : trois heures de Sydney à Uluru, trois heures encore
                d&apos;Uluru à Cairns, deux heures de Cairns à Darwin. Certaines
                stations du bush ne se rejoignent qu&apos;en petit porteur, un
                Cessna de cinq places au départ de Darwin.
              </p>
              <p>
                Ces liaisons sont peu nombreuses et souvent quotidiennes
                seulement. Elles fixent le squelette du voyage : on choisit les
                étapes en fonction des vols, jamais l&apos;inverse.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les vols intérieurs sont réservés en même temps que les
                hébergements, et les transferts sont privés à chaque arrivée.
              </p>
            </div>
          ),
        },
        {
          title: "Trois nuits par étape, pas moins",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Chaque changement d'étape coûte une demi-journée : mieux vaut quatre étapes que sept",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un transfert vers l&apos;aéroport, un vol intérieur, un transfert
                vers le lodge : une journée de déplacement se termine en fin
                d&apos;après-midi. Deux nuits sur place laissent une seule vraie
                journée. Trois nuits en laissent deux, et c&apos;est le minimum
                pour que le lieu existe.
              </p>
              <p>
                Trois semaines permettent quatre à cinq étapes confortables.
                Quinze jours en supportent trois, et il faut alors choisir entre
                le désert et le récif.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous retirons une étape plutôt que d&apos;en raccourcir deux.
                C&apos;est presque toujours le bon arbitrage.
              </p>
            </div>
          ),
        },
        {
          title: "La faune se voit à l'aube et au crépuscule",
          cardEyebrow: "Faune",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Kangourous, koalas, lions de mer : les bonnes heures sont les deux extrémités de la journée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les kangourous sortent au crépuscule, les koalas dorment
                dix-huit heures par jour et se repèrent au petit matin, les lions
                de mer de Seal Bay se reposent sur le sable entre deux marées. Les
                milieux de journée sont les heures creuses de l&apos;observation.
              </p>
              <p>
                Les lodges de Kangaroo Island et de Bamurru Plains calent leurs
                sorties guidées sur ces créneaux, tôt le matin et en fin de
                journée. Les siestes se prennent entre les deux, sans regret.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les sorties sont réservées à l&apos;avance sur les bons créneaux,
                et non au comptoir du lodge à l&apos;arrivée.
              </p>
            </div>
          ),
        },
        {
          title: "Sur la Grande Barrière, viser le large",
          cardEyebrow: "Mer",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les récifs d'Agincourt, au large de Port Douglas, valent les deux heures de bateau",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les récifs proches de la côte reçoivent les sédiments des rivières
                et l&apos;essentiel de la fréquentation. Les jardins coralliens
                d&apos;Agincourt, en bordure du plateau continental, demandent une
                à deux heures de navigation depuis Port Douglas et n&apos;ont ni
                la même eau ni le même corail.
              </p>
              <p>
                Le bateau privé change la journée : on part avant les navettes, on
                choisit les mouillages, et l&apos;on reste sur un site quand le
                poisson est là plutôt que de suivre un programme.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les sorties en mer sont privatisées par défaut, et la journée se
                place selon la météo plutôt que selon le calendrier.
              </p>
            </div>
          ),
        },
        {
          title: "La terre aborigène s'aborde avec un gardien",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Uluru, Kakadu, Daintree : ces terres ont des propriétaires, et ils accompagnent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Uluru et Kata Tjuta appartiennent au peuple anangu, qui en confie
                la gestion au parc national. Le Kakadu et la forêt de Daintree
                relèvent de la même logique. Marcher sur ces terres avec un guide
                de la communauté change la nature de la journée : le paysage
                arrive avec son récit.
              </p>
              <p>
                Certains sites se photographient, d&apos;autres non, et certaines
                histoires ne se racontent qu&apos;entre initiés. Cette limite fait
                partie de ce que l&apos;on vient voir.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les journées sur terre aborigène sont montées avec des guides de
                la communauté, jamais avec un prestataire extérieur.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux saisons dans un seul bagage : polaire pour le désert à l'aube, lin pour le Top End",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                En hiver austral, le désert descend à 4 °C avant le lever du jour
                et remonte à 22 °C à midi. Une polaire, un coupe-vent et des
                chaussures fermées pour Uluru et Kata Tjuta. Du lin et des
                manches longues légères pour Darwin et le Kakadu.
              </p>
              <p>
                Le soleil australien est le plus mordant du monde habité : chapeau
                à bord large, crème haute protection et lunettes polarisantes
                servent tous les jours. Les jumelles valent leur place dans le
                sac, sur Kangaroo Island comme dans le bush.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                La liste part avec le carnet de voyage, ajustée à la saison et aux
                étapes retenues.
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
            "La marche du matin à Kata Tjuta avec notre guide anangu reste le moment que nous racontons le plus. Nous n'avions pas imaginé qu'un paysage puisse arriver avec une histoire aussi ancienne.",
          image: {
            src: "/destination/australie/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Australie à deux, juin 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois semaines, quatre étapes, aucun trajet à organiser nous-mêmes. À chaque atterrissage, quelqu'un nous attendait avec notre nom sur une pancarte.",
          image: {
            src: "/destination/australie/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Australie, septembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Deux nuits sans réseau dans le bush du Top End. Les sorties en airboat au lever du jour, et le soir personne à qui parler d'autre que nous deux. C'était le but.",
          image: {
            src: "/destination/australie/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Australie, mai 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Australie ?",
          answer:
            "De mai à octobre, pendant l'hiver austral, si le voyage passe par le désert et le nord : c'est la saison sèche à Uluru et dans le Kakadu, et la meilleure fenêtre sur la Grande Barrière. Le sud, Sydney et Kangaroo Island, est plus doux d'octobre à avril. Mai, septembre et octobre sont les mois qui permettent d'enchaîner les deux moitiés du pays dans un même itinéraire.",
        },
        {
          question: "Combien de temps dure le vol Paris-Sydney ?",
          answer:
            "Entre vingt-deux et vingt-cinq heures au total, escale comprise, selon la correspondance retenue. Il n'existe aucun vol direct entre la France et l'Australie : le trajet passe par Singapour, Doha ou Dubaï. Une nuit d'hôtel à l'escale, à l'aller ou au retour, coupe le voyage en deux étapes et fait une réelle différence sur la fatigue.",
        },
        {
          question: "Faut-il un visa pour aller en Australie ?",
          answer:
            "Une autorisation est obligatoire, et elle est gratuite pour les ressortissants français. L'eVisitor, sous-classe 651, se demande en ligne avant le départ : il autorise des séjours touristiques de trois mois et reste valable douze mois. Le passeport doit couvrir toute la durée du séjour, et l'autorisation s'obtient avant l'embarquement.",
        },
        {
          question: "Que faire en Australie en trois semaines ?",
          answer:
            "Quatre étapes tiennent confortablement en trois semaines. Sydney et les Blue Mountains pour commencer, avec une journée dans le parc national de Ku-ring-gai Chase et son art rupestre. Kangaroo Island pour la faune, lions de mer de Seal Bay compris. Uluru et Kata Tjuta pour le désert, avec un guide anangu. Puis le Top End, entre les plaines inondables de la Mary River et une journée sur la Grande Barrière au départ de Port Douglas.",
        },
        {
          question: "L'Australie est-elle adaptée aux familles ?",
          answer:
            "Oui, à condition d'accepter les vols intérieurs et de limiter le nombre d'étapes. La faune de Kangaroo Island et les sorties en airboat du Top End fonctionnent très bien avec des adolescents. Sur la Grande Barrière, un bateau privé permet de garder plongeurs et non-plongeurs à bord. Le décalage horaire, huit à dix heures, se cale en deux jours.",
        },
        {
          question: "Où dormir en Australie ?",
          answer:
            "Les meilleures adresses ne sont pas en ville. Face à Uluru, Longitude 131° tient en quinze tentes posées sur une dune, avec le monolithe dans l'axe du lit. Sur les falaises de Kangaroo Island, le Southern Ocean Lodge regarde l'océan Austral. Aux portes du Kakadu, Bamurru Plains ne capte pas le réseau et monte ses bungalows sur pilotis au-dessus des plaines. À Sydney, on reste dans le centre, entre Hyde Park et le port.",
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
        "D'autres façons de traverser de grands espaces, entre atolls du Pacifique, désert du Namib et volcans indonésiens. Trois prolongements possibles après un premier voyage en Australie.",
      // TODO: remplacer par fidji dès que cette destination existe
      slugs: ["nouvelle-zelande", "polynesie", "namibie"],
    },
  ],
};
