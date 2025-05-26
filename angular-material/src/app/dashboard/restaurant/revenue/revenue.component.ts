import { Component } from '@angular/core';
import { RevenueService } from './revenue.service';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-revenue',
    imports: [MatCardModule],
    templateUrl: './revenue.component.html',
    styleUrl: './revenue.component.scss'
})
export class RevenueComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private revenueService: RevenueService
    ) {}

    ngOnInit(): void {
        this.revenueService.loadChart();
    }

}