import { cn } from "@/lib/utils";

type OutlineButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function OutlineButton({
  href,
  children,
  className,
  external = true,
}: OutlineButtonProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={cn(
        "inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full border border-ice/40 bg-surface/60 px-5 text-sm font-semibold text-ice-glow backdrop-blur-sm transition",
        "hover:border-ice hover:bg-ice/10 sm:h-12 sm:w-auto sm:min-w-40 sm:px-6",
        className,
      )}
    >
      {children}
    </a>
  );
}
