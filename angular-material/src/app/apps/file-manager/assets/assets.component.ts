import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-assets',
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatCheckboxModule],
    templateUrl: './assets.component.html',
    styleUrl: './assets.component.scss'
})
export class AssetsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}