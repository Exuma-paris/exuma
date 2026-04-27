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

export function CorseInfoGrid() {
  return (
    <InfoGridSection
      background="bg-white"
      eyebrow="Ce qu'il faut savoir"
      heading="Préparer votre voyage en Corse"
      description="Prêt à explorer la beauté préservée de l'île ? Voici l'essentiel à savoir avant de partir."
      cta={{ label: "Créer votre voyage", href: "/reserver" }}
      items={[
        {
          icon: <Plane />,
          title: "Temps de vol",
          description: "TODO: 1h45 de vol depuis Paris (Ajaccio, Bastia, Calvi, Figari)",
        },
        {
          icon: <Clock />,
          title: "Décalage horaire",
          description: "Aucun, même fuseau que la France métropolitaine",
        },
        {
          icon: <Euro />,
          title: "Monnaie et conversion",
          description: "Euro, comme en métropole",
        },
        {
          icon: <FileText />,
          title: "Visa et passeport",
          description:
            "Carte nationale d'identité ou passeport en cours de validité",
        },
        {
          icon: <Syringe />,
          title: "Vaccin",
          description: "Aucun vaccin spécifique requis",
        },
        {
          icon: <CalendarDays />,
          title: "Meilleure période",
          description:
            "TODO: De mai à juin et de septembre à mi-octobre pour la lumière et la tranquillité",
        },
        {
          icon: <Languages />,
          title: "Langues parlées",
          description: "Français et corse (langue régionale)",
        },
      ]}
    />
  );
}
