import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class CreditUtilizationRatioService {

    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) private platformId: any) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    async loadChart(): Promise<void> {
        if (this.isBrowser) {
            try {
                // Dynamically import ApexCharts
                const ApexCharts = (await import('apexcharts')).default;

                // Define chart options
                const options = {
                    series: [
                        {
                            name: "Ratio",
                            data: [30, 65, 85]
                        }
                    ],
                    chart: {
                        type: "bar",
                        height: 203,
                        toolbar: {
                            show: false
                        }
                    },
                    colors: [
                        "#37D80A", "#FE7A36", "#FF4023"
                    ],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: "55%",
                            distributed: true
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    grid: {
                        show: true,
                        borderColor: "#ECEEF2"
                    },
                    xaxis: {
                        categories: [
                            "0-30%",
                            "30-70%",
                            "70%+"
                        ],
                        axisTicks: {
                            show: false,
                            color: '#ECEEF2'
                        },
                        axisBorder: {
                            show: false,
                            color: '#ECEEF2'
                        },
                        labels: {
                            show: true,
                            style: {
                                colors: "#3A4252",
                                fontSize: "12px"
                            }
                        }
                    },
                    yaxis: {
                        tickAmount: 4,
                        max: 100,
                        min: 0,
                        labels: {
                            style: {
                                colors: "#3A4252",
                                fontSize: "12px"
                            }
                        },
                        axisBorder: {
                            show: false,
                            color: '#ECEEF2'
                        },
                        axisTicks: {
                            show: false,
                            color: '#ECEEF2'
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        y: {
                            formatter: function(val:any) {
                                return val + "%";
                            }
                        }
                    },
                    legend: {
                        show: false,
                        fontSize: '12px',
                        position: 'bottom',
                        horizontalAlign: 'left',
                        itemMargin: {
                            horizontal: 8,
                            vertical: 8
                        },
                        labels: {
                            colors: '#64748B'
                        },
                        markers: {
                            size: 6,
                            offsetX: -2,
                            offsetY: -.5,
                            shape: 'square'
                        }
                    }
                };

                // Initialize and render the chart
                const chart = new ApexCharts(document.querySelector('#credit_utilization_ratio_chart'), options);
                chart.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    }

}