import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-patient-appointments',
    imports: [RouterLink],
    templateUrl: './patient-appointments.component.html',
    styleUrl: './patient-appointments.component.scss'
})
export class PatientAppointmentsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}