import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import CommunityPostPage from "@/features/(site)/community/components/post-page";
import {
  COMMUNITY_POSTS,
  getPostBySlug,
} from "@/features/(site)/community/constants";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

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
    return {
      title: "Update not found",
      robots: { index: false, follow: false },
    };
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/community/${post.slug}`,
    ogType: "article",
    publishedTime: post.date,
  });
}

export default async function Page({ params }: CommunitySlugPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const path = `/community/${post.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Community", path: "/community" },
          { name: post.title, path },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path,
          date: post.date,
        })}
      />
      <CommunityPostPage post={post} />
    </>
  );
}
