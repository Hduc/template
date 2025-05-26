import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-selling-products',
    imports: [RouterLink, MatCardModule, MatTableModule],
    templateUrl: './top-selling-products.component.html',
    styleUrl: './top-selling-products.component.scss'
})
export class TopSellingProductsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
            
    displayedColumns: string[] = ['product', 'ratings'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    product: any;
    ratings: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        product: {
            img: 'images/stock-alerts/stock1.jpg',
            name: 'Tablet PC',
            totalSold: '2032'
        },
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                }
            ],
            number: '5.0'
        }
    },
    {
        product: {
            img: 'images/stock-alerts/stock2.jpg',
            name: 'Laptop',
            totalSold: '1020'
        },
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-half-line'
                }
            ],
            number: '4.5'
        }
    },
    {
        product: {
            img: 'images/stock-alerts/stock3.jpg',
            name: 'QCY Airpod',
            totalSold: '99'
        },
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '4.0'
        }
    },
    {
        product: {
            img: 'images/stock-alerts/stock4.jpg',
            name: 'Zenbook X',
            totalSold: '89'
        },
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-half-line'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '3.5'
        }
    },
    {
        product: {
            img: 'images/stock-alerts/stock5.jpg',
            name: 'Clay Camera',
            totalSold: '72'
        },
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-line'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '3.0'
        }
    },
    {
        product: {
            img: 'images/stock-alerts/stock6.jpg',
            name: 'Laptop Mockup',
            totalSold: '89'
        },
        ratings: {
            stars: [
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-fill'
                },
                {
                    star: 'ri-star-half-line'
                },
                {
                    star: 'ri-star-line'
                },
                {
                    star: 'ri-star-line'
                }
            ],
            number: '2.5'
        }
    }
];