import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioDistributionService } from './portfolio-distribution.service';

@Component({
    selector: 'app-portfolio-distribution',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './portfolio-distribution.component.html',
    styleUrl: './portfolio-distribution.component.scss'
})
export class PortfolioDistributionComponent {

    selectedTimeframe: string = 'Weekly'; // Default selection
    chartData: { [key: string]: { series: number[]; labels: string[] } };

    constructor(
        private portfolioDistributionService: PortfolioDistributionService
    ) {
        this.chartData = {
            'Daily': {
                series: [5, 8, 2, 4, 6, 2],
                labels: ["Bitcoin", "Ethereum", "BNB", "Tether", "Ripple", "Others"]
            },
            'Weekly': {
                series: [30, 20, 12, 10, 8, 6],
                labels: ["Bitcoin", "Ethereum", "BNB", "Tether", "Ripple", "Others"]
            },
            'Monthly': {
                series: [220, 150, 100, 100, 220, 50],
                labels: ["Bitcoin", "Ethereum", "BNB", "Tether", "Ripple", "Others"]
            },
            'Yearly': {
                series: [1800, 2400, 600, 1200, 1800, 600],
                labels: ["Bitcoin", "Ethereum", "BNB", "Tether", "Ripple", "Others"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.selectedTimeframe];
        this.portfolioDistributionService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe;
        const selectedData = this.chartData[timeframe];
        this.portfolioDistributionService.updateChart(selectedData.series, selectedData.labels);
    }

}