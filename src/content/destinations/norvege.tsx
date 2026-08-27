import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "norvege",
  name: "Norvège",
  country: "Norvège",
  genitive: "de la Norvège",
  continentSlug: "europe",
  placeKind: "country",
  blurb: "Lofoten, Geirangerfjord, Sunnmøre, Valldal",
  keywords: [
    "norvege",
    "fjords",
    "lofoten",
    "geirangerfjord",
    "reine",
    "sorvagen",
    "valldal",
    "sunnmore",
    "aurores boreales",
  ],
  metaTitle: "Norvège, voyage sur mesure",
  metaDescription:
    "Voyage en Norvège sur mesure : fjords de Sunnmøre, Lofoten, Geiranger au lever du jour. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Norvège",
      heading: "Un pays de fjords, d'îles et de longues journées",
      description:
        "Un fjord est un bras de mer qui entre dans les terres, entre deux parois de plusieurs centaines de mètres. On y navigue comme dans un couloir, avec la montagne des deux côtés. En juin, dans les Lofoten, il fait jour toute la nuit.",
      images: [
        {
          src: "/destination/norvege/hero-1.webp",
          alt: "Village de Reine et sommets des Lofoten au bord de l'eau, Norvège",
        },
        {
          src: "/destination/norvege/hero-2.webp",
          alt: "Parois du Geirangerfjord plongeant dans l'eau sombre au lever du jour",
        },
        {
          src: "/destination/norvege/hero-3.webp",
          alt: "Cabane de pêcheur rouge isolée au pied d'une montagne enneigée",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Taïna, spécialiste de la Norvège, reste votre interlocutrice",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina", // TODO: verify collaborateurSlug (Taïna choisie par le client, spécialité Norvège à confirmer)
        // TODO: verify quote attribution
        quote:
          "En Norvège, tout dépend de la date. Les mêmes fjords ne donnent pas la même chose en février et en juin. La lumière change, les routes ouvrent ou ferment, les bateaux sortent ou restent à quai. Je commence donc toujours par les dates, jamais par la carte. Ensuite seulement, je choisis entre l'ouest et le nord.",
        role: "Travel Designer · Norvège",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Deux maisons, pas une chaîne",
          description:
            "Onze chambres à Sørvågen, sept chambres-paysage dans une gorge boisée à Valldal. Nous retenons ces adresses parce qu'elles sont tenues par des familles, pas par un siège social.",
        },
        {
          iconName: "sparkles",
          title: "Le calendrier avant la carte",
          description:
            "Le cabillaud arrive en janvier, la neige tient jusqu'en mai, le soleil de minuit dure du 28 mai au 14 juillet. Nous choisissons la région en fonction de vos dates, et non l'inverse.",
        },
        {
          iconName: "star",
          title: "Des skippers et des guides",
          description:
            "Patrons de pêche de Sørvågen, skippers du Reinefjord, guides de montagne du Sunnmøre : les accès se négocient avec eux, en direct, souvent plusieurs mois à l'avance.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Deux Norvège, séparées par mille kilomètres",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Norvège commence par le choix d'une région. Deux zones concentrent l'essentiel de nos itinéraires. À l'ouest, autour d'Ålesund et de Geiranger, la mer entre dans les terres et forme les fjords. Au nord, à plus de mille kilomètres de là, les îles Lofoten se trouvent au-delà du cercle polaire. Sur une photo, les deux régions se ressemblent. Sur place, on ne fait pas du tout le même voyage.",
        "À l'ouest, le paysage est vert et très vertical. Le Geirangerfjord s'étire sur quinze kilomètres et les montagnes qui l'entourent culminent entre 1 600 et 1 700 mètres. La cascade des Sept Sœurs y tombe de 410 mètres, en sept jets séparés. Sur les corniches, on aperçoit d'anciennes fermes : Skageflå, Knivsflå. Des familles y ont vécu jusqu'au début du vingtième siècle, sans autre accès qu'une barque et une échelle. Plus au sud, autour du Hjørundfjord, les montagnes des Alpes de Sunnmøre descendent directement jusqu'à la mer. Ålesund, reconstruite en style art nouveau après l'incendie de 1904, sert de point d'arrivée.",
        "Au nord, le décor est différent. Les Lofoten forment une longue série d'îles montagneuses, avec peu d'arbres et beaucoup de roche. La route s'arrête au village de Å, juste après Sørvågen. De janvier à avril, le cabillaud vient se reproduire au large et tout le village travaille le poisson. En été, le soleil ne se couche pas. En hiver, il ne se lève pas pendant quelques semaines, et l'on vient surtout pour les aurores boréales.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/norvege/full-image.webp",
        alt: "Fjord étroit et parois verticales sous une lumière basse, Norvège",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les Lofoten",
      heading: "Des îles montagneuses au-delà du cercle polaire",
      theme: "light",
      paragraphs: [
        "Les Lofoten se situent au-delà du cercle polaire, à la même latitude que le nord du Groenland. On imagine donc de la banquise, mais il n'y en a pas : le Gulf Stream, un courant marin chaud, longe la côte norvégienne et empêche la mer de geler. En février, la température à Reine tourne souvent autour de zéro degré. C'est ce qui permet d'habiter ces îles toute l'année, et c'est aussi ce qui attire le poisson.",
        "Ce poisson s'appelle le skrei. C'est un cabillaud qui vit dans la mer de Barents et qui descend chaque hiver se reproduire dans les eaux un peu plus douces du Vestfjord. Les bateaux sortent tous les matins de janvier à avril. Sur les quais, de grands séchoirs en bois appelés hjell se remplissent de morues suspendues par la queue : le poisson sèche au vent, sans sel, de février à juin. Les Lofoten exportent ce poisson séché depuis près de mille ans. L'Italie y a pris goût après le naufrage du marchand vénitien Pietro Querini sur l'île de Røst, en 1432, et elle en reste aujourd'hui l'un des premiers acheteurs. À Sørvågen, ce n'est pas une démonstration pour visiteurs, c'est le travail du village.",
      ],
      images: [
        {
          src: "/destination/norvege/split-1.webp",
          alt: "Séchoirs en bois couverts de morues suspendues dans un village des Lofoten",
        },
        {
          src: "/destination/norvege/split-2.webp",
          alt: "Bateau de pêche rentrant au port de Sørvågen sous une lumière d'hiver",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/norvege/xp-geirangerfjord-1.webp",
          alt: "Petit bateau seul sur l'eau lisse du Geirangerfjord au lever du jour",
        },
        right: {
          src: "/destination/norvege/xp-geirangerfjord-2.webp",
          alt: "Cascade des Sept Sœurs tombant dans le Geirangerfjord en Norvège",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le fjord avant l'arrivée des bateaux de croisière",
        columns: [
          "Le bateau quitte le quai de Geiranger tôt le matin, avant les premiers navires de croisière. À cette heure-là, l'eau est encore lisse et il n'y a personne d'autre sur le fjord. Le skipper coupe le moteur en face de la cascade des Sept Sœurs, qui tombe de 410 mètres en sept jets séparés. La plus haute de ces chutes fait 250 mètres de chute libre. On l'entend très distinctement depuis le bateau.",
          "On remonte ensuite le fjord jusqu'aux anciennes fermes de montagne. Skageflå est installée sur une plateforme herbeuse située à 250 mètres au-dessus de l'eau. Des familles y ont élevé des chèvres pendant plusieurs générations, sans route ni chemin pour y accéder. La tradition orale raconte que les enfants y étaient attachés pour éviter les chutes. Le bateau s'arrête juste en dessous. En milieu de matinée, les premiers navires entrent dans le fjord et l'on reprend la route vers Valldal.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Norvège",
      heading: "Trois sorties qui structurent le séjour",
      description:
        "Une matinée de pêche depuis Sørvågen, une navigation dans le Reinefjord, une semaine de ski depuis un voilier dans le Sunnmøre. Chacune dépend de la saison et se réserve à l'avance.",
      slugs: [
        "peche-skrei-lofoten",
        "reinefjord-moskenstraumen",
        "ski-voile-sunnmore",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements en Norvège",
      heading: "Où séjourner",
      description:
        "Une maison au bout de la route dans les Lofoten, neuf chambres de verre dans une gorge du Sunnmøre. Deux adresses, deux Norvège, tenues l'une et l'autre par leurs propriétaires.",
      slugs: ["holmen-lofoten", "juvet-landskapshotell"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Norvège",
      description:
        "Temps de vol, formalités, monnaie, saisons et lumière : l'essentiel pour choisir vos dates avant de choisir votre itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez un peu plus de 2 heures de vol direct entre Paris et Oslo. Les Lofoten se rejoignent ensuite par un vol Widerøe vers Leknes ou Svolvær, directement ou via Bodø. Au total, Paris - Lofoten demande environ dix heures de porte à porte.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun. La Norvège est sur le même fuseau que la France et applique les mêmes changements d'heure. Vous arrivez sans fatigue de décalage, ce qui permet de partir en excursion dès le premier matin.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est la couronne norvégienne. Un euro vaut environ 11 couronnes. Le pays fonctionne presque sans espèces : la carte bancaire est acceptée partout, y compris sur les bateaux et les petits marchés.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "La Norvège fait partie de l'espace Schengen sans être membre de l'Union européenne. Aucun visa n'est nécessaire pour les ressortissants français. Une carte nationale d'identité en cours de validité suffit.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est exigée. Les vaccins universels à jour suffisent. Le système de santé est de bon niveau, mais les distances sont longues dans le nord et les secours peuvent demander du temps.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De juin à août pour les fjords, la lumière continue et les routes de montagne ouvertes. De février à avril pour le ski et la pêche au skrei. De septembre à mars pour les aurores boréales dans les Lofoten.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le norvégien est la langue officielle, sous deux formes écrites. L'anglais se parle couramment partout, y compris chez les patrons de pêche et les guides. Le français reste rare en dehors des grands hôtels.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le Gulf Stream adoucit toute la côte. À Reine, février tourne autour de zéro degré malgré la latitude, et juillet autour de 16 degrés en journée. La côte ouest est nettement plus pluvieuse que le nord.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Voyage sur mesure en Norvège",
      description:
        "Plusieurs expertises interviennent sur chaque dossier norvégien. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'à votre retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: [
        {
          title: "Création d'itinéraires",
          description:
            "Mille kilomètres séparent les Lofoten du Sunnmøre. Nous décidons de ce que l'on garde, de ce que l'on abandonne, et dans quel ordre.",
          image: {
            src: "/destination/norvege/bento-map.webp",
            alt: "Carte d'itinéraire entre les fjords de l'ouest et les Lofoten",
          },
          tone: "dark",
        },
        {
          title: "Adresses confidentielles",
          description:
            "Tables de village à Sørvågen, fermes de fjord au fond du Hjørundfjord, quais privés à Geiranger. Ces adresses ne se réservent pas en ligne.",
          image: {
            src: "/destination/norvege/bento-adresses.webp",
            alt: "Table dressée face au fjord dans une maison de bois norvégienne",
          },
        },
        {
          title: "Hébergements hors réseaux",
          description:
            "Maisons familiales et hôtels de neuf chambres, choisis pour leur emplacement et leur cuisine plutôt que pour leur classement.",
          image: {
            src: "/destination/norvege/bento-hebergements.webp",
            alt: "Chambre vitrée ouverte sur une forêt de bouleaux et une rivière",
          },
        },
        {
          title: "Conciergerie 24/7",
          description:
            "Un seul interlocuteur du premier échange jusqu'au retour. En Norvège, la météo décide souvent : nous réorganisons la journée sans vous en charger.",
          image: {
            src: "/destination/norvege/bento-conciergerie.webp",
            alt: "Conseillère Exuma en conversation téléphonique avec un voyageur",
          },
        },
        {
          title: "Expériences immersives",
          description:
            "Sortie au skrei avec un patron de pêche, navigation privée dans le Reinefjord, ski depuis un voilier. Chaque accès se négocie en direct.",
          image: {
            src: "/destination/norvege/bento-experiences.webp",
            alt: "Skieur de randonnée montant une pente au-dessus d'un fjord norvégien",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les grandes étapes en Norvège",
      heading: "Six lieux autour desquels s'organisent nos itinéraires",
      description:
        "Trois dans les Lofoten, trois dans le Sunnmøre. La plupart de nos voyages se construisent sur l'un des deux blocs, ou sur les deux quand la durée le permet.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Reine et le Reinefjord",
          description:
            "Le village est construit sur une étroite bande de terre entre la mer et la montagne. Le fond du fjord n'est accessible que par bateau : aucune route ne dessert les plages de Bunes et de Kjerkfjorden.",
          image: {
            src: "/destination/norvege/map-reine.webp",
            alt: "Maisons rouges de Reine au pied des sommets du Reinefjord, Lofoten",
          },
          coordinates: { lat: 67.9324, lng: 13.0887 },
        },
        {
          title: "Sørvågen et Å",
          description:
            "La route E10 se termine ici, au bout de l'archipel. Le village vit de la pêche au cabillaud de janvier à avril, et ses séchoirs à poisson sont toujours en activité.",
          image: {
            src: "/destination/norvege/map-sorvagen.webp",
            alt: "Port de Sørvågen et fin de la route E10 au bout des Lofoten",
          },
          coordinates: { lat: 67.8869, lng: 12.9906 },
        },
        {
          title: "Le Moskenstraumen",
          description:
            "Entre les îles de Moskenesøya et de Værøy, la marée crée l'un des courants les plus puissants du monde. Poe et Jules Verne s'en sont inspirés pour décrire un tourbillon géant.",
          image: {
            src: "/destination/norvege/map-moskenstraumen.webp",
            alt: "Remous du courant de Moskenstraumen au large des Lofoten",
          },
          coordinates: { lat: 67.8, lng: 12.83 }, // TODO: verify coords
        },
        {
          title: "Le Geirangerfjord",
          description:
            "Classé à l'UNESCO depuis 2005, ce bras de mer de quinze kilomètres atteint 260 mètres de profondeur, entouré de sommets de 1 600 mètres. Les fermes de Skageflå et Knivsflå se rejoignent par bateau.",
          image: {
            src: "/destination/norvege/map-geirangerfjord.webp",
            alt: "Cascade des Sept Sœurs et parois du Geirangerfjord classé à l'UNESCO",
          },
          coordinates: { lat: 62.1019, lng: 7.2072 },
        },
        {
          title: "Valldal",
          description:
            "Un village agricole au bord du Norddalsfjord, connu pour ses fraises et pour la gorge de la Valldøla. C'est la base la plus commode pour rejoindre Geiranger sans y dormir.",
          image: {
            src: "/destination/norvege/map-valldal.webp",
            alt: "Rivière Valldøla et forêt de bouleaux dans la vallée de Valldal",
          },
          coordinates: { lat: 62.3067, lng: 7.2528 }, // TODO: verify coords
        },
        {
          title: "Le Hjørundfjord et les Alpes de Sunnmøre",
          description:
            "Ces montagnes comptent parmi les plus raides du pays et descendent jusqu'au bord de l'eau. Au printemps, on y monte à ski de randonnée et l'on redescend jusqu'au niveau de la mer.",
          image: {
            src: "/destination/norvege/map-hjorundfjord.webp",
            alt: "Sommets des Alpes de Sunnmøre plongeant dans le Hjørundfjord",
          },
          coordinates: { lat: 62.2, lng: 6.4 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Norvège",
      description:
        "Huit observations de terrain qui expliquent pourquoi nous inscrivons une étape à une date plutôt qu'à une autre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois couches, une veste vraiment imperméable, et un masque de sommeil",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La règle norvégienne tient en trois couches : laine mérinos
                contre la peau, polaire ou duvet léger au milieu, coquille
                imperméable et coupe-vent par-dessus. Le coton est à éviter, il
                garde l'humidité. Prévoyez des chaussures montantes à semelle
                crantée, y compris en été : les pontons et les rochers du bord
                de fjord sont glissants.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                De fin mai à mi-juillet, emportez un masque de sommeil. Dans les
                Lofoten, il fait jour à deux heures du matin et les rideaux des
                maisons de pêcheurs sont rarement occultants.
              </p>
            </div>
          ),
        },
        {
          title: "Choisir sa Norvège",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'ouest pour les fjords et la forêt, le nord pour la lumière et la mer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'ouest, autour d'Ålesund, de Valldal et de Geiranger, est vert,
                vertical et cultivé. On y circule en voiture et en bateau, les
                distances restent courtes, et chaque virage ouvre sur un fjord.
                C'est la Norvège la plus simple à parcourir.
              </p>
              <p>
                Le nord, dans les Lofoten, est minéral et exposé. Les paysages y
                sont plus radicaux, mais tout dépend de la météo et des bateaux.
                On y va pour la lumière et pour le sentiment d'être au bout de
                quelque chose.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                En dessous de dix jours, nous conseillons de n'en choisir qu'un
                seul. Relier les deux demande une journée entière de transport,
                avec deux vols.
              </p>
            </div>
          ),
        },
        {
          title: "La lumière commande",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Soleil de minuit du 28 mai au 14 juillet, nuit polaire en décembre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Au-delà du cercle polaire, le soleil reste visible vingt-quatre
                heures sur vingt-quatre du 28 mai au 14 juillet environ, selon
                l'endroit exact où l'on se trouve dans l'archipel. On peut
                naviguer ou marcher à vingt-trois heures avec une lumière basse
                et dorée. À l'inverse, pendant environ cinq semaines en hiver,
                le soleil ne passe plus la ligne d'horizon : il reste une
                clarté bleue de quelques heures en milieu de journée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Pour les aurores boréales, visez septembre à mars, quand le ciel
                est assez sombre. Rien ne se garantit : c'est un phénomène
                météorologique, pas un spectacle programmé.
              </p>
            </div>
          ),
        },
        {
          title: "Le skrei, de janvier à avril",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le cabillaud de Barents descend frayer dans le Vestfjord",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le skrei est un cabillaud qui passe l'année dans la mer de
                Barents et descend chaque hiver frayer au large des Lofoten. La
                saison va de janvier à avril environ. C'est le seul moment où
                l'on peut sortir avec un bateau de pêche en activité plutôt
                qu'avec un prestataire touristique.
              </p>
              <p>
                À terre, les séchoirs se remplissent et le poisson sèche au
                vent, sans sel, de février à juin. La technique n'a pas changé
                depuis le Moyen Âge : les Lofoten exportent leur poisson séché
                depuis près de mille ans.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons la sortie auprès d'un patron de pêche de
                Sørvågen, et faisons cuisiner la prise le soir même.
              </p>
            </div>
          ),
        },
        {
          title: "Les routes de montagne",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le Trollstigen a rouvert le 27 avril 2026, après deux saisons de travaux",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les routes de montagne de l'ouest ferment l'hiver et rouvrent
                selon la fonte, en général entre la mi-mai et début juin. Le
                Trollstigen et ses onze lacets, au-dessus de Valldal, sont
                restés fermés deux saisons pour risque d'éboulement. La route a
                rouvert le 27 avril 2026 après sécurisation, plus tôt que jamais
                dans son histoire récente.
              </p>
              <p>
                Elle peut toutefois fermer quelques heures en cas de fortes
                pluies, et des travaux ponctuels restent possibles en fin de
                saison. L'itinéraire de remplacement passe par les ferries et
                les tunnels, ce qui allonge le trajet d'environ une heure.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vérifions l'état d'ouverture avant chaque départ et
                prévoyons systématiquement une variante par la mer.
              </p>
            </div>
          ),
        },
        {
          title: "Les ferries font partie de la route",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Traverser un fjord prend souvent moins de vingt minutes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur la côte ouest, la voiture prend le ferry comme elle prendrait
                un rond-point. Les traversées sont courtes, fréquentes, et se
                paient automatiquement par lecture de plaque. Il n'y a
                généralement pas de réservation possible pour les lignes
                courtes : on se présente et on attend le suivant.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Ne calculez jamais un trajet norvégien en kilomètres. Comptez en
                heures, ferries et tunnels compris.
              </p>
            </div>
          ),
        },
        {
          title: "Le droit de circuler partout",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'allemannsretten autorise à marcher et bivouaquer en terrain non cultivé",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La loi norvégienne reconnaît un droit d'accès à la nature.
                Chacun peut marcher, cueillir et planter une tente en terrain
                non cultivé, à condition de rester à bonne distance des
                habitations et de ne rien laisser derrière soi. Ce droit
                s'accompagne d'une exigence de discrétion que les Norvégiens
                prennent au sérieux.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le corollaire est qu'aucune plage ni aucun sommet ne se privatise
                vraiment. L'isolement se gagne par l'heure de départ et par le
                bateau, pas par la barrière.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un pays cher, presque sans espèces, et à l'alcool encadré",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La Norvège compte parmi les pays les plus chers d'Europe, en
                particulier pour la restauration et les boissons. En revanche,
                la carte bancaire fonctionne partout, jusque sur les bateaux et
                les petits marchés : il est inutile de changer des espèces.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Vins et spiritueux ne se vendent qu'au Vinmonopolet, le réseau
                d'État, fermé le dimanche et tôt le samedi. Dans les villages,
                la boutique la plus proche peut être à une heure de route.
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
            "Nous sommes entrés dans le Geirangerfjord à six heures du matin, seuls. Le skipper a coupé le moteur sous la cascade et personne n'a parlé pendant dix minutes. C'est la seule chose dont je parle encore au bureau.",
          image: {
            src: "/destination/norvege/hero-1.webp",
            alt: "Portrait de Philippe", // TODO: verify
          },
          name: "Philippe", // TODO: verify
          role: "Voyage en couple, juin 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Je voulais dix jours sans rien avoir à décider. Les vols, les ferries, le bateau de pêche, tout était calé. Le seul choix de la journée portait sur l'heure du petit déjeuner.",
          image: {
            src: "/destination/norvege/hero-2.webp",
            alt: "Portrait de Marc-Antoine", // TODO: verify
          },
          name: "Marc-Antoine", // TODO: verify
          role: "Séjour dans les Lofoten, février 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Sept chambres, une rivière sous les fenêtres, et pas un bruit après vingt-deux heures. Nous sommes restés quatre nuits à Valldal alors que nous en avions prévu deux.",
          image: {
            src: "/destination/norvege/hero-3.webp",
            alt: "Portrait de Sylvie", // TODO: verify
          },
          name: "Sylvie", // TODO: verify
          role: "Escapade dans le Sunnmøre, août 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir en Norvège ?",
          answer:
            "Tout dépend de ce que vous venez chercher. De juin à août, les journées sont longues, les routes de montagne ouvertes et les fjords accessibles en bateau : c'est la meilleure période pour l'ouest. Le soleil de minuit dure du 28 mai au 14 juillet environ dans les Lofoten. De février à avril, la neige tient encore et le cabillaud est là : c'est la saison du ski et de la pêche. De septembre à mars, le ciel est assez sombre pour espérer les aurores boréales.",
        },
        {
          question: "Combien de temps dure le vol Paris - Norvège ?",
          answer:
            "Comptez un peu plus de 2 heures en vol direct entre Paris et Oslo. Pour rejoindre les Lofoten, il faut ensuite un vol Widerøe vers Leknes ou Svolvær, en direct ou via Bodø, soit environ dix heures de porte à porte depuis Paris. Depuis Bodø, il existe aussi une traversée en ferry vers Moskenes, qui dure entre trois heures et quatre heures. Ålesund, porte d'entrée des fjords de l'ouest, se rejoint également via Oslo.",
        },
        {
          question: "Faut-il un visa pour aller en Norvège ?",
          answer:
            "Non. La Norvège appartient à l'espace Schengen, même si elle n'est pas membre de l'Union européenne. Une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français. Aucune vaccination n'est exigée.",
        },
        {
          question: "Peut-on voir les aurores boréales en Norvège ?",
          answer:
            "Oui, dans le nord du pays et notamment dans les Lofoten, entre septembre et mars. Il faut un ciel dégagé, une nuit sombre et une activité solaire suffisante. Aucun opérateur sérieux ne les garantit. Nous prévoyons donc plusieurs nuits sur place plutôt qu'une sortie unique, et un hébergement d'où l'on peut sortir observer sans reprendre la voiture.",
        },
        {
          question: "Que faire en Norvège en une semaine ?",
          answer:
            "Une semaine permet de traiter une seule région correctement. À l'ouest, installez-vous à Valldal, remontez le Geirangerfjord en bateau au lever du jour, puis descendez vers le Hjørundfjord et Ålesund. Dans les Lofoten, basez-vous à Sørvågen, naviguez dans le Reinefjord et sortez en mer avec un bateau de pêche. Vouloir combiner les deux en sept jours revient à passer une journée entière en transport.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Norvège ?",
          answer:
            "La Norvège est l'un des pays les plus chers d'Europe, et les adresses que nous retenons comptent peu de chambres, ce qui les rend rapidement complètes. Le budget dépend surtout de la saison, du nombre de nuits et des sorties privatisées inscrites à l'itinéraire. Votre travel designer établit une proposition chiffrée après le premier échange.",
        },
      ],
    },

    // Carrousel d'inspiration : à activer une fois les pages Islande, Finlande
    // et Pays-Bas créées. Tel quel, il afficherait un titre suivi d'une rangée
    // vide, car la section n'affiche que les destinations déjà enregistrées.
    // {
    //   type: "entityList",
    //   kind: "destination",
    //   background: "bg-background-soft",
    //   eyebrow: "Inspirations",
    //   heading: "Destinations similaires",
    //   description:
    //     "Trois autres façons de remonter vers le nord, entre glace, forêt et lumière basse.",
    //   slugs: ["islande", "finlande", "pays-bas"],
    // },
  ],
};
