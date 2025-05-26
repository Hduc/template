import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-accounts-payable',
    imports: [MatCardModule],
    templateUrl: './accounts-payable.component.html',
    styleUrl: './accounts-payable.component.scss'
})
export class AccountsPayableComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}