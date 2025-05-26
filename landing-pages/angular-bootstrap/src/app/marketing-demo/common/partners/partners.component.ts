import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-partners',
    imports: [],
    templateUrl: './partners.component.html',
    styleUrl: './partners.component.scss'
})
export class PartnersComponent {

    constructor(
        public toggleService: ToggleService
    ) {}


}