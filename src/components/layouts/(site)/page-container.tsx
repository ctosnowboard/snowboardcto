import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
};

const widthClasses = {
  default: "max-w-5xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
} as const;

export function PageContainer({
  children,
  className,
  width = "default",
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-10",
        widthClasses[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
