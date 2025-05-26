import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-todays-appointments',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './todays-appointments.component.html',
    styleUrl: './todays-appointments.component.scss'
})
export class TodaysAppointmentsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}