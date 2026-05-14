import { Header } from "@/components/sections/header";
import { HeroImageBottom } from "@/components/sections/hero/image-bottom";
import { HeroImageBackground } from "@/components/sections/hero/image-background";
import { HeroImageGallery } from "@/components/sections/hero/image-gallery";
import { HeroLanding } from "@/components/sections/hero/landing";
import { FullImageSection } from "@/components/sections/full-image";
import { TextColumnsSection } from "@/components/sections/text-columns";
import { TextImagesSplitSection } from "@/components/sections/text-images-split";
import { ImageDuoSection } from "@/components/sections/image-duo";
import { InfoGridSection } from "@/components/sections/info-grid";
import { TipsSection } from "@/components/sections/tips";
import { PlacesMapSection } from "@/components/sections/places-map";
import {
  Plane,
  Clock,
  CurrencyEuro as Euro,
  File02 as FileText,
  MedicalCross as Syringe,
  Calendar as CalendarDays,
  Translate01 as Languages,
  CheckVerified01 as BadgeCheck,
  Stars01 as Sparkles,
  Star01 as Star,
} from "@untitledui/icons";
import { Recommended } from "@/components/blocks/recommended";
import { BentoSection } from "@/components/sections/bento";
import { FeatureCardsSection } from "@/components/sections/feature-cards";
import { VideoSection } from "@/components/sections/video";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { SpecialistSpotlight } from "@/components/sections/specialist-spotlight";
import { FeatureTrio } from "@/components/blocks/feature-trio";
import { FaqSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import type {
  ControlValue,
  PreviewControl,
  SwatchOption,
} from "@/components/dev/controls-popover";

export type PreviewDefinition = {
  id: string;
  label: string;
  controls: PreviewControl[];
  defaultValues: Record<string, ControlValue>;
  render: (values: Record<string, ControlValue>) => React.ReactNode;
};

const backgroundSwatches: SwatchOption[] = [
  { label: "Default", value: "", color: "bg-background-subtle" },
  { label: "Background", value: "bg-background", color: "bg-background" },
  {
    label: "Background soft",
    value: "bg-background-soft",
    color: "bg-background-soft",
  },
  {
    label: "Background subtle",
    value: "bg-background-subtle",
    color: "bg-background-subtle",
  },
];

const str = (v: ControlValue | undefined) => String(v ?? "");
const num = (v: ControlValue | undefined, fallback = 0) =>
  Number(v ?? fallback);

const heroImages = [
  { src: "/hero/bora-bora.jpg", alt: "Lagon de Bora Bora au coucher du soleil" },
  { src: "/hero/moorea.jpg", alt: "Pitons de Moorea vus du ciel" },
  { src: "/hero/rangiroa.jpg", alt: "Atoll de Rangiroa" },
  { src: "/hero/tahiti.jpg", alt: "Vue aérienne de Tahiti" },
];

const bentoCards = [
  {
    title: "Création d'itinéraires",
    description: "Chaque voyage naît d'un échange personnel.",
    image: { src: "/bento/itineraires.png", alt: "Carte d'itinéraires" },
    tone: "dark" as const,
  },
  {
    title: "Adresses confidentielles",
    description: "Accès privilégié à des lieux rares.",
    image: { src: "/bento/adresses.jpg", alt: "Plage privée" },
  },
  {
    title: "Hébergements de luxe",
    description: "Villas suites à fleur de lagon.",
    image: { src: "/bento/hebergements.jpg", alt: "Hébergement de luxe" },
  },
  {
    title: "Conciergerie 24/7",
    description: "Assistance voyage, taxi-boat, chauffeurs.",
    image: { src: "/bento/conciergerie.jpg", alt: "Conciergerie" },
  },
  {
    title: "Expérientiel",
    description: "Expériences rares et authentiques.",
    image: { src: "/bento/experientiel.jpg", alt: "Expérientiel" },
  },
];

const featureCards = [
  {
    title: "Safari",
    description: "Randonnée à travers des paysages enchanteurs.",
    image: { src: "/hotels/safari.jpg", alt: "Plage de sable blanc" },
    link: { label: "Découvrir", href: "#" },
  },
  {
    title: "Croisière",
    description: "Lagon turquoise et atolls préservés.",
    image: { src: "/hotels/croisiere.jpg", alt: "Lagon turquoise" },
    link: { label: "Découvrir", href: "#" },
  },
  {
    title: "Balnéaire",
    description: "Bungalows sur pilotis et coucher de soleil.",
    image: { src: "/hotels/balneaire.jpg", alt: "Bungalows sur pilotis" },
    link: { label: "Découvrir", href: "#" },
  },
  {
    title: "Immersion",
    description: "Au rythme des villages polynésiens.",
    image: { src: "/hotels/immersion.jpg", alt: "Village polynésien" },
    link: { label: "Découvrir", href: "#" },
  },
  {
    title: "Plongée",
    description: "Explorez récifs coralliens et raies mantas.",
    image: { src: "/hotels/plongee.jpg", alt: "Plongée" },
    link: { label: "Découvrir", href: "#" },
  },
  {
    title: "Gastronomie",
    description: "Tables d'exception et cuisines revisitées.",
    image: { src: "/hotels/gastronomie.jpg", alt: "Gastronomie" },
    link: { label: "Découvrir", href: "#" },
  },
];

const showcaseItems = [
  {
    title: "Vivez l'inaccessible",
    detail: "Des lieux confidentiels rares.",
    image: { src: "/showcase/inaccessible.jpg", alt: "Lagon privé" },
  },
  {
    title: "Conciergerie & Co",
    detail: "Assistance 24/7 et réservations exclusives.",
    image: { src: "/showcase/conciergerie.jpg", alt: "Conciergerie" },
  },
  {
    title: "Expériences rencontres",
    detail: "Immersion auprès des locaux.",
    image: { src: "/showcase/experiences.jpg", alt: "Rencontres" },
  },
  {
    title: "Confidentialité",
    detail: "Adresses confidentielles et accès privilégiés.",
    image: { src: "/showcase/confidentiel.jpg", alt: "Lieu confidentiel" },
  },
  {
    title: "Hébergements de luxe",
    detail: "Villas suites à fleur de lagon.",
    image: { src: "/showcase/hebergements.jpg", alt: "Hébergement de luxe" },
  },
];

const testimonials = [
  {
    quote:
      "Voyager en Polynésie, c'est découvrir des paysages époustouflants et une culture riche.",
    image: { src: "/testimonials/stephane.jpg", alt: "Stéphane" },
    name: "Stéphane",
    role: "Travel Designer spécialiste de la Polynésie",
  },
  {
    quote:
      "Chaque voyage est une histoire à construire ensemble, au rythme des rencontres.",
    image: { src: "/testimonials/marie.jpg", alt: "Marie" },
    name: "Marie",
    role: "Travel Designer spécialiste des Caraïbes",
  },
  {
    quote:
      "Je conçois des itinéraires qui révèlent l'âme des lieux, loin des sentiers battus.",
    image: { src: "/testimonials/julien.jpg", alt: "Julien" },
    name: "Julien",
    role: "Travel Designer spécialiste du Japon",
  },
  {
    quote:
      "Un bon voyage se ressent dans les détails, une table, un lever de soleil.",
    image: { src: "/testimonials/camille.jpg", alt: "Camille" },
    name: "Camille",
    role: "Travel Designer spécialiste de l'Afrique",
  },
];

const faqItems = [
  {
    question: "Quand partir en polynésie ?",
    answer: "La meilleure période s'étend de mai à octobre, saison sèche.",
  },
  {
    question: "Quelles sont les démarches administratives ?",
    answer: "Passeport valide requis. Aucun visa pour un séjour < 90 jours.",
  },
  {
    question: "Les vols sont-ils inclus ?",
    answer:
      "Oui, nous coordonnons vols et transferts pour une expérience sans friction.",
  },
  {
    question: "Quel budget prévoir ?",
    answer:
      "Le budget dépend des envies, hébergements et expériences sélectionnées.",
  },
  {
    question: "Peut-on personnaliser l'itinéraire ?",
    answer: "Oui, chaque voyage est conçu sur mesure selon vos envies.",
  },
];

const logos = [
  {
    src: "/logos/logo-les-entreprises-du-voyage.png",
    alt: "Les Entreprises du Voyage",
    width: 160,
    height: 48,
  },
  {
    src: "/logos/logo-takumians.png",
    alt: "Takumians",
    width: 160,
    height: 48,
  },
  { src: "/logos/logo-iata.png", alt: "IATA", width: 96, height: 48 },
];

export const definitions: PreviewDefinition[] = [
  {
    id: "hero-image-bottom",
    label: "Hero — image bottom",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
    ],
    defaultValues: { background: "" },
    render: (v) => (
      <div className={`relative ${str(v.background)}`}>
        <Header hideOnScroll={false} />
        <HeroImageBottom />
      </div>
    ),
  },
  {
    id: "hero-image-background",
    label: "Hero — image background",
    controls: [
      {
        key: "imageCount",
        type: "number",
        label: "Number of images",
        min: 1,
        max: heroImages.length,
      },
      {
        key: "interval",
        type: "number",
        label: "Interval (ms)",
        min: 1000,
        max: 15000,
      },
    ],
    defaultValues: { imageCount: 3, interval: 5000 },
    render: (v) => (
      <div className="relative">
        <Header hideOnScroll={false} theme="dark" />
        <HeroImageBackground
          key={`${num(v.imageCount)}-${num(v.interval)}`}
          eyebrow="Agence voyage sur mesure"
          heading="Voyages d'exception en Polynésie"
          description="Des paysages inoubliables, une culture riche et des expériences uniques."
          cta={<Button variant="secondary">Créer mon voyage</Button>}
          images={heroImages.slice(0, num(v.imageCount, 3))}
          interval={num(v.interval, 5000)}
        />
      </div>
    ),
  },
  {
    id: "hero-image-gallery",
    label: "Hero — image gallery",
    controls: [
      {
        key: "imageCount",
        type: "number",
        label: "Number of images",
        min: 1,
        max: heroImages.length,
      },
    ],
    defaultValues: { imageCount: 3 },
    render: (v) => (
      <div className="relative">
        <Header hideOnScroll={false} />
        <HeroImageGallery
          eyebrow="Voyage de luxe en Polynésie"
          heading="Vivez l'inaccessible, voyage de luxe en Polynésie"
          description="Un archipel confidentiel et préservé. Survolez des atolls vierges en hydravion privé avant de partager le sable fin ensablé d'un maître tatoueur. Chaque instant pensé pour vous devient un privilège absolu."
          cta={<Button>Créer votre voyage</Button>}
          images={heroImages.slice(0, num(v.imageCount, 3))}
        />
      </div>
    ),
  },
  {
    id: "hero-landing",
    label: "Hero — landing",
    controls: [
      {
        key: "showRating",
        type: "select",
        label: "Rating block",
        options: [
          { label: "Visible", value: "yes" },
          { label: "Hidden", value: "no" },
        ],
      },
      {
        key: "showFeatures",
        type: "select",
        label: "Feature trio",
        options: [
          { label: "Visible", value: "yes" },
          { label: "Hidden", value: "no" },
        ],
      },
    ],
    defaultValues: { showRating: "yes", showFeatures: "yes" },
    render: (v) => (
      <div className="relative">
        <Header hideOnScroll={false} />
        <HeroLanding
          eyebrow="Voyage de luxe en Polynésie"
          heading="Vivez l'inaccessible"
          description="Créateur de voyages d'exception façonnés selon vos aspirations, entre atolls préservés et adresses confidentielles de Polynésie."
          cta={{ label: "Créez votre voyage", href: "/reserver" }}
          rating={
            str(v.showRating) === "yes"
              ? { score: 4.9, label: "247 voyages créés en 2025" }
              : undefined
          }
          features={
            str(v.showFeatures) === "yes"
              ? [
                  {
                    icon: <BadgeCheck />,
                    title: "Conciergerie 24/7",
                    description:
                      "Assistance discrète, transferts privés, accès rapide aux adresses fermées au public.",
                  },
                  {
                    icon: <Sparkles />,
                    title: "Sur mesure",
                    description:
                      "Un travel designer dédié façonne votre voyage selon vos envies.",
                  },
                  {
                    icon: <Star />,
                    title: "Exclusif",
                    description:
                      "Tables, ateliers, maisons : accès à des adresses qui ne sont pas dans les moteurs de réservation.",
                  },
                ]
              : undefined
          }
          slides={[
            {
              image: {
                src: "/destination/polynesie/hero-1.png",
                alt: "Plage de sable blanc bordée de cocotiers en Polynésie française",
              },
            },
            {
              image: {
                src: "/destination/corse/hero-1.png",
                alt: "Falaises de Bonifacio au lever du jour, Corse",
              },
            },
            {
              image: {
                src: "/destination/polynesie/hero-2.png",
                alt: "Bungalows sur pilotis face au mont Otemanu à Bora Bora",
              },
            },
            {
              image: {
                src: "/destination/corse/hero-2.png",
                alt: "Plage de Palombaggia, Corse-du-Sud",
              },
            },
          ]}
        />
      </div>
    ),
  },
  {
    id: "text-images-split",
    label: "Text & images split",
    controls: [
      {
        key: "theme",
        type: "select",
        label: "Theme",
        options: [
          { label: "Dark", value: "dark" },
          { label: "Light", value: "light" },
        ],
      },
    ],
    defaultValues: { theme: "light" },
    render: (v) => (
      <TextImagesSplitSection
        theme={str(v.theme) === "light" ? "light" : "dark"}
        eyebrow="Polynésie française — le luxe et l'excellence"
        heading="L'essence secrète de la Polynésie française"
        paragraphs={[
          "Notre sélection vous ouvre les portes d'une Polynésie confidentielle. Nous choisissons nos adresses pour leur singularité absolue. Des villas à fleur de lagon. Des écolodges enfouis dans la végétation dense de Moorea. Chaque lieu est pensé pour vous offrir un espace infini et une déconnexion totale. L'exploration devient un privilège. Un hydravion privé vous emporte au-dessus du bleu, dense de Bora Bora. Il se pose ensuite sur les eaux translucides de Fakarava.",
          "À terre, le luxe prend tout son sens. Nous vous confions à des artisans et des gardiens de la mémoire locale. Une tisseuse de Huahine vous transmet ses gestes ancestraux. Un festin préparé pour vous seul embaume le jardin de fleurs de tiaré. Ce sont instants naissent des souvenirs d'une rareté absolue. C'est l'essence même du voyage d'une vie.",
        ]}
        images={[
          {
            src: "/split/fisherman.jpg",
            alt: "Pêcheurs sur un lagon polynésien",
          },
          {
            src: "/split/overwater.jpg",
            alt: "Bungalow sur pilotis au crépuscule",
          },
        ]}
      />
    ),
  },
  {
    id: "text-columns",
    label: "Text columns",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "columnCount",
        type: "number",
        label: "Number of columns",
        min: 1,
        max: 4,
      },
    ],
    defaultValues: { background: "", columnCount: 3 },
    render: (v) => {
      const allColumns = [
        "Il existe des endroits qui ne se racontent pas vraiment : ils se reconnaissent, comme si l'âme les attendait depuis longtemps. La Polynésie française est de ceux-là, un archipel dispersé au cœur du Pacifique sud, où le temps obéit à d'autres lois et où chaque île tient une promesse distincte.",
        "Ici, le lagon s'étire dans des bleus sans nom, l'air porte le parfum sucré du tiaré et du monoï chaud sur la peau, et le soir, les chants des 'ori Tahiti s'élèvent avec la même évidence que les étoiles. De Moorea et ses crêtes volcaniques drapées de nuages à Bora Bora et son lagon céruléen, jusqu'aux atolls silencieux de Fakarava où le souffle de l'océan existe, chaque étape redessine la carte intérieure du désir.",
        "Déguster un poisson cru au lait de coco sur le ponton d'un motu à l'aube, observer une raie manta glisser sous votre pirogue avec une grâce absolue : ce sont ces instants infimes et souverains qui font de ce voyage non pas un souvenir parmi d'autres, mais une façon nouvelle de regarder le monde.",
        "Au-delà des lagons, une culture vivante, des artisans, des navigateurs, des maîtres tatoueurs portent la mémoire de la Polynésie avec une générosité rare.",
      ];
      return (
        <TextColumnsSection
          background={str(v.background) || undefined}
          eyebrow="Découverte de la Polynésie française"
          heading="Polynésie française, une lumière que l'on emporte à jamais"
          cta={{ label: "Créer votre voyage", href: "#" }}
          columns={allColumns.slice(0, num(v.columnCount, 3))}
        />
      );
    },
  },
  {
    id: "places-map",
    label: "Places map",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "placeCount",
        type: "number",
        label: "Number of places",
        min: 1,
        max: 8,
      },
    ],
    defaultValues: { background: "", placeCount: 6 },
    render: (v) => {
      const allPlaces = [
        {
          title: "Tahiti",
          description: "Le cœur battant de la Polynésie, entre mer et montagne.",
          image: { src: "/places/tahiti.jpg", alt: "Tahiti" },
          coordinates: { lat: -17.6509, lng: -149.426 },
        },
        {
          title: "Bora Bora",
          description:
            "Lagon d'un bleu irréel et pitons volcaniques majestueux.",
          image: { src: "/places/bora-bora.jpg", alt: "Bora Bora" },
          coordinates: { lat: -16.5004, lng: -151.7415 },
        },
        {
          title: "Moorea",
          description: "Baies profondes, crêtes volcaniques et plages sauvages.",
          image: { src: "/places/moorea.jpg", alt: "Moorea" },
          coordinates: { lat: -17.5388, lng: -149.8295 },
        },
        {
          title: "Rangiroa",
          description: "Atoll immense aux eaux turquoise rempli de raies mantas.",
          image: { src: "/places/rangiroa.jpg", alt: "Rangiroa" },
          coordinates: { lat: -15.1437, lng: -147.7065 },
        },
        {
          title: "Fakarava",
          description: "Réserve de biosphère et passes aux requins gris.",
          image: { src: "/places/fakarava.jpg", alt: "Fakarava" },
          coordinates: { lat: -16.3, lng: -145.5 },
        },
        {
          title: "Huahine",
          description: "Île intime parsemée de lagons secrets et sites sacrés.",
          image: { src: "/places/huahine.jpg", alt: "Huahine" },
          coordinates: { lat: -16.7167, lng: -151.0333 },
        },
        {
          title: "Raiatea",
          description: "Île sacrée, berceau de la culture polynésienne.",
          image: { src: "/places/raiatea.jpg", alt: "Raiatea" },
          coordinates: { lat: -16.8333, lng: -151.4333 },
        },
        {
          title: "Motu Nao Nao",
          description:
            "Découvrez Motu Nao Nao, un havre de paix isolé aux eaux cristallines.",
          image: { src: "/places/motu-nao-nao.jpg", alt: "Motu Nao Nao" },
          coordinates: { lat: -16.88, lng: -151.52 },
        },
      ];
      return (
        <PlacesMapSection
          background={str(v.background) || undefined}
          eyebrow="Les incontournables en Polynésie française"
          heading="La Polynésie, entre atolls, îles et archipels"
          description="Que vous soyez amateur de randonnée, de plongée ou simplement en quête de détente, la variété des paysages polynésiens saura vous émerveiller."
          cta={{ label: "Créer votre voyage", href: "#" }}
          places={allPlaces.slice(0, num(v.placeCount, 6))}
        />
      );
    },
  },
  {
    id: "tips",
    label: "Tips",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "itemCount",
        type: "number",
        label: "Number of tips",
        min: 3,
        max: 8,
      },
    ],
    defaultValues: { background: "", itemCount: 4 },
    render: (v) => {
      const allTips = [
        {
          cardEyebrow: "Tips",
          modalEyebrow: "Activité",
          title: "Dans ma valise",
          shortDescription: "Détails de toutes les formalités, Détails de toutes les formalités",
          content:
            "Lorsque vous partez pour la Polynésie française, n'oubliez pas d'emporter des vêtements légers et respirants, des maillots de bain, des sandales et un chapeau pour vous protéger du soleil. Pensez également à un répulsif contre les insectes et de la crème solaire. N'oubliez pas votre passeport, des copies de vos documents importants et un adaptateur de prise pour vos appareils électroniques. Enfin, une petite trousse de premiers secours peut s'avérer utile.",
        },
        {
          cardEyebrow: "Tips",
          modalEyebrow: "Santé",
          title: "Santé",
          shortDescription: "Détails de toutes les formalités, Détails de toutes les formalités",
          content:
            "Aucun vaccin spécifique n'est requis pour entrer en Polynésie française, mais il est recommandé d'être à jour avec les vaccinations courantes. Pensez également à une trousse de premiers secours, à de la crème solaire indice élevé et à un anti-moustiques efficace.",
        },
        {
          cardEyebrow: "Tips",
          modalEyebrow: "Climat",
          title: "Meilleure période",
          shortDescription: "Détails de toutes les formalités, Détails de toutes les formalités",
          content:
            "La saison idéale s'étend d'avril à octobre, pendant la saison sèche. Les températures sont agréables (24–28°C) et les précipitations rares. De novembre à mars, la saison des pluies apporte une humidité élevée et des averses courtes.",
        },
        {
          cardEyebrow: "Tips",
          modalEyebrow: "Finance",
          title: "Budget & Vie locale",
          shortDescription: "Détails de toutes les formalités, Détails de toutes les formalités",
          content:
            "La monnaie locale est le franc Pacifique (XPF). Prévoyez un budget quotidien confortable pour profiter des excursions et de la gastronomie locale. Les pourboires ne sont pas d'usage, mais toujours appréciés.",
        },
        {
          cardEyebrow: "Tips",
          modalEyebrow: "Culture",
          title: "Coutumes locales",
          shortDescription: "Détails de toutes les formalités, Détails de toutes les formalités",
          content:
            "Respectez les coutumes locales : couvrez-vous en dehors des plages, retirez vos chaussures avant d'entrer dans une maison et salutez toujours avec le sourire. La culture polynésienne accorde une grande importance au respect et à la convivialité.",
        },
        {
          cardEyebrow: "Tips",
          modalEyebrow: "Transport",
          title: "Se déplacer",
          shortDescription: "Détails de toutes les formalités, Détails de toutes les formalités",
          content:
            "Entre les îles, l'avion et le bateau sont les principaux moyens de transport. Sur place, la location de scooter ou de vélo est idéale pour explorer les plus petites îles. Les taxis sont rares — mieux vaut organiser ses transferts à l'avance.",
        },
      ];
      return (
        <TipsSection
          background={str(v.background) || undefined}
          eyebrow="Guide pratique"
          heading="Les conseils de nos experts pour votre voyage en Polynésie Française"
          description="Un archipel confidentiel et préservé. Survolez des atolls vierges en hydravion privé avant de partager le savoir-faire ancestral d'un maître tatoueur. Chaque instant pensé pour vous devient un privilège absolu."
          cta={{ label: "Créer votre voyage", href: "#" }}
          items={allTips.slice(0, num(v.itemCount, 4))}
        />
      );
    },
  },
  {
    id: "info-grid",
    label: "Info grid",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "itemCount",
        type: "number",
        label: "Number of items",
        min: 1,
        max: 8,
      },
    ],
    defaultValues: { background: "", itemCount: 8 },
    render: (v) => {
      const allItems = [
        {
          icon: <Plane />,
          title: "Temps de vol",
          description: "Il y a 12h30 de vol depuis Paris",
        },
        {
          icon: <Clock />,
          title: "Décalage horaire",
          description: "2h de décalage horaire avec la France",
        },
        {
          icon: <Euro />,
          title: "Monnaie et conversion",
          description: "Tout se paye en … la monnaie locale, 1€ = environ 200 …",
        },
        {
          icon: <FileText />,
          title: "Visa et passeport",
          description:
            "Le visa se fait à l'arrivée et il vous faudra votre passeport.",
        },
        {
          icon: <Syringe />,
          title: "Vaccin",
          description: "Pas besoin de vaccin spécifique",
        },
        {
          icon: <CalendarDays />,
          title: "Meilleure période",
          description: "Il est idéal d'y aller en janvier",
        },
        {
          icon: <Languages />,
          title: "Langues parlées",
          description: "Anglais et espagnol",
        },
        {
          icon: <Languages />,
          title: "Langues parlées",
          description: "Anglais et espagnol",
        },
      ];
      return (
        <InfoGridSection
          background={str(v.background) || undefined}
          eyebrow="Ce qu'il faut savoir"
          heading="Préparer votre voyage en Polynésie"
          description="Prêt à explorer la beauté incroyable de la Polynésie ? Voici tout ce qu'il faut savoir sur cette destination."
          cta={{ label: "Créer votre voyage", href: "#" }}
          items={allItems.slice(0, num(v.itemCount, 8))}
        />
      );
    },
  },
  {
    id: "image-duo",
    label: "Image duo",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
    ],
    defaultValues: { background: "" },
    render: (v) => (
      <ImageDuoSection
        background={str(v.background) || undefined}
        left={{
          src: "/duo/cerimony.jpg",
          alt: "Cérémonie polynésienne sur la plage",
        }}
        right={{
          src: "/duo/conch.jpg",
          alt: "Musicien jouant de la conque",
        }}
      />
    ),
  },
  {
    id: "full-image",
    label: "Full image",
    controls: [
      {
        key: "height",
        type: "number",
        label: "Height (px)",
        min: 200,
        max: 1200,
      },
    ],
    defaultValues: { height: 600 },
    render: (v) => (
      <FullImageSection
        image={{
          src: "/hero/bora-bora.jpg",
          alt: "Paysage de Bora Bora",
        }}
        height={num(v.height, 600)}
      />
    ),
  },
  {
    id: "recommended",
    label: "Recommended",
    controls: [
      {
        key: "logoCount",
        type: "number",
        label: "Number of logos",
        min: 1,
        max: logos.length,
      },
    ],
    defaultValues: { logoCount: logos.length },
    render: (v) => (
      <div className="section-px mx-auto w-full max-w-layout py-16">
        <Recommended logos={logos.slice(0, num(v.logoCount, logos.length))} />
      </div>
    ),
  },
  {
    id: "bento",
    label: "Bento",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "cardCount",
        type: "number",
        label: "Number of cards",
        min: 2,
        max: bentoCards.length,
      },
    ],
    defaultValues: { background: "bg-background", cardCount: 5 },
    render: (v) => (
      <BentoSection
        background={str(v.background) || undefined}
        eyebrow="Exuma"
        heading="Découvrez le voyage sur-mesure"
        description="Un travel designer, expert de la Polynésie, façonne un voyage d'exception."
        cta={{ label: "Créer votre voyage", href: "#" }}
        cards={bentoCards.slice(0, num(v.cardCount, 5))}
      />
    ),
  },
  {
    id: "feature-cards",
    label: "Feature cards",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "cardCount",
        type: "number",
        label: "Number of cards",
        min: 1,
        max: featureCards.length,
      },
    ],
    defaultValues: { background: "", cardCount: 5 },
    render: (v) => (
      <FeatureCardsSection
        background={str(v.background) || undefined}
        eyebrow="Hébergements"
        heading="Nos hôtels d'exceptions"
        cta={{ label: "Créer votre voyage", href: "#" }}
        cards={featureCards.slice(0, num(v.cardCount, 5))}
      />
    ),
  },
  {
    id: "video",
    label: "Video",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
    ],
    defaultValues: { background: "" },
    render: (v) => (
      <VideoSection
        background={str(v.background) || undefined}
        eyebrow="Partenaires"
        heading="Exuma et Ponant"
        video={{
          src: "/videos/exuma-ponant.mp4",
          poster: "/videos/exuma-ponant-poster.jpg",
          alt: "Partenariat Exuma et Ponant",
        }}
      />
    ),
  },
  {
    id: "feature-showcase",
    label: "Feature showcase",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "itemCount",
        type: "number",
        label: "Number of items",
        min: 1,
        max: showcaseItems.length,
      },
    ],
    defaultValues: { background: "", itemCount: 3 },
    render: (v) => (
      <div className={str(v.background) || undefined}>
        <FeatureShowcase
          eyebrow="Méthode"
          heading="Notre approche du voyage sur mesure"
          description="Décrire les différents points clés."
          items={showcaseItems.slice(0, num(v.itemCount, 3))}
        />
      </div>
    ),
  },
  {
    id: "testimonials",
    label: "Testimonials",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "count",
        type: "number",
        label: "Number of testimonials",
        min: 1,
        max: testimonials.length,
      },
    ],
    defaultValues: { background: "", count: 3 },
    render: (v) => (
      <TestimonialsSection
        background={str(v.background) || undefined}
        eyebrow="Travel Designer"
        heading="Rencontrez nos travels designers"
        cta={{ label: "Créer mon voyage", href: "#" }}
        testimonials={testimonials.slice(0, num(v.count, 3))}
      />
    ),
  },
  {
    id: "specialist-spotlight",
    label: "Specialist spotlight",
    controls: [
      {
        key: "theme",
        type: "select",
        label: "Theme",
        options: [
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
        ],
      },
    ],
    defaultValues: { theme: "light" },
    render: (v) => (
      <SpecialistSpotlight
        theme={str(v.theme) === "dark" ? "dark" : "light"}
        eyebrow="Pourquoi partir en Polynésie française ?"
        heading="Stéphane, spécialiste de la Polynésie, vous partage son expérience"
        partners={{ logos }}
        specialist={{
          quote:
            "Voyager en Polynésie, c'est découvrir des paysages époustouflants, des plages de sable fin et une culture riche. Une aventure unique qui éveille les sens et nourrit l'âme.",
          image: {
            src: "/testimonials/stephane.jpg",
            alt: "Portrait de Stéphane, travel designer",
          },
          name: "Stéphane",
          role: "Travel Designer Exuma spécialiste de la Polynésie",
        }}
        features={[
          {
            icon: <BadgeCheck />,
            title: "Conciergerie 24/7",
            description:
              "Assistance discrète, fast-track, chauffeurs privés et réservations exclusives.",
          },
          {
            icon: <Sparkles />,
            title: "Sur mesure",
            description:
              "Un travel designer dédié, expert de la Polynésie, façonne votre voyage selon vos envies.",
          },
          {
            icon: <Star />,
            title: "Exclusif",
            description:
              "Accédez à des expériences rares, villas isolées et cérémonies polynésiennes authentiques.",
          },
        ]}
      />
    ),
  },
  {
    id: "feature-trio",
    label: "Feature trio",
    controls: [
      {
        key: "theme",
        type: "select",
        label: "Theme",
        options: [
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
        ],
      },
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
    ],
    defaultValues: { theme: "light", background: "" },
    render: (v) => (
      <div className={`section-px mx-auto w-full max-w-layout py-16 ${str(v.background)}`}>
        <FeatureTrio
          theme={str(v.theme) === "dark" ? "dark" : "light"}
          items={[
            {
              icon: <BadgeCheck />,
              title: "Conciergerie 24/7",
              description:
                "Assistance discrète, fast-track, chauffeurs privés et réservations exclusives.",
            },
            {
              icon: <Sparkles />,
              title: "Sur mesure",
              description:
                "Un travel designer dédié, expert de la Polynésie, façonne votre voyage selon vos envies.",
            },
            {
              icon: <Star />,
              title: "Exclusif",
              description:
                "Accédez à des expériences rares, villas isolées et cérémonies polynésiennes authentiques.",
            },
          ]}
        />
      </div>
    ),
  },
  {
    id: "faq",
    label: "FAQ",
    controls: [
      {
        key: "background",
        type: "swatch",
        label: "Background",
        options: backgroundSwatches,
      },
      {
        key: "itemCount",
        type: "number",
        label: "Number of items",
        min: 1,
        max: faqItems.length,
      },
    ],
    defaultValues: { background: "", itemCount: 3 },
    render: (v) => (
      <FaqSection
        background={str(v.background) || undefined}
        heading="Foire aux questions"
        contact={{
          prefix: "N'hésitez pas à ",
          label: "nous contacter",
          href: "#",
          suffix: " si vous avez une question.",
        }}
        items={faqItems.slice(0, num(v.itemCount, 3))}
      />
    ),
  },
  {
    id: "footer",
    label: "Footer",
    controls: [],
    defaultValues: {},
    render: () => <Footer />,
  },
];
