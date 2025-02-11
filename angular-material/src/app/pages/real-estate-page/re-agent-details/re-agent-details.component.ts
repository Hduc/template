import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { PropertiesForSaleComponent } from './properties-for-sale/properties-for-sale.component';
import { PropertiesForRentComponent } from './properties-for-rent/properties-for-rent.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-re-agent-details',
    imports: [RouterLink, MatCardModule, MatButtonModule, PropertiesForSaleComponent, PropertiesForRentComponent],
    templateUrl: './re-agent-details.component.html',
    styleUrl: './re-agent-details.component.scss'
})
export class ReAgentDetailsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}