import { Component } from '@angular/core';
import { CustomerSatisfactionRateService } from './customer-satisfaction-rate.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-customer-satisfaction-rate',
    imports: [MatCardModule],
    templateUrl: './customer-satisfaction-rate.component.html',
    styleUrl: './customer-satisfaction-rate.component.scss'
})
export class CustomerSatisfactionRateComponent {

    constructor(
        private customerSatisfactionRateService: CustomerSatisfactionRateService
    ) {}

    ngOnInit(): void {
        this.customerSatisfactionRateService.loadChart();
    }

}