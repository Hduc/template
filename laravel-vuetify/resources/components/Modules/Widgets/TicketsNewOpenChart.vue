<template>
    <v-card
        class="tickets-new-open-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="new-open-card-content">
            <span class="d-block"> Tickets New Open </span>
            <h5 class="mb-0">3.25k</h5>
            <div class="chart">
                <apexchart
                    v-if="isClient"
                    type="area"
                    height="130"
                    :options="ticketsNewOpen"
                    :series="newOpen"
                ></apexchart>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
                <span class="d-block"> This Month </span>
                <span class="lh-1 text-success">
                    <i class="material-symbols-outlined"> trending_up </i>
                </span>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "TicketsNewOpenChart",
    setup() {
        const isClient = ref(false);
        const newOpen = ref([
            {
                name: "Tickets New Open",
                data: [40, 55, 35, 85, 50, 85, 95],
            },
        ]);
        const ticketsNewOpen = ref({
            chart: {
                type: "area",
                height: 130,
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
            colors: ["#37D80A"],
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
                max: 100,
                min: 0,
                labels: {
                    show: true,
                    style: {
                        colors: "#64748B",
                        fontSize: "12px",
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
                    width: 9,
                    height: 9,
                    offsetX: -2,
                    offsetY: -0.5,
                    radius: 2,
                },
            },
        });

        onMounted(() => {
            isClient.value = true;
        });

        return {
            isClient,
            newOpen,
            ticketsNewOpen,
        };
    },
});
</script>

<style lang="scss" scoped>
.tickets-new-open-card {
    .new-open-card-content {
        h5 {
            font-size: 20px;
            margin-top: 5px;
        }
        .chart {
            margin: {
                top: -12px;
                bottom: -15px;
            }
        }
        .info {
            span {
                font-size: 13px;

                i {
                    font-size: 20px;
                }
            }
        }
    }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .tickets-new-open-card {
        .new-open-card-content {
            h5 {
                font-size: 18px;
            }
        }
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .tickets-new-open-card {
        .new-open-card-content {
            h5 {
                font-size: 19px;
            }
            .chart {
                margin-top: -15px;
            }
        }
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .tickets-new-open-card {
        .new-open-card-content {
            .chart {
                margin: {
                    top: -30px;
                    bottom: -20px;
                }
            }
        }
    }
}

/* Min width 1200px to Max width 1399px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .tickets-new-open-card {
        .new-open-card-content {
            .chart {
                margin: {
                    top: -30px;
                    bottom: -20px;
                }
            }
        }
    }
}

/* Min width 1600px */
@media only screen and (min-width: 1600px) {
}
</style>
