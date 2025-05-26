import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-d-write-prescription',
    imports: [RouterLink, FileUploadModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule],
    templateUrl: './d-write-prescription.component.html',
    styleUrl: './d-write-prescription.component.scss'
})
export class DWritePrescriptionComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}