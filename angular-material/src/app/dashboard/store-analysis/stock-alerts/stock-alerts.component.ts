import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-stock-alerts',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, RouterLink],
    templateUrl: './stock-alerts.component.html',
    styleUrl: './stock-alerts.component.scss'
})
export class StockAlertsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    displayedColumns: string[] = ['code', 'product', 'store', 'quantity', 'alertQuantity', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    code: string;
    product: any;
    store: string;
    quantity: number;
    action: string;
    alertQuantity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        code: '#3421',
        product: {
            img: 'images/stock-alerts/stock1.jpg',
            name: 'ZenX Laptop'
        },
        store: 'Store 01',
        quantity: 5,
        action: "ri-more-2-fill",
        alertQuantity: 10
    },
    {
        code: '#3429',
        product: {
            img: 'images/stock-alerts/stock2.jpg',
            name: 'Mackbook Pro'
        },
        store: 'Store 02',
        quantity: 3,
        action: "ri-more-2-fill",
        alertQuantity: 15
    },
    {
        code: '#3425',
        product: {
            img: 'images/stock-alerts/stock3.jpg',
            name: 'Smart Pencil'
        },
        store: 'Store 01',
        quantity: 2,
        action: "ri-more-2-fill",
        alertQuantity: 7
    },
    {
        code: '#3424',
        product: {
            img: 'images/stock-alerts/stock4.jpg',
            name: 'Banner Mockup'
        },
        store: 'Store 02',
        quantity: 4,
        action: "ri-more-2-fill",
        alertQuantity: 12
    },
    {
        code: '#3422',
        product: {
            img: 'images/stock-alerts/stock5.jpg',
            name: 'Clay Camera'
        },
        store: 'Store 01',
        quantity: 3,
        action: "ri-more-2-fill",
        alertQuantity: 10
    },
    {
        code: '#3422',
        product: {
            img: 'images/stock-alerts/stock5.jpg',
            name: 'Clay Camera'
        },
        store: 'Store 01',
        quantity: 3,
        action: "ri-more-2-fill",
        alertQuantity: 10
    },
    {
        code: '#3421',
        product: {
            img: 'images/stock-alerts/stock1.jpg',
            name: 'ZenX Laptop'
        },
        store: 'Store 01',
        quantity: 5,
        action: "ri-more-2-fill",
        alertQuantity: 10
    },
    {
        code: '#3424',
        product: {
            img: 'images/stock-alerts/stock4.jpg',
            name: 'Banner Mockup'
        },
        store: 'Store 02',
        quantity: 4,
        action: "ri-more-2-fill",
        alertQuantity: 12
    },
    {
        code: '#3425',
        product: {
            img: 'images/stock-alerts/stock3.jpg',
            name: 'Smart Pencil'
        },
        store: 'Store 01',
        quantity: 2,
        action: "ri-more-2-fill",
        alertQuantity: 7
    },
    {
        code: '#3429',
        product: {
            img: 'images/stock-alerts/stock2.jpg',
            name: 'Mackbook Pro'
        },
        store: 'Store 02',
        quantity: 3,
        action: "ri-more-2-fill",
        alertQuantity: 15
    }
];