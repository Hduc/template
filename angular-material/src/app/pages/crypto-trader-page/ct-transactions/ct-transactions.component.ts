import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { SelectionModel } from '@angular/cdk/collections';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-ct-transactions',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule],
    templateUrl: './ct-transactions.component.html',
    styleUrl: './ct-transactions.component.scss'
})
export class CtTransactionsComponent {

    displayedColumns: string[] = ['date', 'asset', 'type', 'amount', 'price', 'totalValue', 'status'];
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
        totalValue: '$350',
        status: {
            done: false,
            pending: false,
            failed: true
        }
    },
    {
        date: '2025-10-25',
        asset: 'Ondo',
        type: {
            buy: false,
            sell: true
        },
        amount: '10 ONDO',
        price: '$0.8732',
        totalValue: '$156.58',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-24',
        asset: 'Polkadot',
        type: {
            buy: true,
            sell: false
        },
        amount: '342 DOT',
        price: '$4.46',
        totalValue: '$207.82',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-23',
        asset: 'Pepe',
        type: {
            buy: true,
            sell: false
        },
        amount: '091 PEPE',
        price: '$0.057620',
        totalValue: '$879.4',
        status: {
            done: false,
            pending: true,
            failed: false
        }
    },
    {
        date: '2025-10-22',
        asset: 'Mantle',
        type: {
            buy: false,
            sell: true
        },
        amount: '432 MNT',
        price: '$0.8094',
        totalValue: '$101.66',
        status: {
            done: false,
            pending: false,
            failed: true
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
        totalValue: '$350',
        status: {
            done: false,
            pending: false,
            failed: true
        }
    },
    {
        date: '2025-10-25',
        asset: 'Ondo',
        type: {
            buy: false,
            sell: true
        },
        amount: '10 ONDO',
        price: '$0.8732',
        totalValue: '$156.58',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-24',
        asset: 'Polkadot',
        type: {
            buy: true,
            sell: false
        },
        amount: '342 DOT',
        price: '$4.46',
        totalValue: '$207.82',
        status: {
            done: true,
            pending: false,
            failed: false
        }
    },
    {
        date: '2025-10-23',
        asset: 'Pepe',
        type: {
            buy: true,
            sell: false
        },
        amount: '091 PEPE',
        price: '$0.057620',
        totalValue: '$879.4',
        status: {
            done: false,
            pending: true,
            failed: false
        }
    },
    {
        date: '2025-10-22',
        asset: 'Mantle',
        type: {
            buy: false,
            sell: true
        },
        amount: '432 MNT',
        price: '$0.8094',
        totalValue: '$101.66',
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
    }
];