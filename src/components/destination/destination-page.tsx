import { Header } from "@/components/sections/header";
import type { Destination } from "@/lib/destination/types";
import { renderSection } from "./render-section";

export function DestinationPage({ destination }: { destination: Destination }) {
  const [hero, ...rest] = destination.sections;

  return (
    <main className="flex-1">
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
