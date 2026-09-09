import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CommunityPostPage from "@/features/(site)/community/components/post-page";
import {
  COMMUNITY_POSTS,
  getPostBySlug,
} from "@/features/(site)/community/constants";
import { SITE } from "@/features/(site)/shared";

type CommunitySlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return COMMUNITY_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: CommunitySlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: `Update not found | ${SITE.name}` };
  }

  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt,
  };
}

export default async function Page({ params }: CommunitySlugPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <CommunityPostPage post={post} />;
}
