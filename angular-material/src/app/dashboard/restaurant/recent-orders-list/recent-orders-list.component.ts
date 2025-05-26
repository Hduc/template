import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-recent-orders-list',
    imports: [NgIf, RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './recent-orders-list.component.html',
    styleUrl: './recent-orders-list.component.scss'
})
export class RecentOrdersListComponent {
        
    displayedColumns: string[] = ['code', 'item', 'quantity', 'customer', 'location', 'deliveryTime', 'price', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    code: string;
    item: any;
    quantity: number;
    customer: string;
    location: string;
    deliveryTime: string;
    price: string;
    status: any;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        code: '#001',
        item: {
            img: 'images/restaurant/order1.jpg',
            name: 'Fish Cutlet'
        },
        quantity: 5,
        customer: 'Johnna Loren',
        location: 'Washington, D.C.',
        deliveryTime: '10:05 AM',
        price: '35.75',
        action: "ri-more-2-fill",
        status: {
            delivered: true,
            processing: false,
            cancelled: false
        }
    },
    {
        code: '#002',
        item: {
            img: 'images/restaurant/order2.jpg',
            name: 'Pea Creamy Soup'
        },
        quantity: 1,
        customer: 'Skyler White',
        location: 'Los Angeles, CA',
        deliveryTime: '11:15 AM',
        price: '24.30',
        action: "ri-more-2-fill",
        status: {
            delivered: false,
            processing: true,
            cancelled: false
        }
    },
    {
        code: '#003',
        item: {
            img: 'images/restaurant/order3.jpg',
            name: 'Macaroon 02'
        },
        quantity: 2,
        customer: 'Jonathon Watson',
        location: 'New York, NY',
        deliveryTime: '11:30 AM',
        price: '21.15',
        action: "ri-more-2-fill",
        status: {
            delivered: false,
            processing: false,
            cancelled: true
        }
    },
    {
        code: '#004',
        item: {
            img: 'images/restaurant/order4.jpg',
            name: 'Healthy Salad Bowl'
        },
        quantity: 1,
        customer: 'Walter White',
        location: 'San Jose, CA',
        deliveryTime: '11:52 AM',
        price: '12.20',
        action: "ri-more-2-fill",
        status: {
            delivered: true,
            processing: false,
            cancelled: false
        }
    },
    {
        code: '#005',
        item: {
            img: 'images/restaurant/order5.jpg',
            name: 'Macaroon'
        },
        quantity: 1,
        customer: 'David Carlen',
        location: 'Redmond, WA',
        deliveryTime: '12:05 PM',
        price: '21.50',
        action: "ri-more-2-fill",
        status: {
            delivered: false,
            processing: true,
            cancelled: false
        }
    },
    {
        code: '#005',
        item: {
            img: 'images/restaurant/order5.jpg',
            name: 'Macaroon'
        },
        quantity: 1,
        customer: 'David Carlen',
        location: 'Redmond, WA',
        deliveryTime: '12:05 PM',
        price: '21.50',
        action: "ri-more-2-fill",
        status: {
            delivered: false,
            processing: true,
            cancelled: false
        }
    },
    {
        code: '#001',
        item: {
            img: 'images/restaurant/order1.jpg',
            name: 'Fish Cutlet'
        },
        quantity: 5,
        customer: 'Johnna Loren',
        location: 'Washington, D.C.',
        deliveryTime: '10:05 AM',
        price: '35.75',
        action: "ri-more-2-fill",
        status: {
            delivered: true,
            processing: false,
            cancelled: false
        }
    },
    {
        code: '#004',
        item: {
            img: 'images/restaurant/order4.jpg',
            name: 'Healthy Salad Bowl'
        },
        quantity: 1,
        customer: 'Walter White',
        location: 'San Jose, CA',
        deliveryTime: '11:52 AM',
        price: '12.20',
        action: "ri-more-2-fill",
        status: {
            delivered: true,
            processing: false,
            cancelled: false
        }
    },
    {
        code: '#003',
        item: {
            img: 'images/restaurant/order3.jpg',
            name: 'Macaroon 02'
        },
        quantity: 2,
        customer: 'Jonathon Watson',
        location: 'New York, NY',
        deliveryTime: '11:30 AM',
        price: '21.15',
        action: "ri-more-2-fill",
        status: {
            delivered: false,
            processing: false,
            cancelled: true
        }
    },
    {
        code: '#002',
        item: {
            img: 'images/restaurant/order2.jpg',
            name: 'Pea Creamy Soup'
        },
        quantity: 1,
        customer: 'Skyler White',
        location: 'Los Angeles, CA',
        deliveryTime: '11:15 AM',
        price: '24.30',
        action: "ri-more-2-fill",
        status: {
            delivered: false,
            processing: true,
            cancelled: false
        }
    }
];