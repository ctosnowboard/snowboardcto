"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-ice/20 bg-surface/80 backdrop-blur-sm"
          >
            <h3 className="m-0 text-inherit font-inherit">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-ice/5 sm:px-6 sm:py-5"
              >
                <span className="min-w-0 text-sm font-semibold text-white sm:text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-ice-glow transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm leading-relaxed text-slate-400 sm:px-6 sm:pb-5">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
