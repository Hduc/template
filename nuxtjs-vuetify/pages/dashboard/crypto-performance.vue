<template>
  <DashboardCryptoPerformanceBreadcrumb />

  <div class="row">
    <div class="col-lg-6">
      <DashboardCryptoPerformancePerInvestmentChart />
    </div>
    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <DashboardCryptoPerformancePortfolioValue />
        </div>
        <div class="col-lg-6 col-sm-6">
          <DashboardCryptoPerformanceCryptoMarketCap />
        </div>
      </div>
      <DashboardCryptoPerformanceTransactionsHistory />
    </div>

    <div class="col-lg-5">
      <DashboardCryptoPerformanceMarketPerformanceChart />
    </div>
    <div class="col-lg-7">
      <DashboardCryptoPerformanceMetricsChart />
    </div>

    <div class="col-lg-12">
      <DashboardCryptoPerformanceIndividualAssetPerformance />
    </div>

    <div class="col-lg-4">
      <DashboardCryptoPerformanceRiskStabilityIndicatorsChart />
    </div>
    <div class="col-lg-8">
      <DashboardCryptoPerformanceComparativeAnalysisChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoPerformancePage",
});
</script>
