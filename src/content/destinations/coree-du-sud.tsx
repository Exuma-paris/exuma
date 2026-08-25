import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "coree-du-sud",
  name: "Corée du Sud",
  placeKind: "country",
  country: "Corée du Sud",
  genitive: "de la Corée du Sud",
  continentSlug: "asie",
  blurb: "Séoul, Gyeongju, Busan et l'île de Jeju",
  keywords: [
    "coree du sud",
    "seoul",
    "busan",
    "jeju",
    "gyeongju",
    "jeonju",
    "hanok",
    "changdeokgung",
  ],
  metaTitle: "Corée du Sud : Voyage sur mesure",
  metaDescription:
    "Voyage en Corée du Sud sur mesure : Séoul et ses hanoks, Gyeongju, Busan et l'île de Jeju. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Corée du Sud",
      heading: "Séoul, les temples de Gyeongju et l'île de Jeju",
      description:
        "Le matin, les toits de tuiles de Bukchon dépassent à peine des murs de pierre. Le soir, les néons de Jongno éclairent les mêmes ruelles. Séoul passe d'un monde à l'autre en quelques rues, et le reste du pays fait pareil.",
      images: [
        {
          src: "/destination/coree-du-sud/hero-1.png",
          alt: "Voyage en Corée du Sud : les toits de tuiles du village de hanoks de Bukchon, à Séoul",
        },
        {
          src: "/destination/coree-du-sud/hero-2.png",
          alt: "Pavillon de bois et étang de lotus du Jardin secret de Changdeokgung",
        },
        {
          src: "/destination/coree-du-sud/hero-3.png",
          alt: "Plongeuses haenyeo remontant sur les rochers noirs de l'île de Jeju",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Corée du Sud ?",
      heading:
        "Stéphane, spécialiste de la Corée du Sud, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution : à faire valider par Stéphane avant mise en ligne
        quote:
          "La Corée est le pays qui dément le plus vite la première impression. On arrive à Séoul, on voit une ville de verre, et le lendemain on dort dans une maison de bois avec le sol chaud sous les pieds. Ma région préférée reste le sud, autour de Gyeongju : c'est là que le pays ralentit vraiment. Et ce dont les voyageurs me parlent au retour, ce n'est presque jamais un monument, c'est un repas.",
        role: "Travel Designer · Corée du Sud",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Corée du Sud",
      heading: "Un pays de montagnes, avec des villes posées dans les creux",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Séoul est la première étape de presque tous les voyages en Corée du Sud. La ville est immense, mais elle se visite quartier par quartier. À Bukchon, les maisons traditionnelles en bois, appelées hanoks, occupent encore une colline entière, avec leurs toits de tuiles grises et leurs cours intérieures.",
        "Le reste du pays est montagneux. Les villes se sont installées dans les vallées et le long de la côte, et les forêts commencent au bout des rues. En automne, ces forêts virent au rouge et au jaune, et les Coréens partent y marcher en famille.",
        "Vers le sud, le rythme change. Gyeongju, l'ancienne capitale royale, se parcourt à vélo entre les temples et les étangs. Plus loin encore, l'île de Jeju est volcanique : la roche y est noire, et les murets qui bordent les champs aussi.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/coree-du-sud/full-image.png",
        alt: "Voyage en Corée du Sud : les tumulus royaux de Gyeongju en fin de journée",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La Corée du Sud à table",
      heading: "On mange autour de la table, et tout arrive en même temps",
      theme: "light",
      paragraphs: [
        "Un repas coréen n'a ni entrée ni plat principal. Tout arrive ensemble au centre de la table : le riz, la soupe, la viande que l'on grille soi-même, et une série de petits bols appelés banchan. On se sert dans les mêmes plats, et l'on remplit le bol du voisin avant le sien.",
        "Le kimchi accompagne tout. C'est du chou fermenté avec du piment, de l'ail et du gingembre. Les familles le préparent en grande quantité à l'automne, pour l'année entière. Chaque maison a sa recette, et le goût change de l'une à l'autre.",
      ],
      images: [
        {
          src: "/destination/coree-du-sud/split-1.png",
          alt: "Table coréenne couverte de banchan, avec la viande qui grille au centre",
        },
        {
          src: "/destination/coree-du-sud/split-2.png",
          alt: "Jarres de terre cuite servant à la fermentation du kimchi dans une cour",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/coree-du-sud/xp-coree-traditionnelle-1.png",
          alt: "Pavillon et étang du Jardin secret de Changdeokgung, à Séoul",
        },
        right: {
          src: "/destination/coree-du-sud/xp-coree-traditionnelle-2.png",
          alt: "Femme en hanbok de soie dans la cour d'une maison traditionnelle coréenne",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Changdeokgung en privé, puis le hanbok jusqu'au dîner",
        columns: [
          "La journée commence à Changdeokgung, le palais royal le mieux conservé de Séoul. Derrière les pavillons, une porte donne sur le Jardin secret : un vallon boisé avec des étangs, des pavillons de lecture et de très vieux arbres. La visite se fait en privé, avec un guide francophone, avant l'arrivée des groupes.",
          "L'après-midi passe au Korea Furniture Museum, une collection de maisons de bois remontées sur une colline, qui ne se visite que sur rendez-vous. Vient ensuite l'essayage d'un hanbok, la tenue traditionnelle, dans un atelier de Cheongdam, avec un photographe pour la séance. La journée se termine par un dîner de cuisine coréenne contemporaine.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Corée du Sud",
      heading: "Séoul de nuit, la ville d'en haut, et la cuisine de Busan",
      description:
        "Ces trois sorties se calent avant le départ. Les créneaux du soir partent vite, surtout au printemps et à l'automne, quand les Coréens voyagent eux aussi.",
      slugs: [
        "soiree-seoul-street-food",
        "n-seoul-tower",
        "atelier-cuisine-busan",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Trois adresses, trois régions",
      description:
        "Six chambres dans des maisons de bois à Séoul, un domaine face à la mer près de Busan, et sur Jeju une maison d'architecte posée au milieu des champs.",
      slugs: ["nostalgia-hanok-hotel", "ananti-busan-cove", "podo-hotel-jeju"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Corée du Sud",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître avant de caler les dates.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Air France, Korean Air, Asiana et T'way relient Paris à Séoul-Incheon sans escale, avec une quinzaine de vols par semaine. Comptez douze heures à l'aller, et un peu plus de quatorze heures au retour, les vents étant contraires. Depuis Incheon, le centre de Séoul se rejoint en une heure de route ou de train express.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Sept heures d'avance sur Paris en été, huit en hiver. La Corée ne change pas d'heure dans l'année. Le décalage se digère bien à l'aller et se fait davantage sentir au retour.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le won sud-coréen. La carte bancaire passe partout, y compris dans les taxis et sur la plupart des étals de marché. Prévoir un peu d'espèces pour les petits commerces de province et les marchés de nuit.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour un séjour touristique de moins de quatre-vingt-dix jours. Un passeport en cours de validité suffit, sans mois de validité supplémentaire exigé après le retour. L'autorisation électronique K-ETA reste suspendue pour les voyageurs français jusqu'au 31 décembre 2026, et nous vérifions ce point avant chaque départ.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est exigé à l'entrée. Il est conseillé d'être à jour du DTP, de la coqueluche et de la rougeole, et l'hépatite A est recommandée selon la durée du séjour. Le paludisme ne concerne que quelques zones rurales du nord des provinces de Gyeonggi et de Gangwon, à l'écart des itinéraires.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Les cerisiers fleurissent vers la fin mars sur Jeju et dans le sud, et dans les premiers jours d'avril à Séoul. L'automne est la seconde fenêtre, de la mi-octobre à la mi-novembre, avec un pic sur Séoul fin octobre. La mousson, appelée jangma, tombe de fin juin à fin juillet, et le risque de typhon culmine en août.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le coréen, écrit en hangeul, un alphabet qui se déchiffre en quelques jours. L'anglais est compris dans les hôtels et les grands musées, beaucoup moins ailleurs. Un guide francophone accompagne les journées qui le demandent.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Quatre saisons franches. À Séoul, janvier tourne autour de moins deux degrés, avec des matinées nettement plus froides, et août autour de vingt-six degrés, avec beaucoup d'humidité. Les pluies se concentrent sur juillet et août. Jeju reste plus douce que le continent toute l'année.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Corée du Sud. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/coree-du-sud/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Corée du Sud, de Séoul à Gyeongju et à l'île de Jeju",
            "Adresses confidentielles en Corée du Sud : ateliers d'artisans et tables de chefs",
            "Hébergements en Corée du Sud : maisons de bois de Séoul et domaines de bord de mer",
            "Conciergerie privée 24/7 pour un voyage en Corée du Sud",
            "Expériences en Corée du Sud : palais en privé, marchés de nuit et cuisine à Busan",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître en Corée du Sud",
      heading: "De Séoul à Jeju, six étapes possibles",
      description:
        "Le pays se parcourt en train, d'une ville à l'autre. On passe de la capitale aux temples, puis à la mer. Voici les étapes qui structurent un séjour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Séoul",
          description:
            "La capitale occupe une cuvette entourée de montagnes, traversée par le fleuve Han. Les palais et les quartiers de hanoks sont au nord, les tours et les boutiques au sud.",
          image: {
            src: "/destination/coree-du-sud/map-seoul.png",
            alt: "Toits du palais de Gyeongbokgung et tours de Séoul en arrière-plan",
          },
          // TODO: verify coords
          coordinates: { lat: 37.5665, lng: 126.978 },
        },
        {
          title: "Andong et le village de Hahoe",
          description:
            "Un village de maisons de bois et de terre, toujours habité, installé dans une boucle de rivière. On y fabrique encore les masques peints utilisés pour les danses du village.",
          image: {
            src: "/destination/coree-du-sud/map-andong.png",
            alt: "Maisons de terre et toits de chaume du village de Hahoe, près d'Andong",
          },
          // TODO: verify coords
          coordinates: { lat: 36.539, lng: 128.5177 },
        },
        {
          title: "Gyeongju",
          description:
            "Les tombes des rois de Silla forment des collines d'herbe en plein centre-ville. Dans la forêt voisine, le temple de Bulguksa et l'ermitage de Seokguram se visitent tôt le matin.",
          image: {
            src: "/destination/coree-du-sud/map-gyeongju.png",
            alt: "Tumulus royaux couverts d'herbe dans le centre de Gyeongju",
          },
          // TODO: verify coords
          coordinates: { lat: 35.8562, lng: 129.2247 },
        },
        {
          title: "Jeonju",
          description:
            "Le plus grand quartier de hanoks du pays, et la ville où le bibimbap est né. On y mange bien dans les grandes tables comme dans les petites salles sans enseigne.",
          image: {
            src: "/destination/coree-du-sud/map-jeonju.png",
            alt: "Ruelle bordée de maisons de bois dans le village de hanoks de Jeonju",
          },
          // TODO: verify coords
          coordinates: { lat: 35.8242, lng: 127.148 },
        },
        {
          title: "Busan",
          description:
            "La deuxième ville du pays, construite entre la mer et les collines. Le marché aux poissons de Jagalchi ouvre à l'aube, et les maisons du quartier de Gamcheon sont peintes de toutes les couleurs.",
          image: {
            src: "/destination/coree-du-sud/map-busan.png",
            alt: "Maisons colorées du quartier de Gamcheon dominant la mer, à Busan",
          },
          // TODO: verify coords
          coordinates: { lat: 35.1796, lng: 129.0756 },
        },
        {
          title: "L'île de Jeju",
          description:
            "Une île volcanique au sud du pays, dominée par le cratère du Hallasan. Les haenyeo, les plongeuses de l'île, y travaillent encore sans bouteille, et le poisson se mange à la sortie de l'eau.",
          image: {
            src: "/destination/coree-du-sud/map-jeju.png",
            alt: "Côte de roche volcanique noire et champs bordés de murets sur l'île de Jeju",
          },
          // TODO: verify coords
          coordinates: { lat: 33.4996, lng: 126.5312 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Corée du Sud",
      description:
        "Huit repères rapportés du terrain : comment on circule, ce qui se réserve à l'avance, et ce qui change d'une saison à l'autre.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le train fait presque tout le voyage",
          cardEyebrow: "Transports",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le KTX relie Séoul à Busan en un peu plus de deux heures, et dessert Gyeongju au passage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Corée est traversée par une ligne à grande vitesse, le KTX,
                qui relie Séoul à Busan en un peu plus de deux heures. Gyeongju
                et Jeonju se rejoignent sur le même axe. Les gares sont en plein
                centre, ce qui évite les trajets d&apos;aéroport et les heures
                perdues.
              </p>
              <p>
                Louer une voiture n&apos;a d&apos;intérêt que sur l&apos;île de
                Jeju et autour d&apos;Andong, où les sites sont dispersés. Pour
                le reste, un chauffeur à la journée coûte moins cher que la
                somme des taxis, et permet de garder les bagages avec soi.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les billets de train sont pris avant le départ, en première
                classe, et un chauffeur récupère les voyageurs à chaque gare.
              </p>
            </div>
          ),
        },
        {
          title: "Deux bases suffisent, trois si l'on ajoute Jeju",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Séoul pour la première partie, le sud pour la seconde, et Jeju en fin de séjour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Séoul demande au moins quatre nuits : la ville est vaste, et les
                palais, les marchés et les musées se répartissent sur plusieurs
                quartiers éloignés. Le sud, entre Gyeongju et Busan, occupe
                ensuite trois à quatre nuits.
              </p>
              <p>
                Jeju se garde pour la fin. L&apos;île se rejoint en une heure de
                vol depuis Séoul ou Busan, et c&apos;est la partie du voyage où
                l&apos;on ne prévoit rien. Deux semaines permettent
                d&apos;enchaîner les trois, dix jours obligent à choisir entre
                le sud et l&apos;île.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons les journées libres après les journées de visite,
                jamais l&apos;inverse. Le décalage se rattrape mieux ainsi.
              </p>
            </div>
          ),
        },
        {
          title: "Les palais et les musées ferment un jour par semaine",
          cardEyebrow: "Réservation",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Changdeokgung, Gyeongbokgung et les grands musées ont chacun leur jour de fermeture",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Chaque palais de Séoul a son jour de fermeture, et ils ne sont
                pas alignés. Le Jardin secret de Changdeokgung se visite en
                nombre limité, sur créneau horaire, et les places partent
                plusieurs semaines à l&apos;avance au printemps et à
                l&apos;automne.
              </p>
              <p>
                Le Korea Furniture Museum reçoit uniquement sur rendez-vous, et
                les ateliers d&apos;artisans travaillent en semaine. Ce sont
                justement les endroits les plus calmes, à condition de les avoir
                demandés en amont.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;ordre des journées est construit à partir de ces
                fermetures, avant même de choisir les hôtels.
              </p>
            </div>
          ),
        },
        {
          title: "Se déchausser, et s'asseoir par terre",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On retire ses chaussures dans les maisons, les temples et beaucoup de restaurants",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On se déchausse à l&apos;entrée des maisons, des temples et
                d&apos;une bonne partie des restaurants traditionnels, où
                l&apos;on mange assis sur un sol chauffé, appelé ondol. Des
                chaussures faciles à retirer changent la journée.
              </p>
              <p>
                À table, on sert les autres avant soi, et l&apos;on tient son
                verre à deux mains lorsqu&apos;une personne plus âgée le
                remplit. Ces gestes sont attendus, et ils sont remarqués quand
                ils sont faits.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le guide explique ces usages le premier jour, avant le premier
                repas, pas au moment de la maladresse.
              </p>
            </div>
          ),
        },
        {
          title: "La cuisine coréenne est plus douce qu'on ne l'imagine",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La cuisine de cour, les grillades et les soupes de bœuf sont douces et se commandent partout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La réputation pimentée de la cuisine coréenne vient du kimchi et
                de quelques plats de nouilles. Une grande partie des plats sont
                doux : les grillades de bœuf, les soupes claires, les raviolis
                mandu, les galettes de riz, la cuisine de cour servie en petits
                bols.
              </p>
              <p>
                Les grandes tables de Séoul travaillent la cuisine coréenne
                contemporaine, avec des menus en plusieurs services et des
                cartes en anglais. Les meilleures affichent complet un mois à
                l&apos;avance.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les tables du soir sont réservées avant le départ, avec les
                régimes alimentaires transmis au chef.
              </p>
            </div>
          ),
        },
        {
          title: "Dormir une nuit dans une maison de bois",
          cardEyebrow: "Hébergement",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le hanok se dort sur un matelas posé au sol, dans une chambre où l'on vit au niveau du plancher",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un hanok est une maison traditionnelle en bois, organisée autour
                d&apos;une cour. On y dort sur un matelas épais posé au sol,
                dans une chambre chauffée par le plancher. Les chambres sont
                petites et les salles de bains modernes.
              </p>
              <p>
                Une ou deux nuits suffisent, en général à Jeonju ou près
                d&apos;Andong, où les hanoks sont les mieux conservés. Le reste
                du séjour se passe dans des adresses classiques, avec lit et
                grande salle de bains.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons la nuit en hanok en milieu de séjour, une fois le
                décalage passé. C&apos;est là qu&apos;on en profite le mieux.
              </p>
            </div>
          ),
        },
        {
          title: "Les couleurs d'automne descendent du nord",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le feuillage tourne de la mi-octobre à la mi-novembre, en descendant des montagnes du nord vers le sud",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;automne coréen est court et très marqué. Les premières
                couleurs apparaissent fin septembre sur les sommets du
                Seoraksan, puis la vague descend vers le sud. Le pic se situe
                entre la mi-octobre et la mi-novembre, et Séoul tourne fin
                octobre.
              </p>
              <p>
                Les cerisiers suivent le chemin inverse au printemps : ils
                fleurissent d&apos;abord sur Jeju et sur la côte sud, vers la
                fin mars, et atteignent Séoul dans les premiers jours
                d&apos;avril. La floraison ne dure qu&apos;une semaine par
                ville.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les dates sont calées sur les prévisions de floraison et de
                feuillage, publiées chaque année quelques semaines avant.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des chaussures faciles à retirer, une veste coupe-vent, et de la place au retour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Des chaussures qui se retirent sans les mains, parce qu&apos;on
                se déchausse plusieurs fois par jour. Une veste coupe-vent au
                printemps et à l&apos;automne, où les écarts entre le matin et
                l&apos;après-midi sont importants. Un parapluie léger en
                juillet.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoir de la place au retour. Les céramiques, le papier hanji,
                les thés et les produits de soin repartent avec presque tout le
                monde, et les boutiques d&apos;artisans expédient rarement en
                France.
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
            "Nous sommes rentrés en parlant des repas. Le guide nous emmenait dans des salles où personne ne parlait anglais, il commandait pour nous, et il nous expliquait chaque bol avant qu'on y touche.",
          image: {
            src: "/destination/coree-du-sud/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Corée du Sud à deux, octobre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le Jardin secret avant l'ouverture, et ensuite la journée en hanbok. Notre fille a photographié la cour pendant des heures, et c'est elle qui a demandé qu'on prolonge l'après-midi.",
          image: {
            src: "/destination/coree-du-sud/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Corée du Sud en famille, avril 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Séoul nous a tenus en haleine du matin au soir. Terminer par Jeju était le bon choix : on a marché, on a mangé du poisson à la sortie de l'eau, et on n'a rien eu à organiser pendant quatre jours.",
          image: {
            src: "/destination/coree-du-sud/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Corée du Sud, novembre 2025", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir en Corée du Sud ?",
          answer:
            "Deux fenêtres se détachent. Le printemps d'abord : les cerisiers fleurissent vers la fin mars sur Jeju et dans le sud, et dans les premiers jours d'avril à Séoul, la floraison ne durant qu'une semaine par ville. L'automne ensuite, de la mi-octobre à la mi-novembre, pour les couleurs. La mousson tombe de fin juin à fin juillet, le risque de typhon culmine en août, et l'hiver est sec, froid et très lumineux, ce qui convient bien à un séjour de ville et de musées.",
        },
        {
          question: "Combien de temps dure le vol Paris - Séoul ?",
          answer:
            "Environ douze heures sans escale à l'aller, et un peu plus de quatorze heures au retour, où les vents sont contraires. Air France, Korean Air, Asiana et T'way assurent la liaison, avec une quinzaine de vols par semaine. Le décalage est de sept heures d'avance en été et de huit en hiver. Depuis l'aéroport d'Incheon, le centre de Séoul se rejoint en une heure de route ou de train express.",
        },
        {
          question: "Faut-il un visa pour aller en Corée du Sud ?",
          answer:
            "Non, pas pour un séjour touristique de moins de quatre-vingt-dix jours. Un passeport en cours de validité suffit : la Corée n'exige pas de mois de validité supplémentaire après le retour. L'autorisation électronique K-ETA, obligatoire pour certaines nationalités, reste suspendue pour les voyageurs français jusqu'au 31 décembre 2026. Aucun vaccin n'est exigé à l'entrée.",
        },
        {
          question: "Que faire en Corée du Sud en deux semaines ?",
          answer:
            "Quatre à cinq nuits à Séoul, avec le palais de Changdeokgung et son Jardin secret en visite privée, le village de hanoks de Bukchon, les marchés de nuit et une journée en hanbok. Ensuite le sud : Gyeongju et ses tombes royales, Jeonju et son quartier de maisons de bois, puis Busan pour la mer et le marché de Jagalchi. Les derniers jours sur l'île de Jeju, pour marcher et ne rien prévoir.",
        },
        {
          question: "Comment se déplacer en Corée du Sud ?",
          answer:
            "Le train à grande vitesse, le KTX, relie Séoul à Busan en un peu plus de deux heures et dessert Gyeongju et Jeonju. Les gares sont en centre-ville. La voiture n'a d'intérêt que sur l'île de Jeju et autour d'Andong. Dans les villes, un chauffeur à la journée reste la solution la plus simple, car les adresses coréennes sont difficiles à indiquer à un taxi.",
        },
        {
          question: "Où dormir en Corée du Sud ?",
          answer:
            "À Séoul, le nord de la ville place les palais et les quartiers de hanoks à pied, tandis que le sud, autour de Cheongdam, réunit les boutiques et les grandes tables. Près de Busan, les adresses de bord de mer donnent sur la côte ouverte, avec des bains alimentés par une source chaude. Sur Jeju, les maisons d'architecte au milieu des champs offrent le format le plus calme. Une ou deux nuits en hanok complètent bien le séjour, sans en faire la base.",
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
        "D'autres pays d'Asie où les temples, les tables et les montagnes tiennent le même rôle. Trois prolongements possibles après un premier voyage en Corée du Sud.",
      slugs: ["japon", "vietnam", "bhoutan"],
    },
  ],
};
