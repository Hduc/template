import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-tickets',
    imports: [NgIf, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule],
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
        
    displayedColumns: string[] = ['code', 'ticket', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
}

export interface PeriodicElement {
    code: string;
    ticket: any;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        code: '#3242',
        ticket: {
            title: 'Order delayed for 5 mins',
            updatedAt: '17 Nov, 2025'
        },
        status: {
            solved: true,
            pending: false
        }
    },
    {
        code: '#3243',
        ticket: {
            title: 'Provide rotten Burger',
            updatedAt: '16 Nov, 2025'
        },
        status: {
            solved: false,
            pending: true
        }
    },
    {
        code: '#3244',
        ticket: {
            title: 'Too much salt in Pizza',
            updatedAt: '15 Nov, 2025'
        },
        status: {
            solved: true,
            pending: false
        }
    },
    {
        code: '#3245',
        ticket: {
            title: 'Order delayed for 3 mins',
            updatedAt: '14 Nov, 2025'
        },
        status: {
            solved: true,
            pending: false
        }
    },
    {
        code: '#3246',
        ticket: {
            title: 'Delivery man misbehaved',
            updatedAt: '13 Nov, 2025'
        },
        status: {
            solved: false,
            pending: true
        }
    },
    {
        code: '#3247',
        ticket: {
            title: 'App doesn’t work',
            updatedAt: '12 Nov, 2025'
        },
        status: {
            solved: true,
            pending: false
        }
    },
    {
        code: '#3244',
        ticket: {
            title: 'Too much salt in Pizza',
            updatedAt: '11 Nov, 2025'
        },
        status: {
            solved: true,
            pending: false
        }
    }
];