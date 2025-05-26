import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../../settings/toggle.service';
import { PageBannerComponent } from '../common/page-banner/page-banner.component';

@Component({
    selector: 'app-lcd-checkout',
    imports: [PageBannerComponent, RouterLink, MatInputModule, MatSelectModule, MatButtonModule],
    templateUrl: './lcd-checkout.component.html',
    styleUrl: './lcd-checkout.component.scss'
})
export class LcdCheckoutComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}