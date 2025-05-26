import { Component } from '@angular/core';
import { PageBannerComponent } from '../common/page-banner/page-banner.component';
import { RouterLink } from '@angular/router';
import { ToggleService } from '../../settings/toggle.service';

@Component({
    selector: 'app-lcd-checkout',
    imports: [PageBannerComponent, RouterLink],
    templateUrl: './lcd-checkout.component.html',
    styleUrl: './lcd-checkout.component.scss'
})
export class LcdCheckoutComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}