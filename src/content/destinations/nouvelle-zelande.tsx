import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "nouvelle-zelande",
  name: "Nouvelle-Zélande",
  placeKind: "country",
  country: "Nouvelle-Zélande",
  genitive: "de la Nouvelle-Zélande",
  continentSlug: "iles-oceanie",
  blurb: "Fiordland, Alpes du Sud, Baie des Îles",
  keywords: [
    "nouvelle-zelande",
    "fiordland",
    "milford sound",
    "alpes du sud",
    "queenstown",
    "baie des iles",
    "rotorua",
    "aoraki mont cook",
  ],
  metaTitle: "Nouvelle-Zélande : Voyage sur mesure",
  metaDescription:
    "Voyage en Nouvelle-Zélande sur mesure : fjords du Fiordland, Alpes du Sud, Baie des Îles. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Nouvelle-Zélande",
      heading: "Là où les Alpes plongent dans le Pacifique",
      description:
        "Deux îles séparées par un détroit de vingt-deux kilomètres, une faille alpine qui court sur plus de six cents kilomètres, quinze fjords creusés par les glaciers dans le Fiordland. Au nord, les geysers de Rotorua et les baies tièdes du Pacifique ; au sud, les Alpes et leurs glaciers qui descendent presque jusqu'à la mer.", // TODO: verify figures
      images: [
        {
          src: "/destination/nouvelle-zelande/hero-1.png",
          alt: "Voyage en Nouvelle-Zélande : survol du fjord de Milford Sound, dans le Fiordland",
        },
        {
          src: "/destination/nouvelle-zelande/hero-2.png",
          alt: "Lac Wakatipu et les Remarkables, près de Queenstown, sur l'île du Sud",
        },
        {
          src: "/destination/nouvelle-zelande/hero-3.png",
          alt: "Eaux turquoise de la Baie des Îles, sur la côte nord-est de l'île du Nord",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Nouvelle-Zélande ?",
      heading:
        "Tainà, spécialiste de la Nouvelle-Zélande, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina",
        // TODO: verify quote attribution
        quote:
          "La Nouvelle-Zélande punit l'itinéraire pressé. Ce qui reste, ce n'est pas la route entre deux glaciers, c'est le silence d'un fjord avant que le moteur du bateau ne reparte, et la voix d'un guide māori qui raconte sa terre autrement qu'un dépliant. Le pays se traverse lentement, île par île, saison par saison.",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de la Nouvelle-Zélande",
      heading: "L'été austral commence en décembre, à l'autre bout du monde",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Nouvelle-Zélande inverse d'abord le calendrier : décembre ouvre l'été austral, juillet ferme l'hiver, et la saison de ski des Alpes du Sud se joue en plein cœur de l'été français. Deux îles, deux climats, une même ligne de faille qui les traverse du nord au sud.",
        "L'île du Nord tient dans la géothermie et le Pacifique tiède : les geysers et les lacs bouillonnants de Rotorua, la Baie des Îles et ses cent quarante-quatre îlots, les vignobles de Hawke's Bay. L'île du Sud tient dans la roche et la glace : les Alpes du Sud, Aoraki, le plus haut sommet du pays, les fjords du Fiordland et les glaciers de Franz Josef et Fox qui descendent jusqu'à la forêt tropicale tempérée.",
        "Entre les deux îles, le détroit de Cook se traverse en avion ou en ferry, en un peu plus d'une heure. Peu de pays offrent ce contraste sur une surface aussi resserrée : moins de trois heures séparent un glacier d'un vignoble, un fjord d'une plage de sable blanc.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/nouvelle-zelande/full-image.png",
        alt: "Voyage en Nouvelle-Zélande : le fjord de Milford Sound entouré de falaises abruptes, dans le Fiordland",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Nouvelle-Zélande : les lodges du bout du monde",
      heading: "Une piste d'atterrissage privée, et le lac en contrebas",
      theme: "light",
      paragraphs: [
        "Les meilleures adresses néo-zélandaises ne sont pas en ville. Blanket Bay occupe une presqu'île sur le lac Wakatipu, à Glenorchy, aux portes du Fiordland : hélicoptère privé jusqu'aux sommets environnants, dîner devant un feu de cheminée en pierre, silence complet passé dix-neuf heures.",
        "Sur l'île du Nord, Huka Lodge s'est installé au bord de la rivière Waikato, juste en amont des chutes de Huka, en 1924. La maison a reçu la reine Élisabeth II et plusieurs chefs d'État sans jamais publier une seule photo de ses hôtes. C'est encore la règle aujourd'hui.", // TODO: verify history details
      ],
      images: [
        {
          src: "/destination/nouvelle-zelande/split-1.png",
          alt: "Lodge Blanket Bay au bord du lac Wakatipu, face aux Alpes du Sud",
        },
        {
          src: "/destination/nouvelle-zelande/split-2.png",
          alt: "Huka Lodge au bord de la rivière Waikato, à Taupo",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/nouvelle-zelande/xp-milford-sound-1.png",
          alt: "Survol en hélicoptère des Alpes du Sud, au-dessus du Fiordland",
        },
        right: {
          src: "/destination/nouvelle-zelande/xp-milford-sound-2.png",
          alt: "Atterrissage sur un glacier des Alpes du Sud, en Nouvelle-Zélande",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le fjord qui ferme le ciel",
        columns: [
          "L'hélicoptère décolle de Queenstown ou de Milford Sound selon le sens choisi. Il grimpe au-dessus des Remarkables, franchit la ligne de crête des Alpes du Sud, puis se pose sur un névé, entre deux sommets, à plus de deux mille mètres. Le silence qui suit l'arrêt des pales ne ressemble à aucun autre : pas de vent, pas de route, pas d'autre appareil dans le ciel.", // TODO: verify altitude
          "La descente vers Milford Sound se fait par le fjord lui-même, entre les parois du Mitre Peak qui tombent à pic dans une eau douce en surface et salée en profondeur, un phénomène dû aux pluies constantes du Fiordland, l'une des régions les plus arrosées du monde.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Nouvelle-Zélande",
      heading: "Trois journées qui se réservent avant le départ",
      description:
        "Les grottes de Waitomo, la Baie des Îles et l'accueil māori de Rotorua fonctionnent sur des créneaux restreints. Ces trois journées se calent depuis Paris, pas depuis l'hôtel.",
      slugs: [
        "grottes-waitomo",
        "voilier-prive-bay-of-islands",
        "rencontre-maorie-rotorua",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Nouvelle-Zélande",
      description:
        "Trois adresses pour deux îles : une presqu'île sur le lac Wakatipu face au Fiordland, un lodge historique au bord d'une rivière de l'île du Nord, des villas privées sur la Baie des Îles.",
      slugs: ["blanket-bay", "huka-lodge", "eagles-nest"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Nouvelle-Zélande",
      description:
        "Vol, décalage, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage en Nouvelle-Zélande.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Aucun vol direct depuis Paris. Comptez vingt-cinq à trente heures de trajet avec une escale, notamment via Singapour, Dubaï ou Los Angeles. Les itinéraires les plus rapides tournent autour de vingt-cinq heures, selon la correspondance.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Onze heures d'avance sur Paris pendant l'heure d'été française, douze heures pendant l'heure d'hiver. La Nouvelle-Zélande passe à l'heure d'été de fin septembre à début avril, ce qui explique ce décalage variable au fil de l'année.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar néo-zélandais (NZD). Le taux évolue quotidiennement : comptez environ 1,9 à 2 NZD pour un euro à titre indicatif. Les cartes bancaires sont largement acceptées, même si quelques adresses très isolées préfèrent encore les espèces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de quatre-vingt-dix jours, mais doivent obtenir une NZeTA avant le départ. L'International Visitor Conservation and Tourism Levy, actuellement de 100 NZD, se règle lors de la même demande. La NZeTA reste valable deux ans et permet plusieurs voyages.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin spécifique n'est exigé pour un voyageur venant de France. Il est recommandé d'être à jour du calendrier vaccinal français : diphtérie, tétanos, poliomyélite, coqueluche et rougeole.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à février pour l'été austral, températures agréables et activités de plein air. De juin à août pour le ski dans les Alpes du Sud, autour de Queenstown et Wānaka. De mars à mai, un bon compromis entre nature, randonnée et fréquentation plus modérée.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Trois langues officielles : l'anglais, le te reo māori et la langue des signes néo-zélandaise. Le te reo māori a obtenu ce statut en 1987, la langue des signes néo-zélandaise en 2006.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat tempéré océanique, plus subtropical à l'extrême nord et nettement plus alpin au sud. La Baie des Îles reste douce toute l'année ; Queenstown et les Alpes du Sud connaissent des hivers froids et enneigés. Le temps peut changer rapidement en montagne, au cours d'une même journée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Nouvelle-Zélande. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/nouvelle-zelande/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Nouvelle-Zélande entre les deux îles",
            "Adresses confidentielles en Nouvelle-Zélande : tables et lodges hors des sentiers battus",
            "Hébergements en Nouvelle-Zélande : lodges du Fiordland et villas de la Baie des Îles",
            "Conciergerie privée 24/7 pour un voyage en Nouvelle-Zélande",
            "Expériences en Nouvelle-Zélande : hélicoptère sur les Alpes du Sud et grottes de Waitomo",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître en Nouvelle-Zélande",
      heading: "Six étapes, et les vols qui les relient",
      description:
        "Le pays s'étire sur plus de mille cinq cents kilomètres. Voici les six étapes qui structurent un premier voyage, et ce que chacune apporte que les autres n'ont pas.", // TODO: verify figure
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Milford Sound et le Fiordland",
          description:
            "Le fjord le plus célèbre du pays, encadré par les parois du Mitre Peak. L'une des régions les plus arrosées du monde, ce qui donne au Fiordland ses cascades permanentes et son eau à double densité.",
          image: {
            src: "/destination/nouvelle-zelande/map-milford-sound.png",
            alt: "Fjord de Milford Sound encadré par les falaises du Fiordland",
          },
          // TODO: verify coords
          coordinates: { lat: -44.671, lng: 167.925 },
        },
        {
          title: "Queenstown et le lac Wakatipu",
          description:
            "La base du Fiordland et des Alpes du Sud, posée sur un lac en forme d'éclair au pied des Remarkables. Point de départ des vols hélicoptère et des routes vers Glenorchy.",
          image: {
            src: "/destination/nouvelle-zelande/map-queenstown.png",
            alt: "Lac Wakatipu et chaîne des Remarkables, près de Queenstown",
          },
          // TODO: verify coords
          coordinates: { lat: -45.0312, lng: 168.6626 },
        },
        {
          title: "Aoraki / Mont Cook",
          description:
            "Le plus haut sommet du pays, trois mille sept cents mètres environ, entouré de dix-neuf autres sommets de plus de trois mille mètres. Les glaciers Tasman et Hooker descendent à ses pieds.", // TODO: verify altitude
          image: {
            src: "/destination/nouvelle-zelande/map-aoraki.png",
            alt: "Sommet d'Aoraki / Mont Cook et ses glaciers, sur l'île du Sud",
          },
          // TODO: verify coords
          coordinates: { lat: -43.595, lng: 170.1418 },
        },
        {
          title: "Grottes de Waitomo",
          description:
            "Un réseau de grottes calcaires sur l'île du Nord, connu pour ses milliers de vers luisants qui transforment le plafond en voie lactée immobile, visible depuis une barque silencieuse.",
          image: {
            src: "/destination/nouvelle-zelande/map-waitomo.png",
            alt: "Grotte de vers luisants de Waitomo, sur l'île du Nord",
          },
          // TODO: verify coords
          coordinates: { lat: -38.261, lng: 175.1046 },
        },
        {
          title: "Rotorua",
          description:
            "Capitale géothermique du pays et cœur culturel māori. Geysers, lacs bouillonnants, marae vivants : la terre y fume littéralement, et l'accueil māori se transmet depuis des générations.",
          image: {
            src: "/destination/nouvelle-zelande/map-rotorua.png",
            alt: "Geysers et sources géothermiques de Rotorua, sur l'île du Nord",
          },
          // TODO: verify coords
          coordinates: { lat: -38.1368, lng: 176.2497 },
        },
        {
          title: "Baie des Îles",
          description:
            "Cent quarante-quatre îlots au nord-est de l'île du Nord, berceau de la nation néo-zélandaise et terrain de jeu pour la voile, la pêche au gros et les dauphins.",
          image: {
            src: "/destination/nouvelle-zelande/map-baie-des-iles.png",
            alt: "Îlots de la Baie des Îles vus depuis un voilier",
          },
          // TODO: verify coords
          coordinates: { lat: -35.287, lng: 174.0964 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Nouvelle-Zélande",
      description:
        "Huit repères rapportés du terrain : comment on arrive, comment on se déplace, et ce qui se réserve des mois avant le départ.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "L'escale se choisit, elle ne se subit pas",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trente heures de trajet et une escale obligatoire : autant en faire une étape",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Aucun avion ne relie la France à la Nouvelle-Zélande sans
                escale. Le trajet passe par Dubaï, Singapour ou Los Angeles,
                pour trente à trente-deux heures au total selon la
                correspondance.
              </p>
              <p>
                Une nuit d&apos;hôtel à l&apos;escale, à l&apos;aller ou au
                retour, transforme le vol le plus long du voyage en deux
                étapes supportables.
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
          title: "L'été austral commence en décembre",
          cardEyebrow: "Saisons",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Novembre à avril pour les fjords, juin à septembre pour le ski des Alpes du Sud",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le calendrier est inversé par rapport à l&apos;Europe :
                décembre à février forment l&apos;été austral, juin à août
                l&apos;hiver. Novembre et avril, en intersaison, offrent une
                lumière douce et moins de monde sur les sentiers.
              </p>
              {/* TODO: verify ski season dates */}
              <p>
                Pour le ski, les stations des Alpes du Sud, autour de
                Queenstown et Wanaka, ouvrent en général de juin à septembre.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;ordre des étapes suit la saison choisie, pas la carte.
                C&apos;est ce qui décide du sens de l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Conduire à gauche, sur des routes qui changent d'humeur",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les distances sur la carte trompent : comptez le temps, pas les kilomètres",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les routes néo-zélandaises serpentent en montagne et longent
                des côtes découpées. Deux cents kilomètres peuvent demander
                trois heures de route, parfois plus dans le Fiordland ou sur
                la côte ouest.
              </p>
              <p>
                La conduite se fait à gauche, comme au Royaume-Uni. Les
                stations-service se font rares dans certaines régions
                reculées de l&apos;île du Sud.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Chauffeur privé ou véhicule avec assistance sont proposés sur
                les portions les plus longues, pour laisser le paysage faire
                le travail.
              </p>
            </div>
          ),
        },
        {
          title: "La météo commande le programme, pas l'inverse",
          cardEyebrow: "Vols & excursions",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les vols hélicoptère sur le Fiordland dépendent d'une fenêtre météo, jamais garantie",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Fiordland reçoit parmi les pluies les plus abondantes du
                monde. Les vols en hélicoptère et les atterrissages sur
                glacier se reportent quand la visibilité manque, parfois de
                plusieurs heures, parfois d&apos;un jour.
              </p>
              <p>
                Un itinéraire trop serré transforme un report en annulation.
                Une marge d&apos;une journée avant un vol hélicoptère évite ce
                risque.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les expériences dépendantes de la météo sont programmées avec
                une journée tampon, jamais en dernier jour d&apos;étape.
              </p>
            </div>
          ),
        },
        {
          title: "Le hongi se reçoit, il ne se refuse pas",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le pressage du nez et du front est un geste d'accueil māori, pas une simple photo",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Lors d&apos;un pōwhiri, la cérémonie d&apos;accueil māorie, le
                hongi mêle le souffle de l&apos;hôte et de l&apos;invité. Le
                geste se reçoit avec calme, sans recul ni hésitation.
              </p>
              <p>
                Sur un marae, certains lieux et objets sont tapu (sacrés) et
                ne se photographient pas sans autorisation. Le guide indique
                toujours la limite au bon moment.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les rencontres māories sont montées avec des familles et des
                guides de la communauté, jamais avec un prestataire
                extérieur.
              </p>
            </div>
          ),
        },
        {
          title: "Deux îles, deux rythmes",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île du Nord se visite en profondeur, l'île du Sud se traverse en grand angle",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;île du Nord concentre la géothermie, la culture māorie
                et les vignobles sur des distances courtes. L&apos;île du Sud
                s&apos;étire entre montagnes et fjords, avec des trajets plus
                longs entre chaque étape.
              </p>
              <p>
                Trois semaines permettent de couvrir les deux îles sans
                courir. Quinze jours imposent de choisir : la culture et la
                mer au nord, ou la montagne et la glace au sud.
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
          title: "La faune se voit tôt, ou pas du tout",
          cardEyebrow: "Faune",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Kiwis, dauphins, otaries : les bonnes heures sont l'aube, le crépuscule et la nuit",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le kiwi, oiseau nocturne et endémique, ne se voit qu&apos;à la
                tombée du jour ou dans un centre spécialisé. Les dauphins de
                la Baie des Îles se croisent surtout le matin, avant que le
                trafic maritime ne s&apos;installe.
              </p>
              <p>
                Les colonies d&apos;otaries de la péninsule d&apos;Otago se
                reposent sur les plages en fin de journée, entre deux marées.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les sorties nature sont calées sur ces créneaux, réservées à
                l&apos;avance plutôt qu&apos;improvisées sur place.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Quatre saisons dans une même journée : les couches comptent plus que la saison",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le climat néo-zélandais change vite, surtout en montagne : une
                matinée ensoleillée peut virer à la pluie froide avant midi.
                Plusieurs couches, coupe-vent imperméable et chaussures de
                marche pour le Fiordland et les Alpes du Sud.
              </p>
              <p>
                Crème solaire haute protection toute l&apos;année : la couche
                d&apos;ozone est plus fine dans l&apos;hémisphère sud. Maillot
                et vêtements légers pour la Baie des Îles et Hawke&apos;s Bay.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                La liste part avec le carnet de voyage, ajustée à la saison et
                aux étapes retenues.
              </p>
            </div>
          ),
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
            "Quelle est la meilleure période pour partir en Nouvelle-Zélande ?",
          answer:
            "De décembre à février pour l'été austral, avec des températures agréables et de bonnes conditions pour les activités de plein air. De juin à août pour la saison de ski dans les Alpes du Sud, autour de Queenstown et Wānaka. De mars à mai, un bon compromis entre nature, randonnée et fréquentation plus modérée.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Aucun vol direct entre la France et la Nouvelle-Zélande. Comptez vingt-cinq à trente heures de trajet avec une escale, notamment via Singapour, Dubaï ou Los Angeles. Les itinéraires les plus rapides tournent autour de vingt-cinq heures, selon la correspondance.",
        },
        {
          question: "Faut-il un visa pour aller en Nouvelle-Zélande ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de quatre-vingt-dix jours, mais doivent obtenir une NZeTA avant le départ. L'International Visitor Conservation and Tourism Levy, actuellement de 100 NZD, se règle lors de la même demande. La NZeTA reste valable deux ans et permet plusieurs voyages.",
        },
        {
          question: "Que faire en Nouvelle-Zélande en trois semaines ?",
          answer:
            "Quatre à cinq étapes tiennent confortablement en trois semaines. Rotorua pour la géothermie et la culture māorie, la Baie des Îles pour la voile et les dauphins, Queenstown et Glenorchy pour les Alpes du Sud et le Fiordland, Milford Sound en hélicoptère ou en bateau, et les grottes de Waitomo en chemin entre les deux îles.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui, à condition de garder un rythme raisonnable entre les étapes. Les grottes de Waitomo, la voile dans la Baie des Îles et les sorties nature de l'île du Sud fonctionnent bien avec des adolescents. La conduite à gauche et les distances demandent une marge de temps supplémentaire avec de jeunes enfants.",
        },
        {
          question: "Où dormir en Nouvelle-Zélande ?",
          answer:
            "Les meilleures adresses ne sont pas en ville. Sur le lac Wakatipu, à Glenorchy, Blanket Bay donne un accès hélicoptère direct aux Alpes du Sud. À Taupo, Huka Lodge occupe un jardin au bord de la rivière Waikato depuis 1924. Sur la Baie des Îles, Eagles Nest propose des villas privées avec vue sur les îlots.",
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
        "D'autres façons de traverser de grands espaces, entre désert rouge, cordillère des Andes et fjords patagons. Trois prolongements possibles après un premier voyage en Nouvelle-Zélande.",
      slugs: ["australie", "chili", "argentine"],
    },
  ],
};
