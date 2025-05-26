import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-accounts-receivable',
    imports: [MatCardModule],
    templateUrl: './accounts-receivable.component.html',
    styleUrl: './accounts-receivable.component.scss'
})
export class AccountsReceivableComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}