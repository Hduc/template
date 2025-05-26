import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-recent-transactions',
    imports: [NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatCheckboxModule],
    templateUrl: './recent-transactions.component.html',
    styleUrl: './recent-transactions.component.scss'
})
export class RecentTransactionsComponent {

    displayedColumns: string[] = ['date', 'description', 'category', 'amount', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    date: string;
    description: string;
    category: string;
    amount: string;
    action: any;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        date: '30 Apr 2025',
        description: 'Starbucks Coffee',
        amount: '$50.12',
        category: 'Dining',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: true,
            pending: false,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '29 Apr 2025',
        description: 'Whole Foods',
        amount: '$90.50',
        category: 'Groceries',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: true,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '28 Apr 2025',
        description: 'Gas Station',
        amount: '$15.00',
        category: 'Transportation',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: false,
            cancelled: true,
            rejected: false
        }
    },
    {
        date: '27 Apr 2025',
        description: 'Electric Bill',
        amount: '$150.00',
        category: 'Utilities',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: true,
            pending: false,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '26 Apr 2025',
        description: 'Spotify Subscription',
        amount: '$10.00',
        category: 'Entertainment',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: false,
            cancelled: false,
            rejected: true
        }
    },
    {
        date: '25 Apr 2025',
        description: 'Football Ticket',
        amount: '$99.99',
        category: 'Sports',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: true,
            pending: false,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '24 Apr 2025',
        description: 'Whole Foods',
        amount: '$10,000',
        category: 'Entertainment',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: true,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '24 Apr 2025',
        description: 'Whole Foods',
        amount: '$90.50',
        category: 'Transportation',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: true,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '25 Apr 2025',
        description: 'Electric Bill',
        amount: '$99.99',
        category: 'Sports',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: true,
            pending: false,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '26 Apr 2025',
        description: 'Spotify Subscription',
        amount: '$10.00',
        category: 'Entertainment',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: false,
            cancelled: false,
            rejected: true
        }
    },
    {
        date: '27 Apr 2025',
        description: 'Electric Bill',
        amount: '$150.00',
        category: 'Utilities',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: true,
            pending: false,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '29 Apr 2025',
        description: 'Whole Foods',
        amount: '$90.50',
        category: 'Groceries',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: true,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '30 Apr 2025',
        description: 'Starbucks Coffee',
        amount: '$50.12',
        category: 'Dining',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: true,
            pending: false,
            cancelled: false,
            rejected: false
        }
    },
    {
        date: '28 Apr 2025',
        description: 'Gas Station',
        amount: '$15.00',
        category: 'Transportation',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        },
        status: {
            completed: false,
            pending: false,
            cancelled: true,
            rejected: false
        }
    }
];