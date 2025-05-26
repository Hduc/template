import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-why-trezo',
    imports: [],
    templateUrl: './why-trezo.component.html',
    styleUrl: './why-trezo.component.scss'
})
export class WhyTrezoComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}