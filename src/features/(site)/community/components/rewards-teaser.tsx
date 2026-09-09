import { TelegramIcon } from "@/components/icons/telegram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { SOCIALS } from "@/features/(site)/shared";
import { cn } from "@/lib/utils";

import { REWARDS_TEASER } from "../constants";

const ctaClassName = cn(
  "inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full border border-ice/40 bg-surface/60 px-5 text-sm font-semibold text-ice-glow backdrop-blur-sm transition",
  "hover:border-ice hover:bg-ice/10 sm:w-auto sm:min-w-40",
);

export function RewardsTeaser() {
  return (
    <section className="rounded-2xl border border-ice/20 bg-surface/80 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <span
          aria-hidden
          className="flex size-12 items-center justify-center rounded-2xl border border-ice/30 bg-ice/10 text-2xl"
        >
          {REWARDS_TEASER.emoji}
        </span>
        <span className="rounded-full border border-ice/40 bg-ice/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ice-glow">
          {REWARDS_TEASER.badge}
        </span>
      </div>
      <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
        {REWARDS_TEASER.title}
      </h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        {REWARDS_TEASER.body}
      </p>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <a
          href={SOCIALS.telegram.href}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClassName}
        >
          <TelegramIcon className="size-4" />
          {SOCIALS.telegram.label}
        </a>
        <a
          href={SOCIALS.x.href}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaClassName}
        >
          <XIcon className="size-4" />
          {SOCIALS.x.label}
        </a>
      </div>
    </section>
  );
}
