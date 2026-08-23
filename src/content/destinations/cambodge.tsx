import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "cambodge",
  name: "Cambodge",
  placeKind: "country",
  country: "Cambodge",
  genitive: "du Cambodge",
  continentSlug: "asie",
  blurb: "Angkor, le Mekong, les Cardamomes, le golfe",
  keywords: [
    "cambodge",
    "angkor",
    "siem reap",
    "phnom penh",
    "tonle sap",
    "mekong",
    "cardamomes",
    "koh rong",
  ],
  metaTitle: "Cambodge : Voyage sur mesure",
  metaDescription:
    "Voyage au Cambodge sur mesure : Angkor avant l'ouverture, le Mekong en sampan, les Cardamomes, les îles du golfe. Itinéraire écrit par votre travel designer.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe au Cambodge",
      heading: "Le Cambodge, d'Angkor aux îles du golfe",
      description:
        "Le Cambodge se laisse apprivoiser lentement. À Siem Reap, la forêt s'ouvre sur des temples que l'on croyait connaître et qui se révèlent bien plus vastes. Plus au sud, le Mekong descend vers le delta et la forêt des Cardamomes ferme l'horizon. C'est ce royaume-là que nous composons pour vous, étape après étape.",
      images: [
        {
          src: "/destination/cambodge/hero-1.png",
          alt: "Les tours d'Angkor Vat au lever du jour près de Siem Reap, au Cambodge",
        },
        {
          src: "/destination/cambodge/hero-2.png",
          alt: "Village sur pilotis de Kampong Phluk au bord du Tonlé Sap à la tombée du jour",
        },
        {
          src: "/destination/cambodge/hero-3.png",
          alt: "Rivière et forêt des Cardamomes dans le sud-ouest du Cambodge",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir au Cambodge ?",
      heading: "Stéphane, spécialiste du Cambodge, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "Ce que j'aime au Cambodge, c'est que le pays ne se donne jamais tout de suite. Il faut être là quand le jour se lève, laisser le guide raconter, accepter de revenir au même temple pour qu'il finisse par s'ouvrir. Je construis les voyages de façon à ce que ces moments-là arrivent.",
        role: "Travel Designer · Cambodge",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte du Cambodge",
      heading: "Le Cambodge, la beauté tranquille des temples et du fleuve",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      columns: [
        "Un voyage au Cambodge commence presque toujours par Angkor, et c'est très bien ainsi. Le site est immense, une journée n'en fait pas le tour, alors nous étalons la visite sur plusieurs matinées. On suit la lumière plutôt qu'un programme : Angkor Vat quand le jour se lève, le Bayon lorsque le soleil monte, puis Ta Prohm et ses fromagers dans le calme du milieu de journée.",
        "Le pays vit au rythme de son eau. Le Tonlé Sap gonfle à la saison des pluies puis se retire doucement, et les villages montent et descendent avec lui sans jamais quitter leurs pilotis. À Kampong Phluk, on traverse la forêt inondée en barque, et le silence n'est troublé que par la rame.",
        "Puis vient ce que l'on n'attendait pas. La forêt des Cardamomes garde encore ses éléphants et ses gibbons, et l'on s'y baigne dans des rivières que personne ne fréquente. Le golfe, plus bas, aligne des îles de sable clair restées longtemps à l'écart. Le Cambodge ne se résume pas à ses temples, et c'est souvent là qu'il surprend le plus.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/cambodge/full-image.png",
        alt: "Visages de pierre du temple du Bayon dans le parc d'Angkor, au Cambodge",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Cambodge : Phnom Penh hors circuit",
      heading: "Phnom Penh, la ville où l'on s'attarde plus que prévu",
      theme: "light",
      paragraphs: [
        "La capitale se tient au confluent des fleuves, et l'on comprend vite pourquoi les rois s'y sont installés. Le Palais royal et la pagode d'Argent occupent la matinée, avec leurs toits dorés et leur sol pavé de métal précieux. Le Musée national, juste à côté, garde les plus belles pièces khmères sorties d'Angkor, et l'on y reste toujours plus longtemps qu'on ne l'avait prévu.",
        "L'après-midi appartient à la ville elle-même. On longe les quais lorsque la chaleur retombe, on s'arrête à une table où la cuisine khmère se réinvente, et l'on flâne dans les rues du vieux quartier français. Ceux qui souhaitent comprendre les années Khmers rouges le font avec un guide qui a vécu cette période, et nous laissons alors le reste de la journée libre.",
      ],
      images: [
        {
          src: "/destination/cambodge/split-1.png",
          alt: "Toits dorés du Palais royal et de la pagode d'Argent à Phnom Penh",
        },
        {
          src: "/destination/cambodge/split-2.png",
          alt: "Quais du Sisowath au confluent du Mekong et du Tonlé Sap à Phnom Penh",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/cambodge/xp-angkor-aube-1.png",
          alt: "Chaussée d'Angkor Vat déserte avant le lever du jour",
        },
        right: {
          src: "/destination/cambodge/xp-angkor-aube-2.png",
          alt: "Racines de fromager sur les murs du temple de Ta Prohm à Angkor",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Angkor à l'aube, seul avec un archéologue",
        columns: [
          "Les portes du parc s'ouvrent avant le jour, et nous vous y conduisons à ce moment-là. La chaussée d'Angkor Vat est encore déserte, la pierre garde la fraîcheur de la nuit, et les tours se détachent une à une pendant que le ciel change de couleur. On marche sans se presser, et l'on entend surtout les oiseaux dans les douves.",
          "L'archéologue qui vous accompagne travaille sur le site depuis des années. Il raconte ce que les bas-reliefs disent des batailles et des marchés, pourquoi les visages du Bayon sourient tous de la même façon, ce que les racines des fromagers font aux murs de Ta Prohm lorsqu'on les laisse faire. Quand les premiers cars franchissent le pont, nous sommes déjà repartis.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités au Cambodge",
      heading: "Une nuit dans un temple, le Mekong et le grand lac",
      description:
        "Un temple que le village ouvre pour la nuit, un bateau de bois qui descend le fleuve à son rythme, et le Tonlé Sap au moment où les pêcheurs relèvent leurs filets. Trois façons d'entrer dans le pays, et nous les organisons de bout en bout.",
      slugs: [
        "banteay-chhmar-bivouac",
        "sampan-prive-mekong",
        "tonle-sap-pecheur-aube",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où séjourner au Cambodge",
      description:
        "L'ancienne maison d'hôtes d'un roi à deux pas d'Angkor, un campement suspendu au-dessus d'une rivière des Cardamomes, deux îles privées dans le golfe. Trois manières d'habiter le royaume.",
      slugs: ["amansara", "shinta-mani-wild", "song-saa-private-island"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage au Cambodge",
      description:
        "Vol, décalage, formalités et saisons : de quoi caler les dates d'un voyage au Cambodge en toute tranquillité.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Depuis Paris, Phnom Penh et Siem Reap sont accessibles avec une correspondance. Comptez généralement 13 à 18 heures de voyage, selon l'itinéraire.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "Le Cambodge ne change pas d'heure. Comptez six heures d'avance sur la France en hiver, et cinq heures en été.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "Le riel est la monnaie officielle et le dollar américain circule encore très largement. Les cartes étrangères sont acceptées dans les hôtels, et il reste utile de garder des espèces.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Un visa touristique est obligatoire. L'e-visa s'obtient en ligne avant le départ ; le visa peut aussi être délivré à l'arrivée. La Cambodia e-Arrival doit également être complétée avant une arrivée par avion. Passeport valable au moins six mois.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Depuis la France, aucune vaccination n'est exigée dans le cas général ; la fièvre jaune devient obligatoire en provenance d'une zone d'endémie. L'Institut Pasteur recommande le calendrier vaccinal à jour et l'hépatite A ; la typhoïde et la rage se discutent selon le séjour.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "La saison sèche court de novembre à avril. Nous privilégions décembre à février, quand l'air reste sec et la chaleur supportable dans les temples.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le khmer est la langue officielle du pays. L'anglais est largement parlé dans l'hôtellerie et par les guides des sites archéologiques.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Climat tropical de mousson, chaud toute l'année. Les pluies s'installent de mai à octobre, souvent en fin de journée, et avril est généralement le mois le plus chaud.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Cambodge. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/cambodge/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure au Cambodge entre Angkor, le Mekong et les Cardamomes",
            "Adresses confidentielles au Cambodge : temples reculés et villages du fleuve",
            "Hébergements au Cambodge : Amansara à Siem Reap et Shinta Mani Wild",
            "Conciergerie privée 24/7 pour un voyage au Cambodge",
            "Expériences immersives au Cambodge : Angkor à l'aube et le Tonlé Sap",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables au Cambodge",
      heading: "D'Angkor au golfe, les étapes qui font le voyage",
      description:
        "Des temples de Siem Reap aux îles du golfe, en passant par le fleuve et la forêt, voici les étapes que nous relions dans l'ordre qui vous convient.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      initialZoom: 7,
      places: [
        {
          title: "Angkor et Siem Reap",
          description:
            "Des temples, des douves et une forêt qui les entoure depuis des siècles. Angkor Vat, le Bayon et Ta Prohm en sont le cœur, mais les enceintes extérieures se visitent souvent seul, et c'est là que le site prend toute sa mesure.",
          image: {
            src: "/destination/cambodge/map-angkor.png",
            alt: "Temple d'Angkor Vat et ses douves dans le parc archéologique de Siem Reap",
          },
          // TODO: verify coords
          coordinates: { lat: 13.4125, lng: 103.867 },
        },
        {
          title: "Phnom Penh",
          description:
            "La capitale se tient au confluent des fleuves. Le Palais royal, la pagode d'Argent et le Musée national occupent la matinée, et les quais font le reste lorsque la chaleur retombe.",
          image: {
            src: "/destination/cambodge/map-phnom-penh.png",
            alt: "Palais royal de Phnom Penh au bord du Tonlé Sap",
          },
          // TODO: verify coords
          coordinates: { lat: 11.5564, lng: 104.9282 },
        },
        {
          title: "Le Tonlé Sap et Kampong Phluk",
          description:
            "Le grand lac du Cambodge gonfle à la saison des pluies puis se retire. Les maisons de Kampong Phluk tiennent sur de hauts pilotis, et la forêt inondée se traverse en barque, à la rame.",
          image: {
            src: "/destination/cambodge/map-tonle-sap.png",
            alt: "Maisons sur pilotis de Kampong Phluk au bord du lac Tonlé Sap",
          },
          // TODO: verify coords
          coordinates: { lat: 13.1667, lng: 103.9833 },
        },
        {
          title: "Banteay Chhmar",
          description:
            "Un temple posé dans la campagne du nord-ouest, que personne n'a restauré et que la forêt a laissé s'affaisser. Le village en tient les clés et accueille ceux qui souhaitent y passer la nuit.",
          image: {
            src: "/destination/cambodge/map-banteay-chhmar.png",
            alt: "Ruines du temple de Banteay Chhmar dans le nord-ouest du Cambodge",
          },
          // TODO: verify coords
          coordinates: { lat: 14.0333, lng: 103.0833 },
        },
        {
          title: "Les Cardamomes",
          description:
            "L'une des dernières grandes forêts d'Asie du Sud-Est, avec ses éléphants, ses gibbons et ses rivières à courant lent. Des équipes de protection la parcourent chaque jour, et l'on peut les accompagner.",
          image: {
            src: "/destination/cambodge/map-cardamomes.png",
            alt: "Rivière et canopée de la forêt des Cardamomes au sud-ouest du Cambodge",
          },
          // TODO: verify coords
          coordinates: { lat: 11.6, lng: 103.2 },
        },
        {
          title: "Koh Rong et le golfe",
          description:
            "Des îles de sable clair à l'écart de la côte, longtemps absentes des cartes. Song Saa en occupe deux, reliées par une passerelle de bois posée au-dessus d'une réserve marine.",
          image: {
            src: "/destination/cambodge/map-koh-rong.png",
            alt: "Îles de sable clair de l'archipel de Koh Rong dans le golfe de Thaïlande",
          },
          // TODO: verify coords
          coordinates: { lat: 10.7, lng: 103.25 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage au Cambodge",
      description:
        "Quelques observations de terrain qui ne figurent pas dans un guide : la bonne saison, l'heure à laquelle on entre dans les temples, et ce qui se prépare avant de partir.",
      cta: { label: "Construire ce voyage", href: "/reserver" },
      items: [
        {
          title: "La saison qui rend tout plus simple",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une longue fenêtre sèche, et deux mois où la chaleur devient difficile",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays vit au rythme de deux saisons. La saison sèche court de
                novembre à avril, et nous privilégions décembre à février :
                l&apos;air y reste sec, la lumière du matin porte loin et la
                chaleur se supporte dans les temples. Les pluies s&apos;installent
                de mai à octobre, souvent en fin de journée, et laissent les
                matinées praticables.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Avril est généralement le mois le plus chaud de l&apos;année, avec
                des après-midi difficiles sur les chaussées sans ombre.
                À l&apos;inverse, septembre et octobre offrent un Angkor très
                vert, des douves pleines et peu de monde, à condition
                d&apos;accepter une averse quotidienne. Nous construisons alors
                les journées autour de la pluie plutôt que contre elle.
              </p>
            </div>
          ),
        },
        {
          title: "Angkor est une affaire d'heures",
          cardEyebrow: "Temples",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le même temple ne se ressemble pas au lever du jour et en milieu de matinée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le parc ouvre avant le jour et la plupart des visiteurs arrivent
                en milieu de matinée, puis à nouveau en fin d&apos;après-midi.
                Entre les deux, la chaleur écarte presque tout le monde. Les
                grands temples se visitent donc très tôt, et les enceintes
                extérieures, Preah Khan, Banteay Srei ou Beng Mealea, se gardent
                pour le milieu de la journée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Nous prenons le pass sur plusieurs jours plutôt que sur une
                seule journée, même pour un séjour court. Trois courtes matinées
                valent mieux qu&apos;une journée complète, et la dernière est
                souvent la plus belle : on a cessé de vouloir tout voir.
              </p>
            </div>
          ),
        },
        {
          title: "Le dollar et le riel",
          cardEyebrow: "Argent",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Deux monnaies coexistent, et la question se règle avant de quitter la ville",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le riel est la monnaie officielle, mais le dollar américain
                circule encore très largement, souvent pour les montants ronds,
                la monnaie étant rendue en riels. Les cartes étrangères passent
                dans les hôtels et les grandes tables de Phnom Penh et de Siem
                Reap. Ailleurs, la journée se règle en espèces.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Retirez avant de quitter la ville et demandez de petites
                coupures : les billets abîmés sont parfois refusés et les
                grosses coupures se changent mal dans un village. L&apos;usage
                évolue vite, la banque centrale encourageant le riel, et nous
                faisons le point avec vous quelques jours avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "La tenue dans les temples",
          cardEyebrow: "Usages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Épaules et genoux couverts, et cela se vérifie à l'entrée des sanctuaires",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Angkor reste un lieu de culte vivant. Les épaules et les genoux
                doivent être couverts, et l&apos;accès aux niveaux supérieurs
                d&apos;Angkor Vat est refusé à ceux qui ne le sont pas. La règle
                vaut aussi dans les pagodes en activité, où l&apos;on retire ses
                chaussures et où l&apos;on évite de tourner la plante des pieds
                vers une statue.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Un pantalon léger en lin et une chemise à manches longues
                rendent plus service qu&apos;un short : ils protègent aussi du
                soleil sur les longues chaussées. Une écharpe fine glissée dans
                le sac règle la question des épaules en un instant.
              </p>
            </div>
          ),
        },
        {
          title: "Les moustiques, la seule vraie vigilance",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Rien de compliqué, mais quelques gestes à prendre dès le premier soir",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le paludisme a fortement reculé et ne concerne plus les villes
                ni les sites d&apos;Angkor. Un risque subsiste dans certaines
                zones forestières reculées, notamment le long des frontières. La
                dengue, elle, se rencontre toute l&apos;année, y compris en
                ville, et le moustique qui la transmet pique en journée.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Depuis la France, aucune vaccination n&apos;est exigée dans le
                cas général, mais la fièvre jaune devient obligatoire pour une
                arrivée en provenance d&apos;une zone d&apos;endémie.
                L&apos;Institut Pasteur recommande d&apos;être à jour du
                calendrier vaccinal et conseille l&apos;hépatite A ; la typhoïde
                et la rage se discutent selon la durée et les conditions du
                séjour. Prenez conseil dans un centre de vaccinations
                internationales quelques semaines avant le départ. Sur place, un
                bon répulsif et des manches longues au crépuscule suffisent le
                plus souvent.
              </p>
            </div>
          ),
        },
        {
          title: "Rester sur les sentiers",
          cardEyebrow: "Sécurité",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le nord-ouest garde des zones minées, et cela se contourne simplement",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Des mines antipersonnel subsistent dans certaines zones rurales
                du nord-ouest, héritage des années de conflit. Le déminage
                avance depuis des décennies, les sites touristiques et les
                routes sont sûrs, mais les champs et les sous-bois non balisés
                ne se coupent pas à travers.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                La règle est simple et suffit : on reste sur les chemins
                fréquentés et l&apos;on ne s&apos;écarte pas d&apos;un sentier
                pour une photographie. Autour de Banteay Chhmar comme dans les
                Cardamomes, nous passons par des guides locaux qui connaissent
                le terrain village par village.
              </p>
            </div>
          ),
        },
        {
          title: "Relier les étapes sans se presser",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Une belle étape à mi-chemin vaut toujours mieux qu'une route d'affilée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le pays se parcourt tranquillement, et nous préférons couper les
                longues routes par une étape agréable plutôt que d&apos;enchaîner.
                Entre Phnom Penh et le golfe, une nuit à Kampot au bord de la
                rivière change tout. Le nouvel aéroport de Siem Reap-Angkor a
                éloigné la ville, ce dont nous tenons compte pour la première
                matinée sur place.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Quand le trajet s&apos;allonge, le vol intérieur ou
                l&apos;hélicoptère reprend la main, et nous ne plaçons jamais de
                longue route la veille d&apos;un vol international. Les plus
                belles matinées se décident la veille au soir avec le guide :
                cela demande simplement d&apos;être encore là le lendemain.
              </p>
            </div>
          ),
        },
        {
          title: "Dans ma valise",
          cardEyebrow: "Bagages",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Du lin, une lampe frontale et de quoi se couvrir les épaules",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Il fait chaud et humide presque toute l&apos;année. Le lin et le
                coton passent mieux que les matières techniques, et des
                chaussures fermées rendent service sur les pierres inégales
                d&apos;Angkor, souvent glissantes au petit matin. Une lampe
                frontale sert dans les couloirs sombres des temples comme dans
                les Cardamomes.
              </p>
              <h4 className="font-medium">Conseil :</h4>
              <p>
                Ajoutez une écharpe fine pour les sanctuaires, une veste légère
                pour la climatisation des voitures, et une pochette étanche si
                le voyage descend vers les îles. À la saison des pluies, un
                poncho se replie mieux qu&apos;un parapluie dans un tuk-tuk.
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
            "Entrer dans le parc avant le jour, c'est ce qui a tout changé. Nous avons eu la chaussée d'Angkor Vat pour nous, dans un silence complet. L'archéologue qui nous accompagnait nous a montré des détails que nous n'aurions jamais remarqués, et nous étions repartis quand les cars sont arrivés.",
          image: {
            src: "/destination/cambodge/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Cambodge, Angkor et Phnom Penh, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous avons dormi sous tente à Banteay Chhmar, dans un temple que personne n'a restauré. Le village avait préparé le dîner et, au matin, la brume tenait encore entre les pierres. C'est le souvenir que nos petits-enfants racontent encore.",
          image: {
            src: "/destination/cambodge/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Cambodge en famille, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Après les temples, nous ne pensions pas que ce serait la forêt qui resterait. Une rivière, un campement suspendu dans les arbres, et deux gardes qui nous ont emmenés relever des pièges toute une matinée. Nous sommes restés plus longtemps que prévu.",
          image: {
            src: "/destination/cambodge/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Cambodge, Angkor et Cardamomes, 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir au Cambodge ?",
          answer:
            "La saison sèche court de novembre à avril. Nous privilégions décembre à février, la fenêtre la plus agréable, quand l'air reste sec et que la chaleur se supporte dans les temples. Avril est généralement le mois le plus chaud de l'année. Les pluies s'installent de mai à octobre, le plus souvent en fin de journée : les matinées restent praticables, Angkor est très vert, les douves sont pleines et les visiteurs beaucoup moins nombreux.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Depuis Paris, Phnom Penh et Siem Reap sont accessibles avec une correspondance. Comptez généralement 13 à 18 heures de voyage, selon l'itinéraire retenu. Les programmes aériens évoluent d'une saison à l'autre et nous choisissons l'escale la plus confortable au moment de la réservation. Le nouvel aéroport de Siem Reap-Angkor se situe à l'écart de la ville, ce dont nous tenons compte pour la première matinée sur place.",
        },
        {
          question: "Faut-il un visa pour aller au Cambodge ?",
          answer:
            "Oui. Un visa touristique est obligatoire et autorise un séjour d'un mois. L'e-visa s'obtient en ligne sur le portail officiel avant le départ, et le visa peut aussi être délivré à l'arrivée. La Cambodia e-Arrival doit également être complétée avant une arrivée par avion : c'est la formalité que l'on oublie le plus souvent. Le passeport doit être valable au moins six mois et comporter une page vierge. Nous vérifions le dossier de chaque voyageur avant le départ, mineurs compris.",
        },
        {
          question: "Que faire au Cambodge en 15 jours ?",
          answer:
            "Quinze jours permettent de tenir quatre étapes sans se presser. Un déroulé qui fonctionne bien : plusieurs nuits à Siem Reap pour découvrir Angkor matinée après matinée, une incursion vers Banteay Chhmar ou le Tonlé Sap, deux nuits à Phnom Penh, puis les Cardamomes ou le golfe pour finir au calme. Entre deux étapes, nous préférons toujours une nuit agréable à mi-chemin plutôt qu'une longue route d'affilée.",
        },
        {
          question: "Le Cambodge est-il adapté aux familles avec enfants ?",
          answer:
            "Oui, et l'accueil des enfants y va de soi. Les temples se visitent tôt le matin, avant la chaleur, et un guide qui sait raconter les tient en haleine bien plus longtemps qu'on ne l'imagine. Le lac, les barques et les villages sur pilotis fonctionnent à tout âge. Nous gardons alors trois étapes plutôt que quatre, nous allongeons les séjours, et nous plaçons le golfe ou les Cardamomes en fin de voyage.",
        },
        {
          question: "Quel budget prévoir pour un voyage au Cambodge ?",
          answer:
            "Le budget se joue surtout sur trois postes : les vols internationaux et intérieurs, les quelques maisons du pays qui tiennent un véritable niveau de service, et la privatisation des guides, des accès et des bateaux. La vie locale, elle, reste très douce. Nous construisons chaque voyage sur mesure et vous présentons un budget détaillé avant toute réservation, sans engagement.",
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
        "D'autres pays d'Asie et de l'océan Indien où la culture et l'eau tiennent le voyage, à composer sur mesure avec votre travel designer.",
      slugs: ["sri-lanka", "philippines", "maldives"],
    },
  ],
};
