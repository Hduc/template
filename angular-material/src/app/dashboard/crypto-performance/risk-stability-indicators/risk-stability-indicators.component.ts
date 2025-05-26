import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RiskStabilityIndicatorsService } from './risk-stability-indicators.service';

@Component({
    selector: 'app-risk-stability-indicators',
    imports: [MatCardModule],
    templateUrl: './risk-stability-indicators.component.html',
    styleUrl: './risk-stability-indicators.component.scss'
})
export class RiskStabilityIndicatorsComponent {

    constructor(
        private riskStabilityIndicatorsService: RiskStabilityIndicatorsService
    ) {}

    ngOnInit(): void {
        this.riskStabilityIndicatorsService.loadChart();
    }

}