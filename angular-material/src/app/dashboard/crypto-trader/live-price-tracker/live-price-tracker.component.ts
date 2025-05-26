import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-live-price-tracker',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './live-price-tracker.component.html',
    styleUrl: './live-price-tracker.component.scss'
})
export class LivePriceTrackerComponent {

    displayedColumns: string[] = ['coin', 'price'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    coin: any;
    price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        price: '$68848.92'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        price: '$2565.77'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        price: '$1234.21'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        price: '$1.00'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        price: '$0.529105'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/solana.svg',
            name: 'Solana',
            abbreviation: 'SOL'
        },
        price: '$179.44'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/usdc.png',
            name: 'USDC',
            abbreviation: 'USDC'
        },
        price: '$1.20'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tron.png',
            name: 'Tron',
            abbreviation: 'TRX'
        },
        price: '$0.192391'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tron.png',
            name: 'Tron',
            abbreviation: 'TRX'
        },
        price: '$0.192391'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/usdc.png',
            name: 'USDC',
            abbreviation: 'USDC'
        },
        price: '$1.20'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/solana.svg',
            name: 'Solana',
            abbreviation: 'SOL'
        },
        price: '$179.44'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        price: '$0.529105'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        price: '$1.00'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        price: '$2565.77'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        price: '$1234.21'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        price: '$68848.92'
    }
];