import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-use-cases',
    imports: [],
    templateUrl: './use-cases.component.html',
    styleUrl: './use-cases.component.scss'
})
export class UseCasesComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}