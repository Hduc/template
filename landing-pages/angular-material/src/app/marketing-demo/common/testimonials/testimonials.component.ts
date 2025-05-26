import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleService } from '../../../settings/toggle.service';

@Component({
    selector: 'app-testimonials',
    imports: [NgIf],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

    constructor(
        public toggleService: ToggleService
    ) {}

    // Video Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}