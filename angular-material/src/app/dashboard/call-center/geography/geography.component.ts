import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-geography',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatProgressBarModule],
    templateUrl: './geography.component.html',
    styleUrl: './geography.component.scss'
})
export class GeographyComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}