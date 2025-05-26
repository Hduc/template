import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-active-properties',
    imports: [MatCardModule],
    templateUrl: './total-active-properties.component.html',
    styleUrl: './total-active-properties.component.scss'
})
export class TotalActivePropertiesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}