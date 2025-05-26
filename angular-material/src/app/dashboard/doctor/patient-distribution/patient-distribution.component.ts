import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PatientDistributionService } from './patient-distribution.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-patient-distribution',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './patient-distribution.component.html',
    styleUrl: './patient-distribution.component.scss'
})
export class PatientDistributionComponent {

    selectedTimeframe: string = 'Weekly'; // Default selection
    chartData: { [key: string]: { series: number[]; labels: string[] } };

    constructor(
        private patientDistributionService: PatientDistributionService
    ) {
        this.chartData = {
            'Daily': {
                series: [40, 20, 10],
                labels: ["Male", "Female", "Children"]
            },
            'Weekly': {
                series: [50, 30, 20],
                labels: ["Male", "Female", "Children"]
            },
            'Monthly': {
                series: [200, 150, 100],
                labels: ["Male", "Female", "Children"]
            },
            'Yearly': {
                series: [2500, 2000, 1500],
                labels: ["Male", "Female", "Children"]
            }
        };
    }

    ngOnInit(): void {
        const defaultData = this.chartData[this.selectedTimeframe];
        this.patientDistributionService.loadChart(defaultData.series, defaultData.labels);
    }

    onTimeframeChange(timeframe: string): void {
        this.selectedTimeframe = timeframe;
        const selectedData = this.chartData[timeframe];
        this.patientDistributionService.updateChart(selectedData.series, selectedData.labels);
    }

}