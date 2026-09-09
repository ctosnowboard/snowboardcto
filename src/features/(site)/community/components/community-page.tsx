import { PageContainer } from "@/components/layouts/(site)/page-container";
import {
  ArtFrame,
  MarqueeBand,
  PageHeader,
  SITE,
  SplitHeading,
} from "@/features/(site)/shared";
import { cn } from "@/lib/utils";

import { COMMUNITY_GALLERY, COMMUNITY_POSTS } from "../constants";
import { PostCard } from "./post-card";
import { RewardsTeaser } from "./rewards-teaser";

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      <MarqueeBand />

      <div className="space-y-16 py-12 sm:space-y-20 sm:py-16 lg:space-y-24 lg:py-20">
        <PageContainer width="narrow">
          <PageHeader
            eyebrow="Lodge Notes"
            title="Community"
            subtitle="Updates from the mountain — announcements, stories, and a first look at holder rewards."
          />
        </PageContainer>

        <PageContainer>
          <RewardsTeaser />
        </PageContainer>

        <PageContainer>
          <section className="space-y-8">
            <div className="text-center">
              <SplitHeading left="MEME" right="WALL" as="h2" />
              <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
                Send it energy from the lodge. Share it, screenshot it, keep the
                mountain loud.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {COMMUNITY_GALLERY.map((art) => (
                <li
                  key={art.src}
                  className={cn(art.span === "full" && "sm:col-span-2")}
                >
                  <ArtFrame
                    src={art.src}
                    alt={art.alt}
                    sizes={
                      art.span === "full"
                        ? "(max-width: 1024px) 100vw, 1100px"
                        : "(max-width: 640px) 100vw, 50vw"
                    }
                  />
                </li>
              ))}
            </ul>
          </section>
        </PageContainer>

        <PageContainer>
          <section className="space-y-8">
            <div className="text-center">
              <SplitHeading left="LATEST" right="UPDATES" as="h2" />
              <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
                Short posts. No fluff. Always verify news here or in official
                Telegram and X.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {COMMUNITY_POSTS.map((post) => (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </section>
        </PageContainer>

        <PageContainer width="narrow">
          <p className="text-center text-xs text-slate-500">{SITE.disclaimer}</p>
        </PageContainer>
      </div>
    </div>
  );
}
