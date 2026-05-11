"use client";

import { useState } from "react";
import { SelectTile } from "@/components/ui/select-tile";

const OPTIONS = [
  { id: "lagon", label: "Lagon et plages iconiques" },
  { id: "culture", label: "Culture polynésienne" },
  { id: "plongee", label: "Plongée et snorkeling" },
  { id: "gastronomie", label: "Gastronomie locale" },
];

export function SelectTileDemo() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["lagon"]));

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex max-w-md flex-col gap-2">
      {OPTIONS.map((opt) => (
        <SelectTile
          key={opt.id}
          label={opt.label}
          selected={selected.has(opt.id)}
          onToggle={() => toggle(opt.id)}
        />
      ))}
      <SelectTile label="Désactivé" disabled />
    </div>
  );
}
