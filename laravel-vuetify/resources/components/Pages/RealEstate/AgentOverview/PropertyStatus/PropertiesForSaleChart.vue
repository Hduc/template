<template>
    <v-card class="trezo-card bg-white border rounded-3 mb-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <span
                class="d-inline-block border-success border bg-success bg-opacity-10 text-success rounded-pill fs-12 fw-medium px-2"
            >
                + 75%
            </span>
            <span class="text-body fs-12">Last 30 days</span>
        </div>
        <div class="row align-items-end">
            <div class="col-sm-6">
                <span class="text-body d-block mb-2">Properties for Sale</span>
                <h3 class="fs-20 mb-0">5,458</h3>
            </div>
            <div class="col-sm-6">
                <div style="margin: -36px 0 -36px 0">
                    <apexchart
                        v-if="isClient"
                        type="radialBar"
                        height="170"
                        :options="propertiesForSale"
                        :series="sale"
                    ></apexchart>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "PropertiesForSaleChart",
    setup() {
        const isClient = ref(false);
        const sale = ref([75]);
        const propertiesForSale = ref({
            chart: {
                height: 170,
                width: 170,
                type: "radialBar",
            },
            colors: ["#37D80A"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "35%",
                        background: "#F5F7F8",
                        margin: 10,
                    },
                    track: {
                        background: "#F5F7F8",
                    },
                    dataLabels: {
                        name: {
                            offsetY: -10,
                            color: "#4b9bfa",
                            fontSize: ".625rem",
                            show: false,
                        },
                        value: {
                            show: true,
                            offsetY: 5,
                            color: "#3A4252",
                            fontSize: "14px",
                            fontWeight: 700,
                            fontFamily: "Inter",
                        },
                    },
                },
            },
            stroke: {
                lineCap: "0",
            },
            labels: ["Status"],
        });

        onMounted(() => {
            isClient.value = true;
        });

        return {
            isClient,
            sale,
            propertiesForSale,
        };
    },
});
</script>

<style lang="scss" scoped>
.v-card {
    &.trezo-card {
        border: 1px solid #edeff5 !important;
    }
}
.bg-success {
    background-color: rgb(55 216 10 / 10%) !important;
}
.border-success {
    border-color: rgb(55 216 10) !important;
}
.mb-4 {
    margin-bottom: 1.5rem !important;
}
</style>
