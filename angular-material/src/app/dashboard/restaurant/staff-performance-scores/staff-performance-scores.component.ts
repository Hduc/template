import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-staff-performance-scores',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule],
    templateUrl: './staff-performance-scores.component.html',
    styleUrl: './staff-performance-scores.component.scss'
})
export class StaffPerformanceScoresComponent {

    displayedColumns: string[] = ['client', 'score'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
}

export interface PeriodicElement {
    client: any;
    score: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        client: {
            img: 'images/users/user58.jpg',
            name: 'Joanna Watson'
        },
        score: '98'
    },
    {
        client: {
            img: 'images/users/user59.jpg',
            name: 'Angela Carter'
        },
        score: '97'
    },
    {
        client: {
            img: 'images/users/user60.jpg',
            name: 'Walter White'
        },
        score: '96'
    },
    {
        client: {
            img: 'images/users/user61.jpg',
            name: 'Gary Simon'
        },
        score: '88'
    },
    {
        client: {
            img: 'images/users/user62.jpg',
            name: 'Zinia Anderson'
        },
        score: '85'
    },
    {
        client: {
            img: 'images/users/user63.jpg',
            name: 'Loren Walter'
        },
        score: '82'
    },
    {
        client: {
            img: 'images/users/user64.jpg',
            name: 'Jessy Pinkman'
        },
        score: '80'
    },
    {
        client: {
            img: 'images/users/user65.jpg',
            name: 'Handy Curter'
        },
        score: '77'
    },
    {
        client: {
            img: 'images/users/user66.jpg',
            name: 'Skyler Lorensa'
        },
        score: '75'
    }
];