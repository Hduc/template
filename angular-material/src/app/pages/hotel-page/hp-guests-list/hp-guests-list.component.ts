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
    selector: 'app-hp-guests-list',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, NgIf, MatCheckboxModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FileUploadModule],
    templateUrl: './hp-guests-list.component.html',
    styleUrl: './hp-guests-list.component.scss'
})
export class HpGuestsListComponent {

    displayedColumns: string[] = ['code', 'guestName', 'checkIn', 'checkOut', 'room', 'totalBill', 'status', 'action'];
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
    guestName: any;
    checkIn: string;
    checkOut: string;
    room: string;
    totalBill: string;
    status: any;
    action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        code: '#001',
        guestName: {
            img: 'images/users/user1.jpg',
            name: 'Joanna Watson'
        },
        checkIn: 'Nov 01, 25 - 09:42 AM',
        checkOut: 'Nov 03, 25 - 09:42 AM',
        room: 'G0-12',
        totalBill: '$166.00',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#002',
        guestName: {
            img: 'images/users/user2.jpg',
            name: 'Orion Vale'
        },
        checkIn: 'Nov 02, 25 - 10:08 AM',
        checkOut: 'Nov 05, 25 - 10:08 AM',
        room: 'L1-15',
        totalBill: '$158.50',
        status: {
            completed: false,
            pending: true,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#003',
        guestName: {
            img: 'images/users/user3.jpg',
            name: 'Seraphina Nyx'
        },
        checkIn: 'Nov 03, 25 - 11:12 AM',
        checkOut: 'Nov 07, 25 - 11:12 AM',
        room: 'L2-27',
        totalBill: '$250.50',
        status: {
            completed: false,
            pending: false,
            failed: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#004',
        guestName: {
            img: 'images/users/user4.jpg',
            name: 'Cassian Rhys'
        },
        checkIn: 'Oct 30, 25 - 10:32 AM',
        checkOut: 'Nov 01, 25 - 10:32 AM',
        room: 'G0-15',
        totalBill: '$313.99',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#005',
        guestName: {
            img: 'images/users/user5.jpg',
            name: 'Aurelia Dawn'
        },
        checkIn: 'Oct 27, 25 - 13:15 AM',
        checkOut: 'Oct 30, 25 - 13:15 AM',
        room: 'L3-32',
        totalBill: '$514.75',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#006',
        guestName: {
            img: 'images/users/user32.jpg',
            name: 'Lucien Drake'
        },
        checkIn: 'Oct 18, 25 - 12:18 AM',
        checkOut: 'Oct 21, 25 - 12:18 AM',
        room: 'G0-17',
        totalBill: '$215.99',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#007',
        guestName: {
            img: 'images/users/user33.jpg',
            name: 'Elara Quinn'
        },
        checkIn: 'Oct 15, 25 - 20:23 AM',
        checkOut: 'Oct 20, 25 - 20:23 AM',
        room: 'L1-19',
        totalBill: '$216.50',
        status: {
            completed: false,
            pending: true,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#008',
        guestName: {
            img: 'images/users/user34.jpg',
            name: 'Evander Cole'
        },
        checkIn: 'Oct 14, 25 - 21:14 AM',
        checkOut: 'Oct 18, 25 - 21:14 AM',
        room: 'G0-11',
        totalBill: '$112.99',
        status: {
            completed: false,
            pending: false,
            failed: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#009',
        guestName: {
            img: 'images/users/user35.jpg',
            name: 'Isolde Faye'
        },
        checkIn: 'Sep 05, 25 - 19:37 AM',
        checkOut: 'Sep 10, 25 - 19:37 AM',
        room: 'L2-24',
        totalBill: '$513.50',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#010',
        guestName: {
            img: 'images/users/user36.jpg',
            name: 'Theo Alistair'
        },
        checkIn: 'Sep 01, 25 - 09:42 AM',
        checkOut: 'Sep 02, 25 - 09:42 AM',
        room: 'L3-30',
        totalBill: '$115.25',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#006',
        guestName: {
            img: 'images/users/user32.jpg',
            name: 'Lucien Drake'
        },
        checkIn: 'Oct 18, 25 - 12:18 AM',
        checkOut: 'Oct 21, 25 - 12:18 AM',
        room: 'G0-17',
        totalBill: '$215.99',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#007',
        guestName: {
            img: 'images/users/user33.jpg',
            name: 'Elara Quinn'
        },
        checkIn: 'Oct 15, 25 - 20:23 AM',
        checkOut: 'Oct 20, 25 - 20:23 AM',
        room: 'L1-19',
        totalBill: '$216.50',
        status: {
            completed: false,
            pending: true,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#008',
        guestName: {
            img: 'images/users/user34.jpg',
            name: 'Evander Cole'
        },
        checkIn: 'Oct 14, 25 - 21:14 AM',
        checkOut: 'Oct 18, 25 - 21:14 AM',
        room: 'G0-11',
        totalBill: '$112.99',
        status: {
            completed: false,
            pending: false,
            failed: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#009',
        guestName: {
            img: 'images/users/user35.jpg',
            name: 'Isolde Faye'
        },
        checkIn: 'Sep 05, 25 - 19:37 AM',
        checkOut: 'Sep 10, 25 - 19:37 AM',
        room: 'L2-24',
        totalBill: '$513.50',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#010',
        guestName: {
            img: 'images/users/user36.jpg',
            name: 'Theo Alistair'
        },
        checkIn: 'Sep 01, 25 - 09:42 AM',
        checkOut: 'Sep 02, 25 - 09:42 AM',
        room: 'L3-30',
        totalBill: '$115.25',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#001',
        guestName: {
            img: 'images/users/user1.jpg',
            name: 'Joanna Watson'
        },
        checkIn: 'Nov 01, 25 - 09:42 AM',
        checkOut: 'Nov 03, 25 - 09:42 AM',
        room: 'G0-12',
        totalBill: '$166.00',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#002',
        guestName: {
            img: 'images/users/user2.jpg',
            name: 'Orion Vale'
        },
        checkIn: 'Nov 02, 25 - 10:08 AM',
        checkOut: 'Nov 05, 25 - 10:08 AM',
        room: 'L1-15',
        totalBill: '$158.50',
        status: {
            completed: false,
            pending: true,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#003',
        guestName: {
            img: 'images/users/user3.jpg',
            name: 'Seraphina Nyx'
        },
        checkIn: 'Nov 03, 25 - 11:12 AM',
        checkOut: 'Nov 07, 25 - 11:12 AM',
        room: 'L2-27',
        totalBill: '$250.50',
        status: {
            completed: false,
            pending: false,
            failed: true
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#004',
        guestName: {
            img: 'images/users/user4.jpg',
            name: 'Cassian Rhys'
        },
        checkIn: 'Oct 30, 25 - 10:32 AM',
        checkOut: 'Nov 01, 25 - 10:32 AM',
        room: 'G0-15',
        totalBill: '$313.99',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    },
    {
        code: '#005',
        guestName: {
            img: 'images/users/user5.jpg',
            name: 'Aurelia Dawn'
        },
        checkIn: 'Oct 27, 25 - 13:15 AM',
        checkOut: 'Oct 30, 25 - 13:15 AM',
        room: 'L3-32',
        totalBill: '$514.75',
        status: {
            completed: true,
            pending: false,
            failed: false
        },
        action: {
            view: 'visibility',
            edit: 'edit',
            delete: 'delete'
        }
    }
];