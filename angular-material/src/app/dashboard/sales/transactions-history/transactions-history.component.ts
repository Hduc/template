import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-transactions-history',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './transactions-history.component.html',
    styleUrl: './transactions-history.component.scss'
})
export class TransactionsHistoryComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}