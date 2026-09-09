import { PageContainer } from "@/components/layouts/(site)/page-container";
import { ASSETS, ArtFrame, MarqueeBand, SplitHeading } from "@/features/(site)/shared";

import { ROADMAP_PHASES } from "../constants";
import { StatusBadge } from "./status-badge";

export default function RoadmapPage() {
  return (
    <div className="flex flex-col">
      <MarqueeBand />

      <div className="space-y-12 py-12 sm:space-y-16 sm:py-16 lg:space-y-20 lg:py-20">
        <PageContainer>
          <div className="text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-ice/80 sm:mb-8 sm:tracking-[0.25em]">
              Where We&apos;re Headed
            </p>
            <SplitHeading left="OUR" right="ROADMAP" as="h1" />
            <p className="mx-auto mt-6 max-w-xl text-sm text-slate-400 sm:mt-8 sm:text-base">
              Listed and tracked today. Next listings unlock with market cap.
              Rewards and games come after — we send it together.
            </p>
          </div>
        </PageContainer>

        <PageContainer>
          <ArtFrame
            src={ASSETS.art.destinationMoon}
            alt="Dream, build, launch — destination moon on the Snowboard hoverboard"
            sizes="(max-width: 1024px) 100vw, 1100px"
            priority
          />
        </PageContainer>

        <PageContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(16rem,20rem)] lg:gap-12">
            <div className="relative min-w-0">
              <div
                aria-hidden
                className="absolute top-0 bottom-0 left-5 w-px bg-linear-to-b from-ice/40 via-ice/20 to-transparent sm:left-8"
              />

              <ol className="flex flex-col gap-8 sm:gap-10">
                {ROADMAP_PHASES.map((phase, index) => (
                  <li
                    key={phase.title}
                    className="relative pl-14 sm:pl-20"
                  >
                    <div
                      aria-hidden
                      className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-2xl border border-ice/30 bg-surface text-xl sm:size-14 sm:text-3xl"
                    >
                      {phase.emoji}
                    </div>

                    <div className="rounded-2xl border border-ice/20 bg-surface/80 p-4 backdrop-blur-sm sm:p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                        <h2 className="text-base font-bold wrap-break-word text-white sm:text-lg">
                          {phase.title}
                        </h2>
                        <StatusBadge status={phase.status} />
                      </div>

                      <p className="mb-4 text-sm text-slate-400">
                        {phase.description}
                      </p>

                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            {phase.status === "completed" ? (
                              <span
                                className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-xs text-emerald-400"
                                aria-hidden
                              >
                                ✓
                              </span>
                            ) : (
                              <span
                                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ice/60"
                                aria-hidden
                              />
                            )}
                            <span className="min-w-0 wrap-break-word">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {index < ROADMAP_PHASES.length - 1 && (
                      <div
                        aria-hidden
                        className="absolute -bottom-5 left-5 h-5 w-px bg-ice/20 sm:-bottom-6 sm:left-8 sm:h-6"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <ArtFrame
                  src={ASSETS.art.summitClimb}
                  alt="The crew climbing toward Snowboard on BSC at the summit"
                  sizes="320px"
                />
              </div>
            </aside>
          </div>
        </PageContainer>

        <PageContainer>
          <div className="flex justify-center lg:hidden">
            <ArtFrame
              src={ASSETS.art.summitClimb}
              alt="The crew climbing toward Snowboard on BSC at the summit"
              className="w-full max-w-md"
              sizes="(max-width: 1024px) 100vw, 28rem"
            />
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
