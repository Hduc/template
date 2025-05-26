import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-total-discount',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './total-discount.component.html',
    styleUrl: './total-discount.component.scss'
})
export class TotalDiscountComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}