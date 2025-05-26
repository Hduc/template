import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-daily-limit',
    imports: [MatCardModule, MatProgressBarModule],
    templateUrl: './daily-limit.component.html',
    styleUrl: './daily-limit.component.scss'
})
export class DailyLimitComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}