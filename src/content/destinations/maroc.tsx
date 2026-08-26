import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "maroc",
  name: "Maroc",
  placeKind: "country",
  country: "Maroc",
  genitive: "du Maroc",
  continentSlug: "afrique",
  blurb: "Fès, Haut Atlas, Dadès, Sahara",
  keywords: [
    "maroc",
    "fes",
    "marrakech",
    "haut atlas",
    "merzouga",
    "vallee des roses",
    "dades",
    "tanger",
  ],
  metaTitle: "Maroc : Voyage sur mesure",
  metaDescription:
    "Voyage au Maroc sur mesure : la médina de Fès, le Haut Atlas, la vallée des Roses et les dunes de l'erg Chebbi. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Maroc",
      heading: "Le Maroc, de la médina de Fès aux sommets du Haut Atlas",
      description:
        "Le Maroc change de visage à chaque étape. À Fès, les artisans travaillent dans les mêmes ruelles que leurs grands-pères et l'appel du muezzin donne l'heure mieux qu'une montre. Plus au sud, les palmeraies du Dadès s'endorment tôt, et dans le Haut Atlas les bergers montent avec leurs bêtes dès que la neige libère les pâturages. C'est ce Maroc-là que nous vous ouvrons, avec ceux qui y travaillent et qui savent en parler.",
      images: [
        {
          src: "/destination/maroc/hero-1.png",
          alt: "Ruelle de la médina de Fès au Maroc à la lumière du matin",
        },
        {
          src: "/destination/maroc/hero-2.png",
          alt: "Sommets enneigés du Haut Atlas vus depuis la vallée d'Asni",
        },
        {
          src: "/destination/maroc/hero-3.png",
          alt: "Palmeraie et kasbah de terre dans la vallée du Dadès",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Maroc ?",
      heading: "Stéphane, spécialiste du Maroc, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime au Maroc, c'est qu'on y est attendu. On pousse une porte qui ne dit rien depuis la rue, et il y a déjà du thé, une conversation, quelqu'un qui prend le temps. À Fès, un brodeur m'a montré ses outils comme on montre des photographies de famille. Je construis les voyages autour de ces gens-là, parce que ce sont eux que l'on raconte en rentrant.",
        role: "Travel Designer · Maroc",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Maroc",
      heading: "Le Maroc, l'art de recevoir poussé jusqu'au détail",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Maroc commence presque toujours par une odeur. On reconnaît le cèdre que l'on travaille au fond d'un atelier, le pain qui sort du four du quartier, la menthe que l'on verse de haut dans un verre brûlant. Le pays se raconte par les sens avant de se raconter par son histoire, et l'on comprend vite que l'hospitalité n'est pas ici une politesse mais une façon de vivre.",
        "Chaque région a son caractère. Fès garde la mémoire savante du pays, ses relieurs, ses dinandiers et son université millénaire, et l'on s'y perd volontiers dans la médina parce que c'est ainsi qu'elle se laisse apprivoiser. Le Haut Atlas commence à Asni et monte jusqu'aux villages d'Imlil, où les mules croisent encore les voitures. Au sud, les palmeraies du Dadès et les jardins de la vallée des Roses annoncent le désert, et la lumière devient plus douce à mesure que l'on avance.",
        "Nous plaçons les étapes dans l'ordre qui donne au voyage son rythme. Une ville d'abord, pour entrer dans le pays par ses ateliers et par ses tables. La montagne ensuite, quand les journées se sont allongées. Les vallées du sud et le désert pour finir, là où le temps ralentit pour de bon. Et nous gardons toujours du temps libre, parce que c'est souvent là que se logent les meilleures heures.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/maroc/full-image.png",
        alt: "Vallée du Dadès au Maroc, kasbahs de terre et palmeraie en fin de journée",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Maroc : les artisans de Fès",
      heading: "Les matins de Fès, chez ceux qui font encore tout à la main",
      theme: "light",
      paragraphs: [
        "L'atelier ouvre avant les boutiques, quand la médina appartient encore aux livreurs et aux mules. Le relieur cousait déjà des corans quand son père tenait la même échoppe, et il explique la dorure en la faisant, sans jamais s'interrompre. Un peu plus loin, un dinandier martèle un plateau de cuivre et le bruit se répercute dans toute la ruelle. On repart avec les gestes en tête plus qu'avec des explications.",
        "Fès se visite avec quelqu'un qui y est né, sinon la ville se referme. Notre guide raconte sa médina comme il raconterait sa famille : il salue les commerçants, ouvre des portes que rien ne signale, et fait monter sur une terrasse au moment où la lumière passe sur les tanneries. La matinée se termine autour d'un thé, et l'on comprend enfin pourquoi personne ici ne se presse.",
      ],
      images: [
        {
          src: "/destination/maroc/split-1.png",
          alt: "Artisan relieur au travail dans son atelier de la médina de Fès",
        },
        {
          src: "/destination/maroc/split-2.png",
          alt: "Plateaux de cuivre martelés dans l'atelier d'un dinandier à Fès",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/maroc/xp-campement-desert-1.png",
          alt: "Campement privé dressé au creux des dunes de l'erg Chebbi au crépuscule",
        },
        right: {
          src: "/destination/maroc/xp-campement-desert-2.png",
          alt: "Table dressée sur le sable devant un campement privé du désert marocain",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "La nuit sous les étoiles dans un campement privé du désert",
        columns: [
          "Le camp est monté pour vous seuls au creux des dunes de l'erg Chebbi, et démonté le lendemain quand vous repartez. On arrive en fin d'après-midi, à l'heure où le sable passe du jaune à l'orange, et l'équipe attend au pied des tentes. Il n'y a rien d'autre à faire que de monter en haut d'une dune pour regarder le soleil s'en aller.",
          "Le dîner se prend dehors, sur des tapis, autour d'un tagine qui a cuit lentement, et les musiciens jouent aussi longtemps que la conversation dure. Puis les lampes s'éteignent une à une et le ciel prend toute la place. Ceux qui n'ont jamais dormi dans le désert parlent tous de la même chose au retour, et il faut y passer une nuit pour comprendre pourquoi.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Maroc",
      heading: "Les rencontres qui donnent au voyage sa vraie couleur",
      description:
        "Nous vous emmenons chez un maître soufi de Fès qui reçoit chez lui et laisse la conversation aller où elle veut, dans les jardins d'altitude de la vallée des Roses au moment de la cueillette, et sur l'eau du détroit de Gibraltar, avec l'Espagne en face.",
      slugs: [
        "sagesse-soufie-fes",
        "vallee-des-roses-rose-damas",
        "detroit-gibraltar-navigation",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Dormir dans une médina, une palmeraie ou face à la montagne",
      description:
        "Nous vous installons au cœur de la médina de Fès, dans une palmeraie de la vallée du Dadès et face aux sommets du Haut Atlas. Chaque maison est choisie pour ce que l'on ressent en ouvrant les volets le matin.",
      slugs: ["karawan-riad", "dar-ahlam", "kasbah-tamadot"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Maroc",
      description:
        "Vol, décalage, monnaie, formalités et saisons : de quoi caler les dates avant d'écrire l'itinéraire ensemble.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Royal Air Maroc et Air France desservent Casablanca, Marrakech et Fès en direct depuis Paris, et d'autres compagnies relient plusieurs villes marocaines selon les saisons. Comptez environ 3 heures pour Fès, 3 h 10 pour Casablanca et 3 h 20 pour Marrakech. Tanger et Essaouira se rejoignent également en direct selon les périodes et les compagnies.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Le Maroc fonctionne généralement à l'heure GMT+1, avec un retour temporaire à l'heure GMT pendant le mois du ramadan. En hiver, il est donc la même heure qu'en France, et en été le pays a une heure de retard : quand il est quatorze heures à Paris en juillet, il est treize heures à Marrakech.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dirham marocain est peu exporté et donc peu disponible hors du pays. Il est préférable de changer ou de retirer sur place, où les distributeurs sont nombreux dans les villes. Les cartes bancaires sont acceptées dans les établissements touristiques. Dans les souks, les petits restaurants et les taxis, les espèces restent souvent indispensables.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français sont dispensés de visa pour un séjour touristique jusqu'à 90 jours. Le passeport est obligatoire et doit couvrir toute la durée du séjour, la carte nationale d'identité n'étant pas acceptée pour un voyage individuel. D'autres nationalités peuvent se voir demander une validité plus longue. Les formalités d'entrée peuvent inclure une fiche de renseignements selon les points d'arrivée.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination n'est exigée à l'entrée pour un voyageur arrivant directement de France. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille la vaccination contre l'hépatite A. Celles contre la typhoïde et la rage se discutent ensuite selon la durée du séjour et les régions parcourues. Le paludisme n'est plus considéré comme présent au Maroc.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Le printemps, de mars à mai, et l'automne, de septembre à novembre, conviennent à l'ensemble du pays. Nous privilégions le printemps et le début de l'automne pour le Haut Atlas, et le mois d'avril jusqu'au début mai pour la vallée des Roses, dont la floraison ne suit jamais un calendrier tout à fait fixe. L'été reste agréable sur la côte atlantique, à Essaouira ou Oualidia, quand l'intérieur devient très chaud. L'hiver est très agréable en journée à Marrakech et dans les vallées du sud, avec des nuits fraîches.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'arabe et l'amazighe sont les deux langues officielles inscrites dans la Constitution. Au quotidien on parle surtout l'arabe marocain, la darija, et plusieurs variantes de l'amazighe selon les régions. Le français est très présent dans l'administration, les études et le commerce, et l'espagnol s'entend dans le nord du pays.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le littoral atlantique reste tempéré, avec des étés doux à Essaouira, où le vent souffle presque en permanence. L'intérieur, autour de Marrakech et de Fès, connaît des étés très chauds et des hivers frais dès la nuit tombée. Le Haut Atlas garde la neige sur les hauteurs de décembre à avril, et parfois plus tard selon les années. Les vallées du sud comme le Dadès sont sèches, chaudes le jour et fraîches aussitôt après le coucher du soleil.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Maroc. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/maroc/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Maroc entre Fès, le Haut Atlas et la vallée du Dadès",
            "Adresses confidentielles au Maroc : ateliers d'artisans et maisons privées",
            "Hébergements au Maroc : Karawan Riad, Dar Ahlam et Kasbah Tamadot",
            "Conciergerie privée 24/7 pour un voyage au Maroc",
            "Expériences immersives au Maroc : nuit dans le désert et vallée des Roses",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Maroc",
      heading: "Les endroits où le Maroc change de caractère",
      description:
        "Le pays réunit des mondes qui ne se ressemblent pas, et chacun demande sa propre saison. Nous les mettons dans l'ordre qui rend le voyage juste, en laissant à chaque étape le temps de s'installer.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 5,
      places: [
        {
          title: "Fès",
          description:
            "La médina se transmet de main en main, entre les tanneurs, les tisserands et les selliers installés là depuis des générations. On y marche avec quelqu'un qui y est né, sinon la ville garde ses portes fermées.",
          image: {
            src: "/destination/maroc/map-fes.png",
            alt: "Toits et minarets de la médina de Fès au Maroc vus depuis une terrasse",
          },
          // TODO: verify coords
          coordinates: { lat: 34.0331, lng: -5.0003 },
        },
        {
          title: "Le Haut Atlas et le Toubkal",
          description:
            "Les villages de pierre s'accrochent au-dessus des vergers, et les sentiers de mules montent vers le plus haut sommet d'Afrique du Nord. Le printemps y libère les pâturages, et les bergers remontent avec leurs troupeaux.",
          image: {
            src: "/destination/maroc/map-haut-atlas.png",
            alt: "Village berbère et sommets du Haut Atlas au-dessus de la vallée d'Imlil",
          },
          // TODO: verify coords
          coordinates: { lat: 31.1358, lng: -7.9192 },
        },
        {
          title: "Marrakech",
          description:
            "La ville tient ensemble une médina qui ne dort jamais tout à fait et des jardins où l'on n'entend plus rien. On y revient surtout pour ses maisons et pour ses tables.",
          image: {
            src: "/destination/maroc/map-marrakech.png",
            alt: "Jardin d'un riad de la médina de Marrakech avec bassin et orangers",
          },
          // TODO: verify coords
          coordinates: { lat: 31.6295, lng: -7.9811 },
        },
        {
          title: "La vallée du Dadès",
          description:
            "Les kasbahs de terre suivent la rivière entre les palmeraies, et le soir tombe d'un coup derrière les gorges. C'est ici que le voyage ralentit, souvent au bon moment.",
          image: {
            src: "/destination/maroc/map-dades.png",
            alt: "Kasbahs de terre et palmeraie le long de la rivière dans la vallée du Dadès",
          },
          // TODO: verify coords
          coordinates: { lat: 31.36, lng: -5.98 },
        },
        {
          title: "Les dunes de l'erg Chebbi",
          description:
            "Les dunes se lèvent d'un coup au bout de la piste, hautes comme des collines, et changent de couleur toute la journée. C'est ici que l'on dort dehors, et que la nuit devient l'événement du voyage.",
          image: {
            src: "/destination/maroc/map-erg-chebbi.png",
            alt: "Dunes de l'erg Chebbi près de Merzouga au lever du jour dans le Sahara marocain",
          },
          // TODO: verify coords
          coordinates: { lat: 31.15, lng: -3.98 },
        },
        {
          title: "Tanger et le détroit",
          description:
            "La ville regarde l'Espagne depuis ses collines, et le trafic des cargos ne s'arrête jamais dans le détroit. Les cafés de la falaise ont vu passer assez d'écrivains pour que l'on comprenne ce qui les retenait.",
          image: {
            src: "/destination/maroc/map-tanger.png",
            alt: "Baie de Tanger et détroit de Gibraltar vus depuis les hauteurs de la ville",
          },
          // TODO: verify coords
          coordinates: { lat: 35.7595, lng: -5.834 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Maroc",
      description:
        "Quelques observations de terrain qui ne se trouvent pas dans un guide, pour choisir la bonne saison et comprendre pourquoi nous vous proposons telle étape plutôt qu'une autre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Une médina se visite avec quelqu'un qui y vit",
          cardEyebrow: "Villes",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "À Fès comme à Marrakech, le bon guide ouvre des portes que rien ne signale depuis la rue",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une médina ne se lit pas sur un plan. Les ruelles se ressemblent,
                les portes ne disent rien de ce qu&apos;elles cachent, et les
                plus beaux patios appartiennent à des familles qui n&apos;ont
                aucune raison d&apos;ouvrir à un inconnu.
              </p>
              <p>
                Avec un guide né dans le quartier, la ville se comporte
                autrement. Il salue les commerçants, fait monter sur une terrasse
                au bon moment de la journée et sait chez quel artisan
                l&apos;atelier vaut le détour ce matin-là.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons avec les mêmes guides depuis des années, à Fès,
                à Marrakech et à Tanger. Ce sont eux qui décident du parcours le
                jour venu, en fonction du marché, de la lumière et de qui est
                dans son atelier.
              </p>
            </div>
          ),
        },
        {
          title: "La vallée des Roses fleurit peu de temps",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La cueillette se situe généralement en avril, jusqu'au début du mois de mai, et se décide au dernier moment",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La rose de Damas fleurit dans les jardins d&apos;altitude autour
                de Kelaat M&apos;Gouna, généralement au mois d&apos;avril et
                jusqu&apos;au début du mois de mai. La date exacte dépend de
                l&apos;hiver, de la fonte des neiges et de la chaleur des
                premiers jours de printemps, si bien qu&apos;elle ne se fixe
                jamais tout à fait à l&apos;avance.
              </p>
              <p>
                La récolte commence dès qu&apos;il fait jour, parce que la fleur
                donne son meilleur avant la chaleur. Les familles montent aux
                jardins avec leurs paniers, et l&apos;on suit la cueillette
                jusqu&apos;à l&apos;atelier où se fait la distillation.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous suivons la floraison avec nos correspondants de la vallée et
                nous ajustons vos nuits dès que la cueillette se précise.
              </p>
            </div>
          ),
        },
        {
          title: "Le Toubkal se marche au printemps",
          cardEyebrow: "Montagne",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les sentiers se dégagent à partir d'avril, et la montagne garde la neige plus tard selon les années",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Haut Atlas conserve la neige sur les hauteurs de décembre à
                avril, et parfois plus tard selon les années. En plein hiver,
                l&apos;ascension demande un équipement et une expérience de la
                montagne enneigée, et elle ne convient pas à tout le monde.
              </p>
              <p>
                À partir d&apos;avril, les sentiers se dégagent, les vergers de
                la vallée sont en fleur et les journées deviennent longues.
                C&apos;est la période que nous préférons pour la montagne, avec
                le début de l&apos;automne qui convient tout aussi bien et des
                nuits encore fraîches en altitude.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous adaptons le nombre de jours de marche à votre rythme, et
                nous prévoyons toujours une nuit d&apos;acclimatation dans la
                vallée avant de partir vers le sommet.
              </p>
            </div>
          ),
        },
        {
          title: "Le désert se choisit hors de l'été",
          cardEyebrow: "Désert",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le printemps et l'automne donnent des journées douces, et les nuits restent fraîches sous la tente",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les dunes de l&apos;erg Chebbi écrasent de chaleur en juillet et
                en août, au point que la nuit n&apos;apporte plus vraiment de
                repos. Le printemps et l&apos;automne donnent des journées douces
                et des soirées agréables dehors. L&apos;hiver reste très beau, à
                condition d&apos;accepter des nuits franchement froides, que
                l&apos;on passe très bien sous une tente correctement équipée.
              </p>
              <p>
                Une seule nuit dans le désert laisse souvent un regret. La
                deuxième est celle où l&apos;on cesse de photographier et où
                l&apos;on se contente de regarder.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous faisons dresser le campement pour vous seuls, à l&apos;écart
                des camps collectifs, et nous plaçons cette étape après les
                gorges du Todra pour que la journée de route soit elle aussi un
                plaisir.
              </p>
            </div>
          ),
        },
        {
          title: "Le ramadan change le rythme du pays",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les journées sont plus calmes, les soirées beaucoup plus vivantes, et l'heure locale change",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pendant le mois du ramadan, la vie se déplace vers le soir. Les
                ateliers ferment plus tôt, certaines tables restent closes dans
                la journée, et la ville s&apos;anime après la rupture du jeûne,
                dans une ambiance que beaucoup de voyageurs gardent en mémoire.
              </p>
              <p>
                Le pays revient aussi temporairement à l&apos;heure GMT pendant
                cette période, ce qui ajoute une heure de décalage avec la France.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous vous disons franchement ce que cette période change à votre
                itinéraire, et nous choisissons alors des maisons et des tables
                qui restent pleinement ouvertes.
              </p>
            </div>
          ),
        },
        {
          title: "Les étapes du sud méritent une pause à mi-chemin",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Entre l'Atlas et les vallées, la route passe par des endroits où l'on est content de s'arrêter",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Rejoindre les palmeraies du sud depuis Marrakech ou Fès demande
                de franchir la montagne. Ce trajet fait partie du voyage :
                le paysage change à chaque col, les villages apparaissent
                suspendus au-dessus du vide, et l&apos;envie de descendre de
                voiture revient sans cesse.
              </p>
              <p>
                Nous coupons donc systématiquement cette étape par un déjeuner ou
                une nuit, du côté d&apos;Aït Benhaddou ou d&apos;Ouarzazate. La
                journée devient un plaisir au lieu d&apos;un transfert.
              </p>
            </div>
          ),
        },
        {
          title: "Le hammam, mode d'emploi",
          cardEyebrow: "Bien-être",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le hammam de quartier n'a rien à voir avec celui d'un hôtel, et les deux valent le détour",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le hammam de quartier est un lieu de vie, chaud, bruyant et
                joyeux, où l&apos;on passe une bonne partie de la matinée. Le
                savon noir, le gant de crin et le seau d&apos;eau chaude suffisent,
                et l&apos;on ressort avec l&apos;impression d&apos;avoir dix ans
                de moins.
              </p>
              <p>
                Les hammams historiques restaurés, comme celui de Dar el Bacha à
                Marrakech, offrent la même chose dans un cadre où l&apos;on
                s&apos;attarde. Les deux se vivent très bien dans un même séjour.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons le hammam en privatisé quand vous le souhaitez, et
                nous vous indiquons quel établissement convient à votre étape.
              </p>
            </div>
          ),
        },
        {
          title: "Dans un souk, le thé vient avant l'achat",
          cardEyebrow: "Souks",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "On s'assoit, on discute, et l'on repart parfois sans rien : personne ne s'en offusque",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La négociation fait partie de la conversation, pas du conflit. On
                s&apos;assoit, on accepte le thé, on parle d&apos;autre chose, et
                le prix arrive à son heure. Repartir sans rien acheter est tout à
                fait admis, à condition d&apos;avoir pris le temps.
              </p>
              <p>
                Pour les tapis, les cuivres ou les bijoux anciens, un œil averti
                change tout. Nos guides connaissent les ateliers qui travaillent
                encore eux-mêmes et savent reconnaître une pièce qui vient
                d&apos;ailleurs.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons l&apos;expédition de vos achats volumineux
                jusqu&apos;en France, tapis compris.
              </p>
            </div>
          ),
        },
        {
          title: "Les espèces et les pourboires",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dirham se change sur place, et une réserve de liquide reste indispensable dans les souks et les taxis",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le dirham marocain est peu exporté : on le change ou on le retire
                sur place, où les distributeurs sont nombreux dans les villes. Les
                cartes bancaires sont acceptées dans les établissements
                touristiques, mais les souks, les petits restaurants et les taxis
                fonctionnent en espèces.
              </p>
              <p>
                Les pourboires font partie des usages, pour le guide, le chauffeur
                et les équipes de maison. Ils se donnent en espèces, en dirhams,
                et nous indiquons les montants d&apos;usage étape par étape dans
                le carnet de voyage.
              </p>
            </div>
          ),
        },
        {
          title: "Ce que l'on met dans sa valise",
          cardEyebrow: "Valise",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Des épaisseurs légères, de bonnes chaussures pour les médinas, et de quoi couvrir les épaules",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays passe d&apos;une chaleur sèche à des nuits franchement
                fraîches dès que l&apos;on monte ou que l&apos;on descend vers le
                sud. Des épaisseurs légères que l&apos;on ajoute et que
                l&apos;on retire valent mieux qu&apos;un gros manteau.
              </p>
              <p>
                Les pavés des médinas se marchent en chaussures fermées. Une
                tenue qui couvre les épaules et les genoux se porte naturellement
                dans les quartiers anciens et facilite l&apos;accueil, et un
                foulard sert à la fois contre le soleil et contre le vent des
                vallées.
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
            "Notre guide à Fès nous a fait entrer dans des ateliers où nous n'aurions jamais osé pousser la porte. Nous sommes restés deux heures chez un maroquinier, et c'est de lui que nous parlons encore.",
          image: {
            src: "/destination/maroc/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Fès et Haut Atlas, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La nuit dans les dunes restera le souvenir du voyage. Nous avons regardé le ciel jusqu'à une heure impossible, et personne n'avait envie d'aller se coucher.",
          image: {
            src: "/destination/maroc/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Fès, Dadès et désert, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "À Dar Ahlam, personne ne nous a jamais demandé à quelle heure nous voulions dîner, et chaque repas nous attendait dans un endroit différent. Nous avons cessé de regarder l'heure au bout d'une journée.",
          image: {
            src: "/destination/maroc/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Vallée du Dadès, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Maroc ?",
          answer:
            "Le printemps, de mars à mai, et l'automne, de septembre à novembre, conviennent à l'ensemble du pays. Nous privilégions le printemps et le début de l'automne pour le Haut Atlas, et le mois d'avril jusqu'au début mai pour la vallée des Roses, dont la floraison ne suit jamais un calendrier tout à fait fixe. L'été reste agréable sur la côte atlantique, à Essaouira ou Oualidia, quand l'intérieur devient très chaud. L'hiver est très agréable en journée à Marrakech et dans les vallées du sud, avec des nuits fraîches.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Royal Air Maroc et Air France desservent Casablanca, Marrakech et Fès en direct depuis Paris, et d'autres compagnies relient plusieurs villes marocaines selon les saisons. Comptez environ 3 heures pour Fès, 3 h 10 pour Casablanca et 3 h 20 pour Marrakech. Tanger et Essaouira se rejoignent également en direct selon les périodes et les compagnies.",
        },
        {
          question: "Faut-il un visa pour aller au Maroc ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique jusqu'à 90 jours. Le passeport est en revanche obligatoire et doit couvrir toute la durée du séjour : la carte nationale d'identité n'est pas acceptée pour un voyage individuel. Les formalités d'entrée peuvent inclure une fiche de renseignements selon les points d'arrivée, et d'autres nationalités que la française peuvent se voir demander une validité de passeport plus longue.",
        },
        {
          question: "Que faire au Maroc en 10 jours ?",
          answer:
            "Un premier séjour associe souvent une ville impériale, la montagne et une vallée du sud. On commence par Fès et ses ateliers, on rejoint le Haut Atlas pour deux ou trois nuits au-dessus de la vallée d'Asni, puis on descend vers les palmeraies du Dadès en coupant la route par une étape du côté d'Aït Benhaddou, avant une nuit dans les dunes de l'erg Chebbi. Ceux qui veulent finir en douceur ajoutent quelques jours sur la côte atlantique, à Essaouira.",
        },
        {
          question: "Le Maroc est-il adapté aux familles avec enfants ?",
          answer:
            "Oui, et c'est l'une des destinations où les enfants sont le mieux accueillis. Les maisons privatisables avec piscine, les ateliers de cuisine, les balades à dos de mule dans l'Atlas et les chasses au trésor dans la médina occupent facilement plusieurs âges à la fois. Avec de jeunes enfants, nous limitons les changements d'étape et nous gardons des journées entières sans programme.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Maroc ?",
          answer:
            "Le budget dépend surtout des maisons choisies, de la saison et du nombre d'étapes reliées entre elles. Un riad privatisé dans la médina de Fès et une kasbah du sud tenue comme une maison privée se situent en haut de la gamme, tandis qu'un itinéraire resserré autour de Marrakech et de l'Atlas reste plus mesuré. Nous chiffrons chaque projet précisément après un premier échange, une fois les dates et les envies posées.",
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
        "Trois pays où l'artisanat, la table et l'hospitalité tiennent le voyage ensemble. On retrouve en Inde les palais et les ateliers de quartier, en Turquie les coupoles et les hammams, et aux Émirats un désert qui se raconte dans un tout autre registre.",
      slugs: ["inde", "turquie", "emirats-arabes-unis"],
    },
  ],
};
