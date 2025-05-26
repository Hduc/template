import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-use-cases-ideal-users',
    imports: [],
    templateUrl: './use-cases-ideal-users.component.html',
    styleUrl: './use-cases-ideal-users.component.scss'
})
export class UseCasesIdealUsersComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}