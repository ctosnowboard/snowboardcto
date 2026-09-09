import Link from "next/link";

import { SplitHeading } from "@/features/(site)/shared";

type SectionIntroProps = {
  eyebrow?: string;
  left: string;
  right: string;
  description?: string;
  href?: string;
  linkLabel?: string;
};

export function SectionIntro({
  eyebrow,
  left,
  right,
  description,
  href,
  linkLabel,
}: SectionIntroProps) {
  return (
    <div className="text-center">
      {eyebrow ? (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ice/80 sm:tracking-[0.25em]">
          {eyebrow}
        </p>
      ) : null}
      <SplitHeading left={left} right={right} as="h2" />
      {description ? (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:mt-5 sm:text-base">
          {description}
        </p>
      ) : null}
      {href && linkLabel ? (
        <Link
          href={href}
          className="mt-4 inline-flex text-sm font-semibold text-ice-glow transition hover:text-ice"
        >
          {linkLabel} →
        </Link>
      ) : null}
    </div>
  );
}
