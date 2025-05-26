import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-recent-transactions',
    imports: [NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './recent-transactions.component.html',
    styleUrl: './recent-transactions.component.scss'
})
export class RecentTransactionsComponent {

    displayedColumns: string[] = ['date', 'asset', 'type', 'amount', 'price', 'totalValue', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    date: string;
    asset: string;
    type: any;
    amount: string;
    price: string;
    totalValue: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        date: '2025-10-31',
        asset: 'Bitcoin',
        type: {
            buy: true,
            sell: false
        },
        amount: '0.5 BTC',
        price: '$34,000',
        totalValue: '$17,000',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-30',
        asset: 'Ethereum',
        type: {
            buy: false,
            sell: true
        },
        amount: '2 ETH',
        price: '$1,800',
        totalValue: '$3,600',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-29',
        asset: 'Tether',
        type: {
            buy: true,
            sell: false
        },
        amount: '$1.00',
        price: '$175',
        totalValue: '$1,750',
        status: {
            done: false,
            pending: false,
            failed: true
        }
    },
    {
        date: '2025-10-28',
        asset: 'USD Coin',
        type: {
            buy: false,
            sell: true
        },
        amount: '$0.9999',
        price: '$230',
        totalValue: '$1,150',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-27',
        asset: 'Cardano',
        type: {
            buy: true,
            sell: false
        },
        amount: '5000 DOGE',
        price: '$0.07',
        totalValue: '$350',
        status: {
            done: false,
            pending: true,
            failed: false
        }
    },
    {
        date: '2025-10-26',
        asset: 'Tron',
        type: {
            buy: true,
            sell: false
        },
        amount: '142 TRX',
        price: '$0.192391',
        totalValue: '$230',
        status: {
            done: false,
            pending: false,
            failed: true
        }
    },
    {
        date: '2025-10-26',
        asset: 'Tron',
        type: {
            buy: true,
            sell: false
        },
        amount: '142 TRX',
        price: '$0.192391',
        totalValue: '$230',
        status: {
            done: false,
            pending: false,
            failed: true
        }
    },
    {
        date: '2025-10-28',
        asset: 'USD Coin',
        type: {
            buy: false,
            sell: true
        },
        amount: '$0.9999',
        price: '$230',
        totalValue: '$1,150',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-29',
        asset: 'Tether',
        type: {
            buy: true,
            sell: false
        },
        amount: '$1.00',
        price: '$175',
        totalValue: '$1,750',
        status: {
            done: false,
            pending: false,
            failed: true
        }
    },
    {
        date: '2025-10-31',
        asset: 'Bitcoin',
        type: {
            buy: true,
            sell: false
        },
        amount: '0.5 BTC',
        price: '$34,000',
        totalValue: '$17,000',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-30',
        asset: 'Ethereum',
        type: {
            buy: false,
            sell: true
        },
        amount: '2 ETH',
        price: '$1,800',
        totalValue: '$3,600',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-27',
        asset: 'Cardano',
        type: {
            buy: true,
            sell: false
        },
        amount: '5000 DOGE',
        price: '$0.07',
        totalValue: '$350',
        status: {
            done: false,
            pending: true,
            failed: false
        }
    }
];