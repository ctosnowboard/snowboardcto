import { cn } from "@/lib/utils";

import {
  STATUS_LABELS,
  STATUS_STYLES,
  type RoadmapStatus,
} from "../constants";

type StatusBadgeProps = {
  status: RoadmapStatus;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider sm:text-xs",
        STATUS_STYLES[status],
        className,
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
