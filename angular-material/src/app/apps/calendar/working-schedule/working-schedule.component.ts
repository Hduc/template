import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-working-schedule',
    imports: [MatCardModule, MatDatepickerModule, MatButtonModule, CarouselModule, MatFormFieldModule, MatInputModule, MatNativeDateModule],
    templateUrl: './working-schedule.component.html',
    styleUrl: './working-schedule.component.scss'
})
export class WorkingScheduleComponent {

	// Owl Carousel
    upcomingEventsSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-line'></i>",
			"<i class='ri-arrow-right-line'></i>"
		]
    }

    // Popup Trigger
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}