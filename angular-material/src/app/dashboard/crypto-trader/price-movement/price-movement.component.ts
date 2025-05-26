import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PriceMovementService } from './price-movement.service';

@Component({
    selector: 'app-price-movement',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './price-movement.component.html',
    styleUrl: './price-movement.component.scss'
})
export class PriceMovementComponent {

    constructor(
        private priceMovementService: PriceMovementService
    ) {}

    ngOnInit(): void {
        this.priceMovementService.loadCharts();
    }

}