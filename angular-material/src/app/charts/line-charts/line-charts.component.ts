import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrushLineChartComponent } from './brush-line-chart/brush-line-chart.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { DashedLineChartComponent } from './dashed-line-chart/dashed-line-chart.component';
import { SyncingLineChartComponent } from './syncing-line-chart/syncing-line-chart.component';
import { ZoomableLineChartComponent } from './zoomable-line-chart/zoomable-line-chart.component';
import { GradientLineChartComponent } from './gradient-line-chart/gradient-line-chart.component';
import { SteplineLineChartComponent } from './stepline-line-chart/stepline-line-chart.component';

@Component({
    selector: 'app-line-charts',
    imports: [RouterLink, BasicLineChartComponent, ZoomableLineChartComponent, GradientLineChartComponent, DashedLineChartComponent, SteplineLineChartComponent, BrushLineChartComponent, SyncingLineChartComponent],
    templateUrl: './line-charts.component.html',
    styleUrl: './line-charts.component.scss'
})
export class LineChartsComponent {}