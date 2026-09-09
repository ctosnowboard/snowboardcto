import Link from "next/link";

import { formatPostDate, type CommunityPost } from "../constants";

type PostCardProps = {
  post: CommunityPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/community/${post.slug}`} className="block h-full">
      <article className="post-card flex h-full flex-col rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-ice/30 bg-ice/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ice-glow">
            {post.tag}
          </span>
          <time
            dateTime={post.date}
            className="text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs"
          >
            {formatPostDate(post.date)}
          </time>
        </div>
        <h2 className="mb-3 text-base font-bold wrap-break-word text-white sm:text-lg">
          {post.title}
        </h2>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
          {post.excerpt}
        </p>
        <span className="text-xs font-semibold text-ice-glow">Read update →</span>
      </article>
    </Link>
  );
}
