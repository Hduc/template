import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-my-drive',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FileUploadModule],
    templateUrl: './my-drive.component.html',
    styleUrl: './my-drive.component.scss'
})
export class MyDriveComponent {

    displayedColumns: string[] = ['fileName', 'owner', 'listedDate', 'fileType', 'fileSize', 'fileItems', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}

export interface PeriodicElement {
    fileName: string;
    owner: string;
    listedDate: string;
    fileType: string;
    fileSize: string;
    fileItems: string;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        fileName: 'Dashboard Design',
        owner: 'Linda Maddox',
        listedDate: '20 Nov 2025',
        fileType: '.pdf',
        fileSize: '1.2 GB',
        fileItems: '69',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Important Documents',
        owner: 'Juanita Lavigne',
        listedDate: '18 Nov 2025',
        fileType: '.zip',
        fileSize: '2.6 GB',
        fileItems: '236',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Product Design',
        owner: 'Roy Pope',
        listedDate: '17 Nov 2025',
        fileType: '.psd',
        fileSize: '3.2 GB',
        fileItems: '365',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Dashboard Design File',
        owner: 'Cecil Jones',
        listedDate: '15 Nov 2025',
        fileType: '.fig',
        fileSize: '1 GB',
        fileItems: '25',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Media Files',
        owner: 'Trudy Venegas',
        listedDate: '14 Nov 2025',
        fileType: '.jpg',
        fileSize: '1.5 GB',
        fileItems: '153',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Graphic Design File',
        owner: 'Sharilyn Goodall',
        listedDate: '13 Nov 2025',
        fileType: '.png',
        fileSize: '1.6 GB',
        fileItems: '142',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Personal Photo',
        owner: 'Annie Carver',
        listedDate: '09 Nov 2025',
        fileType: '.gif',
        fileSize: '1.2 GB',
        fileItems: '175',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Audio File',
        owner: 'Winona Etzel',
        listedDate: '08 Nov 2025',
        fileType: '.mp3',
        fileSize: '1.3 GB',
        fileItems: '136',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Audio File',
        owner: 'Winona Etzel',
        listedDate: '08 Nov 2025',
        fileType: '.mp3',
        fileSize: '1.3 GB',
        fileItems: '136',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Personal Photo',
        owner: 'Annie Carver',
        listedDate: '09 Nov 2025',
        fileType: '.gif',
        fileSize: '1.2 GB',
        fileItems: '175',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Graphic Design File',
        owner: 'Sharilyn Goodall',
        listedDate: '13 Nov 2025',
        fileType: '.png',
        fileSize: '1.6 GB',
        fileItems: '142',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Media Files',
        owner: 'Trudy Venegas',
        listedDate: '14 Nov 2025',
        fileType: '.jpg',
        fileSize: '1.5 GB',
        fileItems: '153',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Dashboard Design File',
        owner: 'Cecil Jones',
        listedDate: '15 Nov 2025',
        fileType: '.fig',
        fileSize: '1 GB',
        fileItems: '25',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Product Design',
        owner: 'Roy Pope',
        listedDate: '17 Nov 2025',
        fileType: '.psd',
        fileSize: '3.2 GB',
        fileItems: '365',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Important Documents',
        owner: 'Juanita Lavigne',
        listedDate: '18 Nov 2025',
        fileType: '.zip',
        fileSize: '2.6 GB',
        fileItems: '236',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        fileName: 'Dashboard Design',
        owner: 'Linda Maddox',
        listedDate: '20 Nov 2025',
        fileType: '.pdf',
        fileSize: '1.2 GB',
        fileItems: '69',
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];