import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-average-order-value',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './average-order-value.component.html',
    styleUrl: './average-order-value.component.scss'
})
export class AverageOrderValueComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}