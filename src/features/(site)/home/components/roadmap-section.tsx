import { PageContainer } from "@/components/layouts/(site)/page-container";
import {
  ROADMAP_PHASES,
  STATUS_LABELS,
  type RoadmapStatus,
} from "@/features/(site)/roadmap/constants";
import { cn } from "@/lib/utils";

import { SectionIntro } from "./section-intro";

const statusStyles: Record<RoadmapStatus, string> = {
  completed: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  "in-progress": "border-ice/40 bg-ice/10 text-ice-glow",
  upcoming: "border-slate-600/40 bg-slate-800/50 text-slate-400",
};

export function RoadmapSection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Where we're headed"
        left="OUR"
        right="ROADMAP"
        description="Launch and listings first. Rewards and games next. Open the full trail for every milestone."
        href="/roadmap"
        linkLabel="Full roadmap"
      />
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ROADMAP_PHASES.map((phase) => (
          <li
            key={phase.title}
            className="rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm sm:p-6"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="text-2xl" aria-hidden>
                {phase.emoji}
              </span>
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                  statusStyles[phase.status],
                )}
              >
                {STATUS_LABELS[phase.status]}
              </span>
            </div>
            <h3 className="mb-2 text-sm font-bold text-white sm:text-base">
              {phase.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
              {phase.description}
            </p>
          </li>
        ))}
      </ol>
    </PageContainer>
  );
}
