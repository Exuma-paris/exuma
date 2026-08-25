import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "bahamas",
  name: "Bahamas",
  placeKind: "country",
  country: "Bahamas",
  genitive: "des Bahamas",
  continentSlug: "ameriques",
  blurb: "Harbour Island, Exumas, Andros, Abacos",
  keywords: [
    "bahamas",
    "harbour island",
    "exumas",
    "eleuthera",
    "andros",
    "abacos",
    "nassau",
    "long island",
  ],
  metaTitle: "Bahamas : Voyage sur mesure",
  metaDescription:
    "Voyage aux Bahamas sur mesure : sable rose de Harbour Island, cayes privées des Exumas, flats d'Andros. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe aux Bahamas",
      heading: "Là où la mer change de bleu à chaque banc de sable",
      description:
        "L'archipel compte sept cents îles et quelques milliers de cayes, dont une trentaine seulement sont habitées. Depuis l'avion, on lit le fond des bancs de sable à travers l'eau avant même d'avoir atterri. Le reste appartient aux bateaux, aux oiseaux et à ceux qui savent où aller.",
      images: [
        {
          src: "/destination/bahamas/hero-1.png",
          alt: "Bancs de sable et eaux turquoise des Exuma Cays lors d'un voyage aux Bahamas",
        },
        {
          src: "/destination/bahamas/hero-2.png",
          alt: "Plage de sable rose de Harbour Island, au large d'Eleuthera",
        },
        {
          src: "/destination/bahamas/hero-3.png",
          alt: "Ponton de bois et cocotiers d'une caye privée d'Andros à la tombée du jour",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir aux Bahamas ?",
      heading: "Carole, spécialiste des Bahamas, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "carole",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime aux Bahamas, c'est qu'on y change d'île comme on change de pièce. Miami est à une heure de vol, et pourtant, sur une caye des Exumas, il ne reste que le vent et la lumière. Je construis ces voyages autour de ce contraste, et je choisis les bateaux avant les hôtels.",
        role: "Travel Designer · Bahamas",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte des Bahamas",
      heading: "On ne visite pas les Bahamas, on en choisit trois",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage aux Bahamas commence par une carte marine plutôt que par une liste. L'archipel s'étire sur mille kilomètres, de Grand Bahama au nord jusqu'à Inagua au sud-est, et rien ne se relie par la route. On retient trois îles, quatre au plus, et le petit avion fait le reste.",
        "Harbour Island tient dans cinq kilomètres de sable rose et deux rues de maisons coloniales. À Dunmore Town, on circule en voiturette de golf, on dîne chez des gens qui vous reconnaissent le deuxième soir, et la plage change de teinte à mesure que le soleil descend.",
        "Les Exumas relèvent d'un autre ordre. Trois cent soixante cayes alignées sur cent cinquante kilomètres, la plupart sans nom sur les cartes, et une eau si peu profonde qu'elle se lit comme un plan : turquoise sur le sable, sombre sur l'herbier, presque blanche sur le banc. Andros, elle, garde ses flats et ses trous bleus pour ceux qui pêchent.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/bahamas/full-image.png",
        alt: "Chaîne de cayes et bancs de sable des Exumas survolés lors d'un voyage aux Bahamas",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Bahamas, l'île pour soi",
      heading: "Prendre une île entière, du ponton au dernier banc de sable",
      theme: "light",
      paragraphs: [
        "Ici, l'île privée n'est pas une figure de style. Une quarantaine de cayes se louent en entier, avec leur équipage, leur cuisine et leurs bateaux, et l'on y arrive par hydravion ou par le pont d'un yacht. Musha Cay, dans le sud des Exumas, compte cinq maisons pour vingt-quatre personnes et quarante plages.",
        "Le reste du temps, la discrétion se joue autrement. À Andros, la troisième barrière de corail du monde longe la côte est et tombe d'un coup dans la Tongue of the Ocean, à plus de mille mètres de fond. On plonge le matin, on pêche l'après-midi, et le soir personne ne demande ce que l'on fait dans la vie.",
      ],
      images: [
        {
          src: "/destination/bahamas/split-1.png",
          alt: "Maison de bois et ponton privé sur une caye du sud des Exumas",
        },
        {
          src: "/destination/bahamas/split-2.png",
          alt: "Tombant de la barrière de corail d'Andros au bord de la Tongue of the Ocean",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/bahamas/xp-harbour-island-1.png",
          alt: "Sable rose de Pink Sands Beach à Harbour Island au lever du jour",
        },
        right: {
          src: "/destination/bahamas/xp-harbour-island-2.png",
          alt: "Speedboat privé à l'approche de Dunmore Town, à Harbour Island",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Le jour où le sable devient rose",
        columns: [
          "Le bateau quitte Nassau tôt, met le cap au nord-est et traverse deux heures d'eau claire avant de longer Eleuthera. Le sable de Harbour Island doit sa couleur à des foraminifères broyés par la houle, et il faut le voir de près pour y croire : rose franc au bord de l'eau, plus pâle en haut de plage, sur cinq kilomètres de long.",
          "L'après-midi, on redescend vers les cayes pour la rencontre que tout le monde raconte au retour. Les cochons nageurs viennent au bateau sans qu'on les appelle et repartent aussi vite. Entre les deux, un déjeuner de conque pêchée le matin même sur une plage sans nom, et le moteur coupé assez longtemps pour qu'on entende l'eau.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités aux Bahamas",
      heading: "Les flats, un sanctuaire de tortues, une nuit de Junkanoo",
      description:
        "Une session à la mouche dans les flats d'Andros, un catamaran pour Green Cay et ses tortues, une troupe de Junkanoo qui défile sur votre plage. Trois façons d'entrer dans l'archipel, que nous réservons avant votre arrivée.",
      slugs: [
        "peche-bonefish-flats",
        "catamaran-prive-green-cay",
        "soiree-junkanoo-plage",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner aux Bahamas",
      description:
        "Une île entière que l'on ferme derrière soi, une caye au large d'Andros dont le spa tient au bout d'une jetée, un club des années 1960 rouvert à Eleuthera. Trois échelles, trois façons de fermer la porte.",
      slugs: ["musha-cay", "kamalame-cay", "the-potlatch-club"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage aux Bahamas",
      description:
        "Vol, décalage, formalités et saisons : de quoi caler les dates d'un voyage aux Bahamas en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Aucun vol direct depuis Paris. Comptez généralement 11 à 16 heures avec une correspondance, notamment via Londres ou l'Amérique du Nord.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Nassau compte généralement six heures de moins que Paris. Le décalage passe ponctuellement à cinq heures lors des changements d'heure.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le dollar bahaméen, à parité fixe avec le dollar américain. Les deux circulent indifféremment et les cartes passent partout.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Aucun visa pour les Français jusqu'à trois mois. Passeport valable six mois après la sortie du territoire et billet retour requis.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination exigée depuis la France. Calendrier vaccinal à jour recommandé, hépatite A selon le séjour.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche court de décembre à mai. Nous privilégions février à mai, quand la mer se calme et que l'eau devient très claire.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "L'anglais est la seule langue officielle. On entend partout le créole bahaméen, rapide et chantant.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Subtropical : 24 à 27 degrés en hiver, 31 à 32 en été. La saison des ouragans va de juin à novembre, avec un pic en septembre.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Bahamas. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/bahamas/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure aux Bahamas entre Harbour Island, les Exumas et Andros",
            "Adresses confidentielles aux Bahamas : cayes privées et plages sans nom",
            "Hébergements aux Bahamas : Musha Cay et Kamalame Cay",
            "Conciergerie privée 24/7 pour un voyage aux Bahamas",
            "Expériences immersives aux Bahamas : sable rose et pêche dans les flats",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables aux Bahamas",
      heading: "Six îles que l'on relie par les airs et par l'eau",
      description:
        "De Nassau aux Abacos, six étapes que le petit avion et le bateau enchaînent dans l'ordre qui vous convient.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 6,
      places: [
        {
          title: "Nassau et Paradise Island",
          description:
            "La capitale garde ses maisons roses et jaunes, son marché aux paniers et les marches taillées du fort Fincastle. On y passe la nuit d'arrivée, et l'on repart au matin vers les cayes.",
          image: {
            src: "/destination/bahamas/map-nassau.png",
            alt: "Maisons coloniales et port de Nassau sur l'île de New Providence",
          },
          // TODO: verify coords
          coordinates: { lat: 25.078, lng: -77.3383 },
        },
        {
          title: "Harbour Island et Dunmore Town",
          description:
            "Cinq kilomètres de sable rose, deux rues de maisons coloniales et des voiturettes de golf pour tout véhicule. L'île se traverse en une matinée et retient une semaine.",
          image: {
            src: "/destination/bahamas/map-harbour-island.png",
            alt: "Rue de maisons coloniales de Dunmore Town à Harbour Island",
          },
          // TODO: verify coords
          coordinates: { lat: 25.5, lng: -76.6333 },
        },
        {
          title: "Les Exuma Cays",
          description:
            "Trois cent soixante cayes dont la plupart n'ont pas de nom. Le parc marin y interdit toute pêche depuis 1958, et cela se voit sous la coque du bateau.",
          image: {
            src: "/destination/bahamas/map-exumas.png",
            alt: "Cayes et hauts-fonds turquoise du parc marin des Exumas",
          },
          // TODO: verify coords
          coordinates: { lat: 24.1667, lng: -76.4333 },
        },
        {
          title: "Andros et ses trous bleus",
          description:
            "La plus grande île de l'archipel, et la moins peuplée. Ses flats s'étendent à perte de vue, ses trous bleus s'ouvrent en pleine forêt, et la barrière de corail tombe d'un coup à l'est.",
          image: {
            src: "/destination/bahamas/map-andros.png",
            alt: "Trou bleu et forêt de pins de l'île d'Andros, aux Bahamas",
          },
          // TODO: verify coords
          coordinates: { lat: 24.7, lng: -77.7833 },
        },
        {
          title: "Les Abacos et Hope Town",
          description:
            "Un chapelet de cayes que l'on navigue à la voile, des maisons de bois blanches et le phare rayé d'Elbow Cay, l'un des derniers encore allumés à la main.",
          image: {
            src: "/destination/bahamas/map-abacos.png",
            alt: "Phare rayé d'Elbow Cay et port de Hope Town, dans les Abacos",
          },
          // TODO: verify coords
          coordinates: { lat: 26.5333, lng: -76.9667 },
        },
        {
          title: "Long Island et Dean's Blue Hole",
          description:
            "Le trou bleu le plus profond du monde s'ouvre à trente mètres du rivage et descend à deux cent deux mètres. Autour, l'île reste longue, sèche et presque vide.",
          image: {
            src: "/destination/bahamas/map-long-island.png",
            alt: "Dean's Blue Hole et sa plage en croissant sur Long Island",
          },
          // TODO: verify coords
          coordinates: { lat: 23.1167, lng: -74.8833 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage aux Bahamas",
      description:
        "Huit observations de terrain qui ne figurent pas dans un guide : la bonne saison, la façon de passer d'une île à l'autre, et ce qui se règle avant de partir.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "La saison qui rend tout plus facile",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une longue fenêtre sèche, et une saison qu'il vaut mieux laisser passer",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L&apos;archipel vit sur deux saisons. La saison sèche court de
                décembre à mai, et c&apos;est entre février et mai que la mer se
                calme vraiment, que le vent tombe et que l&apos;eau devient
                limpide sur les bancs. Les mois de décembre et janvier sont
                beaux mais plus venteux, ce qui compte pour les traversées en
                bateau.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La saison des ouragans va de juin à novembre, avec un pic en
                septembre. Nous ne construisons pas d&apos;itinéraire d&apos;île
                en île sur cette période. Si vos dates tombent en fin
                d&apos;été, nous préférons une seule étape, souscrire une
                assurance annulation adaptée et garder une solution de repli.
              </p>
            </div>
          ),
        },
        {
          title: "Passer d'une île à l'autre",
          cardEyebrow: "Transport",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le petit avion et le bateau font partie du voyage, et souvent des meilleurs moments",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Rien ne se relie par la route. Nassau sert de plaque tournante
                pour les vols intérieurs, les ferries desservent Harbour Island,
                Eleuthera et les Exumas, et le charter privé ouvre les cayes qui
                n&apos;ont qu&apos;une piste d&apos;herbe. Certaines maisons,
                comme Musha Cay, organisent elles-mêmes l&apos;acheminement de
                leurs hôtes.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous ménageons toujours de l&apos;air entre deux vols
                intérieurs, et jamais de vol intérieur le jour du retour vers
                Paris. Pour deux ou trois îles voisines, l&apos;hydravion ou le
                bateau rapide privé coûte souvent moins qu&apos;une chaîne de
                vols réguliers, et fait gagner une demi-journée à chaque
                transfert.
              </p>
            </div>
          ),
        },
        {
          title: "Quitter Nassau tôt",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La capitale mérite une nuit, pas une semaine",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                New Providence concentre l&apos;aéroport, les paquebots et les
                grands complexes de Paradise Island. La vieille ville a du
                charme, le marché aux paniers et les tables de poisson
                d&apos;Arawak Cay valent la soirée, mais l&apos;archipel
                commence ailleurs.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une nuit à l&apos;arrivée pour absorber le décalage, puis le
                premier vol du matin vers Eleuthera, les Exumas ou Andros. Au
                retour, nous plaçons la dernière nuit à Nassau plutôt que de
                courir un vol intérieur le jour du long-courrier.
              </p>
            </div>
          ),
        },
        {
          title: "Le conque, et comment on le mange",
          cardEyebrow: "Table",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le plat national se prépare devant vous, au couteau, en cinq minutes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le conque, ce grand coquillage rose, se sert cru en salade avec
                citron vert, oignon et piment, ou pané et frit. On le prépare
                sur le ponton, au couteau, souvent devant vous. À Nassau, les
                cabanes de bois d&apos;Arawak Cay en font l&apos;essentiel de
                leur carte ; sur les cayes, le pêcheur le sort de l&apos;eau et
                le prépare à bord.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                L&apos;espèce est surexploitée dans la région et la saison de
                pêche est réglementée. Nous travaillons avec des pêcheurs qui
                respectent les tailles minimales, et nous demandons le conque du
                jour plutôt que du congelé. Le pain de maïs et le rhum local
                accompagnent, à l&apos;heure où le soleil descend.
              </p>
            </div>
          ),
        },
        {
          title: "La mer se lit à la couleur",
          cardEyebrow: "Nature",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le bleu dit la profondeur, et le banc de sable n'existe que deux heures",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le grand banc des Bahamas est une plaine sous-marine où
                l&apos;eau dépasse rarement dix mètres. Turquoise sur le sable,
                sombre sur l&apos;herbier, presque blanche sur le haut-fond : un
                capitaine navigue à la couleur autant qu&apos;au sondeur. À
                marée basse, des bancs de sable émergent au milieu de nulle
                part, puis disparaissent.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Les plus belles sorties se calent sur la marée, pas sur
                l&apos;horloge. Nous demandons au capitaine la table des marées
                de la semaine avant de fixer un déjeuner sur un banc de sable ou
                une session de pêche dans les flats. Une paire de lunettes
                polarisées change tout : elle fait apparaître le poisson et le
                fond.
              </p>
            </div>
          ),
        },
        {
          title: "L'argent, les taxes et les pourboires",
          cardEyebrow: "Argent",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le dollar américain passe partout, les espèces restent utiles sur les cayes",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le dollar bahaméen vaut un dollar américain, et les deux
                circulent dans la même poche. Les cartes passent dans les
                hôtels, les restaurants et les boutiques ; sur les petites
                cayes, chez le pêcheur ou au marché, les espèces restent la
                règle. Une TVA s&apos;applique sur la plupart des prestations,
                et le service est souvent déjà inclus.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Vérifiez la ligne « service » avant d&apos;ajouter un pourboire,
                sous peine de payer deux fois. Nous prévoyons toujours des
                petites coupures pour les équipages, les guides de pêche et les
                capitaines, qui vivent en partie de cela.
              </p>
            </div>
          ),
        },
        {
          title: "Junkanoo, et quand il a lieu",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux nuits par an à Nassau, et une version privée le reste de l'année",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Junkanoo est la grande affaire de l&apos;archipel : tambours
                de peau de chèvre, cloches de cuivre, cuivres et costumes de
                papier crépon montés pendant des mois. Les défilés officiels ont
                lieu au petit matin du 26 décembre et du 1er janvier, à Bay
                Street, et cela commence vers deux heures du matin.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Hors de ces deux nuits, une troupe peut se déplacer pour une
                soirée privée sur la plage. C&apos;est une commande qui
                s&apos;anticipe de plusieurs semaines, car les mêmes musiciens
                préparent le défilé de décembre. Nous montons la soirée avec
                eux, jamais avec un prestataire de spectacle.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Léger, souple, et une crème solaire qui ne tue pas le corail",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les petits appareils limitent les bagages, souvent à une
                vingtaine de kilos par personne, et le sac souple se range mieux
                qu&apos;une valise rigide dans une soute de Cessna. Sur les
                cayes, la tenue reste simple le jour ; quelques adresses
                d&apos;Eleuthera et de Harbour Island demandent un peu plus de
                tenue au dîner.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Une crème solaire minérale sans oxybenzone pour le récif, des
                lunettes polarisées, un lycra à manches longues pour les longues
                journées en bateau et un coupe-vent léger : le vent d&apos;hiver
                rafraîchit vite au large. Les prises électriques sont au
                standard américain, en 120 volts.
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
            "Nous sommes partis de Nassau avant sept heures et nous avons eu la plage de Harbour Island pour nous. Le sable est vraiment rose, personne ne nous croit sur les photos. Le capitaine avait pensé la journée dans cet ordre-là, et cela a tout changé.",
          image: {
            src: "/destination/bahamas/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Bahamas, Eleuthera et Harbour Island, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Une île entière pour nous huit, avec l'équipage et deux bateaux. Les enfants ont fini par connaître les plages mieux que le personnel, et nous n'avons croisé personne en dix jours. Même le transfert en hydravion fait partie du souvenir.",
          image: {
            src: "/destination/bahamas/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Bahamas en famille, Exumas, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois jours dans les flats d'Andros avec le même guide. Il voyait le poisson dix secondes avant moi, chaque fois. Après cela, les tables de Nassau et le retour au calme de la maison sur la caye nous ont paru presque trop confortables.",
          image: {
            src: "/destination/bahamas/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Bahamas, Andros, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir aux Bahamas ?",
          answer:
            "La saison sèche court de décembre à mai. Nous privilégions février à mai, la fenêtre la plus stable, quand le vent tombe, que la mer se calme et que l'eau devient très claire sur les bancs. Décembre et janvier sont beaux mais plus venteux, ce qui compte dès que l'itinéraire enchaîne les traversées en bateau. La saison des ouragans va de juin à novembre, avec un pic en septembre.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Il n'existe pas de vol direct depuis Paris. On rejoint Nassau via Londres ou l'Amérique du Nord, pour un trajet total qui va généralement de 11 à 16 heures selon la correspondance, dont environ une heure de vol depuis la Floride. Un vol intérieur ou un bateau prend ensuite le relais vers votre île. Nous plaçons ce dernier segment le lendemain plutôt que le soir de l'arrivée.",
        },
        {
          question: "Faut-il un visa pour aller aux Bahamas ?",
          answer:
            "Les ressortissants français n'ont pas besoin de visa pour un séjour touristique de moins de trois mois. Le passeport doit être valable six mois après la sortie du territoire, et un billet de retour ou de continuation est demandé. Une carte d'arrivée numérique est en cours de déploiement, encore au stade pilote selon les points d'entrée : nous vous indiquons ce qui s'applique à votre vol. Attention aussi au transit par les États-Unis, qui impose sa propre autorisation ESTA même sans sortir de l'aéroport. Nous vérifions le tout avec vous avant le départ.",
        },
        {
          question: "Que faire aux Bahamas en 10 jours ?",
          answer:
            "Dix jours permettent deux îles, trois au maximum. Un déroulé qui fonctionne bien : une nuit à Nassau en arrivant, quatre nuits à Harbour Island ou Eleuthera pour le sable rose et les tables, puis quatre nuits sur une caye des Exumas ou à Andros selon que vous veniez pour l'eau ou pour la pêche. Entre les étapes, un vol court ou un bateau privé, et du temps libre gardé sur chaque île.",
        },
        {
          question: "Les Bahamas sont-elles adaptées aux familles avec enfants ?",
          answer:
            "Oui, et c'est l'une des destinations les plus simples avec des enfants. L'anglais est la langue officielle, les distances de vol sont courtes, et l'eau des bancs reste peu profonde et tiède, donc rassurante pour les plus jeunes. Une caye privée ou une villa avec équipage supprime toute logistique quotidienne. Nous gardons alors deux étapes plutôt que trois, et nous allongeons les séjours.",
        },
        {
          question: "Quel budget prévoir pour un voyage aux Bahamas ?",
          answer:
            "Le budget se joue sur trois postes : l'acheminement entre les îles, vols privés ou bateaux, les quelques maisons de l'archipel qui tiennent un véritable niveau de service, et la privatisation des bateaux et des guides de pêche. La location d'une île entière relève d'un autre ordre de grandeur et se réserve très en avance. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres eaux claires, de la mer des Caraïbes à l'océan Indien et au Pacifique, à composer sur mesure avec votre travel designer.",
      slugs: ["mexique", "maldives", "polynesie"],
    },
  ],
};
