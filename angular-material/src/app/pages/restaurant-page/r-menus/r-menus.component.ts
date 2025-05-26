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
    selector: 'app-r-menus',
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FileUploadModule],
    templateUrl: './r-menus.component.html',
    styleUrl: './r-menus.component.scss'
})
export class RMenusComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    displayedColumns: string[] = ['select', 'id', 'item', 'price', 'ingredients', 'action'];
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
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.item + 1}`;
    }

    // New Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Edit Popup Trigger
    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

}

export interface PeriodicElement {
    id: string;
    item: any;
    price: number;
    ingredients: string;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#001',
        item: {
            img: 'images/restaurant/menu1.png',
            name: 'Buffalo Chicken'
        },
        price: 16.00,
        ingredients: 'pan-seared chicken, lemon zest, garlic butter, parsley',
        action: "ri-more-2-fill"
    },
    {
        id: '#002',
        item: {
            img: 'images/restaurant/menu2.png',
            name: 'Chicken Carbonara Spaghetti'
        },
        price: 15.50,
        ingredients: 'grilled chicken, honey mustard glaze, spinach, garlic',
        action: "ri-more-2-fill"
    },
    {
        id: '#003',
        item: {
            img: 'images/restaurant/menu3.png',
            name: 'Chicken Piccata Spaghetti'
        },
        price: 14.50,
        ingredients: 'shredded chicken, buffalo sauce, ranch dressing',
        action: "ri-more-2-fill"
    },
    {
        id: '#004',
        item: {
            img: 'images/restaurant/menu4.png',
            name: 'Thai Peanut Chicken Spaghetti'
        },
        price: 13.99,
        ingredients: 'spaghetti, chicken, crispy bacon, egg yolk, parmesan, cream',
        action: "ri-more-2-fill"
    },
    {
        id: '#005',
        item: {
            img: 'images/restaurant/menu5.png',
            name: 'Chicken Bolognese Spaghetti'
        },
        price: 14.75,
        ingredients: 'pan-fried chicken, capers, white wine sauce, lemon',
        action: "ri-more-2-fill"
    },
    {
        id: '#006',
        item: {
            img: 'images/restaurant/menu6.png',
            name: 'Mediterranean Chicken Spaghetti'
        },
        price: 15.99,
        ingredients: 'grilled chicken, olives, sun-dried tomatoes, feta',
        action: "ri-more-2-fill"
    },
    {
        id: '#007',
        item: {
            img: 'images/restaurant/menu7.png',
            name: 'Chicken Parmesan Spaghetti'
        },
        price: 16.50,
        ingredients: 'breaded chicken cutlets, marinara sauce, spaghetti',
        action: "ri-more-2-fill"
    },
    {
        id: '#008',
        item: {
            img: 'images/restaurant/menu8.png',
            name: 'Chicken and Mushroom Spaghetti'
        },
        price: 12.90,
        ingredients: 'spaghetti, chicken slices, sautéed mushrooms, garlic',
        action: "ri-more-2-fill"
    },
    {
        id: '#009',
        item: {
            img: 'images/restaurant/menu9.png',
            name: 'Teriyaki Chicken Spaghetti Stir-Fry'
        },
        price: 13.50,
        ingredients: 'chicken strips, teriyaki sauce, bell peppers, sesame seeds',
        action: "ri-more-2-fill"
    },
    {
        id: '#010',
        item: {
            img: 'images/restaurant/menu10.png',
            name: 'Chicken Fajita Spaghetti'
        },
        price: 15.25,
        ingredients: 'pan-seared chicken, lemon zest, garlic butter, parsley',
        action: "ri-more-2-fill"
    },
    {
        id: '#010',
        item: {
            img: 'images/restaurant/menu10.png',
            name: 'Chicken Fajita Spaghetti'
        },
        price: 15.25,
        ingredients: 'chicken, fajita seasoning, bell peppers',
        action: "ri-more-2-fill"
    },
    {
        id: '#009',
        item: {
            img: 'images/restaurant/menu9.png',
            name: 'Teriyaki Chicken Spaghetti Stir-Fry'
        },
        price: 13.50,
        ingredients: 'chicken, fajita seasoning, bell peppers',
        action: "ri-more-2-fill"
    },
    {
        id: '#008',
        item: {
            img: 'images/restaurant/menu8.png',
            name: 'Chicken and Mushroom Spaghetti'
        },
        price: 12.90,
        ingredients: 'spaghetti, chicken slices, sautéed mushrooms, garlic',
        action: "ri-more-2-fill"
    },
    {
        id: '#007',
        item: {
            img: 'images/restaurant/menu7.png',
            name: 'Chicken Parmesan Spaghetti'
        },
        price: 16.50,
        ingredients: 'breaded chicken cutlets, marinara sauce, spaghetti',
        action: "ri-more-2-fill"
    },
    {
        id: '#006',
        item: {
            img: 'images/restaurant/menu6.png',
            name: 'Mediterranean Chicken Spaghetti'
        },
        price: 15.99,
        ingredients: 'grilled chicken, olives, sun-dried tomatoes, feta',
        action: "ri-more-2-fill"
    },
    {
        id: '#005',
        item: {
            img: 'images/restaurant/menu5.png',
            name: 'Chicken Bolognese Spaghetti'
        },
        price: 14.75,
        ingredients: 'pan-fried chicken, capers, white wine sauce, lemon',
        action: "ri-more-2-fill"
    },
    {
        id: '#004',
        item: {
            img: 'images/restaurant/menu4.png',
            name: 'Thai Peanut Chicken Spaghetti'
        },
        price: 13.99,
        ingredients: 'spaghetti, chicken, crispy bacon, egg yolk, parmesan, cream',
        action: "ri-more-2-fill"
    },
    {
        id: '#003',
        item: {
            img: 'images/restaurant/menu3.png',
            name: 'Chicken Piccata Spaghetti'
        },
        price: 14.50,
        ingredients: 'shredded chicken, buffalo sauce, ranch dressing',
        action: "ri-more-2-fill"
    },
    {
        id: '#002',
        item: {
            img: 'images/restaurant/menu2.png',
            name: 'Chicken Carbonara Spaghetti'
        },
        price: 15.50,
        ingredients: 'grilled chicken, honey mustard glaze, spinach, garlic',
        action: "ri-more-2-fill"
    },
    {
        id: '#001',
        item: {
            img: 'images/restaurant/menu1.png',
            name: 'Buffalo Chicken'
        },
        price: 16.00,
        ingredients: 'pan-seared chicken, lemon zest, garlic butter, parsley',
        action: "ri-more-2-fill"
    }
];