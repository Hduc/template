import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-gainers-losers',
    imports: [MatCardModule, MatTableModule],
    templateUrl: './gainers-losers.component.html',
    styleUrl: './gainers-losers.component.scss'
})
export class GainersLosersComponent {

    displayedColumns: string[] = ['coin', 'price', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

}

export interface PeriodicElement {
    coin: string;
    price: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        coin: 'Goatseus Maximus',
        price: '$0.719',
        status: {
            percentage: '+ 47.44%',
            className: 'text-success'
        }
    },
    {
        coin: 'Uniswap',
        price: '$9.15',
        status: {
            percentage: '- 31.87%',
            className: 'text-danger'
        }
    },
    {
        coin: 'Aave',
        price: '$161.05',
        status: {
            percentage: '+ 23.94%',
            className: 'text-success'
        }
    },
    {
        coin: 'Bittenso',
        price: '$526.97',
        status: {
            percentage: '- 22.94%',
            className: 'text-danger'
        }
    },
    {
        coin: 'Injective',
        price: '$20.87',
        status: {
            percentage: '+ 21.41%',
            className: 'text-success'
        }
    },
    {
        coin: 'Monero',
        price: '$209.38',
        status: {
            percentage: '- 0.84%',
            className: 'text-danger'
        }
    }
];