import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-ice/80">
        404
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-sm text-slate-400 sm:text-base">
        That trail melted. Head back to the lodge and pick another run.
      </p>
      <Link
        href="/"
        className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full border border-ice/40 bg-surface/60 px-6 text-sm font-semibold text-ice-glow transition hover:border-ice hover:bg-ice/10"
      >
        Back to home
      </Link>
    </div>
  );
}
