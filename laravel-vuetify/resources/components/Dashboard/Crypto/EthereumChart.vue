<template>
    <apexchart
        type="area"
        height="120"
        :options="ethereumChart"
        :series="ethereum"
    ></apexchart>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "EthereumChart",
    setup() {
        const ethereum = ref([
            {
                name: "Price",
                data: [90, 130, 140, 110, 120, 95, 85, 170],
            },
        ]);
        const ethereumChart = ref({
            chart: {
                type: "area",
                height: 120,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
                width: 2,
            },
            colors: ["#AD63F6"],
            fill: {
                type: "gradient",
                gradient: {
                    stops: [0, 90, 100],
                    shadeIntensity: 1,
                    opacityFrom: 0.5,
                    opacityTo: 0.9,
                },
            },
            xaxis: {
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                    "08 Jan",
                ],
                axisTicks: {
                    show: false,
                    color: "#ECEEF2",
                },
                axisBorder: {
                    show: false,
                    color: "#ECEEF2",
                },
                labels: {
                    show: false,
                    style: {
                        colors: "#8695AA",
                        fontSize: "12px",
                    },
                },
            },
            yaxis: {
                tickAmount: 5,
                show: false,
                max: 170,
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px",
                    },
                    formatter: (val) => {
                        return "$" + val + "K";
                    },
                },
                axisBorder: {
                    show: true,
                    color: "#ECEEF2",
                },
                axisTicks: {
                    show: true,
                    color: "#ECEEF2",
                },
            },
            grid: {
                show: false,
                borderColor: "#ECEEF2",
            },
            legend: {
                show: true,
                position: "top",
                fontSize: "12px",
                horizontalAlign: "center",
                itemMargin: {
                    horizontal: 8,
                    vertical: 0,
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
        });

        return {
            ethereum,
            ethereumChart,
        };
    },
});
</script>
