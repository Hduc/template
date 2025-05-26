import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-check-out',
    imports: [MatCardModule],
    templateUrl: './check-out.component.html',
    styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}