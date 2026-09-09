import { SAFU } from "../constants";

export function SafuBanner() {
  const badges = [
    `${SAFU.tax} TAX`,
    SAFU.liquidityLocked ? "LP LOCKED" : "LP TBD",
    SAFU.renounced ? "RENOUNCED" : "RENOUNCED TBD",
    SAFU.chain,
  ];

  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:hidden">
        {badges.map((badge) => (
          <span
            key={badge}
            className="shrink-0 rounded-full border border-ice/40 bg-surface/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ice-glow"
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Tablet+ : wrap */}
      <div className="hidden flex-wrap items-center justify-center gap-2 sm:flex sm:gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-ice/40 bg-surface/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ice-glow"
          >
            {badge}
          </span>
        ))}
      </div>
    </>
  );
}
