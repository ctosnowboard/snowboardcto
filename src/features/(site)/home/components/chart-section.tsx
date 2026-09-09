import { PageContainer } from "@/components/layouts/(site)/page-container";
import { DexChartEmbed } from "@/features/(site)/shared";

export function ChartSection() {
  return (
    <PageContainer className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          Live Chart
        </h2>
      </div>
      <div className="-mx-5 sm:mx-0">
        <DexChartEmbed />
      </div>
    </PageContainer>
  );
}
