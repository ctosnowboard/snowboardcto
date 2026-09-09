import { cn } from "@/lib/utils";

type SplitHeadingProps = {
  left: string;
  right: string;
  className?: string;
  as?: "div" | "h1" | "h2";
};

export function SplitHeading({
  left,
  right,
  className,
  as: Tag = "div",
}: SplitHeadingProps) {
  return (
    <Tag
      className={cn(
        "flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:justify-center sm:gap-4",
        className,
      )}
    >
      <span className="text-2xl font-bold tracking-tight text-slate-500 sm:text-4xl lg:text-5xl">
        {left}
      </span>
      <span className="ice-text-glow text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {right}
      </span>
    </Tag>
  );
}
