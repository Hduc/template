import { NgIf } from '@angular/common';
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

@Component({
    selector: 'app-reap-properties',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatCheckboxModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FileUploadModule],
    templateUrl: './reap-properties.component.html',
    styleUrl: './reap-properties.component.scss'
})
export class ReapPropertiesComponent {

    displayedColumns: string[] = ['code', 'property', 'address', 'views', 'date', 'status', 'action'];
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
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.code + 1}`;
    }

    // New Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}

export interface PeriodicElement {
    code: string;
    property: any;
    address: string;
    views: string;
    date: string;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        code: 'TRZ-32',
        property: {
            img: 'images/properties/property15.jpg',
            title: 'The Golden Haven',
            subTitle: 'Luxury Apartment'
        },
        address: '123 Sunshine Boulevard, Vancouver, BC',
        views: '1450',
        date: '12 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-31',
        property: {
            img: 'images/properties/property16.jpg',
            title: 'High-End Villa',
            subTitle: 'Tranquil Meadows'
        },
        address: '456 Whispering Pines Lane, Toronto, ON',
        views: '1890',
        date: '11 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-30',
        property: {
            img: 'images/properties/property17.jpg',
            title: 'Beachfront House',
            subTitle: 'Aurora Heights'
        },
        address: '789 Northern Lights Drive, Calgary, AB',
        views: '1320',
        date: '10 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-29',
        property: {
            img: 'images/properties/property18.jpg',
            title: 'Mountain Cabin',
            subTitle: 'Crystal Cove Villas'
        },
        address: '234 Seaside Avenue, Halifax, NS',
        views: '1124',
        date: '09 Nov, 25',
        status: {
            active: false,
            inactive: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-28',
        property: {
            img: 'images/properties/property19.jpg',
            title: 'Business Center',
            subTitle: 'Verdant Valley Estates'
        },
        address: '567 Greenfield Circle, Winnipeg, MB',
        views: '1532',
        date: '08 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-27',
        property: {
            img: 'images/properties/property20.jpg',
            title: 'Conference & Event Venue',
            subTitle: 'Summit Business Hub'
        },
        address: '890 Innovation Street, Ottawa, ON',
        views: '7721',
        date: '07 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-26',
        property: {
            img: 'images/properties/property21.jpg',
            title: 'Luxury Resort',
            subTitle: 'Pinnacle Plaza'
        },
        address: '345 Cityscape Road, Edmonton, AB',
        views: '5214',
        date: '06 Nov, 25',
        status: {
            active: false,
            inactive: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-25',
        property: {
            img: 'images/properties/property22.jpg',
            title: 'Beachfront Resort',
            subTitle: 'The Nexus Tower'
        },
        address: '123 Sunshine Boulevard, Vancouver, BC',
        views: '1450',
        date: '05 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-24',
        property: {
            img: 'images/properties/property23.jpg',
            title: 'Eco-Friendly Hotel',
            subTitle: 'Golden Sands Lodge'
        },
        address: '456 Whispering Pines Lane, Toronto, ON',
        views: '1890',
        date: '04 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-23',
        property: {
            img: 'images/properties/property24.jpg',
            title: 'Boutique Hotel',
            subTitle: 'Azure Bay Inn'
        },
        address: '789 Northern Lights Drive, Calgary, AB',
        views: '1320',
        date: '03 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-28',
        property: {
            img: 'images/properties/property19.jpg',
            title: 'Business Center',
            subTitle: 'Verdant Valley Estates'
        },
        address: '567 Greenfield Circle, Winnipeg, MB',
        views: '1532',
        date: '08 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-27',
        property: {
            img: 'images/properties/property20.jpg',
            title: 'Conference & Event Venue',
            subTitle: 'Summit Business Hub'
        },
        address: '890 Innovation Street, Ottawa, ON',
        views: '7721',
        date: '07 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-26',
        property: {
            img: 'images/properties/property21.jpg',
            title: 'Luxury Resort',
            subTitle: 'Pinnacle Plaza'
        },
        address: '345 Cityscape Road, Edmonton, AB',
        views: '5214',
        date: '06 Nov, 25',
        status: {
            active: false,
            inactive: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-25',
        property: {
            img: 'images/properties/property22.jpg',
            title: 'Beachfront Resort',
            subTitle: 'The Nexus Tower'
        },
        address: '123 Sunshine Boulevard, Vancouver, BC',
        views: '1450',
        date: '05 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-24',
        property: {
            img: 'images/properties/property23.jpg',
            title: 'Eco-Friendly Hotel',
            subTitle: 'Golden Sands Lodge'
        },
        address: '456 Whispering Pines Lane, Toronto, ON',
        views: '1890',
        date: '04 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-23',
        property: {
            img: 'images/properties/property24.jpg',
            title: 'Boutique Hotel',
            subTitle: 'Azure Bay Inn'
        },
        address: '789 Northern Lights Drive, Calgary, AB',
        views: '1320',
        date: '03 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-32',
        property: {
            img: 'images/properties/property15.jpg',
            title: 'The Golden Haven',
            subTitle: 'Luxury Apartment'
        },
        address: '123 Sunshine Boulevard, Vancouver, BC',
        views: '1450',
        date: '12 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-31',
        property: {
            img: 'images/properties/property16.jpg',
            title: 'High-End Villa',
            subTitle: 'Tranquil Meadows'
        },
        address: '456 Whispering Pines Lane, Toronto, ON',
        views: '1890',
        date: '11 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-30',
        property: {
            img: 'images/properties/property17.jpg',
            title: 'Beachfront House',
            subTitle: 'Aurora Heights'
        },
        address: '789 Northern Lights Drive, Calgary, AB',
        views: '1320',
        date: '10 Nov, 25',
        status: {
            active: true,
            inactive: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-29',
        property: {
            img: 'images/properties/property18.jpg',
            title: 'Mountain Cabin',
            subTitle: 'Crystal Cove Villas'
        },
        address: '234 Seaside Avenue, Halifax, NS',
        views: '1124',
        date: '09 Nov, 25',
        status: {
            active: false,
            inactive: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];