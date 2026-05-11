import { Header } from "@/components/sections/header";
import type { Destination } from "@/lib/content/types";
import { destinationJsonLdScripts } from "@/lib/destination/seo";
import { renderSection } from "./render-section";

export function DestinationPage({ destination }: { destination: Destination }) {
  const [hero, ...rest] = destination.sections;
  const scripts = destinationJsonLdScripts(destination);

  return (
    <main className="flex-1">
      {scripts.map((schema, i) => (
        <script
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="relative">
        <Header />
        {hero && renderSection(hero, "hero")}
      </div>
      {rest.map((section, i) => renderSection(section, String(i + 1)))}
    </main>
  );
}
