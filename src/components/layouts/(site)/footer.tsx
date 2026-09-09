import { PageContainer } from "@/components/layouts/(site)/page-container";
import { TelegramIcon } from "@/components/icons/telegram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { SITE, SOCIALS } from "@/features/(site)/shared";
import { cn } from "@/lib/utils";

const socialLinkClassName = cn(
  "inline-flex size-11 items-center justify-center rounded-full border border-ice/30 bg-surface/60 text-ice-glow transition",
  "hover:border-ice hover:bg-ice/10 hover:text-ice",
);

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ice/15 bg-surface/40 py-8 sm:py-10">
      <PageContainer className="flex flex-col items-center gap-5 text-center sm:gap-6">
        <div className="flex items-center justify-center gap-3">
          <a
            href={SOCIALS.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIALS.telegram.label}
            className={socialLinkClassName}
          >
            <TelegramIcon />
          </a>
          <a
            href={SOCIALS.x.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={SOCIALS.x.label}
            className={socialLinkClassName}
          >
            <XIcon />
          </a>
        </div>

        <p className="text-[11px] tracking-wide text-slate-500 sm:text-xs">
          {SITE.footer}
        </p>
        <p className="max-w-lg text-[11px] leading-relaxed text-slate-600 sm:text-xs">
          {SITE.disclaimer}
        </p>
        <p className="text-[11px] text-slate-700 sm:text-xs">
          © {new Date().getFullYear()} Snowboard CTO
        </p>
      </PageContainer>
    </footer>
  );
}
