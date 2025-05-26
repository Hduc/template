import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-mobile-app',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './mobile-app.component.html',
    styleUrl: './mobile-app.component.scss'
})
export class MobileAppComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}