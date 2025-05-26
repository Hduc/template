import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-latest-transactions',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatPaginatorModule],
    templateUrl: './latest-transactions.component.html',
    styleUrl: './latest-transactions.component.scss'
})
export class LatestTransactionsComponent {

    displayedColumns: string[] = ['client', 'email', 'amount', 'paymentMethod', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    client: any;
    email: string;
    amount: number;
    paymentMethod: any;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        client: {
            img: 'images/users/user58.jpg',
            name: 'Johhna Loren'
        },
        email: 'loren123@gmail.com',
        amount: 6240,
        paymentMethod: {
            card: 'images/payment-method/paypal.svg',
            title: 'Paypal'
        },
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        client: {
            img: 'images/users/user53.jpg',
            name: 'Skyler Queen'
        },
        email: 'skyqueen@gmail.com',
        amount: 5135,
        paymentMethod: {
            card: 'images/payment-method/wise.svg',
            title: 'Wise'
        },
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    },
    {
        client: {
            img: 'images/users/user55.jpg',
            name: 'Jonathon Watson'
        },
        email: 'jona2134@gmail.com',
        amount: 4321,
        paymentMethod: {
            card: 'images/payment-method/bank.svg',
            title: 'Bank'
        },
        status: {
            completed: false,
            pending: false,
            failed: true
        }
    },
    {
        client: {
            img: 'images/users/user54.jpg',
            name: 'Walter White'
        },
        email: 'walterwhite@gmail.com',
        amount: 3124,
        paymentMethod: {
            card: 'images/payment-method/paypal.svg',
            title: 'Paypal'
        },
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        client: {
            img: 'images/users/user40.jpg',
            name: 'David Carlen'
        },
        email: 'davidcarlen@gmail.com',
        amount: 2137,
        paymentMethod: {
            card: 'images/payment-method/skrill.svg',
            title: 'Skrill'
        },
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    },
    {
        client: {
            img: 'images/users/user40.jpg',
            name: 'David Carlen'
        },
        email: 'davidcarlen@gmail.com',
        amount: 2137,
        paymentMethod: {
            card: 'images/payment-method/skrill.svg',
            title: 'Skrill'
        },
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    },
    {
        client: {
            img: 'images/users/user58.jpg',
            name: 'Johhna Loren'
        },
        email: 'loren123@gmail.com',
        amount: 6240,
        paymentMethod: {
            card: 'images/payment-method/paypal.svg',
            title: 'Paypal'
        },
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        client: {
            img: 'images/users/user54.jpg',
            name: 'Walter White'
        },
        email: 'walterwhite@gmail.com',
        amount: 3124,
        paymentMethod: {
            card: 'images/payment-method/paypal.svg',
            title: 'Paypal'
        },
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        client: {
            img: 'images/users/user55.jpg',
            name: 'Jonathon Watson'
        },
        email: 'jona2134@gmail.com',
        amount: 4321,
        paymentMethod: {
            card: 'images/payment-method/bank.svg',
            title: 'Bank'
        },
        status: {
            completed: false,
            pending: false,
            failed: true
        }
    },
    {
        client: {
            img: 'images/users/user53.jpg',
            name: 'Skyler Queen'
        },
        email: 'skyqueen@gmail.com',
        amount: 5135,
        paymentMethod: {
            card: 'images/payment-method/wise.svg',
            title: 'Wise'
        },
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    }
];