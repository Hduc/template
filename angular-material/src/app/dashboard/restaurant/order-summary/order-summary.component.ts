import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { OrderSummaryService } from './order-summary.service';

@Component({
    selector: 'app-order-summary',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './order-summary.component.html',
    styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

    selectedTimeframe: string = 'Weekly'; // Default selection
    chartData: { [key: string]: { series: number[]; labels: string[] } };

    constructor(
        private orderSummaryService: OrderSummaryService
    ) {
        this.chartData = {
            'Daily': {
                series: [5, 8, 2],
                labels: ["Served", "Processing", "Cancelled"]
            },
            'Weekly': {
                series: [10, 30, 45],
                labels: ["Served", "Processing", "Cancelled"]
            },
            'Monthly': {
                series: [150, 200, 50],
                labels: ["Served", "Processing", "Cancelled"]
            },
            'Yearly': {
                series: [1800, 2400, 600],
                labels: ["Served", "Processing", "Cancelled"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.selectedTimeframe];
        this.orderSummaryService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe;
        const selectedData = this.chartData[timeframe];
        this.orderSummaryService.updateChart(selectedData.series, selectedData.labels);
    }

}