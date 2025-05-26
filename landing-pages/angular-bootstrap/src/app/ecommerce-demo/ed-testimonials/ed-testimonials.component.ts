import { Component } from '@angular/core';
import { CtaComponent } from '../common/cta/cta.component';
import { ToggleService } from '../../settings/toggle.service';

@Component({
    selector: 'app-ed-testimonials',
    imports: [CtaComponent],
    templateUrl: './ed-testimonials.component.html',
    styleUrl: './ed-testimonials.component.scss'
})
export class EdTestimonialsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

}