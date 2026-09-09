import Link from "next/link";

import { PageContainer } from "@/components/layouts/(site)/page-container";
import { PageHeader } from "@/features/(site)/shared";

export default function CommunityPostNotFound() {
  return (
    <div className="py-16 sm:py-20">
      <PageContainer width="narrow" className="text-center">
        <PageHeader
          eyebrow="404"
          title="Update not found"
          subtitle="That post has melted. It may have been renamed, or it never existed."
        />
        <Link
          href="/community"
          className="mt-8 inline-flex text-sm font-semibold text-ice-glow transition hover:text-ice"
        >
          ← Back to Community
        </Link>
      </PageContainer>
    </div>
  );
}
