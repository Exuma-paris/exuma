import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

const eyebrowTones = {
  primary: "text-primary",
  foreground: "text-foreground",
} as const;

export function TextBlock({
  eyebrow,
  eyebrowTone = "primary",
  heading,
  headingLevel = "h2",
  headingSize,
  paragraph,
  cta,
  align = "left",
  mdAlign,
  className,
}: {
  eyebrow?: string;
  eyebrowTone?: keyof typeof eyebrowTones;
  heading: string;
  headingLevel?: HeadingLevel;
  headingSize?: HeadingLevel;
  paragraph?: string;
  cta?: React.ReactNode;
  align?: "left" | "center";
  mdAlign?: "left" | "center";
  className?: string;
}) {
  const Heading = headingLevel;
  const sizeToken = headingSize ?? headingLevel;
  const baseAlign =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const mdAlignClasses =
    mdAlign === undefined
      ? ""
      : mdAlign === "center"
        ? "md:items-center md:text-center"
        : "md:items-start md:text-left";
  const baseInner = align === "center" ? "items-center" : "items-start";
  const mdInner =
    mdAlign === undefined
      ? ""
      : mdAlign === "center"
        ? "md:items-center"
        : "md:items-start";
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        baseAlign,
        mdAlignClasses,
        className,
      )}
    >
      <div className={cn("flex flex-col gap-3", baseInner, mdInner)}>
        {eyebrow ? (
          <p className={`text-eyebrow ${eyebrowTones[eyebrowTone]}`}>
            {eyebrow}
          </p>
        ) : null}
        <Heading className={`text-${sizeToken} max-w-180`}>
          {heading}
        </Heading>
        {paragraph ? (
          <p className="max-w-120 text-secondary-foreground">{paragraph}</p>
        ) : null}
      </div>
      {cta ? <div>{cta}</div> : null}
    </div>
  );
}
