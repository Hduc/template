import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-my-recent-patients',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf],
    templateUrl: './my-recent-patients.component.html',
    styleUrl: './my-recent-patients.component.scss'
})
export class MyRecentPatientsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
    displayedColumns: string[] = ['id', 'patientName', 'disease', 'paymentStatus', 'status', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    id: string;
    patientName: any;
    disease: string;
    paymentStatus: string;
    action: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#001',
        patientName: {
            img: 'images/users/user33.jpg',
            name: 'Johhna Loren',
            email: 'loren123@gmail.com'
        },
        disease: 'Heart Attack',
        paymentStatus: 'Paid',
        action: "ri-more-2-fill",
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        id: '#002',
        patientName: {
            img: 'images/users/user34.jpg',
            name: 'Skyler White',
            email: 'skywhite@gmail.com'
        },
        disease: 'Chest Pain',
        paymentStatus: 'Paid',
        action: "ri-more-2-fill",
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    },
    {
        id: '#003',
        patientName: {
            img: 'images/users/user35.jpg',
            name: 'Jonathon Watson',
            email: 'jona2134@gmail.com'
        },
        disease: 'Breathing Issue',
        paymentStatus: 'Unpaid',
        action: "ri-more-2-fill",
        status: {
            completed: false,
            pending: false,
            failed: true
        }
    },
    {
        id: '#004',
        patientName: {
            img: 'images/users/user36.jpg',
            name: 'Walter White',
            email: 'walterwhite@gmail.com'
        },
        disease: 'Heart Surgery',
        paymentStatus: 'Paid',
        action: "ri-more-2-fill",
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        id: '#005',
        patientName: {
            img: 'images/users/user37.jpg',
            name: 'David Carlen',
            email: 'davidcarlen@gmail.com'
        },
        disease: 'CVD',
        paymentStatus: 'Unpaid',
        action: "ri-more-2-fill",
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    },
    {
        id: '#005',
        patientName: {
            img: 'images/users/user37.jpg',
            name: 'David Carlen',
            email: 'davidcarlen@gmail.com'
        },
        disease: 'CVD',
        paymentStatus: 'Unpaid',
        action: "ri-more-2-fill",
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    },
    {
        id: '#001',
        patientName: {
            img: 'images/users/user33.jpg',
            name: 'Johhna Loren',
            email: 'loren123@gmail.com'
        },
        disease: 'Heart Attack',
        paymentStatus: 'Paid',
        action: "ri-more-2-fill",
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        id: '#004',
        patientName: {
            img: 'images/users/user36.jpg',
            name: 'Walter White',
            email: 'walterwhite@gmail.com'
        },
        disease: 'Heart Surgery',
        paymentStatus: 'Paid',
        action: "ri-more-2-fill",
        status: {
            completed: true,
            pending: false,
            failed: false
        }
    },
    {
        id: '#003',
        patientName: {
            img: 'images/users/user35.jpg',
            name: 'Jonathon Watson',
            email: 'jona2134@gmail.com'
        },
        disease: 'Breathing Issue',
        paymentStatus: 'Unpaid',
        action: "ri-more-2-fill",
        status: {
            completed: false,
            pending: false,
            failed: true
        }
    },
    {
        id: '#002',
        patientName: {
            img: 'images/users/user34.jpg',
            name: 'Skyler White',
            email: 'skywhite@gmail.com'
        },
        disease: 'Chest Pain',
        paymentStatus: 'Paid',
        action: "ri-more-2-fill",
        status: {
            completed: false,
            pending: true,
            failed: false
        }
    }
];