import { cn } from "@/lib/utils";

import { LINKS, SITE } from "../constants";

type BuyButtonProps = {
  className?: string;
  size?: "default" | "sm";
  compact?: boolean;
};

export function BuyButton({
  className,
  size = "default",
  compact = false,
}: BuyButtonProps) {
  const label = compact ? "Buy" : `Buy ${SITE.name}`;

  return (
    <a
      href={LINKS.buy}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-ice-bright font-semibold text-background transition hover:bg-ice-glow",
        size === "default" && "h-11 px-5 text-sm sm:h-12 sm:px-6",
        size === "sm" && "h-9 px-3 text-xs sm:px-4",
        className,
      )}
    >
      {label}
    </a>
  );
}
