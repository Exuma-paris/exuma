import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "new-york",
  name: "New York",
  placeKind: "city",
  country: "États-Unis",
  genitive: "de New York",
  continentSlug: "ameriques",
  blurb: "Manhattan, Broadway, le Village, le port",
  keywords: [
    "new-york",
    "manhattan",
    "broadway",
    "central-park",
    "rockefeller-center",
    "west-village",
    "upper-east-side",
    "brooklyn",
  ],
  metaTitle: "New York : Voyage sur mesure",
  metaDescription:
    "Voyage à New York sur mesure : coulisses de Broadway, West Village, Rockefeller Center. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à New York",
      heading: "La ville avance vite, on choisit où s'y arrêter",
      description:
        "À dix heures du soir, la 8e Avenue se remplit d'un coup : les théâtres viennent de vider leurs salles et les tables du quartier tournent une deuxième fois. La ville a ce rythme partout, et il change d'heure à chaque quartier. Tout l'exercice consiste à savoir où être, et quand.",
      images: [
        {
          src: "/destination/new-york/hero-1.webp",
          alt: "Le pont de Brooklyn et les tours du sud de Manhattan au soleil couchant, voyage à New York",
        },
        {
          src: "/destination/new-york/hero-2.webp",
          alt: "Le pont de Manhattan encadré par les entrepôts de brique de Dumbo, à Brooklyn",
        },
        {
          src: "/destination/new-york/hero-3.webp",
          alt: "Enseignes lumineuses des théâtres de Broadway un soir d'hiver, Theater District",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à New York ?",
      heading: "Carole, spécialiste de New York, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "New York est la ville sur laquelle j'ai le plus changé d'avis. Longtemps je l'ai trouvée trop bruyante, et j'ai mis du temps à comprendre que le bruit était le sujet. On n'y va pas pour se reposer, on y va pour être dedans. Ce que je travaille, ce sont les heures : le moment où un quartier vaut le détour, et celui où il ne vaut plus rien. C'est aussi une des rares grandes villes où trois générations trouvent chacune leur compte sans jamais se quitter.",
        role: "Travel Designer · New York",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de New York",
      heading: "Chaque quartier a son heure",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à New York se règle sur des horaires plutôt que sur des distances. Le Theater District se vide et se remplit deux fois par soirée. Le West Village s'anime vers sept heures, quand les tables de Bleecker et de Cornelia sortent sur le trottoir. L'Upper East Side, lui, se prend le matin, avant que la Cinquième Avenue ne se charge.",
        "Les adresses qui comptent sont rarement les plus grandes. Un cabaret de quelques dizaines de couverts sur Madison, une table de comptoir dans le West Village, et deux collections restées dans leur maison, le Frick et la Morgan, qui se parcourent en une heure. Manhattan en compte des milliers : le travail consiste à en retenir deux ou trois par quartier, et à les placer au bon moment.",
        "Entre deux quartiers, la ville se traverse. Le port se longe en voilier depuis la pointe sud, la Statue de la Liberté se double par bâbord, Brooklyn se rejoint à pied par le pont. En décembre, la patinoire du Rockefeller Center ouvre au pied du sapin et tout Manhattan sort dans le froid.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/new-york/full-image.webp",
        alt: "Central Park et les tours de Midtown vus du ciel en fin de journée, voyage à New York",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "New York, quartier par quartier",
      heading: "Le Village à sept heures",
      theme: "light",
      paragraphs: [
        "Le West Village échappe au plan en damier du reste de Manhattan. Les rues s'y croisent de travers, les immeubles font quatre étages, et les tables sortent sur le trottoir dès que la lumière baisse. Sur Bleecker et sur Cornelia, quelques maisons se partagent le quartier depuis des décennies, et les meilleures n'ont qu'une dizaine de couverts. On y dîne tôt, puis on remonte à pied.", // TODO: verify l'ancienneté des adresses de Bleecker et de Cornelia
        "Plus au sud, Tribeca fonctionne autrement : anciens entrepôts, trottoirs larges, façades en fonte, et des salles qui ne cherchent pas à se faire voir. Plus au nord, Harlem s'écoute, entre l'Apollo et les chorales du dimanche matin. Trois quartiers, trois heures différentes, et vingt minutes de métro entre chacun.",
      ],
      images: [
        {
          src: "/destination/new-york/split-1.webp",
          alt: "Perrons et rampes en fonte des maisons de brique d'une rue de Manhattan",
        },
        {
          src: "/destination/new-york/split-2.webp",
          alt: "Carrefour de Manhattan sous la pluie, vu d'en haut, avec un taxi jaune",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/new-york/xp-broadway-vip-1.webp",
          alt: "Deux comédiens en costume sur la scène d'un théâtre, entre les rideaux rouges",
        },
        right: {
          src: "/destination/new-york/xp-broadway-vip-2.webp",
          alt: "Les ampoules d'une marquise de théâtre de Broadway vues d'en dessous",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Après le rideau, la scène reste ouverte",
        columns: [
          "La soirée commence par un dîner dans le Theater District, à quelques pas de la salle : trois services, servis avant que les trottoirs ne se remplissent. Les places sont prises au centre, dans les premiers rangs, celles qui ne circulent pas. Le spectacle se choisit dans la programmation du moment, du Roi Lion à Wicked.",
          "Ce qui suit ne s'achète pas au guichet. Deux des rôles principaux viennent s'asseoir avec vous après le rideau, encore démaquillés, et racontent le métier : les auditions, la voix qu'il faut ménager huit fois par semaine, ce qui se passe côté coulisses pendant qu'on chante. Ils signent le programme, prennent la photo, repartent. Les enfants s'en souviennent plus longtemps que du spectacle.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à New York",
      heading: "Trois soirées new-yorkaises",
      description:
        "Trois moments portent le séjour. La patinoire du Rockefeller Center se privatise à la nuit tombée, entre l'igloo chauffé et le dîner au bord de la glace. Un voilier quitte le sud de Manhattan pour deux heures de port. Et au Carlyle, un pianiste joue à trois mètres des tables.",
      slugs: [
        "patinage-vip-rockefeller",
        "croisiere-privee-voilier-manhattan",
        "soiree-jazz-cafe-carlyle",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements à New York",
      heading: "Où dormir à New York",
      description:
        "Trois adresses, trois façons d'habiter Manhattan. Un jardin suspendu, avec une cheminée dans chaque chambre. Une maison de cristal qui sert dans ses propres verres. Et un club privé posé au bord de l'eau, dans une ancienne gare maritime.",
      slugs: ["aman-new-york", "baccarat-new-york", "casa-cipriani-new-york"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à New York",
      description:
        "Vol, formalités, saisons et usages : les repères qui permettent de poser les dates d'un voyage à New York.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Huit heures quinze à huit heures trente de Paris à New York, en direct et plusieurs fois par jour. Le retour est plus court, sept heures quinze à sept heures trente, porté par le jet-stream. Deux aéroports reçoivent les vols depuis Paris : JFK et Newark. LaGuardia, le troisième, ne prend que les vols intérieurs."
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Six heures de moins qu'en France. Quand il est 18 h à Paris, il est midi à New York. Les deux pays ne changent pas d'heure aux mêmes dates : l'écart tombe à cinq heures pendant une quinzaine de jours en mars, et autant fin octobre. Au retour, le décalage se rattrape en deux nuits.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar américain. La carte bancaire et le paiement sans contact passent partout, y compris dans les taxis et le métro, et les espèces sont devenues rares. Au restaurant, le pourboire attendu va de dix-huit à vingt pour cent du total. Il n'est pas facultatif."
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour un séjour touristique de moins de quatre-vingt-dix jours, mais une autorisation ESTA à demander en ligne avant le départ. Elle est payante, s'obtient en quelques minutes et vaut deux ans, ou jusqu'à l'expiration du passeport. Celui-ci doit être biométrique et valide pendant tout le séjour."
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est demandée. Le calendrier vaccinal français à jour suffit. L'eau du robinet se boit : elle descend des réservoirs des Catskills et de la Delaware, au nord de l'État. Une assurance couvrant les frais médicaux américains est en revanche indispensable.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Mai et juin, puis septembre et octobre : la ville est dehors, les terrasses ouvertes, Central Park à son meilleur. Décembre a son propre argument, avec les vitrines, le sapin du Rockefeller Center et les patinoires. Juillet et août sont chauds et humides.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais, dans une ville où la municipalité recense plus de huit cents langues parlées. Les hôtels et les guides privés travaillent en français sans difficulté, et cela se demande à la réservation."
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Continental et franc : les saisons se voient. La moyenne annuelle tourne autour de treize degrés, avec des nuits sous zéro en janvier et février et des pointes au-delà de trente degrés en juillet. Il tombe soixante-quinze centimètres de neige par an, presque tous en hiver. Le printemps et l'automne tiennent entre quinze et vingt-cinq degrés."
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier New York. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/new-york/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure à New York, de l'Upper East Side au port de Manhattan",
            "Truffe noire râpée sur des pâtes, dans la salle d'un restaurant new-yorkais",
            "Bassin intérieur bordé de cheminées dans un hôtel de Manhattan",
            "Conciergerie privée 24/7 pour un voyage à New York",
            "Soin dans la cabine d'un spa d'hôtel à New York",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à New York",
      heading: "Six endroits, chacun à son heure",
      description:
        "Six endroits qui ne se prennent pas au même moment de la journée : une collection restée dans sa maison, une place qui devient patinoire, un quartier de théâtres, des rues de travers, un parc dessiné avant les immeubles, et l'eau qui ferme l'île au sud.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 12,
      places: [
        {
          title: "La Frick Collection",
          description:
            "L'hôtel particulier d'Henry Clay Frick, sur la Cinquième Avenue, resté meublé comme il l'a quitté. Les Vermeer sont au salon, les Fragonard dans une pièce construite pour eux. La maison a rouvert en 2025 et laisse désormais monter aux étages privés.", // TODO: verify la réouverture en 2025
          image: {
            src: "/destination/new-york/map-frick.webp",
            alt: "Façade de l'hôtel particulier de la Frick Collection sur la Cinquième Avenue",
          },
          // TODO: verify coords
          coordinates: { lat: 40.7712, lng: -73.9673 },
        },
        {
          title: "Le West Village",
          description:
            "Le seul quartier de Manhattan qui échappe au plan en damier : les rues s'y croisent de travers et les immeubles font quatre étages. Les tables sortent sur le trottoir dès que la lumière baisse, sur Bleecker et sur Cornelia. On y dîne tôt.",
          image: {
            src: "/destination/new-york/map-west-village.webp",
            alt: "Rue du sud de Manhattan filant vers les tours du quartier des affaires",
          },
          // TODO: verify coords
          coordinates: { lat: 40.7358, lng: -74.0036 },
        },
        {
          title: "Le Rockefeller Center",
          description:
            "Un ensemble de tours des années trente autour d'une place en creux. La place devient patinoire de novembre à mars, sous le sapin, et se privatise en fin de soirée. Le Sea Grill donne directement sur la glace.",
          image: {
            src: "/destination/new-york/map-rockefeller-center.webp",
            alt: "La statue d'Atlas éclairée la nuit, face à la cathédrale Saint-Patrick",
          },
          // TODO: verify coords
          coordinates: { lat: 40.7587, lng: -73.9787 },
        },
        {
          title: "Le Theater District",
          description:
            "Une quarantaine de salles serrées entre la 41e et la 54e rue, autour de Times Square. Les spectacles se jouent huit fois par semaine, avec des matinées le mercredi, le samedi et le dimanche. Les loges s'ouvrent après le rideau, sur rendez-vous.", // TODO: verify le nombre de salles de Broadway
          image: {
            src: "/destination/new-york/map-theater-district.webp",
            alt: "Marquises lumineuses des théâtres du Theater District à la tombée du soir",
          },
          // TODO: verify coords
          coordinates: { lat: 40.759, lng: -73.9845 },
        },
        {
          title: "Central Park",
          description:
            "Un parc dessiné avant que les immeubles ne l'entourent, avec ses affleurements de roche, ses ponts en fonte et son réservoir. Chaque porte donne sur un parc différent : les rochers au sud, les prairies au centre, les bois au nord.",
          image: {
            src: "/destination/new-york/map-central-park.webp",
            alt: "Central Park et les avenues qui le bordent, vus du ciel au lever du jour",
          },
          // TODO: verify coords
          coordinates: { lat: 40.7812, lng: -73.9665 },
        },
        {
          title: "Le port, de Battery Park à Dumbo",
          description:
            "La pointe sud de l'île, là où les voiliers sortent et où les ferries partent pour Ellis Island. En face, Brooklyn et le quartier de Dumbo, sous les piles du pont. La ville se regarde de loin, ce qui n'arrive nulle part ailleurs à Manhattan.",
          image: {
            src: "/destination/new-york/map-port-dumbo.webp",
            alt: "Câbles et pylône du pont de Brooklyn depuis la passerelle piétonne",
          },
          // TODO: verify coords
          coordinates: { lat: 40.7033, lng: -74.017 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à New York",
      description:
        "Neuf repères venus du terrain : les jours de fermeture, les horaires de Broadway, le pourboire, les distances, et ce qui change quand on part avec des enfants.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Les jours de fermeture sont les meilleurs jours",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le Frick et plusieurs collections ferment un jour par semaine, et c'est là qu'on y entre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La plupart des musées new-yorkais gardent un jour de fermeture
                hebdomadaire. Ce jour-là, les salles sont vides et les visites
                privées deviennent possibles : un conférencier, une heure et
                demie, et personne d&apos;autre dans la maison.
              </p>
              <p>
                Cela concerne surtout les petites collections restées dans leur
                hôtel particulier, où la différence entre une salle pleine et
                une salle vide change tout.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Créneaux demandés plusieurs semaines à l&apos;avance,
                conférencier francophone quand il est disponible, et transferts
                calés sur l&apos;heure d&apos;ouverture.
              </p>
            </div>
          ),
        },
        {
          title: "Broadway se joue huit fois par semaine",
          cardEyebrow: "Spectacles",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Six soirées et deux matinées, avec le lundi de relâche dans presque toutes les salles",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les spectacles de Broadway suivent le même rythme : six
                représentations en soirée et deux matinées, le mercredi et le
                week-end. Le lundi, presque toutes les salles font relâche.
              </p>
              <p>
                Les matinées sont le bon créneau avec des enfants : la salle est
                plus calme, la soirée reste libre, et les comédiens sont
                disponibles après le rideau. Les rôles principaux ne jouent pas
                toutes les représentations.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                La distribution du jour est affichée à l&apos;entrée de la
                salle. Si vous venez pour un nom précis, cela se vérifie à la
                réservation.
              </p>
            </div>
          ),
        },
        {
          title: "Le pourboire fait partie du prix",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Entre dix-huit et vingt pour cent au restaurant, et il n'est pas facultatif",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Aux États-Unis, le service n&apos;est pas inclus. Au restaurant,
                on laisse entre dix-huit et vingt pour cent du total, et le
                terminal de paiement propose généralement le calcul. Quelques
                billets pour un taxi, autant pour le bagagiste ou la femme de
                chambre.
              </p>
              <p>
                Certaines maisons pratiquent désormais un service inclus et
                l&apos;indiquent sur la carte. C&apos;est encore
                l&apos;exception.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Prévoyez quelques petites coupures dès l&apos;arrivée : la ville
                est passée à la carte presque partout, sauf pour les pourboires
                donnés en main propre.
              </p>
            </div>
          ),
        },
        {
          title: "Le métro va plus vite que la voiture",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aux heures pleines, la ligne express traverse Manhattan en un tiers du temps",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Manhattan se bouche entre huit et dix heures, puis à partir de
                seize heures. Sur un trajet nord-sud, le métro express double
                largement la voiture, et il s&apos;utilise avec une simple carte
                bancaire sans contact au tourniquet.
              </p>
              <p>
                Les distances se lisent en blocs : vingt blocs nord-sud font
                environ un mile, cinq blocs est-ouest en font autant. Une avenue
                traversée est toujours plus longue qu&apos;une rue.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Chauffeur privé à disposition pour les journées chargées et les
                transferts d&apos;aéroport, métro pour les trajets courts en
                heure pleine.
              </p>
            </div>
          ),
        },
        {
          title: "Central Park change selon la porte",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les rochers au sud, les prairies au centre, les bois au nord : on choisit son entrée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parc fait quatre kilomètres de long et n&apos;a pas la même
                allure d&apos;un bout à l&apos;autre. Au sud, les affleurements
                de roche et les ponts en fonte. Au centre, le réservoir et les
                grandes prairies. Au nord, un bois et un ravin où l&apos;on
                n&apos;entend plus la ville.
              </p>
              <p>
                Avec des enfants, l&apos;entrée par la 72e rue donne accès au
                bassin des bateaux, au carrousel et au zoo en une seule boucle.
                Le nord se garde pour une marche entre adultes.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le parc se traverse aussi à vélo, sur la boucle fermée aux
                voitures. Les loueurs sont installés le long de la 59e rue.
              </p>
            </div>
          ),
        },
        {
          title: "Décembre se réserve en été",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vitrines, sapin et patinoires : la période la plus demandée de l'année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre la fin novembre et le début janvier, la ville se remplit :
                les vitrines des grands magasins, le sapin du Rockefeller
                Center, les patinoires et les spectacles de fin d&apos;année.
                Les hôtels et les tables se bloquent plusieurs mois à
                l&apos;avance.
              </p>
              <p>
                La première quinzaine de décembre offre le même décor avec moins
                de monde que la semaine de Noël. Il fait froid, autour de zéro,
                et cela fait partie de la saison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les séjours de décembre se construisent au printemps précédent,
                hébergement et spectacles bloqués en même temps.
              </p>
            </div>
          ),
        },
        {
          title: "Les tables se prennent trente jours avant",
          cardEyebrow: "Réservations",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les adresses recherchées ouvrent leur calendrier un mois avant, à l'heure près",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Beaucoup de restaurants new-yorkais ouvrent leurs réservations
                exactement trente jours avant la date, à une heure fixe le
                matin. Les créneaux du soir partent dans la minute.
              </p>
              <p>
                Les mêmes maisons gardent des places au comptoir sans
                réservation, en début de service. C&apos;est souvent la
                meilleure façon d&apos;y entrer à deux, moins à quatre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les tables sont demandées dès l&apos;ouverture du calendrier,
                avec une alternative de repli sur chaque soirée du séjour.
              </p>
            </div>
          ),
        },
        {
          title: "Avec des enfants, la journée se fait en deux temps",
          cardEyebrow: "Famille",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un musée le matin, une pause à l'hôtel, une sortie le soir : la ville tient sur ce rythme",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                New York fatigue vite quand on la fait d&apos;un bloc. Le rythme
                qui fonctionne : une visite le matin, un déjeuner sans
                cérémonie, un retour à l&apos;hôtel en début
                d&apos;après-midi, puis une sortie le soir.
              </p>
              <p>
                Ce découpage permet aussi de séparer les envies. Les grands
                partent au musée ou en salle de spectacle, les plus jeunes
                restent au parc ou à la patinoire, et tout le monde se retrouve
                au dîner.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Choisir un hôtel central plutôt que grand : pouvoir remonter en
                chambre en dix minutes vaut plus que la surface.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Avant le départ",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des chaussures déjà faites, et une épaisseur de plus que prévu",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On marche beaucoup plus qu&apos;on ne l&apos;imagine, sur du
                béton. Une paire de chaussures déjà faites change la semaine.
                Les intérieurs sont surchauffés en hiver et très climatisés en
                été : une épaisseur qui s&apos;enlève sert dans les deux cas.
              </p>
              <p>
                Une tenue habillée reste utile pour un dîner ou une soirée au
                Carlyle, sans aller jusqu&apos;à la cravate. La ville est moins
                formelle qu&apos;on ne le croit.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Prises de type américain, courant 110 volts : un adaptateur
                suffit pour les chargeurs, pas pour un appareil chauffant.
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
            "Nous sommes entrés au Frick un jour de fermeture. Il n'y avait que nous, la conférencière et les Vermeer. Ma fille de quinze ans a passé dix minutes devant un seul tableau, ce qui ne lui était jamais arrivé.",
          image: {
            src: "/destination/new-york/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: New York, avril 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Après le spectacle, deux comédiens se sont assis à notre table. Ils ont raconté les auditions et les huit représentations par semaine pendant une heure. Les enfants en parlent encore.",
          image: {
            src: "/destination/new-york/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Broadway, décembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La patinoire du Rockefeller nous a été laissée à la fin de la soirée. Nous avons dîné au bord de la glace, puis patiné à cinq, avec les tours allumées au-dessus.",
          image: {
            src: "/destination/new-york/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Rockefeller Center, janvier 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à New York ?",
          answer:
            "Mai et juin, puis septembre et octobre : les températures tiennent entre quinze et vingt-cinq degrés, les terrasses sont ouvertes et Central Park est à son meilleur. Décembre a son propre argument, avec les vitrines, le sapin du Rockefeller Center et les patinoires, à condition d'accepter le froid. Juillet et août sont chauds et humides, avec des orages en fin de journée.",
        },
        {
          question: "Combien de temps dure le vol Paris-New York ?",
          answer:
            "Huit heures quinze à huit heures trente à l'aller, plusieurs fois par jour en direct, et sept heures quinze à sept heures trente au retour, porté par le jet-stream. Deux aéroports reçoivent les vols depuis Paris, JFK et Newark ; LaGuardia ne prend que les vols intérieurs. Le décalage horaire est de six heures, et il se rattrape en deux nuits."
        },
        {
          question: "Faut-il un visa pour aller à New York ?",
          answer:
            "Non, pas de visa pour un séjour touristique de moins de quatre-vingt-dix jours, mais une autorisation ESTA obligatoire, à demander en ligne avant le départ. Elle est payante et vaut deux ans, ou jusqu'à l'expiration du passeport. Celui-ci doit être biométrique et valide pendant tout le séjour. Aucune vaccination n'est demandée."
        },
        {
          question: "Que faire à New York en 5 jours ?",
          answer:
            "Cinq nuits suffisent pour tenir la ville sans courir. Une matinée au Frick un jour de fermeture, une soirée dans le West Village, une autre à Broadway avec les comédiens après le rideau, deux heures de voilier dans le port depuis le sud de l'île, et une fin de soirée au Café Carlyle. Central Park se garde pour les matins, Brooklyn et Dumbo pour une demi-journée entière. En hiver, la patinoire du Rockefeller Center remplace la sortie en mer.",
        },
        {
          question: "New York est-il adapté aux familles ?",
          answer:
            "Oui, à condition de découper les journées en deux temps : une visite le matin, une pause à l'hôtel en début d'après-midi, une sortie le soir. Les distances sont courtes et le métro rapide, ce qui permet de séparer les envies puis de se retrouver au dîner. Central Park, la patinoire du Rockefeller Center et les matinées de Broadway fonctionnent à tous les âges. Un hôtel central compte plus qu'un grand hôtel.",
        },
        {
          question: "Quel budget prévoir pour un voyage à New York ?",
          answer:
            "Un voyage à New York sur mesure avec Exuma se situe généralement entre 4 500 et 9 000 € par personne pour cinq nuits, hébergement, chauffeur, guides privés, spectacles et accès réservés compris, hors vol depuis Paris. L'hôtel et les places de Broadway constituent les principaux postes variables, et la période de décembre les fait nettement monter.", // TODO: verify la fourchette de budget
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
        "Trois prolongements naturels au départ de New York : le reste du pays, les Rocheuses et la côte du Pacifique, et les volcans du Pacifique central.",
      slugs: ["etats-unis", "canada", "hawai"],
    },
  ],
};
