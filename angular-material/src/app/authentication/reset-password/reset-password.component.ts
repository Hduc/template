import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-reset-password',
    imports: [RouterLink, MatButtonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

    // Password Hide
    hide = true;
    hide2 = true;
    hide3 = true;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}