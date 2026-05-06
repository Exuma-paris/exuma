"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  Hotel,
  MapPin,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { allTagged, continents } from "@/lib/content/registry";
import {
  getDestinationsByContinentGrouped,
  type DestinationCountryGroup,
} from "@/lib/content/queries";
import {
  getMenuGroups,
  type MenuGroup,
  type MenuGroupKey,
} from "@/lib/content/menu-groups";
import {
  entityRoute,
  type EntityKind,
} from "@/lib/content/types";
import { cn } from "@/lib/utils";

const KIND_LABEL: Record<EntityKind, string> = {
  continent: "Continents",
  destination: "Destinations",
  theme: "Thématiques",
  subtheme: "Sous-thématiques",
  experience: "Expériences",
  serviceCategory: "Services",
  service: "Services",
  accommodation: "Hébergements",
};

const KIND_ICON: Record<EntityKind, React.ComponentType<{ className?: string }>> = {
  continent: Globe,
  destination: MapPin,
  theme: Sparkles,
  subtheme: Sparkles,
  experience: Star,
  serviceCategory: Wrench,
  service: Wrench,
  accommodation: Hotel,
};

const KIND_ORDER: EntityKind[] = [
  "destination",
  "continent",
  "theme",
  "experience",
  "accommodation",
  "serviceCategory",
  "service",
  "subtheme",
];

export function SiteSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState<MenuGroupKey>("continents");
  const [selectedContinent, setSelectedContinent] = useState<string | null>(
    null,
  );
  const groups = getMenuGroups();
  const isSearching = query.trim().length > 0;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setQuery("");
        setActiveGroup("continents");
        setSelectedContinent(null);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const go = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="gap-0 overflow-hidden p-0 sm:max-w-2xl"
        aria-label="Rechercher sur Exuma"
      >
        <Command
          label="Rechercher sur Exuma"
          shouldFilter={isSearching}
          className="bg-popover"
        >
          <CommandInput
            placeholder="Rechercher une destination, une page…"
            value={query}
            onValueChange={setQuery}
          />

          {isSearching ? (
            <SearchResults onSelect={go} />
          ) : (
            <BrowseView
              groups={groups}
              activeGroup={activeGroup}
              onActiveGroupChange={(key) => {
                setActiveGroup(key);
                setSelectedContinent(null);
              }}
              selectedContinent={selectedContinent}
              onContinentSelect={setSelectedContinent}
              onSelect={go}
            />
          )}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function BrowseView({
  groups,
  activeGroup,
  onActiveGroupChange,
  selectedContinent,
  onContinentSelect,
  onSelect,
}: {
  groups: MenuGroup[];
  activeGroup: MenuGroupKey;
  onActiveGroupChange: (key: MenuGroupKey) => void;
  selectedContinent: string | null;
  onContinentSelect: (slug: string | null) => void;
  onSelect: (href: string) => void;
}) {
  const active = groups.find((g) => g.key === activeGroup) ?? groups[0];
  const continent =
    activeGroup === "continents" && selectedContinent
      ? continents[selectedContinent]
      : null;
  const countryGroups = continent
    ? getDestinationsByContinentGrouped(continent.slug)
    : [];

  return (
    <div className="grid h-[420px] grid-cols-[180px_1fr]">
      <CommandList className="max-h-none border-r border-border p-2">
        <CommandGroup>
          {groups.map((g) => {
            const isActive = g.key === activeGroup;
            return (
              <CommandItem
                key={g.key}
                value={`group-${g.key}`}
                onSelect={() => onActiveGroupChange(g.key)}
                className={cn(
                  "justify-between font-heading text-base",
                  isActive && "bg-foreground/[0.04] text-foreground",
                )}
              >
                <span>{g.label}</span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>

      <CommandList className="max-h-none p-2">
        {continent ? (
          <ContinentDestinationsList
            continent={continent}
            countryGroups={countryGroups}
            onBack={() => onContinentSelect(null)}
            onSelect={onSelect}
          />
        ) : activeGroup === "continents" ? (
          <CommandGroup heading="Continents">
            {Object.values(continents).map((c) => (
              <CommandItem
                key={c.slug}
                value={`continent-${c.slug}`}
                onSelect={() => onContinentSelect(c.slug)}
                className="justify-between"
              >
                <span>{c.name}</span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </CommandItem>
            ))}
          </CommandGroup>
        ) : (
          <CommandGroup heading={active.label}>
            {active.items.map((item) => (
              <CommandItem
                key={`${active.key}-${item.href}`}
                value={`${active.key}-${item.label}`}
                onSelect={() => onSelect(item.href)}
              >
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </div>
  );
}

function ContinentDestinationsList({
  continent,
  countryGroups,
  onBack,
  onSelect,
}: {
  continent: { slug: string; name: string };
  countryGroups: DestinationCountryGroup[];
  onBack: () => void;
  onSelect: (href: string) => void;
}) {
  return (
    <>
      <CommandGroup>
        <CommandItem
          value={`back-${continent.slug}`}
          onSelect={onBack}
          className="text-muted-foreground"
        >
          <ChevronLeft className="size-4" />
          <span>Tous les continents</span>
        </CommandItem>
        <CommandItem
          value={`see-all-${continent.slug}`}
          onSelect={() => onSelect(`/continents/${continent.slug}`)}
        >
          <span>Voir tout {continent.name}</span>
        </CommandItem>
      </CommandGroup>

      {countryGroups.length === 0 ? (
        <p className="px-3 py-4 text-sm text-muted-foreground">
          Bientôt disponible.
        </p>
      ) : (
        countryGroups.map((g) => (
          <CommandGroup key={g.country} heading={g.country}>
            {g.destinations.map((d) => (
              <CommandItem
                key={d.slug}
                value={`destination-${d.slug}`}
                onSelect={() => onSelect(`/destinations/${d.slug}`)}
              >
                <span>{d.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        ))
      )}
    </>
  );
}

function SearchResults({ onSelect }: { onSelect: (href: string) => void }) {
  const grouped = new Map<EntityKind, typeof allTagged>();
  for (const tagged of allTagged) {
    const list = grouped.get(tagged.kind) ?? [];
    list.push(tagged);
    grouped.set(tagged.kind, list);
  }

  return (
    <CommandList className="max-h-[420px]">
      <CommandEmpty>Aucun résultat.</CommandEmpty>

      {KIND_ORDER.map((kind) => {
        const items = grouped.get(kind);
        if (!items?.length) return null;
        const Icon = KIND_ICON[kind];
        return (
          <CommandGroup key={kind} heading={KIND_LABEL[kind]}>
            {items.map(({ entity }) => (
              <CommandItem
                key={`${kind}-${entity.slug}`}
                value={`${entity.name} ${entity.slug}`}
                keywords={entity.keywords}
                onSelect={() => onSelect(entityRoute[kind](entity.slug))}
              >
                <Icon />
                <span className="flex flex-col">
                  <span className="text-foreground">{entity.name}</span>
                  {entity.blurb ? (
                    <span className="text-xs text-muted-foreground">
                      {entity.blurb}
                    </span>
                  ) : null}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        );
      })}
    </CommandList>
  );
}
