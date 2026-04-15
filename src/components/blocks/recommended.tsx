import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const defaultLogos: Logo[] = [
  {
    src: "/logos/logo-les-entreprises-du-voyage.png",
    alt: "Les Entreprises du Voyage",
    width: 160,
    height: 48,
  },
  {
    src: "/logos/logo-takumians.png",
    alt: "Takumians — Member Travel Designer",
    width: 160,
    height: 48,
  },
  {
    src: "/logos/logo-iata.png",
    alt: "IATA",
    width: 96,
    height: 48,
  },
];

export function Recommended({
  title = "Agence recommandée par",
  logos = defaultLogos,
  className,
}: {
  title?: string;
  logos?: Logo[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <p className="text-secondary-foreground">{title}</p>
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8">
        {logos.map((logo) => (
          <li key={logo.src}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
