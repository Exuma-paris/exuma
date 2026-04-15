"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header({
  hideOnScroll = true,
  theme = "light",
}: {
  hideOnScroll?: boolean;
  theme?: "light" | "dark";
}) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    if (!hideOnScroll) {
      setScrolled(window.scrollY > 4);
      const onScroll = () => setScrolled(window.scrollY > 4);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const threshold = 8;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setScrolled(y > 4);

      if (y <= 4) {
        setHidden(false);
      } else if (delta > threshold) {
        setHidden(true);
      } else if (delta < -threshold) {
        setHidden(false);
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnScroll]);

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-50 w-full border-b border-border transition-[translate,background-color] duration-500 ease-in-out",
        theme === "dark" && "dark text-foreground",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled && !hidden
          ? "bg-background-subtle/90 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="grid w-full grid-cols-3 items-center px-6 py-5">
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            aria-label="Ouvrir le menu"
            className="-ml-3 size-11 before:inset-0 md:hidden"
          >
            <Menu className="size-5" />
          </Button>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex"
          >
            <Button variant="ghost" className="gap-2">
              <Menu className="size-4" />
              Menu
            </Button>
            <Button variant="ghost" className="gap-2">
              <Search className="size-4" />
              Rechercher
            </Button>
          </nav>
        </div>

        <div className="flex justify-center">
          <Link href="/" aria-label="Exuma — accueil" className="flex">
            <Logo className="h-6 w-auto md:h-7 lg:h-8" />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-6">
          <Button
            variant="ghost"
            aria-label="Rechercher"
            className="-mr-3 size-11 before:inset-0 md:hidden"
          >
            <Search className="size-5" />
          </Button>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden md:inline-flex",
            )}
          >
            Contactez-nous
          </Link>
          <Link
            href="/reserver"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "hidden md:inline-flex",
            )}
          >
            Créer votre voyage
          </Link>
        </div>
      </div>
    </header>
  );
}
