import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-account-settings',
    imports: [MatCardModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FileUploadModule],
    templateUrl: './account-settings.component.html',
    styleUrl: './account-settings.component.scss'
})
export class AccountSettingsComponent {

    // Select Value
    countrySelected = 'option1';
    skillsSelected = 'option2';
    professionSelected = 'option3';
    genderSelected = 'option1';

    // File Uploader
    public multiple: boolean = false;

}