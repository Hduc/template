import { RouterLink } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { SelectionModel } from '@angular/cdk/collections';
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
    selector: 'app-d-patients-list',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FileUploadModule],
    templateUrl: './d-patients-list.component.html',
    styleUrl: './d-patients-list.component.scss'
})
export class DPatientsListComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['select', 'id', 'patient', 'email', 'phoneNo', 'disease', 'appointDate', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    selection = new SelectionModel<PeriodicElement>(true, []);

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    // Search Filter
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.patient + 1}`;
    }

}

export interface PeriodicElement {
    id: string;
    patient: any;
    email: string;
    phoneNo: string;
    disease: string;
    appointDate: string;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#001',
        patient: {
            img: 'images/users/user33.jpg',
            name: 'Johhna Loren'
        },
        email: 'lorenjohna@gmail.com',
        phoneNo: '+1 555-225-4488',
        disease: 'Heart Attack',
        appointDate: '05 Nov, 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#002',
        patient: {
            img: 'images/users/user34.jpg',
            name: 'Skyler White'
        },
        email: 'skylerwhite@gmail.com',
        phoneNo: '+1 555-987-6543',
        disease: 'HBP',
        appointDate: '18 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#003',
        patient: {
            img: 'images/users/user35.jpg',
            name: 'Jonathon Watson'
        },
        email: 'jonathonwatson@gmail.com',
        phoneNo: '+1 555-456-7890',
        disease: 'Chest Pain',
        appointDate: '17 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#004',
        patient: {
            img: 'images/users/user36.jpg',
            name: 'Walter White'
        },
        email: 'walterwhite@gmail.com',
        phoneNo: '+1 555-369-7878',
        disease: 'Breathing Problem',
        appointDate: '16 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#005',
        patient: {
            img: 'images/users/user37.jpg',
            name:'David Carlen'
        },
        email: 'davidcarlen@gmail.com',
        phoneNo: '+1 555-658-4488',
        disease: 'Minor Heart Attack',
        appointDate: '15 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#006',
        patient: {
            img: 'images/users/user32.jpg',
            name: 'Jenny Loren'
        },
        email: 'jennyloren@gmail.com',
        phoneNo: '+1 555-558-9966',
        disease: 'Artery Blockage',
        appointDate: '14 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#007',
        patient: {
            img: 'images/users/user31.jpg',
            name: 'Bradly Smith'
        },
        email: 'bradlysmith@gmail.com',
        phoneNo: '+1 555-357-5888',
        disease: 'Chest Pain',
        appointDate: '13 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#008',
        patient: {
            img: 'images/users/user30.jpg',
            name: 'Victor James'
        },
        email: 'victorjames@gmail.com',
        phoneNo: '+1 555-456-8877',
        disease: 'Heart Attack',
        appointDate: '12 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#009',
        patient: {
            img: 'images/users/user29.jpg',
            name: 'Jenny Carla'
        },
        email: 'jennycarla@gmail.com',
        phoneNo: '+1 555-622-4488',
        disease: 'Breathing Problem',
        appointDate: '11 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#010',
        patient: {
            img: 'images/users/user15.jpg',
            name: 'Jane Ronan'
        },
        email: 'janeronan@gmail.com',
        phoneNo: '+1 555-225-4488',
        disease: 'HBP',
        appointDate: '10 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#010',
        patient: {
            img: 'images/users/user15.jpg',
            name: 'Jane Ronan'
        },
        email: 'janeronan@gmail.com',
        phoneNo: '+1 555-225-4488',
        disease: 'HBP',
        appointDate: '10 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#009',
        patient: {
            img: 'images/users/user29.jpg',
            name: 'Jenny Carla'
        },
        email: 'jennycarla@gmail.com',
        phoneNo: '+1 555-622-4488',
        disease: 'Breathing Problem',
        appointDate: '11 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#008',
        patient: {
            img: 'images/users/user30.jpg',
            name: 'Victor James'
        },
        email: 'victorjames@gmail.com',
        phoneNo: '+1 555-456-8877',
        disease: 'Heart Attack',
        appointDate: '12 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#007',
        patient: {
            img: 'images/users/user31.jpg',
            name: 'Bradly Smith'
        },
        email: 'bradlysmith@gmail.com',
        phoneNo: '+1 555-357-5888',
        disease: 'Chest Pain',
        appointDate: '13 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#006',
        patient: {
            img: 'images/users/user32.jpg',
            name: 'Jenny Loren'
        },
        email: 'jennyloren@gmail.com',
        phoneNo: '+1 555-558-9966',
        disease: 'Artery Blockage',
        appointDate: '14 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#005',
        patient: {
            img: 'images/users/user37.jpg',
            name:'David Carlen'
        },
        email: 'davidcarlen@gmail.com',
        phoneNo: '+1 555-658-4488',
        disease: 'Minor Heart Attack',
        appointDate: '15 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#004',
        patient: {
            img: 'images/users/user36.jpg',
            name: 'Walter White'
        },
        email: 'walterwhite@gmail.com',
        phoneNo: '+1 555-369-7878',
        disease: 'Breathing Problem',
        appointDate: '16 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#003',
        patient: {
            img: 'images/users/user35.jpg',
            name: 'Jonathon Watson'
        },
        email: 'jonathonwatson@gmail.com',
        phoneNo: '+1 555-456-7890',
        disease: 'Chest Pain',
        appointDate: '17 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#002',
        patient: {
            img: 'images/users/user34.jpg',
            name: 'Skyler White'
        },
        email: 'skylerwhite@gmail.com',
        phoneNo: '+1 555-987-6543',
        disease: 'HBP',
        appointDate: '18 Nov 2025',
        action: "ri-more-2-fill"
    },
    {
        id: '#001',
        patient: {
            img: 'images/users/user33.jpg',
            name: 'Johhna Loren'
        },
        email: 'lorenjohna@gmail.com',
        phoneNo: '+1 555-225-4488',
        disease: 'Heart Attack',
        appointDate: '05 Nov, 2025',
        action: "ri-more-2-fill"
    }
];