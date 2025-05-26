<template>
  <CryptoStatsPanel />

  <div class="row">
    <div class="col-xxxl-8">
      <PriceMovementChart />
    </div>

    <div class="col-xxxl-4">
      <div class="row">
        <div class="col-md-6 col-xxxl-12">
          <TradingVolumeChart />
        </div>

        <div class="col-md-6 col-xxxl-12">
          <PortfolioDistributionChart />
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="row">
        <div class="col-lg-6">
          <ProfitLossChart />
        </div>

        <div class="col-lg-6">
          <RiskExposureChart />
        </div>
      </div>

      <RecentTransactions />
    </div>
    <div class="col-lg-4">
      <div class="row">
        <div class="col-lg-12">
          <LivePriceTracker />
        </div>

        <div class="col-lg-12">
          <TradesPerMonthChart />
        </div>
      </div>
    </div>

    <div class="col-xxl-4 col-md-6">
      <AssetAllocationChart />
    </div>
    <div class="col-xxl-4 col-md-6">
      <GainersLosers />
    </div>
    <div class="col-xxl-4">
      <MarketSentimentIndicatorChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CryptoStatsPanel from "../../components/Dashboard/CryptoTrader/CryptoStatsPanel.vue";
import PriceMovementChart from "../../components/Dashboard/CryptoTrader/PriceMovementChart.vue";
import TradingVolumeChart from "../../components/Dashboard/CryptoTrader/TradingVolumeChart.vue";
import PortfolioDistributionChart from "../../components/Dashboard/CryptoTrader/PortfolioDistributionChart.vue";
import ProfitLossChart from "../../components/Dashboard/CryptoTrader/ProfitLossChart.vue";
import RiskExposureChart from "../../components/Dashboard/CryptoTrader/RiskExposureChart.vue";
import RecentTransactions from "../../components/Dashboard/CryptoTrader/RecentTransactions.vue";
import LivePriceTracker from "../../components/Dashboard/CryptoTrader/LivePriceTracker.vue";
import TradesPerMonthChart from "../../components/Dashboard/CryptoTrader/TradesPerMonthChart.vue";
import AssetAllocationChart from "../../components/Dashboard/CryptoTrader/AssetAllocationChart.vue";
import GainersLosers from "../../components/Dashboard/CryptoTrader/GainersLosers.vue";
import MarketSentimentIndicatorChart from "../../components/Dashboard/CryptoTrader/MarketSentimentIndicatorChart.vue";

export default defineComponent({
  name: "CryptoTraderPage",
  components: {
    CryptoStatsPanel,
    PriceMovementChart,
    TradingVolumeChart,
    PortfolioDistributionChart,
    ProfitLossChart,
    RiskExposureChart,
    RecentTransactions,
    LivePriceTracker,
    TradesPerMonthChart,
    AssetAllocationChart,
    GainersLosers,
    MarketSentimentIndicatorChart,
  },
});
</script>
