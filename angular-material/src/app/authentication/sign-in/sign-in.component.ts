import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-sign-in',
    imports: [RouterLink, MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

    // Password Hide
    hide = true;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}