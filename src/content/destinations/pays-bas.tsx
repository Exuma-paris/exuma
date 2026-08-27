import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "pays-bas",
  name: "Pays-Bas",
  placeKind: "country",
  country: "Pays-Bas",
  genitive: "des Pays-Bas",
  continentSlug: "europe",
  blurb: "Amsterdam, Delft, la Veluwe, le Limbourg",
  keywords: [
    "pays-bas",
    "amsterdam",
    "la haye",
    "delft",
    "rijksmuseum",
    "veluwe",
    "limbourg",
    "tulipes",
  ],
  metaTitle: "Pays-Bas : Voyage sur mesure",
  metaDescription:
    "Voyage aux Pays-Bas sur mesure : Amsterdam, Delft, La Haye et les forêts de la Veluwe. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Pays-Bas",
      heading: "La lumière que les peintres sont venus chercher",
      description:
        "Le ciel occupe la moitié du paysage et la lumière change plusieurs fois par heure. Elle éclaire des choses très concrètes. Une salle de musée encore vide à huit heures du matin. Un canal remonté en bateau à l'heure de l'apéritif. Un chemin de sable en forêt, à vélo, jusqu'aux Van Gogh. Le tout à une heure de train l'un de l'autre.",
      images: [
        {
          src: "/destination/pays-bas/hero-1.webp",
          alt: "Anneau de canaux d'Amsterdam au petit matin, voyage aux Pays-Bas",
        },
        {
          src: "/destination/pays-bas/hero-2.webp",
          alt: "Galerie d'honneur du Rijksmuseum avant l'ouverture au public, Amsterdam",
        },
        {
          src: "/destination/pays-bas/hero-3.webp",
          alt: "Allée de sable dans la forêt de la Veluwe traversée à vélo, Gueldre",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir aux Pays-Bas ?",
      heading: "Tainà, spécialiste des Pays-Bas, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "On me demande souvent trois jours à Amsterdam. Je conseille d'y ajouter deux nuits ailleurs, parce que tout est à une heure de train. La Veluwe est une grande forêt de plaine, et le musée Kröller-Müller y conserve la deuxième collection de Van Gogh au monde. Plus au sud, le Limbourg a des collines et des vergers, ce que personne n'imagine en pensant aux Pays-Bas. Ensuite, ma façon de découper les journées tient en une phrase : les musées le matin, avant l'arrivée du public, et l'après-midi dehors, à vélo ou sur l'eau.", // TODO: verify le rang de la collection Van Gogh du Kröller-Müller
        role: "Travel Designer · Pays-Bas",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Pays-Bas",
      heading: "Trois villes d'eau et une forêt",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage aux Pays-Bas commence presque toujours par Amsterdam, et la ville se prend par le matin. À neuf heures, on traverse la Galerie d'honneur du Rijksmuseum sans attendre devant les toiles. Le musée Van Gogh est juste à côté, sur la même place. L'après-midi se passe sur l'eau, et le soir dans le Jordaan, où les salles tiennent une vingtaine de couverts.",
        "La Haye est à cinquante minutes de train, et l'on y va pour une matinée. Le Mauritshuis est une maison, pas un palais : vingt salles, une heure et demie de visite, et la Jeune fille à la perle accrochée à hauteur d'œil, à un mètre de vous. Delft est la ville voisine. On y déjeune sur la place du marché, puis on regarde les peintres de la faïencerie poser le bleu à la main, motif après motif.", // TODO: verify le nombre de salles du Mauritshuis
        "Plus à l'est, la Veluwe change complètement de décor. Le parc met des vélos à disposition à ses entrées et l'on part sur des chemins de sable, entre les pins et les landes. Au bout, le musée Kröller-Müller et ses Van Gogh : on arrive à vélo, on le laisse devant la porte, on entre. Au crépuscule, les cerfs sortent dans les clairières.",
        "Trois maisons portent l'itinéraire, et chacune donne accès à autre chose. De L'Europe ouvre sa terrasse sur l'Amstel, en plein centre d'Amsterdam. Het Roode Koper est posé dans les bois de la Veluwe : on sort de la chambre et l'on est sur le chemin. Château St. Gerlach occupe un hameau du Limbourg, avec son potager, ses vergers et sa table.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/pays-bas/full-image.webp",
        alt: "Maisons du Grachtengordel et péniches à la tombée du jour, voyage aux Pays-Bas",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Pays-Bas : la vie au bord de l'eau",
      heading: "Une journée sur l'eau, une journée sur les digues",
      theme: "light",
      paragraphs: [
        "Sur l'IJsselmeer, l'eau est plate et il n'y a pas de houle. On embarque à Hoorn sur un voilier en acier des années 1900. L'équipage hisse la grand-voile à la main, et le port disparaît derrière la digue. Le déjeuner se prend à bord, au mouillage.",
        "Le lendemain, on longe les digues à vélo. Les villages du Waterland ont des maisons de bois vertes et des jardins qui descendent jusqu'au canal. On s'arrête dans une ferme du Beemster pour goûter un fromage affiné trois ans, coupé devant nous.",
        "Ces terres ont été prises à la mer, et cela se voit encore : la route passe plus haut que les champs, et l'horizon est dégagé dans toutes les directions. On voit arriver la lumière de très loin.",
        "À vélo comme en bateau, on avance toujours au niveau de l'eau.",
      ],
      images: [
        {
          src: "/destination/pays-bas/split-1.webp",
          alt: "Voilier en acier des années 1900 sous voile sur l'IJsselmeer, Pays-Bas",
        },
        {
          src: "/destination/pays-bas/split-2.webp",
          alt: "Maisons de bois vertes et jardins au bord d'un canal du Waterland",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/pays-bas/xp-salonboot-1.webp",
          alt: "Salonboot en acajou verni amarré sur le Herengracht en fin de journée, Amsterdam",
        },
        right: {
          src: "/destination/pays-bas/xp-salonboot-2.webp",
          alt: "Fenêtres éclairées d'une maison de canal vues depuis le pont d'un bateau, Amsterdam",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le moment où les fenêtres s'allument sur le canal",
        columns: [
          "En fin d'après-midi, un salonboot des années 1920 attend au bord du Herengracht : coque en acier, cabine en acajou verni, banquettes en cuir, cuivres polis. Il est privatisé pour la famille, avec son skipper, et personne d'autre ne monte à bord.",
          "Le départ se fait avant le coucher du soleil, quand la lumière passe à l'horizontale. On remonte l'anneau de canaux à faible allure, sous les ponts du Jordaan. À cette heure, les habitants ne ferment pas leurs rideaux. Les fenêtres s'allument une à une et l'on voit l'intérieur des maisons, les bibliothèques, les tableaux, les tables mises.",
          "Le champagne se sert à bord. Le dîner, lui, se prend à terre : le bateau accoste au pied de l'adresse retenue pour la soirée, et la table prend la suite.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Pays-Bas",
      heading: "Trois accès qui ne se prennent pas au guichet",
      description:
        "Trois moments portent le séjour. Le Rijksmuseum ouvre une heure avant le public, avec un conservateur pour seul guide. À La Haye puis à Delft, un historien de l'art passe la journée avec vous. À Aalsmeer, on entre dans la criée aux fleurs à six heures du matin, du côté des acheteurs.",
      slugs: [
        "rijksmuseum-avant-ouverture",
        "mauritshuis-vermeer-delft",
        "criee-aalsmeer-aube",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner aux Pays-Bas",
      description:
        "Trois maisons, trois terrains différents. La première ouvre sa terrasse sur l'Amstel, au centre d'Amsterdam. La deuxième est un ancien pavillon de chasse au milieu de la forêt de la Veluwe. La troisième occupe un hameau du Limbourg, avec son potager et ses vergers.",
      slugs: [
        "de-l-europe-amsterdam",
        "roode-koper-veluwe",
        "chateau-st-gerlach",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Pays-Bas",
      description:
        "Trajet, monnaie, formalités et saisons. Voici les repères qui permettent de caler les dates d'un voyage aux Pays-Bas.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: Une heure vingt de vol entre Paris et Amsterdam-Schiphol, avec plusieurs départs par jour. Le train direct depuis Paris-Nord met trois heures vingt et arrive en centre-ville. À l'intérieur du pays, tout se fait en train : cinquante minutes d'Amsterdam à La Haye, deux heures trente jusqu'à Maastricht.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Il n'y en a pas. Quand il est 16 h à Paris, il est 16 h à Amsterdam, et cela vaut toute l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro, sans conversion ni frais de change. La carte bancaire est acceptée partout, y compris sur les marchés aux fleurs et dans les musées.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "TODO: Aucun visa pour les ressortissants français. La carte nationale d'identité ou le passeport en cours de validité suffit pour entrer et circuler dans le pays.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Aucune vaccination n'est demandée. Le calendrier vaccinal français suffit, et l'eau du robinet se boit partout dans le pays.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: D'avril à juin, et en septembre. Les champs de tulipes du Bollenstreek fleurissent de la mi-avril au début mai. En juin, il fait jour jusqu'à vingt-deux heures. Septembre réunit des musées calmes et des terrasses encore ouvertes.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: Le néerlandais est la langue du pays. L'anglais est parlé par presque tout le monde, dans les musées comme dans les villages. Le français est compris dans les hôtels et dans le sud, près de la frontière belge.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: Climat océanique doux. Amsterdam oscille entre 6 °C en janvier et 22 °C en juillet. Les averses passent vite et laissent derrière elles la lumière que les peintres sont venus chercher. La Veluwe et le Limbourg sont un peu plus secs que la côte.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Pays-Bas. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/pays-bas/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure aux Pays-Bas, d'Amsterdam aux collines du Limbourg",
            "Adresses confidentielles aux Pays-Bas : musées hors horaires et ateliers de peintres",
            "Hébergements aux Pays-Bas : maison de canal à Amsterdam et domaine du Limbourg",
            "Conciergerie privée 24/7 pour un voyage aux Pays-Bas",
            "Expériences aux Pays-Bas : Rijksmuseum, salonboot privé et criée aux fleurs",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Pays-Bas",
      heading: "Six étapes, d'Amsterdam aux collines du Limbourg",
      description:
        "Six secteurs, et chacun propose autre chose : des salles de musée, une place de marché, une forêt à vélo, des champs de fleurs, des collines et des terrasses. Aucun n'est à plus de deux heures de train d'Amsterdam.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 7,
      places: [
        {
          title: "Amsterdam et l'anneau de canaux",
          description:
            "La ville se visite tôt et se traverse à pied. Le Rijksmuseum et le musée Van Gogh bordent tous les deux le Museumplein. À partir de dix-sept heures, on passe sur l'eau : ici les canaux servent de rues, et un bateau peut accoster devant la porte du restaurant.",
          image: {
            src: "/destination/pays-bas/map-amsterdam.webp",
            alt: "Maisons étroites et ponts du Grachtengordel d'Amsterdam vus depuis l'eau",
          },
          // TODO: verify coords
          coordinates: { lat: 52.3676, lng: 4.9041 },
        },
        {
          title: "La Haye et le Mauritshuis",
          description:
            "Le Mauritshuis est une maison de vingt salles au bord d'un étang, et l'on en fait le tour en une heure et demie. La Jeune fille à la perle y est accrochée à hauteur d'œil, à un mètre du visiteur. En sortant, la plage de Scheveningen et ses cabines de bain ferment la journée.", // TODO: verify le nombre de salles du Mauritshuis
          image: {
            src: "/destination/pays-bas/map-la-haye.webp",
            alt: "Façade du Mauritshuis reflétée dans l'étang du Hofvijver, La Haye",
          },
          // TODO: verify coords
          coordinates: { lat: 52.08, lng: 4.314 },
        },
        {
          title: "Delft",
          description:
            "Delft se fait à pied, entre la place du marché et les canaux bordés de tilleuls. À la manufacture Royal Delft, les peintres travaillent devant vous : le bleu se pose au pinceau, motif après motif, et l'on peut en peindre une pièce soi-même. Le soir, la ville se vide et l'on dîne au calme.", // TODO: verify la possibilité de peindre une pièce à la manufacture
          image: {
            src: "/destination/pays-bas/map-delft.webp",
            alt: "Canal de Delft et clocher penché de la Oude Kerk où Vermeer est enterré",
          },
          // TODO: verify coords
          coordinates: { lat: 52.0116, lng: 4.3571 },
        },
        {
          title: "La Hoge Veluwe et le Kröller-Müller",
          description:
            "Les vélos blancs du parc se prennent librement aux entrées, sans réservation. Les chemins de sable traversent la forêt et les landes pendant des kilomètres, et les cerfs sortent dans les clairières au crépuscule. Au centre, le musée Kröller-Müller conserve près de quatre-vingt-dix Van Gogh et un jardin de sculptures sous les arbres.", // TODO: verify le nombre de toiles de Van Gogh
          image: {
            src: "/destination/pays-bas/map-veluwe.webp",
            alt: "Vélos blancs sur un chemin de sable du parc national de la Hoge Veluwe",
          },
          // TODO: verify coords
          coordinates: { lat: 52.0964, lng: 5.8175 },
        },
        {
          title: "Le Bollenstreek et la criée d'Aalsmeer",
          description:
            "À six heures du matin, la criée d'Aalsmeer tourne à plein : les chariots de fleurs défilent sous la passerelle et le cadran fait descendre les prix jusqu'à ce qu'un acheteur s'arrête. Une heure plus tard, on marche entre les rangs d'un producteur du Bollenstreek, au milieu des champs de tulipes.",
          image: {
            src: "/destination/pays-bas/map-bollenstreek.webp",
            alt: "Bandes de tulipes rouges et jaunes dans les champs du Bollenstreek",
          },
          // TODO: verify coords
          coordinates: { lat: 52.262, lng: 4.75 },
        },
        {
          title: "Maastricht et les collines du Limbourg",
          description:
            "Maastricht se vit sur ses terrasses et dans ses marchés, et la campagne autour est vallonnée. La grande librairie de la ville occupe une église gothique : on lit sous les voûtes, un café à la main. Les vignobles du Limbourg et la frontière belge sont à un quart d'heure, ce qui met deux cuisines à portée du même déjeuner.", // TODO: verify les vignobles du Limbourg et la distance à la frontière belge
          image: {
            src: "/destination/pays-bas/map-maastricht.webp",
            alt: "Ruelle pavée de Maastricht et collines du Limbourg en arrière-plan",
          },
          // TODO: verify coords
          coordinates: { lat: 50.8514, lng: 5.691 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage aux Pays-Bas",
      description:
        "Huit repères issus du terrain. Ils aident à choisir la période, à découper les journées et à comprendre ce qui se prépare longtemps à l'avance.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Les musées le matin",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le Rijksmuseum ouvre à neuf heures. Les deux premières heures sont les plus calmes de la journée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Rijksmuseum ouvre ses portes à neuf heures, le musée Van Gogh
                à la même heure en haute saison. Les groupes et les scolaires
                arrivent vers onze heures, une fois les petits déjeuners servis
                dans les hôtels du centre.
              </p>
              <p>
                Il reste donc deux heures pendant lesquelles la Galerie
                d&apos;honneur se traverse sans attendre devant les toiles. Le
                billet est horodaté : on choisit son créneau à la réservation,
                et le premier de la journée part très vite.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les journées se construisent en deux blocs. Les musées le matin,
                l&apos;eau et le vélo l&apos;après-midi, quand la lumière
                s&apos;allonge sur les canaux.
              </p>
            </div>
          ),
        },
        {
          title: "Le vélo est le vrai moyen de transport",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les pistes cyclables forment un réseau continu à l'échelle du pays, séparé de la route",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Aux Pays-Bas, la piste cyclable est une voie à part entière, avec
                ses feux et ses priorités. Elle est séparée de la chaussée et du
                trottoir. Dans les villes, elle est souvent plus fréquentée que
                la route.
              </p>
              <p>
                Le réseau est continu d&apos;une ville à l&apos;autre et balisé
                par un système de numéros que l&apos;on suit de carrefour en
                carrefour. Dans la Veluwe, les chemins de sable traversent la
                forêt et les landes sur des dizaines de kilomètres.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les vélos sont livrés à l&apos;hôtel, à la bonne taille, avec un
                accompagnateur si vous le souhaitez. Les bagages voyagent en
                voiture jusqu&apos;à l&apos;étape suivante.
              </p>
            </div>
          ),
        },
        {
          title: "Le calendrier des tulipes",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les champs du Bollenstreek se colorent de la mi-avril au début mai. Le Keukenhof ouvre plus longtemps",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les bulbes fleurissent dans un ordre fixe : crocus en mars,
                jonquilles début avril, tulipes de la mi-avril au début mai. Les
                champs se lisent alors comme des bandes de couleur pleine, à
                quarante minutes d&apos;Amsterdam.
              </p>
              <p>
                Le parc du Keukenhof, lui, ouvre de la mi-mars à la mi-mai et
                plante ses bulbes en séquences pour couvrir toute la période. Les
                producteurs du Bollenstreek reçoivent dans leurs champs, ce qui
                est une autre échelle et un autre calme.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                La criée aux fleurs d&apos;Aalsmeer fonctionne toute
                l&apos;année, tous les matins de la semaine. Elle ne dépend pas
                de la saison des tulipes.
              </p>
            </div>
          ),
        },
        {
          title: "Le train relie tout",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Amsterdam, La Haye et Delft sont à moins d'une heure les unes des autres",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays tient dans trois cents kilomètres du nord au sud et le
                réseau ferroviaire est dense. Amsterdam est à cinquante minutes
                de La Haye, à une heure de Delft, à deux heures trente de
                Maastricht. Les trains partent toutes les quinze minutes sur les
                grands axes.
              </p>
              <p>
                Schiphol est relié au centre d&apos;Amsterdam en quinze minutes
                de train, et directement à La Haye et à Rotterdam. On peut donc
                arriver le matin et être à table en ville à midi.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les transferts se font en voiture avec chauffeur, de porte à
                porte. Le train reste une option agréable entre deux villes, et
                nous préparons les billets à l&apos;avance.
              </p>
            </div>
          ),
        },
        {
          title: "Les tables se réservent tôt",
          cardEyebrow: "Tables",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les cuisines sont petites et les meilleures salles comptent une trentaine de couverts",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La scène culinaire néerlandaise s&apos;est beaucoup transformée
                en vingt ans. Amsterdam compte plusieurs tables étoilées,
                souvent installées dans des maisons de canal, avec une salle de
                trente couverts et un seul service.
              </p>
              <p>
                Les carnets ouvrent en général deux à trois mois à
                l&apos;avance. Dans le Limbourg, les tables des domaines
                travaillent avec leur propre potager et changent la carte chaque
                semaine.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les tables sont retenues dès la validation des dates, y compris
                le comptoir face à la cuisine quand la maison en a un.
              </p>
            </div>
          ),
        },
        {
          title: "La lumière change plusieurs fois par jour",
          cardEyebrow: "Climat",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une averse dure vingt minutes et l'éclaircie qui suit est la meilleure heure pour photographier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le climat est océanique et le ciel se recompose vite. Une averse
                passe en vingt minutes et laisse derrière elle un air lavé, des
                pavés brillants et une lumière très basse sur l&apos;eau.
              </p>
              <p>
                C&apos;est cette variation que les peintres du Siècle d&apos;or
                ont travaillée. Elle explique pourquoi leurs ciels occupent les
                trois quarts de la toile, et pourquoi les photographes viennent
                encore ici en avril.
              </p>
              <h4 className="font-medium">Dans la valise :</h4>
              <p>
                Un imperméable léger, une maille pour les soirées au bord de
                l&apos;eau, et des chaussures qui tiennent sur les pavés
                d&apos;Amsterdam.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qui se prépare deux mois à l'avance",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les ouvertures avant l'arrivée du public et les visites de conservateur se demandent longtemps avant",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les grands musées néerlandais accueillent des visites en dehors
                des heures publiques, pour un petit groupe à la fois. La demande
                passe par le service des relations extérieures et se cale deux à
                trois mois avant la date.
              </p>
              <p>
                Le même délai vaut pour un conservateur nommé, pour une salle
                précise, ou pour l&apos;atelier de restauration. Les maisons de
                collectionneurs du Keizersgracht ouvrent aussi leurs salons sur
                rendez-vous.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Ces demandes partent dès la validation du voyage. Le salonboot
                privé se retient sur la même échéance pour les soirées de mai et
                de juin.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qu'on mange",
          cardEyebrow: "Cuisine",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Huîtres de Zélande, sole de la mer du Nord, hareng nouveau en juin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La table néerlandaise part de la mer et des polders. Les huîtres
                et les moules viennent de Zélande, la sole et le turbot de la mer
                du Nord, les fromages des fermes du Beemster et de Gouda, où ils
                s&apos;affinent plusieurs années.
              </p>
              <p>
                En juin arrive le hareng nouveau, le premier de la saison, que
                l&apos;on mange cru avec de l&apos;oignon. Amsterdam garde aussi
                une grande cuisine indonésienne, héritée des liens entre les deux
                pays, servie en une série de petits plats.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le déjeuner est court et léger dans tout le pays. Le soir, le
                service commence tôt, souvent dès dix-huit heures trente.
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
            "Nous étions six dans la Galerie d'honneur, à huit heures du matin. Le conservateur nous a montré, sur La Ronde de nuit, l'endroit où la toile avait été coupée au dix-huitième siècle pour entrer dans une autre salle. Je regarde les tableaux différemment depuis.",
          image: {
            src: "/destination/pays-bas/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Amsterdam, La Haye et Delft, avril 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous partions pour trois jours de musées et nous avons passé un après-midi entier à vélo dans la forêt de la Veluwe. Personne ne nous avait dit que les Pays-Bas avaient des forêts pareilles. Nous avons rallongé de deux nuits sur place.",
          image: {
            src: "/destination/pays-bas/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Amsterdam et la Veluwe, juin 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le bateau est venu nous prendre devant l'hôtel à dix-huit heures. Nous avons remonté les canaux pendant deux heures, avec le skipper pour seule compagnie, puis il nous a déposés au pied du restaurant. C'est la soirée dont mes enfants reparlent.",
          image: {
            src: "/destination/pays-bas/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Amsterdam et le Limbourg, septembre 2025", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir aux Pays-Bas ?",
          answer:
            "D'avril à juin, puis en septembre. Les champs de tulipes du Bollenstreek fleurissent de la mi-avril au début mai, et le Keukenhof est ouvert de la mi-mars à la mi-mai. En juin, les journées s'étirent jusqu'à vingt-deux heures et les terrasses au bord des canaux restent animées tard. Septembre réunit une lumière très basse, des musées calmes et des tables plus faciles à obtenir. L'hiver est la saison des grandes expositions.",
        },
        {
          question: "Combien de temps dure le trajet Paris-Amsterdam ?",
          answer:
            "Une heure vingt en avion depuis Roissy ou Orly, avec plusieurs départs par jour. En train direct depuis Paris-Nord, trois heures vingt, et l'arrivée se fait à Amsterdam Centraal, en plein centre. Il n'y a pas de décalage horaire : quand il est 16 h à Paris, il est 16 h à Amsterdam.",
        },
        {
          question: "Faut-il un visa pour aller aux Pays-Bas ?",
          answer:
            "Non. Les Pays-Bas font partie de l'Union européenne et de l'espace Schengen : une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français. Aucune vaccination n'est demandée et la carte européenne d'assurance maladie couvre les soins sur place.",
        },
        {
          question: "Que faire aux Pays-Bas en 5 jours ?",
          answer:
            "Trois nuits à Amsterdam pour le Rijksmuseum, le musée Van Gogh et l'anneau de canaux, dont une soirée en salonboot privé. Une journée à La Haye et à Delft, avec le Mauritshuis le matin et les ateliers de faïence l'après-midi. Deux nuits ensuite dans la Veluwe pour le musée Kröller-Müller et la forêt à vélo. Le Limbourg et Maastricht s'ajoutent sur un séjour de sept nuits.",
        },
        {
          question: "Où dormir aux Pays-Bas en dehors d'Amsterdam ?",
          answer:
            "Deux régions valent une nuit sur place. La Veluwe, à une heure et demie de route, où les anciens pavillons de chasse sont posés en pleine forêt, avec le musée Kröller-Müller au bout des chemins. Et le Limbourg, tout au sud, où les domaines occupent des hameaux entiers dans les collines, aux portes de Maastricht. Les deux se combinent avec Amsterdam en train comme en voiture.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux Pays-Bas ?",
          answer:
            "Un voyage aux Pays-Bas sur mesure avec Exuma se situe généralement entre 3 500 et 7 000 € par personne pour cinq à sept nuits, hébergements, transferts privés, guides et accès négociés compris, hors transport depuis Paris. Les ouvertures de musées en dehors des heures publiques et la privatisation d'un salonboot constituent le principal poste variable.", // TODO: verify la fourchette de budget
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
        "Trois pays d'Europe où le voyage se joue sur la lumière et sur des distances courtes. La Suisse rejoint cette sélection dès la mise en ligne de sa page.",
      slugs: ["norvege", "islande", "suisse"],
    },
  ],
};
