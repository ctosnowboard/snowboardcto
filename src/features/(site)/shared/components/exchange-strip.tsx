import { PageContainer } from "@/components/layouts/(site)/page-container";
import { cn } from "@/lib/utils";

import { EXCHANGES } from "../constants";

function ExchangeCard({
  name,
  live,
  soon,
}: {
  name: string;
  live: boolean;
  soon?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex min-h-18 w-[7.25rem] shrink-0 flex-col items-center justify-center gap-1 rounded-xl border px-3 py-3 text-center transition sm:min-h-20 sm:w-32 lg:w-full",
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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ice/80 sm:tracking-[0.3em]">
        Trade on
      </p>

      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:px-0 sm:gap-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 xl:grid-cols-6">
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
              <div
                key={exchange.name}
                aria-disabled
                className="cursor-not-allowed lg:w-full lg:min-w-0"
              >
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
              className="block shrink-0 transition active:scale-[0.98] lg:w-full lg:min-w-0 lg:hover:scale-[1.02]"
            >
              {card}
            </a>
          );
        })}
      </div>
    </PageContainer>
  );
}
