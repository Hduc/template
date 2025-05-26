import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MonthlySpendingService } from './monthly-spending.service';

@Component({
    selector: 'app-monthly-spending',
    imports: [MatCardModule],
    templateUrl: './monthly-spending.component.html',
    styleUrl: './monthly-spending.component.scss'
})
export class MonthlySpendingComponent {

    constructor(
        private monthlySpendingService: MonthlySpendingService
    ) {}

    ngOnInit(): void {
        this.monthlySpendingService.loadChart();
    }

}