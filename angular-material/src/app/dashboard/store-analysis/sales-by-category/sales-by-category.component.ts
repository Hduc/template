import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SalesByCategoryService } from './sales-by-category.service';

@Component({
    selector: 'app-sales-by-category',
    imports: [MatCardModule],
    templateUrl: './sales-by-category.component.html',
    styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {

    constructor(
        private salesByCategoryService: SalesByCategoryService
    ) {}

    ngOnInit(): void {
        this.salesByCategoryService.loadChart();
    }

}