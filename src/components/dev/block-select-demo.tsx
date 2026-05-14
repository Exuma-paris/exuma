"use client";

import { useState } from "react";
import { BlockSelect } from "@/components/ui/block-select";
import { Indicator, type IndicatorVariant } from "@/components/ui/indicator";

type Month = {
  id: string;
  title: string;
  subtitle: string;
  weather?: IndicatorVariant;
};

const MONTHS: Month[] = [
  { id: "jan", title: "Janvier", subtitle: "2026", weather: "rainy" },
  { id: "feb", title: "Février", subtitle: "2026", weather: "rainy" },
  { id: "mar", title: "Mars", subtitle: "2026", weather: "neutral" },
  { id: "apr", title: "Avril", subtitle: "2026", weather: "good" },
  { id: "may", title: "Mai", subtitle: "2026", weather: "happy-max" },
  { id: "jun", title: "Juin", subtitle: "2026", weather: "sunny" },
  { id: "jul", title: "Juillet", subtitle: "2026" },
  { id: "aug", title: "Août", subtitle: "2026" },
];

export function BlockSelectDemo() {
  const [selected, setSelected] = useState<string | null>("may");

  return (
    <div className="flex max-w-xl flex-wrap gap-2">
      {MONTHS.map((m) => (
        <BlockSelect
          key={m.id}
          title={m.title}
          subtitle={m.subtitle}
          selected={selected === m.id}
          onToggle={() => setSelected(m.id)}
          indicator={m.weather ? <Indicator variant={m.weather} /> : undefined}
        />
      ))}
    </div>
  );
}
