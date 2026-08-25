import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "rome",
  name: "Rome",
  country: "Italie",
  genitive: "de Rome",
  continentSlug: "europe",
  blurb: "Vatican, Trastevere, Via Appia, Galerie Borghèse",
  keywords: [
    "rome",
    "italie",
    "vatican",
    "trastevere",
    "via-appia",
    "borghese",
    "centro-storico",
    "aventino",
  ],
  metaDescription:
    "Voyage à Rome sur mesure : Galerie Borghèse hors horaires, Trastevere, Via Appia. Adresses confidentielles, accès privés au Vatican, conciergerie 24/7.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Rome",
      heading: "Rome, en marchant lentement entre trois mille ans",
      description:
        "Du Vatican à la Via Appia, du Trastevere à la Villa Borghèse : Rome se traverse à pied, par couches. Nous construisons l'itinéraire qui rend chaque couche visible, chacune à son heure.",
      images: [
        {
          src: "/destination/rome/hero-1.png",
          alt: "Vue sur Saint-Pierre depuis Castel Sant'Angelo, Rome",
        },
        {
          src: "/destination/rome/hero-2.png",
          alt: "Ruelles pavées de Trastevere au crépuscule, Rome",
        },
        {
          src: "/destination/rome/hero-3.png",
          alt: "Via Appia Antica, pavés et cyprès au matin",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Notre rôle dans ce voyage",
      heading: "Un seul interlocuteur, du brief jusqu'au retour",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina", // TODO: replace with a real verbatim from Tainà (was Élise placeholder)
        // TODO: verify quote attribution
        quote:
          "Rome se trompe d'effet. La première fois, tout le monde court : Sixtine, Colisée, Trevi, Trevi encore. Ce qui marque vraiment, c'est ce qu'on voit la deuxième fois, en marchant sans rien chercher. C'est cette deuxième Rome qu'on essaie d'inscrire au premier voyage.",
        role: "Travel Designer · Italie", // TODO: verify
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Ouverture",
      heading: "Une ville qui se traverse en couches",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Rome ne se mesure pas en monuments visités. Depuis le Forum jusqu'au Janicule, depuis le Colisée jusqu'à Saint-Pierre, la ville se superpose à elle-même. Trois mille ans de constructions empilées sur la même surface : la marche entre Piazza Navona et le Panthéon traverse vingt siècles en quinze minutes.",
        "L'itinéraire se construit par quartiers, pas par checklists. Une matinée à Trastevere chez les artisans du Vicolo del Cinque, une visite privée de la Galerie Borghèse en fin de journée, un dîner à la table de Marcella dans le Ghetto. Chaque quartier garde sa lumière, ses heures, sa cuisine. Nous écrivons cette logique en collaboration avec les Italiens qui la vivent.",
        "« On vient à Rome pour le grand récit. On y revient pour les détails : la couleur d'un mur à Monti, le silence d'une cour à l'Aventino, le café d'un comptoir près du Largo Argentina. C'est cette deuxième Rome qu'on cherche à inscrire au premier voyage. »",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/rome/full-image.png",
        alt: "Vue panoramique de Rome depuis le Janicule, dôme de Saint-Pierre",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Le silence de la Villa Borghèse",
      heading: "Le matin où le marbre respire",
      theme: "light",
      paragraphs: [
        "La Galerie Borghèse ouvre à neuf heures. Une heure avant l'ouverture, la lumière entre par les hautes fenêtres et tombe directement sur le marbre des Bernini. Le gardien éteint les climatiseurs. Le silence n'est pas mis en scène. Il appartient à la maison, restituée par la famille Borghèse au début du XIXe siècle.",
        "À cette heure-là, Apollon et Daphné sont seuls dans leur salle. On les regarde tourner sur eux-mêmes : Bernini avait vingt-quatre ans quand il a sculpté la transformation. Personne ne demande à passer plus vite. Le guide-historien parle bas. C'est le marbre qui mène la conversation.",
      ],
      images: [
        {
          src: "/destination/rome/split-1.png",
          alt: "Détail des mains du Rapt de Proserpine, Galerie Borghèse",
        },
        {
          src: "/destination/rome/split-2.png",
          alt: "Salle des sculptures de la Galerie Borghèse au matin",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/rome/borghese-bernini.png",
          alt: "Apollon et Daphné de Bernini, Galerie Borghèse, Rome",
        },
        right: {
          src: "/destination/rome/borghese-caravage.png",
          alt: "David et Goliath de Caravage, Galerie Borghèse, Rome",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Une heure seule avec Bernini",
        columns: [
          "La Galerie Borghèse fonctionne par créneaux serrés. Pour la visite hors horaires, le gardien ouvre la porte à huit heures, allume une seule rangée de lumières, et le bruit des serrures résonne dans le silence. Pas de file. Pas de signal sonore. La salle de Bernini reste fermée derrière nous une heure de plus que pour le public.",
          "Notre historien d'art italien guide en français, par tranches de quinze minutes par salle. Il revient deux fois sur Apollon et Daphné. C'est ce moment-là qu'on signe, parce que c'est rare, et parce qu'on ne le voit pas autrement.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités en Rome",
      heading: "Ce qu'on fait, concrètement",
      description:
        "Trois moments ancrés dans des personnes : un historien d'art, une nonna, un guide en Vespa. Aucune file d'attente, aucun groupe.",
      cta: { label: "Voir l'ensemble de nos expériences", href: "/experiences" },
      slugs: [
        "galerie-borghese-prive",
        "nonna-cuisine-trastevere",
        "via-appia-vespa",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements à Rome",
      heading: "Trois adresses, trois quartiers",
      description:
        "Le niveau se lit dans le choix des matériaux, des cuisiniers, des matins. Trois maisons, trois manières de vivre Rome.",
      cta: { label: "Voir tous les hébergements", href: "/hebergements" },
      slugs: ["hotel-de-russie", "j-k-place-roma", "hassler-roma"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Avant le départ",
      heading: "Ce qu'il faut savoir avant de partir à Rome",
      description:
        "Vol, monnaie, langue, période : l'essentiel pour préparer le voyage sereinement.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "2h 20 depuis Paris CDG ou Orly, vols directs Air France et ITA Airways toute l'année.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Aucun décalage avec Paris. L'Italie est sur le même fuseau horaire (CET, heure d'été commune).",
        },
        {
          iconName: "euro",
          title: "Monnaie",
          description:
            "Euro. Café au comptoir : 1,20 €. Au guéridon : 4 €. Le coperto (couvert) au restaurant est facturé séparément.",
        },
        {
          iconName: "fileText",
          title: "Formalités",
          description:
            "Carte d'identité ou passeport en cours de validité. L'Italie fait partie de l'espace Schengen, aucune formalité préalable.",
        },
        {
          iconName: "calendarDays",
          title: "Quand partir",
          description:
            "Avril–juin et septembre–octobre : températures douces, lumière nette, foules raisonnables. Éviter août, lourd et fermé.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Italien partout, français dans les hôtels et adresses culturelles, anglais largement compris. Quelques mots d'italien font la différence.",
        },
        {
          iconName: "badgeCheck",
          title: "Pourboires",
          description:
            "Pas obligatoires. On arrondit l'addition au restaurant, on laisse 1 € au taxi. Le service est inclus partout.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Rome. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      cards: [
        {
          ...defaultBento.cards[0],
          image: {
            src: "/destination/rome/bento-map.png",
            alt: "Plan stylisé des quartiers de Rome",
          },
        },
        {
          ...defaultBento.cards[1],
          image: {
            src: "/destination/rome/bento-adresses.png",
            alt: "Devanture d'une trattoria de famille à Rome",
          },
        },
        {
          ...defaultBento.cards[2],
          image: {
            src: "/destination/rome/bento-hebergements.png",
            alt: "Salon d'un palais romain transformé en maison d'hôtes",
          },
        },
        {
          ...defaultBento.cards[3],
          image: {
            src: "/destination/rome/bento-conciergerie.png",
            alt: "Travel designer Exuma au téléphone",
          },
        },
        {
          ...defaultBento.cards[4],
          image: {
            src: "/destination/rome/bento-experiences.png",
            alt: "Salle de la chapelle Sixtine vide au lever du jour",
          },
        },
      ],
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Que voir à Rome",
      heading: "Six quartiers, et ce qu'il y a derrière",
      description:
        "Vatican, Trastevere, Centro Storico, Via Appia, Aventino, Quartier Juif : chaque quartier tient sa promesse. Voici ceux autour desquels s'organisent la plupart de nos itinéraires.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      initialZoom: 12,
      places: [
        {
          title: "Vatican, la cité dans la ville",
          description:
            "9 km de musées, 1 400 salles. La visite avant l'ouverture commence à sept heures. Une heure de marche jusqu'à la Sixtine.",
          image: {
            src: "/destination/rome/map-vatican.png",
            alt: "Coupole de Saint-Pierre depuis Castel Sant'Angelo",
          },
          coordinates: { lat: 41.9029, lng: 12.4534 },
        },
        {
          title: "Trastevere, l'autre rive",
          description:
            "Quartier d'artisans du XVIIe siècle, encore peuplé d'ateliers de marbre et de restaurations de tableaux. Soir tombé : tables sur les pavés.",
          image: {
            src: "/destination/rome/map-trastevere.png",
            alt: "Ruelles pavées de Trastevere au crépuscule",
          },
          coordinates: { lat: 41.8901, lng: 12.4707 },
        },
        {
          title: "Centro Storico, vingt siècles à pied",
          description:
            "Du Panthéon à Piazza Navona en quinze minutes. Largo Argentina : quatre temples républicains, ouverts depuis 2023 aux visiteurs.",
          image: {
            src: "/destination/rome/map-centro-storico.png",
            alt: "Façade du Panthéon de Rome",
          },
          coordinates: { lat: 41.8990, lng: 12.4769 },
        },
        {
          title: "Via Appia Antica, la première autoroute",
          description:
            "17 km de chaussée romaine d'origine, bordée de cyprès et de tombeaux. À parcourir en Vespa, tôt le matin.",
          image: {
            src: "/destination/rome/map-via-appia.png",
            alt: "Pavés et cyprès de la Via Appia Antica",
          },
          coordinates: { lat: 41.8497, lng: 12.5219 },
        },
        {
          title: "Aventino, le silence du mont",
          description:
            "L'un des sept monts, encore résidentiel. Le trou de serrure du prieuré de Malte cadre la coupole de Saint-Pierre, à un kilomètre.",
          image: {
            src: "/destination/rome/map-aventino.png",
            alt: "Roseraie de l'Aventino au printemps",
          },
          coordinates: { lat: 41.8830, lng: 12.4815 },
        },
        {
          title: "Le Ghetto, l'un des plus anciens d'Europe",
          description:
            "Rues pavées du XVIe siècle, synagogue, restaurants à carciofi alla giudia. Quartier qui ne ferme pas tôt.",
          image: {
            src: "/destination/rome/map-ghetto.png",
            alt: "Portique d'Octavie dans le quartier juif de Rome",
          },
          coordinates: { lat: 41.8918, lng: 12.4783 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Ce que les guides ne disent pas",
      heading: "L'envers de Rome",
      description:
        "Quatre observations de terrain qui ne se trouvent pas dans un guide. Pour décider d'une étape, ou comprendre pourquoi nous l'inscrivons à un itinéraire.",
      cta: { label: "Construire ce voyage", href: "/votre-projet" },
      items: [
        {
          title: "L'eau du robinet, la meilleure d'Europe",
          cardEyebrow: "Tradition",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Les nasoni du XIXe siècle distribuent une eau de source, gratuite, partout dans la ville",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Rome compte plus de 2 500 fontaines publiques, dites
                « nasoni » à cause de leur bec recourbé. L'eau provient
                directement des aqueducs antiques restaurés au XIXe siècle :
                Acqua Marcia, Acqua Vergine, Acqua Felice. Elle est analysée
                quotidiennement et reste l'une des plus pures d'Europe.
              </p>
              <p>
                Les Romains remplissent leur gourde au coin de la rue. Les
                touristes achètent en bouteille. Le geste local sépare les deux.
              </p>
              <h4 className="font-medium">Conseil pratique :</h4>
              <p>
                Boucher le bec inférieur du nasone avec le doigt fait jaillir
                un jet supérieur, parfait pour boire sans pencher la tête.
              </p>
            </div>
          ),
        },
        {
          title: "Le café se boit au comptoir",
          cardEyebrow: "Tradition",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Au comptoir : 1,20 €. Au guéridon : 4 €. Le tarif change avec la position du corps",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Dans tous les bars romains, le tarif du café change selon la
                position du client : debout au comptoir, assis à une table à
                l'intérieur, assis à une terrasse. Les trois tarifs sont
                affichés à la caisse. Au comptoir, un espresso coûte autour de
                1,20 €. À une table à l'extérieur, le même café peut coûter
                trois à quatre fois plus.
              </p>
              <p>
                Les Romains commandent au comptoir, le boivent en deux gorgées,
                et repartent. Le rituel est plus social qu'apparent : c'est là
                que se fait la conversation du quartier.
              </p>
              <h4 className="font-medium">Adresses :</h4>
              <p>
                Sant'Eustachio (près du Panthéon), Tazza d'Oro (juste à côté)
                et Sciascia Caffè (Prati) servent les meilleurs cafés de la
                ville. Au comptoir, évidemment.
              </p>
            </div>
          ),
        },
        {
          title: "Les heures du Vatican",
          cardEyebrow: "Vatican",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Tarif standard : quatre heures de file. Hors horaires : sept heures, sans personne",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les Musées du Vatican accueillent six millions de visiteurs par
                an. En haute saison, la file pour le tarif standard atteint
                quatre heures, et la chapelle Sixtine se visite épaule contre
                épaule pendant six minutes seulement avant que le gardien ne
                fasse circuler.
              </p>
              <p>
                L'ouverture privée à sept heures change tout. La Sixtine se
                visite à six personnes maximum. Les Stanze de Raphaël se
                regardent salle par salle, sans foule, à la lumière naturelle.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Réservation systématique du créneau hors horaires sur tout
                voyage à Rome qui inclut le Vatican. Notre guide francophone est
                un historien de la Renaissance. Comptez deux heures et demie
                pour le parcours complet.
              </p>
            </div>
          ),
        },
        {
          title: "Le Ghetto, après dix-huit heures",
          cardEyebrow: "Quartier",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le quartier ne ferme pas à vingt-deux heures comme le reste du Centro. Tables jusqu'à minuit",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le quartier juif de Rome est l'un des plus anciens d'Europe
                (institué en 1555). À la différence du reste du Centro Storico,
                qui s'éteint vers vingt-deux heures, le Ghetto reste vivant
                jusqu'à minuit, en particulier sur la Via del Portico
                d'Ottavia.
              </p>
              <p>
                On y mange la cuisine judéo-romaine : carciofi alla giudia
                (artichauts frits), filetti di baccalà, aliciotti con
                l'indivia. Les recettes datent de l'époque où la communauté
                était cantonnée et a inventé sa propre cuisine.
              </p>
              <h4 className="font-medium">Adresses :</h4>
              <p>
                Nonna Betta pour les artichauts, Ba'Ghetto pour le poisson,
                Ristorante Piperno pour la table classique de la communauté.
                Réservation conseillée même en semaine.
              </p>
            </div>
          ),
        },
        {
          title: "L'heure morte, entre quatorze et dix-sept",
          cardEyebrow: "Tradition",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Beaucoup d'adresses ferment l'après-midi. Le dîner ne commence pas avant vingt heures trente",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Entre quatorze et dix-sept heures, la majorité des trattorias et
                des bottegas ferme. Pas pour le tourisme : pour la sieste, le
                déjeuner long, la coupure. Cette pause structure la journée
                romaine et explique pourquoi le dîner ne commence pas avant
                vingt heures trente, parfois vingt-et-une.
              </p>
              <p>
                Caler les visites de musées et de quartiers sur ce rythme évite
                la déception du restaurant fermé à quinze heures, et libère
                l'après-midi pour les jardins (Villa Borghèse, Villa Pamphilj)
                qui restent ouverts.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Itinéraire calé sur l'horaire italien. Déjeuner avant treize
                heures trente, dîner réservé à vingt heures trente.
              </p>
            </div>
          ),
        },
        {
          title: "Trois Caravage dans une église, gratuit",
          cardEyebrow: "Art",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Saint-Louis-des-Français abrite trois Caravage dans une chapelle latérale. Entrée libre, à dix minutes du Panthéon",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'église San Luigi dei Francesi, à dix minutes à pied du
                Panthéon, abrite le cycle de saint Matthieu peint par Caravage
                entre 1599 et 1602 : la Vocation, l'Inspiration et le
                Martyre. Trois toiles sur trois murs d'une seule chapelle.
              </p>
              <p>
                L'entrée est gratuite. Une minuterie à 1 € éclaire les toiles
                pendant deux minutes. Y aller en fin de matinée ou en début
                d'après-midi, quand la lumière naturelle traverse encore la
                nef et complète l'éclairage.
              </p>
              <h4 className="font-medium">Note :</h4>
              <p>
                Deux autres Caravage à Rome, également visibles gratuitement :
                Sant'Agostino (Madonna dei Pellegrini) et Santa Maria del
                Popolo (Conversion de saint Paul, Crucifixion de saint Pierre).
              </p>
            </div>
          ),
        },
        {
          title: "Sant'Eustachio, derrière le Panthéon",
          cardEyebrow: "Cuisine",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "À deux pas du Panthéon, l'un des trois meilleurs cafés de la ville. Au comptoir : 1,30 €",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Sant'Eustachio Il Caffè, ouvert depuis 1938 sur la place du
                même nom, a la réputation de servir le meilleur café de Rome.
                Recette maison, machine à vapeur d'origine, eau filtrée des
                aqueducs antiques. Sucré par défaut : préciser
                « senza zucchero » si on le veut amer.
              </p>
              <p>
                Le café se prend au comptoir. La file s'écoule en dix minutes,
                même en haute saison. Tazza d'Oro, à cent mètres du Panthéon,
                joue dans la même catégorie.
              </p>
              <h4 className="font-medium">Repère :</h4>
              <p>
                Trois cafés de référence à Rome, tous au comptoir, tous à
                moins de quinze minutes à pied : Sant'Eustachio, Tazza d'Oro,
                Sciascia Caffè (Prati).
              </p>
            </div>
          ),
        },
        {
          title: "Le marché du Testaccio, le matin",
          cardEyebrow: "Quartier",
          modalEyebrow: "Ce que les guides ne disent pas",
          shortDescription:
            "Le marché alimentaire le plus vivant de Rome, dans un quartier ouvrier reconverti. Sept heures à treize heures, du lundi au samedi",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Mercato di Testaccio, sous une halle moderne ouverte en
                2012, regroupe une centaine de stands : producteurs de la
                campagne romaine, charcutiers, fromagers, poissonniers, mais
                aussi quelques cuisines de rue qui servent debout au comptoir.
              </p>
              <p>
                Le sandwich « Mordi e Vai » (à la queue de bœuf braisée ou aux
                tripes) est servi par Sergio dans une trattoria-comptoir
                ouverte depuis 2012. La queue se forme entre onze heures et
                midi, puis se vide vers treize heures.
              </p>
              <h4 className="font-medium">Quartier :</h4>
              <p>
                Testaccio, ancien quartier des abattoirs, est devenu l'un des
                meilleurs pour la cuisine romaine de tradition. À combiner
                avec une visite du cimetière non-catholique (tombe de Keats)
                à quinze minutes à pied.
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
            "Le moment où on entre dans la Galerie Borghèse vide, à huit heures, on comprend pourquoi on a fait ce voyage. Notre guide a parlé de Bernini comme s'il l'avait connu personnellement.",
          image: {
            src: "/destination/rome/hero-1.png",
            alt: "Portrait de voyageur (TODO)", // TODO: verify
          },
          name: "TODO", // TODO: verify
          role: "Voyage en couple, mai 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "La logique de quartier proposée par Tainà a tout changé. On a marché sans courir, on a vu plus, on a profité de chaque dîner. Chambre au J.K. Place : parfaite.",
          image: {
            src: "/destination/rome/hero-2.png",
            alt: "Portrait de voyageur (TODO)", // TODO: verify
          },
          name: "TODO", // TODO: verify
          role: "Premier voyage en Italie, septembre 2025", // TODO: verify
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Trois nuits à Rome c'était trop court ; six aurait été le bon nombre. Mais la Vespa sur la Via Appia à sept heures du matin restera. Et la nonna à Trastevere.",
          image: {
            src: "/destination/rome/hero-3.png",
            alt: "Portrait de voyageur (TODO)", // TODO: verify
          },
          name: "TODO", // TODO: verify
          role: "Anniversaire de mariage, juin 2025", // TODO: verify
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
          question: "Quel est le meilleur moment pour partir à Rome ?",
          answer:
            "Avril, mai, septembre et octobre offrent les conditions les plus agréables : températures douces, lumière nette, terrasses ouvertes, foules contenues. Juillet et août sont chauds (35–38 °C) et beaucoup d'adresses ferment trois semaines en août. L'hiver est doux mais pluvieux.",
        },
        {
          question: "Combien de jours faut-il pour visiter Rome ?",
          answer:
            "Pour ne pas courir, cinq jours minimum, sept c'est mieux. Compter une matinée pour le Vatican, une journée pour le Centro Storico, une demi-journée pour la Galerie Borghèse, une journée pour la Via Appia, et le reste pour les quartiers (Trastevere, Aventino, Ghetto).",
        },
        {
          question: "Faut-il un visa pour aller à Rome ?",
          answer:
            "Non, l'Italie fait partie de l'espace Schengen. Une carte d'identité ou un passeport en cours de validité suffit pour les ressortissants français et européens. Aucune autorisation préalable n'est nécessaire.",
        },
        {
          question: "Combien coûte un voyage à Rome ?",
          answer:
            "Le budget dépend du standing souhaité et de la durée. Pour cinq jours en hôtel quatre ou cinq étoiles, avec accès privés (Galerie Borghèse, Vatican hors horaires, dîners privatisés) et transferts inclus, compter à partir de 4 500 € par personne, hors vol.", // TODO: verify
        },
        {
          question: "Quel quartier choisir pour dormir à Rome ?",
          answer:
            "Centro Storico (Panthéon, Piazza Navona) pour la centralité et la marche. Trastevere pour l'ambiance de quartier et la cuisine romaine. Trinité-des-Monts (Spagna) pour la vue et la proximité de la Villa Borghèse. Aventino pour le calme résidentiel.",
        },
        {
          question: "Peut-on visiter le Vatican sans faire la queue ?",
          answer:
            "Oui, en réservant un créneau hors horaires. Les Musées du Vatican proposent une ouverture anticipée à sept heures, avec un guide privé jusqu'à la chapelle Sixtine. Nous coordonnons systématiquement ce créneau pour éviter la file de quatre heures du tarif standard.",
        },
      ],
    },

    {
      type: "entityList",
      kind: "destination",
      background: "bg-background-soft",
      eyebrow: "Inspirations",
      heading: "Destinations similaires",
      description: "Une autre capitale européenne, autre rythme.",
      cta: { label: "Voir toutes les destinations", href: "/destinations" },
      slugs: ["paris"],
    },
  ],
};
