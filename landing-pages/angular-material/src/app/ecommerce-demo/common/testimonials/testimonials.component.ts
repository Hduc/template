import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-testimonials',
    imports: [RouterLink, MatButtonModule],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}