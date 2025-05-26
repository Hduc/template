import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { QuantityCounterComponent } from './quantity-counter/quantity-counter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-order-details',
    imports: [RouterLink, MatCardModule, MatButtonModule, QuantityCounterComponent],
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}