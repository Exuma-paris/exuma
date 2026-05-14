import {
  CloudRaining03,
  FaceContent,
  FaceFrown,
  FaceNeutral,
  FaceSmile,
  Sun,
} from "@untitledui-pro/icons/solid";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type IndicatorVariant =
  | "happy-max"
  | "good"
  | "neutral"
  | "sad"
  | "sunny"
  | "rainy";

type Config = {
  Icon: IconComponent;
  color: string;
  iconClass: string;
  withPill: boolean;
};

const VARIANTS: Record<IndicatorVariant, Config> = {
  "happy-max": {
    Icon: FaceContent,
    color: "text-[#33B06F]",
    iconClass: "size-4",
    withPill: false,
  },
  good: {
    Icon: FaceSmile,
    color: "text-[#88B033]",
    iconClass: "size-4",
    withPill: false,
  },
  neutral: {
    Icon: FaceNeutral,
    color: "text-secondary-foreground",
    iconClass: "size-4",
    withPill: false,
  },
  sad: {
    Icon: FaceFrown,
    color: "text-[#FF5864]",
    iconClass: "size-4",
    withPill: false,
  },
  sunny: {
    Icon: Sun,
    color: "text-[#F59E0C]",
    iconClass: "size-3",
    withPill: true,
  },
  rainy: {
    Icon: CloudRaining03,
    color: "text-[#436EFB]",
    iconClass: "size-3",
    withPill: true,
  },
};

export type IndicatorProps = {
  variant: IndicatorVariant;
  className?: string;
};

export function Indicator({ variant, className }: IndicatorProps) {
  const { Icon, color, iconClass, withPill } = VARIANTS[variant];
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        withPill && "bg-background-soft p-1",
        color,
        className,
      )}
    >
      <Icon className={iconClass} />
    </span>
  );
}
