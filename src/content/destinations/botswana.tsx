import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "botswana",
  name: "Botswana",
  placeKind: "country",
  country: "Botswana",
  genitive: "du Botswana",
  continentSlug: "afrique",
  blurb: "Okavango, Moremi, Makgadikgadi",
  keywords: [
    "botswana",
    "okavango",
    "moremi",
    "gomoti",
    "makgadikgadi",
    "chobe",
    "maun",
    "safari",
  ],
  metaTitle: "Botswana : Voyage sur mesure",
  metaDescription:
    "Voyage au Botswana sur mesure : delta de l'Okavango, réserve de Moremi, salines du Makgadikgadi. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Botswana",
      heading: "Botswana, au rythme des eaux de l'Okavango",
      description:
        "Au plus fort de la crue, le delta de l'Okavango s'étend sur près de 15 000 km². Tombée en Angola, l'eau voyage durant quatre mois avant de rejoindre le Botswana. Ici, le safari ne tient pas à un camp mais à un itinéraire : l'eau, les plaines, puis le sel, chacun avec son mode de déplacement.", // TODO: verify surface du delta en crue
      images: [
        {
          src: "/destination/botswana/hero-1.webp",
          alt: "Mokoro glissant entre les papyrus du delta de l'Okavango, voyage au Botswana",
        },
        {
          src: "/destination/botswana/hero-2.webp",
          alt: "Éléphants traversant un bras d'eau peu profond dans la réserve de Moremi",
        },
        {
          src: "/destination/botswana/hero-3.webp",
          alt: "Horizon plat et blanc des salines du Makgadikgadi en fin de saison sèche",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Botswana ?",
      heading:
        "Stéphane, spécialiste du Botswana, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Le Botswana se découvre à travers plusieurs camps. L'intérêt du voyage tient au passage d'un milieu à l'autre : les eaux du delta, les plaines de la Gomoti, puis les étendues salines du Makgadikgadi. En dix jours, l'itinéraire traverse trois écosystèmes. Chacun propose une approche différente, du bateau à la marche. Le pays limite le nombre de lits sur chaque concession. Cela explique la faible présence de véhicules pendant les safaris. C'est la seule destination de safari où je construis un itinéraire dense, sans avoir à composer avec la foule.",
        role: "Travel Designer · Botswana",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Botswana",
      heading: "Trois milieux qui ne se ressemblent pas",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Botswana se déploie à travers trois territoires. D'abord, le delta de l'Okavango. On l'explore en bateau ou en mokoro, cette pirogue traditionnelle poussée à la perche. Viennent ensuite les plaines de Moremi, autour de la rivière Gomoti. Ici, le véhicule retrouve toute sa place. Enfin, les salines du Makgadikgadi dévoilent un horizon plat et blanc, sur des dizaines de kilomètres.",
        "La crue arrive à contretemps. Les pluies tombent sur les hauts plateaux d'Angola, entre janvier et mars. L'eau traverse ensuite la bande de Caprivi. Elle s'étale enfin dans les sables du Kalahari, entre mai et août. Le delta atteint ainsi son plus haut niveau, alors que le ciel reste sec depuis plusieurs semaines. Ce décalage concentre la faune sur les îles et les bras encore navigables.",
        "Trois maisons structurent l'itinéraire. Eagle Island Lodge ouvre le voyage sur l'île de Xaxaba, à vingt minutes de vol de Maun. Le camp compte douze tentes, chacune dotée de son propre bassin. Tawana prend ensuite place au sud-est de Moremi, sur les rives de la Gomoti. Ouvert en 2024, le camp réunit huit suites sans clôture. Jack's Camp conclut le séjour face aux salines. Ses neuf tentes de toile verte ont été rebâties par Ralph Bousfield, dans l'esprit des années quarante.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/botswana/full-image.webp",
        alt: "Bras d'eau et îles boisées du delta de l'Okavango vus d'avion léger, voyage au Botswana",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Botswana : le jour et la nuit",
      heading: "Ce que le hors-piste et la nuit changent",
      theme: "light",
      paragraphs: [
        "Dans la réserve de Moremi, les pistes sont tracées et le hors-piste reste interdit. Les portes ferment au coucher du soleil. C'est la règle d'un territoire protégé depuis 1963.",
        "La journée y suit donc un rythme précis : deux sorties, l'une avant le lever du jour, l'autre jusqu'aux dernières lueurs.",
        "La nuit se découvre ailleurs, dans les réserves privées du Makgadikgadi. Le projecteur à filtre rouge y est autorisé. Il ouvre l'observation à d'autres espèces.",
        "Oryctérope, hyène brune, otocyon : aucune ne se rencontre à midi. Le guide coupe alors le moteur, balaie la bordure du pan, puis s'arrête sur deux points lumineux, à trente mètres.",
        "C'est cette complémentarité entre le jour et la nuit qui détermine l'ordre des étapes.",
      ],
      images: [
        {
          src: "/destination/botswana/split-1.webp",
          alt: "Pisteur relevant une empreinte de lion dans le sable au petit matin, réserve de Moremi",
        },
        {
          src: "/destination/botswana/split-2.webp",
          alt: "Hyène brune saisie dans le faisceau d'un projecteur à filtre rouge en bordure du pan",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/botswana/xp-suricates-1.webp",
          alt: "Sentinelle suricate dressée à la sortie de son terrier sur les pans du Makgadikgadi",
        },
        right: {
          src: "/destination/botswana/xp-suricates-2.webp",
          alt: "Clan de suricates face au soleil levant dans le sel du Makgadikgadi",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Les suricates du Makgadikgadi, à hauteur de terrier",
        columns: [
          "Le rendez-vous est fixé avant le lever du soleil, à quelques centaines de mètres du camp. Le clan dort encore sous terre. La sentinelle apparaît la première. Elle se dresse, observe le ciel, puis laisse les autres sortir un à un. Tous s'immobilisent ensuite face à l'est pour capter les premiers rayons.",
          "Ces clans sont suivis depuis plusieurs années par les équipes du camp. Habitués à la présence humaine, ils ne prennent pas la fuite. On s'assoit alors dans le sel, à un mètre du terrier, sans bouger.",
          "Il arrive qu'un jeune grimpe sur une épaule. De là, il gagne en hauteur pour surveiller les rapaces. Ce geste n'est jamais provoqué. Il ne peut pas davantage être garanti.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Botswana",
      heading: "Trois sorties inscrites à l'itinéraire",
      description:
        "Trois sorties rythment le voyage. On navigue d'abord dans les canaux du delta, en bateau puis en mokoro. On marche ensuite sur les pans, accompagné de guides Bushmen San. On repart enfin de nuit, projecteur à la main, dans le Makgadikgadi.",
      slugs: [
        "navigation-canaux-okavango",
        "marche-bushmen-san",
        "safari-nocturne-projecteur",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Botswana",
      description:
        "Trois maisons jalonnent l'itinéraire. La première occupe une île du delta que l'on n'atteint que par les airs. La deuxième s'installe sans clôture sur les rives de la Gomoti. La dernière fait face aux salines, sous la toile verte.",
      slugs: ["eagle-island-lodge", "tawana", "jacks-camp"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Botswana",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons. Voici les repères qui permettent de caler les dates d'un voyage au Botswana.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: Il n'existe pas de vol direct depuis Paris. Le trajet dure 16 à 18 heures, le plus souvent via Johannesburg. Un second vol d'une heure quarante rejoint ensuite Maun (MUB) ou Kasane (BBK).",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "TODO: Le Botswana vit toute l'année en UTC+2. Il n'y a donc aucun décalage avec Paris en été, et une heure d'avance en hiver. Les départs d'avant l'aube s'en trouvent facilités.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "TODO: La monnaie locale est le pula (BWP), autour de 15 BWP pour un euro. Les camps facturent toutefois en dollars américains. Il faut prévoir des espèces en petites coupures pour les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "TODO: Aucun visa n'est demandé aux ressortissants français pour un séjour de moins de quatre-vingt-dix jours. Le passeport doit rester valide six mois après le retour et comporter deux pages vierges. Une autorisation en ligne et une taxe de séjour d'environ 30 dollars s'ajoutent avant le départ.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "TODO: Aucune vaccination n'est obligatoire, sauf la fièvre jaune en cas d'arrivée depuis un pays endémique. Un traitement antipaludique reste recommandé pour le delta et la rivière Chobe, de novembre à juin.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: De mai à octobre, le delta est en crue et la faune se concentre. De juillet à septembre, les températures restent les plus douces. De décembre à mars, les salines se remettent en eau et les zèbres descendent sur Nxai Pan.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "TODO: Le setswana est la langue nationale, l'anglais la langue officielle. L'anglais suffit partout, dans les camps comme sur les concessions.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "TODO: Les matins de juin et juillet descendent vers 5 °C, tandis qu'octobre dépasse souvent 38 °C. Les orages tombent de décembre à mars, le reste de l'année demeure sec. Le delta, lui, est en crue de mai à août, à contretemps des pluies locales.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Botswana. Un seul interlocuteur en assure la coordination. Il reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/botswana/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.webp`,
          alt: [
            "Itinéraire sur mesure au Botswana entre l'Okavango, Moremi et le Makgadikgadi",
            "Adresses confidentielles au Botswana : camps privés et concessions fermées",
            "Hébergements au Botswana : Eagle Island Lodge et Jack's Camp",
            "Conciergerie privée 24/7 pour un voyage au Botswana",
            "Expériences immersives au Botswana : mokoro, suricates et safari nocturne",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Botswana",
      heading: "Six territoires, du delta aux salines",
      description:
        "Six secteurs composent la carte du pays, du delta de l'Okavango aux baobabs de Baines, de la rivière Gomoti au front de Chobe. Peu d'itinéraires les réunissent dans un même voyage.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Le delta de l'Okavango",
          description:
            "Le delta est inscrit au patrimoine mondial de l'UNESCO depuis 2014, comme millième site de la liste. Son eau descend d'Angola et n'atteint jamais la mer. Elle s'évapore dans les sables du Kalahari.",
          image: {
            src: "/destination/botswana/map-okavango.webp",
            alt: "Canaux et îles du delta de l'Okavango bordés de papyrus, Botswana",
          },
          // TODO: verify coords
          coordinates: { lat: -19.28, lng: 22.9 },
        },
        {
          title: "Moremi et la rivière Gomoti",
          description:
            "Moremi a été créée en 1963 à l'initiative des BaTawana. C'est le premier cas de réserve africaine voulue par une population locale. La Gomoti traverse son secteur sud-est et reste en eau toute l'année.", // TODO: verify date et antériorité de Moremi
          image: {
            src: "/destination/botswana/map-moremi-gomoti.webp",
            alt: "Berges de la rivière Gomoti bordées de palmiers dans le sud-est de la réserve de Moremi",
          },
          // TODO: verify coords
          coordinates: { lat: -19.55, lng: 23.55 },
        },
        {
          title: "Les salines du Makgadikgadi",
          description:
            "Les pans de Ntwetwe et de Sua occupent le lit d'un lac disparu, sur près de 12 000 km². Rien n'y pousse en saison sèche. L'horizon y paraît même légèrement courbe.", // TODO: verify surface des pans
          image: {
            src: "/destination/botswana/map-makgadikgadi.webp",
            alt: "Croûte de sel craquelée des pans de Ntwetwe au Makgadikgadi, Botswana",
          },
          // TODO: verify coords
          coordinates: { lat: -20.5, lng: 25.3 },
        },
        {
          title: "Nxai Pan et les baobabs de Baines",
          description:
            "Sept baobabs peints par Thomas Baines en 1862 se tiennent encore au bord du pan, dans la même disposition. Les zèbres y descendent en janvier, avec les premières pluies.", // TODO: verify nombre d'arbres et date du tableau
          image: {
            src: "/destination/botswana/map-nxai-pan.webp",
            alt: "Groupe de baobabs de Baines au bord du pan de Nxai, nord du Botswana",
          },
          // TODO: verify coords
          coordinates: { lat: -20.1, lng: 24.77 },
        },
        {
          title: "Chobe et le chenal de Savuti",
          description:
            "En fin de saison sèche, le front de rivière de Chobe rassemble l'une des plus fortes densités d'éléphants du continent. Savuti, plus à l'intérieur, dépend d'un chenal qui s'assèche puis se remet en eau sans prévenir.",
          image: {
            src: "/destination/botswana/map-chobe-savuti.webp",
            alt: "Troupeau d'éléphants sur le front de rivière de Chobe au coucher du soleil",
          },
          // TODO: verify coords
          coordinates: { lat: -17.83, lng: 24.9 },
        },
        {
          title: "Maun, la porte du delta",
          description:
            "La ville est le siège des BaTawana et le point de départ des vols intérieurs. Les Cessna y décollent en continu vers les pistes de sable des concessions du delta.",
          image: {
            src: "/destination/botswana/map-maun.webp",
            alt: "Cessna à l'arrêt sur une piste de sable près de Maun, porte du delta de l'Okavango",
          },
          // TODO: verify coords
          coordinates: { lat: -19.9833, lng: 23.4167 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Botswana",
      description:
        "Huit repères issus du terrain. Ils aident à choisir la période, à comprendre le découpage de l'itinéraire et à ajuster les attentes.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "La crue de l'Okavango et le calendrier",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les pluies tombent en Angola dès janvier. L'eau atteint le delta entre mai et août",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le delta ne dépend pas de la pluie locale. Les précipitations
                tombent sur les hauts plateaux d&apos;Angola, entre janvier et
                mars. L&apos;eau descend ensuite par le fleuve Okavango, franchit
                la bande de Caprivi, puis s&apos;étale dans le Kalahari quatre
                mois plus tard.
              </p>
              <p>
                La conséquence est concrète. Le delta atteint son plus haut
                niveau entre mai et août, alors que le ciel est sec depuis
                longtemps. Les points d&apos;eau de l&apos;intérieur ont disparu
                et la faune se rassemble sur les îles. C&apos;est la période où
                la sortie en bateau prend tout son sens.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le niveau varie d&apos;une année sur l&apos;autre. Nous
                confirmons donc le choix des camps deux à trois mois avant le
                départ, selon la hauteur d&apos;eau relevée sur place.
              </p>
            </div>
          ),
        },
        {
          title: "Réserve publique et réserve privée",
          cardEyebrow: "Safari",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dans Moremi et Chobe, tout se joue entre le lever et le coucher du soleil. La nuit appartient aux réserves privées",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La réserve de Moremi et le parc de Chobe sont ouverts à tous les
                opérateurs. Les pistes y sont tracées et le hors-piste reste
                interdit. La marche et les sorties nocturnes n&apos;y sont pas
                autorisées. Les portes ouvrent au lever du soleil et ferment à
                son coucher.
              </p>
              <p>
                Les concessions privées fonctionnent autrement. Elles sont louées
                à un opérateur unique, qui y limite le nombre de véhicules. La
                marche accompagnée y devient possible, le hors-piste est encadré,
                et les sorties se prolongent au projecteur à filtre rouge.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;itinéraire exploite les deux régimes. Le delta et Moremi
                offrent la densité de faune du jour. Les réserves privées du
                Makgadikgadi ouvrent ensuite la marche avec les guides Bushmen San et les
                sorties de nuit.
              </p>
            </div>
          ),
        },
        {
          title: "Les vols intérieurs et la limite de bagages",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Cessna Caravan au départ de Maun, sac souple obligatoire, environ 20 kg par personne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les camps du delta se rejoignent en avion léger, depuis Maun ou
                Kasane. Le vol dure de vingt minutes à une heure et se pose sur
                des pistes de sable. Il fait aussi office de survol : le dessin
                des bras d&apos;eau ne se comprend vraiment que d&apos;en haut.
              </p>
              <p>
                La franchise est d&apos;environ 20 kg par personne, en sac souple
                uniquement. Les valises rigides ne passent pas dans les soutes.
                Les camps assurent toutefois le blanchissage quotidien, ce qui
                rend la contrainte plus tenable qu&apos;elle n&apos;y paraît.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Le surplus se dépose en consigne à Maun et se récupère au retour.
                Ce dépôt est organisé dans chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Formalités et taxe de séjour",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Pas de visa pour les Français. Une autorisation en ligne et une taxe de séjour à régler avant le départ",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les ressortissants français n&apos;ont pas besoin de visa pour un
                séjour touristique de moins de quatre-vingt-dix jours. Le
                passeport doit rester valide six mois après la date de retour. Il
                doit également comporter deux pages vierges, face à face.
              </p>
              <p>
                Une autorisation de voyage électronique et une taxe de séjour
                d&apos;environ 30 dollars américains s&apos;appliquent à
                l&apos;entrée. Les deux se règlent en ligne, avant le départ.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Un enfant mineur qui voyage sans ses deux parents doit présenter
                une copie intégrale de son acte de naissance et une autorisation
                parentale. Ce contrôle est appliqué strictement à
                l&apos;arrivée.
              </p>
            </div>
          ),
        },
        {
          title: "Paludisme et santé",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Transmission dans le nord de novembre à juin. Traitement préventif recommandé pour le delta et Chobe",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le nord du pays est une zone de transmission du paludisme, de
                novembre à juin. Cela concerne le delta de l&apos;Okavango et la
                rivière Chobe. Le traitement préventif se prescrit avant le
                départ, auprès d&apos;un médecin du voyage ou d&apos;un centre de
                vaccinations internationales.
              </p>
              <p>
                Les salines du Makgadikgadi et le Kalahari central présentent un
                risque nettement plus faible. Aucune vaccination n&apos;est
                obligatoire, sauf la fièvre jaune en cas d&apos;arrivée depuis un
                pays endémique.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Les camps du delta se situent à une heure de vol du premier
                hôpital. Une couverture d&apos;évacuation sanitaire est donc
                intégrée à chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Les salines et la saison du sel",
          cardEyebrow: "Terrain",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les pans se traversent à sec de mai à octobre. En janvier, l'eau revient et les flamants avec elle",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De mai à octobre, la croûte de sel est portante. C&apos;est la
                période des sorties en quad, des nuits de camping sur le pan et
                des marches avec les guides Bushmen San. Le silence y est total et
                l&apos;horizon ne présente aucun relief.
              </p>
              <p>
                De décembre à mars, l&apos;eau revient dans les dépressions de
                Sua et de Nxai. Les zèbres descendent alors des plaines, les
                flamants nains nichent par milliers et les pistes deviennent
                impraticables. Les deux visages du même lieu n&apos;ont rien de
                commun.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les clans de suricates s&apos;observent toute l&apos;année.
                Seules les sorties motorisées sur le pan dépendent de la saison.
              </p>
            </div>
          ),
        },
        {
          title: "Le prolongement par les chutes Victoria",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Environ une heure trente de route depuis Kasane. Deux nuits suffisent pour l'étape",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Depuis Kasane et le front de rivière de Chobe, les chutes
                Victoria se rejoignent par la route en une heure trente environ.
                Cela vaut côté zimbabwéen comme côté zambien. Le passage de
                frontière se fait dans la journée.
              </p>
              <p>
                Deux nuits suffisent. Le débit atteint son maximum en avril,
                juste après les pluies, puis le rideau d&apos;eau se réduit
                nettement entre octobre et décembre. Le survol en hélicoptère
                reste le seul moyen de saisir la géométrie de la faille.
              </p>
              <h4 className="font-medium">À noter :</h4>
              <p>
                Un itinéraire combiné implique un second jeu de formalités, selon
                le pays choisi pour les chutes. Il est traité en amont du départ.
              </p>
            </div>
          ),
        },
        {
          title: "Paiements et pourboires",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les camps facturent en dollars. Les pourboires se règlent en espèces, en petites coupures",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La monnaie locale est le pula. Les camps, les lodges et les
                compagnies aériennes intérieures facturent toutefois en dollars
                américains. La carte bancaire fonctionne à Maun et à Kasane,
                rarement au-delà.
              </p>
              <p>
                Les pourboires font partie des usages du safari. Ils concernent
                le guide, le pisteur, le piroguier et l&apos;équipe de camp. Ils
                se règlent en espèces, en coupures de 5, 10 et 20 dollars. Les
                billets antérieurs à 2009 sont souvent refusés.
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
            "Nous sommes restés assis dans le sel pendant une heure, à un mètre des terriers. Un jeune suricate est ensuite monté sur l'épaule de mon fils pour regarder le ciel. Personne ne lui avait rien demandé.",
          image: {
            src: "/destination/botswana/hero-1.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Okavango et Makgadikgadi, juillet 2024", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois camps en dix jours, et trois pays différents en réalité. L'eau, puis la forêt, puis le sel. Sur la Gomoti, nous n'avons croisé aucun autre véhicule en trois jours.",
          image: {
            src: "/destination/botswana/hero-2.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Botswana et chutes Victoria, septembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Le safari de nuit a été la vraie surprise du voyage. Pas les lions du matin, mais l'oryctérope repéré à trente mètres dans le faisceau rouge. Personne ne l'aurait vu de jour.",
          image: {
            src: "/destination/botswana/hero-3.webp",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Moremi et Makgadikgadi, juin 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Botswana ?",
          answer:
            "De mai à octobre pour le safari. Le delta est alors en crue, les points d'eau de l'intérieur ont disparu et la faune se concentre. Juillet à septembre offre les températures les plus douces. Octobre concentre davantage encore les animaux, mais la chaleur y dépasse souvent 38 °C. De décembre à mars, les pluies remettent les salines en eau et font descendre les zèbres sur Nxai Pan.",
        },
        {
          question: "Combien de temps dure le vol Paris-Botswana ?",
          answer:
            "Il n'existe pas de vol direct. Le trajet dure 16 à 18 heures au total, généralement via Johannesburg, Doha ou Addis-Abeba. Un second vol d'une heure quarante rejoint ensuite Maun ou Kasane. Un dernier saut en avion léger, de vingt minutes à une heure, mène enfin à la piste du camp.",
        },
        {
          question: "Faut-il un visa pour aller au Botswana ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour un séjour touristique de moins de quatre-vingt-dix jours. Le passeport doit rester valide six mois après le retour et comporter deux pages vierges. Une autorisation de voyage en ligne et une taxe de séjour d'environ 30 dollars américains sont à régler avant le départ.",
        },
        {
          question: "Que faire au Botswana en 10 jours ?",
          answer:
            "Trois nuits sur l'île de Xaxaba, dans le delta, pour les sorties en bateau et en mokoro. Trois nuits ensuite sur la rivière Gomoti, au sud-est de Moremi, pour les safaris en véhicule. Trois nuits enfin face aux salines du Makgadikgadi, pour les suricates, la marche avec les guides Bushmen San et les sorties de nuit. Les chutes Victoria s'ajoutent en deux nuits depuis Kasane.",
        },
        {
          question: "Okavango ou Chobe : quelle différence ?",
          answer:
            "Le delta de l'Okavango est un milieu aquatique. On s'y déplace en bateau, en mokoro et en avion léger, et les camps y sont isolés sur des îles. Chobe est un front de rivière, accessible par la route depuis Kasane. On y trouve les plus fortes densités d'éléphants du pays, mais aussi une fréquentation nettement supérieure. Le delta se prête donc à la confidentialité, Chobe à l'abondance.",
        },
        {
          question: "Quel budget prévoir pour un safari au Botswana ?",
          answer:
            "Un voyage au Botswana sur mesure avec Exuma se situe généralement entre 9 000 et 18 000 € par personne pour dix jours, hors vols internationaux, delta, concession privée et salines compris. Le pays applique une politique de tourisme à faible volume. Le nombre de lits par concession y est plafonné, ce qui explique des tarifs supérieurs à ceux du Kenya ou de la Tanzanie.",
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
        "Le même continent, deux autres grammaires de safari. La migration du Serengeti d'un côté, les plaines du Masaï Mara de l'autre. Deux prolongements possibles après un premier voyage en Afrique australe.",
      // TODO: ajouter "namibie" dès que la page existe (le rendu filtre les slugs inconnus).
      slugs: ["tanzanie", "kenya"],
    },
  ],
};
