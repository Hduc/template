import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-cta',
    imports: [RouterLink],
    templateUrl: './cta.component.html',
    styleUrl: './cta.component.scss'
})
export class CtaComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}