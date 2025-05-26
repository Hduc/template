import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-upcoming-vip-reservations',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, RouterLink],
    templateUrl: './upcoming-vip-reservations.component.html',
    styleUrl: './upcoming-vip-reservations.component.scss'
})
export class UpcomingVipReservationsComponent {
        
    displayedColumns: string[] = ['code', 'room', 'customer', 'duration', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    code: string;
    room: string;
    customer: string;
    duration: string;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        code: 'TRZ-32',
        room: 'Duluxe Room - G - 3215',
        customer: 'Angela Carter',
        duration: '10 Dec - 15 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-34',
        room: 'Sweet Suite - S - 1265',
        customer: 'Walter White',
        duration: '12 Dec - 16 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-42',
        room: 'The Queensland - Q32',
        customer: 'Zennifer Loren',
        duration: '15 Dec - 20 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-15',
        room: 'Sweet Suite - S - 3214',
        customer: 'Johna Mandala',
        duration: '11 Dec - 14 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-29',
        room: 'Duluxe Room - F - 7213',
        customer: 'Viktor James',
        duration: '10 Dec - 15 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-29',
        room: 'Duluxe Room - F - 7213',
        customer: 'Viktor James',
        duration: '10 Dec - 15 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-15',
        room: 'Sweet Suite - S - 3214',
        customer: 'Johna Mandala',
        duration: '11 Dec - 14 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-34',
        room: 'Sweet Suite - S - 1265',
        customer: 'Walter White',
        duration: '12 Dec - 16 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-42',
        room: 'The Queensland - Q32',
        customer: 'Zennifer Loren',
        duration: '15 Dec - 20 Dec',
        action: "ri-more-2-fill"
    },
    {
        code: 'TRZ-32',
        room: 'Duluxe Room - G - 3215',
        customer: 'Angela Carter',
        duration: '10 Dec - 15 Dec',
        action: "ri-more-2-fill"
    }
];