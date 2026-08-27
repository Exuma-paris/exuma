import type { Destination } from "@/lib/content/types";
import { defaultSpotlightFeatures } from "@/components/sections/specialist-spotlight";
import { defaultBento } from "@/components/sections/bento";

export const destination: Destination = {
  slug: "zanzibar",
  name: "Zanzibar",
  placeKind: "region",
  country: "Tanzanie",
  genitive: "de Zanzibar",
  continentSlug: "afrique",
  blurb: "Stone Town, Mnemba, Matemwe, Pemba",
  keywords: [
    "zanzibar",
    "stone town",
    "mnemba",
    "matemwe",
    "pemba",
    "tanzanie",
    "ocean indien",
    "epices",
  ],
  metaTitle: "Zanzibar : Voyage sur mesure",
  metaDescription:
    "Voyage à Zanzibar sur mesure : Stone Town, l'île de Mnemba, la route des épices, la côte de Matemwe. Itinéraire écrit par votre travel designer Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Voyage de luxe à Zanzibar",
      heading: "Zanzibar, de Stone Town aux plages de Matemwe",
      description:
        "Zanzibar se découvre lentement. On commence par les ruelles de Stone Town, où le bois des portes sculptées garde le parfum du girofle, et l'on finit les pieds dans une eau qui reste tiède jusqu'au soir. Entre les deux, il y a les plantations d'épices, les boutres à la voile et les jardins de corail de Mnemba.",
      images: [
        {
          src: "/destination/zanzibar/hero-1.png",
          alt: "Boutre traditionnel à voile au large de la côte de Zanzibar au coucher du soleil",
        },
        {
          src: "/destination/zanzibar/hero-2.png",
          alt: "Ruelle de Stone Town et porte sculptée en bois de teck, Zanzibar",
        },
        {
          src: "/destination/zanzibar/hero-3.png",
          alt: "Plage de sable blanc et eaux calmes près de l'île de Mnemba, Zanzibar",
        },
      ],
    },

    {
      type: "specialistSpotlight",
      eyebrow: "Pourquoi partir à Zanzibar ?",
      heading: "Stéphane, spécialiste de Zanzibar, vous partage son expérience",
      partners: { title: "" },
      specialist: {
        collaborateurSlug: "stephane",
        // TODO: verify quote attribution
        quote:
          "La plupart de mes voyageurs arrivent à Zanzibar après un safari, encore pleins d'images et de poussière. L'île les accueille en douceur, avec une maison ouverte sur l'océan, un boutre au coucher du soleil et un dîner les pieds dans le sable. J'aime construire ces derniers jours, parce que ce sont souvent ceux dont on me reparle des mois plus tard.",
        role: "Travel Designer · Zanzibar",
      },
      features: defaultSpotlightFeatures,
    },

    {
      type: "textColumns",
      background: "bg-white",
      eyebrow: "Découverte de Zanzibar",
      heading: "Zanzibar, entre les épices de Stone Town et le bleu du lagon",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      columns: [
        "Un voyage à Zanzibar commence presque toujours par Stone Town. On y marche sans carte, entre les portes de teck, les échoppes d'épices et les cours ombragées, et l'on débouche sur le port sans savoir comment. La vieille ville a été la capitale des sultans d'Oman et le grand comptoir de l'océan Indien, et cette histoire se lit encore sur les façades blanchies par le sel.",
        "La côte se laisse apprivoiser autrement. Au nord, à Matemwe et à Nungwi, l'eau reste haute et l'on se baigne à toute heure. Au sud-est, à Paje et à Jambiani, la marée se retire le matin et découvre un lagon immense où les villageoises cultivent leurs algues. C'est cette différence qui décide de la maison où l'on pose ses valises, et nous en parlons avec vous dès la première conversation.",
        "Au large de Matemwe, l'îlot de Mnemba tient dans un regard. On y dort dans des bandas de palme ouvertes sur la plage, la réserve marine commence au bord de l'eau et les tortues passent sous le bateau au retour du récif. Beaucoup de nos voyageurs arrivent ici après un safari en Tanzanie. L'île devient alors une respiration, et c'est sans doute la plus belle façon de terminer.",
      ],
    },

    {
      type: "fullImage",
      image: {
        src: "/destination/zanzibar/full-image.png",
        alt: "Vue aérienne de la côte de Zanzibar, de ses eaux turquoise et de ses bancs de sable",
      },
      height: 600,
    },

    {
      type: "textImagesSplit",
      eyebrow: "Zanzibar au fil de l'eau",
      heading: "Le lagon de Jambiani et les boutres de Nungwi",
      theme: "light",
      paragraphs: [
        "À Jambiani, la mer se retire tôt le matin et le lagon devient un plateau de sable clair que l'on traverse pieds nus. Les femmes du village y entrent pour relever les cordes d'algues qu'elles cultivent depuis des générations. On les accompagne, on les écoute, et l'eau revient avant le déjeuner rendre à la baie sa couleur turquoise.",
        "À l'autre bout de l'île, à Nungwi, les charpentiers construisent encore les boutres à la main, sans plan, à l'œil. Le chantier est ouvert sur la plage, l'odeur du bois se mêle à celle du sel, et personne ne cherche à vous vendre quoi que ce soit. Nous vous y conduisons en fin d'après-midi, quand la lumière descend sur les coques et que les pêcheurs rentrent.",
      ],
      images: [
        {
          src: "/destination/zanzibar/split-1.png",
          alt: "Cultivatrice d'algues dans le lagon découvert de Jambiani, côte sud-est de Zanzibar",
        },
        {
          src: "/destination/zanzibar/split-2.png",
          alt: "Charpentiers construisant un boutre traditionnel sur la plage de Nungwi",
        },
      ],
    },

    {
      type: "imageDuoWithText",
      duo: {
        left: {
          src: "/destination/zanzibar/xp-corail-mnemba-1.png",
          alt: "Plongeur fixant des fragments de corail sur une structure immergée au large de Mnemba",
        },
        right: {
          src: "/destination/zanzibar/xp-corail-mnemba-2.png",
          alt: "Récif corallien et poissons tropicaux dans la réserve marine de Mnemba, Zanzibar",
        },
      },
      text: {
        eyebrow: "Notre coup de cœur",
        heading: "Replanter du corail dans la réserve de Mnemba",
        columns: [
          "Tout commence par une conversation avec les biologistes du centre Ocean Without Borders, une paillote posée au bord du récif de Mnemba. Ils racontent ce qui abîme le corail, ce qu'ils observent depuis des années et ce que l'on sait aujourd'hui réparer. Puis on enfile masque et palmes, et l'on entre dans l'eau avec eux.",
          "Chacun attache ses fragments sur une structure que les plongeurs iront immerger dans la zone protégée, à quelques battements de palmes du récif de la maison. Le geste est simple et les enfants y arrivent très bien. Le centre vous envoie ensuite régulièrement des photographies de votre structure, et l'on prend l'habitude de suivre sa croissance longtemps après le retour.",
        ],
      },
    },

    {
      type: "entityList",
      kind: "experience",
      background: "bg-white",
      eyebrow: "Expériences et activités à Zanzibar",
      heading: "Ce que nous aimons organiser sur l'île",
      description:
        "Une journée en boutre jusqu'à un banc de sable, une matinée dans le labyrinthe de Stone Town avec un guide francophone, et l'après-midi des épices, du girofle aux bains de Kidichi.",
      slugs: [
        "safari-bleu-boutre",
        "stone-town-visite-privee",
        "epices-kidichi-livingstone",
      ],
    },

    {
      type: "entityList",
      kind: "accommodation",
      background: "bg-background-soft",
      eyebrow: "Hébergements",
      heading: "Où dormir à Zanzibar",
      description:
        "Une île privée où l'on dîne les pieds dans le sable, une demeure omanaise sur le front de mer de Stone Town, des villas avec piscine et personnel dédié face au lagon de Paje.",
      slugs: ["mnemba-island-lodge", "park-hyatt-zanzibar", "zanzibar-white-sand"],
    },

    {
      type: "infoGrid",
      background: "bg-white",
      eyebrow: "Ce qu'il faut savoir",
      heading: "Préparer votre voyage à Zanzibar",
      description:
        "Vol, formalités, santé et saisons : de quoi caler vos dates sereinement avant que nous écrivions l'itinéraire ensemble.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          iconName: "plane",
          title: "Temps de vol",
          description:
            "Zanzibar se rejoint généralement avec une correspondance depuis Paris, par Doha, Dubaï, Istanbul, Addis-Abeba ou Nairobi, pour un trajet d'environ douze à quinze heures selon la compagnie et l'escale retenues. Air France dessert par ailleurs la Tanzanie via Kilimandjaro et Zanzibar, selon un programme qui évolue avec les saisons.",
        },
        {
          iconName: "clock",
          title: "Décalage horaire",
          description:
            "L'archipel vit à l'heure de l'Afrique de l'Est, soit deux heures de plus qu'en France en hiver et une heure de plus en été. Le décalage se ressent peu à l'arrivée.",
        },
        {
          iconName: "euro",
          title: "Monnaie et conversion",
          description:
            "La monnaie locale est le shilling tanzanien. Le dollar américain est largement accepté dans les hôtels et pour les excursions, de préférence en billets récents, et il reste utile de conserver un peu d'espèces pour les marchés et les pourboires.",
        },
        {
          iconName: "fileText",
          title: "Visa et passeport",
          description:
            "Les ressortissants français doivent obtenir un visa pour la Tanzanie, à demander de préférence en ligne sur le portail officiel de l'immigration, ou à l'arrivée à Zanzibar. Le passeport doit dépasser six mois de validité à la date d'arrivée. Zanzibar impose également une assurance voyage ZIC obligatoire, à souscrire en ligne avant l'arrivée : elle coûte actuellement 44 USD par adulte, couvre jusqu'à 90 jours et reste exigée même si vous disposez déjà d'une assurance personnelle.",
        },
        {
          iconName: "syringe",
          title: "Vaccin",
          description:
            "Aucun vaccin n'est présenté comme obligatoire pour un séjour touristique classique, sauf la fièvre jaune : elle est exigée des voyageurs venant d'un pays où la maladie circule, y compris en cas de transit de plus de douze heures dans un tel pays, et les contrôles peuvent être appliqués largement. L'Institut Pasteur recommande d'être à jour du calendrier vaccinal et conseille systématiquement la vaccination contre l'hépatite A. Le paludisme se transmet toute l'année sur l'archipel : une protection contre les moustiques et une chimioprophylaxie adaptée sont recommandées, à définir avec un médecin avant le départ.",
        },
        {
          iconName: "calendarDays",
          title: "Meilleure période",
          description:
            "Nous privilégions les mois de juin à octobre, secs et ventés, ainsi que janvier et février, plus chauds et plus lumineux. Décembre est déjà très agréable, avec encore quelques averses possibles. Les mois d'épaule restent plaisants, et les grandes pluies d'avril et de mai sont les seules que nous déconseillons vraiment.",
        },
        {
          iconName: "languages",
          title: "Langues parlées",
          description:
            "Le swahili est né sur cette côte et reste la langue de tous les jours. L'anglais est l'autre langue officielle de Tanzanie et se pratique dans les hôtels comme pendant les excursions. L'arabe garde une place à Stone Town.",
        },
        {
          iconName: "sun",
          title: "Climat",
          description:
            "Le climat est tropical et chaud toute l'année, adouci par les alizés. Deux moussons rythment l'archipel : le kaskazi, de décembre à mars, plus chaud et plus calme, et le kusi, de juin à septembre, plus sec et plus venté.",
        },
      ],
    },

    {
      type: "bento",
      eyebrow: defaultBento.eyebrow,
      heading: defaultBento.heading,
      description:
        "Plusieurs expertises se mobilisent sur chaque dossier Zanzibar. Un seul interlocuteur coordonne l'ensemble et reste le vôtre, du premier échange jusqu'au retour.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      cards: defaultBento.cards.map((card, i) => ({
        ...card,
        image: {
          src: `/destination/zanzibar/bento-${["map", "adresses", "hebergements", "conciergerie", "experiences"][i]}.png`,
          alt: [
            "Itinéraire sur mesure à Zanzibar entre Stone Town, Mnemba et la côte est",
            "Adresses confidentielles à Zanzibar : maisons swahilies et villas hors circuit",
            "Hébergements à Zanzibar : île privée de Mnemba et villas de Paje",
            "Conciergerie privée 24/7 pour un voyage à Zanzibar",
            "Expériences immersives à Zanzibar : boutre, récifs et route des épices",
          ][i],
        },
      })),
    },

    {
      type: "placesMap",
      background: "bg-background-soft",
      eyebrow: "Les incontournables à Zanzibar",
      heading: "De Stone Town aux girofliers de Pemba",
      description:
        "L'archipel se parcourt sans jamais se presser. Voici les endroits où nous aimons vous emmener, et ce que l'on y trouve.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      initialZoom: 8,
      places: [
        {
          title: "Stone Town, le cœur swahili de l'île",
          description:
            "On s'y perd volontiers, entre les portes de teck sculptées, les étals d'épices et les terrasses qui donnent sur le port. Le soir, les jardins de Forodhani sentent le poisson grillé et toute la ville descend s'y promener.",
          image: {
            src: "/destination/zanzibar/map-stone-town.png",
            alt: "Front de mer et toits de Stone Town, capitale historique de Zanzibar",
          },
          // TODO: verify coords
          coordinates: { lat: -6.1631, lng: 39.1892 },
        },
        {
          title: "Mnemba, l'îlot privé",
          description:
            "Un banc de sable planté de palmiers au large de Matemwe, entouré d'une réserve marine. On y dort dans des bandas ouvertes sur la plage et l'on nage au-dessus des jardins de corail dès le réveil.",
          image: {
            src: "/destination/zanzibar/map-mnemba.png",
            alt: "Île privée de Mnemba entourée de son lagon turquoise au large de Zanzibar",
          },
          // TODO: verify coords
          coordinates: { lat: -5.8167, lng: 39.3833 },
        },
        {
          title: "Matemwe, la côte nord-est",
          description:
            "Un village de pêcheurs qui regarde Mnemba, où l'eau reste haute même quand la marée descend. Les bateaux partent vers le récif au lever du jour, et l'on peut monter à bord avec eux.",
          image: {
            src: "/destination/zanzibar/map-matemwe.png",
            alt: "Plage et pirogues de pêcheurs du village de Matemwe, nord-est de Zanzibar",
          },
          // TODO: verify coords
          coordinates: { lat: -5.8667, lng: 39.35 },
        },
        {
          title: "Jozani, la forêt aux colobes",
          description:
            "La dernière grande forêt de l'archipel abrite le colobe roux, un singe que l'on ne rencontre nulle part ailleurs au monde. Une passerelle de bois traverse la mangrove, dans une lumière verte et humide.",
          image: {
            src: "/destination/zanzibar/map-jozani.png",
            alt: "Colobe roux de Kirk dans la forêt de Jozani, parc national de Zanzibar",
          },
          // TODO: verify coords
          coordinates: { lat: -6.2667, lng: 39.4167 },
        },
        {
          title: "Paje et Jambiani, le sud-est",
          description:
            "Le lagon se retire le matin et découvre un plateau de sable clair que l'on parcourt à pied. L'après-midi, le vent se lève et les voiles de kitesurf remplissent l'horizon. Les maisons y sont plus grandes et plus discrètes qu'ailleurs sur l'île.",
          image: {
            src: "/destination/zanzibar/map-paje.png",
            alt: "Lagon de Paje à marée basse et voiles de kitesurf sur la côte sud-est de Zanzibar",
          },
          // TODO: verify coords
          coordinates: { lat: -6.2667, lng: 39.5333 },
        },
        {
          title: "Pemba, l'île verte",
          description:
            "L'île sœur de Zanzibar, vallonnée et plantée de girofliers dont l'odeur porte jusqu'à la mer. Peu de voyageurs y viennent, et les plongeurs y trouvent parmi les plus beaux tombants de l'océan Indien.",
          image: {
            src: "/destination/zanzibar/map-pemba.png",
            alt: "Collines plantées de girofliers et lagon de l'île de Pemba, archipel de Zanzibar",
          },
          // TODO: verify coords
          coordinates: { lat: -5.2667, lng: 39.7667 },
        },
      ],
    },

    {
      type: "tips",
      background: "bg-background-soft",
      eyebrow: "Guide pratique",
      heading: "Les conseils de nos experts pour votre voyage à Zanzibar",
      description:
        "Quelques observations de terrain qui aident à choisir le bon moment, le bon côté de l'île, et à comprendre pourquoi nous inscrivons telle étape à votre itinéraire.",
      cta: { label: "Créer votre voyage", href: "/votre-projet" },
      items: [
        {
          title: "Choisir son côté de l'île",
          cardEyebrow: "Côte",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Au nord, on se baigne à toute heure. Au sud-est, la marée compose chaque jour un paysage différent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Au nord de l'île, à Matemwe, Kendwa et Nungwi, la pente du récif
                retient l'eau et la baignade reste possible du matin au soir.
                C'est le choix naturel pour ceux qui viennent d'abord pour
                l'océan.
              </p>
              <p>
                Sur la côte sud-est, à Paje et à Jambiani, la marée se retire
                loin et découvre un lagon que l'on traverse à pied. Le paysage y
                est superbe et le vent y est régulier, ce qui en fait le
                terrain des kitesurfeurs et des grandes villas ouvertes sur le
                large.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous choisissons la maison en fonction de la façon dont vous
                imaginez vos journées, et nous vous transmettons le calendrier
                des marées de votre semaine avant le départ.
              </p>
            </div>
          ),
        },
        {
          title: "Stone Town au petit matin",
          cardEyebrow: "Stone Town",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La vieille ville se visite tôt, quand les ruelles appartiennent encore à ceux qui y vivent",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Stone Town se parcourt à pied et la chaleur y monte vite. Nous
                programmons les visites en début de matinée : le marché de
                Darajani est en pleine activité, les écoliers traversent les
                ruelles et la lumière rasante fait ressortir le dessin des
                portes sculptées.
              </p>
              <p>
                Le milieu de journée se passe volontiers ailleurs, sur une
                terrasse en hauteur ou du côté des bains de Kidichi. La ville se
                réveille de nouveau en fin d'après-midi, quand les enfants
                plongent depuis les rochers de Forodhani.
              </p>
            </div>
          ),
        },
        {
          title: "Le visa et l'assurance à prévoir",
          cardEyebrow: "Formalités",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un visa tanzanien à demander en ligne, et l'assurance ZIC obligatoire à souscrire avant l'arrivée",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Les voyageurs français ont besoin d'un visa pour la Tanzanie. La
                demande se fait en ligne sur le portail officiel de
                l'immigration, et nous conseillons de s'y prendre plusieurs
                semaines à l'avance. Il reste possible de l'obtenir à l'arrivée
                à Zanzibar, avec l'attente que cela suppose. Le passeport doit
                dépasser six mois de validité à la date d'arrivée.
              </p>
              <p>
                Zanzibar impose par ailleurs l'assurance ZIC, à souscrire en
                ligne avant le départ. Elle est obligatoire même si vous êtes
                déjà couvert par une assurance personnelle, coûte actuellement
                44 USD par adulte et vaut pour un séjour allant jusqu'à 90
                jours. Le justificatif est demandé à l'arrivée à l'aéroport.
              </p>
              <h4 className="font-medium">Avec Exuma :</h4>
              <p>
                Nous transmettons les liens officiels et la liste des pièces
                avec votre dossier, et nous vérifions que tout est en règle
                avant l'émission des billets.
              </p>
            </div>
          ),
        },
        {
          title: "Se protéger du paludisme",
          cardEyebrow: "Santé",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "La transmission a lieu toute l'année sur l'archipel. La chimioprophylaxie se prescrit avant le départ",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le paludisme se transmet toute l'année à Zanzibar. L'Institut
                Pasteur recommande une protection contre les moustiques et une
                chimioprophylaxie adaptée, à définir en consultation de médecine
                des voyages quelques semaines avant le départ, en même temps que
                le calendrier vaccinal.
              </p>
              <p>
                Sur place, les hôtels fournissent généralement répulsifs et
                moustiquaires. Les vêtements longs en soirée et un répulsif
                efficace complètent utilement le traitement, sans le remplacer.
              </p>
            </div>
          ),
        },
        {
          title: "Une île musulmane, et ce que cela change",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Épaules et genoux couverts hors des plages : une attention simple, qui change tout à l'accueil",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                L'archipel est très majoritairement musulman. Le maillot de bain
                reste sur la plage et dans l'enceinte des hôtels. Dans les
                villages, à Stone Town et sur les marchés, on couvre épaules et
                genoux, et un simple paréo suffit.
              </p>
              <p>
                L'alcool se consomme dans les hôtels et les restaurants qui en
                servent. On demande avant de photographier quelqu'un, en
                particulier les femmes. Ces égards ne coûtent rien et ce sont
                eux qui ouvrent les portes, souvent au sens propre.
              </p>
            </div>
          ),
        },
        {
          title: "Voyager pendant le ramadan",
          cardEyebrow: "Culture",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Les hôtels fonctionnent normalement, et la rupture du jeûne transforme les soirées de Stone Town",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Pendant le mois de ramadan, dont les dates se décalent chaque
                année, une partie des restaurants de Stone Town et des villages
                ferme en journée. Les hôtels et les maisons de plage continuent
                de servir normalement, avec plus de discrétion.
              </p>
              <p>
                En contrepartie, les soirées deviennent magnifiques. Les marchés
                de nuit s'installent, les familles dînent dehors et les jardins
                de Forodhani sont le lieu le plus animé de l'île. C'est une
                période qui se voyage très bien, à condition de la connaître
                avant de partir.
              </p>
            </div>
          ),
        },
        {
          title: "Après le safari, l'île",
          cardEyebrow: "Itinéraire",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Un vol intérieur relie les pistes du Serengeti à Zanzibar, sans reprendre la route",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Des vols intérieurs relient les pistes du Serengeti, Arusha et
                l'aéroport de Zanzibar, ce qui évite de refaire la route après
                le safari. Nous plaçons presque toujours l'île en fin de
                parcours : on arrive fatigué et poussiéreux, et l'océan fait le
                reste.
              </p>
              <p>
                Ces petits avions demandent des bagages souples et limitent le
                poids emporté. Une consigne à l'hôtel d'Arusha ou de Zanzibar
                permet de laisser le surplus le temps du safari, et nous nous en
                occupons dans le dossier.
              </p>
            </div>
          ),
        },
        {
          title: "Les deux moussons",
          cardEyebrow: "Saison",
          modalEyebrow: "Guide pratique",
          shortDescription:
            "Le kusi, sec et venté, de juin à septembre. Le kaskazi, chaud et calme, de décembre à mars",
          content: (
            <div className="flex flex-col gap-4">
              <p>
                Le kusi souffle de juin à septembre. L'air est sec, la mer
                animée, et c'est la saison que préfèrent les kitesurfeurs de
                Paje. Le kaskazi, de décembre à mars, apporte une chaleur plus
                douce, une mer calme et la meilleure visibilité pour la plongée
                à Mnemba et à Pemba.
              </p>
              <p>
                Les grandes pluies tombent en avril et en mai, et certaines
                maisons de plage en profitent pour fermer. Les averses de
                novembre sont beaucoup plus courtes, souvent nocturnes, et ne
                gênent presque pas un séjour.
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
            "Nous arrivions du Serengeti, couverts de poussière, et nous nous sommes retrouvés le soir même sur la plage de Mnemba. Le contraste est ce qui rend ce voyage inoubliable. Nous n'avons partagé l'îlot avec personne.",
          image: {
            src: "/destination/zanzibar/hero-1.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Tanzanie et Zanzibar, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Notre guide francophone connaissait les familles derrière les portes sculptées de Stone Town, et il nous a fait entrer chez elles. Nos enfants ont retenu cette matinée mieux que n'importe quel cours d'histoire.",
          image: {
            src: "/destination/zanzibar/hero-2.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Zanzibar en famille, 2025", // TODO: replace with real testimonial
        },
        {
          // TODO: replace with real testimonial
          quote:
            "Nous pensions que replanter du corail serait une animation d'hôtel. Nous recevons encore des nouvelles de notre structure, et c'est devenu le souvenir dont nous parlons le plus depuis le retour.",
          image: {
            src: "/destination/zanzibar/hero-3.png",
            alt: "Portrait", // TODO: verify
          },
          name: "TODO", // TODO: replace with real testimonial
          role: "TODO: Zanzibar, avril 2025", // TODO: replace with real testimonial
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
          question: "Quelle est la meilleure période pour partir à Zanzibar ?",
          answer:
            "Nous privilégions les mois de juin à octobre, secs et ventés, ainsi que janvier et février, plus chauds et plus lumineux, avec une très belle visibilité sous l'eau. Décembre est déjà très agréable, même si quelques averses restent possibles. Les grandes pluies d'avril et de mai sont les seules que nous déconseillons, certaines maisons de plage en profitant pour fermer.",
        },
        {
          question: "Combien de temps dure le vol depuis Paris ?",
          answer:
            "Zanzibar se rejoint généralement avec une correspondance, par Doha, Dubaï, Istanbul, Addis-Abeba ou Nairobi, pour un trajet d'environ douze à quinze heures selon la compagnie et l'escale. Air France dessert également la Tanzanie via Kilimandjaro et Zanzibar, selon un programme qui évolue avec les saisons. Les voyages combinés avec un safari passent le plus souvent par Kilimandjaro ou Arusha.",
        },
        {
          question: "Faut-il un visa pour aller à Zanzibar ?",
          answer:
            "Oui. Zanzibar fait partie de la Tanzanie et les ressortissants français doivent obtenir un visa, à demander en ligne sur le portail officiel de l'immigration avant le départ, ou à l'arrivée à Zanzibar. Le passeport doit dépasser six mois de validité à la date d'arrivée. Zanzibar impose également l'assurance voyage ZIC, obligatoire même si vous êtes déjà couvert par ailleurs : elle se souscrit en ligne avant l'arrivée, coûte actuellement 44 USD par adulte et couvre jusqu'à 90 jours.",
        },
        {
          question: "Peut-on combiner un safari en Tanzanie et Zanzibar ?",
          answer:
            "C'est la combinaison que nous construisons le plus souvent. Des vols intérieurs relient les pistes du Serengeti et Arusha à l'aéroport de Zanzibar, ce qui évite de reprendre la route après le safari. Nous plaçons l'île en fin de parcours, une fois les grands parcs derrière soi, pour terminer par quelques jours au bord de l'eau.",
        },
        {
          question: "Zanzibar est-il adapté aux familles avec enfants ?",
          answer:
            "Oui, à condition de bien choisir son côté de l'île. Le nord et le nord-est, où l'eau reste haute, conviennent mieux aux enfants que la côte sud-est. Les villas avec piscine et personnel dédié absorbent facilement des âges différents, et des sorties comme la forêt de Jozani, le bouturage de corail à Mnemba ou la route des épices plaisent aux petits comme aux grands.",
        },
        {
          question: "Quel budget prévoir pour un voyage à Zanzibar ?",
          answer:
            // TODO: verify budget range
            "Une semaine sur mesure à Zanzibar se situe généralement entre 4 000 et 9 000 € par personne, hors vols internationaux, selon la maison choisie et la saison. Un voyage combinant un safari en Tanzanie et quelques jours sur l'île démarre plutôt autour de 9 000 € et dépasse 18 000 € par personne avec les camps privés du Serengeti et l'île de Mnemba.",
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
        "D'autres rivages de l'océan Indien où la côte, la culture et la vie sous l'eau composent un même voyage, à écrire sur mesure avec votre travel designer.",
      slugs: ["kenya", "seychelles", "maldives"],
    },
  ],
};
