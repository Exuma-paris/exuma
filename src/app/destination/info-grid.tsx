"use client";

import {
  Plane,
  Clock,
  Euro,
  FileText,
  Syringe,
  CalendarDays,
  Languages,
} from "lucide-react";
import { InfoGridSection } from "@/components/sections/info-grid";

export function PolynesieInfoGrid() {
  return (
    <InfoGridSection
      background="bg-white"
      eyebrow="Ce qu'il faut savoir"
      heading="Préparer votre voyage en Polynésie"
      description="Prêt à explorer la beauté incroyable de la Polynésie ? Voici tout ce qu'il faut savoir sur cette destination."
      cta={{ label: "Créer votre voyage", href: "/reserver" }}
      items={[
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
          description:
            "Tout se paye en … la monnaie locale, 1€ = environ 200 …",
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
      ]}
    />
  );
}
