<template>
    <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Basic Area Chart</h5>
        </div>
        <div class="chart">
            <apexchart
                v-if="isClient"
                type="area"
                height="350"
                :options="basicArea"
                :series="basic"
            ></apexchart>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { series } from "./data";

export default defineComponent({
    name: "BasicAreaChart",
    setup() {
        const isClient = ref(false);
        const basic = ref([
            {
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices,
            },
        ]);
        const basicArea = ref({
            chart: {
                type: "area",
                height: 350,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#605DFF"],
            stroke: {
                curve: "straight",
            },
            title: {
                text: "Fundamental Analysis of Stocks",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#64748B",
                },
            },
            subtitle: {
                text: "Price Movements",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: "normal",
                    fontSize: "13px",
                    color: "#64748B",
                },
            },
            labels: series.monthDataSeries1.dates,
            xaxis: {
                type: "datetime",
                axisTicks: {
                    show: false,
                    color: "#ECEEF2",
                },
                axisBorder: {
                    show: false,
                    color: "#ECEEF2",
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px",
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2",
            },
            yaxis: {
                opposite: true,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px",
                    },
                },
                axisBorder: {
                    show: false,
                    color: "#ECEEF2",
                },
                axisTicks: {
                    show: false,
                    color: "#ECEEF2",
                },
            },
        });

        onMounted(() => {
            isClient.value = true;
        });

        return {
            isClient,
            basic,
            basicArea,
        };
    },
});
</script>

<style lang="scss" scoped>
.chart {
    margin-bottom: -20px !important;
}
</style>
