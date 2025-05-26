import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-crypto-market-cap',
    imports: [MatCardModule],
    templateUrl: './crypto-market-cap.component.html',
    styleUrl: './crypto-market-cap.component.scss'
})
export class CryptoMarketCapComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}