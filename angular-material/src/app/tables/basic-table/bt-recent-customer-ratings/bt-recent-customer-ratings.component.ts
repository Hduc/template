import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-bt-recent-customer-ratings',
    imports: [MatCardModule, MatButtonModule, MatMenuModule],
    templateUrl: './bt-recent-customer-ratings.component.html',
    styleUrl: './bt-recent-customer-ratings.component.scss'
})
export class BtRecentCustomerRatingsComponent {}