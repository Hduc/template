import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-featured-services',
    imports: [MatCardModule],
    templateUrl: './featured-services.component.html',
    styleUrl: './featured-services.component.scss'
})
export class FeaturedServicesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}