import { MARQUEE_ITEMS } from "../constants";

export function MarqueeBand() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-ice/20 bg-surface/60 py-2.5 sm:py-3">
      <div className="marquee-track flex w-max gap-6 sm:gap-8">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-ice-glow/90 sm:text-sm sm:tracking-[0.25em]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
