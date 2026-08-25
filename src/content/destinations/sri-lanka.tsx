import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "sri-lanka",
  name: "Sri Lanka",
  placeKind: "country",
  country: "Sri Lanka",
  genitive: "du Sri Lanka",
  continentSlug: "asie",
  blurb: "Sigiriya, pays du thé, Yala, Galle",
  keywords: [
    "sri lanka",
    "ceylan",
    "sigiriya",
    "kandy",
    "yala",
    "galle",
    "the de ceylan",
    "triangle culturel",
  ],
  metaTitle: "Sri Lanka : Voyage sur mesure",
  metaDescription:
    "Voyage au Sri Lanka sur mesure : Sigiriya, pays du thé, léopards de Yala, remparts de Galle. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Sri Lanka",
      heading: "Sri Lanka, une île qu'on traverse en huit heures, et qui raconte trois mille ans",
      description:
        "Des fresques de Sigiriya aux remparts de Galle, des plantations de Bogawantalawa aux jungles de Yala, le Sri Lanka réunit dans une seule île ce que d'autres pays mettent un continent à rassembler. On quitte une capitale royale abandonnée aux figuiers pour monter dans le froid des hautes terres, et l'on dort le lendemain là où passent les léopards. Nous écrivons cette continuité depuis dix ans.",
      images: [
        {
          src: "/destination/sri-lanka/hero-1.png",
          alt: "Rocher de Sigiriya émergeant de la jungle au lever du jour au Sri Lanka",
        },
        {
          src: "/destination/sri-lanka/hero-2.png",
          alt: "Cueilleuse de thé dans les plantations en terrasses des hautes terres srilankaises",
        },
        {
          src: "/destination/sri-lanka/hero-3.png",
          alt: "Remparts hollandais de Galle au coucher du soleil sur la côte sud du Sri Lanka",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Sri Lanka ?",
      heading: "Stéphane, spécialiste du Sri Lanka, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Il existe peu d'îles où l'on puisse regarder les fresques de Sigiriya au lever du jour, s'endormir le soir dans un bungalow de planteur au milieu des théiers, et suivre la trace d'un léopard le surlendemain. Le Sri Lanka autorise ce déroulé, et c'est précisément lui que nous prenons le temps d'écrire, étape après étape. Un voyage qui s'enchaîne, plutôt qu'une succession de visites.",
        role: "Travel Designer · Sri Lanka",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Sri Lanka",
      heading: "Les capitales que la jungle a reprises",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Sri Lanka change plusieurs fois de climat sans jamais imposer une longue route. Le matin, on gravit un rocher de granit qu'un roi avait transformé en capitale. L'après-midi, on gagne les hautes terres, où l'air se rafraîchit d'un coup et où les théiers couvrent les versants jusqu'à la crête. Le lendemain, la jungle sèche du sud-est et ses pistes de sable.",
        "Le triangle culturel n'est pas une formule d'agence. Anuradhapura, Polonnaruwa et Sigiriya sont trois capitales successives, abandonnées les unes après les autres entre le IVe siècle avant notre ère et le XIIIe. Les figuiers ont poussé dans les palais. Les fresques des demoiselles de Sigiriya ont mille cinq cents ans et gardent leurs pigments.",
        "Ceylon Tea Trails occupe quatre bungalows de planteurs dans la vallée de Bogawantalawa. Amangalla tient un bâtiment de 1684 à l'intérieur des remparts de Galle. Entre les deux, il y a sept heures de voie unique, un col à Nanu Oya et une logique de voyage que nous écrivons dossier par dossier.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/sri-lanka/full-image.png",
        alt: "Plantations de thé en terrasses des hautes terres du Sri Lanka sous la brume du matin",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Sri Lanka : le pays du thé",
      heading: "Le matin où la brume se lève sur Bogawantalawa",
      theme: "light",
      paragraphs: [
        "La cueillette commence à sept heures dans la vallée de Bogawantalawa, à 1 200 mètres. Les femmes avancent par rangs : deux feuilles et un bourgeon, le sac retenu par une sangle au front. Un théier vit cent ans. Certains buissons plantés par les Écossais dans les années 1880 produisent encore.",
        "À Dambatenne, l'usine construite par Thomas Lipton en 1890 tourne avec ses machines d'origine. Le flétrissage dure douze heures, le roulage vingt minutes, l'oxydation se juge à l'odeur. Le contremaître goûte quarante tasses dans la matinée et recrache. Ce n'est pas une démonstration pour visiteurs : c'est la production du jour, celle qui partira aux enchères de Colombo le mardi suivant.",
      ],
      images: [
        {
          src: "/destination/sri-lanka/split-1.png",
          alt: "Cueilleuse de thé avançant dans un rang de théiers de la vallée de Bogawantalawa",
        },
        {
          src: "/destination/sri-lanka/split-2.png",
          alt: "Machines d'origine de l'usine de thé de Dambatenne construite par Thomas Lipton",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/sri-lanka/xp-sigiriya-1.png",
          alt: "Escalier taillé dans la paroi du rocher de Sigiriya au petit matin",
        },
        right: {
          src: "/destination/sri-lanka/xp-sigiriya-2.png",
          alt: "Fresque des demoiselles de Sigiriya peinte à même la paroi de granit",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Les 1 200 marches de Sigiriya avant l'ouverture",
        columns: [
          "Les grilles ouvrent à sept heures. On y est à cinq heures et demie, avec un archéologue et l'autorisation qui va avec. Le rocher fait 180 mètres au-dessus de la plaine. Kassapa y a bâti sa capitale en 477, après avoir emmuré son père vivant, et l'a tenue dix-huit ans avant de perdre la bataille et de se donner la mort en contrebas. Les jardins d'eau à ses pieds fonctionnent encore par gravité, à la saison des pluies.",
          "À mi-hauteur, la galerie abrite vingt-et-une demoiselles peintes à même la paroi. Il y en avait cinq cents. En dessous, le mur miroir porte des vers gravés entre le VIe et le XIVe siècle par des visiteurs qui commentaient déjà ces fresques : c'est le plus ancien corpus de poésie en cinghalais. À sept heures, quand la file se forme en bas, on redescend.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Sri Lanka",
      heading: "Ce qu'on fait, entre Kandy et Yala",
      description:
        "Sept heures de voie unique jusqu'à Ella, les grilles du bloc 1 de Yala à l'ouverture, le Thevava de 18 h 30 au temple de la Dent.",
      slugs: [
        "train-kandy-ella-wagon-prive",
        "pistage-leopards-yala",
        "temple-de-la-dent-ceremonie",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Sri Lanka",
      description:
        "Quatre bungalows de planteurs dans la vallée de Bogawantalawa, des cocons de toile et de teck à la lisière de Yala, un bâtiment de 1684 dans les remparts de Galle.",
      slugs: ["ceylon-tea-trails", "wild-coast-tented-lodge", "amangalla"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Sri Lanka",
      description:
        "Vol, décalage, monnaie, formalités et moussons : l'essentiel pour préparer le voyage au Sri Lanka sans mauvaise surprise.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Aucune liaison directe régulière depuis Paris. Comptez 13 à 15h de trajet avec escale, via Dubaï, Doha ou Istanbul, jusqu'à Colombo-Bandaranaike (CMB).",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "+4h30 en hiver, +3h30 en été par rapport à Paris. L'île reste toute l'année en UTC+5:30, sans changement d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Roupie srilankaise (LKR). 1 € vaut environ 385 LKR en août 2026. Les hôtels acceptent les cartes ; prévoir du cash pour les temples, les pourboires et les marchés.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Passeport valable au moins six mois après l'entrée au Sri Lanka. Pour les ressortissants français, le visa touristique de 30 jours est actuellement gratuit. Les formalités ETA sont à effectuer avant le voyage.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination systématiquement obligatoire pour un séjour classique depuis la France. Hépatite A et typhoïde peuvent être recommandées selon le parcours. L'île est certifiée exempte de paludisme depuis 2016, mais la protection contre les moustiques reste essentielle (dengue, chikungunya).",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Décembre à mars pour le sud-ouest, les hautes terres et le triangle culturel. Mai à septembre pour l'est et le nord-est. Les moussons décalées rendent impossible une seule meilleure saison nationale.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Cinghalais et tamoul, les langues officielles. L'anglais est très largement utilisé dans le tourisme, les hôtels et les trains.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Tropical et chaud sur les côtes, 27 à 32°C toute l'année. Nettement plus frais sur les hauts plateaux, 15 à 22°C à Nuwara Eliya et Bogawantalawa, avec des nuits froides. Plusieurs régimes de mousson selon le versant.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Sri Lanka. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/sri-lanka/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Sri Lanka entre triangle culturel, pays du thé et côte sud",
            "Adresses confidentielles au Sri Lanka : bungalows de planteurs et maisons hors circuit",
            "Hébergements au Sri Lanka : Ceylon Tea Trails et Wild Coast Tented Lodge",
            "Conciergerie privée 24/7 pour un voyage au Sri Lanka",
            "Expériences immersives au Sri Lanka : Sigiriya à l'aube et pistage des léopards de Yala",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Sri Lanka",
      heading: "Six étapes, du triangle culturel à la côte",
      description:
        "De Sigiriya à Galle, six étapes que la route relie en une dizaine de jours et que la plupart des itinéraires traitent séparément.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Sigiriya, la capitale de dix-huit ans",
          description:
            "Le rocher culmine à 180 mètres au-dessus de la plaine. Au sommet, les fondations du palais de Kassapa et des citernes taillées dans le granit, en eau depuis 477.",
          image: {
            src: "/destination/sri-lanka/map-sigiriya.png",
            alt: "Rocher du Lion de Sigiriya vu depuis la plaine et ses jardins d'eau",
          },
          // TODO: verify coords
          coordinates: { lat: 7.957, lng: 80.7603 },
        },
        {
          title: "Kandy, la dernière cour royale",
          description:
            "Le royaume est tombé en 1815. Le temple de la Dent garde une relique du Bouddha et trois cérémonies par jour, tambours et hautbois.",
          image: {
            src: "/destination/sri-lanka/map-kandy.png",
            alt: "Temple de la Dent au bord du lac de Kandy au Sri Lanka",
          },
          // TODO: verify coords
          coordinates: { lat: 7.2906, lng: 80.6337 },
        },
        {
          title: "Bogawantalawa, la vallée d'or",
          description:
            "À 1 200 mètres, la vallée produit l'un des thés les plus cotés de Ceylan. Quatre bungalows de planteurs des années 1890 y sont restés habitables.",
          image: {
            src: "/destination/sri-lanka/map-bogawantalawa.png",
            alt: "Vallée de Bogawantalawa et ses plantations de thé dans les hautes terres srilankaises",
          },
          // TODO: verify coords
          coordinates: { lat: 6.7833, lng: 80.6333 },
        },
        {
          title: "Ella, le pont des neuf arches",
          description:
            "Le viaduc de Demodara a été bâti en 1921 en pierre et en briques, sans une tige d'acier : la guerre avait tout absorbé. Le train y passe plusieurs fois par jour.",
          image: {
            src: "/destination/sri-lanka/map-ella.png",
            alt: "Pont des neuf arches de Demodara près d'Ella entouré de jungle",
          },
          // TODO: verify coords
          coordinates: { lat: 6.8667, lng: 81.0466 },
        },
        {
          title: "Yala, la densité de léopards",
          description:
            "Le bloc 1 affiche l'une des plus fortes densités de léopards au monde. Le parc ferme en septembre et une partie d'octobre, quand les points d'eau s'assèchent.",
          image: {
            src: "/destination/sri-lanka/map-yala.png",
            alt: "Léopard du Sri Lanka sur un rocher du bloc 1 du parc national de Yala",
          },
          // TODO: verify coords
          coordinates: { lat: 6.3728, lng: 81.5016 },
        },
        {
          title: "Galle, la ville dans ses remparts",
          description:
            "Les fortifications hollandaises de 1663 ont contenu le tsunami de 2004. À l'intérieur, des rues à angle droit, un phare et un terrain de cricket qu'on regarde depuis le rempart.",
          image: {
            src: "/destination/sri-lanka/map-galle.png",
            alt: "Phare et remparts hollandais du fort de Galle sur la côte sud du Sri Lanka",
          },
          // TODO: verify coords
          coordinates: { lat: 6.0535, lng: 80.221 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Sri Lanka",
      description:
        "Huit observations de terrain qui ne se trouvent pas dans un guide. Pour calibrer les attentes, choisir la bonne fenêtre ou comprendre pourquoi nous inscrivons telle étape à l'itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Deux moussons, jamais la même côte",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Il pleut toujours quelque part sur l'île. Le tout est de savoir sur quel versant, et quand",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Sri Lanka connaît deux moussons décalées. La mousson du
                sud-ouest arrive de mai à septembre et arrose Colombo, Galle et
                les hautes terres. La mousson du nord-est prend le relais de
                novembre à février sur Trincomalee, Jaffna et la côte est.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Aucune période n'est mauvaise pour l'île entière, mais
                chaque période est mauvaise pour une moitié. De décembre à mars,
                nous construisons les itinéraires autour du triangle culturel,
                du pays du thé et de la côte sud. De mai à septembre, nous
                basculons vers l'est. Un itinéraire qui traverse les deux
                versants au mauvais moment se paie en journées perdues.
              </p>
            </div>
          ),
        },
        {
          title: "Le train de Kandy à Ella",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Sept heures de voie unique construite par les Britanniques pour descendre le thé vers Colombo",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La ligne date des années 1860 et servait à évacuer le thé des
                hautes terres. Elle grimpe jusqu'à Nanu Oya, longe les
                plantations de Haputale et traverse le viaduc de Demodara. Les
                fenêtres restent ouvertes. Les vendeurs de vadai montent à
                chaque arrêt.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le trajet complet Kandy-Ella prend six à sept heures. Nous ne le
                faisons jamais en entier avec les familles : la portion Nanu Oya
                à Ella, environ trois heures, concentre les plus beaux
                paysages. Une voiture d'observation réservée évite la
                cohue des voitures de seconde classe, où les portes restent
                bondées.
              </p>
            </div>
          ),
        },
        {
          title: "Se tenir dans un temple",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Épaules et genoux couverts, chaussures retirées, et jamais le dos tourné à une statue du Bouddha",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le bouddhisme theravada structure la vie quotidienne. Dans un
                temple, on retire chaussures et chapeau, on couvre épaules et
                genoux. On ne tourne pas le dos à une statue du Bouddha pour se
                photographier devant, et on ne pointe pas du doigt une
                représentation.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les tatouages représentant le Bouddha sont mal vus et ont déjà
                valu des refus d'entrée sur le territoire. Prévoyez un
                paréo léger dans le sac : les jours de pleine lune (poya), les
                temples sont pleins et l'accès se fait pieds nus sur la
                pierre chaude.
              </p>
            </div>
          ),
        },
        {
          title: "Yala, le bloc 1 et les autres",
          cardEyebrow: "Safari",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La densité de léopards est réelle. La densité de 4x4 aussi, si l'on entre au mauvais moment",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le bloc 1 concentre les léopards et, en haute saison, les
                véhicules. Les grilles ouvrent à six heures. Vingt minutes de
                retard suffisent à se retrouver dans une file. Le parc ferme
                en septembre et une partie d'octobre, à la saison sèche
                extrême.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous sortons à l'ouverture, avec un naturaliste qui suit
                les mêmes individus depuis des années et lit les alarmes des
                langurs plutôt que la radio des autres 4x4. Pour ceux qui
                veulent la faune sans les véhicules, Wilpattu au nord-ouest
                offre un terrain plus vaste et bien moins fréquenté.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux climats dans un seul sac : le coton des côtes et la laine des hautes terres",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur les côtes, il fait 30°C et humide toute l'année. À
                Nuwara Eliya et Bogawantalawa, à 1 800 mètres, les nuits
                descendent à 10°C et les bungalows de planteurs se chauffent à
                la cheminée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Lin et coton pour la plaine, un pull et une veste coupe-vent
                pour les hautes terres. Des chaussures fermées pour les 1 200
                marches de Sigiriya et les 5 500 du pic d'Adam.
                Répulsif anti-moustiques, adaptateur de type G, et un paréo
                pour les temples.
              </p>
            </div>
          ),
        },
        {
          title: "Santé, eau et dengue",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Pas de paludisme depuis 2016. La dengue, elle, circule toute l'année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'OMS a certifié le Sri Lanka exempt de paludisme en 2016 ;
                quelques cas importés peuvent encore survenir. Aucune
                vaccination n'est systématiquement obligatoire pour un séjour
                classique depuis la France, mais hépatite A et typhoïde
                peuvent être recommandées selon le parcours. La dengue et le
                chikungunya, transmis par des moustiques diurnes, circulent
                toute l'année.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Eau en bouteille scellée, y compris pour les dents.
                Répulsif matin et fin de journée, pas seulement le soir. Les
                hôpitaux privés de Colombo sont d'un bon niveau ; nous
                identifions le plus proche pour chaque étape de
                l'itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "La table srilankaise",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le rice and curry n'est pas un plat mais une table entière, servie en huit bols",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Un rice and curry de maison compte six à dix préparations
                autour du riz : dhal, jacquier vert, aubergine confite,
                sambol de coco râpé au piment, poisson en ambul thiyal séché au
                gorakā. Le matin, ce sont les hoppers, crêpes de farine de riz
                en forme de bol, avec un œuf au fond.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La cuisine srilankaise est nettement plus relevée que la
                cuisine indienne du sud. On demande « less spicy » sans honte,
                et cela reste piquant. Le kottu, roti haché à la plancha au son
                de deux lames métalliques, se mange le soir, dans la rue, et
                nulle part ailleurs.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La vie locale coûte peu. Les quelques adresses qui tiennent un vrai niveau de service, non",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La vie quotidienne pèse peu dans un budget : un repas dans une
                maison de Galle, un trajet en tuk-tuk, l'entrée d'un temple.
                Ce qui compte dans un voyage sur mesure, ce sont les quelques
                propriétés de l'île qui tiennent un vrai niveau de service, et
                les accès négociés hors horaires.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoir du cash en roupies pour les temples, les pourboires et
                les marchés ; les cartes passent dans les hôtels et les grandes
                villes. Le pourboire est attendu, au restaurant comme pour le
                chauffeur-guide en fin de séjour.
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
            "Monter à Sigiriya à cinq heures et demie avec un archéologue, c'est autre chose que la file de sept heures. On avait la galerie des fresques pour nous, et il nous a lu les graffitis du mur miroir. Ce matin-là justifie le voyage.",
          image: {
            src: "/destination/sri-lanka/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Sri Lanka, triangle culturel et pays du thé, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Les bungalows de Bogawantalawa, le feu de cheminée à 1 200 mètres et le thé servi à six heures du matin : on ne s'attendait pas à avoir froid au Sri Lanka. C'est le souvenir le plus net des quinze jours.",
          image: {
            src: "/destination/sri-lanka/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Sri Lanka en famille, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "À Yala, notre naturaliste a coupé le moteur et attendu quarante minutes sur les alarmes des langurs. Le léopard est passé à dix mètres. Les autres 4x4 étaient trois kilomètres plus loin, sur la radio.",
          image: {
            src: "/destination/sri-lanka/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Sri Lanka, Yala et côte sud, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Sri Lanka ?",
          answer:
            "De décembre à mars pour le sud-ouest, les hautes terres et le triangle culturel : c'est la saison sèche sur ce versant et la meilleure fenêtre pour un itinéraire complet. De mai à septembre, la mousson du sud-ouest arrose Colombo et Galle, mais l'est et le nord-est, autour de Trincomalee, sont alors plus favorables. Les moussons décalées font qu'aucune saison n'est bonne pour l'île entière au même moment.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Il n'existe pas de liaison directe entre Paris et Colombo. Comptez 13 à 15 heures de trajet total avec une escale à Dubaï, Doha, Abu Dhabi ou Istanbul, pour environ 10 heures de vol effectif. L'arrivée se fait à l'aéroport Bandaranaike (CMB), à trente kilomètres au nord de Colombo.",
        },
        {
          question: "Faut-il un visa pour aller au Sri Lanka ?",
          answer:
            "Les formalités passent par le système ETA, à effectuer en ligne sur le portail officiel srilankais avant le départ. Depuis le 25 mai 2026, le visa touristique de 30 jours est gratuit pour les ressortissants français. Le passeport doit être valable au moins six mois après la date d'entrée au Sri Lanka.",
        },
        {
          question: "Que faire au Sri Lanka en 15 jours ?",
          answer:
            "Quinze jours permettent de faire l'île dans sa cohérence : trois à quatre nuits dans le triangle culturel pour Sigiriya, Dambulla et Polonnaruwa, deux nuits à Kandy, trois nuits dans les plantations de thé autour de Bogawantalawa et Ella, deux nuits à Yala pour les safaris, puis quatre nuits sur la côte sud entre Galle et Tangalle. Les trajets se font en voiture avec chauffeur, avec la portion de train Nanu Oya-Ella en option.",
        },
        {
          question: "Le Sri Lanka est-il adapté aux familles avec enfants ?",
          answer:
            "Oui, c'est l'une des destinations d'Asie les plus faciles avec des enfants. Les distances restent courtes, l'anglais est largement parlé et le pays est déclaré exempt de paludisme depuis 2016. Les safaris à Yala et Udawalawe, les tortues de Rekawa et le train de montagne fonctionnent dès six ou sept ans. Nous ajustons les étapes pour ne pas dépasser trois heures de route par jour.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Sri Lanka ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part de chauffeur-guide dans l'itinéraire. La vie locale est peu coûteuse ; ce sont les quelques propriétés de l'île qui tiennent un vrai niveau de service, et les accès négociés hors horaires, qui font la différence. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays où l'océan Indien, le pistage et les civilisations anciennes se répondent dans un même voyage, à composer sur mesure avec votre travel designer.",
      slugs: ["maldives", "kenya", "turquie"],
    },
  ],
};
