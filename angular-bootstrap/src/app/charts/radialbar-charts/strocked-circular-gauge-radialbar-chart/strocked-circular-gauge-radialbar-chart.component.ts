import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StrockedCircularGaugeRadialbarChartService } from './strocked-circular-gauge-radialbar-chart.service';

@Component({
    selector: 'app-strocked-circular-gauge-radialbar-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './strocked-circular-gauge-radialbar-chart.component.html',
    styleUrl: './strocked-circular-gauge-radialbar-chart.component.scss'
})
export class StrockedCircularGaugeRadialbarChartComponent {

    constructor(
        private strockedCircularGaugeRadialbarChartService: StrockedCircularGaugeRadialbarChartService
    ) {}

    ngOnInit(): void {
        this.strockedCircularGaugeRadialbarChartService.loadChart();
    }

}