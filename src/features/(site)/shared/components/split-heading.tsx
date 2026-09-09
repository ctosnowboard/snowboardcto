import { cn } from "@/lib/utils";

type SplitHeadingProps = {
  left: string;
  right: string;
  className?: string;
};

export function SplitHeading({ left, right, className }: SplitHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:justify-center sm:gap-4",
        className,
      )}
    >
      <span className="text-3xl font-bold tracking-tight text-slate-500 sm:text-4xl lg:text-5xl">
        {left}
      </span>
      <span className="ice-text-glow text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {right}
      </span>
    </div>
  );
}
