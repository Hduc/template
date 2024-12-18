import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicTimelineChartService } from './basic-timeline-chart.service';

@Component({
    selector: 'app-basic-timeline-chart',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './basic-timeline-chart.component.html',
    styleUrl: './basic-timeline-chart.component.scss'
})
export class BasicTimelineChartComponent {

    constructor(
        private basicTimelineChartService: BasicTimelineChartService
    ) {}

    ngOnInit(): void {
        this.basicTimelineChartService.loadChart();
    }

}