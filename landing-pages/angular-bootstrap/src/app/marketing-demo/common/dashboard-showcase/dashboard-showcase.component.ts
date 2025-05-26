import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-dashboard-showcase',
    imports: [],
    templateUrl: './dashboard-showcase.component.html',
    styleUrl: './dashboard-showcase.component.scss'
})
export class DashboardShowcaseComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}