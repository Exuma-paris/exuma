import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "inde",
  name: "Inde",
  placeKind: "country",
  country: "Inde",
  genitive: "de l'Inde",
  continentSlug: "asie",
  blurb: "Delhi, Agra, Rajasthan, Varanasi, Kerala",
  keywords: [
    "inde",
    "rajasthan",
    "delhi",
    "agra",
    "taj mahal",
    "varanasi",
    "udaipur",
    "kerala",
  ],
  metaTitle: "Inde : Voyage sur mesure",
  metaDescription:
    "Voyage en Inde sur mesure : Delhi, le Taj Mahal, les forts du Rajasthan, les ghats de Varanasi et le Kerala. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Inde",
      heading: "L'Inde, des forts du Rajasthan aux ghats de Varanasi",
      description:
        "L'Inde ne se traverse pas d'un bloc, et c'est tant mieux. On y suit un fil, celui des cours intérieures du Rajasthan, des marches de Varanasi où le fleuve donne l'heure, des canaux du Kerala et de cette façade de Mumbai qui regarde la mer d'Arabie. Entre deux étapes, il y a toujours un atelier qui entrouvre sa porte, une famille qui met un couvert de plus, un palais que ses propriétaires habitent encore et qu'ils vous montrent eux-mêmes. C'est cette Inde qui reçoit que nous vous faisons découvrir, étape par étape.",
      images: [
        {
          src: "/destination/inde/hero-1.png",
          alt: "Ghats de Varanasi et barques sur le Gange au lever du jour, voyage en Inde",
        },
        {
          src: "/destination/inde/hero-2.png",
          alt: "Cour intérieure d'un fort du Rajasthan dans la lumière de fin d'après-midi",
        },
        {
          src: "/destination/inde/hero-3.png",
          alt: "Femmes en sari traversant une ruelle de la vieille ville de Jaipur au petit matin",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Inde ?",
      heading: "Stéphane, spécialiste de l'Inde, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "L'Inde a cette générosité de laisser plusieurs voyages tenir dans un seul. On remonte le Gange à l'heure où Varanasi s'éveille, on dîne quelques jours plus tard à la table d'une famille qui habite son fort depuis des générations, et l'on se réveille enfin dans une vallée du Rajasthan que rien ne vient troubler. J'aime la faire découvrir par ses maisons autant que par ses monuments, car ce sont elles qui décident du souvenir que l'on rapporte.",
        role: "Travel Designer · Inde",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Inde",
      heading: "Un pays qui se visite par étapes, jamais d'un seul geste",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage en Inde se prépare un peu comme on prépare une rencontre. Le pays est immense et généreux, et l'on n'a pas besoin de le parcourir en entier pour s'y sentir chez soi : trois ou quatre étapes, reliées par des vols courts, laissent tout le temps de s'attarder là où l'on se sent bien. Ce que l'on garde pour plus tard devient, presque toujours, la raison d'un prochain départ.",
        "Le chemin le plus connu passe par Delhi, Agra et le Rajasthan, et il garde tout son charme quand on le prend un peu de côté. On traverse Old Delhi au petit matin avec un historien qui raconte sa ville comme il raconterait sa famille. On regarde le Taj Mahal depuis la rive opposée de la Yamuna, quand la lumière est encore douce et que les perroquets font plus de bruit que les visiteurs. À Jaipur, ce sont les propriétaires eux-mêmes qui ouvrent les portes de leurs havelis, et l'on y reste toujours plus longtemps que prévu.",
        "Il y a ensuite les Indes que l'on ajoute au fil de l'envie. Varanasi, où l'on prend le thé sur les marches en regardant la ville s'éveiller au bord du fleuve. Udaipur, où une famille peint encore à la surface de l'eau et vous laisse volontiers essayer. Le Kerala se traverse plus lentement, entre ses canaux et ses cuisines qui sentent la noix de coco et le poisson grillé. Nous écrivons la suite avec vous, selon ce que vous avez envie de rapporter.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/inde/full-image.png",
        alt: "Le Taj Mahal vu depuis la rive de la Yamuna au lever du jour, voyage en Inde",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Inde : l'art de recevoir",
      heading: "Des palais encore habités, et des maisons qui reçoivent",
      theme: "light",
      paragraphs: [
        "En Inde, beaucoup de grandes demeures n'ont jamais cessé d'être des maisons. À Maheshwar, le fort qui domine la Narmada appartient toujours aux descendants d'Ahilyabai Holkar, et l'on y dîne à la table de la famille. À Jaipur comme à Hyderabad, des palais ouvrent quelques chambres et gardent le reste pour eux. La différence se sent au premier soir : on est reçu, pas enregistré.",
        "Cela change la nature des rencontres. Un maître tisserand de Varanasi sort ses soies parce qu'un ami commun l'a demandé. Une famille d'Udaipur montre les pochoirs du Jal Sanjhi qu'elle conserve depuis des générations. À Kochi, des descendants de la lignée royale reçoivent pour le thé dans leur quartier. Ce ne sont pas des visites au programme, ce sont des portes que quelqu'un a fait ouvrir.",
      ],
      images: [
        {
          src: "/destination/inde/split-1.png",
          alt: "Maître tisserand de Varanasi au travail sur son métier à tisser la soie",
        },
        {
          src: "/destination/inde/split-2.png",
          alt: "Table dressée dans la cour d'un fort au bord de la Narmada à Maheshwar",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/inde/xp-gange-1.png",
          alt: "Barque privée glissant devant les ghats de Varanasi à l'aube",
        },
        right: {
          src: "/destination/inde/xp-gange-2.png",
          alt: "Joueur de tabla assis à l'avant d'une barque sur le Gange au lever du soleil",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le Gange avant que la ville se réveille",
        columns: [
          "À Varanasi, la journée ne commence pas à la même heure pour tout le monde. Les premiers fidèles descendent aux ghats quand il fait encore nuit, et le fleuve reste lisse une heure environ. C'est le seul moment où l'on entend les cloches d'une rive à l'autre.",
          "Nous vous embarquons seuls sur une barque, un joueur de tabla assis à l'avant. Le batelier remonte lentement le courant le long des marches, devant les lutteurs qui s'échauffent et les brahmanes qui saluent le soleil. Personne ne commente, personne ne vous presse. Quand la lumière devient franche, on rentre prendre le petit-déjeuner, et la ville, elle, commence à peine sa journée.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Inde",
      heading: "Trois portes que l'on ouvre pour vous",
      description:
        "Chez les descendants de la famille royale de Cochin, on prend le thé au salon. À Udaipur, une famille montre comment naît une peinture posée sur l'eau. Et à Delhi, ce sont les femmes de l'empire moghol qui racontent la ville.",
      slugs: [
        "high-tea-famille-royale-cochin",
        "jal-sanjhi-udaipur",
        "begums-de-delhi",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Trois maisons, trois Indes",
      description:
        "Un domaine de pierre posé au fond d'une vallée du Rajasthan, une grande maison de Mumbai qui regarde passer les bateaux, et un fort où la famille dîne encore avec ses hôtes, au bord de la Narmada.",
      slugs: ["amanbagh", "taj-mahal-palace-mumbai", "ahilya-fort"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Inde",
      description:
        "Vol, visa, saisons et santé : l'essentiel pour préparer votre voyage en Inde sans mauvaise surprise.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Delhi et Mumbai se rejoignent sans escale depuis Paris, en 8 à 9 heures de vol. Les autres villes se desservent par un vol intérieur de une à trois heures, ou par une correspondance dans le Golfe.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'Inde vit sur un fuseau unique et ne change pas d'heure. Comptez trois heures trente d'avance sur la France en été, quatre heures trente en hiver.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La roupie indienne (INR) est peu disponible hors d'Inde : il est préférable de retirer ou de changer sur place. Les cartes étrangères passent partout en ville et dans les hôtels ; il reste utile de garder des espèces pour les ateliers, les temples et les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Le visa est obligatoire pour les ressortissants français. L'e-Visa touristique se demande sur le portail officiel indien, au plus tard quatre jours avant l'arrivée. Depuis le 1er octobre 2025, une e-Arrival Card doit également être remplie en ligne dans les 72 heures qui précèdent l'arrivée. Le passeport doit être valable au moins six mois au-delà du séjour prévu et comporter deux pages vierges.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est exigée pour un voyageur arrivant directement de France. La fièvre jaune peut en revanche être obligatoire selon le pays de provenance ou de transit. L'Institut Pasteur recommande le calendrier vaccinal à jour et systématiquement l'hépatite A ; la typhoïde concerne surtout les séjours prolongés ou les conditions d'hygiène plus précaires.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "D'octobre à mars pour le Nord, le Rajasthan et les grandes villes : l'air est sec et les journées lumineuses. Le Kerala se visite plutôt d'octobre à février. Les mois d'avril à juin sont les plus chauds dans le Nord, et la mousson occupe l'été.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'hindi est langue officielle de l'Union et l'anglais reste employé pour les usages officiels : l'Inde n'a pas de langue nationale. La Constitution en reconnaît 22, dont le bengali, le tamoul et le marathi. L'anglais se parle largement dans les villes, les hôtels et les administrations.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Une saison fraîche d'octobre à mars, une saison chaude d'avril à juin, puis la mousson, dont les dates changent beaucoup d'une région à l'autre : elle atteint le Kerala dès juin et remonte ensuite vers le nord, tandis que le Tamil Nadu reçoit sa pluie en fin d'année. Les nuits du désert du Thar restent froides en janvier.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Inde. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/inde/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Inde entre Delhi, le Rajasthan, Varanasi et le Kerala",
            "Adresses confidentielles en Inde : ateliers d'artisans et demeures de famille",
            "Hébergements en Inde : palais habités, forts de famille et grandes maisons de ville",
            "Conciergerie privée 24/7 pour un voyage en Inde",
            "Expériences immersives en Inde : le Gange à l'aube et les ateliers de Jaipur",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Inde",
      heading:
        "De Delhi aux canaux du Kerala, six étapes qui tiennent ensemble",
      description:
        "Six villes que les vols intérieurs relient en moins de trois heures, avec le temps de s'arrêter dans les ateliers et les maisons.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 5,
      places: [
        {
          title: "Delhi, les deux villes",
          description:
            "Deux villes se touchent ici. Shahjahanabad garde ses ruelles d'épices et ses marchands qui hèlent, tandis que New Delhi étire ses avenues bordées d'arbres. C'est là que les Begums de l'empire moghol ont laissé le plus de traces, et l'on met un moment à s'en apercevoir.",
          image: {
            src: "/destination/inde/map-delhi.png",
            alt: "Ruelles du marché de Chandni Chowk à Old Delhi au petit matin",
          },
          // TODO: verify coords
          coordinates: { lat: 28.6139, lng: 77.209 },
        },
        {
          title: "Agra et le Taj Mahal",
          description:
            "Le mausolée tient toutes ses promesses, surtout quand on arrive tôt ou qu'on le regarde depuis l'autre rive de la Yamuna. Juste en amont, le fort d'Agra raconte la fin de l'histoire : Shah Jahan y a passé ses dernières années face à ce qu'il avait fait construire.",
          image: {
            src: "/destination/inde/map-agra.png",
            alt: "Le Taj Mahal d'Agra vu depuis les jardins de Mehtab Bagh au lever du jour",
          },
          // TODO: verify coords
          coordinates: { lat: 27.1751, lng: 78.0421 },
        },
        {
          title: "Jaipur, la ville rose",
          description:
            "La ville s'est dessinée d'un seul trait au début du XVIIIe siècle, et ses rues bien droites en gardent la trace. Dans les faubourgs, les ateliers d'impression sur bois et de poterie bleue travaillent toujours à la main, et le Raj Mandir projette ses films sous des lustres immenses.",
          image: {
            src: "/destination/inde/map-jaipur.png",
            alt: "Façades ocre de la vieille ville de Jaipur et passants au petit matin",
          },
          // TODO: verify coords
          coordinates: { lat: 26.9124, lng: 75.7873 },
        },
        {
          title: "Udaipur et ses lacs",
          description:
            "Les lacs ont été creusés de main d'homme et les palais semblent flotter dessus. Dans les ruelles au-dessus, les peintres de miniatures travaillent au pinceau fin, et une famille y garde la tradition du Jal Sanjhi, cette peinture qui se compose sur l'eau avant de s'en aller avec elle.",
          image: {
            src: "/destination/inde/map-udaipur.png",
            alt: "Palais et ghats d'Udaipur reflétés dans le lac Pichola en fin de journée",
          },
          // TODO: verify coords
          coordinates: { lat: 24.5854, lng: 73.7125 },
        },
        {
          title: "Varanasi, sur le Gange",
          description:
            "L'une des plus anciennes villes habitées du monde, où les marches descendent vers le fleuve sur des kilomètres. Tout s'y joue au petit matin, entre les bains, les saluts au soleil, les lutteurs qui s'entraînent sur l'argile des akhara et le thé que l'on boit assis sur une marche.",
          image: {
            src: "/destination/inde/map-varanasi.png",
            alt: "Ghats de Varanasi et pèlerins descendant vers le Gange dans la brume du matin",
          },
          // TODO: verify coords
          coordinates: { lat: 25.3176, lng: 82.9739 },
        },
        {
          title: "Kochi et le Kerala",
          description:
            "Le poivre a fait venir ici les Portugais, les Hollandais puis les Anglais, et chacun a laissé une façade derrière lui. Sur la pointe de Fort Kochi, les pêcheurs relèvent encore leurs filets à la main, et les canaux du Kerala commencent juste derrière.",
          image: {
            src: "/destination/inde/map-kochi.png",
            alt: "Filets de pêche relevés à la main sur la pointe de Fort Kochi au Kerala",
          },
          // TODO: verify coords
          coordinates: { lat: 9.9312, lng: 76.2673 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage en Inde",
      description:
        "Huit conseils de terrain, pour choisir la bonne saison, franchir les distances sans fatigue et comprendre pourquoi nous inscrivons telle étape à votre itinéraire.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "D'octobre à mars pour le Nord, décembre à mars pour le Kerala",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison fraîche court d&apos;octobre à mars et couvre presque
                tout le pays : air sec à Delhi et dans le Rajasthan, matins
                lumineux sur le Gange. Le Kerala se visite plutôt d&apos;octobre
                à février, quand la mer est calme. La mousson occupe l&apos;été,
                elle atteint le Kerala dès juin puis remonte vers le nord, et
                les mois d&apos;avril à juin sont les plus chauds dans les
                plaines.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Novembre et février sont les deux fenêtres que nous préférons :
                les nuits du désert restent fraîches sans être froides, et les
                sites se vident dès que le pic de décembre est passé. Holi et
                Diwali suivent le calendrier lunaire et déplacent tout, hôtels
                comme vols intérieurs. Nous construisons l&apos;itinéraire autour
                de la date, jamais l&apos;inverse.
              </p>
            </div>
          ),
        },
        {
          title: "Franchir les distances",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les vols intérieurs pour les grands sauts, la voiture pour tout le reste",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays est vaste et les routes lentes : cent kilomètres
                demandent souvent trois heures. Les vols intérieurs relient
                Delhi, Udaipur, Varanasi et Kochi en une à trois heures, pour un
                coût qui reste modeste. Entre Delhi, Agra et Jaipur, le train
                express fait mieux que la voiture.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Trois étapes en dix jours, quatre en quinze : au-delà, le voyage
                se passe en transferts. Nous gardons une voiture avec chauffeur
                sur chaque étape, ce qui permet de partir à cinq heures du matin
                sans négocier. Le brouillard d&apos;hiver retarde parfois les
                vols du nord en décembre et janvier : nous évitons les
                correspondances serrées à ces dates.
              </p>
            </div>
          ),
        },
        {
          title: "À table",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une cuisine qui change tous les cinq cents kilomètres",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Il n&apos;y a pas une cuisine indienne mais une par région. Le
                Nord travaille le blé, le tandoor et les produits laitiers ; le
                Rajasthan sa viande de gibier et ses conserves d&apos;épices ; le
                Kerala le riz, la noix de coco et le poisson ; le Deccan le
                biryani hérité des cuisines de cour. Le thali permet de goûter
                dix préparations sur un seul plateau.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Demander une version douce est parfaitement admis, et le plat
                reste relevé. Les grands hôtels proposent une carte
                internationale, ce qui fait passer à côté de l&apos;essentiel :
                nous organisons toujours un repas dans une maison, où les épices
                sont grillées et broyées devant vous. La cuisine de rue de Delhi
                se visite avec un guide qui connaît ses adresses, jamais au
                hasard.
              </p>
            </div>
          ),
        },
        {
          title: "Rester en forme",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Quelques règles simples suffisent, et elles tiennent en trois lignes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;eau en bouteille capsulée, y compris pour les dents et les
                glaçons. Les plats servis chauds, les fruits que l&apos;on pèle
                soi-même. Les crudités et les jus de rue attendront le retour. La
                chaleur et la qualité de l&apos;air fatiguent davantage que la
                nourriture, surtout à Delhi en hiver.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une trousse avec anti-diarrhéique, sels de réhydratation et
                paracétamol règle presque tout. Les grandes villes disposent
                d&apos;hôpitaux privés de bon niveau ; nous repérons le recours le
                plus proche à chaque étape, et l&apos;assurance rapatriement fait
                partie du dossier. Un masque léger est utile à Delhi en décembre
                et janvier.
              </p>
            </div>
          ),
        },
        {
          title: "Entrer dans un temple",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Ce sont des lieux de culte en activité, pas des monuments",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On se déchausse à l&apos;entrée, souvent aussi pour le cuir des
                ceintures et des sacs. Épaules et genoux couverts, dans les
                temples comme dans les mosquées et les gurdwaras, où la tête se
                couvre également. Certains sanctuaires hindous n&apos;admettent
                pas les non-hindous dans leur enceinte intérieure, et cela ne se
                négocie pas.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Des chaussettes dans le sac changent tout sur les dalles brûlantes
                de midi. On tourne les sanctuaires par la gauche, on ne
                photographie pas l&apos;intérieur sans autorisation, et l&apos;on
                demande toujours avant de photographier quelqu&apos;un en prière.
                Aux cérémonies du soir sur le Gange, nous plaçons nos voyageurs
                sur une barque plutôt que dans la foule des marches.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Du coton, des manches longues, et de la place pour le retour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Du coton et du lin plutôt que des matières synthétiques, des
                manches longues pour les temples et le soleil, une écharpe légère
                qui sert de couvre-chef, de protection contre la poussière et de
                tenue correcte en une seconde. Une polaire pour les nuits du
                désert et les matins sur le fleuve, où il fait frais avant le
                lever du soleil.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Des chaussures fermées qui se retirent d&apos;un geste, une lampe
                de poche pour les intérieurs de temples, une prise universelle.
                Les drones demandent une autorisation préalable et sont retenus à
                l&apos;arrivée sans elle. Prévoyez un sac vide : entre les soies
                de Varanasi, les tissus de Jaipur et les épices, le retour est
                toujours plus lourd que l&apos;aller.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qui se demande, ce qui se donne",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Photographier, refuser, remercier : trois gestes qui s'apprennent vite",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                On demande avant de photographier quelqu&apos;un, et l&apos;on
                accepte le refus sans insister ; le plus souvent la réponse est
                oui, et la conversation commence là. Les sollicitations sont
                nombreuses aux abords des grands sites : un refus calme et répété
                suffit, l&apos;agacement ne sert à rien.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Le pourboire fait partie du fonctionnement du pays et se donne en
                petites coupures, gardées à part pour ne pas sortir un gros
                billet. Chauffeurs et guides se remercient en fin de séjour,
                jamais devant les autres. Dans les ateliers, acheter une pièce
                vaut mieux que laisser un billet : c&apos;est le travail que
                l&apos;on reconnaît, pas la visite.
              </p>
            </div>
          ),
        },
        {
          title: "Le budget d'un séjour",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "L'hébergement et les accès font l'écart, presque jamais le reste",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sur place, la vie quotidienne coûte peu : les repas, les vols
                intérieurs et les voitures avec chauffeur restent raisonnables. Ce
                qui fait varier un budget indien, c&apos;est le niveau des maisons
                où l&apos;on dort et la nature des accès que nous négocions,
                ouvertures privées, rencontres, ateliers réservés.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les palais et forts de famille comptent peu de chambres, parfois
                une dizaine : ils se réservent six à huit mois à l&apos;avance
                pour la haute saison. Nous détaillons l&apos;hébergement, les
                transports et les expériences séparément dans le devis, pour que
                la discussion porte sur ce qui compte : le nombre de nuits par
                étape et les portes que nous faisons ouvrir.
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
            "Nous étions seuls sur la barque, avec un joueur de tabla à l'avant, et la ville dormait encore. Une heure plus tard les marches étaient noires de monde. Nous n'avons jamais oublié cet écart.",
          image: {
            src: "/destination/inde/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Inde, Delhi, Varanasi et Agra, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le thé chez les descendants de la famille de Cochin, dans leur maison, avec leurs photos aux murs. Nos petits-enfants ont posé des questions pendant deux heures. Ce n'était pas une visite, c'était une rencontre.",
          image: {
            src: "/destination/inde/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Inde du Sud en famille, trois générations, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois étapes en douze jours au lieu des six que nous imaginions, et c'était le bon conseil. Le fort au bord de la Narmada, où l'on dîne avec la famille, reste le souvenir le plus fort du séjour.",
          image: {
            src: "/destination/inde/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Inde, Rajasthan et vallée de la Narmada, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir en Inde ?",
          answer:
            "D'octobre à mars pour le Nord, le Rajasthan et les grandes villes : l'air est sec et les journées lumineuses. Le Kerala se visite plutôt d'octobre à février, quand la mer est calme. Les mois d'avril à juin sont les plus chauds dans les plaines du Nord, et la mousson arrive ensuite, à des dates qui changent selon les régions. Nous privilégions novembre et février : les sites sont moins fréquentés qu'à Noël et les nuits du désert restent supportables.",
        },
        {
          question: "Faut-il un visa pour aller en Inde ?",
          answer:
            "Oui, le visa est obligatoire pour les ressortissants français. L'e-Visa touristique se demande sur le portail officiel indien, au plus tard quatre jours avant l'arrivée : nous vous accompagnons dans la démarche. Depuis le 1er octobre 2025, il faut également remplir une e-Arrival Card en ligne dans les 72 heures qui précèdent l'arrivée, et c'est la formalité que l'on oublie le plus souvent. Le passeport doit être valable au moins six mois au-delà du séjour prévu et comporter deux pages vierges. Certaines régions, comme une partie du Nord-Est ou le Ladakh frontalier, demandent une autorisation supplémentaire que nous obtenons pour vous.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Delhi et Mumbai se rejoignent sans escale depuis Paris, en 8 à 9 heures de vol. Les autres villes, Udaipur, Varanasi, Kochi ou Hyderabad, se desservent par un vol intérieur de une à trois heures depuis ces deux portes d'entrée, ou par une correspondance dans le Golfe. Le décalage reste modéré, trois heures trente en été et quatre heures trente en hiver, ce qui permet d'arriver le matin et de commencer la journée sur place.",
        },
        {
          question: "Combien coûte un voyage en Inde ?",
          answer:
            "Sur place, la vie quotidienne coûte peu : repas, vols intérieurs et voitures avec chauffeur restent raisonnables. Ce qui fait varier un budget indien, c'est le niveau des maisons où l'on dort, palais habités et forts de famille comptant souvent moins de vingt chambres, et la nature des accès que nous négocions : ouvertures privées, rencontres, ateliers réservés. Nous détaillons l'hébergement, les transports et les expériences séparément avant toute réservation, sans engagement.",
        },
        {
          question: "Que faire en Inde en 15 jours ?",
          answer:
            "Quinze jours permettent quatre étapes sans courir. Delhi d'abord, pour Shahjahanabad au petit matin et les jardins mogholes. Agra ensuite, le temps du Taj Mahal à l'ouverture et du fort en fin de journée. Le Rajasthan pour la suite, Jaipur et ses ateliers, Udaipur et ses lacs, ou une vallée plus calme du côté d'Alwar. Varanasi enfin, pour les ghats à l'aube. Ceux qui préfèrent le Sud remplacent le Rajasthan par le Kerala, Kochi et ses canaux, et par les palais du Deccan.",
        },
        {
          question: "L'Inde est-elle adaptée à un voyage en famille ?",
          answer:
            "Oui, à condition de ralentir le rythme. Trois étapes plutôt que cinq, des vols intérieurs à la place des longues routes, et des maisons avec de vrais espaces extérieurs pour les fins de journée. Les enfants sont partout accueillis avec attention, et certaines expériences fonctionnent particulièrement bien avec eux : les ateliers d'artisans, les trains, les safaris du Rajasthan et du Madhya Pradesh. Nous adaptons les étapes et les horaires à chacun, y compris avec des grands-parents et de jeunes enfants.",
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
        "D'autres pays d'Asie où les grandes civilisations, les temples encore vivants et les maisons de famille composent un même voyage, à écrire sur mesure avec votre travel designer.",
      slugs: ["sri-lanka", "bhoutan", "cambodge"],
    },
  ],
};
