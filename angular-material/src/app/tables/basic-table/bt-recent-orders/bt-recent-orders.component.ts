import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-bt-recent-orders',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './bt-recent-orders.component.html',
    styleUrl: './bt-recent-orders.component.scss'
})
export class BtRecentOrdersComponent {}