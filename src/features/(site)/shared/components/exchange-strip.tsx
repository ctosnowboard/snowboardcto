import { PageContainer } from "@/components/layouts/(site)/page-container";
import { cn } from "@/lib/utils";

import { EXCHANGES } from "../constants";

function ExchangeCard({
  name,
  live,
  soon,
  compact,
}: {
  name: string;
  live: boolean;
  soon?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-xl border px-3 py-3 text-center transition",
        compact
          ? "min-h-18 w-[7.25rem] shrink-0 sm:w-[8rem] lg:w-full lg:min-h-20"
          : "min-h-20 w-full",
        live
          ? "border-ice/30 bg-surface/80 hover:border-ice/60 hover:bg-ice/5"
          : "border-ice/10 bg-surface/40 opacity-70",
      )}
    >
      <span
        className={cn(
          "text-[11px] font-semibold leading-tight sm:text-xs",
          live ? "text-ice-glow" : "text-slate-500",
        )}
      >
        {name}
      </span>
      {soon && (
        <span className="text-[9px] font-medium uppercase tracking-wider text-slate-600">
          Soon
        </span>
      )}
    </div>
  );
}

export function ExchangeStrip() {
  return (
    <PageContainer className="space-y-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ice/80 sm:tracking-[0.3em]">
        Trade on
      </p>

      {/* Mobile & tablet: horizontal scroll carousel */}
      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide sm:gap-4 lg:hidden">
        {EXCHANGES.map((exchange) => {
          const card = (
            <ExchangeCard
              name={exchange.name}
              live={exchange.live}
              soon={!exchange.live}
              compact
            />
          );

          if (!exchange.live) {
            return (
              <div key={exchange.name} aria-disabled className="cursor-not-allowed">
                {card}
              </div>
            );
          }

          return (
            <a
              key={exchange.name}
              href={exchange.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block shrink-0 transition active:scale-[0.98]"
            >
              {card}
            </a>
          );
        })}
      </div>

      {/* Desktop: grid */}
      <div className="hidden gap-3 lg:grid lg:grid-cols-3 xl:grid-cols-6">
        {EXCHANGES.map((exchange) => {
          const card = (
            <ExchangeCard
              name={exchange.name}
              live={exchange.live}
              soon={!exchange.live}
            />
          );

          if (!exchange.live) {
            return (
              <div key={exchange.name} aria-disabled className="cursor-not-allowed">
                {card}
              </div>
            );
          }

          return (
            <a
              key={exchange.name}
              href={exchange.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:scale-[1.02]"
            >
              {card}
            </a>
          );
        })}
      </div>
    </PageContainer>
  );
}
