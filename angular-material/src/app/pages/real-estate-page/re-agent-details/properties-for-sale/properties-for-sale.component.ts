import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PropertiesForSaleService } from './properties-for-sale.service';
import { CustomizerSettingsService } from '../../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-properties-for-sale',
    imports: [MatCardModule],
    templateUrl: './properties-for-sale.component.html',
    styleUrl: './properties-for-sale.component.scss'
})
export class PropertiesForSaleComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private propertiesForSaleService: PropertiesForSaleService
    ) {}

    ngOnInit(): void {
        this.propertiesForSaleService.loadChart();
    }

}