import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "anguilla",
  name: "Anguilla",
  placeKind: "country",
  country: "Anguilla",
  genitive: "d'Anguilla",
  continentSlug: "ameriques",
  blurb: "Shoal Bay, Sandy Ground, les cayes du large",
  keywords: [
    "anguilla",
    "shoal bay",
    "sandy ground",
    "meads bay",
    "rendezvous bay",
    "sandy island",
    "prickly pear",
    "the valley",
  ],
  metaTitle: "Anguilla : Voyage sur mesure",
  metaDescription:
    "Voyage à Anguilla sur mesure : Shoal Bay, Meads Bay, Sandy Ground et les cayes de Sandy Island. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Anguilla",
      heading: "Une île basse, sans relief, où l'eau fait tout le travail",
      description:
        "Ici rien ne dépasse. L'île est plate, sèche, couverte de buissons bas. Toute l'attention va à l'eau, qui passe du turquoise au vert selon l'heure et le banc de sable qu'elle recouvre.",
      images: [
        {
          src: "/destination/anguilla/hero-1.png",
          alt: "Voyage à Anguilla : sable blanc et eau turquoise de Shoal Bay East",
        },
        {
          src: "/destination/anguilla/hero-2.png",
          alt: "Bateaux de pêche colorés amarrés dans la baie de Sandy Ground",
        },
        {
          src: "/destination/anguilla/hero-3.png",
          alt: "Banc de sable désert de Sandy Island au large d'Anguilla",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Anguilla ?",
      heading: "Tainà, spécialiste d'Anguilla, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina", // TODO: verify collaborateurSlug (Tainà porte déjà la Jamaïque, la Colombie et le Costa Rica)
        // TODO: verify quote attribution : à faire valider par Tainà avant mise en ligne
        quote:
          "Anguilla est une île calme, et c'est précisément ce que les gens viennent y chercher. Ceux qui y retournent le disent tous de la même façon : on y est tranquille, on y prend son temps, et personne ne les regarde. Dans la Caraïbe, c'est devenu rare.",
        role: "Travel Designer · Anguilla",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte d'Anguilla",
      heading: "L'île se traverse en trente minutes de voiture",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Anguilla commence le plus souvent par un trajet en bateau. Le grand aéroport de la zone est celui de Saint-Martin, à vingt-cinq minutes de mer de Blowing Point. On arrive donc par l'eau, et cela donne le ton d'emblée.",
        "L'île est plate et sèche. Pas de montagne, pas de rivière, une végétation basse de buissons et de figuiers de Barbarie. Ce que cela produit, c'est une eau sans limon, transparente jusqu'au fond, et des plages qui gardent leur sable clair toute l'année.",
        "Il n'y a pas de ville. The Valley tient en quelques rues, et la vie se rassemble autour de Sandy Ground, le port, quand les bateaux de pêche rentrent en fin de journée. Le reste, ce sont des baies : Shoal Bay, Meads Bay, Rendezvous Bay, Cove Bay.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/anguilla/full-image.png",
        alt: "Voyage à Anguilla : la longue plage de Rendezvous Bay face à Saint-Martin",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Anguilla : les cayes et les tables",
      heading: "On déjeune de langouste sur un îlot sans électricité",
      theme: "light",
      paragraphs: [
        "Sandy Island tient en un banc de sable, quelques cocotiers et une paillote. Vingt minutes de bateau depuis Sandy Ground, et il n'y a plus rien autour. La langouste sort du vivier au moment de la commande, elle est grillée au feu de bois et servie sur une table posée dans le sable.",
        "La réputation de l'île à table étonne pour sa taille. Des chefs s'y sont installés à demeure, et les cartes tournent autour de ce qui a été pêché le matin même : langouste, vivaneau, conque. Le soir venu, la plupart des tables ont les pieds dans le sable et une seule série de couverts.",
      ],
      images: [
        {
          src: "/destination/anguilla/split-1.png",
          alt: "Langouste grillée servie sur une table posée dans le sable à Sandy Island",
        },
        {
          src: "/destination/anguilla/split-2.png",
          alt: "Paillote et cocotiers de l'îlot de Prickly Pear, au large d'Anguilla",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/anguilla/xp-plongee-epaves-1.png",
          alt: "Plongeur au-dessus d'une épave couverte de coraux au large d'Anguilla",
        },
        right: {
          src: "/destination/anguilla/xp-plongee-epaves-2.png",
          alt: "Bateau de plongée privatisé mouillé au-dessus d'un récif à Anguilla",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Sept épaves posées sur le sable, à vingt minutes du bord",
        columns: [
          "Anguilla est plus intéressante sous l'eau que son image de plages tranquilles ne le laisse penser. Le plateau compte une vingtaine de récifs et sept épaves, coulées volontairement et posées à faible profondeur. Le bateau part de Sandy Ground, privatisé pour la journée.",
          "La journée se construit à la carte : deux plongées pour ceux qui plongent, masque et tuba pour les autres, un passage par les cayes et le déjeuner à Sandy Island ou à Prickly Pear. Tout le monde reste sur le même bateau. C'est ce qui fait que la journée tient en famille.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Anguilla",
      heading: "Trois sorties à réserver avant d'arriver",
      description:
        "Le yacht, le voilier et le ranch travaillent sur rendez-vous, avec peu de créneaux. Ces trois sorties se calent avant le départ, pas depuis la plage.",
      slugs: [
        "yacht-prive-sandy-island",
        "sunset-voilier-prive",
        "cheval-mer-cove-bay",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner à Anguilla",
      description:
        "Trois adresses sur trois baies différentes : un domaine de villas blanches sur Maundays Bay, neuf suites au-dessus de Long Bay, des maisons avec service sur Barnes Bay.",
      slugs: ["belmond-cap-juluca", "quintessence-hotel", "four-seasons-anguilla"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Anguilla",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage à Anguilla.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Air France relie Paris à Saint-Martin (SXM) sans escale, en 9 h 15 environ, cinq fois par semaine. De là, Anguilla se rejoint en vingt-cinq minutes de ferry entre Marigot et Blowing Point, ou en moins de dix minutes de vol jusqu'à l'aéroport Clayton J. Lloyd (AXA).",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Six heures de retard sur Paris en été, cinq en hiver. L'île ne pratique pas le changement d'heure. Le décalage se digère bien à l'aller.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar des Caraïbes orientales, indexé sur le dollar américain à taux fixe depuis 1976, à 2,70 pour un dollar. Le dollar américain est accepté partout, et beaucoup de cartes affichent les deux monnaies. Prévoir des espèces en petites coupures pour les cayes, les bars de Sandy Ground et les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Anguilla est un territoire britannique d'outre-mer. Pas de visa pour un séjour touristique jusqu'à 90 jours. Le passeport doit rester valide toute la durée du séjour, et un billet de retour ou de continuation est demandé à l'arrivée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun certificat de vaccination n'est exigé à l'entrée, y compris pour la fièvre jaune. Les autorités sanitaires britanniques recommandent d'être à jour du tétanos, et les hépatites A et B selon le profil du voyage. Pas de paludisme sur l'île.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De décembre à avril pour la saison sèche, la plus stable et la plus demandée. Février et mars sont les mois les plus secs de l'année. Mai et juin gardent la même eau avec beaucoup moins de monde. La saison cyclonique court de juin à novembre, avec un pic en août, septembre et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle. Dans la rue, on entend surtout le créole anguillan, une langue à base anglaise. Un guide francophone accompagne les journées qui le demandent, en mer comme à terre.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "De 28 à 31 °C en journée toute l'année, de 23 à 26 °C la nuit, avec l'alizé qui souffle en permanence sur la côte nord. Sans relief pour retenir les nuages, l'île reçoit environ un mètre de pluie par an, l'un des totaux les plus faibles des Petites Antilles.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Anguilla. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/anguilla/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à Anguilla entre Shoal Bay, Sandy Ground et les cayes",
            "Adresses confidentielles à Anguilla : paillotes des cayes et tables de chefs",
            "Hébergements à Anguilla : villas blanches de Maundays Bay et maisons de Barnes Bay",
            "Conciergerie privée 24/7 pour un voyage à Anguilla",
            "Expériences à Anguilla : plongée sur épaves, yacht privé et cheval à Cove Bay",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître à Anguilla",
      heading: "Six baies, et ce qui les sépare",
      description:
        "L'île se traverse en une demi-heure, mais chaque baie a son caractère, son eau et son heure. Voici celles qui structurent un séjour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 11,
      places: [
        {
          title: "Shoal Bay East",
          description:
            "Trois kilomètres de sable blanc sur la côte nord, avec un récif à quelques brasses du bord. Le matin, la plage appartient encore aux pêcheurs et aux pélicans.",
          image: {
            src: "/destination/anguilla/map-shoal-bay.png",
            alt: "Sable blanc et eau claire de Shoal Bay East, sur la côte nord d'Anguilla",
          },
          // TODO: verify coords
          coordinates: { lat: 18.2603, lng: -63.0122 },
        },
        {
          title: "Sandy Ground et Road Bay",
          description:
            "Le port de l'île et son seul vrai point de rassemblement. Les bateaux de plongée et ceux des cayes partent d'ici, et les bars de la plage se remplissent quand la pêche rentre.",
          image: {
            src: "/destination/anguilla/map-sandy-ground.png",
            alt: "Bateaux amarrés devant les maisons colorées de Sandy Ground, à Anguilla",
          },
          // TODO: verify coords
          coordinates: { lat: 18.2039, lng: -63.0925 },
        },
        {
          title: "Meads Bay et Barnes Bay",
          description:
            "La façade ouest, celle des couchers de soleil et des grandes adresses. Deux baies voisines, l'une longue et ouverte, l'autre plus resserrée entre deux pointes rocheuses.",
          image: {
            src: "/destination/anguilla/map-meads-bay.png",
            alt: "Longue plage de Meads Bay bordée de cocotiers, côte ouest d'Anguilla",
          },
          // TODO: verify coords
          coordinates: { lat: 18.1817, lng: -63.1194 },
        },
        {
          title: "Rendezvous Bay",
          description:
            "Une courbe de sable de plus de deux kilomètres, face aux montagnes de Saint-Martin. C'est là que Bankie Banx a bâti le Dune Preserve, une cabane de bois faite de bateaux échoués.",
          image: {
            src: "/destination/anguilla/map-rendezvous-bay.png",
            alt: "Courbe de sable de Rendezvous Bay avec Saint-Martin à l'horizon",
          },
          // TODO: verify coords
          coordinates: { lat: 18.1717, lng: -63.0994 },
        },
        {
          title: "Sandy Island et Prickly Pear",
          description:
            "Deux cayes inhabitées au large de Sandy Ground, un banc de sable et quelques cocotiers chacune. On y va pour la journée, pour le récif et pour la langouste au feu de bois.",
          image: {
            src: "/destination/anguilla/map-sandy-island.png",
            alt: "Îlot de Sandy Island et son récif, au large de la côte nord d'Anguilla",
          },
          // TODO: verify coords
          coordinates: { lat: 18.2167, lng: -63.1167 },
        },
        {
          title: "The Valley et Crocus Hill",
          description:
            "La capitale tient en quelques rues et le point le plus haut de l'île culmine à soixante-cinq mètres. Non loin, la Fountain Cavern garde des gravures amérindiennes taillées dans la roche.",
          image: {
            src: "/destination/anguilla/map-the-valley.png",
            alt: "Rues basses et toits de The Valley, la capitale d'Anguilla",
          },
          // TODO: verify coords
          coordinates: { lat: 18.217, lng: -63.0578 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Anguilla",
      description:
        "Huit repères rapportés du terrain : comment on arrive, ce qui change d'une côte à l'autre, et ce qui se réserve avant de partir.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "On arrive par Saint-Martin, et c'est une bonne nouvelle",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vingt-cinq minutes de mer depuis Saint-Martin, ou moins de dix minutes de vol. Le transfert fait partie du voyage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Anguilla n&apos;a pas de liaison directe avec l&apos;Europe. On
                atterrit à Saint-Martin, à l&apos;aéroport Princess Juliana, et
                l&apos;on rejoint l&apos;île soit par le ferry public entre
                Marigot et Blowing Point, soit par un bateau privé au départ de
                la partie néerlandaise, soit par un petit avion de moins de dix
                minutes vers l&apos;aéroport Clayton J. Lloyd.
              </p>
              <p>
                Le bateau privé reste la solution la plus confortable : le
                transfert se cale sur l&apos;heure d&apos;atterrissage, il part
                du ponton et non du terminal, et les bagages ne changent de
                mains qu&apos;une fois.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le transfert est réservé en amont et suivi en temps réel. Un
                retard à Paris déplace le bateau, pas l&apos;inverse.
              </p>
            </div>
          ),
        },
        {
          title: "Une seule base suffit pour toute l'île",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Vingt-six kilomètres de long : on pose ses valises une fois et on rayonne en voiture",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Anguilla se traverse en trente minutes. Changer d&apos;hôtel en
                cours de séjour n&apos;apporte rien, sinon une matinée perdue.
                Une seule base, choisie pour sa baie, et l&apos;on rejoint les
                autres plages à la journée.
              </p>
              <p>
                Sept nuits donnent le bon rythme : deux journées en mer, deux
                journées sans rien de prévu, et le reste au fil des tables et des
                plages. Dix nuits permettent d&apos;ajouter une escapade à
                Saint-Barth ou à Saint-Martin.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous choisissons la baie avant l&apos;hôtel. La côte nord et la
                côte ouest ne donnent pas la même journée.
              </p>
            </div>
          ),
        },
        {
          title: "Le nord et l'ouest n'ont pas la même eau",
          cardEyebrow: "Géographie",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le nord reçoit l'alizé et le récif, l'ouest reçoit le calme et le coucher de soleil",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur la côte nord, à Shoal Bay East ou à Captain&apos;s Bay,
                l&apos;alizé souffle en continu et le récif se trouve à quelques
                brasses du bord. C&apos;est la côte du masque et du tuba, et
                celle où l&apos;eau est la plus vive.
              </p>
              <p>
                À l&apos;ouest, Meads Bay, Barnes Bay et Rendezvous Bay sont
                abritées. L&apos;eau y est plate presque tous les jours, le
                soleil se couche dans l&apos;axe de la plage, et c&apos;est là
                que se concentrent les grandes adresses.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous plaçons au moins une journée sur chaque façade. Une seule
                côte donne une idée partielle de l&apos;île.
              </p>
            </div>
          ),
        },
        {
          title: "La langouste se commande la veille",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Sur les cayes comme dans les paillotes, elle est sortie du vivier à la commande",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La langouste des Caraïbes est le plat de l&apos;île. Elle est
                gardée vivante en vivier et grillée au feu de bois à la commande,
                aussi bien à Sandy Island que dans les paillotes de Sandy Ground.
                Les quantités du jour dépendent de ce que les casiers ont donné.
              </p>
              <p>
                Prévenir la veille change tout, en particulier pour une table de
                six ou plus. Même logique pour la conque et le vivaneau, qui se
                réservent auprès du même pêcheur.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les tables des cayes sont calées avant le départ, avec le nombre
                de couverts et l&apos;heure du bateau.
              </p>
            </div>
          ),
        },
        {
          title: "La haute saison se réserve un an à l'avance",
          cardEyebrow: "Réservation",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île compte peu de clefs. De décembre à avril, les meilleures baies partent tôt",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Anguilla n&apos;a ni grande capacité hôtelière ni immeuble en
                bord de mer. Sur la haute saison, entre décembre et avril, les
                villas et les suites de front de plage se réservent souvent d&apos;une
                année sur l&apos;autre par les mêmes familles.
              </p>
              <p>
                Les semaines de Noël et du Nouvel An sont les premières à partir,
                suivies de février. Mai, juin et début novembre offrent la même
                eau avec une disponibilité bien plus large.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous ouvrons les dossiers de décembre à avril dès le printemps
                précédent, et nous suivons les libérations de dernière minute.
              </p>
            </div>
          ),
        },
        {
          title: "Tout ce qui compte part de Sandy Ground",
          cardEyebrow: "Sur l'eau",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Plongée, cayes, sunset : les bateaux partent tous du même port, à des heures fixes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sandy Ground est le port de l&apos;île. Les bateaux de plongée,
                les navettes vers Sandy Island et Prickly Pear, les voiliers de
                fin de journée : tout appareille depuis cette baie, à quelques
                pontons de distance.
              </p>
              <p>
                Les créneaux sont fixes et les bateaux sont petits. Un charter
                privé permet de choisir son heure de départ, sa durée et son
                itinéraire, et de garder plongeurs et non-plongeurs à bord du même
                bateau.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les sorties en mer sont privatisées par défaut, et l&apos;ordre
                des journées suit la météo plutôt que le calendrier.
              </p>
            </div>
          ),
        },
        {
          title: "La course de voiliers est le sport national",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des sloops de bois construits sur l'île, des équipages de village, et toute l'île sur la plage",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Anguilla n&apos;a pas de stade. Son sport national, c&apos;est la
                course de voiliers : des sloops de bois construits sur place, sans
                cabine, menés par des équipages de dix à quinze personnes venues du
                même quartier.
              </p>
              <p>
                Les grandes régates rythment l&apos;année, autour de l&apos;Anguilla
                Day le 30 mai et de la semaine du carnaval, début août. Les départs
                se donnent depuis la plage et l&apos;île entière suit la course
                depuis le sable.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Quand les dates coïncident, nous plaçons le séjour sur une régate
                et organisons le suivi de la course depuis un bateau.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Rien de formel, mais du linge léger, de bonnes lunettes et un masque à sa vue",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Anguilla ne s&apos;habille pas. Le soir, même dans les meilleures
                tables, le linge léger et les sandales suffisent. Une chemise de
                lin et une veste fine couvrent tous les cas de figure.
              </p>
              <p>
                Le soleil tombe droit et l&apos;alizé masque la brûlure : un
                chapeau, une crème minérale qui ne blanchit pas le récif et des
                lunettes polarisantes sont plus utiles qu&apos;un bagage supplémentaire.
                Ceux qui font du masque et tuba gagnent à emporter le leur, à leur
                vue.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                La liste part avec le carnet de voyage, adaptée à la saison et aux
                sorties en mer prévues.
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
            "La journée de plongée en bateau privé a réconcilié tout le monde. Mon mari et moi sur les épaves, les enfants au masque et tuba au-dessus du récif, et tout le monde à table sur Sandy Island à midi.",
          image: {
            src: "/destination/anguilla/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Anguilla en famille, mars 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Sept nuits sur Maundays Bay sans reprendre la voiture plus de trois fois. C'est la première fois qu'on ne cherche pas à occuper les journées.",
          image: {
            src: "/destination/anguilla/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Anguilla à deux, janvier 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le voilier de fin de journée, à six, sans personne d'autre à bord. On est rentrés à Sandy Ground de nuit et on a dîné sur la plage en descendant du bateau.",
          image: {
            src: "/destination/anguilla/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Anguilla, février 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à Anguilla ?",
          answer:
            "De décembre à avril, pendant la saison sèche : c'est la fenêtre la plus stable, et celle où les meilleures adresses affichent complet le plus tôt. Février et mars sont les mois les plus secs de l'année. Mai, juin et début novembre gardent la même eau avec beaucoup moins de monde. La saison cyclonique court de juin à novembre, avec un pic en août, septembre et octobre.",
        },
        {
          question: "Comment se rendre à Anguilla depuis Paris ?",
          answer:
            "Air France assure un vol direct entre Paris et Saint-Martin (SXM), cinq fois par semaine, en 9 h 15 environ. De Saint-Martin, Anguilla se rejoint en vingt-cinq minutes de ferry public entre Marigot et Blowing Point, en bateau privé depuis la partie néerlandaise, ou en moins de dix minutes de vol jusqu'à l'aéroport Clayton J. Lloyd (AXA). Le transfert maritime privé permet de caler le départ sur l'heure d'atterrissage.",
        },
        {
          question: "Faut-il un visa pour aller à Anguilla ?",
          answer:
            "Non. Anguilla est un territoire britannique d'outre-mer, et le séjour touristique se fait sans visa jusqu'à 90 jours, avec un tampon d'entrée délivré à l'arrivée. Le passeport doit rester valide toute la durée du séjour, et un billet de retour ou de continuation est demandé. Aucun certificat de vaccination n'est exigé, y compris pour la fièvre jaune.",
        },
        {
          question: "Que faire à Anguilla en une semaine ?",
          answer:
            "Une journée de plongée et de snorkeling en bateau privé sur les récifs et les épaves, avec déjeuner sur Sandy Island ou Prickly Pear. Une journée de yacht privé vers les cayes du large. Une fin de journée sur un voilier privatisé au départ de Sandy Ground, et une matinée à cheval sur la plage de Cove Bay. Le reste du séjour se passe entre Shoal Bay East, Meads Bay et les tables du soir.",
        },
        {
          question: "Anguilla est-elle adaptée aux familles ?",
          answer:
            "Oui, à condition d'aimer le calme : l'île n'a ni parc ni grande animation, et tout tourne autour de l'eau. Les charters privés permettent de garder plongeurs et non-plongeurs sur le même bateau, les baies de la côte ouest sont plates et peu profondes, et les villas avec cuisine et personnel laissent chacun vivre à son horaire.",
        },
        {
          question: "Où dormir à Anguilla ?",
          answer:
            "Sur la côte ouest, Maundays Bay, Barnes Bay et Meads Bay concentrent les grandes adresses, avec le coucher de soleil dans l'axe de la plage et une mer plate presque tous les jours. Au-dessus de Long Bay, une très petite maison de neuf suites offre l'autre format de l'île, plus confidentiel. Pour une famille ou plusieurs générations, la villa avec cuisine et personnel reste la formule la plus souple.",
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
        "D'autres façons de parcourir la Caraïbe, entre archipels de sable, montagnes vertes et grandes maisons de famille. Trois prolongements possibles après un premier voyage à Anguilla.",
      slugs: ["bahamas", "jamaique", "republique-dominicaine"],
    },
  ],
};
