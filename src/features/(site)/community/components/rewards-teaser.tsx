import { TelegramIcon } from "@/components/icons/telegram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { OutlineButton, SOCIALS } from "@/features/(site)/shared";

import { REWARDS_TEASER } from "../constants";

export function RewardsTeaser() {
  return (
    <section className="rounded-2xl border border-ice/20 bg-surface/80 p-5 backdrop-blur-sm sm:p-8 lg:p-10">
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
      <h2 className="mb-3 text-xl font-bold wrap-break-word text-white sm:text-2xl">
        {REWARDS_TEASER.title}
      </h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        {REWARDS_TEASER.body}
      </p>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <OutlineButton href={SOCIALS.telegram.href}>
          <TelegramIcon className="size-4" />
          {SOCIALS.telegram.label}
        </OutlineButton>
        <OutlineButton href={SOCIALS.x.href}>
          <XIcon className="size-4" />
          {SOCIALS.x.label}
        </OutlineButton>
      </div>
    </section>
  );
}
