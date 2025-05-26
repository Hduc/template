import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-bt-recent-leads',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule],
    templateUrl: './bt-recent-leads.component.html',
    styleUrl: './bt-recent-leads.component.scss'
})
export class BtRecentLeadsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}