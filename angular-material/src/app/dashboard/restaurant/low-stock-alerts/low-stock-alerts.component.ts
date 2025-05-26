import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-low-stock-alerts',
    imports: [MatCardModule, MatButtonModule, MatMenuModule, RouterLink],
    templateUrl: './low-stock-alerts.component.html',
    styleUrl: './low-stock-alerts.component.scss'
})
export class LowStockAlertsComponent {}