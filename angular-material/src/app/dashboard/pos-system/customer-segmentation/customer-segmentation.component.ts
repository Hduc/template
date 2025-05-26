import { Component } from '@angular/core';
import { CustomerSegmentationService } from './customer-segmentation.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-customer-segmentation',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './customer-segmentation.component.html',
    styleUrl: './customer-segmentation.component.scss'
})
export class CustomerSegmentationComponent {

    selectedTimeframe: string = 'This Year'; // Default dropdown text
    chartData: { [key: string]: { series: number[]; labels: string[] } };

    constructor(
        private customerSegmentationService: CustomerSegmentationService,
        public themeService: CustomizerSettingsService
    ) {
        // Define the data for each timeframe
        this.chartData = {
            'This Day': {
                series: [5, 10],
                labels: ['New', 'Returning']
            },
            'This Week': {
                series: [50, 30],
                labels: ['New', 'Returning']
            },
            'This Month': {
                series: [60, 320],
                labels: ['New', 'Returning']
            },
            'This Year': {
                series: [1200, 1800],
                labels: ['New', 'Returning']
            }
        };
    }

    ngOnInit(): void {
        // Load the default chart
        const defaultData = this.chartData[this.selectedTimeframe];
        this.customerSegmentationService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe; // Update button text
        const selectedData = this.chartData[timeframe];
        this.customerSegmentationService.updateChart(selectedData.series, selectedData.labels);
    }

}