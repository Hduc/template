import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BasicFormComponent } from './basic-form/basic-form.component';

@Component({
    selector: 'app-basic-elements',
    imports: [RouterLink, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, BasicFormComponent],
    templateUrl: './basic-elements.component.html',
    styleUrl: './basic-elements.component.scss'
})
export class BasicElementsComponent {}