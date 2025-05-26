import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PendingOrdersService } from './pending-orders.service';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-pending-orders',
    imports: [MatCardModule],
    templateUrl: './pending-orders.component.html',
    styleUrl: './pending-orders.component.scss'
})
export class PendingOrdersComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private pendingOrdersService: PendingOrdersService
    ) {}

    ngOnInit(): void {
        this.pendingOrdersService.loadChart();
    }

}