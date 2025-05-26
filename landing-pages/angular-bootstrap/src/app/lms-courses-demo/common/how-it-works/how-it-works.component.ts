import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-how-it-works',
    imports: [],
    templateUrl: './how-it-works.component.html',
    styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}