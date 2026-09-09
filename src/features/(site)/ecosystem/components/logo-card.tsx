import { cn } from "@/lib/utils";

type LogoCardProps = {
  name: string;
  href?: string;
  live?: boolean;
  logo?: string;
};

function initials(name: string) {
  const parts = name.replace(/\$/g, "").split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

export function LogoCard({ name, href, live = true, logo }: LogoCardProps) {
  const card = (
    <div
      className={cn(
        "partner-card flex h-full flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-5 text-center",
        live
          ? "border-ice/20 bg-surface/80"
          : "cursor-not-allowed border-ice/10 bg-surface/40 opacity-70",
      )}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt=""
          className="size-12 object-contain"
        />
      ) : (
        <span
          aria-hidden
          className={cn(
            "flex size-12 items-center justify-center rounded-xl border text-sm font-bold tracking-wide",
            live
              ? "border-ice/30 bg-ice/10 text-ice-glow"
              : "border-slate-700 bg-slate-900 text-slate-500",
          )}
        >
          {initials(name)}
        </span>
      )}
      <span
        className={cn(
          "text-xs font-semibold leading-tight sm:text-sm",
          live ? "text-white" : "text-slate-500",
        )}
      >
        {name}
      </span>
      {!live && (
        <span className="text-[9px] font-medium uppercase tracking-wider text-slate-600">
          Soon
        </span>
      )}
    </div>
  );

  if (!live || !href) {
    return (
      <div aria-disabled className="h-full">
        {card}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {card}
    </a>
  );
}
