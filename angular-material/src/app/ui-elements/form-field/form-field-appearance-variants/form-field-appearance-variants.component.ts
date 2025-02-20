import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-form-field-appearance-variants',
    imports: [MatFormFieldModule, MatInputModule, MatCardModule],
    templateUrl: './form-field-appearance-variants.component.html',
    styleUrl: './form-field-appearance-variants.component.scss'
})
export class FormFieldAppearanceVariantsComponent {}