<template>
    <v-card
        class="net-profit-card trezo-card border-radius d-block border-0 shadow-none"
    >
        <div class="d-flex justify-content-between flex-wrap ga-2 mb-4">
            <div>
                <div class="d-flex align-items-center">
                    <span>Net Profit</span>
                    <span
                        class="d-inline-block px-2 bg-success bg-opacity-10 text-success border border-success rounded-pill fs-12 fw-medium ms-2"
                    >
                        +7.6%
                    </span>
                </div>
                <h3 class="fs-20 mt-1 mb-0">$42,458</h3>
            </div>
            <span class="fs-12">Last 7 days</span>
        </div>
        <div style="margin: -24px -20px -28px -18px">
            <apexchart
                v-if="isClient"
                type="bar"
                height="168"
                :options="netProfit"
                :series="profit"
            ></apexchart>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "NetProfitChart",
    setup() {
        const isClient = ref(false);
        const profit = ref([
            {
                name: "Net Profit",
                data: [30, 70, 80, 95, 90, 20, 40],
            },
        ]);
        const netProfit = ref({
            chart: {
                type: "bar",
                height: 168,
                toolbar: {
                    show: false,
                },
            },
            colors: ["#37D80A"],
            plotOptions: {
                bar: {
                    columnWidth: "30%",
                    rangeBarOverlap: false,
                    isFunnel3d: false,
                    colors: {
                        ranges: [
                            {
                                from: 0,
                                to: 0,
                                color: undefined,
                            },
                        ],
                        backgroundBarColors: ["#37D80A"],
                        backgroundBarOpacity: 0.2,
                        backgroundBarRadius: 0,
                    },
                },
            },
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: [0, 100, 100, 100],
                },
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 0,
                show: true,
                colors: ["transparent"],
            },
            xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
            yaxis: {
                tickAmount: 4,
                max: 100,
                min: 0,
                labels: {
                    style: {
                        colors: "#64748B",
                        fontSize: "12px",
                    },
                    formatter: (val) => {
                        return "$" + val + "";
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
            tooltip: {
                y: {
                    formatter: (val) => {
                        return "$" + val + "K";
                    },
                },
            },
            legend: {
                show: true,
                position: "top",
                fontSize: "12px",
                horizontalAlign: "left",
                itemMargin: {
                    horizontal: 8,
                    vertical: 0,
                },
                labels: {
                    colors: "#64748B",
                },
                markers: {
                    width: 9,
                    height: 9,
                    offsetX: -2,
                    offsetY: -0.5,
                    radius: 2,
                    shape: "diamond",
                },
            },
        });

        onMounted(() => {
            isClient.value = true;
        });

        return {
            isClient,
            profit,
            netProfit,
        };
    },
});
</script>

<style lang="scss" scoped>
.net-profit-card {
    .bg-success {
        background-color: rgb(55 216 10 / 10%) !important;
    }
}
</style>
