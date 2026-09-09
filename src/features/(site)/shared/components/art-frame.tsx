import Image from "next/image";

import { cn } from "@/lib/utils";

type ArtFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
};

export function ArtFrame({
  src,
  alt,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 900px",
  priority,
  fill = false,
}: ArtFrameProps) {
  return (
    <figure
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-ice/20 bg-surface/80",
        fill && "relative",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : 1600}
        height={fill ? undefined : 1600}
        sizes={sizes}
        priority={priority}
        className={cn(fill ? "object-cover" : "h-auto w-full object-cover", imageClassName)}
      />
    </figure>
  );
}
