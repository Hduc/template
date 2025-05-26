<template>
  <DashboardCryptoTraderCryptoStatsPanel />

  <div class="row">
    <div class="col-xxxl-8">
      <DashboardCryptoTraderPriceMovementChart />
    </div>

    <div class="col-xxxl-4">
      <div class="row">
        <div class="col-md-6 col-xxxl-12">
          <DashboardCryptoTraderTradingVolumeChart />
        </div>

        <div class="col-md-6 col-xxxl-12">
          <DashboardCryptoTraderPortfolioDistributionChart />
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="row">
        <div class="col-lg-6">
          <DashboardCryptoTraderProfitLossChart />
        </div>

        <div class="col-lg-6">
          <DashboardCryptoTraderRiskExposureChart />
        </div>
      </div>

      <DashboardCryptoTraderRecentTransactions />
    </div>
    <div class="col-lg-4">
      <div class="row">
        <div class="col-lg-12">
          <DashboardCryptoTraderLivePriceTracker />
        </div>

        <div class="col-lg-12">
          <DashboardCryptoTraderTradesPerMonthChart />
        </div>
      </div>
    </div>

    <div class="col-xxl-4 col-md-6">
      <DashboardCryptoTraderAssetAllocationChart />
    </div>
    <div class="col-xxl-4 col-md-6">
      <DashboardCryptoTraderGainersLosers />
    </div>
    <div class="col-xxl-4">
      <DashboardCryptoTraderMarketSentimentIndicatorChart />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoTraderPage",
});
</script>
