import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-portfolio-value',
    imports: [MatCardModule],
    templateUrl: './portfolio-value.component.html',
    styleUrl: './portfolio-value.component.scss'
})
export class PortfolioValueComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}