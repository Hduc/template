import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RangeColumnChartService } from './range-column-chart.service';

@Component({
    selector: 'app-range-column-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './range-column-chart.component.html',
    styleUrl: './range-column-chart.component.scss'
})
export class RangeColumnChartComponent {

    constructor(
        private rangeColumnChartService: RangeColumnChartService
    ) {}

    ngOnInit(): void {
        this.rangeColumnChartService.loadChart();
    }

}