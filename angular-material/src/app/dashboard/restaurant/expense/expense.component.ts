import { Component } from '@angular/core';
import { ExpenseService } from './expense.service';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-expense',
    imports: [MatCardModule],
    templateUrl: './expense.component.html',
    styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private expenseService: ExpenseService
    ) {}

    ngOnInit(): void {
        this.expenseService.loadChart();
    }

}