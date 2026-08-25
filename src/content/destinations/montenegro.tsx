import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "montenegro",
  name: "Monténégro",
  placeKind: "country",
  country: "Monténégro",
  genitive: "du Monténégro",
  continentSlug: "europe",
  blurb: "Baie de Kotor, Sveti Stefan, Durmitor, Perast",
  keywords: [
    "montenegro",
    "kotor",
    "sveti-stefan",
    "durmitor",
    "budva",
    "perast",
    "boka",
    "tara",
    "cetinje",
  ],
  metaTitle: "Monténégro : Voyage sur mesure",
  metaDescription:
    "Voyage au Monténégro sur mesure : baie de Kotor, Sveti Stefan, canyon de la Tara. Itinéraire conçu par votre travel designer Exuma, conciergerie privée 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Monténégro",
      heading: "Là où l'Adriatique se referme sur elle-même",
      // TODO: verify bay length and canyon depth
      description:
        "Les Bouches de Kotor s'enfoncent sur 28 kilomètres entre les Alpes dinariques, jusqu'à un village-hôtel qui n'existe qu'au bout d'une jetée. Plus au nord, le canyon de la Tara creuse 1 300 mètres sous le plateau du Durmitor. Un seul pays, deux échelles qui ne se répondent jamais.",
      images: [
        {
          src: "/destination/montenegro/hero-1.png",
          alt: "Vue aérienne de la baie de Kotor au Monténégro entre les Alpes dinariques",
        },
        {
          src: "/destination/montenegro/hero-2.png",
          alt: "Village-hôtel de Sveti Stefan relié à la côte par une jetée",
        },
        {
          src: "/destination/montenegro/hero-3.png",
          alt: "Voilier privé mouillé face aux remparts de Kotor au lever du jour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Monténégro ?",
      heading:
        "Stéphane, spécialiste du Monténégro, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Si je devais vous conseiller une chose au Monténégro, ce serait de ne pas chercher à tout voir trop vite. La baie de Kotor peut se découvrir en une journée, mais je vous recommande de lui consacrer davantage de temps : prendre la route, s'arrêter dans un village, déjeuner face à la baie, puis poursuivre jusqu'aux montagnes. C'est en prenant ce rythme que le Monténégro révèle toute sa beauté.",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Monténégro",
      heading: "Un pays qui tient entre une baie et une montagne",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage au Monténégro commence presque toujours par la même image : une route qui descend en lacets vers une baie si refermée sur elle-même qu'on la prend d'abord pour un lac. Ce n'est pas un lac. C'est l'une des baies les plus profondément découpées de la Méditerranée, et la seule où un fjord européen croise une vieille ville vénitienne.",
        "Kotor referme ses remparts au pied du mont Vrmac. À quinze minutes en bateau, Perast aligne ses palais baroques face à l'îlot artificiel de Notre-Dame-du-Rocher. Plus haut, la route aux vingt-cinq virages grimpe vers Njeguši, village natal de la dynastie Petrović-Njegoš, avant de rejoindre Cetinje, l'ancienne capitale royale posée sur son plateau.",
        "Le pays tient dans un espace que l'on met deux heures à traverser d'un bout à l'autre. C'est peut-être ce qui explique pourquoi si peu de voyageurs s'y arrêtent plus d'une nuit, et pourquoi ceux qui y restent une semaine en reviennent avec l'impression d'avoir vu un pays entier.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/montenegro/full-image.png",
        alt: "Vue aérienne de la baie de Kotor et des Alpes dinariques au Monténégro",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Monténégro, le luxe et l'exclusif",
      heading: "Une baie fermée, une poignée d'adresses qui la comprennent",
      theme: "light",
      paragraphs: [
        "Notre sélection s'ouvre sur un Monténégro que la plupart des visiteurs de Kotor ne voient jamais. Un village de pêcheurs du XVe siècle reconstruit îlot par îlot, accessible uniquement en golfette. Une marina de superyachts où l'on descend du bateau directement dans le hall de l'hôtel. Des propriétés qui se comptent sur les doigts d'une main, et qui suffisent à couvrir l'ensemble de la baie.",
        "À terre, le pays se raconte par ses artisans. Un vigneron de la Crmnica sort son vranac sur les rives du lac de Skadar. Un producteur de Njeguši affine son prosciutto et son fromage de brebis dans une cave ouverte aux courants d'air de la montagne, une technique inchangée depuis des générations. Ces rencontres, plus que les plages, sont ce qui reste d'un voyage au Monténégro.",
      ],
      images: [
        {
          src: "/destination/montenegro/split-1.png",
          alt: "Cave d'affinage traditionnelle du prosciutto de Njeguši",
        },
        {
          src: "/destination/montenegro/split-2.png",
          alt: "Voilier mouillé dans une crique discrète de la baie de Kotor",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/montenegro/xp-croisiere-kotor-1.png",
          alt: "Voilier privé quittant Kotor à l'aube dans la brume",
        },
        right: {
          src: "/destination/montenegro/xp-croisiere-kotor-2.png",
          alt: "Îlot de Notre-Dame-du-Rocher vu depuis un voilier près de Perast",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le matin où la baie n'appartient qu'à un seul bateau",
        columns: [
          "Le voilier quitte le quai de Kotor avant que la brume ne se lève sur les Alpes dinariques. Il longe Perast et ses palais baroques, ralentit devant l'îlot de Gospa od Škrpjela, Notre-Dame-du-Rocher, construit pierre par pierre par des marins depuis 1452. À cette heure, aucun ferry, aucun bateau de croisière, aucune autre voile ne coupe la baie.",
          "On mouille au large de Perast pour le café, on plonge si l'eau est assez calme, on referme la voile au moment où les premiers bateaux-taxis sortent de Kotor. Ce n'est pas une croisière au coucher du soleil. C'est l'inverse : la baie vue avant que la journée ne la remplisse.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Monténégro",
      heading: "Nos coups de cœur au Monténégro",
      description:
        "Du canyon de la Tara vu depuis un hélicoptère aux remparts de Kotor gravis avant l'ouverture, chaque expérience s'ancre dans un lieu précis, jamais dans un concept générique.",
      slugs: [
        "helico-canyon-tara",
        "remparts-kotor-aube",
        "vin-crmnica-lac-skadar",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Nos hébergements",
      description:
        "Trois adresses qui couvrent l'ensemble de la baie de Kotor et de ses environs, d'un îlot du XVe siècle à une marina de superyachts.",
      slugs: [
        "aman-sveti-stefan",
        "one-only-portonovi",
        "regent-porto-montenegro",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Monténégro",
      description:
        "L'essentiel avant de partir pour un pays encore peu documenté par les guides classiques.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Comptez environ 2h30 de vol direct depuis Paris-Orly vers Tivat. Des liaisons directes vers Tivat et Podgorica sont proposées au départ de Paris, principalement du printemps à l'automne.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun décalage horaire avec la France. Le Monténégro est sur le même fuseau horaire : UTC+1 en hiver et UTC+2 en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie est l'euro (€). Le Monténégro utilise l'euro comme monnaie officielle, bien qu'il ne fasse pas partie de la zone euro et n'ait pas de convention monétaire avec l'Union européenne.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour de moins de 90 jours. Une carte nationale d'identité en cours de validité suffit pour un séjour inférieur à 30 jours ; au-delà, un passeport en cours de validité est nécessaire.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin particulier n'est obligatoire pour entrer au Monténégro. Il est toutefois recommandé d'être à jour des vaccinations du calendrier vaccinal français. Selon les conditions du séjour, notamment pour les séjours prolongés ou en milieu rural, certaines vaccinations complémentaires peuvent être recommandées.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mai à juin et de septembre à octobre, pour profiter d'un climat agréable, de températures plus douces et d'une fréquentation moindre sur la côte. Juillet et août sont les mois les plus chauds et les plus fréquentés. Pour combiner baignades, visites et découverte des montagnes, le début de l'été et le début de l'automne offrent un excellent équilibre.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "La langue officielle est le monténégrin. Le serbe, le bosnien, l'albanais et le croate sont également couramment parlés. Dans les zones touristiques, notamment sur la côte, l'anglais est largement utilisé.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le Monténégro présente des climats très contrastés sur un territoire pourtant compact. La côte bénéficie d'un climat méditerranéen, avec des étés chauds et secs et des hivers doux. Dans le centre et le nord, le climat devient progressivement montagnard, avec des hivers froids et enneigés, notamment dans le massif du Durmitor.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Monténégro. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/montenegro/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Carte d'itinéraire personnalisé au Monténégro",
            "Adresse confidentielle dans la vieille ville de Kotor",
            "Villa privée face à la baie de Kotor",
            "Concierge Exuma sur la marina de Porto Montenegro",
            "Dégustation de vranac chez un vigneron de la Crmnica",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Monténégro",
      heading: "Le Monténégro, la mer en toile de fond, les montagnes pour horizon",
      description:
        "Un pays qui se traverse vite mais se comprend lentement : la côte adriatique d'un côté, les Alpes dinariques de l'autre.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 8,
      places: [
        {
          title: "Kotor",
          description:
            "Cité vénitienne enfermée dans ses remparts au pied du mont Vrmac, porte d'entrée de la baie la plus refermée de l'Adriatique.",
          image: {
            src: "/destination/montenegro/map-kotor.png",
            alt: "Remparts et vieille ville de Kotor",
          },
          // TODO: verify coords
          coordinates: { lat: 42.4247, lng: 18.7712 },
        },
        {
          title: "Perast",
          description:
            "Dix-sept palais baroques alignés face à l'îlot de Notre-Dame-du-Rocher, bâti par des marins depuis 1452.",
          image: {
            src: "/destination/montenegro/map-perast.png",
            alt: "Palais baroques de Perast face à l'îlot de Notre-Dame-du-Rocher",
          },
          // TODO: verify coords
          coordinates: { lat: 42.4864, lng: 18.6975 },
        },
        {
          title: "Sveti Stefan",
          description:
            "Village de pêcheurs du XVe siècle relié à la côte par une seule jetée, aujourd'hui réservé aux hôtes de l'îlot.",
          image: {
            src: "/destination/montenegro/map-sveti-stefan.png",
            alt: "Îlot de Sveti Stefan relié à la côte par une jetée",
          },
          // TODO: verify coords
          coordinates: { lat: 42.2565, lng: 18.8909 },
        },
        {
          title: "Budva",
          description:
            "Citadelle méditerranéenne parmi les plus anciennes de la côte, plages de sable en éventail tout autour.",
          image: {
            src: "/destination/montenegro/map-budva.png",
            alt: "Citadelle et vieille ville de Budva sur la côte adriatique",
          },
          // TODO: verify coords
          coordinates: { lat: 42.2864, lng: 18.84 },
        },
        {
          title: "Cetinje",
          description:
            "Ancienne capitale royale posée sur son plateau, monastères orthodoxes et palais de la dynastie Petrović-Njegoš.",
          image: {
            src: "/destination/montenegro/map-cetinje.png",
            alt: "Palais royal et monastère de Cetinje",
          },
          // TODO: verify coords
          coordinates: { lat: 42.3906, lng: 18.9219 },
        },
        {
          title: "Durmitor",
          description:
            "Plateau calcaire à plus de 2 000 mètres, dix-huit lacs glaciaires et le canyon de la Tara qui le borde au nord.",
          image: {
            src: "/destination/montenegro/map-durmitor.png",
            alt: "Plateau du Durmitor et lac glaciaire au Monténégro",
          },
          // TODO: verify coords
          coordinates: { lat: 43.1547, lng: 19.1224 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Monténégro",
      description:
        "Un pays qui se traverse en deux heures mais change de visage à chaque col. Quelques repères pour préparer un séjour à la hauteur de ce que le Monténégro a à offrir.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue légère pour la côte, chaussures de marche et lainage pour le Durmitor : le Monténégro se joue sur deux reliefs.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Carte d&apos;identité ou passeport en cours de validité.
                Permis de conduire si vous louez un véhicule (recommandé pour
                rejoindre le Durmitor).
              </p>
              <p>
                &laquo; Nous vérifions systématiquement les formalités de
                chacun de nos clients avant le départ. &raquo;
              </p>
              <h4 className="font-medium">L&apos;essentiel :</h4>
              <p>
                TODO: Tenue légère pour la côte, chaussures de marche et
                lainage pour les soirées en altitude. Crème solaire haute
                protection, maillot de bain pour la baie.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                &laquo; Nos clients reçoivent une checklist personnalisée
                selon les activités prévues lors de leur séjour, environ 3
                semaines avant. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire. Quelques précautions pour la route de montagne et le soleil de la côte.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Aucun vaccin obligatoire. Vaccinations universelles à
                jour. Numéro d&apos;urgence européen (112) actif dans tout le
                pays.
              </p>
              <p>
                Soleil intense en été sur la côte, vigilance déshydratation
                en randonnée dans le Durmitor. Eau du robinet potable dans les
                grandes villes.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Trousse de pharmacie de voyage classique : antalgiques,
                pansements, crème apaisante après-soleil.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "De mai à juin et de septembre à mi-octobre pour la mer chaude et les routes de montagne sans embouteillage.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: La période recommandée par notre équipe : mai-juin et
                septembre-mi-octobre. Mer entre 22 °C et 25 °C, cols du
                Durmitor dégagés, fréquentation modérée.
              </p>
              <p>
                Juillet-août : haute saison sur la côte, chaleur forte,
                Kotor et Budva très fréquentées, à anticiper côté
                hébergements.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                TODO: Le Durmitor reste enneigé jusqu&apos;en mai sur les
                sommets ; certains cols ne sont praticables qu&apos;à partir
                de juin.
              </p>
            </div>
          ),
        },
        {
          title: "Budget & Vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Euro, paiement par carte généralisé sur la côte. Marchés de producteurs et tables familiales dans l'arrière-pays.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Euro. Paiement par carte largement accepté sur la côte,
                espèces plus utiles dans l&apos;arrière-pays. Pourboire non
                obligatoire mais apprécié (5–10 % en restaurant).
              </p>
              <p>
                Marchés le matin à Kotor et Budva : prosciutto de Njeguši,
                fromage de brebis, vranac local.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Nous organisons systématiquement tous les transferts
                de nos clients : chauffeur privé, bateau ou hélicoptère selon
                les envies. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "Se déplacer dans le pays",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Voiture avec chauffeur recommandée : la route entre la côte et le Durmitor grimpe vite et compte de nombreux virages.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Deux heures suffisent pour traverser le pays d&apos;est
                en ouest. La route du canyon de la Tara compte de nombreux
                virages en épingle, un chauffeur local change l&apos;expérience.
              </p>
              <p>
                Sur la baie de Kotor, le bateau reste souvent plus rapide que
                la route côtière, surtout en haute saison.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                &laquo; Chauffeur privé et bateau sont réservés en amont pour
                chaque étape du séjour. &raquo;
              </p>
            </div>
          ),
        },
        {
          title: "La baie de Kotor en bateau",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le bateau privé change la lecture de la baie : Perast, Notre-Dame-du-Rocher et Sveti Stefan se rejoignent en une matinée.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Départ conseillé tôt le matin, avant les bateaux-taxis
                et les ferries touristiques. Comptez une demi-journée pour
                Perast et l&apos;îlot de Notre-Dame-du-Rocher.
              </p>
              <p>
                La baie se referme presque sur elle-même au niveau de Verige,
                le passage le plus étroit : un bon repère pour comprendre sa
                géographie.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>Réservez le bateau la veille en haute saison.</p>
            </div>
          ),
        },
        {
          title: "Randonnée dans le Durmitor",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Dix-huit lacs glaciaires et des sommets à plus de 2 000 mètres, à moins de deux heures de la côte.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Base à Žabljak, porte d&apos;entrée du parc national.
                Le tour du lac Noir (Crno jezero) se fait en moins de deux
                heures, accessible à tous les niveaux.
              </p>
              <p>
                Pour le canyon de la Tara, privilégier un point de vue en
                fin de matinée, quand la lumière descend jusqu&apos;au fond
                de la gorge.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Prévoir une nuit sur place plutôt qu&apos;un aller-retour
                depuis la côte : la route mérite qu&apos;on ne la fasse pas
                deux fois le même jour.
              </p>
            </div>
          ),
        },
        {
          title: "Langue et monnaie",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Monténégrin sur les papiers officiels, anglais et italien largement compris sur la côte.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                TODO: Le monténégrin est la langue officielle. L&apos;anglais
                est courant dans l&apos;hôtellerie, l&apos;italien reste
                compris sur la côte, héritage de la présence vénitienne.
              </p>
              <p>
                L&apos;euro est utilisé partout, y compris dans
                l&apos;arrière-pays, malgré l&apos;absence d&apos;adhésion à
                la zone euro.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>Quelques mots de serbo-croate suffisent à ouvrir les portes.</p>
            </div>
          ),
        },
      ],
    },

    {
      type: "testimonials",
      eyebrow: "Témoignages",
      heading: "Ils ont vécu l'expérience Exuma",
      cta: { label: "Créer mon voyage", href: "/votre-projet" },
      testimonials: [
        {
          // TODO: replace with real testimonial
          quote:
            "Nous ne connaissions le Monténégro que par la baie de Kotor sur les photos. La croisière en voilier à l'aube, la nuit à Sveti Stefan, la route jusqu'au Durmitor : on a eu l'impression de traverser trois pays en une semaine.",
          image: {
            src: "/destination/montenegro/hero-1.png",
            alt: "Portrait de Camille et Antoine", // TODO: verify
          },
          name: "Camille & Antoine", // TODO: verify
          role: "Voyage de noces, juin 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Notre travel designer nous a évité Budva en pleine saison et nous a envoyés à Perast à la place. Le déjeuner chez le vigneron de la Crmnica reste le meilleur souvenir du voyage.",
          image: {
            src: "/destination/montenegro/hero-2.png",
            alt: "Portrait de Marc", // TODO: verify
          },
          name: "Marc", // TODO: verify
          role: "Séjour en famille, août 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui nous a marqués, c'est le contraste : la baie le matin, le canyon de la Tara l'après-midi. Aucun autre pays ne tient ça en une seule journée sans que ça paraisse forcé.",
          image: {
            src: "/destination/montenegro/hero-3.png",
            alt: "Portrait de Sophie", // TODO: verify
          },
          name: "Sophie", // TODO: verify
          role: "Escapade en couple, septembre 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir au Monténégro ?",
          answer:
            "De mai à juin et de septembre à début octobre, pour profiter de températures agréables, d'une fréquentation plus douce et de conditions favorables pour explorer aussi bien la côte que les montagnes. Juillet et août sont les mois les plus animés sur le littoral : ils restent parfaits pour un séjour balnéaire, à condition d'anticiper les hébergements.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 2h30 de vol direct lorsqu'une liaison saisonnière est opérée vers le Monténégro. Les fréquences sont plus nombreuses en haute saison. Les possibilités de vols directs varient toutefois selon l'aéroport parisien et la période de voyage.",
        },
        {
          question: "Faut-il un visa pour le Monténégro ?",
          answer:
            "Non, pour les ressortissants français, aucun visa n'est nécessaire pour un séjour de moins de 90 jours. Une carte nationale d'identité en cours de validité suffit pour un séjour inférieur à 30 jours ; au-delà, un passeport en cours de validité est nécessaire.",
        },
        {
          question: "Que faire au Monténégro en une semaine ?",
          answer:
            "Pour une première découverte, nous vous conseillons de combiner la côte et les montagnes. Accordez trois à quatre nuits aux Bouches de Kotor pour explorer Kotor, Perast et les environs, puis poursuivez vers le nord pour deux à trois nuits autour de Žabljak. Le parc national du Durmitor, le canyon de la Tara et les lacs de montagne offrent un tout autre visage du pays.",
        },
        {
          question: "Le voyage est-il adapté aux familles ?",
          answer:
            "Oui. La baie de Kotor se prête bien aux excursions en bateau avec des enfants, et le Durmitor offre des randonnées courtes autour des lacs glaciaires, accessibles à tous les âges.",
        },
        {
          question: "Quel budget prévoir ?",
          answer:
            "Nos voyages sur mesure démarrent à partir de 3 500 € par personne pour une semaine. Le budget varie selon le choix des hébergements, des expériences et de la saison.",
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
        "Trois autres rivages méditerranéens où la même logique s'applique : des adresses confidentielles et un itinéraire qui suit le terrain plutôt qu'un guide.",
      slugs: ["grece", "corse", "italie"],
    },
  ],
};
