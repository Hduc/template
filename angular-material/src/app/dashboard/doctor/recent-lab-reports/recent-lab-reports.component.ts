import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-recent-lab-reports',
    imports: [MatCardModule, MatTableModule, MatButtonModule],
    templateUrl: './recent-lab-reports.component.html',
    styleUrl: './recent-lab-reports.component.scss'
})
export class RecentLabReportsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
        
    displayedColumns: string[] = ['reportFile', 'download'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    
}

export interface PeriodicElement {
    reportFile: any;
    download: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        reportFile: {
            img: 'images/icons/pdf.png',
            name: 'Blood Report.pdf',
            author: 'Andrew'
        },
        download: 'ri-download-2-line'
    },
    {
        reportFile: {
            img: 'images/icons/jpg.png',
            name: 'X-ray Report.jpg',
            author: 'Joanna'
        },
        download: 'ri-download-2-line'
    },
    {
        reportFile: {
            img: 'images/icons/png.png',
            name: 'Creatinine Report.pdf',
            author: 'David'
        },
        download: 'ri-download-2-line'
    },
    {
        reportFile: {
            img: 'images/icons/pdf.png',
            name: 'Blood Report',
            author: 'Zinia'
        },
        download: 'ri-download-2-line'
    },
    {
        reportFile: {
            img: 'images/icons/doc.png',
            name: 'ECG Report.doc',
            author: 'Bella'
        },
        download: 'ri-download-2-line'
    },
    {
        reportFile: {
            img: 'images/icons/pdf.png',
            name: 'Blood Report',
            author: 'Jonathon'
        },
        download: 'ri-download-2-line'
    }
];