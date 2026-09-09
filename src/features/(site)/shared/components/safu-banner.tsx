import { SAFU } from "../constants";

export function SafuBanner() {
  const badges = [
    `${SAFU.tax} TAX`,
    SAFU.liquidityLocked ? "LP LOCKED" : "LP TBD",
    SAFU.renounced ? "RENOUNCED" : "RENOUNCED TBD",
    SAFU.chain,
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:flex-wrap sm:items-center sm:justify-center sm:overflow-visible sm:pb-0 sm:gap-3">
      {badges.map((badge) => (
        <span
          key={badge}
          className="shrink-0 rounded-full border border-ice/40 bg-surface/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-ice-glow sm:px-4 sm:text-xs"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
