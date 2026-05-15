"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { continents } from "@/lib/content/registry";
import {
  getDestinationsByContinentGrouped,
  type DestinationCountryGroup,
  type DestinationWithRegions,
} from "@/lib/content/queries";
import { getMenuGroups, type MenuGroupKey } from "@/lib/content/menu-groups";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubKey = MenuGroupKey;

const rowClass =
  "flex w-full items-center justify-between py-4 text-left font-heading text-h4 text-foreground transition-colors hover:text-primary";

type MenuRowProps = {
  label: string;
} & (
  | { as: "button"; onClick: () => void }
  | { as: "link"; href: string; onClick?: () => void }
);

function MenuRow(props: MenuRowProps) {
  if (props.as === "link") {
    return (
      <Link href={props.href} onClick={props.onClick} className={rowClass}>
        <span>{props.label}</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={rowClass}>
      <span>{props.label}</span>
      <ChevronRight className="size-6 stroke-[1.5] text-secondary-foreground" />
    </button>
  );
}

function MenuRowList({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 flex flex-col">{children}</ul>;
}

type Group = ReturnType<typeof getMenuGroups>[number];

export function MenuPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const groups = getMenuGroups();
  const [activeKey, setActiveKey] = useState<SubKey | null>(null);
  const [activeContinentSlug, setActiveContinentSlug] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setActiveKey(null);
        setActiveContinentSlug(null);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const activeGroup = groups.find((g) => g.key === activeKey) ?? null;
  const activeContinent = activeContinentSlug
    ? continents[activeContinentSlug]
    : null;

  const depth = activeContinent ? 2 : activeKey ? 1 : 0;

  const close = () => onOpenChange(false);
  const goBack = () => {
    if (depth === 2) setActiveContinentSlug(null);
    else if (depth === 1) setActiveKey(null);
  };

  const continentCountryGroups = activeContinent
    ? getDestinationsByContinentGrouped(activeContinent.slug)
    : [];

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-foreground/30 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 data-open:duration-300 data-closed:duration-200" />
        <DialogPrimitive.Popup
          aria-label="Menu principal"
          className="fixed inset-y-0 left-0 z-50 flex w-full max-w-[400px] flex-col overflow-hidden bg-background text-foreground shadow-deep outline-none data-open:animate-in data-open:slide-in-from-left data-closed:animate-out data-closed:slide-out-to-left data-open:duration-300 data-closed:duration-200"
        >
          <header className="flex items-center justify-between px-6 py-5">
            <DialogPrimitive.Title className="sr-only">
              Menu
            </DialogPrimitive.Title>
            {depth > 0 ? (
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label="Retour"
                onClick={goBack}
                className="-ml-2"
              >
                <ChevronLeft className="size-6 stroke-[1.5]" />
              </Button>
            ) : (
              <span className="font-heading text-h4">Menu</span>
            )}
            <DialogPrimitive.Close
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Fermer le menu"
                  className="-mr-2"
                />
              }
            >
              <X className="size-6 stroke-[1.5]" />
            </DialogPrimitive.Close>
          </header>

          <div className="relative flex-1 overflow-hidden">
            <div
              className={cn(
                "flex h-full w-[300%] transition-transform duration-300 ease-in-out",
                depth === 0 && "translate-x-0",
                depth === 1 && "-translate-x-1/3",
                depth === 2 && "-translate-x-2/3",
              )}
            >
              <RootView
                groups={groups}
                onSelect={(key) => setActiveKey(key)}
              />
              <SubView
                group={activeGroup}
                onContinentSelect={(slug) => setActiveContinentSlug(slug)}
                onNavigate={close}
              />
              <ContinentView
                continent={activeContinent}
                countryGroups={continentCountryGroups}
                onNavigate={close}
              />
            </div>
          </div>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function RootView({
  groups,
  onSelect,
}: {
  groups: Group[];
  onSelect: (key: SubKey) => void;
}) {
  return (
    <nav
      aria-label="Sections principales"
      className="h-full w-1/3 shrink-0 overflow-y-auto px-6 py-8"
    >
      <ul className="flex flex-col">
        {groups.map((g) => (
          <li key={g.key}>
            <MenuRow as="button" label={g.label} onClick={() => onSelect(g.key)} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SubView({
  group,
  onContinentSelect,
  onNavigate,
}: {
  group: Group | null;
  onContinentSelect: (slug: string) => void;
  onNavigate: () => void;
}) {
  return (
    <div className="h-full w-1/3 shrink-0 overflow-y-auto px-6 py-8">
      {group ? (
        <>
          {group.key === "continents" ? (
            <MenuRowList>
              {Object.values(continents).map((c) => (
                <li key={c.slug}>
                  <MenuRow
                    as="button"
                    label={c.name}
                    onClick={() => onContinentSelect(c.slug)}
                  />
                </li>
              ))}
            </MenuRowList>
          ) : (
            <MenuRowList>
              {group.items.map((item) => (
                <li key={item.href}>
                  <MenuRow
                    as="link"
                    label={item.label}
                    href={item.href}
                    onClick={onNavigate}
                  />
                </li>
              ))}
            </MenuRowList>
          )}
        </>
      ) : null}
    </div>
  );
}

function DestinationRow({
  destination,
  onNavigate,
}: {
  destination: DestinationWithRegions;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasRegions = destination.regions.length > 0;

  return (
    <li className="flex flex-col">
      <div className="flex items-center">
        <Link
          href={`/destinations/${destination.slug}`}
          onClick={onNavigate}
          className={cn(rowClass, "flex-1")}
        >
          <span>{destination.name}</span>
        </Link>
        {hasRegions && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Masquer les régions" : "Voir les régions"}
            className="ml-2 flex size-8 shrink-0 items-center justify-center text-secondary-foreground transition-colors hover:text-primary"
          >
            <ChevronRight
              className={cn(
                "size-4 stroke-[1.5] transition-transform duration-200",
                open && "rotate-90",
              )}
            />
          </button>
        )}
      </div>
      {hasRegions && open && (
        <ul className="mb-2 flex flex-col pl-4">
          {destination.regions.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/destinations/${r.slug}`}
                onClick={onNavigate}
                className="flex w-full items-center py-2 text-left text-sm text-secondary-foreground transition-colors hover:text-primary"
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function ContinentView({
  continent,
  countryGroups,
  onNavigate,
}: {
  continent: { slug: string; name: string } | null;
  countryGroups: DestinationCountryGroup[];
  onNavigate: () => void;
}) {
  const isEmpty = countryGroups.length === 0;

  return (
    <div className="h-full w-1/3 shrink-0 overflow-y-auto px-6 py-8">
      {continent ? (
        <>
          <ul className="flex flex-col">
            <li>
              <MenuRow
                as="link"
                label={`Voir tout ${continent.name}`}
                href={`/continents/${continent.slug}`}
                onClick={onNavigate}
              />
            </li>
          </ul>

          {isEmpty ? (
            <p className="mt-6 text-secondary-foreground">
              Bientôt disponible, contactez-nous pour explorer ce continent
              dès aujourd'hui.
            </p>
          ) : (
            <div className="mt-6 flex flex-col gap-1">
              {countryGroups.map((g) => {
                const showLabel = g.destinations.length > 1;
                return (
                <div key={g.country} className="flex flex-col">
                  {showLabel && (
                    <p className="text-eyebrow text-secondary-foreground">
                      {g.country}
                    </p>
                  )}
                  <ul className={cn("flex flex-col", showLabel && "mt-2")}>
                    {g.destinations.map((d) => (
                      <DestinationRow
                        key={d.slug}
                        destination={d}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </ul>
                </div>
                );
              })}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
