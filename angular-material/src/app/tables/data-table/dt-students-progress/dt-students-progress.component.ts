import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-dt-students-progress',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatProgressBarModule, NgIf],
    templateUrl: './dt-students-progress.component.html',
    styleUrl: './dt-students-progress.component.scss'
})
export class DtStudentsProgressComponent {

    displayedColumns: string[] = ['name', 'courseName', 'status'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    name: string;
    courseName: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: 'Olivia Clark',
        courseName: 'Web Design',
        status: {
            percentage: 55,
            primaryClassName: true,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: false
        }
    },
    {
        name: 'Alexander Garcia',
        courseName: 'Python Dev',
        status: {
            percentage: 80,
            primaryClassName: false,
            successClassName: true,
            orangeClassName: false,
            purpleClassName: false
        }
    },
    {
        name: 'Chloe Lewis',
        courseName: 'Front-end',
        status: {
            percentage: 25,
            primaryClassName: false,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: true
        }
    },
    {
        name: 'Ava Turner',
        courseName: 'Back-end',
        status: {
            percentage: 50,
            primaryClassName: false,
            successClassName: false,
            orangeClassName: true,
            purpleClassName: false
        }
    },
    {
        name: 'Ryan Flores',
        courseName: 'Data Analytics',
        status: {
            percentage: 100,
            primaryClassName: true,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: false
        }
    },
    {
        name: 'John Doe',
        courseName: 'Plugin Dev',
        status: {
            percentage: 10,
            primaryClassName: false,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: true
        }
    },
    {
        name: 'John Doe',
        courseName: 'Plugin Dev',
        status: {
            percentage: 10,
            primaryClassName: false,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: true
        }
    },
    {
        name: 'Ryan Flores',
        courseName: 'Data Analytics',
        status: {
            percentage: 100,
            primaryClassName: true,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: false
        }
    },
    {
        name: 'Ava Turner',
        courseName: 'Back-end',
        status: {
            percentage: 50,
            primaryClassName: false,
            successClassName: false,
            orangeClassName: true,
            purpleClassName: false
        }
    },
    {
        name: 'Chloe Lewis',
        courseName: 'Front-end',
        status: {
            percentage: 25,
            primaryClassName: false,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: true
        }
    },
    {
        name: 'Alexander Garcia',
        courseName: 'Python Dev',
        status: {
            percentage: 80,
            primaryClassName: false,
            successClassName: true,
            orangeClassName: false,
            purpleClassName: false
        }
    },
    {
        name: 'Olivia Clark',
        courseName: 'Web Design',
        status: {
            percentage: 55,
            primaryClassName: true,
            successClassName: false,
            orangeClassName: false,
            purpleClassName: false
        }
    }
];