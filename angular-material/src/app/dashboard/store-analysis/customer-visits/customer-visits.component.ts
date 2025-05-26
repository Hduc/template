import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-customer-visits',
    imports: [MatCardModule, MatProgressBarModule],
    templateUrl: './customer-visits.component.html',
    styleUrl: './customer-visits.component.scss'
})
export class CustomerVisitsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}