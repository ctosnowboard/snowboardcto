import Link from "next/link";

import { PageContainer } from "@/components/layouts/(site)/page-container";
import { MarqueeBand, SITE } from "@/features/(site)/shared";

import { formatPostDate, type CommunityPost } from "../constants";

type CommunityPostPageProps = {
  post: CommunityPost;
};

export default function CommunityPostPage({ post }: CommunityPostPageProps) {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <MarqueeBand />

      <div className="space-y-10 py-12 sm:space-y-12 sm:py-16 lg:py-20">
        <PageContainer width="narrow">
          <Link
            href="/community"
            className="mb-8 inline-flex text-sm font-semibold text-ice-glow transition hover:text-ice"
          >
            ← Back to Community
          </Link>

          <article>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-ice/30 bg-ice/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ice-glow">
                {post.tag}
              </span>
              <time
                dateTime={post.date}
                className="text-xs font-medium uppercase tracking-wider text-slate-500"
              >
                {formatPostDate(post.date)}
              </time>
            </div>

            <h1 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>

            <div className="space-y-4">
              {post.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-sm leading-relaxed text-slate-300 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </PageContainer>

        <PageContainer width="narrow">
          <p className="text-center text-xs text-slate-500">{SITE.disclaimer}</p>
        </PageContainer>
      </div>
    </div>
  );
}
