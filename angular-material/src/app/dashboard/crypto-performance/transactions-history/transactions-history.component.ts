import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-transactions-history',
    imports: [NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './transactions-history.component.html',
    styleUrl: './transactions-history.component.scss'
})
export class TransactionsHistoryComponent {

    displayedColumns: string[] = ['coin', 'status', 'price'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    coin: any;
    status: any;
    price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        status: {
            sold: true,
            withdraw: false
        },
        price: '$68848.92'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        status: {
            sold: false,
            withdraw: true
        },
        price: '$2565.77'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        status: {
            sold: true,
            withdraw: false
        },
        price: '$1234.21'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        status: {
            sold: true,
            withdraw: false
        },
        price: '$1.00'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        status: {
            sold: false,
            withdraw: true
        },
        price: '$0.529105'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        status: {
            sold: false,
            withdraw: true
        },
        price: '$0.529105'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        status: {
            sold: true,
            withdraw: false
        },
        price: '$1.00'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        status: {
            sold: false,
            withdraw: true
        },
        price: '$2565.77'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        status: {
            sold: true,
            withdraw: false
        },
        price: '$68848.92'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        status: {
            sold: true,
            withdraw: false
        },
        price: '$1234.21'
    }
];