import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { AnnualProfitService } from './annual-profit.service';

@Component({
    selector: 'app-annual-profit',
    imports: [MatCardModule],
    templateUrl: './annual-profit.component.html',
    styleUrl: './annual-profit.component.scss'
})
export class AnnualProfitComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private annualProfitService: AnnualProfitService
    ) {}

    ngOnInit(): void {
        this.annualProfitService.loadChart();
    }

}