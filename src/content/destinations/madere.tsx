import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "madere",
  name: "Madère",
  placeKind: "region",
  country: "Portugal",
  genitive: "de Madère",
  continentSlug: "europe",
  blurb: "Funchal, les levadas, Fanal, Porto Moniz",
  keywords: [
    "madere",
    "funchal",
    "levadas",
    "fanal",
    "porto moniz",
    "pico ruivo",
    "seixal",
    "laurisylve",
  ],
  metaTitle: "Madère : Voyage sur mesure",
  metaDescription:
    "Voyage à Madère sur mesure : levadas, forêt de Fanal, Funchal et vins de Malvasia. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Madère",
      heading: "L'île aux chemins d'eau",
      description:
        "Traversez l'île du sud au nord. Funchal d'abord, ses jardins et ses caves à vin. Puis le sable noir et les piscines de lave que l'Atlantique remplit à chaque marée. Entre les deux, des sommets que la brume ne quitte qu'en milieu de matinée.",
      images: [
        {
          src: "/destination/madere/hero-1.png",
          alt: "Sommets volcaniques de Madère au-dessus d'une mer de nuages au lever du jour",
        },
        {
          src: "/destination/madere/hero-2.png",
          alt: "Sentier de levada longeant un canal d'irrigation dans la forêt de lauriers",
        },
        {
          src: "/destination/madere/hero-3.png",
          alt: "Baie de Funchal et ses versants en terrasses vus depuis les hauteurs",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du premier échange jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Madère surprend toujours. On vient pour la douceur du climat, on repart avec le souvenir d'un matin dans la brume, d'un sentier au-dessus des nuages, d'une table dressée au milieu des vignes. Mon travail consiste à placer ces moments au bon endroit, au bon moment.",
        role: "Travel Designer · Madère",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Madère, une île qui se révèle en hauteur",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Madère commence face à l'océan. Puis le regard monte vers les sommets. L'île se dévoile entre falaises, forêts profondes et villages suspendus au-dessus de l'Atlantique. Ses levadas, ces anciens canaux devenus sentiers, longent les montagnes et franchissent les vallées. Chaque promenade devient une immersion dans une nature restée intacte.",
        "Au sud, Funchal cultive un art de vivre lumineux. Ses marchés, ses jardins, ses anciennes demeures. Plus loin, la côte ouvre sur les piscines naturelles de Porto Moniz et le sable volcanique de Seixal. Puis vient le nord, plus sauvage. La brume enveloppe la forêt de Fanal, le silence s'installe, le temps ralentit.",
        "« Madère ne se visite pas vraiment. Elle se marche, elle se goûte, et elle finit par vous garder. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/madere/full-image.png",
        alt: "Falaise de Cabo Girão plongeant dans l'Atlantique sur la côte sud de Madère",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les levadas",
      heading: "Des chemins d'eau qui traversent toute l'île",
      theme: "light",
      paragraphs: [
        "Les levadas sont nées d'un besoin simple : conduire l'eau des montagnes du nord vers les cultures du sud. Cinq siècles plus tard, elles dessinent les plus belles promenades de l'île. On marche à plat, au bord de l'eau, dans une forêt qui n'a pas changé.",
        "Celle du Caldeirão Verde part de Queimadas, sous des hêtres couverts de mousse. Le chemin file entre les fougères, traverse quelques tunnels, puis s'ouvre sur une cascade qui tombe dans un cirque fermé. Trois heures de marche, le bruit de l'eau à côté du pied.",
        "On y croise plus de fougères que de marcheurs.",
      ],
      images: [
        {
          src: "/destination/madere/split-1.png",
          alt: "Canal de levada creusé dans la roche au-dessus d'une vallée boisée",
        },
        {
          src: "/destination/madere/split-2.png",
          alt: "Cascade du Caldeirão Verde tombant dans un cirque de basalte",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Madère",
      heading: "Quatre moments, rien que pour vous",
      description:
        "Un plateau dans la brume au lever du jour. Une plage de sable noir au pied des falaises. Un marché à l'heure où les étals s'ouvrent. Une cave que l'on ouvre pour vous seuls.",
      slugs: [
        "foret-fanal",
        "plage-seixal",
        "mercado-funchal",
        "degustation-blandys",
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/madere/xp-fanal-1.png",
          alt: "Lauriers centenaires isolés dans le brouillard sur le plateau de Fanal",
        },
        right: {
          src: "/destination/madere/xp-fanal-2.png",
          alt: "Prairie rase et troncs noueux de la forêt de Fanal au petit matin",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le matin où la forêt de Fanal sort de la brume",
        columns: [
          "Là-haut, sur un plateau à mille cent cinquante mètres, une trentaine de lauriers centenaires se tiennent seuls dans une prairie rase. Ils appartiennent à une forêt que l'Europe a presque partout perdue, et que Madère a gardée. Fanal en est la lisière la plus nue : pas de sous-bois, pas de barrière, rien que les arbres et l'herbe.",
          "La brume monte du versant nord avant le jour et reste posée jusqu'au milieu de la matinée. Les troncs apparaissent un par un. On n'entend que les cloches de vaches invisibles. Nous vous y conduisons avant sept heures, en voiture privée depuis Funchal. Le temps que la lumière change et que les premiers visiteurs arrivent, vous êtes déjà repartis.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements à Madère",
      heading: "Où séjourner",
      description:
        "Trois maisons au-dessus de la baie de Funchal. Une falaise plantée de jardins, une ancienne quinta de famille, une adresse contemporaine face à l'océan.",
      slugs: [
        "belmond-reids-palace",
        "casa-velha-do-palheiro",
        "savoy-palace",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Préparer votre voyage à Madère",
      description:
        "Vol, décalage, monnaie, formalités et saison : l'essentiel avant de partir.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 3h45 en vol direct depuis Paris jusqu'à Funchal. Sinon, une correspondance à Lisbonne.", // TODO: verify
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Une heure de moins qu'en France, toute l'année. Autant dire aucun décalage à gérer.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "L'euro. Madère est portugaise, aucune conversion à prévoir. Les cartes passent partout.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Espace Schengen : une carte nationale d'identité ou un passeport en cours de validité suffit.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin obligatoire, aucune précaution sanitaire particulière.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "D'avril à octobre, la lumière est belle, les sentiers sont secs et la mer est bonne. La Fête des fleurs a lieu au printemps, la Fête du vin à la fin de l'été.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le portugais. L'anglais se parle partout, héritage de deux siècles de clientèle britannique.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Doux toute l'année : dix-neuf degrés en février, vingt-six en août. Le nord reçoit plus de pluie que le sud, ce qui explique sa végétation.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Un voyage à Madère se prépare dans le détail : une randonnée calée sur la lumière du matin, une cave ouverte pour vous, un chauffeur qui connaît la route de nuit. Une seule personne s'en occupe, et elle reste la vôtre jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/madere/bento-${
            ["map", "adresses", "hebergements", "conciergerie", "experiences"][i]
          }.png`,
          alt: [
            "Carte d'un itinéraire sur mesure à Madère",
            "Ruelle pavée de la Zona Velha de Funchal aux portes peintes",
            "Terrasse d'une quinta surplombant la baie de Funchal",
            "Concierge coordonnant un transfert privé à Madère",
            "Table dressée face à l'Atlantique sur la côte sud de Madère",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir à Madère",
      heading: "Six lieux qui font le voyage",
      description:
        "Funchal, le Pico do Arieiro, Curral das Freiras, Porto Moniz, São Lourenço, Câmara de Lobos. Nos itinéraires s'écrivent presque toujours autour de ces six-là.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 9,
      places: [
        {
          title: "Funchal, la baie et le marché",
          description:
            "La ville s'étage en amphithéâtre au-dessus de sa baie. Le marché ouvre tôt, les jardins descendent vers la mer, et les ruelles de la vieille ville se parcourent sans plan.",
          image: {
            src: "/destination/madere/map-funchal.png",
            alt: "Baie et vieille ville de Funchal adossées aux versants de Madère",
          },
          coordinates: { lat: 32.6669, lng: -16.9241 }, // TODO: verify coords
        },
        {
          title: "Pico do Arieiro, au-dessus des nuages",
          description:
            "Le deuxième sommet de l'île, que la route rejoint directement. Au lever du jour, les nuages s'étendent en dessous comme une mer. Un sentier d'arêtes conduit ensuite au Pico Ruivo.",
          image: {
            src: "/destination/madere/map-pico-arieiro.png",
            alt: "Sommet du Pico do Arieiro dominant une mer de nuages à Madère",
          },
          coordinates: { lat: 32.735, lng: -16.9283 }, // TODO: verify coords
        },
        {
          title: "Curral das Freiras, la vallée des nonnes",
          description:
            "Un village posé au fond d'un cirque de parois verticales. Les religieuses de Santa Clara s'y réfugièrent au seizième siècle. On y cultive la châtaigne, et on y descend par une route en lacets.",
          image: {
            src: "/destination/madere/map-curral-das-freiras.png",
            alt: "Village de Curral das Freiras au fond d'un cirque de montagnes",
          },
          coordinates: { lat: 32.7189, lng: -16.9564 }, // TODO: verify coords
        },
        {
          title: "Porto Moniz, les piscines de lave",
          description:
            "À la pointe nord-ouest, la lave a creusé des bassins que l'océan remplit à chaque marée. On s'y baigne dans une eau claire, entre les rochers noirs.",
          image: {
            src: "/destination/madere/map-porto-moniz.png",
            alt: "Piscines naturelles de lave de Porto Moniz face à l'Atlantique",
          },
          coordinates: { lat: 32.8667, lng: -17.1706 }, // TODO: verify coords
        },
        {
          title: "Ponta de São Lourenço, la pointe ocre",
          description:
            "La pointe est de l'île, nue et dorée, battue par le vent. Un sentier la parcourt avec la mer des deux côtés. C'est le coin le plus sec de Madère.",
          image: {
            src: "/destination/madere/map-sao-lourenco.png",
            alt: "Presqu'île rocheuse de Ponta de São Lourenço à l'est de Madère",
          },
          coordinates: { lat: 32.7442, lng: -16.69 }, // TODO: verify coords
        },
        {
          title: "Câmara de Lobos, les barques et les vignes",
          description:
            "Un port de pêche aux barques peintes, à quelques minutes de Funchal. Les pêcheurs y rentrent en fin de matinée. Au-dessus, les vignes montent en terrasses.",
          image: {
            src: "/destination/madere/map-camara-de-lobos.png",
            alt: "Barques de pêche colorées dans le port de Câmara de Lobos",
          },
          coordinates: { lat: 32.6503, lng: -16.9775 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "Ce que l'on aimerait vous dire avant le départ",
      description:
        "Des observations de terrain, glanées à force d'y retourner. De quoi comprendre pourquoi nous plaçons telle étape à telle heure.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "Le nord et le sud, deux climats",
          cardEyebrow: "Météo",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Il peut pleuvoir à Seixal et faire grand soleil à Funchal, à trente minutes de route",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La montagne coupe l'île en deux. Les vents du nord-est viennent
                buter sur le relief et laissent leurs nuages sur le versant
                nord. Le sud reste au soleil. On traverse un tunnel et le temps
                a changé.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous gardons deux ou trois journées ouvertes. Le matin, selon le
                ciel des sommets, on décide où aller. Une belle randonnée ne se
                réserve pas la veille.
              </p>
            </div>
          ),
        },
        {
          title: "Les levadas, laquelle choisir",
          cardEyebrow: "Sentiers",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Presque plates, souvent longues, parfois au bord du vide",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Une levada suit un canal, donc elle reste à plat. C'est la
                longueur qui fatigue, pas la pente. Caldeirão Verde et 25 Fontes
                sont les plus belles, et les plus fréquentées. Levada do Rei et
                Levada dos Cedros restent tranquilles.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Partir tôt sur les sentiers connus, prévoir une lampe pour les
                tunnels et de bonnes semelles. La roche mouillée glisse.
              </p>
            </div>
          ),
        },
        {
          title: "Le lever du jour au Pico do Arieiro",
          cardEyebrow: "Timing",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "On part de nuit. À sept heures, tout le monde est déjà là",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La route monte jusqu'au sommet, ce qui en fait le lever de
                soleil le plus accessible de l'île, et le plus couru. En
                dessous, la mer de nuages s'étend jusqu'à l'horizon. Il fait
                frais là-haut, même en été.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Départ de Funchal vers quatre heures, en voiture privée, café et
                couvertures à bord. Ceux qui veulent enchaîner vers le Pico
                Ruivo repartent à pied, le chauffeur les récupère de l'autre
                côté.
              </p>
            </div>
          ),
        },
        {
          title: "Le vin de Madère",
          cardEyebrow: "Vin",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Un vin né du voyage, quatre cépages, des flacons qui traversent les siècles",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Autrefois, les barriques traversaient l'équateur dans les cales
                des navires et revenaient meilleures. Les producteurs ont
                recréé cette lente maturation à terre, sous les toits chauds des
                maisons de Funchal. Quatre cépages, du plus sec au plus doux :
                Sercial, Verdelho, Bual, Malvasia.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Une dégustation privée dans les caves de Blandy's, avec accès à
                la réserve ancienne que l'on ne montre pas au public. Le maître
                de chai raconte les millésimes.
              </p>
            </div>
          ),
        },
        {
          title: "À table",
          cardEyebrow: "Table",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "L'espada et sa banane, l'espetada sur branche de laurier, le bolo do caco",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'espada se sert avec de la banane frite, ce qui surprend puis
                convainc. L'espetada cuit sur une branche de laurier au-dessus
                des braises et arrive suspendue au-dessus de la table. Le bolo
                do caco, pain plat à l'ail, accompagne tout. La poncha mêle
                canne à sucre, miel et citron : elle se boit doucement.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons les tables de village qui ne prennent pas de
                réservation en ligne, et organisons un déjeuner chez un vigneron
                des terrasses de Câmara de Lobos.
              </p>
            </div>
          ),
        },
        {
          title: "Se laisser conduire",
          cardEyebrow: "Logistique",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Des routes superbes, des pentes raides et des virages serrés",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les routes de Madère sont belles et exigeantes. Les anciennes
                voies grimpent fort, se garer à Funchal demande de la patience,
                et la nuit tombe vite derrière la montagne. Une randonnée en
                boucle suppose en plus deux points de dépose.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Une voiture avec chauffeur les jours de marche : on entre d'un
                côté du sentier et on ressort de l'autre. Le reste du séjour se
                fait à pied depuis Funchal.
              </p>
            </div>
          ),
        },
        {
          title: "Porto Santo, l'île d'à côté",
          cardEyebrow: "Îles",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Neuf kilomètres de sable doré, et presque personne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Là où Madère offre la montagne, sa voisine offre le sable : une
                longue plage claire sur toute la côte sud, calme en dehors de
                l'été. Deux heures et demie de bateau depuis Funchal, ou quinze
                minutes d'avion. Christophe Colomb y a vécu, sa maison se
                visite.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Deux nuits en fin de séjour, pour finir au bord de l'eau après
                une semaine de montagne. Transfert en hélicoptère possible.
              </p>
            </div>
          ),
        },
        {
          title: "Dans la valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Une polaire même en août, une veste imperméable et de bonnes chaussures",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Il peut faire vingt-six degrés sur le front de mer et huit au
                sommet, le même jour. La brume de Fanal mouille les vêtements
                sans qu'il pleuve. Des baskets de ville ne suffisent pas sur les
                sentiers humides.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trois couches, une lampe frontale pour les tunnels, et une tenue
                habillée pour les dîners. Sur la terrasse du Reid's Palace, on
                met une veste.
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
            "Nous sommes partis pour marcher. Nous avons eu Fanal à sept heures du matin, seuls dans la brume. Ma femme n'a rien dit pendant vingt minutes. C'est le moment dont nous reparlons encore.",
          image: {
            src: "/destination/madere/hero-1.png",
            alt: "Portrait de Frédéric", // TODO: verify
          },
          name: "Frédéric", // TODO: verify
          role: "Séjour en couple, mai 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Deux adolescents et un petit de huit ans, je voyais mal comment faire. Carole a choisi des levadas plates et des journées courtes. Le marché de Funchal a même intéressé les grands, ce qui n'était pas gagné.",
          image: {
            src: "/destination/madere/hero-2.png",
            alt: "Portrait de Constance", // TODO: verify
          },
          name: "Constance", // TODO: verify
          role: "Voyage en famille, avril 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le lever du jour au Pico do Arieiro, puis la traversée à pied vers le Pico Ruivo pendant que la voiture nous attendait à l'autre bout. C'est exactement ce que je ne voulais pas avoir à organiser.",
          image: {
            src: "/destination/madere/hero-3.png",
            alt: "Portrait d'Édouard", // TODO: verify
          },
          name: "Édouard", // TODO: verify
          role: "Voyage anniversaire, octobre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir à Madère ?",
          answer:
            "D'avril à octobre : les sommets se dégagent, les sentiers sont secs et la chaleur reste douce. L'île se visite toute l'année, avec dix-neuf degrés en février et vingt-six en août, mais l'hiver apporte plus de pluie sur le versant nord.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Environ 3h45 en vol direct depuis Paris jusqu'à Funchal. Sinon, une correspondance d'environ une heure à Lisbonne.",
        },
        {
          question: "Faut-il un visa pour aller à Madère ?",
          answer:
            "Non. Madère est une région autonome du Portugal, dans l'espace Schengen. Une carte nationale d'identité ou un passeport en cours de validité suffit pour les ressortissants français et européens.",
        },
        {
          question: "Faut-il être bon marcheur pour visiter Madère ?",
          answer:
            "Pas du tout. Les levadas suivent d'anciens canaux d'irrigation : elles restent à plat, c'est la longueur qui fait la différence. Nous adaptons chaque itinéraire au rythme du groupe, et plusieurs sentiers se parcourent très bien avec des enfants.",
        },
        {
          question: "Que faire à Madère en une semaine ?",
          answer:
            "Trois nuits à Funchal pour la ville, le marché et les caves à vin. Deux journées de levadas, du côté du Caldeirão Verde ou des 25 Fontes. Un lever de soleil au Pico do Arieiro. Une matinée dans la forêt de Fanal. Puis le versant nord, par Seixal et Porto Moniz.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Madère ?",
          answer:
            "Le budget dépend des hébergements, de la saison et de la part de voiture avec chauffeur dans l'itinéraire. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres îles où la nature donne le rythme du voyage.",
      slugs: ["corse", "grece", "polynesie"],
    },
  ],
};
