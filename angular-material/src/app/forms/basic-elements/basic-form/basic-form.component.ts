import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-basic-form',
    imports: [RouterLink, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule],
    templateUrl: './basic-form.component.html',
    styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {

    // Password Hide
    hide = true;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}