import { PageContainer } from "@/components/layouts/(site)/page-container";
import { ABOUT_STORY } from "@/features/(site)/about/constants";
import { ASSETS, ArtFrame } from "@/features/(site)/shared";

import { SectionIntro } from "./section-intro";

export function AboutSection() {
  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Our story"
        left="ABOUT"
        right="$SNOWBOARD"
        description="A community takeover on BSC rebellious, fun, and always sending it."
        href="/about"
        linkLabel="Read the full story"
      />
      <div className="grid items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
        <section className="rounded-2xl border border-ice/20 bg-surface/80 p-6 backdrop-blur-sm sm:p-8">
          <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
            {ABOUT_STORY.headline}
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {ABOUT_STORY.paragraphs[0]}
          </p>
        </section>
        <ArtFrame
          src={ASSETS.art.boardRidge}
          alt="Snowboard on BSC planted on a snowy mountain ridge at sunrise"
          fill
          className="h-full min-h-64"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </PageContainer>
  );
}
