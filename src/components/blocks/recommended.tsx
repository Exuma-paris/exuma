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
  // Not "recommandée par" : none of these bodies recommends anyone. Les
  // Entreprises du Voyage is a federation we belong to, Takumians a network,
  // IATA an accreditation. Naming the relationship correctly is also the
  // stronger claim, since it is a verifiable one.
  title = "Membre et accrédité",
  logos = defaultLogos,
  className,
}: {
  title?: string;
  logos?: Logo[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {title ? <p className="text-secondary-foreground">{title}</p> : null}
      <ul className="flex flex-nowrap items-center gap-x-6">
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
