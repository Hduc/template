<template>
  <v-card
    class="asset-allocation-card trezo-card border-radius d-block bg-white border-0 shadow-none"
  >
    <div class="v-card-header">
      <h5 class="mb-0">Asset Allocation</h5>
      <div class="trezo-card-subtitle">Last 30 Days</div>
    </div>

    <div class="trezo-card-content">
      <span class="d-block"> Total Value </span>
      <h5 class="mb-0">$17,485</h5>

      <div class="chart">
        <apexchart
          v-if="isClient"
          type="pie"
          height="230"
          :options="assetAllocation"
          :series="allocation"
        ></apexchart>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AssetAllocationChart",
  setup() {
    const isClient = ref(false);
    const allocation = ref([30, 25, 20, 15, 10]);
    const assetAllocation = ref({
      chart: {
        height: 230,
        type: "pie",
      },
      labels: ["BTC 30%", "ETH 25%", "USDC 20%", "ADA 15%", "SHIB 10%"],
      colors: ["#605DFF", "#757DFF", "#9CAAFF", "#C2CDFF", "#DDE4FF"],
      legend: {
        show: true,
        fontSize: "12px",
        position: "bottom",
        horizontalAlign: "center",
        itemMargin: {
          horizontal: 8,
          vertical: 8,
        },
        labels: {
          colors: "#64748B",
        },
        markers: {
          size: 7,
          offsetX: -2,
          offsetY: -0.5,
          shape: "diamond",
        },
      },
      dataLabels: {
        enabled: false,
      },
    });

    onMounted(() => {
      isClient.value = true;
    });

    return {
      isClient,
      allocation,
      assetAllocation,
    };
  },
});
</script>

<style scoped lang="scss">
.asset-allocation-card {
  .trezo-card-content {
    h5 {
      font-size: 20px;
      margin-top: 5px;
    }
  }
}
</style>
