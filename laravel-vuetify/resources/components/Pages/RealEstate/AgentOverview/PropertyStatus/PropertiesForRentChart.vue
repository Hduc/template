<template>
    <v-card class="trezo-card bg-white border rounded-3 mb-4">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <span
                class="d-inline-block border-success border bg-success bg-opacity-10 text-success rounded-pill fs-12 fw-medium px-2"
            >
                + 35%
            </span>
            <span class="text-body fs-12">Last 30 days</span>
        </div>
        <div class="row align-items-end">
            <div class="col-sm-6">
                <span class="text-body d-block mb-2">Properties for Rent</span>
                <h3 class="fs-20 mb-0">2,510</h3>
            </div>
            <div class="col-sm-6">
                <div style="margin: -36px 0 -36px 0">
                    <apexchart
                        v-if="isClient"
                        type="radialBar"
                        height="170"
                        :options="propertiesForRent"
                        :series="rent"
                    ></apexchart>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "PropertiesForRentChart",
    setup() {
        const isClient = ref(false);
        const rent = ref([35]);
        const propertiesForRent = ref({
            chart: {
                height: 170,
                width: 170,
                type: "radialBar",
            },
            colors: ["#605DFF"],
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
            rent,
            propertiesForRent,
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
.mb-4 {
    margin-bottom: 1.5rem !important;
}
</style>
