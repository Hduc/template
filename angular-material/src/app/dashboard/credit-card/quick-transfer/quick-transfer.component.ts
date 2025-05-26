import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-quick-transfer',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './quick-transfer.component.html',
    styleUrl: './quick-transfer.component.scss'
})
export class QuickTransferComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}
    
}