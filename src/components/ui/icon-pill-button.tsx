import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconPillButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
};

const baseClasses =
  "group/icon-pill inline-flex shrink-0 cursor-pointer items-center gap-3 rounded-full bg-background py-1.5 pl-4 pr-1.5 text-[14px] font-medium whitespace-nowrap text-foreground shadow-deep outline-none transition-[opacity,transform] select-none focus-visible:ring-3 focus-visible:ring-ring/50 hover:opacity-95 active:scale-[0.98]";

const iconBubbleClasses =
  "flex size-7 items-center justify-center rounded-full bg-foreground text-background [&_svg]:size-4 [&_svg]:[stroke-width:1.5]";

export function IconPillButton({
  children,
  href,
  onClick,
  type = "button",
  icon,
  ariaLabel,
  className,
}: IconPillButtonProps) {
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className={iconBubbleClasses}>
        {icon ?? <Plus />}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={cn(baseClasses, className)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(baseClasses, className)}
    >
      {inner}
    </button>
  );
}
