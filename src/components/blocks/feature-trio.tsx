import { cn } from "@/lib/utils";

export type FeatureTrioItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export type FeatureTrioProps = {
  items: FeatureTrioItem[];
  theme?: "light" | "dark";
  className?: string;
};

export function FeatureTrio({
  items,
  theme = "light",
  className,
}: FeatureTrioProps) {
  const isDark = theme === "dark";
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3",
        className,
      )}
    >
      {items.map((item, i) => (
        <li key={i} className="flex flex-col gap-3">
          <div
            className={cn(
              "flex items-center gap-2.5",
              isDark ? "text-background" : "text-foreground",
            )}
          >
            <span className="[&>svg]:size-4">{item.icon}</span>
            <h3 className="text-[15px]">{item.title}</h3>
          </div>
          <p
            className={cn(
              "text-[14px] leading-[1.6]",
              isDark
                ? "text-background/70"
                : "text-secondary-foreground",
            )}
          >
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
