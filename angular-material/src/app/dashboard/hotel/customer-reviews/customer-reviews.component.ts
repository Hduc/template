import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-customer-reviews',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule],
    templateUrl: './customer-reviews.component.html',
    styleUrl: './customer-reviews.component.scss'
})
export class CustomerReviewsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
        
    displayedColumns: string[] = ['userID', 'customerName', 'ratings', 'reviews', 'date', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    userID: string;
    customerName: any;
    ratings: any;
    reviews: any;
    date: string;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        userID: '#001',
        customerName: {
            img: 'images/users/user58.jpg',
            name: 'Joanna Watson'
        },
        ratings: {
            star: 'ri-star-fill',
            number: '5.0'
        },
        reviews: {
            title: 'Amazing Ambiance and Delicious Food!',
            desc: 'Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!'
        },
        date: '13 Nov, 25',
        action: "ri-more-2-fill"
    },
    {
        userID: '#002',
        customerName: {
            img: 'images/users/user59.jpg',
            name: 'Jenelia Anderson'
        },
        ratings: {
            star: 'ri-star-fill',
            number: '5.0'
        },
        reviews: {
            title: 'Best Brunch Spot in Town',
            desc: 'Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!'
        },
        date: '13 Nov, 25',
        action: "ri-more-2-fill"
    },
    {
        userID: '#003',
        customerName: {
            img: 'images/users/user60.jpg',
            name: 'Jonathon Ronan'
        },
        ratings: {
            star: 'ri-star-fill',
            number: '5.0'
        },
        reviews: {
            title: 'Good Food, Slow Service',
            desc: 'The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It’s a nice spot, but they could work on speeding up their service.'
        },
        date: '13 Nov, 25',
        action: "ri-more-2-fill"
    },
    {
        userID: '#002',
        customerName: {
            img: 'images/users/user59.jpg',
            name: 'Jenelia Anderson'
        },
        ratings: {
            star: 'ri-star-fill',
            number: '5.0'
        },
        reviews: {
            title: 'Best Brunch Spot in Town',
            desc: 'Visited Trezo for brunch with friends, and it exceeded our expectations. The avocado toast was fresh, and their mimosas were spot-on. Our server was attentive without being intrusive. Definitely coming back!'
        },
        date: '13 Nov, 25',
        action: "ri-more-2-fill"
    },
    {
        userID: '#003',
        customerName: {
            img: 'images/users/user60.jpg',
            name: 'Jonathon Ronan'
        },
        ratings: {
            star: 'ri-star-fill',
            number: '5.0'
        },
        reviews: {
            title: 'Good Food, Slow Service',
            desc: 'The food at Trezo was delicious, but the service was a bit slow. We had to wait a while for our appetizers, and our main course was delayed. It’s a nice spot, but they could work on speeding up their service.'
        },
        date: '13 Nov, 25',
        action: "ri-more-2-fill"
    },
    {
        userID: '#001',
        customerName: {
            img: 'images/users/user58.jpg',
            name: 'Joanna Watson'
        },
        ratings: {
            star: 'ri-star-fill',
            number: '5.0'
        },
        reviews: {
            title: 'Amazing Ambiance and Delicious Food!',
            desc: 'Trezo was a fantastic dining experience. The ambiance is warm and inviting, perfect for a date night or celebration. I ordered the truffle pasta, which was rich and perfectly seasoned. The service was impeccable, and the staff made us feel like family. Highly recommend!'
        },
        date: '13 Nov, 25',
        action: "ri-more-2-fill"
    }
];