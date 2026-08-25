import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "paris",
  name: "Paris",
  country: "France",
  genitive: "de Paris",
  continentSlug: "europe",
  blurb: "Marais, Saint-Germain, Faubourg, Batignolles, Belleville",
  keywords: [
    "paris",
    "marais",
    "saint germain",
    "faubourg",
    "batignolles",
    "belleville",
    "rive gauche",
    "rive droite",
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage sur mesure",
      heading:
        "Paris. Une ville qu'on croit connaître, jusqu'à la première porte qui s'ouvre.",
      description:
        "Vingt arrondissements, des dizaines de quartiers, des heures qu'aucune carte ne montre. Du Marais aux Batignolles, de Saint-Germain à la Petite Ceinture, chaque rue garde son rythme. Nous construisons un séjour autour de portes que les autres ne franchissent pas.",
      images: [
        {
          src: "/destination/paris/hero-1.png",
          alt: "Vue depuis les toits de Paris au lever du soleil",
        },
        {
          src: "/destination/paris/hero-2.png",
          alt: "Bouquinistes des quais de Seine en fin d'après-midi",
        },
        {
          src: "/destination/paris/hero-3.png",
          alt: "Cour intérieure d'un hôtel particulier du Marais",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Paris ?",
      heading:
        "Ludivine, spécialiste de Paris, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "ludivine",
        // TODO: replace with a real verbatim from Ludivine (was Élise placeholder)
        quote:
          "Paris se traverse trois fois avant de commencer à comprendre. Mon rôle, c'est d'écrire la première traversée, les bonnes heures, les bons quartiers, les portes qui ne s'ouvrent pas pour tout le monde. Et de laisser la deuxième et la troisième pour les fois suivantes.",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Conciergerie 24/7",
          description:
            "Réservations de dernière minute, transferts privés, accès rapide à l'Opéra et aux ventes Drouot.",
        },
        {
          iconName: "sparkles",
          title: "Sur mesure",
          description:
            "Un travel designer dédié, expert de Paris, façonne le séjour selon vos envies.",
        },
        {
          iconName: "star",
          title: "Exclusif",
          description:
            "Ateliers d'artisans, librairies confidentielles, tables qui ne prennent pas de réservation.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une ville qui change de visage selon l'heure et la rue",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "À six heures du matin, place de la Concorde, la ville est encore au gris. Pas un car, pas un photographe. Seuls les balayeurs, et la lumière qui n'a pas encore basculé. C'est l'heure que les guides ne mentionnent pas, et c'est celle qui dit le mieux ce qu'est Paris.",
        "Un voyage à Paris se construit autour des heures, plus que des lieux. Le Louvre à dix-neuf heures avec un conservateur, quand les couloirs sont vides. Rungis à quatre heures avec un chef étoilé, dans le tumulte du marché de gros. Le café du Marais à onze heures, dans la pause d'un libraire qui vous ouvre l'arrière-boutique. C'est cette logique de moments que nous travaillons depuis plus de dix ans.",
        "« Paris, ce n'est pas une carte postale. C'est une ville qu'on traverse trois ou quatre fois avant de commencer à comprendre. Et les fois suivantes ne ressemblent à aucune des précédentes. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/paris/full-image.png",
        alt: "Vue aérienne de Paris avec la Seine et les ponts au crépuscule",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Les passages, IIe arrondissement",
      heading: "Sous la verrière, la ville s'arrête",
      theme: "light",
      paragraphs: [
        "Entre la Bourse et le Palais-Royal, des galeries couvertes ont été ouvertes au début du XIXe siècle pour permettre aux Parisiens de marcher à l'abri de la pluie et de la boue. La plupart ont disparu. Une vingtaine subsistent. Le passage des Panoramas, le plus ancien (1799), a gardé ses devantures, ses imprimeurs, ses cartophiles, son odeur de papier vieilli.",
        "Le passage Choiseul s'étire sur cent quatre-vingt-dix mètres, parallèle à la rue de la Banque. Lucarne ouvrante, parquet en bois, librairies anciennes. Vers dix-sept heures, quand le soleil descend, la verrière prend une couleur qu'on ne soupçonne pas. À pied, sans haste, comptez une heure entre les Panoramas et le Vivienne, et un café au Bistrot Vivienne, qu'aucun guide ne mentionne, et où il y a toujours une table en fin d'après-midi.",
        "C'est la même ville, à dix mètres des grands boulevards. Personne ne crie. Aucune sirène.",
      ],
      images: [
        {
          src: "/destination/paris/split-1.png",
          alt: "Verrière du passage des Panoramas en fin d'après-midi",
        },
        {
          src: "/destination/paris/split-2.png",
          alt: "Devanture d'un libraire ancien dans le passage Choiseul",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/paris/bouquiniste.png",
          alt: "Bouquiniste sur le quai de Conti devant ses caisses vertes",
        },
        right: {
          src: "/destination/paris/ebeniste.png",
          alt: "Ébéniste plaquant un secrétaire dans son atelier du Faubourg Saint-Antoine",
        },
      },
      text: {
        eyebrow: "Notre approche",
        heading: "Les gestes qui n'ont pas bougé",
        columns: [
          "À Paris, certaines mains travaillent encore comme elles travaillaient au XIXe siècle. Un bouquiniste sur le quai de Conti vend des éditions originales du Mercure de France. Un ébéniste rue de Charonne plaque du bois de violette sur un secrétaire à abattant, comme un compagnon du Faubourg le faisait sous Louis XVI. Ces ateliers ne sont pas des reconstitutions. Ils ouvrent encore le matin. On peut y passer.",
          "Notre travail, c'est l'introduction. Le bouquiniste qui sortira pour vous une première édition de Bonjour tristesse. L'ébéniste qui acceptera la conversation un mardi à dix heures. Le restaurateur de tableaux, quai Voltaire, qui vous montrera ce qu'il restaure pour le Louvre. Un seul interlocuteur coordonne tout cela. Les rendez-vous sont pris. Vous arrivez.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Trois expériences",
      heading: "Sur place, concrètement",
      description:
        "Des moments ancrés dans des personnes et des lieux précis. Ni démonstrations, ni programme, des accès qui ne se trouvent pas en cherchant.",
      cta: { label: "Voir tous les coups de cœur", href: "/experiences" },
      slugs: ["louvre-prive-nocturne", "rungis-chef", "atelier-lesage"],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Trois adresses, trois Paris",
      description:
        "Trois adresses choisies pour ce qu'elles sont, pas pour leurs étoiles. Le palace, le quai, et la rive gauche en vingt chambres.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["le-bristol", "cheval-blanc-paris", "lhotel-paris"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Ce qu'il faut savoir avant de partir à Paris",
      description:
        "L'essentiel à anticiper avant l'arrivée, formalités, transports, et la fenêtre que nous recommandons.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "TODO: 1h depuis Londres, 2h depuis Madrid, 7h depuis New York. Aéroports CDG (international, 35 km nord-est) et Orly (15 km sud).",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "TODO: Aucun depuis l'Europe occidentale. -6h depuis New York, +6h depuis Tokyo, +9h depuis Los Angeles.",
        },
        {
          iconName: "euro",
          title: "Monnaie",
          description: "Euro. Carte bancaire acceptée presque partout, espèces utiles dans les marchés et chez certains artisans.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa pour les ressortissants UE et la plupart des pays européens. Visa Schengen pour le reste.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description: "Aucun vaccin spécifique requis.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "TODO: Mai à juin et septembre à mi-octobre, lumière douce, terrasses ouvertes, fréquentation modérée. Juillet-août animés mais certains commerces ferment.",
        },
        {
          iconName: "languages",
          title: "Langues",
          description:
            "Français (officiel). L'anglais est largement compris dans les hôtels et restaurants des arrondissements centraux.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Notre rôle dans ce voyage",
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Paris. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: [
        {
          title: "Création d'itinéraires",
          description:
            "Du Marais aux Batignolles, dans quel ordre, à quelle heure. Une cohérence qui tient compte des fermetures, des marchés, et de la lumière.",
          image: {
            src: "/destination/paris/bento-itineraire.png",
            alt: "Carte d'itinéraire personnalisé dans Paris",
          },
          tone: "dark",
        },
        {
          title: "Adresses confidentielles",
          description:
            "Cantines fermées au public, ateliers d'artisans, libraires sans devanture, terrasses qu'on ne trouve pas en ligne.",
          image: {
            src: "/destination/paris/bento-adresses.png",
            alt: "Devanture discrète d'un atelier rue de Charonne",
          },
        },
        {
          title: "Hébergements de caractère",
          description:
            "Du palace de la rue du Faubourg à la maison de famille de douze chambres rive gauche, en passant par les hôtels particuliers du Marais.",
          image: {
            src: "/destination/paris/bento-hebergement.png",
            alt: "Cour intérieure d'un hôtel particulier parisien",
          },
        },
        {
          title: "Conciergerie 24/7",
          description:
            "Réservations de dernière minute, transferts privés, accès rapide à l'Opéra Garnier ou aux ventes Drouot.",
          image: {
            src: "/destination/paris/bento-conciergerie.png",
            alt: "Foyer de l'Opéra Garnier",
          },
        },
        {
          title: "Expériences immersives",
          description:
            "Visite privée des coulisses de l'Opéra. Atelier d'un brodeur de la Maison Lesage. Sourcing à Rungis avec un chef étoilé.",
          image: {
            src: "/destination/paris/bento-experience.png",
            alt: "Brodeuse au métier dans l'atelier Lesage",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les quartiers",
      heading: "Les Paris à connaître",
      description:
        "Une fois la carte des arrondissements posée, chaque quartier tient une promesse distincte. Voici ceux autour desquels s'organisent la plupart de nos séjours.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 12,
      places: [
        {
          title: "Le Marais",
          description:
            "Médiéval et juif, gay et BCBG, hôtels particuliers et galeries. Le quartier où Paris a accepté tous ses mille-feuilles.",
          image: {
            src: "/destination/paris/map-marais.png",
            alt: "Façades du Marais place des Vosges",
          },
          coordinates: { lat: 48.857, lng: 2.358 },
        },
        {
          title: "Saint-Germain-des-Prés",
          description:
            "Libraires, galeristes, hôtels feutrés. Lipp, le Flore. Une rive intellectuelle qui a gardé sa lenteur.",
          image: {
            src: "/destination/paris/map-saint-germain.png",
            alt: "Devanture du Café de Flore boulevard Saint-Germain",
          },
          coordinates: { lat: 48.853, lng: 2.334 },
        },
        {
          title: "Île Saint-Louis",
          description:
            "Petite île entre les deux bras de la Seine. Hôtels particuliers du XVIIe, glaces Berthillon, vue arrière sur Notre-Dame.",
          image: {
            src: "/destination/paris/map-ile-saint-louis.png",
            alt: "Quai de Bourbon sur l'Île Saint-Louis",
          },
          coordinates: { lat: 48.852, lng: 2.357 },
        },
        {
          title: "Les Batignolles",
          description:
            "Le 17e gentrifié, encore peu touristique. Marché bio le samedi, Square des Batignolles, vie de quartier intacte.",
          image: {
            src: "/destination/paris/map-batignolles.png",
            alt: "Marché des Batignolles le samedi matin",
          },
          coordinates: { lat: 48.886, lng: 2.318 },
        },
        {
          title: "Le Faubourg Saint-Honoré",
          description:
            "L'axe des palaces et de la haute couture. Élysée, ambassades, Le Bristol. L'autorité tranquille du quartier.",
          image: {
            src: "/destination/paris/map-faubourg-saint-honore.png",
            alt: "Façade de l'Élysée rue du Faubourg Saint-Honoré",
          },
          coordinates: { lat: 48.87, lng: 2.318 },
        },
        {
          title: "Belleville / Ménilmontant",
          description:
            "L'envers du Paris carte postale. Cours communautaires, ateliers, vue depuis le Parc de Belleville. Café Aux Folies.",
          image: {
            src: "/destination/paris/map-belleville.png",
            alt: "Vue depuis le Parc de Belleville sur les toits de Paris",
          },
          coordinates: { lat: 48.871, lng: 2.391 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Paris",
      description:
        "Quelques repères concrets pour préparer le séjour : ce qu'on emporte, ce qu'on anticipe côté santé, la fenêtre idéale, et comment fonctionne la vie sur place.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Tenue confortable de marche, pull pour les soirées, parapluie pliable même en été.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Paris se traverse à pied : prévoyez des chaussures qui tiennent
                sur les pavés. Les écarts de température entre matin et soir
                peuvent dépasser dix degrés au printemps et à l&apos;automne,
                un pull léger est utile presque toujours.
              </p>
              <p>
                Une tenue un peu habillée pour un dîner ou un opéra. Les
                grandes maisons exigent toujours veste et chaussures fermées en
                soirée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                « Nos clients reçoivent une checklist personnalisée selon les
                activités prévues, environ 3 semaines avant le départ. »
              </p>
            </div>
          ),
        },
        {
          title: "Santé",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Aucun vaccin obligatoire. Numéros d'urgence européens (112) actifs partout.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pas de vaccin obligatoire. Mise à jour des vaccins universels
                recommandée. L&apos;eau du robinet est potable.
              </p>
              <p>
                Les pharmacies de garde sont signalées sur la porte des
                pharmacies fermées. Hôpital américain à Neuilly-sur-Seine,
                Hôpital franco-britannique à Levallois, anglophones et
                réactifs.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                Carte européenne d&apos;assurance maladie pour les voyageurs UE.
                Pour les autres, vérifiez votre couverture voyage avant le
                départ.
              </p>
            </div>
          ),
        },
        {
          title: "Meilleure période",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Mai-juin et septembre-mi-octobre pour la lumière et les terrasses sans la foule.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Mai à juin et septembre à mi-octobre : lumière douce, terrasses
                ouvertes, fréquentation modérée. La plupart des grands musées
                sont moins saturés en semaine.
              </p>
              <p>
                Juillet-août sont animés mais beaucoup d&apos;adresses
                ferment trois semaines en août. Anticipez les réservations
                restaurants et les rendez-vous artisans en conséquence.
              </p>
              <h4 className="font-medium">Conseil expert :</h4>
              <p>
                « La fenêtre que nous recommandons en priorité va de mi-mai à
                fin juin. Climat stable, lumière exceptionnelle, peu de
                fermetures. »
              </p>
            </div>
          ),
        },
        {
          title: "Budget & vie locale",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Euro, carte bancaire partout, métro pratique, taxis sur application.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Carte bancaire acceptée presque partout, sans-contact
                généralisé. Pourboire non obligatoire (le service est inclus)
                mais apprécié quand le service a été personnel, 5 à 10 % en
                restaurant.
              </p>
              <p>
                Le métro reste le plus rapide pour les trajets courts. Les taxis
                G7, Uber et Bolt fonctionnent dans toute la ville. Les
                transferts privés à l&apos;arrivée et au départ sont
                systématiquement organisés.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                « Nous organisons tous les transferts de nos clients :
                chauffeur privé, voiture de location avec chauffeur si besoin,
                réservations restaurants et culturelles incluses. »
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
            "Quatre jours à Paris organisés par Exuma. La visite du Louvre après fermeture, l'atelier Lesage à Aubervilliers, le déjeuner au Bristol, chaque moment était à sa juste place. On n'a pas eu une seule décision logistique à prendre.",
          image: {
            src: "/destination/paris/hero-1.png",
            alt: "Portrait de Sophie et Marc", // TODO: verify
          },
          name: "Sophie & Marc", // TODO: verify
          role: "Anniversaire de mariage, juin 2026", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Notre travel designer a obtenu un rendez-vous chez un ébéniste du Faubourg que je cherchais à rencontrer depuis trois ans. Une heure de conversation, une vraie. C'est ce que je viens chercher dans un voyage à Paris.",
          image: {
            src: "/destination/paris/hero-2.png",
            alt: "Portrait de Laurent", // TODO: verify
          },
          name: "Laurent", // TODO: verify
          role: "Séjour en solo, octobre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marquée, c'est la qualité du choix. Trois adresses très différentes, un palace, un hôtel quai du Louvre, un boutique rive gauche, et chacune a fait sens à son moment du séjour. Tout fluide, du premier appel jusqu'au retour.",
          image: {
            src: "/destination/paris/hero-3.png",
            alt: "Portrait de Claire", // TODO: verify
          },
          name: "Claire", // TODO: verify
          role: "Escapade culturelle, mars 2026", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir à Paris ?",
          answer:
            "Mai à juin et septembre à mi-octobre offrent le meilleur compromis : lumière douce, terrasses ouvertes, fréquentation modérée. Juillet-août restent animés, mais beaucoup d'adresses ferment trois semaines en août, à anticiper côté restaurants et artisans.",
        },
        {
          question: "Combien de jours faut-il pour visiter Paris correctement ?",
          answer:
            "Quatre à cinq jours pleins permettent de couvrir trois à quatre quartiers à un rythme qui ne cours pas. Une semaine ouvre l'accès à des moments plus rares : Versailles, Giverny, ou un déplacement à Reims pour la Champagne.",
        },
        {
          question: "Faut-il un visa pour venir à Paris ?",
          answer:
            "Aucun visa n'est requis pour les ressortissants de l'Union européenne et de la plupart des pays européens. Pour les autres nationalités, un visa Schengen est généralement nécessaire, votre travel designer vérifiera les formalités selon votre passeport avant le départ.",
        },
        {
          question:
            "Comment se déplacer dans Paris ?",
          answer:
            "Le métro reste le plus rapide pour les trajets courts. Les taxis G7, Uber et Bolt sont actifs partout. Pour vos clients, nous organisons systématiquement les transferts privés (arrivée, départ, dîners), chauffeur dédié quand le séjour le justifie.",
        },
        {
          question: "Quel budget prévoir ?",
          answer:
            "TODO: Nos voyages sur mesure à Paris démarrent à partir de 3 500 € par personne pour un séjour de quatre nuits. Le budget varie selon le choix de l'hébergement, des expériences artisanales et des tables réservées.",
        },
      ],
    },
  ],
};
