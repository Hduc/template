<template>
    <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Stacked Area Chart</h5>
        </div>
        <div class="chart">
            <apexchart
                v-if="isClient"
                type="area"
                height="350"
                :options="stackedArea"
                :series="stacked"
            ></apexchart>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { generateDayWiseTimeSeries } from "../../../../utils/index";

export default defineComponent({
    name: "StackedAreaChart",
    setup() {
        const isClient = ref(false);
        const stacked = ref([
            {
                name: "South",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    {
                        min: 10,
                        max: 60,
                    }
                ),
            },
            {
                name: "North",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    {
                        min: 10,
                        max: 20,
                    }
                ),
            },
            {
                name: "Central",
                data: generateDayWiseTimeSeries(
                    new Date("11 Feb 2017 GMT").getTime(),
                    20,
                    {
                        min: 10,
                        max: 15,
                    }
                ),
            },
        ]);
        const stackedArea = ref({
            chart: {
                type: "area",
                height: 350,
                stacked: true,
                events: {
                    selection: function (_chart, e) {
                        console.log(new Date(e.xaxis.min));
                    },
                },
                toolbar: {
                    show: true,
                },
            },
            colors: ["#605DFF", "#0f79f3", "#00cae3"],
            dataLabels: {
                enabled: false,
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8,
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
                },
            },
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
            yaxis: {
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
            grid: {
                borderColor: "#ECEEF2",
            },
        });

        onMounted(() => {
            isClient.value = true;
        });

        return {
            isClient,
            stacked,
            stackedArea,
        };
    },
});
</script>

<style lang="scss" scoped>
.chart {
    margin: {
        left: -13px;
        bottom: -20px !important;
    }
}
</style>
