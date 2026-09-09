import { getPostBySlug } from "@/features/(site)/community/constants";
import { SITE } from "@/features/(site)/shared";
import {
  createOgImage,
  OG_IMAGE_CONTENT_TYPE,
  OG_IMAGE_SIZE,
} from "@/lib/og-image";

export const alt = SITE.title;
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

type OgImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: OgImageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return createOgImage({
    title: post?.title ?? SITE.name,
    subtitle: post?.excerpt ?? SITE.tagline,
  });
}
