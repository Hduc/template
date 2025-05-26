import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-new-customers',
    imports: [MatCardModule],
    templateUrl: './new-customers.component.html',
    styleUrl: './new-customers.component.scss'
})
export class NewCustomersComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}