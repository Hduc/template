import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SalesByGenderService } from './sales-by-gender.service';

@Component({
    selector: 'app-sales-by-gender',
    imports: [MatCardModule],
    templateUrl: './sales-by-gender.component.html',
    styleUrl: './sales-by-gender.component.scss'
})
export class SalesByGenderComponent {

    constructor(
        private salesByGenderService: SalesByGenderService
    ) {}

    ngOnInit(): void {
        this.salesByGenderService.loadChart();
    }

}