import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TotalOrdersService } from './total-orders.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-total-orders',
    imports: [MatCardModule],
    templateUrl: './total-orders.component.html',
    styleUrl: './total-orders.component.scss'
})
export class TotalOrdersComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private totalOrdersService: TotalOrdersService
    ) {}

    ngOnInit(): void {
        this.totalOrdersService.loadChart();
    }

}