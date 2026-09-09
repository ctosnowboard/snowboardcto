"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import {
  PARTNER_FILTERS,
  PARTNERS,
  type PartnerFilter,
} from "../constants";
import { LogoCard } from "./logo-card";

export function PartnerGrid() {
  const [filter, setFilter] = useState<PartnerFilter>("All");

  const partners = useMemo(() => {
    if (filter === "All") return PARTNERS;
    if (filter === "Featured") {
      return PARTNERS.filter((partner) => partner.featured);
    }
    return PARTNERS.filter((partner) => partner.categories.includes(filter));
  }, [filter]);

  return (
    <div>
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:mb-8 sm:flex-wrap sm:overflow-visible">
        {PARTNER_FILTERS.map((tab) => {
          const active = filter === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              aria-pressed={active}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition sm:px-4",
                active
                  ? "border-ice/50 bg-ice/15 text-ice-glow"
                  : "border-ice/20 bg-surface/60 text-slate-400 hover:border-ice/40 hover:text-ice-glow",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
        {partners.map((partner) => (
          <li key={partner.name} className="min-w-0">
            <LogoCard
              name={partner.name}
              href={partner.href}
              live={partner.live}
              logo={partner.logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
