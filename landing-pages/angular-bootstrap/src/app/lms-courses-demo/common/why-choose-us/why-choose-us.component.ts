import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-why-choose-us',
    imports: [],
    templateUrl: './why-choose-us.component.html',
    styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}