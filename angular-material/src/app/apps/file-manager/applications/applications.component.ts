import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-applications',
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule],
    templateUrl: './applications.component.html',
    styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}