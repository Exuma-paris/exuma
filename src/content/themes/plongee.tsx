import type { Theme } from "@/lib/content/types";

export const theme: Theme = {
  slug: "plongee",
  name: "Plongée & snorkeling",
  blurb:
    "Faire disparaître le monde du dessus. Des fonds que les autres ne voient pas.",
  intent:
    "L'intention est de faire disparaître le monde du dessus. Le texte doit donner la sensation du silence sous-marin avant même de parler du lieu.",
  keywords: ["plongee", "snorkeling", "dauphins", "raies", "recifs", "ocean"],
  cardImage: {
    src: "/theme/plongee/hero-1-1x1.png",
    alt: "Un plongeur seul en silhouette, à contre-jour de la surface, au-dessus d'un récif sombre",
  },
  metaTitle: "Voyage plongée et snorkeling sur mesure",
  metaDescription:
    "Voyage plongée sur mesure : tombants et épaves qui justifient le brevet, lagons de snorkeling accessibles sans certification. Organisé par Exuma.",
  sections: [
    {
      type: "hero",
      eyebrow: "Thématique",
      heading: "Plongée & snorkeling",
      description: "Le silence sous-marin avant tout.",
      images: [
        {
          src: "/theme/plongee/hero-1.png",
          alt: "Un plongeur seul en silhouette, à contre-jour de la surface, au-dessus d'un récif sombre",
        },
      ],
    },
    {
      type: "textColumns",
      eyebrow: "Comment choisir",
      heading: "Voyage plongée et snorkeling sur mesure",
      columns: [
        "La ligne de partage se lit à la surface. Au-dessus, le masque et le tuba suffisent : on entre depuis la plage ou depuis le bateau, sans brevet, et les enfants suivent. En dessous, le site demande une bouteille, un niveau et souvent un bateau pour l'atteindre. Une même destination peut offrir les deux, mais elle n'est presque jamais aussi bonne dans les deux, et c'est ce qui décide du choix.",
        "Le snorkeling se juge sur l'accès et sur la faune de surface. À Espíritu Santo, les otaries viennent d'elles-mêmes vers les palmes et repartent quand elles ont fini. Le lagon de Moorea se nage tôt le matin, avant que le vent ne lève le sable. Les îles Daymaniyat, au large d'Oman, ferment une partie de l'année pour la ponte des tortues. Cades Reef, à Antigua, se rejoint en catamaran en moins d'une heure.",
        "La plongée, elle, se juge sur le site. Le mur de Northwest Point tombe à pic sous la coque et le bleu passe au noir en quelques mètres. Apo Reef est le plus grand récif corallien des Philippines. Le Great Astrolabe, à Kadavu, se plonge avec les raies mantas. Cabo Pulmo, protégé depuis les années quatre-vingt-dix, a vu sa vie marine revenir au point de servir de référence.",
      ],
    },
    {
      type: "finalCta",
      eyebrow: "L'eau a ses saisons elle aussi",
      heading: "Dites-nous ce que vous voulez voir sous la surface, et avec qui",
      primaryCta: { label: "Créer votre voyage", href: "/votre-projet" },
      secondaryCta: { label: "Nous écrire", href: "/nous-ecrire" },
    },
  ],
};
