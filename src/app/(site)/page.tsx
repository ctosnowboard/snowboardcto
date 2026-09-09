import type { Metadata } from "next";

import HomePage from "@/features/(site)/home/components/home-page";
import { SITE } from "@/features/(site)/shared";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: SITE.title,
  description: SITE.description,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
