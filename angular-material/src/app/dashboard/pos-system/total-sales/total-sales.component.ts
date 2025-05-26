import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-total-sales',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './total-sales.component.html',
    styleUrl: './total-sales.component.scss'
})
export class TotalSalesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}