import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MarketPerformanceService } from './market-performance.service';

@Component({
    selector: 'app-market-performance',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './market-performance.component.html',
    styleUrl: './market-performance.component.scss'
})
export class MarketPerformanceComponent {

    selectedTimeframe: string = 'Last Month'; // Default selection set to Last Month
    chartData: { [key: string]: { series: number[], labels: string[] } };

    constructor(
        private marketPerformanceService: MarketPerformanceService
    ) {
        this.chartData = {
            'Last Day': {
                series: [15, 10, 20, 30, 10, 25],
                labels: ["Revenue Growth", "Profit Margins", "Cost of Goods Sold", "Market Share", "Sales Volume", "Return on Investment"]
            },
            'Last Week': {
                series: [20, 15, 25, 28, 18, 30],
                labels: ["Revenue Growth", "Profit Margins", "Cost of Goods Sold", "Market Share", "Sales Volume", "Return on Investment"]
            },
            'Last Month': {
                series: [25, 18, 22, 35, 15, 28],
                labels: ["Revenue Growth", "Profit Margins", "Cost of Goods Sold", "Market Share", "Sales Volume", "Return on Investment"]
            },
            'Last Year': {
                series: [30, 20, 25, 40, 20, 33],
                labels: ["Revenue Growth", "Profit Margins", "Cost of Goods Sold", "Market Share", "Sales Volume", "Return on Investment"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.selectedTimeframe];
        this.marketPerformanceService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe;
        const selectedData = this.chartData[timeframe];
        this.marketPerformanceService.updateChart(selectedData.series, selectedData.labels);
    }

}