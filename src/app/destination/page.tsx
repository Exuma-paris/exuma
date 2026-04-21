import { Header } from "@/components/sections/header";
import { HeroImageGallery } from "@/components/sections/hero/image-gallery";
import { TextColumnsSection } from "@/components/sections/text-columns";
import { FullImageSection } from "@/components/sections/full-image";
import { TextImagesSplitSection } from "@/components/sections/text-images-split";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import { ImageDuoSection } from "@/components/sections/image-duo";
import { BentoSection } from "@/components/sections/bento";
import { PlacesMapSection } from "@/components/sections/places-map";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { PolynesieInfoGrid } from "./info-grid";
import { PolynesieTips } from "./tips";

export default function DestinationPage() {
  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        <HeroImageGallery
          eyebrow="Voyage de luxe en Polynésie"
          heading="Vivez l'inaccessible, voyage de luxe en Polynésie"
          description="Un archipel confidentiel et préservé. Survolez des atolls vierges en hydravion privé avant de partager le savoir-faire ancestral d'un maître tatoueur. Chaque instant pensé pour vous devient un privilège absolu."
          images={[
            {
              src: "/destination/polynesie/hero-1.png",
              alt: "Plage de sable blanc bordée de cocotiers en Polynésie",
            },
            {
              src: "/destination/polynesie/hero-2.png",
              alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
            },
            {
              src: "/destination/polynesie/hero-3.png",
              alt: "Piscine à débordement d'une villa de luxe en Polynésie",
            },
          ]}
        />
      </div>

      <TextColumnsSection
        background="bg-white"
        eyebrow="Découverte de la Polynésie Française"
        heading="Polynésie française, une lumière que l'on emporte à jamais"
        cta={{ label: "Créer votre voyage", href: "/reserver" }}
        columns={[
          "Il existe des endroits qui ne se racontent pas vraiment : ils se reconnaissent, comme si l'âme les attendait depuis longtemps.\n\nLa Polynésie française est de ceux-là, un archipel dispersé au cœur du Pacifique sud, où le temps obéit à d'autres lois et où chaque île tient une promesse distincte.",
          "Ici, le lagon s'étire dans des bleus sans nom, l'air porte le parfum sucré du tiaré et du monoï chaud sur la peau, et le soir, les chants des ori Tahiti s'élèvent avec la même évidence que les étoiles. De Moorea et ses crêtes volcaniques drapées de nuages à Bora Bora et son lagon céruléen, jusqu'aux atolls silencieux de Fakarava où seul le souffle de l'océan existe, chaque étape redessine la carte intérieure du désir.",
          "Déguster un poisson cru au lait de coco sur le ponton d'un motu à l'aube, observer une raie manta glisser sous votre pirogue avec une grâce absolue : ce sont ces instants infimes et souverains qui font de ce voyage non pas un souvenir parmi d'autres, mais une façon nouvelle de regarder le monde.",
        ]}
      />

      <FullImageSection
        image={{
          src: "/destination/polynesie/full-image.png",
          alt: "Vue aérienne d'un atoll polynésien avec bungalows sur pilotis",
        }}
        height={600}
      />

      <TextImagesSplitSection
        eyebrow="Polynésie Française — Le luxe et l'exclusif"
        heading="L'essence secrète de la Polynésie française"
        theme="light"
        paragraphs={[
          "Notre sélection vous ouvre les portes d'une Polynésie confidentielle. Nous choisissons nos adresses pour leur singularité absolue. Des villas à fleur de lagon. Des écolodges enfouis dans la végétation dense de Moorea. Chaque lieu est pensé pour vous offrir un espace infini et une déconnexion totale. L'exception devient un privilège. Un hydravion privé vous emporte au-dessus du bleu dense de Bora Bora. Il se pose ensuite sur les eaux translucides de Fakarava.",
          "À terre, le luxe prend tout son sens. Nous vous confions à des artisans et des gardiens de la mémoire locale. Une tisseuse de Huahine vous transmet ses gestes ancestraux. Un maître-nageur pour vous seul, embrumé le jardin de fleurs de tiaré. De ces instants naissent des souvenirs d'une rareté absolue. C'est l'essence même du voyage d'Exuma.",
        ]}
        images={[
          {
            src: "/destination/polynesie/split-1.png",
            alt: "Pirogue traditionnelle sur un lagon au coucher du soleil",
          },
          {
            src: "/destination/polynesie/split-2.png",
            alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
          },
        ]}
      />

      <FeatureCardsSection
        background="bg-white"
        eyebrow="Expériences & activités en Polynésie"
        heading="Nos coups de cœur en Polynésie française"
        description="Un archipel confidentiel et préservé. Survolez des atolls vierges en hydravion privé avant de partager le savoir-faire ancestral d'un maître tatoueur. Chaque instant pensé pour vous devient un privilège absolu."
        cta={{ label: "Voir tous les coups de coeurs", href: "/experiences" }}
        cards={[
          {
            title: "Randonnée dans l'intérieur des îles",
            description:
              "Partez en randonnée à travers les paysages extraordinaires des îles.",
            image: {
              src: "/destination/polynesie/xp-randonnee.png",
              alt: "Randonneurs sur un sentier volcanique en Polynésie",
            },
            link: { label: "Découvrir", href: "/experiences/randonnee" },
          },
          {
            title: "Sortie privée en bateau avec déjeuner",
            description:
              "Profitez d'une sortie en bateau privé avec un délicieux déjeuner à bord.",
            image: {
              src: "/destination/polynesie/xp-bateau.png",
              alt: "Catamaran sur le lagon turquoise de Polynésie",
            },
            link: { label: "Découvrir", href: "/experiences/bateau" },
          },
          {
            title: "Plongée avec les raies mantas",
            description:
              "Vivez une expérience inoubliable en plongeant aux côtés des majestueuses raies mantas.",
            image: {
              src: "/destination/polynesie/xp-plongee.png",
              alt: "Plongeur nageant avec des raies mantas",
            },
            link: { label: "Découvrir", href: "/experiences/plongee" },
          },
        ]}
      />

      <div className="[&>div:first-child_section]:pb-0 [&>div:last-child_section]:pt-10">
        <ImageDuoSection
          left={{
            src: "/destination/polynesie/ceremony.png",
            alt: "Cérémonie traditionnelle polynésienne sous un fare",
          }}
          right={{
            src: "/destination/polynesie/image-homme.png",
            alt: "Homme polynésien tatoué jouant du pu (conque)",
          }}
        />
        <TextColumnsSection
          eyebrow="Notre coup de cœur"
          heading="L'éveil au cœur du Mana sacré"
          columns={[
            "En Polynésie française, le voyage prend une toute autre dimension lorsqu'on tisse un lien intime avec la population. À travers un contact direct avec le Mana, cette force invisible et sacrée qui anime chaque être et chaque île, vous découvrirez une richesse culturelle unique, transmise de génération en génération. Des cérémonies ancestrales aux chants traditionnels, ces rituels encore vivants vous plongeront dans le quotidien des habitants.",
            "L'art vivant du tatouage raconte la mémoire des ancêtres et la peau, La gratuité des fleurs de tiaré vous accueille dès vos premiers pas à Tahiti. Explorez les anciens marae de pierre et tremblez face à l'immensité du Pacifique. La beauté de cette terre d'histoires saura toujours et encore profondément vous émouvoir.",
          ]}
        />
      </div>

      <FeatureCardsSection
        background="bg-background-soft"
        eyebrow="Hébergements"
        heading="Nos hébergements"
        description="Nous avons soigneusement choisi les meilleurs hébergements de Polynésie pour vous offrir une expérience inoubliable."
        cta={{ label: "Voir tous les hébergements", href: "/hebergements" }}
        cards={[
          {
            title: "The brando",
            description:
              "Le Brando est un éco-resort luxueux sur Tetiaroa, parfait pour les couples en quête de romantisme et de tranquillité.",
            image: {
              src: "/destination/polynesie/hotel-brando.png",
              alt: "Vue aérienne du resort The Brando sur l'atoll de Tetiaroa",
            },
            link: { label: "Découvrir", href: "/hebergements/the-brando" },
          },
          {
            title: "Le Taha'a by Pearl Resorts",
            description:
              "Découvrez Le Taha'a pour son cadre idyllique, ses activités nautiques et son célèbre spa polynésien.",
            image: {
              src: "/destination/polynesie/hotel-tahaa.png",
              alt: "Bungalows sur pilotis du Taha'a by Pearl Resorts",
            },
            link: { label: "Découvrir", href: "/hebergements/le-tahaa" },
          },
          {
            title: "InterContinental Bora Bora Resort & Thalasso Spa",
            description:
              "InterContinental Bora Bora propose des vues exceptionnelles, un spa thalasso et un accès direct à la plage.",
            image: {
              src: "/destination/polynesie/hotel-intercontinental.png",
              alt: "Vue aérienne de l'InterContinental Bora Bora au coucher du soleil",
            },
            link: { label: "Découvrir", href: "/hebergements/intercontinental" },
          },
        ]}
      />

      <PolynesieInfoGrid />

      <BentoSection
        eyebrow="Exuma"
        heading="Voyage sur mesure en Polynésie"
        description="Un travel designer, expert de la Polynésie, façonne un voyage d'exception selon vos envies."
        cta={{ label: "Créer votre voyage", href: "/reserver" }}
        cards={[
          {
            title: "Création d'itinéraires",
            description:
              "Chaque voyage naît d'un échange personnalisé pour coller à vos rythmes, vos envies et vos habitudes.",
            image: {
              src: "/destination/polynesie/bento-map.png",
              alt: "Carte d'itinéraire personnalisé en Polynésie",
            },
            tone: "dark",
          },
          {
            title: "Adresses confidentielles",
            description:
              "Accès privilégié à nos adresses hors des sentiers battus et retraites luxueuses soigneusement sélectionnées.",
            image: {
              src: "/destination/polynesie/bento-huahine.png",
              alt: "Végétation luxuriante de Huahine",
            },
          },
          {
            title: "Hébergements de luxe",
            description:
              "Des villas isolées à fleur de lagon. Aux écolodges enfouis dans la végétation dense de Moorea.",
            image: {
              src: "/destination/polynesie/bento-aerien.png",
              alt: "Vue aérienne d'un atoll polynésien",
            },
          },
          {
            title: "Conciergerie 24/7",
            description:
              "Assistance en continu. Taxi-boat, chauffeur, dîner privé sur la plage à toute heure.",
            image: {
              src: "/destination/polynesie/bento-homme.png",
              alt: "Concierge Exuma souriant",
            },
          },
          {
            title: "Expériences immersives",
            description:
              "Accédez à des expériences rares et des activités sur mesure.",
            image: {
              src: "/destination/polynesie/bento-plongee.png",
              alt: "Plongeur nageant avec des raies mantas",
            },
          },
        ]}
      />

      <PlacesMapSection
        background="bg-background-soft"
        eyebrow="Les incontournables en Polynésie Française"
        heading="La polynésie, entre atolls, îles et archipels"
        description="Que vous soyez amateur de randonnée, de plongée ou simplement en quête de détente, la variété des paysages polynésiens saura vous émerveiller."
        cta={{ label: "Créer votre voyage", href: "/reserver" }}
        initialZoom={6}
        places={[
          {
            title: "Bora Bora",
            description:
              "Le joyau de la Polynésie, célèbre pour son lagon aux nuances infinies de bleu.",
            image: {
              src: "/destination/polynesie/map-huahine.png",
              alt: "Vue aérienne de Bora Bora",
            },
            coordinates: { lat: -16.5004, lng: -151.7415 },
          },
          {
            title: "Huahine",
            description:
              "Découvrez Huahine, un havre de paix isolé aux eaux cristallines.",
            image: {
              src: "/destination/polynesie/map-huahine.png",
              alt: "Plage tropicale de Huahine",
            },
            coordinates: { lat: -16.7333, lng: -150.9833 },
          },
          {
            title: "Raiatea",
            description:
              "Berceau de la culture polynésienne, Raiatea abrite le marae sacré de Taputapuatea.",
            image: {
              src: "/destination/polynesie/map-raiatea.png",
              alt: "Côte verdoyante de Raiatea",
            },
            coordinates: { lat: -16.8333, lng: -151.4333 },
          },
          {
            title: "Taha'a",
            description:
              "L'île vanille, berceau de la meilleure vanille au monde.",
            image: {
              src: "/destination/polynesie/map-tahaa.png",
              alt: "Lagon de Taha'a",
            },
            coordinates: { lat: -16.6167, lng: -151.497 },
          },
          {
            title: "Tetiaroa",
            description:
              "Atoll préservé et confidentiel, un sanctuaire de nature sauvage.",
            image: {
              src: "/destination/polynesie/map-tetiaroa.png",
              alt: "Atoll de Tetiaroa vu du ciel",
            },
            coordinates: { lat: -17.0133, lng: -149.5597 },
          },
          {
            title: "Tuamotu",
            description:
              "Le plus grand archipel de Polynésie, paradis des plongeurs.",
            image: {
              src: "/destination/polynesie/map-tuamotu.png",
              alt: "Eaux cristallines des Tuamotu",
            },
            coordinates: { lat: -15.9167, lng: -145.5167 },
          },
        ]}
      />

      <PolynesieTips />

      <TestimonialsSection
        eyebrow="Témoignages"
        heading="Ils ont vécu l'expérience Exuma"
        cta={{ label: "Créer mon voyage", href: "/reserver" }}
        testimonials={[
          {
            quote:
              "Notre voyage en Polynésie avec Exuma a été un rêve éveillé. Chaque détail était pensé, chaque île une découverte. Le bungalow sur pilotis à Bora Bora restera gravé dans nos mémoires.",
            image: {
              src: "/destination/polynesie/hero-1.png",
              alt: "Portrait de Sophie et Marc",
            },
            name: "Sophie & Marc",
            role: "Voyage de noces, octobre 2025",
          },
          {
            quote:
              "Grâce à notre travel designer, nous avons découvert des endroits que nous n'aurions jamais trouvés seuls. La plongée à Fakarava, le dîner sur le motu… des moments magiques.",
            image: {
              src: "/destination/polynesie/hero-2.png",
              alt: "Portrait de Laurent",
            },
            name: "Laurent",
            role: "Séjour en famille, août 2025",
          },
          {
            quote:
              "Ce qui m'a le plus marquée, c'est la qualité de l'accompagnement. Tout était fluide, du premier appel jusqu'au retour. On se sent véritablement pris en charge.",
            image: {
              src: "/destination/polynesie/hero-3.png",
              alt: "Portrait de Claire",
            },
            name: "Claire",
            role: "Escapade solo, mai 2025",
          },
        ]}
      />

      <FaqSection
        background="bg-white"
        eyebrow="FAQ"
        heading="Questions fréquentes"
        contact={{
          prefix: "Besoin d'un renseignement ? ",
          label: "Contactez votre travel designer",
          href: "/contact",
          suffix: " pour une réponse personnalisée.",
        }}
        items={[
          {
            question: "Quelle est la meilleure période pour partir ?",
            answer:
              "La saison sèche, de mai à octobre, offre le climat le plus agréable. Cela dit, la Polynésie se visite toute l'année avec des températures entre 24 °C et 30 °C.",
          },
          {
            question: "Combien de temps dure le vol depuis Paris ?",
            answer:
              "Comptez environ 22 heures avec une escale (généralement Los Angeles ou San Francisco). Des vols directs saisonniers sont parfois proposés.",
          },
          {
            question: "Faut-il un visa pour la Polynésie française ?",
            answer:
              "Non, pour les ressortissants de l'Union européenne, un passeport valide suffit pour un séjour touristique de moins de 90 jours.",
          },
          {
            question: "Combien d'îles peut-on visiter en deux semaines ?",
            answer:
              "Nous recommandons 3 à 4 îles pour un séjour de 14 jours, afin de profiter pleinement de chaque escale sans passer trop de temps en transit.",
          },
          {
            question: "Le voyage est-il adapté aux familles ?",
            answer:
              "Absolument. Nous sélectionnons des hébergements et activités adaptés à tous les âges. Les lagons calmes et peu profonds sont idéaux pour les enfants.",
          },
          {
            question: "Quel budget prévoir ?",
            answer:
              "Nos voyages sur mesure démarrent à partir de 5 000 € par personne pour deux semaines. Le budget varie selon le choix des îles, hébergements et expériences.",
          },
        ]}
      />
    </main>
  );
}
