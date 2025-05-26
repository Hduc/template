import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-top-customers',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf],
    templateUrl: './top-customers.component.html',
    styleUrl: './top-customers.component.scss'
})
export class TopCustomersComponent {
        
    displayedColumns: string[] = ['id', 'customerName', 'phoneNo', 'email', 'preferredService', 'lastVisit', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    id: string;
    customerName: any;
    phoneNo: string;
    email: string;
    preferredService: string;
    lastVisit: string;
    status: any;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#001',
        customerName: {
            img: 'images/users/user33.jpg',
            name: 'Johhna Loren'
        },
        phoneNo: '+321 427 8690',
        email: 'loren123@gmail.com',
        preferredService: 'Nail Art',
        lastVisit: '17 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: true,
            royal: false,
            normal: false
        }
    },
    {
        id: '#002',
        customerName: {
            img: 'images/users/user34.jpg',
            name: 'Skyler White'
        },
        phoneNo: '+321 427 3980',
        email: 'skyqueen@gmail.com',
        preferredService: 'Hair Cut',
        lastVisit: '18 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: false,
            royal: true,
            normal: false
        }
    },
    {
        id: '#003',
        customerName: {
            img: 'images/users/user35.jpg',
            name: 'Jonathon Watson'
        },
        phoneNo: '+321 427 1243',
        email: 'jona2134@gmail.com',
        preferredService: 'Manicure',
        lastVisit: '19 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: false,
            royal: false,
            normal: true
        }
    },
    {
        id: '#004',
        customerName: {
            img: 'images/users/user36.jpg',
            name: 'Walter White'
        },
        phoneNo: '+321 427 7685',
        email: 'puzzleworld@gmail.com',
        preferredService: 'Facial',
        lastVisit: '21 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: true,
            royal: false,
            normal: false
        }
    },
    {
        id: '#005',
        customerName: {
            img: 'images/users/user37.jpg',
            name: 'David Carlen'
        },
        phoneNo: '+321 427 9021',
        email: 'liveslong@gmail.com',
        preferredService: 'Pedicure',
        lastVisit: '25 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: false,
            royal: true,
            normal: false
        }
    },
    {
        id: '#005',
        customerName: {
            img: 'images/users/user37.jpg',
            name: 'David Carlen'
        },
        phoneNo: '+321 427 9021',
        email: 'liveslong@gmail.com',
        preferredService: 'Pedicure',
        lastVisit: '25 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: false,
            royal: true,
            normal: false
        }
    },
    {
        id: '#001',
        customerName: {
            img: 'images/users/user33.jpg',
            name: 'Johhna Loren'
        },
        phoneNo: '+321 427 8690',
        email: 'loren123@gmail.com',
        preferredService: 'Nail Art',
        lastVisit: '17 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: true,
            royal: false,
            normal: false
        }
    },
    {
        id: '#004',
        customerName: {
            img: 'images/users/user36.jpg',
            name: 'Walter White'
        },
        phoneNo: '+321 427 7685',
        email: 'puzzleworld@gmail.com',
        preferredService: 'Facial',
        lastVisit: '21 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: true,
            royal: false,
            normal: false
        }
    },
    {
        id: '#003',
        customerName: {
            img: 'images/users/user35.jpg',
            name: 'Jonathon Watson'
        },
        phoneNo: '+321 427 1243',
        email: 'jona2134@gmail.com',
        preferredService: 'Manicure',
        lastVisit: '19 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: false,
            royal: false,
            normal: true
        }
    },
    {
        id: '#002',
        customerName: {
            img: 'images/users/user34.jpg',
            name: 'Skyler White'
        },
        phoneNo: '+321 427 3980',
        email: 'skyqueen@gmail.com',
        preferredService: 'Hair Cut',
        lastVisit: '18 Oct, 2025',
        action: "ri-more-2-fill",
        status: {
            vip: false,
            royal: true,
            normal: false
        }
    }
];