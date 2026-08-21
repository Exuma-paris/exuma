import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "caraibes",
  name: "Caraïbes",
  placeKind: "country",
  country: "Caraïbes",
  genitive: "des Caraïbes",
  continentSlug: "caraibes",
  blurb: "Saint-Barth, Anguilla, Mustique, les Grenadines",
  keywords: [
    "caraibes",
    "antilles",
    "saint-barthelemy",
    "anguilla",
    "mustique",
    "grenadines",
    "sainte-lucie",
    "grenade",
  ],
  metaTitle: "Caraïbes : Voyage sur mesure",
  metaDescription:
    "Voyage dans les Caraïbes sur mesure : Saint-Barthélemy, Anguilla, Mustique, les Grenadines et Sainte-Lucie. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe dans les Caraïbes",
      heading: "Les Caraïbes, des Grenadines aux plages de Saint-Barthélemy",
      description:
        "Les Caraïbes changent de visage d'une île à l'autre. À Saint-Barthélemy, on dîne les pieds dans le sable après avoir passé la journée au mouillage. À Anguilla, les longues plages blanches restent vides jusqu'au soir. Plus au sud, dans les Grenadines, l'équipage choisit la baie du matin selon le vent qui se lève. Ce sont ces îles-là que nous vous ouvrons, une à une.",
      images: [
        {
          src: "/destination/caraibes/hero-1.png",
          alt: "Voyage dans les Caraïbes : goélette au mouillage devant les Tobago Cays dans les Grenadines",
        },
        {
          src: "/destination/caraibes/hero-2.png",
          alt: "Plage de la baie des Flamands à Saint-Barthélemy en fin de journée",
        },
        {
          src: "/destination/caraibes/hero-3.png",
          alt: "Les Pitons de Sainte-Lucie vus depuis la mer au lever du jour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir dans les Caraïbes ?",
      heading:
        "Carole, spécialiste des Caraïbes, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime dans les Caraïbes, c'est que chaque île y garde son caractère. À Saint-Barthélemy, on retrouve les mêmes visages d'une année sur l'autre et les patrons de restaurant reconnaissent leurs habitués. Dans les Grenadines, le capitaine propose une baie au petit matin et la journée s'invente à partir de là. À Sainte-Lucie, un guide du village raconte sa montagne comme il raconterait sa famille. Je construis ces voyages par la mer, pour que le passage d'une île à l'autre reste un plaisir plutôt qu'un trajet.",
        role: "Travel Designer · Caraïbes",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Caraïbes",
      heading: "Des îles où la journée se décide au matin",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage dans les Caraïbes tient d'abord à la couleur de l'eau au réveil et au vent qui se lève vers le milieu de la matinée. C'est lui qui décide de la baie où l'on se baignera, de la plage où la table sera dressée, et de l'heure à laquelle on rentrera. On croit venir pour le sable, et l'on repart en parlant des gens rencontrés sur un ponton ou au marché.",
        "Les îles ne se ressemblent pas. Saint-Barthélemy vit à la française, avec ses tables tenues par des chefs installés là depuis longtemps et ses anses que l'on rejoint par la mer. Anguilla est plus discrète, presque silencieuse, et l'on y marche sur le sable sans croiser personne. Plus au sud, les Grenadines forment un chapelet de mouillages où l'on navigue de Bequia aux Tobago Cays, tandis que Sainte-Lucie dresse ses Pitons au-dessus de la forêt et de la mer.",
        "Les maisons où nous vous installons ont chacune leur manière de recevoir : une plage de la baie des Flamands où le service se fait oublier, une longue baie blanche d'Anguilla que l'on partage avec très peu de monde, une île entière tenue par une compagnie privée à Mustique. Nous relions ces étapes par la mer autant que possible, et nous laissons de la place à ce que le vent proposera.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/caraibes/full-image.png",
        alt: "Voyage dans les Caraïbes : lagon des Tobago Cays et voiliers au mouillage vus depuis les hauteurs",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Caraïbes : navigation privée et plages désertes",
      heading: "Les journées où l'on choisit sa plage en arrivant",
      theme: "light",
      paragraphs: [
        "Le bateau quitte le mouillage avant que la chaleur ne s'installe. L'équipage sait où l'eau sera calme, quelle anse restera à l'abri, et à quel moment les autres voiliers repartiront. On se baigne d'abord, on déjeune ensuite sur le pont, et l'après-midi passe à l'ombre du taud pendant que l'île défile.",
        "À terre, on retrouve la même liberté. Certaines plages ne s'atteignent qu'à pied ou par la mer, et cela suffit à les garder pour ceux qui font l'effort d'y venir. On y déjeune les pieds dans le sable, avec des poissons apportés du village et grillés sur place, et l'on comprend en repartant que la baie n'a été qu'à nous jusqu'au soir.",
      ],
      images: [
        {
          src: "/destination/caraibes/split-1.png",
          alt: "Table dressée sur une plage déserte de Saint-Barthélemy à l'ombre des arbres",
        },
        {
          src: "/destination/caraibes/split-2.png",
          alt: "Baignade depuis le pont d'une goélette au mouillage dans les Grenadines",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/caraibes/xp-goelette-grenadines-1.png",
          alt: "Goélette privée sous voiles entre Bequia et Mayreau dans les Grenadines",
        },
        right: {
          src: "/destination/caraibes/xp-goelette-grenadines-2.png",
          alt: "Dîner servi sur le pont d'une goélette à l'ancre dans les Tobago Cays",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La goélette privée, de Bequia aux Tobago Cays",
        columns: [
          "La goélette attend à Bequia, équipage à bord, et la journée commence par une conversation avec le capitaine plutôt que par un programme. Il propose une baie selon le vent, on accepte ou l'on préfère celle d'à côté, et l'ancre tombe là où l'eau est la plus claire. Les enfants sautent du pont avant même que le moteur ne soit coupé.",
          "Aux Tobago Cays, la lumière traverse le lagon jusqu'au fond. Les tortues broutent l'herbier sans s'écarter des nageurs, un pêcheur de Mayreau vient proposer sa langouste pour le soir, et le dîner se prend sur le pont, à l'ancre, avec les feux des autres bateaux au loin. Ceux qui ont dormi une nuit ainsi en réclament presque toujours une deuxième.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités dans les Caraïbes",
      heading: "Ce que l'on rapporte de chaque île",
      description:
        "Nous vous emmenons déjeuner sur une anse de Saint-Barthélemy que la route n'atteint pas, suivre à Grenade le cacao depuis l'arbre jusqu'à la tablette, et monter le Gros Piton au lever du jour avec un guide né au pied de la montagne.",
      slugs: [
        "pique-nique-anse-colombier",
        "cacao-belmont-grenade",
        "gros-piton-aube-soufriere",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Dormir face au large, ou sur une île tenue par une seule maison",
      description:
        "Une plage de Saint-Barthélemy où le personnel devance les demandes sans jamais se montrer, une baie d'Anguilla que l'on parcourt le matin sans rencontrer personne, et Mustique, où l'on ne débarque pas par hasard. Nous choisissons chaque étape pour ce que l'on ressent en ouvrant les volets.",
      slugs: [
        "cheval-blanc-st-barth",
        "belmond-cap-juluca",
        "cotton-house-mustique",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage dans les Caraïbes",
      description:
        "Vol, décalage, monnaies, formalités et saisons : de quoi caler les dates avant d'écrire l'itinéraire ensemble.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          // TODO: verify
          description:
            "Air France et Corsair desservent Pointe-à-Pitre en Guadeloupe et Fort-de-France en Martinique en direct depuis Paris, pour environ 8h30 à 9h de vol. Saint-Barthélemy se rejoint ensuite en petit avion depuis Saint-Martin, par Grand Case ou Princess Juliana, ou depuis la Guadeloupe, avec Winair, Air Caraïbes ou Air Antilles selon les périodes. Anguilla se rejoint surtout depuis Sint Maarten, par avion ou par ferry. Pour Sainte-Lucie, la Grenade et les Grenadines, comptez généralement une correspondance, par Londres, Miami ou la Barbade, la desserte évoluant selon les saisons et les compagnies.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Les îles de l'arc caribéen ne changent pas d'heure. Comptez six heures de retard sur la France en été, et cinq heures en hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          // TODO: verify
          description:
            "Saint-Barthélemy et les Antilles françaises utilisent l'euro. Anguilla, Sainte-Lucie, la Grenade et Saint-Vincent-et-les-Grenadines utilisent le dollar des Caraïbes orientales, rattaché au dollar américain, lui-même largement accepté. Les cartes bancaires passent dans les hôtels et les restaurants, et il reste utile de garder des espèces pour les marchés, les taxis et les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify
          description:
            "Saint-Barthélemy est une collectivité française : une carte nationale d'identité ou un passeport en cours de validité suffisent. Pour Anguilla, Sainte-Lucie, la Grenade et Saint-Vincent-et-les-Grenadines, les ressortissants français sont dispensés de visa pour un séjour touristique court, avec un passeport valable au moins six mois au-delà du séjour prévu. Attention aux escales : un transit par les États-Unis impose une autorisation ESTA, à obtenir en ligne avant le départ et généralement valable deux ans ou jusqu'à l'expiration du passeport. Elle s'applique aussi à certaines escales dans les territoires américains, Porto Rico et les Îles Vierges américaines comprises.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          // TODO: verify
          description:
            "Aucune vaccination n'est exigée à l'entrée pour un voyageur arrivant directement de France. La fièvre jaune peut en revanche être demandée si l'on arrive d'un pays où la maladie circule. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille l'hépatite A selon la durée et les conditions du séjour. La dengue, le chikungunya et le zika circulent dans la région selon les années : une protection antimoustiques reste la précaution la plus utile, de jour comme en fin de journée.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche s'étend de décembre à avril, avec un alizé régulier et peu de pluie. Nous privilégions la fin janvier à la mi-avril, quand la mer est belle et les îles retrouvent leur calme. Mai et le début du mois de juin restent agréables et plus tranquilles encore. La saison cyclonique court officiellement de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          // TODO: verify
          description:
            "Le français est la langue de Saint-Barthélemy, où le créole antillais s'entend aussi. L'anglais est la langue officielle d'Anguilla, de Sainte-Lucie, de la Grenade et de Saint-Vincent-et-les-Grenadines. À Sainte-Lucie, le créole saint-lucien, appelé kwéyòl, reste très vivant dans la conversation courante.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et chaud toute l'année, avec des températures qui varient peu, généralement entre vingt-cinq et trente et un degrés. L'alizé souffle presque en continu et rend la chaleur supportable, surtout sur les côtes exposées à l'est. La période la plus humide s'étend de juin à novembre, sans qu'il s'agisse d'une saison des pluies continue : les averses sont tropicales et brèves, le plus souvent en fin de journée. Les îles montagneuses comme Sainte-Lucie et la Grenade reçoivent nettement plus de pluie sur leurs versants intérieurs que les îles basses comme Anguilla.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Caraïbes. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/caraibes/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure dans les Caraïbes entre Saint-Barthélemy, Anguilla et les Grenadines",
            "Adresses confidentielles dans les Caraïbes : plages privées et îles fermées au public",
            "Hébergements dans les Caraïbes : Cheval Blanc St-Barth, Belmond Cap Juluca et Cotton House",
            "Conciergerie privée 24/7 pour un voyage dans les Caraïbes",
            "Expériences immersives dans les Caraïbes : goélette privée dans les Grenadines et cacao de Grenade",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables dans les Caraïbes",
      heading: "Les escales où l'on jette l'ancre",
      description:
        "Chaque île a son vent, ses tables et ses habitudes. Nous composons l'itinéraire pour que chacune arrive au bon moment du séjour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Saint-Barthélemy",
          description:
            "L'île tient dans une poignée d'anses et vit tournée vers la mer. On y dîne très bien, on se baigne à Colombier ou à Gouverneur, et l'on croise à Gustavia les équipages qui préparent la saison.",
          image: {
            src: "/destination/caraibes/map-saint-barthelemy.png",
            alt: "Port de Gustavia à Saint-Barthélemy et anses environnantes",
          },
          // TODO: verify coords
          coordinates: { lat: 17.9, lng: -62.83 },
        },
        {
          title: "Anguilla",
          description:
            "L'île est plate, blanche et discrète, avec des plages qui s'étirent sans fin. On y vient pour le silence du matin, pour les tables de plage tenues par des familles du cru, et pour la mer qui reste calme presque toute la journée.",
          image: {
            src: "/destination/caraibes/map-anguilla.png",
            alt: "Longue plage blanche de Maundays Bay à Anguilla",
          },
          // TODO: verify coords
          coordinates: { lat: 18.22, lng: -63.06 },
        },
        {
          title: "Mustique",
          description:
            "L'île entière appartient à une compagnie privée qui décide de tout, du nombre de maisons à l'entretien des chemins. On s'y déplace en voiturette, on choisit une plage selon l'humeur, et l'on ne rencontre que ceux qui séjournent là.",
          image: {
            src: "/destination/caraibes/map-mustique.png",
            alt: "Maison privée surplombant une plage de Mustique dans les Grenadines",
          },
          // TODO: verify coords
          coordinates: { lat: 12.88, lng: -61.19 },
        },
        {
          title: "Les Tobago Cays",
          description:
            "Cinq îlots inhabités protégés par un récif en fer à cheval, où l'eau passe du turquoise au vert selon le fond. Les tortues y broutent l'herbier toute la journée, et les bateaux repartent avant le soir pour les mouillages voisins.",
          image: {
            src: "/destination/caraibes/map-tobago-cays.png",
            alt: "Lagon des Tobago Cays protégé par le récif Horseshoe, Grenadines",
          },
          // TODO: verify coords
          coordinates: { lat: 12.63, lng: -61.35 },
        },
        {
          title: "Sainte-Lucie et Soufrière",
          description:
            "Les Pitons sortent de la forêt et tombent droit dans la mer, ce qui donne à la côte ouest une allure que l'on n'oublie pas. Soufrière garde ses maisons de bois, ses sources chaudes et ses jardins où poussent le cacao et la muscade.",
          image: {
            src: "/destination/caraibes/map-sainte-lucie.png",
            alt: "Les Pitons de Sainte-Lucie plongeant dans la mer près de Soufrière",
          },
          // TODO: verify coords
          coordinates: { lat: 13.85, lng: -61.06 },
        },
        {
          title: "La Grenade",
          description:
            "On appelle la Grenade l'île aux épices, et l'odeur de la muscade se sent sur les routes de l'intérieur. Les plantations de cacao travaillent encore à l'ancienne, et le marché de Saint-Georges se tient sous les toits de tôle colorée.",
          image: {
            src: "/destination/caraibes/map-grenade.png",
            alt: "Port de Saint-Georges à la Grenade et collines plantées de cacaoyers",
          },
          // TODO: verify coords
          coordinates: { lat: 12.05, lng: -61.75 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage dans les Caraïbes",
      description:
        "Quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne saison et comprendre pourquoi nous vous proposons telle île plutôt qu'une autre.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Choisir ses îles avant de choisir son hôtel",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le nord vit à la française et se dîne dehors, le sud se navigue et se vit pieds nus",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;arc caribéen ne raconte pas la même histoire au nord et
                au sud. Au nord, autour
                de Saint-Barthélemy, de Saint-Martin et d&apos;Anguilla, on
                trouve les meilleures tables de la région, des plages faciles
                d&apos;accès et une vie sociale qui s&apos;organise autour du
                port. Au sud, dans les Grenadines et autour de Sainte-Lucie, tout
                se joue sur l&apos;eau et l&apos;on se déplace en bateau plus
                souvent qu&apos;en voiture.
              </p>
              <p>
                Les deux registres se combinent très bien, à condition de ne pas
                vouloir tout voir. Poser ses valises dans le nord, ou consacrer
                le séjour à la navigation dans le sud, laisse le temps de
                prendre ses habitudes et de revenir à sa plage préférée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous partons de ce que vous cherchez, la table ou le mouillage,
                et nous construisons l&apos;itinéraire à partir de là plutôt que
                depuis une liste d&apos;hôtels.
              </p>
            </div>
          ),
        },
        {
          title: "La saison sèche et l'alizé",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De décembre à avril, le vent est régulier, la mer belle et les averses rares",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison sèche s&apos;étend de décembre à avril. L&apos;alizé
                souffle avec régularité, la mer reste belle sur les côtes
                abritées et les averses se comptent. C&apos;est aussi la période
                où les îles se remplissent, en particulier entre Noël et le début
                du mois de janvier.
              </p>
              <p>
                Nous privilégions la fin janvier à la mi-avril, quand la lumière
                est superbe et que le calme revient. Mai et le début du mois de
                juin gardent la même douceur avec beaucoup moins de monde,
                avant que la saison cyclonique ne s&apos;installe de juin à
                novembre.
              </p>
            </div>
          ),
        },
        {
          title: "Naviguer plutôt que multiplier les hôtels",
          cardEyebrow: "Navigation",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une goélette avec équipage remplace les changements d'hôtel et les transferts entre les îles",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Dans les Grenadines, le bateau est le plus confortable des
                hôtels. On dort dans la même cabine tout le séjour, les bagages
                restent défaits, et l&apos;on change pourtant d&apos;île chaque
                jour. Le cuisinier du bord achète le poisson aux pêcheurs et la
                table se dresse sur le pont.
              </p>
              <p>
                Ceux qui hésitent devant la vie à bord peuvent commencer par
                quelques nuits à terre, à Bequia ou à Mustique, puis embarquer
                ensuite. C&apos;est souvent la formule qui convainc les familles.
              </p>
            </div>
          ),
        },
        {
          title: "Les avions légers et les liaisons par la mer",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On passe d'une île à l'autre en petit appareil ou en vedette privée, avec des bagages souples",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Saint-Barthélemy et Anguilla se rejoignent en avion léger ou en
                vedette depuis Saint-Martin. L&apos;approche de la piste de
                Saint-Jean fait partie des souvenirs du voyage, et les appareils
                n&apos;acceptent que des bagages limités en poids.
              </p>
              <p>
                Plus au sud, les Grenadines se desservent depuis la Barbade ou
                Saint-Vincent, en petit avion puis en bateau. Nous privilégions
                les vedettes privées quand elles existent : le transfert devient
                un moment agréable plutôt qu&apos;une attente en aérogare.
              </p>
            </div>
          ),
        },
        {
          title: "Mustique ne se visite pas à la journée",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île est privée : on y séjourne, et les plages restent réservées à ceux qui y dorment",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mustique appartient à une compagnie privée qui gère l&apos;île
                entière, des maisons aux chemins. Il n&apos;y a ni immeuble ni
                boutique de bord de route, et les plages restent réservées à ceux
                qui séjournent sur place. C&apos;est ce qui donne à l&apos;île
                son calme si particulier.
              </p>
              <p>
                Les maisons privées se louent avec leur équipe, cuisinier et
                gouvernante comprise, et les meilleures se réservent très en
                avance pour la haute saison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons directement avec la compagnie de l&apos;île pour
                les maisons, et nous vous présentons celles qui correspondent
                vraiment à la composition de votre groupe.
              </p>
            </div>
          ),
        },
        {
          title: "Le soleil, les moustiques et la mer",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La protection antimoustiques et une crème solaire compatible avec le récif suffisent presque à tout",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Aucune vaccination n&apos;est exigée pour un voyageur arrivant
                directement de France. La fièvre jaune peut en revanche être
                demandée si l&apos;on arrive d&apos;un pays où la maladie
                circule. L&apos;Institut Pasteur recommande d&apos;être à jour
                du calendrier vaccinal et conseille l&apos;hépatite A selon la
                durée et les conditions du séjour. La dengue, le chikungunya et
                le zika circulent selon les années : une protection
                antimoustiques reste la précaution la plus utile.
              </p>
              <p>
                Le soleil tape fort même par vent frais, et l&apos;on brûle sans
                le sentir sur un pont de bateau. Plusieurs îles demandent une
                crème solaire sans oxybenzone pour préserver le corail : nous
                vous le signalons avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "L'euro au nord, le dollar caribéen au sud",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les cartes passent dans les hôtels et les restaurants, mais les pourboires se donnent en espèces",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Saint-Barthélemy règle en euros. Anguilla, Sainte-Lucie, la
                Grenade et Saint-Vincent-et-les-Grenadines utilisent le dollar
                des Caraïbes orientales, rattaché au dollar américain, lui-même
                largement accepté. Les cartes passent dans les hôtels et les
                restaurants.
              </p>
              <p>
                Il reste utile de garder des espèces pour les marchés, les taxis,
                les pêcheurs qui viennent au bateau et les pourboires, qui se
                donnent de la main à la main. Nous indiquons les usages île par
                île dans le carnet de voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Valise",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Du lin, des chaussures qui ne marquent pas le pont, et une tenue pour les dîners de Saint-Barth",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Des vêtements légers en lin ou en coton, un chapeau qui tient au
                vent, et des lunettes de rechange, parce que la première paire
                finit souvent au fond d&apos;une baie. À bord, on marche pieds
                nus ou en semelles claires qui ne marquent pas le teck.
              </p>
              <p>
                Saint-Barthélemy se change pour dîner, sans cravate mais avec
                soin. Prévoyez aussi un coupe-vent léger pour les traversées du
                soir et un masque personnel : c&apos;est le seul équipement que
                nous conseillons vraiment d&apos;emporter.
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
      cta: { label: "Construire ce voyage", href: "/reserver" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avions prévu une semaine de bateau et nous avons demandé à prolonger dès le troisième jour. Le capitaine trouvait chaque matin une baie que nous n'aurions jamais imaginée.",
          image: {
            src: "/destination/caraibes/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Navigation dans les Grenadines, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nos enfants ont passé leurs journées dans l'eau et nous avons dîné le soir sans jamais penser à l'organisation. C'est la première fois que nous rentrons vraiment reposés.",
          image: {
            src: "/destination/caraibes/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Saint-Barthélemy et Anguilla en famille, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le déjeuner sur la plage de Colombier restera notre meilleur souvenir. Nous étions seuls, la table était dressée, et personne n'est venu de toute l'après-midi.",
          image: {
            src: "/destination/caraibes/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Saint-Barthélemy, 2025", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir dans les Caraïbes ?",
          answer:
            "La saison sèche s'étend de décembre à avril, avec un alizé régulier et peu de pluie. Nous privilégions la fin janvier à la mi-avril, quand la mer est belle et que le calme revient après les fêtes. Mai et le début du mois de juin restent agréables et plus tranquilles encore. La saison cyclonique court officiellement de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Air France et Corsair desservent Pointe-à-Pitre en Guadeloupe et Fort-de-France en Martinique en direct depuis Paris, pour environ 8h30 à 9h de vol. Saint-Barthélemy se rejoint ensuite en petit avion depuis Saint-Martin, par Grand Case ou Princess Juliana, ou depuis la Guadeloupe, avec Winair, Air Caraïbes ou Air Antilles selon les périodes. Anguilla se rejoint surtout depuis Sint Maarten, par avion ou par ferry. Pour Sainte-Lucie, la Grenade et les Grenadines, comptez généralement une correspondance, par Londres, Miami ou la Barbade, la desserte évoluant selon les saisons et les compagnies.",
        },
        {
          question: "Faut-il un visa pour aller dans les Caraïbes ?",
          answer:
            "Cela dépend de l'île. Saint-Barthélemy est une collectivité française : une carte nationale d'identité ou un passeport en cours de validité suffisent. Pour Anguilla, Sainte-Lucie, la Grenade et Saint-Vincent-et-les-Grenadines, les ressortissants français sont dispensés de visa pour un séjour touristique court, avec un passeport valable au moins six mois au-delà du séjour prévu. Si votre itinéraire comprend un transit par les États-Unis, l'autorisation ESTA est obligatoire et s'obtient en ligne avant le départ. Elle s'applique également à certaines escales dans les territoires américains, Porto Rico et les Îles Vierges américaines comprises : c'est la formalité que l'on oublie le plus souvent.",
        },
        {
          question: "Quelles îles des Caraïbes visiter en deux semaines ?",
          answer:
            "Un premier séjour se construit bien en deux temps. On commence par le nord, avec Saint-Barthélemy pour les tables et les anses, puis Anguilla pour ses longues plages blanches, en passant d'une île à l'autre par la mer. La seconde partie se joue plus au sud, à bord d'une goélette qui descend de Bequia aux Tobago Cays, avec une escale à Mustique. Ceux qui préfèrent la terre remplacent la navigation par Sainte-Lucie et la Grenade, pour les Pitons et les plantations de cacao.",
        },
        {
          question: "Les Caraïbes sont-elles adaptées aux familles ?",
          answer:
            "Oui, et c'est même l'une des régions les plus faciles à vivre avec des enfants d'âges différents. La mer reste chaude et calme sur les côtes abritées, les hôtels de Saint-Barthélemy et d'Anguilla proposent des villas de plage où chacun garde son espace, et la vie à bord d'une goélette avec équipage plaît beaucoup aux adolescents. Nous limitons le nombre d'étapes avec de jeunes enfants et nous plaçons les traversées aux heures où la mer est la plus douce.",
        },
        {
          question: "Quel budget prévoir pour un voyage dans les Caraïbes ?",
          answer:
            "Le budget dépend surtout des maisons choisies, de la saison et de la place donnée à la navigation. Saint-Barthélemy et Mustique en pleine saison sèche se situent en haut de la gamme, tandis qu'un itinéraire autour de Sainte-Lucie et de la Grenade reste plus mesuré. Une goélette privée avec équipage se chiffre à la semaine et selon la taille du bateau. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "L'archipel voisin où l'on navigue de cay en cay, la côte caraïbe du Mexique quand on veut y ajouter des ruines et des cenotes, et l'océan Indien pour ceux qui cherchent la même eau plus loin.",
      slugs: ["bahamas", "mexique", "seychelles"],
    },
  ],
};
