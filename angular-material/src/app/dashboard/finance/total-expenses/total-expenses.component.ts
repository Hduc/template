import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-expenses',
    imports: [MatCardModule],
    templateUrl: './total-expenses.component.html',
    styleUrl: './total-expenses.component.scss'
})
export class TotalExpensesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}