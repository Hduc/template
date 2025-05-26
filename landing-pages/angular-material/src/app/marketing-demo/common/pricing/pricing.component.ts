import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-pricing',
    imports: [MatButtonModule],
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss'
})
export class PricingComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}