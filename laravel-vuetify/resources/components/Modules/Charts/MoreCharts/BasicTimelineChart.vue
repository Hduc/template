<template>
    <v-card
        class="trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="v-card-header">
            <h5 class="mb-0">Basic Timeline Chart</h5>
        </div>
        <div class="chart">
            <apexchart
                type="rangeBar"
                height="350"
                :options="timelineChart"
                :series="timeline"
            ></apexchart>
        </div>
    </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "BasicTimelineChart",
    setup() {
        const timeline = [
            {
                data: [
                    {
                        x: "Code",
                        y: [
                            new Date("2019-03-02").getTime(),
                            new Date("2019-03-04").getTime(),
                        ],
                    },
                    {
                        x: "Test",
                        y: [
                            new Date("2019-03-04").getTime(),
                            new Date("2019-03-08").getTime(),
                        ],
                    },
                    {
                        x: "Validation",
                        y: [
                            new Date("2019-03-08").getTime(),
                            new Date("2019-03-12").getTime(),
                        ],
                    },
                    {
                        x: "Deployment",
                        y: [
                            new Date("2019-03-12").getTime(),
                            new Date("2019-03-18").getTime(),
                        ],
                    },
                ],
            },
        ];
        const timelineChart = {
            chart: { height: 350, type: "rangeBar", toolbar: { show: false } },
            plotOptions: { bar: { horizontal: true } },
            xaxis: {
                type: "datetime",
                axisTicks: { show: false, color: "#ECEEF2" },
                axisBorder: { show: false, color: "#ECEEF2" },
                labels: {
                    show: true,
                    style: { colors: "#8695AA", fontSize: "12px" },
                },
            },
            yaxis: {
                labels: {
                    show: true,
                    style: { colors: "#64748B", fontSize: "12px" },
                },
                axisBorder: { show: false, color: "#ECEEF2" },
                axisTicks: { show: false, color: "#ECEEF2" },
            },
            grid: { show: true, borderColor: "#ECEEF2" },
            colors: ["#605DFF"],
        };

        return {
            timeline,
            timelineChart,
        };
    },
});
</script>

<style lang="scss" scoped>
.chart {
    margin-bottom: -20px !important;
}
</style>
