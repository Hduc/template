import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-new-bookings',
    imports: [MatCardModule],
    templateUrl: './new-bookings.component.html',
    styleUrl: './new-bookings.component.scss'
})
export class NewBookingsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}