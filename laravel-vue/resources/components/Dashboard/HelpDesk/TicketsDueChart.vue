<template>
    <v-card
        class="tickets-due-card trezo-card border-radius d-block bg-white border-0 shadow-none"
    >
        <div class="due-card-content">
            <span class="d-block text-body"> Tickets Due </span>
            <h5 class="mb-0">980</h5>
            <div class="chart">
                <apexchart
                    type="area"
                    height="130"
                    :options="ticketsDue"
                    :series="due"
                ></apexchart>
            </div>
            <div class="info d-flex align-items-center justify-space-between">
                <span class="d-block text-body"> This Month </span>
                <span class="lh-1 text-danger">
                    <i class="material-symbols-outlined"> trending_down </i>
                </span>
            </div>
        </div>
    </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
    name: "TicketsDueChart",
    setup() {
        const due = ref([
            {
                name: "Tickets Due",
                data: [35, 70, 40, 65, 45, 70, 65],
            },
        ]);
        const ticketsDue = ref({
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

        return {
            due,
            ticketsDue,
        };
    },
});
</script>

<style lang="scss" scoped>
.tickets-due-card {
    .due-card-content {
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
    .tickets-due-card {
        .due-card-content {
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
    .tickets-due-card {
        .due-card-content {
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
    .tickets-due-card {
        .due-card-content {
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
    .tickets-due-card {
        .due-card-content {
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
