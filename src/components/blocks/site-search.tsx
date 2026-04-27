"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Compass,
  FileText,
  Home,
  MapPin,
  Mail,
  Sparkles,
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

type SearchItem = {
  label: string;
  description?: string;
  href: string;
  keywords?: string[];
  icon: React.ComponentType<{ className?: string }>;
};

type SearchGroup = {
  heading: string;
  items: SearchItem[];
};

const SEARCH_GROUPS: SearchGroup[] = [
  {
    heading: "Navigation",
    items: [
      {
        label: "Accueil",
        href: "/",
        icon: Home,
        keywords: ["home", "exuma"],
      },
      {
        label: "Créer votre voyage",
        description: "Commencez la conception de votre itinéraire sur-mesure",
        href: "/reserver",
        icon: Sparkles,
        keywords: ["réserver", "booking", "devis"],
      },
      {
        label: "Contactez-nous",
        href: "/contact",
        icon: Mail,
        keywords: ["contact", "email", "téléphone"],
      },
    ],
  },
  {
    heading: "Destinations",
    items: [
      {
        label: "Polynésie française",
        description: "Bora Bora, Tahiti, Taha'a, Moorea, les Marquises",
        href: "/destination",
        icon: MapPin,
        keywords: [
          "polynesie",
          "tahiti",
          "bora bora",
          "moorea",
          "tahaa",
          "marquises",
          "pacifique",
        ],
      },
      {
        label: "Corse",
        description: "Bonifacio, Calvi, Sartenais, Cap Corse, Lavezzi",
        href: "/destination/corse",
        icon: MapPin,
        keywords: [
          "corse",
          "bonifacio",
          "calvi",
          "corte",
          "bastia",
          "porto-vecchio",
          "cap corse",
          "lavezzi",
          "mediterranee",
          "ile de beaute",
        ],
      },
    ],
  },
  {
    heading: "Découvrir",
    items: [
      {
        label: "Nos hébergements",
        description: "The Brando, Le Taha'a, InterContinental Bora Bora",
        href: "/destination#hebergements",
        icon: Compass,
        keywords: ["hotels", "resort", "villa", "lodge"],
      },
      {
        label: "Coups de cœur",
        description: "Randonnée, sortie bateau, plongée avec les raies mantas",
        href: "/destination#coups-de-coeur",
        icon: Sparkles,
        keywords: ["activites", "experiences", "plongee", "randonnee"],
      },
      {
        label: "FAQ",
        href: "/#faq",
        icon: FileText,
        keywords: ["questions", "aide"],
      },
    ],
  },
];

export function SiteSearch({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

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

  const go = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="gap-0 p-0 sm:max-w-lg"
        aria-label="Rechercher sur Exuma"
      >
        <Command label="Rechercher sur Exuma">
          <CommandInput placeholder="Rechercher une destination, une page…" />
          <CommandList>
            <CommandEmpty>Aucun résultat.</CommandEmpty>
            {SEARCH_GROUPS.map((group) => (
              <CommandGroup key={group.heading} heading={group.heading}>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <CommandItem
                      key={item.href}
                      value={item.label}
                      keywords={item.keywords}
                      onSelect={() => go(item.href)}
                    >
                      <Icon />
                      <span className="flex flex-col">
                        <span className="text-foreground">{item.label}</span>
                        {item.description && (
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        )}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
