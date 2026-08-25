import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "arabie-saoudite",
  name: "Arabie Saoudite",
  placeKind: "country",
  country: "Arabie Saoudite",
  genitive: "de l'Arabie Saoudite",
  continentSlug: "proche-orient",
  blurb: "AlUla, Hegra, Sharaan, la mer Rouge",
  keywords: [
    "arabie-saoudite",
    "alula",
    "hegra",
    "elephant-rock",
    "sharaan",
    "dadan",
    "diriyah",
    "mer-rouge",
  ],
  metaTitle: "Arabie Saoudite : Voyage sur mesure",
  metaDescription:
    "Voyage en Arabie Saoudite sur mesure : AlUla, Hegra, la réserve de Sharaan et la mer Rouge. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe en Arabie Saoudite",
      heading: "Deux royaumes ont disparu, leurs écritures sont restées",
      description:
        "À AlUla, une vallée de grès rouge traverse le désert du nord-ouest. Les Nabatéens y ont taillé cent onze tombeaux dans la falaise, signés par leurs sculpteurs. Avant eux, deux royaumes ont gravé leurs prières sur une paroi que l'on appelle aujourd'hui la bibliothèque à ciel ouvert. En bas, l'oasis de palmiers est encore cultivée.", // TODO: verify le nombre de tombeaux monumentaux de Hegra
      images: [
        {
          src: "/destination/arabie-saoudite/hero-1.png",
          alt: "Les tombeaux nabatéens de Hegra taillés dans le grès à AlUla, voyage en Arabie Saoudite",
        },
        {
          src: "/destination/arabie-saoudite/hero-2.png",
          alt: "Elephant Rock, monolithe de grès dressé dans le sable au coucher du soleil, AlUla",
        },
        {
          src: "/destination/arabie-saoudite/hero-3.png",
          alt: "Récif de corail et lagon turquoise au large d'Umluj, sur la mer Rouge",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir en Arabie Saoudite ?",
      heading:
        "Stéphane, spécialiste de l'Arabie Saoudite, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Le pays n'accueille des voyageurs que depuis 2019, et cela s'entend dans la façon dont on est reçu. On est encore une curiosité : on vous invite à vous asseoir, et le café à la cardamome se ressert jusqu'à ce que vous secouiez la tasse. À AlUla, je fais toujours entrer à Hegra en début de matinée, quand les tombeaux sont encore dans l'ombre et que le guide de la vallée a le temps de tout expliquer. C'est une destination que je conseille souvent à deux générations qui partent ensemble : chaque pierre s'y raconte, et les journées restent courtes.",
        role: "Travel Designer · Arabie Saoudite",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de l'Arabie Saoudite",
      heading: "AlUla, Diriyah, puis la mer Rouge",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage en Arabie Saoudite commence par AlUla. La vallée s'ouvre d'un coup après le désert : des tables de grès rouge de cent mètres de haut, séparées par du sable clair, et une oasis de palmiers cultivée en continu depuis plus de deux mille ans. Les hommes s'y arrêtent depuis toujours parce que l'eau y affleure. Hegra, la cité nabatéenne, est à vingt minutes de la vieille ville.", // TODO: verify l'ancienneté de la culture de l'oasis d'AlUla
        "Riyad tient le centre du pays et se visite pour Diriyah. C'est le quartier d'At-Turaif, berceau de la première dynastie saoudienne, bâti en terre crue au bord d'un oued et inscrit au patrimoine mondial en 2010. Les murs sont épais, les ruelles étroites, les toits en troncs de palmier. On y comprend d'où vient le royaume avant de regarder ce qu'il construit aujourd'hui.",
        "À l'ouest, la mer Rouge ferme le voyage. Le récif commence à quelques mètres du bord et court sur des centaines de kilomètres. Au large d'Umluj, une centaine d'îles basses posées sur du sable blanc abritent tortues vertes et raies. L'eau reste autour de vingt-sept degrés une bonne partie de l'année.", // TODO: verify le nombre d'îles au large d'Umluj et la température de l'eau
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/arabie-saoudite/full-image.png",
        alt: "La vallée de grès d'AlUla et son oasis de palmiers au lever du jour, voyage en Arabie Saoudite",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Arabie Saoudite : ce que les pierres racontent",
      heading: "Une écriture avant l'arabe",
      theme: "light",
      paragraphs: [
        "À trois kilomètres de la vieille ville d'AlUla, une falaise porte des centaines d'inscriptions taillées à même le grès. C'est Jabal Ikmah. Les habitants des royaumes de Dadan puis de Lihyan y ont gravé leurs offrandes, leurs noms et leurs dettes, dans une écriture qui a disparu avec eux. L'UNESCO a inscrit l'ensemble au registre Mémoire du monde en 2023. On lit encore les lettres à l'œil nu, en fin de journée, quand la lumière rase la paroi.", // TODO: verify la date d'inscription au registre Mémoire du monde
        "Les Nabatéens sont arrivés plus tard et ont travaillé autrement. À Hegra, ils ont taillé des façades de vingt mètres dans des blocs isolés, avec des frontons, des aigles et des escaliers qui ne montent nulle part. Certains tombeaux portent le nom du commanditaire et la date des travaux. Qasr al-Farid, resté inachevé, montre la méthode : on attaquait la roche par le haut. La marque du ciseau s'arrête à mi-hauteur.",
      ],
      images: [
        {
          src: "/destination/arabie-saoudite/split-1.png",
          alt: "Inscriptions dadanitiques gravées dans la falaise de Jabal Ikmah, près de Dadan",
        },
        {
          src: "/destination/arabie-saoudite/split-2.png",
          alt: "Qasr al-Farid, tombeau nabatéen inachevé taillé dans un bloc isolé à Hegra",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/arabie-saoudite/xp-sharaan-safari-1.png",
          alt: "Table dressée dans un canyon éclairé de la réserve de Sharaan, à AlUla",
        },
        right: {
          src: "/destination/arabie-saoudite/xp-sharaan-safari-2.png",
          alt: "Véhicule privé au pied des parois de grès de la réserve naturelle de Sharaan",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "À la lampe UV, le désert s'allume",
        columns: [
          "Le Sharaan Platinum Dinner Safari occupe la fin de la journée dans la partie la plus préservée d'AlUla. Un véhicule privé remonte les canyons de la réserve. Le guide de conservation s'arrête devant des pétroglyphes, explique qui les a laissés là et ce que les animaux gravés disent du climat de l'époque. On traverse ensuite des formations de grès jusqu'à un point haut, où l'apéritif est servi face au soleil qui descend, avec quelques canapés.",
          "La nuit change tout. Une marche nocturne commence à la lampe à ultraviolets : sous ce faisceau, les scorpions et une partie de la faune du sable deviennent fluorescents, et le désert se révèle beaucoup plus habité qu'il n'en avait l'air. Le dîner suit dans un canyon éclairé, autour d'un braai sud-africain. La soirée se termine par une présentation astronomique et un télescope, à l'endroit du pays où le ciel est le plus noir.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Arabie Saoudite",
      heading: "Trois journées dans la vallée",
      description:
        "Trois moments portent le séjour à AlUla. Un ballon décolle avant le soleil au-dessus de Hegra et d'Elephant Rock. Un Land Rover des années soixante-dix ouvre la route de Dadan et de Jabal Ikmah. En fin de journée, Elephant Rock passe au rouge et l'on s'installe au pied de la roche.",
      slugs: [
        "montgolfiere-hegra",
        "land-rover-vintage-dadan",
        "elephant-rock-heure-doree",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner en Arabie Saoudite",
      description:
        "Trois adresses, trois façons d'habiter le pays. Des maisons de terre restaurées dans la vieille ville d'AlUla, éclairées à la bougie. Des villas posées au fond du canyon d'Ashar. Et une île de la mer Rouge, avec le récif à quelques mètres de la plage.",
      slugs: ["dar-tantora", "our-habitas-alula", "red-sea-edition"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage en Arabie Saoudite",
      description:
        "Vol, monnaie, formalités et saisons : les repères qui permettent de poser les dates d'un voyage en Arabie Saoudite.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Six heures dix entre Paris et Riyad, en vol direct et quotidien. Djeddah est desservie en direct dans des durées comparables. AlUla se rejoint ensuite en une heure vingt de vol intérieur, et une liaison saisonnière relie parfois Paris directement à la vallée en hiver.", // TODO: verify les durées de vol et l'existence de la liaison saisonnière Paris-AlUla
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Une heure de plus qu'en France en été, deux heures en hiver. Le royaume ne change pas d'heure : quand il est 14 h à Paris en janvier, il est 16 h à Riyad. Le décalage se rattrape en une nuit.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le rial saoudien, indexé sur le dollar depuis 1986, ce qui rend le change stable d'une année sur l'autre. La carte bancaire et le paiement sans contact passent partout, jusque dans les cafés de village. Un peu d'espèces reste utile sur les marchés de dattes.", // TODO: verify la date de l'indexation du rial
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Un visa touristique électronique, demandé en ligne en quelques minutes. Il est valable un an, autorise plusieurs entrées et des séjours jusqu'à quatre-vingt-dix jours. Le passeport doit être valide six mois après la date d'arrivée.", // TODO: verify les conditions du e-visa saoudien pour les ressortissants français
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est demandée pour un séjour touristique. Le calendrier vaccinal français à jour suffit. L'eau se boit en bouteille et le pays compte des hôpitaux de très bon niveau à Riyad et à Djeddah.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "D'octobre à avril. À AlUla, l'après-midi tourne alors autour de vingt-cinq degrés et les nuits descendent à dix : c'est la saison des dîners dehors et des marches dans les canyons. Décembre et janvier concentrent les festivals de la vallée.", // TODO: verify les températures d'hiver à AlUla
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'arabe, dans sa variante du Golfe. L'anglais est parlé dans les hôtels, par les guides et par une grande partie des moins de quarante ans. Quelques guides d'AlUla travaillent en français, et cela se demande à la réservation.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Désertique et très sec : l'air ne pèse jamais. AlUla dépasse quarante degrés en juillet et redescend à vingt-cinq en janvier, avec un écart de quinze degrés entre le jour et la nuit. Sur la mer Rouge, l'eau reste chaude toute l'année.", // TODO: verify les moyennes de température à AlUla
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Arabie Saoudite. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/arabie-saoudite/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure en Arabie Saoudite, d'AlUla à Diriyah et à la mer Rouge",
            "Adresses confidentielles en Arabie Saoudite : maisons de terre et tables de la vallée d'AlUla",
            "Hébergements en Arabie Saoudite : maisons de la vieille ville, canyon d'Ashar et île de la mer Rouge",
            "Conciergerie privée 24/7 pour un voyage en Arabie Saoudite",
            "Expériences en Arabie Saoudite : montgolfière sur Hegra, Land Rover vintage et dîner dans un canyon",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables en Arabie Saoudite",
      heading: "Six étapes, d'AlUla à la mer Rouge",
      description:
        "Six étapes qui ne se ressemblent pas : une cité nabatéenne, une vieille ville de terre, une falaise couverte d'écritures, une réserve fermée au public, le berceau du royaume et une côte de récifs.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Hegra",
          description:
            "La grande cité nabatéenne du sud, à vingt minutes de la vieille ville d'AlUla. Plus de cent tombeaux monumentaux taillés dans des blocs isolés, et la gare du chemin de fer du Hedjaz à l'entrée du site. Premier bien saoudien inscrit au patrimoine mondial, en 2008.",
          image: {
            src: "/destination/arabie-saoudite/map-hegra.png",
            alt: "Façades des tombeaux nabatéens de Hegra dans le désert de grès, AlUla",
          },
          // TODO: verify coords
          coordinates: { lat: 26.7869, lng: 37.9535 },
        },
        {
          title: "La vieille ville d'AlUla",
          description:
            "Un labyrinthe de maisons de terre adossées à une citadelle, habité jusqu'aux années 1980 puis laissé au sable. Une partie est relevée, et les ruelles se traversent le soir quand les ateliers et les tables ouvrent. L'oasis commence au bout de la dernière maison.", // TODO: verify la date d'abandon de la vieille ville
          image: {
            src: "/destination/arabie-saoudite/map-alula-vieille-ville.png",
            alt: "Ruelles de terre de la vieille ville d'AlUla au pied de la citadelle",
          },
          // TODO: verify coords
          coordinates: { lat: 26.6089, lng: 37.9217 },
        },
        {
          title: "Dadan et Jabal Ikmah",
          description:
            "L'ancienne capitale du royaume de Dadan, puis de Lihyan, avec ses tombeaux creusés en hauteur dans la falaise rouge. Le canyon voisin de Jabal Ikmah porte des centaines d'inscriptions gravées, dans quatre écritures différentes.", // TODO: verify le nombre d'écritures présentes à Jabal Ikmah
          image: {
            src: "/destination/arabie-saoudite/map-jabal-ikmah.png",
            alt: "Falaise gravée d'inscriptions anciennes de Jabal Ikmah, près de Dadan",
          },
          // TODO: verify coords
          coordinates: { lat: 26.6383, lng: 37.8933 },
        },
        {
          title: "La réserve de Sharaan",
          description:
            "Une vallée fermée au sud d'AlUla, où le léopard d'Arabie, l'oryx et le bouquetin de Nubie ont été réintroduits. On y entre avec un guide de conservation, en véhicule, et l'on y dîne au fond d'un canyon. Le ciel y est le plus noir de la région.", // TODO: verify les espèces réintroduites dans la réserve de Sharaan
          image: {
            src: "/destination/arabie-saoudite/map-sharaan.png",
            alt: "Canyon de grès de la réserve naturelle de Sharaan, au sud d'AlUla",
          },
          // TODO: verify coords
          coordinates: { lat: 26.55, lng: 37.75 },
        },
        {
          title: "Diriyah",
          description:
            "Aux portes de Riyad, le quartier d'At-Turaif : le berceau de la première dynastie saoudienne, bâti en terre crue au bord d'un oued et inscrit au patrimoine mondial en 2010. Les palais se visitent le matin, avant la chaleur.",
          image: {
            src: "/destination/arabie-saoudite/map-diriyah.png",
            alt: "Murs de terre crue du quartier historique d'At-Turaif à Diriyah, près de Riyad",
          },
          // TODO: verify coords
          coordinates: { lat: 24.737, lng: 46.575 },
        },
        {
          title: "La mer Rouge et les îles d'Umluj",
          description:
            "Une côte de sable blanc et un chapelet d'îles basses à moins d'une heure de bateau. Le récif commence à quelques mètres du bord : tortues vertes, raies et bancs de poissons de corail. Les hôtels y ouvrent les uns après les autres depuis 2023.", // TODO: verify le calendrier d'ouverture des hôtels de la mer Rouge
          image: {
            src: "/destination/arabie-saoudite/map-umluj.png",
            alt: "Îles basses et eaux turquoise au large d'Umluj, côte de la mer Rouge",
          },
          // TODO: verify coords
          coordinates: { lat: 25.0213, lng: 37.2685 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading:
        "Les conseils de nos experts pour votre voyage en Arabie Saoudite",
      description:
        "Huit repères venus du terrain : la lumière, le café, la table, les distances, et ce qui change quand on part à plusieurs.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le café se sert jusqu'à ce qu'on secoue la tasse",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La petite tasse se remplit tant qu'on la tend, et se refuse d'un simple mouvement du poignet",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le café saoudien, la <em>qahwa</em>, est clair, presque jaune, et
                parfumé à la cardamome. Il se sert dans une tasse sans anse,
                remplie au tiers, avec des dattes à côté. On la tend de la main
                droite pour être resservi.
              </p>
              <p>
                Pour dire que c&apos;est assez, on secoue la tasse de deux petits
                mouvements du poignet avant de la rendre. Le geste vaut mieux
                qu&apos;une phrase, et il fait toujours sourire l&apos;hôte.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les dattes se mangent avant le café, jamais après : le sucre
                adoucit l&apos;amertume. Les sukkari sont tendres et très
                sucrées, les khalas plus sèches.
              </p>
            </div>
          ),
        },
        {
          title: "Hegra se visite au premier créneau",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le site ouvre tôt, les façades sont encore dans l'ombre et les tombeaux sont pour vous",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Hegra se visite sur créneau horaire, avec un guide de la vallée.
                Le premier départ de la matinée est le bon : la lumière arrive
                de côté, les façades gardent leur ombre, et les groupes ne sont
                pas encore là.
              </p>
              <p>
                Le site s&apos;étend sur plusieurs kilomètres et se parcourt en
                véhicule d&apos;un ensemble de tombeaux à l&apos;autre. Comptez
                trois heures pour ne pas courir, et gardez Qasr al-Farid pour la
                fin.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Créneaux réservés en amont, guide francophone quand il est
                disponible, et véhicule privé sur l&apos;ensemble du site.
              </p>
            </div>
          ),
        },
        {
          title: "Quand partir",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "D'octobre à avril, avec des après-midi à vingt-cinq degrés et des nuits fraîches dans le désert",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La saison va d&apos;octobre à avril. Novembre et mars sont les
                mois les plus équilibrés : chaud en journée, frais le soir, et
                une lumière très basse sur le grès en fin d&apos;après-midi.
              </p>
              <p>
                Décembre et janvier concentrent les festivals de la vallée,
                concerts à Maraya et tables installées pour la saison. Ce sont
                aussi les semaines où les hôtels d&apos;AlUla se remplissent le
                plus tôt.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                La mer Rouge se visite plus largement dans l&apos;année :
                l&apos;eau y reste chaude, et le printemps comme
                l&apos;automne y sont très agréables.
              </p>
            </div>
          ),
        },
        {
          title: "Les distances se comptent en vols intérieurs",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Riyad, AlUla, la mer Rouge : entre chaque étape, une heure et demie de vol plutôt qu'une journée de route",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays fait quatre fois la France. Les étapes se relient donc
                en avion : Riyad rejoint AlUla en une heure vingt, et la côte de
                la mer Rouge se prend depuis Djeddah. Le réseau intérieur est
                dense et ponctuel.
              </p>
              <p>
                Sur place, tout se fait en véhicule avec chauffeur. Les routes
                sont neuves et larges, et les trajets dans la vallée
                d&apos;AlUla se comptent en minutes plutôt qu&apos;en heures.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Vols intérieurs calés sur les horaires de visite, chauffeur
                dédié à chaque étape, et vol privé quand le programme le
                justifie.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on mange",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Agneau au riz épicé, blé concassé du Najd, dattes de l'oasis et tables d'auteur dans le canyon",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le plat commun est le <em>kabsa</em> : un riz long parfumé au
                clou de girofle et au safran, avec de l&apos;agneau ou du poulet
                posé dessus, servi dans un grand plat que l&apos;on partage. Le{" "}
                <em>jareesh</em>, un blé concassé cuit longuement, vient du
                Najd, autour de Riyad.
              </p>
              <p>
                À AlUla, la saison amène des tables installées dans les canyons
                et sur les toits de la vieille ville, dont certaines tenues par
                des chefs venus pour quelques mois. Les agrumes et les dattes de
                l&apos;oasis se retrouvent dans presque tous les desserts.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les repas se prennent tard, souvent après vingt et une heures.
                Les cafés de spécialité sont partout, et le pays en a fait une
                vraie culture.
              </p>
            </div>
          ),
        },
        {
          title: "Les inscriptions se laissent lire",
          cardEyebrow: "Langue",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Quatre écritures se croisent sur la même falaise, et un guide les distingue à l'œil",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À Jabal Ikmah, les gravures ne datent pas toutes de la même
                époque. Le dadanitique, le plus ancien, dessine des lettres
                hautes et fines. Le nabatéen, plus tardif, penche et lie ses
                signes. Un guide les sépare d&apos;un coup d&apos;œil et
                traduit les formules les plus courantes.
              </p>
              <p>
                Ce sont des offrandes, des noms, parfois des comptes. Rien de
                monumental : des gens ordinaires qui écrivaient sur la paroi
                d&apos;un canyon.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Trois mots suffisent au quotidien : <em>shukran</em> pour merci,{" "}
                <em>yalla</em> pour allons-y, <em>habibi</em> qu&apos;on entend
                dix fois par jour.
              </p>
            </div>
          ),
        },
        {
          title: "Partir à plusieurs sans forcer le rythme",
          cardEyebrow: "Famille",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La vallée est courte : chacun suit la journée entière ou décroche après la matinée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Tout est proche dans la vallée : une matinée à Hegra, un
                après-midi à Elephant Rock, une fin de journée dans
                l&apos;oasis à vélo sur les chemins tracés entre les palmiers.
                Aucune étape ne demande d&apos;effort long et les trajets se
                comptent en minutes.
              </p>
              <p>
                C&apos;est ce qui rend le voyage facile à plusieurs. Les uns
                partent marcher dans les canyons, les autres restent sur la
                terrasse et retrouvent le groupe pour le dîner. Les guides de la
                vallée composent avec les deux rythmes sans casser la journée.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Journées construites en deux temps, avec un retour à
                l&apos;hôtel au milieu, et chambres réservées côte à côte dans
                les trois adresses de la vallée.
              </p>
            </div>
          ),
        },
        {
          title: "Ce qu'il faut dans la valise",
          cardEyebrow: "Bagage",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des tissus légers et couvrants, une bonne paire de chaussures, et une couche chaude pour les nuits",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le désert se marche en lin et en coton, manches longues et
                pantalon léger : c&apos;est plus confortable au soleil et
                c&apos;est l&apos;usage du pays, pour les hommes comme pour les
                femmes. Un foulard sert d&apos;ombre, de protection contre le
                sable et d&apos;écharpe le soir.
              </p>
              <p>
                Les nuits d&apos;hiver descendent à dix degrés dans la vallée.
                Une veste chaude est indispensable pour les dîners dehors et les
                sorties d&apos;observation des étoiles. Des chaussures fermées
                qui tiennent sur la roche valent mieux que des sandales.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les prises sont de type britannique, à trois broches plates. Un
                adaptateur suffit.
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
            "Nous sommes entrés à Hegra au premier créneau du matin. Il n'y avait que nous et le guide, qui a passé une heure devant un seul tombeau. Nous en sommes ressortis en connaissant le nom de son sculpteur.",
          image: {
            src: "/destination/arabie-saoudite/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: AlUla, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le dîner s'est fait au fond d'un canyon, avec des lampes posées à même le sable. Avant cela, le guide nous avait montré des scorpions fluorescents à la lampe UV. Je n'imaginais pas le désert aussi habité.",
          image: {
            src: "/destination/arabie-saoudite/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Réserve de Sharaan, décembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons dormi dans une maison de terre de la vieille ville, éclairée à la bougie. Le matin, dix minutes de marche suffisaient pour être dans l'oasis, entre les palmiers.",
          image: {
            src: "/destination/arabie-saoudite/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Vieille ville d'AlUla, novembre 2025", // TODO: replace with real testimonial
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
            "Quelle est la meilleure période pour partir en Arabie Saoudite ?",
          answer:
            "D'octobre à avril. À AlUla, l'après-midi tourne autour de vingt-cinq degrés et les nuits descendent à dix, ce qui rend les canyons agréables à marcher et les dîners dehors possibles. Novembre et mars sont les mois les plus équilibrés, décembre et janvier ceux des festivals de la vallée. Sur la mer Rouge, la saison est plus longue : l'eau reste chaude une grande partie de l'année.",
        },
        {
          question: "Combien de temps dure le vol Paris-Riyad ?",
          answer:
            "Six heures dix en vol direct, avec un départ quotidien. Djeddah est desservie dans des durées comparables et sert de porte d'entrée pour la mer Rouge. AlUla se rejoint ensuite en une heure vingt de vol intérieur. Le décalage horaire est d'une heure en été et de deux heures en hiver.",
        },
        {
          question: "Faut-il un visa pour aller en Arabie Saoudite ?",
          answer:
            "Oui, un visa touristique électronique, qui se demande en ligne en quelques minutes. Il est valable un an, autorise plusieurs entrées et des séjours jusqu'à quatre-vingt-dix jours. Le passeport doit être valide six mois après l'arrivée. Aucune vaccination n'est demandée pour un séjour touristique.",
        },
        {
          question: "Que faire à AlUla en une semaine ?",
          answer:
            "Trois nuits dans la vallée d'AlUla suffisent pour Hegra au premier créneau du matin, Dadan et Jabal Ikmah en Land Rover, Elephant Rock à l'heure dorée et une soirée dans la réserve de Sharaan. Une montgolfière au lever du jour se place au milieu du séjour. On ajoute ensuite deux nuits à Riyad pour Diriyah, puis deux nuits sur la mer Rouge pour le récif.",
        },
        {
          question: "L'Arabie Saoudite est-elle adaptée aux familles ?",
          answer:
            "Oui, et particulièrement AlUla quand on part à deux générations. Les distances y sont courtes, l'oasis se parcourt à vélo sur des chemins plats, et les sites se racontent à voix haute : une tombe signée par son sculpteur, un animal gravé dans la roche, une écriture que l'on déchiffre lettre à lettre. Chacun suit la journée entière ou s'arrête après la matinée, et tout le monde se retrouve au dîner. Les journées se construisent en deux temps, avec un retour à l'hôtel au milieu.",
        },
        {
          question: "Quel budget prévoir pour un voyage en Arabie Saoudite ?",
          answer:
            "Un voyage en Arabie Saoudite sur mesure avec Exuma se situe généralement entre 6 000 et 12 000 € par personne pour sept nuits, hébergements, chauffeurs, guides privés et accès réservés compris, hors vol depuis Paris. La soirée dans la réserve de Sharaan et l'étape sur la mer Rouge constituent les principaux postes variables.", // TODO: verify la fourchette de budget
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
        "Trois pays voisins où le désert et les cités taillées dans la pierre tiennent le voyage, de Pétra aux wadis d'Oman et à la vallée du Nil.",
      slugs: ["jordanie", "oman", "egypte"],
    },
  ],
};
