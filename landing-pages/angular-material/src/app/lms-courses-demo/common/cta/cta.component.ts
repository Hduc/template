import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-cta',
    imports: [RouterLink, MatButtonModule],
    templateUrl: './cta.component.html',
    styleUrl: './cta.component.scss'
})
export class CtaComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}