import type { Metadata } from "next";

import CommunityPage from "@/features/(site)/community/components/community-page";
import { SITE } from "@/features/(site)/shared";

export const metadata: Metadata = {
  title: `Community | ${SITE.name}`,
  description:
    "Community updates, announcements, and a first look at $SNOWBOARD holder rewards.",
};

export default function Page() {
  return <CommunityPage />;
}
