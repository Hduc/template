import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';

@Component({
    selector: 'app-advanced-elements',
    imports: [RouterLink, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule, MatButtonModule, AdvancedFormComponent, NgxMaterialTimepickerModule],
    templateUrl: './advanced-elements.component.html',
    styleUrl: './advanced-elements.component.scss'
})
export class AdvancedElementsComponent {

    // ToppingList
    toppings = new FormControl('');
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}