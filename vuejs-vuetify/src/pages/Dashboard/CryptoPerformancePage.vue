<template>
  <Breadcrumb />

  <div class="row">
    <div class="col-lg-6">
      <PerformancePerInvestmentChart />
    </div>
    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <PortfolioValue />
        </div>
        <div class="col-lg-6 col-sm-6">
          <CryptoMarketCap />
        </div>
      </div>
      <TransactionsHistory />
    </div>

    <div class="col-lg-5">
      <MarketPerformanceChart />
    </div>
    <div class="col-lg-7">
      <PerformanceMetricsChart />
    </div>

    <div class="col-lg-12">
      <IndividualAssetPerformance />
    </div>

    <div class="col-lg-4">
      <RiskStabilityIndicatorsChart />
    </div>
    <div class="col-lg-8">
      <ComparativeAnalysisChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "../../components/Dashboard/CryptoPerformance/Breadcrumb.vue";
import PerformancePerInvestmentChart from "../../components/Dashboard/CryptoPerformance/PerformancePerInvestmentChart.vue";
import PortfolioValue from "../../components/Dashboard/CryptoPerformance/PortfolioValue.vue";
import CryptoMarketCap from "../../components/Dashboard/CryptoPerformance/CryptoMarketCap.vue";
import TransactionsHistory from "../../components/Dashboard/CryptoPerformance/TransactionsHistory.vue";
import MarketPerformanceChart from "../../components/Dashboard/CryptoPerformance/MarketPerformanceChart.vue";
import PerformanceMetricsChart from "../../components/Dashboard/CryptoPerformance/PerformanceMetricsChart.vue";
import IndividualAssetPerformance from "../../components/Dashboard/CryptoPerformance/IndividualAssetPerformance.vue";
import RiskStabilityIndicatorsChart from "../../components/Dashboard/CryptoPerformance/RiskStabilityIndicatorsChart.vue";
import ComparativeAnalysisChart from "../../components/Dashboard/CryptoPerformance/ComparativeAnalysisChart.vue";

export default defineComponent({
  name: "CryptoPerformancePage",
  components: {
    Breadcrumb,
    PerformancePerInvestmentChart,
    PortfolioValue,
    CryptoMarketCap,
    TransactionsHistory,
    MarketPerformanceChart,
    PerformanceMetricsChart,
    IndividualAssetPerformance,
    RiskStabilityIndicatorsChart,
    ComparativeAnalysisChart,
  },
});
</script>
