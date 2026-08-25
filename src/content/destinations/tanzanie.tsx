import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "tanzanie",
  name: "Tanzanie",
  placeKind: "country",
  country: "Tanzanie",
  genitive: "de la Tanzanie",
  continentSlug: "afrique",
  blurb: "Grumeti, Serengeti Ouest, Ngorongoro",
  keywords: [
    "tanzanie",
    "serengeti",
    "grumeti",
    "ngorongoro",
    "olduvai",
    "arusha",
    "zanzibar",
    "safari",
  ],
  metaTitle: "Tanzanie : Voyage sur mesure",
  metaDescription:
    "Voyage en Tanzanie sur mesure : concession privée de Grumeti, Serengeti Ouest, cratère du Ngorongoro. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Tanzanie",
      heading: "Le Serengeti occidental, à l'écart des circuits habituels",
      description:
        "Le Serengeti couvre 14 763 km². Sa partie occidentale, la concession de Grumeti, est opérée par un acteur unique et reste peu fréquentée. La migration y franchit la rivière avant de rejoindre le Kenya. Nous travaillons ce secteur depuis dix ans.", // TODO: verify surface de la concession de Grumeti
      images: [
        {
          src: "/destination/tanzanie/hero-1.webp",
          alt: "Troupeau de gnous massé sur la berge de la rivière Grumeti en Tanzanie",
        },
        {
          src: "/destination/tanzanie/hero-2.webp",
          alt: "Éléphant traversant les hautes herbes au pied de la colline de Sasakwa, Grumeti",
        },
        {
          src: "/destination/tanzanie/hero-3.webp",
          alt: "Zèbres et gnous en pâture au fond du cratère du Ngorongoro, paroi de la caldeira derrière",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Tanzanie ?",
      heading: "Carole, spécialiste de la Tanzanie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Le Serengeti est largement proposé. Sa partie occidentale l'est beaucoup moins. Cette zone repose sur une concession opérée par un acteur unique. La migration y séjourne environ six semaines avant de rejoindre le Kenya. L'expérience reste la même, mais se vit plus tôt dans la saison. Elle se déroule aussi dans un environnement bien moins fréquenté. C'est cette lecture plus confidentielle du Serengeti que je souhaite construire ici.",
        role: "Travel Designer · Tanzanie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Tanzanie",
      heading: "Le Serengeti et sa partie occidentale",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Tanzanie passe presque toujours par le Serengeti, qui s'étend sur 14 763 km². Sa partie occidentale est nettement moins proposée. Le corridor de Grumeti et la réserve d'Ikorongo y prolongent le parc vers le lac Victoria. Les droits de safari y sont détenus par un acteur unique.",
        "La migration ne suit pas de calendrier fixe. Elle dépend de la pousse de l'herbe et du rythme des pluies. Entre fin mai et juillet, le troupeau quitte les plaines du sud, remonte par l'ouest et atteint la rivière Grumeti. Le passage y est moins photographié que celui de la Mara, en août, côté kenyan. Il est aussi moins fréquenté.",
        "Trois maisons structurent cet itinéraire. Laba Mama Simba ouvre le voyage à trente-cinq minutes de l'aéroport du Kilimandjaro, au cœur des 700 hectares de North Dolly, où les élands et les zèbres circulent librement autour de la maison. Le Grumeti Serengeti River Lodge se tient ensuite dans l'extrémité ouest du parc, sur la berge d'un affluent occupé par les hippopotames, où le dîner se prend dans un boma à ciel ouvert. Singita Sasakwa occupe la colline, côté concession, dans un registre plus classique.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/tanzanie/full-image.webp",
        alt: "Plaines du Serengeti en Tanzanie parcourues par le troupeau de la grande migration",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Tanzanie : le corridor de Grumeti",
      heading: "Ce que la concession privée autorise",
      theme: "light",
      paragraphs: [
        "Le départ se fait avant le lever du jour. Dans la concession de Grumeti, aucun autre véhicule ne circule. Le guide descend, lit le sol et relève l'empreinte laissée par un léopard pendant la nuit. Il en déduit la direction prise et l'heure approximative du passage.",
        "La différence avec le parc national tient aux autorisations. Dans le Serengeti, les pistes sont tracées et le hors-piste est interdit. La marche guidée y existe, mais encadrée et limitée à des secteurs définis. Dans la concession, elle se pratique librement, et les sorties de nuit sont permises : les projecteurs à filtre rouge y révèlent les civettes et les genettes, invisibles de jour. Il ne s'agit pas d'un supplément de confort, mais d'une autre façon d'aborder le même territoire.",
      ],
      images: [
        {
          src: "/destination/tanzanie/split-1.webp",
          alt: "Empreinte de grand félin dans la poussière à côté de la chaussure du pisteur, Grumeti",
        },
        {
          src: "/destination/tanzanie/split-2.webp",
          alt: "Léopard progressant sur une branche morte à la lisière d'un bosquet, Grumeti",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/tanzanie/xp-traversee-grumeti-1.webp",
          alt: "Colonie d'hippopotames dans un bief de la rivière Grumeti bordé de forêt galerie",
        },
        right: {
          src: "/destination/tanzanie/xp-traversee-grumeti-2.webp",
          alt: "Front du troupeau immobile à cinquante mètres de la berge de la Grumeti",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le passage de la rivière Grumeti",
        columns: [
          "La Grumeti est une rivière étroite et encaissée, bordée de figuiers. Une colonie d'hippopotames occupe ses biefs les plus profonds. Le troupeau arrive par le sud sur un front de plusieurs kilomètres, puis s'immobilise à une cinquantaine de mètres de l'eau. L'attente peut durer une heure ou la journée entière.",
          "Les guides de la concession suivent ce front plusieurs jours à l'avance. Ils savent de quel côté il passera, sans pouvoir en fixer le moment. Le passage s'engage ensuite en quelques minutes. Sur la berge, les véhicules présents appartiennent tous au même camp, ce qui reste rare sur ce type d'observation.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Tanzanie",
      heading: "Trois moments inscrits à l'itinéraire",
      description:
        "Les gorges d'Olduvai commentées par un paléoanthropologue, une matinée avec les Hadzabe au lac Eyasi, une nuit en fly-camp sur les kopjes de Grumeti. Ces trois accès se négocient localement.",
      slugs: [
        "olduvai-paleoanthropologue",
        "aube-hadzabe-lac-eyasi",
        "fly-camp-kopjes-grumeti",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Tanzanie",
      description:
        "Une maison au milieu de 700 hectares de brousse près du Kilimandjaro, dix suites sur la berge d'un affluent du Serengeti Ouest, un manoir lambrissé sur la colline de Sasakwa. Trois registres différents pour un même itinéraire.",
      slugs: [
        "laba-mama-simba",
        "grumeti-serengeti-river-lodge",
        "singita-sasakwa-lodge",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Tanzanie",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage en Tanzanie.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Air France dessert Kilimandjaro (JRO) en direct depuis Paris certains jours de la semaine, en un peu moins de 9 heures. Les autres jours, compter 11 à 14 heures via Amsterdam avec KLM, Doha avec Qatar Airways ou Addis-Abeba avec Ethiopian.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "TODO: Deux heures d'avance sur Paris en hiver, une heure en été (fuseau EAT, UTC+3). Ce décalage facilite les sorties d'avant l'aube.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "TODO: Shilling tanzanien (TZS), environ 2 900 TZS pour un euro. Les camps facturent en dollars américains. Prévoir des petites coupures pour les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Visa touristique obligatoire pour les ressortissants français, y compris pour entrer à Zanzibar. Demande en ligne sur le portail officiel tanzanien, environ 50 dollars, délai d'une dizaine de jours ouvrés. Passeport valide six mois après le retour.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Fièvre jaune exigée en cas d'arrivée depuis un pays endémique, dont le Kenya. Prophylaxie antipaludique recommandée pour le Serengeti et la côte.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: De fin mai à juillet pour le passage du corridor ouest à Grumeti. De juillet à octobre pour le Serengeti nord. En janvier et février pour la mise à bas dans les plaines du Ndutu.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: Swahili, langue nationale, et anglais, langue officielle. L'anglais suffit dans les camps et les concessions privées.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: Grandes pluies de mars à mai, petites pluies en novembre. De 15 à 28 °C dans le Serengeti. Le bord du cratère du Ngorongoro, à 2 300 mètres, descend sous 10 °C au petit matin.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Tanzanie mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/tanzanie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure en Tanzanie entre Arusha, Grumeti et le Ngorongoro",
            "Adresses confidentielles en Tanzanie : camps privés et concessions fermées",
            "Hébergements en Tanzanie : Singita Sasakwa et Grumeti Serengeti River Lodge",
            "Conciergerie privée 24/7 pour un voyage en Tanzanie",
            "Expériences immersives en Tanzanie : Olduvai, Hadzabe et fly-camp",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Tanzanie",
      heading: "Six territoires, du lac Victoria à l'océan Indien",
      description:
        "De la concession de Grumeti aux gorges d'Olduvai, du bord du cratère à l'îlot de Mnemba : six secteurs que peu d'itinéraires réunissent dans un même voyage.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Grumeti, le corridor ouest",
          description:
            "Le corridor relie le Serengeti au lac Victoria. C'est la seule partie du parc où vivent les colobes noirs et blancs, et le secteur connaît sa propre migration annuelle de topis.",
          image: {
            src: "/destination/tanzanie/map-grumeti.webp",
            alt: "Plaines et figuiers du corridor de Grumeti au bord de la rivière, Serengeti Ouest",
          },
          // TODO: verify coords
          coordinates: { lat: -2.05, lng: 34.2 },
        },
        {
          title: "Le Serengeti central, autour de Seronera",
          description:
            "Seronera présente la plus forte densité de léopards du parc, dans les figuiers qui bordent la rivière. C'est aussi le secteur le plus fréquenté. On y passe sans y séjourner.",
          image: {
            src: "/destination/tanzanie/map-serengeti.webp",
            alt: "Kopjes de granit émergeant des herbes du Serengeti central près de Seronera",
          },
          // TODO: verify coords
          coordinates: { lat: -2.4, lng: 34.8333 },
        },
        {
          title: "Le cratère du Ngorongoro",
          description:
            "La caldeira couvre 260 km² et s'est effondrée il y a environ deux millions et demi d'années. Elle abrite près de vingt-cinq mille grands mammifères, dont les derniers rhinocéros noirs du nord du pays.",
          image: {
            src: "/destination/tanzanie/map-ngorongoro.webp",
            alt: "Fond du cratère du Ngorongoro vu du bord de la caldeira au lever du soleil",
          },
          // TODO: verify coords
          coordinates: { lat: -3.1667, lng: 35.5833 },
        },
        {
          title: "Olduvai et le lac Eyasi",
          description:
            "Les fouilles menées par les Leakey dans ces gorges ont déplacé vers l'Afrique de l'Est l'origine du genre humain. À une heure au sud, les Hadzabe pratiquent encore la chasse à l'arc.",
          image: {
            src: "/destination/tanzanie/map-olduvai.webp",
            alt: "Strates des gorges d'Olduvai dans les hautes terres du nord de la Tanzanie",
          },
          // TODO: verify coords
          coordinates: { lat: -2.9833, lng: 35.35 },
        },
        {
          title: "Arusha, au pied du Meru",
          description:
            "La ville sert de point d'arrivée aux safaris du nord, à 1 400 mètres d'altitude, au pied du mont Meru. Ses faubourgs abritent les maisons où se passe la première nuit.",
          image: {
            src: "/destination/tanzanie/map-arusha.webp",
            alt: "Plantation de café aux abords d'Arusha avec le mont Meru en arrière-plan",
          },
          // TODO: verify coords
          coordinates: { lat: -3.3869, lng: 36.683 },
        },
        {
          title: "Zanzibar et l'îlot de Mnemba",
          description:
            "Stone Town est inscrite au patrimoine mondial depuis 2000. Au nord-est de l'archipel, l'îlot de Mnemba mesure environ huit cents mètres de tour et se parcourt à pied en vingt minutes.",
          image: {
            src: "/destination/tanzanie/map-zanzibar.webp",
            alt: "Eaux claires et banc de sable de l'îlot de Mnemba au large de Zanzibar",
          },
          // TODO: verify coords
          coordinates: { lat: -5.8167, lng: 39.3833 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Tanzanie",
      description:
        "Huit points de repère issus du terrain. Ils servent à calibrer les attentes, à choisir la période et à comprendre le choix de certaines étapes.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le corridor ouest et la période de juin",
          cardEyebrow: "Safari",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le troupeau franchit la Grumeti entre fin mai et juillet, environ deux mois avant la Mara côté kenyan",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La migration remonte du sud vers le nord en suivant la pousse de
                l&apos;herbe. Entre fin mai et juillet, le front traverse le
                corridor ouest et franchit la rivière Grumeti. Le même troupeau
                atteint la rivière Mara, côté kenyan, en août ou septembre.
              </p>
              <p>
                Deux conséquences pratiques. Partir en juin permet
                d&apos;observer un passage de rivière hors de la haute saison.
                En revanche, la fenêtre est plus courte et moins prévisible, car
                le front dépend du niveau des pluies d&apos;avril.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous retenons des camps dont les guides suivent le front
                plusieurs jours à l&apos;avance. Deux nuits de battement sont
                prévues dans l&apos;itinéraire pour absorber un décalage du
                troupeau.
              </p>
            </div>
          ),
        },
        {
          title: "Concession privée et parc national",
          cardEyebrow: "Safari",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dans le parc, les pistes sont tracées. Dans la concession, la marche et les sorties de nuit sont autorisées",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parc national du Serengeti est ouvert à tous les opérateurs.
                Les pistes y sont définies, le hors-piste est interdit et les
                sorties de nuit ne sont pas autorisées. La marche guidée y est
                possible, mais encadrée et limitée à certains secteurs. En haute
                saison, autour de Seronera, plusieurs dizaines de véhicules
                peuvent se retrouver sur une même observation.
              </p>
              <p>
                Les concessions voisines de Grumeti et d&apos;Ikorongo
                fonctionnent différemment. Les droits de safari appartiennent à
                un acteur unique, la marche est permise et les projecteurs à
                filtre rouge sont utilisés après le coucher du soleil.
                L&apos;observation change de nature, pas seulement de confort.
              </p>
            </div>
          ),
        },
        {
          title: "Les vols intérieurs et la limite de bagages",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Coastal Aviation et Auric Air desservent les pistes du Serengeti. Bagages souples uniquement, 15 kg par personne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les camps du Serengeti se rejoignent en Cessna Caravan depuis
                Arusha ou Kilimandjaro. Coastal Aviation et Auric Air desservent
                les pistes de Grumeti, Sasakwa, Seronera et Kogatende. Le vol
                dure une heure à une heure trente.
              </p>
              <p>
                La limite est de 15 kg par personne, en sac souple uniquement.
                Les valises rigides ne sont pas acceptées à bord. Les lodges
                assurent le blanchissage quotidien, ce qui rend la contrainte
                plus supportable qu&apos;elle n&apos;y paraît.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le surplus se dépose en consigne à Arusha et se récupère au
                retour. Ce dépôt est organisé dans chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "La demande de visa",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Visa obligatoire pour les ressortissants français, Zanzibar compris. Demande en ligne, environ dix jours ouvrés",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Tanzanie exige un visa touristique pour les ressortissants
                français. La demande se fait en ligne sur le portail officiel de
                l&apos;immigration tanzanienne, pour environ 50 dollars
                américains. Le délai de traitement est d&apos;une dizaine de
                jours ouvrés.
              </p>
              <p>
                Zanzibar fait partie de la Tanzanie et relève du même visa : il
                est exigé à l&apos;arrivée sur l&apos;archipel, y compris pour
                un vol intérieur depuis le Serengeti.
              </p>
              <p>
                Un visa à l&apos;arrivée reste possible à Kilimandjaro. Les
                files d&apos;attente y sont longues et le paiement se fait en
                espèces. La demande anticipée est donc recommandée.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le visa tanzanien est distinct de l&apos;eTA kenyane. Un
                itinéraire combinant Serengeti et Masaï Mara nécessite les deux
                autorisations, demandées séparément.
              </p>
            </div>
          ),
        },
        {
          title: "Santé et altitude",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Prophylaxie antipaludique recommandée. Fièvre jaune exigée en cas d'arrivée depuis le Kenya",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La prophylaxie antipaludique est recommandée pour le Serengeti,
                la côte et Zanzibar. Les traitements disponibles,
                atovaquone-proguanil ou doxycycline, se prescrivent avant le
                départ auprès d&apos;un médecin du voyage ou d&apos;un centre de
                vaccinations internationales.
              </p>
              <p>
                Le certificat de vaccination contre la fièvre jaune est exigé
                pour les voyageurs arrivant d&apos;un pays endémique, ce qui
                inclut le Kenya. Un itinéraire combiné Kenya-Tanzanie le rend
                donc obligatoire.
              </p>
              <p>
                Le bord du cratère du Ngorongoro se situe à 2 300 mètres. Les
                températures nocturnes descendent sous 10 °C et l&apos;altitude
                se ressent le premier jour.
              </p>
            </div>
          ),
        },
        {
          title: "La rencontre avec les Hadzabe",
          cardEyebrow: "Rencontre",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une sortie de chasse à l'arc au lever du jour, en dehors de tout format organisé pour les visiteurs",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les Hadzabe vivent autour du lac Eyasi. Ils comptent parmi les
                derniers groupes de chasseurs-cueilleurs d&apos;Afrique de
                l&apos;Est. Leur langue à clics n&apos;est rattachée à aucune
                famille linguistique connue.
              </p>
              <p>
                La sortie a lieu au lever du jour, avec deux ou trois chasseurs,
                sur trois à quatre kilomètres de brousse. Le gibier est parfois
                pris, souvent non. Le déroulé n&apos;est pas aménagé pour les
                visiteurs et le rythme n&apos;est pas négociable.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons avec un guide qui parle le swahili et le hadza,
                et le groupe est limité à quatre personnes. La contribution
                versée à la communauté est fixée à l&apos;avance.
              </p>
            </div>
          ),
        },
        {
          title: "Le prolongement par Zanzibar",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Environ deux heures de vol depuis le Serengeti. Trois nuits au minimum pour que l'étape ait du sens",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Zanzibar se rejoint depuis les pistes du Serengeti en environ
                deux heures de vol, avec une escale technique à Arusha. Le
                passage de la savane à l&apos;océan Indien fonctionne bien, à
                condition de prévoir trois nuits au minimum.
              </p>
              <p>
                La côte nord-est de l&apos;archipel, autour de Matemwe et de
                l&apos;îlot de Mnemba, reste la plus calme. Stone Town se visite
                en une demi-journée à pied, marché aux épices inclus.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le ramadan modifie les horaires des restaurants et le rythme de
                Stone Town. Ce paramètre est pris en compte dans le calage des
                dates.
              </p>
            </div>
          ),
        },
        {
          title: "Paiements et pourboires",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les camps facturent en dollars. Les pourboires se règlent en espèces, en petites coupures",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La monnaie locale est le shilling tanzanien. Les camps, les
                lodges et les compagnies aériennes intérieures facturent
                toutefois en dollars américains. Les cartes bancaires sont
                acceptées dans les grands établissements, rarement ailleurs.
              </p>
              <p>
                Les pourboires font partie des usages du safari et concernent le
                guide, le pisteur et l&apos;équipe de camp. Ils se règlent en
                espèces, en coupures de 5, 10 et 20 dollars. Les billets
                antérieurs à 2009 ne sont pas acceptés dans le pays.
              </p>
            </div>
          ),
        },
      ],
    },

    {
      type: "spotsList",
      eyebrow: "Récits de voyage",
      heading: "Trois scènes d'un voyage en Tanzanie",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      spots: [
        {
          title: "La berge de la Grumeti",
          description:
            "Une matinée entière d'attente, peu de véhicules et tous du même camp. Le passage s'engage ensuite d'un coup.",
        },
        {
          title: "La première nuit à Laba Mama Simba",
          description:
            "L'arrivée se fait souvent au milieu de la nuit, après un long trajet. Au réveil, le salon s'ouvre directement sur le mont Meru.",
        },
        {
          title: "Les gorges d'Olduvai",
          description:
            "Commentées par un guide qui a fouillé le site, ce sont les strates que les enfants retiennent, pas les lions.",
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
          question: "Quelle est la meilleure période pour partir en Tanzanie ?",
          answer:
            "De fin mai à juillet pour le passage du corridor ouest à Grumeti, puis de juillet à octobre pour le Serengeti nord et la rivière Mara. Janvier et février correspondent à la mise à bas dans les plaines du Ndutu, période où les prédateurs sont très actifs. Les grandes pluies de mars à mai sont à éviter pour le safari.",
        },
        {
          question: "Combien de temps dure le vol Paris-Tanzanie ?",
          answer:
            "Air France relie Paris à Kilimandjaro (JRO) en direct certains jours de la semaine, en un peu moins de 9 heures. Les autres jours, comptez 11 à 14 heures selon l'escale : Amsterdam avec KLM, Doha avec Qatar Airways, Addis-Abeba avec Ethiopian Airlines. Un vol intérieur d'environ une heure relie ensuite les pistes du Serengeti.",
        },
        {
          question: "Faut-il un visa pour aller en Tanzanie ?",
          answer:
            "Oui. Les ressortissants français doivent obtenir un visa touristique, à demander en ligne sur le portail officiel de l'immigration tanzanienne pour environ 50 dollars américains. Le délai de traitement est d'une dizaine de jours ouvrés. Ce visa est également exigé pour entrer à Zanzibar, y compris depuis un vol intérieur. Le passeport doit être valide six mois après la date de retour. Le visa tanzanien est distinct de l'eTA kenyane.",
        },
        {
          question: "Que faire en Tanzanie en 10 jours ?",
          answer:
            "Une nuit à Arusha à l'arrivée, quatre à cinq nuits dans la concession de Grumeti pour les safaris et le passage de la rivière, puis deux nuits sur le bord du cratère du Ngorongoro avec une journée dans la caldeira et une sortie vers Olduvai et le lac Eyasi. Les trois dernières nuits se placent soit dans le Serengeti Ouest, soit à Zanzibar.",
        },
        {
          question: "Serengeti ou Masaï Mara : quelle différence ?",
          answer:
            "Il s'agit du même écosystème, séparé par une frontière. Le Masaï Mara, au Kenya, couvre 1 510 km² et voit passer le troupeau en août et septembre. Le Serengeti, en Tanzanie, en couvre 14 763 et accueille la migration du sud vers l'ouest dès fin mai. Le Serengeti est plus vaste et moins fréquenté, le Masaï Mara plus accessible depuis l'Europe.",
        },
        {
          question: "Quel budget prévoir pour un safari en Tanzanie ?",
          answer:
            "Un voyage en Tanzanie sur mesure avec Exuma, incluant la concession privée de Grumeti et le bord du cratère, se situe généralement entre 7 000 et 15 000 € par personne pour dix jours, hors vols internationaux, selon les camps et la saison. Les concessions privées sont plus coûteuses que les camps du parc national et donnent accès à la marche et aux sorties de nuit.",
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
        "Le même écosystème vu depuis le Kenya, les deltas d'Afrique australe, les dunes de l'Atlantique. Trois prolongements possibles après un premier safari.",
      // TODO: les pages botswana et namibie n'existent pas encore. Le rendu filtre
      // les slugs inconnus, elles apparaîtront automatiquement à leur création.
      slugs: ["kenya", "botswana", "namibie"],
    },
  ],
};
