import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "panama",
  name: "Panama",
  placeKind: "country",
  country: "Panama",
  genitive: "du Panama",
  continentSlug: "ameriques",
  blurb: "Guna Yala, Bocas del Toro, Boquete, Coiba",
  keywords: [
    "panama",
    "guna yala",
    "bocas del toro",
    "boquete",
    "coiba",
    "casco viejo",
    "islas secas",
    "chiriqui",
  ],
  metaTitle: "Panama : Voyage sur mesure",
  metaDescription:
    "Voyage au Panama sur mesure : Guna Yala, Bocas del Toro, café de Boquete, archipel de Coiba, Casco Viejo. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Panama",
      heading: "Le pays où l'on change d'océan en une heure d'avion",
      description:
        "Guna Yala aligne trois cent soixante-cinq îles sur la côte caraïbe, dont une cinquantaine seulement sont habitées. Coiba abrite le deuxième plus grand récif corallien du Pacifique oriental. Entre les deux, une capitale, sa vieille ville espagnole et le canal. Nous écrivons ces itinéraires étape par étape.",
      images: [
        {
          src: "/destination/panama/hero-1.png",
          alt: "Îles de l'archipel de Guna Yala au Panama vues depuis la mer",
        },
        {
          src: "/destination/panama/hero-2.png",
          alt: "Façades colorées et clochers du Casco Viejo devant les tours de Panama City",
        },
        {
          src: "/destination/panama/hero-3.png",
          alt: "Caféiers en terrasses sur les pentes du volcan Barú à Boquete",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Panama ?",
      heading: "Tainà, spécialiste du Panama, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "taina", // TODO: verify collaborateurSlug (Tainà porte déjà le Costa Rica et la Colombie)
        // TODO: verify quote attribution — à faire valider par Tainà avant mise en ligne
        quote:
          "Le Panama se lit côte par côte. Le Pacifique et la caraïbe n'ont pas la même saison sèche, pas les mêmes adresses, pas le même rapport au visiteur : un itinéraire qui ignore ce décalage manque la moitié du pays. Les lieux qui font le voyage se demandent un par un : aux communautés guna pour leurs îles, au parc national de Coiba pour la réserve marine, au propriétaire de la finca pour son café.",
        role: "Travel Designer · Panama",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Panama",
      heading: "Un isthme, deux océans, sept peuples autochtones",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage au Panama commence par une donnée de géographie : le pays sépare deux océans sur une largeur que l'on franchit en une matinée. Le canal en a fait un point de passage du commerce mondial, et Panama City une capitale de tours de verre. À dix minutes de ces tours, le Casco Viejo aligne encore ses façades espagnoles et ses clochers, et les ruines de Panamá Viejo marquent l'emplacement de la première ville, brûlée en 1671 par Henry Morgan.",
        "Le reste du pays vit à un autre rythme. Sur la côte caraïbe, la comarca de Guna Yala est administrée par les Guna eux-mêmes, île par île. Plus à l'ouest, Bocas del Toro mélange archipel, mangrove et villages ngöbe où le cacao pousse à l'ombre des grands arbres. Vers la frontière colombienne, le Darién reste sans route : on y entre en pirogue, chez les Emberá.",
        "Côté Pacifique, la province de Chiriquí monte jusqu'aux 3 475 mètres du volcan Barú, où le café geisha se cultive au-dessus de mille cinq cents mètres, à Boquete. En bas, le golfe de Chiriquí ouvre sur les Islas Secas et le parc national de Coiba. Peu de pays réunissent une comarca autochtone, une forêt de nuages et deux océans dans un même voyage.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/panama/full-image.png",
        alt: "Voyage au Panama : forêt et récifs du parc national de Coiba au lever du jour",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Panama : hauts plateaux et Pacifique",
      heading: "Le café le matin à Boquete, l'océan l'après-midi",
      theme: "light",
      paragraphs: [
        "À Boquete, les caféiers poussent sur les pentes du Barú, dans un air qui reste frais toute l'année. C'est là que les fincas de Chiriquí ont fait connaître le geisha, une variété qui bat régulièrement les records de prix aux enchères mondiales. La dégustation se fait sur place, au milieu des rangs, avec ceux qui trient les cerises à la main. Sur le Sendero los Quetzales, le quetzal resplendissant s'observe une partie de l'année, autour des arbres à avocats sauvages.", // TODO: verify saison d'observation du quetzal sur le Sendero los Quetzales
        "Une heure de route plus bas, le golfe de Chiriquí change tout. La mer y est chaude, les îles inhabitées, et l'archipel des Islas Secas ne compte qu'une seule île aménagée. À une heure de bateau, le parc national de Coiba, inscrit au patrimoine mondial depuis 2005, abrite un singe hurleur qui n'existe nulle part ailleurs. Le même jour peut commencer dans la brume des caféiers et finir masque sur le visage.",
      ],
      images: [
        {
          src: "/destination/panama/split-1.png",
          alt: "Cueilleuse triant des cerises de café geisha dans une finca de Boquete",
        },
        {
          src: "/destination/panama/split-2.png",
          alt: "Îlots inhabités du golfe de Chiriquí vus depuis les Islas Secas",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/panama/xp-chocolat-ngobe-1.png",
          alt: "Cabosses de cacao ouvertes sur une table de bois dans un village ngöbe",
        },
        right: {
          src: "/destination/panama/xp-chocolat-ngobe-2.png",
          alt: "Broyage des fèves de cacao à la pierre chez une famille ngöbe de Bocas del Toro",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "L'atelier chocolat d'un village ngöbe, au-dessus de Bocas",
        columns: [
          "On traverse en bateau jusqu'à Almirante, puis la route monte un quart d'heure jusqu'à la finca, où le cacao pousse sous les grands arbres plutôt qu'en plein soleil. Örebä, c'est le mot ngäbe pour cacao. On ouvre la cabosse à la machette, on goûte la pulpe blanche autour de la fève, on suit ce qui vient ensuite : la fermentation en caisses de bois, le séchage au soleil, la torréfaction sur un feu ouvert.",
          "Le broyage se fait à la pierre, à la main, jusqu'à obtenir une pâte que chacun coule dans son propre moule. La famille cuisine ensuite le déjeuner, et la conversation passe du prix payé au producteur à la langue ngäbere. Ce n'est pas une démonstration montée pour les visiteurs : c'est leur récolte, et on repart avec sa tablette.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Panama",
      heading: "Trois sorties qui se calent à l'avance",
      description:
        "Une réserve marine classée au patrimoine mondial à une heure de bateau des Islas Secas, une baie qui s'allume la nuit à Bocas del Toro, un bateau privé pour les dauphins et les récifs du golfe.",
      slugs: [
        "parc-marin-coiba",
        "excursion-bioluminescente",
        "excursion-bateau-prive",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Panama",
      description:
        "Le seul parcours signé Jack Nicklaus de la capitale, une maison de 1917 rendue à la vie à la pointe du Casco Viejo, un archipel privé du Pacifique où l'on est seuls sur l'île. Trois registres, une même exigence de service.",
      slugs: [
        "sofitel-legend-casco-viejo",
        "santa-maria-luxury-collection",
        "islas-secas",
      ],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Panama",
      description:
        "Vol, décalage horaire, monnaie, formalités et saisons : les éléments à connaître pour caler les dates d'un voyage au Panama.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Pas de vol direct depuis Paris. Une escale à Madrid ou Amsterdam, environ onze heures de vol et douze à quatorze heures de trajet total jusqu'à Panama City (PTY). Compter ensuite un vol intérieur d'une heure pour Bocas del Toro ou David.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Sept heures de retard sur Paris en été, six en hiver. Le pays ne pratique pas le changement d'heure. Le décalage se digère bien à l'aller, moins au retour.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le balboa est à parité avec le dollar américain, et il n'existe pas de billet panaméen : les coupures en circulation sont des dollars, les pièces sont panaméennes. Prévoir des espèces en petites coupures pour Guna Yala et les villages, où la carte n'est pas acceptée.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Pas de visa pour les ressortissants français en séjour de moins de 90 jours. La loi panaméenne exige un passeport valide trois mois à l'arrivée, six mois étant vivement conseillés. Un billet de sortie du territoire peut être demandé au contrôle.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucune vaccination obligatoire depuis l'Europe. La fièvre jaune est recommandée pour les zones continentales à l'est du canal, dont le Darién. Un traitement préventif contre le paludisme est recommandé pour le Darién et pour Guna Yala.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "De mi-décembre à avril pour la saison sèche, la plus stable côté Pacifique et sur les îles. Bocas del Toro suit son propre calendrier : les mois les plus secs y sont septembre et octobre, puis février et mars.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Espagnol. L'anglais est compris à Panama City, à Bocas del Toro et dans les établissements haut de gamme, beaucoup moins ailleurs. Un guide francophone accompagne l'ensemble de l'itinéraire.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Tropical, de 24 à 32 °C sur les deux côtes toute l'année. Boquete, à 1 200 mètres, reste entre 15 et 25 °C, souvent dans la brume. Saison des pluies de mai à novembre, averses en fin de journée.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Chaque dossier Panama mobilise plusieurs expertises. Un interlocuteur unique en assure la coordination et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/panama/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Panama entre Guna Yala, Boquete et le golfe de Chiriquí",
            "Adresses confidentielles au Panama : fincas de café et îles privées",
            "Hébergements au Panama : maison coloniale du Casco Viejo et archipel privé",
            "Conciergerie privée 24/7 pour un voyage au Panama",
            "Expériences immersives au Panama : cacao ngöbe, Coiba et bioluminescence",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les étapes à connaître au Panama",
      heading: "Six territoires, d'une côte à l'autre",
      description:
        "Du Casco Viejo aux Islas Secas, six territoires que deux semaines permettent d'enchaîner sans passer ses journées en transfert.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 7,
      places: [
        {
          title: "Panama City et le canal",
          description:
            "Les écluses de Miraflores se regardent depuis une plateforme, à quelques mètres des navires. La ville derrière aligne ses tours, ses marchés de poisson et le Biomuseo dessiné par Frank Gehry.",
          image: {
            src: "/destination/panama/map-canal.png",
            alt: "Cargo franchissant les écluses de Miraflores sur le canal de Panama",
          },
          // TODO: verify coords
          coordinates: { lat: 8.9967, lng: -79.5906 },
        },
        {
          title: "Le Casco Viejo",
          description:
            "La vieille ville espagnole, inscrite au patrimoine mondial, tient sur une pointe face à la baie. Ruelles pavées, cours intérieures, toits-terrasses : le contraste avec les tours d'en face se voit d'un seul regard.",
          image: {
            src: "/destination/panama/map-casco-viejo.png",
            alt: "Ruelle pavée et balcons de bois du Casco Viejo à Panama City",
          },
          // TODO: verify coords
          coordinates: { lat: 8.9515, lng: -79.5352 },
        },
        {
          title: "Guna Yala, côte caraïbe",
          description:
            "Une comarca autonome administrée par les Guna, sur un chapelet d'îles de sable et de cocotiers. On y vient avec leur accord, on y dort simplement, et la nuit ne porte aucune lumière artificielle.",
          image: {
            src: "/destination/panama/map-guna-yala.png",
            alt: "Île de sable et cocotiers de l'archipel de Guna Yala au Panama",
          },
          // TODO: verify coords
          coordinates: { lat: 9.5667, lng: -78.95 },
        },
        {
          title: "Bocas del Toro",
          description:
            "Un archipel de mangrove et de récifs, des maisons sur pilotis, et des villages ngöbe où le cacao pousse sous les grands arbres. La nuit, certaines baies s'allument au moindre mouvement dans l'eau.",
          image: {
            src: "/destination/panama/map-bocas-del-toro.png",
            alt: "Maisons sur pilotis et eaux calmes de l'archipel de Bocas del Toro",
          },
          // TODO: verify coords
          coordinates: { lat: 9.34, lng: -82.24 },
        },
        {
          title: "Boquete et le volcan Barú",
          description:
            "À 1 200 mètres, l'air est frais et la brume passe deux fois par jour. Les fincas de Chiriquí y cultivent le geisha, et le sommet du Barú se gravit de nuit pour arriver au lever du jour.",
          image: {
            src: "/destination/panama/map-boquete.png",
            alt: "Vallée de Boquete sous la brume, au pied du volcan Barú",
          },
          // TODO: verify coords
          coordinates: { lat: 8.78, lng: -82.44 },
        },
        {
          title: "Islas Secas et Coiba",
          description:
            "Un archipel privé du golfe de Chiriquí, à une heure de bateau du parc national de Coiba. Baleines de passage, requins-baleines, tortues : la réserve marine fait la valeur de l'endroit.",
          image: {
            src: "/destination/panama/map-coiba.png",
            alt: "Récif et eaux claires du parc national marin de Coiba au Panama",
          },
          // TODO: verify coords
          coordinates: { lat: 7.97, lng: -82.03 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Panama",
      description:
        "Huit repères rapportés du terrain : ce qu'il faut viser, quand partir, et ce qui change d'une côte à l'autre.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "Deux semaines pour changer trois fois de décor",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La capitale, une côte, les hauteurs. Deux nuits minimum par étape, sinon le voyage se passe en transfert",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le Panama tient dans un petit pays, mais ses milieux n&apos;ont
                rien en commun : la capitale et le canal, la côte caraïbe de Guna
                Yala ou de Bocas del Toro, les hauteurs caféières de Chiriquí,
                puis le golfe et ses îles. Une quinzaine de jours permet de les
                enchaîner sans se presser.
              </p>
              <p>
                Nous comptons deux nuits minimum par étape, trois sur les îles.
                Les liaisons intérieures se font en vol d&apos;une heure environ,
                ce qui évite les longues routes et libère des journées entières
                sur place.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                L&apos;itinéraire réserve au moins deux journées sans transfert,
                généralement dans le golfe de Chiriquí et à Boquete.
              </p>
            </div>
          ),
        },
        {
          title: "Guna Yala se visite avec l'accord des Guna",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La comarca est administrée par les Guna. L'accès, les nuits et les photos suivent leurs règles",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Guna Yala n&apos;est pas une destination balnéaire comme une
                autre : c&apos;est un territoire autonome, géré île par île par
                les communautés guna, avec son propre congrès et ses propres
                lois. On acquitte un droit d&apos;entrée dans la comarca, puis un
                droit d&apos;accostage sur chaque île. Sur les îles habitées de
                la partie centrale et orientale, la visite se demande au saila,
                le chef de la communauté.
              </p>
              <p>
                Le confort y reste simple, et c&apos;est le prix de ce que
                l&apos;on vient chercher. En contrepartie : des molas cousues
                sous les yeux du visiteur et des conversations qui ne
                ressemblent à aucune visite guidée. La photographie se demande,
                elle ne se prend pas, et les femmes en habit traditionnel
                acceptent le plus souvent contre une petite pièce.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les accords sont pris en amont avec les communautés, avec un
                interprète qui parle le dulegaya, et la nuit se passe sur une
                île retenue pour nos voyageurs seuls.
              </p>
            </div>
          ),
        },
        {
          title: "Le geisha se goûte sur la finca",
          cardEyebrow: "Café",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le café le plus cher du monde pousse au-dessus de Boquete. La dégustation se fait dans les rangs",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le geisha de Chiriquí a fait la réputation caféière du Panama et
                bat régulièrement ses propres records : à l&apos;enchère Best of
                Panama 2025, un lot lavé de la Hacienda La Esmeralda, à Boquete,
                est parti à plus de trente mille dollars le kilo. Il pousse
                au-dessus de mille cinq cents mètres, sur les pentes du Barú,
                dans un microclimat que les fincas ont appris à lire parcelle
                par parcelle.
              </p>
              <p>
                La visite suit la chaîne complète : la cueillette à la main, le
                tri, le séchage sur patios, puis la torréfaction et la
                dégustation à côté du torréfacteur. On y parle rendement, prix
                payé au producteur et différence entre deux parcelles voisines.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                La dégustation est privatisée en fin de matinée, avec le maître
                de chai de la finca, et l&apos;après-midi se prolonge sur le
                Sendero los Quetzales.
              </p>
            </div>
          ),
        },
        {
          title: "La bioluminescence dépend de la lune",
          cardEyebrow: "Nuit",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les baies de Bocas s'allument au mouvement. Il faut une nuit noire pour que ça se voie",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Dans certaines baies fermées de Bocas del Toro, l&apos;eau
                contient un plancton qui s&apos;allume au moindre mouvement.
                Chaque geste laisse une traînée bleue derrière la main. Le
                phénomène existe toute l&apos;année, mais il ne se voit
                réellement que par nuit sombre.
              </p>
              <p>
                Les nuits proches de la pleine lune sont à écarter : la clarté
                efface tout. Les meilleures fenêtres tombent en nouvelle lune,
                de février à avril et de septembre à octobre, quand le ciel est
                le plus dégagé. La sortie se fait de nuit, moteur coupé, avec un
                capitaine qui connaît les baies où la concentration est la plus
                forte.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous calons la sortie sur le calendrier lunaire dès la
                construction de l&apos;itinéraire, en bateau privé et hors des
                créneaux de groupe.
              </p>
            </div>
          ),
        },
        {
          title: "Les baleines passent deux fois par an",
          cardEyebrow: "Faune",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le golfe de Chiriquí reçoit les baleines à bosse des deux hémisphères. Deux saisons, deux populations",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le golfe de Chiriquí et les eaux de Coiba sont l&apos;un des
                seuls endroits connus où se croisent, à des mois
                d&apos;intervalle, deux populations distinctes de baleines à
                bosse, l&apos;une venue du sud, l&apos;autre du nord. La fenêtre
                australe s&apos;étend de juillet à octobre, avec un pic en
                septembre ; la boréale, plus discrète, de décembre à avril.
              </p>
              <p>
                Les requins-baleines et les tortues fréquentent les mêmes eaux,
                et le parc national de Coiba abrite un singe hurleur endémique
                que l&apos;on n&apos;observe nulle part ailleurs. L&apos;accès
                suppose une autorisation du ministère de l&apos;Environnement,
                un opérateur agréé et un guide du parc.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les permis de Coiba et le guide naturaliste sont réservés dès la
                confirmation du dossier, avec un départ au premier créneau du
                matin.
              </p>
            </div>
          ),
        },
        {
          title: "Deux côtes, deux saisons",
          cardEyebrow: "Saisons",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La saison sèche du Pacifique ne vaut pas pour la caraïbe. Bocas suit son propre calendrier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                De mi-décembre à mi-avril, le Pacifique et les îles offrent la
                fenêtre la plus stable : ciel dégagé, mer praticable, visibilité
                bonne sous l&apos;eau. C&apos;est la période à viser pour Coiba
                et le golfe de Chiriquí.
              </p>
              <p>
                Côté caraïbe, le calendrier se décale : à Bocas del Toro, les
                mois les plus secs sont septembre et octobre, puis février et
                mars, quand une bonne partie du pays est en saison des pluies.
                Juin, juillet et novembre y sont les plus arrosés. Un itinéraire
                bien posé choisit sa côte en fonction du mois de départ, pas
                l&apos;inverse.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous arbitrons l&apos;ordre des étapes selon vos dates, plutôt
                que d&apos;appliquer un circuit identique toute l&apos;année.
              </p>
            </div>
          ),
        },
        {
          title: "Les îles privées se réservent tôt",
          cardEyebrow: "Hébergement",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une dizaine de casitas sur un archipel entier. La rareté fait la valeur, et le calendrier",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les meilleures adresses du pays sont petites. Sur le Pacifique,
                un archipel de quatorze îles n&apos;en aménage qu&apos;une, avec
                huit casitas et une vingtaine de voyageurs au maximum. Le
                service s&apos;y mesure au nombre de personnes par voyageur
                plutôt qu&apos;au nombre d&apos;étoiles.
              </p>
              <p>
                De janvier à mars, ces capacités se remplissent très en amont.
                Ouvrir le dossier tôt, c&apos;est choisir l&apos;adresse plutôt
                que composer avec ce qui reste.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous travaillons les départs de haute saison six à neuf mois à
                l&apos;avance et posons des options fermes dès l&apos;accord sur
                l&apos;itinéraire.
              </p>
            </div>
          ),
        },
        {
          title: "Vols intérieurs et bagages",
          cardEyebrow: "Sur place",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les liaisons vers les îles se font en petits avions, avec une franchise bagage réduite",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Bocas del Toro, David et les pistes de Guna Yala se rejoignent en
                petits appareils depuis Panama City. Le vol dure environ une
                heure, et la franchise bagage y est plus basse que sur un
                long-courrier : quatorze kilos en soute pour Bocas del Toro,
                quatre kilos en cabine.
              </p>
              <p>
                Un sac souple passe mieux qu&apos;une valise rigide, et les
                affaires inutiles restent à l&apos;hôtel de la capitale. Les
                horaires bougent avec la météo caraïbe : mieux vaut ne pas
                enchaîner un vol intérieur et un vol de retour le même jour.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Les vols intérieurs sont réservés avec le dossier, une chambre
                reste à disposition à Panama City pour les bagages, et la
                dernière nuit se passe toujours dans la capitale.
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
            "L'atelier cacao dans le village ngöbe est ce dont nos enfants parlent encore. Ils ont ouvert les cabosses, broyé les fèves et repris deux fois du déjeuner. On est repartis avec trois tablettes emballées dans du papier.",
          image: {
            src: "/destination/panama/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Panama en famille, février 2026", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Coiba au premier créneau du matin, avec un guide pour nous seuls. Requins-baleines le deuxième jour. Le soir, on dînait à quatre sur une île où il n'y avait personne d'autre.",
          image: {
            src: "/destination/panama/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Islas Secas et Coiba, mars 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Deux nuits à Guna Yala, puis Boquete et le café. Le passage d'un monde à l'autre a été organisé sans que nous ayons un seul transfert à gérer.",
          image: {
            src: "/destination/panama/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Guna Yala et Chiriquí, janvier 2026", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Panama ?",
          answer:
            "De mi-décembre à avril pour la saison sèche : c'est la fenêtre la plus stable pour le Pacifique, le golfe de Chiriquí et Coiba. Côté caraïbe, le calendrier se décale, et les mois les plus secs à Bocas del Toro sont septembre et octobre, puis février et mars. Mai et juin restent praticables, avec des averses en fin de journée et beaucoup moins de monde.",
        },
        {
          question: "Combien de temps dure le vol Paris-Panama ?",
          answer:
            "Il n'existe pas de vol direct entre Paris et Panama City. Avec une escale à Madrid ou Amsterdam, comptez environ onze heures de vol et douze à quatorze heures de trajet total. Un vol intérieur d'une heure environ s'ajoute ensuite pour Bocas del Toro, David ou les pistes de Guna Yala.",
        },
        {
          question: "Faut-il un visa pour aller au Panama ?",
          answer:
            "Non. Les ressortissants français sont dispensés de visa pour les séjours de moins de 90 jours. La loi panaméenne exige un passeport valide trois mois à l'arrivée, six mois étant vivement conseillés, et un billet de sortie du territoire peut être demandé au contrôle. Vérifiez que le tampon d'entrée a bien été apposé sur votre passeport : son absence pose de vrais problèmes au départ. Aucune vaccination n'est obligatoire depuis l'Europe ; la fièvre jaune est recommandée à l'est du canal, et un traitement antipaludéen préventif pour le Darién et Guna Yala.",
        },
        {
          question: "Que faire au Panama en 15 jours ?",
          answer:
            "Deux nuits à Panama City pour le canal, le Casco Viejo et le Biomuseo, puis trois nuits sur la côte caraïbe, à Guna Yala ou à Bocas del Toro, avec l'atelier cacao dans un village ngöbe. Ensuite trois nuits à Boquete pour le café, le volcan Barú et le Sendero los Quetzales, et quatre nuits dans le golfe de Chiriquí pour Coiba et les îles. La dernière nuit se passe dans la capitale.",
        },
        {
          question: "Le Panama est-il adapté aux familles ?",
          answer:
            "Oui. Les distances sont courtes, les vols intérieurs durent une heure, et les activités se partagent facilement entre générations : atelier cacao, sortie bioluminescence, snorkeling dans le golfe, ponts et sentiers de Chiriquí. Les îles privées et les maisons du Casco Viejo savent recevoir plusieurs chambres d'une même famille, avec un chef sur place quand le format le demande.",
        },
        {
          question: "Où dormir au Panama ?",
          answer:
            "Dans la capitale, le Casco Viejo permet de dormir dans la vieille ville, à pied des restaurants et des toits-terrasses ; le quartier de Santa María offre l'autre registre, plus résidentiel, avec un parcours de golf. Sur la côte caraïbe, l'hébergement reste simple et se choisit pour son emplacement. Dans le golfe de Chiriquí, un archipel privé donne accès à Coiba au premier créneau du matin.",
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
        "D'autres façons de parcourir le continent, entre forêt tropicale, cordillère et littoral. Trois prolongements possibles après un premier voyage au Panama.",
      slugs: ["costa-rica", "chili", "uruguay"],
    },
  ],
};
