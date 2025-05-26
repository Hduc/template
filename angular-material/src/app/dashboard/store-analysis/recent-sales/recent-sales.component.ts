import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-recent-sales',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatPaginatorModule],
    templateUrl: './recent-sales.component.html',
    styleUrl: './recent-sales.component.scss'
})
export class RecentSalesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    displayedColumns: string[] = ['id', 'client', 'grandTotal', 'paymentStatus', 'paymentMethod', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    id: string;
    client: any;
    grandTotal: number;
    paymentStatus: any;
    paymentMethod: any;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#001',
        client: {
            img: 'images/users/user58.jpg',
            name: 'Johhna Loren'
        },
        grandTotal: 6240,
        paymentStatus: {
            paid: true,
            due: false
        },
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
        id: '#002',
        client: {
            img: 'images/users/user53.jpg',
            name: 'Skyler Queen'
        },
        grandTotal: 5135,
        paymentStatus: {
            paid: false,
            due: true
        },
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
        id: '#003',
        client: {
            img: 'images/users/user55.jpg',
            name: 'Jonathon Watson'
        },
        grandTotal: 4321,
        paymentStatus: {
            paid: true,
            due: false
        },
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
        id: '#004',
        client: {
            img: 'images/users/user54.jpg',
            name: 'Walter White'
        },
        grandTotal: 3124,
        paymentStatus: {
            paid: true,
            due: false
        },
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
        id: '#005',
        client: {
            img: 'images/users/user40.jpg',
            name: 'David Carlen'
        },
        grandTotal: 2137,
        paymentStatus: {
            paid: false,
            due: true
        },
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
        id: '#005',
        client: {
            img: 'images/users/user40.jpg',
            name: 'David Carlen'
        },
        grandTotal: 2137,
        paymentStatus: {
            paid: false,
            due: true
        },
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
        id: '#001',
        client: {
            img: 'images/users/user58.jpg',
            name: 'Johhna Loren'
        },
        grandTotal: 6240,
        paymentStatus: {
            paid: true,
            due: false
        },
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
        id: '#004',
        client: {
            img: 'images/users/user54.jpg',
            name: 'Walter White'
        },
        grandTotal: 3124,
        paymentStatus: {
            paid: true,
            due: false
        },
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
        id: '#003',
        client: {
            img: 'images/users/user55.jpg',
            name: 'Jonathon Watson'
        },
        grandTotal: 4321,
        paymentStatus: {
            paid: true,
            due: false
        },
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
        id: '#002',
        client: {
            img: 'images/users/user53.jpg',
            name: 'Skyler Queen'
        },
        grandTotal: 5135,
        paymentStatus: {
            paid: false,
            due: true
        },
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