import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-learners-organizations',
    imports: [],
    templateUrl: './learners-organizations.component.html',
    styleUrl: './learners-organizations.component.scss'
})
export class LearnersOrganizationsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}