import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-balance',
    imports: [MatCardModule],
    templateUrl: './total-balance.component.html',
    styleUrl: './total-balance.component.scss'
})
export class TotalBalanceComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}