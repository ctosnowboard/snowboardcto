import { TelegramIcon } from "@/components/icons/telegram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { PageContainer } from "@/components/layouts/(site)/page-container";
import {
  ASSETS,
  ArtFrame,
  FaqAccordion,
  MarqueeBand,
  PageHeader,
  SITE,
  SOCIALS,
} from "@/features/(site)/shared";
import { cn } from "@/lib/utils";

import { ABOUT_STORY, FAQ_ITEMS } from "../constants";

const ctaClassName = cn(
  "inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full border border-ice/40 bg-surface/60 px-6 text-sm font-semibold text-ice-glow backdrop-blur-sm transition",
  "hover:border-ice hover:bg-ice/10 sm:w-auto sm:min-w-44",
);

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <MarqueeBand />

      <div className="space-y-16 py-12 sm:space-y-20 sm:py-16 lg:space-y-24 lg:py-20">
        <PageContainer width="narrow">
          <PageHeader
            eyebrow="Our Story"
            title="About $SNOWBOARD"
            subtitle="The community takeover that sent it from day one."
          />
        </PageContainer>

        <PageContainer>
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <section className="rounded-2xl border border-ice/20 bg-surface/80 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
              <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">
                {ABOUT_STORY.headline}
              </h2>
              <div className="space-y-4">
                {ABOUT_STORY.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-sm leading-relaxed text-slate-300 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
            <ArtFrame
              src={ASSETS.art.alienJourney}
              alt="How far the community travelled to reach Snowboard on BSC"
              fill
              className="h-full min-h-80"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </PageContainer>

        <PageContainer>
          <ArtFrame
            src={ASSETS.art.penguinDiscipline}
            alt="Discipline today, success tomorrow — no reward without risk"
            sizes="(max-width: 1024px) 100vw, 1100px"
          />
        </PageContainer>

        <PageContainer width="narrow">
          <section className="text-center">
            <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              Join the Movement
            </h2>
            <p className="mb-8 text-sm text-slate-400 sm:text-base">
              Daily updates, pure vibes, and a community that actually rides
              together.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={SOCIALS.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClassName}
              >
                <TelegramIcon className="size-4" />
                {SOCIALS.telegram.label}
              </a>
              <a
                href={SOCIALS.x.href}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClassName}
              >
                <XIcon className="size-4" />
                {SOCIALS.x.label}
              </a>
            </div>
          </section>
        </PageContainer>

        <PageContainer width="narrow">
          <section id="faq">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ice/80">
                Got Questions?
              </p>
              <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                FAQ
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} />
          </section>
        </PageContainer>

        <PageContainer width="narrow">
          <p className="text-center text-xs text-slate-500">
            {SITE.disclaimer}
          </p>
        </PageContainer>
      </div>
    </div>
  );
}
