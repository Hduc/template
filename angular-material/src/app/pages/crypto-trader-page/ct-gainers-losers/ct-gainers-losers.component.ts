import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-ct-gainers-losers',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, FileUploadModule],
    templateUrl: './ct-gainers-losers.component.html',
    styleUrl: './ct-gainers-losers.component.scss'
})
export class CtGainersLosersComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['coin', 'price', 'h1', 'h24', 'd7', 'marketCap', 'volume24h', 'last7days'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}

export interface PeriodicElement {
    coin: any;
    price: string;
    h1: any;
    h24: any;
    d7: any;
    marketCap: string;
    volume24h: string;
    last7days: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        price: '$85,818.27',
        h1: {
            value: '+0.47%',
            className: 'text-success'
        },
        h24: {
            value: '+2.65%',
            className: 'text-success'
        },
        d7: {
            value: '+3.01%',
            className: 'text-success'
        },
        marketCap: '$1,702,262,413,645',
        volume24h: '$37,182,010,584',
        last7days: 'images/sparklines/sparkline1.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        price: '$1,993.88',
        h1: {
            value: '-1.03%',
            className: 'text-danger'
        },
        h24: {
            value: '+2.44%',
            className: 'text-success'
        },
        d7: {
            value: '+5.59%',
            className: 'text-success'
        },
        marketCap: '$240,652,882,527',
        volume24h: '$19,913,301,026',
        last7days: 'images/sparklines/sparkline2.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        price: '$2.49',
        h1: {
            value: '+0.16%',
            className: 'text-success'
        },
        h24: {
            value: '-7.75%',
            className: 'text-danger'
        },
        d7: {
            value: '+10.25%',
            className: 'text-success'
        },
        marketCap: '$145,187,520,169',
        volume24h: '$10,614,863,319',
        last7days: 'images/sparklines/sparkline3.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        price: '$1.00',
        h1: {
            value: '+0.01%',
            className: 'text-success'
        },
        h24: {
            value: '+0.04%',
            className: 'text-success'
        },
        d7: {
            value: '-0.01%',
            className: 'text-danger'
        },
        marketCap: '$143,685,783,527',
        volume24h: '$78,972,924,872',
        last7days: 'images/sparklines/sparkline4.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        price: '$628.38',
        h1: {
            value: '+0.96%',
            className: 'text-success'
        },
        h24: {
            value: '+2.38%	',
            className: 'text-success'
        },
        d7: {
            value: '+8.31%',
            className: 'text-success'
        },
        marketCap: '$89,534,085,091',
        volume24h: '$2,236,753,285',
        last7days: 'images/sparklines/sparkline5.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/solana.svg',
            name: 'Solana',
            abbreviation: 'SOL'
        },
        price: '$132.46',
        h1: {
            value: '+1.45%',
            className: 'text-success'
        },
        h24: {
            value: '+4.79%',
            className: 'text-success'
        },
        d7: {
            value: '+4.31%',
            className: 'text-success'
        },
        marketCap: '$67,541,375,453',
        volume24h: '$3,658,703,755',
        last7days: 'images/sparklines/sparkline1.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/usdc.png',
            name: 'USDC',
            abbreviation: 'USDC'
        },
        price: '$0.9999',
        h1: {
            value: '-0.01%',
            className: 'text-danger'
        },
        h24: {
            value: '-0.01%',
            className: 'text-danger'
        },
        d7: {
            value: '-0.01%',
            className: 'text-danger'
        },
        marketCap: '$59,247,883,103',
        volume24h: '$12,917,680,329',
        last7days: 'images/sparklines/sparkline2.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tron.png',
            name: 'Tron',
            abbreviation: 'TRX'
        },
        price: '$0.7263',
        h1: {
            value: '+1.03%',
            className: 'text-success'
        },
        h24: {
            value: '+1.45%',
            className: 'text-success'
        },
        d7: {
            value: '+0.45%',
            className: 'text-success'
        },
        marketCap: '$25,577,902,356',
        volume24h: '$1,121,882,828',
        last7days: 'images/sparklines/sparkline3.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/avalanche.png',
            name: 'Avalanche',
            abbreviation: 'AVAX'
        },
        price: '$18.84',
        h1: {
            value: '+1.30%',
            className: 'text-success'
        },
        h24: {
            value: '-2.09%',
            className: 'text-success'
        },
        d7: {
            value: '+0.22%',
            className: 'text-success'
        },
        marketCap: '$25,510,949,845',
        volume24h: '$1,367,466,333',
        last7days: 'images/sparklines/sparkline4.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/chainlink.png',
            name: 'Chainlink',
            abbreviation: 'LINK'
        },
        price: '$14.43',
        h1: {
            value: '+2.46%',
            className: 'text-success'
        },
        h24: {
            value: '+61.89%',
            className: 'text-success'
        },
        d7: {
            value: '-2.37%',
            className: 'text-danger'
        },
        marketCap: '$6,765,015,406',
        volume24h: '$342,511,153',
        last7days: 'images/sparklines/sparkline5.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/solana.svg',
            name: 'Solana',
            abbreviation: 'SOL'
        },
        price: '$132.46',
        h1: {
            value: '+1.45%',
            className: 'text-success'
        },
        h24: {
            value: '+4.79%',
            className: 'text-success'
        },
        d7: {
            value: '+4.31%',
            className: 'text-success'
        },
        marketCap: '$67,541,375,453',
        volume24h: '$3,658,703,755',
        last7days: 'images/sparklines/sparkline1.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/usdc.png',
            name: 'USDC',
            abbreviation: 'USDC'
        },
        price: '$0.9999',
        h1: {
            value: '-0.01%',
            className: 'text-danger'
        },
        h24: {
            value: '-0.01%',
            className: 'text-danger'
        },
        d7: {
            value: '-0.01%',
            className: 'text-danger'
        },
        marketCap: '$59,247,883,103',
        volume24h: '$12,917,680,329',
        last7days: 'images/sparklines/sparkline2.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tron.png',
            name: 'Tron',
            abbreviation: 'TRX'
        },
        price: '$0.7263',
        h1: {
            value: '+1.03%',
            className: 'text-success'
        },
        h24: {
            value: '+1.45%',
            className: 'text-success'
        },
        d7: {
            value: '+0.45%',
            className: 'text-success'
        },
        marketCap: '$25,577,902,356',
        volume24h: '$1,121,882,828',
        last7days: 'images/sparklines/sparkline3.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/avalanche.png',
            name: 'Avalanche',
            abbreviation: 'AVAX'
        },
        price: '$18.84',
        h1: {
            value: '+1.30%',
            className: 'text-success'
        },
        h24: {
            value: '-2.09%',
            className: 'text-success'
        },
        d7: {
            value: '+0.22%',
            className: 'text-success'
        },
        marketCap: '$25,510,949,845',
        volume24h: '$1,367,466,333',
        last7days: 'images/sparklines/sparkline4.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/chainlink.png',
            name: 'Chainlink',
            abbreviation: 'LINK'
        },
        price: '$14.43',
        h1: {
            value: '+2.46%',
            className: 'text-success'
        },
        h24: {
            value: '+61.89%',
            className: 'text-success'
        },
        d7: {
            value: '-2.37%',
            className: 'text-danger'
        },
        marketCap: '$6,765,015,406',
        volume24h: '$342,511,153',
        last7days: 'images/sparklines/sparkline5.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/bitcoin.svg',
            name: 'Bitcoin',
            abbreviation: 'BTC'
        },
        price: '$85,818.27',
        h1: {
            value: '+0.47%',
            className: 'text-success'
        },
        h24: {
            value: '+2.65%',
            className: 'text-success'
        },
        d7: {
            value: '+3.01%',
            className: 'text-success'
        },
        marketCap: '$1,702,262,413,645',
        volume24h: '$37,182,010,584',
        last7days: 'images/sparklines/sparkline1.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/ethereum.svg',
            name: 'Ethereum',
            abbreviation: 'ETH'
        },
        price: '$1,993.88',
        h1: {
            value: '-1.03%',
            className: 'text-danger'
        },
        h24: {
            value: '+2.44%',
            className: 'text-success'
        },
        d7: {
            value: '+5.59%',
            className: 'text-success'
        },
        marketCap: '$240,652,882,527',
        volume24h: '$19,913,301,026',
        last7days: 'images/sparklines/sparkline2.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/binance.svg',
            name: 'Binance',
            abbreviation: 'BNB'
        },
        price: '$2.49',
        h1: {
            value: '+0.16%',
            className: 'text-success'
        },
        h24: {
            value: '-7.75%',
            className: 'text-danger'
        },
        d7: {
            value: '+10.25%',
            className: 'text-success'
        },
        marketCap: '$145,187,520,169',
        volume24h: '$10,614,863,319',
        last7days: 'images/sparklines/sparkline3.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/tether.svg',
            name: 'Tether',
            abbreviation: 'USDT'
        },
        price: '$1.00',
        h1: {
            value: '+0.01%',
            className: 'text-success'
        },
        h24: {
            value: '+0.04%',
            className: 'text-success'
        },
        d7: {
            value: '-0.01%',
            className: 'text-danger'
        },
        marketCap: '$143,685,783,527',
        volume24h: '$78,972,924,872',
        last7days: 'images/sparklines/sparkline4.png'
    },
    {
        coin: {
            img: 'images/cryptocurrencies/xrp.svg',
            name: 'XRP',
            abbreviation: 'XRP'
        },
        price: '$628.38',
        h1: {
            value: '+0.96%',
            className: 'text-success'
        },
        h24: {
            value: '+2.38%	',
            className: 'text-success'
        },
        d7: {
            value: '+8.31%',
            className: 'text-success'
        },
        marketCap: '$89,534,085,091',
        volume24h: '$2,236,753,285',
        last7days: 'images/sparklines/sparkline5.png'
    }
];