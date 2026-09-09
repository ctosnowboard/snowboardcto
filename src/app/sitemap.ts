import type { MetadataRoute } from "next";

import { COMMUNITY_POSTS } from "@/features/(site)/community/constants";
import { SITE_URL } from "@/features/(site)/shared";

const staticPages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/ecosystem", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/roadmap", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/community", changeFrequency: "weekly" as const, priority: 0.8 },
];

const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
  url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
  lastModified: new Date(),
  changeFrequency: route.changeFrequency,
  priority: route.priority,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = COMMUNITY_POSTS.map((post) => ({
    url: `${SITE_URL}/community/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
