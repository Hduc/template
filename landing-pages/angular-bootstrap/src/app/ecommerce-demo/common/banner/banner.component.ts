import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-banner',
    imports: [RouterLink],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss'
})
export class BannerComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}