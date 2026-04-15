import Image from "next/image";
import { cn } from "@/lib/utils";

export type TestimonialCardProps = {
  quote: string;
  image: { src: string; alt: string };
  name: string;
  role?: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  image,
  name,
  role,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col gap-6 bg-background p-6 md:flex-row md:gap-8",
        className,
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 279 221"
        className="pointer-events-none absolute right-0 bottom-0 h-26 w-auto text-primary md:h-52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M119.892 1.00244L136.538 24.5034L136.852 24.9458L136.385 25.2222C101.168 46.0916 77.4247 67.2516 65.083 88.6841L65.084 88.6851C54.1087 108.197 48.2758 129.423 47.5898 152.373C56.2647 146.628 66.1984 143.754 77.3779 143.754C92.5065 143.754 105.036 148.691 114.929 158.578C125.484 168.474 130.755 181.34 130.755 197.131C130.755 212.932 125.152 226.121 113.951 236.664C102.746 247.209 88.2549 252.466 70.5234 252.466C49.4973 252.466 32.3838 244.903 19.2275 229.773L19.2197 229.764L19.2129 229.755C6.71932 213.974 0.500047 192.637 0.5 165.797C0.5 135.006 10.0012 105.209 28.9795 76.4146C47.9708 47.6003 78.0748 22.4166 119.251 0.848145L119.639 0.645996L119.892 1.00244ZM213.076 152.371C221.751 146.627 231.684 143.754 242.862 143.754C257.991 143.754 270.522 148.691 280.414 158.578L280.905 159.044C291.133 168.877 296.239 181.587 296.239 197.131C296.239 212.932 290.637 226.121 279.436 236.664C268.231 247.209 253.739 252.466 236.008 252.466C214.982 252.466 197.868 244.903 184.712 229.773L184.705 229.764L184.697 229.755C172.204 213.974 165.984 192.636 165.984 165.797C165.984 135.006 175.486 105.209 194.464 76.4146C213.455 47.6002 243.56 22.4167 284.736 0.848145L285.123 0.645996L285.376 1.00244L302.022 24.5034L302.336 24.9458L301.869 25.2222C266.649 46.0932 242.907 67.2557 230.566 88.6899L230.565 88.689C219.592 108.199 213.762 129.424 213.076 152.371Z"
          stroke="currentColor"
        />
      </svg>
      <div className="relative aspect-3/4 w-full shrink-0 overflow-hidden bg-muted md:w-[36%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 25vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 py-4">
        <p className="w-full font-heading text-[20px] leading-[140%] tracking-[-0.5px] text-foreground md:text-[24px] md:leading-9">
          {quote}
        </p>
        <div className="flex flex-col gap-0.5">
          <p className="text-foreground">{name}</p>
          {role ? (
            <p className="text-[13px] text-secondary-foreground">{role}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
