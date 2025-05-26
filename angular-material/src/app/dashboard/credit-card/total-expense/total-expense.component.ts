import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-expense',
    imports: [MatCardModule],
    templateUrl: './total-expense.component.html',
    styleUrl: './total-expense.component.scss'
})
export class TotalExpenseComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}