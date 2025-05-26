import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-stats',
    imports: [MatCardModule],
    templateUrl: './stats.component.html',
    styleUrl: './stats.component.scss'
})
export class StatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}