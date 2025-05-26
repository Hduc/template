import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SpendingBreakdownService } from './spending-breakdown.service';

@Component({
    selector: 'app-spending-breakdown',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './spending-breakdown.component.html',
    styleUrl: './spending-breakdown.component.scss'
})
export class SpendingBreakdownComponent {

    selectedTimeframe: string = 'Weekly'; // Default selection
    chartData: { [key: string]: { series: number[]; labels: string[] } };

    constructor(
        private spendingBreakdownService: SpendingBreakdownService
    ) {
        this.chartData = {
            'Daily': {
                series: [5, 8, 2, 4, 6, 2],
                labels: ["Groceries", "Utilities", "Rent", "Entertainment", "Transportation", "Other"]
            },
            'Weekly': {
                series: [30, 20, 12, 10, 8, 6],
                labels: ["Groceries", "Utilities", "Rent", "Entertainment", "Transportation", "Other"]
            },
            'Monthly': {
                series: [220, 150, 100, 100, 220, 50],
                labels: ["Groceries", "Utilities", "Rent", "Entertainment", "Transportation", "Other"]
            },
            'Yearly': {
                series: [1800, 2400, 600, 1200, 1800, 600],
                labels: ["Groceries", "Utilities", "Rent", "Entertainment", "Transportation", "Other"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.selectedTimeframe];
        this.spendingBreakdownService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe;
        const selectedData = this.chartData[timeframe];
        this.spendingBreakdownService.updateChart(selectedData.series, selectedData.labels);
    }

}