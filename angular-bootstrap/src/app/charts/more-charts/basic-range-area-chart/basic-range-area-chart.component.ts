import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicRangeAreaChartService } from './basic-range-area-chart.service';

@Component({
    selector: 'app-basic-range-area-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './basic-range-area-chart.component.html',
    styleUrl: './basic-range-area-chart.component.scss'
})
export class BasicRangeAreaChartComponent {

    constructor(
        private basicRangeAreaChartService: BasicRangeAreaChartService
    ) {}

    ngOnInit(): void {
        this.basicRangeAreaChartService.loadChart();
    }

}