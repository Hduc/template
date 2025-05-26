import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MarketSentimentIndicatorService } from './market-sentiment-indicator.service';

@Component({
    selector: 'app-market-sentiment-indicator',
    imports: [MatCardModule],
    templateUrl: './market-sentiment-indicator.component.html',
    styleUrl: './market-sentiment-indicator.component.scss'
})
export class MarketSentimentIndicatorComponent {

    constructor(
        private marketSentimentIndicatorService: MarketSentimentIndicatorService
    ) {}

    ngOnInit(): void {
        this.marketSentimentIndicatorService.loadChart();
    }

}