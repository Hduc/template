import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-individual-asset-performance',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './individual-asset-performance.component.html',
    styleUrl: './individual-asset-performance.component.scss'
})
export class IndividualAssetPerformanceComponent {

    displayedColumns: string[] = ['coin', 'allocation', 'roi', 'currentValue', 'netGainLoss', 'change1D', 'change7D', 'sparkline'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    coin: any;
    allocation: string;
    roi: any;
    currentValue: string;
    netGainLoss: string;
    change1D: any;
    change7D: any;
    sparkline: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        allocation: '35%',
        roi: {
            value: '+120%',
            className: 'text-success'
        },
        currentValue: '$35,000',
        netGainLoss: '$15,000',
        change1D: {
            value: '+0.5%',
            className: 'text-success'
        },
        change7D: {
            value: '+3.0%',
            className: 'text-success'
        },
        sparkline: 'images/sparklines/sparkline1.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        allocation: '25%',
        roi: {
            value: '+80%',
            className: 'text-success'
        },
        currentValue: '$25,000',
        netGainLoss: '$8,000',
        change1D: {
            value: '-1.0%',
            className: 'text-danger'
        },
        change7D: {
            value: '+1.5%',
            className: 'text-success'
        },
        sparkline: 'images/sparklines/sparkline2.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        allocation: '15%',
        roi: {
            value: '+30%',
            className: 'text-success'
        },
        currentValue: '$7,500',
        netGainLoss: '$1,500',
        change1D: {
            value: '-2.5%',
            className: 'text-danger'
        },
        change7D: {
            value: '-5.0%',
            className: 'text-danger'
        },
        sparkline: 'images/sparklines/sparkline3.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        allocation: '10%',
        roi: {
            value: '+45%',
            className: 'text-success'
        },
        currentValue: '$4,500',
        netGainLoss: '$1,000',
        change1D: {
            value: '+0.2%',
            className: 'text-success'
        },
        change7D: {
            value: '+2.0%',
            className: 'text-success'
        },
        sparkline: 'images/sparklines/sparkline4.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        allocation: '5%',
        roi: {
            value: '-10%',
            className: 'text-danger'
        },
        currentValue: '$3,000',
        netGainLoss: '$1,200',
        change1D: {
            value: '+1.5%',
            className: 'text-success'
        },
        change7D: {
            value: '-4.5%',
            className: 'text-danger'
        },
        sparkline: 'images/sparklines/sparkline5.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        allocation: '5%',
        roi: {
            value: '-10%',
            className: 'text-danger'
        },
        currentValue: '$3,000',
        netGainLoss: '$1,200',
        change1D: {
            value: '+1.5%',
            className: 'text-success'
        },
        change7D: {
            value: '-4.5%',
            className: 'text-danger'
        },
        sparkline: 'images/sparklines/sparkline5.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        allocation: '15%',
        roi: {
            value: '+30%',
            className: 'text-success'
        },
        currentValue: '$7,500',
        netGainLoss: '$1,500',
        change1D: {
            value: '-2.5%',
            className: 'text-danger'
        },
        change7D: {
            value: '-5.0%',
            className: 'text-danger'
        },
        sparkline: 'images/sparklines/sparkline3.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        allocation: '10%',
        roi: {
            value: '+45%',
            className: 'text-success'
        },
        currentValue: '$4,500',
        netGainLoss: '$1,000',
        change1D: {
            value: '+0.2%',
            className: 'text-success'
        },
        change7D: {
            value: '+2.0%',
            className: 'text-success'
        },
        sparkline: 'images/sparklines/sparkline4.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        allocation: '25%',
        roi: {
            value: '+80%',
            className: 'text-success'
        },
        currentValue: '$25,000',
        netGainLoss: '$8,000',
        change1D: {
            value: '-1.0%',
            className: 'text-danger'
        },
        change7D: {
            value: '+1.5%',
            className: 'text-success'
        },
        sparkline: 'images/sparklines/sparkline2.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        allocation: '35%',
        roi: {
            value: '+120%',
            className: 'text-success'
        },
        currentValue: '$35,000',
        netGainLoss: '$15,000',
        change1D: {
            value: '+0.5%',
            className: 'text-success'
        },
        change7D: {
            value: '+3.0%',
            className: 'text-success'
        },
        sparkline: 'images/sparklines/sparkline1.png'
    }
];