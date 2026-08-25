import type { Destination } from "@/lib/content/types";

export const destination: Destination = {
  slug: "seychelles",
  name: "Seychelles",
  country: "Seychelles",
  genitive: "des Seychelles",
  continentSlug: "iles-oceanie", // TODO: verify continent (géographiquement Afrique, océan Indien) regroupé ici avec les destinations îles/lagon
  placeKind: "country",
  blurb: "Mahé, Praslin, La Digue, Curieuse, Aride",
  keywords: [
    "seychelles",
    "mahe",
    "praslin",
    "la digue",
    "vallee de mai",
    "coco de mer",
    "anse source d argent",
    "ocean indien",
    "granit",
  ],
  metaTitle: "Seychelles, voyage sur mesure",
  metaDescription:
    "Voyage aux Seychelles sur mesure : Mahé, Praslin, La Digue, îles privées et lagons de granit. Itinéraire écrit par votre travel designer Exuma, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Seychelles",
      heading:
        "Seychelles. Le granit a ici quatre milliards d'années, et la mer s'arrête juste pour le contourner.",
      description:
        "Cent quinze îles, deux roches. Le granit ancien de Mahé, Praslin et La Digue, et les atolls de corail plus loin au sud. Anse Source d'Argent, la Vallée de Mai, les tortues de Curieuse : chaque île tient une promesse distincte. Nous assemblons celles qui ont une raison d'aller ensemble.",
      images: [
        {
          src: "/destination/seychelles/hero-1.png",
          alt: "Plage de granit rose et eau turquoise à Anse Source d'Argent, La Digue, Seychelles",
        },
        {
          src: "/destination/seychelles/hero-2.png",
          alt: "Forêt de cocotiers de la Vallée de Mai sur l'île de Praslin",
        },
        {
          src: "/destination/seychelles/hero-3.png",
          alt: "Lagon turquoise et blocs de granit vus du ciel aux Seychelles",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading:
        "Carole, spécialiste des Seychelles, reste votre interlocutrice du premier échange au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Aux Seychelles, la difficulté n'est pas de trouver une belle plage. Elles le sont toutes. La difficulté, c'est de savoir laquelle correspond à qui voyage, et dans quel ordre relier les îles pour que rien ne se ressemble. Une famille avec des enfants ne vit pas Praslin comme un couple qui vient se taire. C'est ce travail-là que je fais.",
        role: "Travel Designer · Seychelles",
      },
      features: [
        {
          iconName: "badgeCheck",
          title: "Îles privées et adresses hors réseaux",
          description:
            "North Island, Frégate, Petite Anse : des îles entières ou des criques que les moteurs de réservation ne montrent pas.",
        },
        {
          iconName: "sparkles",
          title: "Logique inter-îles",
          description:
            "Vols domestiques, catamaran, hélicoptère. Chaque saut entre Mahé, Praslin et La Digue a une raison, vérifiée sur le terrain.",
        },
        {
          iconName: "star",
          title: "Accès négociés localement",
          description:
            "Pêcheurs, gardes de la Vallée de Mai, conservateurs de Cousin. Des personnes qui connaissent les îles pour y travailler.",
        },
      ],
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Deux archipels, une même eau",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage aux Seychelles commence par une question de roche. Les îles intérieures, autour de Mahé, sont en granit : des blocs arrondis, gris et roses, posés sur le sable comme s'ils avaient toujours été là. Ils ont quatre milliards d'années. C'est le plus vieux socle océanique du monde, le seul fragment de continent resté seul au milieu de l'océan Indien après la séparation de l'Inde et de Madagascar.",
        "Le séjour se construit autour d'une logique de déplacement entre les îles. Mahé pour l'arrivée et le Morne Seychellois. Praslin pour la Vallée de Mai et le coco de mer, la plus grosse graine du monde végétal, classée au patrimoine mondial de l'UNESCO. La Digue pour Anse Source d'Argent, que l'on rejoint à vélo parce qu'il n'y a presque pas de voitures. Et, plus loin, Curieuse et ses tortues géantes, Cousin et ses sternes, Aride et sa flore rare. Chaque déplacement a une raison. Cette raison change la qualité de ce qu'on ressent en arrivant.",
        "« Il n'y a pas une Seychelles. Il y a celle des plages que tout le monde photographie, et celle des îles où l'on accoste à six pour la journée. Entre les deux, il y a tout le voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/seychelles/full-image.png",
        alt: "Plage de sable blanc et chaos de granit d'Anse Source d'Argent aux Seychelles",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "La Digue, Anse Source d'Argent",
      heading: "La plage que l'on rejoint à vélo",
      theme: "light",
      paragraphs: [
        "Sur La Digue, il n'y a presque pas de voitures. On loue un vélo au débarcadère de La Passe et on roule vers le sud, à plat, entre les takamakas et les murs de corail. La route s'arrête au domaine de L'Union, ancienne plantation de vanille et de coprah. Anse Source d'Argent commence juste derrière, et l'on comprend en arrivant pourquoi c'est la plage la plus photographiée de l'océan Indien : les blocs de granit y forment des couloirs d'eau peu profonde, et la marée basse découvre un sable que rien ne dérange.",
        "Le matin tôt, avant les navettes de Praslin, la plage est presque vide. Une tortue terrestre traverse le sentier sans se presser. Le guide montre, sans expliquer trop : les bassins entre les rochers, l'endroit où l'eau reste tiède, le passage qui mène à la crique suivante quand la première se remplit. À midi, le déjeuner se prend chez un habitant, à l'ombre, poisson grillé et chutney de fruit à pain. L'après-midi appartient à ceux qui restent.",
      ],
      images: [
        {
          src: "/destination/seychelles/split-1.png",
          alt: "Cycliste sur un sentier bordé de takamakas vers Anse Source d'Argent à La Digue",
        },
        {
          src: "/destination/seychelles/split-2.png",
          alt: "Couloirs d'eau peu profonde entre les blocs de granit d'Anse Source d'Argent",
        },
      ],
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Quatre expériences",
      heading: "Ce qu'on fait, concrètement",
      description:
        "Des moments vécus, ancrés dans des lieux et des personnes. Ni démonstrations, ni programme : des accès qui ne se trouvent pas en cherchant.",
      slugs: [
        "coucher-soleil-granit",
        "vol-helicoptere-seychelles",
        "eclosion-tortues-seychelles",
        "decouverte-iles-bateau-seychelles",
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/seychelles/coucher-granit-1.png",
          alt: "Apéritif au champagne installé au sommet d'une colline de granit au coucher du soleil aux Seychelles",
        },
        right: {
          src: "/destination/seychelles/coucher-granit-2.png",
          alt: "Ciel orangé se reflétant sur le lagon depuis un chaos de granit seychellois",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le soir où la roche prend la couleur du ciel",
        columns: [
          "On monte au sommet d'un chaos de granit une heure avant le coucher du soleil. L'installation est déjà là : des coussins posés sur la roche tiède, une lanterne, deux verres et une bouteille au frais. Pas de restaurant en contrebas, pas d'autre table. Le granit garde la chaleur du jour. Le ciel commence à changer de couleur avant l'heure officielle, et le gris des blocs vire au rose, puis à l'orange, en même temps que l'eau.",
          "Le guide reste en retrait. Il a choisi la colline pour son orientation, pour le silence, et parce qu'on y voit le soleil disparaître derrière une île sans une seule lumière artificielle. C'est un moment court. Quand la couleur tombe, on redescend à la lampe, et l'on garde longtemps le souvenir d'une roche qui, l'espace d'un quart d'heure, a eu exactement la teinte du ciel.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements aux Seychelles",
      heading: "Où séjourner",
      description:
        "Trois adresses choisies pour ce qu'elles sont, pas pour ce qu'elles disent. Le niveau se lit dans le texte, pas dans les étoiles.",
      slugs: ["north-island", "fregate-island-private", "four-seasons-mahe"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Seychelles",
      description:
        "Temps de vol, décalage, monnaie, formalités et meilleure saison : l'essentiel pour préparer le séjour sereinement.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Environ 10 heures en vol direct depuis Paris vers l'aéroport international de Mahé. Liaisons régulières via les compagnies du Golfe en option. Sauts inter-îles en avion ou hélicoptère.", // TODO: verify
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "+3 heures en hiver, +2 heures en été par rapport à la France. Un décalage léger qui n'impose presque pas d'acclimatation.", // TODO: verify
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Roupie seychelloise (SCR). 1 € ≈ 15 SCR. L'euro et la carte sont acceptés dans les hôtels ; un peu d'espèces utile pour les marchés et les bateaux.", // TODO: verify taux
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour un séjour touristique, mais une autorisation de voyage électronique (Seychelles Travel Authorisation) est à obtenir en ligne avant le départ. Passeport valide requis.", // TODO: verify
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination obligatoire pour les voyageurs en provenance d'Europe. Les vaccins universels à jour suffisent. Pas de paludisme sur les îles intérieures.", // TODO: verify
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Avril–mai et octobre–novembre, aux intersaisons : mer calme, vents faibles, lumière nette. De mai à septembre, l'alizé du sud-est rafraîchit ; de décembre à mars, plus humide.", // TODO: verify
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Trois langues officielles : le créole seychellois, le français et l'anglais. On se fait comprendre partout en français.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Tropical toute l'année, entre 24 et 32 °C. Les Seychelles sont hors de la ceinture cyclonique : pas de saison à éviter, seulement des nuances de vent et de pluie.", // TODO: verify
        },
      ],
    },

    {
      type: "bento",
      eyebrow: "Comment nous travaillons",
      heading: "Voyage sur mesure aux Seychelles",
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Seychelles. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: [
        {
          title: "Création d'itinéraires",
          description:
            "Cent quinze îles, deux archipels. Nous savons lesquelles assembler, dans quel ordre, et pourquoi. Une cohérence vérifiée sur le terrain.",
          image: {
            src: "/destination/seychelles/bento-map.png",
            alt: "Carte d'itinéraire personnalisé entre les îles des Seychelles",
          },
          tone: "dark",
        },
        {
          title: "Adresses confidentielles",
          description:
            "Îles privées, criques sans accès public, tables chez l'habitant. Des adresses qui ne se trouvent pas dans les moteurs de réservation.",
          image: {
            src: "/destination/seychelles/bento-adresses.png",
            alt: "Crique de granit isolée bordée de cocotiers aux Seychelles",
          },
        },
        {
          title: "Logistique inter-îles",
          description:
            "Vols domestiques, catamaran privé, hélicoptère, taxi-boat. Ce que nous mettons en place, vous n'avez pas à le vérifier.",
          image: {
            src: "/destination/seychelles/bento-aerien.png",
            alt: "Vue aérienne d'un lagon et d'îles de granit des Seychelles",
          },
        },
        {
          title: "Conciergerie 24/7",
          description:
            "Un seul interlocuteur, du premier échange jusqu'au retour. Réponse sous 24h. Les ajustements de dernière minute, gérés. Les transferts, privés.",
          image: {
            src: "/destination/seychelles/bento-conciergerie.png",
            alt: "Table dressée face au lagon au coucher du soleil aux Seychelles",
          },
        },
        {
          title: "Expériences immersives",
          description:
            "Tortues géantes de Curieuse, plongée à Saint-Pierre, coucher de soleil sur le granit. Des accès négociés avec ceux qui connaissent les îles.",
          image: {
            src: "/destination/seychelles/bento-experience.png",
            alt: "Tortue géante d'Aldabra sur l'île de Curieuse aux Seychelles",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Seychelles",
      heading: "Six lieux, et ce qu'il y a derrière",
      description:
        "Mahé, Praslin, La Digue, Curieuse, Cousin, Aride : chaque île tient une promesse distincte. Voici celles autour desquelles s'organisent la plupart de nos itinéraires.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 9,
      places: [
        {
          title: "Mahé, l'île d'arrivée",
          description:
            "La grande île et sa capitale, Victoria, l'une des plus petites du monde. Derrière la côte, le parc national du Morne Seychellois monte à 905 mètres dans la forêt.",
          image: {
            src: "/destination/seychelles/map-mahe.png",
            alt: "Côte et forêt du Morne Seychellois sur l'île de Mahé",
          },
          coordinates: { lat: -4.6796, lng: 55.492 }, // TODO: verify coords
        },
        {
          title: "Praslin, la Vallée de Mai",
          description:
            "Une forêt primitive de palmiers où pousse le coco de mer, la plus grosse graine du monde. Classée UNESCO, longtemps prise pour le jardin d'Éden.",
          image: {
            src: "/destination/seychelles/map-praslin.png",
            alt: "Palmiers et coco de mer de la Vallée de Mai à Praslin",
          },
          coordinates: { lat: -4.3306, lng: 55.7392 }, // TODO: verify coords
        },
        {
          title: "La Digue, Anse Source d'Argent",
          description:
            "Presque pas de voitures, des vélos et des chars à bœufs. La plage de granit la plus photographiée de l'océan Indien, à découvrir à marée basse.",
          image: {
            src: "/destination/seychelles/map-la-digue.png",
            alt: "Blocs de granit et eau peu profonde d'Anse Source d'Argent à La Digue",
          },
          coordinates: { lat: -4.3587, lng: 55.8389 }, // TODO: verify coords
        },
        {
          title: "Curieuse, les tortues géantes",
          description:
            "Une île-réserve à courte distance de Praslin, refuge de plus de deux cents tortues géantes en liberté. Mangroves, sentier vers Anse St José, barbecue créole sur la plage.",
          image: {
            src: "/destination/seychelles/map-curieuse.png",
            alt: "Tortue géante d'Aldabra en liberté sur l'île de Curieuse",
          },
          coordinates: { lat: -4.2833, lng: 55.7333 }, // TODO: verify coords
        },
        {
          title: "Cousin, la réserve d'oiseaux",
          description:
            "Une île entièrement protégée, gérée par des conservateurs. On y accoste pieds nus, au milieu des sternes et des tortues marines qui viennent pondre.",
          image: {
            src: "/destination/seychelles/map-cousin.png",
            alt: "Colonie de sternes sur la réserve naturelle de l'île Cousin",
          },
          coordinates: { lat: -4.3322, lng: 55.6453 }, // TODO: verify coords
        },
        {
          title: "Aride, la plus préservée",
          description:
            "Au départ de Praslin, l'île la plus septentrionale des intérieures. Plus d'un million d'oiseaux marins, une flore rare dont le Wright's Gardenia, qui ne pousse nulle part ailleurs.",
          image: {
            src: "/destination/seychelles/map-aride.png",
            alt: "Falaises et oiseaux marins de la réserve de l'île Aride",
          },
          coordinates: { lat: -4.2122, lng: 55.6694 }, // TODO: verify coords
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage aux Seychelles",
      description:
        "Quatre observations de terrain qui ne se trouvent pas dans un guide. Pour décider d'une étape, ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Dans ma valise",
          cardEyebrow: "Tips",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Chaussures d'eau pour le granit, un lagon qui se mérite à marée basse.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le granit des Seychelles est splendide et glissant. Une paire de
                chaussures d'eau change la façon dont on explore les bassins
                entre les rochers, surtout avec des enfants. Prévoir aussi un
                lycra anti-UV pour le snorkeling : le soleil de l'équateur ne
                pardonne pas, même par ciel voilé.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Crème solaire minérale uniquement. Plusieurs réserves marines,
                comme Sainte-Anne et Cousin, interdisent les filtres chimiques
                pour protéger le corail. Nous le précisons sur chaque dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Le bon rythme entre les îles",
          cardEyebrow: "Logistique",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Trois îles en dix jours, pas cinq. Le saut de trop gâche les autres.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                La tentation est de tout voir. Mahé, Praslin et La Digue
                suffisent à remplir dix jours sans jamais courir. Chaque
                changement d'île coûte une demi-journée de logistique : le
                quatrième saut transforme souvent les vacances en transferts.
              </p>
              <p>
                La règle que nous appliquons : une île par séquence, deux à
                quatre nuits minimum. On y prend ses marques, on trouve sa
                plage, on revient au même restaurant.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calons les sauts sur les marées et les navettes, et
                réservons les liaisons privées quand l'horaire public ne suit
                pas.
              </p>
            </div>
          ),
        },
        {
          title: "Curieuse, tôt le matin",
          cardEyebrow: "Île",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Avant les navettes de groupe, les tortues géantes sont à vous.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Curieuse se visite en excursion à la journée depuis Praslin.
                Mais entre 9 h et 11 h, les bateaux de groupe se croisent sur le
                même sentier. En partant tôt, on a les tortues géantes, les
                mangroves et la plage d'Anse St José presque pour soi.
              </p>
              <p>
                La même logique vaut pour la Vallée de Mai : la première heure
                après l'ouverture, la forêt est silencieuse et la lumière passe
                à travers les palmes.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous organisons les départs en bateau privé pour décaler vos
                visites des flux de groupe.
              </p>
            </div>
          ),
        },
        {
          title: "Budget et vie locale",
          cardEyebrow: "Budget",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les hôtels facturent en euros, les marchés en roupies. Garder un peu des deux.",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les Seychelles sont une destination chère : l'insularité
                renchérit l'import, et les meilleures adresses sont des îles
                entières. La carte passe partout dans les hôtels, mais le marché
                Sir Selwyn Clarke de Victoria, les take-away créoles et les
                bateaux se règlent plus volontiers en roupies.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Goûter le cari de poisson au lait de coco et le chutney de fruit
                à pain dans une gargote plutôt qu'au buffet : c'est meilleur, et
                c'est là que se trouve la cuisine créole.
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
            "Trois îles en douze jours, et l'impression de n'avoir jamais couru. Carole avait calé chaque transfert au bon moment. Le coucher de soleil sur le granit, à deux, restera notre meilleur souvenir.",
          image: {
            src: "/destination/seychelles/hero-1.png",
            alt: "Portrait de Hélène et Thomas", // TODO: verify
          },
          name: "Hélène & Thomas", // TODO: verify
          role: "Voyage en couple, mai 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Avec deux enfants, on redoutait la logistique. Tout était fluide, et l'éclosion des tortues les a marqués pour de bon. On a vu des choses qu'on n'aurait jamais trouvées seuls.",
          image: {
            src: "/destination/seychelles/hero-2.png",
            alt: "Portrait de la famille Rivière", // TODO: verify
          },
          name: "Famille Rivière", // TODO: verify
          role: "Séjour en famille, octobre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Ce qui m'a marquée, c'est la qualité de l'accompagnement. Un seul interlocuteur, du premier appel au retour. La journée sur Curieuse, avant les groupes, valait le voyage à elle seule.",
          image: {
            src: "/destination/seychelles/hero-3.png",
            alt: "Portrait de Nathalie", // TODO: verify
          },
          name: "Nathalie", // TODO: verify
          role: "Escapade nature, avril 2025", // TODO: verify
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
          question: "Quelle est la meilleure période pour partir aux Seychelles ?",
          answer:
            "Les intersaisons d'avril–mai et d'octobre–novembre sont idéales : mer calme, vents faibles et belle lumière. De mai à septembre, l'alizé du sud-est rafraîchit et anime la mer ; de décembre à mars, le temps est plus humide. Les Seychelles étant hors de la ceinture cyclonique, aucune saison n'est vraiment à éviter.", // TODO: verify
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Comptez environ 10 heures en vol direct entre Paris et l'aéroport international de Mahé. Des liaisons avec escale via les compagnies du Golfe sont aussi possibles. Les déplacements entre les îles se font ensuite en avion domestique, en hélicoptère ou en catamaran.", // TODO: verify
        },
        {
          question: "Faut-il un visa pour les Seychelles ?",
          answer:
            "Aucun visa n'est exigé pour un séjour touristique. En revanche, une autorisation de voyage électronique (Seychelles Travel Authorisation) doit être obtenue en ligne avant le départ, et un passeport valide est requis. Nous accompagnons chaque client dans cette démarche.", // TODO: verify
        },
        {
          question: "Combien d'îles peut-on voir en deux semaines ?",
          answer:
            "Trois îles principales (Mahé, Praslin et La Digue) suffisent à remplir dix à quatorze jours sans jamais courir, avec des excursions à la journée vers Curieuse, Cousin ou Aride. Au-delà, chaque changement d'île coûte une demi-journée de logistique : nous conseillons de privilégier la profondeur à l'accumulation.",
        },
        {
          question: "Les Seychelles, est-ce adapté aux familles ?",
          answer:
            "Oui. Les lagons peu profonds, l'absence de paludisme sur les îles intérieures, le décalage horaire minime et des expériences comme l'éclosion des tortues ou les géantes de Curieuse en font une destination très adaptée aux enfants. De nombreuses adresses proposent des villas familiales et un encadrement dédié.", // TODO: verify
        },
        {
          question: "Quel budget prévoir pour un voyage aux Seychelles ?",
          answer:
            "Les Seychelles sont une destination haut de gamme : l'insularité renchérit tout, et les meilleures adresses sont des îles privées. Le budget dépend du choix des hébergements, du nombre d'îles et des liaisons privées. Votre travel designer construit un itinéraire chiffré, ajusté à vos priorités plutôt qu'à un forfait.",
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
        "D'autres archipels où l'eau et l'isolement composent le voyage. À relier ou à comparer selon la saison.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: [
        "maurice",
        "polynesie",
        // TODO: ajouter "maldives" une fois cette destination créée
      ],
    },
  ],
};
