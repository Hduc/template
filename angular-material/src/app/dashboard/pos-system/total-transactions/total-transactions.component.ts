import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-total-transactions',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './total-transactions.component.html',
    styleUrl: './total-transactions.component.scss'
})
export class TotalTransactionsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}