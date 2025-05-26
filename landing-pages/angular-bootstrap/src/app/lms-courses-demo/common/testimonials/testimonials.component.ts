import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-testimonials',
    imports: [],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}