import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "sainte-lucie",
  name: "Sainte-Lucie",
  placeKind: "region",
  country: "Caraïbes",
  genitive: "de Sainte-Lucie",
  continentSlug: "caraibes",
  blurb: "Les Pitons, Soufrière, la baie de Marigot",
  keywords: [
    "sainte-lucie",
    "pitons",
    "soufriere",
    "marigot",
    "anse chastanet",
    "castries",
    "caraibes",
    "antilles",
  ],
  metaTitle: "Sainte-Lucie : Voyage sur mesure",
  metaDescription:
    "Voyage à Sainte-Lucie sur mesure : les Pitons de Soufrière, la baie de Marigot et l'Anse Chastanet. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Sainte-Lucie",
      heading: "Sainte-Lucie, des Pitons de Soufrière à la baie de Marigot",
      description:
        "Sainte-Lucie se reconnaît de loin, à ces deux montagnes qui sortent de la mer au-dessus de Soufrière. L'île est verte jusqu'au bord de l'eau, et la forêt descend si près des baies qu'on l'entend depuis le bateau. On passe la journée au mouillage, on remonte dîner au-dessus de la vallée, et l'on s'endort avec le bruit de la pluie sur les feuilles. C'est cette île-là que nous vous ouvrons.",
      images: [
        {
          src: "/destination/sainte-lucie/hero-1.png",
          alt: "Voyage à Sainte-Lucie : le Gros Piton et le Petit Piton vus depuis la mer",
        },
        {
          src: "/destination/sainte-lucie/hero-2.png",
          alt: "La baie de Marigot et sa langue de sable plantée de cocotiers",
        },
        {
          src: "/destination/sainte-lucie/hero-3.png",
          alt: "Barques de pêche tirées sur le sable devant le village de Soufrière",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Sainte-Lucie ?",
      heading: "Carole, spécialiste de Sainte-Lucie, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Sainte-Lucie ne ressemble pas à l'idée qu'on se fait des Antilles. Mes voyageurs partent pour la mer et me rappellent au retour en me parlant de la forêt, des sources chaudes et du guide qui les a emmenés au Gros Piton avant le jour. Je garde toujours une matinée dans la montagne et l'après-midi dans l'eau, parce que c'est là que l'île est la plus belle.",
        role: "Travel Designer · Sainte-Lucie",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de Sainte-Lucie",
      heading: "La côte ouest, de Castries à l'Anse Chastanet",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Sainte-Lucie commence presque toujours par la côte ouest, celle qui regarde la mer des Caraïbes. C'est là que se trouvent Soufrière et ses deux Pitons, la baie de Marigot cachée derrière sa langue de sable, et les anses où l'eau reste calme du matin jusqu'au soir. La route qui les relie serpente au-dessus de la mer, et l'on s'arrête souvent sans l'avoir prévu.",
        "Ce qui étonne, c'est tout ce qui se passe dès que l'on quitte le rivage. La forêt commence juste derrière les villages, avec ses cacaoyers, ses manguiers et ses sources qui fument au pied du volcan. Sur le marché de Soufrière, on achète la banane verte et le poisson du matin. Les cuisiniers de l'île le passent au feu de bois et le servent avec des racines et du lait de coco.",
        "Les maisons où nous vous installons regardent toutes les Pitons, chacune à sa manière. L'une s'ouvre en grand sur la vallée depuis les hauteurs, une autre se glisse dans une ancienne plantation au bord de la plage, la troisième descend vers l'eau au milieu des arbres. Nous les choisissons pour la vue du réveil, et pour ce que l'on a envie de faire juste après.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/sainte-lucie/full-image.png",
        alt: "Voyage à Sainte-Lucie : la baie de Soufrière fermée par les deux Pitons",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La forêt et les sources chaudes",
      heading: "Les matins où l'on monte vers la forêt de Soufrière",
      theme: "light",
      paragraphs: [
        "La forêt commence là où les jardins finissent, et il suffit de monter un peu au-dessus de Soufrière pour y entrer. Les cacaoyers poussent à l'ombre des grands arbres, les colibris passent d'une fleur à l'autre, et l'on entend l'eau bien avant de voir la cascade. Les sources chaudes qui sortent au pied du volcan sentent le soufre et fument dans la lumière du matin.",
        "On redescend en fin de matinée, la peau encore tiède, pour déjeuner face à la mer et passer l'après-midi dans l'eau. Et le soir, quand la pluie se met à tomber sur les feuilles pendant qu'on est encore à table, on comprend pourquoi les voyageurs quittent cette île à regret.",
      ],
      images: [
        {
          src: "/destination/sainte-lucie/split-1.png",
          alt: "Cascade au milieu de la forêt tropicale au-dessus de Soufrière à Sainte-Lucie",
        },
        {
          src: "/destination/sainte-lucie/split-2.png",
          alt: "Bassin d'eau chaude fumant au pied du volcan de Soufrière",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/sainte-lucie/xp-croisiere-pitons-1.png",
          alt: "Voilier au mouillage entre le Gros Piton et le Petit Piton à Sainte-Lucie",
        },
        right: {
          src: "/destination/sainte-lucie/xp-croisiere-pitons-2.png",
          alt: "Baignade au-dessus du récif dans la baie de Sugar Beach au coucher du soleil",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La croisière au coucher du soleil devant les Pitons",
        columns: [
          "Le bateau quitte la côte en fin d'après-midi, quand la chaleur tombe et que la mer devient lisse. On longe les villages de pêcheurs, on passe devant les cocotiers de l'Anse Chastanet, et les Pitons grandissent peu à peu devant nous. Le mouillage se fait dans la baie de Sugar Beach, entre les deux montagnes.",
          "On se baigne là, au-dessus du récif protégé, pendant que le soleil descend derrière la pointe. L'eau est claire et le corail commence tout près du bord. Puis on remonte à bord pour regarder la lumière changer sur la baie de Marigot, un verre à la main, avant de rentrer à la nuit tombée. C'est la sortie que nos voyageurs redemandent le plus souvent.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Sainte-Lucie",
      heading: "Monter au Gros Piton avant le jour, ou survoler la côte ouest",
      description:
        "Nous vous emmenons gravir le Gros Piton avec un guide du village, suivre la fève de cacao jusqu'à la tablette au-dessus de Soufrière, et découvrir l'île depuis un hélicoptère privé.",
      slugs: [
        "gros-piton-aube-soufriere",
        "arbre-au-chocolat-soufriere",
        "helicoptere-prive-sainte-lucie",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Dormir face aux Pitons, ou dans la plantation au bord de l'eau",
      description:
        "Une chambre ouverte en grand sur la vallée, une ancienne plantation qui descend jusqu'au sable entre les deux montagnes, et une maison posée sur les hauteurs de Soufrière. Chacune regarde les Pitons à sa façon, et nous les proposons selon la manière dont vous aimez passer vos journées.",
      slugs: ["jade-mountain", "sugar-beach-viceroy", "ladera"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Sainte-Lucie",
      description:
        "Voici les repères pratiques à réunir avant de choisir vos dates : le vol, les formalités, la monnaie et les saisons.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Sainte-Lucie se rejoint généralement avec une correspondance. Par Londres, British Airways dessert l'aéroport international Hewanorra depuis Gatwick et Virgin Atlantic depuis Londres, pour environ 9 heures de vol. Par les Antilles françaises, Air France, Air Caraïbes et Corsair desservent Fort-de-France et Pointe-à-Pitre en direct depuis Paris, pour environ 8h30, l'île se rejoignant ensuite en avion régional ou par la mer. Comptez au total environ 12 à 15 heures de trajet depuis Paris, selon l'escale retenue.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Sainte-Lucie ne change pas d'heure. Comptez six heures de retard sur la France en été et cinq heures en hiver : quand il est quatorze heures à Paris en juillet, il est huit heures à Castries.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est le dollar des Caraïbes orientales, dont la valeur est arrimée au dollar américain. Ce dernier est largement accepté sur l'île, à un taux fixé par le commerçant. Les cartes bancaires passent très largement dans les hôtels, les restaurants et les boutiques, et il reste utile de garder un peu d'espèces pour les taxis, le marché et les petites tables de plage.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          // TODO: verify la durée du séjour sans visa et les conditions de la déclaration en ligne
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique à Sainte-Lucie, dans la limite de quarante-deux jours, soit six semaines. Les voyageurs arrivant par avion sont invités à remplir le formulaire d'immigration et de douane en ligne, jusqu'à trois jours avant le départ ou à l'arrivée : c'est la formalité que l'on oublie le plus souvent. Le passeport doit être valide pendant toute la durée du séjour. Les Français arrivant directement de France, de Martinique ou de Guadeloupe peuvent entrer avec une carte nationale d'identité en cours de validité, mais le passeport reste conseillé dès que l'itinéraire comporte une correspondance internationale. Si l'itinéraire passe par le Royaume-Uni, l'autorisation électronique ETA peut être requise et s'obtient en ligne avant le départ, les passagers restant en transit sans passer l'immigration pouvant en être dispensés. S'il transite par les États-Unis, l'autorisation ESTA est obligatoire, s'obtient également en ligne et reste généralement valable deux ans ou jusqu'à l'expiration du passeport.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Depuis la France, aucune vaccination spécifique n'est exigée pour un séjour touristique à Sainte-Lucie. Il est recommandé d'être à jour des vaccinations prévues au calendrier vaccinal français, l'Institut Pasteur recommandant par ailleurs l'hépatite A. Un certificat de vaccination contre la fièvre jaune peut être demandé aux voyageurs arrivant d'un pays où la maladie circule. La dengue et le chikungunya circulent dans les Antilles selon les années : une protection contre les moustiques reste la précaution la plus utile, en journée comme en fin d'après-midi.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison la plus sèche s'étend de décembre à avril, avec un alizé régulier et peu de pluie. Nous privilégions février à avril, quand la mer est belle sur la côte ouest et que la forêt garde encore sa fraîcheur. Mai reste intéressant, avec moins de monde sur l'île, mais il marque la transition vers la saison humide. Celle-ci s'accompagne de la saison cyclonique, de juin à novembre, avec un cœur d'activité en août, septembre et octobre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue officielle et celle de l'administration. Le kwéyòl, créole à base lexicale française, se parle au quotidien dans une grande partie de l'île, en particulier dans les villages de la côte et de l'intérieur. Les noms de lieux gardent la trace des deux histoires, française et britannique.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et chaud toute l'année, avec des températures qui varient peu, généralement entre vingt-trois et trente et un degrés. L'alizé souffle presque en continu et rend la chaleur supportable, surtout sur la côte au vent. La période la plus humide s'étend de juin à novembre, sans qu'il s'agisse d'une pluie continue : les averses sont tropicales et brèves. L'intérieur montagneux reçoit davantage de pluie que les côtes, et c'est ce qui explique la densité de la forêt.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Sainte-Lucie. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/sainte-lucie/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à Sainte-Lucie entre Soufrière, Marigot et la baie de Rodney",
            "Adresses confidentielles à Sainte-Lucie : tables de chefs et plantations de cacao",
            "Hébergements à Sainte-Lucie : Jade Mountain, Sugar Beach et Ladera",
            "Conciergerie privée 24/7 pour un séjour à Sainte-Lucie",
            "Expériences à Sainte-Lucie : croisière devant les Pitons et montée du Gros Piton",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Sainte-Lucie",
      heading: "De Soufrière à la baie de Rodney",
      description:
        "L'île se découvre par petites boucles, entre la mer et la montagne, et chaque endroit a son heure. Nous plaçons les journées pour que chacune arrive au bon moment du séjour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 10,
      places: [
        {
          title: "Soufrière et les Pitons",
          description:
            "Le village est posé au fond d'une baie que ferment le Gros Piton et le Petit Piton, classés au patrimoine mondial. Les maisons de bois descendent jusqu'au quai, le marché ouvre tôt, et les deux montagnes changent de couleur à chaque heure de la journée.",
          image: {
            src: "/destination/sainte-lucie/map-soufriere-pitons.png",
            alt: "Le village de Soufrière au pied du Petit Piton à Sainte-Lucie",
          },
          // TODO: verify coords
          coordinates: { lat: 13.8566, lng: -61.0564 },
        },
        {
          title: "La baie de Marigot",
          description:
            "Une langue de sable plantée de cocotiers referme presque entièrement la baie, si bien qu'on ne la devine pas depuis la route. Les voiliers viennent s'y abriter, l'eau y reste immobile, et les tables du bord se remplissent au coucher du soleil.",
          image: {
            src: "/destination/sainte-lucie/map-marigot.png",
            alt: "La baie de Marigot et ses voiliers abrités derrière la langue de sable",
          },
          // TODO: verify coords
          coordinates: { lat: 13.9667, lng: -61.0233 },
        },
        {
          title: "L'Anse Chastanet",
          description:
            "La plage est bordée de forêt et le récif commence à quelques mètres du rivage, ce qui en fait le plus beau spot de plongée de l'île. On y nage sans bateau, au-dessus des coraux, et l'on remonte déjeuner à l'ombre des grands arbres.",
          image: {
            src: "/destination/sainte-lucie/map-anse-chastanet.png",
            alt: "La plage de l'Anse Chastanet et sa forêt à Sainte-Lucie",
          },
          // TODO: verify coords
          coordinates: { lat: 13.8747, lng: -61.0714 },
        },
        {
          title: "Les sources de soufre",
          description:
            "On entre en voiture dans le cratère du volcan, au milieu des fumerolles et des bassins qui bouillonnent. Un peu plus bas, les sources chaudes forment des bains où l'on s'enduit de boue grise avant de se rincer sous la cascade.",
          image: {
            src: "/destination/sainte-lucie/map-sources-soufre.png",
            alt: "Fumerolles et bassins bouillonnants des sources de soufre de Soufrière",
          },
          // TODO: verify coords
          coordinates: { lat: 13.8353, lng: -61.0464 },
        },
        {
          title: "Castries et le morne Fortune",
          description:
            "La capitale s'organise autour de son port et de son marché couvert, où l'on trouve les épices, le cacao et les paniers tressés. Au-dessus, les hauteurs du morne Fortune gardent les traces des batailles entre Français et Anglais, avec la vue sur toute la baie.",
          image: {
            src: "/destination/sainte-lucie/map-castries.png",
            alt: "Le marché couvert de Castries et son port à Sainte-Lucie",
          },
          // TODO: verify coords
          coordinates: { lat: 14.0101, lng: -60.9875 },
        },
        {
          title: "Pigeon Island et la baie de Rodney",
          description:
            "L'ancienne île fortifiée est rattachée à la côte par une digue, et l'on monte à pied jusqu'aux ruines du fort. De là-haut, la baie de Rodney s'ouvre en entier, avec la Martinique qui se dessine au loin par temps clair.",
          image: {
            src: "/destination/sainte-lucie/map-pigeon-island.png",
            alt: "Les ruines du fort de Pigeon Island au-dessus de la baie de Rodney",
          },
          // TODO: verify coords
          coordinates: { lat: 14.0847, lng: -60.9531 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Sainte-Lucie",
      description:
        "Voici quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne semaine et comprendre comment l'île se vit une fois sur place.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Choisir son aéroport d'arrivée",
          cardEyebrow: "Arrivée",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'île compte deux aéroports, et ils ne conviennent pas aux mêmes séjours",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les vols venus d&apos;Europe et d&apos;Amérique du Nord se
                posent à Hewanorra, au sud de l&apos;île, tandis que les avions
                régionaux venus de la Martinique ou de la Guadeloupe atterrissent
                à Castries, au nord. Le choix change la façon dont commence le
                séjour, selon que la maison réservée se trouve du côté de
                Soufrière ou du côté de la baie de Rodney.
              </p>
              <p>
                Le transfert peut se faire par la route, en hélicoptère ou par
                la mer. La traversée en bateau vers Soufrière est la plus
                agréable des trois, et beaucoup de nos voyageurs la gardent
                ensuite pour repartir.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons le vol, le transfert et l&apos;accueil à
                l&apos;arrivée, et nous suivons les correspondances le jour même.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir, et quand l'île se remplit",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison la plus sèche va de décembre à avril, et nous privilégions la fin de l'hiver",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison la plus sèche s&apos;étend de décembre à avril, avec
                un alizé régulier et peu de pluie. Nous privilégions février à
                avril, quand la mer est belle sur la côte ouest et que la forêt
                garde encore sa fraîcheur. Mai reste intéressant, avec moins de
                monde sur l&apos;île, mais il marque la transition vers la
                saison humide.
              </p>
              <p>
                Entre Noël et les premiers jours de janvier, les maisons de
                Soufrière se réservent très en avance. La saison cyclonique court
                officiellement de juin à novembre, avec un cœur d&apos;activité
                en août, septembre et octobre.
              </p>
            </div>
          ),
        },
        {
          title: "La côte des Caraïbes et la côte au vent",
          cardEyebrow: "Plages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'ouest se nage toute l'année, l'est se regarde depuis la terre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La côte ouest, celle des Caraïbes, est la côte de la baignade :
                l&apos;eau y reste calme, les anses sont abritées et le récif
                commence près du bord à l&apos;Anse Chastanet. C&apos;est là que
                se trouvent les maisons dans lesquelles nous vous installons.
              </p>
              <p>
                La côte est, exposée à l&apos;Atlantique, a un tout autre
                caractère : la houle y arrive de loin, les falaises et les
                cocoteraies s&apos;étendent sans une construction, et les
                paysages sont magnifiques. On y va pour la vue et pour la
                promenade, plutôt que pour se baigner.
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer d'une baie à l'autre",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un chauffeur pour la montagne, un bateau pour le bord de mer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les routes de l&apos;intérieur sont étroites et pentues, avec
                des virages qui s&apos;ouvrent d&apos;un coup sur la mer. Le chauffeur privé est la solution la plus
                confortable, d&apos;autant qu&apos;il connaît les arrêts qui
                valent le détour et les stands de fruits du bord de route.
              </p>
              <p>
                Pour longer la côte ouest, le bateau reste le plus beau moyen de
                passer d&apos;une baie à l&apos;autre. On rejoint Soufrière par
                la mer, on s&apos;arrête nager en chemin, et l&apos;on arrive au
                pied des Pitons.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons le chauffeur et le bateau avant votre arrivée, les
                deux se prenant longtemps à l&apos;avance en haute saison.
              </p>
            </div>
          ),
        },
        {
          title: "Le bain de boue et les sources chaudes",
          cardEyebrow: "Sources",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Prévoyez un maillot que le soufre peut marquer définitivement",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les bains du volcan sont l&apos;un des grands plaisirs de
                Soufrière : l&apos;eau y sort chaude, on s&apos;enduit de boue
                grise, on laisse sécher au soleil puis on se rince sous la
                cascade. La peau en ressort douce et l&apos;odeur de soufre part
                à la douche suivante.
              </p>
              <p>
                Le soufre tache les tissus clairs et attaque les bijoux : gardez
                un maillot foncé pour l&apos;occasion et laissez les bagues à la
                maison. Le matin est le meilleur moment, avant que les cars
                n&apos;arrivent et quand la vapeur monte encore dans la lumière.
              </p>
            </div>
          ),
        },
        {
          title: "Venir avec des enfants",
          cardEyebrow: "Famille",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La plage de Sugar Beach et le récif de l'Anse Chastanet occupent les journées",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sainte-Lucie se vit très bien en famille. La plage de Sugar
                Beach, entre les deux Pitons, est calme et peu profonde près du
                bord, et le récif de l&apos;Anse Chastanet se découvre avec un
                simple masque. Les plus grands prennent goût aux sorties en
                bateau et au kayak dans les anses.
              </p>
              <p>
                La plantation de cacao plaît à tous les âges, parce que l&apos;on
                y fabrique sa propre tablette et qu&apos;on la rapporte. Nous
                gardons la montagne pour le matin, quand il fait encore frais,
                et laissons les après-midi libres.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des chaussures fermées pour la forêt, une tenue légère pour les dîners",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les journées se passent en maillot et en tenue légère, et les
                soirées restent simples, un peu plus habillées dans les maisons
                de Soufrière. Une veste fine suffit pour les dîners en hauteur,
                où l&apos;air devient plus frais dès que le soleil est couché.
              </p>
              <p>
                Prévoyez des chaussures fermées pour la montée du Gros Piton et
                les sentiers de la forêt, une protection solaire élevée, une
                protection contre les moustiques pour la fin de journée, et un
                vêtement de pluie léger : les averses sont brèves mais elles
                arrivent vite.
              </p>
            </div>
          ),
        },
        {
          title: "Le carnaval et le festival de musique",
          cardEyebrow: "Agenda",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le printemps amène la musique, l'été amène le carnaval",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le festival de jazz et des arts de Sainte-Lucie se tient au
                printemps et fait jouer les scènes du nord de l&apos;île comme
                celles de Pigeon Island. C&apos;est un très beau moment pour
                venir, à condition de réserver la maison et les tables assez
                tôt.
              </p>
              <p>
                Le carnaval, lui, se tient en été, avec ses costumes et ses
                défilés dans les rues de Castries. Ceux qui préfèrent le calme
                choisiront février ou le début du mois de mars, quand la lumière
                est aussi belle et que l&apos;île respire.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous donnons les dates exactes de l&apos;année en cours et
                nous organisons, si vous le souhaitez, les places et les
                transferts pour les soirées.
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
            "Nous avons fait la sortie en bateau devant les Pitons le premier soir, et nous l'avons refaite la veille du départ. Le skipper nous attendait chaque matin avec une idée différente.",
          image: {
            src: "/destination/sainte-lucie/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Sainte-Lucie, mars 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Les enfants ont passé la semaine entre la plage et le récif, et ils sont rentrés avec les tablettes de chocolat qu'ils avaient fabriquées eux-mêmes. Nous n'avons eu à nous occuper de rien.",
          image: {
            src: "/destination/sainte-lucie/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Sainte-Lucie en famille, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La montée du Gros Piton au lever du jour restera notre meilleur souvenir. Nous avons pris le petit déjeuner à Soufrière en redescendant, et la journée n'avait pas encore commencé pour les autres.",
          image: {
            src: "/destination/sainte-lucie/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Sainte-Lucie, avril 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à Sainte-Lucie ?",
          answer:
            "La saison la plus sèche s'étend de décembre à avril, avec un alizé régulier et peu de pluie. Nous privilégions février à avril, quand la mer est belle sur la côte ouest et que la forêt garde encore sa fraîcheur. Mai reste intéressant, avec moins de monde sur l'île, mais il marque la transition vers la saison humide, qui s'accompagne de la saison cyclonique de juin à novembre, avec un cœur d'activité en août, septembre et octobre. Sachez aussi que les maisons de Soufrière sont au complet entre Noël et les premiers jours de janvier, et que l'île est très animée pendant le festival de jazz au printemps.",
        },
        {
          question: "Comment se rendre à Sainte-Lucie depuis Paris ?",
          answer:
            "Sainte-Lucie se rejoint généralement avec une correspondance. Par Londres, British Airways dessert l'aéroport international Hewanorra depuis Gatwick et Virgin Atlantic depuis Londres, pour environ 9 heures de vol. Par les Antilles françaises, Air France, Air Caraïbes et Corsair desservent Fort-de-France et Pointe-à-Pitre en direct depuis Paris, pour environ 8h30, l'île se rejoignant ensuite en avion régional ou par la mer. Comptez au total environ 12 à 15 heures de trajet depuis Paris, selon l'escale retenue. Nous laissons de la marge entre le long-courrier et ce dernier tronçon, et nous organisons le transfert vers la maison, par la route, en hélicoptère ou par la mer.",
        },
        {
          question: "Faut-il un visa pour aller à Sainte-Lucie ?",
          answer:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique à Sainte-Lucie, dans la limite de quarante-deux jours, soit six semaines. Les voyageurs arrivant par avion sont invités à remplir le formulaire d'immigration et de douane en ligne, jusqu'à trois jours avant le départ ou à l'arrivée : c'est la formalité que l'on oublie le plus souvent. Le passeport doit être valide pendant toute la durée du séjour. Les Français arrivant directement de France, de Martinique ou de Guadeloupe peuvent entrer avec une carte nationale d'identité en cours de validité, mais le passeport reste conseillé dès que l'itinéraire comporte une correspondance internationale. Si votre itinéraire passe par le Royaume-Uni, l'autorisation électronique ETA peut être requise et s'obtient en ligne avant le départ, les passagers restant en transit sans passer l'immigration pouvant en être dispensés ; s'il transite par les États-Unis, c'est l'autorisation ESTA qui s'applique, valable généralement deux ans ou jusqu'à l'expiration du passeport.",
        },
        {
          question: "Que faire à Sainte-Lucie en une semaine ?",
          answer:
            "Une semaine laisse le temps d'alterner la mer et la montagne sans se presser. On garde deux ou trois journées en bateau, dont la croisière du soir devant les Pitons et une matinée de plongée au récif de l'Anse Chastanet. Les autres journées se passent entre la montée du Gros Piton au lever du jour, les bains de soufre et la cascade au-dessus de Soufrière, la plantation de cacao où l'on fabrique sa tablette, et le marché de Castries. Ceux qui veulent voir l'île en entier ajoutent un vol en hélicoptère, qui donne la côte ouest, les Pitons et la forêt en une seule fois.",
        },
        {
          question: "Sainte-Lucie est-elle adaptée aux familles ?",
          answer:
            "Oui, et c'est l'une des îles les plus faciles à vivre avec des enfants d'âges différents. La plage de Sugar Beach, entre les deux Pitons, est calme et peu profonde près du bord, et le récif de l'Anse Chastanet se découvre avec un simple masque, sans bateau. La plantation de cacao plaît à tous les âges puisque l'on y fabrique sa propre tablette. Les maisons que nous proposons ont des villas familiales avec service, et nous gardons la montagne pour le matin, quand il fait encore frais.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Sainte-Lucie ?",
          answer:
            "Le budget dépend surtout de la maison choisie, de la saison et de la place donnée aux journées en mer. La période des fêtes et celle du festival de printemps se situent en haut de la gamme, tandis que février et le mois de mai restent plus mesurés à confort égal. Une chambre ouverte sur la vallée, une villa dans la plantation ou un bateau à la journée ne se chiffrent pas de la même façon. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "On remonte vers la région entière quand on veut relier plusieurs îles par la mer, on continue vers Saint-Vincent et les Grenadines pour naviguer d'un mouillage à l'autre, et l'on part au Costa Rica quand on a aimé la forêt et les volcans autant que les plages.",
      slugs: ["caraibes", "saint-vincent-et-les-grenadines", "costa-rica"],
    },
  ],
};
