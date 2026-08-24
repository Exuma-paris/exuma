import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "zimbabwe",
  name: "Zimbabwe",
  placeKind: "country",
  country: "Zimbabwe",
  genitive: "du Zimbabwe",
  continentSlug: "afrique",
  blurb: "Chutes Victoria, Hwange, Mana Pools, Matobo",
  keywords: [
    "zimbabwe",
    "chutes victoria",
    "hwange",
    "mana pools",
    "matobo",
    "great zimbabwe",
    "malilangwe",
    "zambeze",
  ],
  metaTitle: "Zimbabwe : Voyage sur mesure",
  metaDescription:
    "Voyage au Zimbabwe sur mesure : chutes Victoria, éléphants de Hwange, marche à Mana Pools, collines de Matobo. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Zimbabwe",
      heading: "On entend le fleuve bien avant de le voir",
      description:
        "Le grondement des chutes porte à des kilomètres et la brume d'eau se repère depuis l'avion. Plus au sud, Hwange, Matobo et Malilangwe ne font aucun bruit. C'est le même pays, et presque personne n'y va.",
      images: [
        {
          src: "/destination/zimbabwe/hero-1.png",
          alt: "Voyage au Zimbabwe : les chutes Victoria et leur brume d'eau vues depuis la rive zimbabwéenne",
        },
        {
          src: "/destination/zimbabwe/hero-2.png",
          alt: "Troupeau d'éléphants autour d'un point d'eau du parc de Hwange en fin de journée",
        },
        {
          src: "/destination/zimbabwe/hero-3.png",
          alt: "Blocs de granit empilés dans les collines de Matobo, au sud du Zimbabwe",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Zimbabwe ?",
      heading: "Carole, spécialiste du Zimbabwe, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution — à faire valider par Carole avant mise en ligne
        quote:
          "Le Zimbabwe a l'école de guides la plus exigeante d'Afrique, et ça change tout sur le terrain. Un guide professionnel y passe des années d'examens avant d'avoir le droit de marcher devant des clients. On ne regarde pas les animaux de la même façon quand on est à pied, avec quelqu'un de ce niveau.",
        role: "Travel Designer · Zimbabwe",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Zimbabwe",
      heading: "Un pays qui se marche, pas seulement qui se traverse",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage au Zimbabwe commence presque toujours par les chutes Victoria, et on se trompe sur ce qu'on va y trouver. On entend l'eau bien avant de la voir. Le sentier longe la gorge juste en face du rideau, à travers une forêt que la brume de la chute entretient toute l'année : selon le mois, on en ressort humide ou trempé.",
        "Le reste du pays commence à l'intérieur. À Hwange, il n'y a pas une seule rivière : la faune vit autour de points d'eau alimentés par des pompes, et en fin de saison sèche, tout le parc converge vers ces quelques mares. On s'installe à l'affût, on coupe le moteur, et les troupeaux arrivent d'eux-mêmes.",
        "Plus au nord, la plaine du Zambèze se parcourt à pied, sans véhicule d'escorte. Peu de parcs africains l'autorisent encore. Au sud, les collines de Matobo empilent le granit au-dessus des peintures San, et Great Zimbabwe garde les murs de pierre sèche d'une cité médiévale. Le pays se raconte autant qu'il s'observe.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/zimbabwe/full-image.png",
        alt: "Voyage au Zimbabwe : la plaine du Zambèze et les acacias albida du parc de Mana Pools",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Zimbabwe : la marche et la pierre",
      heading: "À Mana Pools, on avance à pied sous les albidas",
      theme: "light",
      paragraphs: [
        "L'acacia albida de Mana Pools fait l'inverse des autres arbres : il perd ses feuilles à la saison des pluies et les garde à la saison sèche. Le résultat est une forêt claire, sans sous-bois, où le regard porte loin. C'est ce qui rend la marche possible ici, et presque nulle part ailleurs.",
        // TODO: verify (éléphants dressés sur les pattes arrière de la vallée du Zambèze)
        "Le guide passe devant, s'arrête, pose la main à plat. On s'arrête aussi. Devant, un éléphant se dresse sur ses pattes arrière pour attraper les gousses en hauteur : dans cette vallée, ils sont une poignée à savoir le faire, et les guides les appellent par leur nom.",
      ],
      images: [
        {
          src: "/destination/zimbabwe/split-1.png",
          alt: "Guide professionnel et marcheurs entre les acacias de la plaine de Mana Pools",
        },
        {
          src: "/destination/zimbabwe/split-2.png",
          alt: "Éléphant dressé sur ses pattes arrière pour atteindre les gousses d'un albida",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/zimbabwe/xp-chutes-a-pied-1.png",
          alt: "Sentier de la rive zimbabwéenne face au rideau d'eau des chutes Victoria",
        },
        right: {
          src: "/destination/zimbabwe/xp-chutes-a-pied-2.png",
          alt: "Promontoire de Danger Point au-dessus de la gorge du Zambèze",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le sentier qui fait face au rideau d'eau",
        columns: [
          "Le sentier commence dans la forêt et suit la gorge sur toute sa longueur. On marche en face de la chute, pas au-dessus : le rideau est juste en face, de l'autre côté de la faille, et la brume passe par-dessus les arbres. Le bruit couvre les conversations, et on finit par ne plus parler du tout.",
          "Les points de vue s'enchaînent, du Devil's Cataract à Danger Point, et chacun donne un angle différent sur la même cassure. Le dernier avance sur un promontoire au-dessus du vide. On y va tôt le matin, avant les groupes, quand la lumière atteint encore le fond de la gorge.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Zimbabwe",
      heading: "Ce qui se réserve avant le départ",
      description:
        "Les créneaux des guides professionnels et les concessions privées se bloquent des mois à l'avance. Ces sorties se calent avant le départ, pas sur place.",
      slugs: [
        "croisiere-premium-zambeze",
        "helicoptere-chutes-victoria",
        "safari-vehicule-hwange",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Zimbabwe",
      description:
        "Une maison sur sa propre réserve à Victoria Falls, un camp de tentes dans une concession privée de Hwange, et un domaine fermé au public dans le sud-est. Trois terrains, un même niveau de service.",
      slugs: [
        "anantara-stanley-livingstone",
        "linkwasha-camp",
        "singita-pamushana",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Zimbabwe",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage au Zimbabwe.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Pas de vol direct depuis Paris. Une escale à Addis-Abeba, Nairobi, Doha ou Johannesburg, et de quatorze à vingt heures de trajet total selon la correspondance, jusqu'à Victoria Falls (VFA) ou Harare (HRE). Les charters relient ensuite Hwange, Mana Pools et le sud-est en moins d'une heure de vol.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Une heure d'avance sur Paris en hiver, aucune en été. Le pays ne change pas d'heure. Autant dire qu'il n'y a rien à récupérer à l'arrivée, ce qui est rare sur un long-courrier.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le pays vit en double monnaie. Le dollar américain reste utilisé pour l'essentiel des transactions, dont les camps, les parcs et les transferts ; le ZiG, monnaie nationale introduite en 2024, sert surtout aux dépenses courantes. Prévoir des espèces en petites coupures et en bon état.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Visa obligatoire pour les ressortissants français, délivré à l'arrivée ou en ligne sur evisa.gov.zw, ce pré-enregistrement étant recommandé. Le KAZA UniVisa couvre le Zimbabwe et la Zambie pendant trente jours et autorise les allers-retours par le pont de Victoria Falls. Passeport valide six mois après le voyage, avec deux pages vierges.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination obligatoire depuis l'Europe. Le certificat de fièvre jaune n'est exigé qu'en provenance d'un pays où la maladie circule. Le paludisme est présent dans la vallée du Zambèze et à Hwange : le traitement préventif se décide avec son médecin avant le départ.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à octobre pour la saison sèche. Août à octobre concentre les meilleures observations, quand la brousse s'éclaircit et que les animaux se rassemblent aux points d'eau. Les chutes sont à leur plus fort débit de février à mai, et les plus lisibles d'août à décembre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la langue de travail, le shona et le ndebele les deux langues les plus parlées. La Constitution en reconnaît seize. Les guides professionnels travaillent en anglais ; un accompagnateur francophone se prévoit sur demande.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Sec et lumineux de mai à octobre, de 25 à 30 °C l'après-midi. Les matins de juin et juillet descendent près de zéro en brousse : il faut une polaire pour le départ en véhicule. Octobre est le mois chaud, jusqu'à 40 °C dans la vallée du Zambèze, avant les pluies de novembre à mars.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Zimbabwe mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/zimbabwe/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Zimbabwe entre le Zambèze, Hwange et le sud-est",
            "Adresses confidentielles au Zimbabwe : concessions privées et réserves fermées au public",
            "Hébergements au Zimbabwe : camp de tentes de Hwange et maison de la vallée du Zambèze",
            "Conciergerie privée 24/7 pour un voyage au Zimbabwe",
            "Expériences immersives au Zimbabwe : marche à Mana Pools, chutes Victoria et peintures San",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître au Zimbabwe",
      heading: "Six territoires, du Zambèze aux collines du sud",
      description:
        "Des chutes Victoria à la réserve de Malilangwe, six territoires que douze jours permettent d'enchaîner sans passer ses journées sur la piste.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 6,
      places: [
        {
          title: "Les chutes Victoria",
          description:
            "Mosi-oa-Tunya, la fumée qui gronde. Le fleuve entier bascule d'un coup dans une faille de basalte, et la rive zimbabwéenne fait face au rideau d'eau sur toute sa longueur.",
          image: {
            src: "/destination/zimbabwe/map-victoria-falls.png",
            alt: "Rideau d'eau des chutes Victoria et gorge du Zambèze vus de la rive zimbabwéenne",
          },
          // TODO: verify coords
          coordinates: { lat: -17.9243, lng: 25.8572 },
        },
        {
          title: "Le parc national de Hwange",
          description:
            "Un parc immense à la lisière du Kalahari, sans une seule rivière. Les points d'eau sont pompés, et c'est là que se rassemblent les plus grands troupeaux d'éléphants du pays.",
          image: {
            src: "/destination/zimbabwe/map-hwange.png",
            alt: "Plaine herbeuse et point d'eau du parc national de Hwange au Zimbabwe",
          },
          // TODO: verify coords
          coordinates: { lat: -18.9333, lng: 26.5 },
        },
        {
          title: "Mana Pools et la vallée du Zambèze",
          description:
            "Une plaine d'inondation classée au patrimoine mondial, plantée d'acacias albida. L'un des rares parcs d'Afrique australe où la marche se fait sans véhicule d'escorte.",
          image: {
            src: "/destination/zimbabwe/map-mana-pools.png",
            alt: "Bras du Zambèze et forêt claire d'albidas dans le parc de Mana Pools",
          },
          // TODO: verify coords
          coordinates: { lat: -15.7333, lng: 29.35 },
        },
        {
          title: "Les collines de Matobo",
          description:
            "Des blocs de granit posés en équilibre à perte de vue, criblés d'abris ornés de peintures San. C'est aussi l'un des derniers terrains à rhinocéros du pays.",
          image: {
            src: "/destination/zimbabwe/map-matobo.png",
            alt: "Blocs de granit en équilibre et abris rupestres des collines de Matobo",
          },
          // TODO: verify coords
          coordinates: { lat: -20.5, lng: 28.5 },
        },
        {
          title: "Great Zimbabwe",
          description:
            "La cité de pierre médiévale qui a donné son nom au pays. Les murs du Grand Enclos montent plus haut qu'une maison, empilés à sec, sans un gramme de mortier.",
          image: {
            src: "/destination/zimbabwe/map-great-zimbabwe.png",
            alt: "Murs de pierre sèche du Grand Enclos de Great Zimbabwe",
          },
          // TODO: verify coords
          coordinates: { lat: -20.2675, lng: 30.9333 },
        },
        {
          title: "Malilangwe et le Gonarezhou",
          description:
            "Une réserve privée fermée au public, adossée au parc du Gonarezhou et à ses falaises de Chilojo. Rhinocéros noirs réintroduits, abris peints et lac artificiel au milieu du bush.",
          image: {
            src: "/destination/zimbabwe/map-malilangwe.png",
            alt: "Falaises de Chilojo et brousse du sud-est zimbabwéen, près de Malilangwe",
          },
          // TODO: verify coords
          coordinates: { lat: -21.05, lng: 31.7 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Zimbabwe",
      description:
        "Huit repères rapportés du terrain : ce qu'il faut viser, quand partir, et ce qui change d'un parc à l'autre.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Le guide fait le voyage, pas le camp",
          cardEyebrow: "Guides",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La licence de guide professionnel zimbabwéenne est la plus longue à obtenir d'Afrique australe",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Au Zimbabwe, un guide professionnel accumule des années
                d&apos;apprentissage et une série d&apos;examens écrits, oraux et
                de terrain avant d&apos;être autorisé à emmener des clients à
                pied. Le taux d&apos;échec est élevé et le titre se compte en
                dizaines de personnes dans tout le pays.
              </p>
              <p>
                Concrètement, cela change la nature des journées : on descend du
                véhicule, on suit des traces, on s&apos;approche à pied. C&apos;est
                la vraie raison de choisir le Zimbabwe plutôt qu&apos;un voisin
                mieux équipé.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons le guide avant le camp. Les meilleurs sont
                bloqués un an à l&apos;avance sur la haute saison.
              </p>
            </div>
          ),
        },
        {
          title: "Douze jours du fleuve au sud-est",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois bases suffisent : les chutes, un parc du nord-ouest, un domaine du sud. Trois nuits par étape",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays est vaste et les pistes sont lentes. Le découpage qui
                fonctionne tient en trois bases : deux ou trois nuits à Victoria
                Falls pour le fleuve et la gorge, trois nuits dans une
                concession privée de Hwange ou dans la vallée du Zambèze, puis
                trois à quatre nuits dans le sud, entre Matobo, Great Zimbabwe
                et Malilangwe.
              </p>
              <p>
                Les liaisons se font en charter léger. Compter une heure de vol
                là où la route demande une journée entière.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;itinéraire garde au moins deux journées entières sans
                transfert, en général sur le parc central.
              </p>
            </div>
          ),
        },
        {
          title: "Les chutes n'ont pas le même visage selon le mois",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Débit maximal de février à mai, meilleure visibilité d'août à décembre",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                À la crue, entre février et mai, le débit est spectaculaire mais
                la brume d&apos;eau masque une bonne partie du rideau : on
                repart trempé et on a peu vu. À l&apos;étiage, d&apos;octobre à
                décembre, la roche apparaît sur la partie est, et l&apos;ensemble
                du site se lit d&apos;un seul regard.
              </p>
              <p>
                Le survol en hélicoptère résout la question en toute saison,
                puisqu&apos;il donne la faille entière et le tracé du fleuve en
                amont.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calons la visite du sentier sur l&apos;heure et le mois, pas
                sur le programme de la journée.
              </p>
            </div>
          ),
        },
        {
          title: "Mana Pools ne s'ouvre qu'une partie de l'année",
          cardEyebrow: "Accès",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les camps de la vallée du Zambèze ferment à la saison des pluies, les pistes deviennent impraticables",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La plaine d&apos;inondation du Zambèze est coupée pendant la
                saison des pluies, et la plupart des camps de Mana Pools ferment
                de décembre à mars. La fenêtre utile va d&apos;avril ou mai à
                novembre, avec un pic en septembre et octobre, quand les animaux
                se concentrent sur les mares résiduelles.
              </p>
              <p>
                Octobre y est très chaud, souvent au-delà de 40 °C
                l&apos;après-midi. C&apos;est aussi le meilleur mois pour la
                marche au petit matin.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Si les dates tombent en saison des pluies, nous basculons le
                séjour sur Hwange et le sud, qui restent praticables.
              </p>
            </div>
          ),
        },
        {
          title: "Le charter impose un bagage souple",
          cardEyebrow: "Dans ma valise",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Sac souple obligatoire sur les vols légers, et une polaire pour les matins de juin",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les liaisons entre parcs se font en petit avion, avec une limite
                de poids par personne et l&apos;interdiction des valises
                rigides. Le sac souple n&apos;est pas une préférence : c&apos;est
                la seule forme qui entre dans la soute.
              </p>
              <p>
                Pour le reste : des teintes neutres pour la marche, une polaire
                et un coupe-vent pour les départs avant l&apos;aube, un maillot
                pour les camps, et de quoi se protéger de la brume aux chutes.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Le détail des franchises est communiqué avec les billets
                intérieurs, camp par camp.
              </p>
            </div>
          ),
        },
        {
          title: "Payer en dollars, en petites coupures",
          cardEyebrow: "Argent",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dollar américain règle presque tout, mais les billets abîmés sont refusés",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les camps, les parcs et les transferts se facturent en dollars
                américains. Les distributeurs sont rares et souvent vides hors
                de Harare : les espèces se préparent avant le départ, en petites
                coupures pour les pourboires et les entrées de parcs.
              </p>
              <p>
                Les billets froissés, déchirés ou antérieurs à une certaine
                série sont régulièrement refusés. Il faut des coupures propres.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Tout ce qui peut être prépayé depuis Paris l&apos;est, pour
                limiter les espèces à emporter.
              </p>
            </div>
          ),
        },
        {
          title: "Les rhinocéros noirs se voient encore, mais pas partout",
          cardEyebrow: "Faune",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Matobo et les réserves privées du sud sont les terrains où le pistage à pied reste possible",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pistage du rhinocéros noir se fait à pied, accompagné des
                gardes qui suivent les animaux au quotidien. Il se pratique dans
                les collines de Matobo et sur quelques réserves privées du sud,
                pas dans les grands parcs ouverts.
              </p>
              <p>
                Les localisations ne se communiquent pas et les photos
                géolocalisées sont proscrites sur place. Cela fait partie du
                protocole de protection.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                La sortie se réserve auprès de la réserve elle-même, avec un
                nombre de participants limité par groupe.
              </p>
            </div>
          ),
        },
        {
          title: "Great Zimbabwe mérite un archéologue",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La cité de pierre se comprend mal sans quelqu'un qui en raconte l'histoire et les controverses",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le site couvre plusieurs collines et le Grand Enclos aligne des
                murs de pierre sèche montés sans mortier. Sans accompagnement,
                on voit un empilement de blocs ; avec un archéologue, on suit
                l&apos;histoire d&apos;une capitale marchande reliée à
                l&apos;océan Indien, puis celle de sa relecture pendant la
                période coloniale.
              </p>
              <p>
                Les oiseaux de stéatite retrouvés sur place sont devenus
                l&apos;emblème du pays et figurent sur son drapeau.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous réservons un universitaire francophone ou anglophone selon
                les disponibilités, en début de matinée avant les groupes.
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
            "La marche à Mana Pools, c'est ce dont on parle encore. Notre guide s'arrêtait, levait la main, et on comprenait sans un mot. On est repartis en silence, sans avoir croisé un seul véhicule de la matinée.",
          image: {
            src: "/destination/zimbabwe/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Zambèze et Mana Pools, septembre 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous cherchions une destination que nos enfants ne connaissaient pas, et c'était réussi. Great Zimbabwe avec un archéologue le matin, les collines de Matobo l'après-midi : personne n'a regardé son téléphone de la journée.",
          image: {
            src: "/destination/zimbabwe/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Matobo et Great Zimbabwe, août 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois nuits dans une concession privée de Hwange, sans croiser un autre véhicule. Le point d'eau se regardait depuis la tente. On avait fait l'Afrique de l'Est avant : ça n'a rien à voir.",
          image: {
            src: "/destination/zimbabwe/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Victoria Falls et Hwange, octobre 2024", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Zimbabwe ?",
          answer:
            "De mai à octobre, pendant la saison sèche. Août à octobre donne les meilleures observations : la brousse s'éclaircit, l'herbe est basse et les animaux se rassemblent aux points d'eau. Les chutes Victoria suivent un calendrier différent, avec un débit maximal de février à mai et une meilleure visibilité d'août à décembre. Les pluies tombent de novembre à mars et ferment une partie des camps de la vallée du Zambèze.",
        },
        {
          question: "Combien de temps dure le vol Paris-Zimbabwe ?",
          answer:
            "Il n'existe pas de vol direct. Avec une escale à Addis-Abeba, Nairobi, Doha ou Johannesburg, comptez de quatorze à vingt heures de trajet total selon la correspondance, jusqu'à Victoria Falls (VFA) ou Harare (HRE). Les liaisons intérieures vers Hwange, la vallée du Zambèze et le sud-est se font ensuite en charter léger, en moins d'une heure de vol.",
        },
        {
          question: "Faut-il un visa pour aller au Zimbabwe ?",
          answer:
            "Oui. Les ressortissants français ont besoin d'un visa, qui s'obtient à l'arrivée à l'aéroport ou en ligne sur le portail officiel evisa.gov.zw, où le pré-enregistrement avant le départ est recommandé. Le KAZA UniVisa, valable trente jours pour le Zimbabwe et la Zambie, permet de franchir plusieurs fois le pont de Victoria Falls. Le passeport doit rester valide six mois après le voyage et comporter au moins deux pages vierges. Aucune vaccination n'est obligatoire depuis l'Europe, mais un traitement antipaludique se discute avec son médecin.",
        },
        {
          question: "Que faire au Zimbabwe en 12 jours ?",
          answer:
            "Trois nuits à Victoria Falls pour le sentier de la gorge, la croisière sur le haut Zambèze et éventuellement le survol de la faille. Puis trois nuits dans une concession privée de Hwange pour les grands troupeaux d'éléphants, ou dans la vallée du Zambèze si l'on veut marcher à Mana Pools. Enfin quatre à cinq nuits dans le sud : les collines de Matobo, Great Zimbabwe avec un archéologue, et une réserve privée du sud-est pour le pistage du rhinocéros noir.",
        },
        {
          question: "Le Zimbabwe est-il adapté aux familles ?",
          answer:
            "Oui, à partir d'un certain âge. Les camps fixent en général un minimum pour les sorties à pied, et la marche en brousse ne convient pas aux jeunes enfants. Avec des adolescents, le pays est en revanche un excellent terrain : safaris en véhicule à Hwange, canoë et pêche sur le Zambèze, sites archéologiques et peintures rupestres. Plusieurs camps proposent des tentes familiales et des guides dédiés à la famille.",
        },
        {
          question: "Où dormir au Zimbabwe ?",
          answer:
            "À Victoria Falls, mieux vaut s'éloigner du bourg et choisir une maison installée sur sa propre réserve, à une vingtaine de minutes des chutes. Dans les parcs, la différence se joue sur la concession : un camp en concession privée donne accès à un terrain que personne d'autre ne parcourt, avec sortie de nuit et marche autorisées. Dans le sud-est, les réserves privées fermées au public offrent le format le plus abouti du pays, avec un nombre de suites très limité.",
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
        "D'autres façons de parcourir l'Afrique, du delta de l'Okavango aux plaines du Serengeti. Trois prolongements possibles après un premier voyage au Zimbabwe.",
      slugs: ["botswana", "tanzanie", "kenya"],
    },
  ],
};
