import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-d-patient-details',
    imports: [RouterLink, MatCardModule],
    templateUrl: './d-patient-details.component.html',
    styleUrl: './d-patient-details.component.scss'
})
export class DPatientDetailsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}