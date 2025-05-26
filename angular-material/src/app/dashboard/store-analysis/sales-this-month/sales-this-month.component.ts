import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SalesThisMonthService } from './sales-this-month.service';

@Component({
    selector: 'app-sales-this-month',
    imports: [MatCardModule],
    templateUrl: './sales-this-month.component.html',
    styleUrl: './sales-this-month.component.scss'
})
export class SalesThisMonthComponent {

    constructor(
        private salesThisMonthService: SalesThisMonthService
    ) {}

    ngOnInit(): void {
        this.salesThisMonthService.loadChart();
    }

}