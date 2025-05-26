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
    selector: 'app-hp-rooms-list',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatCheckboxModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FileUploadModule],
    templateUrl: './hp-rooms-list.component.html',
    styleUrl: './hp-rooms-list.component.scss'
})
export class HpRoomsListComponent {

    displayedColumns: string[] = ['code', 'roomName', 'bedType', 'floor', 'facilities', 'rate', 'status', 'action'];
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
    roomName: any;
    bedType: string;
    floor: string;
    facilities: string;
    rate: string;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        code: 'TRZ-32',
        roomName: {
            img: 'images/rooms/room1.jpg',
            title: 'Serenity Suite',
            subTitle: 'Elysian Grand'
        },
        bedType: 'Double Bed',
        floor: 'G-02',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$157/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-35',
        roomName: {
            img: 'images/rooms/room2.jpg',
            title: 'Cozy Book Nook',
            subTitle: 'Celestial Haven'
        },
        bedType: 'Single Bed',
        floor: 'G-01',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$146/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-36',
        roomName: {
            img: 'images/rooms/room3.jpg',
            title: 'Velvet Orchid',
            subTitle: 'Opulent Orchid'
        },
        bedType: 'Master Bed',
        floor: 'L1-15',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$125/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-37',
        roomName: {
            img: 'images/rooms/room4.jpg',
            title: 'Vintage Studio',
            subTitle: 'The Aurelia'
        },
        bedType: 'Double Bed',
        floor: 'L1-17',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$159/night',
        status: {
            available: false,
            notAvailable: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-39',
        roomName: {
            img: 'images/rooms/room5.jpg',
            title: 'Blissful Dream',
            subTitle: 'Regal Horizon'
        },
        bedType: 'Master Bed',
        floor: 'L2-22',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$120/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-42',
        roomName: {
            img: 'images/rooms/room6.jpg',
            title: 'Rustic Hearth',
            subTitle: 'Velvet Vista'
        },
        bedType: 'Single Bed',
        floor: 'L2-24',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$100/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-46',
        roomName: {
            img: 'images/rooms/room7.jpg',
            title: 'Enchanted Forest',
            subTitle: 'The Ember Nest'
        },
        bedType: 'Double Bed',
        floor: 'L2-28',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$145/night',
        status: {
            available: false,
            notAvailable: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-32',
        roomName: {
            img: 'images/rooms/room1.jpg',
            title: 'Serenity Suite',
            subTitle: 'Elysian Grand'
        },
        bedType: 'Double Bed',
        floor: 'G-02',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$157/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-35',
        roomName: {
            img: 'images/rooms/room2.jpg',
            title: 'Cozy Book Nook',
            subTitle: 'Celestial Haven'
        },
        bedType: 'Single Bed',
        floor: 'G-01',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$146/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-36',
        roomName: {
            img: 'images/rooms/room3.jpg',
            title: 'Velvet Orchid',
            subTitle: 'Opulent Orchid'
        },
        bedType: 'Master Bed',
        floor: 'L1-15',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$125/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-42',
        roomName: {
            img: 'images/rooms/room6.jpg',
            title: 'Rustic Hearth',
            subTitle: 'Velvet Vista'
        },
        bedType: 'Single Bed',
        floor: 'L2-24',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$100/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-46',
        roomName: {
            img: 'images/rooms/room7.jpg',
            title: 'Enchanted Forest',
            subTitle: 'The Ember Nest'
        },
        bedType: 'Double Bed',
        floor: 'L2-28',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$145/night',
        status: {
            available: false,
            notAvailable: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-32',
        roomName: {
            img: 'images/rooms/room1.jpg',
            title: 'Serenity Suite',
            subTitle: 'Elysian Grand'
        },
        bedType: 'Double Bed',
        floor: 'G-02',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$157/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-35',
        roomName: {
            img: 'images/rooms/room2.jpg',
            title: 'Cozy Book Nook',
            subTitle: 'Celestial Haven'
        },
        bedType: 'Single Bed',
        floor: 'G-01',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$146/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-36',
        roomName: {
            img: 'images/rooms/room3.jpg',
            title: 'Velvet Orchid',
            subTitle: 'Opulent Orchid'
        },
        bedType: 'Master Bed',
        floor: 'L1-15',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$125/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-32',
        roomName: {
            img: 'images/rooms/room1.jpg',
            title: 'Serenity Suite',
            subTitle: 'Elysian Grand'
        },
        bedType: 'Double Bed',
        floor: 'G-02',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$157/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-35',
        roomName: {
            img: 'images/rooms/room2.jpg',
            title: 'Cozy Book Nook',
            subTitle: 'Celestial Haven'
        },
        bedType: 'Single Bed',
        floor: 'G-01',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$146/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-36',
        roomName: {
            img: 'images/rooms/room3.jpg',
            title: 'Velvet Orchid',
            subTitle: 'Opulent Orchid'
        },
        bedType: 'Master Bed',
        floor: 'L1-15',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$125/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-37',
        roomName: {
            img: 'images/rooms/room4.jpg',
            title: 'Vintage Studio',
            subTitle: 'The Aurelia'
        },
        bedType: 'Double Bed',
        floor: 'L1-17',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$159/night',
        status: {
            available: false,
            notAvailable: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: 'TRZ-39',
        roomName: {
            img: 'images/rooms/room5.jpg',
            title: 'Blissful Dream',
            subTitle: 'Regal Horizon'
        },
        bedType: 'Master Bed',
        floor: 'L2-22',
        facilities: 'High-speed Wi-Fi, Comfortable bedding and pillows, Temperature control (AC/heating)',
        rate: '$120/night',
        status: {
            available: true,
            notAvailable: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];