<template>
    <v-card
        class="top-shipping-methods-card trezo-card border-radius d-block border-0 shadow-none"
    >
        <span class="fs-14 d-block mb-4">Top Shipping Methods</span>
        <div style="margin: -7px 0 -13px 0">
            <apexchart
                v-if="isClient"
                type="pie"
                height="180"
                :options="topShippingMethods"
                :series="methods"
            ></apexchart>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "TopShippingMethodsChart",
    setup() {
        const isClient = ref(false);
        const methods = ref([45, 30, 15, 10]);
        const topShippingMethods = ref({
            chart: {
                height: 180,
                type: "pie",
            },
            labels: ["Air", "Road", "Sea", "Rail"],
            colors: ["#3584FC", "#FD5812", "#605DFF", "#37D80A"],
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: "10px",
                    fontFamily: "Inter",
                    colors: ["#fff"],
                },
                dropShadow: {
                    enabled: true,
                    top: 0,
                    left: 0,
                    blur: 0,
                    color: "#000",
                    opacity: 0,
                },
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                },
            },
            stroke: {
                width: 1,
                show: true,
                colors: ["#ffffff"],
            },
            legend: {
                show: true,
                position: "right",
                fontSize: "12px",
                horizontalAlign: "bottom",
                offsetX: -12,
                offsetY: 0,
                itemMargin: {
                    horizontal: 0,
                    vertical: 4,
                },
                labels: {
                    colors: "#64748B",
                },
                markers: {
                    width: 9,
                    height: 9,
                    shape: "diamond",
                    offsetX: -1,
                },
            },
        });

        onMounted(() => {
            isClient.value = true;
        });

        return {
            isClient,
            methods,
            topShippingMethods,
        };
    },
});
</script>
