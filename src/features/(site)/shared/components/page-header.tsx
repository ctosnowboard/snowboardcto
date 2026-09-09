import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ice/80 sm:mb-4 sm:tracking-[0.25em]">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-bold tracking-tight wrap-break-word text-white sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:mt-5 sm:text-base">
          {subtitle}
        </p>
      )}
    </header>
  );
}
