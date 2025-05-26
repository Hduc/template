import { Component } from '@angular/core';
import { FollowersByGenderService } from './followers-by-gender.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-followers-by-gender',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './followers-by-gender.component.html',
    styleUrl: './followers-by-gender.component.scss'
})
export class FollowersByGenderComponent {

    selectedTimeframe: string = 'This Week'; // Default selection
    chartData: { [key: string]: number[] };

    constructor(
        private followersByGenderService: FollowersByGenderService
    ) {
        this.chartData = {
            'This Day': [60, 40],
            'This Week': [55, 45],
            'This Month': [50, 50],
            'This Year': [52, 48]
        };
    }

    async ngOnInit(): Promise<void> {
        await this.followersByGenderService.loadChart(this.chartData[this.selectedTimeframe]);
    }

    async onTimeframeChange(timeframe: string): Promise<void> {
        this.selectedTimeframe = timeframe;
        await this.followersByGenderService.updateChart(this.chartData[timeframe]);
    }

}