import { PageContainer } from "@/components/layouts/(site)/page-container";
import { StatusBadge } from "@/features/(site)/roadmap/components/status-badge";
import { ROADMAP_PHASES } from "@/features/(site)/roadmap/constants";

import { SectionIntro } from "./section-intro";

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
            className="min-w-0 rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm sm:p-6"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="text-2xl" aria-hidden>
                {phase.emoji}
              </span>
              <StatusBadge status={phase.status} className="shrink-0" />
            </div>
            <h3 className="mb-2 text-sm font-bold wrap-break-word text-white sm:text-base">
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
