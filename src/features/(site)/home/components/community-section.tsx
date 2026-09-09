import { PageContainer } from "@/components/layouts/(site)/page-container";
import { PostCard } from "@/features/(site)/community/components/post-card";
import {
  COMMUNITY_POSTS,
  REWARDS_TEASER,
} from "@/features/(site)/community/constants";

import { SectionIntro } from "./section-intro";

export function CommunitySection() {
  const posts = COMMUNITY_POSTS.slice(0, 2);

  return (
    <PageContainer className="space-y-8">
      <SectionIntro
        eyebrow="Lodge notes"
        left="THE"
        right="COMMUNITY"
        description="Updates, stories, and a first look at holder rewards. The full feed lives on Community."
        href="/community"
        linkLabel="All updates"
      />
      <div className="rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm sm:p-6">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-ice-glow">
          {REWARDS_TEASER.badge}
        </p>
        <p className="text-sm font-semibold text-white sm:text-base">
          {REWARDS_TEASER.emoji} {REWARDS_TEASER.title}
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
