<template>
    <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Data Labels Column Chart</h5>
        </div>
        <div class="chart">
            <apexchart
                v-if="isClient"
                type="bar"
                height="350"
                :options="dataLabelsColumn"
                :series="dataLabels"
            ></apexchart>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "DataLabelsColumnChart",
    setup() {
        const isClient = ref(false);
        const dataLabels = ref([
            {
                name: "Inflation",
                data: [
                    2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2,
                ],
            },
        ]);
        const dataLabelsColumn = ref({
            chart: {
                height: 350,
                type: "bar",
                toolbar: {
                    show: true,
                },
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: "top", // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -25,
                style: {
                    fontSize: "12px",
                    colors: ["#304758"],
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                position: "bottom",
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
                crosshairs: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        },
                    },
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35,
                },
            },
            colors: ["#605DFF"],
            yaxis: {
                axisBorder: {
                    show: false,
                    color: "#ECEEF2",
                },
                axisTicks: {
                    show: false,
                    color: "#ECEEF2",
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    },
                    style: {
                        colors: "#64748B",
                        fontSize: "12px",
                    },
                },
            },
            title: {
                text: "Monthly Inflation in Brazil, 2024",
                align: "left",
                offsetX: -9,
                style: {
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#64748B",
                },
            },
            grid: {
                show: true,
                borderColor: "#ECEEF2",
            },
        });

        onMounted(() => {
            isClient.value = true;
        });

        return {
            isClient,
            dataLabels,
            dataLabelsColumn,
        };
    },
});
</script>

<style lang="scss" scoped>
.chart {
    margin-bottom: -20px !important;
}
</style>
